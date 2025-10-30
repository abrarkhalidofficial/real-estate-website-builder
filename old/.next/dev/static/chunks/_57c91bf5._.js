(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/templates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPageDataFromTemplate",
    ()=>createPageDataFromTemplate,
    "templates",
    ()=>templates
]);
const hero = (overrides)=>({
        type: "hero",
        heading: "Create Your Real Estate Website Easily",
        subheading: "Beautiful templates, live editing, and instant export.",
        ctaLabel: "View Templates",
        ctaHref: "#templates",
        bgType: "image",
        bgSrc: "/images/templates/hero.jpg",
        overlayOpacity: 0.4,
        ...overrides
    });
const listings = (overrides)=>({
        type: "listings",
        properties: [],
        layout: "grid",
        categories: [
            "Villas",
            "Apartments",
            "Commercial"
        ],
        ...overrides
    });
const about = (overrides)=>({
        type: "about",
        richText: "We deliver premium real estate experiences with transparency and trust.",
        teamPhotos: [],
        ...overrides
    });
const faq = (overrides)=>({
        type: "faq",
        items: [
            {
                q: "How do I get started?",
                a: "Pick a template and start editing in the builder."
            },
            {
                q: "Can I export my site?",
                a: "Yes, export as static HTML or React/Next components."
            }
        ],
        ...overrides
    });
const testimonials = (overrides)=>({
        type: "testimonials",
        items: [
            {
                name: "Aisha",
                quote: "The builder made our site launch effortless!"
            },
            {
                name: "Bilal",
                quote: "Beautiful templates and easy customization."
            }
        ],
        ...overrides
    });
const portal = (overrides)=>({
        type: "portal",
        heading: "Contact Us",
        showContactForm: true,
        ...overrides
    });
const templates = {
    luxuryVillas: {
        id: "luxuryVillas",
        name: "Luxury Villas",
        theme: "system",
        sections: [
            hero({
                bgType: "video",
                bgSrc: "/images/templates/villas.mp4"
            }),
            listings(),
            about(),
            testimonials()
        ],
        seo: {
            title: "Luxury Villas",
            description: "Premium villas and estates."
        }
    },
    commercialProperties: {
        id: "commercialProperties",
        name: "Commercial Properties",
        theme: "system",
        sections: [
            hero({
                heading: "Find Your Next Office"
            }),
            listings({
                categories: [
                    "Office",
                    "Retail",
                    "Warehouse"
                ]
            }),
            faq(),
            portal()
        ],
        seo: {
            title: "Commercial Properties",
            description: "Office, retail, and warehouse spaces."
        }
    },
    housingSociety: {
        id: "housingSociety",
        name: "Housing Society",
        theme: "system",
        sections: [
            hero({
                heading: "Welcome to Our Community"
            }),
            about({
                richText: "Amenities and community living."
            }),
            listings(),
            faq(),
            testimonials(),
            portal()
        ],
        seo: {
            title: "Housing Society",
            description: "Plots and homes in a vibrant society."
        }
    }
};
function createPageDataFromTemplate(templateId) {
    const t = templates[templateId];
    return {
        id: `${templateId}-${Date.now()}`,
        name: t.name,
        theme: t.theme,
        sections: t.sections,
        seo: t.seo,
        templateId: t.id,
        updatedAt: new Date().toISOString()
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function HeroSection(props) {
    const { heading, subheading, ctaLabel, ctaHref, bgType = "image", bgSrc, overlayOpacity = 0.35 } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative grid min-h-[40vh] place-items-center overflow-hidden",
        children: [
            bgSrc && (bgType === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "absolute inset-0 h-full w-full object-cover",
                src: bgSrc,
                autoPlay: true,
                loop: true,
                muted: true
            }, void 0, false, {
                fileName: "[project]/components/site/hero.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "absolute inset-0 h-full w-full object-cover",
                src: bgSrc,
                alt: "Hero background"
            }, void 0, false, {
                fileName: "[project]/components/site/hero.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `rgba(0,0,0,${overlayOpacity})`
                }
            }, void 0, false, {
                fileName: "[project]/components/site/hero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-white md:text-5xl",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/components/site/hero.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    subheading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-white/90",
                        children: subheading
                    }, void 0, false, {
                        fileName: "[project]/components/site/hero.tsx",
                        lineNumber: 23,
                        columnNumber: 24
                    }, this),
                    ctaLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: ctaHref,
                        className: "mt-6 inline-block rounded bg-white/90 px-4 py-2 text-sm font-medium text-black",
                        children: ctaLabel
                    }, void 0, false, {
                        fileName: "[project]/components/site/hero.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/hero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/hero.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FAQSection({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-3xl px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-2xl font-semibold",
                children: "FAQs"
            }, void 0, false, {
                fileName: "[project]/components/site/faq.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: items?.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium",
                                children: it.q
                            }, void 0, false, {
                                fileName: "[project]/components/site/faq.tsx",
                                lineNumber: 8,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-300",
                                children: it.a
                            }, void 0, false, {
                                fileName: "[project]/components/site/faq.tsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/site/faq.tsx",
                        lineNumber: 7,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/site/faq.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/faq.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/puck-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PuckProvider",
    ()=>PuckProvider,
    "mapPuckDataToPageData",
    ()=>mapPuckDataToPageData,
    "puckConfig",
    ()=>puckConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$measured$2b$puck$40$0$2e$20$2e$2_$40$type_b02df57a17d57a8d70437d13b4a77fb7$2f$node_modules$2f40$measured$2f$puck$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@measured+puck@0.20.2_@type_b02df57a17d57a8d70437d13b4a77fb7/node_modules/@measured/puck/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$measured$2b$puck$40$0$2e$20$2e$2_$40$type_b02df57a17d57a8d70437d13b4a77fb7$2f$node_modules$2f40$measured$2f$puck$2f$dist$2f$chunk$2d$QIGVND56$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@measured+puck@0.20.2_@type_b02df57a17d57a8d70437d13b4a77fb7/node_modules/@measured/puck/dist/chunk-QIGVND56.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/faq.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const puckConfig = {
    components: {
        Hero: {
            fields: {
                heading: {
                    type: "text",
                    label: "Heading"
                },
                subheading: {
                    type: "textarea",
                    label: "Subheading"
                },
                ctaLabel: {
                    type: "text",
                    label: "CTA Label"
                },
                ctaHref: {
                    type: "text",
                    label: "CTA Href"
                },
                bgType: {
                    type: "select",
                    label: "Background Type",
                    options: [
                        {
                            label: "Image",
                            value: "image"
                        },
                        {
                            label: "Video",
                            value: "video"
                        }
                    ]
                },
                bgSrc: {
                    type: "text",
                    label: "Background Src"
                },
                overlayOpacity: {
                    type: "number",
                    label: "Overlay Opacity"
                },
                id: {
                    type: "text",
                    label: "Component Id"
                }
            },
            render: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                    heading: props.heading,
                    subheading: props.subheading,
                    ctaLabel: props.ctaLabel,
                    ctaHref: props.ctaHref,
                    bgType: props.bgType,
                    bgSrc: props.bgSrc,
                    overlayOpacity: props.overlayOpacity
                }, void 0, false, {
                    fileName: "[project]/components/editor/puck-provider.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
            defaultProps: {
                heading: "Welcome to Our Properties",
                subheading: "Discover luxury homes and prime commercial spaces.",
                ctaLabel: "Explore Listings",
                ctaHref: "/listings",
                bgType: "image",
                bgSrc: "/images/hero.jpg",
                overlayOpacity: 0.4,
                id: "Hero-1"
            }
        },
        FAQ: {
            fields: {
                items: {
                    type: "array",
                    label: "FAQ Items",
                    arrayFields: {
                        q: {
                            type: "text",
                            label: "Question"
                        },
                        a: {
                            type: "textarea",
                            label: "Answer"
                        }
                    }
                },
                id: {
                    type: "text",
                    label: "Component Id"
                }
            },
            render: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQSection"], {
                    items: props.items
                }, void 0, false, {
                    fileName: "[project]/components/editor/puck-provider.tsx",
                    lineNumber: 81,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0)),
            defaultProps: {
                items: [
                    {
                        q: "What properties are available?",
                        a: "We offer a wide range of residential and commercial properties."
                    },
                    {
                        q: "How do I schedule a viewing?",
                        a: "Contact our agents through the portal to schedule a visit."
                    }
                ],
                id: "FAQ-1"
            }
        }
    }
};
// Helpers to map between our PageData.sections and Puck's Data.content
function sectionToComponentData(section, index) {
    switch(section.type){
        case "hero":
            return {
                type: "Hero",
                props: {
                    id: `Hero-${index + 1}`,
                    heading: section.heading,
                    subheading: section.subheading,
                    ctaLabel: section.ctaLabel,
                    ctaHref: section.ctaHref,
                    bgType: section.bgType,
                    bgSrc: section.bgSrc,
                    overlayOpacity: section.overlayOpacity
                }
            };
        case "faq":
            return {
                type: "FAQ",
                props: {
                    id: `FAQ-${index + 1}`,
                    items: section.items
                }
            };
        default:
            // Unsupported blocks are ignored for Puck for now
            return null;
    }
}
function mapSectionsToPuckData(page) {
    const content = page.sections.map(sectionToComponentData).filter(Boolean);
    return {
        content,
        root: {
            props: {
                title: page.name ?? "Untitled"
            }
        },
        zones: {}
    };
}
function componentDataToSection(item) {
    switch(item.type){
        case "Hero":
            return {
                type: "hero",
                heading: item.props?.heading ?? "",
                subheading: item.props?.subheading,
                ctaLabel: item.props?.ctaLabel,
                ctaHref: item.props?.ctaHref,
                bgType: item.props?.bgType ?? "image",
                bgSrc: item.props?.bgSrc,
                overlayOpacity: item.props?.overlayOpacity ?? 0.4
            };
        case "FAQ":
            return {
                type: "faq",
                items: Array.isArray(item.props?.items) ? item.props.items : []
            };
        default:
            return null;
    }
}
function mapPuckDataToPageData(data, existing) {
    const content = Array.isArray(data.content) ? data.content : [];
    const sections = content.map((item)=>componentDataToSection(item)).filter(Boolean);
    return {
        ...existing ?? {
            id: `page-${Date.now()}`,
            name: data.root?.props?.title ?? "Untitled",
            theme: "system",
            sections: [],
            seo: undefined,
            templateId: "",
            updatedAt: new Date().toISOString()
        },
        sections,
        updatedAt: new Date().toISOString()
    };
}
function PuckProvider({ data, onPublish }) {
    _s();
    const initialData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PuckProvider.useMemo[initialData]": ()=>mapSectionsToPuckData(data)
    }["PuckProvider.useMemo[initialData]"], [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border rounded-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$measured$2b$puck$40$0$2e$20$2e$2_$40$type_b02df57a17d57a8d70437d13b4a77fb7$2f$node_modules$2f40$measured$2f$puck$2f$dist$2f$chunk$2d$QIGVND56$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Puck"], {
            config: puckConfig,
            data: initialData,
            onPublish: (published)=>{
                // Convert Puck data back into our PageData shape
                const pageData = mapPuckDataToPageData(published, data);
                onPublish?.(pageData);
            }
        }, void 0, false, {
            fileName: "[project]/components/editor/puck-provider.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/editor/puck-provider.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(PuckProvider, "nQYQPBYmBdSqZqddWG8eTISBUQM=");
_c = PuckProvider;
var _c;
__turbopack_context__.k.register(_c, "PuckProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Client-only LocalStorage helpers with safe guards
__turbopack_context__.s([
    "getLastProjectId",
    ()=>getLastProjectId,
    "getProjectsIndex",
    ()=>getProjectsIndex,
    "loadProject",
    ()=>loadProject,
    "saveProject",
    ()=>saveProject
]);
const LS_INDEX_KEY = "projects:index";
const LS_LAST_KEY = "projects:lastId";
function isBrowser() {
    return ("TURBOPACK compile-time value", "object") !== "undefined" && typeof window.localStorage !== "undefined";
}
function saveProject(id, data, name) {
    if (!isBrowser()) return;
    const updatedAt = new Date().toISOString();
    window.localStorage.setItem(`projects:${id}`, JSON.stringify(data));
    const raw = window.localStorage.getItem(LS_INDEX_KEY);
    const index = raw ? JSON.parse(raw) : [];
    const existingIdx = index.findIndex((i)=>i.id === id);
    const item = {
        id,
        name,
        updatedAt
    };
    if (existingIdx >= 0) index[existingIdx] = {
        ...index[existingIdx],
        ...item
    };
    else index.push(item);
    window.localStorage.setItem(LS_INDEX_KEY, JSON.stringify(index));
    window.localStorage.setItem(LS_LAST_KEY, id);
}
function loadProject(id) {
    if (!isBrowser()) return null;
    const raw = window.localStorage.getItem(`projects:${id}`);
    return raw ? JSON.parse(raw) : null;
}
function getProjectsIndex() {
    if (!isBrowser()) return [];
    const raw = window.localStorage.getItem(LS_INDEX_KEY);
    return raw ? JSON.parse(raw) : [];
}
function getLastProjectId() {
    if (!isBrowser()) return null;
    return window.localStorage.getItem(LS_LAST_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBuilderStore",
    ()=>useBuilderStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.8_@types+react@19.2.2_react@19.2.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
"use client";
;
;
const useBuilderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        pageData: null,
        setPageData: (data)=>set({
                pageData: data
            }),
        updateSections: (sections)=>{
            const current = get().pageData;
            if (!current) return;
            set({
                pageData: {
                    ...current,
                    sections,
                    updatedAt: new Date().toISOString()
                }
            });
        },
        setTheme: (theme)=>{
            const current = get().pageData;
            if (!current) return;
            set({
                pageData: {
                    ...current,
                    theme
                }
            });
        },
        saveCurrent: ()=>{
            const current = get().pageData;
            if (!current) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveProject"])(current.id, current, current.name);
        },
        loadById: (id)=>{
            const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadProject"])(id);
            if (data) set({
                pageData: data
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/builder/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuilderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$puck$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/puck-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BuilderPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const templateParam = params.get("template") ?? "luxuryVillas";
    const initialData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuilderPage.useMemo[initialData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPageDataFromTemplate"])(templateParam)
    }["BuilderPage.useMemo[initialData]"], [
        templateParam
    ]);
    const { pageData, setPageData, updateSections, saveCurrent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuilderStore"])();
    // Initialize store on first render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuilderPage.useEffect": ()=>{
            if (!pageData) {
                setPageData(initialData);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BuilderPage.useEffect"], [
        initialData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b px-4 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Template: ",
                            templateParam
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/builder/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded bg-zinc-900 px-3 py-1 text-sm text-white dark:bg-white dark:text-black",
                                onClick: ()=>{
                                    if (!pageData) return;
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveProject"])(pageData.id, pageData, pageData.name);
                                    alert("Saved to LocalStorage");
                                },
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/app/builder/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            pageData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/preview?id=${encodeURIComponent(pageData.id)}`,
                                className: "rounded border px-3 py-1 text-sm",
                                title: "Open Preview",
                                children: "Preview"
                            }, void 0, false, {
                                fileName: "[project]/app/builder/page.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/builder/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/builder/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$puck$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PuckProvider"], {
                data: pageData ?? initialData,
                onPublish: (nextPage)=>{
                    // nextPage is PageData produced from Puck content
                    updateSections(nextPage.sections);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveProject"])(nextPage.id, nextPage, nextPage.name);
                    alert("Published & Saved. Open Preview to see it.");
                }
            }, void 0, false, {
                fileName: "[project]/app/builder/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/builder/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(BuilderPage, "20KSsLYH0BDgKkWX4f2eLykCj2E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuilderStore"]
    ];
});
_c = BuilderPage;
var _c;
__turbopack_context__.k.register(_c, "BuilderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_57c91bf5._.js.map