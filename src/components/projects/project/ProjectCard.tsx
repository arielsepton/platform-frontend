/// <reference types="vite-plugin-svgr/client" />
import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import MoreInfoDots from "@/assets/moreInfo_dots.svg?react";
import Typography from "@components/typography/Typography";
import React from "react";

interface CardProps {
  name: string;
  anaf: string;
  mador: string;
}

const ProjectCard: React.FC<CardProps> = ({ name, anaf, mador }: CardProps) => (
  <div className="flex flex-col rounded-md bg-mono/basic-16 border border-mono/basic-10 w-full h-full max-h-28">
    <div className="flex items-center pr-2 pt-2 flex-none ml-auto">
      <MoreInfoDots />
    </div>
    <div className="flex flex-none pl-5 pb-8 flex-col flex-grow overflow-hidden">
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
  </div>
);

export default ProjectCard;
