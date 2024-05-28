import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth.ts";

export type AuthContext = ReturnType<typeof useAuth>;
export type RouterContext = {
  authentication: AuthContext;
};

const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <span>...loading...</span>,
  defaultErrorComponent: ({ error }) => <div>{`${error}`}</div>,
  defaultNotFoundComponent: () => <span>is a 404</span>,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

if (process.env.NODE_ENV === "development") {
  const { startMockServiceWorker } = await import("./mocks/browser.ts");
  startMockServiceWorker();
}

const authentication = useAuth();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} context={{ authentication }} />
  </React.StrictMode>
);
