import { z } from "zod";
import { baseEntrySchema } from "./base";

/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function bookmarkSchema({ image }) {
  return baseEntrySchema({ image }).extend({
    type: z.literal("bookmark").default("bookmark"),
    /* Proposed properties */
    "bookmark-of": z
      .string()
      .url()
      .describe("original URL the entry is considered a bookmark of"),
  });
}

/** @typedef { z.infer<ReturnType<typeof bookmarkSchema>>} Bookmark */
