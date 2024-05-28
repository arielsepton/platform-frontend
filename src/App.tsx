/// <reference types="vite-plugin-svgr/client" />
import SideBar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";
import Button from "components/Button/Button";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import { BreadcrumbItem } from "components/Header/Breadcrumb/Breadcrumb";
import Plus from "../src/assets/plus.svg?react";
import Typography from "components/Typography/Typography";
import { Link, Outlet } from "@tanstack/react-router";

const breadcrumbs: BreadcrumbItem[] = [
  { text: "Projects name", isDropdown: true, shouldAddDivider: true },
  { text: "Application name" },
];

interface AppProps {
  breadcrumbs: BreadcrumbItem[];
}

// https://github.com/pmndrs/zustand
const App: React.FC<AppProps> = ({ breadcrumbs }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="h-17">
        <Header
          breadcrumbs={breadcrumbs}
          user={{ username: "dana israeli", thumbnail: 10 }}
        />
      </div>

      <div className="w-full h-full flex">
        <Outlet />
      </div>
    </div>
  );
};

export default App;

//  <Button
//   variant="link"
//   onClick={() => alert("Primary Button Clicked!")}
//   icon={<Plus />}
//   children="label"
// />

// {showModal && (
//   <Modal
//     setShowModal={setShowModal}
//     children={<div className="bg-black w-20">hi</div>}
//   />
// )}
