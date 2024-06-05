/// <reference types="vite-plugin-svgr/client" />
import ChevronLeft from "@/assets/chevron-left.svg?react";
import ChevronRight from "@/assets/chevron-right.svg?react";

import { useRouterState } from "@tanstack/react-router";
import { generateBreadcrumbs } from "@/components/header/breadcrumb/generateBreadcrumbs";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import { useDataQuery } from "@/hooks/useDataQuery";

const ProjectsOverview: React.FC = () => {
  const router = useRouterState();
  const { username } = useAuth();

  const currentPath: string = router.location.pathname;
  const { data, status, error } = useDataQuery("containerNames", "/apps");

  const projects = (data?.body as {
    containerNames: string[];
    count: number;
  }) || { containerNames: [] };
  console.log(data);
  console.log(error);
  console.log(status);

  return (
    <Container>
      <div className="mt-10 text-mono/basic-1 mx-10 w-full">
        <Typography variant="headline-xl">Projects Overview</Typography>
        <div className="w-full py-2.25 px-3 bg-mono/basic-11 my-6"></div>

        <div className="grid gap-3 grid-cols-3 auto-rows-max">
          {projects.containerNames.map((project, i) => (
            <div className="h-25 bg-mono/basic-16 w-100" key={i}></div>
          ))}
        </div>
        {/* if status is pending, dont show */}
        <div className="flex items-center justify-between my-5">
          <Typography variant="body-sm" className="text-mono/basic-4">
            Shows 9 of 92
          </Typography>
          <div className="flex">
            <Typography className={`body-sm text-mono/basic-4`}>
              <ChevronLeft />
            </Typography>
            <Typography
              variant="body-sm"
              className="text-mono/basic-4 flex items-center"
            >
              1 2 3 ... 8
            </Typography>
            <Typography className={`body-sm text-mono/basic-4`}>
              <ChevronRight />
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectsOverview;
