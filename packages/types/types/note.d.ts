/**
 * @param {{ image: import("./base").ImageFunction }} param0
 */
export function noteSchema({ image }: {
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
    type: z.ZodDefault<z.ZodLiteral<"note">>;
    "in-reply-to": z.ZodOptional<z.ZodString>;
    rsvp: z.ZodOptional<z.ZodEnum<["yes", "maybe", "no", "interested"]>>;
    "like-of": z.ZodOptional<z.ZodString>;
    "repost-of": z.ZodOptional<z.ZodString>;
    photo: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodObject<{
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
    }>]>, z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
    }>, z.ZodString]>, "many">]>>;
    video: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
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
    type?: "note";
    "in-reply-to"?: string;
    rsvp?: "yes" | "maybe" | "no" | "interested";
    "like-of"?: string;
    "repost-of"?: string;
    photo?: string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    } | (string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    })[];
    video?: string | string[];
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
    type?: "note";
    "in-reply-to"?: string;
    rsvp?: "yes" | "maybe" | "no" | "interested";
    "like-of"?: string;
    "repost-of"?: string;
    photo?: string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    } | (string | {
        src?: string;
        width?: number;
        height?: number;
        format?: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
    })[];
    video?: string | string[];
}>;
export type Note = z.infer<ReturnType<typeof noteSchema>>;
import { z } from "zod";
//# sourceMappingURL=note.d.ts.map