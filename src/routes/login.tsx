import { redirect } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import Login from "src/Pages/Login/Login";

export const Route = createFileRoute("/login")({
  beforeLoad: async ({ context }) => {
    if (context.isAuthenticated()) {
      throw redirect({ to: "/" });
    }
  },
  component: Login,
});
