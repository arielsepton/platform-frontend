import { useRouterState } from "@tanstack/react-router";
import { Link, Navigate, useNavigate } from "@tanstack/react-router";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { BreadcrumbItem } from "components/Header/Breadcrumb/Breadcrumb";
import Header from "components/Header/Header";
import App from "src/App";

export const Route = createFileRoute("/_authenticated/projects")({
  component: Comp,
});

function Comp() {
  const router = useRouterState();
  const path = router.location.pathname.split("/").filter((i) => i);
  console.log(path);
  const breadcrumbs: BreadcrumbItem[] = [
    // { text: "Projects name", isDropdown: true, shouldAddDivider: true },
    // { text: "Application name" },
  ];
  // /projects/projectname/application/applicationName

  // TODO: make it better
  if (path.length == 1) {
    breadcrumbs.push({ text: "Projects overview" });
  } else {
    path.map((item, i) => {
      if (i % 2 != 0) {
        breadcrumbs.push({
          text: item,
          isDropdown: Boolean(i == 1),
          shouldAddDivider: Boolean(i == 3),
        });
      }
    });
  }

  console.log("here", router.location.pathname);
  console.log("path", path);
  return <App breadcrumbs={breadcrumbs} />;
}
