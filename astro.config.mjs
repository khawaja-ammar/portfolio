import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: cloudflare(),
  site: "https://ammarkhawaja.pages.dev/",
  integrations: [tailwind(), sitemap()],
});
