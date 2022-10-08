"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2768], {
        12768: function(t, e, n) {
            n.r(e), n.d(e, {
                Wrapper: function() {
                    return $
                },
                default: function() {
                    return Q
                }
            });
            var r = n(828),
                a = n(7297),
                i = n(85893),
                o = n(67294),
                s = n(41664),
                l = n.n(s),
                c = n(11163),
                p = n(61608),
                u = n.n(p),
                d = n(73324),
                f = n(26183),
                h = n(64017),
                m = n(97599),
                y = n(45697),
                g = n.n(y);

            function v() {
                return v = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, v.apply(this, arguments)
            }

            function x(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var w = (0, o.forwardRef)((function(t, e) {
                var n = t.color,
                    r = void 0 === n ? "currentColor" : n,
                    a = t.size,
                    i = void 0 === a ? 24 : a,
                    s = x(t, ["color", "size"]);
                return o.createElement("svg", v({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: r,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, s), o.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "5"
                }), o.createElement("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "3"
                }), o.createElement("line", {
                    x1: "12",
                    y1: "21",
                    x2: "12",
                    y2: "23"
                }), o.createElement("line", {
                    x1: "4.22",
                    y1: "4.22",
                    x2: "5.64",
                    y2: "5.64"
                }), o.createElement("line", {
                    x1: "18.36",
                    y1: "18.36",
                    x2: "19.78",
                    y2: "19.78"
                }), o.createElement("line", {
                    x1: "1",
                    y1: "12",
                    x2: "3",
                    y2: "12"
                }), o.createElement("line", {
                    x1: "21",
                    y1: "12",
                    x2: "23",
                    y2: "12"
                }), o.createElement("line", {
                    x1: "4.22",
                    y1: "19.78",
                    x2: "5.64",
                    y2: "18.36"
                }), o.createElement("line", {
                    x1: "18.36",
                    y1: "5.64",
                    x2: "19.78",
                    y2: "4.22"
                }))
            }));
            w.propTypes = {
                color: g().string,
                size: g().oneOfType([g().string, g().number])
            }, w.displayName = "Sun";
            var b = w;

            function j() {
                return j = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, j.apply(this, arguments)
            }

            function A(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var O = (0, o.forwardRef)((function(t, e) {
                var n = t.color,
                    r = void 0 === n ? "currentColor" : n,
                    a = t.size,
                    i = void 0 === a ? 24 : a,
                    s = A(t, ["color", "size"]);
                return o.createElement("svg", j({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: r,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, s), o.createElement("path", {
                    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                }))
            }));
            O.propTypes = {
                color: g().string,
                size: g().oneOfType([g().string, g().number])
            }, O.displayName = "Moon";
            var k = O;

            function E() {
                var t = (0, a.Z)(["\n\topacity: ", ";\n\n\t:hover {\n\t\topacity: 1;\n\t}\n"]);
                return E = function() {
                    return t
                }, t
            }

            function P() {
                var t = (0, a.Z)(["\n\tdisplay: none;\n\twidth: fit-content;\n\tcolor: ", ";\n\tpadding: 0;\n\n\t@media (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"]);
                return P = function() {
                    return t
                }, t
            }
            var Z = d.default.div.withConfig({
                    componentId: "sc-8add5eed-0"
                })(E(), (function(t) {
                    return t.isActive ? .8 : .4
                })),
                z = d.default.button.withConfig({
                    componentId: "sc-8add5eed-1"
                })(P(), (function(t) {
                    return t.theme.text1
                }), (function(t) {
                    return t.theme.bpLg
                }));

            function C(t) {
                var e = t.isActive,
                    n = t.toggle;
                return (0, i.jsxs)(z, {
                    onClick: n,
                    children: [(0, i.jsx)("span", {
                        children: (0, i.jsx)(Z, {
                            isActive: !e,
                            children: (0, i.jsx)(b, {
                                size: 20
                            })
                        })
                    }), (0, i.jsx)("span", {
                        style: {
                            padding: "0 .5rem"
                        },
                        children: " / "
                    }), (0, i.jsx)("span", {
                        children: (0, i.jsx)(Z, {
                            isActive: e,
                            children: (0, i.jsx)(k, {
                                size: 20
                            })
                        })
                    })]
                })
            }
            var D = {
                    src: "/_next/static/media/defillama.c6870a18.png",
                    height: 133,
                    width: 389,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEXE0eX4+/////+xzPP///9gld/9/v4dXrwecur6+/0iT48cx1jcAAAAC3RSTlMBEFf7Q/AJsEtqR7h8s10AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAeSURBVAiZY2DlYoAAZnYWTiYmJiYGZg4GRjZGRkYAA8MARJygIG8AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 3
                },
                T = {
                    src: "/_next/static/media/defillama-dark.7b6aadf1.png",
                    height: 133,
                    width: 389,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEUgIyceHx9MaXEkM0mwzPMgTY0ccOlglN4WCwAYWbcgIiSET4M6AAAAC3RSTlMOVgAD+kVJ7kStasRu4ZAAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAgSURBVAiZY2BnZWJmZmJiYmDh5OBiZGRkZGBhY2IAAQAE2QBKkiSLFgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 3
                },
                L = n(63872);

            function S() {
                var t = (0, a.Z)(["\n\t0% {\n\t\ttransform: rotate(10deg);\n\t}\n\n\t50% {\n\t\ttransform: rotate(-10deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(0);\n\t}\n"]);
                return S = function() {
                    return t
                }, t
            }

            function W() {
                var t = (0, a.Z)(["\n\tsummary {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\topacity: 1;\n\t\tfont-weight: 600;\n\t\tcursor: pointer;\n\n\t\t:hover {\n\t\t\t& > *[data-mainlinkicon] {\n\t\t\t\tanimation: ", " 0.4s ease;\n\t\t\t}\n\t\t}\n\t}\n\n\tsummary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n"]);
                return W = function() {
                    return t
                }, t
            }

            function R() {
                var t = (0, a.Z)(["\n\tmargin-top: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n"]);
                return R = function() {
                    return t
                }, t
            }

            function I() {
                var t = (0, a.Z)(["\n\tfont-weight: 600;\n\topacity: 1 !important;\n\n\t:hover {\n\t\t& > *[data-mainlinkicon] {\n\t\t\tanimation: ", " 0.4s ease;\n\t\t}\n\t}\n"]);
                return I = function() {
                    return t
                }, t
            }
            var B = (0, o.forwardRef)((function(t, e) {
                    var n, r = t.name,
                        a = (0, c.useRouter)().pathname,
                        o = m.Q.find((function(t) {
                            return t.name === r
                        })),
                        s = G({
                            category: r,
                            pathname: a
                        });
                    return o || "Yields" === r && !s ? (0, i.jsx)(l(), {
                        href: null !== (n = null === o || void 0 === o ? void 0 : o.url) && void 0 !== n ? n : "/yields",
                        prefetch: !1,
                        passHref: !0,
                        children: (0, i.jsxs)(Y, {
                            "data-linkactive": s,
                            children: [(0, i.jsx)("span", {
                                "data-mainlinkicon": !0,
                                children: m.F[r].icon
                            }), (0, i.jsx)("span", {
                                children: r
                            })]
                        })
                    }) : (0, i.jsxs)(F, {
                        ref: e,
                        open: !!s,
                        children: [(0, i.jsxs)("summary", {
                            children: [(0, i.jsx)("span", {
                                "data-mainlinkicon": !0,
                                children: m.F[r].icon
                            }), (0, i.jsx)("span", {
                                children: r
                            })]
                        }), (0, i.jsx)(N, {
                            children: m.F[r].main.map((function(t) {
                                return (0, i.jsx)(l(), {
                                    href: t.path,
                                    prefetch: !1,
                                    passHref: !0,
                                    children: (0, i.jsxs)("a", {
                                        "data-linkactive": t.path === a,
                                        children: [(0, i.jsx)("span", {
                                            style: {
                                                width: "16px",
                                                display: "inline-block"
                                            }
                                        }), (0, i.jsx)("span", {
                                            children: t.name
                                        }), !0 === t.newTag && (0, i.jsx)("span", {
                                            "data-newtag": !0,
                                            children: "NEW"
                                        })]
                                    })
                                }, t.path)
                            }))
                        })]
                    })
                })),
                M = (0, d.keyframes)(S()),
                F = d.default.details.withConfig({
                    componentId: "sc-956b5e34-0"
                })(W(), M),
                N = d.default.span.withConfig({
                    componentId: "sc-956b5e34-1"
                })(R()),
                Y = d.default.a.withConfig({
                    componentId: "sc-956b5e34-2"
                })(I(), M),
                H = function(t) {
                    return "/yields" === t || t.startsWith("/yields/") || t.startsWith("/yields?")
                },
                _ = function(t) {
                    return "/stablecoins" === t || t.startsWith("/stablecoin/") || t.startsWith("/stablecoins/")
                },
                U = function(t) {
                    return "/liquidations" === t || t.startsWith("/liquidations/")
                },
                V = function(t) {
                    return "/dexs" === t || t.startsWith("/dexs/") || t.startsWith("/dex/")
                },
                J = function(t) {
                    return "/fees" === t || t.startsWith("/fees/") || t.startsWith("/fee/")
                },
                G = function(t) {
                    var e = t.pathname;
                    switch (t.category) {
                        case "Yields":
                            return H(e);
                        case "Stables":
                            return _(e);
                        case "Liquidations":
                            return U(e);
                        case "DEXs":
                            return V(e);
                        case "Fees":
                            return J(e);
                        case "DeFi":
                            return !H(e) && !_(e) && !U(e) && !V(e) && !J(e);
                        default:
                            return !1
                    }
                },
                X = B;

            function q() {
                var t = (0, a.Z)(["\n\tdisplay: none;\n\n\t@media (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"]);
                return q = function() {
                    return t
                }, t
            }

            function K() {
                var t = (0, a.Z)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tgap: 16px;\n\n\ta,\n\tbutton {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t\tcursor: pointer;\n\t\topacity: 0.8;\n\t\ttext-align: start;\n\t\tmargin: -6px 0 -6px -6px;\n\t\tpadding: 6px;\n\t\tborder-radius: 6px;\n\n\t\t& > *[data-newtag] {\n\t\t\tbackground: #ebebeb;\n\t\t\tfont-size: 0.625rem;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 3px;\n\t\t\tcolor: black;\n\t\t\tposition: relative;\n\t\t\tleft: -4px;\n\t\t\ttop: 2px;\n\t\t}\n\n\t\t:hover,\n\t\t:focus-visible {\n\t\t\topacity: 1;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&[data-linkactive='true'] {\n\t\t\tbackground-color: #2172e5;\n\t\t\tcolor: white;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\tp[data-linksheader] {\n\t\tfont-size: 0.75rem;\n\t\topacity: 0.5;\n\t}\n"]);
                return K = function() {
                    return t
                }, t
            }

            function Q() {
                var t = (0, c.useRouter)().asPath,
                    e = (0, f.vM)(),
                    n = (0, r.Z)((0, L.m$)(), 2),
                    a = n[0],
                    s = n[1],
                    p = e ? m.F.Yields : m.F.DeFi;
                return (0, i.jsxs)($, {
                    as: "aside",
                    children: [(0, i.jsx)(l(), {
                        href: "/",
                        passHref: !0,
                        children: (0, i.jsxs)(h.K7, {
                            children: [(0, i.jsx)("span", {
                                className: "visually-hidden",
                                children: "Navigate to Home Page"
                            }), (0, i.jsx)(u(), {
                                src: a ? D : T,
                                alt: "Navigate to Home Page",
                                priority: !0
                            })]
                        })
                    }), (0, i.jsxs)(tt, {
                        children: [(0, i.jsx)("p", {
                            "data-linksheader": !0,
                            children: "Dashboards"
                        }), Object.keys(m.F).map((function(t) {
                            return (0, i.jsx)(X, {
                                name: t
                            }, t)
                        })), (0, i.jsx)("hr", {}), (0, i.jsx)("p", {
                            "data-linksheader": !0,
                            children: "Tools"
                        }), p.tools.map((function(e) {
                            return "onClick" in e ? (0, i.jsx)("button", {
                                onClick: e.onClick,
                                children: e.name
                            }, e.name) : (0, i.jsx)(o.Fragment, {
                                children: (0, i.jsx)(l(), {
                                    href: e.path,
                                    prefetch: !1,
                                    passHref: !0,
                                    children: (0, i.jsxs)("a", {
                                        target: e.external && "_blank",
                                        rel: "noopener noreferrer",
                                        "data-linkactive": e.path === t,
                                        children: [e.name, !0 === e.newTag && (0, i.jsx)("span", {
                                            "data-newtag": !0,
                                            children: "NEW"
                                        })]
                                    })
                                }, e.path)
                            }, e.name)
                        })), (0, i.jsx)("hr", {}), p.footer.map((function(e) {
                            return "onClick" in e ? (0, i.jsx)("button", {
                                onClick: e.onClick,
                                children: e.name
                            }, e.name) : (0, i.jsx)(o.Fragment, {
                                children: (0, i.jsx)(l(), {
                                    href: e.path,
                                    prefetch: !1,
                                    passHref: !0,
                                    children: (0, i.jsxs)("a", {
                                        target: e.external && "_blank",
                                        rel: "noopener noreferrer",
                                        "data-linkactive": e.path === t,
                                        children: [e.name, !0 === e.newTag && (0, i.jsx)("span", {
                                            "data-newtag": !0,
                                            children: "NEW"
                                        })]
                                    })
                                }, e.path)
                            }, e.name)
                        }))]
                    }), (0, i.jsx)(C, {
                        isActive: a,
                        toggle: s
                    })]
                })
            }
            var $ = (0, d.default)(h.h4).withConfig({
                    componentId: "sc-53848afe-0"
                })(q(), (function(t) {
                    return t.theme.bpLg
                })),
                tt = d.default.nav.withConfig({
                    componentId: "sc-53848afe-1"
                })(K(), (function(t) {
                    return "dark" === t.theme.mode ? "rgba(246, 246, 246, 0.1)" : "rgba(246, 246, 246, 1)"
                }))
        },
        97599: function(t, e, n) {
            n.d(e, {
                F: function() {
                    return f
                },
                Q: function() {
                    return h
                }
            });
            var r = n(26042),
                a = n(69396),
                i = n(85893),
                o = n(17207),
                s = n(81060),
                l = n(83220),
                c = n(8386),
                p = n(19011),
                u = n(73340),
                d = {
                    tools: [{
                        name: "Watchlist",
                        path: "/watchlist"
                    }, {
                        name: "Directory",
                        path: "/directory",
                        newTag: !0
                    }, {
                        name: "Roundup",
                        path: "/roundup"
                    }, {
                        name: "Wiki",
                        path: "https://wiki.defillama.com/wiki/Main_Page",
                        external: !0
                    }, {
                        name: "Press / Media",
                        path: "/press"
                    }, {
                        name: "API Docs",
                        path: "/docs/api"
                    }, {
                        name: "List Your Project",
                        path: "https://docs.llama.fi/list-your-project/submit-a-project",
                        external: !0
                    }, {
                        name: "Download Data",
                        onClick: function() {
                            confirm('This data export contains a lot of data and is not well suited for most types of analysis.\nWe heavily recommend to use the csv exports available on other pages through the ".csv" buttons, since this export is hard to analyze unless you make heavy use of code.\n\nDo you still wish to download it?') && window.open("https://datasets.llama.fi/all.csv", "_blank")
                        }
                    }],
                    footer: [{
                        name: "About DefiLlama",
                        path: "/about"
                    }, {
                        name: "Twitter",
                        path: "https://twitter.com/DefiLlama",
                        external: !0
                    }, {
                        name: "Discord",
                        path: "https://discord.gg/buPFYXzDDd",
                        external: !0
                    }, {
                        name: "Donate",
                        path: "/donations"
                    }]
                },
                f = {
                    DeFi: (0, a.Z)((0, r.Z)({
                        main: [{
                            name: "Overview",
                            path: "/"
                        }, {
                            name: "Chains",
                            path: "/chains"
                        }, {
                            name: "Airdrops",
                            path: "/airdrops"
                        }, {
                            name: "Oracles",
                            path: "/oracles"
                        }, {
                            name: "Forks",
                            path: "/forks"
                        }, {
                            name: "Top Protocols",
                            path: "/top-protocols"
                        }, {
                            name: "Comparison",
                            path: "/comparison?protocol=MakerDAO&protocol=Curve",
                            newTag: !0
                        }, {
                            name: "Categories",
                            path: "/categories"
                        }, {
                            name: "Recent",
                            path: "/recent"
                        }, {
                            name: "Languages",
                            path: "/languages"
                        }]
                    }, d), {
                        icon: (0, i.jsx)(o.Z, {
                            size: 16
                        })
                    }),
                    Yields: {
                        main: [{
                            name: "Pools",
                            path: "/yields"
                        }, {
                            name: "Borrow",
                            path: "/yields/borrow",
                            newTag: !0
                        }, {
                            name: "Optimizer",
                            path: "/yields/optimizer",
                            newTag: !0
                        }, {
                            name: "Overview",
                            path: "/yields/overview"
                        }, {
                            name: "Stablecoin Pools",
                            path: "/yields/stablecoins"
                        }, {
                            name: "Projects",
                            path: "/yields/projects"
                        }, {
                            name: "Halal",
                            path: "/yields/halal"
                        }],
                        tools: [{
                            name: "Watchlist",
                            path: "/yields/watchlist"
                        }, {
                            name: "Directory",
                            path: "/directory",
                            newTag: !0
                        }, {
                            name: "Roundup",
                            path: "/roundup"
                        }, {
                            name: "Wiki",
                            path: "https://wiki.defillama.com/wiki/Main_Page",
                            external: !0
                        }, {
                            name: "Press / Media",
                            path: "/press"
                        }, {
                            name: "API Docs",
                            path: "/docs/api"
                        }, {
                            name: "List your protocol",
                            path: "https://github.com/DefiLlama/yield-server#readme",
                            external: !0
                        }, {
                            name: "Download Data",
                            path: "https://datasets.llama.fi/yields/yield_rankings.csv"
                        }],
                        footer: [{
                            name: "About DefiLlama",
                            path: "/about"
                        }, {
                            name: "Twitter",
                            path: "https://twitter.com/DefiLlama",
                            external: !0
                        }, {
                            name: "Discord",
                            path: "https://discord.gg/buPFYXzDDd",
                            external: !0
                        }, {
                            name: "Donate",
                            path: "/donations"
                        }],
                        icon: (0, i.jsx)(s.Z, {
                            size: 16
                        })
                    },
                    Stables: (0, a.Z)((0, r.Z)({
                        main: [{
                            name: "Overview",
                            path: "/stablecoins"
                        }, {
                            name: "Chains",
                            path: "/stablecoins/chains"
                        }]
                    }, d), {
                        icon: (0, i.jsx)(l.Z, {
                            size: 16
                        })
                    }),
                    Liquidations: (0, a.Z)((0, r.Z)({
                        main: []
                    }, d), {
                        icon: (0, i.jsx)(c.Z, {
                            size: 16
                        })
                    }),
                    DEXs: (0, a.Z)((0, r.Z)({
                        main: [{
                            name: "Overview",
                            path: "/dexs"
                        }, {
                            name: "Chains",
                            path: "/dexs/chains"
                        }]
                    }, d), {
                        icon: (0, i.jsx)(p.Z, {
                            size: 16
                        })
                    }),
                    Fees: (0, a.Z)((0, r.Z)({
                        main: []
                    }, d), {
                        icon: (0, i.jsx)(u.Z, {
                            size: 16
                        })
                    })
                },
                h = [{
                    name: "Liquidations",
                    url: "/liquidations/eth"
                }, {
                    name: "Fees",
                    url: "/fees"
                }]
        },
        17207: function(t, e, n) {
            var r = n(67294),
                a = n(45697),
                i = n.n(a);

            function o() {
                return o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(this, arguments)
            }

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var l = (0, r.forwardRef)((function(t, e) {
                var n = t.color,
                    a = void 0 === n ? "currentColor" : n,
                    i = t.size,
                    l = void 0 === i ? 24 : i,
                    c = s(t, ["color", "size"]);
                return r.createElement("svg", o({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }), r.createElement("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }), r.createElement("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "BarChart2", e.Z = l
        },
        19011: function(t, e, n) {
            var r = n(67294),
                a = n(45697),
                i = n.n(a);

            function o() {
                return o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(this, arguments)
            }

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var l = (0, r.forwardRef)((function(t, e) {
                var n = t.color,
                    a = void 0 === n ? "currentColor" : n,
                    i = t.size,
                    l = void 0 === i ? 24 : i,
                    c = s(t, ["color", "size"]);
                return r.createElement("svg", o({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "10"
                }), r.createElement("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "4"
                }), r.createElement("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "16"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "BarChart", e.Z = l
        },
        83220: function(t, e, n) {
            var r = n(67294),
                a = n(45697),
                i = n.n(a);

            function o() {
                return o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(this, arguments)
            }

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var l = (0, r.forwardRef)((function(t, e) {
                var n = t.color,
                    a = void 0 === n ? "currentColor" : n,
                    i = t.size,
                    l = void 0 === i ? 24 : i,
                    c = s(t, ["color", "size"]);
                return r.createElement("svg", o({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "23"
                }), r.createElement("path", {
                    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "DollarSign", e.Z = l
        },
        8386: function(t, e, n) {
            var r = n(67294),
                a = n(45697),
                i = n.n(a);

            function o() {
                return o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(this, arguments)
            }

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var l = (0, r.forwardRef)((function(t, e) {
                var n = t.color,
                    a = void 0 === n ? "currentColor" : n,
                    i = t.size,
                    l = void 0 === i ? 24 : i,
                    c = s(t, ["color", "size"]);
                return r.createElement("svg", o({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("path", {
                    d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Droplet", e.Z = l
        },
        81060: function(t, e, n) {
            var r = n(67294),
                a = n(45697),
                i = n.n(a);

            function o() {
                return o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(this, arguments)
            }

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var l = (0, r.forwardRef)((function(t, e) {
                var n = t.color,
                    a = void 0 === n ? "currentColor" : n,
                    i = t.size,
                    l = void 0 === i ? 24 : i,
                    c = s(t, ["color", "size"]);
                return r.createElement("svg", o({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("line", {
                    x1: "19",
                    y1: "5",
                    x2: "5",
                    y2: "19"
                }), r.createElement("circle", {
                    cx: "6.5",
                    cy: "6.5",
                    r: "2.5"
                }), r.createElement("circle", {
                    cx: "17.5",
                    cy: "17.5",
                    r: "2.5"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Percent", e.Z = l
        },
        73340: function(t, e, n) {
            var r = n(67294),
                a = n(45697),
                i = n.n(a);

            function o() {
                return o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(this, arguments)
            }

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var l = (0, r.forwardRef)((function(t, e) {
                var n = t.color,
                    a = void 0 === n ? "currentColor" : n,
                    i = t.size,
                    l = void 0 === i ? 24 : i,
                    c = s(t, ["color", "size"]);
                return r.createElement("svg", o({
                    ref: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("path", {
                    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
                }), r.createElement("path", {
                    d: "M22 12A10 10 0 0 0 12 2v10z"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "PieChart", e.Z = l
        }
    }
]);