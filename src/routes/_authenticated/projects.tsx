import { AnyRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { BreadcrumbItem } from "components/Header/Breadcrumb/Breadcrumb";
import Header from "components/Header/Header";
import { useState } from "react";
import { useAuth } from "src/hooks/useAuth";

export const Route: AnyRoute = createFileRoute("/_authenticated/projects")({
  component: () => {
    const router = useRouterState();

    const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
      const breadcrumbs: BreadcrumbItem[] = [];
      const pathSegments = pathname.split("/").filter((segment) => segment);

      if (pathSegments.length === 1) {
        return [{ text: "Projects overview" }];
      }

      if (pathSegments.length > 1) {
        breadcrumbs.push({ text: pathSegments[1], isDropdown: true });
        if (pathSegments.length > 3) {
          breadcrumbs.push({ text: pathSegments[3], shouldAddDivider: true });
        }
      }

      return breadcrumbs;
    };

    const [breadcrumbs, _] = useState(
      generateBreadcrumbs(router.location.pathname)
    );

    // TODO: where should i put this?
    const { username } = useAuth();

    return (
      <div className="h-screen flex flex-col">
        <div className="h-17">
          <Header breadcrumbs={breadcrumbs} user={username} />
        </div>

        <div className="w-full h-full flex">
          <Outlet />
        </div>
      </div>
    );
  },
});
