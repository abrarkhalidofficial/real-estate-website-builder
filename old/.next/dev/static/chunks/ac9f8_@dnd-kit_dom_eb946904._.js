(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@dnd-kit+dom@0.1.21/node_modules/@dnd-kit/dom/utilities.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOMRectangle",
    ()=>DOMRectangle,
    "Listeners",
    ()=>Listeners,
    "PositionObserver",
    ()=>FrameObserver,
    "ProxiedElements",
    ()=>ProxiedElements,
    "ResizeNotifier",
    ()=>ResizeNotifier,
    "Scheduler",
    ()=>Scheduler,
    "ScrollDirection",
    ()=>ScrollDirection,
    "Styles",
    ()=>Styles,
    "animateTransform",
    ()=>animateTransform,
    "canScroll",
    ()=>canScroll,
    "canUseDOM",
    ()=>canUseDOM,
    "cloneElement",
    ()=>cloneElement,
    "computeTranslate",
    ()=>computeTranslate,
    "detectScrollIntent",
    ()=>detectScrollIntent,
    "generateUniqueId",
    ()=>generateUniqueId,
    "getBoundingRectangle",
    ()=>getBoundingRectangle,
    "getComputedStyles",
    ()=>getComputedStyles,
    "getDocument",
    ()=>getDocument,
    "getElementFromPoint",
    ()=>getElementFromPoint,
    "getFinalKeyframe",
    ()=>getFinalKeyframe,
    "getFirstScrollableAncestor",
    ()=>getFirstScrollableAncestor,
    "getFrameElement",
    ()=>getFrameElement,
    "getFrameTransform",
    ()=>getFrameTransform,
    "getScrollableAncestors",
    ()=>getScrollableAncestors,
    "getViewportBoundingRectangle",
    ()=>getViewportBoundingRectangle,
    "getVisibleBoundingRectangle",
    ()=>getVisibleBoundingRectangle,
    "getWindow",
    ()=>getWindow,
    "hidePopover",
    ()=>hidePopover,
    "inverseTransform",
    ()=>inverseTransform,
    "isDocumentScrollingElement",
    ()=>isDocumentScrollingElement,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isKeyboardEvent",
    ()=>isKeyboardEvent,
    "isKeyframeEffect",
    ()=>isKeyframeEffect,
    "isPointerEvent",
    ()=>isPointerEvent,
    "isSafari",
    ()=>isSafari,
    "isTextInput",
    ()=>isTextInput,
    "parseTransform",
    ()=>parseTransform,
    "parseTranslate",
    ()=>parseTranslate,
    "scheduler",
    ()=>scheduler,
    "scrollIntoViewIfNeeded",
    ()=>scrollIntoViewIfNeeded,
    "showPopover",
    ()=>showPopover,
    "supportsPopover",
    ()=>supportsPopover,
    "supportsStyle",
    ()=>supportsStyle,
    "supportsViewTransition",
    ()=>supportsViewTransition,
    "timeout",
    ()=>timeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+geometry@0.1.21/node_modules/@dnd-kit/geometry/dist/index.mjs [app-client] (ecmascript)");
;
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
// src/utilities/type-guards/isKeyframeEffect.ts
function isKeyframeEffect(effect) {
    if (!effect) return false;
    if (effect instanceof KeyframeEffect) return true;
    return "getKeyframes" in effect && typeof effect.getKeyframes === "function";
}
// src/utilities/animations/getFinalKeyframe.ts
function getFinalKeyframe(element, match) {
    const animations2 = element.getAnimations();
    if (animations2.length > 0) {
        for (const animation of animations2){
            if (animation.playState !== "running") continue;
            const { effect } = animation;
            const keyframes = isKeyframeEffect(effect) ? effect.getKeyframes() : [];
            const matchedKeyframes = keyframes.filter(match);
            if (matchedKeyframes.length > 0) {
                return [
                    matchedKeyframes[matchedKeyframes.length - 1],
                    animation
                ];
            }
        }
    }
    return null;
}
// src/utilities/bounding-rectangle/getBoundingRectangle.ts
function getBoundingRectangle(element) {
    const { width, height, top, left, bottom, right } = element.getBoundingClientRect();
    return {
        width,
        height,
        top,
        left,
        bottom,
        right
    };
}
// src/utilities/execution-context/canUseDOM.ts
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
// src/utilities/type-guards/isWindow.ts
function isWindow(element) {
    const elementString = Object.prototype.toString.call(element);
    return elementString === "[object Window]" || // In Electron context the Window object serializes to [object global]
    elementString === "[object global]";
}
// src/utilities/type-guards/isNode.ts
function isNode(node) {
    return "nodeType" in node;
}
// src/utilities/execution-context/getWindow.ts
function getWindow(target) {
    var _a, _b, _c;
    if (!target) {
        return window;
    }
    if (isWindow(target)) {
        return target;
    }
    if (!isNode(target)) {
        return window;
    }
    if ("defaultView" in target) {
        return (_a = target.defaultView) != null ? _a : window;
    }
    return (_c = (_b = target.ownerDocument) == null ? void 0 : _b.defaultView) != null ? _c : window;
}
// src/utilities/type-guards/isDocument.ts
function isDocument(node) {
    const { Document } = getWindow(node);
    return node instanceof Document || "nodeType" in node && node.nodeType === Node.DOCUMENT_NODE;
}
// src/utilities/type-guards/isHTMLElement.ts
function isHTMLElement(node) {
    if (!node || isWindow(node)) return false;
    return node instanceof getWindow(node).HTMLElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("html");
}
// src/utilities/type-guards/isSVGElement.ts
function isSVGElement(node) {
    return node instanceof getWindow(node).SVGElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("svg");
}
// src/utilities/execution-context/getDocument.ts
function getDocument(target) {
    if (!target) {
        return document;
    }
    if (isWindow(target)) {
        return target.document;
    }
    if (!isNode(target)) {
        return document;
    }
    if (isDocument(target)) {
        return target;
    }
    if (isHTMLElement(target) || isSVGElement(target)) {
        return target.ownerDocument;
    }
    return document;
}
// src/utilities/bounding-rectangle/getViewportBoundingRectangle.ts
function getViewportBoundingRectangle(element) {
    const { documentElement } = getDocument(element);
    const width = documentElement.clientWidth;
    const height = documentElement.clientHeight;
    return {
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        width,
        height
    };
}
// src/utilities/bounding-rectangle/isOverflowVisible.ts
function isOverflowVisible(element, style) {
    if (isDetailsElement(element) && element.open === false) {
        return false;
    }
    const { overflow, overflowX, overflowY } = getComputedStyle(element);
    return overflow === "visible" && overflowX === "visible" && overflowY === "visible";
}
function isDetailsElement(element) {
    return element.tagName === "DETAILS";
}
// src/utilities/bounding-rectangle/getVisibleBoundingRectangle.ts
function getVisibleBoundingRectangle(element, boundingClientRect = element.getBoundingClientRect(), margin = 0) {
    var _a;
    let rect = boundingClientRect;
    const { ownerDocument } = element;
    const ownerWindow = (_a = ownerDocument.defaultView) != null ? _a : window;
    let ancestor = element.parentElement;
    while(ancestor && ancestor !== ownerDocument.documentElement){
        if (!isOverflowVisible(ancestor)) {
            const ancestorRect = ancestor.getBoundingClientRect();
            const marginTop = margin * (ancestorRect.bottom - ancestorRect.top);
            const marginRight = margin * (ancestorRect.right - ancestorRect.left);
            const marginBottom = margin * (ancestorRect.bottom - ancestorRect.top);
            const marginLeft = margin * (ancestorRect.right - ancestorRect.left);
            rect = {
                top: Math.max(rect.top, ancestorRect.top - marginTop),
                right: Math.min(rect.right, ancestorRect.right + marginRight),
                bottom: Math.min(rect.bottom, ancestorRect.bottom + marginBottom),
                left: Math.max(rect.left, ancestorRect.left - marginLeft),
                width: 0,
                // Will be calculated next
                height: 0
            };
            rect.width = rect.right - rect.left;
            rect.height = rect.bottom - rect.top;
        }
        ancestor = ancestor.parentElement;
    }
    const viewportWidth = ownerWindow.innerWidth;
    const viewportHeight = ownerWindow.innerHeight;
    const viewportMarginY = margin * viewportHeight;
    const viewportMarginX = margin * viewportWidth;
    rect = {
        top: Math.max(rect.top, 0 - viewportMarginY),
        right: Math.min(rect.right, viewportWidth + viewportMarginX),
        bottom: Math.min(rect.bottom, viewportHeight + viewportMarginY),
        left: Math.max(rect.left, 0 - viewportMarginX),
        width: 0,
        // Will be calculated next
        height: 0
    };
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
    if (rect.width < 0) {
        rect.width = 0;
    }
    if (rect.height < 0) {
        rect.height = 0;
    }
    return rect;
}
// src/utilities/execution-context/isSafari.ts
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
// src/utilities/element/cloneElement.ts
function cloneElement(element) {
    const selector = "input, textarea, select, canvas, [contenteditable]";
    const clonedElement = element.cloneNode(true);
    const fields = Array.from(element.querySelectorAll(selector));
    const clonedFields = Array.from(clonedElement.querySelectorAll(selector));
    clonedFields.forEach((field, index)=>{
        const originalField = fields[index];
        if (isField(field) && isField(originalField)) {
            if (field.type !== "file") {
                field.value = originalField.value;
            }
            if (field.type === "radio" && field.name) {
                field.name = `Cloned__${field.name}`;
            }
        }
        if (isCanvasElement(field) && isCanvasElement(originalField) && originalField.width > 0 && originalField.height > 0) {
            const destCtx = field.getContext("2d");
            destCtx == null ? void 0 : destCtx.drawImage(originalField, 0, 0);
        }
    });
    return clonedElement;
}
function isField(element) {
    return "value" in element;
}
function isCanvasElement(element) {
    return element.tagName === "CANVAS";
}
// src/utilities/element/getElementFromPoint.ts
function getElementFromPoint(document2, { x, y }) {
    const element = document2.elementFromPoint(x, y);
    if (isIFrameElement(element)) {
        const { contentDocument } = element;
        if (contentDocument) {
            const { left, top } = element.getBoundingClientRect();
            return getElementFromPoint(contentDocument, {
                x: x - left,
                y: y - top
            });
        }
    }
    return element;
}
function isIFrameElement(element) {
    return (element == null ? void 0 : element.tagName) === "IFRAME";
}
// src/utilities/element/proxiedElements.ts
var ProxiedElements = /* @__PURE__ */ new WeakMap();
// src/utilities/event-listeners/Listeners.ts
var Listeners = class {
    constructor(){
        this.entries = /* @__PURE__ */ new Set();
        this.clear = ()=>{
            for (const entry of this.entries){
                const [target, { type, listener, options }] = entry;
                target.removeEventListener(type, listener, options);
            }
            this.entries.clear();
        };
    }
    bind(target, input) {
        const listeners = Array.isArray(input) ? input : [
            input
        ];
        const entries = [];
        for (const descriptor of listeners){
            const { type, listener, options } = descriptor;
            const entry = [
                target,
                descriptor
            ];
            target.addEventListener(type, listener, options);
            this.entries.add(entry);
            entries.push(entry);
        }
        return function cleanup() {
            for (const [target2, { type, listener, options }] of entries){
                target2.removeEventListener(type, listener, options);
            }
        };
    }
};
// src/utilities/frame/getFrameElement.ts
function getFrameElement(el) {
    const refWindow = el == null ? void 0 : el.ownerDocument.defaultView;
    if (refWindow && refWindow.self !== refWindow.parent) {
        return refWindow.frameElement;
    }
}
// src/utilities/frame/getFrameElements.ts
function getFrameElements(el) {
    const frames = /* @__PURE__ */ new Set();
    let frame = getFrameElement(el);
    while(frame){
        frames.add(frame);
        frame = getFrameElement(frame);
    }
    return frames;
}
// src/utilities/scheduling/timeout.ts
function timeout(callback, duration) {
    const id = setTimeout(callback, duration);
    return ()=>clearTimeout(id);
}
// src/utilities/scheduling/throttle.ts
function throttle(func, limit) {
    const time = ()=>performance.now();
    let cancel;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = time();
        } else {
            cancel == null ? void 0 : cancel();
            cancel = timeout(()=>{
                func.apply(context, args);
                lastRan = time();
            }, limit - (time() - lastRan));
        }
    };
}
// src/utilities/bounding-rectangle/isRectEqual.ts
function isRectEqual(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    return a.top == b.top && a.left == b.left && a.right == b.right && a.bottom == b.bottom;
}
// src/utilities/bounding-rectangle/isVisible.ts
function isVisible(element, boundingClientRect = element.getBoundingClientRect()) {
    const { width, height } = getVisibleBoundingRectangle(element, boundingClientRect);
    return width > 0 && height > 0;
}
// src/utilities/observers/ResizeNotifier.ts
var Observer = canUseDOM ? ResizeObserver : class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};
var _initialized;
var ResizeNotifier = class extends Observer {
    constructor(callback){
        super((entries)=>{
            if (!__privateGet(this, _initialized)) {
                __privateSet(this, _initialized, true);
                return;
            }
            callback(entries, this);
        });
        __privateAdd(this, _initialized, false);
    }
};
_initialized = new WeakMap();
// src/utilities/observers/PositionObserver.ts
var threshold = Array.from({
    length: 100
}, (_, index)=>index / 100);
var THROTTLE_INTERVAL = 75;
var _visible, _previousBoundingClientRect, _resizeObserver, _positionObserver, _visibilityObserver, _debug, _disconnected, _observePosition, _PositionObserver_instances, notify_fn, updateDebug_fn;
var PositionObserver = class {
    constructor(element, callback, options = {
        debug: false,
        skipInitial: false
    }){
        this.element = element;
        this.callback = callback;
        __privateAdd(this, _PositionObserver_instances);
        this.disconnect = ()=>{
            var _a, _b, _c;
            __privateSet(this, _disconnected, true);
            (_a = __privateGet(this, _resizeObserver)) == null ? void 0 : _a.disconnect();
            (_b = __privateGet(this, _positionObserver)) == null ? void 0 : _b.disconnect();
            __privateGet(this, _visibilityObserver).disconnect();
            (_c = __privateGet(this, _debug)) == null ? void 0 : _c.remove();
        };
        __privateAdd(this, _visible, true);
        __privateAdd(this, _previousBoundingClientRect);
        __privateAdd(this, _resizeObserver);
        __privateAdd(this, _positionObserver);
        __privateAdd(this, _visibilityObserver);
        __privateAdd(this, _debug);
        __privateAdd(this, _disconnected, false);
        __privateAdd(this, _observePosition, throttle(()=>{
            var _a, _b, _c;
            const { element } = this;
            (_a = __privateGet(this, _positionObserver)) == null ? void 0 : _a.disconnect();
            if (__privateGet(this, _disconnected) || !__privateGet(this, _visible) || !element.isConnected) {
                return;
            }
            const root = (_b = element.ownerDocument) != null ? _b : document;
            const { innerHeight, innerWidth } = (_c = root.defaultView) != null ? _c : window;
            const clientRect = element.getBoundingClientRect();
            const visibleRect = getVisibleBoundingRectangle(element, clientRect);
            const { top, left, bottom, right } = visibleRect;
            const insetTop = -Math.floor(top);
            const insetLeft = -Math.floor(left);
            const insetRight = -Math.floor(innerWidth - right);
            const insetBottom = -Math.floor(innerHeight - bottom);
            const rootMargin = `${insetTop}px ${insetRight}px ${insetBottom}px ${insetLeft}px`;
            this.boundingClientRect = clientRect;
            __privateSet(this, _positionObserver, new IntersectionObserver((entries)=>{
                const [entry] = entries;
                const { intersectionRect } = entry;
                const intersectionRatio = entry.intersectionRatio !== 1 ? entry.intersectionRatio : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"].intersectionRatio(intersectionRect, getVisibleBoundingRectangle(element));
                if (intersectionRatio !== 1) {
                    __privateGet(this, _observePosition).call(this);
                }
            }, {
                threshold,
                rootMargin,
                root
            }));
            __privateGet(this, _positionObserver).observe(element);
            __privateMethod(this, _PositionObserver_instances, notify_fn).call(this);
        }, THROTTLE_INTERVAL));
        this.boundingClientRect = element.getBoundingClientRect();
        __privateSet(this, _visible, isVisible(element, this.boundingClientRect));
        let initial = true;
        this.callback = (boundingClientRect)=>{
            if (initial) {
                initial = false;
                if (options.skipInitial) return;
            }
            callback(boundingClientRect);
        };
        const root = element.ownerDocument;
        if (options == null ? void 0 : options.debug) {
            __privateSet(this, _debug, document.createElement("div"));
            __privateGet(this, _debug).style.background = "rgba(0,0,0,0.15)";
            __privateGet(this, _debug).style.position = "fixed";
            __privateGet(this, _debug).style.pointerEvents = "none";
            root.body.appendChild(__privateGet(this, _debug));
        }
        __privateSet(this, _visibilityObserver, new IntersectionObserver((entries)=>{
            var _a, _b;
            const entry = entries[entries.length - 1];
            const { boundingClientRect, isIntersecting: visible } = entry;
            const { width, height } = boundingClientRect;
            const previousVisible = __privateGet(this, _visible);
            __privateSet(this, _visible, visible);
            if (!width && !height) return;
            if (previousVisible && !visible) {
                (_a = __privateGet(this, _positionObserver)) == null ? void 0 : _a.disconnect();
                this.callback(null);
                (_b = __privateGet(this, _resizeObserver)) == null ? void 0 : _b.disconnect();
                __privateSet(this, _resizeObserver, void 0);
                if (__privateGet(this, _debug)) __privateGet(this, _debug).style.visibility = "hidden";
            } else {
                __privateGet(this, _observePosition).call(this);
            }
            if (visible && !__privateGet(this, _resizeObserver)) {
                __privateSet(this, _resizeObserver, new ResizeNotifier(__privateGet(this, _observePosition)));
                __privateGet(this, _resizeObserver).observe(element);
            }
        }, {
            threshold,
            root
        }));
        if (__privateGet(this, _visible) && !options.skipInitial) {
            this.callback(this.boundingClientRect);
        }
        __privateGet(this, _visibilityObserver).observe(element);
    }
};
_visible = new WeakMap();
_previousBoundingClientRect = new WeakMap();
_resizeObserver = new WeakMap();
_positionObserver = new WeakMap();
_visibilityObserver = new WeakMap();
_debug = new WeakMap();
_disconnected = new WeakMap();
_observePosition = new WeakMap();
_PositionObserver_instances = new WeakSet();
notify_fn = function() {
    if (__privateGet(this, _disconnected)) return;
    __privateMethod(this, _PositionObserver_instances, updateDebug_fn).call(this);
    if (isRectEqual(this.boundingClientRect, __privateGet(this, _previousBoundingClientRect))) return;
    this.callback(this.boundingClientRect);
    __privateSet(this, _previousBoundingClientRect, this.boundingClientRect);
};
updateDebug_fn = function() {
    if (__privateGet(this, _debug)) {
        const { top, left, width, height } = getVisibleBoundingRectangle(this.element);
        __privateGet(this, _debug).style.overflow = "hidden";
        __privateGet(this, _debug).style.visibility = "visible";
        __privateGet(this, _debug).style.top = `${Math.floor(top)}px`;
        __privateGet(this, _debug).style.left = `${Math.floor(left)}px`;
        __privateGet(this, _debug).style.width = `${Math.floor(width)}px`;
        __privateGet(this, _debug).style.height = `${Math.floor(height)}px`;
    }
};
// src/utilities/observers/FrameObserver.ts
var framePositionObservers = /* @__PURE__ */ new WeakMap();
var scrollListeners = /* @__PURE__ */ new WeakMap();
function addFrameListener(frame, callback) {
    let cached = framePositionObservers.get(frame);
    if (!cached) {
        const observer = new PositionObserver(frame, (boundingClientRect)=>{
            const cached2 = framePositionObservers.get(frame);
            if (!cached2) return;
            cached2.callbacks.forEach((callback2)=>callback2(boundingClientRect));
        }, {
            skipInitial: true
        });
        cached = {
            disconnect: observer.disconnect,
            callbacks: /* @__PURE__ */ new Set()
        };
    }
    cached.callbacks.add(callback);
    framePositionObservers.set(frame, cached);
    return ()=>{
        cached.callbacks.delete(callback);
        if (cached.callbacks.size === 0) {
            framePositionObservers.delete(frame);
            cached.disconnect();
        }
    };
}
function observeParentFrames(frames, callback) {
    const cleanup = /* @__PURE__ */ new Set();
    for (const frame of frames){
        const remove = addFrameListener(frame, callback);
        cleanup.add(remove);
    }
    return ()=>cleanup.forEach((remove)=>remove());
}
function addScrollListener(element, callback) {
    var _a;
    const doc = element.ownerDocument;
    if (!scrollListeners.has(doc)) {
        const controller = new AbortController();
        const listeners2 = /* @__PURE__ */ new Set();
        document.addEventListener("scroll", (event)=>listeners2.forEach((listener)=>listener(event)), {
            capture: true,
            passive: true,
            signal: controller.signal
        });
        scrollListeners.set(doc, {
            disconnect: ()=>controller.abort(),
            listeners: listeners2
        });
    }
    const { listeners, disconnect } = (_a = scrollListeners.get(doc)) != null ? _a : {};
    if (!listeners || !disconnect) return ()=>{};
    listeners.add(callback);
    return ()=>{
        listeners.delete(callback);
        if (listeners.size === 0) {
            disconnect();
            scrollListeners.delete(doc);
        }
    };
}
var _elementObserver, _disconnected2, _frames, _handleScroll;
var FrameObserver = class {
    constructor(element, callback, options){
        this.callback = callback;
        __privateAdd(this, _elementObserver);
        __privateAdd(this, _disconnected2, false);
        __privateAdd(this, _frames);
        __privateAdd(this, _handleScroll, throttle((event)=>{
            if (__privateGet(this, _disconnected2)) return;
            if (!event.target) return;
            if ("contains" in event.target && typeof event.target.contains === "function") {
                for (const frame of __privateGet(this, _frames)){
                    if (event.target.contains(frame)) {
                        this.callback(__privateGet(this, _elementObserver).boundingClientRect);
                        break;
                    }
                }
            }
        }, THROTTLE_INTERVAL));
        const frames = getFrameElements(element);
        const unobserveParentFrames = observeParentFrames(frames, callback);
        const removeScrollListener = addScrollListener(element, __privateGet(this, _handleScroll));
        __privateSet(this, _frames, frames);
        __privateSet(this, _elementObserver, new PositionObserver(element, callback, options));
        this.disconnect = ()=>{
            if (__privateGet(this, _disconnected2)) return;
            __privateSet(this, _disconnected2, true);
            unobserveParentFrames();
            removeScrollListener();
            __privateGet(this, _elementObserver).disconnect();
        };
    }
};
_elementObserver = new WeakMap();
_disconnected2 = new WeakMap();
_frames = new WeakMap();
_handleScroll = new WeakMap();
// src/utilities/popover/supportsPopover.ts
function supportsPopover(element) {
    return "showPopover" in element && "hidePopover" in element && typeof element.showPopover === "function" && typeof element.hidePopover === "function";
}
// src/utilities/popover/showPopover.ts
function showPopover(element) {
    try {
        if (supportsPopover(element) && element.isConnected && element.hasAttribute("popover") && // This selector can throw an error in browsers that don't support it
        !element.matches(":popover-open")) {
            element.showPopover();
        }
    } catch (error) {}
}
// src/utilities/popover/hidePopover.ts
function hidePopover(element) {
    try {
        if (supportsPopover(element) && element.isConnected && element.hasAttribute("popover") && // This selector can throw an error in browsers that don't support it
        element.matches(":popover-open")) {
            element.hidePopover();
        }
    } catch (error) {}
}
// src/utilities/scroll/documentScrollingElement.ts
function isDocumentScrollingElement(element) {
    if (!canUseDOM || !element) {
        return false;
    }
    return element === getDocument(element).scrollingElement;
}
// src/utilities/scroll/getScrollPosition.ts
function getScrollPosition(scrollableElement) {
    const window2 = getWindow(scrollableElement);
    const rect = isDocumentScrollingElement(scrollableElement) ? getViewportBoundingRectangle(scrollableElement) : getBoundingRectangle(scrollableElement);
    const dimensions = isDocumentScrollingElement(scrollableElement) ? {
        height: window2.innerHeight,
        width: window2.innerWidth
    } : {
        height: scrollableElement.clientHeight,
        width: scrollableElement.clientWidth
    };
    const position = {
        current: {
            x: scrollableElement.scrollLeft,
            y: scrollableElement.scrollTop
        },
        max: {
            x: scrollableElement.scrollWidth - dimensions.width,
            y: scrollableElement.scrollHeight - dimensions.height
        }
    };
    const isTop = position.current.y <= 0;
    const isLeft = position.current.x <= 0;
    const isBottom = position.current.y >= position.max.y;
    const isRight = position.current.x >= position.max.x;
    return {
        rect,
        position,
        isTop,
        isLeft,
        isBottom,
        isRight
    };
}
// src/utilities/scroll/canScroll.ts
function canScroll(scrollableElement, by) {
    const { isTop, isBottom, isLeft, isRight, position } = getScrollPosition(scrollableElement);
    const { x, y } = by != null ? by : {
        x: 0,
        y: 0
    };
    const top = !isTop && position.current.y + y > 0;
    const bottom = !isBottom && position.current.y + y < position.max.y;
    const left = !isLeft && position.current.x + x > 0;
    const right = !isRight && position.current.x + x < position.max.x;
    return {
        top,
        bottom,
        left,
        right,
        x: left || right,
        y: top || bottom
    };
}
// src/utilities/scheduling/scheduler.ts
var Scheduler = class {
    constructor(scheduler4){
        this.scheduler = scheduler4;
        this.pending = false;
        this.tasks = /* @__PURE__ */ new Set();
        this.resolvers = /* @__PURE__ */ new Set();
        this.flush = ()=>{
            const { tasks, resolvers } = this;
            this.pending = false;
            this.tasks = /* @__PURE__ */ new Set();
            this.resolvers = /* @__PURE__ */ new Set();
            for (const task of tasks){
                task();
            }
            for (const resolve of resolvers){
                resolve();
            }
        };
    }
    schedule(task) {
        this.tasks.add(task);
        if (!this.pending) {
            this.pending = true;
            this.scheduler(this.flush);
        }
        return new Promise((resolve)=>this.resolvers.add(resolve));
    }
};
var scheduler = new Scheduler((callback)=>{
    if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
    } else {
        callback();
    }
});
// src/utilities/styles/getComputedStyles.ts
var scheduler2 = new Scheduler((callback)=>setTimeout(callback, 50));
var cachedStyles = /* @__PURE__ */ new Map();
var clear = cachedStyles.clear.bind(cachedStyles);
function getComputedStyles(element, cached = false) {
    if (!cached) return computeStyles(element);
    let styles = cachedStyles.get(element);
    if (styles) return styles;
    styles = computeStyles(element);
    cachedStyles.set(element, styles);
    scheduler2.schedule(clear);
    return styles;
}
function computeStyles(element) {
    return getWindow(element).getComputedStyle(element);
}
// src/utilities/scroll/isFixed.ts
function isFixed(node, computedStyle = getComputedStyles(node, true)) {
    return computedStyle.position === "fixed" || computedStyle.position === "sticky";
}
// src/utilities/scroll/isScrollable.ts
function isScrollable(element, computedStyle = getComputedStyles(element, true)) {
    const overflowRegex = /(auto|scroll|overlay)/;
    const properties = [
        "overflow",
        "overflowX",
        "overflowY"
    ];
    return properties.some((property)=>{
        const value = computedStyle[property];
        return typeof value === "string" ? overflowRegex.test(value) : false;
    });
}
// src/utilities/scroll/getScrollableAncestors.ts
var defaultOptions = {
    excludeElement: true
};
function getScrollableAncestors(element, options = defaultOptions) {
    const { limit, excludeElement } = options;
    const scrollParents = /* @__PURE__ */ new Set();
    function findScrollableAncestors(node) {
        if (limit != null && scrollParents.size >= limit) {
            return scrollParents;
        }
        if (!node) {
            return scrollParents;
        }
        if (isDocument(node) && node.scrollingElement != null && !scrollParents.has(node.scrollingElement)) {
            scrollParents.add(node.scrollingElement);
            return scrollParents;
        }
        if (!isHTMLElement(node)) {
            if (isSVGElement(node)) {
                return findScrollableAncestors(node.parentElement);
            }
            return scrollParents;
        }
        if (scrollParents.has(node)) {
            return scrollParents;
        }
        const computedStyle = getComputedStyles(node, true);
        if (excludeElement && node === element) ;
        else if (isScrollable(node, computedStyle)) {
            scrollParents.add(node);
        }
        if (isFixed(node, computedStyle)) {
            const { scrollingElement } = node.ownerDocument;
            if (scrollingElement) scrollParents.add(scrollingElement);
            return scrollParents;
        }
        return findScrollableAncestors(node.parentNode);
    }
    if (!element) {
        return scrollParents;
    }
    return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
    const [firstScrollableAncestor] = getScrollableAncestors(node, {
        limit: 1
    });
    return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
// src/utilities/frame/getFrameTransform.ts
function getFrameTransform(el, boundary = window.frameElement) {
    const transform = {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1
    };
    if (!el) return transform;
    let frame = getFrameElement(el);
    while(frame){
        if (frame === boundary) {
            return transform;
        }
        const rect = getBoundingRectangle(frame);
        const { x: scaleX, y: scaleY } = getScale(frame, rect);
        transform.x = transform.x + rect.left;
        transform.y = transform.y + rect.top;
        transform.scaleX = transform.scaleX * scaleX;
        transform.scaleY = transform.scaleY * scaleY;
        frame = getFrameElement(frame);
    }
    return transform;
}
function getScale(element, boundingRectangle = getBoundingRectangle(element)) {
    const width = Math.round(boundingRectangle.width);
    const height = Math.round(boundingRectangle.height);
    if (isHTMLElement(element)) {
        return {
            x: width / element.offsetWidth,
            y: height / element.offsetHeight
        };
    }
    const styles = getComputedStyles(element, true);
    return {
        x: (parseFloat(styles.width) || width) / width,
        y: (parseFloat(styles.height) || height) / height
    };
}
// src/utilities/transform/parseScale.ts
function parseScale(scale) {
    if (scale === "none") {
        return null;
    }
    const values = scale.split(" ");
    const x = parseFloat(values[0]);
    const y = parseFloat(values[1]);
    if (isNaN(x) && isNaN(y)) {
        return null;
    }
    return {
        x: isNaN(x) ? y : x,
        y: isNaN(y) ? x : y
    };
}
// src/utilities/transform/parseTranslate.ts
function parseTranslate(translate) {
    if (translate === "none") {
        return null;
    }
    const [x, y, z = "0"] = translate.split(" ");
    const output = {
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseInt(z, 10)
    };
    if (isNaN(output.x) && isNaN(output.y)) {
        return null;
    }
    return {
        x: isNaN(output.x) ? 0 : output.x,
        y: isNaN(output.y) ? 0 : output.y,
        z: isNaN(output.z) ? 0 : output.z
    };
}
// src/utilities/transform/parseTransform.ts
function parseTransform(computedStyles) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const { scale, transform, translate } = computedStyles;
    const parsedScale = parseScale(scale);
    const parsedTranslate = parseTranslate(translate);
    const parsedMatrix = parseTransformMatrix(transform);
    if (!parsedMatrix && !parsedScale && !parsedTranslate) {
        return null;
    }
    const normalizedScale = {
        x: (_a = parsedScale == null ? void 0 : parsedScale.x) != null ? _a : 1,
        y: (_b = parsedScale == null ? void 0 : parsedScale.y) != null ? _b : 1
    };
    const normalizedTranslate = {
        x: (_c = parsedTranslate == null ? void 0 : parsedTranslate.x) != null ? _c : 0,
        y: (_d = parsedTranslate == null ? void 0 : parsedTranslate.y) != null ? _d : 0
    };
    const normalizedMatrix = {
        x: (_e = parsedMatrix == null ? void 0 : parsedMatrix.x) != null ? _e : 0,
        y: (_f = parsedMatrix == null ? void 0 : parsedMatrix.y) != null ? _f : 0,
        scaleX: (_g = parsedMatrix == null ? void 0 : parsedMatrix.scaleX) != null ? _g : 1,
        scaleY: (_h = parsedMatrix == null ? void 0 : parsedMatrix.scaleY) != null ? _h : 1
    };
    return {
        x: normalizedTranslate.x + normalizedMatrix.x,
        y: normalizedTranslate.y + normalizedMatrix.y,
        z: (_i = parsedTranslate == null ? void 0 : parsedTranslate.z) != null ? _i : 0,
        scaleX: normalizedScale.x * normalizedMatrix.scaleX,
        scaleY: normalizedScale.y * normalizedMatrix.scaleY
    };
}
function parseTransformMatrix(transform) {
    if (transform.startsWith("matrix3d(")) {
        const transformArray = transform.slice(9, -1).split(/, /);
        return {
            x: +transformArray[12],
            y: +transformArray[13],
            scaleX: +transformArray[0],
            scaleY: +transformArray[5]
        };
    } else if (transform.startsWith("matrix(")) {
        const transformArray = transform.slice(7, -1).split(/, /);
        return {
            x: +transformArray[4],
            y: +transformArray[5],
            scaleX: +transformArray[0],
            scaleY: +transformArray[3]
        };
    }
    return null;
}
// src/utilities/scroll/detectScrollIntent.ts
var ScrollDirection = /* @__PURE__ */ ((ScrollDirection2)=>{
    ScrollDirection2[ScrollDirection2["Idle"] = 0] = "Idle";
    ScrollDirection2[ScrollDirection2["Forward"] = 1] = "Forward";
    ScrollDirection2[ScrollDirection2["Reverse"] = -1] = "Reverse";
    return ScrollDirection2;
})(ScrollDirection || {});
var defaultThreshold = {
    x: 0.2,
    y: 0.2
};
var defaultTolerance = {
    x: 10,
    y: 10
};
function detectScrollIntent(scrollableElement, coordinates, intent, acceleration = 25, thresholdPercentage = defaultThreshold, tolerance = defaultTolerance) {
    const { x, y } = coordinates;
    const { rect, isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollableElement);
    const frameTransform = getFrameTransform(scrollableElement);
    const computedStyles = getComputedStyles(scrollableElement, true);
    const parsedTransform = parseTransform(computedStyles);
    const isXAxisInverted = parsedTransform !== null ? (parsedTransform == null ? void 0 : parsedTransform.scaleX) < 0 : false;
    const isYAxisInverted = parsedTransform !== null ? (parsedTransform == null ? void 0 : parsedTransform.scaleY) < 0 : false;
    const scrollContainerRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](rect.left * frameTransform.scaleX + frameTransform.x, rect.top * frameTransform.scaleY + frameTransform.y, rect.width * frameTransform.scaleX, rect.height * frameTransform.scaleY);
    const direction = {
        x: 0 /* Idle */ ,
        y: 0 /* Idle */ 
    };
    const speed = {
        x: 0,
        y: 0
    };
    const threshold2 = {
        height: scrollContainerRect.height * thresholdPercentage.y,
        width: scrollContainerRect.width * thresholdPercentage.x
    };
    if ((!isTop || isYAxisInverted && !isBottom) && y <= scrollContainerRect.top + threshold2.height && (intent == null ? void 0 : intent.y) !== 1 /* Forward */  && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
        direction.y = isYAxisInverted ? 1 /* Forward */  : -1 /* Reverse */ ;
        speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold2.height - y) / threshold2.height);
    } else if ((!isBottom || isYAxisInverted && !isTop) && y >= scrollContainerRect.bottom - threshold2.height && (intent == null ? void 0 : intent.y) !== -1 /* Reverse */  && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
        direction.y = isYAxisInverted ? -1 /* Reverse */  : 1 /* Forward */ ;
        speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold2.height - y) / threshold2.height);
    }
    if ((!isRight || isXAxisInverted && !isLeft) && x >= scrollContainerRect.right - threshold2.width && (intent == null ? void 0 : intent.x) !== -1 /* Reverse */  && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
        direction.x = isXAxisInverted ? -1 /* Reverse */  : 1 /* Forward */ ;
        speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold2.width - x) / threshold2.width);
    } else if ((!isLeft || isXAxisInverted && !isRight) && x <= scrollContainerRect.left + threshold2.width && (intent == null ? void 0 : intent.x) !== 1 /* Forward */  && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
        direction.x = isXAxisInverted ? 1 /* Forward */  : -1 /* Reverse */ ;
        speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold2.width - x) / threshold2.width);
    }
    return {
        direction,
        speed
    };
}
// src/utilities/scroll/scrollIntoViewIfNeeded.ts
function supportsScrollIntoViewIfNeeded(element) {
    return "scrollIntoViewIfNeeded" in element && typeof element.scrollIntoViewIfNeeded === "function";
}
function scrollIntoViewIfNeeded(el, centerIfNeeded = false) {
    if (supportsScrollIntoViewIfNeeded(el)) {
        el.scrollIntoViewIfNeeded(centerIfNeeded);
        return;
    }
    if (!isHTMLElement(el)) {
        return el.scrollIntoView();
    }
    var parent = getFirstScrollableAncestor(el);
    if (!isHTMLElement(parent)) {
        return;
    }
    const parentComputedStyle = getComputedStyles(parent, true), parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue("border-top-width")), parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue("border-left-width")), overTop = el.offsetTop - parent.offsetTop < parent.scrollTop, overBottom = el.offsetTop - parent.offsetTop + el.clientHeight - parentBorderTopWidth > parent.scrollTop + parent.clientHeight, overLeft = el.offsetLeft - parent.offsetLeft < parent.scrollLeft, overRight = el.offsetLeft - parent.offsetLeft + el.clientWidth - parentBorderLeftWidth > parent.scrollLeft + parent.clientWidth, alignWithTop = overTop && !overBottom;
    if ((overTop || overBottom) && centerIfNeeded) {
        parent.scrollTop = el.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + el.clientHeight / 2;
    }
    if ((overLeft || overRight) && centerIfNeeded) {
        parent.scrollLeft = el.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + el.clientWidth / 2;
    }
    if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
        el.scrollIntoView(alignWithTop);
    }
}
// src/utilities/transform/applyTransform.ts
function applyTransform(rect, parsedTransform, transformOrigin) {
    const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
    const x = rect.left + translateX + (1 - scaleX) * parseFloat(transformOrigin);
    const y = rect.top + translateY + (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
    const w = scaleX ? rect.width * scaleX : rect.width;
    const h = scaleY ? rect.height * scaleY : rect.height;
    return {
        width: w,
        height: h,
        top: y,
        right: x + w,
        bottom: y + h,
        left: x
    };
}
// src/utilities/transform/inverseTransform.ts
function inverseTransform(rect, parsedTransform, transformOrigin) {
    const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
    const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
    const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
    const w = scaleX ? rect.width / scaleX : rect.width;
    const h = scaleY ? rect.height / scaleY : rect.height;
    return {
        width: w,
        height: h,
        top: y,
        right: x + w,
        bottom: y + h,
        left: x
    };
}
// src/utilities/transform/animateTransform.ts
function animateTransform({ element, keyframes, options }) {
    return element.animate(keyframes, options).finished;
}
// src/utilities/transform/computeTranslate.ts
function computeTranslate(element, translate = getComputedStyles(element).translate, projected = true) {
    if (projected) {
        const keyframe = getFinalKeyframe(element, (keyframe2)=>"translate" in keyframe2);
        if (keyframe) {
            const { translate: translate2 = "" } = keyframe[0];
            if (typeof translate2 === "string") {
                const finalTranslate = parseTranslate(translate2);
                if (finalTranslate) {
                    return finalTranslate;
                }
            }
        }
    }
    if (translate) {
        const finalTranslate = parseTranslate(translate);
        if (finalTranslate) {
            return finalTranslate;
        }
    }
    return {
        x: 0,
        y: 0,
        z: 0
    };
}
// src/utilities/animations/forceFinishAnimations.ts
var scheduler3 = new Scheduler((callback)=>setTimeout(callback, 0));
var animations = /* @__PURE__ */ new Map();
var clear2 = animations.clear.bind(animations);
function getDocumentAnimations(element) {
    const document2 = element.ownerDocument;
    let documentAnimations = animations.get(document2);
    if (documentAnimations) return documentAnimations;
    documentAnimations = document2.getAnimations();
    animations.set(document2, documentAnimations);
    scheduler3.schedule(clear2);
    const elementAnimations = documentAnimations.filter((animation)=>isKeyframeEffect(animation.effect) && animation.effect.target === element);
    animations.set(element, elementAnimations);
    return documentAnimations;
}
function forceFinishAnimations(element, options) {
    const animations2 = getDocumentAnimations(element).filter((animation)=>{
        var _a, _b;
        if (isKeyframeEffect(animation.effect)) {
            const { target } = animation.effect;
            const isValidTarget = (_b = target && ((_a = options.isValidTarget) == null ? void 0 : _a.call(options, target))) != null ? _b : true;
            if (isValidTarget) {
                return animation.effect.getKeyframes().some((keyframe)=>{
                    for (const property of options.properties){
                        if (keyframe[property]) return true;
                    }
                });
            }
        }
    }).map((animation)=>{
        const { effect, currentTime } = animation;
        const duration = effect == null ? void 0 : effect.getComputedTiming().duration;
        if (animation.pending || animation.playState === "finished") return;
        if (typeof duration == "number" && typeof currentTime == "number" && currentTime < duration) {
            animation.currentTime = duration;
            return ()=>{
                animation.currentTime = currentTime;
            };
        }
    });
    if (animations2.length > 0) {
        return ()=>animations2.forEach((reset)=>reset == null ? void 0 : reset());
    }
}
// src/utilities/shapes/DOMRectangle.ts
var DOMRectangle = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"] {
    constructor(element, options = {}){
        var _a, _b, _c, _d;
        const { frameTransform = getFrameTransform(element), ignoreTransforms, getBoundingClientRect = getBoundingRectangle } = options;
        const resetAnimations = forceFinishAnimations(element, {
            properties: [
                "transform",
                "translate",
                "scale",
                "width",
                "height"
            ],
            isValidTarget: (target)=>(target !== element || isSafari()) && target.contains(element)
        });
        const boundingRectangle = getBoundingClientRect(element);
        let { top, left, width, height } = boundingRectangle;
        let updated;
        const computedStyles = getComputedStyles(element);
        const parsedTransform = parseTransform(computedStyles);
        const scale = {
            x: (_a = parsedTransform == null ? void 0 : parsedTransform.scaleX) != null ? _a : 1,
            y: (_b = parsedTransform == null ? void 0 : parsedTransform.scaleY) != null ? _b : 1
        };
        const projectedTransform = getProjectedTransform(element, computedStyles);
        resetAnimations == null ? void 0 : resetAnimations();
        if (parsedTransform) {
            updated = inverseTransform(boundingRectangle, parsedTransform, computedStyles.transformOrigin);
            if (ignoreTransforms || projectedTransform) {
                top = updated.top;
                left = updated.left;
                width = updated.width;
                height = updated.height;
            }
        }
        const intrinsic = {
            width: (_c = updated == null ? void 0 : updated.width) != null ? _c : width,
            height: (_d = updated == null ? void 0 : updated.height) != null ? _d : height
        };
        if (projectedTransform && !ignoreTransforms && updated) {
            const projected = applyTransform(updated, projectedTransform, computedStyles.transformOrigin);
            top = projected.top;
            left = projected.left;
            width = projected.width;
            height = projected.height;
            scale.x = projectedTransform.scaleX;
            scale.y = projectedTransform.scaleY;
        }
        if (frameTransform) {
            if (!ignoreTransforms) {
                left *= frameTransform.scaleX;
                width *= frameTransform.scaleX;
                top *= frameTransform.scaleY;
                height *= frameTransform.scaleY;
            }
            left += frameTransform.x;
            top += frameTransform.y;
        }
        super(left, top, width, height);
        this.scale = scale;
        this.intrinsicWidth = intrinsic.width;
        this.intrinsicHeight = intrinsic.height;
    }
};
function getProjectedTransform(element, computedStyles) {
    var _a;
    const animations2 = element.getAnimations();
    let projectedTransform = null;
    if (!animations2.length) return null;
    for (const animation of animations2){
        if (animation.playState !== "running") continue;
        const keyframes = isKeyframeEffect(animation.effect) ? animation.effect.getKeyframes() : [];
        const keyframe = keyframes[keyframes.length - 1];
        if (!keyframe) continue;
        const { transform, translate, scale } = keyframe;
        if (transform || translate || scale) {
            const parsedTransform = parseTransform({
                transform: typeof transform === "string" && transform ? transform : computedStyles.transform,
                translate: typeof translate === "string" && translate ? translate : computedStyles.translate,
                scale: typeof scale === "string" && scale ? scale : computedStyles.scale
            });
            if (parsedTransform) {
                projectedTransform = projectedTransform ? {
                    x: projectedTransform.x + parsedTransform.x,
                    y: projectedTransform.y + parsedTransform.y,
                    z: (_a = projectedTransform.z) != null ? _a : parsedTransform.z,
                    scaleX: projectedTransform.scaleX * parsedTransform.scaleX,
                    scaleY: projectedTransform.scaleY * parsedTransform.scaleY
                } : parsedTransform;
            }
        }
    }
    return projectedTransform;
}
// src/utilities/type-guards/supportsStyle.ts
function supportsStyle(element) {
    return "style" in element && typeof element.style === "object" && element.style !== null && "setProperty" in element.style && "removeProperty" in element.style && typeof element.style.setProperty === "function" && typeof element.style.removeProperty === "function";
}
// src/utilities/styles/Styles.ts
var Styles = class {
    constructor(element){
        this.element = element;
        this.initial = /* @__PURE__ */ new Map();
    }
    set(properties, prefix = "") {
        const { element } = this;
        if (!supportsStyle(element)) {
            return;
        }
        for (const [key, value] of Object.entries(properties)){
            const property = `${prefix}${key}`;
            if (!this.initial.has(property)) {
                this.initial.set(property, element.style.getPropertyValue(property));
            }
            element.style.setProperty(property, typeof value === "string" ? value : `${value}px`);
        }
    }
    remove(properties, prefix = "") {
        const { element } = this;
        if (!supportsStyle(element)) {
            return;
        }
        for (const key of properties){
            const property = `${prefix}${key}`;
            element.style.removeProperty(property);
        }
    }
    reset() {
        const { element } = this;
        if (!supportsStyle(element)) {
            return;
        }
        for (const [key, value] of this.initial){
            element.style.setProperty(key, value);
        }
        if (element.getAttribute("style") === "") {
            element.removeAttribute("style");
        }
    }
};
// src/utilities/type-guards/isElement.ts
function isElement(target) {
    if (!target) return false;
    return target instanceof getWindow(target).Element || isNode(target) && target.nodeType === Node.ELEMENT_NODE;
}
// src/utilities/type-guards/isKeyboardEvent.ts
function isKeyboardEvent(event) {
    if (!event) return false;
    const { KeyboardEvent } = getWindow(event.target);
    return event instanceof KeyboardEvent;
}
// src/utilities/type-guards/isPointerEvent.ts
function isPointerEvent(event) {
    if (!event) return false;
    const { PointerEvent } = getWindow(event.target);
    return event instanceof PointerEvent;
}
// src/utilities/type-guards/supportsViewTransition.ts
function supportsViewTransition(document2) {
    return "startViewTransition" in document2;
}
// src/utilities/type-guards/isTextInput.ts
function isTextInput(target) {
    if (!isElement(target)) return false;
    const { tagName } = target;
    return tagName === "INPUT" || tagName === "TEXTAREA" || isContentEditable(target);
}
function isContentEditable(element) {
    return element.hasAttribute("contenteditable") && element.getAttribute("contenteditable") !== "false";
}
// src/utilities/misc/generateUniqueId.ts
var ids = {};
function generateUniqueId(prefix) {
    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return `${prefix}-${id}`;
}
;
 //# sourceMappingURL=utilities.js.map
 //# sourceMappingURL=utilities.js.map
}),
"[project]/node_modules/.pnpm/@dnd-kit+dom@0.1.21/node_modules/@dnd-kit/dom/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accessibility",
    ()=>Accessibility,
    "AutoScroller",
    ()=>AutoScroller,
    "Cursor",
    ()=>Cursor,
    "DragDropManager",
    ()=>DragDropManager,
    "Draggable",
    ()=>Draggable,
    "Droppable",
    ()=>Droppable,
    "Feedback",
    ()=>Feedback,
    "KeyboardSensor",
    ()=>KeyboardSensor,
    "PointerSensor",
    ()=>PointerSensor,
    "PreventSelection",
    ()=>PreventSelection,
    "ScrollListener",
    ()=>ScrollListener,
    "Scroller",
    ()=>Scroller,
    "defaultPreset",
    ()=>defaultPreset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+abstract@0.1.21/node_modules/@dnd-kit/abstract/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+dom@0.1.21/node_modules/@dnd-kit/dom/utilities.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@preact+signals-core@1.12.1/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+state@0.1.21/node_modules/@dnd-kit/state/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+geometry@0.1.21/node_modules/@dnd-kit/geometry/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$collision$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$collision$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+collision@0.1.21/node_modules/@dnd-kit/collision/dist/index.js [app-client] (ecmascript)");
;
;
;
;
;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol)=>(symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
var __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)){
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
    return target;
};
var __decoratorStart = (base)=>{
    var _a4;
    return [
        ,
        ,
        ,
        __create((_a4 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a4 : null)
    ];
};
var __decoratorStrings = [
    "class",
    "method",
    "getter",
    "setter",
    "accessor",
    "field",
    "value",
    "get",
    "set"
];
var __expectFn = (fn)=>fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns)=>({
        kind: __decoratorStrings[kind],
        name,
        metadata,
        addInitializer: (fn)=>done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null))
    });
var __decoratorMetadata = (array, target)=>__defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value)=>{
    for(var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++)flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
    return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra)=>{
    var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
    var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
    var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
    var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : {
        get [name] () {
            return __privateGet(this, extra);
        },
        set [name] (x){
            return __privateSet(this, extra, x);
        }
    }, name));
    k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
    for(var i = decorators.length - 1; i >= 0; i--){
        ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
        if (k) {
            ctx.static = s, ctx.private = p, access = ctx.access = {
                has: p ? (x1)=>__privateIn(target, x1) : (x1)=>name in x1
            };
            if (k ^ 3) access.get = p ? (x1)=>(k ^ 1 ? __privateGet : __privateMethod)(x1, target, k ^ 4 ? extra : desc.get) : (x1)=>x1[name];
            if (k > 2) access.set = p ? (x1, y)=>__privateSet(x1, target, y, k ^ 4 ? extra : desc.set) : (x1, y)=>x1[name] = y;
        }
        it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
            get: desc.get,
            set: desc.set
        } : target, ctx), done._ = 1;
        if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
        else if (typeof it !== "object" || it === null) __typeError("Object expected");
        else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
    }
    return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj)=>Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
// src/core/plugins/accessibility/defaults.ts
var defaultAttributes = {
    role: "button",
    roleDescription: "draggable"
};
var defaultDescriptionIdPrefix = `dnd-kit-description`;
var defaultAnnouncementIdPrefix = `dnd-kit-announcement`;
var defaultScreenReaderInstructions = {
    draggable: `To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.`
};
var defaultAnnouncements = {
    dragstart ({ operation: { source } }) {
        if (!source) return;
        return `Picked up draggable item ${source.id}.`;
    },
    dragover ({ operation: { source, target } }) {
        if (!source || source.id === (target == null ? void 0 : target.id)) return;
        if (target) {
            return `Draggable item ${source.id} was moved over droppable target ${target.id}.`;
        }
        return `Draggable item ${source.id} is no longer over a droppable target.`;
    },
    dragend ({ operation: { source, target }, canceled }) {
        if (!source) return;
        if (canceled) {
            return `Dragging was cancelled. Draggable item ${source.id} was dropped.`;
        }
        if (target) {
            return `Draggable item ${source.id} was dropped over droppable target ${target.id}`;
        }
        return `Draggable item ${source.id} was dropped.`;
    }
};
// src/core/plugins/accessibility/utilities.ts
function isFocusable(element) {
    const tagName = element.tagName.toLowerCase();
    return [
        "input",
        "select",
        "textarea",
        "a",
        "button"
    ].includes(tagName);
}
// src/core/plugins/accessibility/HiddenText.ts
function createHiddenText(id, value) {
    const element = document.createElement("div");
    element.id = id;
    element.style.setProperty("display", "none");
    element.textContent = value;
    return element;
}
// src/core/plugins/accessibility/LiveRegion.ts
function createLiveRegion(id) {
    const element = document.createElement("div");
    element.id = id;
    element.setAttribute("role", "status");
    element.setAttribute("aria-live", "polite");
    element.setAttribute("aria-atomic", "true");
    element.style.setProperty("position", "fixed");
    element.style.setProperty("width", "1px");
    element.style.setProperty("height", "1px");
    element.style.setProperty("margin", "-1px");
    element.style.setProperty("border", "0");
    element.style.setProperty("padding", "0");
    element.style.setProperty("overflow", "hidden");
    element.style.setProperty("clip", "rect(0 0 0 0)");
    element.style.setProperty("clip-path", "inset(100%)");
    element.style.setProperty("white-space", "nowrap");
    return element;
}
// src/core/plugins/accessibility/Accessibility.ts
var debouncedEvents = [
    "dragover",
    "dragmove"
];
var Accessibility = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"] {
    constructor(manager, options){
        super(manager);
        const { id, idPrefix: { description: descriptionPrefix = defaultDescriptionIdPrefix, announcement: announcementPrefix = defaultAnnouncementIdPrefix } = {}, announcements = defaultAnnouncements, screenReaderInstructions = defaultScreenReaderInstructions, debounce: debounceMs = 500 } = options != null ? options : {};
        const descriptionId = id ? `${descriptionPrefix}-${id}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUniqueId"])(descriptionPrefix);
        const announcementId = id ? `${announcementPrefix}-${id}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUniqueId"])(announcementPrefix);
        let hiddenTextElement;
        let liveRegionElement;
        let liveRegionTextNode;
        let latestAnnouncement;
        const updateAnnouncement = (value = latestAnnouncement)=>{
            if (!liveRegionTextNode || !value) return;
            if ((liveRegionTextNode == null ? void 0 : liveRegionTextNode.nodeValue) !== value) {
                liveRegionTextNode.nodeValue = value;
            }
        };
        const scheduleUpdateAnnouncement = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduler"].schedule(updateAnnouncement);
        const debouncedUpdateAnnouncement = debounce(scheduleUpdateAnnouncement, debounceMs);
        const eventListeners = Object.entries(announcements).map(([eventName, getAnnouncement])=>{
            return this.manager.monitor.addEventListener(eventName, (event, manager2)=>{
                const element = liveRegionTextNode;
                if (!element) return;
                const announcement = getAnnouncement == null ? void 0 : getAnnouncement(event, manager2);
                if (announcement && element.nodeValue !== announcement) {
                    latestAnnouncement = announcement;
                    if (debouncedEvents.includes(eventName)) {
                        debouncedUpdateAnnouncement();
                    } else {
                        scheduleUpdateAnnouncement();
                        debouncedUpdateAnnouncement.cancel();
                    }
                }
            });
        });
        const initialize = ()=>{
            let elements = [];
            if (!(hiddenTextElement == null ? void 0 : hiddenTextElement.isConnected)) {
                hiddenTextElement = createHiddenText(descriptionId, screenReaderInstructions.draggable);
                elements.push(hiddenTextElement);
            }
            if (!(liveRegionElement == null ? void 0 : liveRegionElement.isConnected)) {
                liveRegionElement = createLiveRegion(announcementId);
                liveRegionTextNode = document.createTextNode("");
                liveRegionElement.appendChild(liveRegionTextNode);
                elements.push(liveRegionElement);
            }
            if (elements.length > 0) {
                document.body.append(...elements);
            }
        };
        const mutations = /* @__PURE__ */ new Set();
        function executeMutations() {
            for (const operation of mutations){
                operation();
            }
        }
        this.registerEffect(()=>{
            var _a4;
            mutations.clear();
            for (const draggable of this.manager.registry.draggables.value){
                const activator = (_a4 = draggable.handle) != null ? _a4 : draggable.element;
                if (activator) {
                    if (!hiddenTextElement || !liveRegionElement) {
                        mutations.add(initialize);
                    }
                    if ((!isFocusable(activator) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])()) && !activator.hasAttribute("tabindex")) {
                        mutations.add(()=>activator.setAttribute("tabindex", "0"));
                    }
                    if (!activator.hasAttribute("role") && !(activator.tagName.toLowerCase() === "button")) {
                        mutations.add(()=>activator.setAttribute("role", defaultAttributes.role));
                    }
                    if (!activator.hasAttribute("aria-roledescription")) {
                        mutations.add(()=>activator.setAttribute("aria-roledescription", defaultAttributes.roleDescription));
                    }
                    if (!activator.hasAttribute("aria-describedby")) {
                        mutations.add(()=>activator.setAttribute("aria-describedby", descriptionId));
                    }
                    for (const key of [
                        "aria-pressed",
                        "aria-grabbed"
                    ]){
                        const value = String(draggable.isDragging);
                        if (activator.getAttribute(key) !== value) {
                            mutations.add(()=>activator.setAttribute(key, value));
                        }
                    }
                    const disabled = String(draggable.disabled);
                    if (activator.getAttribute("aria-disabled") !== disabled) {
                        mutations.add(()=>activator.setAttribute("aria-disabled", disabled));
                    }
                }
            }
            if (mutations.size > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduler"].schedule(executeMutations);
            }
        });
        this.destroy = ()=>{
            super.destroy();
            hiddenTextElement == null ? void 0 : hiddenTextElement.remove();
            liveRegionElement == null ? void 0 : liveRegionElement.remove();
            eventListeners.forEach((unsubscribe)=>unsubscribe());
        };
    }
};
function debounce(fn, wait) {
    let timeout;
    const debounced = ()=>{
        clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    };
    debounced.cancel = ()=>clearTimeout(timeout);
    return debounced;
}
var Cursor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"] {
    constructor(manager, options){
        super(manager, options);
        this.manager = manager;
        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computed"])(()=>{
            var _a4;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])((_a4 = this.manager.dragOperation.source) == null ? void 0 : _a4.element);
        });
        this.destroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            var _a4;
            const { dragOperation } = this.manager;
            const { cursor = "grabbing", nonce } = (_a4 = this.options) != null ? _a4 : {};
            if (dragOperation.status.initialized) {
                const document2 = doc.value;
                const style = document2.createElement("style");
                if (nonce) {
                    style.setAttribute("nonce", nonce);
                }
                style.textContent = `* { cursor: ${cursor} !important; }`;
                document2.head.appendChild(style);
                return ()=>style.remove();
            }
        });
    }
};
// src/core/plugins/feedback/constants.ts
var ATTR_PREFIX = "data-dnd-";
var DROPPING_ATTRIBUTE = `${ATTR_PREFIX}dropping`;
var CSS_PREFIX = "--dnd-";
var ATTRIBUTE = `${ATTR_PREFIX}dragging`;
var PLACEHOLDER_ATTRIBUTE = `${ATTR_PREFIX}placeholder`;
var IGNORED_ATTRIBUTES = [
    ATTRIBUTE,
    PLACEHOLDER_ATTRIBUTE,
    "popover",
    "aria-pressed",
    "aria-grabbing"
];
var IGNORED_STYLES = [
    "view-transition-name"
];
var CSS_RULES = `
  :root [${ATTRIBUTE}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${CSS_PREFIX}top, 0px) !important;
    left: var(${CSS_PREFIX}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${CSS_PREFIX}width, auto);
    max-width: var(${CSS_PREFIX}width, auto);
    height: var(${CSS_PREFIX}height, auto);
    max-height: var(${CSS_PREFIX}height, auto);
    transition: var(${CSS_PREFIX}transition) !important;
  }

  :root [${PLACEHOLDER_ATTRIBUTE}] {
    transition: none;
  }

  :root [${PLACEHOLDER_ATTRIBUTE}='hidden'] {
    visibility: hidden;
  }

  [${ATTRIBUTE}] * {
    pointer-events: none !important;
  }

  [${ATTRIBUTE}]:not([${DROPPING_ATTRIBUTE}]) {
    translate: var(${CSS_PREFIX}translate) !important;
  }

  [${ATTRIBUTE}][style*='${CSS_PREFIX}scale'] {
    scale: var(${CSS_PREFIX}scale) !important;
    transform-origin: var(${CSS_PREFIX}transform-origin) !important;
  }

  @layer {
    :where([${ATTRIBUTE}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${ATTRIBUTE}]::backdrop, [${ATTR_PREFIX}overlay]:not([${ATTRIBUTE}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function createPlaceholder(source, type = "hidden") {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>{
        const { element, manager } = source;
        if (!element || !manager) return;
        const containedDroppables = findContainedDroppables(element, manager.registry.droppables);
        const cleanup = [];
        const placeholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(element);
        const { remove } = placeholder;
        proxyDroppableElements(containedDroppables, placeholder, cleanup);
        configurePlaceholder(placeholder, type);
        placeholder.remove = ()=>{
            cleanup.forEach((fn)=>fn());
            remove.call(placeholder);
        };
        return placeholder;
    });
}
function findContainedDroppables(element, droppables) {
    const containedDroppables = /* @__PURE__ */ new Map();
    for (const droppable of droppables){
        if (!droppable.element) continue;
        if (element === droppable.element || element.contains(droppable.element)) {
            const identifierAttribute = `${ATTR_PREFIX}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUniqueId"])("dom-id")}`;
            droppable.element.setAttribute(identifierAttribute, "");
            containedDroppables.set(droppable, identifierAttribute);
        }
    }
    return containedDroppables;
}
function proxyDroppableElements(containedDroppables, placeholder, cleanup) {
    for (const [droppable, identifierAttribute] of containedDroppables){
        if (!droppable.element) continue;
        const selector = `[${identifierAttribute}]`;
        const clonedElement = placeholder.matches(selector) ? placeholder : placeholder.querySelector(selector);
        droppable.element.removeAttribute(identifierAttribute);
        if (!clonedElement) continue;
        const originalElement = droppable.element;
        droppable.proxy = clonedElement;
        clonedElement.removeAttribute(identifierAttribute);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProxiedElements"].set(originalElement, clonedElement);
        cleanup.push(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProxiedElements"].delete(originalElement);
            droppable.proxy = void 0;
        });
    }
}
function configurePlaceholder(placeholder, type = "hidden") {
    placeholder.setAttribute("inert", "true");
    placeholder.setAttribute("tab-index", "-1");
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.setAttribute(PLACEHOLDER_ATTRIBUTE, type);
}
function isSameFrame(element, target) {
    if (element === target) return true;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(element) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(target);
}
function preventPopoverClose(event) {
    const { target } = event;
    if ("newState" in event && event.newState === "closed" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target) && target.hasAttribute("popover")) {
        requestAnimationFrame(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showPopover"])(target));
    }
}
function isTableRow(element) {
    return element.tagName === "TR";
}
// src/core/plugins/feedback/Feedback.ts
var styleSheetRegistry = /* @__PURE__ */ new Map();
var _overlay_dec, _a, _init, _overlay, _Feedback_instances, render_fn, injectStyles_fn;
var _Feedback = class _Feedback extends (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"], _overlay_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _a) {
    constructor(manager, options){
        super(manager, options);
        __privateAdd(this, _Feedback_instances);
        __privateAdd(this, _overlay, __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
        this.state = {
            initial: {},
            current: {}
        };
        this.registerEffect(__privateMethod(this, _Feedback_instances, injectStyles_fn));
        this.registerEffect(__privateMethod(this, _Feedback_instances, render_fn));
    }
    destroy() {
        super.destroy();
        for (const [doc, registration] of styleSheetRegistry.entries()){
            if (registration.instances.has(this)) {
                registration.instances.delete(this);
                if (registration.instances.size === 0) {
                    registration.cleanup();
                    styleSheetRegistry.delete(doc);
                }
            }
        }
    }
};
_init = __decoratorStart(_a);
_overlay = new WeakMap();
_Feedback_instances = new WeakSet();
render_fn = function() {
    var _a4, _b2, _c3;
    const { state, manager, options } = this;
    const { dragOperation } = manager;
    const { position, source, status } = dragOperation;
    if (status.idle) {
        state.current = {};
        state.initial = {};
        return;
    }
    if (!source) return;
    const { element, feedback } = source;
    if (!element || feedback === "none" || !status.initialized || status.initializing) {
        return;
    }
    const { initial } = state;
    const feedbackElement = (_a4 = this.overlay) != null ? _a4 : element;
    const frameTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameTransform"])(feedbackElement);
    const elementFrameTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameTransform"])(element);
    const crossFrame = !isSameFrame(element, feedbackElement);
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](element, {
        frameTransform: crossFrame ? elementFrameTransform : null,
        ignoreTransforms: !crossFrame
    });
    const scaleDelta = {
        x: elementFrameTransform.scaleX / frameTransform.scaleX,
        y: elementFrameTransform.scaleY / frameTransform.scaleY
    };
    let { width, height, top, left } = shape;
    if (crossFrame) {
        width = width / scaleDelta.x;
        height = height / scaleDelta.y;
    }
    let elementMutationObserver;
    let documentMutationObserver;
    const styles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Styles"](feedbackElement);
    const { transition, translate, boxSizing, paddingBlockStart, paddingBlockEnd, paddingInlineStart, paddingInlineEnd, borderInlineStartWidth, borderInlineEndWidth, borderBlockStartWidth, borderBlockEndWidth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyles"])(element);
    const clone = feedback === "clone";
    const contentBox = boxSizing === "content-box";
    const widthOffset = contentBox ? parseInt(paddingInlineStart) + parseInt(paddingInlineEnd) + parseInt(borderInlineStartWidth) + parseInt(borderInlineEndWidth) : 0;
    const heightOffset = contentBox ? parseInt(paddingBlockStart) + parseInt(paddingBlockEnd) + parseInt(borderBlockStartWidth) + parseInt(borderBlockEndWidth) : 0;
    const placeholder = feedback !== "move" && !this.overlay ? createPlaceholder(source, clone ? "clone" : "hidden") : null;
    const isKeyboardOperation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(manager.dragOperation.activatorEvent));
    if (translate !== "none") {
        const parsedTranslate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTranslate"])(translate);
        if (parsedTranslate && !initial.translate) {
            initial.translate = parsedTranslate;
        }
    }
    if (!initial.transformOrigin) {
        const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>position.current);
        initial.transformOrigin = {
            x: (current.x - left * frameTransform.scaleX - frameTransform.x) / (width * frameTransform.scaleX),
            y: (current.y - top * frameTransform.scaleY - frameTransform.y) / (height * frameTransform.scaleY)
        };
    }
    const { transformOrigin } = initial;
    const relativeTop = top * frameTransform.scaleY + frameTransform.y;
    const relativeLeft = left * frameTransform.scaleX + frameTransform.x;
    if (!initial.coordinates) {
        initial.coordinates = {
            x: relativeLeft,
            y: relativeTop
        };
        if (scaleDelta.x !== 1 || scaleDelta.y !== 1) {
            const { scaleX, scaleY } = elementFrameTransform;
            const { x: tX2, y: tY2 } = transformOrigin;
            initial.coordinates.x += (width * scaleX - width) * tX2;
            initial.coordinates.y += (height * scaleY - height) * tY2;
        }
    }
    if (!initial.dimensions) {
        initial.dimensions = {
            width,
            height
        };
    }
    if (!initial.frameTransform) {
        initial.frameTransform = frameTransform;
    }
    const coordinatesDelta = {
        x: initial.coordinates.x - relativeLeft,
        y: initial.coordinates.y - relativeTop
    };
    const sizeDelta = {
        width: (initial.dimensions.width * initial.frameTransform.scaleX - width * frameTransform.scaleX) * transformOrigin.x,
        height: (initial.dimensions.height * initial.frameTransform.scaleY - height * frameTransform.scaleY) * transformOrigin.y
    };
    const delta = {
        x: coordinatesDelta.x / frameTransform.scaleX + sizeDelta.width,
        y: coordinatesDelta.y / frameTransform.scaleY + sizeDelta.height
    };
    const projected = {
        left: left + delta.x,
        top: top + delta.y
    };
    feedbackElement.setAttribute(ATTRIBUTE, "true");
    const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>dragOperation.transform);
    const initialTranslate = (_b2 = initial.translate) != null ? _b2 : {
        x: 0,
        y: 0
    };
    const tX = transform.x * frameTransform.scaleX + initialTranslate.x;
    const tY = transform.y * frameTransform.scaleY + initialTranslate.y;
    const translateString = `${tX}px ${tY}px 0`;
    const transitionString = transition ? `${transition}, translate 0ms linear` : "";
    styles.set({
        width: width - widthOffset,
        height: height - heightOffset,
        top: projected.top,
        left: projected.left,
        translate: translateString,
        transition: transitionString,
        scale: crossFrame ? `${scaleDelta.x} ${scaleDelta.y}` : "",
        "transform-origin": `${transformOrigin.x * 100}% ${transformOrigin.y * 100}%`
    }, CSS_PREFIX);
    if (placeholder) {
        element.insertAdjacentElement("afterend", placeholder);
        if (options == null ? void 0 : options.rootElement) {
            const root = typeof options.rootElement === "function" ? options.rootElement(source) : options.rootElement;
            root.appendChild(element);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsPopover"])(feedbackElement)) {
        if (!feedbackElement.hasAttribute("popover")) {
            feedbackElement.setAttribute("popover", "manual");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showPopover"])(feedbackElement);
        feedbackElement.addEventListener("beforetoggle", preventPopoverClose);
    }
    const resizeObserver = new ResizeObserver(()=>{
        if (!placeholder) return;
        const placeholderShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](placeholder, {
            frameTransform,
            ignoreTransforms: true
        });
        const origin = transformOrigin != null ? transformOrigin : {
            x: 1,
            y: 1
        };
        const dX = (width - placeholderShape.width) * origin.x + delta.x;
        const dY = (height - placeholderShape.height) * origin.y + delta.y;
        styles.set({
            width: placeholderShape.width - widthOffset,
            height: placeholderShape.height - heightOffset,
            top: top + dY,
            left: left + dX
        }, CSS_PREFIX);
        elementMutationObserver == null ? void 0 : elementMutationObserver.takeRecords();
        if (isTableRow(element) && isTableRow(placeholder)) {
            const cells = Array.from(element.cells);
            const placeholderCells = Array.from(placeholder.cells);
            for (const [index, cell] of cells.entries()){
                const placeholderCell = placeholderCells[index];
                cell.style.width = `${placeholderCell.offsetWidth}px`;
            }
        }
        dragOperation.shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](feedbackElement);
    });
    const initialShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](feedbackElement);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>dragOperation.shape = initialShape);
    const feedbackWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(feedbackElement);
    const handleWindowResize = (event)=>{
        this.manager.actions.stop({
            event
        });
    };
    if (isKeyboardOperation) {
        feedbackWindow.addEventListener("resize", handleWindowResize);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>source.status) === "idle") {
        requestAnimationFrame(()=>source.status = "dragging");
    }
    if (placeholder) {
        resizeObserver.observe(placeholder);
        elementMutationObserver = new MutationObserver((mutations)=>{
            let hasChildrenMutations = false;
            for (const mutation of mutations){
                if (mutation.target !== element) {
                    hasChildrenMutations = true;
                    continue;
                }
                if (mutation.type !== "attributes") {
                    continue;
                }
                const attributeName = mutation.attributeName;
                if (attributeName.startsWith("aria-") || IGNORED_ATTRIBUTES.includes(attributeName)) {
                    continue;
                }
                const attributeValue = element.getAttribute(attributeName);
                if (attributeName === "style") {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsStyle"])(element) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsStyle"])(placeholder)) {
                        const styles2 = element.style;
                        for (const key of Array.from(placeholder.style)){
                            if (styles2.getPropertyValue(key) === "") {
                                placeholder.style.removeProperty(key);
                            }
                        }
                        for (const key of Array.from(styles2)){
                            if (IGNORED_STYLES.includes(key) || key.startsWith(CSS_PREFIX)) {
                                continue;
                            }
                            const value = styles2.getPropertyValue(key);
                            placeholder.style.setProperty(key, value);
                        }
                    }
                } else if (attributeValue !== null) {
                    placeholder.setAttribute(attributeName, attributeValue);
                } else {
                    placeholder.removeAttribute(attributeName);
                }
            }
            if (hasChildrenMutations && clone) {
                placeholder.innerHTML = element.innerHTML;
            }
        });
        elementMutationObserver.observe(element, {
            attributes: true,
            subtree: true,
            childList: true
        });
        documentMutationObserver = new MutationObserver((entries)=>{
            for (const entry of entries){
                if (entry.addedNodes.length === 0) continue;
                for (const node of Array.from(entry.addedNodes)){
                    if (node.contains(element) && element.nextElementSibling !== placeholder) {
                        element.insertAdjacentElement("afterend", placeholder);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showPopover"])(feedbackElement);
                        return;
                    }
                    if (node.contains(placeholder) && placeholder.previousElementSibling !== element) {
                        placeholder.insertAdjacentElement("beforebegin", element);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showPopover"])(feedbackElement);
                        return;
                    }
                }
            }
        });
        documentMutationObserver.observe(element.ownerDocument.body, {
            childList: true,
            subtree: true
        });
    }
    const id = (_c3 = manager.dragOperation.source) == null ? void 0 : _c3.id;
    const restoreFocus = ()=>{
        var _a5;
        if (!isKeyboardOperation || id == null) {
            return;
        }
        const draggable = manager.registry.draggables.get(id);
        const element2 = (_a5 = draggable == null ? void 0 : draggable.handle) != null ? _a5 : draggable == null ? void 0 : draggable.element;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element2)) {
            element2.focus();
        }
    };
    const cleanup = ()=>{
        elementMutationObserver == null ? void 0 : elementMutationObserver.disconnect();
        documentMutationObserver == null ? void 0 : documentMutationObserver.disconnect();
        resizeObserver.disconnect();
        feedbackWindow.removeEventListener("resize", handleWindowResize);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsPopover"])(feedbackElement)) {
            feedbackElement.removeEventListener("beforetoggle", preventPopoverClose);
            feedbackElement.removeAttribute("popover");
        }
        feedbackElement.removeAttribute(ATTRIBUTE);
        styles.reset();
        source.status = "idle";
        const moved = state.current.translate != null;
        if (placeholder && (moved || placeholder.parentElement !== feedbackElement.parentElement) && feedbackElement.isConnected) {
            placeholder.replaceWith(feedbackElement);
        }
        placeholder == null ? void 0 : placeholder.remove();
    };
    const cleanupEffects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effects"])(// Update transform on move
    ()=>{
        var _a5;
        const { transform: transform2, status: status2 } = dragOperation;
        if (!transform2.x && !transform2.y && !state.current.translate) {
            return;
        }
        if (status2.dragging) {
            const initialTranslate2 = (_a5 = initial.translate) != null ? _a5 : {
                x: 0,
                y: 0
            };
            const translate2 = {
                x: transform2.x / frameTransform.scaleX + initialTranslate2.x,
                y: transform2.y / frameTransform.scaleY + initialTranslate2.y
            };
            const previousTranslate = state.current.translate;
            const modifiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>dragOperation.modifiers);
            const currentShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>{
                var _a6;
                return (_a6 = dragOperation.shape) == null ? void 0 : _a6.current;
            });
            const translateTransition = isKeyboardOperation ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
            styles.set({
                transition: `${transition}, translate ${translateTransition}`,
                translate: `${translate2.x}px ${translate2.y}px 0`
            }, CSS_PREFIX);
            elementMutationObserver == null ? void 0 : elementMutationObserver.takeRecords();
            if (currentShape && currentShape !== initialShape && previousTranslate && !modifiers.length) {
                const delta2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"].delta(translate2, previousTranslate);
                dragOperation.shape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"].from(currentShape.boundingRectangle).translate(// Need to take into account frame transform when optimistically updating shape
                delta2.x * frameTransform.scaleX, delta2.y * frameTransform.scaleY);
            } else {
                dragOperation.shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](feedbackElement);
            }
            state.current.translate = translate2;
        }
    }, // Drop animation
    function() {
        if (dragOperation.status.dropped) {
            this.dispose();
            source.status = "dropping";
            let translate2 = state.current.translate;
            const moved = translate2 != null;
            if (!translate2 && element !== feedbackElement) {
                translate2 = {
                    x: 0,
                    y: 0
                };
            }
            if (!translate2) {
                cleanup();
                return;
            }
            const dropAnimation = ()=>{
                var _a5, _b3;
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showPopover"])(feedbackElement);
                    const [, animation] = (_a5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinalKeyframe"])(feedbackElement, (keyframe)=>"translate" in keyframe)) != null ? _a5 : [];
                    animation == null ? void 0 : animation.pause();
                    const target = placeholder != null ? placeholder : element;
                    const options2 = {
                        frameTransform: isSameFrame(feedbackElement, target) ? null : void 0
                    };
                    const current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](feedbackElement, options2);
                    const currentTranslate = (_b3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTranslate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyles"])(feedbackElement).translate)) != null ? _b3 : translate2;
                    const final = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](target, options2);
                    const delta2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"].delta(current, final, source.alignment);
                    const finalTranslate = {
                        x: currentTranslate.x - delta2.x,
                        y: currentTranslate.y - delta2.y
                    };
                    const heightKeyframes = Math.round(current.intrinsicHeight) !== Math.round(final.intrinsicHeight) ? {
                        minHeight: [
                            `${current.intrinsicHeight}px`,
                            `${final.intrinsicHeight}px`
                        ],
                        maxHeight: [
                            `${current.intrinsicHeight}px`,
                            `${final.intrinsicHeight}px`
                        ]
                    } : {};
                    const widthKeyframes = Math.round(current.intrinsicWidth) !== Math.round(final.intrinsicWidth) ? {
                        minWidth: [
                            `${current.intrinsicWidth}px`,
                            `${final.intrinsicWidth}px`
                        ],
                        maxWidth: [
                            `${current.intrinsicWidth}px`,
                            `${final.intrinsicWidth}px`
                        ]
                    } : {};
                    styles.set({
                        transition
                    }, CSS_PREFIX);
                    feedbackElement.setAttribute(DROPPING_ATTRIBUTE, "");
                    elementMutationObserver == null ? void 0 : elementMutationObserver.takeRecords();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTransform"])({
                        element: feedbackElement,
                        keyframes: __spreadProps(__spreadValues(__spreadValues({}, heightKeyframes), widthKeyframes), {
                            translate: [
                                `${currentTranslate.x}px ${currentTranslate.y}px 0`,
                                `${finalTranslate.x}px ${finalTranslate.y}px 0`
                            ]
                        }),
                        options: {
                            duration: moved || feedbackElement !== element ? 250 : 0,
                            easing: "ease"
                        }
                    }).then(()=>{
                        feedbackElement.removeAttribute(DROPPING_ATTRIBUTE);
                        animation == null ? void 0 : animation.finish();
                        cleanup();
                        requestAnimationFrame(restoreFocus);
                    });
                }
            };
            manager.renderer.rendering.then(dropAnimation);
        }
    });
    return ()=>{
        cleanup();
        cleanupEffects();
    };
};
injectStyles_fn = function() {
    var _a4, _b2, _c3;
    const { status, source, target } = this.manager.dragOperation;
    const { nonce } = (_a4 = this.options) != null ? _a4 : {};
    if (status.initializing) {
        const sourceDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])((_b2 = source == null ? void 0 : source.element) != null ? _b2 : null);
        const targetDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])((_c3 = target == null ? void 0 : target.element) != null ? _c3 : null);
        const documents = /* @__PURE__ */ new Set([
            sourceDocument,
            targetDocument
        ]);
        for (const doc of documents){
            let registration = styleSheetRegistry.get(doc);
            if (!registration) {
                const style = document.createElement("style");
                style.textContent = CSS_RULES;
                if (nonce) {
                    style.setAttribute("nonce", nonce);
                }
                doc.head.prepend(style);
                const mutationObserver = new MutationObserver((entries)=>{
                    for (const entry of entries){
                        if (entry.type === "childList") {
                            const removedNodes = Array.from(entry.removedNodes);
                            if (removedNodes.length > 0 && removedNodes.includes(style)) {
                                doc.head.prepend(style);
                            }
                        }
                    }
                });
                mutationObserver.observe(doc.head, {
                    childList: true
                });
                registration = {
                    cleanup: ()=>{
                        mutationObserver.disconnect();
                        style.remove();
                    },
                    instances: /* @__PURE__ */ new Set()
                };
                styleSheetRegistry.set(doc, registration);
            }
            registration.instances.add(this);
        }
    }
};
__decorateElement(_init, 4, "overlay", _overlay_dec, _Feedback, _overlay);
__decoratorMetadata(_init, _Feedback);
_Feedback.configure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurator"])(_Feedback);
var Feedback = _Feedback;
var LOCKED = true;
var UNLOCKED = false;
var _dec, _a2, _dec2, _b, _init2, __b, __a;
_b = (_dec2 = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Forward), _a2 = (_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Reverse);
var ScrollLock = class {
    constructor(){
        __privateAdd(this, __b, __runInitializers(_init2, 8, this, LOCKED)), __runInitializers(_init2, 11, this);
        __privateAdd(this, __a, __runInitializers(_init2, 12, this, LOCKED)), __runInitializers(_init2, 15, this);
    }
    isLocked(direction) {
        if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Idle) {
            return false;
        }
        if (direction == null) {
            return this[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Forward] === LOCKED && this[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Reverse] === LOCKED;
        }
        return this[direction] === LOCKED;
    }
    unlock(direction) {
        if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Idle) {
            return;
        }
        this[direction] = UNLOCKED;
    }
};
_init2 = __decoratorStart(null);
__b = new WeakMap();
__a = new WeakMap();
__decorateElement(_init2, 4, _b, _dec2, ScrollLock, __b);
__decorateElement(_init2, 4, _a2, _dec, ScrollLock, __a);
__decoratorMetadata(_init2, ScrollLock);
// src/core/plugins/scrolling/ScrollIntent.ts
var DIRECTIONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Forward,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Reverse
];
var ScrollIntent = class {
    constructor(){
        this.x = new ScrollLock();
        this.y = new ScrollLock();
    }
    isLocked() {
        return this.x.isLocked() && this.y.isLocked();
    }
};
var ScrollIntentTracker = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"] {
    constructor(manager){
        super(manager);
        const scrollIntent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(new ScrollIntent());
        let previousDelta = null;
        this.signal = scrollIntent;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            const { status } = manager.dragOperation;
            if (!status.initialized) {
                previousDelta = null;
                scrollIntent.value = new ScrollIntent();
                return;
            }
            const { delta } = manager.dragOperation.position;
            if (previousDelta) {
                const directions = {
                    x: getDirection(delta.x, previousDelta.x),
                    y: getDirection(delta.y, previousDelta.y)
                };
                const intent = scrollIntent.peek();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                    for (const axis of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axes"]){
                        for (const direction of DIRECTIONS){
                            if (directions[axis] === direction) {
                                intent[axis].unlock(direction);
                            }
                        }
                    }
                    scrollIntent.value = intent;
                });
            }
            previousDelta = delta;
        });
    }
    get current() {
        return this.signal.peek();
    }
};
function getDirection(a, b) {
    return Math.sign(a - b);
}
// src/core/plugins/scrolling/Scroller.ts
var _autoScrolling_dec, _a3, _init3, _autoScrolling, _meta, _scroll;
var Scroller = class extends (_a3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorePlugin"], _autoScrolling_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _a3) {
    constructor(manager){
        super(manager);
        __privateAdd(this, _autoScrolling, __runInitializers(_init3, 8, this, false)), __runInitializers(_init3, 11, this);
        __privateAdd(this, _meta);
        __privateAdd(this, _scroll, ()=>{
            if (!__privateGet(this, _meta)) {
                return;
            }
            const { element, by } = __privateGet(this, _meta);
            if (by.y) element.scrollTop += by.y;
            if (by.x) element.scrollLeft += by.x;
        });
        this.scroll = (options)=>{
            var _a4;
            if (this.disabled) {
                return false;
            }
            const elements = this.getScrollableElements();
            if (!elements) {
                __privateSet(this, _meta, void 0);
                return false;
            }
            const { position } = this.manager.dragOperation;
            const currentPosition = position == null ? void 0 : position.current;
            if (currentPosition) {
                const { by } = options != null ? options : {};
                const intent = by ? {
                    x: getScrollIntent(by.x),
                    y: getScrollIntent(by.y)
                } : void 0;
                const scrollIntent = intent ? void 0 : this.scrollIntentTracker.current;
                if (scrollIntent == null ? void 0 : scrollIntent.isLocked()) {
                    return false;
                }
                for (const scrollableElement of elements){
                    const elementCanScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canScroll"])(scrollableElement, by);
                    if (elementCanScroll.x || elementCanScroll.y) {
                        const { speed, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectScrollIntent"])(scrollableElement, currentPosition, intent);
                        if (scrollIntent) {
                            for (const axis of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axes"]){
                                if (scrollIntent[axis].isLocked(direction[axis])) {
                                    speed[axis] = 0;
                                    direction[axis] = 0;
                                }
                            }
                        }
                        if (direction.x || direction.y) {
                            const { x: x1, y } = by != null ? by : direction;
                            const scrollLeftBy = x1 * speed.x;
                            const scrollTopBy = y * speed.y;
                            if (scrollLeftBy || scrollTopBy) {
                                const previousScrollBy = (_a4 = __privateGet(this, _meta)) == null ? void 0 : _a4.by;
                                if (this.autoScrolling && previousScrollBy) {
                                    const scrollIntentMismatch = previousScrollBy.x && !scrollLeftBy || previousScrollBy.y && !scrollTopBy;
                                    if (scrollIntentMismatch) continue;
                                }
                                __privateSet(this, _meta, {
                                    element: scrollableElement,
                                    by: {
                                        x: scrollLeftBy,
                                        y: scrollTopBy
                                    }
                                });
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduler"].schedule(__privateGet(this, _scroll));
                                return true;
                            }
                        }
                    }
                }
            }
            __privateSet(this, _meta, void 0);
            return false;
        };
        let previousElementFromPoint = null;
        let previousScrollableElements = null;
        const elementFromPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computed"])(()=>{
            const { position, source } = manager.dragOperation;
            if (!position) {
                return null;
            }
            const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementFromPoint"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(source == null ? void 0 : source.element), position.current);
            if (element) {
                previousElementFromPoint = element;
            }
            return element != null ? element : previousElementFromPoint;
        });
        const scrollableElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computed"])(()=>{
            const element = elementFromPoint.value;
            const { documentElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(element);
            if (!element || element === documentElement) {
                const { target } = manager.dragOperation;
                const targetElement = target == null ? void 0 : target.element;
                if (targetElement) {
                    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollableAncestors"])(targetElement, {
                        excludeElement: false
                    });
                    previousScrollableElements = elements;
                    return elements;
                }
            }
            if (element) {
                const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollableAncestors"])(element, {
                    excludeElement: false
                });
                if (this.autoScrolling && previousScrollableElements && elements.size < (previousScrollableElements == null ? void 0 : previousScrollableElements.size)) {
                    return previousScrollableElements;
                }
                previousScrollableElements = elements;
                return elements;
            }
            previousScrollableElements = null;
            return null;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepEqual"]);
        this.getScrollableElements = ()=>{
            return scrollableElements.value;
        };
        this.scrollIntentTracker = new ScrollIntentTracker(manager);
        this.destroy = manager.monitor.addEventListener("dragmove", (event)=>{
            if (this.disabled || event.defaultPrevented || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(manager.dragOperation.activatorEvent) || !event.by) {
                return;
            }
            if (this.scroll({
                by: event.by
            })) {
                event.preventDefault();
            }
        });
    }
};
_init3 = __decoratorStart(_a3);
_autoScrolling = new WeakMap();
_meta = new WeakMap();
_scroll = new WeakMap();
__decorateElement(_init3, 4, "autoScrolling", _autoScrolling_dec, Scroller, _autoScrolling);
__decoratorMetadata(_init3, Scroller);
function getScrollIntent(value) {
    if (value > 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Forward;
    }
    if (value < 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Reverse;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDirection"].Idle;
}
// src/utilities/scheduling/scheduler.ts
var Scheduler = class {
    constructor(scheduler5){
        this.scheduler = scheduler5;
        this.pending = false;
        this.tasks = /* @__PURE__ */ new Set();
        this.resolvers = /* @__PURE__ */ new Set();
        this.flush = ()=>{
            const { tasks, resolvers } = this;
            this.pending = false;
            this.tasks = /* @__PURE__ */ new Set();
            this.resolvers = /* @__PURE__ */ new Set();
            for (const task of tasks){
                task();
            }
            for (const resolve of resolvers){
                resolve();
            }
        };
    }
    schedule(task) {
        this.tasks.add(task);
        if (!this.pending) {
            this.pending = true;
            this.scheduler(this.flush);
        }
        return new Promise((resolve)=>this.resolvers.add(resolve));
    }
};
var scheduler3 = new Scheduler((callback)=>{
    if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
    } else {
        callback();
    }
});
// src/core/plugins/scrolling/AutoScroller.ts
var AUTOSCROLL_INTERVAL = 10;
var AutoScroller = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"] {
    constructor(manager, _options){
        super(manager);
        const scroller = manager.registry.plugins.get(Scroller);
        if (!scroller) {
            throw new Error("AutoScroller plugin depends on Scroller plugin");
        }
        this.destroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            if (this.disabled) {
                return;
            }
            const { position: _, status } = manager.dragOperation;
            if (status.dragging) {
                const canScroll2 = scroller.scroll();
                if (canScroll2) {
                    scroller.autoScrolling = true;
                    const interval = setInterval(()=>scheduler3.schedule(scroller.scroll), AUTOSCROLL_INTERVAL);
                    return ()=>{
                        clearInterval(interval);
                    };
                } else {
                    scroller.autoScrolling = false;
                }
            }
        });
    }
};
var listenerOptions = {
    capture: true,
    passive: true
};
var _timeout;
var ScrollListener = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorePlugin"] {
    constructor(manager){
        super(manager);
        __privateAdd(this, _timeout);
        this.handleScroll = ()=>{
            if (__privateGet(this, _timeout) == null) {
                __privateSet(this, _timeout, setTimeout(()=>{
                    this.manager.collisionObserver.forceUpdate(false);
                    __privateSet(this, _timeout, void 0);
                }, 50));
            }
        };
        const { dragOperation } = this.manager;
        this.destroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            var _a4, _b2, _c3;
            const enabled = dragOperation.status.dragging;
            if (enabled) {
                const root = (_c3 = (_b2 = (_a4 = dragOperation.source) == null ? void 0 : _a4.element) == null ? void 0 : _b2.ownerDocument) != null ? _c3 : document;
                root.addEventListener("scroll", this.handleScroll, listenerOptions);
                return ()=>{
                    root.removeEventListener("scroll", this.handleScroll, listenerOptions);
                };
            }
        });
    }
};
_timeout = new WeakMap();
var PreventSelection = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"] {
    constructor(manager, options){
        super(manager, options);
        this.manager = manager;
        this.destroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            var _a4;
            const { dragOperation } = this.manager;
            const { nonce } = (_a4 = this.options) != null ? _a4 : {};
            if (dragOperation.status.initialized) {
                const style = document.createElement("style");
                if (nonce) {
                    style.setAttribute("nonce", nonce);
                }
                style.textContent = `* { user-select: none !important; -webkit-user-select: none !important; }`;
                document.head.appendChild(style);
                removeSelection();
                document.addEventListener("selectionchange", removeSelection, {
                    capture: true
                });
                return ()=>{
                    document.removeEventListener("selectionchange", removeSelection, {
                        capture: true
                    });
                    style.remove();
                };
            }
        });
    }
};
function removeSelection() {
    var _a4;
    (_a4 = document.getSelection()) == null ? void 0 : _a4.removeAllRanges();
}
var defaults = Object.freeze({
    offset: 10,
    keyboardCodes: {
        start: [
            "Space",
            "Enter"
        ],
        cancel: [
            "Escape"
        ],
        end: [
            "Space",
            "Enter",
            "Tab"
        ],
        up: [
            "ArrowUp"
        ],
        down: [
            "ArrowDown"
        ],
        left: [
            "ArrowLeft"
        ],
        right: [
            "ArrowRight"
        ]
    },
    shouldActivate (args) {
        var _a4;
        const { event, source } = args;
        const target = (_a4 = source.handle) != null ? _a4 : source.element;
        return event.target === target;
    }
});
var _cleanupFunctions;
var _KeyboardSensor = class _KeyboardSensor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sensor"] {
    constructor(manager, options){
        super(manager);
        this.manager = manager;
        this.options = options;
        __privateAdd(this, _cleanupFunctions, []);
        this.listeners = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listeners"]();
        this.handleSourceKeyDown = (event, source, options)=>{
            if (this.disabled || event.defaultPrevented) {
                return;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(event.target)) {
                return;
            }
            if (source.disabled) {
                return;
            }
            const { keyboardCodes = defaults.keyboardCodes, shouldActivate = defaults.shouldActivate } = options != null ? options : {};
            if (!keyboardCodes.start.includes(event.code)) {
                return;
            }
            if (!this.manager.dragOperation.status.idle) {
                return;
            }
            if (shouldActivate({
                event,
                source,
                manager: this.manager
            })) {
                this.handleStart(event, source, options);
            }
        };
    }
    bind(source, options = this.options) {
        const unbind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            var _a4;
            const target = (_a4 = source.handle) != null ? _a4 : source.element;
            const listener = (event)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(event)) {
                    this.handleSourceKeyDown(event, source, options);
                }
            };
            if (target) {
                target.addEventListener("keydown", listener);
                return ()=>{
                    target.removeEventListener("keydown", listener);
                };
            }
        });
        return unbind;
    }
    handleStart(event, source, options) {
        const { element } = source;
        if (!element) {
            throw new Error("Source draggable does not have an associated element");
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollIntoViewIfNeeded"])(element);
        const { center } = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](element);
        const controller = this.manager.actions.start({
            event,
            coordinates: {
                x: center.x,
                y: center.y
            },
            source
        });
        if (controller.signal.aborted) return this.cleanup();
        this.sideEffects();
        const sourceDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(element);
        const listeners = [
            this.listeners.bind(sourceDocument, [
                {
                    type: "keydown",
                    listener: (event2)=>this.handleKeyDown(event2, source, options),
                    options: {
                        capture: true
                    }
                }
            ])
        ];
        __privateGet(this, _cleanupFunctions).push(...listeners);
    }
    handleKeyDown(event, _source, options) {
        const { keyboardCodes = defaults.keyboardCodes } = options != null ? options : {};
        if (isKeycode(event, [
            ...keyboardCodes.end,
            ...keyboardCodes.cancel
        ])) {
            event.preventDefault();
            const canceled = isKeycode(event, keyboardCodes.cancel);
            this.handleEnd(event, canceled);
            return;
        }
        if (isKeycode(event, keyboardCodes.up)) {
            this.handleMove("up", event);
        } else if (isKeycode(event, keyboardCodes.down)) {
            this.handleMove("down", event);
        }
        if (isKeycode(event, keyboardCodes.left)) {
            this.handleMove("left", event);
        } else if (isKeycode(event, keyboardCodes.right)) {
            this.handleMove("right", event);
        }
    }
    handleEnd(event, canceled) {
        this.manager.actions.stop({
            event,
            canceled
        });
        this.cleanup();
    }
    handleMove(direction, event) {
        var _a4, _b2;
        const { shape } = this.manager.dragOperation;
        const factor = event.shiftKey ? 5 : 1;
        let by = {
            x: 0,
            y: 0
        };
        let offset = (_b2 = (_a4 = this.options) == null ? void 0 : _a4.offset) != null ? _b2 : defaults.offset;
        if (typeof offset === "number") {
            offset = {
                x: offset,
                y: offset
            };
        }
        if (!shape) {
            return;
        }
        switch(direction){
            case "up":
                by = {
                    x: 0,
                    y: -offset.y * factor
                };
                break;
            case "down":
                by = {
                    x: 0,
                    y: offset.y * factor
                };
                break;
            case "left":
                by = {
                    x: -offset.x * factor,
                    y: 0
                };
                break;
            case "right":
                by = {
                    x: offset.x * factor,
                    y: 0
                };
                break;
        }
        if (by.x || by.y) {
            event.preventDefault();
            this.manager.actions.move({
                event,
                by
            });
        }
    }
    sideEffects() {
        const autoScroller = this.manager.registry.plugins.get(AutoScroller);
        if ((autoScroller == null ? void 0 : autoScroller.disabled) === false) {
            autoScroller.disable();
            __privateGet(this, _cleanupFunctions).push(()=>{
                autoScroller.enable();
            });
        }
    }
    cleanup() {
        __privateGet(this, _cleanupFunctions).forEach((cleanup)=>cleanup());
        __privateSet(this, _cleanupFunctions, []);
    }
    destroy() {
        this.cleanup();
        this.listeners.clear();
    }
};
_cleanupFunctions = new WeakMap();
_KeyboardSensor.configure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurator"])(_KeyboardSensor);
_KeyboardSensor.defaults = defaults;
var KeyboardSensor = _KeyboardSensor;
function isKeycode(event, codes) {
    return codes.includes(event.code);
}
var defaults2 = Object.freeze({
    activationConstraints (event, source) {
        var _a4;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target) && (source.handle === target || ((_a4 = source.handle) == null ? void 0 : _a4.contains(target)))) {
            return void 0;
        }
        if (pointerType === "touch") {
            return {
                delay: {
                    value: 250,
                    tolerance: 5
                }
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextInput"])(target) && !event.defaultPrevented) {
            return {
                delay: {
                    value: 200,
                    tolerance: 0
                }
            };
        }
        return {
            delay: {
                value: 200,
                tolerance: 10
            },
            distance: {
                value: 5
            }
        };
    }
});
var _cleanup, _clearTimeout;
var _PointerSensor = class _PointerSensor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sensor"] {
    constructor(manager, options){
        super(manager);
        this.manager = manager;
        this.options = options;
        __privateAdd(this, _cleanup, /* @__PURE__ */ new Set());
        __privateAdd(this, _clearTimeout);
        this.listeners = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listeners"]();
        this.latest = {
            event: void 0,
            coordinates: void 0
        };
        this.handleMove = ()=>{
            const { event, coordinates: to } = this.latest;
            if (!event || !to) {
                return;
            }
            this.manager.actions.move({
                event,
                to
            });
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePointerUp = this.handlePointerUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    activationConstraints(event, source) {
        var _a4;
        const { activationConstraints = defaults2.activationConstraints } = (_a4 = this.options) != null ? _a4 : {};
        const constraints = typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
        return constraints;
    }
    bind(source, options = this.options) {
        const unbind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            var _a4;
            const controller = new AbortController();
            const { signal: signal3 } = controller;
            const listener = (event)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPointerEvent"])(event)) {
                    this.handlePointerDown(event, source, options);
                }
            };
            let targets = [
                (_a4 = source.handle) != null ? _a4 : source.element
            ];
            if (options == null ? void 0 : options.activatorElements) {
                if (Array.isArray(options.activatorElements)) {
                    targets = options.activatorElements;
                } else {
                    targets = options.activatorElements(source);
                }
            }
            for (const target of targets){
                if (!target) continue;
                patchWindow(target.ownerDocument.defaultView);
                target.addEventListener("pointerdown", listener, {
                    signal: signal3
                });
            }
            return ()=>controller.abort();
        });
        return unbind;
    }
    handlePointerDown(event, source, options = {}) {
        if (this.disabled || !event.isPrimary || event.button !== 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(event.target) || source.disabled || isCapturedBySensor(event) || !this.manager.dragOperation.status.idle) {
            return;
        }
        const { target } = event;
        const isNativeDraggable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(target) && target.draggable && target.getAttribute("draggable") === "true";
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameTransform"])(source.element);
        this.initialCoordinates = {
            x: event.clientX * offset.scaleX + offset.x,
            y: event.clientY * offset.scaleY + offset.y
        };
        const constraints = this.activationConstraints(event, source);
        event.sensor = this;
        if (!(constraints == null ? void 0 : constraints.delay) && !(constraints == null ? void 0 : constraints.distance)) {
            this.handleStart(source, event);
        } else {
            const { delay } = constraints;
            if (delay) {
                const timeout = setTimeout(()=>this.handleStart(source, event), delay.value);
                __privateSet(this, _clearTimeout, ()=>{
                    clearTimeout(timeout);
                    __privateSet(this, _clearTimeout, void 0);
                });
            }
        }
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(event.target);
        const unbindListeners = this.listeners.bind(ownerDocument, [
            {
                type: "pointermove",
                listener: (event2)=>this.handlePointerMove(event2, source)
            },
            {
                type: "pointerup",
                listener: this.handlePointerUp,
                options: {
                    capture: true
                }
            },
            {
                // Cancel activation if there is a competing Drag and Drop interaction
                type: "dragstart",
                listener: isNativeDraggable ? this.handleCancel : preventDefault,
                options: {
                    capture: true
                }
            }
        ]);
        const cleanup = ()=>{
            var _a4;
            unbindListeners();
            (_a4 = __privateGet(this, _clearTimeout)) == null ? void 0 : _a4.call(this);
            this.initialCoordinates = void 0;
        };
        __privateGet(this, _cleanup).add(cleanup);
    }
    handlePointerMove(event, source) {
        const coordinates = {
            x: event.clientX,
            y: event.clientY
        };
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameTransform"])(source.element);
        coordinates.x = coordinates.x * offset.scaleX + offset.x;
        coordinates.y = coordinates.y * offset.scaleY + offset.y;
        if (this.manager.dragOperation.status.dragging) {
            event.preventDefault();
            event.stopPropagation();
            this.latest.event = event;
            this.latest.coordinates = coordinates;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduler"].schedule(this.handleMove);
            return;
        }
        if (!this.initialCoordinates) {
            return;
        }
        const delta = {
            x: coordinates.x - this.initialCoordinates.x,
            y: coordinates.y - this.initialCoordinates.y
        };
        const constraints = this.activationConstraints(event, source);
        const { distance, delay } = constraints != null ? constraints : {};
        if (distance) {
            if (distance.tolerance != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exceedsDistance"])(delta, distance.tolerance)) {
                return this.handleCancel(event);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exceedsDistance"])(delta, distance.value)) {
                return this.handleStart(source, event);
            }
        }
        if (delay) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exceedsDistance"])(delta, delay.tolerance)) {
                return this.handleCancel(event);
            }
        }
    }
    handlePointerUp(event) {
        const { status } = this.manager.dragOperation;
        if (!status.idle) {
            event.preventDefault();
            event.stopPropagation();
            const canceled = !status.initialized;
            this.manager.actions.stop({
                event,
                canceled
            });
        }
        this.cleanup();
    }
    handleKeyDown(event) {
        if (event.key === "Escape") {
            event.preventDefault();
            this.handleCancel(event);
        }
    }
    handleStart(source, event) {
        var _a4;
        const { manager, initialCoordinates } = this;
        (_a4 = __privateGet(this, _clearTimeout)) == null ? void 0 : _a4.call(this);
        if (!initialCoordinates || !manager.dragOperation.status.idle) {
            return;
        }
        if (event.defaultPrevented) {
            return;
        }
        const controller = manager.actions.start({
            coordinates: initialCoordinates,
            event,
            source
        });
        if (controller.signal.aborted) return this.cleanup();
        event.preventDefault();
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(event.target);
        const pointerCaptureTarget = ownerDocument.body;
        pointerCaptureTarget.setPointerCapture(event.pointerId);
        const unbind = this.listeners.bind(ownerDocument, [
            {
                // Prevent scrolling on touch devices
                type: "touchmove",
                listener: preventDefault,
                options: {
                    passive: false
                }
            },
            {
                // Prevent click events
                type: "click",
                listener: preventDefault
            },
            {
                type: "contextmenu",
                listener: preventDefault
            },
            {
                type: "keydown",
                listener: this.handleKeyDown
            },
            {
                type: "lostpointercapture",
                listener: (event2)=>{
                    if (event2.target !== pointerCaptureTarget) return;
                    this.handlePointerUp(event2);
                }
            }
        ]);
        __privateGet(this, _cleanup).add(unbind);
    }
    handleCancel(event) {
        const { dragOperation } = this.manager;
        if (dragOperation.status.initialized) {
            this.manager.actions.stop({
                event,
                canceled: true
            });
        }
        this.cleanup();
    }
    cleanup() {
        this.latest = {
            event: void 0,
            coordinates: void 0
        };
        __privateGet(this, _cleanup).forEach((cleanup)=>cleanup());
        __privateGet(this, _cleanup).clear();
    }
    destroy() {
        this.cleanup();
        this.listeners.clear();
    }
};
_cleanup = new WeakMap();
_clearTimeout = new WeakMap();
_PointerSensor.configure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurator"])(_PointerSensor);
_PointerSensor.defaults = defaults2;
var PointerSensor = _PointerSensor;
function isCapturedBySensor(event) {
    return "sensor" in event;
}
function preventDefault(event) {
    event.preventDefault();
}
function noop() {}
var windows = /* @__PURE__ */ new WeakSet();
function patchWindow(window) {
    if (!window || windows.has(window)) {
        return;
    }
    window.addEventListener("touchmove", noop, {
        capture: false,
        passive: false
    });
    windows.add(window);
}
// src/core/manager/manager.ts
var defaultPreset = {
    modifiers: [],
    plugins: [
        Accessibility,
        AutoScroller,
        Cursor,
        Feedback,
        PreventSelection
    ],
    sensors: [
        PointerSensor,
        KeyboardSensor
    ]
};
var DragDropManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropManager"] {
    constructor(input = {}){
        const { plugins = defaultPreset.plugins, sensors = defaultPreset.sensors, modifiers = [] } = input;
        super(__spreadProps(__spreadValues({}, input), {
            plugins: [
                ScrollListener,
                Scroller,
                ...plugins
            ],
            sensors,
            modifiers
        }));
    }
};
var _feedback_dec, _element_dec, _handle_dec, _c, _init4, _handle, _element, _feedback;
var Draggable = class extends (_c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], _handle_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _element_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _feedback_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _c) {
    constructor(_a4, manager){
        var _b2 = _a4, { element, effects: effects2 = ()=>[], handle, feedback = "default" } = _b2, input = __objRest(_b2, [
            "element",
            "effects",
            "handle",
            "feedback"
        ]);
        super(__spreadValues({
            effects: ()=>[
                    ...effects2(),
                    ()=>{
                        var _a5, _b3;
                        const { manager: manager2 } = this;
                        if (!manager2) return;
                        const sensors = (_b3 = (_a5 = this.sensors) == null ? void 0 : _a5.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["descriptor"])) != null ? _b3 : [
                            ...manager2.sensors
                        ];
                        const unbindFunctions = sensors.map((entry)=>{
                            const sensorInstance = entry instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sensor"] ? entry : manager2.registry.register(entry.plugin);
                            const options = entry instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sensor"] ? void 0 : entry.options;
                            const unbind = sensorInstance.bind(this, options);
                            return unbind;
                        });
                        return function cleanup() {
                            unbindFunctions.forEach((unbind)=>unbind());
                        };
                    }
                ]
        }, input), manager);
        __privateAdd(this, _handle, __runInitializers(_init4, 8, this)), __runInitializers(_init4, 11, this);
        __privateAdd(this, _element, __runInitializers(_init4, 12, this)), __runInitializers(_init4, 15, this);
        __privateAdd(this, _feedback, __runInitializers(_init4, 16, this)), __runInitializers(_init4, 19, this);
        this.element = element;
        this.handle = handle;
        this.feedback = feedback;
    }
};
_init4 = __decoratorStart(_c);
_handle = new WeakMap();
_element = new WeakMap();
_feedback = new WeakMap();
__decorateElement(_init4, 4, "handle", _handle_dec, Draggable, _handle);
__decorateElement(_init4, 4, "element", _element_dec, Draggable, _element);
__decorateElement(_init4, 4, "feedback", _feedback_dec, Draggable, _feedback);
__decoratorMetadata(_init4, Draggable);
var _proxy_dec, _element_dec2, _c2, _init5, _element2, _d, element_get, element_set, _Droppable_instances, _proxy;
var Droppable = class extends (_c2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], _element_dec2 = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _proxy_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _c2) {
    constructor(_a4, manager){
        var _b2 = _a4, { element, effects: effects2 = ()=>[] } = _b2, input = __objRest(_b2, [
            "element",
            "effects"
        ]);
        const { collisionDetector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$collision$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$collision$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCollisionDetection"] } = input;
        const updateShape = (boundingClientRect)=>{
            const { manager: manager2, element: element2 } = this;
            if (!element2 || boundingClientRect === null) {
                this.shape = void 0;
                return void 0;
            }
            if (!manager2) return;
            const updatedShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](element2);
            const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>this.shape);
            if (updatedShape && (shape == null ? void 0 : shape.equals(updatedShape))) {
                return shape;
            }
            this.shape = updatedShape;
            return updatedShape;
        };
        const observePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(false);
        super(__spreadProps(__spreadValues({}, input), {
            collisionDetector,
            effects: ()=>[
                    ...effects2(),
                    ()=>{
                        const { element: element2, manager: manager2 } = this;
                        if (!manager2) return;
                        const { dragOperation } = manager2;
                        const { source } = dragOperation;
                        observePosition.value = Boolean(source && dragOperation.status.initialized && element2 && !this.disabled && this.accepts(source));
                    },
                    ()=>{
                        const { element: element2 } = this;
                        if (observePosition.value && element2) {
                            const positionObserver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionObserver"](element2, updateShape);
                            return ()=>{
                                positionObserver.disconnect();
                                this.shape = void 0;
                            };
                        }
                    },
                    ()=>{
                        var _a5;
                        if ((_a5 = this.manager) == null ? void 0 : _a5.dragOperation.status.initialized) {
                            return ()=>{
                                this.shape = void 0;
                            };
                        }
                    }
                ]
        }), manager);
        __privateAdd(this, _Droppable_instances);
        __privateAdd(this, _element2, __runInitializers(_init5, 8, this)), __runInitializers(_init5, 11, this);
        __privateAdd(this, _proxy, __runInitializers(_init5, 12, this)), __runInitializers(_init5, 15, this);
        this.element = element;
        this.refreshShape = ()=>updateShape();
    }
    set element(element) {
        __privateSet(this, _Droppable_instances, element, element_set);
    }
    get element() {
        var _a4;
        return (_a4 = this.proxy) != null ? _a4 : __privateGet(this, _Droppable_instances, element_get);
    }
};
_init5 = __decoratorStart(_c2);
_element2 = new WeakMap();
_Droppable_instances = new WeakSet();
_proxy = new WeakMap();
_d = __decorateElement(_init5, 20, "#element", _element_dec2, _Droppable_instances, _element2), element_get = _d.get, element_set = _d.set;
__decorateElement(_init5, 4, "proxy", _proxy_dec, Droppable, _proxy);
__decoratorMetadata(_init5, Droppable);
;
 //# sourceMappingURL=index.js.map
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@dnd-kit+dom@0.1.21/node_modules/@dnd-kit/dom/sortable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptimisticSortingPlugin",
    ()=>OptimisticSortingPlugin,
    "Sortable",
    ()=>Sortable2,
    "SortableKeyboardPlugin",
    ()=>SortableKeyboardPlugin,
    "defaultSortableTransition",
    ()=>defaultSortableTransition,
    "isSortable",
    ()=>isSortable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+state@0.1.21/node_modules/@dnd-kit/state/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@preact+signals-core@1.12.1/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$collision$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$collision$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+collision@0.1.21/node_modules/@dnd-kit/collision/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+dom@0.1.21/node_modules/@dnd-kit/dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+dom@0.1.21/node_modules/@dnd-kit/dom/utilities.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+abstract@0.1.21/node_modules/@dnd-kit/abstract/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+geometry@0.1.21/node_modules/@dnd-kit/geometry/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol)=>(symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)){
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
    return target;
};
var __decoratorStart = (base)=>{
    var _a;
    return [
        ,
        ,
        ,
        __create((_a = void 0) != null ? _a : null)
    ];
};
var __decoratorStrings = [
    "class",
    "method",
    "getter",
    "setter",
    "accessor",
    "field",
    "value",
    "get",
    "set"
];
var __expectFn = (fn)=>fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns)=>({
        kind: __decoratorStrings[kind],
        name,
        metadata,
        addInitializer: (fn)=>done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null))
    });
var __decoratorMetadata = (array, target)=>__defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value)=>{
    for(var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++)flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
    return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra)=>{
    var fn, it, done, ctx, access, k = flags & 7, s = false, p = false;
    var j = array.length + 1, key = __decoratorStrings[k + 5];
    var initializers = array[j - 1] = [], extraInitializers = array[j] || (array[j] = []);
    var desc = (target = target.prototype, __getOwnPropDesc({
        get [name] () {
            return __privateGet(this, extra);
        },
        set [name] (x){
            return __privateSet(this, extra, x);
        }
    }, name));
    for(var i = decorators.length - 1; i >= 0; i--){
        ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
        {
            ctx.static = s, ctx.private = p, access = ctx.access = {
                has: (x1)=>name in x1
            };
            access.get = (x1)=>x1[name];
            access.set = (x1, y)=>x1[name] = y;
        }
        it = (0, decorators[i])({
            get: desc.get,
            set: desc.set
        }, ctx), done._ = 1;
        if (it === void 0) __expectFn(it) && (desc[key] = it);
        else if (typeof it !== "object" || it === null) __typeError("Object expected");
        else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
    }
    return desc && __defProp(target, name, desc), target;
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
// src/sortable/utilities.ts
function isSortable(element) {
    return element instanceof SortableDroppable || element instanceof SortableDraggable;
}
// src/sortable/plugins/SortableKeyboardPlugin.ts
var TOLERANCE = 10;
var SortableKeyboardPlugin = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"] {
    constructor(manager){
        super(manager);
        const cleanupEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(()=>{
            const { dragOperation } = manager;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(dragOperation.activatorEvent)) {
                return;
            }
            if (!isSortable(dragOperation.source)) {
                return;
            }
            if (dragOperation.status.initialized) {
                const scroller = manager.registry.plugins.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scroller"]);
                if (scroller) {
                    scroller.disable();
                    return ()=>scroller.enable();
                }
            }
        });
        const unsubscribe = manager.monitor.addEventListener("dragmove", (event, manager2)=>{
            queueMicrotask(()=>{
                if (this.disabled || event.defaultPrevented || !event.nativeEvent) {
                    return;
                }
                const { dragOperation } = manager2;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(event.nativeEvent)) {
                    return;
                }
                if (!isSortable(dragOperation.source)) {
                    return;
                }
                if (!dragOperation.shape) {
                    return;
                }
                const { actions, collisionObserver, registry } = manager2;
                const { by } = event;
                if (!by) {
                    return;
                }
                const direction = getDirection(by);
                const { source, target } = dragOperation;
                const { center } = dragOperation.shape.current;
                const potentialTargets = [];
                const cleanup = [];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                    for (const droppable of registry.droppables){
                        const { id: id2 } = droppable;
                        if (!droppable.accepts(source) || id2 === (target == null ? void 0 : target.id) && isSortable(droppable) || !droppable.element) {
                            continue;
                        }
                        let previousShape = droppable.shape;
                        const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](droppable.element, {
                            getBoundingClientRect: (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleBoundingRectangle"])(element, void 0, 0.2)
                        });
                        if (!shape.height || !shape.width) continue;
                        if (direction == "down" && center.y + TOLERANCE < shape.center.y || direction == "up" && center.y - TOLERANCE > shape.center.y || direction == "left" && center.x - TOLERANCE > shape.center.x || direction == "right" && center.x + TOLERANCE < shape.center.x) {
                            potentialTargets.push(droppable);
                            droppable.shape = shape;
                            cleanup.push(()=>droppable.shape = previousShape);
                        }
                    }
                });
                event.preventDefault();
                collisionObserver.disable();
                const collisions = collisionObserver.computeCollisions(potentialTargets, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$collision$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$collision$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCorners"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>cleanup.forEach((clean)=>clean()));
                const [firstCollision] = collisions;
                if (!firstCollision) {
                    return;
                }
                const { id } = firstCollision;
                const { index, group } = source.sortable;
                actions.setDropTarget(id).then(()=>{
                    const { source: source2, target: target2, shape } = dragOperation;
                    if (!source2 || !isSortable(source2) || !shape) {
                        return;
                    }
                    const { index: newIndex, group: newGroup, target: targetElement } = source2.sortable;
                    const updated = index !== newIndex || group !== newGroup;
                    const element = updated ? targetElement : target2 == null ? void 0 : target2.element;
                    if (!element) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollIntoViewIfNeeded"])(element);
                    const updatedShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectangle"](element);
                    if (!updatedShape) {
                        return;
                    }
                    const delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"].delta(updatedShape, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$geometry$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$geometry$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"].from(shape.current.boundingRectangle), source2.alignment);
                    actions.move({
                        by: delta
                    });
                    if (updated) {
                        actions.setDropTarget(source2.id).then(()=>collisionObserver.enable());
                    } else {
                        collisionObserver.enable();
                    }
                });
            });
        });
        this.destroy = ()=>{
            unsubscribe();
            cleanupEffect();
        };
    }
};
function getDirection(delta) {
    const { x: x1, y } = delta;
    if (x1 > 0) {
        return "right";
    } else if (x1 < 0) {
        return "left";
    } else if (y > 0) {
        return "down";
    } else if (y < 0) {
        return "up";
    }
}
// ../helpers/dist/index.js
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value)=>key in obj ? __defProp2(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues2 = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols2) for (var prop of __getOwnPropSymbols2(b)){
        if (__propIsEnum2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps2 = (a, b)=>__defProps2(a, __getOwnPropDescs2(b));
function arrayMove(array, from, to) {
    if (from === to) {
        return array;
    }
    const newArray = array.slice();
    newArray.splice(to, 0, newArray.splice(from, 1)[0]);
    return newArray;
}
function mutate(items, event, mutation) {
    var _a, _b;
    const { source, target, canceled } = event.operation;
    if (!source || !target || canceled) {
        if ("preventDefault" in event) event.preventDefault();
        return items;
    }
    const findIndex = (item, id)=>item === id || typeof item === "object" && "id" in item && item.id === id;
    if (Array.isArray(items)) {
        const sourceIndex2 = items.findIndex((item)=>findIndex(item, source.id));
        const targetIndex2 = items.findIndex((item)=>findIndex(item, target.id));
        if (sourceIndex2 === -1 || targetIndex2 === -1) {
            return items;
        }
        if (!canceled && "index" in source && typeof source.index === "number") {
            const projectedSourceIndex = source.index;
            if (projectedSourceIndex !== sourceIndex2) {
                return mutation(items, sourceIndex2, projectedSourceIndex);
            }
        }
        return mutation(items, sourceIndex2, targetIndex2);
    }
    const entries = Object.entries(items);
    let sourceIndex = -1;
    let sourceParent;
    let targetIndex = -1;
    let targetParent;
    for (const [id, children] of entries){
        if (sourceIndex === -1) {
            sourceIndex = children.findIndex((item)=>findIndex(item, source.id));
            if (sourceIndex !== -1) {
                sourceParent = id;
            }
        }
        if (targetIndex === -1) {
            targetIndex = children.findIndex((item)=>findIndex(item, target.id));
            if (targetIndex !== -1) {
                targetParent = id;
            }
        }
        if (sourceIndex !== -1 && targetIndex !== -1) {
            break;
        }
    }
    if (!source.manager) return items;
    const { dragOperation } = source.manager;
    const position = (_b = (_a = dragOperation.shape) == null ? void 0 : _a.current.center) != null ? _b : dragOperation.position.current;
    if (targetParent == null) {
        if (target.id in items) {
            const insertionIndex = target.shape && position.y > target.shape.center.y ? items[target.id].length : 0;
            targetParent = target.id;
            targetIndex = insertionIndex;
        }
    }
    if (sourceParent == null || targetParent == null || sourceParent === targetParent && sourceIndex === targetIndex) {
        if ("preventDefault" in event) event.preventDefault();
        return items;
    }
    if (sourceParent === targetParent) {
        return __spreadProps2(__spreadValues2({}, items), {
            [sourceParent]: mutation(items[sourceParent], sourceIndex, targetIndex)
        });
    }
    const isBelowTarget = target.shape && Math.round(position.y) > Math.round(target.shape.center.y);
    const modifier = isBelowTarget ? 1 : 0;
    const sourceItem = items[sourceParent][sourceIndex];
    return __spreadProps2(__spreadValues2({}, items), {
        [sourceParent]: [
            ...items[sourceParent].slice(0, sourceIndex),
            ...items[sourceParent].slice(sourceIndex + 1)
        ],
        [targetParent]: [
            ...items[targetParent].slice(0, targetIndex + modifier),
            sourceItem,
            ...items[targetParent].slice(targetIndex + modifier)
        ]
    });
}
function move(items, event) {
    return mutate(items, event, arrayMove);
}
var defaultGroup = "__default__";
var OptimisticSortingPlugin = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$abstract$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$abstract$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"] {
    constructor(manager){
        super(manager);
        const getSortableInstances = ()=>{
            const sortableInstances = /* @__PURE__ */ new Map();
            for (const droppable of manager.registry.droppables){
                if (droppable instanceof SortableDroppable) {
                    const { sortable } = droppable;
                    const { group } = sortable;
                    let instances = sortableInstances.get(group);
                    if (!instances) {
                        instances = /* @__PURE__ */ new Set();
                        sortableInstances.set(group, instances);
                    }
                    instances.add(sortable);
                }
            }
            for (const [group, instances] of sortableInstances){
                sortableInstances.set(group, new Set(sort(instances)));
            }
            return sortableInstances;
        };
        const unsubscribe = [
            manager.monitor.addEventListener("dragover", (event, manager2)=>{
                if (this.disabled) {
                    return;
                }
                const { dragOperation } = manager2;
                const { source, target } = dragOperation;
                if (!isSortable(source) || !isSortable(target)) {
                    return;
                }
                if (source.sortable === target.sortable) {
                    return;
                }
                const instances = getSortableInstances();
                const sameGroup = source.sortable.group === target.sortable.group;
                const sourceInstances = instances.get(source.sortable.group);
                const targetInstances = sameGroup ? sourceInstances : instances.get(target.sortable.group);
                if (!sourceInstances || !targetInstances) return;
                queueMicrotask(()=>{
                    if (event.defaultPrevented) return;
                    manager2.renderer.rendering.then(()=>{
                        var _a, _b, _c;
                        const newInstances = getSortableInstances();
                        for (const [group, sortableInstances] of instances.entries()){
                            const entries = Array.from(sortableInstances).entries();
                            for (const [index, sortable] of entries){
                                if (sortable.index !== index || sortable.group !== group || !((_a = newInstances.get(group)) == null ? void 0 : _a.has(sortable))) {
                                    return;
                                }
                            }
                        }
                        const sourceElement = source.sortable.element;
                        const targetElement = target.sortable.element;
                        if (!targetElement || !sourceElement) {
                            return;
                        }
                        if (!sameGroup && target.id === source.sortable.group) {
                            return;
                        }
                        const orderedSourceSortables = sort(sourceInstances);
                        const orderedTargetSortables = sameGroup ? orderedSourceSortables : sort(targetInstances);
                        const sourceGroup = (_b = source.sortable.group) != null ? _b : defaultGroup;
                        const targetGroup = (_c = target.sortable.group) != null ? _c : defaultGroup;
                        const state = {
                            [sourceGroup]: orderedSourceSortables,
                            [targetGroup]: orderedTargetSortables
                        };
                        const newState = move(state, event);
                        if (state === newState) return;
                        const sourceIndex = newState[targetGroup].indexOf(source.sortable);
                        const targetIndex = newState[targetGroup].indexOf(target.sortable);
                        manager2.collisionObserver.disable();
                        reorder(sourceElement, sourceIndex, targetElement, targetIndex);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                            for (const [index, sortable] of newState[sourceGroup].entries()){
                                sortable.index = index;
                            }
                            if (!sameGroup) {
                                for (const [index, sortable] of newState[targetGroup].entries()){
                                    sortable.group = target.sortable.group;
                                    sortable.index = index;
                                }
                            }
                        });
                        manager2.actions.setDropTarget(source.id).then(()=>manager2.collisionObserver.enable());
                    });
                });
            }),
            manager.monitor.addEventListener("dragend", (event, manager2)=>{
                if (!event.canceled) {
                    return;
                }
                const { dragOperation } = manager2;
                const { source } = dragOperation;
                if (!isSortable(source)) {
                    return;
                }
                if (source.sortable.initialIndex === source.sortable.index && source.sortable.initialGroup === source.sortable.group) {
                    return;
                }
                queueMicrotask(()=>{
                    const instances = getSortableInstances();
                    const initialGroupInstances = instances.get(source.sortable.initialGroup);
                    if (!initialGroupInstances) return;
                    manager2.renderer.rendering.then(()=>{
                        for (const [group, sortableInstances] of instances.entries()){
                            const entries = Array.from(sortableInstances).entries();
                            for (const [index, sortable] of entries){
                                if (sortable.index !== index || sortable.group !== group) {
                                    return;
                                }
                            }
                        }
                        const initialGroup = sort(initialGroupInstances);
                        const sourceElement = source.sortable.element;
                        const target = initialGroup[source.sortable.initialIndex];
                        const targetElement = target == null ? void 0 : target.element;
                        if (!target || !targetElement || !sourceElement) {
                            return;
                        }
                        reorder(sourceElement, target.index, targetElement, source.index);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                            for (const [_, sortableInstances] of instances.entries()){
                                const entries = Array.from(sortableInstances).values();
                                for (const sortable of entries){
                                    sortable.index = sortable.initialIndex;
                                    sortable.group = sortable.initialGroup;
                                }
                            }
                        });
                    });
                });
            })
        ];
        this.destroy = ()=>{
            for (const unsubscribeListener of unsubscribe){
                unsubscribeListener();
            }
        };
    }
};
function reorder(sourceElement, sourceIndex, targetElement, targetIndex) {
    const position = targetIndex < sourceIndex ? "afterend" : "beforebegin";
    targetElement.insertAdjacentElement(position, sourceElement);
}
function sortByIndex(a, b) {
    return a.index - b.index;
}
function sort(instances) {
    return Array.from(instances).sort(sortByIndex);
}
// src/sortable/sortable.ts
var defaultPlugins = [
    SortableKeyboardPlugin,
    OptimisticSortingPlugin
];
var defaultSortableTransition = {
    duration: 250,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    idle: false
};
var store = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WeakStore"]();
var _group_dec, _index_dec, _init, _index, _previousGroup, _previousIndex, _group, _element;
_index_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
], _group_dec = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$state$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactive"]
];
var Sortable2 = class {
    constructor(_a, manager){
        __privateAdd(this, _index, __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
        __privateAdd(this, _previousGroup);
        __privateAdd(this, _previousIndex);
        __privateAdd(this, _group, __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
        __privateAdd(this, _element);
        this.register = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                var _a, _b;
                (_a = this.manager) == null ? void 0 : _a.registry.register(this.droppable);
                (_b = this.manager) == null ? void 0 : _b.registry.register(this.draggable);
            });
            return ()=>this.unregister();
        };
        this.unregister = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                var _a, _b;
                (_a = this.manager) == null ? void 0 : _a.registry.unregister(this.droppable);
                (_b = this.manager) == null ? void 0 : _b.registry.unregister(this.draggable);
            });
        };
        this.destroy = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                this.droppable.destroy();
                this.draggable.destroy();
            });
        };
        var _b = _a, { effects: inputEffects = ()=>[], group, index, sensors, type, transition = defaultSortableTransition, plugins = defaultPlugins } = _b, input = __objRest(_b, [
            "effects",
            "group",
            "index",
            "sensors",
            "type",
            "transition",
            "plugins"
        ]);
        this.droppable = new SortableDroppable(input, manager, this);
        this.draggable = new SortableDraggable(__spreadProps(__spreadValues({}, input), {
            effects: ()=>[
                    ()=>{
                        var _a2, _b2, _c;
                        const status = (_a2 = this.manager) == null ? void 0 : _a2.dragOperation.status;
                        if ((status == null ? void 0 : status.initializing) && this.id === ((_c = (_b2 = this.manager) == null ? void 0 : _b2.dragOperation.source) == null ? void 0 : _c.id)) {
                            store.clear(this.manager);
                        }
                        if (status == null ? void 0 : status.dragging) {
                            store.set(this.manager, this.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>({
                                    initialIndex: this.index,
                                    initialGroup: this.group
                                })));
                        }
                    },
                    ()=>{
                        const { index: index2, group: group2, manager: _ } = this;
                        const previousIndex = __privateGet(this, _previousIndex);
                        const previousGroup = __privateGet(this, _previousGroup);
                        if (index2 !== previousIndex || group2 !== previousGroup) {
                            __privateSet(this, _previousIndex, index2);
                            __privateSet(this, _previousGroup, group2);
                            this.animate();
                        }
                    },
                    ()=>{
                        const { target } = this;
                        const { feedback, isDragSource } = this.draggable;
                        if (feedback == "move" && isDragSource) {
                            this.droppable.disabled = !target;
                        }
                    },
                    ()=>{
                        const { manager: manager2 } = this;
                        for (const plugin of plugins){
                            manager2 == null ? void 0 : manager2.registry.register(plugin);
                        }
                    },
                    ...inputEffects()
                ],
            type,
            sensors
        }), manager, this);
        __privateSet(this, _element, input.element);
        this.manager = manager;
        this.index = index;
        __privateSet(this, _previousIndex, index);
        this.group = group;
        __privateSet(this, _previousGroup, group);
        this.type = type;
        this.transition = transition;
    }
    get initialIndex() {
        var _a, _b;
        return (_b = (_a = store.get(this.manager, this.id)) == null ? void 0 : _a.initialIndex) != null ? _b : this.index;
    }
    get initialGroup() {
        var _a, _b;
        return (_b = (_a = store.get(this.manager, this.id)) == null ? void 0 : _a.initialGroup) != null ? _b : this.group;
    }
    animate() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untracked"])(()=>{
            const { manager, transition } = this;
            const { shape } = this.droppable;
            if (!manager) return;
            const { idle } = manager.dragOperation.status;
            if (!shape || !transition || idle && !transition.idle) {
                return;
            }
            manager.renderer.rendering.then(()=>{
                const { element } = this;
                if (!element) {
                    return;
                }
                const updatedShape = this.refreshShape();
                if (!updatedShape) {
                    return;
                }
                const delta = {
                    x: shape.boundingRectangle.left - updatedShape.boundingRectangle.left,
                    y: shape.boundingRectangle.top - updatedShape.boundingRectangle.top
                };
                const { translate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyles"])(element);
                const currentTranslate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeTranslate"])(element, translate, false);
                const finalTranslate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeTranslate"])(element, translate);
                if (delta.x || delta.y) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTransform"])({
                        element,
                        keyframes: {
                            translate: [
                                `${currentTranslate.x + delta.x}px ${currentTranslate.y + delta.y}px ${currentTranslate.z}`,
                                `${finalTranslate.x}px ${finalTranslate.y}px ${finalTranslate.z}`
                            ]
                        },
                        options: transition
                    }).then(()=>{
                        if (!manager.dragOperation.status.dragging) {
                            this.droppable.shape = void 0;
                        }
                    });
                }
            });
        });
    }
    get manager() {
        return this.draggable.manager;
    }
    set manager(manager) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
            this.draggable.manager = manager;
            this.droppable.manager = manager;
        });
    }
    set element(element) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
            const previousElement = __privateGet(this, _element);
            const droppableElement = this.droppable.element;
            const draggableElement = this.draggable.element;
            if (!droppableElement || droppableElement === previousElement) {
                this.droppable.element = element;
            }
            if (!draggableElement || draggableElement === previousElement) {
                this.draggable.element = element;
            }
            __privateSet(this, _element, element);
        });
    }
    get element() {
        var _a, _b;
        const element = __privateGet(this, _element);
        if (!element) return;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProxiedElements"].get(element)) != null ? _a : element) != null ? _b : this.droppable.element;
    }
    set target(target) {
        this.droppable.element = target;
    }
    get target() {
        return this.droppable.element;
    }
    set source(source) {
        this.draggable.element = source;
    }
    get source() {
        return this.draggable.element;
    }
    get disabled() {
        return this.draggable.disabled && this.droppable.disabled;
    }
    set feedback(value) {
        this.draggable.feedback = value;
    }
    set disabled(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
            this.droppable.disabled = value;
            this.draggable.disabled = value;
        });
    }
    set data(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
            this.droppable.data = data;
            this.draggable.data = data;
        });
    }
    set handle(handle) {
        this.draggable.handle = handle;
    }
    set id(id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
            this.droppable.id = id;
            this.draggable.id = id;
        });
    }
    get id() {
        return this.droppable.id;
    }
    set sensors(value) {
        this.draggable.sensors = value;
    }
    set modifiers(value) {
        this.draggable.modifiers = value;
    }
    set collisionPriority(value) {
        this.droppable.collisionPriority = value;
    }
    set collisionDetector(value) {
        this.droppable.collisionDetector = value != null ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$collision$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$collision$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCollisionDetection"];
    }
    set alignment(value) {
        this.draggable.alignment = value;
    }
    get alignment() {
        return this.draggable.alignment;
    }
    set type(type) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$preact$2b$signals$2d$core$40$1$2e$12$2e$1$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
            this.droppable.type = type;
            this.draggable.type = type;
        });
    }
    get type() {
        return this.draggable.type;
    }
    set accept(value) {
        this.droppable.accept = value;
    }
    get accept() {
        return this.droppable.accept;
    }
    get isDropTarget() {
        return this.droppable.isDropTarget;
    }
    /**
   * A boolean indicating whether the sortable item is the source of a drag operation.
   */ get isDragSource() {
        return this.draggable.isDragSource;
    }
    /**
   * A boolean indicating whether the sortable item is being dragged.
   */ get isDragging() {
        return this.draggable.isDragging;
    }
    /**
   * A boolean indicating whether the sortable item is being dropped.
   */ get isDropping() {
        return this.draggable.isDropping;
    }
    get status() {
        return this.draggable.status;
    }
    refreshShape() {
        return this.droppable.refreshShape();
    }
    accepts(draggable) {
        return this.droppable.accepts(draggable);
    }
};
_init = __decoratorStart();
_index = new WeakMap();
_previousGroup = new WeakMap();
_previousIndex = new WeakMap();
_group = new WeakMap();
_element = new WeakMap();
__decorateElement(_init, 4, "index", _index_dec, Sortable2, _index);
__decorateElement(_init, 4, "group", _group_dec, Sortable2, _group);
__decoratorMetadata(_init, Sortable2);
var SortableDraggable = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"] {
    constructor(input, manager, sortable){
        super(input, manager);
        this.sortable = sortable;
    }
    get index() {
        return this.sortable.index;
    }
};
var SortableDroppable = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$dom$40$0$2e$1$2e$21$2f$node_modules$2f40$dnd$2d$kit$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"] {
    constructor(input, manager, sortable){
        super(input, manager);
        this.sortable = sortable;
    }
};
;
 //# sourceMappingURL=sortable.js.map
 //# sourceMappingURL=sortable.js.map
}),
]);

//# sourceMappingURL=ac9f8_%40dnd-kit_dom_eb946904._.js.map