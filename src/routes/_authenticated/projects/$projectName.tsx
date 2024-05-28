import { Outlet, createFileRoute } from "@tanstack/react-router";
import Container from "components/Container/Container";
import SideBar from "components/Sidebar/Sidebar";

export const Route = createFileRoute("/_authenticated/projects/$projectName")({
  beforeLoad: async ({ params }) => {
    console.log(params.projectName);
  },
  component: () => {
    return (
      <>
        <SideBar />
        <Container>
          <Outlet />
        </Container>
      </>
    );
  },
});
