/// <reference types="vite-plugin-svgr/client" />
import Rectangle from "@/assets/rectangle18.svg?react";
import Typography from "@components/typography/Typography";
import React from "react";
import ReactDOM from "react-dom";

type Item = string | "divider";

interface MenuProps {
  items: Item[];
  isOpen: boolean;
  target: HTMLDivElement | null;
}

const Menu: React.FC<MenuProps> = React.memo(
  ({ items, isOpen, target }: MenuProps) => {
    return isOpen
      ? ReactDOM.createPortal(
          <div className="pointer-events-none relative ">
            <div className="pointer-events-auto absolute right-0 top-4">
              <div className=" w-56 rounded-md shadow-lg bg-mono/basic-10 border border-mono/basic-8 p-1">
                {items.map((item, i) =>
                  item !== "divider" ? (
                    <Typography
                      key={i}
                      variant="body-md"
                      className="text-mono/basic-4 px-1.5 py-1.25"
                    >
                      {item}
                    </Typography>
                  ) : (
                    <Typography key={i} className="p-1">
                      <Rectangle />
                    </Typography>
                  )
                )}
              </div>
            </div>
          </div>,
          target!
        )
      : null;
  }
);

export default Menu;
