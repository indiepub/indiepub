import { z } from "zod";
import { baseEntrySchema } from "./base";

/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function noteSchema({ image }) {
  return baseEntrySchema({ image }).extend({
    type: z.literal("note").default("note"),
    "in-reply-to": z
      .string()
      .url()
      .describe("the URL which the entry is considered a reply to")
      .optional(),
    rsvp: z.enum(["yes", "maybe", "no", "interested"]).optional(),
    "like-of": z
      .string()
      .url()
      .describe('the URL which the entry is considered a "like" of')
      .optional(),
    "repost-of": z
      .string()
      .url()
      .describe('the URL which the entry is considered a "repost" of')
      .optional(),
    /* Draft properties */
    photo: z
      .string()
      .url()
      .or(image())
      .or(z.array(image().or(z.string().url())))
      .describe(
        "one or more photos that is/are considered the primary content of the entry"
      )
      .optional(),
    video: z
      .string()
      .or(z.array(z.string()))
      .describe(
        "one or more videos that is/are considered the primary content of the entry"
      )
      .optional(),
  });
}

/** @typedef { z.infer<ReturnType<typeof noteSchema>>} Note */
