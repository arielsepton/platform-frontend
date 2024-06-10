/// <reference types="vite-plugin-svgr/client" />
import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import MoreInfoDots from "@/assets/moreInfo_dots.svg?react";
import InformationCircle from "@/assets/information-circle.svg?react";
import Typography from "@components/typography/Typography";
import React from "react";

type RowProps = {
  item: string;
};

const Row = React.memo(({ item }: RowProps) => (
  <div className="flex bg-mono/basic-16 w-full justify-center mb-2 pl-5 py-4 border border-mono/basic-10 rounded-md h-full max-h-28">
    <div className="flex flex-row grow truncate">
      <div className="relative flex justify-center items-center">
        <Thumbnail />
        <div className="text-white absolute inset-0 flex justify-center items-center">
          {item[0].toUpperCase()}
        </div>
      </div>

      <div className="flex flex-col pl-3 flex-grow overflow-hidden justify-center">
        <Typography
          variant="headline-xs"
          className="text-mono/basic-1 truncate "
        >
          {item}
        </Typography>
      </div>
    </div>
    <div className="grow-0 flex place-items-center pr-5">
      <div className="flex flex-row pl-3 flex-grow overflow-hidden place-items-center">
        <Typography variant="label-md" className="text-mono/basic-5">
          Anaf name
        </Typography>

        <Typography variant="label-md" className="pl-6 text-mono/basic-5">
          Mador name
        </Typography>

        <Typography
          variant="headline-xs"
          className="text-mono/basic-4 truncate pl-5"
        >
          <InformationCircle />
        </Typography>
        <Typography
          variant="headline-xs"
          className="text-mono/basic-4 truncate pl-5"
        >
          <MoreInfoDots />
        </Typography>
      </div>
    </div>
  </div>
));

export default Row;
