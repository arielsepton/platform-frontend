import { AnyRoute } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import Projects from "src/Pages/Projects/Projects";

export const Route: AnyRoute = createFileRoute("/_authenticated/projects")({
  component: Projects,
});
