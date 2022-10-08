"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5411], {
        73502: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return i
                },
                a: function() {
                    return r
                },
                h: function() {
                    return u
                }
            });
            n(67294);
            var o = n(45089);
            const r = (0, o.re)(),
                i = (0, o.re)();

            function u(e, t) {
                return !(null == e || !e.filter((e => e.ref.current !== t)).some((e => {
                    var t;
                    return "true" === (null == (t = e.ref.current) ? void 0 : t.getAttribute("aria-expanded"))
                })))
            }
        },
        565: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return v
                }
            });
            var o = n(67294),
                r = n(106),
                i = n(10451),
                u = n(45089),
                l = n(61142),
                s = n(4001),
                a = n(86432),
                c = n(26664),
                d = n(73502);
            const f = (0, l.Bi)((e => {
                    let {
                        state: t,
                        focusable: n,
                        accessibleWhenDisabled: l,
                        showOnHover: f,
                        ...v
                    } = e;
                    const m = (0, o.useRef)(null),
                        h = (0, u.oR)(d.M, ["items", "move", "contentElement"]),
                        p = (0, u.oR)(d.a, ["items", "move"]),
                        w = !!h,
                        b = !!p && !w,
                        A = v.disabled || !0 === v["aria-disabled"] || "true" === v["aria-disabled"];
                    (0, o.useEffect)((() => {
                        t.disclosureRef.current = m.current
                    }));
                    const y = v.onFocus,
                        R = (0, i.zX)((e => {
                            null == y || y(e), A || e.defaultPrevented || (t.setAutoFocusOnShow(!1), t.setActiveId(null), p && b && (0, d.h)(p.items, e.currentTarget) && t.show())
                        })),
                        O = t.placement.split("-")[0],
                        E = v.onKeyDown,
                        g = (0, i.zX)((e => {
                            if (null == E || E(e), A) return;
                            if (e.defaultPrevented) return;
                            const n = function(e, t) {
                                return {
                                    ArrowDown: ("bottom" === t || "top" === t) && "first",
                                    ArrowUp: ("bottom" === t || "top" === t) && "last",
                                    ArrowRight: "right" === t && "first",
                                    ArrowLeft: "left" === t && "first"
                                }[e.key]
                            }(e, O);
                            n && (e.preventDefault(), t.show(), t.setAutoFocusOnShow(!0), t.setInitialFocus(n))
                        })),
                        k = v.onClick,
                        F = (0, i.zX)((e => {
                            if (null == k || k(e), e.defaultPrevented) return;
                            const n = !e.detail;
                            t.open && !n || (w && !n || t.setAutoFocusOnShow(!0), t.setInitialFocus(n ? "first" : "container")), w && t.show()
                        }));
                    w && (v = {
                        as: "div",
                        ...v
                    });
                    return v = {
                        id: (0, i.Me)(v.id),
                        role: w || b ? (0, r.lQ)(null == h ? void 0 : h.contentElement, "menuitem") : void 0,
                        "aria-haspopup": (0, r.SK)(t.contentElement, "menu"),
                        ...v,
                        ref: (0, i.cR)(m, v.ref),
                        onFocus: R,
                        onKeyDown: g,
                        onClick: F
                    }, v = (0, a.S)({
                        state: t,
                        focusable: n,
                        accessibleWhenDisabled: l,
                        ...v,
                        showOnHover: e => "function" === typeof f ? f(e) : null != f ? f : !!w || b && (0, d.h)(p.items)
                    }), v = (0, c.j)({
                        state: t,
                        toggleOnClick: !w,
                        focusable: n,
                        accessibleWhenDisabled: l,
                        ...v
                    }), v = (0, s.p)({
                        state: t,
                        typeahead: b,
                        ...v
                    }), v
                })),
                v = (0, l.LM)((e => {
                    const t = f(e);
                    return (0, l.az)("button", t)
                }))
        },
        53701: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return f
                }
            });
            var o = n(106),
                r = n(22386),
                i = n(10451),
                u = n(45089),
                l = n(61142),
                s = n(54260),
                a = n(89068),
                c = n(73502);
            const d = (0, l.Bi)((e => {
                    let {
                        state: t,
                        hideOnClick: n = !0,
                        preventScrollOnKeyDown: l = !0,
                        focusOnHover: d,
                        ...f
                    } = e;
                    const v = (0, u.oR)(t || c.a, ["items"]);
                    t = (0, u.oR)(t || c.M, ["move", "hideAll", "contentElement"]) || v;
                    const m = f.onClick,
                        h = (0, i.yl)(n),
                        p = t && "hideAll" in t ? t.hideAll : void 0,
                        w = !!p,
                        b = (0, i.zX)((e => {
                            if (null == m || m(e), e.defaultPrevented) return;
                            if ((0, r.XN)(e)) return;
                            if ((0, r.wC)(e)) return;
                            if (!p) return;
                            "menu" !== e.currentTarget.getAttribute("aria-haspopup") && h(e) && p()
                        }));
                    return f = {
                        role: (0, o.lQ)(t && "contentElement" in t ? t.contentElement : null, "menuitem"),
                        ...f,
                        onClick: b
                    }, f = (0, a.E)({
                        state: t,
                        preventScrollOnKeyDown: l,
                        ...f
                    }), f = (0, s.B)({
                        state: t,
                        ...f,
                        focusOnHover: e => {
                            var n;
                            return "function" === typeof d ? d(e) : null != d ? d : "mouseleave" === e.type ? w : w ? (e.currentTarget.hasAttribute("aria-expanded") && e.currentTarget.focus(), !0) : !!(0, c.h)(null == (n = t) ? void 0 : n.items, e.currentTarget) && (e.currentTarget.focus(), !0)
                        }
                    }), f
                })),
                f = (0, u.W5)((e => {
                    const t = d(e);
                    return (0, l.az)("div", t)
                }))
        },
        2269: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return c
                }
            });
            var o = n(67294),
                r = n(10451),
                i = n(31423),
                u = n(45089),
                l = n(13647),
                s = n(93976),
                a = n(73502);

            function c(e) {
                var t;
                let {
                    orientation: n = "vertical",
                    timeout: c,
                    hideTimeout: d = 0,
                    ...f
                } = void 0 === e ? {} : e;
                const [v, m] = (0, o.useState)("container"), [h, p] = (0, r.zk)(f.defaultValues || {}, f.values, f.setValues), w = (0, u.oR)(a.M, ["orientation", "hideAll"]), b = (0, u.oR)(a.a, ["orientation"]), A = (null == w ? void 0 : w.orientation) || (null == b ? void 0 : b.orientation), y = !!b && !w, R = f.placement || ("vertical" === A ? "right-start" : "bottom-start");
                c = (null != (t = c) ? t : y) ? 0 : 150;
                const O = (0, l.u)({
                        orientation: n,
                        ...f
                    }),
                    E = (0, s.F)({
                        timeout: c,
                        hideTimeout: d,
                        ...f,
                        placement: R
                    });
                (0, o.useEffect)((() => {
                    E.mounted || O.setActiveId(null)
                }), [E.mounted, O.setActiveId]);
                const g = (0, o.useCallback)(((e, t) => {
                        "__proto__" !== e && "constructor" !== e && p((n => {
                            const o = n[e],
                                r = (0, i.Ei)(t, o);
                            return r === o ? n : { ...n,
                                [e]: void 0 === r ? !!r : r
                            }
                        }))
                    }), [p]),
                    k = (0, o.useCallback)((() => {
                        E.hide(), null == w || w.hideAll()
                    }), [E.hide, null == w ? void 0 : w.hideAll]),
                    F = (0, o.useMemo)((() => ({ ...O,
                        ...E,
                        initialFocus: v,
                        setInitialFocus: m,
                        values: h,
                        setValues: p,
                        setValue: g,
                        hideAll: k
                    })), [O, E, v, m, h, p, g, k]);
                return (0, u.oW)(F)
            }
        },
        29801: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return h
                }
            });
            var o = n(67294),
                r = n(76095),
                i = n(10451),
                u = n(45089),
                l = n(61142),
                s = n(27293),
                a = n(73502),
                c = n(69503),
                d = n(4001);
            const f = (0, l.Bi)((e => {
                let {
                    state: t,
                    composite: n = !0,
                    ...r
                } = e;
                const l = (0, u.oR)(a.M, []),
                    s = (0, u.oR)(a.a, ["items", "move", "next", "previous", "orientation"]),
                    f = !!l,
                    v = (0, i.Me)(r.id),
                    m = r.onKeyDown,
                    h = t.placement.split("-")[0],
                    p = "both" === t.orientation ? void 0 : t.orientation,
                    w = "vertical" !== p,
                    b = !!s && "vertical" !== (null == s ? void 0 : s.orientation),
                    A = (0, i.zX)((e => {
                        if (null == m || m(e), !e.defaultPrevented) {
                            if (f || s && !w) {
                                const n = {
                                    ArrowRight: () => "left" === h && !w,
                                    ArrowLeft: () => "right" === h && !w,
                                    ArrowUp: () => "bottom" === h && w,
                                    ArrowDown: () => "top" === h && w
                                }[e.key];
                                if (null != n && n()) return e.stopPropagation(), e.preventDefault(), t.hide()
                            }
                            if (s) {
                                const t = {
                                        ArrowRight: () => {
                                            if (b) return s.next()
                                        },
                                        ArrowLeft: () => {
                                            if (b) return s.previous()
                                        },
                                        ArrowDown: () => {
                                            if (!b) return s.next()
                                        },
                                        ArrowUp: () => {
                                            if (!b) return s.previous()
                                        }
                                    }[e.key],
                                    n = null == t ? void 0 : t();
                                void 0 !== n && (e.stopPropagation(), e.preventDefault(), s.move(n))
                            }
                        }
                    }));
                r = (0, u.xR)({
                    state: t,
                    ...r
                }, a.M);
                const y = function(e) {
                        let {
                            state: t,
                            ...n
                        } = e;
                        const [r, i] = (0, o.useState)(void 0), u = n["aria-label"];
                        return (0, o.useEffect)((() => {
                            const e = t.disclosureRef.current;
                            if (!e) return;
                            const n = t.contentElement;
                            n && (u || n.hasAttribute("aria-label") ? i(void 0) : e.id && i(e.id))
                        }), [u, t.disclosureRef, t.contentElement]), r
                    }({
                        state: t,
                        ...r
                    }),
                    R = t.mounted ? r.style : { ...r.style,
                        display: "none"
                    };
                return r = {
                    id: v,
                    "aria-labelledby": y,
                    hidden: !t.mounted,
                    ...r,
                    ref: (0, i.cR)(v ? t.setContentElement : null, r.ref),
                    style: R,
                    onKeyDown: A
                }, n && (r = {
                    role: "menu",
                    "aria-orientation": p,
                    ...r
                }), r = (0, c.Q)({
                    state: t,
                    composite: n,
                    ...r
                }), r = (0, d.p)({
                    state: t,
                    ...r
                }), r
            }));
            (0, l.LM)((e => {
                const t = f(e);
                return (0, l.az)("div", t)
            }));

            function v(e, t) {
                var n;
                if (t) return null == (n = e.find((e => e.id === t))) ? void 0 : n.ref
            }
            const m = (0, l.Bi)((e => {
                    let {
                        state: t,
                        hideOnEscape: n = !0,
                        autoFocusOnShow: l = !0,
                        hideOnHoverOutside: c,
                        ...d
                    } = e;
                    const m = (0, u.oR)(a.M, []),
                        h = (0, u.oR)(a.a, []),
                        p = !!m,
                        w = !!h && !p,
                        b = d.onKeyDown,
                        A = (0, i.yl)(n),
                        y = (0, i.zX)((e => {
                            if (null == b || b(e), !e.defaultPrevented && "Escape" === e.key) {
                                if (!A(e)) return;
                                return p || e.stopPropagation(), t.hide()
                            }
                        }));
                    d = { ...d,
                        onKeyDown: y
                    };
                    const {
                        "aria-labelledby": R,
                        ...O
                    } = f({
                        state: t,
                        ...d
                    });
                    d = O;
                    const [E, g] = (0, o.useState)();
                    (0, o.useEffect)((() => {
                        let e = !1;
                        return g((n => {
                            if (!e && t.autoFocusOnShow) {
                                if (n) return n;
                                switch (t.initialFocus) {
                                    case "first":
                                        return v(t.items, t.first());
                                    case "last":
                                        return v(t.items, t.last());
                                    default:
                                        return t.baseRef
                                }
                            }
                        })), () => {
                            e = !0
                        }
                    }), [t.autoFocusOnShow, t.initialFocus, t.items, t.first, t.last, t.baseRef]);
                    const k = !!l,
                        F = !!E || !!d.initialFocusRef || !!d.modal;
                    return d = (0, s.c)({
                        state: t,
                        initialFocusRef: E,
                        autoFocusOnShow: k ? F && l : t.autoFocusOnShow || !!d.modal,
                        ...d,
                        hideOnHoverOutside: e => {
                            if ("function" === typeof c) return c(e);
                            if (null != c) return c;
                            if (p) return m.setActiveId(null), !0;
                            if (!w) return !1;
                            const n = t.disclosureRef.current;
                            return !n || !(0, r.B_)(n)
                        },
                        modal: !p && d.modal,
                        backdrop: !p && d.backdrop,
                        hideOnEscape: !p && n
                    }), d = {
                        "aria-labelledby": R,
                        ...d
                    }, d
                })),
                h = (0, l.LM)((e => {
                    const t = m(e);
                    return (0, l.az)("div", t)
                }))
        }
    }
]);