import React, { useCallback, useState } from "react";
import { sidebarItems } from "./items";
import SidebarItem from "./SidebarItem/SidebarItem";
import { isPathMatching } from "src/utils/isPathMatching";
import { Link } from "@tanstack/react-router";

export type SidebarProps = {
  currentPath: string;
};

const Sidebar = ({ currentPath }: SidebarProps) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsSidebarExpanded(!isSidebarExpanded);
  }, [isSidebarExpanded]);

  return (
    <div
      className={`top-0 left-0 flex-none transition-all duration-500 ${
        isSidebarExpanded ? "w-65" : "w-18"
      }`}
      onClick={toggleSidebar}
    >
      <div className="lg:block bg-mono/basic-13 h-full font-sans rounded-none border-none pt-9 gap-1 px-3">
        {sidebarItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <SidebarItem
              // selectedOption={isPathMatching(item.path, currentPath)}
              selectedOption={true}
              item={item}
              isSidebarExpanded={isSidebarExpanded}
              // key={item.label}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
