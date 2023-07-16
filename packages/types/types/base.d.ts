export function baseEntrySchema({ image }: {
    image: ImageFunction;
}): z.ZodObject<{
    published: z.ZodOptional<z.ZodDate>;
    updated: z.ZodOptional<z.ZodDate>;
    author: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodString]>, z.ZodObject<{
        name: z.ZodString;
        nickname: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        logo: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            src: import("zod").ZodString;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            format: import("zod").ZodUnion<[
                import("zod").ZodLiteral<"png">,
                import("zod").ZodLiteral<"jpg">,
                import("zod").ZodLiteral<"jpeg">,
                import("zod").ZodLiteral<"tiff">,
                import("zod").ZodLiteral<"webp">,
                import("zod").ZodLiteral<"gif">,
                import("zod").ZodLiteral<"svg">
            ]>;
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
        src: import("zod").ZodString;
        width: import("zod").ZodNumber;
        height: import("zod").ZodNumber;
        format: import("zod").ZodUnion<[
            import("zod").ZodLiteral<"png">,
            import("zod").ZodLiteral<"jpg">,
            import("zod").ZodLiteral<"jpeg">,
            import("zod").ZodLiteral<"tiff">,
            import("zod").ZodLiteral<"webp">,
            import("zod").ZodLiteral<"gif">,
            import("zod").ZodLiteral<"svg">
        ]>;
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
}>;
export function baseCardSchema({ image }: {
    image: ImageFunction;
}): z.ZodObject<{
    name: z.ZodString;
    nickname: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
        src: import("zod").ZodString;
        width: import("zod").ZodNumber;
        height: import("zod").ZodNumber;
        format: import("zod").ZodUnion<[
            import("zod").ZodLiteral<"png">,
            import("zod").ZodLiteral<"jpg">,
            import("zod").ZodLiteral<"jpeg">,
            import("zod").ZodLiteral<"tiff">,
            import("zod").ZodLiteral<"webp">,
            import("zod").ZodLiteral<"gif">,
            import("zod").ZodLiteral<"svg">
        ]>;
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
}>;
export type ImageFunction = () => import("zod").ZodObject<{
    src: import("zod").ZodString;
    width: import("zod").ZodNumber;
    height: import("zod").ZodNumber;
    format: import("zod").ZodUnion<[
        import("zod").ZodLiteral<"png">,
        import("zod").ZodLiteral<"jpg">,
        import("zod").ZodLiteral<"jpeg">,
        import("zod").ZodLiteral<"tiff">,
        import("zod").ZodLiteral<"webp">,
        import("zod").ZodLiteral<"gif">,
        import("zod").ZodLiteral<"svg">
    ]>;
}>;
export type BaseEntry = z.infer<ReturnType<typeof baseEntrySchema>>;
export type BaseCard = z.infer<ReturnType<typeof baseCardSchema>>;
import { z } from "zod";
//# sourceMappingURL=base.d.ts.map