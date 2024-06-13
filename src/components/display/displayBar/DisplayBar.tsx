/// <reference types="vite-plugin-svgr/client" />
import Grid from "@/assets/grid.svg?react";
import Union from "@/assets/union.svg?react";
import Rectangle from "@/assets/rectangle2.svg?react";
import React, { ReactNode } from "react";
import SearchBox from "@components/searchBox/SearchBox";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Typography from "@components/typography/Typography";

type DisplayBarProps = {
  onSearch: SubmitHandler<FieldValues>;
  setDisplayGrid: React.Dispatch<React.SetStateAction<boolean>>;
  isDisplayGrid: boolean;
  success: boolean;
  children?: ReactNode;
};

const DisplayBar = React.memo(
  ({
    onSearch,
    setDisplayGrid,
    isDisplayGrid,
    success,
    children,
  }: DisplayBarProps) => {
    const {
      register,
      handleSubmit,
      formState: {},
    } = useForm();

    // const { mutateInstance: mutate } = useDataMutation<Project>("/auth", undefined, {
    //     onSuccess: async (response, user) => {
    //       const authData: AuthData = AuthData.fromJson(
    //         response.body as { token: string; user: string }
    //       );
    //       if (authData && authData.token) {
    //         signIn(authData.token, user.username);
    //         router.invalidate();
    //       }
    //     },
    //     onError: (error) => setError(error.message),
    //   });

    return (
      <div className="flex flex-row flex-nowrap w-full my-6">
        <form onSubmit={handleSubmit(onSearch)} className="grow items-center">
          <SearchBox
            disabled={!success}
            {...register("search")}
            autoComplete="search"
            placeholder="Search repositories and applications..."
          />
        </form>
        <div className=" flex items-center">
          <Typography className="px-3">
            <Rectangle />
          </Typography>
          <div onClick={() => setDisplayGrid(true)}>
            <Typography
              className={`rounded-l-lg p-2.25 border-y border-l border-mono/basic-11 cursor-pointer ${isDisplayGrid ? "text-mono/basic-1 bg-mono/basic-9" : "text-mono/basic-8 bg-mono/basic-13"}`}
            >
              <Grid />
            </Typography>
          </div>

          <div onClick={() => setDisplayGrid(false)}>
            <Typography
              className={`rounded-r-lg p-2.5 border border-mono/basic-11 cursor-pointer ${!isDisplayGrid ? "text-mono/basic-1 bg-mono/basic-9" : "text-mono/basic-8 bg-mono/basic-13"}`}
            >
              <Union />
            </Typography>
          </div>

          <Typography className="px-3">
            <Rectangle />
          </Typography>
          {children}
        </div>
      </div>
    );
  }
);

export default DisplayBar;
