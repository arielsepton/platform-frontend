/// <reference types="vite-plugin-svgr/client" />
import Rectangle from "@/assets/rectangle18.svg?react";
import Typography from "@components/typography/Typography";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

type Item = string | "divider";

interface MenuProps {
  items: Item[];
  isOpen: boolean;
  toggleButtonRef: React.RefObject<HTMLDivElement>;
}

const Menu: React.FC<MenuProps> = React.memo(
  ({ items, isOpen, toggleButtonRef }: MenuProps) => {
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const toggleButton = toggleButtonRef.current;
      const menuElement = menuRef.current;

      if (toggleButton && menuElement) {
        const rect = toggleButton.getBoundingClientRect();
        const leftPosition = rect.left - rect.width * 8;
        setMenuPosition({
          top: rect.top + rect.height / 2,
          left: leftPosition,
        });
      }
    }, [isOpen, menuPosition, toggleButtonRef]);

    return isOpen
      ? ReactDOM.createPortal(
          <div
            ref={menuRef}
            className="pointer-events-none fixed"
            style={{ top: menuPosition.top, left: menuPosition.left }}
          >
            <div className="pointer-events-auto">
              <div className="mt-4 mr-10 w-56 rounded-md shadow-lg bg-mono/basic-10 border border-mono/basic-8 p-1">
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
          document.getElementById("menu-root")!
        )
      : null;
  }
);

export default Menu;
