import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project site: https://tui-termul.github.io/landing-page/
const base = process.env.GITHUB_PAGES === "1" ? "/landing-page/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
