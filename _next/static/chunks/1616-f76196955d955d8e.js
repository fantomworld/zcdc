"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1616], {
        62480: function(t, n, e) {
            e.d(n, {
                ZL: function() {
                    return b
                },
                ZP: function() {
                    return p
                },
                h4: function() {
                    return v
                },
                wD: function() {
                    return g
                }
            });
            var r = e(26042),
                o = e(828),
                i = e(7297),
                a = e(85893),
                c = (e(67294), e(73324)),
                l = e(1237),
                d = e(63872),
                u = e(53291);

            function m() {
                var t = (0, i.Z)(["\n\tcolor: ", ";\n"]);
                return m = function() {
                    return t
                }, t
            }

            function f() {
                var t = (0, i.Z)(["\n\tcolor: ", ";\n\tfont-size: 24px;\n\tfont-weight: 500;\n\tmargin: 0 0 -20px;\n"]);
                return f = function() {
                    return t
                }, t
            }

            function s() {
                var t = (0, i.Z)(["\n\tbody, #__next {\n\t\tbackground-color: ", ";\n\t}\n\n  #__next {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n    position: relative;\n    color: ", ";\n    isolation: isolate;\n\n    ", " {\n      flex-direction: row;\n    }\n  }\n\n  a, input, button, textarea, select {\n    &:focus-visible {\n      outline: 1px solid ", ";\n    }\n  }\n\n  .visually-hidden {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n  }\n\n\t.tooltip-trigger {\n\t\tcolor: ", ";\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 0;\n\n\t\t:focus-visible {\n\t\t\toutline-offset: 2px;\n\t\t}\n\t}\n\n\t.tooltip-trigger a {\n\t\tdisplay: flex;\n\t}\n"]);
                return s = function() {
                    return t
                }, t
            }

            function p(t) {
                var n = t.children,
                    e = (0, o.Z)((0, d.m$)(), 1)[0];
                return (0, a.jsx)(c.ThemeProvider, {
                    theme: h(e),
                    children: n
                })
            }
            var h = function(t) {
                    return {
                        mode: t ? "dark" : "light",
                        text1: t ? "#FAFAFA" : "#1F1F1F",
                        text2: t ? "#C3C5CB" : "#565A69",
                        text3: t ? "#6C7284" : "#888D9B",
                        text4: t ? "#565A69" : "#C3C5CB",
                        text5: t ? "#2C2F36" : "#EDEEF2",
                        white: "#FFFFFF",
                        bg1: t ? "#212429" : "#FAFAFA",
                        bg2: t ? "#2C2F36" : "#F7F8FA",
                        bg3: t ? "#40444F" : "#EDEEF2",
                        bg4: t ? "#565A69" : "#CED0D9",
                        bg5: t ? "#565A69" : "#888D9B",
                        bg6: t ? "#000" : "#FFFFFF",
                        bg7: t ? "rgba(7,14,15,0.7)" : "rgba(252,252,251,1)",
                        background: t ? "#22242A" : "#ffffff",
                        advancedBG: t ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.4)",
                        divider: t ? "rgba(43, 43, 43, 0.435)" : "rgba(43, 43, 43, 0.035)",
                        primary1: t ? "#2172E5" : "#445ed0",
                        red1: "#FF6871",
                        green1: "#27AE60",
                        link: "#2172E5",
                        blue: "#2f80ed",
                        shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                        shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                        shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                        bpSm: "".concat(u.sm, "rem"),
                        bpMed: "".concat(u.x, "rem"),
                        bpLg: "".concat(u.lg, "rem"),
                        bpXl: "".concat(u.xl, "rem"),
                        bp2Xl: "".concat(u._, "rem"),
                        maxSm: "@media screen and (max-width: ".concat(u.sm, "rem)"),
                        maxMed: "@media screen and (max-width: ".concat(u.x, "rem)"),
                        maxLg: "@media screen and (max-width: ".concat(u.lg, "rem)"),
                        maxXl: "@media screen and (max-width: ".concat(u.xl, "rem)"),
                        minSm: "@media screen and (min-width: ".concat(u.sm, "rem)"),
                        minMed: "@media screen and (min-width: ".concat(u.x, "rem)"),
                        minLg: "@media screen and (min-width: ".concat(u.lg, "rem)"),
                        minXl: "@media screen and (min-width: ".concat(u.xl, "rem)"),
                        min2Xl: "@media screen and (min-width: ".concat(u._, "rem)"),
                        breakpoints: ["".concat(u.sm, "rem"), "".concat(u.x, "rem"), "".concat(u.lg, "rem"), "".concat(u.xl, "rem")]
                    }
                },
                x = (0, c.default)(l.xv).withConfig({
                    componentId: "sc-8f0f10aa-0"
                })(m(), (function(t) {
                    var n = t.color;
                    return t.theme[n]
                })),
                g = {
                    heading: function(t) {
                        return (0, a.jsx)(x, (0, r.Z)({
                            fontWeight: 500,
                            fontSize: 16,
                            color: "text1"
                        }, t))
                    },
                    main: function(t) {
                        return (0, a.jsx)(x, (0, r.Z)({
                            fontWeight: 500,
                            fontSize: 14,
                            color: "text1"
                        }, t))
                    },
                    body: function(t) {
                        return (0, a.jsx)(x, (0, r.Z)({
                            fontWeight: 400,
                            fontSize: 14,
                            color: "text1"
                        }, t))
                    },
                    largeHeader: function(t) {
                        return (0, a.jsx)(x, (0, r.Z)({
                            fontWeight: 500,
                            color: "text1",
                            fontSize: 24
                        }, t))
                    }
                },
                v = c.default.h1.withConfig({
                    componentId: "sc-8f0f10aa-1"
                })(f(), (function(t) {
                    return t.theme.text1
                })),
                b = (0, c.createGlobalStyle)(s(), (function(t) {
                    return t.theme.background
                }), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.minLg
                }), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.text1
                }))
        },
        7500: function(t, n, e) {
            e.d(n, {
                AM: function() {
                    return j
                },
                xb: function() {
                    return w
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(7297),
                c = e(85893),
                l = (e(67294), e(1237)),
                d = e(41664),
                u = e.n(d),
                m = e(45697),
                f = e.n(m),
                s = e(73324),
                p = e(62810);

            function h() {
                var t = (0, a.Z)(["\n\tcolor: ", ";\n"]);
                return h = function() {
                    return t
                }, t
            }

            function x() {
                var t = (0, a.Z)(["\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tcolor: ", ";\n\n\t&:visited {\n\t\tcolor: ", ";\n\t}\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"]);
                return x = function() {
                    return t
                }, t
            }
            var g = function(t) {
                var n = t.external,
                    e = t.children,
                    a = (0, i.Z)(t, ["external", "children"]);
                return (0, c.jsx)(l.rU, (0, o.Z)((0, r.Z)({
                    target: n ? "_blank" : null,
                    rel: n ? "noopener noreferrer" : null,
                    color: "#2f80ed"
                }, a), {
                    children: e
                }))
            };
            g.propTypes = {
                external: f().bool
            };
            var v = (0, s.default)(g).withConfig({
                componentId: "sc-10d3a64b-0"
            })(h(), (function(t) {
                var n = t.color,
                    e = t.theme;
                return n || e.link
            }));
            n.ZP = v;
            var b = s.default.a.withConfig({
                    componentId: "sc-10d3a64b-1"
                })(x(), (function(t) {
                    var n = t.color,
                        e = t.theme;
                    return n || e.link
                }), (function(t) {
                    var n = t.color,
                        e = t.theme;
                    return n ? (0, p.$n)(.1, n) : (0, p.$n)(.1, e.link)
                }), (function(t) {
                    var n = t.color,
                        e = t.theme;
                    return n ? (0, p._j)(.1, n) : (0, p._j)(.1, e.link)
                })),
                w = function(t) {
                    var n = t.href,
                        e = t.children,
                        a = t.target,
                        l = (0, i.Z)(t, ["href", "children", "target"]);
                    return (0, c.jsx)(u(), {
                        href: n,
                        passHref: !0,
                        prefetch: !1,
                        children: (0, c.jsx)(b, (0, o.Z)((0, r.Z)({
                            target: a
                        }, l), {
                            children: e
                        }))
                    })
                },
                j = function(t) {
                    var n = t.href,
                        e = t.children,
                        a = t.shallow,
                        l = (0, i.Z)(t, ["href", "children", "shallow"]);
                    return (0, c.jsx)(u(), {
                        href: n,
                        passHref: !0,
                        prefetch: !1,
                        shallow: a,
                        children: (0, c.jsx)("a", (0, o.Z)((0, r.Z)({}, l), {
                            children: e
                        }))
                    })
                }
        },
        64017: function(t, n, e) {
            e.d(n, {
                K7: function() {
                    return u
                },
                h4: function() {
                    return d
                }
            });
            var r = e(7297),
                o = (e(85893), e(67294), e(11163), e(73324)),
                i = e(7500);

            function a() {
                var t = (0, r.Z)(["\n\tgap: 10px;\n\tpadding: 12px 16px;\n\tbackground: linear-gradient(168deg, #344179 3.98%, #445ed0 100%);\n\n\tscrollbar-width: none;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n\n\thr {\n\t\tborder-color: ", ";\n\t\tmargin: 4px 0;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tflex-direction: column;\n\t\tgap: 20px;\n\t\tpadding: 24px;\n\t\theight: 100vh;\n\t\toverflow-y: auto;\n\t\tbackground: ", ";\n\t}\n"]);
                return a = function() {
                    return t
                }, t
            }

            function c() {
                var t = (0, r.Z)(["\n\tflex-shrink: 0;\n\ttransition: transform 0.3s ease;\n\tmargin-right: auto;\n\n\t:focus-visible {\n\t\toutline: 1px solid white;\n\t}\n\n\timg {\n\t\theight: 36px;\n\t\tobject-fit: contain;\n\t\tobject-position: left;\n\t\twidth: min-content;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\t:hover {\n\t\t\ttransform: rotate(-5deg);\n\t\t}\n\n\t\timg {\n\t\t\theight: 53px;\n\t\t}\n\t}\n"]);
                return c = function() {
                    return t
                }, t
            }

            function l() {
                var t = (0, r.Z)(["\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tcolor: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 12px;\n\topacity: 0.7;\n\n\t&[data-active='true'] {\n\t\topacity: 1;\n\t}\n\n\t:hover {\n\t\topacity: 1;\n\t}\n\n\t:focus-visible {\n\t\toutline: 1px solid ", ";\n\t\topacity: 1;\n\t}\n"]);
                return l = function() {
                    return t
                }, t
            }
            var d = o.default.header.withConfig({
                    componentId: "sc-ae5b6c9b-0"
                })(a(), (function(t) {
                    return t.theme.divider
                }), (function(t) {
                    return t.theme.bpLg
                }), (function(t) {
                    return t.theme.background
                })),
                u = o.default.a.withConfig({
                    componentId: "sc-ae5b6c9b-1"
                })(c(), (function(t) {
                    return t.theme.bpLg
                }));
            (0, o.default)(i.AM).withConfig({
                componentId: "sc-ae5b6c9b-2"
            })(l(), (function(t) {
                return t.theme.text1
            }), (function(t) {
                return t.theme.text1
            }))
        },
        27353: function(t, n, e) {
            var r = e(29815),
                o = e(85893),
                i = e(67294),
                a = e(9008),
                c = e.n(a),
                l = e(17882),
                d = e(26183);
            n.Z = function(t) {
                var n = t.cardName,
                    e = t.chain,
                    a = t.token,
                    u = t.tvl,
                    m = t.volumeChange,
                    f = t.logo,
                    s = t.nftPage,
                    p = void 0 !== s && s,
                    h = t.liqsPage,
                    x = void 0 !== h && h,
                    g = t.dexsPage,
                    v = void 0 !== g && g,
                    b = (0, d.O_)() && window.location.href ? window.location.href : "",
                    w = u && "$0" !== u,
                    j = m && "NaN%" !== m && "undefined%" !== m,
                    Z = (0, i.useMemo)((function() {
                        var t, o = new URL("https://og-cards-chi.vercel.app/"),
                            i = n ? "All" === n ? "Overall" : n : "default";
                        o.pathname = "".concat(encodeURIComponent(i), ".jpeg"), o.searchParams.append("theme", "dark"), t = p ? "Total Volume" : x ? "Total Liquidable Amount" : v ? "24h volume" : "Total Value Locked", o.searchParams.append("valueHeader", t), w && o.searchParams.append("tvl", u), j && o.searchParams.append("volumeChange", m), o.searchParams.append("footerURL", encodeURIComponent(b));
                        var c = p ? ["https://defillama.com/defillama-press-kit/nft/SVG/defillama-nft.svg"] : ["https://defillama.com/defillama-press-kit/defi/SVG/defillama.svg"];
                        f ? c = (0, r.Z)(c).concat([f]) : e && "All" !== e ? c = (0, r.Z)(c).concat(["https://defillama.com".concat((0, l.jG)(e))]) : a && "All" !== a && (c = (0, r.Z)(c).concat(["https://defillama.com".concat((0, l.cT)(a))]));
                        var d = !0,
                            s = !1,
                            h = void 0;
                        try {
                            for (var g, Z = c[Symbol.iterator](); !(d = (g = Z.next()).done); d = !0) {
                                var y = g.value;
                                o.searchParams.append("images", y)
                            }
                        } catch (F) {
                            s = !0, h = F
                        } finally {
                            try {
                                d || null == Z.return || Z.return()
                            } finally {
                                if (s) throw h
                            }
                        }
                        return o.toString()
                    }), [n, e, a, u, m, f, p, b, w, j, v, x]);
                return (0, o.jsxs)(c(), {
                    children: [(0, o.jsx)("meta", {
                        name: "description",
                        content: "DefiLlama is a DeFi TVL aggregator. It is committed to providing accurate data without ads or sponsored content, as well as transparency."
                    }), (0, o.jsx)("meta", {
                        property: "og:title",
                        content: "DefiLlama"
                    }), (0, o.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, o.jsx)("meta", {
                        property: "og:url",
                        content: b
                    }), (0, o.jsx)("meta", {
                        property: "og:site_name",
                        content: "DefiLlama"
                    }), (0, o.jsx)("meta", {
                        property: "og:description",
                        content: "DefiLlama is a DeFi TVL aggregator. It is committed to providing accurate data without ads or sponsored content, as well as transparency."
                    }), (0, o.jsx)("meta", {
                        property: "og:image",
                        content: Z
                    }), (0, o.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, o.jsx)("meta", {
                        property: "twitter:domain",
                        content: "defillama.com"
                    }), (0, o.jsx)("meta", {
                        property: "twitter:url",
                        content: b
                    }), (0, o.jsx)("meta", {
                        name: "twitter:title",
                        content: "DefiLlama"
                    }), (0, o.jsx)("meta", {
                        name: "twitter:site",
                        content: "@DefiLlama"
                    }), (0, o.jsx)("meta", {
                        name: "twitter:creator",
                        content: "@DefiLlama"
                    }), (0, o.jsx)("meta", {
                        name: "twitter:description",
                        content: "DefiLlama is a DeFi TVL aggregator. It is committed to providing accurate data without ads or sponsored content, as well as transparency."
                    }), (0, o.jsx)("meta", {
                        name: "twitter:image",
                        content: Z
                    })]
                })
            }
        },
        53291: function(t, n, e) {
            e.d(n, {
                _: function() {
                    return c
                },
                lg: function() {
                    return i
                },
                sm: function() {
                    return r
                },
                x: function() {
                    return o
                },
                xl: function() {
                    return a
                }
            });
            var r = 30,
                o = 50.75,
                i = 64,
                a = 87.5,
                c = 96
        },
        31616: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return y
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(7297),
                c = e(85893),
                l = (e(67294), e(9008)),
                d = e.n(l),
                u = e(73324),
                m = e(62480),
                f = e(27353),
                s = e(5152),
                p = e.n(s),
                h = e(64017),
                x = p()((function() {
                    return Promise.all([e.e(1608), e.e(2768)]).then(e.bind(e, 12768))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [12768]
                        }
                    },
                    loading: function() {
                        return (0, c.jsx)(h.h4, {})
                    }
                }),
                g = p()((function() {
                    return Promise.all([e.e(1608), e.e(261), e.e(3882), e.e(7843), e.e(8100), e.e(8500), e.e(4350), e.e(8981)]).then(e.bind(e, 78981))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [78981]
                        }
                    },
                    loading: function() {
                        return (0, c.jsx)(h.h4, {})
                    }
                });

            function v() {
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(g, {}), (0, c.jsx)(x, {})]
                })
            }

            function b() {
                var t = (0, a.Z)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 16px;\n\tisolation: isolate;\n\n\t@media screen and (min-width: ", ") {\n\t\tmargin: 28px 28px 28px 248px;\n\t}\n"]);
                return b = function() {
                    return t
                }, t
            }

            function w() {
                var t = (0, a.Z)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 28px;\n\twidth: 100%;\n\tmax-width: 86rem;\n\tmin-height: 100%;\n\tmargin: 0 auto;\n\tcolor: ", ";\n"]);
                return w = function() {
                    return t
                }, t
            }
            var j = u.default.div.withConfig({
                    componentId: "sc-d3821a9d-0"
                })(b(), (function(t) {
                    return t.theme.bpLg
                })),
                Z = u.default.main.withConfig({
                    componentId: "sc-d3821a9d-1"
                })(w(), (function(t) {
                    return t.theme.text1
                }));

            function y(t) {
                var n = t.title,
                    e = t.children,
                    a = t.defaultSEO,
                    l = void 0 !== a && a,
                    u = (0, i.Z)(t, ["title", "children", "defaultSEO"]);
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(d(), {
                        children: (0, c.jsx)("title", {
                            children: n
                        })
                    }), l && (0, c.jsx)(f.Z, {}), (0, c.jsxs)(m.ZP, {
                        children: [(0, c.jsx)(m.ZL, {}), (0, c.jsx)(v, {}), (0, c.jsx)(j, {
                            children: (0, c.jsx)(Z, (0, o.Z)((0, r.Z)({}, u), {
                                children: e
                            }))
                        })]
                    })]
                })
            }
        }
    }
]);