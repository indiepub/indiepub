/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function articleSchema({ image }: {
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
    type: z.ZodDefault<z.ZodLiteral<"article">>;
    name: z.ZodString;
    summary: z.ZodString;
    uid: z.ZodOptional<z.ZodString>;
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
    type?: "article";
    name?: string;
    summary?: string;
    uid?: string;
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
    type?: "article";
    name?: string;
    summary?: string;
    uid?: string;
}>;
export type Article = z.infer<ReturnType<typeof articleSchema>>;
import { z } from "zod";
//# sourceMappingURL=article.d.ts.map