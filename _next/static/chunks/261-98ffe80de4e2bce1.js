"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [261], {
        106: function(t, e, n) {
            n.d(e, {
                Av: function() {
                    return l
                },
                Jj: function() {
                    return i
                },
                Me: function() {
                    return o
                },
                Nq: function() {
                    return r
                },
                SK: function() {
                    return h
                },
                eS: function() {
                    return p
                },
                iK: function() {
                    return s
                },
                lQ: function() {
                    return g
                },
                oq: function() {
                    return m
                },
                pn: function() {
                    return d
                },
                r3: function() {
                    return c
                },
                vY: function() {
                    return u
                },
                wB: function() {
                    return f
                },
                wy: function() {
                    return v
                }
            });
            const r = function() {
                var t;
                return "undefined" !== typeof window && !(null == (t = window.document) || !t.createElement)
            }();

            function o(t) {
                return t ? t.ownerDocument || t : document
            }

            function i(t) {
                return o(t).defaultView || window
            }

            function u(t, e) {
                void 0 === e && (e = !1);
                const {
                    activeElement: n
                } = o(t);
                if (null == n || !n.nodeName) return null;
                if (l(n) && n.contentDocument) return u(n.contentDocument.body, e);
                if (e) {
                    const t = n.getAttribute("aria-activedescendant");
                    if (t) {
                        const e = o(n).getElementById(t);
                        if (e) return e
                    }
                }
                return n
            }

            function c(t, e) {
                return t === e || t.contains(e)
            }

            function l(t) {
                return "IFRAME" === t.tagName
            }

            function s(t) {
                const e = t.tagName.toLowerCase();
                return "button" === e || !("input" !== e || !t.type) && -1 !== a.indexOf(t.type)
            }
            const a = ["button", "color", "file", "image", "reset", "submit"];

            function f(t, e) {
                return "matches" in t ? t.matches(e) : "msMatchesSelector" in t ? t.msMatchesSelector(e) : t.webkitMatchesSelector(e)
            }

            function d(t) {
                const e = t;
                return e.offsetWidth > 0 || e.offsetHeight > 0 || t.getClientRects().length > 0
            }

            function m(t, e) {
                if ("closest" in t) return t.closest(e);
                do {
                    if (f(t, e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            }

            function p(t) {
                try {
                    const e = t instanceof HTMLInputElement && null !== t.selectionStart,
                        n = "TEXTAREA" === t.tagName;
                    return e || n || !1
                } catch (e) {
                    return !1
                }
            }

            function h(t, e) {
                const n = null == t ? void 0 : t.getAttribute("role");
                return n && -1 !== ["dialog", "menu", "listbox", "tree", "grid"].indexOf(n) ? n : e
            }

            function g(t, e) {
                var n;
                const r = h(t);
                if (!r) return e;
                return null != (n = {
                    menu: "menuitem",
                    listbox: "option",
                    tree: "treeitem",
                    grid: "gridcell"
                }[r]) ? n : e
            }

            function v(t) {
                if (!t) return null;
                if (t.clientHeight && t.scrollHeight > t.clientHeight) {
                    const {
                        overflowY: e
                    } = getComputedStyle(t);
                    if ("visible" !== e && "hidden" !== e) return t
                }
                return v(t.parentElement) || document.scrollingElement || document.body
            }
        },
        22386: function(t, e, n) {
            n.d(e, {
                Ke: function() {
                    return i
                },
                N: function() {
                    return m
                },
                Ud: function() {
                    return u
                },
                Vr: function() {
                    return a
                },
                XN: function() {
                    return l
                },
                iN: function() {
                    return h
                },
                lO: function() {
                    return d
                },
                nm: function() {
                    return f
                },
                qx: function() {
                    return p
                },
                sE: function() {
                    return s
                },
                wC: function() {
                    return c
                }
            });
            var r = n(106),
                o = n(52021);

            function i(t) {
                return !(0, r.r3)(t.currentTarget, t.target)
            }

            function u(t) {
                return t.target === t.currentTarget
            }

            function c(t) {
                const e = t.currentTarget;
                if (!e) return !1;
                const n = (0, o.mL)();
                if (n && !t.metaKey) return !1;
                if (!n && !t.ctrlKey) return !1;
                const r = e.tagName.toLowerCase();
                return "a" === r || ("button" === r && "submit" === e.type || "input" === r && "submit" === e.type)
            }

            function l(t) {
                const e = t.currentTarget;
                if (!e) return !1;
                const n = e.tagName.toLowerCase();
                return !!t.altKey && ("a" === n || ("button" === n && "submit" === e.type || "input" === n && "submit" === e.type))
            }

            function s(t, e) {
                const n = new FocusEvent("blur", e),
                    r = t.dispatchEvent(n),
                    o = { ...e,
                        bubbles: !0
                    };
                return t.dispatchEvent(new FocusEvent("focusout", o)), r
            }

            function a(t, e) {
                const n = new FocusEvent("focus", e),
                    r = t.dispatchEvent(n),
                    o = { ...e,
                        bubbles: !0
                    };
                return t.dispatchEvent(new FocusEvent("focusin", o)), r
            }

            function f(t, e, n) {
                const r = new KeyboardEvent(e, n);
                return t.dispatchEvent(r)
            }

            function d(t, e) {
                const n = new MouseEvent("click", e);
                return t.dispatchEvent(n)
            }

            function m(t, e) {
                const n = e || t.currentTarget,
                    o = t.relatedTarget;
                return !o || !(0, r.r3)(n, o)
            }

            function p(t, e, n) {
                const r = requestAnimationFrame((() => {
                        t.removeEventListener(e, o, !0), n()
                    })),
                    o = () => {
                        cancelAnimationFrame(r), n()
                    };
                return t.addEventListener(e, o, {
                    once: !0,
                    capture: !0
                }), r
            }

            function h(t, e, n, r) {
                void 0 === r && (r = window);
                try {
                    r.document.addEventListener(t, e, n)
                } catch (u) {}
                const o = [];
                for (let c = 0; c < (null == (i = r.frames) ? void 0 : i.length); c += 1) {
                    var i;
                    const u = r.frames[c];
                    u && o.push(h(t, e, n, u))
                }
                return () => {
                    try {
                        r.document.removeEventListener(t, e, n)
                    } catch (u) {}
                    o.forEach((t => t()))
                }
            }
        },
        76095: function(t, e, n) {
            n.d(e, {
                B_: function() {
                    return m
                },
                EB: function() {
                    return i
                },
                H1: function() {
                    return d
                },
                MN: function() {
                    return g
                },
                PY: function() {
                    return y
                },
                Qw: function() {
                    return p
                },
                SI: function() {
                    return l
                },
                YC: function() {
                    return s
                },
                e8: function() {
                    return f
                },
                k0: function() {
                    return a
                },
                ss: function() {
                    return v
                }
            });
            var r = n(106);
            const o = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";

            function i(t) {
                return (0, r.wB)(t, o) && (0, r.pn)(t)
            }

            function u(t) {
                return i(t) && ! function(t) {
                    return parseInt(t.getAttribute("tabindex") || "0", 10) < 0
                }(t)
            }

            function c(t, e) {
                const n = Array.from(t.querySelectorAll(o));
                e && n.unshift(t);
                const u = n.filter(i);
                return u.forEach(((t, e) => {
                    if ((0, r.Av)(t) && t.contentDocument) {
                        const n = t.contentDocument.body;
                        u.splice(e, 1, ...c(n))
                    }
                })), u
            }

            function l(t, e, n) {
                const i = Array.from(t.querySelectorAll(o)),
                    c = i.filter(u);
                return e && u(t) && c.unshift(t), c.forEach(((t, e) => {
                    if ((0, r.Av)(t) && t.contentDocument) {
                        const r = l(t.contentDocument.body, !1, n);
                        c.splice(e, 1, ...r)
                    }
                })), !c.length && n ? i : c
            }

            function s(t, e, n) {
                const [r] = l(t, e, n);
                return r || null
            }

            function a(t, e) {
                return function(t, e, n, o) {
                    const i = (0, r.vY)(t),
                        l = c(t, e),
                        s = l.indexOf(i),
                        a = l.slice(s + 1);
                    return a.find(u) || (n ? l.find(u) : null) || (o ? a[0] : null) || null
                }(document.body, !1, t, e)
            }

            function f(t, e) {
                return function(t, e, n, o) {
                    const i = (0, r.vY)(t),
                        l = c(t, e).reverse(),
                        s = l.indexOf(i),
                        a = l.slice(s + 1);
                    return a.find(u) || (n ? l.find(u) : null) || (o ? a[0] : null) || null
                }(document.body, !1, t, e)
            }

            function d(t) {
                const e = (0, r.vY)(t);
                if (!e) return !1;
                if (e === t) return !0;
                const n = e.getAttribute("aria-activedescendant");
                return !!n && n === t.id
            }

            function m(t) {
                const e = (0, r.vY)(t);
                if (!e) return !1;
                if ((0, r.r3)(t, e)) return !0;
                const n = e.getAttribute("aria-activedescendant");
                return !!n && ("id" in t && (n === t.id || !!t.querySelector("#" + CSS.escape(n))))
            }

            function p(t) {
                !m(t) && i(t) && t.focus()
            }

            function h(t) {
                var e;
                const n = null != (e = t.getAttribute("tabindex")) ? e : "";
                t.setAttribute("data-tabindex", n), t.setAttribute("tabindex", "-1")
            }

            function g(t, e) {
                l(t, e).forEach(h)
            }

            function v(t) {
                const e = t.querySelectorAll("[data-tabindex]"),
                    n = t => {
                        const e = t.getAttribute("data-tabindex");
                        t.removeAttribute("data-tabindex"), e ? t.setAttribute("tabindex", e) : t.removeAttribute("tabindex")
                    };
                t.hasAttribute("data-tabindex") && n(t), e.forEach(n)
            }

            function y(t, e) {
                "scrollIntoView" in t ? (t.focus({
                    preventScroll: !0
                }), t.scrollIntoView({
                    block: "nearest",
                    inline: "nearest",
                    ...e
                })) : t.focus()
            }
        },
        10451: function(t, e, n) {
            var r;
            n.d(e, {
                Gw: function() {
                    return f
                },
                Hw: function() {
                    return T
                },
                Me: function() {
                    return w
                },
                NW: function() {
                    return N
                },
                O: function() {
                    return x
                },
                OJ: function() {
                    return k
                },
                PY: function() {
                    return y
                },
                cP: function() {
                    return p
                },
                cR: function() {
                    return v
                },
                is: function() {
                    return R
                },
                kz: function() {
                    return m
                },
                m1: function() {
                    return P
                },
                pQ: function() {
                    return b
                },
                t2: function() {
                    return d
                },
                yl: function() {
                    return C
                },
                zP: function() {
                    return h
                },
                zX: function() {
                    return g
                },
                zk: function() {
                    return A
                }
            });
            var o = n(67294),
                i = n(106),
                u = n(22386),
                c = n(31423);
            const l = (r || (r = n.t(o, 2))).useId,
                s = (r || (r = n.t(o, 2))).useDeferredValue,
                a = (r || (r = n.t(o, 2))).useInsertionEffect,
                f = i.Nq ? o.useLayoutEffect : o.useEffect;

            function d(t) {
                const [e] = (0, o.useState)(t);
                return e
            }

            function m(t) {
                const e = (0, o.useRef)();
                return void 0 === e.current && (e.current = t()), e.current
            }

            function p(t) {
                const e = (0, o.useRef)(t);
                return f((() => {
                    e.current = t
                })), e
            }

            function h(t) {
                const [e, n] = (0, o.useState)(t);
                return t !== e && n(t), e
            }

            function g(t) {
                const e = (0, o.useRef)((() => {
                    throw new Error("Cannot call an event handler while rendering.")
                }));
                return a ? a((() => {
                    e.current = t
                })) : e.current = t, (0, o.useCallback)((function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null == e.current ? void 0 : e.current(...n)
                }), [])
            }

            function v() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return (0, o.useMemo)((() => {
                    if (e.some(Boolean)) return t => {
                        e.forEach((e => {
                            (0, c.k$)(e, t)
                        }))
                    }
                }), e)
            }

            function y(t, e) {
                const [n, r] = (0, o.useState)(void 0);
                return f((() => {
                    var e;
                    r(null == t || null == (e = t.current) ? void 0 : e.id)
                }), e), n
            }

            function w(t) {
                if (l) {
                    const e = l();
                    return t || e
                }
                const [e, n] = (0, o.useState)(t);
                return f((() => {
                    if (t || e) return;
                    const r = Math.random().toString(36).substr(2, 6);
                    n("id-" + r)
                }), [t, e]), t || e
            }

            function b(t) {
                if (s) return s(t);
                const [e, n] = (0, o.useState)(t);
                return (0, o.useEffect)((() => {
                    const e = requestAnimationFrame((() => n(t)));
                    return () => cancelAnimationFrame(e)
                }), [t]), e
            }

            function x(t, e) {
                const [n, r] = (0, o.useState)((() => E(e)));
                return f((() => {
                    var n;
                    r((null == t || null == (n = t.current) ? void 0 : n.tagName.toLowerCase()) || E(e))
                }), [t, e]), n
            }

            function E(t) {
                if ("string" === typeof t) return t
            }

            function R(t, e) {
                const n = (0, o.useRef)(!1);
                f((() => {
                    if (n.current) return t();
                    n.current = !0
                }), e), f((() => () => {
                    n.current = !1
                }), [])
            }

            function A(t, e, n) {
                const [r, i] = (0, o.useState)(t), u = void 0 !== e ? e : r, l = p(e), s = p(n), a = p(u), f = (0, o.useCallback)((t => {
                    const e = s.current;
                    if (e)
                        if (S(e)) e(t);
                        else {
                            const n = (0, c.Ei)(t, a.current);
                            a.current = n, e(n)
                        }
                    void 0 === l.current && i(t)
                }), []);
                var d;
                return S(d = f) || Object.defineProperty(d, L, {
                    value: !0
                }), [u, f]
            }
            const L = Symbol("setNextState");

            function S(t) {
                return !0 === t[L]
            }

            function N() {
                return (0, o.useReducer)((() => []), [])
            }

            function C(t) {
                return g("function" === typeof t ? t : () => t)
            }

            function k(t, e, n) {
                void 0 === n && (n = []);
                const r = (0, o.useCallback)((n => (t.wrapElement && (n = t.wrapElement(n)), e(n))), [...n, t.wrapElement]);
                return { ...t,
                    wrapElement: r
                }
            }

            function T(t, e) {
                void 0 === t && (t = !1);
                const [n, r] = (0, o.useState)(null);
                return {
                    portalRef: v(r, e),
                    portalNode: n,
                    domReady: !t || n
                }
            }

            function P() {
                (0, o.useEffect)((() => {
                    (0, u.iN)("mousemove", F, !0), (0, u.iN)("mousedown", j, !0), (0, u.iN)("mouseup", j, !0), (0, u.iN)("keydown", j, !0), (0, u.iN)("scroll", j, !0)
                }), []);
                return g((() => M))
            }
            let M = !1,
                O = 0,
                D = 0;

            function F(t) {
                (function(t) {
                    const e = t.movementX || t.screenX - O,
                        n = t.movementY || t.screenY - D;
                    return O = t.screenX, D = t.screenY, e || n || !1
                })(t) && (M = !0)
            }

            function j() {
                M = !1
            }
        },
        31423: function(t, e, n) {
            function r() {}

            function o(t, e) {
                if (t === e) return !0;
                if (!t) return !1;
                if (!e) return !1;
                if ("object" !== typeof t) return !1;
                if ("object" !== typeof e) return !1;
                const n = Object.keys(t),
                    r = Object.keys(e),
                    {
                        length: o
                    } = n;
                if (r.length !== o) return !1;
                for (const i of n)
                    if (t[i] !== e[i]) return !1;
                return !0
            }

            function i(t, e) {
                if (function(t) {
                        return "function" === typeof t
                    }(t)) {
                    return t(function(t) {
                        return "function" === typeof t
                    }(e) ? e() : e)
                }
                return t
            }

            function u(t, e) {
                "function" === typeof t ? t(e) : t && (t.current = e)
            }

            function c(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function l() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function() {
                    for (const t of e) "function" === typeof t && t(...arguments)
                }
            }

            function s(t) {
                return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            }

            function a(t) {
                if (window.queueMicrotask) return window.queueMicrotask(t);
                Promise.resolve().then(t)
            }
            n.d(e, {
                Ei: function() {
                    return i
                },
                Ue: function() {
                    return s
                },
                YE: function() {
                    return a
                },
                ZT: function() {
                    return r
                },
                k$: function() {
                    return u
                },
                nr: function() {
                    return c
                },
                tS: function() {
                    return l
                },
                wU: function() {
                    return o
                }
            })
        },
        52021: function(t, e, n) {
            n.d(e, {
                G6: function() {
                    return u
                },
                V5: function() {
                    return l
                },
                b1: function() {
                    return o
                },
                mL: function() {
                    return i
                },
                vU: function() {
                    return c
                }
            });
            var r = n(106);

            function o() {
                return r.Nq && !!navigator.maxTouchPoints
            }

            function i() {
                return !!r.Nq && /mac|iphone|ipad|ipod/i.test(navigator.platform)
            }

            function u() {
                return r.Nq && i() && /apple/i.test(navigator.vendor)
            }

            function c() {
                return r.Nq && /firefox\//i.test(navigator.userAgent)
            }

            function l() {
                return r.Nq && navigator.platform.startsWith("Mac") && !o()
            }
        },
        61142: function(t, e, n) {
            n.d(e, {
                Bi: function() {
                    return l
                },
                LM: function() {
                    return u
                },
                az: function() {
                    return c
                }
            });
            var r = n(67294),
                o = n(31423),
                i = n(85893);

            function u(t) {
                const e = (e, n) => t({
                    ref: n,
                    ...e
                });
                return (0, r.forwardRef)(e)
            }

            function c(t, e) {
                const {
                    as: n,
                    wrapElement: r,
                    ...o
                } = e;
                let u;
                if (n && "string" !== typeof n) u = (0, i.jsx)(n, { ...o
                });
                else if ("function" === typeof e.children) {
                    const {
                        children: t,
                        ...n
                    } = o;
                    u = e.children(n)
                } else u = n ? (0, i.jsx)(n, { ...o
                }) : (0, i.jsx)(t, { ...o
                });
                return r ? r(u) : u
            }

            function l(t) {
                return function(e) {
                    void 0 === e && (e = {});
                    const n = t(e),
                        r = {};
                    for (const t in n)(0, o.nr)(n, t) && void 0 !== n[t] && (r[t] = n[t]);
                    return r
                }
            }
        },
        44008: function(t, e, n) {
            n.d(e, {
                f: function() {
                    return s
                }
            });
            var r = n(67294),
                o = n(10451),
                i = n(61142),
                u = n(73935);

            function c(t, e) {
                const n = setTimeout(e, t);
                return () => clearTimeout(n)
            }

            function l() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return e.join(", ").split(", ").reduce(((t, e) => {
                    const n = 1e3 * parseFloat(e || "0s");
                    return n > t ? n : t
                }), 0)
            }
            const s = (0, i.Bi)((t => {
                let {
                    state: e,
                    ...n
                } = t;
                const i = (0, o.Me)(n.id),
                    [s, a] = (0, r.useState)(null);
                (0, o.Gw)((() => {
                    var t;
                    if (e.animated) {
                        if (null != (t = e.contentElement) && t.isConnected) return function(t) {
                            let e = requestAnimationFrame((() => {
                                e = requestAnimationFrame(t)
                            }));
                            return () => cancelAnimationFrame(e)
                        }((() => {
                            a(e.open ? "enter" : "leave")
                        }));
                        a(null)
                    }
                }), [e.animated, e.contentElement, e.open]), (0, o.Gw)((() => {
                    if (!e.animated) return;
                    if (!e.contentElement) return;
                    if (!s) return;
                    if ("enter" === s && !e.open) return;
                    if ("leave" === s && e.open) return;
                    if ("number" === typeof e.animated) {
                        return c(e.animated, (() => (0, u.flushSync)(e.stopAnimation)))
                    }
                    const {
                        transitionDuration: t,
                        animationDuration: n,
                        transitionDelay: r,
                        animationDelay: o
                    } = getComputedStyle(e.contentElement), i = l(r, o) + l(t, n);
                    return i ? c(i, (() => (0, u.flushSync)(e.stopAnimation))) : void 0
                }), [e.animated, e.contentElement, s, e.open, e.stopAnimation]);
                const f = e.mounted || !1 === n.hidden ? n.style : { ...n.style,
                    display: "none"
                };
                return n = {
                    id: i,
                    "data-enter": "enter" === s ? "" : void 0,
                    "data-leave": "leave" === s ? "" : void 0,
                    hidden: !e.mounted,
                    ...n,
                    ref: (0, o.cR)(i ? e.setContentElement : null, n.ref),
                    style: f
                }, n
            }));
            (0, i.LM)((t => {
                const e = s(t);
                return (0, i.az)("div", e)
            }))
        },
        73750: function(t, e, n) {
            n.d(e, {
                b: function() {
                    return i
                }
            });
            var r = n(67294),
                o = n(10451);

            function i(t) {
                var e;
                let {
                    animated: n = !1,
                    ...i
                } = void 0 === t ? {} : t;
                const u = (0, r.useRef)(null),
                    [c, l] = (0, o.zk)(null != (e = i.defaultOpen) && e, i.open, i.setOpen),
                    [s, a] = (0, r.useState)(null),
                    [f, d] = (0, r.useState)(!!n && c),
                    m = (0, o.zP)(c),
                    p = c || f;
                n && !f && m !== c && d(!0);
                const h = (0, r.useCallback)((() => l(!0)), [l]),
                    g = (0, r.useCallback)((() => l(!1)), [l]),
                    v = (0, r.useCallback)((() => l((t => !t))), [l]),
                    y = (0, r.useCallback)((() => d(!1)), []);
                return (0, r.useMemo)((() => ({
                    disclosureRef: u,
                    open: c,
                    mounted: p,
                    animated: n,
                    animating: f,
                    contentElement: s,
                    setContentElement: a,
                    setOpen: l,
                    show: h,
                    hide: g,
                    toggle: v,
                    stopAnimation: y
                })), [c, p, n, f, s, a, l, h, g, v, y])
            }
        },
        41633: function(t, e, n) {
            n.d(e, {
                i: function() {
                    return u
                }
            });
            var r = n(61142),
                o = n(52134);
            const i = (0, r.Bi)((t => (t = {
                    "data-focus-trap": "",
                    tabIndex: 0,
                    "aria-hidden": !0,
                    ...t,
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        ...t.style
                    }
                }, t = (0, o.S)(t)))),
                u = (0, r.LM)((t => {
                    const e = i(t);
                    return (0, r.az)("span", e)
                }))
        },
        55395: function(t, e, n) {
            n.d(e, {
                Q: function() {
                    return i
                }
            });
            var r = n(10451),
                o = n(61142);
            const i = (0, o.Bi)((t => {
                let {
                    state: e,
                    ...n
                } = t;
                return n = { ...n,
                    ref: (0, r.cR)(e.anchorRef, n.ref)
                }, n
            }));
            (0, o.LM)((t => {
                const e = i(t);
                return (0, o.az)("div", e)
            }))
        },
        55551: function(t, e, n) {
            n.d(e, {
                v: function() {
                    return st
                }
            });
            var r = n(67294);

            function o(t) {
                return t.split("-")[0]
            }

            function i(t) {
                return t.split("-")[1]
            }

            function u(t) {
                return ["top", "bottom"].includes(o(t)) ? "x" : "y"
            }

            function c(t) {
                return "y" === t ? "height" : "width"
            }

            function l(t, e, n) {
                let {
                    reference: r,
                    floating: l
                } = t;
                const s = r.x + r.width / 2 - l.width / 2,
                    a = r.y + r.height / 2 - l.height / 2,
                    f = u(e),
                    d = c(f),
                    m = r[d] / 2 - l[d] / 2,
                    p = "x" === f;
                let h;
                switch (o(e)) {
                    case "top":
                        h = {
                            x: s,
                            y: r.y - l.height
                        };
                        break;
                    case "bottom":
                        h = {
                            x: s,
                            y: r.y + r.height
                        };
                        break;
                    case "right":
                        h = {
                            x: r.x + r.width,
                            y: a
                        };
                        break;
                    case "left":
                        h = {
                            x: r.x - l.width,
                            y: a
                        };
                        break;
                    default:
                        h = {
                            x: r.x,
                            y: r.y
                        }
                }
                switch (i(e)) {
                    case "start":
                        h[f] -= m * (n && p ? -1 : 1);
                        break;
                    case "end":
                        h[f] += m * (n && p ? -1 : 1)
                }
                return h
            }

            function s(t) {
                return "number" != typeof t ? function(t) {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...t
                    }
                }(t) : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function a(t) {
                return { ...t,
                    top: t.y,
                    left: t.x,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                }
            }
            async function f(t, e) {
                var n;
                void 0 === e && (e = {});
                const {
                    x: r,
                    y: o,
                    platform: i,
                    rects: u,
                    elements: c,
                    strategy: l
                } = t, {
                    boundary: f = "clippingAncestors",
                    rootBoundary: d = "viewport",
                    elementContext: m = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = e, g = s(h), v = c[p ? "floating" === m ? "reference" : "floating" : m], y = a(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(c.floating)),
                    boundary: f,
                    rootBoundary: d,
                    strategy: l
                })), w = a(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: "floating" === m ? { ...u.floating,
                        x: r,
                        y: o
                    } : u.reference,
                    offsetParent: await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c.floating)),
                    strategy: l
                }) : u[m]);
                return {
                    top: y.top - w.top + g.top,
                    bottom: w.bottom - y.bottom + g.bottom,
                    left: y.left - w.left + g.left,
                    right: w.right - y.right + g.right
                }
            }
            const d = Math.min,
                m = Math.max;

            function p(t, e, n) {
                return m(t, d(e, n))
            }
            const h = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function g(t) {
                return t.replace(/left|right|bottom|top/g, (t => h[t]))
            }

            function v(t, e, n) {
                void 0 === n && (n = !1);
                const r = i(t),
                    o = u(t),
                    l = c(o);
                let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return e.reference[l] > e.floating[l] && (s = g(s)), {
                    main: s,
                    cross: g(s)
                }
            }
            const y = {
                start: "end",
                end: "start"
            };

            function w(t) {
                return t.replace(/start|end/g, (t => y[t]))
            }
            const b = ["top", "right", "bottom", "left"];
            b.reduce(((t, e) => t.concat(e, e + "-start", e + "-end")), []);

            function x(t) {
                return "x" === t ? "y" : "x"
            }

            function E(t) {
                return t && t.document && t.location && t.alert && t.setInterval
            }

            function R(t) {
                if (null == t) return window;
                if (!E(t)) {
                    const e = t.ownerDocument;
                    return e && e.defaultView || window
                }
                return t
            }

            function A(t) {
                return R(t).getComputedStyle(t)
            }

            function L(t) {
                return E(t) ? "" : t ? (t.nodeName || "").toLowerCase() : ""
            }

            function S() {
                const t = navigator.userAgentData;
                return null != t && t.brands ? t.brands.map((t => t.brand + "/" + t.version)).join(" ") : navigator.userAgent
            }

            function N(t) {
                return t instanceof R(t).HTMLElement
            }

            function C(t) {
                return t instanceof R(t).Element
            }

            function k(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof R(t).ShadowRoot || t instanceof ShadowRoot)
            }

            function T(t) {
                const {
                    overflow: e,
                    overflowX: n,
                    overflowY: r
                } = A(t);
                return /auto|scroll|overlay|hidden/.test(e + r + n)
            }

            function P(t) {
                return ["table", "td", "th"].includes(L(t))
            }

            function M(t) {
                const e = /firefox/i.test(S()),
                    n = A(t);
                return "none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || ["transform", "perspective"].includes(n.willChange) || e && "filter" === n.willChange || e && !!n.filter && "none" !== n.filter
            }

            function O() {
                return !/^((?!chrome|android).)*safari/i.test(S())
            }
            const D = Math.min,
                F = Math.max,
                j = Math.round;

            function H(t, e, n) {
                var r, o, i, u;
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                const c = t.getBoundingClientRect();
                let l = 1,
                    s = 1;
                e && N(t) && (l = t.offsetWidth > 0 && j(c.width) / t.offsetWidth || 1, s = t.offsetHeight > 0 && j(c.height) / t.offsetHeight || 1);
                const a = C(t) ? R(t) : window,
                    f = !O() && n,
                    d = (c.left + (f && null != (r = null == (o = a.visualViewport) ? void 0 : o.offsetLeft) ? r : 0)) / l,
                    m = (c.top + (f && null != (i = null == (u = a.visualViewport) ? void 0 : u.offsetTop) ? i : 0)) / s,
                    p = c.width / l,
                    h = c.height / s;
                return {
                    width: p,
                    height: h,
                    top: m,
                    right: d + p,
                    bottom: m + h,
                    left: d,
                    x: d,
                    y: m
                }
            }

            function W(t) {
                return (e = t, (e instanceof R(e).Node ? t.ownerDocument : t.document) || window.document).documentElement;
                var e
            }

            function z(t) {
                return C(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function q(t) {
                return H(W(t)).left + z(t).scrollLeft
            }

            function B(t, e, n) {
                const r = N(e),
                    o = W(e),
                    i = H(t, r && function(t) {
                        const e = H(t);
                        return j(e.width) !== t.offsetWidth || j(e.height) !== t.offsetHeight
                    }(e), "fixed" === n);
                let u = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const c = {
                    x: 0,
                    y: 0
                };
                if (r || !r && "fixed" !== n)
                    if (("body" !== L(e) || T(o)) && (u = z(e)), N(e)) {
                        const t = H(e, !0);
                        c.x = t.x + e.clientLeft, c.y = t.y + e.clientTop
                    } else o && (c.x = q(o));
                return {
                    x: i.left + u.scrollLeft - c.x,
                    y: i.top + u.scrollTop - c.y,
                    width: i.width,
                    height: i.height
                }
            }

            function V(t) {
                return "html" === L(t) ? t : t.assignedSlot || t.parentNode || (k(t) ? t.host : null) || W(t)
            }

            function Y(t) {
                return N(t) && "fixed" !== A(t).position ? function(t) {
                    let {
                        offsetParent: e
                    } = t, n = t, r = !1;
                    for (; n && n !== e;) {
                        const {
                            assignedSlot: t
                        } = n;
                        if (t) {
                            let o = t.offsetParent;
                            if ("contents" === A(t).display) {
                                const e = t.hasAttribute("style"),
                                    r = t.style.display;
                                t.style.display = A(n).display, o = t.offsetParent, t.style.display = r, e || t.removeAttribute("style")
                            }
                            n = t, e !== o && (e = o, r = !0)
                        } else if (k(n) && n.host && r) break;
                        n = k(n) && n.host || n.parentNode
                    }
                    return e
                }(t) : null
            }

            function I(t) {
                const e = R(t);
                let n = Y(t);
                for (; n && P(n) && "static" === A(n).position;) n = Y(n);
                return n && ("html" === L(n) || "body" === L(n) && "static" === A(n).position && !M(n)) ? e : n || function(t) {
                    let e = V(t);
                    for (k(e) && (e = e.host); N(e) && !["html", "body"].includes(L(e));) {
                        if (M(e)) return e; {
                            const t = e.parentNode;
                            e = k(t) ? t.host : t
                        }
                    }
                    return null
                }(t) || e
            }

            function X(t) {
                if (N(t)) return {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                };
                const e = H(t);
                return {
                    width: e.width,
                    height: e.height
                }
            }

            function K(t) {
                const e = V(t);
                return ["html", "body", "#document"].includes(L(e)) ? t.ownerDocument.body : N(e) && T(e) ? e : K(e)
            }

            function G(t, e) {
                var n;
                void 0 === e && (e = []);
                const r = K(t),
                    o = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    i = R(r),
                    u = o ? [i].concat(i.visualViewport || [], T(r) ? r : []) : r,
                    c = e.concat(u);
                return o ? c : c.concat(G(u))
            }

            function $(t, e, n) {
                return "viewport" === e ? a(function(t, e) {
                    const n = R(t),
                        r = W(t),
                        o = n.visualViewport;
                    let i = r.clientWidth,
                        u = r.clientHeight,
                        c = 0,
                        l = 0;
                    if (o) {
                        i = o.width, u = o.height;
                        const t = O();
                        (t || !t && "fixed" === e) && (c = o.offsetLeft, l = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: u,
                        x: c,
                        y: l
                    }
                }(t, n)) : C(e) ? function(t, e) {
                    const n = H(t, !1, "fixed" === e),
                        r = n.top + t.clientTop,
                        o = n.left + t.clientLeft;
                    return {
                        top: r,
                        left: o,
                        x: o,
                        y: r,
                        right: o + t.clientWidth,
                        bottom: r + t.clientHeight,
                        width: t.clientWidth,
                        height: t.clientHeight
                    }
                }(e, n) : a(function(t) {
                    var e;
                    const n = W(t),
                        r = z(t),
                        o = null == (e = t.ownerDocument) ? void 0 : e.body,
                        i = F(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        u = F(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
                    let c = -r.scrollLeft + q(t);
                    const l = -r.scrollTop;
                    return "rtl" === A(o || n).direction && (c += F(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: u,
                        x: c,
                        y: l
                    }
                }(W(t)))
            }

            function _(t) {
                const e = G(t),
                    n = ["absolute", "fixed"].includes(A(t).position) && N(t) ? I(t) : t;
                return C(n) ? e.filter((t => C(t) && function(t, e) {
                    const n = null == e.getRootNode ? void 0 : e.getRootNode();
                    if (t.contains(e)) return !0;
                    if (n && k(n)) {
                        let n = e;
                        do {
                            if (n && t === n) return !0;
                            n = n.parentNode || n.host
                        } while (n)
                    }
                    return !1
                }(t, n) && "body" !== L(t))) : []
            }
            const J = {
                getClippingRect: function(t) {
                    let {
                        element: e,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = t;
                    const i = [..."clippingAncestors" === n ? _(e) : [].concat(n), r],
                        u = i[0],
                        c = i.reduce(((t, n) => {
                            const r = $(e, n, o);
                            return t.top = F(r.top, t.top), t.right = D(r.right, t.right), t.bottom = D(r.bottom, t.bottom), t.left = F(r.left, t.left), t
                        }), $(e, u, o));
                    return {
                        width: c.right - c.left,
                        height: c.bottom - c.top,
                        x: c.left,
                        y: c.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                    let {
                        rect: e,
                        offsetParent: n,
                        strategy: r
                    } = t;
                    const o = N(n),
                        i = W(n);
                    if (n === i) return e;
                    let u = {
                        scrollLeft: 0,
                        scrollTop: 0
                    };
                    const c = {
                        x: 0,
                        y: 0
                    };
                    if ((o || !o && "fixed" !== r) && (("body" !== L(n) || T(i)) && (u = z(n)), N(n))) {
                        const t = H(n, !0);
                        c.x = t.x + n.clientLeft, c.y = t.y + n.clientTop
                    }
                    return { ...e,
                        x: e.x - u.scrollLeft + c.x,
                        y: e.y - u.scrollTop + c.y
                    }
                },
                isElement: C,
                getDimensions: X,
                getOffsetParent: I,
                getDocumentElement: W,
                getElementRects: t => {
                    let {
                        reference: e,
                        floating: n,
                        strategy: r
                    } = t;
                    return {
                        reference: B(e, I(n), r),
                        floating: { ...X(n),
                            x: 0,
                            y: 0
                        }
                    }
                },
                getClientRects: t => Array.from(t.getClientRects()),
                isRTL: t => "rtl" === A(t).direction
            };
            const Q = (t, e, n) => (async (t, e, n) => {
                const {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: u
                } = n, c = await (null == u.isRTL ? void 0 : u.isRTL(e));
                let s = await u.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: o
                    }),
                    {
                        x: a,
                        y: f
                    } = l(s, r, c),
                    d = r,
                    m = {},
                    p = 0;
                for (let h = 0; h < i.length; h++) {
                    const {
                        name: n,
                        fn: g
                    } = i[h], {
                        x: v,
                        y: y,
                        data: w,
                        reset: b
                    } = await g({
                        x: a,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: m,
                        rects: s,
                        platform: u,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    a = null != v ? v : a, f = null != y ? y : f, m = { ...m,
                        [n]: { ...m[n],
                            ...w
                        }
                    }, b && p <= 50 && (p++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (s = !0 === b.rects ? await u.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: o
                    }) : b.rects), ({
                        x: a,
                        y: f
                    } = l(s, d, c))), h = -1)
                }
                return {
                    x: a,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: m
                }
            })(t, e, {
                platform: J,
                ...n
            });
            var U = n(10451),
                Z = n(73935),
                tt = n(73750);
            const et = t => ({
                    name: "arrow",
                    options: t,
                    async fn(e) {
                        const {
                            element: n,
                            padding: r = 0
                        } = null != t ? t : {}, {
                            x: o,
                            y: l,
                            placement: a,
                            rects: f,
                            platform: d
                        } = e;
                        if (null == n) return {};
                        const m = s(r),
                            h = {
                                x: o,
                                y: l
                            },
                            g = u(a),
                            v = i(a),
                            y = c(g),
                            w = await d.getDimensions(n),
                            b = "y" === g ? "top" : "left",
                            x = "y" === g ? "bottom" : "right",
                            E = f.reference[y] + f.reference[g] - h[g] - f.floating[y],
                            R = h[g] - f.reference[g],
                            A = await (null == d.getOffsetParent ? void 0 : d.getOffsetParent(n));
                        let L = A ? "y" === g ? A.clientHeight || 0 : A.clientWidth || 0 : 0;
                        0 === L && (L = f.floating[y]);
                        const S = E / 2 - R / 2,
                            N = m[b],
                            C = L - w[y] - m[x],
                            k = L / 2 - w[y] / 2 + S,
                            T = p(N, k, C),
                            P = ("start" === v ? m[b] : m[x]) > 0 && k !== T && f.reference[y] <= f.floating[y];
                        return {
                            [g]: h[g] - (P ? k < N ? N - k : C - k : 0),
                            data: {
                                [g]: T,
                                centerOffset: k - T
                            }
                        }
                    }
                }),
                nt = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "flip",
                        options: t,
                        async fn(e) {
                            var n;
                            const {
                                placement: r,
                                middlewareData: i,
                                rects: u,
                                initialPlacement: c,
                                platform: l,
                                elements: s
                            } = e, {
                                mainAxis: a = !0,
                                crossAxis: d = !0,
                                fallbackPlacements: m,
                                fallbackStrategy: p = "bestFit",
                                flipAlignment: h = !0,
                                ...y
                            } = t, b = o(r), x = m || (b !== c && h ? function(t) {
                                const e = g(t);
                                return [w(t), e, w(e)]
                            }(c) : [g(c)]), E = [c, ...x], R = await f(e, y), A = [];
                            let L = (null == (n = i.flip) ? void 0 : n.overflows) || [];
                            if (a && A.push(R[b]), d) {
                                const {
                                    main: t,
                                    cross: e
                                } = v(r, u, await (null == l.isRTL ? void 0 : l.isRTL(s.floating)));
                                A.push(R[t], R[e])
                            }
                            if (L = [...L, {
                                    placement: r,
                                    overflows: A
                                }], !A.every((t => t <= 0))) {
                                var S, N;
                                const t = (null != (S = null == (N = i.flip) ? void 0 : N.index) ? S : 0) + 1,
                                    e = E[t];
                                if (e) return {
                                    data: {
                                        index: t,
                                        overflows: L
                                    },
                                    reset: {
                                        placement: e
                                    }
                                };
                                let n = "bottom";
                                switch (p) {
                                    case "bestFit":
                                        {
                                            var C;
                                            const t = null == (C = L.map((t => [t, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : C[0].placement;t && (n = t);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = c
                                }
                                if (r !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                rt = function(t) {
                    return void 0 === t && (t = 0), {
                        name: "offset",
                        options: t,
                        async fn(e) {
                            const {
                                x: n,
                                y: r
                            } = e, c = await async function(t, e) {
                                const {
                                    placement: n,
                                    platform: r,
                                    elements: c
                                } = t, l = await (null == r.isRTL ? void 0 : r.isRTL(c.floating)), s = o(n), a = i(n), f = "x" === u(n), d = ["left", "top"].includes(s) ? -1 : 1, m = l && f ? -1 : 1, p = "function" == typeof e ? e(t) : e;
                                let {
                                    mainAxis: h,
                                    crossAxis: g,
                                    alignmentAxis: v
                                } = "number" == typeof p ? {
                                    mainAxis: p,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null,
                                    ...p
                                };
                                return a && "number" == typeof v && (g = "end" === a ? -1 * v : v), f ? {
                                    x: g * m,
                                    y: h * d
                                } : {
                                    x: h * d,
                                    y: g * m
                                }
                            }(e, t);
                            return {
                                x: n + c.x,
                                y: r + c.y,
                                data: c
                            }
                        }
                    }
                },
                ot = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "shift",
                        options: t,
                        async fn(e) {
                            const {
                                x: n,
                                y: r,
                                placement: i
                            } = e, {
                                mainAxis: c = !0,
                                crossAxis: l = !1,
                                limiter: s = {
                                    fn: t => {
                                        let {
                                            x: e,
                                            y: n
                                        } = t;
                                        return {
                                            x: e,
                                            y: n
                                        }
                                    }
                                },
                                ...a
                            } = t, d = {
                                x: n,
                                y: r
                            }, m = await f(e, a), h = u(o(i)), g = x(h);
                            let v = d[h],
                                y = d[g];
                            if (c) {
                                const t = "y" === h ? "bottom" : "right";
                                v = p(v + m["y" === h ? "top" : "left"], v, v - m[t])
                            }
                            if (l) {
                                const t = "y" === g ? "bottom" : "right";
                                y = p(y + m["y" === g ? "top" : "left"], y, y - m[t])
                            }
                            const w = s.fn({ ...e,
                                [h]: v,
                                [g]: y
                            });
                            return { ...w,
                                data: {
                                    x: w.x - n,
                                    y: w.y - r
                                }
                            }
                        }
                    }
                },
                it = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "size",
                        options: t,
                        async fn(e) {
                            const {
                                placement: n,
                                rects: r,
                                platform: u,
                                elements: c
                            } = e, {
                                apply: l = (() => {}),
                                ...s
                            } = t, a = await f(e, s), d = o(n), p = i(n);
                            let h, g;
                            "top" === d || "bottom" === d ? (h = d, g = p === (await (null == u.isRTL ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = d, h = "end" === p ? "top" : "bottom");
                            const v = m(a.left, 0),
                                y = m(a.right, 0),
                                w = m(a.top, 0),
                                b = m(a.bottom, 0),
                                x = {
                                    availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (0 !== w || 0 !== b ? w + b : m(a.top, a.bottom)) : a[h]),
                                    availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (0 !== v || 0 !== y ? v + y : m(a.left, a.right)) : a[g])
                                };
                            await l({ ...e,
                                ...x
                            });
                            const E = await u.getDimensions(c.floating);
                            return r.floating.width !== E.width || r.floating.height !== E.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                };

            function ut(t, e, n, r) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), "function" === typeof DOMRect) return new DOMRect(t, e, n, r);
                const o = {
                    x: t,
                    y: e,
                    width: n,
                    height: r,
                    top: e,
                    right: t + n,
                    bottom: e + r,
                    left: t
                };
                return { ...o,
                    toJSON: () => o
                }
            }

            function ct(t, e) {
                return {
                    contextElement: t.current || void 0,
                    getBoundingClientRect: () => {
                        const n = t.current,
                            r = e(n);
                        return r || !n ? function(t) {
                            if (!t) return ut();
                            const {
                                x: e,
                                y: n,
                                width: r,
                                height: o
                            } = t;
                            return ut(e, n, r, o)
                        }(r) : n.getBoundingClientRect()
                    }
                }
            }

            function lt(t) {
                return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(t)
            }

            function st(t) {
                let {
                    placement: e = "bottom",
                    fixed: n = !1,
                    gutter: o,
                    flip: i = !0,
                    shift: u = 0,
                    slide: c = !0,
                    overlap: l = !1,
                    sameWidth: s = !1,
                    fitViewport: a = !1,
                    arrowPadding: f = 4,
                    overflowPadding: d = 8,
                    renderCallback: m,
                    ...p
                } = void 0 === t ? {} : t;
                const h = function(t) {
                        return void 0 === t && (t = {}), (0, tt.b)(t)
                    }(p),
                    g = (0, U.zX)(p.getAnchorRect || (t => (null == t ? void 0 : t.getBoundingClientRect()) || null)),
                    v = (0, r.useRef)(null),
                    y = (0, r.useRef)(null),
                    w = (0, r.useRef)(null),
                    [b, x] = (0, r.useState)(e),
                    [E, R] = (0, U.NW)();
                (0, U.Gw)((() => {
                    var t;
                    if (null == (t = h.contentElement) || !t.isConnected) return;
                    const r = y.current;
                    if (!r) return;
                    const p = ct(v, g),
                        b = w.current,
                        E = ((null == b ? void 0 : b.clientHeight) || 0) / 2,
                        R = "number" === typeof o ? o + E : null != o ? o : E;
                    r.style.setProperty("--popover-overflow-padding", d + "px");
                    const A = () => function(t, e, n, r) {
                        void 0 === r && (r = {});
                        const {
                            ancestorScroll: o = !0,
                            ancestorResize: i = !0,
                            elementResize: u = !0,
                            animationFrame: c = !1
                        } = r, l = o && !c, s = i && !c, a = l || s ? [...C(t) ? G(t) : [], ...G(e)] : [];
                        a.forEach((t => {
                            l && t.addEventListener("scroll", n, {
                                passive: !0
                            }), s && t.addEventListener("resize", n)
                        }));
                        let f, d = null;
                        if (u) {
                            let r = !0;
                            d = new ResizeObserver((() => {
                                r || n(), r = !1
                            })), C(t) && !c && d.observe(t), d.observe(e)
                        }
                        let m = c ? H(t) : null;
                        return c && function e() {
                            const r = H(t);
                            !m || r.x === m.x && r.y === m.y && r.width === m.width && r.height === m.height || n(), m = r, f = requestAnimationFrame(e)
                        }(), n(), () => {
                            var t;
                            a.forEach((t => {
                                l && t.removeEventListener("scroll", n), s && t.removeEventListener("resize", n)
                            })), null == (t = d) || t.disconnect(), d = null, c && cancelAnimationFrame(f)
                        }
                    }(p, r, (async () => {
                        if (!h.mounted) return;
                        const t = [rt((t => {
                            let {
                                placement: e
                            } = t;
                            return {
                                crossAxis: !!e.split("-")[1] ? void 0 : u,
                                mainAxis: R,
                                alignmentAxis: u
                            }
                        }))];
                        if (!1 !== i) {
                            const e = "string" === typeof i ? i.split(" ") : void 0;
                            if (void 0 !== e && !e.every(lt)) throw new Error("`flip` expects a spaced-delimited list of placements");
                            t.push(nt({
                                padding: d,
                                fallbackPlacements: e
                            }))
                        }(c || l) && t.push(ot({
                            mainAxis: c,
                            crossAxis: l,
                            padding: d
                        })), t.push(it({
                            padding: d,
                            apply(t) {
                                let {
                                    availableWidth: e,
                                    availableHeight: n,
                                    rects: o
                                } = t;
                                const i = Math.round(o.reference.width);
                                e = Math.floor(e), n = Math.floor(n), r.style.setProperty("--popover-anchor-width", i + "px"), r.style.setProperty("--popover-available-width", e + "px"), r.style.setProperty("--popover-available-height", n + "px"), s && (r.style.width = i + "px"), a && (r.style.maxWidth = e + "px", r.style.maxHeight = n + "px")
                            }
                        })), b && t.push(et({
                            element: b,
                            padding: f
                        }));
                        const o = await Q(p, r, {
                            placement: e,
                            strategy: n ? "fixed" : "absolute",
                            middleware: t
                        });
                        (0, Z.flushSync)((() => {
                            x(o.placement)
                        }));
                        const m = Math.round(o.x),
                            g = Math.round(o.y);
                        if (Object.assign(r.style, {
                                top: "0",
                                left: "0",
                                transform: "translate3d(" + m + "px, " + g + "px, 0)"
                            }), b && o.middlewareData.arrow) {
                            const {
                                x: t,
                                y: e
                            } = o.middlewareData.arrow, n = o.placement.split("-")[0];
                            Object.assign(b.style, {
                                left: null != t ? t + "px" : "",
                                top: null != e ? e + "px" : "",
                                [n]: "100%"
                            })
                        }
                    }), {
                        elementResize: "function" === typeof ResizeObserver
                    });
                    return m ? m({
                        mounted: h.mounted,
                        placement: e,
                        fixed: n,
                        gutter: R,
                        shift: u,
                        overlap: l,
                        flip: i,
                        sameWidth: s,
                        fitViewport: a,
                        arrowPadding: f,
                        overflowPadding: d,
                        popover: r,
                        anchor: p,
                        arrow: b,
                        setPlacement: x,
                        defaultRenderCallback: A
                    }) : A()
                }), [E, h.contentElement, g, o, h.mounted, u, l, i, d, c, s, a, f, e, n, m]);
                return (0, r.useMemo)((() => ({ ...h,
                    getAnchorRect: g,
                    anchorRef: v,
                    popoverRef: y,
                    arrowRef: w,
                    currentPlacement: b,
                    placement: e,
                    fixed: n,
                    gutter: o,
                    shift: u,
                    flip: i,
                    slide: c,
                    overlap: l,
                    sameWidth: s,
                    fitViewport: a,
                    arrowPadding: f,
                    overflowPadding: d,
                    render: R,
                    renderCallback: m
                })), [h, g, b, e, n, o, u, i, c, l, s, a, f, d, R, m])
            }
        },
        44077: function(t, e, n) {
            n.d(e, {
                v: function() {
                    return h
                }
            });
            var r = n(67294),
                o = n(106),
                i = n(22386),
                u = n(76095),
                c = n(10451),
                l = n(31423),
                s = n(61142),
                a = n(73935);
            const f = (0, r.createContext)(null);
            var d = n(85893),
                m = n(41633);

            function p(t) {
                (0, l.YE)((() => {
                    null == t || t.focus()
                }))
            }
            const h = (0, s.Bi)((t => {
                let {
                    preserveTabOrder: e,
                    portalElement: n,
                    portalRef: s,
                    portal: h = !0,
                    ...g
                } = t;
                const v = (0, r.useRef)(null),
                    y = (0, c.cR)(v, g.ref),
                    w = (0, r.useContext)(f),
                    [b, x] = (0, r.useState)(null),
                    E = (0, r.useRef)(null),
                    R = (0, r.useRef)(null),
                    A = (0, r.useRef)(null),
                    L = (0, r.useRef)(null);
                return (0, c.Gw)((() => {
                    const t = v.current;
                    if (!t || !h) return void x(null);
                    const e = function(t, e) {
                        return e ? "function" === typeof e ? e(t) : e : (0, o.Me)(t).createElement("div")
                    }(t, n);
                    if (!e) return void x(null);
                    const r = e.isConnected;
                    if (!r) {
                        const n = w || function(t) {
                            return (0, o.Me)(t).body
                        }(t);
                        n.appendChild(e)
                    }
                    var i;
                    return e.id || (e.id = t.id ? t.id + "-portal" : (void 0 === i && (i = "id"), (i ? i + "-" : "") + Math.random().toString(36).substr(2, 6))), x(e), (0, l.k$)(s, e), r ? void 0 : () => {
                        e.remove(), (0, l.k$)(s, null)
                    }
                }), [h, n, w, s]), (0, r.useEffect)((() => {
                    if (!b) return;
                    if (!e) return;
                    let t = 0;
                    const n = e => {
                        if ((0, i.N)(e)) {
                            if ("focusin" === e.type) return (0, u.ss)(b);
                            cancelAnimationFrame(t), t = requestAnimationFrame((() => {
                                (0, u.MN)(b, !0)
                            }))
                        }
                    };
                    return b.addEventListener("focusin", n, !0), b.addEventListener("focusout", n, !0), () => {
                        b.removeEventListener("focusin", n, !0), b.removeEventListener("focusout", n, !0)
                    }
                }), [b, e]), g = (0, c.OJ)(g, (t => (t = (0, d.jsx)(f.Provider, {
                    value: b || w,
                    children: t
                }), h ? b ? (t = (0, d.jsxs)(d.Fragment, {
                    children: [e && b && (0, d.jsx)(m.i, {
                        ref: R,
                        onFocus: t => {
                            (0, i.N)(t, b) ? p((0, u.k0)()): p(E.current)
                        }
                    }), t, e && b && (0, d.jsx)(m.i, {
                        ref: A,
                        onFocus: t => {
                            (0, i.N)(t, b) ? p((0, u.e8)()): p(L.current)
                        }
                    })]
                }), b && (t = (0, a.createPortal)(t, b)), t = (0, d.jsxs)(d.Fragment, {
                    children: [e && b && (0, d.jsx)(m.i, {
                        ref: E,
                        onFocus: t => {
                            (0, i.N)(t, b) ? p(R.current): p((0, u.e8)())
                        }
                    }), e && (0, d.jsx)("span", {
                        "aria-owns": null == b ? void 0 : b.id,
                        style: {
                            position: "fixed"
                        }
                    }), t, e && b && (0, d.jsx)(m.i, {
                        ref: L,
                        onFocus: t => {
                            (0, i.N)(t, b) ? p(A.current): p((0, u.k0)())
                        }
                    })]
                })) : (0, d.jsx)("span", {
                    ref: y,
                    id: g.id,
                    style: {
                        position: "fixed"
                    }
                }) : t)), [b, w, h, g.id, e]), g = { ...g,
                    ref: y
                }, g
            }));
            (0, s.LM)((t => {
                const e = h(t);
                return (0, s.az)("div", e)
            }))
        },
        52134: function(t, e, n) {
            n.d(e, {
                S: function() {
                    return o
                },
                T: function() {
                    return i
                }
            });
            var r = n(61142);
            const o = (0, r.Bi)((t => t = { ...t,
                    style: {
                        border: 0,
                        clip: "rect(0 0 0 0)",
                        height: "1px",
                        margin: "-1px",
                        overflow: "hidden",
                        padding: 0,
                        position: "absolute",
                        whiteSpace: "nowrap",
                        width: "1px",
                        ...t.style
                    }
                })),
                i = (0, r.LM)((t => {
                    const e = o(t);
                    return (0, r.az)("span", e)
                }))
        }
    }
]);