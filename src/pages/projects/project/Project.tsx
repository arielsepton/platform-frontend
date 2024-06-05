import { Outlet, useRouterState } from "@tanstack/react-router";
import Container from "@/components/container/Container";
import Sidebar from "@/components/sidebar/Sidebar";

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
