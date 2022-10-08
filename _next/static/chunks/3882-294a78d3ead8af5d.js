"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3882], {
        54666: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return r
                }
            });
            const r = (0, n(67294).createContext)(void 0)
        },
        52978: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return g
                }
            });
            var r = n(67294),
                o = n(106),
                u = n(22386),
                i = n(76095),
                s = n(10451),
                c = n(31423),
                l = n(52021),
                a = n(61142);
            const d = (0, l.G6)(),
                f = ["text", "search", "url", "tel", "email", "password", "number", "date", "month", "week", "time", "datetime", "datetime-local"];

            function p(e) {
                return !("input" !== e.tagName.toLowerCase() || !e.type) && ("radio" === e.type || "checkbox" === e.type)
            }

            function v(e, t, n, r, o) {
                return e ? t ? n && !r ? -1 : void 0 : n ? o : o || 0 : o
            }

            function b(e, t) {
                return (0, s.zX)((n => {
                    null == e || e(n), n.defaultPrevented || t && (n.stopPropagation(), n.preventDefault())
                }))
            }
            let h = !0;

            function m(e) {
                const t = e.target;
                t && "hasAttribute" in t && (t.hasAttribute("data-focus-visible") || (h = !1))
            }

            function y(e) {
                e.metaKey || e.ctrlKey || (h = !0)
            }
            const g = (0, a.Bi)((e => {
                let {
                    focusable: t = !0,
                    accessibleWhenDisabled: n,
                    autoFocus: l,
                    onFocusVisible: a,
                    ...g
                } = e;
                const E = (0, r.useRef)(null);
                (0, r.useEffect)((() => {
                    t && ((0, u.iN)("mousedown", m, !0), (0, u.iN)("keydown", y, !0))
                }), [t]), d && (0, r.useEffect)((() => {
                    if (!t) return;
                    const e = E.current;
                    if (!e) return;
                    if (!p(e)) return;
                    const n = function(e) {
                        return "labels" in e ? e.labels : null
                    }(e);
                    if (!n) return;
                    const r = () => (0, c.YE)((() => e.focus()));
                    return n.forEach((e => e.addEventListener("mouseup", r))), () => {
                        n.forEach((e => e.removeEventListener("mouseup", r)))
                    }
                }), [t]);
                const w = t && g.disabled,
                    x = !!w && !n,
                    [C, M] = (0, r.useState)(!1);
                (0, r.useEffect)((() => {
                    t && x && C && M(!1)
                }), [t, x, C]), (0, r.useEffect)((() => {
                    if (!t) return;
                    if (!C) return;
                    const e = E.current;
                    if (!e) return;
                    if ("undefined" === typeof IntersectionObserver) return;
                    const n = new IntersectionObserver((() => {
                        (0, i.EB)(e) || M(!1)
                    }));
                    return n.observe(e), () => n.disconnect()
                }), [t, C]);
                const R = b(g.onKeyPressCapture, w),
                    O = b(g.onMouseDownCapture, w),
                    P = b(g.onClickCapture, w),
                    k = g.onMouseDown,
                    D = (0, s.zX)((e => {
                        if (null == k || k(e), e.defaultPrevented) return;
                        if (!t) return;
                        const n = e.currentTarget;
                        if (!d) return;
                        if ((0, u.Ke)(e)) return;
                        if (!(0, o.iK)(n) && !p(n)) return;
                        let r = !1;
                        const s = () => {
                            r = !0
                        };
                        n.addEventListener("focusin", s, {
                            capture: !0,
                            once: !0
                        }), (0, u.qx)(n, "mouseup", (() => {
                            n.removeEventListener("focusin", s, !0), r || (0, i.Qw)(n)
                        }))
                    })),
                    S = (e, n) => {
                        if (n && (e.currentTarget = n), null == a || a(e), e.defaultPrevented) return;
                        if (!t) return;
                        const r = e.currentTarget;
                        r && (0, i.H1)(r) && M(!0)
                    },
                    T = g.onKeyDownCapture,
                    L = (0, s.zX)((e => {
                        if (null == T || T(e), e.defaultPrevented) return;
                        if (!t) return;
                        if (C) return;
                        if (e.metaKey) return;
                        if (e.altKey) return;
                        if (e.ctrlKey) return;
                        if (!(0, u.Ud)(e)) return;
                        const n = e.currentTarget;
                        (0, c.YE)((() => S(e, n)))
                    })),
                    A = g.onFocusCapture,
                    I = (0, s.zX)((e => {
                        if (null == A || A(e), e.defaultPrevented) return;
                        if (!t) return;
                        if (!(0, u.Ud)(e)) return void M(!1);
                        const n = e.currentTarget,
                            r = () => S(e, n);
                        h || function(e) {
                            const {
                                tagName: t,
                                readOnly: n,
                                type: r
                            } = e;
                            return "TEXTAREA" === t && !n || "SELECT" === t && !n || ("INPUT" !== t || n ? !!e.isContentEditable : f.includes(r))
                        }(e.target) ? (0, c.YE)(r) : ! function(e) {
                            return "combobox" === e.getAttribute("role")
                        }(e.target) ? M(!1) : (0, u.qx)(e.target, "focusout", r)
                    })),
                    z = g.onBlur,
                    N = (0, s.zX)((e => {
                        null == z || z(e), t && (0, u.N)(e) && M(!1)
                    }));
                (0, s.Gw)((() => {
                    var e;
                    t && (l && (null == (e = E.current) || e.focus()))
                }), [t, l]);
                const F = (0, s.O)(E, g.as),
                    j = t && function(e) {
                        return !e || "button" === e || "input" === e || "select" === e || "textarea" === e || "a" === e
                    }(F),
                    G = t && function(e) {
                        return !e || "button" === e || "input" === e || "select" === e || "textarea" === e
                    }(F),
                    K = x ? {
                        pointerEvents: "none",
                        ...g.style
                    } : g.style;
                return g = {
                    "data-focus-visible": t && C ? "" : void 0,
                    "aria-disabled": !!w || void 0,
                    ...g,
                    ref: (0, s.cR)(E, g.ref),
                    style: K,
                    tabIndex: v(t, x, j, G, g.tabIndex),
                    disabled: !(!G || !x) || void 0,
                    contentEditable: w ? void 0 : g.contentEditable,
                    onKeyPressCapture: R,
                    onClickCapture: P,
                    onMouseDownCapture: O,
                    onMouseDown: D,
                    onKeyDownCapture: L,
                    onFocusCapture: I,
                    onBlur: N
                }, g
            }));
            (0, a.LM)((e => (e = g(e), (0, a.az)("div", e))))
        },
        83882: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return Y
                },
                S: function() {
                    return B
                }
            });
            var r = n(67294),
                o = n(10451),
                u = n(61142),
                i = n(106),
                s = n(22386),
                c = n(76095),
                l = n(31423),
                a = n(52021),
                d = n(44008),
                f = n(41633),
                p = n(85893);
            const v = (0, u.Bi)((e => {
                let {
                    enabled: t = !1,
                    ...n
                } = e;
                const u = (0, r.useRef)(null);
                return n = (0, o.OJ)(n, (e => {
                    const n = () => t ? (0, p.jsx)(f.i, {
                        onFocus: e => {
                            const t = u.current;
                            if (!t) return;
                            const n = (0, c.SI)(t, !0),
                                r = n[0],
                                o = n[n.length - 1];
                            n.length ? e.relatedTarget === r ? null == o || o.focus() : null == r || r.focus() : t.focus()
                        }
                    }) : null;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [n(), e, n()]
                    })
                }), [t]), n = { ...n,
                    ref: (0, o.cR)(u, n.ref)
                }, n
            }));
            (0, u.LM)((e => {
                const t = v(e);
                return (0, u.az)("div", t)
            }));
            var b = n(52978);
            const h = (0, r.createContext)(0);

            function m(e) {
                let {
                    level: t,
                    children: n
                } = e;
                const o = (0, r.useContext)(h),
                    u = Math.max(Math.min(t || o + 1, 6), 1);
                return (0, p.jsx)(h.Provider, {
                    value: u,
                    children: n
                })
            }
            var y = n(44077);
            const g = (0, r.createContext)(void 0),
                E = (0, r.createContext)(void 0),
                w = (0, r.createContext)(void 0);
            var x = n(73935);

            function C(e) {
                const t = (0, r.useRef)();
                return (0, r.useEffect)((() => {
                    if (!e) return void(t.current = null);
                    return (0, s.iN)("mousedown", (e => {
                        t.current = e.target
                    }), !0)
                }), [e]), t
            }

            function M(e) {
                var t;
                let {
                    state: n,
                    backdrop: u,
                    backdropProps: i,
                    hideOnInteractOutside: c = !0,
                    hideOnEscape: a = !0,
                    hidden: f,
                    children: v
                } = e;
                const b = (0, r.useRef)(null);
                n = (0, r.useMemo)((() => ({ ...n,
                    setContentElement: l.ZT
                })), [n]), (0, o.Gw)((() => {
                    const e = b.current,
                        t = n.contentElement;
                    e && t && (e.style.zIndex = getComputedStyle(t).zIndex)
                }), [n.contentElement]);
                const h = null == i ? void 0 : i.onClick,
                    m = (0, o.yl)(c),
                    y = C(n.mounted),
                    g = (0, o.zX)((e => {
                        null == h || h(e), e.defaultPrevented || (0, s.Ud)(e) && y.current === e.currentTarget && m(e) && (e.stopPropagation(), n.hide())
                    })),
                    E = null == i ? void 0 : i.onKeyDown,
                    w = (0, o.yl)(a),
                    x = (0, o.zX)((e => {
                        null == E || E(e), e.defaultPrevented || "Escape" === e.key && (0, s.Ud)(e) && w(e) && n.hide()
                    })),
                    M = (0, d.f)({
                        state: n,
                        id: void 0,
                        role: "presentation",
                        tabIndex: -1,
                        hidden: f,
                        ...i,
                        ref: (0, o.cR)(null == i ? void 0 : i.ref, b),
                        onClick: g,
                        onKeyDown: x,
                        style: {
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            ...null == i ? void 0 : i.style
                        }
                    }),
                    R = "boolean" !== typeof u && u || "div";
                return (0, p.jsx)(R, { ...M,
                    "data-backdrop": null == (t = n.contentElement) ? void 0 : t.id,
                    children: v
                })
            }
            const R = ["SCRIPT", "STYLE"];

            function O(e, t) {
                return !R.includes(e.tagName) && !t.some((t => t && (0, i.r3)(e, t)))
            }

            function P(e, t) {
                for (let r of e) {
                    const o = (0, i.Me)(r);
                    for (; null != (n = r) && n.parentElement && r !== o.body;) {
                        var n;
                        for (const n of r.parentElement.children) O(n, e) && t(n);
                        r = r.parentElement
                    }
                }
            }

            function k(e) {
                const t = e.getAttribute("aria-hidden") || "";
                e.setAttribute("aria-hidden", "true");
                return () => {
                    t ? e.setAttribute("aria-hidden", t) : e.removeAttribute("aria-hidden")
                }
            }

            function D() {
                const e = [];
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                P(n, (t => {
                    e.unshift(k(t))
                }));
                const o = () => {
                    e.forEach((e => e()))
                };
                return o
            }

            function S(e) {
                if (!("style" in e)) return l.ZT;
                const t = e.style.pointerEvents;
                e.style.pointerEvents = "none";
                return () => {
                    e.style.pointerEvents = null != t ? t : ""
                }
            }

            function T(e, t, n) {
                const [u, s] = (0, o.NW)(), c = (0, r.useCallback)((() => {
                    if (!n) return !1;
                    const r = e.current;
                    if (!r) return !1;
                    const {
                        body: o
                    } = (0, i.Me)(r), u = o.getAttribute(t);
                    return !u || u === r.id
                }), [u, n, t]);
                return (0, o.Gw)((() => {
                    const r = e.current;
                    if (!r) return;
                    if (!n) return;
                    const {
                        body: o
                    } = (0, i.Me)(r);
                    if (!c()) {
                        const e = new MutationObserver((() => (0, x.flushSync)(s)));
                        return e.observe(o, {
                            attributeFilter: [t]
                        }), () => e.disconnect()
                    }
                    return o.setAttribute(t, r.id), () => {
                        o.removeAttribute(t)
                    }
                }), [u, e, n, c, t]), c
            }

            function L(e) {
                let {
                    type: t,
                    listener: n,
                    dialogRef: u,
                    nestedDialogs: c,
                    disclosureRef: l,
                    enabled: a,
                    capture: d
                } = e;
                const f = (0, o.zX)(n),
                    p = (0, o.cP)(c);
                (0, r.useEffect)((() => {
                    if (!a) return;
                    return (0, s.iN)(t, (e => {
                        const t = u.current,
                            n = null == l ? void 0 : l.current,
                            r = e.target;
                        t && r && function(e) {
                            return "HTML" === e.tagName || (0, i.r3)((0, i.Me)(e).body, e)
                        }(r) && ((0, i.r3)(t, r) || n && function(e, t) {
                            if ((0, i.r3)(e, t)) return !0;
                            const n = t.getAttribute("aria-activedescendant");
                            if (n) {
                                const t = (0, i.Me)(e).getElementById(n);
                                if (t) return (0, i.r3)(e, t)
                            }
                            return !1
                        }(n, r) || r.hasAttribute("data-focus-trap") || p.current.some(function(e) {
                            return t => {
                                const n = t.current;
                                return !!n && (!!(0, i.r3)(n, e) || !! function(e, t) {
                                    return !!e && !!t && t.hasAttribute("data-backdrop") && t.getAttribute("data-backdrop") === e.id
                                }(n, e))
                            }
                        }(r)) || f(e))
                    }), d)
                }), [a, u, l, f, d])
            }

            function A(e, t) {
                return "function" === typeof e ? e(t) : !!e
            }
            const I = (0, r.createContext)({});

            function z(e, t) {
                if (!e) return () => {};
                const n = e.style.cssText;
                return Object.assign(e.style, t), () => {
                    e.style.cssText = n
                }
            }

            function N(e, t) {
                const n = T(e, "data-dialog-body-scroll", t);
                (0, o.Gw)((() => {
                    const t = e.current;
                    if (!t) return;
                    if (!n()) return;
                    const r = (0, i.Me)(t),
                        o = (0, i.Jj)(t),
                        {
                            documentElement: u,
                            body: s
                        } = r,
                        c = o.innerWidth - u.clientWidth,
                        d = function(e) {
                            const t = e.getBoundingClientRect().left;
                            return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight"
                        }(u),
                        f = (0, a.mL)() && !(0, a.V5)();
                    return (0, l.tS)(function(e, t, n) {
                        if (!e) return () => {};
                        const r = e.style.getPropertyValue(t);
                        return e.style.setProperty(t, n), () => {
                            r ? e.style.setProperty(t, r) : e.style.removeProperty(t)
                        }
                    }(u, "--scrollbar-width", c + "px"), f ? (() => {
                        var e, t;
                        const {
                            scrollX: n,
                            scrollY: r,
                            visualViewport: u
                        } = o, i = null != (e = null == u ? void 0 : u.offsetLeft) ? e : 0, l = null != (t = null == u ? void 0 : u.offsetTop) ? t : 0, a = z(s, {
                            position: "fixed",
                            overflow: "hidden",
                            top: -(r - Math.floor(l)) + "px",
                            left: -(n - Math.floor(i)) + "px",
                            right: "0",
                            [d]: c + "px"
                        });
                        return () => {
                            a(), o.scrollTo(n, r)
                        }
                    })() : z(s, {
                        overflow: "hidden",
                        [d]: c + "px"
                    }))
                }), [e, n])
            }
            const F = (0, a.G6)();

            function j(e) {
                return t => t.current && (0, i.r3)(t.current, e)
            }
            const G = (0, u.Bi)((e => {
                let {
                    state: t,
                    focusable: n = !0,
                    modal: u = !0,
                    portal: f = !!u,
                    backdrop: h = !!u,
                    backdropProps: x,
                    hideOnEscape: R = !0,
                    hideOnInteractOutside: O = !0,
                    preventBodyScroll: k = !!u,
                    autoFocusOnShow: z = !0,
                    autoFocusOnHide: G = !0,
                    initialFocusRef: K,
                    finalFocusRef: B,
                    ...Y
                } = e;
                const X = (0, r.useRef)(null),
                    J = (0, r.useRef)(t.open),
                    {
                        portalRef: q,
                        portalNode: H,
                        domReady: U
                    } = (0, o.Hw)(f, Y.portalRef),
                    V = Y.preserveTabOrder && !u && t.mounted,
                    W = t.open && !t.animating,
                    _ = u || f && V && (0, a.G6)(),
                    Q = (0, o.Me)(Y.id);
                (0, o.Gw)((() => {
                    if (!W) return;
                    const e = X.current,
                        n = (0, i.vY)(e, !0);
                    n && "BODY" !== n.tagName && (e && (0, i.r3)(e, n) || (t.disclosureRef.current = n))
                }), [W]);
                const Z = function(e, t) {
                        let {
                            state: n,
                            modal: u
                        } = t;
                        const i = (0, r.useContext)(I),
                            [s, c] = (0, r.useState)([]),
                            [l, a] = (0, r.useState)([]),
                            d = (0, r.useCallback)((e => {
                                const t = null == i.addDialog ? void 0 : i.addDialog(e);
                                return a((t => [...t, e])), () => {
                                    null == t || t(), a((t => t.filter((t => t !== e))))
                                }
                            }), [i.addDialog]),
                            f = (0, r.useCallback)((e => {
                                const t = null == i.showModal ? void 0 : i.showModal(e);
                                return c((t => [...t, e])), () => {
                                    null == t || t(), c((t => t.filter((t => t !== e))))
                                }
                            }), [i.showModal]);
                        (0, o.Gw)((() => null == i.addDialog ? void 0 : i.addDialog(e)), [i.addDialog, e]), (0, o.Gw)((() => {
                            if (u && n.open) return null == i.showModal ? void 0 : i.showModal(e)
                        }), [u, n.open, i.showModal, e]), (0, o.Gw)((() => {
                            !1 === i.open && n.open && n.hide()
                        }), [i.open, n.open, n.hide]);
                        const v = (0, r.useMemo)((() => ({
                            open: n.open,
                            addDialog: d,
                            showModal: f
                        })), [n.open, d, f]);
                        return {
                            nestedDialogs: l,
                            openModals: s,
                            wrapElement: (0, r.useCallback)((e => (0, p.jsx)(I.Provider, {
                                value: v,
                                children: e
                            })), [v])
                        }
                    }(X, {
                        state: t,
                        modal: u
                    }),
                    {
                        nestedDialogs: $,
                        openModals: ee,
                        wrapElement: te
                    } = Z,
                    ne = (0, o.cP)($);
                N(X, k && t.mounted),
                    function(e, t) {
                        (0, r.useEffect)((() => {
                            if (!t.open) return;
                            const n = e.current;
                            if (!n) return;
                            const r = new MutationObserver((e => {
                                let [t] = e;
                                if (!t) return;
                                if (t.target !== n) return;
                                const r = (0, i.Me)(n);
                                (0, i.vY)(n) === r.body && n.focus()
                            }));
                            return r.observe(n, {
                                childList: !0,
                                subtree: !0
                            }), () => r.disconnect()
                        }), [t.open, e])
                    }(X, t),
                    function(e, t, n) {
                        let {
                            state: r,
                            modal: o,
                            hideOnInteractOutside: u,
                            enabled: s = r.open
                        } = n;
                        const c = C(s),
                            l = {
                                disclosureRef: r.disclosureRef,
                                enabled: s,
                                dialogRef: e,
                                nestedDialogs: t,
                                capture: !0
                            };
                        L({ ...l,
                            type: "mousedown",
                            listener: t => {
                                const n = e.current;
                                n && o && !A(u, t) && (n.focus(), t.preventDefault(), t.stopPropagation())
                            }
                        }), L({ ...l,
                            type: "click",
                            listener: t => {
                                const n = c.current;
                                if (!n) return;
                                if (!A(u, t)) {
                                    if (!o) return;
                                    return t.preventDefault(), void t.stopPropagation()
                                }
                                const s = e.current;
                                s && (0, i.r3)(s, n) || r.hide()
                            }
                        }), L({ ...l,
                            type: "focusin",
                            listener: t => {
                                const n = e.current;
                                if (n) {
                                    if (!A(u, t)) {
                                        if (!o) return;
                                        return n.focus(), t.preventDefault(), void t.stopPropagation()
                                    }
                                    t.target !== (0, i.Me)(n) && r.hide()
                                }
                            }
                        }), L({ ...l,
                            type: "contextmenu",
                            listener: t => {
                                const n = e.current;
                                if (n) {
                                    if (!A(u, t)) {
                                        if (!o) return;
                                        return n.focus(), t.preventDefault(), void t.stopPropagation()
                                    }
                                    r.hide()
                                }
                            }
                        })
                    }(X, $, {
                        state: t,
                        modal: u,
                        hideOnInteractOutside: O,
                        enabled: t.open
                    }), F && (0, r.useEffect)((() => {
                        if (!t.mounted) return;
                        const e = t.disclosureRef.current;
                        if (!e) return;
                        if (!(0, i.iK)(e)) return;
                        const n = () => {
                            let t = !1;
                            const n = () => {
                                t = !0
                            };
                            e.addEventListener("focusin", n, {
                                capture: !0,
                                once: !0
                            }), (0, s.qx)(e, "mouseup", (() => {
                                e.removeEventListener("focusin", n, !0), t || (0, c.Qw)(e)
                            }))
                        };
                        return e.addEventListener("mousedown", n), () => {
                            e.removeEventListener("mousedown", n)
                        }
                    }), [t.mounted, t.disclosureRef]), (0, r.useEffect)((() => {
                        if (!t.mounted) return;
                        if (!U) return;
                        const e = X.current;
                        if (e && _) {
                            if (e.querySelector("[data-dialog-dismiss]")) return;
                            return function(e, t) {
                                const n = (0, i.Me)(e).createElement("button");
                                return n.type = "button", n.tabIndex = -1, n.textContent = "Dismiss popup", n.style.border = "0px", n.style.clip = "rect(0 0 0 0)", n.style.height = "1px", n.style.margin = "-1px", n.style.overflow = "hidden", n.style.padding = "0px", n.style.position = "absolute", n.style.whiteSpace = "nowrap", n.style.width = "1px", n.addEventListener("click", t), e.prepend(n), () => {
                                    n.removeEventListener("click", t), n.remove()
                                }
                            }(e, t.hide)
                        }
                    }), [t.mounted, U, _, t.hide]);
                const re = T(X, "data-dialog-disable-outside", W && !ee.length && _);
                (0, o.Gw)((() => {
                    if (!re()) return;
                    const e = f ? H : X.current;
                    return u ? (0, l.tS)(D(e), h ? null : function() {
                        const e = [];
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        P(n, (t => {
                            e.unshift(S(t))
                        }));
                        return () => {
                            e.forEach((e => e()))
                        }
                    }(e)) : D(e)
                }), [re, f, H, u, h]);
                const oe = (0, r.useRef)(),
                    ue = !!z,
                    ie = (0, o.yl)(z);
                (0, r.useEffect)((() => {
                    var e;
                    if (!W) return;
                    if (!ue) return;
                    if (!U) return;
                    if (null == (e = ne.current) ? void 0 : e.some((e => e.current && !e.current.hidden))) return;
                    const n = t.contentElement;
                    if (null == n || !n.isConnected) return;
                    const r = null == K ? void 0 : K.current,
                        o = r || (0, c.YC)(n, !0, f && V) || n,
                        u = oe.current;
                    if (oe.current = r, r === u) {
                        const e = (0, i.vY)(n, !0);
                        if (e && (0, i.r3)(n, e)) return
                    }
                    ie(o) && o.focus()
                }), [W, ue, U, t.contentElement, K, f, V, ie]);
                const se = !!G,
                    ce = (0, o.yl)(G);
                (0, r.useEffect)((() => {
                    const e = X.current,
                        n = J.current;
                    if (J.current = t.open, !n) return;
                    if (!se) return;
                    if (!e) return;
                    const r = () => {
                        const n = ne.current;
                        if (function(e, t) {
                                const n = (0, i.vY)();
                                return !!n && !(0, i.r3)(e, n) && ! function(e, t) {
                                    const n = e.id;
                                    if (n) return t.getAttribute("data-backdrop") === n
                                }(e, n) && (null == t || !t.some(j(n))) && !!(0, c.EB)(n)
                            }(e, n)) return;
                        let r = (null == B ? void 0 : B.current) || t.disclosureRef.current;
                        if (r) {
                            if (r.id) {
                                const e = (0, i.Me)(r),
                                    t = '[aria-activedescendant="' + r.id + '"]',
                                    n = e.querySelector(t);
                                n && (r = n)
                            }
                            if (!(0, c.EB)(r)) {
                                const e = (0, i.oq)(r, "[data-dialog]");
                                if (e && e.id) {
                                    const t = (0, i.Me)(e),
                                        n = '[aria-controls~="' + e.id + '"]',
                                        o = t.querySelector(n);
                                    o && (r = o)
                                }
                            }
                            if (!ce(r)) return;
                            r.focus()
                        }
                    };
                    return t.open ? r : r()
                }), [se, t.open, B, t.disclosureRef, ce]);
                const le = (0, o.yl)(R);
                (0, r.useEffect)((() => {
                    if (!U) return;
                    if (!t.mounted) return;
                    return (0, s.iN)("keydown", (e => {
                        const n = X.current;
                        if (!n) return;
                        const r = e.target,
                            o = t.disclosureRef.current;
                        if ("Escape" !== e.key) return;
                        if (e.defaultPrevented) return;
                        if (!r) return;
                        (() => {
                            if ((0, i.r3)(n, r)) {
                                return !ne.current.some(j(r))
                            }
                            return !(!o || !(0, i.r3)(o, r))
                        })() && le(e) && t.hide()
                    }))
                }), [U, t.mounted, t.disclosureRef, le, t.hide]), Y = (0, o.OJ)(Y, te, [te]), Y = (0, o.OJ)(Y, (e => (0, p.jsx)(m, {
                    level: u ? 1 : void 0,
                    children: e
                })), [u]), Y = v({ ...Y,
                    enabled: t.open && u && !ee.length
                });
                const ae = Y.hidden;
                Y = (0, o.OJ)(Y, (e => h ? (0, p.jsx)(M, {
                    state: t,
                    backdrop: h,
                    backdropProps: x,
                    hideOnInteractOutside: O,
                    hideOnEscape: R,
                    hidden: ae,
                    children: e
                }) : e), [t, h, x, O, R, ae]);
                const [de, fe] = (0, r.useState)(), [pe, ve] = (0, r.useState)();
                return Y = (0, o.OJ)(Y, (e => (0, p.jsx)(g.Provider, {
                    value: t,
                    children: (0, p.jsx)(E.Provider, {
                        value: fe,
                        children: (0, p.jsx)(w.Provider, {
                            value: ve,
                            children: e
                        })
                    })
                })), [t]), Y = {
                    id: Q,
                    "data-dialog": "",
                    role: "dialog",
                    tabIndex: n ? -1 : void 0,
                    "aria-labelledby": de,
                    "aria-describedby": pe,
                    ...Y,
                    ref: (0, o.cR)(X, Y.ref)
                }, Y = (0, d.f)({
                    state: t,
                    ...Y
                }), Y = (0, b.k)({ ...Y,
                    focusable: n
                }), Y = (0, y.v)({
                    portal: f,
                    ...Y,
                    portalRef: q,
                    preserveTabOrder: V
                }), Y
            }));
            (0, u.LM)((e => {
                const t = G(e);
                return (0, u.az)("div", t)
            }));
            var K = n(54666);
            const B = (0, u.Bi)((e => {
                    let {
                        state: t,
                        modal: n = !1,
                        portal: u = !!n,
                        preserveTabOrder: i = !0,
                        autoFocusOnShow: s = !0,
                        wrapperProps: c,
                        ...l
                    } = e;
                    const a = t.popoverRef;
                    (0, o.Gw)((() => {
                        const e = a.current,
                            n = t.contentElement;
                        e && n && (e.style.zIndex = getComputedStyle(n).zIndex)
                    }), [a, t.contentElement]);
                    const [d, f] = (0, r.useState)(!1), {
                        portalRef: v,
                        domReady: b
                    } = (0, o.Hw)(u, l.portalRef);
                    return (0, o.Gw)((() => {
                        var e;
                        if (!b) return;
                        if (!t.mounted) return;
                        if (null == (e = t.contentElement) || !e.isConnected) return;
                        const n = requestAnimationFrame((() => {
                            f(!0)
                        }));
                        return () => {
                            cancelAnimationFrame(n)
                        }
                    }), [b, t.mounted, t.contentElement]), l = (0, o.OJ)(l, (e => (0, p.jsx)("div", {
                        role: "presentation",
                        ...c,
                        style: {
                            position: t.fixed ? "fixed" : "absolute",
                            top: 0,
                            left: 0,
                            ...null == c ? void 0 : c.style
                        },
                        ref: a,
                        children: e
                    })), [t.fixed, a, c]), l = (0, o.OJ)(l, (e => (0, p.jsx)(K.P.Provider, {
                        value: t,
                        children: e
                    })), [t]), l = { ...l,
                        style: {
                            position: "relative",
                            ...l.style
                        }
                    }, l = G({
                        state: t,
                        modal: n,
                        preserveTabOrder: i,
                        portal: u,
                        autoFocusOnShow: d && s,
                        ...l,
                        portalRef: v
                    }), l
                })),
                Y = (0, u.LM)((e => {
                    const t = B(e);
                    return (0, u.az)("div", t)
                }))
        }
    }
]);