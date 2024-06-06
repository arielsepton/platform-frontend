/// <reference types="vite-plugin-svgr/client" />
import ChevronLeft from "@/assets/chevron-left.svg?react";
import ChevronRight from "@/assets/chevron-right.svg?react";
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import { useDataQuery } from "@/hooks/useDataQuery";
import ProjectCard from "@components/projects/project/ProjectCard";

const ProjectsOverview: React.FC = () => {
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
      <div className="mt-10 text-mono/basic-1 mx-10 w-full max-h-full flex flex-col">
        <Typography variant="headline-xl">Projects Overview</Typography>
        <div className="w-full py-2.25 px-3 bg-mono/basic-11 my-6"></div>

        <div className="flex justify-center overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 h-full w-full">
            {projects.containerNames.map((_, i) => (
              <ProjectCard
                key={i}
                name="Project name"
                mador="mador name"
                anaf="anaf name"
              />
            ))}
          </div>
        </div>

        {/* if status is pending, dont show */}
        <div className="flex items-center justify-between my-5 h-4">
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
