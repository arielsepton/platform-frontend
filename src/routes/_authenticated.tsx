import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    if (!context.isAuthenticated()) {
      throw redirect({ to: "/login" });
    }
  },
});
