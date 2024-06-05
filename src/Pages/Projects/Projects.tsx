import { Outlet, useRouterState } from "@tanstack/react-router";
import { generateBreadcrumbs } from "@/components/header/breadcrumb/generateBreadcrumbs";
import Header from "@/components/header/Header";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const Projects: React.FC = () => {
  const router = useRouterState();
  const { username } = useAuth();

  const currentPath: string = router.location.pathname;
  const [breadcrumbs] = useState(generateBreadcrumbs(currentPath));

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
};

export default Projects;
