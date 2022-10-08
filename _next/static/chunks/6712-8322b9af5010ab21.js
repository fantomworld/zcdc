(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6712], {
        75926: function(t, n, e) {
            "use strict";
            e.d(n, {
                P: function() {
                    return l
                },
                W: function() {
                    return c
                }
            });
            var o = e(67294),
                i = e(61142);
            const r = (0, o.createContext)(!1);
            var s = e(85893);
            const a = (0, s.jsx)("svg", {
                display: "block",
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5pt",
                viewBox: "0 0 16 16",
                height: "1em",
                width: "1em",
                children: (0, s.jsx)("polyline", {
                    points: "4,8 7,12 12,4"
                })
            });
            const c = (0, i.Bi)((t => {
                    var n;
                    let {
                        state: e,
                        checked: i,
                        ...s
                    } = t;
                    const c = (0, o.useContext)(r);
                    i = null != (n = i) ? n : c;
                    const l = function(t) {
                        return t.checked ? t.children || a : "function" === typeof t.children ? t.children : null
                    }({
                        checked: i,
                        children: s.children
                    });
                    return s = {
                        "aria-hidden": !0,
                        ...s,
                        children: l,
                        style: {
                            width: "1em",
                            height: "1em",
                            pointerEvents: "none",
                            ...s.style
                        }
                    }, s
                })),
                l = (0, i.LM)((t => {
                    const n = c(t);
                    return (0, i.az)("span", n)
                }))
        },
        18033: function(t, n, e) {
            "use strict";
            e.d(n, {
                n: function() {
                    return c
                }
            });
            var o = e(10451),
                i = e(31423),
                r = e(45089),
                s = e(61142);
            const a = (0, s.Bi)((t => {
                    let {
                        state: n,
                        ...e
                    } = t;
                    const r = (0, o.Me)(e.id),
                        s = e.onClick,
                        a = (0, o.zX)((t => {
                            null == s || s(t), t.defaultPrevented || (0, i.YE)((() => {
                                const t = n.selectRef.current;
                                null == t || t.focus(), null == t || t.click()
                            }))
                        }));
                    return e = {
                        id: r,
                        ...e,
                        ref: (0, o.cR)(n.labelRef, e.ref),
                        onClick: a,
                        style: {
                            cursor: "default",
                            ...e.style
                        }
                    }, e
                })),
                c = (0, r.W5)((t => {
                    const n = a(t);
                    return (0, s.az)("div", n)
                }))
        },
        68141: function(t, n, e) {
            "use strict";
            e.d(n, {
                KT: function() {
                    return c
                },
                ao: function() {
                    return a
                },
                tH: function() {
                    return s
                }
            });
            var o = e(8100),
                i = e(8151),
                r = e(50771),
                s = function() {
                    var t = (0, o.ZP)(i.Zi, r._i),
                        n = t.data,
                        e = t.error;
                    return {
                        data: n,
                        error: e,
                        loading: !n && !e
                    }
                },
                a = function(t) {
                    var n = (0, o.ZP)(t ? "".concat(i.a6, "/").concat(t) : null, r._i),
                        e = n.data,
                        s = n.error,
                        a = (0, o.ZP)(t && (null === e || void 0 === e ? void 0 : e.length) < 7 ? "".concat(i.Pm, "/").concat(t) : null, r._i),
                        c = a.data,
                        l = a.error;
                    return {
                        data: e,
                        error: s,
                        loading: t && (!e && !s || (null === e || void 0 === e ? void 0 : e.length) < 7 && (!c || !l))
                    }
                },
                c = function(t) {
                    var n = "https://api.coingecko.com/api/v3/coins/".concat(t, "/market_chart/range?vs_currency=usd&from=0&to="),
                        e = (0, o.ZP)(t ? n : null, (function(t) {
                            return (0, r._i)(t + Date.now())
                        })),
                        i = e.data,
                        s = e.error;
                    return {
                        data: i,
                        error: s,
                        loading: t && !i && !s
                    }
                }
        },
        74939: function(t, n, e) {
            "use strict";
            e.d(n, {
                II: function() {
                    return d
                },
                aV: function() {
                    return p
                },
                ck: function() {
                    return f
                }
            });
            var o = e(7297),
                i = e(95005),
                r = e(66465),
                s = e(53839),
                a = e(62810),
                c = e(73324);

            function l() {
                var t = (0, o.Z)(["\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont: inherit;\n\tpadding: 8px 12px;\n\tborder: ", ";\n\tborder-radius: 8px;\n\tmargin: 12px 12px 0;\n\n\t:focus-visible {\n\t\toutline: ", ";\n\t}\n"]);
                return l = function() {
                    return t
                }, t
            }

            function u() {
                var t = (0, o.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\tpadding: 16px 0;\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 8px 0;\n\t\tgap: 0;\n\t}\n"]);
                return u = function() {
                    return t
                }, t
            }

            function h() {
                var t = (0, o.Z)(["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\ttext-align: start;\n\n\t@media screen and (min-width: 640px) {\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-active-item] {\n\t\t\toutline: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t}\n"]);
                return h = function() {
                    return t
                }, t
            }
            var d = (0, c.default)(i.h).withConfig({
                    componentId: "sc-ba1768db-0"
                })(l(), (function(t) {
                    return "dark" === t.theme.mode ? "#000" : "#fff"
                }), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return "1px solid " + t.theme.text4
                }), (function(t) {
                    return "1px solid " + t.theme.text1
                })),
                p = (0, c.default)(r.G).withConfig({
                    componentId: "sc-ba1768db-1"
                })(u()),
                f = (0, c.default)(s.l).withConfig({
                    componentId: "sc-ba1768db-2"
                })(h(), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    var n = t.theme;
                    return (0, a.DZ)(.8, n.primary1)
                }))
        },
        36425: function(t, n, e) {
            "use strict";
            e.d(n, {
                P: function() {
                    return g
                }
            });
            var o = e(26042),
                i = e(69396),
                r = e(99534),
                s = e(828),
                a = e(85893),
                c = e(67294),
                l = e(11163),
                u = e(49070),
                h = e(79161),
                d = e(91365),
                p = e(16626),
                f = e(74939),
                v = e(22114),
                m = e(63947);

            function g(t) {
                var n = t.chainList,
                    e = void 0 === n ? [] : n,
                    g = t.selectedChains,
                    y = t.pathname,
                    b = (0, l.useRouter)(),
                    x = b.query,
                    k = x.chain,
                    w = (0, r.Z)(x, ["chain"]),
                    j = (0, u.q)({
                        list: e
                    }),
                    C = (j.value, j.setValue, (0, r.Z)(j, ["value", "setValue"])),
                    O = (0, s.Z)((0, m.eG)(), 2),
                    Z = O[0],
                    S = O[1],
                    E = (0, h.d)((0, i.Z)((0, o.Z)({}, C), {
                        value: g,
                        setValue: function(t) {
                            b.push({
                                pathname: y,
                                query: (0, i.Z)((0, o.Z)({}, w), {
                                    chain: t
                                })
                            }, void 0, {
                                shallow: !0
                            })
                        },
                        gutter: 8,
                        animated: !0,
                        renderCallback: S
                    }));
                !E.mounted && j.value && j.setValue("");
                var P = (0, c.useRef)(null);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(v.UN, {
                        state: E,
                        children: [(0, a.jsx)("span", {
                            children: "Filter by Chain"
                        }), (0, a.jsx)(d.C, {}), g.length > 0 && g.length !== e.length && (0, a.jsx)(v.wr, {
                            children: g.length
                        })]
                    }), (0, a.jsxs)(v.kp, {
                        state: E,
                        modal: !Z,
                        composite: !1,
                        initialFocusRef: P,
                        children: [(0, a.jsx)(f.II, {
                            state: j,
                            placeholder: "Search for chains...",
                            autoFocus: !0
                        }), j.matches.length > 0 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(v.JK, {
                                children: [(0, a.jsx)("button", {
                                    onClick: function() {
                                        E.up(1), b.push({
                                            pathname: y,
                                            query: (0, i.Z)((0, o.Z)({}, w), {
                                                chain: "None"
                                            })
                                        }, void 0, {
                                            shallow: !0
                                        })
                                    },
                                    children: "Clear"
                                }), (0, a.jsx)("button", {
                                    onClick: function() {
                                        k && "All" !== k ? b.push({
                                            pathname: y,
                                            query: (0, i.Z)((0, o.Z)({}, w), {
                                                chain: "All"
                                            })
                                        }, void 0, {
                                            shallow: !0
                                        }) : b.push({
                                            pathname: y,
                                            query: (0, i.Z)((0, o.Z)({}, w), {
                                                chain: "None"
                                            })
                                        }, void 0, {
                                            shallow: !0
                                        })
                                    },
                                    children: "Toggle all"
                                })]
                            }), (0, a.jsx)(f.aV, {
                                state: j,
                                className: "filter-by-list",
                                children: j.matches.map((function(t, n) {
                                    return (0, a.jsxs)(v.Ql, {
                                        value: t,
                                        ref: 0 === n && g.length === e.length ? P : null,
                                        focusOnHover: !0,
                                        children: [(0, a.jsx)("span", {
                                            children: t
                                        }), (0, a.jsx)(p.XZ, {
                                            checked: !!E.value.includes(t)
                                        })]
                                    }, t + n)
                                }))
                            })]
                        }) : (0, a.jsx)("p", {
                            id: "no-results",
                            children: "No results"
                        })]
                    })]
                })
            }
        },
        10633: function(t, n, e) {
            "use strict";
            e.d(n, {
                $: function() {
                    return k
                }
            });
            var o = e(26042),
                i = e(69396),
                r = e(29815),
                s = e(85893),
                a = e(67294),
                c = e(11163),
                l = e(31616),
                u = e(16626),
                h = e(7178),
                d = e(54341),
                p = e(37888),
                f = e(36425),
                v = e(7297);

            function m() {
                var t = (0, v.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n\tcursor: pointer;\n"]);
                return m = function() {
                    return t
                }, t
            }

            function g() {
                var t = (0, c.useRouter)(),
                    n = t.query.hideForks,
                    e = !n || "string" !== typeof n || "true" !== n;
                return (0, s.jsxs)(y, {
                    children: [(0, s.jsx)(u.Sk, {
                        type: "checkbox",
                        value: "hideForks",
                        checked: !e,
                        onChange: function() {
                            t.push({
                                pathname: t.pathname,
                                query: (0, i.Z)((0, o.Z)({}, t.query), {
                                    hideForks: e
                                })
                            }, void 0, {
                                shallow: !0
                            })
                        }
                    }), (0, s.jsx)("span", {
                        children: "Hide Forked Protocols"
                    })]
                })
            }
            var y = e(73324).default.label.withConfig({
                    componentId: "sc-e9e9a8c6-0"
                })(m()),
                b = e(82274),
                x = e(17882);

            function k(t) {
                var n = t.title,
                    e = t.name,
                    v = t.header,
                    m = t.protocols,
                    y = t.chainList,
                    k = t.forkedList,
                    w = (0, c.useRouter)().query,
                    j = w.chain,
                    C = w.hideForks,
                    O = !(!C || "string" !== typeof C || "true" !== C),
                    Z = (0, a.useMemo)((function() {
                        var t, n, e = (n = y, (t = j) ? "string" === typeof t ? "All" === t ? (0, r.Z)(n) : "None" === t ? [] : [t] : (0, r.Z)(t) : (0, r.Z)(n)),
                            s = e.map((function(t) {
                                return t.toLowerCase()
                            })),
                            a = m.filter((function(t) {
                                var n = !0;
                                return O && k && (n = !k[t.name]), t.chains.forEach((function(t) {
                                    n && (n = s.includes(t.toLowerCase()))
                                })), n
                            })).map((function(t) {
                                var n = 0,
                                    e = null,
                                    r = null,
                                    a = null,
                                    c = {};
                                return t.chains.forEach((function(o) {
                                    if (s.includes(o.toLowerCase()))
                                        for (var i in t.chainTvls) {
                                            var l, u = i.startsWith("".concat(o, "-")) ? null === (l = i.split("-")[1]) || void 0 === l ? void 0 : l.toLowerCase() : i.toLowerCase();
                                            if (s.includes(u) && o.toLowerCase() === u) {
                                                var h = t.chainTvls[i];
                                                if (i.startsWith("".concat(o, "-"))) {
                                                    var d = i.split("-")[1];
                                                    c[d] = (c[d] || 0) + h
                                                } else h.tvl && (n = (n || 0) + h.tvl), h.tvlPrevDay && (e = (e || 0) + h.tvlPrevDay), h.tvlPrevWeek && (r = (r || 0) + h.tvlPrevWeek), h.tvlPrevMonth && (a = (a || 0) + h.tvlPrevMonth)
                                            }
                                        }
                                })), (0, i.Z)((0, o.Z)({}, t), {
                                    tvl: n,
                                    tvlPrevDay: e,
                                    tvlPrevWeek: r,
                                    tvlPrevMonth: a,
                                    change_1d: (0, x.Yu)(n, e),
                                    change_7d: (0, x.Yu)(n, r),
                                    change_1m: (0, x.Yu)(n, a),
                                    listedAt: t.listedAt
                                })
                            }));
                        return {
                            data: a,
                            selectedChains: e
                        }
                    }), [m, j, y, k, O]),
                    S = Z.selectedChains,
                    E = Z.data,
                    P = (0, b.SE)(E),
                    M = (0, c.useRouter)().pathname;
                return (0, s.jsxs)(l.Z, {
                    title: n,
                    defaultSEO: !0,
                    children: [(0, s.jsx)(d.Z, {
                        step: {
                            category: "Home",
                            name: e
                        }
                    }), (0, s.jsxs)(p.ok, {
                        children: [(0, s.jsx)(p.xD, {
                            children: v
                        }), (0, s.jsx)(p.dm, {
                            children: (0, s.jsx)(f.P, {
                                chainList: y,
                                selectedChains: S,
                                pathname: M
                            })
                        }), k && (0, s.jsx)(g, {})]
                    }), P.length > 0 ? (0, s.jsx)(h.ud, {
                        data: P
                    }) : (0, s.jsx)(u.s_, {
                        as: "p",
                        style: {
                            margin: 0,
                            textAlign: "center"
                        },
                        children: "Couldn't find any protocols for these filters"
                    })]
                })
            }
        },
        14137: function(t, n, e) {
            "use strict";
            e.d(n, {
                _: function() {
                    return f
                }
            });
            var o = e(26042),
                i = e(69396),
                r = e(29815),
                s = e(11163),
                a = e(67294),
                c = e(68141),
                l = e(17882),
                u = e(76489),
                h = e(23046),
                d = [{
                    name: "Non-EVM",
                    route: "/chains/Non-EVM",
                    logo: h.Z.src
                }, {
                    name: "EVM",
                    route: "/chains/EVM",
                    logo: h.Z.src
                }, {
                    name: "Rollup",
                    route: "/chains/Rollup",
                    logo: h.Z.src
                }, {
                    name: "Cosmos",
                    route: "/chains/Cosmos",
                    logo: h.Z.src
                }, {
                    name: "Parachain",
                    route: "/chains/Parachain",
                    logo: h.Z.src
                }, {
                    name: "Chains - Polkadot",
                    route: "/chains/Polkadot",
                    logo: (0, l.jG)("polkadot")
                }, {
                    name: "Chains - Kusama",
                    route: "/chains/Kusama",
                    logo: (0, l.jG)("kusama")
                }],
                p = function(t) {
                    return "-" !== t.symbol && t.symbol ? "".concat(t.name, " (").concat(t.symbol, ")") : t.name
                };

            function f(t) {
                var n = t.includedSets,
                    e = void 0 === n ? Object.values(u.O) : n,
                    h = t.customPath,
                    f = (0, c.tH)(),
                    v = f.data,
                    m = f.loading,
                    g = (0, s.useRouter)().pathname,
                    y = (0, a.useMemo)((function() {
                        var t, n, s, a, c = null === e || void 0 === e ? void 0 : e.includes(u.O.CHAINS),
                            f = h || function(t) {
                                return "/chain/".concat(t)
                            },
                            m = c && null !== (s = null === v || void 0 === v || null === (t = v.chains) || void 0 === t ? void 0 : t.map((function(t) {
                                return {
                                    logo: (0, l.jG)(t),
                                    route: f(t),
                                    name: t
                                }
                            }))) && void 0 !== s ? s : [],
                            y = null === e || void 0 === e ? void 0 : e.includes(u.O.PROTOCOLS),
                            b = h || function(t) {
                                return "/protocol/".concat((0, l.R5)(t))
                            },
                            x = y && null !== (a = null === v || void 0 === v || null === (n = v.protocols) || void 0 === n ? void 0 : n.map((function(t) {
                                return (0, i.Z)((0, o.Z)({}, t), {
                                    name: p(t),
                                    symbol: t.symbol,
                                    logo: (0, l.cT)(t.name),
                                    route: b(t.name)
                                })
                            }))) && void 0 !== a ? a : [],
                            k = g.startsWith("/protocol") ? (0, r.Z)(x).concat((0, r.Z)(m)) : (0, r.Z)(m).concat((0, r.Z)(x));
                        if (null === e || void 0 === e ? void 0 : e.includes(u.O.GROUPED_CHAINS)) {
                            var w, j = d;
                            h && (j = d.map((function(t) {
                                return (0, i.Z)((0, o.Z)({}, t), {
                                    route: h(t.name)
                                })
                            }))), (w = k).push.apply(w, (0, r.Z)(j))
                        }
                        return k
                    }), [v, g, h, e]);
                return {
                    data: y,
                    loading: m
                }
            }
        },
        54341: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return T
                }
            });
            var o = e(26042),
                i = e(69396),
                r = e(85893),
                s = e(11163),
                a = e(20590),
                c = e(76489),
                l = e(86220),
                u = e(99534),
                h = e(828),
                d = e(7297),
                p = e(73324),
                f = e(18033),
                v = e(39377),
                m = e(34029),
                g = e(16626),
                y = e(3877),
                b = e(22114),
                x = e(45214),
                k = e(63947);

            function w() {
                var t = (0, d.Z)(["\n\tdisplay: none;\n\tgap: 8px;\n\talign-items: center;\n\tmargin-left: auto;\n\n\t@media screen and (min-width: ", ") and (max-width: ", ") {\n\t\tdisplay: flex;\n\t\tpadding: 0 4px;\n\t}\n"]);
                return w = function() {
                    return t
                }, t
            }

            function j() {
                var t = (0, d.Z)(["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\topacity: 0.8;\n\twhite-space: nowrap;\n"]);
                return j = function() {
                    return t
                }, t
            }

            function C() {
                var t = (0, d.Z)(["\n\tbackground: ", ";\n"]);
                return C = function() {
                    return t
                }, t
            }
            var O = p.default.div.withConfig({
                    componentId: "sc-3dbe61dc-0"
                })(w(), (function(t) {
                    return t.theme.bpLg
                }), (function(t) {
                    return t.theme.bp2Xl
                })),
                Z = (0, p.default)(f.n).withConfig({
                    componentId: "sc-3dbe61dc-1"
                })(j(), (function(t) {
                    return t.theme.text1
                })),
                S = (0, p.default)(b.Ph).withConfig({
                    componentId: "sc-3dbe61dc-2"
                })(C(), (function(t) {
                    return "dark" === t.theme.mode ? "#000" : "#f5f5f5"
                }));

            function E(t) {
                var n, e;
                return 0 === t.length ? "No option selected" : 1 === t.length ? null !== (e = null === (n = y.i.find((function(n) {
                    return n.key === t[0]
                }))) || void 0 === n ? void 0 : n.name) && void 0 !== e ? e : t[0] : "".concat(t.length, " options selected")
            }

            function P(t) {
                var n = t.options,
                    e = (0, u.Z)(t, ["options"]),
                    s = (0, x.Q)({
                        sameWidth: !0
                    }),
                    a = (0, h.Z)((0, k.eG)(), 1)[0],
                    c = n || y.i;
                return (0, r.jsxs)(O, (0, i.Z)((0, o.Z)({}, e), {
                    children: [(0, r.jsx)(Z, {
                        state: s,
                        children: "INCLUDE IN TVL: "
                    }), (0, r.jsxs)(S, {
                        state: s,
                        children: [(0, r.jsx)("span", {
                            children: E(s.value)
                        }), (0, r.jsx)(v.n, {})]
                    }), s.mounted && (0, r.jsx)(b.vA, {
                        state: s,
                        modal: !a,
                        children: c.map((function(t) {
                            var n = t.key,
                                e = t.name,
                                o = t.help;
                            return (0, r.jsxs)(b.Ql, {
                                value: n,
                                children: [o ? (0, r.jsx)(m.Z, {
                                    title: e,
                                    text: o
                                }) : e, (0, r.jsx)(g.XZ, {
                                    checked: s.value.includes(n)
                                })]
                            }, n)
                        }))
                    })]
                }))
            }
            var M = e(14137);

            function T(t) {
                var n = t.includedSets,
                    e = void 0 === n ? Object.values(c.O) : n,
                    s = t.customPath,
                    l = t.options,
                    u = (0, M._)({
                        includedSets: e,
                        customPath: s
                    }),
                    h = u.data,
                    d = u.loading;
                return (0, r.jsx)(a.W, (0, i.Z)((0, o.Z)({}, t), {
                    data: h,
                    loading: d,
                    filters: (0, r.jsx)(I, {
                        options: l
                    })
                }))
            }
            var I = function(t) {
                var n, e = t.options;
                return !(null === (n = (0, s.useRouter)().pathname) || void 0 === n ? void 0 : n.includes("/protocol/")) || e && 0 !== e.length ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.Z4, {
                        options: e
                    }), (0, r.jsx)(P, {
                        options: e
                    })]
                }) : null
            }
        },
        76489: function(t, n, e) {
            "use strict";
            var o;
            e.d(n, {
                    O: function() {
                        return o
                    }
                }),
                function(t) {
                    t.PROTOCOLS = "protocols", t.CHAINS = "chains", t.GROUPED_CHAINS = "grouped_chains"
                }(o || (o = {}))
        },
        10980: function(t, n, e) {
            "use strict";
            var o = e(67294),
                i = e(45697),
                r = e.n(i);

            function s() {
                return s = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function a(t, n) {
                if (null == t) return {};
                var e, o, i = function(t, n) {
                    if (null == t) return {};
                    var e, o, i = {},
                        r = Object.keys(t);
                    for (o = 0; o < r.length; o++) e = r[o], n.indexOf(e) >= 0 || (i[e] = t[e]);
                    return i
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < r.length; o++) e = r[o], n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
                }
                return i
            }
            var c = (0, o.forwardRef)((function(t, n) {
                var e = t.color,
                    i = void 0 === e ? "currentColor" : e,
                    r = t.size,
                    c = void 0 === r ? 24 : r,
                    l = a(t, ["color", "size"]);
                return o.createElement("svg", s({
                    ref: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: i,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, l), o.createElement("path", {
                    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                }))
            }));
            c.propTypes = {
                color: r().string,
                size: r().oneOfType([r().string, r().number])
            }, c.displayName = "Bookmark", n.Z = c
        },
        27434: function(t, n, e) {
            "use strict";
            var o = e(67294),
                i = e(45697),
                r = e.n(i);

            function s() {
                return s = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function a(t, n) {
                if (null == t) return {};
                var e, o, i = function(t, n) {
                    if (null == t) return {};
                    var e, o, i = {},
                        r = Object.keys(t);
                    for (o = 0; o < r.length; o++) e = r[o], n.indexOf(e) >= 0 || (i[e] = t[e]);
                    return i
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < r.length; o++) e = r[o], n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
                }
                return i
            }
            var c = (0, o.forwardRef)((function(t, n) {
                var e = t.color,
                    i = void 0 === e ? "currentColor" : e,
                    r = t.size,
                    c = void 0 === r ? 24 : r,
                    l = a(t, ["color", "size"]);
                return o.createElement("svg", s({
                    ref: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: i,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, l), o.createElement("polyline", {
                    points: "6 9 12 15 18 9"
                }))
            }));
            c.propTypes = {
                color: r().string,
                size: r().oneOfType([r().string, r().number])
            }, c.displayName = "ChevronDown", n.Z = c
        },
        80628: function(t, n, e) {
            "use strict";
            var o = e(67294),
                i = e(45697),
                r = e.n(i);

            function s() {
                return s = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function a(t, n) {
                if (null == t) return {};
                var e, o, i = function(t, n) {
                    if (null == t) return {};
                    var e, o, i = {},
                        r = Object.keys(t);
                    for (o = 0; o < r.length; o++) e = r[o], n.indexOf(e) >= 0 || (i[e] = t[e]);
                    return i
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < r.length; o++) e = r[o], n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
                }
                return i
            }
            var c = (0, o.forwardRef)((function(t, n) {
                var e = t.color,
                    i = void 0 === e ? "currentColor" : e,
                    r = t.size,
                    c = void 0 === r ? 24 : r,
                    l = a(t, ["color", "size"]);
                return o.createElement("svg", s({
                    ref: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: i,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, l), o.createElement("polyline", {
                    points: "9 18 15 12 9 6"
                }))
            }));
            c.propTypes = {
                color: r().string,
                size: r().oneOfType([r().string, r().number])
            }, c.displayName = "ChevronRight", n.Z = c
        },
        83231: function(t, n, e) {
            var o = e(67294);

            function i() {
                return (i = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    }
                    return t
                }).apply(this, arguments)
            }
            var r = o.createElement("svg", {
                    viewBox: "-2 -5 14 20",
                    height: "100%",
                    width: "100%",
                    style: {
                        position: "absolute",
                        top: 0
                    }
                }, o.createElement("path", {
                    d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
                    fill: "#fff",
                    fillRule: "evenodd"
                })),
                s = o.createElement("svg", {
                    height: "100%",
                    width: "100%",
                    viewBox: "-2 -5 17 21",
                    style: {
                        position: "absolute",
                        top: 0
                    }
                }, o.createElement("path", {
                    d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
                    fill: "#fff",
                    fillRule: "evenodd"
                }));

            function a(t) {
                if (7 === t.length) return t;
                for (var n = "#", e = 1; e < 4; e += 1) n += t[e] + t[e];
                return n
            }

            function c(t, n, e, o, i) {
                return function(t, n, e, o, i) {
                    var r = (t - e) / (n - e);
                    if (0 === r) return o;
                    if (1 === r) return i;
                    for (var s = "#", a = 1; a < 6; a += 2) {
                        var c = parseInt(o.substr(a, 2), 16),
                            l = parseInt(i.substr(a, 2), 16),
                            u = Math.round((1 - r) * c + r * l).toString(16);
                        1 === u.length && (u = "0" + u), s += u
                    }
                    return s
                }(t, n, e, a(o), a(i))
            }
            var l = function(t) {
                function n(n) {
                    t.call(this, n);
                    var e = n.height,
                        o = n.width,
                        i = n.checked;
                    this.t = n.handleDiameter || e - 2, this.i = Math.max(o - e, o - (e + this.t) / 2), this.o = Math.max(0, (e - this.t) / 2), this.state = {
                        h: i ? this.i : this.o
                    }, this.l = 0, this.u = 0, this.p = this.p.bind(this), this.v = this.v.bind(this), this.g = this.g.bind(this), this.k = this.k.bind(this), this.M = this.M.bind(this), this.m = this.m.bind(this), this.T = this.T.bind(this), this.$ = this.$.bind(this), this.C = this.C.bind(this), this.D = this.D.bind(this), this.O = this.O.bind(this), this.S = this.S.bind(this)
                }
                return t && (n.__proto__ = t), (n.prototype = Object.create(t && t.prototype)).constructor = n, n.prototype.componentDidMount = function() {
                    this.W = !0
                }, n.prototype.componentDidUpdate = function(t) {
                    t.checked !== this.props.checked && this.setState({
                        h: this.props.checked ? this.i : this.o
                    })
                }, n.prototype.componentWillUnmount = function() {
                    this.W = !1
                }, n.prototype.I = function(t) {
                    this.H.focus(), this.setState({
                        R: t,
                        j: !0,
                        B: Date.now()
                    })
                }, n.prototype.L = function(t) {
                    var n = this.state,
                        e = n.R,
                        o = n.h,
                        i = (this.props.checked ? this.i : this.o) + t - e;
                    n.N || t === e || this.setState({
                        N: !0
                    });
                    var r = Math.min(this.i, Math.max(this.o, i));
                    r !== o && this.setState({
                        h: r
                    })
                }, n.prototype.U = function(t) {
                    var n = this.state,
                        e = n.h,
                        o = n.N,
                        i = n.B,
                        r = this.props.checked,
                        s = (this.i + this.o) / 2;
                    this.setState({
                        h: this.props.checked ? this.i : this.o
                    });
                    var a = Date.now() - i;
                    (!o || a < 250 || r && e <= s || !r && e >= s) && this.A(t), this.W && this.setState({
                        N: !1,
                        j: !1
                    }), this.l = Date.now()
                }, n.prototype.p = function(t) {
                    t.preventDefault(), "number" == typeof t.button && 0 !== t.button || (this.I(t.clientX), window.addEventListener("mousemove", this.v), window.addEventListener("mouseup", this.g))
                }, n.prototype.v = function(t) {
                    t.preventDefault(), this.L(t.clientX)
                }, n.prototype.g = function(t) {
                    this.U(t), window.removeEventListener("mousemove", this.v), window.removeEventListener("mouseup", this.g)
                }, n.prototype.k = function(t) {
                    this.X = null, this.I(t.touches[0].clientX)
                }, n.prototype.M = function(t) {
                    this.L(t.touches[0].clientX)
                }, n.prototype.m = function(t) {
                    t.preventDefault(), this.U(t)
                }, n.prototype.$ = function(t) {
                    Date.now() - this.l > 50 && (this.A(t), Date.now() - this.u > 50 && this.W && this.setState({
                        j: !1
                    }))
                }, n.prototype.C = function() {
                    this.u = Date.now()
                }, n.prototype.D = function() {
                    this.setState({
                        j: !0
                    })
                }, n.prototype.O = function() {
                    this.setState({
                        j: !1
                    })
                }, n.prototype.S = function(t) {
                    this.H = t
                }, n.prototype.T = function(t) {
                    t.preventDefault(), this.H.focus(), this.A(t), this.W && this.setState({
                        j: !1
                    })
                }, n.prototype.A = function(t) {
                    var n = this.props;
                    (0, n.onChange)(!n.checked, t, n.id)
                }, n.prototype.render = function() {
                    var t = this.props,
                        n = t.checked,
                        e = t.disabled,
                        r = t.className,
                        s = t.offColor,
                        a = t.onColor,
                        l = t.offHandleColor,
                        u = t.onHandleColor,
                        h = t.checkedIcon,
                        d = t.uncheckedIcon,
                        p = t.checkedHandleIcon,
                        f = t.uncheckedHandleIcon,
                        v = t.boxShadow,
                        m = t.activeBoxShadow,
                        g = t.height,
                        y = t.width,
                        b = t.borderRadius,
                        x = function(t, n) {
                            var e = {};
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && -1 === n.indexOf(o) && (e[o] = t[o]);
                            return e
                        }(t, ["checked", "disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "checkedHandleIcon", "uncheckedHandleIcon", "boxShadow", "activeBoxShadow", "height", "width", "borderRadius", "handleDiameter"]),
                        k = this.state,
                        w = k.h,
                        j = k.N,
                        C = k.j,
                        O = {
                            position: "relative",
                            display: "inline-block",
                            textAlign: "left",
                            opacity: e ? .5 : 1,
                            direction: "ltr",
                            borderRadius: g / 2,
                            WebkitTransition: "opacity 0.25s",
                            MozTransition: "opacity 0.25s",
                            transition: "opacity 0.25s",
                            touchAction: "none",
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                            userSelect: "none"
                        },
                        Z = {
                            height: g,
                            width: y,
                            margin: Math.max(0, (this.t - g) / 2),
                            position: "relative",
                            background: c(w, this.i, this.o, s, a),
                            borderRadius: "number" == typeof b ? b : g / 2,
                            cursor: e ? "default" : "pointer",
                            WebkitTransition: j ? null : "background 0.25s",
                            MozTransition: j ? null : "background 0.25s",
                            transition: j ? null : "background 0.25s"
                        },
                        S = {
                            height: g,
                            width: Math.min(1.5 * g, y - (this.t + g) / 2 + 1),
                            position: "relative",
                            opacity: (w - this.o) / (this.i - this.o),
                            pointerEvents: "none",
                            WebkitTransition: j ? null : "opacity 0.25s",
                            MozTransition: j ? null : "opacity 0.25s",
                            transition: j ? null : "opacity 0.25s"
                        },
                        E = {
                            height: g,
                            width: Math.min(1.5 * g, y - (this.t + g) / 2 + 1),
                            position: "absolute",
                            opacity: 1 - (w - this.o) / (this.i - this.o),
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            WebkitTransition: j ? null : "opacity 0.25s",
                            MozTransition: j ? null : "opacity 0.25s",
                            transition: j ? null : "opacity 0.25s"
                        },
                        P = {
                            height: this.t,
                            width: this.t,
                            background: c(w, this.i, this.o, l, u),
                            display: "inline-block",
                            cursor: e ? "default" : "pointer",
                            borderRadius: "number" == typeof b ? b - 1 : "50%",
                            position: "absolute",
                            transform: "translateX(" + w + "px)",
                            top: Math.max(0, (g - this.t) / 2),
                            outline: 0,
                            boxShadow: C ? m : v,
                            border: 0,
                            WebkitTransition: j ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
                            MozTransition: j ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
                            transition: j ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
                        },
                        M = {
                            height: this.t,
                            width: this.t,
                            opacity: Math.max(2 * (1 - (w - this.o) / (this.i - this.o) - .5), 0),
                            position: "absolute",
                            left: 0,
                            top: 0,
                            pointerEvents: "none",
                            WebkitTransition: j ? null : "opacity 0.25s",
                            MozTransition: j ? null : "opacity 0.25s",
                            transition: j ? null : "opacity 0.25s"
                        },
                        T = {
                            height: this.t,
                            width: this.t,
                            opacity: Math.max(2 * ((w - this.o) / (this.i - this.o) - .5), 0),
                            position: "absolute",
                            left: 0,
                            top: 0,
                            pointerEvents: "none",
                            WebkitTransition: j ? null : "opacity 0.25s",
                            MozTransition: j ? null : "opacity 0.25s",
                            transition: j ? null : "opacity 0.25s"
                        };
                    return o.createElement("div", {
                        className: r,
                        style: O
                    }, o.createElement("div", {
                        className: "react-switch-bg",
                        style: Z,
                        onClick: e ? null : this.T,
                        onMouseDown: function(t) {
                            return t.preventDefault()
                        }
                    }, h && o.createElement("div", {
                        style: S
                    }, h), d && o.createElement("div", {
                        style: E
                    }, d)), o.createElement("div", {
                        className: "react-switch-handle",
                        style: P,
                        onClick: function(t) {
                            return t.preventDefault()
                        },
                        onMouseDown: e ? null : this.p,
                        onTouchStart: e ? null : this.k,
                        onTouchMove: e ? null : this.M,
                        onTouchEnd: e ? null : this.m,
                        onTouchCancel: e ? null : this.O
                    }, f && o.createElement("div", {
                        style: M
                    }, f), p && o.createElement("div", {
                        style: T
                    }, p)), o.createElement("input", i({}, {
                        type: "checkbox",
                        role: "switch",
                        "aria-checked": n,
                        checked: n,
                        disabled: e,
                        style: {
                            border: 0,
                            clip: "rect(0 0 0 0)",
                            height: 1,
                            margin: -1,
                            overflow: "hidden",
                            padding: 0,
                            position: "absolute",
                            width: 1
                        }
                    }, x, {
                        ref: this.S,
                        onFocus: this.D,
                        onBlur: this.O,
                        onKeyUp: this.C,
                        onChange: this.$
                    })))
                }, n
            }(o.Component);
            l.defaultProps = {
                disabled: !1,
                offColor: "#888",
                onColor: "#080",
                offHandleColor: "#fff",
                onHandleColor: "#fff",
                uncheckedIcon: r,
                checkedIcon: s,
                boxShadow: null,
                activeBoxShadow: "0 0 2px 3px #3bf",
                height: 28,
                width: 56
            }, n.default = l
        },
        59936: function(t, n, e) {
            t.exports = e(83231)
        }
    }
]);