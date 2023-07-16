/**
 *
 * @returns {import("astro").AstroIntegration}
 */
export default function createIntegration() {
  // See the Integration API docs for full details
  // https://docs.astro.build/en/reference/integrations-reference/
  return {
    name: "@indiepub/comet",
    hooks: {
      "astro:config:setup": () => {
        // See the @astrojs/react integration for an example
        // https://github.com/withastro/astro/blob/main/packages/integrations/react/src/index.ts
      },
    },
  };
}
