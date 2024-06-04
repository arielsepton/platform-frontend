/// <reference types="vite-plugin-svgr/client" />
import React, { Suspense } from "react";
import AppIcon from "../../assets/app-icon.svg?react";
import ArrowDown from "../../assets/arrow-down.svg?react";
import Typography from "components/Typography/Typography";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb/Breadcrumb";
import { APP_NAME } from "../../common/consts";
import { useRouter } from "@tanstack/react-router";
import { useAuth } from "../../hooks/useAuth";
import { lazy } from "react";

type HeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  user: string;
};

function DynamicLoader(thumbnail: number) {
  const MarkdownPreview = lazy(
    () =>
      import(`../../assets/account-thumbnails/color-${thumbnail}.svg?react`),
  );
  return (
    <Suspense fallback={<></>}>
      <MarkdownPreview />
    </Suspense>
  );
}

const Header = React.memo(({ breadcrumbs, user }: HeaderProps) => {
  const router = useRouter();
  const { signOut, thumbnail } = useAuth();

  const getFirstLetter: (input: string) => string = (input: string): string => {
    const match = input.match(/\d+([a-zA-Z])/);
    return match ? match[1] : "";
  };

  return (
    <div className="w-full text-left bg-mono/basic-16 h-17 items-center justify-between gap-4 flex">
      <nav aria-label="breadcrumb">
        <div className="flex w-fit flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 pl-5.5">
          <Typography>
            <AppIcon style={{ width: "32.26px", height: "32.26px" }} />
          </Typography>
          <Typography
            variant="headline-sm"
            className="text-mono/basic-4 pl-2.5 pr-4.25"
          >
            {APP_NAME}
          </Typography>
          <div className="flex cursor-pointer items-center antialiased transition-colors duration-100 bg-mono/basic-14 rounded-full h-fit">
            <div className="flex items-center py-2.25 pl-4 pr-5">
              {breadcrumbs.map((breadcrumb) => (
                <Breadcrumb breadcrumb={breadcrumb} key={breadcrumb.text} />
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="place-self-end flex items-center h-full pr-5.5">
        <div className="relative flex justify-center items-center">
          {DynamicLoader(thumbnail)}
          <div className="text-white absolute inset-0 flex justify-center items-center">
            {getFirstLetter(user).toUpperCase()}
          </div>
        </div>
        <div
          className="group flex items-center cursor-pointer"
          onClick={async () => {
            signOut();
            router.invalidate();
          }}
        >
          <Typography
            variant="body-md"
            className="text-mono/basic-4 pl-3 group-hover-white"
          >
            {user}
          </Typography>
          <Typography className="text-mono/basic-4 group-hover-white">
            <ArrowDown />
          </Typography>
        </div>
      </div>
    </div>
  );
});

export default Header;
