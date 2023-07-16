import { defineConfig } from "astro/config";
import comet from "@indiepub/comet";

// https://astro.build/config
export default defineConfig({
  integrations: [comet()],
});
