(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/Documents/GitHub/test/src/styles/HeroBanner.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "HeroBanner": "HeroBanner-module__OKrGXW__HeroBanner",
  "dark__overlay": "HeroBanner-module__OKrGXW__dark__overlay",
});
}),
"[project]/Documents/GitHub/test/src/components/HeroBanner.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/HeroBanner.module.css [client] (css module)");
;
;
function HeroBanner({ overlay, heroBannerData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].whitegrid} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].HeroBanner} ${overlay ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].dark__overlay : ""} relative HeroBanner flex items-center h-screen ${heroBannerData?.styles ? heroBannerData?.styles : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 left-0 w-[100%] h-[100%] z-[1]",
                children: heroBannerData.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-[4] relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "text-white capitalize font-black mb-[20px] ",
                            children: heroBannerData.heading
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/HeroBanner.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
_c = HeroBanner;
var _c;
__turbopack_context__.k.register(_c, "HeroBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/test/src/styles/Footer.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "itemMedium": "Footer-module__4DiEXG__itemMedium",
  "itemSmall": "Footer-module__4DiEXG__itemSmall",
  "titleWrap": "Footer-module__4DiEXG__titleWrap",
});
}),
"[project]/Documents/GitHub/test/src/components/Footer.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/Footer.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/next/image.js [client] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "Footer bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "columWrap flex flex-wrap pb-[248px] ipad:pb-[70px] md:block md:pb-[70px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `itemSmall ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].itemSmall} w-[34%] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%]`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "logoWrap  max-w-[111px] max-h-[35px] overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "",
                                        "data-cursor-expand": "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "locationWrap flex items-center mt-[40px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.google.com/maps/place/1570+The+Alameda+%23330,+San+Jose,+CA+95126,+USA/@37.335805,-121.915187,17z/data=!3m1!4b1!4m6!3m5!1s0x808fcb68c56d2719:0xd3ee03e8b8d94a2c!8m2!3d37.335805!4d-121.915187!16s%2Fg%2F11qp4cqtsx?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D",
                                                "data-cursor-expand": "",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "locationTitle w-[80%]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contactWrap flex items-center mt-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:408.246.0000",
                                                "data-cursor-expand": "",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "locationTitle w-[80%]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "socialIcon mt-[30px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "socialWrpa",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z",
                                                                fill: "#989898"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                                lineNumber: 96,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M18.0954 8.26691C17.9804 7.95525 17.7969 7.67316 17.5585 7.4416C17.327 7.20319 17.0451 7.0197 16.7332 6.90469C16.4803 6.80646 16.1003 6.68954 15.4005 6.65768C14.6435 6.62316 14.4165 6.61572 12.5 6.61572C10.5833 6.61572 10.3564 6.62297 9.59953 6.65749C8.89972 6.68954 8.51958 6.80646 8.26686 6.90469C7.95501 7.0197 7.67291 7.20319 7.44155 7.4416C7.20313 7.67316 7.01965 7.95506 6.90444 8.26691C6.80621 8.51983 6.68929 8.89996 6.65744 9.59977C6.62292 10.3566 6.61548 10.5836 6.61548 12.5003C6.61548 14.4168 6.62292 14.6438 6.65744 15.4008C6.68929 16.1006 6.80621 16.4805 6.90444 16.7334C7.01965 17.0453 7.20294 17.3272 7.44136 17.5588C7.67291 17.7972 7.95482 17.9807 8.26667 18.0957C8.51958 18.1941 8.89972 18.311 9.59953 18.3429C10.3564 18.3774 10.5831 18.3846 12.4998 18.3846C14.4167 18.3846 14.6437 18.3774 15.4003 18.3429C16.1002 18.311 16.4803 18.1941 16.7332 18.0957C17.3592 17.8542 17.854 17.3594 18.0954 16.7334C18.1937 16.4805 18.3106 16.1006 18.3426 15.4008C18.3771 14.6438 18.3844 14.4168 18.3844 12.5003C18.3844 10.5836 18.3771 10.3566 18.3426 9.59977C18.3108 8.89996 18.1938 8.51983 18.0954 8.26691ZM12.5 16.1858C10.4643 16.1858 8.81408 14.5358 8.81408 12.5001C8.81408 10.4644 10.4643 8.81432 12.5 8.81432C14.5356 8.81432 16.1858 10.4644 16.1858 12.5001C16.1858 14.5358 14.5356 16.1858 12.5 16.1858ZM16.3315 9.52996C15.8558 9.52996 15.4702 9.14429 15.4702 8.6686C15.4702 8.19291 15.8558 7.80724 16.3315 7.80724C16.8072 7.80724 17.1929 8.19291 17.1929 8.6686C17.1927 9.14429 16.8072 9.52996 16.3315 9.52996Z",
                                                                fill: "#989898"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden",
                                                    href: "",
                                                    "data-cursor-expand": "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `itemMedium ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].itemMedium} w-[17%] pl-[50px] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%] md:pl-[0] md:pt-[40px]`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "listItem",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "itemLarge w-[49%] ipad:w-[100%] ipad:pt-[50px] md:w-[100%] md:pt-[40px] ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "innerWrap flex flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "imgItem w-[30%] md:w-[100%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "imgWrap h-full max-w-[215px] max-h-[253px] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contentItem w-[70%] pl-[40px] md:w-[100%] md:pl-[0] md:pt-[40px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "innerContent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white",
                                                    children: "2023 Fortune 500 B2B Homepage Rankings Report"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white mt-[15px]",
                                                    children: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "btnWrap mt-[20px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "outerWrap border-b-[2px] border-white pb-[51px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "innerContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-white ",
                            children: [
                                "Confidently navigating ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrapper flex pt-[48px] md:block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "companyLogo w-[8%] md:w-[100%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logoWrap flex flex-wrap max-[115px] h-[75px] overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "",
                                    "data-cursor-expand": "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "115",
                                        height: "75",
                                        viewBox: "0 0 115 75",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                "clip-path": "url(#clip0_361_101)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M15.6324 58.0872L15.5838 48.5242L11.2093 56.3085H9.07096L4.7208 48.7817V58.0872H0.273926V40.0439H4.2352L10.2133 50.4575L16.0456 40.0439H20.0069L20.0555 58.0872H15.6329H15.6324Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M31.4203 51.6173V58.0872H26.6089V51.5402L20.1204 40.0439H25.1992L29.2334 47.2099L33.2676 40.0439H37.9332L31.4203 51.6173Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M45.362 53.2925H42.7375V58.0872H37.9255V40.0439H45.7017C50.3436 40.0439 53.2597 42.5956 53.2597 46.7202C53.2597 49.3753 52.0444 51.3344 49.9304 52.4166L53.1706 58.0872H48.0189L45.3615 53.2925H45.362ZM45.4106 44.0646H42.7375V49.3489H45.4106C47.4031 49.3489 48.3996 48.3696 48.3996 46.7197C48.3996 45.0698 47.4031 44.0646 45.4106 44.0646Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M55.193 40.0439H60.005V58.0872H55.193V40.0439Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M62.1428 49.0652C62.1428 43.6521 66.1522 39.6826 71.5961 39.6826C77.04 39.6826 81.0489 43.6521 81.0489 49.0652C81.0489 54.4782 77.0395 58.4477 71.5961 58.4477C66.1527 58.4477 62.1428 54.4782 62.1428 49.0652ZM76.1888 49.0652C76.1888 45.9463 74.172 43.9101 71.5961 43.9101C69.0202 43.9101 67.0029 45.9463 67.0029 49.0652C67.0029 52.1841 69.0197 54.2202 71.5961 54.2202C74.1725 54.2202 76.1888 52.1841 76.1888 49.0652Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M82.965 50.0395V40.0386H87.7764V49.8849C87.7764 52.978 88.9917 54.2153 91.0085 54.2153C93.0254 54.2153 94.2163 52.978 94.2163 49.8849V40.0386H98.9549V50.0395C98.9549 55.4268 95.9901 58.4427 90.9599 58.4427C85.9297 58.4427 82.965 55.4268 82.965 50.0395Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M100.298 56.4578L101.878 52.6947C103.385 53.7515 105.522 54.4734 107.491 54.4734C109.46 54.4734 110.261 53.8808 110.261 53.0039C110.261 50.1425 100.589 52.2309 100.589 45.5288C100.589 42.3065 103.068 39.6777 108.123 39.6777C110.334 39.6777 112.619 40.2191 114.295 41.2501L112.813 45.0391C111.185 44.1115 109.581 43.6472 108.099 43.6472C106.082 43.6472 105.353 44.369 105.353 45.2713C105.353 48.0293 115 45.9672 115 52.6176C115 55.7624 112.522 58.4433 107.467 58.4433C104.673 58.4433 101.902 57.644 100.298 56.4583L100.298 56.4578Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14.8004 69.8345V74.8563H13.6611V63.1826H17.6938C20.4337 63.1826 22.0961 63.9303 22.0961 66.4318C22.0961 68.2662 21.2034 69.1705 19.6332 69.721L22.2652 74.8563H21.0186L18.5561 69.8274M20.9573 66.4323C20.9573 64.5644 19.818 64.2506 17.6634 64.2506H14.8004V68.7843H17.6634C19.8185 68.7843 20.9573 68.2667 20.9573 66.4323Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M23.1523 69.0202C23.1523 65.6179 25.671 63.0835 29.0935 63.0835C32.516 63.0835 35.0184 65.6017 35.0184 69.0202C35.0184 72.4387 32.4836 74.9569 29.0935 74.9569C25.7034 74.9569 23.1523 72.4219 23.1523 69.0202ZM33.8239 69.0202C33.8239 66.2353 31.8061 64.184 29.0935 64.184C26.3809 64.184 24.3306 66.2353 24.3306 69.0202C24.3306 71.805 26.3647 73.8564 29.0935 73.8564C31.8223 73.8564 33.8239 71.805 33.8239 69.0202Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M55.9246 66.4318C55.9246 68.9166 54.2622 69.8513 51.5223 69.8513H48.6285V74.8563H47.4891V63.1826H51.5218C54.2617 63.1826 55.9241 63.9303 55.9241 66.4318H55.9246ZM54.7853 66.4318C54.7853 64.5639 53.646 64.2501 51.4914 64.2501H48.6285V68.767H51.4914C53.6465 68.767 54.7853 68.2662 54.7853 66.4318Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M36.5705 69.5848V63.1641H37.7559V69.4855C37.7559 71.4715 38.2192 73.939 41.1597 73.8777C42.4387 73.8513 44.4966 73.4965 44.3614 69.4855V63.1641H45.4997V69.5848C45.4485 72.9247 44.3578 74.9797 41.1283 74.9797C37.8987 74.9797 36.5042 72.9253 36.5705 69.5848Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M11.8559 69.3578C11.8402 69.9346 11.7997 70.2438 11.6888 70.6757C11.4812 71.4842 11.1207 72.2182 10.5946 72.8675C9.90338 73.7211 9.03143 74.3162 7.9949 74.671C7.51487 74.8353 7.02066 74.9351 6.5148 74.9762C5.58209 75.0512 4.67114 74.9493 3.78855 74.631C2.01274 73.9903 0.698218 72.5507 0.215149 70.7234C0.0414662 70.0674 -0.0238546 69.4014 0.00804622 68.7247C0.0500743 67.8346 0.25667 66.9856 0.672394 66.1958C1.4446 64.7289 2.64164 63.7835 4.2301 63.3299C4.89748 63.1393 5.58006 63.0749 6.27226 63.1078C7.23333 63.154 8.13972 63.3963 8.9813 63.8692C9.56412 64.1966 10.072 64.6158 10.5054 65.1248C10.5115 65.1319 10.5166 65.139 10.5242 65.1486C10.228 65.4025 9.93275 65.655 9.6345 65.9109C9.60514 65.876 9.57627 65.842 9.54741 65.8086C8.94231 65.107 8.19137 64.6366 7.30068 64.3867C6.78824 64.2428 6.26517 64.1901 5.73399 64.2118C4.96331 64.2433 4.23364 64.4308 3.56018 64.8115C2.52366 65.397 1.82589 66.2653 1.44612 67.3906C1.23598 68.0135 1.16103 68.6563 1.19091 69.3122C1.22281 70.0137 1.38231 70.6843 1.69322 71.3149C2.09223 72.1244 2.67759 72.7646 3.45283 73.2274C3.96021 73.5305 4.5086 73.7242 5.09041 73.822C5.52183 73.8945 5.95629 73.9127 6.39176 73.8747C7.35942 73.7911 8.23137 73.4611 8.98585 72.8417C9.66489 72.2841 10.1348 71.58 10.4178 70.7497C10.5303 70.4207 10.6255 70.1805 10.6477 69.921C9.21017 69.9346 7.77514 69.9478 6.33808 69.9615V68.857C8.17567 68.8398 10.0128 68.8225 11.8539 68.8053",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10.5642 0H0.273926V35.0165H10.5642V22.0442L16.6198 35.0165H26.9476L10.6017 0H10.5642Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                    id: "clip0_361_101",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `titleWrap ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].titleWrap} w-[92%] pl-[30px] md:w-[100%] md:pl-[0] md:pt-[20px]`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-white",
                                    children: "Clear Digital is a founding member of Myrious Group’s expertise-driven agencies."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Footer.jsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/test/src/styles/Detail.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ActiveImgWrap": "Detail-module__6xSCKa__ActiveImgWrap",
  "CardContent": "Detail-module__6xSCKa__CardContent",
  "CardItem": "Detail-module__6xSCKa__CardItem",
  "CardWrap": "Detail-module__6xSCKa__CardWrap",
  "Detail": "Detail-module__6xSCKa__Detail",
  "ImgInner": "Detail-module__6xSCKa__ImgInner",
  "ImgWrap": "Detail-module__6xSCKa__ImgWrap",
  "Overlay": "Detail-module__6xSCKa__Overlay",
  "RightContent": "Detail-module__6xSCKa__RightContent",
  "TitleWrap": "Detail-module__6xSCKa__TitleWrap",
  "active": "Detail-module__6xSCKa__active",
  "card": "Detail-module__6xSCKa__card",
  "cardWhite": "Detail-module__6xSCKa__cardWhite",
  "introWrap": "Detail-module__6xSCKa__introWrap",
  "overlayBtn": "Detail-module__6xSCKa__overlayBtn",
});
}),
"[project]/Documents/GitHub/test/src/components/Detail.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Detail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/styles/Detail.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Detail() {
    _s();
    const [isOverlayActive, setIsOverlayActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Unified data structure for all content
    const pageContent = {
        intro: {
            subtitle: "Data, Insight & Analysis",
            title: "Economy at a Glance - June 2024",
            description: "This issue of Glance examines city of Houston population growth, the health of the local housing market, highlights of the latest Kinder Houston Area Survey, and the near-term outlook for the U.S. economy.",
            published: "Published on 6/5/24"
        },
        takeaways: [
            {
                title: "June Takeaway #1",
                text: "Unlike many U.S. cities, Houston has added population in recent years."
            },
            {
                title: "June Takeaway #2",
                text: "Metro Houston area leads the nation in new and existing home sales."
            },
            {
                title: "June Takeaway #3",
                text: "Across every demographic and income level, more Houstonians are excited about the future than worried."
            }
        ],
        innerContents: [
            {
                title: "CITY POPULATION UPDATE",
                text: "The City of Houston is growing again. After struggling to retain population after Hurricane Harvey and losing population during the COVID-19 pandemic, the city added more than 23,000 residents over the past two years.",
                imgSrc: "/images/map.png"
            },
            {
                text: "Houston is bucking the trend that plagues many of its peers. Of the nation’s 100 most populous cities, 43 lost population between ’21 and ’23. For some, the population losses were significant.",
                imgSrc: "/images/tablenew.png"
            },
            {
                text: "The cities enjoying the most robust growth have several characteristics in common. First, they’re in metro areas that quickly recovered their pandemic job losses. Employment in these regions is at an all-time high.",
                imgSrc: "/images/jully.png"
            },
            {
                text: "The nation’s fastest growing cities are also in metros where the cost of living is substantially lower than cities that are losing population. The data in the following chart comes from the Council for Community and Economic Research’s quarterly Cost of Living Index, which examines housing, utility, food, health care, and transportation costs in 264 metro areas. The index does not factor in local taxes.",
                imgSrc: "/images/costnew.png"
            },
            {
                text: "The nation’s fastest growing cities are also in metro areas where housing tends to be more affordable.",
                imgSrc: "/images/avg.png"
            },
            {
                text: "Cities with the largest gains also tend to have lower state tax burdens. Conversely, the cities with shrinking populations tend to have higher tax burdens.",
                imgSrc: "/images/state.png"
            },
            {
                text: [
                    "Other factors come into play as well. For instance, except for Seattle, the nation’s fastest growing cities tend to be in the sunbelt. Where Houston Ranks",
                    "The City of Houston’s population now exceeds 2.3 million, ranking it as the nation’s fourth most populous city. Five of the nation’s most populous cities are now in Texas. San Antonio is the nation’s seventh most populous and could overtake No. 6 Philadelphia by the end of the decade.",
                    "To continue reading, download this report.",
                    'Note: The geographic area referred to in this publication as “Houston,” "Houston Area” and “Metro Houston” is the ten-county Census designated metropolitan statistical area of Houston-Pasadena-The Woodlands-Sugar Land, TX. The ten counties are: Austin, Brazoria, Chambers, Fort Bend, Galveston, Harris, Liberty, Montgomery, San Jacinto, and Waller.'
                ]
            }
        ],
        rightContent: {
            social: {
                title: "Share this Event",
                icons: [
                    {
                        href: "/",
                        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "34",
                            viewBox: "0 0 33 34",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    clipPath: "url(#clip0_4945_23895)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M33 17C33 7.8873 25.6127 0.5 16.5 0.5C7.3873 0.5 0 7.8873 0 17C0 25.2355 6.03378 32.0617 13.9219 33.2996V21.7695H9.73242V17H13.9219V13.3648C13.9219 9.22953 16.3853 6.94531 20.1542 6.94531C21.9589 6.94531 23.8477 7.26758 23.8477 7.26758V11.3281H21.7671C19.7175 11.3281 19.0781 12.6001 19.0781 13.9062V17H23.6543L22.9228 21.7695H19.0781V33.2996C26.9662 32.0617 33 25.2355 33 17Z",
                                        fill: "#003B5C"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: "clip0_4945_23895",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "33",
                                            height: "33",
                                            fill: "white",
                                            transform: "translate(0 0.5)"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                            lineNumber: 74,
                            columnNumber: 15
                        }, this)
                    },
                    {
                        href: "/",
                        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "34",
                            viewBox: "0 0 33 34",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M25.2006 3.11792H29.8391L19.7053 14.7002L31.627 30.4611H22.2924L14.9813 20.9022L6.61563 30.4611H1.9743L12.8134 18.0725L1.37695 3.11792H10.9485L17.5571 11.8551L25.2006 3.11792ZM23.5726 27.6847H26.1429L9.55187 5.74848H6.79371L23.5726 27.6847Z",
                                fill: "#003B5C"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this)
                    },
                    {
                        href: "/",
                        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "34",
                            viewBox: "0 0 33 34",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    clipPath: "url(#clip0_4945_23897)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M30.5572 0.5H2.43633C1.08926 0.5 0 1.56348 0 2.87832V31.1152C0 32.4301 1.08926 33.5 2.43633 33.5H30.5572C31.9043 33.5 33 32.4301 33 31.1217V2.87832C33 1.56348 31.9043 0.5 30.5572 0.5ZM9.79043 28.6209H4.89199V12.8686H9.79043V28.6209ZM7.34121 10.7223C5.76856 10.7223 4.49883 9.45254 4.49883 7.88633C4.49883 6.32012 5.76856 5.05039 7.34121 5.05039C8.90742 5.05039 10.1771 6.32012 10.1771 7.88633C10.1771 9.44609 8.90742 10.7223 7.34121 10.7223ZM28.1209 28.6209H23.2289V20.9639C23.2289 19.1398 23.1967 16.7873 20.683 16.7873C18.1371 16.7873 17.7504 18.7789 17.7504 20.835V28.6209H12.8648V12.8686H17.557V15.0213H17.6215C18.2725 13.7838 19.8709 12.4754 22.2492 12.4754C27.2057 12.4754 28.1209 15.7367 28.1209 19.9777V28.6209Z",
                                        fill: "#003B5C"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: "clip0_4945_23897",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "33",
                                            height: "33",
                                            fill: "white",
                                            transform: "translate(0 0.5)"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 135,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                            lineNumber: 120,
                            columnNumber: 15
                        }, this)
                    },
                    {
                        href: "/",
                        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "39",
                            height: "32",
                            viewBox: "0 0 39 32",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M5.5 2H33.5C35.425 2 37 3.575 37 5.5V26.5C37 28.425 35.425 30 33.5 30H5.5C3.575 30 2 28.425 2 26.5V5.5C2 3.575 3.575 2 5.5 2Z",
                                    stroke: "#003B5C",
                                    strokeWidth: "3",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M37 5.5L19.5 17.75L2 5.5",
                                    stroke: "#003B5C",
                                    strokeWidth: "3",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                            lineNumber: 149,
                            columnNumber: 15
                        }, this)
                    }
                ]
            },
            cards: [
                {
                    imgSrc: "/images/office.png",
                    title: "Download Economy at a Glance June 2024",
                    linkText: "Download",
                    linkHref: "#",
                    hasOverlay: true
                },
                {
                    imgSrc: "/images/office.png",
                    title: "Get Economy at a Glance Delivered Monthly",
                    text: "Join the Houston: Economy at a Glance mailing list to get each month's edition sent directly to your inbox",
                    linkText: "Subscribe",
                    linkHref: "#",
                    hasOverlay: false,
                    isWhite: true
                }
            ]
        }
    };
    // Event handlers
    const handleExpandClick = (index)=>{
        setCurrentSlide(index);
        setIsOverlayActive(true);
    };
    const handleClose = ()=>{
        setIsOverlayActive(false);
    };
    const handleNext = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % pageContent.innerContents.length);
    };
    const handlePrev = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + pageContent.innerContents.length) % pageContent.innerContents.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `Detail ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].Detail}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].Overlay} ${isOverlayActive ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "MiddleInner relative table text-center h-full w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "Vmiddle table-cell align-middle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "VideoWrap relative max-w-[1280px] m-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "videoContainer relative max-w-[1280px] m-auto pl-[20px] pr-[20px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ActiveItem h-full w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "InnerActiveItem",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `ActiveImgWrap ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].ActiveImgWrap} px-[50px] relative`,
                                                    children: pageContent.innerContents[currentSlide].imgSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: pageContent.innerContents[currentSlide].imgSrc,
                                                        alt: "Slide",
                                                        width: 500,
                                                        height: 500,
                                                        style: {
                                                            width: "100%",
                                                            height: "auto"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this),
                                                Array.isArray(pageContent.innerContents[currentSlide].text) ? pageContent.innerContents[currentSlide].text.map((paragraph, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white pt-[15px]",
                                                        children: paragraph
                                                    }, idx, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 250,
                                                        columnNumber: 27
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white pt-[15px]",
                                                    children: pageContent.innerContents[currentSlide].text
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                    lineNumber: 256,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rightBtn absolute top-0 bottom-0 m-auto right-0 w-[50px] h-[50px] cursor-pointer",
                                            onClick: handleNext,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/rightslidebtn.svg",
                                                alt: "Next",
                                                width: 50,
                                                height: 50
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                lineNumber: 265,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "leftBtn absolute top-0 bottom-0 m-auto left-0 w-[50px] h-[50px] cursor-pointer",
                                            onClick: handlePrev,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/leftsliderbtn.svg",
                                                alt: "Previous",
                                                width: 50,
                                                height: 50
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                lineNumber: 276,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "closeBtn absolute top-0 right-0 w-[50px] h-[50px] cursor-pointer",
                                            onClick: handleClose,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/closegreen-btn.svg",
                                                alt: "Close",
                                                width: 50,
                                                height: 50
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                lineNumber: 287,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `introWrap ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].introWrap}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "uppercase tracking-[5px]",
                                children: pageContent.intro.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "uppercase mt-[20px] tracking-[0.2px]",
                                children: pageContent.intro.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-[20px] tracking-[0.3px] font-medium",
                                children: pageContent.intro.description
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "mt-[20px] tracking-[0.2px] text-black",
                                children: pageContent.intro.published
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "OuterWrap mt-[100px] flex lg:block lg:mt-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "LeftContent pr-[100px] w-[75%] tabletlarge:pr-[30px] tabletlarge:w-[70%] lg:pr-[0] lg:w-[100%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `CardWrap ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].CardWrap}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `TitleWrap rounded-tl-[30px] rounded-tr-[30px] p-[30px] ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].TitleWrap} bg-[#003B5C]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Key March Takeaways"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 326,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Here are the facts to know about the Houston region this month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 327,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `CardContent rounded-bl-[30px] rounded-br-[30px] p-[30px] ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].CardContent} bg-white`,
                                                children: pageContent.takeaways.map((takeaway, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `CardItem ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].CardItem}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                children: takeaway.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                lineNumber: 336,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: takeaway.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                lineNumber: 337,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    pageContent.innerContents.map((content, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "InnerContent mt-[40px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "InnerWrap",
                                                children: [
                                                    content.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "uppercase mb-[20px] tracking-[0.2px]",
                                                        children: content.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this),
                                                    Array.isArray(content.text) ? content.text.map((paragraph, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-[20px] tracking-[0.3px] font-medium",
                                                            children: paragraph
                                                        }, idx, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                            lineNumber: 354,
                                                            columnNumber: 23
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-[20px] tracking-[0.3px] font-medium",
                                                        children: content.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 362,
                                                        columnNumber: 21
                                                    }, this),
                                                    content.imgSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `ImgInner relative ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].ImgInner} my-[40px]`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: content.imgSrc,
                                                                alt: "Content Image",
                                                                width: 500,
                                                                height: 500,
                                                                style: {
                                                                    width: "100%",
                                                                    height: "100%"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                lineNumber: 370,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `overlayBtn ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].overlayBtn} absolute bottom-[30px] right-[30px] w-[42px] h-[42px] cursor-pointer`,
                                                                onClick: ()=>handleExpandClick(index),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/images/greenbtn.svg",
                                                                    alt: "Expand",
                                                                    width: 42,
                                                                    height: 42,
                                                                    style: {
                                                                        width: "100%",
                                                                        height: "100%"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                lineNumber: 377,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this),
                                                    content.imgSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "btnWrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "overlay font-bold underline cursor-pointer",
                                                            onClick: ()=>handleExpandClick(index),
                                                            children: "Click to Expand"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                            lineNumber: 393,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `RightContent ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].RightContent} w-[25%] tabletlarge:w-[30%] tablet:w-[50%] phablet:w-[50%] sm:w-[100%]`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "socialIcon w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "socialWrpa",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "font-bold",
                                                    children: pageContent.rightContent.social.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                    lineNumber: 412,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex pt-[30px]",
                                                    children: pageContent.rightContent.social.icons.map((icon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "iconWrap max-w-[33px] max-h-[33px] mr-[27px] overflow-hidden",
                                                            href: icon.href,
                                                            "data-cursor-expand": "",
                                                            children: icon.svg
                                                        }, index, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, this),
                                        pageContent.rightContent.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `card my-[60px] relative ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].card} ${card.isWhite ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].cardWhite : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `ImgWrap absolute top-0 w-full h-full overflow-hidden ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$styles$2f$Detail$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].ImgWrap}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: card.imgSrc,
                                                            alt: "Card Image",
                                                            width: 500,
                                                            height: 500,
                                                            style: {
                                                                width: "100%",
                                                                height: "100%"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                            lineNumber: 438,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 435,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "CardContent p-[30px] relative z-[4]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: card.isWhite ? "text-black" : "text-white",
                                                                children: card.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                lineNumber: 447,
                                                                columnNumber: 21
                                                            }, this),
                                                            card.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: card.isWhite ? "pt-[20px] text-black" : "pt-[20px] text-white",
                                                                children: card.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                lineNumber: 451,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "btnWrap mt-[20px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: card.linkHref,
                                                                    className: card.isWhite ? "link-white text-black" : "link-white text-white",
                                                                    "data-cursor-expand": "",
                                                                    children: card.linkText
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                                lineNumber: 461,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                        lineNumber: 446,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/test/src/components/Detail.jsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s(Detail, "tWCEB7cTHTskhLy8BwLjAZ6GCJI=");
_c = Detail;
var _c;
__turbopack_context__.k.register(_c, "Detail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/test/src/components/ChatBot.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function ChatBot() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBot.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatBot.useEffect"], [
        messages
    ]);
    const sendMessage = async ()=>{
        if (!input.trim() && !image) return;
        const newMessage = {
            role: "user",
            content: input.trim() || "Please analyze this image.",
            image: image ? URL.createObjectURL(image) : null
        };
        setMessages([
            ...messages,
            newMessage
        ]);
        setInput("");
        setLoading(true);
        try {
            // Hardcoded API key (replace with your actual key)
            const openaiApiKey = "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"; // Apna API key yahan daalo
            console.log("OpenAI API Key:", openaiApiKey);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let messagePayload = [
                {
                    role: "user",
                    content: input.trim() || "Please analyze this image."
                }
            ];
            if (image) {
                const base64Image = await convertImageToBase64(image);
                messagePayload = [
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: input.trim() || "What’s in this image?"
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: `data:image/jpeg;base64,${base64Image}`
                                }
                            }
                        ]
                    }
                ];
            }
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${openaiApiKey}`
                },
                body: JSON.stringify({
                    model: image ? "gpt-4o" : "gpt-3.5-turbo",
                    messages: messagePayload,
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            const data = await response.json();
            console.log("OpenAI API Response:", data);
            if (!response.ok || !data.choices || !data.choices.length) {
                throw new Error(data.error?.message || "Failed to get a valid response from OpenAI API.");
            }
            const botMessage = {
                role: "assistant",
                content: data.choices[0].message.content
            };
            setMessages([
                ...messages,
                newMessage,
                botMessage
            ]);
        } catch (error) {
            console.error("Error fetching response:", error.message);
            const errorMessage = {
                role: "assistant",
                content: `Sorry, I couldn’t process that: ${error.message}. Try again?`
            };
            setMessages([
                ...messages,
                newMessage,
                errorMessage
            ]);
        }
        setImage(null);
        setLoading(false);
    };
    const convertImageToBase64 = (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result.split(",")[1]);
            reader.onerror = (error)=>reject(error);
            reader.readAsDataURL(file);
        });
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) setImage(file);
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !loading) sendMessage();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full p-0 mx-auto h-screen flex flex-col bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "p-4 bg-blue-600 text-white text-center rounded-t-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold",
                    children: "ChatBot (Ajay)"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-auto overflow-y-auto bg-black p-4",
                children: [
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-gray-500",
                        children: "Start chatting or upload an image to analyze!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    messages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-4`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-xs p-3 rounded-lg ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`,
                                children: [
                                    typeof msg.content === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: msg.content
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this) : msg.content.map((item, i)=>item.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item.text
                                        }, i, false, {
                                            fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                            lineNumber: 149,
                                            columnNumber: 42
                                        }, this) : null),
                                    msg.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: msg.image,
                                        alt: "Uploaded by user",
                                        className: "mt-2 max-w-full rounded-lg",
                                        style: {
                                            maxHeight: "200px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-gray-100 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    onKeyPress: handleKeyPress,
                                    placeholder: "Type a message or ask about an image...",
                                    disabled: loading
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `p-2 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`,
                                    onClick: sendMessage,
                                    disabled: loading,
                                    children: loading ? "..." : "Send"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    className: "flex-1 p-2 border rounded-lg",
                                    onChange: handleImageChange,
                                    disabled: loading
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        image.name,
                                        " selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/test/src/components/ChatBot.jsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(ChatBot, "4GNGHYuEh4t+kSn2Uk2NDYWyx+0=");
_c = ChatBot;
var _c;
__turbopack_context__.k.register(_c, "ChatBot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/test/src/components/ChatGemini.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatGemini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ChatGemini() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatGemini.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatGemini.useEffect"], [
        messages
    ]);
    async function sendMessage() {
        if (!input.trim() && !image) return;
        const newMessage = {
            role: "user",
            content: input.trim() || "Please analyze this image.",
            image: image ? URL.createObjectURL(image) : null
        };
        setMessages((prevMessages)=>[
                ...prevMessages,
                newMessage
            ]);
        setInput("");
        setImage(null);
        try {
            let bodyContent = {
                contents: [
                    {
                        parts: [
                            {
                                text: input || "Describe this image"
                            }
                        ]
                    }
                ]
            };
            if (image) {
                const base64Image = await convertImageToBase64(image);
                bodyContent = {
                    contents: [
                        {
                            parts: [
                                {
                                    text: input || "What’s in this image?"
                                },
                                {
                                    inlineData: {
                                        mimeType: "image/jpeg",
                                        data: base64Image
                                    }
                                }
                            ]
                        }
                    ]
                };
            }
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDDEBDH-PoEgjf9z7I8mjrBkF1guMdQPRU`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bodyContent)
            });
            const data = await response.json();
            const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
            const botMessage = {
                role: "assistant",
                content: botReply
            };
            setMessages((prevMessages)=>[
                    ...prevMessages,
                    botMessage
                ]);
        } catch (error) {
            const errorMessage = {
                role: "assistant",
                content: `Error: ${error.message}`
            };
            setMessages((prevMessages)=>[
                    ...prevMessages,
                    errorMessage
                ]);
        }
    }
    const convertImageToBase64 = (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result.split(",")[1]);
            reader.onerror = (error)=>reject(error);
            reader.readAsDataURL(file);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "ChatGemini bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contentWrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white text-center capitalize",
                        children: "What can I help with?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "outerWrap min-h-[300px] bg-white p-[30px] mt-[50px]",
                        children: [
                            messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-black font-bold",
                                children: "Type a message or upload an image to start!"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            messages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "innerContent flex-wrap flex",
                                    style: {
                                        justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                                        marginBottom: "20px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "imgWrap max-w-[60%] p-[10px] overflow-hidden",
                                        style: {
                                            borderRadius: "8px",
                                            background: msg.role === "user" ? "#007bff" : "#e0e0e0",
                                            color: msg.role === "user" ? "white" : "black"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: msg.content
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            msg.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "h-auto",
                                                src: msg.image,
                                                alt: "Uploaded by user"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inputText w-full",
                        style: {
                            padding: "30px",
                            background: "#fff",
                            borderTop: "1px solid #ddd"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "userInput",
                                placeholder: "Type a message...",
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                style: {
                                    width: "100%",
                                    padding: "8px",
                                    marginBottom: "20px",
                                    marginRight: "10px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (e)=>setImage(e.target.files[0]),
                                style: {
                                    with: "100%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pink-btn mt-[20px] p-[10px] w-full ",
                                onClick: sendMessage,
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: "10px",
                                    color: "#666"
                                },
                                children: [
                                    image.name,
                                    " selected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/test/src/components/ChatGemini.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(ChatGemini, "y32Q+oqLx3iUKQNHHbYWTwbptFY=");
_c = ChatGemini;
var _c;
__turbopack_context__.k.register(_c, "ChatGemini");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/test/src/pages/Solution/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Solution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/HeroBanner.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Footer$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/Footer.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Detail$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/Detail.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$ChatBot$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/ChatBot.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$ChatGemini$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/test/src/components/ChatGemini.jsx [client] (ecmascript)");
;
;
;
;
;
;
function Solution() {
    const overlay = true;
    const heroBannerData = {
        heading: "Welcome! We are Clear Digital",
        title: "Solution",
        src: "/images/Latest-Brand-featured.jpg",
        alt: "Working Paper",
        video: false
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                overlay: overlay,
                heroBannerData: heroBannerData
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Solution/index.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Detail$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Solution/index.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$test$2f$src$2f$components$2f$Footer$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/test/src/pages/Solution/index.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/test/src/pages/Solution/index.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Solution;
var _c;
__turbopack_context__.k.register(_c, "Solution");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/Documents/GitHub/test/src/pages/Solution/index.jsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/Solution";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/Documents/GitHub/test/src/pages/Solution/index.jsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/Documents/GitHub/test/src/pages/Solution/index.jsx\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/Documents/GitHub/test/src/pages/Solution/index.jsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__624694ab._.js.map