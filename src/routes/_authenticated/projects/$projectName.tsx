import { createFileRoute } from "@tanstack/react-router";
import Project from "../../../Pages/Projects/Project/Project";

export const Route = createFileRoute("/_authenticated/projects/$projectName")({
  component: Project,
});
