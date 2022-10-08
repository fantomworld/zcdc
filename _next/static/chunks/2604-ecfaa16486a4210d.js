"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2604], {
        23046: function(t, n) {
            n.Z = {
                src: "/_next/static/media/placeholder.65ae8b03.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEX///7979n/0zf88KHxwjP/vxz4zo361zDllBf26NnppTDutUP31IL5zlv2qA/uwYD98ubyvGbz3cT227P8rxbn0j7s5ZnVtzrdxTnQu17OrjPczXH4z17/54+D2s+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVQImQXBhQHAIBAAsUMfLVDX/ddsAqoY8yno9drN83a8Prbz1p7hRETcoE3WWj01Yq45rSFCcSGkGVB+icAPZJACgakiD2cAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        20590: function(t, n, e) {
            e.d(n, {
                W: function() {
                    return w
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(7297),
                u = e(85893),
                c = e(67294),
                s = e(41664),
                l = e.n(s),
                d = e(73324),
                f = e(45169),
                h = e(49070),
                p = e(74646),
                m = e(9178);

            function x() {
                var t = (0, a.Z)(["\n\tdisplay: none;\n\tflex-direction: column;\n\tposition: relative;\n\n\t@media screen and (min-width: ", ") {\n\t\tdisplay: flex;\n\t\tborder-radius: 12px;\n\t\tbox-shadow: ", ";\n\t}\n"]);
                return x = function() {
                    return t
                }, t
            }

            function g() {
                var t = (0, a.Z)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 8px;\n\tborder-bottom-left-radius: 12px;\n\tborder-bottom-right-radius: 12px;\n\tbackground-color: ", ";\n\t--step-color: ", ";\n\n\t& > p {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t\tpadding: 16px;\n\n\t\t& > * {\n\t\t\tcolor: ", ";\n\t\t\tfont-size: 0.875rem;\n\t\t}\n\n\t\tsvg {\n\t\t\tflex-shrink: 0;\n\t\t}\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-top: 0;\n\t}\n"]);
                return g = function() {
                    return t
                }, t
            }
            var b = d.default.div.withConfig({
                    componentId: "sc-3894ca7f-0"
                })(x(), (function(t) {
                    return t.theme.bpLg
                }), (function(t) {
                    return t.theme.shadowSm
                })),
                v = d.default.div.withConfig({
                    componentId: "sc-3894ca7f-1"
                })(g(), (function(t) {
                    return "dark" === t.theme.mode ? "rgba(0, 0, 0, 0.6)" : "rgba(246, 246, 246, 0.6)"
                }), (function(t) {
                    return "dark" === t.theme.mode ? "#7e96ff" : "#475590"
                }), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.bpLg
                }), (function(t) {
                    return t.theme.divider
                })),
                w = function(t) {
                    var n = t.data,
                        e = t.loading,
                        a = void 0 !== e && e,
                        s = t.step,
                        l = t.onSearchTermChange,
                        d = t.filters,
                        f = t.withValue,
                        x = t.placeholder,
                        g = void 0 === x ? "Search..." : x,
                        v = (0, i.Z)(t, ["data", "loading", "step", "onSearchTermChange", "filters", "withValue", "placeholder"]),
                        w = (0, h.q)({
                            gutter: 6,
                            sameWidth: !0,
                            list: n.map((function(t) {
                                return t.name
                            }))
                        }),
                        j = function(t) {
                            return t.items.find((function(n) {
                                return !n.disabled && n.id === t.activeId
                            }))
                        }(w),
                        Z = w.first();
                    return w.open && !j && Z && w.setActiveId(Z), c.useEffect((function() {
                        l && l(w.value)
                    }), [w.value, l]), f || w.mounted || !w.value || w.setValue(""), (0, u.jsxs)(b, (0, o.Z)((0, r.Z)({}, v), {
                        children: [(0, u.jsx)(m.I, {
                            state: w,
                            placeholder: g,
                            breadCrumbs: !!s,
                            withValue: !0
                        }), s && (0, u.jsx)(A, {
                            step: s,
                            filters: d
                        }), (0, u.jsx)(p.u, {
                            state: w,
                            data: n,
                            loading: a,
                            onItemClick: t.onItemClick
                        })]
                    }))
                },
                A = function(t) {
                    var n = t.step,
                        e = t.filters;
                    return (0, u.jsxs)(v, {
                        children: [(0, u.jsxs)("p", {
                            children: [(0, u.jsx)(l(), {
                                href: "/".concat(n.route || n.category.toLowerCase()),
                                prefetch: !1,
                                children: n.category
                            }), (0, u.jsx)(f.Z, {
                                size: 16
                            }), (0, u.jsx)("span", {
                                style: {
                                    color: "var(--step-color)"
                                },
                                children: n.name
                            })]
                        }), !n.hideOptions && e && (0, u.jsx)(u.Fragment, {
                            children: e
                        })]
                    })
                }
        },
        9178: function(t, n, e) {
            e.d(n, {
                I: function() {
                    return x
                }
            });
            var r = e(26042),
                o = e(99534),
                i = e(7297),
                a = e(85893),
                u = e(95005),
                c = e(73324),
                s = e(78268),
                l = e(83206),
                d = e(67294);

            function f() {
                var t = (0, i.Z)(["\n\tpadding: 14px 16px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: none;\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t\tfont-size: 1rem;\n\t}\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"]);
                return f = function() {
                    return t
                }, t
            }

            function h() {
                var t = (0, i.Z)(["\n\tposition: absolute;\n\ttop: 22px;\n\tright: 20px;\n\tz-index: 1;\n\n\t& > svg {\n\t\tcolor: ", ";\n\t\theight: 20px;\n\t\twidth: 20px;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\ttop: 14px;\n\t\tright: 16px;\n\t}\n"]);
                return h = function() {
                    return t
                }, t
            }
            var p = (0, c.default)(u.h).withConfig({
                    componentId: "sc-b9a8b276-0"
                })(f(), (function(t) {
                    return t.theme.bg6
                }), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.text3
                }), (function(t) {
                    return "1px solid " + t.theme.text4
                }), (function(t) {
                    return t.theme.bpLg
                }), (function(t) {
                    return t.theme.divider
                })),
                m = c.default.button.withConfig({
                    componentId: "sc-b9a8b276-1"
                })(h(), (function(t) {
                    return t.theme.text3
                }), (function(t) {
                    return t.theme.bpLg
                }));

            function x(t) {
                var n = t.state,
                    e = t.placeholder,
                    i = t.breadCrumbs,
                    u = t.withValue,
                    c = (0, o.Z)(t, ["state", "placeholder", "breadCrumbs", "withValue"]),
                    f = d.useCallback((function() {
                        n.mounted && u && n.setValue(""), n.toggle()
                    }), [n.mounted, u, n]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(p, (0, r.Z)({
                        state: n,
                        placeholder: e,
                        style: i ? {
                            borderBottomLeftRadius: "0",
                            borderBottomRightRadius: 0
                        } : {},
                        autoSelect: !0
                    }, c)), (0, a.jsx)(m, {
                        onClick: f,
                        children: n.mounted ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "visually-hidden",
                                children: "Close Search"
                            }), (0, a.jsx)(s.Z, {})]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "visually-hidden",
                                children: "Open Search"
                            }), (0, a.jsx)(l.Z, {})]
                        })
                    })]
                })
            }
        },
        74646: function(t, n, e) {
            e.d(n, {
                u: function() {
                    return j
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(7297),
                u = e(29815),
                c = e(85893),
                s = e(11163),
                l = e(73324),
                d = e(53839),
                f = e(73469);

            function h() {
                var t = (0, a.Z)(["\n\tpadding: 12px 14px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tfont-size: 0.85rem;\n\tcolor: ", ";\n\n\t& > * {\n\t\tmargin-right: 6px;\n\t}\n\n\t:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: ", ";\n\t}\n\n\t&[data-active-item] {\n\t\tbackground-color: ", ";\n\t}\n"]);
                return h = function() {
                    return t
                }, t
            }
            var p = (0, l.default)(d.l).withConfig({
                    componentId: "sc-5f8560be-0"
                })(h(), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.bg2
                }), (function(t) {
                    return t.theme.bg2
                })),
                m = function(t) {
                    var n, e = t.index,
                        r = t.style,
                        o = t.data,
                        i = o.searchData,
                        a = o.options,
                        u = o.onItemClick,
                        l = a[e],
                        d = i.find((function(t) {
                            return t.name === l
                        })),
                        h = (0, s.useRouter)();
                    return (0, c.jsxs)(p, {
                        value: l,
                        onClick: function() {
                            u ? u(d) : h.push(d.route)
                        },
                        style: r,
                        focusOnHover: !0,
                        children: [(null === d || void 0 === d ? void 0 : d.logo) && (0, c.jsx)(f.Z, {
                            logo: null === d || void 0 === d ? void 0 : d.logo,
                            external: (n = d.logo, null === n || void 0 === n ? void 0 : n.includes("http")),
                            skipApiRoute: h.pathname.includes("/yield")
                        }), (0, c.jsx)("span", {
                            children: l
                        })]
                    }, l)
                },
                x = e(49821),
                g = e(41578);

            function b() {
                var t = (0, a.Z)(["\n\theight: 100%;\n\tmax-height: 320px;\n\toverflow-y: auto;\n\tbackground: ", ";\n\tborder-bottom-left-radius: 12px;\n\tborder-bottom-right-radius: 12px;\n\toutline: ", ";\n\tbox-shadow: ", ";\n\ttransform: translate(0px, -5px);\n\tz-index: 10;\n"]);
                return b = function() {
                    return t
                }, t
            }

            function v() {
                var t = (0, a.Z)(["\n\tpadding: 24px 12px;\n\tcolor: ", ";\n\ttext-align: center;\n"]);
                return v = function() {
                    return t
                }, t
            }
            var w = (0, l.default)(g.S).withConfig({
                    componentId: "sc-d33c0cd2-0"
                })(b(), (function(t) {
                    return t.theme.bg6
                }), (function(t) {
                    return "1px solid " + t.theme.text5
                }), (function(t) {
                    return t.theme.shadowLg
                })),
                A = l.default.div.withConfig({
                    componentId: "sc-d33c0cd2-1"
                })(v(), (function(t) {
                    return t.theme.text1
                }));

            function j(t) {
                var n = t.state,
                    e = t.data,
                    a = t.loading,
                    u = t.onItemClick,
                    s = (0, i.Z)(t, ["state", "data", "loading", "onItemClick"]);
                return (0, c.jsx)(w, (0, o.Z)((0, r.Z)({
                    state: n
                }, s), {
                    children: a || !n.mounted ? (0, c.jsx)(A, {
                        children: "Loading..."
                    }) : n.matches.length ? (0, c.jsx)(x.t7, {
                        height: 50 * n.matches.length > 240 ? 240 : 50 * n.matches.length,
                        width: "100%",
                        itemCount: n.matches.length,
                        itemSize: 50,
                        itemData: {
                            searchData: e,
                            options: n.value.length > 2 ? Z(n.matches) : n.matches,
                            onItemClick: u
                        },
                        children: m
                    }) : (0, c.jsx)(A, {
                        children: "No results found"
                    })
                }))
            }
            var Z = function(t) {
                var n = t.reduce((function(t, n) {
                        return n.startsWith("Show all") ? t.pools.push(n) : t.tokens.push(n), t
                    }), {
                        tokens: [],
                        pools: []
                    }),
                    e = n.pools,
                    r = n.tokens;
                return (0, u.Z)(e).concat((0, u.Z)(r))
            }
        },
        73469: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return g
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(828),
                u = e(7297),
                c = e(85893),
                s = e(67294),
                l = e(73324),
                d = e(61608),
                f = e.n(d),
                h = e(23046);

            function p() {
                var t = (0, u.Z)(["\n\tdisplay: inline-block;\n\tobject-fit: cover;\n\taspect-ratio: 1;\n\tbackground: ", ";\n\tborder-radius: 50%;\n\tflex-shrink: 0;\n"]);
                return p = function() {
                    return t
                }, t
            }
            var m = {},
                x = (0, l.default)(f()).withConfig({
                    componentId: "sc-f78f24-0"
                })(p(), (function(t) {
                    return t.theme.bg3
                }));

            function g(t) {
                var n = t.logo,
                    e = void 0 === n ? null : n,
                    u = (t.external, t.size),
                    l = void 0 === u ? 24 : u,
                    d = t.style,
                    f = (t.skipApiRoute, t.id),
                    p = (0, i.Z)(t, ["logo", "external", "size", "style", "skipApiRoute", "id"]),
                    g = (0, a.Z)(s.useState(!1), 2),
                    b = g[0],
                    v = g[1],
                    w = b || !e || m[e] ? h.Z : e;
                return (0, c.jsx)(x, (0, o.Z)((0, r.Z)({}, p), {
                    alt: "",
                    src: w,
                    onError: function(t) {
                        t.preventDefault(), m[e] = !0, v(!0)
                    },
                    height: l,
                    width: l,
                    id: f,
                    style: d
                }))
            }
        },
        17650: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return w
                },
                u: function() {
                    return A
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(7297),
                u = e(85893),
                c = (e(67294), e(73324)),
                s = e(74184),
                l = e(40662),
                d = e(72526),
                f = e(41664),
                h = e.n(f);

            function p() {
                var t = (0, a.Z)(["\n\tfont-size: 0.85rem;\n\tpadding: 1rem;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px;\n\tfilter: ", ";\n\tmax-width: 228px;\n"]);
                return p = function() {
                    return t
                }, t
            }

            function m() {
                var t = (0, a.Z)(["\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tflex-shrink: 0;\n\n\ta {\n\t\tdisplay: flex;\n\t}\n"]);
                return m = function() {
                    return t
                }, t
            }

            function x() {
                var t = (0, a.Z)(["\n\tpadding: 12px;\n"]);
                return x = function() {
                    return t
                }, t
            }
            var g = (0, c.default)(s.u).withConfig({
                    componentId: "sc-c228c439-0"
                })(p(), (function(t) {
                    return "dark" === t.theme.mode ? "hsl(0, 0%, 100%)" : "hsl(204, 10%, 10%)"
                }), (function(t) {
                    return "dark" === t.theme.mode ? "hsl(204, 3%, 12%)" : "hsl(204, 20%, 100%)"
                }), (function(t) {
                    return "dark" === t.theme.mode ? "hsl(204, 3%, 32%)" : "hsl(204, 20%, 88%)"
                }), (function(t) {
                    return "dark" === t.theme.mode ? "drop-shadow(0 4px 6px rgba(0, 0, 0, 40%))" : "drop-shadow(0 4px 6px rgba(0, 0, 0, 15%))"
                })),
                b = (0, c.default)(l.e).withConfig({
                    componentId: "sc-c228c439-1"
                })(m()),
                v = (0, c.default)(g).withConfig({
                    componentId: "sc-c228c439-2"
                })(x());

            function w(t) {
                var n = t.content,
                    e = t.as,
                    a = t.href,
                    c = t.shallow,
                    s = t.onClick,
                    f = t.children,
                    p = (0, i.Z)(t, ["content", "as", "href", "shallow", "onClick", "children"]),
                    m = (0, d.K)();
                if (!n || "" === n) return (0, u.jsx)(u.Fragment, {
                    children: f
                });
                var x = (0, r.Z)({}, s && {
                    onClick: s
                });
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(l.e, (0, o.Z)((0, r.Z)({
                        state: m,
                        as: e || (a ? "div" : "button"),
                        className: "tooltip-trigger"
                    }, x), {
                        children: a ? (0, u.jsx)(h(), {
                            href: a,
                            shallow: c,
                            passHref: !0,
                            children: (0, u.jsx)("a", {
                                children: f
                            })
                        }) : f
                    })), (0, u.jsx)(g, (0, o.Z)((0, r.Z)({
                        state: m
                    }, p), {
                        children: n
                    }))]
                })
            }

            function A(t) {
                var n = t.content,
                    e = t.children,
                    a = (0, i.Z)(t, ["content", "children"]),
                    c = (0, d.K)();
                return n && "" !== n ? (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(b, {
                        state: c,
                        children: e
                    }), (0, u.jsx)(v, (0, o.Z)((0, r.Z)({
                        state: c
                    }, a), {
                        children: n
                    }))]
                }) : (0, u.jsx)(u.Fragment, {
                    children: e
                })
            }
        },
        8151: function(t, n, e) {
            e.d(n, {
                $2: function() {
                    return a
                },
                AC: function() {
                    return w
                },
                CQ: function() {
                    return C
                },
                DW: function() {
                    return h
                },
                E0: function() {
                    return x
                },
                Gt: function() {
                    return s
                },
                Nm: function() {
                    return f
                },
                Ny: function() {
                    return b
                },
                OT: function() {
                    return v
                },
                Pm: function() {
                    return u
                },
                RO: function() {
                    return A
                },
                WF: function() {
                    return r
                },
                Ze: function() {
                    return l
                },
                Zi: function() {
                    return o
                },
                a6: function() {
                    return i
                },
                bV: function() {
                    return g
                },
                bY: function() {
                    return j
                },
                cb: function() {
                    return m
                },
                eg: function() {
                    return p
                },
                mv: function() {
                    return k
                },
                rQ: function() {
                    return c
                },
                sp: function() {
                    return y
                },
                zt: function() {
                    return d
                },
                zv: function() {
                    return Z
                }
            });
            var r = "https://api.llama.fi/lite/charts",
                o = "https://api.llama.fi/lite/protocols2",
                i = "https://api.llama.fi/updatedProtocol",
                a = "https://api.llama.fi/config",
                u = "https://api.llama.fi/hourly",
                c = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/collection",
                s = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/collections",
                l = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/chart",
                d = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/chains",
                f = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/marketplaces",
                h = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/search",
                p = "https://stablecoins.llama.fi/stablecoins",
                m = "https://yields.llama.fi/pools",
                x = "https://yields.llama.fi/poolsEnriched",
                g = "https://yields.llama.fi/chart",
                b = "https://api.llama.fi/config/yields?a=1",
                v = "https://yields.llama.fi/chartLendBorrow",
                w = "https://defillama-datasets.s3.eu-central-1.amazonaws.com/liqs",
                A = "https://api.llama.fi/chains",
                j = "https://api.llama.fi/dexs",
                Z = "https://api.llama.fi/dex",
                k = "https://fees.llama.fi/fees",
                C = "https://api.llama.fi/raises",
                y = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=<PLACEHOLDER>"
        },
        50771: function(t, n, e) {
            e.d(n, {
                Kg: function() {
                    return o
                },
                Ti: function() {
                    return i
                },
                _i: function() {
                    return r
                }
            });
            var r = function(t, n) {
                    return fetch(t, n).then((function(t) {
                        return t.json()
                    }))
                },
                o = function(t) {
                    return Promise.all(t.map((function(t) {
                        return r(t)
                    })))
                },
                i = function(t, n, e, r, o) {
                    var i = o.retryCount;
                    i >= 3 || setTimeout((function() {
                        return r({
                            retryCount: i
                        })
                    }), 200)
                }
        }
    }
]);