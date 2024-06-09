/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import ArrowDown from "@/assets/arrow-down.svg?react";
import Divider from "@/assets/divider.svg?react";
import Typography from "@/components/typography/Typography";

type BreadcrumbProps = {
  breadcrumb: BreadcrumbItem;
};

export type BreadcrumbItem = {
  text: string;
  isDropdown?: boolean;
  shouldAddDivider?: boolean;
};

const Breadcrumb = React.memo(({ breadcrumb }: BreadcrumbProps) => (
  <div className="flex items-center text-mono/basic-4">
    {breadcrumb.shouldAddDivider && (
      <Typography className=" px-4">
        <Divider />
      </Typography>
    )}
    <div className="flex group items-center gap-0.5	">
      <Typography variant="headline-xs" className="group-hover-white">
        {breadcrumb.text}
      </Typography>
      {breadcrumb.isDropdown && (
        <Typography className="group-hover-white">
          <ArrowDown />
        </Typography>
      )}
    </div>
  </div>
));

export default Breadcrumb;