import { createFileRoute } from "@tanstack/react-router";
import Login from "src/Pages/Login/Login";

export const Route = createFileRoute("/login")({
  component: Login,
});
