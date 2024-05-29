import { createFileRoute } from "@tanstack/react-router";
import Container from "components/Container/Container";

export const Route = createFileRoute("/_authenticated/projects/")({
  component: () => <Container />,
});
