import "./index.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth.ts";

export type RouterContext = {
  isAuthenticated: () => boolean;
};

const router = createRouter({
  routeTree,
  context: { isAuthenticated: undefined! },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  // defaultPendingComponent: () => <span>...loading...</span>,
  defaultErrorComponent: ({ error }) => <div>{`${error}`}</div>,
  defaultNotFoundComponent: () => <span>is a 404</span>,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const { isAuthenticated } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ isAuthenticated }} />
    </QueryClientProvider>
  );
}

export default App;

// https://github.com/pmndrs/zustand
