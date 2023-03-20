/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      exclude: "",
      exportAsDefault: false,
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".json"],
  },
});
