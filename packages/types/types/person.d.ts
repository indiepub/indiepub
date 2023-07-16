/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function personSchema({ image }: {
    image: import("./base").ImageFunction;
}): z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    nickname: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
        src: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        format: z.ZodUnion<[z.ZodLiteral<"png">, z.ZodLiteral<"jpg">, z.ZodLiteral<"jpeg">, z.ZodLiteral<"tiff">, z.ZodLiteral<"webp">, z.ZodLiteral<"gif">, z.ZodLiteral<"svg">]>;
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    }, {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    }>]>>;
    type: z.ZodDefault<z.ZodLiteral<"person">>;
}, "strip", z.ZodTypeAny, {
    email?: string;
    url?: string;
    name?: string;
    nickname?: string;
    logo?: string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    };
    type?: "person";
}, {
    email?: string;
    url?: string;
    name?: string;
    nickname?: string;
    logo?: string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    };
    type?: "person";
}>;
export type Person = z.infer<ReturnType<typeof personSchema>>;
import { z } from "zod";
//# sourceMappingURL=person.d.ts.map