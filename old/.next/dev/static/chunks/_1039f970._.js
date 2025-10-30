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
"[project]/components/editor/puck-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PuckProvider",
    ()=>PuckProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$measured$2b$puck$40$0$2e$20$2e$2_$40$type_b02df57a17d57a8d70437d13b4a77fb7$2f$node_modules$2f40$measured$2f$puck$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@measured+puck@0.20.2_@type_b02df57a17d57a8d70437d13b4a77fb7/node_modules/@measured/puck/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$measured$2b$puck$40$0$2e$20$2e$2_$40$type_b02df57a17d57a8d70437d13b4a77fb7$2f$node_modules$2f40$measured$2f$puck$2f$dist$2f$chunk$2d$QIGVND56$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@measured+puck@0.20.2_@type_b02df57a17d57a8d70437d13b4a77fb7/node_modules/@measured/puck/dist/chunk-QIGVND56.mjs [app-client] (ecmascript)");
"use client";
;
;
;
// Simple site renderers for demo. In a full build, import components/site/*
function HeroRender(props) {
    const { heading, subheading, ctaLabel, ctaHref, bgType, bgSrc, overlayOpacity } = props;
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
                fileName: "[project]/components/editor/puck-provider.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "absolute inset-0 h-full w-full object-cover",
                src: bgSrc,
                alt: "Hero background"
            }, void 0, false, {
                fileName: "[project]/components/editor/puck-provider.tsx",
                lineNumber: 18,
                columnNumber: 11
            }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `rgba(0,0,0,${overlayOpacity ?? 0.35})`
                }
            }, void 0, false, {
                fileName: "[project]/components/editor/puck-provider.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-white md:text-5xl",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/components/editor/puck-provider.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    subheading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-white/90",
                        children: subheading
                    }, void 0, false, {
                        fileName: "[project]/components/editor/puck-provider.tsx",
                        lineNumber: 24,
                        columnNumber: 24
                    }, this),
                    ctaLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: ctaHref,
                        className: "mt-6 inline-block rounded bg-white/90 px-4 py-2 text-sm font-medium text-black",
                        children: ctaLabel
                    }, void 0, false, {
                        fileName: "[project]/components/editor/puck-provider.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/puck-provider.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/puck-provider.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = HeroRender;
function FAQRender(props) {
    const { items } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-3xl px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-2xl font-semibold",
                children: "FAQs"
            }, void 0, false, {
                fileName: "[project]/components/editor/puck-provider.tsx",
                lineNumber: 39,
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
                                fileName: "[project]/components/editor/puck-provider.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-300",
                                children: it.a
                            }, void 0, false, {
                                fileName: "[project]/components/editor/puck-provider.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/editor/puck-provider.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/editor/puck-provider.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/puck-provider.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c1 = FAQRender;
const config = {
    components: {
        Hero: {
            fields: {
                heading: {
                    type: "text"
                },
                subheading: {
                    type: "text"
                },
                ctaLabel: {
                    type: "text"
                },
                ctaHref: {
                    type: "text"
                },
                bgType: {
                    type: "select",
                    options: [
                        "image",
                        "video"
                    ]
                },
                bgSrc: {
                    type: "text"
                },
                overlayOpacity: {
                    type: "number"
                }
            },
            render: HeroRender
        },
        FAQ: {
            fields: {
                items: {
                    type: "array",
                    arrayFields: {
                        q: {
                            type: "text"
                        },
                        a: {
                            type: "textarea"
                        }
                    }
                }
            },
            render: FAQRender
        }
    }
};
function PuckProvider({ data, onPublish }) {
    const puckData = {
        components: {},
        content: data.sections
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$measured$2b$puck$40$0$2e$20$2e$2_$40$type_b02df57a17d57a8d70437d13b4a77fb7$2f$node_modules$2f40$measured$2f$puck$2f$dist$2f$chunk$2d$QIGVND56$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Puck"], {
            config: config,
            data: puckData,
            onPublish: onPublish
        }, void 0, false, {
            fileName: "[project]/components/editor/puck-provider.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/editor/puck-provider.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c2 = PuckProvider;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeroRender");
__turbopack_context__.k.register(_c1, "FAQRender");
__turbopack_context__.k.register(_c2, "PuckProvider");
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BuilderPage({ searchParams }) {
    _s();
    const templateId = searchParams?.template ?? "luxuryVillas";
    const initialData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuilderPage.useMemo[initialData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPageDataFromTemplate"])(templateId)
    }["BuilderPage.useMemo[initialData]"], [
        templateId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$puck$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PuckProvider"], {
            data: initialData,
            onPublish: (data)=>console.log("Published", data)
        }, void 0, false, {
            fileName: "[project]/app/builder/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/builder/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(BuilderPage, "nQYQPBYmBdSqZqddWG8eTISBUQM=");
_c = BuilderPage;
var _c;
__turbopack_context__.k.register(_c, "BuilderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1039f970._.js.map