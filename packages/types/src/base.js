import { z } from "zod";

/**
 * @callback ImageFunction
 * @returns {import("zod").ZodObject<{
 *  src: import("zod").ZodString
 *  width: import("zod").ZodNumber
 *  height: import("zod").ZodNumber
 *  format: import("zod").ZodUnion<[
 *      import("zod").ZodLiteral<"png">,
 *      import("zod").ZodLiteral<"jpg">,
 *      import("zod").ZodLiteral<"jpeg">,
 *      import("zod").ZodLiteral<"tiff">,
 *      import("zod").ZodLiteral<"webp">,
 *      import("zod").ZodLiteral<"gif">,
 *      import("zod").ZodLiteral<"svg">,
 *  ]>
 * }>}
 */

/**
 * @param {{
 *  image: ImageFunction
 * }} params
 */
export const baseEntrySchema = ({ image }) =>
  z.object({
    published: z
      .date({ coerce: true })
      .describe("when the entry was published")
      .optional(),
    updated: z
      .date({ coerce: true })
      .describe("when the entry was updated")
      .optional(),
    author: z
      .string()
      .or(z.string().url())
      .or(baseCardSchema({ image }))
      .describe("who wrote the entry, optionally embedded as a Card")
      .optional(),
    category: z
      .string()
      .min(1)
      .or(z.array(z.string().min(1)))
      .describe("entry categories/tags")
      .optional()
      .transform((val) => (Array.isArray(val) ? val : val ? [val] : [])),
    featured: z
      .string()
      .url()
      .or(image())
      .optional()
      .describe(
        "primary photo for an entry suitable for use in a link preview"
      ),
  });
/**
 * @typedef { z.infer<ReturnType<typeof baseEntrySchema>> } BaseEntry
 */

/**
 * @param {{
 *  image: ImageFunction
 * }} params
 */
export const baseCardSchema = ({ image }) =>
  z.object({
    name: z
      .string()
      .describe("The full/formatted name of the person or organization"),
    nickname: z.string().describe("nickname, alias, or handle").optional(),
    email: z.string().email().describe("email address").optional(),
    logo: z
      .string()
      .url()
      .or(image())
      .describe(
        "a logo representing the person or organization, e.g. avatar icon"
      )
      .optional(),
    url: z
      .string()
      .url()
      .describe(
        "home page or other URL representing the person or organization"
      )
      .optional(),
  });

/**
 * @typedef { z.infer<ReturnType<typeof baseCardSchema>> } BaseCard
 */
