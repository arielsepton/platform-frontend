import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr(), TanStackRouterVite(), tsconfigPaths()],
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src/"),
    },
  },
});
