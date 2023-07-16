import { defineConfig } from "astro/config";
import comet from "@inidepub/comet";

// https://astro.build/config
export default defineConfig({
  integrations: [comet()],
});
