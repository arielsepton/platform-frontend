import { AnyRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { generateBreadcrumbs } from "components/Header/Breadcrumb/generateBreadcrumbs";
import Header from "components/Header/Header";
import { useState } from "react";
import { useAuth } from "src/hooks/useAuth";

export const Route: AnyRoute = createFileRoute("/_authenticated/projects")({
  component: () => {
    const router = useRouterState();
    const { username } = useAuth();

    const currentPath: string = router.location.pathname;
    const [breadcrumbs, _] = useState(generateBreadcrumbs(currentPath));

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
