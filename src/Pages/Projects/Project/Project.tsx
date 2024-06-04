import { Outlet, useRouterState } from "@tanstack/react-router";
import Container from "components/Container/Container";
import Sidebar from "components/Sidebar/Sidebar";

const Project: React.FC = () => {
  const router = useRouterState();
  return (
    <>
      <Sidebar currentPath={router.location.pathname} />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Project;
