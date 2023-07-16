/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function bookmarkSchema({ image }: {
    image: import("./base").ImageFunction;
}): z.ZodObject<{
    published: z.ZodOptional<z.ZodDate>;
    updated: z.ZodOptional<z.ZodDate>;
    author: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodString]>, z.ZodObject<{
        name: z.ZodString;
        nickname: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
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
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        nickname?: string;
        email?: string;
        logo?: string | {
            src?: string;
            width?: number;
            height?: number;
            format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
        };
        url?: string;
    }, {
        name?: string;
        nickname?: string;
        email?: string;
        logo?: string | {
            src?: string;
            width?: number;
            height?: number;
            format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
        };
        url?: string;
    }>]>>;
    category: z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>, string[], string | string[]>;
    featured: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
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
    type: z.ZodDefault<z.ZodLiteral<"bookmark">>;
    "bookmark-of": z.ZodString;
}, "strip", z.ZodTypeAny, {
    published?: Date;
    updated?: Date;
    author?: string | {
        name?: string;
        nickname?: string;
        email?: string;
        logo?: string | {
            src?: string;
            width?: number;
            height?: number;
            format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
        };
        url?: string;
    };
    category?: string[];
    featured?: string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    };
    type?: "bookmark";
    "bookmark-of"?: string;
}, {
    published?: Date;
    updated?: Date;
    author?: string | {
        name?: string;
        nickname?: string;
        email?: string;
        logo?: string | {
            src?: string;
            width?: number;
            height?: number;
            format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
        };
        url?: string;
    };
    category?: string | string[];
    featured?: string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    };
    type?: "bookmark";
    "bookmark-of"?: string;
}>;
export type Bookmark = z.infer<ReturnType<typeof bookmarkSchema>>;
import { z } from "zod";
//# sourceMappingURL=bookmark.d.ts.map