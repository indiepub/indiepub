import { z } from "zod";
import { baseEntrySchema } from "./base";

/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function photoSchema({ image }) {
  return baseEntrySchema({ image }).extend({
    type: z.literal("photo").default("photo"),
    name: z
      .string()
      .describe("caption of the photo, often used for figure captions"),
    summary: z
      .string()
      .describe("description of the photo, often used for alt text")
      .optional(),
    photo: z
      .string()
      .url()
      .or(image())
      .or(z.array(image().or(z.string().url())))
      .transform((val) => (Array.isArray(val) ? val : [val]))
      .describe("src URL for the original image file"),
  });
}

/** @typedef { z.infer<ReturnType<typeof photoSchema>>} Photo */
