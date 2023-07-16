import { z } from "zod";
import { baseCardSchema } from "./base";

/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function personSchema({ image }) {
  return baseCardSchema({ image }).extend({
    type: z.literal("person").default("person"),
  });
}

/** @typedef { z.infer<ReturnType<typeof personSchema>>} Person */
