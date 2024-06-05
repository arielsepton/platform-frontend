import { redirect } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import Login from "@/pages/login/Login";

export const Route = createFileRoute("/login")({
  beforeLoad: async ({ context }) => {
    if (context.isAuthenticated()) {
      throw redirect({ to: "/" });
    }
  },
  component: Login,
});
