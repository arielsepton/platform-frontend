/// <reference types="vite-plugin-svgr/client" />
import Grid from "@/assets/grid.svg?react";
import Union from "@/assets/union.svg?react";
import Rectangle from "@/assets/rectangle2.svg?react";
import Plus from "@/assets/plus.svg?react";
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import { useDataQuery } from "@/hooks/useDataQuery";
import Card from "@components/card/Card";
import SearchBox from "@components/searchBox/SearchBox";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import Button from "@components/button/Button";
import { keepPreviousData } from "@tanstack/react-query";
import Pagination from "@components/pagination/Pagination";
import DisplayGrid from "@components/display/displayGrid/DisplayGrid";
import DisplayList from "@components/display/displayList/DisplayList";

type Display = "grid" | "rows";

const ProjectsOverview: React.FC = React.memo(() => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data, isSuccess, error, isPlaceholderData } = useDataQuery(
    "/apps?page=" + currentPage,
    {
      placeholderData: keepPreviousData,
      queryKey: ["containerNames", currentPage],
    }
  );
  const { register, handleSubmit } = useForm();
  const [display, setDisplay] = useState<Display>("grid");
  const totalPages = isSuccess ? (data?.body as { count: number }).count : 0;

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
      <div className="mt-10 text-mono/basic-1 mx-10 w-full max-h-full flex flex-col">
        <Typography variant="headline-xl">Projects Overview</Typography>
        <div className="flex flex-row flex-nowrap w-full my-6">
          <form onSubmit={handleSubmit(onSearch)} className="grow items-center">
            <SearchBox
              disabled={status != "success"}
              {...register("search")}
              autoComplete="search"
              placeholder="Search repositories and applications..."
            />
          </form>
          <div className=" flex items-center">
            <Typography className="px-3">
              <Rectangle />
            </Typography>
            <div onClick={() => setDisplay("grid")}>
              <Typography
                className={`rounded-l-lg p-2.25 border-y border-l border-mono/basic-11 cursor-pointer ${display == "grid" ? "text-mono/basic-1 bg-mono/basic-9" : "text-mono/basic-8 bg-mono/basic-13"}`}
              >
                <Grid />
              </Typography>
            </div>

            <div onClick={() => setDisplay("rows")}>
              <Typography
                className={`rounded-r-lg p-2.5 border border-mono/basic-11 cursor-pointer ${display == "rows" ? "text-mono/basic-1 bg-mono/basic-9" : "text-mono/basic-8 bg-mono/basic-13"}`}
              >
                <Union />
              </Typography>
            </div>

            <Typography className="px-3">
              <Rectangle />
            </Typography>
            <Button
              variant="primary"
              icon={<Plus />}
              className="max-h-min truncate"
            >
              Add new project
            </Button>
          </div>
        </div>

        {!isSuccess && (
          <div className="flex justify-center w-full h-12">
            <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green/basic-6 border-t-transparent shadow-md"></div>
          </div>
        )}
        {isSuccess && (
          //   <DisplayGrid items={projects().containerNames}></DisplayGrid>
          <DisplayList items={projects().containerNames}></DisplayList>
        )}

        {isSuccess && (
          <div className="flex items-center justify-between my-5">
            <Typography variant="body-sm" className="text-mono/basic-4">
              Shows {9} of {totalPages}
            </Typography>
            <Pagination
              currentPage={currentPage}
              totalCount={totalPages}
              pageSize={9}
              onPageChange={(page) => setCurrentPage(page)}
              isPlaceholderData={isPlaceholderData}
            />
          </div>
        )}
      </div>
    </Container>
  );
});

export default ProjectsOverview;
