import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://evlb-dev.github.io/ukvport.github.io",
  integrations: [tailwind(), react()],
});