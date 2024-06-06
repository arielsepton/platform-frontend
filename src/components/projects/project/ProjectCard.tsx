/// <reference types="vite-plugin-svgr/client" />
import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import Typography from "@components/typography/Typography";
import { ReactNode } from "@tanstack/react-router";
import React from "react";

interface CardProps {
  name: string;
  anaf: string;
  mador: string;
}

const ProjectCard: React.FC<CardProps> = ({ name, anaf, mador }: CardProps) => (
  <div className="flex flex-none rounded-md bg-mono/basic-16 h-full max-h-28 py-7 pl-6 pr-2 sm:pr-2 md:pr-20 lg:pr-40 xl:pr-40 2xl:pr-40 flex-col border border-mono/basic-10 w-full">
    <div className="flex flex-row">
      <div className="relative flex justify-center items-center">
        <Thumbnail />
        <div className="text-white absolute inset-0 flex justify-center items-center">
          {name[0].toUpperCase()}
        </div>
      </div>

      <div className="flex flex-col pl-2.25 flex-grow overflow-hidden">
        <Typography
          variant="headline-xs"
          className="text-mono/basic-1 mb-1 truncate"
        >
          {name}
        </Typography>
        <Typography variant="label-md" className="text-mono/basic-5 truncate">
          {anaf} | {mador}
        </Typography>
      </div>
    </div>
  </div>
);

export default ProjectCard;
