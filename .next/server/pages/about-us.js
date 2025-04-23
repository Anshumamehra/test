const CHUNK_PUBLIC_PATH = "server/pages/about-us.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__5e21a9._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_cf0b8e._.js");
runtime.loadChunk("server/chunks/ssr/src_styles_04e562._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/about-us/index.jsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
