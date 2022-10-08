"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2726], {
        85411: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return Z
                }
            });
            var r = e(7297),
                i = e(85893),
                o = e(67294),
                c = e(27293),
                l = e(93976),
                a = e(86432),
                d = e(73324),
                u = e(73469),
                s = e(17650),
                f = function(t, n) {
                    var e = (0, o.useState)(0),
                        r = e[0],
                        i = e[1],
                        c = (0, o.useState)(0),
                        l = c[0],
                        a = c[1];
                    return (0, o.useEffect)((function() {
                        var n = function() {
                            i(t.current.offsetWidth), a(t.current.offsetHeight)
                        };
                        return t.current && n(), window.addEventListener("resize", n),
                            function() {
                                window.removeEventListener("resize", n)
                            }
                    }), [t, n]), {
                        width: r,
                        height: l
                    }
                },
                h = e(17882),
                x = e(41664),
                p = e.n(x);

            function g() {
                var t = (0, r.Z)(["\n\twidth: ", "px;\n\theight: ", "px;\n\tborder-radius: 50%;\n\tbackground: ", ";\n\tcolor: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t:focus-visible {\n\t\toutline-offset: 2px;\n\t}\n"]);
                return g = function() {
                    return t
                }, t
            }

            function v() {
                var t = (0, r.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tbackground: none;\n\toverflow: hidden;\n"]);
                return v = function() {
                    return t
                }, t
            }

            function m() {
                var t = (0, r.Z)(["\n\tmax-width: 600px;\n\tz-index: 10;\n\tpadding: 6px;\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tcolor: ", ";\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n\n\t& > * {\n\t\tjustify-content: flex-start;\n\t\tflex-wrap: wrap;\n\n\t\t& > * {\n\t\t\tflex-shrink: 0;\n\t\t}\n\t}\n"]);
                return m = function() {
                    return t
                }, t
            }
            var b = d.default.button.withConfig({
                    componentId: "sc-e690e612-0"
                })(g(), 24, 24, (function(t) {
                    return t.theme.bg3
                }), (function(t) {
                    return t.theme.text1
                })),
                w = d.default.div.withConfig({
                    componentId: "sc-e690e612-1"
                })(v()),
                j = (0, d.default)(c.u).withConfig({
                    componentId: "sc-e690e612-2"
                })(m(), (function(t) {
                    return t.theme.bg2
                }), (function(t) {
                    return t.theme.bg3
                }), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.shadowMd
                })),
                y = function(t) {
                    var n = t.chain,
                        e = t.url,
                        r = t.iconType,
                        o = t.yieldRewardsSymbol,
                        c = t.disableLink,
                        l = void 0 !== c && c,
                        a = e.includes("/yields?chain") || e.includes("/yields?project");
                    return o || l ? (0, i.jsx)(s.u, {
                        content: l ? n : o,
                        children: (0, i.jsx)(u.Z, {
                            address: n,
                            logo: "token" === r ? (0, h.cT)(n) : (0, h.jG)(n)
                        })
                    }) : (0, i.jsx)(s.u, {
                        content: n,
                        children: (0, i.jsx)(p(), {
                            href: e.includes("/yields?chain") ? "".concat(e, "=").concat(n) : e.includes("/yields?project") ? "".concat(e, "=").concat(n.toLowerCase().split(" ").join("-")) : "".concat(e, "/").concat(n),
                            shallow: a,
                            passHref: !0,
                            children: (0, i.jsx)("a", {
                                children: (0, i.jsx)(u.Z, {
                                    onClick: function(t) {
                                        return t.stopPropagation()
                                    },
                                    address: n,
                                    logo: "token" === r ? (0, h.cT)(n) : (0, h.jG)(n)
                                })
                            })
                        }, n)
                    })
                },
                k = function(t) {
                    return ["ethereum", "avalanche", "optimism", "near", "metis", "aurora"].includes(t.toLowerCase())
                },
                Z = function(t) {
                    var n = t.links,
                        e = t.url,
                        r = t.iconType,
                        c = t.yieldRewardsSymbols,
                        d = void 0 === c ? [] : c,
                        u = t.disableLinks,
                        s = void 0 !== u && u,
                        h = (0, o.useState)(0),
                        x = h[0],
                        p = h[1],
                        g = (0, o.useRef)(null),
                        v = f(g).width;
                    (0, o.useEffect)((function() {
                        var t = (v > 280 ? 280 : v) - 24,
                            e = 0;
                        n.forEach((function() {
                            t < 0 || (t -= 24, e += 1)
                        })), p(n.length > 2 ? e : n.length)
                    }), [v, n]);
                    var m = x < n.length ? x - 1 : x,
                        Z = n.length > 2 ? n.slice(0, m) : n,
                        C = m !== x ? n.slice(m, n.length) : [],
                        S = (0, l.F)();
                    return (0, i.jsxs)(w, {
                        ref: g,
                        children: [Z.map((function(t, n) {
                            return (0, i.jsx)(y, {
                                chain: t,
                                url: "/yields?project" === e && k(t) ? "/yields?chain" : e,
                                iconType: k(t) ? "chain" : r,
                                yieldRewardsSymbol: d[n],
                                disableLink: s
                            }, t)
                        })), !!C.length && n.length > 2 && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a.w, {
                                state: S,
                                children: (0, i.jsx)(b, {
                                    children: "+".concat(C.length)
                                })
                            }), (0, i.jsx)(j, {
                                state: S,
                                children: (0, i.jsx)(w, {
                                    children: C.map((function(t, n) {
                                        return (0, i.jsx)(y, {
                                            chain: t,
                                            url: e,
                                            iconType: r,
                                            yieldRewardsSymbol: d[n]
                                        }, t)
                                    }))
                                })
                            })]
                        })]
                    })
                }
        },
        45061: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return h
                }
            });
            var r = e(26042),
                i = e(69396),
                o = e(99534),
                c = e(7297),
                l = e(85893),
                a = (e(67294), e(73324)),
                d = e(36103),
                u = e(17650);

            function s() {
                var t = (0, c.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 36px;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tflex-shrink: 0;\n\n\t:hover,\n\t:focus-visible {\n\t\topacity: 0.7;\n\t}\n"]);
                return s = function() {
                    return t
                }, t
            }
            var f = a.default.span.withConfig({
                componentId: "sc-34fa9ad7-0"
            })(s(), (function(t) {
                return t.theme.bg2
            }), (function(t) {
                return t.theme.text2
            }));

            function h(t) {
                var n = t.text,
                    e = t.disabled,
                    c = (0, o.Z)(t, ["text", "disabled"]);
                return (0, l.jsx)(u.Z, {
                    content: e ? null : n,
                    children: (0, l.jsx)(f, (0, i.Z)((0, r.Z)({}, c), {
                        children: (0, l.jsx)(d.Z, {
                            size: 16
                        })
                    }))
                })
            }
        },
        58552: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return y
                }
            });
            var r = e(26042),
                i = e(69396),
                o = e(99534),
                c = e(828),
                l = e(7297),
                a = e(85893),
                d = e(67294),
                u = e(24799),
                s = e(62470),
                f = e(73324);

            function h() {
                var t = (0, l.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tposition: relative;\n\ttop: 1px;\n"]);
                return h = function() {
                    return t
                }, t
            }

            function x() {
                var t = (0, l.Z)(["\n\tcolor: ", ";\n\tflex-shrink: 0;\n\tposition: relative;\n\n\t:first-of-type {\n\t\ttop: 2px;\n\t}\n\n\t:last-of-type {\n\t\tbottom: 2px;\n\t}\n"]);
                return x = function() {
                    return t
                }, t
            }

            function p(t) {
                var n = t.dir;
                return (0, a.jsxs)(g, {
                    children: [(0, a.jsx)(v, {
                        role: "img",
                        "aria-label": "caret-up",
                        active: "asc" === n,
                        children: (0, a.jsx)("svg", {
                            viewBox: "0 0 1024 1024",
                            width: "10px",
                            focusable: "false",
                            "data-icon": "caret-up",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            })
                        })
                    }), (0, a.jsx)(v, {
                        role: "img",
                        "aria-label": "caret-down",
                        active: "desc" === n,
                        children: (0, a.jsx)("svg", {
                            viewBox: "0 0 1024 1024",
                            width: "10px",
                            focusable: "false",
                            "data-icon": "caret-down",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            })
                        })
                    })]
                })
            }
            var g = f.default.span.withConfig({
                    componentId: "sc-bb03b14a-0"
                })(h()),
                v = f.default.span.withConfig({
                    componentId: "sc-bb03b14a-1"
                })(x(), (function(t) {
                    var n = t.active,
                        e = t.theme;
                    return n ? e.blue : "gray"
                })),
                m = e(45061);

            function b() {
                var t = (0, l.Z)(["\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: calc(100vw - 32px);\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n\tborder-radius: 12px;\n\toverflow-x: auto;\n\n\ttable {\n\t\ttable-layout: fixed;\n\t\twidth: 100%;\n\t\tborder-collapse: collapse;\n\t}\n\n\tthead {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tmargin: 0;\n\n\t\tth {\n\t\t\tz-index: 1;\n\n\t\t\t:first-of-type {\n\t\t\t\tborder-radius: 12px 0 0 0;\n\t\t\t}\n\n\t\t\t:last-of-type {\n\t\t\t\tborder-radius: 0 12px 0 0;\n\t\t\t}\n\t\t}\n\t}\n\n\ttr {\n\t\tborder-bottom: 1px solid ", ";\n\t}\n\n\tth,\n\ttd {\n\t\tpadding: 12px;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tbackground-color: ", ";\n\t}\n\n\ttr > *:first-child {\n\t\tposition: sticky;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tmax-width: calc(100vw - 236px - 28px - 28px);\n\t}\n"]);
                return b = function() {
                    return t
                }, t
            }

            function w() {
                var t = (0, l.Z)(["\n\tdisplay: flex;\n\tjustify-content: ", ";\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 4px;\n\tfont-weight: 500;\n\n\t& > * {\n\t\twhite-space: nowrap;\n\t}\n\n\tsvg {\n\t\tflex-shrink: 0;\n\t}\n\n\tbutton {\n\t\tpadding: 0;\n\t}\n"]);
                return w = function() {
                    return t
                }, t
            }

            function j() {
                var t = (0, l.Z)(["\n\tcolor: ", ";\n"]);
                return j = function() {
                    return t
                }, t
            }

            function y(t) {
                var n, e, l = t.instance,
                    f = t.skipVirtualization,
                    h = (0, o.Z)(t, ["instance", "skipVirtualization"]),
                    x = (0, c.Z)(d.useState(0), 2),
                    g = x[0],
                    v = x[1],
                    m = d.useRef(null),
                    b = l.getRowModel().rows;
                d.useEffect((function() {
                    (null === m || void 0 === m ? void 0 : m.current) && v(m.current.offsetTop)
                }), []);
                var w = (0, s.useWindowVirtualizer)({
                        count: b.length,
                        estimateSize: function() {
                            return 50
                        },
                        overscan: 20,
                        rangeExtractor: d.useCallback((function(t) {
                            if (!g) return (0, s.defaultRangeExtractor)(t);
                            var n = g / 40,
                                e = t.startIndex;
                            return t.startIndex <= n && (e = 1), t.startIndex - n > 0 && (e = t.startIndex - Math.round(n)), (0, s.defaultRangeExtractor)((0, i.Z)((0, r.Z)({}, t), {
                                startIndex: e
                            }))
                        }), [g])
                    }),
                    j = w.getVirtualItems(),
                    y = j.length > 0 && (null === j || void 0 === j || null === (n = j[0]) || void 0 === n ? void 0 : n.start) || 0,
                    S = j.length > 0 ? w.getTotalSize() - ((null === j || void 0 === j || null === (e = j[j.length - 1]) || void 0 === e ? void 0 : e.end) || 0) : 0;
                return (0, a.jsx)(k, (0, i.Z)((0, r.Z)({
                    ref: m
                }, h), {
                    children: (0, a.jsxs)("table", {
                        children: [(0, a.jsx)("thead", {
                            children: l.getHeaderGroups().map((function(t) {
                                return (0, a.jsx)("tr", {
                                    children: t.headers.map((function(t) {
                                        var n, e = t.column.columnDef.meta,
                                            r = (0, u.flexRender)(t.column.columnDef.header, t.getContext());
                                        return (0, a.jsx)("th", {
                                            colSpan: t.colSpan,
                                            style: {
                                                width: t.getSize()
                                            },
                                            children: (0, a.jsxs)(Z, {
                                                align: null !== (n = null === e || void 0 === e ? void 0 : e.align) && void 0 !== n ? n : "start",
                                                children: [t.isPlaceholder ? null : (0, a.jsx)(a.Fragment, {
                                                    children: t.column.getCanSort() ? (0, a.jsx)("button", {
                                                        onClick: function() {
                                                            return t.column.toggleSorting()
                                                        },
                                                        children: r
                                                    }) : r
                                                }), (null === e || void 0 === e ? void 0 : e.headerHelperText) && (0, a.jsx)(C, {
                                                    text: null === e || void 0 === e ? void 0 : e.headerHelperText
                                                }), t.column.getCanSort() && (0, a.jsx)(p, {
                                                    dir: t.column.getIsSorted()
                                                })]
                                            })
                                        }, t.id)
                                    }))
                                }, t.id)
                            }))
                        }), (0, a.jsxs)("tbody", {
                            children: [y > 0 && !f && (0, a.jsx)("tr", {
                                children: (0, a.jsx)("td", {
                                    style: {
                                        height: "".concat(y, "px")
                                    }
                                })
                            }), (f ? b : j).map((function(t) {
                                var n = b[t.index],
                                    e = n.original.disabled ? {
                                        opacity: .3
                                    } : void 0;
                                return (0, a.jsx)("tr", {
                                    style: e,
                                    children: n.getVisibleCells().map((function(t) {
                                        var n, e, r = null !== (e = null === (n = t.column.columnDef.meta) || void 0 === n ? void 0 : n.align) && void 0 !== e ? e : "start";
                                        return (0, a.jsx)("td", {
                                            style: {
                                                width: t.column.getSize(),
                                                textAlign: r
                                            },
                                            children: (0, u.flexRender)(t.column.columnDef.cell, t.getContext())
                                        }, t.id)
                                    }))
                                }, n.id)
                            })), S > 0 && !f && (0, a.jsx)("tr", {
                                children: (0, a.jsx)("td", {
                                    style: {
                                        height: "".concat(S, "px")
                                    }
                                })
                            })]
                        })]
                    })
                }))
            }
            var k = f.default.div.withConfig({
                    componentId: "sc-fdd93d11-0"
                })(b(), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.background
                }), (function(t) {
                    return t.theme.bg3
                }), (function(t) {
                    return t.theme.divider
                }), (function(t) {
                    return t.theme.background
                }), (function(t) {
                    return t.theme.bpLg
                })),
                Z = f.default.span.withConfig({
                    componentId: "sc-fdd93d11-1"
                })(w(), (function(t) {
                    return "end" === t.align ? "flex-end" : "flex-start"
                })),
                C = (0, f.default)(m.Z).withConfig({
                    componentId: "sc-fdd93d11-2"
                })(j(), (function(t) {
                    return t.theme.text1
                }))
        }
    }
]);