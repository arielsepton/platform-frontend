import {
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import Container from "components/Container/Container";
import SideBar from "components/Sidebar/Sidebar";

export const Route = createFileRoute("/_authenticated/projects/$projectName")({
  beforeLoad: async ({ params }) => {
    console.log(params.projectName);
  },
  component: () => {
    const router = useRouterState();
    return (
      <>
        <SideBar currentPath={router.location.pathname} />
        <Container>
          <Outlet />
        </Container>
      </>
    );
  },
});
