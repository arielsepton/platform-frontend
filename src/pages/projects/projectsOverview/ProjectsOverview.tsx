/// <reference types="vite-plugin-svgr/client" />
import Plus from "@/assets/plus.svg?react";
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import { useDataQuery } from "@/hooks/useDataQuery";
import { FieldValues, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { keepPreviousData } from "@tanstack/react-query";
import Pagination from "@components/pagination/Pagination";
import DisplayGrid from "@components/display/displayGrid/DisplayGrid";
import DisplayList from "@components/display/displayList/DisplayList";
import DisplayBar from "@components/display/displayBar/DisplayBar";
import Button from "@components/button/Button";
import AddProjectModal from "@components/projects/project/addProjectModal/AddProjectModal";
import Spinner from "@components/spinner/Spinner";
import ProjectCard from "@components/projects/project/card/ProjectCard";
import ProjectRow from "@components/projects/project/row/ProjectRow";
import NoProjects from "@components/projects/project/noProjects/NoProjects";

const ProjectsOverview: React.FC = React.memo(() => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data, isSuccess, isLoading, error, isPlaceholderData } = useDataQuery(
    "/apps/" + currentPage,
    {
      placeholderData: keepPreviousData,
      queryKey: ["containerNames", currentPage],
    }
  );
  const [isDisplayGrid, setDisplayGrid] = useState<boolean>(true);
  const totalPages = isSuccess
    ? (data?.body as { totalCount: number }).totalCount
    : 0;
  const currentAmount = isSuccess ? (data?.body as { count: number }).count : 0;

  const [showModal, setShowModal] = useState(false);

  const projects: () => {
    containerNames: string[];
  } = () => {
    return (
      (data?.body as {
        containerNames: string[];
      }) || { containerNames: [] }
    );
  };

  console.log(data);
  console.log(error);
  console.log(currentPage);

  const onSearch: SubmitHandler<FieldValues> = async ({ search }) => {
    console.log(search);
  };

  return (
    <Container>
      <div className="mt-10 text-mono/basic-1 mx-10 w-full flex flex-col">
        <div className="max-h-1/4">
          <Typography variant="headline-xl">Projects Overview</Typography>
          <DisplayBar
            success={isSuccess}
            onSearch={onSearch}
            isDisplayGrid={isDisplayGrid}
            setDisplayGrid={setDisplayGrid}
          >
            <Button
              variant="primary"
              icon={<Plus />}
              className="max-h-min truncate"
              onClick={() => setShowModal((prev) => !prev)}
            >
              Add new project
            </Button>
          </DisplayBar>
        </div>

        {isLoading ? (
          <Spinner />
        ) : isSuccess && projects().containerNames.length > 0 ? (
          <>
            <div
              id="scroll"
              className="flex justify-center overflow-y-scroll grow-0 max-h-[65%] h-[65%] min-h-[65%]"
            >
              {isDisplayGrid ? (
                <DisplayGrid>
                  {projects().containerNames.map((_, i) => (
                    <ProjectCard
                      name="project name"
                      anaf="anaf name"
                      mador="mador name"
                    />
                  ))}
                </DisplayGrid>
              ) : (
                <DisplayList>
                  {projects().containerNames.map((_, i) => (
                    <ProjectRow
                      name="project name"
                      anaf="anaf name"
                      mador="mador name"
                    />
                  ))}
                </DisplayList>
              )}
            </div>
            <div className="flex items-center justify-between h-[10%]">
              <Typography variant="body-sm" className="text-mono/basic-4">
                Shows {currentAmount} of {totalPages}
              </Typography>
              <Pagination
                currentPage={currentPage}
                totalCount={totalPages}
                pageSize={9}
                onPageChange={(page) => setCurrentPage(page)}
                isPlaceholderData={isPlaceholderData}
              />
            </div>
          </>
        ) : (
          <NoProjects className="max-h-[65%] h-[65%] min-h-[65%]" />
        )}
      </div>
      {showModal && (
        <AddProjectModal setShowModal={setShowModal}></AddProjectModal>
      )}
    </Container>
  );
});

export default ProjectsOverview;
