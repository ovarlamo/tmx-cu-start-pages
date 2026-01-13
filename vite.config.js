import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/tmx-cu-start-pages/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
