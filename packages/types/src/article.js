import { z } from "zod";
import { baseEntrySchema } from "./base";

/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function articleSchema({ image }) {
  return baseEntrySchema({ image }).extend({
    type: z.literal("article").default("article"),
    name: z.string().describe("entry name/title"),
    summary: z.string().describe("short entry summary"),
    uid: z
      .string()
      .url()
      .describe(
        "canonical URL for the article, used if the article was originally published on another site"
      )
      .optional(),
  });
}

/** @typedef { z.infer<ReturnType<typeof articleSchema>>} Article */
