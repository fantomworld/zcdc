"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7634], {
        68141: function(n, t, o) {
            o.d(t, {
                KT: function() {
                    return d
                },
                ao: function() {
                    return a
                },
                tH: function() {
                    return i
                }
            });
            var e = o(8100),
                c = o(8151),
                r = o(50771),
                i = function() {
                    var n = (0, e.ZP)(c.Zi, r._i),
                        t = n.data,
                        o = n.error;
                    return {
                        data: t,
                        error: o,
                        loading: !t && !o
                    }
                },
                a = function(n) {
                    var t = (0, e.ZP)(n ? "".concat(c.a6, "/").concat(n) : null, r._i),
                        o = t.data,
                        i = t.error,
                        a = (0, e.ZP)(n && (null === o || void 0 === o ? void 0 : o.length) < 7 ? "".concat(c.Pm, "/").concat(n) : null, r._i),
                        d = a.data,
                        l = a.error;
                    return {
                        data: o,
                        error: i,
                        loading: n && (!o && !i || (null === o || void 0 === o ? void 0 : o.length) < 7 && (!d || !l))
                    }
                },
                d = function(n) {
                    var t = "https://api.coingecko.com/api/v3/coins/".concat(n, "/market_chart/range?vs_currency=usd&from=0&to="),
                        o = (0, e.ZP)(n ? t : null, (function(n) {
                            return (0, r._i)(n + Date.now())
                        })),
                        c = o.data,
                        i = o.error;
                    return {
                        data: c,
                        error: i,
                        loading: n && !c && !i
                    }
                }
        },
        1754: function(n, t, o) {
            o.d(t, {
                kS: function() {
                    return f
                },
                ZP: function() {
                    return I
                }
            });
            var e = o(7297),
                c = o(85893),
                r = (o(67294), o(61608)),
                i = o.n(r),
                a = o(31955),
                d = o(73324),
                l = {
                    src: "/_next/static/media/lubb.93c7e5d8.png",
                    height: 64,
                    width: 64,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVMaXHq27FSfXjYanfnXWwoJyC8sI/Xy6MKHkmBUEw5NS7AsonayJfayJfSx6i/so6PhWmnl3O/tI0KUujHwY7Viou2hXTffXikraGlbn//87bj0aD+67Hu06H77ck6Z8i0dEPFAAAAGnRSTlMA+yH7/QiN+xEoO92u4tX1mUWx5Wn9gPv89k2C0C4AAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVAiZFcEFEoAwEACxrV6Lu1Tg/79kSIAQQ8NvGvtWA3MuKXXAVpRkDxxV1DM4orG7iHdEa8+6APo217sGPlibAq/Wz3T4AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                s = o(78268),
                u = o(11163);

            function m() {
                var n = (0, e.Z)(["\n\tposition: relative;\n\tpadding: 12px;\n\tfont-size: 1rem;\n\tcolor: ", ";\n\tbackground-color: hsl(215deg 79% 51% / 12%);\n\ttext-align: center;\n\tbox-shadow: ", ";\n\tborder-radius: 8px;\n\n\ta {\n\t\tfont-weight: 500;\n\t}\n\n\timg {\n\t\tposition: relative;\n\t\ttop: 2px;\n\t\tleft: 4px;\n\t\tdisplay: inline-block;\n\t}\n"]);
                return m = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, e.Z)(["\n\tposition: absolute;\n\ttop: 6px;\n\tbottom: 6px;\n\tright: 12px;\n\tmargin: auto 0;\n\tpadding: 6px 8px;\n\tborder-radius: 12px;\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: hsl(215deg 79% 51% / 24%);\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n"]);
                return g = function() {
                    return n
                }, n
            }

            function I(n) {
                var t = n.children,
                    o = n.notCancellable,
                    e = (0, u.useRouter)();
                return o || e.query.announcement ? (0, c.jsxs)(f, {
                    children: [t, (0, c.jsx)(i(), {
                        src: l,
                        width: 18,
                        height: 18,
                        alt: "llama love"
                    }), !o && (0, c.jsx)(h, {
                        onClick: function() {
                            a.Z.set("flag-announcement", "llama1"), e.push("/", void 0, {
                                shallow: !0
                            })
                        },
                        children: (0, c.jsx)(s.Z, {
                            size: 16
                        })
                    })]
                }) : null
            }
            var f = d.default.p.withConfig({
                    componentId: "sc-f30cd47f-0"
                })(m(), (function(n) {
                    return "dark" === n.theme.mode ? "white" : "black"
                }), (function(n) {
                    return n.theme.shadowSm
                })),
                h = d.default.button.withConfig({
                    componentId: "sc-f30cd47f-1"
                })(g())
        },
        37634: function(n, t, o) {
            o.d(t, {
                Z: function() {
                    return V
                }
            });
            var e = o(26042),
                c = o(69396),
                r = o(828),
                i = o(7297),
                a = o(29815),
                d = o(85893),
                l = o(67294),
                s = o(5152),
                u = o.n(s),
                m = o(25675),
                g = o.n(m),
                I = o(41664),
                f = o.n(I),
                h = o(11163),
                b = o(73324),
                A = o(16626),
                p = o(1754),
                k = o(7178),
                v = o(79189),
                y = o(54341),
                x = o(7060),
                C = o(35167),
                w = o(27353),
                S = o(25594),
                j = o(12346),
                E = o(82274),
                Z = o(63872),
                T = o(17882),
                O = o(70104),
                N = o(68141),
                R = {
                    src: "/_next/static/media/peeking-llama.144cf6ce.png",
                    height: 34,
                    width: 41,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAOVBMVEVMaXHFua3Vv6vHrKHq5N3e1MXOwrCskX/LwbTd0cTFq4Hav5rUyLX69/Xx6+Pz7+3p39Lt1Kfo17cpnr9HAAAADXRSTlMAaKJYzb+PdXj6+O2wGDTAfgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUCJljYGDl5eNhAAFWXiFuZhCDhY9LkAnM4OUUYAMxODh5+TnAitgZ2cE0FAAAJ0gBAihGU/IAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 7
                },
                M = o(36312);

            function P() {
                var n = (0, i.Z)(["\n\tpadding: 0;\n\twidth: 41px;\n\theight: 34px;\n\tposition: absolute;\n\tbottom: -36px;\n\tleft: 0;\n\n\timg {\n\t\twidth: 41px !important;\n\t\theight: 34px !important;\n\t}\n"]);
                return P = function() {
                    return n
                }, n
            }
            var L = b.default.button.withConfig({
                    componentId: "sc-cc63edc5-0"
                })(P()),
                U = u()((function() {
                    return Promise.all([o.e(4750), o.e(9009), o.e(7673), o.e(371)]).then(o.bind(o, 30371))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [30371]
                        }
                    },
                    ssr: !1
                }),
                B = u()((function() {
                    return o.e(4214).then(o.bind(o, 74214))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [74214]
                        }
                    }
                }),
                D = ["USD"];
            var V = function(n) {
                var t, o, i, s, u, m, I = n.selectedChain,
                    b = void 0 === I ? "All" : I,
                    P = n.chainsSet,
                    V = n.filteredProtocols,
                    G = n.chart,
                    X = n.extraVolumesCharts,
                    H = void 0 === X ? {} : X,
                    F = n.parentProtocols,
                    K = (0, r.Z)((0, Z.M5)(), 1)[0],
                    W = (0, h.useRouter)(),
                    q = null !== (o = null === (t = W.query) || void 0 === t ? void 0 : t.currency) && void 0 !== o ? o : "USD",
                    z = W.query,
                    J = z.minTvl,
                    Y = z.maxTvl,
                    _ = (0, r.Z)(l.useState(!1), 2),
                    Q = _[0],
                    $ = _[1],
                    nn = (0, r.Z)((0, Z.m$)(), 2),
                    tn = nn[0],
                    on = nn[1],
                    en = l.useMemo((function() {
                        var n = G.map((function(n) {
                                var t = n[1];
                                return Object.entries(H).forEach((function(o) {
                                    var e = (0, r.Z)(o, 2),
                                        c = e[0],
                                        i = e[1].find((function(t) {
                                            return t[0] === n[0]
                                        }));
                                    i && ("doublecounted" !== c || K.doublecounted || (t -= i[1]), "liquidstaking" !== c || K.liquidstaking || (t -= i[1]), "dcAndLsOverlap" === c && (K.doublecounted && K.liquidstaking || (t += i[1])), K[c.toLowerCase()] && "doublecounted" !== c && "liquidstaking" !== c && (t += i[1]))
                                })), [n[0], t]
                            })),
                            t = (0, T.Au)(n, 0),
                            o = (0, T.Au)(n, 1);
                        return {
                            totalVolumeUSD: t,
                            volumeChangeUSD: (0, T.Yu)(t, o),
                            globalChart: n
                        }
                    }), [G, K, H]),
                    cn = en.totalVolumeUSD,
                    rn = en.volumeChangeUSD,
                    an = en.globalChart,
                    dn = ["All"].concat(P).map((function(n) {
                        return {
                            label: n,
                            to: (t = n, "All" === t ? "/" : "/chain/".concat(t))
                        };
                        var t
                    })),
                    ln = (0, E.Qy)({
                        protocols: V,
                        parentProtocols: F
                    }),
                    sn = {
                        name: "Uniswap",
                        tvl: 0
                    };
                ln.length > 0 && (sn.name = null === (i = ln[0]) || void 0 === i ? void 0 : i.name, sn.tvl = null === (s = ln[0]) || void 0 === s ? void 0 : s.tvl, "AnySwap" === sn.name && (sn.name = null === (u = ln[1]) || void 0 === u ? void 0 : u.name, sn.tvl = null === (m = ln[1]) || void 0 === m ? void 0 : m.tvl));
                var un = (0, T.yb)(cn, !0),
                    mn = null === rn || void 0 === rn ? void 0 : rn.toFixed(2),
                    gn = (mn > 0 ? "+" : "") + mn + "%",
                    In = (0, r.Z)(l.useMemo((function() {
                        var n = [],
                            t = null;
                        if ("All" !== b) {
                            var o, e, c = null !== (o = O.P[b]) && void 0 !== o ? o : null;
                            (t = null !== (e = null === c || void 0 === c ? void 0 : c.geckoId) && void 0 !== e ? e : null) && c.symbol && (n = (0, a.Z)(D).concat([c.symbol]))
                        }
                        return [n, t]
                    }), [b]), 2),
                    fn = In[0],
                    hn = In[1],
                    bn = (0, N.KT)(hn),
                    An = bn.data,
                    pn = bn.loading,
                    kn = (0, r.Z)(l.useMemo((function() {
                        if ("USD" !== q && An && hn) {
                            for (var n = 0, t = 0, o = An.prices, e = [], c = 1, r = 0; r < an.length; r++) {
                                for (var i = 1e3 * an[r][0]; n < o.length && Math.abs(i - t) > Math.abs(i - o[n][0]);) t = o[n][0], n++;
                                c = o[n - 1][1], e.push([an[r][0], an[r][1] / c])
                            }
                            return [e, c]
                        }
                        return [an, 1]
                    }), [hn, an, An, q]), 2),
                    vn = kn[0],
                    yn = kn[1],
                    xn = cn / yn,
                    Cn = (0, T.l)(sn, cn),
                    wn = "USD" !== q && pn,
                    Sn = l.useMemo((function() {
                        return void 0 !== J && !Number.isNaN(Number(J)) || void 0 !== Y && !Number.isNaN(Number(Y)) ? ln.filter((function(n) {
                            return (!J || n.tvl > J) && (!Y || n.tvl < Y)
                        })) : ln
                    }), [J, Y, ln]);
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(w.Z, {
                        cardName: b,
                        chain: b,
                        tvl: un,
                        volumeChange: gn
                    }), (0, d.jsxs)(p.ZP, {
                        children: [(0, d.jsx)("span", {
                            children: "Check out our"
                        }), " ", (0, d.jsx)(f(), {
                            href: "/yields/optimizer",
                            children: (0, d.jsx)("a", {
                                children: " borrow optimizer!"
                            })
                        })]
                    }), (0, d.jsx)(y.Z, {
                        step: {
                            category: "Home",
                            name: "All" === b ? "All Protocols" : b
                        }
                    }), (0, d.jsxs)(A.GZ, {
                        children: [(0, d.jsxs)(A.Gc, {
                            children: [(0, d.jsxs)(A.Lp, {
                                children: [(0, d.jsx)("h1", {
                                    children: "Total Value Locked (USD)"
                                }), (0, d.jsx)("p", {
                                    style: {
                                        "--tile-text-color": "#4f8fea"
                                    },
                                    children: un
                                }), (0, d.jsxs)(A.o6, {
                                    href: "https://api.llama.fi/simpleChainDataset/".concat(b, "?").concat(Object.entries(K).filter((function(n) {
                                        return !0 === n[1]
                                    })).map((function(n) {
                                        return "".concat(n[0], "=true")
                                    })).join("&")),
                                    children: [(0, d.jsx)(A._8, {}), (0, d.jsx)("span", {
                                        children: "\xa0\xa0.csv"
                                    })]
                                })]
                            }), (0, d.jsxs)(A.Go, {
                                children: [(0, d.jsx)("h2", {
                                    children: "Change (24h)"
                                }), (0, d.jsxs)("p", {
                                    style: {
                                        "--tile-text-color": "#fd3c99"
                                    },
                                    children: [" ", mn || 0, "%"]
                                })]
                            }), (0, d.jsxs)(A.Go, {
                                children: [(0, d.jsxs)("h2", {
                                    children: [sn.name, " Dominance"]
                                }), (0, d.jsxs)("p", {
                                    style: {
                                        "--tile-text-color": "#46acb7"
                                    },
                                    children: [" ", Cn, "%"]
                                })]
                            })]
                        }), (0, d.jsxs)(A.Lp, {
                            id: "chartWrapper",
                            children: [(0, d.jsx)(v.DA, {
                                children: fn.map((function(n) {
                                    return (0, d.jsx)(S.yw, {
                                        active: q === n,
                                        onClick: function() {
                                            return t = n, void W.push({
                                                query: (0, c.Z)((0, e.Z)({}, W.query), {
                                                    currency: t
                                                })
                                            });
                                            var t
                                        },
                                        style: {
                                            margin: "0 8px 8px 0"
                                        },
                                        children: n
                                    }, n)
                                }))
                            }), Q ? (0, d.jsx)(B, {}) : wn ? (0, d.jsx)(j.Z, {
                                style: {
                                    margin: "auto"
                                }
                            }) : (0, d.jsx)(U, {
                                dailyData: vn,
                                unit: q,
                                totalLiquidity: xn,
                                liquidityChange: rn
                            })]
                        }), (0, d.jsx)(L, {
                            onClick: function() {
                                Q ? (tn || on(), window.location.reload()) : (tn && on(), $(!0))
                            },
                            children: (0, d.jsx)(g(), {
                                src: R,
                                width: "41px",
                                height: "34px",
                                alt: "Activate Easter Egg"
                            })
                        })]
                    }), (0, d.jsxs)(M.b, {
                        children: [(0, d.jsx)(M.B, {
                            children: "TVL Rankings"
                        }), (0, d.jsx)(x.s, {
                            links: dn,
                            activeLink: b
                        }), (0, d.jsx)(C.j, {})]
                    }), Sn.length > 0 ? (0, d.jsx)(k.dz, {
                        data: Sn
                    }) : (0, d.jsx)(A.s_, {
                        as: "p",
                        style: {
                            textAlign: "center",
                            margin: 0
                        },
                        children: "".concat(b, " chain has no protocols listed")
                    })]
                })
            }
        },
        36312: function(n, t, o) {
            o.d(t, {
                B: function() {
                    return d
                },
                b: function() {
                    return a
                }
            });
            var e = o(7297),
                c = o(73324);

            function r() {
                var n = (0, e.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\toverflow: hidden;\n\tmargin: 0 0 -20px;\n\n\tbutton {\n\t\tfont-weight: 600;\n\t}\n"]);
                return r = function() {
                    return n
                }, n
            }

            function i() {
                var n = (0, e.Z)(["\n\tfont-size: 1.125rem;\n\tcolor: ", ";\n\tfont-weight: 500;\n\twhite-space: nowrap;\n\n\t@media screen and (max-width: 40rem) {\n\t\tfont-size: 1rem;\n\t}\n"]);
                return i = function() {
                    return n
                }, n
            }
            var a = c.default.nav.withConfig({
                    componentId: "sc-ca656a65-0"
                })(r()),
                d = c.default.h3.withConfig({
                    componentId: "sc-ca656a65-1"
                })(i(), (function(n) {
                    return n.theme.text1
                }))
        },
        35167: function(n, t, o) {
            o.d(t, {
                j: function() {
                    return d
                }
            });
            var e = o(26042),
                c = o(69396),
                r = o(85893),
                i = o(11163),
                a = o(5404);

            function d() {
                var n = (0, i.useRouter)();
                return (0, r.jsx)(a.D, {
                    header: "Filter by min/max TVL",
                    onSubmit: function(t) {
                        var o, r;
                        t.preventDefault();
                        var i = t.target,
                            a = null === (o = i.min) || void 0 === o ? void 0 : o.value,
                            d = null === (r = i.max) || void 0 === r ? void 0 : r.value;
                        n.push({
                            pathname: n.pathname,
                            query: (0, c.Z)((0, e.Z)({}, n.query), {
                                minTvl: a,
                                maxTvl: d
                            })
                        }, void 0, {
                            shallow: !0
                        })
                    }
                })
            }
        },
        5404: function(n, t, o) {
            o.d(t, {
                D: function() {
                    return C
                }
            });
            var e = o(7297),
                c = o(85893),
                r = o(73324),
                i = o(91365),
                a = o(16626),
                d = o(26042),
                l = o(69396),
                s = o(99534),
                u = o(828),
                m = (o(67294), o(26664)),
                g = o(83882),
                I = o(55551),
                f = o(62810),
                h = o(63947);

            function b() {
                var n = (0, e.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid transparent;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n"]);
                return b = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, e.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 20px 0 32px;\n\twidth: 100%;\n\tmax-width: none;\n\tmax-height: calc(100vh - 200px);\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\topacity: 0;\n\tz-index: 10;\n\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\topacity: 1;\n\t\ttransform: translateY(0%);\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 0;\n\t\tmax-width: min(calc(100vw - 16px), 320px);\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\t}\n"]);
                return A = function() {
                    return n
                }, n
            }
            var p = (0, r.default)(m.x).withConfig({
                    componentId: "sc-4d01e19b-0"
                })(b(), (function(n) {
                    var t = n.theme;
                    return (0, f.DZ)(.9, t.primary1)
                }), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    var t = n.theme;
                    return (0, f.DZ)(.8, t.primary1)
                }), (function(n) {
                    return "1px solid " + n.theme.text1
                })),
                k = (0, r.default)(g.J).withConfig({
                    componentId: "sc-4d01e19b-1"
                })(A(), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    return n.theme.bg1
                }), (function(n) {
                    return "dark" === n.theme.mode ? "#40444f" : "#cbcbcb"
                }), (function(n) {
                    return "dark" === n.theme.mode ? "drop-shadow(0px 6px 10px rgba(0, 0, 0, 40%))" : "drop-shadow(0px 6px 10px rgba(0, 0, 0, 15%))"
                }), (function(n) {
                    return "1px solid " + n.theme.text1
                }), (function(n) {
                    return "dark" === n.theme.mode ? "#1c1f2d" : "#f4f6ff"
                }));

            function v(n) {
                var t = n.trigger,
                    o = n.content,
                    e = (0, s.Z)(n, ["trigger", "content"]),
                    r = (0, u.Z)((0, h.eG)(), 2),
                    i = r[0],
                    a = r[1],
                    m = (0, I.v)({
                        renderCallback: a,
                        gutter: 8,
                        animated: !0
                    });
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(p, {
                        state: m,
                        children: t
                    }), (0, c.jsx)(k, (0, l.Z)((0, d.Z)({
                        state: m,
                        modal: !i
                    }, e), {
                        children: o
                    }))]
                })
            }

            function y() {
                var n = (0, e.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 4px;\n\t\tfont: inherit;\n\t\tmargin: 12px 0 0;\n\t}\n\n\tinput {\n\t\tpadding: 8px;\n\t\tborder-radius: 4px;\n\t\tborder: ", ";\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t\tfont: inherit;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tlabel {\n\t\t\tmargin: 12px 12px 0;\n\t\t}\n\t}\n"]);
                return y = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, e.Z)(["\n\twidth: 240px;\n\tmargin: 0 auto;\n"]);
                return x = function() {
                    return n
                }, n
            }

            function C(n) {
                var t = n.header,
                    o = n.onSubmit;
                return (0, c.jsx)(v, {
                    trigger: (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)("span", {
                            children: t
                        }), (0, c.jsx)(i.C, {})]
                    }),
                    content: (0, c.jsx)(S, {
                        children: (0, c.jsxs)(w, {
                            onSubmit: o,
                            children: [(0, c.jsxs)("label", {
                                children: [(0, c.jsx)("span", {
                                    children: "Min"
                                }), (0, c.jsx)("input", {
                                    type: "number",
                                    name: "min"
                                })]
                            }), (0, c.jsxs)("label", {
                                children: [(0, c.jsx)("span", {
                                    children: "Max"
                                }), (0, c.jsx)("input", {
                                    type: "number",
                                    name: "max"
                                })]
                            }), (0, c.jsx)(a.Bv, {
                                children: "Apply Filter"
                            })]
                        })
                    })
                })
            }
            var w = r.default.form.withConfig({
                    componentId: "sc-e1853fd-0"
                })(y(), (function(n) {
                    return "1px solid " + n.theme.text4
                }), (function(n) {
                    return "dark" === n.theme.mode ? "#000" : "#fff"
                }), (function(n) {
                    return n.theme.text1
                })),
                S = r.default.div.withConfig({
                    componentId: "sc-e1853fd-1"
                })(x())
        },
        12346: function(n, t, o) {
            o.d(t, {
                Z: function() {
                    return k
                }
            });
            var e = o(26042),
                c = o(69396),
                r = o(99534),
                i = o(7297),
                a = o(85893),
                d = (o(67294), o(25675)),
                l = o.n(d),
                s = o(73324),
                u = o(26183),
                m = {
                    src: "/_next/static/media/logo_white.99c4e4b4.png",
                    height: 132,
                    width: 118,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAb1BMVEUIWs00gvCmxfGWvvcXXsINXu+91vm40PIkcNv4/P9MaXEIULey0f0nZLwAXfSexf0/fNPB2v9npf9xrf8AWucGXdhxrP/O3/iVt+hJkvsSX866zegMVb0ATskfVaMXQXsCR6kANZbZ6f8AT8eGp9VSrlCYAAAAInRSTlP5+vj++xP7/P79APv6/fWK/dfL+9SX4/r2+9T02L71Nq4v8JFLGgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUCJkFwQUCgDAMBLCbtnPcHf7/RhIMc8776SGEit9xAzy6NV0A24nCBg1y8l0QEjnJPXRlH9UZNG2si/E/azgDHM/x4y8AAAAASUVORK5CYII=",
                    blurWidth: 7,
                    blurHeight: 8
                },
                g = {
                    src: "/_next/static/media/nft_logo_white.6533de1a.png",
                    height: 322,
                    width: 322,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVMaXHG2P6MiN3L2v9SSNRHPdGUhsn///9zceBbV+hWSclaUdaqpu8WAJvL3/5RPrV3ef83IquYlv9rW8BNQcxQSN28ufZMNabz+v9MP8Cbleb09P/i8f9jYOfExfff7f5vibiCAAAAGXRSTlMAMvnqMyb9/QTo7Pf+OfD0MSwt6+jg/Ob7r8br0AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUCJklxrUBwDAQALEzvinMDu2/ZYqoEgG3zJYALtWSLbjNi9TYEw8v53rHPyUnhunZRXcWRvNeuoGAMq0ifGb3AtP4jR3EAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                };

            function I() {
                var n = (0, i.Z)(["\n  0% { transform: scale(1); }\n  60% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n"]);
                return I = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, i.Z)(["\n\t\t\t\t\theight: 100vh;\n\t\t\t  "]);
                return f = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, i.Z)(["\n\t\t\t\t\theight: 180px;\n\t\t\t  "]);
                return h = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, i.Z)(["\n\tpointer-events: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\n\tanimation: ", " 800ms linear infinite;\n\t& > * {\n\t\twidth: 72px;\n\t}\n\n\t", "\n"]);
                return b = function() {
                    return n
                }, n
            }
            var A = (0, s.keyframes)(I()),
                p = s.default.div.withConfig({
                    componentId: "sc-3d2641a1-0"
                })(b(), A, (function(n) {
                    return n.fill ? (0, s.css)(f()) : (0, s.css)(h())
                })),
                k = function(n) {
                    var t = n.fill,
                        o = (0, r.Z)(n, ["fill"]),
                        i = (0, u.Zh)();
                    return (0, a.jsx)(p, (0, c.Z)((0, e.Z)({
                        fill: t
                    }, o), {
                        children: (0, a.jsx)(l(), {
                            src: i ? g : m,
                            alt: "loading-icon"
                        })
                    }))
                }
        },
        79189: function(n, t, o) {
            o.d(t, {
                BA: function() {
                    return g
                },
                DA: function() {
                    return I
                },
                m0: function() {
                    return m
                }
            });
            var e = o(7297),
                c = o(73324),
                r = o(60419);

            function i() {
                var n = (0, e.Z)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tpadding: 0;\n\talign-items: center;\n\talign-items: ", ";\n\tpadding: ", ";\n\tborder: ", ";\n\tborder-radius: ", ";\n\tjustify-content: ", ";\n"]);
                return i = function() {
                    return n
                }, n
            }

            function a() {
                var n = (0, e.Z)(["\n\tjustify-content: space-between;\n"]);
                return a = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, e.Z)(["\n\tdisplay: flex;\n\talign-items: flex-end;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, e.Z)(["\n\tflex-wrap: ", ";\n\tmargin: -", ";\n\t& > * {\n\t\tmargin: ", " !important;\n\t}\n"]);
                return l = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, e.Z)(["\n\twidth: fit-content;\n"]);
                return s = function() {
                    return n
                }, n
            }
            var u = (0, c.default)(r.xu).withConfig({
                    componentId: "sc-b23a8579-0"
                })(i(), (function(n) {
                    var t = n.align;
                    return t && t
                }), (function(n) {
                    return n.padding
                }), (function(n) {
                    return n.border
                }), (function(n) {
                    return n.borderRadius
                }), (function(n) {
                    return n.justify
                })),
                m = (0, c.default)(u).withConfig({
                    componentId: "sc-b23a8579-1"
                })(a()),
                g = ((0, c.default)(r.xu).withConfig({
                    componentId: "sc-b23a8579-2"
                })(d()), (0, c.default)(u).withConfig({
                    componentId: "sc-b23a8579-3"
                })(l(), (function(n) {
                    var t = n.wrap;
                    return null !== t && void 0 !== t ? t : "nowrap"
                }), (function(n) {
                    return n.gap
                }), (function(n) {
                    return n.gap
                }))),
                I = (0, c.default)(u).withConfig({
                    componentId: "sc-b23a8579-4"
                })(s());
            t.ZP = u
        },
        14137: function(n, t, o) {
            o.d(t, {
                _: function() {
                    return I
                }
            });
            var e = o(26042),
                c = o(69396),
                r = o(29815),
                i = o(11163),
                a = o(67294),
                d = o(68141),
                l = o(17882),
                s = o(76489),
                u = o(23046),
                m = [{
                    name: "Non-EVM",
                    route: "/chains/Non-EVM",
                    logo: u.Z.src
                }, {
                    name: "EVM",
                    route: "/chains/EVM",
                    logo: u.Z.src
                }, {
                    name: "Rollup",
                    route: "/chains/Rollup",
                    logo: u.Z.src
                }, {
                    name: "Cosmos",
                    route: "/chains/Cosmos",
                    logo: u.Z.src
                }, {
                    name: "Parachain",
                    route: "/chains/Parachain",
                    logo: u.Z.src
                }, {
                    name: "Chains - Polkadot",
                    route: "/chains/Polkadot",
                    logo: (0, l.jG)("polkadot")
                }, {
                    name: "Chains - Kusama",
                    route: "/chains/Kusama",
                    logo: (0, l.jG)("kusama")
                }],
                g = function(n) {
                    return "-" !== n.symbol && n.symbol ? "".concat(n.name, " (").concat(n.symbol, ")") : n.name
                };

            function I(n) {
                var t = n.includedSets,
                    o = void 0 === t ? Object.values(s.O) : t,
                    u = n.customPath,
                    I = (0, d.tH)(),
                    f = I.data,
                    h = I.loading,
                    b = (0, i.useRouter)().pathname,
                    A = (0, a.useMemo)((function() {
                        var n, t, i, a, d = null === o || void 0 === o ? void 0 : o.includes(s.O.CHAINS),
                            I = u || function(n) {
                                return "/chain/".concat(n)
                            },
                            h = d && null !== (i = null === f || void 0 === f || null === (n = f.chains) || void 0 === n ? void 0 : n.map((function(n) {
                                return {
                                    logo: (0, l.jG)(n),
                                    route: I(n),
                                    name: n
                                }
                            }))) && void 0 !== i ? i : [],
                            A = null === o || void 0 === o ? void 0 : o.includes(s.O.PROTOCOLS),
                            p = u || function(n) {
                                return "/protocol/".concat((0, l.R5)(n))
                            },
                            k = A && null !== (a = null === f || void 0 === f || null === (t = f.protocols) || void 0 === t ? void 0 : t.map((function(n) {
                                return (0, c.Z)((0, e.Z)({}, n), {
                                    name: g(n),
                                    symbol: n.symbol,
                                    logo: (0, l.cT)(n.name),
                                    route: p(n.name)
                                })
                            }))) && void 0 !== a ? a : [],
                            v = b.startsWith("/protocol") ? (0, r.Z)(k).concat((0, r.Z)(h)) : (0, r.Z)(h).concat((0, r.Z)(k));
                        if (null === o || void 0 === o ? void 0 : o.includes(s.O.GROUPED_CHAINS)) {
                            var y, x = m;
                            u && (x = m.map((function(n) {
                                return (0, c.Z)((0, e.Z)({}, n), {
                                    route: u(n.name)
                                })
                            }))), (y = v).push.apply(y, (0, r.Z)(x))
                        }
                        return v
                    }), [f, b, u, o]);
                return {
                    data: A,
                    loading: h
                }
            }
        },
        54341: function(n, t, o) {
            o.d(t, {
                Z: function() {
                    return O
                }
            });
            var e = o(26042),
                c = o(69396),
                r = o(85893),
                i = o(11163),
                a = o(20590),
                d = o(76489),
                l = o(86220),
                s = o(99534),
                u = o(828),
                m = o(7297),
                g = o(73324),
                I = o(18033),
                f = o(39377),
                h = o(34029),
                b = o(16626),
                A = o(3877),
                p = o(22114),
                k = o(45214),
                v = o(63947);

            function y() {
                var n = (0, m.Z)(["\n\tdisplay: none;\n\tgap: 8px;\n\talign-items: center;\n\tmargin-left: auto;\n\n\t@media screen and (min-width: ", ") and (max-width: ", ") {\n\t\tdisplay: flex;\n\t\tpadding: 0 4px;\n\t}\n"]);
                return y = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, m.Z)(["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\topacity: 0.8;\n\twhite-space: nowrap;\n"]);
                return x = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, m.Z)(["\n\tbackground: ", ";\n"]);
                return C = function() {
                    return n
                }, n
            }
            var w = g.default.div.withConfig({
                    componentId: "sc-3dbe61dc-0"
                })(y(), (function(n) {
                    return n.theme.bpLg
                }), (function(n) {
                    return n.theme.bp2Xl
                })),
                S = (0, g.default)(I.n).withConfig({
                    componentId: "sc-3dbe61dc-1"
                })(x(), (function(n) {
                    return n.theme.text1
                })),
                j = (0, g.default)(p.Ph).withConfig({
                    componentId: "sc-3dbe61dc-2"
                })(C(), (function(n) {
                    return "dark" === n.theme.mode ? "#000" : "#f5f5f5"
                }));

            function E(n) {
                var t, o;
                return 0 === n.length ? "No option selected" : 1 === n.length ? null !== (o = null === (t = A.i.find((function(t) {
                    return t.key === n[0]
                }))) || void 0 === t ? void 0 : t.name) && void 0 !== o ? o : n[0] : "".concat(n.length, " options selected")
            }

            function Z(n) {
                var t = n.options,
                    o = (0, s.Z)(n, ["options"]),
                    i = (0, k.Q)({
                        sameWidth: !0
                    }),
                    a = (0, u.Z)((0, v.eG)(), 1)[0],
                    d = t || A.i;
                return (0, r.jsxs)(w, (0, c.Z)((0, e.Z)({}, o), {
                    children: [(0, r.jsx)(S, {
                        state: i,
                        children: "INCLUDE IN TVL: "
                    }), (0, r.jsxs)(j, {
                        state: i,
                        children: [(0, r.jsx)("span", {
                            children: E(i.value)
                        }), (0, r.jsx)(f.n, {})]
                    }), i.mounted && (0, r.jsx)(p.vA, {
                        state: i,
                        modal: !a,
                        children: d.map((function(n) {
                            var t = n.key,
                                o = n.name,
                                e = n.help;
                            return (0, r.jsxs)(p.Ql, {
                                value: t,
                                children: [e ? (0, r.jsx)(h.Z, {
                                    title: o,
                                    text: e
                                }) : o, (0, r.jsx)(b.XZ, {
                                    checked: i.value.includes(t)
                                })]
                            }, t)
                        }))
                    })]
                }))
            }
            var T = o(14137);

            function O(n) {
                var t = n.includedSets,
                    o = void 0 === t ? Object.values(d.O) : t,
                    i = n.customPath,
                    l = n.options,
                    s = (0, T._)({
                        includedSets: o,
                        customPath: i
                    }),
                    u = s.data,
                    m = s.loading;
                return (0, r.jsx)(a.W, (0, c.Z)((0, e.Z)({}, n), {
                    data: u,
                    loading: m,
                    filters: (0, r.jsx)(N, {
                        options: l
                    })
                }))
            }
            var N = function(n) {
                var t, o = n.options;
                return !(null === (t = (0, i.useRouter)().pathname) || void 0 === t ? void 0 : t.includes("/protocol/")) || o && 0 !== o.length ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.Z4, {
                        options: o
                    }), (0, r.jsx)(Z, {
                        options: o
                    })]
                }) : null
            }
        },
        76489: function(n, t, o) {
            var e;
            o.d(t, {
                    O: function() {
                        return e
                    }
                }),
                function(n) {
                    n.PROTOCOLS = "protocols", n.CHAINS = "chains", n.GROUPED_CHAINS = "grouped_chains"
                }(e || (e = {}))
        },
        70104: function(n, t, o) {
            o.d(t, {
                H: function() {
                    return c
                },
                P: function() {
                    return e
                }
            });
            var e = {
                    Ethereum: {
                        geckoId: "ethereum",
                        symbol: "ETH",
                        cmcId: "1027"
                    },
                    Arbitrum: {
                        geckoId: null,
                        symbol: "ETH",
                        cmcId: null
                    },
                    Palm: {
                        geckoId: null,
                        symbol: null,
                        cmcId: null
                    },
                    Optimism: {
                        geckoId: null,
                        symbol: null,
                        cmcId: null
                    },
                    Stacks: {
                        geckoId: "blockstack",
                        symbol: "STX",
                        cmcId: "4847"
                    },
                    PolyNetwork: {
                        geckoId: null,
                        symbol: null,
                        cmcId: null
                    },
                    Conflux: {
                        geckoId: "conflux-token",
                        symbol: "CFX",
                        cmcId: "7334"
                    },
                    Nuls: {
                        geckoId: "nuls",
                        symbol: "NULS",
                        cmcId: "2092"
                    },
                    Witnet: {
                        geckoId: "witnet",
                        symbol: "WIT",
                        cmcId: "14925"
                    },
                    Binance: {
                        geckoId: "binancecoin",
                        symbol: "BNB",
                        cmcId: "1839"
                    },
                    BSC: {
                        geckoId: "binancecoin",
                        symbol: "BNB",
                        cmcId: "1839"
                    },
                    Avalanche: {
                        geckoId: "avalanche-2",
                        symbol: "AVAX",
                        cmcId: "5805"
                    },
                    Solana: {
                        geckoId: "solana",
                        symbol: "SOL",
                        cmcId: "5426"
                    },
                    Polygon: {
                        geckoId: "matic-network",
                        symbol: "MATIC",
                        cmcId: "3890"
                    },
                    Terra: {
                        geckoId: "terra-luna",
                        symbol: "LUNA",
                        cmcId: "4172"
                    },
                    Fantom: {
                        geckoId: "fantom",
                        symbol: "FTM",
                        cmcId: "3513"
                    },
                    xDai: {
                        geckoId: "xdai-stake",
                        symbol: "STAKE",
                        cmcId: "5601"
                    },
                    Heco: {
                        geckoId: "huobi-token",
                        symbol: "HT",
                        cmcId: "2502"
                    },
                    Kava: {
                        geckoId: "kava",
                        symbol: "KAVA",
                        cmcId: "4846"
                    },
                    OKExChain: {
                        geckoId: "okexchain",
                        symbol: "OKT",
                        cmcId: "8267"
                    },
                    Wanchain: {
                        geckoId: "wanchain",
                        symbol: "WAN",
                        cmcId: "2606"
                    },
                    DefiChain: {
                        geckoId: "defichain",
                        symbol: "DFI",
                        cmcId: "5804"
                    },
                    Ontology: {
                        geckoId: "ontology",
                        symbol: "ONT",
                        cmcId: "2566"
                    },
                    Bitcoin: {
                        geckoId: "bitcoin",
                        symbol: "BTC",
                        cmcId: "1"
                    },
                    Energi: {
                        geckoId: "energi",
                        symbol: "NRG",
                        cmcId: "3218"
                    },
                    Secret: {
                        geckoId: "secret",
                        symbol: "SCRT",
                        cmcId: "5604"
                    },
                    Zilliqa: {
                        geckoId: "zilliqa",
                        symbol: "ZIL",
                        cmcId: "2469"
                    },
                    NEO: {
                        geckoId: "neo",
                        symbol: "NEO",
                        cmcId: "1376"
                    },
                    Harmony: {
                        geckoId: "harmony",
                        symbol: "ONE",
                        cmcId: "3945"
                    },
                    RSK: {
                        geckoId: "rootstock",
                        symbol: "RBTC",
                        cmcId: "3626"
                    },
                    Sifchain: {
                        geckoId: "sifchain",
                        symbol: "EROWAN",
                        cmcId: "8541"
                    },
                    Algorand: {
                        geckoId: "algorand",
                        symbol: "ALGO",
                        cmcId: "4030"
                    },
                    Osmosis: {
                        geckoId: "osmosis",
                        symbol: "OSMO",
                        cmcId: "12220"
                    },
                    Thorchain: {
                        geckoId: "thorchain",
                        symbol: "RUNE",
                        cmcId: "4157"
                    },
                    Tron: {
                        geckoId: "tron",
                        symbol: "TRON",
                        cmcId: "1958"
                    },
                    Icon: {
                        geckoId: "icon",
                        symbol: "ICX",
                        cmcId: "2099"
                    },
                    Tezos: {
                        geckoId: "tezos",
                        symbol: "XTZ",
                        cmcId: "2011"
                    },
                    Celo: {
                        geckoId: "celo",
                        symbol: "CELO",
                        cmcId: "5567"
                    },
                    Kucoin: {
                        geckoId: "kucoin-shares",
                        symbol: "KCS",
                        cmcId: "2087"
                    },
                    KCC: {
                        geckoId: "kucoin-shares",
                        symbol: "KCS",
                        cmcId: "2087"
                    },
                    Karura: {
                        geckoId: "karura",
                        symbol: "KAR",
                        cmcId: "10042"
                    },
                    Moonriver: {
                        geckoId: "moonriver",
                        symbol: "MOVR",
                        cmcId: "9285"
                    },
                    Waves: {
                        geckoId: "waves",
                        symbol: "WAVES",
                        cmcId: "1274"
                    },
                    Klaytn: {
                        geckoId: "klay-token",
                        symbol: "KLAY",
                        cmcId: "4256"
                    },
                    IoTeX: {
                        geckoId: "iotex",
                        symbol: "IOTX",
                        cmcId: "2777"
                    },
                    Ultra: {
                        geckoId: "ultra",
                        symbol: "UOS",
                        cmcId: "4189"
                    },
                    Kusama: {
                        geckoId: "kusama",
                        symbol: "KSM",
                        cmcId: "5034"
                    },
                    Shiden: {
                        geckoId: "shiden",
                        symbol: "SDN"
                    },
                    Telos: {
                        geckoId: "telos",
                        symbol: "TLOS",
                        cmcId: "4660"
                    },
                    ThunderCore: {
                        geckoId: "thunder-token",
                        symbol: "TT",
                        cmcId: "3930"
                    },
                    Lamden: {
                        geckoId: "lamden",
                        symbol: "TAU",
                        cmcId: "2337"
                    },
                    Near: {
                        geckoId: "near",
                        symbol: "NEAR",
                        cmcId: "6535"
                    },
                    Aurora: {
                        geckoId: "aurora-near",
                        symbol: "AURORA",
                        cmcId: "14803"
                    },
                    EOS: {
                        geckoId: "eos",
                        symbol: "EOS",
                        cmcId: "1765"
                    },
                    Songbird: {
                        geckoId: "songbird",
                        symbol: "SGB",
                        cmcId: "12186"
                    },
                    EnergyWeb: {
                        geckoId: "energy-web-token",
                        symbol: "EWT",
                        cmcId: "5268"
                    },
                    HPB: {
                        geckoId: "high-performance-blockchain",
                        symbol: "HPB",
                        cmcId: "2345"
                    },
                    GoChain: {
                        geckoId: "gochain",
                        symbol: "GO",
                        cmcId: "2861"
                    },
                    TomoChain: {
                        geckoId: "tomochain",
                        symbol: "TOMO",
                        cmcId: "2570"
                    },
                    Fusion: {
                        geckoId: "fsn",
                        symbol: "FSN",
                        cmcId: "2530"
                    },
                    Kardia: {
                        geckoId: "kardiachain",
                        symbol: "KAI",
                        cmcId: "5453"
                    },
                    Fuse: {
                        geckoId: "fuse-network-token",
                        symbol: "FUSE",
                        cmcId: "5634"
                    },
                    SORA: {
                        geckoId: "sora",
                        symbol: "XOR",
                        cmcId: "5802"
                    },
                    smartBCH: {
                        geckoId: "bitcoin-cash",
                        symbol: "BCH",
                        cmcId: "1831"
                    },
                    Elastos: {
                        geckoId: "elastos",
                        symbol: "ELA",
                        cmcId: "2492"
                    },
                    Hoo: {
                        geckoId: "hoo-token",
                        symbol: "HOO",
                        cmcId: "7543"
                    },
                    Cronos: {
                        geckoId: "crypto-com-chain",
                        symbol: "CRO",
                        cmcId: "3635"
                    },
                    ImmutableX: {
                        geckoId: "",
                        symbol: "ETH",
                        cmcId: ""
                    },
                    Metis: {
                        geckoId: "metis-token",
                        symbol: "METIS",
                        cmcId: "9640"
                    },
                    Ubiq: {
                        geckoId: "ubiq",
                        symbol: "UBQ",
                        cmcId: "588"
                    },
                    Mixin: {
                        geckoId: "mixin",
                        symbol: "XIN",
                        cmcId: "2349"
                    },
                    Everscale: {
                        geckoId: "everscale",
                        symbol: "EVER",
                        cmcId: "7505"
                    },
                    VeChain: {
                        geckoId: "vechain",
                        symbol: "VET",
                        cmcId: "3077"
                    },
                    XDC: {
                        geckoId: "xdce-crowd-sale",
                        symbol: "XDC",
                        cmcId: "2634"
                    },
                    Velas: {
                        geckoId: "velas",
                        symbol: "VLX",
                        cmcId: "4747"
                    },
                    Godwoken: {
                        geckoId: "nervos-network",
                        symbol: "CKB",
                        cmcId: "4948"
                    },
                    Callisto: {
                        geckoId: "callisto",
                        symbol: "CLO",
                        cmcId: "2757"
                    },
                    CSC: {
                        geckoId: "coinex-token",
                        symbol: "CET",
                        cmcId: "2941"
                    },
                    Ergo: {
                        geckoId: "ergo",
                        symbol: "ERG",
                        cmcId: "1555"
                    },
                    Cardano: {
                        geckoId: "cardano",
                        symbol: "ADA",
                        cmcId: "2010"
                    },
                    Liquidchain: {
                        geckoId: "liquidchain",
                        symbol: "XLC",
                        cmcId: null
                    },
                    Nahmii: {
                        geckoId: "nahmii",
                        symbol: "NII",
                        cmcId: "4865"
                    },
                    Parallel: {
                        geckoId: null,
                        symbol: "PARA",
                        cmcId: null
                    },
                    Meter: {
                        geckoId: "meter",
                        symbol: "MTRG",
                        cmcId: "5919"
                    },
                    Oasis: {
                        geckoId: "oasis-network",
                        symbol: "ROSE",
                        cmcId: "7653"
                    },
                    Theta: {
                        geckoId: "theta-token",
                        symbol: "THETA",
                        cmcId: "2416"
                    },
                    Syscoin: {
                        geckoId: "syscoin",
                        symbol: "SYS",
                        cmcId: "541"
                    },
                    Moonbeam: {
                        geckoId: "moonbeam",
                        symbol: "GLMR",
                        cmcId: "6836"
                    },
                    Astar: {
                        geckoId: "astar",
                        symbol: "ASTR",
                        cmcId: "12885"
                    },
                    Curio: {
                        geckoId: "skale",
                        symbol: "SKL",
                        cmcId: "5691"
                    },
                    Bittorrent: {
                        geckoId: "bittorrent",
                        symbol: "BTT",
                        cmcId: "16086"
                    },
                    Genshiro: {
                        geckoId: "genshiro",
                        symbol: "GENS",
                        cmcId: "10278"
                    },
                    Wax: {
                        geckoId: "wax",
                        symbol: "WAXP",
                        cmcId: "2300"
                    },
                    Evmos: {
                        geckoId: "evmos",
                        symbol: "EVMOS",
                        cmcId: null
                    },
                    Proton: {
                        geckoId: "proton",
                        symbol: "XPR",
                        cmcId: "5350"
                    },
                    Kadena: {
                        geckoId: "kadena",
                        symbol: "KDA",
                        cmcId: "5647"
                    },
                    Vite: {
                        geckoId: "vite",
                        symbol: "VITE",
                        cmcId: "2937"
                    },
                    EthereumClassic: {
                        geckoId: "ethereum-classic",
                        symbol: "ETC",
                        cmcId: "1321"
                    },
                    Milkomeda: {
                        geckoId: "cardano",
                        symbol: "ADA",
                        cmcId: "2010"
                    },
                    DFK: {
                        geckoId: "defi-kingdoms",
                        symbol: "JEWEL",
                        cmcId: "12319"
                    },
                    CLV: {
                        geckoId: "clover-finance",
                        symbol: "CLV",
                        cmcId: "8384"
                    },
                    REInetwork: {
                        geckoId: "rei-network",
                        symbol: "REI",
                        cmcId: "19819"
                    },
                    Crab: {
                        geckoId: "darwinia-crab-network",
                        symbol: "CRAB",
                        cmcId: "9243"
                    },
                    Hedera: {
                        geckoId: "hedera-hashgraph",
                        symbol: "HBAR",
                        cmcId: "4642"
                    },
                    Findora: {
                        geckoId: "findora",
                        symbol: "FRA",
                        cmcId: "4249"
                    },
                    Hydra: {
                        geckoId: "hydra",
                        symbol: "HYDRA",
                        cmcId: "8245"
                    },
                    Boba: {
                        geckoId: "boba-network  ",
                        symbol: "BOBA",
                        cmcId: "14556"
                    },
                    Bitgert: {
                        geckoId: "bitrise-token",
                        symbol: "BRISE",
                        cmcId: "11079"
                    },
                    Reef: {
                        geckoId: "reef-finance",
                        symbol: "REEF",
                        cmcId: "6951"
                    },
                    Omni: {
                        geckoId: "omni",
                        symbol: "OMNI",
                        cmcId: "83"
                    },
                    Candle: {
                        geckoId: "candle",
                        symbol: "CNDL",
                        cmcId: "18327"
                    },
                    Bifrost: {
                        geckoId: "bifrost-native-coin",
                        symbol: "BNC",
                        cmcId: "8705"
                    },
                    Stafi: {
                        geckoId: "stafi",
                        symbol: "FIS",
                        cmcId: "5882"
                    },
                    Lachain: {
                        geckoId: "latoken",
                        symbol: "LA",
                        cmcId: "2090"
                    },
                    Coti: {
                        geckoId: "coti",
                        symbol: "COTI",
                        cmcId: "3992"
                    },
                    Bitcoincash: {
                        geckoId: "bitcoin-cash",
                        symbol: "BCH",
                        cmcId: "1831"
                    },
                    Litecoin: {
                        geckoId: "litecoin",
                        symbol: "LTC",
                        cmcId: "2"
                    },
                    Doge: {
                        geckoId: "dogecoin",
                        symbol: "DOGE",
                        cmcId: "74"
                    },
                    Obyte: {
                        geckoId: "byteball",
                        symbol: "GBYTE",
                        cmcId: "1492"
                    },
                    REI: {
                        geckoId: null,
                        symbol: null,
                        cmcId: null
                    },
                    Bytomsidechain: {
                        geckoId: "bytom",
                        symbol: "BTM",
                        cmcId: "1866"
                    },
                    Pallete: {
                        geckoId: "palette",
                        symbol: "PLT",
                        cmcId: "16272"
                    },
                    Carbon: {
                        geckoId: "switcheo",
                        symbol: "SWTH",
                        cmcId: "2620"
                    },
                    Starcoin: {
                        geckoId: "starcoin",
                        symbol: "STC",
                        cmcId: "10202"
                    },
                    Terra2: {
                        geckoId: "terra-luna-2",
                        symbol: "LUNA",
                        cmcId: "20314"
                    },
                    SXnetwork: {
                        geckoId: "sx-network",
                        symbol: "SX",
                        cmcId: "8377"
                    },
                    Acala: {
                        geckoId: "acala",
                        symbol: "ACA",
                        cmcId: "6756"
                    },
                    ICP: {
                        geckoId: "internet-computer",
                        symbol: "ICP",
                        cmcId: "8916"
                    },
                    "Nova Network": {
                        geckoId: "supernova",
                        symbol: "SNT",
                        cmcId: "15399"
                    },
                    Kintsugi: {
                        geckoId: "kintsugi",
                        symbol: "KINT",
                        cmcId: "13675"
                    },
                    Interlay: {
                        geckoId: "interlay",
                        symbol: "INTR",
                        cmcId: "20366"
                    },
                    Ultron: {
                        geckoId: "ultron",
                        symbol: "ULX",
                        cmcId: "21524"
                    },
                    Dogechain: {
                        geckoId: "dogechain",
                        symbol: "DC",
                        cmcId: "21414"
                    },
                    Juno: {
                        geckoId: "juno-network",
                        symbol: "JUNO",
                        cmcId: "14299"
                    },
                    Tombchain: {
                        geckoId: "tomb",
                        symbol: "TOMB",
                        cmcId: "11495"
                    },
                    Crescent: {
                        geckoId: "crescent-network",
                        symbol: "CRE",
                        cmcId: null
                    },
                    Vision: {
                        geckoId: "vision-metaverse",
                        symbol: "VS",
                        cmcId: "19083"
                    },
                    EthereumPoW: {
                        geckoId: "ethereum-pow-iou",
                        symbol: "ETHW",
                        cmcId: "21296"
                    }
                },
                c = {
                    opensea: "Ethereum",
                    pancakeswap: "BSC",
                    immutablex: "ImmutableX",
                    treasure: "Arbitrum",
                    magiceden: "Solana",
                    randomearth: "Terra",
                    jpgstore: "Cardano"
                }
        }
    }
]);