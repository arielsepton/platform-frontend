import Container from "@/components/container/Container";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_authenticated/projects/")({
  component: () => <Container />,
});
