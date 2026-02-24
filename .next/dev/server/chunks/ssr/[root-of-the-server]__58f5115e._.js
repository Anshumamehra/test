module.exports = [
"[project]/Documents/GitHub/test/src/styles/HeroBanner.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "HeroBanner": "HeroBanner-module__OKrGXW__HeroBanner",
  "dark__overlay": "HeroBanner-module__OKrGXW__dark__overlay",
});
}),
"[project]/Documents/GitHub/test/src/components/HeroBanner.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBanner
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/HeroBanner.module.css [ssr] (css module)");
;
;
function HeroBanner({ overlay, heroBannerData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].whitegrid} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].HeroBanner} ${overlay ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dark__overlay : ""} relative HeroBanner flex items-center h-screen ${heroBannerData?.styles ? heroBannerData?.styles : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 left-0 w-[100%] h-[100%] z-[1]",
                children: heroBannerData.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                        src: heroBannerData.src,
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                    className: "h-[100%] w-[100%]",
                    src: heroBannerData.src,
                    alt: heroBannerData.alt,
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "z-[4] relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                            className: "text-white capitalize font-black mb-[20px] ",
                            children: heroBannerData.heading
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "text-white capitalize font-black",
                            children: heroBannerData.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/test/src/styles/Tab.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "DropdownToggle": "Tab-module__XyA6dq__DropdownToggle",
  "active": "Tab-module__XyA6dq__active",
  "arrow": "Tab-module__XyA6dq__arrow",
  "dropdownItem": "Tab-module__XyA6dq__dropdownItem",
  "dropdownMenu": "Tab-module__XyA6dq__dropdownMenu",
  "inner-wrap": "Tab-module__XyA6dq__inner-wrap",
  "mobileDropdown": "Tab-module__XyA6dq__mobileDropdown",
  "tabContent": "Tab-module__XyA6dq__tabContent",
  "tabhead": "Tab-module__XyA6dq__tabhead",
  "tabname": "Tab-module__XyA6dq__tabname",
});
}),
"[project]/Documents/GitHub/test/src/components/Tab.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/Tab.module.css [ssr] (css module)");
"use client";
;
;
;
const Tab = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const tabdata = [
        {
            title: "Commercial",
            Heading: "Commercial",
            Data: "Your audio and video content holds immense value—but its full potential remains untapped if it’s unstructured, unsearchable, or difficult to access. Most organizations don’t treat media as data, creating inefficiencies and missed opportunities—Veritone changes that.",
            imgSrc1: "/images/women.png",
            imgSrc2: "/images/hire-2.png"
        },
        {
            title: "Public Sector",
            Heading: "Public Sector",
            Data: "Automate lengthy and tedious manual processes with powerful AI solutions made for law enforcement agencies and legal teams. Veritone’s AI for the public sector can save hundreds of hours so they can spend more time keeping communities safe.",
            imgSrc1: "/images/nile-banner.png",
            imgSrc1: "/images/counrty-flags.png",
            imgSrc2: "/images/boy-dog.png"
        },
        {
            title: "Talent Acquisition",
            Heading: "Get more from your media",
            Data: "Empower your talent acquisition team to find the best-fit candidates even faster with AI tools that optimize ad spend and hiring workflows. This is hiring as you’ve never seen it before.",
            imgSrc1: "/images/nile-banner.png",
            imgSrc1: "/images/boy-dog.png",
            imgSrc2: "/images/hire-2.png"
        },
        {
            title: "Other industries",
            Heading: "AI solutions, ready for all.",
            Data: "Whether it’s in healthcare, finance, retail, or another field, our AI solutions have helped businesses elevate what they are capable of doing. With these tools, countless businesses have grown their revenue, increased efficiency, and delivered effective results for their customers.",
            imgSrc1: "/images/hire-2.png",
            imgSrc2: "/images/women.png"
        }
    ];
    const handleTabClick = (index)=>{
        setActiveTab(index);
        setIsDropdownOpen(false);
    };
    const toggleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    };
    const currentTab = tabdata[activeTab];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "tab bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: `text-black flex justify-between  ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tabhead}`,
                    children: tabdata.map((tabs, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `tabname text-2xl relative ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tabname} ${activeTab === index ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>handleTabClick(index),
                            children: tabs.title
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                            lineNumber: 56,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                    lineNumber: 54,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].mobileDropdown,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].DropdownToggle,
                            onClick: toggleDropdown,
                            children: [
                                tabdata[activeTab].title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].arrow
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                    lineNumber: 72,
                                    columnNumber: 5
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                            lineNumber: 67,
                            columnNumber: 3
                        }, ("TURBOPACK compile-time value", void 0)),
                        isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dropdownMenu,
                            children: tabdata.map((tabs, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dropdownItem} ${activeTab === index ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Tab$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                                    onClick: ()=>handleTabClick(index),
                                    children: tabs.title
                                }, index, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                    lineNumber: 78,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                            lineNumber: 76,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                    lineNumber: 66,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "tabData  mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "wrapper flex justify-around mt-24 md:block md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "innerWrap w-[60%] mr-9 md:w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "tabheading text-black",
                                        children: currentTab.Heading
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                        lineNumber: 96,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "tabdata text-black mt-7 max-w-[580px] md:max-w-full",
                                        children: currentTab.Data
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        class: "btnWrap mt-[20px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            class: "pink-btn link-white text-white",
                                            "data-cursor-expand": "",
                                            children: "View all case studies"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                            lineNumber: 98,
                                            columnNumber: 64
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                        lineNumber: 98,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                lineNumber: 95,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "col-three w-[40%] md:w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "imgWrap w-[360px]  h-[240px] flex justify-start absolute md:mt-7 md:inline-block md:relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            className: "max-w-[360px] max-h-[240px] md:max-w-[280px] md:max-h-[200px] block object-cover h-full w-full",
                                            src: currentTab.imgSrc1,
                                            alt: currentTab.alt,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "imgWrap w-[360px]  h-[240px] md:max-w-[280px] md:max-h-[200px] absolute flex justify-end right-0 top-24 md:relative md:top-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            className: " max-w-[360px] max-h-[240px] block object-cover h-full w-full",
                                            src: currentTab.imgSrc2,
                                            alt: currentTab.alt,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                            lineNumber: 110,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                                lineNumber: 100,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                        lineNumber: 94,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
                    lineNumber: 93,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
            lineNumber: 51,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/test/src/components/Tab.jsx",
        lineNumber: 50,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Tab;
}),
"[project]/Documents/GitHub/test/src/styles/ContentWithImageSlider.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeDot": "ContentWithImageSlider-module__5Ams7W__activeDot",
  "disabled": "ContentWithImageSlider-module__5Ams7W__disabled",
  "dot": "ContentWithImageSlider-module__5Ams7W__dot",
  "dotsContainer": "ContentWithImageSlider-module__5Ams7W__dotsContainer",
  "innerContent": "ContentWithImageSlider-module__5Ams7W__innerContent",
  "navArrow": "ContentWithImageSlider-module__5Ams7W__navArrow",
  "nextArrow": "ContentWithImageSlider-module__5Ams7W__nextArrow",
  "prevArrow": "ContentWithImageSlider-module__5Ams7W__prevArrow",
  "slidesWrapper": "ContentWithImageSlider-module__5Ams7W__slidesWrapper",
});
}),
"[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentWithImageSlider
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/ContentWithImageSlider.module.css [ssr] (css module)");
;
;
;
function ContentWithImageSlider() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const slides = [
        {
            title: "Results-driven websites and digital brand experiences.",
            desc: "Searching through video content will never be the same. This feature, coming soon to Digital Media Hub, enables searching for aspects in videos that have not been explicitly labeled. Whether it is audio, text, or specific elements within a video, this technology understands how to find exactly what you need.",
            imgSrc: "/images/studio-mixing.png"
        },
        {
            title: "Voice Anonymization ",
            desc: "A tool that allows audio dialogue to be replaced in a video with a neutral voice. Use cases for this technology include redacted bodycam videos and witness protection cases.",
            imgSrc: "/images/studio-mixing.png"
        },
        {
            title: "3Results-driven websites and digital brand experiences.",
            desc: "Build and accelerate your website, brand, and digital marketing success with our award-winning digital agency, rooted in Silicon Valley innovation. We provide expert strategic and data-informed solutions that drive real-world results.",
            imgSrc: "/images/hire-2.png"
        },
        {
            title: "4Results-driven websites and digital brand experiences.",
            desc: "Build and accelerate your website, brand, and digital marketing success with our award-winning digital agency, rooted in Silicon Valley innovation. We provide expert strategic and data-informed solutions that drive real-world results.",
            imgSrc: "/images/hire-2.png"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            nextSlide();
        }, 5000);
        return ()=>clearInterval(timer);
    }, [
        currentIndex
    ]);
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>prev === 0 ? slides.length - 1 : prev - 1);
    };
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>prev === slides.length - 1 ? 0 : prev + 1);
    };
    const goToSlide = (index)=>{
        setCurrentIndex(index);
    };
    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === slides.length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "ContentWithImageSlider bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: `sliderWrap relative w-full overflow-hidden flex  flex-wrap items-center justify-center m-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sliderWrap}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `slidesWrapper flex w-full h-full ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].slidesWrapper}`,
                        style: {
                            transform: `translateX(-${currentIndex * 100}%)`
                        },
                        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `item w-full flex min-w-full ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].item}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "innerContent px-[40px] flex justify-center items-center lg:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: " w-[calc(100%-622px)] lg:w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "bg-[#fa524d] w-[calc(100%+191px)] pt-[140px] pb-[140px] pl-[129px] pr-[250px] largeLaptopDown:pt-[80px] largeLaptopDown:pl-[60px] largeLaptopDown:pb-[100px] lg:p-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-white capitalize",
                                                        children: slide.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                                        lineNumber: 77,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-white pt-[20px]",
                                                        children: slide.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                                        lineNumber: 78,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        class: "btnWrap mt-[20px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            class: "pink-btn link-white text-white",
                                                            children: "View all case studies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                                            lineNumber: 80,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "imgWrap w-full max-h-[345px] max-w-[600px] overflow-hidden largeLaptopDown:max-w-[540px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                className: "object-cover h-full w-full",
                                                src: slide.imgSrc,
                                                alt: slide.alt,
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-7 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `navArrow prevArrow ${isFirstSlide ? "disabled" : ""} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].prevArrow}`,
                            onClick: prevSlide,
                            disabled: isFirstSlide,
                            "aria-label": "Previous slide",
                            children: "❮"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                            lineNumber: 100,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `navArrow nextArrow ${isLastSlide ? "disabled" : ""} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].nextArrow}`,
                            onClick: nextSlide,
                            disabled: isLastSlide,
                            "aria-label": "Next slide",
                            children: "❯"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                            lineNumber: 110,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dotsContainer,
                    children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dot} ${currentIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$ContentWithImageSlider$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeDot : ""}`,
                            onClick: ()=>goToSlide(index),
                            "aria-label": `Go to slide ${index + 1}`
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/test/src/styles/SkillBar.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "innerwrap": "SkillBar-module__i3lIUG__innerwrap",
  "item": "SkillBar-module__i3lIUG__item",
});
}),
"[project]/Documents/GitHub/test/src/components/SkillBar.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$SkillBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/SkillBar.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
const bardata = {
    intro: {
        heading: "Technical Skills",
        para: "Code websites directly in the browser with W3Schools Spaces"
    },
    data: [
        {
            coursename: "Html",
            percent: "95%"
        },
        {
            coursename: "CSS",
            percent: "85%"
        },
        {
            coursename: "Javascript",
            percent: "25%"
        },
        {
            coursename: "Java",
            percent: "35%"
        },
        {
            coursename: "Python",
            percent: "45%"
        },
        {
            coursename: "C++",
            percent: "65%"
        }
    ]
};
const getColor = (percent)=>{
    if (percent <= 40) return "#ff4d4d";
    if (percent <= 70) return "#ffa500";
    return "#4caf50";
};
const SkillBar = ()=>{
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setAnimate(true); // animate when visible
            } else {
                setAnimate(false); // reset when out of view
            }
        }, {
            threshold: 0.3
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "SkillBar bg-white",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-center text-black",
                    children: bardata.intro.heading
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-center mt-6 text-black",
                    children: bardata.intro.para
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "outerwrap bg-gray-500 p-5 rounded-lg mt-10",
                    children: bardata.data.map((data, index)=>{
                        const percentValue = parseInt(data.percent);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "item rounded-lg bg-black mb-4 last:mb-0 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$SkillBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].innerwrap} p-2`,
                                style: {
                                    width: animate ? data.percent : "0%",
                                    backgroundColor: getColor(percentValue)
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "ml-4",
                                        children: data.coursename
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "ml-4",
                                        children: data.percent
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/test/src/components/SkillBar.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SkillBar;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/Documents/GitHub/test/src/styles/Gallary.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "Gallary-module___RBE8a__item",
});
}),
"[project]/Documents/GitHub/test/src/components/Gallery.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Gallary$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/Gallary.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
function Gallery() {
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("all");
    const GalleryData = [
        {
            image: "/images/boy-dog.png",
            altText: "boy dog",
            type: "image"
        },
        {
            image: "/images/Clear-Outline-C-Inisghts.jpg",
            altText: "outline",
            type: "image"
        },
        {
            image: "/images/studio-mixing.png",
            altText: "home hero video",
            type: "image"
        },
        {
            image: "/images/Clear-Outline-C-Inisghts.webp",
            altText: "home hero video",
            type: "image"
        },
        {
            image: "/images/women.png",
            altText: "home hero video",
            type: "image"
        },
        {
            video: "/images/Clear-Digital-Home-Hero_400kbps.mp4",
            altText: "home hero video",
            type: "video"
        },
        {
            image: "/images/china.png",
            altText: "home hero video",
            type: "image"
        },
        {
            image: "/images/DSC00314-2.jpg",
            altText: "home hero video",
            type: "image"
        },
        {
            iframe: "https://youtu.be/yBDKLX7EQAI?si=kdY_FQkwt1ge_Huf",
            altText: "home hero video",
            type: "iframe"
        }
    ];
    const filteredGallery = GalleryData.filter((item)=>{
        if (filter === "all") return true;
        return item.type === filter;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "Gallary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-center",
                            children: "Gallery"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                            lineNumber: 67,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "max-w-md mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative my-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search",
                                            className: "w-full px-6 py-4 pr-12 bg-gray-900 text-white rounded-full outline-none focus:ring-2 focus:ring-pink-600 transition placeholder-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                    lineNumber: 69,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "btnWrap flex justify-center gap-6 mb-10 flex-wrap mt-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilter("all"),
                                            className: `pink-btn link-white text-white rounded-xl overflow-hidden ${filter === "all" ? "opacity-100" : "opacity-60"}`,
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilter("image"),
                                            className: `pink-btn link-white text-white rounded-xl overflow-hidden ${filter === "image" ? "opacity-100" : "opacity-60"}`,
                                            children: "Photos"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilter("video"),
                                            className: `pink-btn link-white text-white rounded-xl overflow-hidden ${filter === "video" ? "opacity-100" : "opacity-60"}`,
                                            children: "Videos"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: `outerwrap flex flex-wrap w-[calc(100%+20px)] mt-14`,
                                    children: filteredGallery.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: `item w-[calc(33.33%-20px)] mx-[10px] mb-3 lg:w-[calc(50%-20px)] ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Gallary$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].item}`,
                                            onClick: ()=>setActiveItem(data),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "ImgWrap overflow-hidden h-[350px] md:h-[300px] rounded-lg shadow-md relative",
                                                children: [
                                                    data.type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: data.image,
                                                        alt: data.altText,
                                                        width: 500,
                                                        height: 500,
                                                        className: "object-cover w-full h-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 33
                                                    }, this),
                                                    data.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                                                        src: data.video,
                                                        controls: true,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 33
                                                    }, this),
                                                    data.type === "iframe" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                                                        src: data.iframe,
                                                        controls: true,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                                lineNumber: 106,
                                                columnNumber: 25
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                            lineNumber: 104,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                                    lineNumber: 102,
                                    columnNumber: 12
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                            lineNumber: 68,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                    lineNumber: 66,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                lineNumber: 65,
                columnNumber: 1
            }, this),
            activeItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50",
                onClick: ()=>setActiveItem(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl w-full px-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: "absolute -top-10 right-0 text-white text-3xl",
                            onClick: ()=>setActiveItem(null),
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                            lineNumber: 151,
                            columnNumber: 9
                        }, this),
                        activeItem.type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: activeItem.image,
                            alt: activeItem.altText,
                            width: 1000,
                            height: 700,
                            className: "w-full h-auto rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        activeItem.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                            src: activeItem.video,
                            controls: true,
                            autoPlay: true,
                            className: "w-full rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                    lineNumber: 146,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/components/Gallery.jsx",
                lineNumber: 142,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/GitHub/test/src/components/Filter.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function Footer() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("all");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const filterData = [
        {
            image: "/images/africa.jpg",
            name: "ABCD",
            course: "Frontend Developer"
        },
        {
            image: "/images/hello.jpg",
            name: "ABCD",
            course: "Backend Developer"
        },
        {
            image: "/images/laptop-working.jpg",
            name: "ABCD",
            course: "FullStack Developer"
        },
        {
            image: "/images/working.jpg",
            name: "ABCD",
            course: "Java Developer"
        },
        {
            image: "/images/hello.jpg",
            name: "ABCD",
            course: "Backend Developer"
        },
        {
            image: "/images/laptop-working.jpg",
            name: "ABCD",
            course: "FullStack Developer"
        },
        {
            image: "/images/working.jpg",
            name: "ABCD",
            course: "Java Developer"
        },
        {
            image: "/images/hello.jpg",
            name: "ABCD",
            course: "Backend Developer"
        },
        {
            image: "/images/laptop-working.jpg",
            name: "ABCD",
            course: "FullStack Developer"
        },
        {
            image: "/images/working.jpg",
            name: "ABCD",
            course: "Java Developer"
        }
    ];
    // Filter logic
    const filteredItems = filter === "all" ? filterData : filterData.filter((item)=>item.course.toLowerCase().includes(filter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "Filter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    children: "Our team."
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "Wrap mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    children: "Filter By"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                    lineNumber: 76,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative inline-block ml-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsOpen(!isOpen),
                                            className: "flex items-center justify-between w-[200px] px-4 py-2 bg-purple-600 text-white rounded-lg",
                                            children: [
                                                filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "ml-2",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                            lineNumber: 80,
                                            columnNumber: 13
                                        }, this),
                                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "absolute left-0 mt-2 w-[200px] bg-purple-600 shadow-lg rounded-lg overflow-hidden z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>{
                                                        setFilter("all");
                                                        setIsOpen(false);
                                                    },
                                                    className: "px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer",
                                                    children: "All"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>{
                                                        setFilter("frontend");
                                                        setIsOpen(false);
                                                    },
                                                    className: "px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer",
                                                    children: "Frontend Developer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>{
                                                        setFilter("backend");
                                                        setIsOpen(false);
                                                    },
                                                    className: "px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer",
                                                    children: "Backend Developer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>{
                                                        setFilter("fullstack");
                                                        setIsOpen(false);
                                                    },
                                                    className: "px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer",
                                                    children: "FullStack Developer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>{
                                                        setFilter("java");
                                                        setIsOpen(false);
                                                    },
                                                    className: "px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer",
                                                    children: "Java Developer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                    lineNumber: 78,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "outerWrap mt-[50px] flex flex-wrap w-[calc(100%+20px)] ml-[-10px] md:block md:w-full md:mx-0 items-center text-center",
                            children: filteredItems.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative Items group cursor-pointer mb-[20px] w-[calc(33.33%-20px)] mx-[10px] tablet:w-[calc(50%-20px)] md:w-full md:mx-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-[#5e0f50] rounded-3xl overflow-hidden hover:bg-[#e876d7] transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "p-10 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "w-[250px] h-[250px] sm:w-[150px] sm:h-[150px] mx-auto rounded-full border-4 border-[#7337d4] group-hover:border-[#c4c100] transition-all overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: data.image,
                                                        alt: data.name,
                                                        width: 500,
                                                        height: 500,
                                                        className: "object-cover w-full h-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                                                    children: data.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    children: data.course
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/test/src/components/Filter.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/test/src/styles/Footer.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "itemMedium": "Footer-module__4DiEXG__itemMedium",
  "itemSmall": "Footer-module__4DiEXG__itemSmall",
  "titleWrap": "Footer-module__4DiEXG__titleWrap",
});
}),
"[project]/Documents/GitHub/test/src/components/Footer.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/Footer.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "Footer bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "columWrap flex flex-wrap pb-[248px] ipad:pb-[70px] md:block md:pb-[70px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `itemSmall ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].itemSmall} w-[34%] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%]`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "logoWrap  max-w-[111px] max-h-[35px] overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "",
                                        "data-cursor-expand": "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            width: 100,
                                            height: 100,
                                            src: "/images/Clear Logo.svg",
                                            alt: "Clear logo",
                                            style: {
                                                objectFit: "contain"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 13,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "locationWrap flex items-center mt-[40px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "https://www.google.com/maps/place/1570+The+Alameda+%23330,+San+Jose,+CA+95126,+USA/@37.335805,-121.915187,17z/data=!3m1!4b1!4m6!3m5!1s0x808fcb68c56d2719:0xd3ee03e8b8d94a2c!8m2!3d37.335805!4d-121.915187!16s%2Fg%2F11qp4cqtsx?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D",
                                                "data-cursor-expand": "",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    width: 100,
                                                    height: 100,
                                                    src: "/images/map-pin.svg",
                                                    alt: "Clear logo",
                                                    style: {
                                                        objectFit: "contain"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 28,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "locationTitle w-[80%]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-white",
                                                children: "1570 The Alameda #330, San Jose, CA 95126"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "contactWrap flex items-center mt-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "tel:408.246.0000",
                                                "data-cursor-expand": "",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    width: 100,
                                                    height: 100,
                                                    src: "/images/smartphone.svg",
                                                    alt: "smartphone logo",
                                                    style: {
                                                        objectFit: "contain"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "locationTitle w-[80%]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    class: "contact-link text-white",
                                                    href: "tel:408.246.0000",
                                                    children: "408.246.0000"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "socialIcon mt-[30px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "socialWrpa",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            d: "M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z",
                                                            fill: "#989898"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                d: "M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z",
                                                                fill: "#989898"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                                lineNumber: 96,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                d: "M18.0954 8.26691C17.9804 7.95525 17.7969 7.67316 17.5585 7.4416C17.327 7.20319 17.0451 7.0197 16.7332 6.90469C16.4803 6.80646 16.1003 6.68954 15.4005 6.65768C14.6435 6.62316 14.4165 6.61572 12.5 6.61572C10.5833 6.61572 10.3564 6.62297 9.59953 6.65749C8.89972 6.68954 8.51958 6.80646 8.26686 6.90469C7.95501 7.0197 7.67291 7.20319 7.44155 7.4416C7.20313 7.67316 7.01965 7.95506 6.90444 8.26691C6.80621 8.51983 6.68929 8.89996 6.65744 9.59977C6.62292 10.3566 6.61548 10.5836 6.61548 12.5003C6.61548 14.4168 6.62292 14.6438 6.65744 15.4008C6.68929 16.1006 6.80621 16.4805 6.90444 16.7334C7.01965 17.0453 7.20294 17.3272 7.44136 17.5588C7.67291 17.7972 7.95482 17.9807 8.26667 18.0957C8.51958 18.1941 8.89972 18.311 9.59953 18.3429C10.3564 18.3774 10.5831 18.3846 12.4998 18.3846C14.4167 18.3846 14.6437 18.3774 15.4003 18.3429C16.1002 18.311 16.4803 18.1941 16.7332 18.0957C17.3592 17.8542 17.854 17.3594 18.0954 16.7334C18.1937 16.4805 18.3106 16.1006 18.3426 15.4008C18.3771 14.6438 18.3844 14.4168 18.3844 12.5003C18.3844 10.5836 18.3771 10.3566 18.3426 9.59977C18.3108 8.89996 18.1938 8.51983 18.0954 8.26691ZM12.5 16.1858C10.4643 16.1858 8.81408 14.5358 8.81408 12.5001C8.81408 10.4644 10.4643 8.81432 12.5 8.81432C14.5356 8.81432 16.1858 10.4644 16.1858 12.5001C16.1858 14.5358 14.5356 16.1858 12.5 16.1858ZM16.3315 9.52996C15.8558 9.52996 15.4702 9.14429 15.4702 8.6686C15.4702 8.19291 15.8558 7.80724 16.3315 7.80724C16.8072 7.80724 17.1929 8.19291 17.1929 8.6686C17.1927 9.14429 16.8072 9.52996 16.3315 9.52996Z",
                                                                fill: "#989898"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                d: "M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593Z",
                                                                fill: "#989898"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                                lineNumber: 104,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            d: "M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541602 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0ZM8.86514 19.0789H6.13816V10.2944H8.86514V19.0789ZM7.5 9.09539C7.18617 9.09669 6.87899 9.00491 6.6173 8.83167C6.35561 8.65842 6.15115 8.41148 6.02978 8.12206C5.9084 7.83264 5.87555 7.51373 5.93539 7.20565C5.99522 6.89756 6.14505 6.61413 6.36593 6.39118C6.58681 6.16823 6.86883 6.01577 7.17635 5.95306C7.48386 5.89036 7.80306 5.92023 8.0936 6.03891C8.38414 6.15758 8.63298 6.35972 8.80865 6.61979C8.98433 6.87985 9.07897 7.18616 9.0806 7.5C9.08148 7.92083 8.9157 8.3249 8.61952 8.62386C8.32333 8.92282 7.92083 9.09235 7.5 9.09539ZM19.0789 19.0789H16.3536V14.8026C16.3536 13.7829 16.3339 12.4753 14.9359 12.4753C13.5378 12.4753 13.2911 13.5839 13.2911 14.7286V19.0789H10.5757V10.2944H13.1924V11.4918H13.2303C13.5938 10.801 14.4836 10.0724 15.8109 10.0724C18.5707 10.0724 19.0789 11.8914 19.0789 14.2533V19.0789Z",
                                                            fill: "#989898"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            d: "M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617Z",
                                                            fill: "#989898"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `itemMedium ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].itemMedium} w-[17%] pl-[50px] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%] md:pl-[0] md:pt-[40px]`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "listItem",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                children: "Work"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                children: "Approach"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "itemLarge w-[49%] ipad:w-[100%] ipad:pt-[50px] md:w-[100%] md:pt-[40px] ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "innerWrap flex flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "imgItem w-[30%] md:w-[100%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "imgWrap h-full max-w-[215px] max-h-[253px] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                width: 100,
                                                height: 100,
                                                src: "/images/CTA-Image-1350.jpg",
                                                alt: "Tables and a sofa"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "contentItem w-[70%] pl-[40px] md:w-[100%] md:pl-[0] md:pt-[40px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "innerContent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-white",
                                                    children: "2023 Fortune 500 B2B Homepage Rankings Report"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-white mt-[15px]",
                                                    children: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "btnWrap mt-[20px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "link-white text-white",
                                                        "data-cursor-expand": "",
                                                        children: "Download"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "outerWrap border-b-[2px] border-white pb-[51px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "innerContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                            className: "text-white ",
                            children: [
                                "Confidently navigating ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    class: "text-pink",
                                    children: "change"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 212,
                                    columnNumber: 38
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "wrapper flex pt-[48px] md:block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "companyLogo w-[8%] md:w-[100%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "logoWrap flex flex-wrap max-[115px] h-[75px] overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "",
                                    "data-cursor-expand": "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        width: "115",
                                        height: "75",
                                        viewBox: "0 0 115 75",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                                                "clip-path": "url(#clip0_361_101)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M15.6324 58.0872L15.5838 48.5242L11.2093 56.3085H9.07096L4.7208 48.7817V58.0872H0.273926V40.0439H4.2352L10.2133 50.4575L16.0456 40.0439H20.0069L20.0555 58.0872H15.6329H15.6324Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M31.4203 51.6173V58.0872H26.6089V51.5402L20.1204 40.0439H25.1992L29.2334 47.2099L33.2676 40.0439H37.9332L31.4203 51.6173Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M45.362 53.2925H42.7375V58.0872H37.9255V40.0439H45.7017C50.3436 40.0439 53.2597 42.5956 53.2597 46.7202C53.2597 49.3753 52.0444 51.3344 49.9304 52.4166L53.1706 58.0872H48.0189L45.3615 53.2925H45.362ZM45.4106 44.0646H42.7375V49.3489H45.4106C47.4031 49.3489 48.3996 48.3696 48.3996 46.7197C48.3996 45.0698 47.4031 44.0646 45.4106 44.0646Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M55.193 40.0439H60.005V58.0872H55.193V40.0439Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M62.1428 49.0652C62.1428 43.6521 66.1522 39.6826 71.5961 39.6826C77.04 39.6826 81.0489 43.6521 81.0489 49.0652C81.0489 54.4782 77.0395 58.4477 71.5961 58.4477C66.1527 58.4477 62.1428 54.4782 62.1428 49.0652ZM76.1888 49.0652C76.1888 45.9463 74.172 43.9101 71.5961 43.9101C69.0202 43.9101 67.0029 45.9463 67.0029 49.0652C67.0029 52.1841 69.0197 54.2202 71.5961 54.2202C74.1725 54.2202 76.1888 52.1841 76.1888 49.0652Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M82.965 50.0395V40.0386H87.7764V49.8849C87.7764 52.978 88.9917 54.2153 91.0085 54.2153C93.0254 54.2153 94.2163 52.978 94.2163 49.8849V40.0386H98.9549V50.0395C98.9549 55.4268 95.9901 58.4427 90.9599 58.4427C85.9297 58.4427 82.965 55.4268 82.965 50.0395Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M100.298 56.4578L101.878 52.6947C103.385 53.7515 105.522 54.4734 107.491 54.4734C109.46 54.4734 110.261 53.8808 110.261 53.0039C110.261 50.1425 100.589 52.2309 100.589 45.5288C100.589 42.3065 103.068 39.6777 108.123 39.6777C110.334 39.6777 112.619 40.2191 114.295 41.2501L112.813 45.0391C111.185 44.1115 109.581 43.6472 108.099 43.6472C106.082 43.6472 105.353 44.369 105.353 45.2713C105.353 48.0293 115 45.9672 115 52.6176C115 55.7624 112.522 58.4433 107.467 58.4433C104.673 58.4433 101.902 57.644 100.298 56.4583L100.298 56.4578Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M14.8004 69.8345V74.8563H13.6611V63.1826H17.6938C20.4337 63.1826 22.0961 63.9303 22.0961 66.4318C22.0961 68.2662 21.2034 69.1705 19.6332 69.721L22.2652 74.8563H21.0186L18.5561 69.8274M20.9573 66.4323C20.9573 64.5644 19.818 64.2506 17.6634 64.2506H14.8004V68.7843H17.6634C19.8185 68.7843 20.9573 68.2667 20.9573 66.4323Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M23.1523 69.0202C23.1523 65.6179 25.671 63.0835 29.0935 63.0835C32.516 63.0835 35.0184 65.6017 35.0184 69.0202C35.0184 72.4387 32.4836 74.9569 29.0935 74.9569C25.7034 74.9569 23.1523 72.4219 23.1523 69.0202ZM33.8239 69.0202C33.8239 66.2353 31.8061 64.184 29.0935 64.184C26.3809 64.184 24.3306 66.2353 24.3306 69.0202C24.3306 71.805 26.3647 73.8564 29.0935 73.8564C31.8223 73.8564 33.8239 71.805 33.8239 69.0202Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M55.9246 66.4318C55.9246 68.9166 54.2622 69.8513 51.5223 69.8513H48.6285V74.8563H47.4891V63.1826H51.5218C54.2617 63.1826 55.9241 63.9303 55.9241 66.4318H55.9246ZM54.7853 66.4318C54.7853 64.5639 53.646 64.2501 51.4914 64.2501H48.6285V68.767H51.4914C53.6465 68.767 54.7853 68.2662 54.7853 66.4318Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M36.5705 69.5848V63.1641H37.7559V69.4855C37.7559 71.4715 38.2192 73.939 41.1597 73.8777C42.4387 73.8513 44.4966 73.4965 44.3614 69.4855V63.1641H45.4997V69.5848C45.4485 72.9247 44.3578 74.9797 41.1283 74.9797C37.8987 74.9797 36.5042 72.9253 36.5705 69.5848Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M11.8559 69.3578C11.8402 69.9346 11.7997 70.2438 11.6888 70.6757C11.4812 71.4842 11.1207 72.2182 10.5946 72.8675C9.90338 73.7211 9.03143 74.3162 7.9949 74.671C7.51487 74.8353 7.02066 74.9351 6.5148 74.9762C5.58209 75.0512 4.67114 74.9493 3.78855 74.631C2.01274 73.9903 0.698218 72.5507 0.215149 70.7234C0.0414662 70.0674 -0.0238546 69.4014 0.00804622 68.7247C0.0500743 67.8346 0.25667 66.9856 0.672394 66.1958C1.4446 64.7289 2.64164 63.7835 4.2301 63.3299C4.89748 63.1393 5.58006 63.0749 6.27226 63.1078C7.23333 63.154 8.13972 63.3963 8.9813 63.8692C9.56412 64.1966 10.072 64.6158 10.5054 65.1248C10.5115 65.1319 10.5166 65.139 10.5242 65.1486C10.228 65.4025 9.93275 65.655 9.6345 65.9109C9.60514 65.876 9.57627 65.842 9.54741 65.8086C8.94231 65.107 8.19137 64.6366 7.30068 64.3867C6.78824 64.2428 6.26517 64.1901 5.73399 64.2118C4.96331 64.2433 4.23364 64.4308 3.56018 64.8115C2.52366 65.397 1.82589 66.2653 1.44612 67.3906C1.23598 68.0135 1.16103 68.6563 1.19091 69.3122C1.22281 70.0137 1.38231 70.6843 1.69322 71.3149C2.09223 72.1244 2.67759 72.7646 3.45283 73.2274C3.96021 73.5305 4.5086 73.7242 5.09041 73.822C5.52183 73.8945 5.95629 73.9127 6.39176 73.8747C7.35942 73.7911 8.23137 73.4611 8.98585 72.8417C9.66489 72.2841 10.1348 71.58 10.4178 70.7497C10.5303 70.4207 10.6255 70.1805 10.6477 69.921C9.21017 69.9346 7.77514 69.9478 6.33808 69.9615V68.857C8.17567 68.8398 10.0128 68.8225 11.8539 68.8053",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M10.5642 0H0.273926V35.0165H10.5642V22.0442L16.6198 35.0165H26.9476L10.6017 0H10.5642Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M55.0583 0H44.7696H44.7306L33.542 23.9683L22.3534 0H12.0256L28.3715 35.0165H28.3847H38.6993H38.7125L44.7696 22.0411V35.0165H55.0599V0H55.0583Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("clipPath", {
                                                    id: "clip0_361_101",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                                                        width: "115",
                                                        height: "75",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 287,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `titleWrap ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].titleWrap} w-[92%] pl-[30px] md:w-[100%] md:pl-[0] md:pt-[20px]`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                                    className: "text-white",
                                    children: "Clear Digital is a founding member of Myrious Group’s expertise-driven agencies."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "Myrious Group is an independent holding company enabling forward-thinking brands to achieve breakthrough performance through power of orchestration."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/test/src/pages/Practice/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Practice
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/HeroBanner.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/Tab.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$ContentWithImageSlider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/ContentWithImageSlider.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$SkillBar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/SkillBar.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Gallery$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/Gallery.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Filter$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/Filter.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/Footer.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Practice() {
    const overlay = true;
    const heroBannerData = {
        heading: "Welcome! We are Clear Digital",
        title: "We are Practicing here",
        src: "/images/work-paper.jpg",
        alt: "Working Paper",
        video: false
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "body",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                overlay: overlay,
                heroBannerData: heroBannerData
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$ContentWithImageSlider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$SkillBar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Gallery$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Filter$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/test/src/pages/Practice/index.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58f5115e._.js.map