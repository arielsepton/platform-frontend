import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import "../index.css";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { RouterContext } from "src/main";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const [queryClient] = useState(() => new QueryClient());

    return (
      <>
        <Link to="/projects" />
        <Link to="/login" />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </>
    );
  },
});
