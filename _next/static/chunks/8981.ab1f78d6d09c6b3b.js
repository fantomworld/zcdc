"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8981], {
        23046: function(n, t) {
            t.Z = {
                src: "/_next/static/media/placeholder.65ae8b03.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEX///7979n/0zf88KHxwjP/vxz4zo361zDllBf26NnppTDutUP31IL5zlv2qA/uwYD98ubyvGbz3cT227P8rxbn0j7s5ZnVtzrdxTnQu17OrjPczXH4z17/54+D2s+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVQImQXBhQHAIBAAsUMfLVDX/ddsAqoY8yno9drN83a8Prbz1p7hRETcoE3WWj01Yq45rSFCcSGkGVB+icAPZJACgakiD2cAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        95086: function(n, t, e) {
            e.d(t, {
                LO: function() {
                    return c
                },
                UO: function() {
                    return u
                },
                X_: function() {
                    return i
                }
            });
            var o = e(8100),
                r = e(8151),
                a = e(50771),
                i = function() {
                    var n = (0, o.ZP)("".concat(r.bY, "?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true"), a._i),
                        t = n.data,
                        e = n.error;
                    return {
                        data: t,
                        error: e,
                        loading: !t && !e
                    }
                },
                u = function() {
                    var n = (0, o.ZP)("".concat(r.bY, "?excludeTotalDataChart=true"), a._i),
                        t = n.data,
                        e = n.error;
                    return {
                        data: t,
                        error: e,
                        loading: !t && !e
                    }
                },
                c = function(n) {
                    var t, e = (0, o.ZP)(n ? "".concat(r.zv, "/").concat(n) : null, a._i),
                        i = e.data;
                    return {
                        data: i,
                        error: e.error,
                        loading: !(null === i || void 0 === i || null === (t = i.volumeHistory) || void 0 === t ? void 0 : t.length)
                    }
                }
        },
        68141: function(n, t, e) {
            e.d(t, {
                KT: function() {
                    return c
                },
                ao: function() {
                    return u
                },
                tH: function() {
                    return i
                }
            });
            var o = e(8100),
                r = e(8151),
                a = e(50771),
                i = function() {
                    var n = (0, o.ZP)(r.Zi, a._i),
                        t = n.data,
                        e = n.error;
                    return {
                        data: t,
                        error: e,
                        loading: !t && !e
                    }
                },
                u = function(n) {
                    var t = (0, o.ZP)(n ? "".concat(r.a6, "/").concat(n) : null, a._i),
                        e = t.data,
                        i = t.error,
                        u = (0, o.ZP)(n && (null === e || void 0 === e ? void 0 : e.length) < 7 ? "".concat(r.Pm, "/").concat(n) : null, a._i),
                        c = u.data,
                        l = u.error;
                    return {
                        data: e,
                        error: i,
                        loading: n && (!e && !i || (null === e || void 0 === e ? void 0 : e.length) < 7 && (!c || !l))
                    }
                },
                c = function(n) {
                    var t = "https://api.coingecko.com/api/v3/coins/".concat(n, "/market_chart/range?vs_currency=usd&from=0&to="),
                        e = (0, o.ZP)(n ? t : null, (function(n) {
                            return (0, a._i)(n + Date.now())
                        })),
                        r = e.data,
                        i = e.error;
                    return {
                        data: r,
                        error: i,
                        loading: n && !r && !i
                    }
                }
        },
        86933: function(n, t, e) {
            e.d(t, {
                kP: function() {
                    return h
                },
                Eg: function() {
                    return m
                },
                G9: function() {
                    return s
                },
                V: function() {
                    return d
                },
                zR: function() {
                    return f
                },
                BJ: function() {
                    return l
                },
                eH: function() {
                    return p
                }
            });
            var o = e(8100),
                r = e(50771),
                a = e(8151);
            var i = e(26042),
                u = e(69396),
                c = e(828);
            var l = function(n) {
                    var t = "".concat(a.E0, "?pool=").concat(n),
                        e = (0, o.ZP)(n ? t : null, r._i),
                        i = e.data,
                        u = e.error;
                    return {
                        data: i,
                        error: u,
                        loading: !i && !u
                    }
                },
                s = function(n) {
                    var t = "".concat(a.bV, "/").concat(n),
                        e = (0, o.ZP)(n ? t : null, r._i),
                        i = e.data,
                        u = e.error;
                    return {
                        data: i,
                        error: u,
                        loading: !i && !u
                    }
                },
                d = function(n) {
                    var t = "".concat(a.OT, "/").concat(n),
                        e = (0, o.ZP)(n ? t : null, r._i),
                        i = e.data,
                        u = e.error;
                    return {
                        data: i,
                        error: u,
                        loading: !i && !u
                    }
                },
                f = function(n) {
                    var t = "".concat(a.$2, "/smol/").concat(n),
                        e = (0, o.ZP)(n ? t : null, r._i),
                        i = e.data,
                        u = e.error;
                    return {
                        data: i,
                        error: u,
                        loading: !i && !u
                    }
                },
                m = function() {
                    var n = (0, o.ZP)("yield-api", (function() {
                            return (0, r.Kg)(function() {
                                for (var n = [], t = 1; t <= 10; t++) n.push("".concat(a.sp.replace("<PLACEHOLDER>", "".concat(t))));
                                return n
                            }())
                        }), {
                            onErrorRetry: r.Ti
                        }),
                        t = n.data,
                        e = n.error;
                    return {
                        data: null === t || void 0 === t ? void 0 : t.flat(),
                        error: e,
                        loading: !t && !e
                    }
                },
                h = function() {
                    var n = (0, o.ZP)("/pools-and-config", (function() {
                            return (0, r.Kg)([a.cb, a.Ny])
                        })),
                        t = n.data,
                        e = n.error,
                        l = (t ? function(n) {
                            var t, e, o, r, a, l, s, d = null !== (o = null === (t = n[0]) || void 0 === t ? void 0 : t.data) && void 0 !== o ? o : [],
                                f = null !== (r = null === (e = n[1]) || void 0 === e ? void 0 : e.protocols) && void 0 !== r ? r : [],
                                m = null !== (a = n[2]) && void 0 !== a ? a : [],
                                h = null !== (l = n[3]) && void 0 !== l ? l : [];
                            d = d.map((function(n) {
                                var t, e, o, r, a;
                                return (0, u.Z)((0, i.Z)({}, n), {
                                    symbol: void 0 !== n.poolMeta && null !== n.poolMeta && n.poolMeta.length > 1 ? "".concat(n.symbol, " (").concat(n.poolMeta, ")") : n.symbol,
                                    projectName: null === (t = f[n.project]) || void 0 === t ? void 0 : t.name,
                                    audits: null === (e = f[n.project]) || void 0 === e ? void 0 : e.audits,
                                    airdrop: null === (null === (o = f[n.project]) || void 0 === o ? void 0 : o.symbol) || "-" === (null === (r = f[n.project]) || void 0 === r ? void 0 : r.symbol),
                                    category: null === (a = f[n.project]) || void 0 === a ? void 0 : a.category,
                                    url: null !== (s = m[n.pool]) && void 0 !== s ? s : "",
                                    apyReward: n.apyReward > 0 ? n.apyReward : null,
                                    rewardTokens: n.apyReward > 0 ? n.rewardTokens : []
                                })
                            }));
                            var p = [],
                                v = new Set,
                                g = [],
                                y = new Set;
                            d.forEach((function(n) {
                                n.projectName && (p.push(n), v.add(n.chain), y.add(n.category), g.find((function(t) {
                                    return t.name === n.projectName
                                })) || g.push({
                                    name: n.projectName,
                                    slug: n.project
                                }))
                            }));
                            var b = {},
                                x = !0,
                                w = !1,
                                j = void 0;
                            try {
                                for (var A, k = Object.keys(f)[Symbol.iterator](); !(x = (A = k.next()).done); x = !0) {
                                    var Z = A.value;
                                    "cakedao" !== Z && (b[f[Z].symbol] = f[Z].name)
                                }
                            } catch (E) {
                                w = !0, j = E
                            } finally {
                                try {
                                    x || null == k.return || k.return()
                                } finally {
                                    if (w) throw j
                                }
                            }
                            var C = !0,
                                S = !1,
                                D = void 0;
                            try {
                                for (var _, T = h[Symbol.iterator](); !(C = (_ = T.next()).done); C = !0) {
                                    var I = _.value;
                                    b[I.tokenSymbol] = "xDai" === I.name ? "Gnosis" : I.name
                                }
                            } catch (E) {
                                S = !0, D = E
                            } finally {
                                try {
                                    C || null == T.return || T.return()
                                } finally {
                                    if (S) throw D
                                }
                            }
                            return b = Object.fromEntries(Object.entries(b).filter((function(n) {
                                var t = (0, c.Z)(n, 2),
                                    e = t[0];
                                return t[1], "null" !== e
                            }))), {
                                pools: p,
                                chainList: Array.from(v),
                                projectList: g,
                                categoryList: Array.from(y),
                                tokenNameMapping: b
                            }
                        }(t) : {
                            projectList: []
                        }).projectList;
                    return {
                        data: l,
                        error: e,
                        loading: !t && !e
                    }
                },
                p = function() {
                    var n = (0, o.ZP)(a.cb, r._i).data,
                        t = void 0 === n ? {} : n;
                    return {
                        data: null === t || void 0 === t ? void 0 : t.data
                    }
                }
        },
        3877: function(n, t, e) {
            e.d(t, {
                i: function() {
                    return r
                }
            });
            var o = e(63872),
                r = [{
                    name: "Staking",
                    key: o.cm.STAKING,
                    help: "Include governance tokens staked in the protocol"
                }, {
                    name: "Pool2",
                    key: o.cm.POOL2,
                    help: "Include staked lp tokens where one of the coins in the pair is the governance token"
                }, {
                    name: "Borrows",
                    key: o.cm.BORROWED,
                    help: "Include borrowed coins in lending protocols"
                }, {
                    name: "Double Count",
                    key: o.cm.DOUBLE_COUNT,
                    help: "Include TVL of protocols which TVL feeds into another protocol"
                }, {
                    name: "Liquid Staking",
                    key: o.cm.LIQUID_STAKING,
                    help: "Include Rewards/Liquidity for staked assets"
                }]
        },
        97599: function(n, t, e) {
            e.d(t, {
                F: function() {
                    return m
                },
                Q: function() {
                    return h
                }
            });
            var o = e(26042),
                r = e(69396),
                a = e(85893),
                i = e(17207),
                u = e(81060),
                c = e(83220),
                l = e(8386),
                s = e(19011),
                d = e(73340),
                f = {
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
                m = {
                    DeFi: (0, r.Z)((0, o.Z)({
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
                    }, f), {
                        icon: (0, a.jsx)(i.Z, {
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
                        icon: (0, a.jsx)(u.Z, {
                            size: 16
                        })
                    },
                    Stables: (0, r.Z)((0, o.Z)({
                        main: [{
                            name: "Overview",
                            path: "/stablecoins"
                        }, {
                            name: "Chains",
                            path: "/stablecoins/chains"
                        }]
                    }, f), {
                        icon: (0, a.jsx)(c.Z, {
                            size: 16
                        })
                    }),
                    Liquidations: (0, r.Z)((0, o.Z)({
                        main: []
                    }, f), {
                        icon: (0, a.jsx)(l.Z, {
                            size: 16
                        })
                    }),
                    DEXs: (0, r.Z)((0, o.Z)({
                        main: [{
                            name: "Overview",
                            path: "/dexs"
                        }, {
                            name: "Chains",
                            path: "/dexs/chains"
                        }]
                    }, f), {
                        icon: (0, a.jsx)(s.Z, {
                            size: 16
                        })
                    }),
                    Fees: (0, r.Z)((0, o.Z)({
                        main: []
                    }, f), {
                        icon: (0, a.jsx)(d.Z, {
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
        78981: function(n, t, e) {
            e.r(t), e.d(t, {
                default: function() {
                    return An
                }
            });
            var o = e(7297),
                r = e(85893),
                a = e(41664),
                i = e.n(a),
                u = e(61608),
                c = e.n(u),
                l = e(73324),
                s = e(64017),
                d = {
                    src: "/_next/static/media/logo_white_long.74912819.png",
                    height: 53,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEVMaXH0+P7////y9fqszfz///////9zn+MZTZ4LVMT3+f0AU+O3zO7PyUb6AAAADHRSTlMACVgM3T038VCpcDWUhC60AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQImQXBiQEAIAwCsQP8Wt1/XhP2IRLwavayzbiIKB8FTABcRohuhwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 3
                },
                f = e(67294),
                m = e(11163),
                h = e(49070),
                p = e(83206),
                v = e(86453),
                g = e(93923),
                y = e(93005),
                b = e(14137),
                x = e(76386),
                w = e(52969),
                j = e(9178),
                A = e(74646),
                k = e(76306);

            function Z() {
                var n = (0, o.Z)(["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, o.Z)(["\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 8px;\n\tright: 8px;\n\tborder-radius: 4px;\n\tz-index: 1;\n"]);
                return C = function() {
                    return n
                }, n
            }

            function S() {
                var n = D()({}),
                    t = n.data,
                    e = n.loading,
                    o = n.onSearchTermChange,
                    a = n.onItemClick,
                    i = (0, h.q)({
                        gutter: 6,
                        sameWidth: !0,
                        list: t.map((function(n) {
                            return n.name
                        }))
                    });
                return (0, f.useEffect)((function() {
                    o && o(i.value)
                }), [i.value, o]), !i.mounted && i.value && i.setValue(""), (0, r.jsxs)(r.Fragment, {
                    children: [i.mounted ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(T, {
                            state: i,
                            placeholder: "Search...",
                            breadCrumbs: !0,
                            autoFocus: !0
                        })
                    }) : (0, r.jsx)(_, {
                        onClick: function() {
                            return i.toggle()
                        },
                        children: (0, r.jsx)(p.Z, {
                            height: 16,
                            width: 16
                        })
                    }), (0, r.jsx)(A.u, {
                        state: i,
                        data: t,
                        loading: e,
                        onItemClick: a
                    })]
                })
            }
            var D = function() {
                    var n = (0, m.useRouter)();
                    return n.pathname.startsWith("/yields/optimizer") ? w.ED : n.pathname.startsWith("/yields") ? w.uL : n.pathname.startsWith("/stablecoin") ? x.D : n.pathname.startsWith("/liquidations") ? g.H : n.pathname.startsWith("/dex") ? v.H : n.pathname.startsWith("/nfts") ? y.S : n.pathname.startsWith("/raises") ? k.n : b._
                },
                _ = l.default.button.withConfig({
                    componentId: "sc-c50b213c-0"
                })(Z(), (function(n) {
                    return n.theme.shadow
                })),
                T = (0, l.default)(j.I).withConfig({
                    componentId: "sc-c50b213c-1"
                })(C()),
                I = e(90408),
                E = e(78268),
                P = e(80628),
                L = e(97599),
                U = e(26183);

            function O() {
                var n = (0, o.Z)(["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"]);
                return O = function() {
                    return n
                }, n
            }

            function M() {
                var n = (0, o.Z)(["\n\tmargin-left: auto;\n\tcolor: ", ";\n"]);
                return M = function() {
                    return n
                }, n
            }
            var z = l.default.button.withConfig({
                    componentId: "sc-fe59f67d-0"
                })(O(), (function(n) {
                    return n.theme.shadow
                })),
                R = l.default.button.withConfig({
                    componentId: "sc-fe59f67d-1"
                })(M(), (function(n) {
                    return n.theme.text1
                }));

            function V() {
                var n = (0, o.Z)(["\n  0% {\n    opacity: 0;\n\t\tright: -100%;\n  }\n  100% {\n    opacity: 1;\n\t\tright: 0%;\n  }\n"]);
                return V = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, o.Z)(["\n\tdisplay: none;\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgb(0 0 0 / 10%);\n\n\t&[data-acitve='true'] {\n\t\tdisplay: block;\n\t}\n"]);
                return N = function() {
                    return n
                }, n
            }

            function H() {
                var n = (0, o.Z)(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: auto;\n\tdisplay: flex;\n\tpadding: 16px 16px 40px;\n\twidth: 100%;\n\tmax-width: 300px;\n\tbackground: ", ";\n\tflex-direction: column;\n\tgap: 20px;\n\tanimation: 0.2s ", " ease;\n\n\t& > * {\n\t\tcolor: ", ";\n\t\topacity: 0.7;\n\t\tpadding: 0;\n\t\tfont-weight: 500;\n\t}\n\n\tbutton {\n\t\ttext-align: start;\n\t}\n\n\t& > *[data-linksheader] {\n\t\tfont-size: 0.75rem;\n\t\topacity: 0.5;\n\t}\n"]);
                return H = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, o.Z)(["\n\t&[open] #chevron {\n\t\ttransform: rotate(90deg);\n\t}\n\n\t& > summary {\n\t\tdisplay: flex;\n\t\tgap: 12px;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\tfont-weight: 500;\n\t}\n\n\t& > summary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n"]);
                return W = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, o.Z)(["\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n"]);
                return B = function() {
                    return n
                }, n
            }

            function q() {
                var n = (0, o.Z)(["\n\tfont-weight: 500;\n\tmargin-left: 32px;\n"]);
                return q = function() {
                    return n
                }, n
            }
            var F = (0, l.keyframes)(V()),
                G = l.default.div.withConfig({
                    componentId: "sc-f190c59a-0"
                })(N()),
                Q = l.default.nav.withConfig({
                    componentId: "sc-f190c59a-1"
                })(H(), (function(n) {
                    return n.theme.bg1
                }), F, (function(n) {
                    return n.theme.text1
                }));

            function X() {
                var n = (0, f.useState)(!1),
                    t = n[0],
                    e = n[1],
                    o = (0, f.useRef)(null),
                    a = (0, f.useRef)(null),
                    u = (0, U.vM)() ? L.F.Yields : L.F.DeFi;
                return (0, f.useEffect)((function() {
                    var n = function(n) {
                        o.current && a.current && (o.current.contains(n.target) || a.current.isSameNode(n.target) || "togglemenuoff" in n.target.dataset) || e(!1)
                    };
                    return document.addEventListener("click", n),
                        function() {
                            document.removeEventListener("click", n)
                        }
                }), []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(z, {
                        onClick: function() {
                            return e(!t)
                        },
                        ref: o,
                        children: [(0, r.jsx)("span", {
                            className: "visually-hidden",
                            children: "Open Navigation Menu"
                        }), (0, r.jsx)(I.Z, {
                            height: 16,
                            width: 16
                        })]
                    }), (0, r.jsx)(G, {
                        "data-acitve": t,
                        children: (0, r.jsxs)(Q, {
                            ref: a,
                            children: [(0, r.jsxs)(R, {
                                onClick: function() {
                                    return e(!t)
                                },
                                children: [(0, r.jsx)("span", {
                                    className: "visually-hidden",
                                    children: "Close Navigation Menu"
                                }), (0, r.jsx)(E.Z, {
                                    height: 20,
                                    width: 20,
                                    strokeWidth: "4px"
                                })]
                            }), (0, r.jsxs)("p", {
                                "data-linksheader": !0,
                                children: [(0, r.jsx)("span", {
                                    style: {
                                        width: "30px",
                                        display: "inline-block"
                                    }
                                }), "Dashboards"]
                            }), Object.keys(L.F).map((function(n) {
                                return (0, r.jsx)(Y, {
                                    name: n
                                }, n)
                            })), (0, r.jsx)("hr", {}), (0, r.jsxs)("p", {
                                "data-linksheader": !0,
                                children: [(0, r.jsx)("span", {
                                    style: {
                                        width: "30px",
                                        display: "inline-block"
                                    }
                                }), "Tools"]
                            }), u.tools.map((function(n) {
                                return "onClick" in n ? (0, r.jsxs)("button", {
                                    onClick: n.onClick,
                                    children: [(0, r.jsx)("span", {
                                        style: {
                                            width: "32px",
                                            display: "inline-block"
                                        }
                                    }), n.name]
                                }, n.name) : (0, r.jsx)(f.Fragment, {
                                    children: (0, r.jsx)(i(), {
                                        href: n.path,
                                        prefetch: !1,
                                        passHref: !0,
                                        children: (0, r.jsxs)("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, r.jsx)("span", {
                                                style: {
                                                    width: "32px",
                                                    display: "inline-block"
                                                }
                                            }), (0, r.jsx)("span", {
                                                children: n.name
                                            })]
                                        })
                                    }, n.path)
                                }, n.name)
                            })), (0, r.jsx)("hr", {}), u.footer.map((function(n) {
                                return "onClick" in n ? (0, r.jsxs)("button", {
                                    onClick: n.onClick,
                                    children: [(0, r.jsx)("span", {
                                        style: {
                                            width: "32px",
                                            display: "inline-block"
                                        }
                                    }), n.name]
                                }, n.name) : (0, r.jsx)(f.Fragment, {
                                    children: (0, r.jsx)(i(), {
                                        href: n.path,
                                        prefetch: !1,
                                        passHref: !0,
                                        children: (0, r.jsxs)("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, r.jsx)("span", {
                                                style: {
                                                    width: "32px",
                                                    display: "inline-block"
                                                }
                                            }), (0, r.jsx)("span", {
                                                children: n.name
                                            })]
                                        })
                                    }, n.path)
                                }, n.name)
                            }))]
                        })
                    })]
                })
            }
            var Y = (0, f.forwardRef)((function(n, t) {
                    var e, o = n.name,
                        a = L.Q.find((function(n) {
                            return n.name === o
                        })),
                        u = (0, m.useRouter)();
                    return a || "Yields" === o && !u.pathname.startsWith("/yields") ? (0, r.jsx)(i(), {
                        href: null !== (e = null === a || void 0 === a ? void 0 : a.url) && void 0 !== e ? e : "/yields",
                        passHref: !0,
                        children: (0, r.jsx)($, {
                            children: o
                        })
                    }) : (0, r.jsxs)(K, {
                        ref: t,
                        children: [(0, r.jsxs)("summary", {
                            "data-togglemenuoff": !1,
                            children: [(0, r.jsx)(P.Z, {
                                size: 18,
                                id: "chevron",
                                "data-togglemenuoff": !1
                            }), (0, r.jsx)("span", {
                                "data-togglemenuoff": !1,
                                children: o
                            })]
                        }), (0, r.jsx)(J, {
                            children: L.F[o].main.map((function(n) {
                                return (0, r.jsx)(i(), {
                                    href: n.path,
                                    prefetch: !1,
                                    passHref: !0,
                                    children: (0, r.jsxs)("a", {
                                        children: [(0, r.jsx)("span", {
                                            style: {
                                                width: "32px",
                                                display: "inline-block"
                                            }
                                        }), (0, r.jsx)("span", {
                                            children: n.name
                                        })]
                                    })
                                }, n.path)
                            }))
                        })]
                    })
                })),
                K = l.default.details.withConfig({
                    componentId: "sc-f190c59a-2"
                })(W()),
                J = l.default.div.withConfig({
                    componentId: "sc-f190c59a-3"
                })(B()),
                $ = l.default.a.withConfig({
                    componentId: "sc-f190c59a-4"
                })(q()),
                nn = e(828),
                tn = e(79161),
                en = e(14984),
                on = e(70006),
                rn = e(56277),
                an = e(78823),
                un = e(77662),
                cn = e(63947),
                ln = e(63872),
                sn = e(3877),
                dn = [{
                    name: "Display in USD",
                    key: ln.uW.DISPLAY_USD,
                    help: "Display metrics in USD"
                }, {
                    name: "Hide last day",
                    key: ln.uW.HIDE_LAST_DAY,
                    help: "Hide the last day of data"
                }];

            function fn() {
                var n = (0, o.Z)(["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"]);
                return fn = function() {
                    return n
                }, n
            }

            function mn() {
                var n = (0, o.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tpadding: 12px 8px;\n\twidth: 100%;\n\tmax-width: none;\n\tmax-height: calc(100vh - 200px);\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 4px 0;\n\t\tmax-height: 400px;\n\t\tmax-width: min(calc(100vw - 16px), 320px);\n\t\tfont-weight: 400;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-5%);\n\t}\n"]);
                return mn = function() {
                    return n
                }, n
            }

            function hn() {
                var n = (0, o.Z)(["\n\tcolor: ", ";\n\tmargin: 8px 12px 4px;\n\tpadding-bottom: 4px;\n\tborder-bottom: 1px solid ", ";\n\n\t@media screen and (min-width: 640px) {\n\t\tdisplay: none;\n\t}\n"]);
                return hn = function() {
                    return n
                }, n
            }

            function pn() {
                var n = (0, o.Z)(["\n\tpadding: 8px 12px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tmin-width: 160px;\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 8px 12px;\n\t}\n"]);
                return pn = function() {
                    return n
                }, n
            }

            function vn() {
                var n = (0, nn.Z)((0, ln.m$)(), 1)[0],
                    t = gn(),
                    e = t.options,
                    o = t.useSettings,
                    a = (0, nn.Z)(o(), 2),
                    i = a[0],
                    u = a[1],
                    c = e.map((function(n) {
                        return n.key
                    })).filter((function(n) {
                        return i[n]
                    })).concat(n ? [ln.VH] : []),
                    l = (0, nn.Z)((0, cn.eG)(), 2),
                    s = l[0],
                    d = l[1],
                    f = (0, tn.d)({
                        value: c,
                        setValue: function(n) {
                            if (n.length < c.length) {
                                var t = c.find((function(t) {
                                    return !n.includes(t)
                                }));
                                u(t)()
                            } else {
                                var e = n.find((function(n) {
                                    return !c.includes(n)
                                }));
                                u(e)()
                            }
                        },
                        animated: !0,
                        renderCallback: d
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(yn, {
                        state: f,
                        children: [(0, r.jsx)("span", {
                            className: "visually-hidden",
                            children: "Open Settings Menu"
                        }), (0, r.jsx)(un.Z, {
                            height: 16,
                            width: 16
                        })]
                    }), (0, r.jsxs)(bn, {
                        state: f,
                        modal: !s,
                        children: [(0, r.jsx)(xn, {
                            children: "Settings"
                        }), e.map((function(n) {
                            return (0, r.jsxs)(wn, {
                                value: n.key,
                                children: [n.name, (0, r.jsx)(en.v, {})]
                            }, n.key)
                        })), (0, r.jsxs)(wn, {
                            value: ln.VH,
                            children: ["Dark Mode", (0, r.jsx)(en.v, {})]
                        })]
                    })]
                })
            }
            var gn = function() {
                    var n = (0, m.useRouter)();
                    return n.pathname.startsWith("/yields") || n.pathname.startsWith("/stablecoin") || n.pathname.startsWith("/liquidations") || n.pathname.startsWith("/dex") ? {
                        options: [],
                        useSettings: ln.M5
                    } : n.pathname.startsWith("/nfts") ? {
                        options: dn,
                        useSettings: ln.cZ
                    } : {
                        options: sn.i,
                        useSettings: ln.M5
                    }
                },
                yn = (0, l.default)(on.P).withConfig({
                    componentId: "sc-aade4500-0"
                })(fn(), (function(n) {
                    return n.theme.shadow
                })),
                bn = (0, l.default)(rn.v).withConfig({
                    componentId: "sc-aade4500-1"
                })(mn(), (function(n) {
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
                })),
                xn = l.default.div.withConfig({
                    componentId: "sc-aade4500-2"
                })(hn(), (function(n) {
                    return n.theme.text2
                }), (function(n) {
                    return "dark" === n.theme.mode ? "#40444f" : "#cbcbcb"
                })),
                wn = (0, l.default)(an.Q).withConfig({
                    componentId: "sc-aade4500-3"
                })(pn());

            function jn() {
                var n = (0, o.Z)(["\n\tdisplay: flex;\n\tz-index: 10;\n\n\tbutton {\n\t\tflex-shrink: 0;\n\t}\n\n\t@media (min-width: ", ") {\n\t\tdisplay: none;\n\t}\n"]);
                return jn = function() {
                    return n
                }, n
            }

            function An() {
                return (0, r.jsxs)(kn, {
                    children: [(0, r.jsx)(i(), {
                        href: "/",
                        passHref: !0,
                        children: (0, r.jsxs)(s.K7, {
                            children: [(0, r.jsx)("span", {
                                className: "visually-hidden",
                                children: "Navigate to Home Page"
                            }), (0, r.jsx)(c(), {
                                src: d,
                                alt: "Navigate to Home Page",
                                priority: !0
                            })]
                        })
                    }), (0, r.jsx)(S, {}), (0, r.jsx)(vn, {}), (0, r.jsx)(X, {})]
                })
            }
            var kn = (0, l.default)(s.h4).withConfig({
                componentId: "sc-feab491f-0"
            })(jn(), (function(n) {
                return n.theme.bpLg
            }))
        },
        63947: function(n, t, e) {
            e.d(t, {
                eG: function() {
                    return i
                }
            });
            var o = e(67294),
                r = e(84545);

            function a(n, t) {
                if (!n) return function() {};
                var e = n.style.cssText;
                Object.assign(n.style, t);
                return function() {
                    n.style.cssText = e
                }
            }

            function i() {
                var n = (0, r.Z)("(min-width: 640px)", !0),
                    t = (0, o.useCallback)((function(t) {
                        var e = t.popover,
                            o = t.defaultRenderCallback;
                        return n ? o() : function(n, t) {
                            var e = a(n, {
                                    position: "fixed",
                                    bottom: "0",
                                    width: "100%",
                                    top: "unset"
                                }),
                                o = a(t, {
                                    display: "none"
                                });
                            return function() {
                                e(), o()
                            }
                        }(e)
                    }), [n]);
                return [n, t]
            }
        },
        9178: function(n, t, e) {
            e.d(t, {
                I: function() {
                    return v
                }
            });
            var o = e(26042),
                r = e(99534),
                a = e(7297),
                i = e(85893),
                u = e(95005),
                c = e(73324),
                l = e(78268),
                s = e(83206),
                d = e(67294);

            function f() {
                var n = (0, a.Z)(["\n\tpadding: 14px 16px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: none;\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t\tfont-size: 1rem;\n\t}\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"]);
                return f = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, a.Z)(["\n\tposition: absolute;\n\ttop: 22px;\n\tright: 20px;\n\tz-index: 1;\n\n\t& > svg {\n\t\tcolor: ", ";\n\t\theight: 20px;\n\t\twidth: 20px;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\ttop: 14px;\n\t\tright: 16px;\n\t}\n"]);
                return m = function() {
                    return n
                }, n
            }
            var h = (0, c.default)(u.h).withConfig({
                    componentId: "sc-b9a8b276-0"
                })(f(), (function(n) {
                    return n.theme.bg6
                }), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    return n.theme.text3
                }), (function(n) {
                    return "1px solid " + n.theme.text4
                }), (function(n) {
                    return n.theme.bpLg
                }), (function(n) {
                    return n.theme.divider
                })),
                p = c.default.button.withConfig({
                    componentId: "sc-b9a8b276-1"
                })(m(), (function(n) {
                    return n.theme.text3
                }), (function(n) {
                    return n.theme.bpLg
                }));

            function v(n) {
                var t = n.state,
                    e = n.placeholder,
                    a = n.breadCrumbs,
                    u = n.withValue,
                    c = (0, r.Z)(n, ["state", "placeholder", "breadCrumbs", "withValue"]),
                    f = d.useCallback((function() {
                        t.mounted && u && t.setValue(""), t.toggle()
                    }), [t.mounted, u, t]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(h, (0, o.Z)({
                        state: t,
                        placeholder: e,
                        style: a ? {
                            borderBottomLeftRadius: "0",
                            borderBottomRightRadius: 0
                        } : {},
                        autoSelect: !0
                    }, c)), (0, i.jsx)(p, {
                        onClick: f,
                        children: t.mounted ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("span", {
                                className: "visually-hidden",
                                children: "Close Search"
                            }), (0, i.jsx)(l.Z, {})]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("span", {
                                className: "visually-hidden",
                                children: "Open Search"
                            }), (0, i.jsx)(s.Z, {})]
                        })
                    })]
                })
            }
        },
        74646: function(n, t, e) {
            e.d(t, {
                u: function() {
                    return j
                }
            });
            var o = e(26042),
                r = e(69396),
                a = e(99534),
                i = e(7297),
                u = e(29815),
                c = e(85893),
                l = e(11163),
                s = e(73324),
                d = e(53839),
                f = e(73469);

            function m() {
                var n = (0, i.Z)(["\n\tpadding: 12px 14px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tfont-size: 0.85rem;\n\tcolor: ", ";\n\n\t& > * {\n\t\tmargin-right: 6px;\n\t}\n\n\t:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: ", ";\n\t}\n\n\t&[data-active-item] {\n\t\tbackground-color: ", ";\n\t}\n"]);
                return m = function() {
                    return n
                }, n
            }
            var h = (0, s.default)(d.l).withConfig({
                    componentId: "sc-5f8560be-0"
                })(m(), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    return n.theme.bg2
                }), (function(n) {
                    return n.theme.bg2
                })),
                p = function(n) {
                    var t, e = n.index,
                        o = n.style,
                        r = n.data,
                        a = r.searchData,
                        i = r.options,
                        u = r.onItemClick,
                        s = i[e],
                        d = a.find((function(n) {
                            return n.name === s
                        })),
                        m = (0, l.useRouter)();
                    return (0, c.jsxs)(h, {
                        value: s,
                        onClick: function() {
                            u ? u(d) : m.push(d.route)
                        },
                        style: o,
                        focusOnHover: !0,
                        children: [(null === d || void 0 === d ? void 0 : d.logo) && (0, c.jsx)(f.Z, {
                            logo: null === d || void 0 === d ? void 0 : d.logo,
                            external: (t = d.logo, null === t || void 0 === t ? void 0 : t.includes("http")),
                            skipApiRoute: m.pathname.includes("/yield")
                        }), (0, c.jsx)("span", {
                            children: s
                        })]
                    }, s)
                },
                v = e(49821),
                g = e(41578);

            function y() {
                var n = (0, i.Z)(["\n\theight: 100%;\n\tmax-height: 320px;\n\toverflow-y: auto;\n\tbackground: ", ";\n\tborder-bottom-left-radius: 12px;\n\tborder-bottom-right-radius: 12px;\n\toutline: ", ";\n\tbox-shadow: ", ";\n\ttransform: translate(0px, -5px);\n\tz-index: 10;\n"]);
                return y = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, i.Z)(["\n\tpadding: 24px 12px;\n\tcolor: ", ";\n\ttext-align: center;\n"]);
                return b = function() {
                    return n
                }, n
            }
            var x = (0, s.default)(g.S).withConfig({
                    componentId: "sc-d33c0cd2-0"
                })(y(), (function(n) {
                    return n.theme.bg6
                }), (function(n) {
                    return "1px solid " + n.theme.text5
                }), (function(n) {
                    return n.theme.shadowLg
                })),
                w = s.default.div.withConfig({
                    componentId: "sc-d33c0cd2-1"
                })(b(), (function(n) {
                    return n.theme.text1
                }));

            function j(n) {
                var t = n.state,
                    e = n.data,
                    i = n.loading,
                    u = n.onItemClick,
                    l = (0, a.Z)(n, ["state", "data", "loading", "onItemClick"]);
                return (0, c.jsx)(x, (0, r.Z)((0, o.Z)({
                    state: t
                }, l), {
                    children: i || !t.mounted ? (0, c.jsx)(w, {
                        children: "Loading..."
                    }) : t.matches.length ? (0, c.jsx)(v.t7, {
                        height: 50 * t.matches.length > 240 ? 240 : 50 * t.matches.length,
                        width: "100%",
                        itemCount: t.matches.length,
                        itemSize: 50,
                        itemData: {
                            searchData: e,
                            options: t.value.length > 2 ? A(t.matches) : t.matches,
                            onItemClick: u
                        },
                        children: p
                    }) : (0, c.jsx)(w, {
                        children: "No results found"
                    })
                }))
            }
            var A = function(n) {
                var t = n.reduce((function(n, t) {
                        return t.startsWith("Show all") ? n.pools.push(t) : n.tokens.push(t), n
                    }), {
                        tokens: [],
                        pools: []
                    }),
                    e = t.pools,
                    o = t.tokens;
                return (0, u.Z)(e).concat((0, u.Z)(o))
            }
        },
        86453: function(n, t, e) {
            e.d(t, {
                H: function() {
                    return i
                }
            });
            var o = e(67294),
                r = e(95086),
                a = e(17882);

            function i(n) {
                var t = (0, r.X_)(),
                    e = t.data,
                    i = t.loading,
                    u = o.useMemo((function() {
                        var t, o, r = !0 === n ? null === e || void 0 === e || null === (t = e.allChains) || void 0 === t ? void 0 : t.map((function(n) {
                                return {
                                    name: n
                                }
                            })) : null === e || void 0 === e ? void 0 : e.dexs,
                            i = !0 === n ? "/dexs" : "/dex",
                            u = !0 === n ? a.jG : a.cT;
                        return null !== (o = null === r || void 0 === r ? void 0 : r.map((function(n) {
                            return {
                                logo: u(n.name),
                                route: "".concat(i, "/").concat((0, a.R5)(n.name)),
                                name: n.name
                            }
                        }))) && void 0 !== o ? o : []
                    }), [e, n]);
                return {
                    data: u,
                    loading: i,
                    error: !e && !i
                }
            }
        },
        93923: function(n, t, e) {
            e.d(t, {
                H: function() {
                    return u
                }
            });
            var o = e(47568),
                r = e(20414),
                a = e(67294),
                i = e(30137);

            function u() {
                var n = (0, a.useState)({
                        data: [],
                        loading: !0
                    }),
                    t = n[0],
                    e = n[1];
                return (0, a.useEffect)((function() {
                    var n = function() {
                        var n = (0, o.Z)((function() {
                            var n;
                            return (0, r.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (0, i.J8)()];
                                    case 1:
                                        return n = t.sent(), e({
                                            data: n.assets,
                                            loading: !1
                                        }), [2]
                                }
                            }))
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                    n().catch((function(n) {
                        console.error(n)
                    }))
                }), []), t
            }
        },
        93005: function(n, t, e) {
            e.d(t, {
                S: function() {
                    return d
                }
            });
            var o = e(828),
                r = e(67294),
                a = e(47568),
                i = e(20414),
                u = e(8100),
                c = e(10362),
                l = e(50771),
                s = e(8151);
            (function() {
                var n = (0, a.Z)((function() {
                    var n, t, e, o, r;
                    return (0, i.__generator)(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 3, , 4]), [4, fetch(s.Ze).then((function(n) {
                                    return n.json()
                                }))];
                            case 1:
                                return n = a.sent(), [4, fetch(s.Gt).then((function(n) {
                                    return n.json()
                                }))];
                            case 2:
                                return t = a.sent(), e = t.data, o = function(n) {
                                    var t, e, o, r, a = n.length && n.reduce((function(n, t) {
                                            var e, o, r, a;
                                            return n.totalVolumeUSD >= 0 && n.totalVolume >= 0 ? (n.totalVolumeUSD += null !== (e = t.volumeUSD) && void 0 !== e ? e : 0, n.totalVolume += null !== (o = t.volume) && void 0 !== o ? o : 0) : (n.totalVolumeUSD = null !== (r = t.volumeUSD) && void 0 !== r ? r : 0, n.totalVolume = null !== (a = t.volume) && void 0 !== a ? a : 0), n
                                        }), {}) || {
                                            totalVolume: 0,
                                            totalVolumeUSD: 0
                                        },
                                        i = a.totalVolume,
                                        u = a.totalVolumeUSD,
                                        c = n.length && (null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.volume) || 0,
                                        l = n.length && (null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.volumeUSD) || 0;
                                    return {
                                        totalVolumeUSD: u,
                                        totalVolume: i,
                                        dailyVolumeUSD: l,
                                        dailyVolume: c,
                                        dailyChange: n.length ? (l - (null === (o = n[n.length - 2]) || void 0 === o ? void 0 : o.volumeUSD)) / (null === (r = n[n.length - 2]) || void 0 === r ? void 0 : r.volumeUSD) * 100 : 0
                                    }
                                }(n), [2, {
                                    chart: n,
                                    collections: e,
                                    statistics: o
                                }];
                            case 3:
                                return r = a.sent(), console.log(r), [2, {
                                    chart: [],
                                    collections: [],
                                    statistics: {}
                                }];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            })(),
            function() {
                var n = (0, a.Z)((function() {
                    var n, t;
                    return (0, i.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, fetch(s.Gt).then((function(n) {
                                    return n.json()
                                }))];
                            case 1:
                                return n = e.sent(), [2, n.data];
                            case 2:
                                return t = e.sent(), console.log(t), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function(n) {
                    var t, e;
                    return (0, i.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, fetch("".concat(s.Gt, "/chain/").concat(n)).then((function(n) {
                                    return n.json()
                                }))];
                            case 1:
                                return t = o.sent(), [2, t.data];
                            case 2:
                                return e = o.sent(), console.log(e), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function(n) {
                    var t, e;
                    return (0, i.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, fetch("".concat(s.Gt, "/marketplace/").concat(n)).then((function(n) {
                                    return n.json()
                                }))];
                            case 1:
                                return t = o.sent(), [2, t.data];
                            case 2:
                                return e = o.sent(), console.log(e), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function(n) {
                    var t;
                    return (0, i.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, fetch("".concat(s.rQ, "/").concat(n)).then((function(n) {
                                    return n.json()
                                }))];
                            case 1:
                                return [2, e.sent().find((function(n) {
                                    return "overview" === n.SK
                                }))];
                            case 2:
                                return t = e.sent(), console.log(t), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function(n) {
                    return (0, i.__generator)(this, (function(t) {
                        try {
                            return [2, fetch("".concat(s.Ze, "/chain/").concat(n)).then((function(n) {
                                return n.json()
                            }))]
                        } catch (e) {
                            console.log(e)
                        }
                        return [2]
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function(n) {
                    return (0, i.__generator)(this, (function(t) {
                        try {
                            return [2, fetch("".concat(s.Ze, "/marketplace/").concat(n)).then((function(n) {
                                return n.json()
                            }))]
                        } catch (e) {
                            console.log(e)
                        }
                        return [2]
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function(n) {
                    return (0, i.__generator)(this, (function(t) {
                        try {
                            return [2, fetch("".concat(s.Ze, "/collection/").concat(n)).then((function(n) {
                                return n.json()
                            }))]
                        } catch (e) {
                            console.log(e)
                        }
                        return [2]
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function() {
                    return (0, i.__generator)(this, (function(n) {
                        try {
                            return [2, fetch(s.zt).then((function(n) {
                                return n.json()
                            }))]
                        } catch (t) {
                            console.log(t)
                        }
                        return [2]
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function() {
                    return (0, i.__generator)(this, (function(n) {
                        try {
                            return [2, fetch(s.Nm).then((function(n) {
                                return n.json()
                            }))]
                        } catch (t) {
                            console.log(t)
                        }
                        return [2]
                    }))
                }))
            }(),
            function() {
                var n = (0, a.Z)((function(n) {
                    var t;
                    return (0, i.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 3, , 4]), n ? [4, fetch("".concat(s.DW, "?query=").concat(n)).then((function(n) {
                                    return n.json()
                                }))] : [3, 2];
                            case 1:
                                return [2, e.sent().hits.map((function(n) {
                                    return n._source
                                }))];
                            case 2:
                                return [2, []];
                            case 3:
                                return t = e.sent(), console.log(t), [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }();

            function d() {
                var n = (0, o.Z)(r.useState(null), 2),
                    t = n[0],
                    e = n[1],
                    a = function(n) {
                        var t, e, o, r = (0, c.Z)(n, 500),
                            a = (0, u.ZP)(r ? "".concat(s.DW, "?query=").concat(r) : s.Gt, l._i),
                            i = a.data,
                            d = a.error;
                        return {
                            data: null !== (o = null !== (e = null === i || void 0 === i || null === (t = i.hits) || void 0 === t ? void 0 : t.map((function(n) {
                                return n._source
                            }))) && void 0 !== e ? e : null === i || void 0 === i ? void 0 : i.data) && void 0 !== o ? o : null,
                            error: null === d || void 0 === d ? void 0 : d.error,
                            loading: !i && !d && !!n || n != r
                        }
                    }(t),
                    i = a.data,
                    d = a.loading,
                    f = r.useMemo((function() {
                        var n;
                        return null !== (n = null === i || void 0 === i ? void 0 : i.map((function(n) {
                            return {
                                name: n.name,
                                route: "/nfts/collection/".concat(n.slug),
                                logo: n.logo
                            }
                        }))) && void 0 !== n ? n : []
                    }), [i]);
                return {
                    data: f,
                    loading: d,
                    error: !i && !d,
                    onSearchTermChange: e
                }
            }
        },
        14137: function(n, t, e) {
            e.d(t, {
                _: function() {
                    return h
                }
            });
            var o = e(26042),
                r = e(69396),
                a = e(29815),
                i = e(11163),
                u = e(67294),
                c = e(68141),
                l = e(17882),
                s = e(76489),
                d = e(23046),
                f = [{
                    name: "Non-EVM",
                    route: "/chains/Non-EVM",
                    logo: d.Z.src
                }, {
                    name: "EVM",
                    route: "/chains/EVM",
                    logo: d.Z.src
                }, {
                    name: "Rollup",
                    route: "/chains/Rollup",
                    logo: d.Z.src
                }, {
                    name: "Cosmos",
                    route: "/chains/Cosmos",
                    logo: d.Z.src
                }, {
                    name: "Parachain",
                    route: "/chains/Parachain",
                    logo: d.Z.src
                }, {
                    name: "Chains - Polkadot",
                    route: "/chains/Polkadot",
                    logo: (0, l.jG)("polkadot")
                }, {
                    name: "Chains - Kusama",
                    route: "/chains/Kusama",
                    logo: (0, l.jG)("kusama")
                }],
                m = function(n) {
                    return "-" !== n.symbol && n.symbol ? "".concat(n.name, " (").concat(n.symbol, ")") : n.name
                };

            function h(n) {
                var t = n.includedSets,
                    e = void 0 === t ? Object.values(s.O) : t,
                    d = n.customPath,
                    h = (0, c.tH)(),
                    p = h.data,
                    v = h.loading,
                    g = (0, i.useRouter)().pathname,
                    y = (0, u.useMemo)((function() {
                        var n, t, i, u, c = null === e || void 0 === e ? void 0 : e.includes(s.O.CHAINS),
                            h = d || function(n) {
                                return "/chain/".concat(n)
                            },
                            v = c && null !== (i = null === p || void 0 === p || null === (n = p.chains) || void 0 === n ? void 0 : n.map((function(n) {
                                return {
                                    logo: (0, l.jG)(n),
                                    route: h(n),
                                    name: n
                                }
                            }))) && void 0 !== i ? i : [],
                            y = null === e || void 0 === e ? void 0 : e.includes(s.O.PROTOCOLS),
                            b = d || function(n) {
                                return "/protocol/".concat((0, l.R5)(n))
                            },
                            x = y && null !== (u = null === p || void 0 === p || null === (t = p.protocols) || void 0 === t ? void 0 : t.map((function(n) {
                                return (0, r.Z)((0, o.Z)({}, n), {
                                    name: m(n),
                                    symbol: n.symbol,
                                    logo: (0, l.cT)(n.name),
                                    route: b(n.name)
                                })
                            }))) && void 0 !== u ? u : [],
                            w = g.startsWith("/protocol") ? (0, a.Z)(x).concat((0, a.Z)(v)) : (0, a.Z)(v).concat((0, a.Z)(x));
                        if (null === e || void 0 === e ? void 0 : e.includes(s.O.GROUPED_CHAINS)) {
                            var j, A = f;
                            d && (A = f.map((function(n) {
                                return (0, r.Z)((0, o.Z)({}, n), {
                                    route: d(n.name)
                                })
                            }))), (j = w).push.apply(j, (0, a.Z)(A))
                        }
                        return w
                    }), [p, g, d, e]);
                return {
                    data: y,
                    loading: v
                }
            }
        },
        76306: function(n, t, e) {
            e.d(t, {
                n: function() {
                    return c
                }
            });
            var o = e(8100),
                r = e(8151),
                a = e(50771);

            function i(n) {
                if (!n) return [];
                var t = new Set;
                return n.raises.forEach((function(n) {
                    n.leadInvestors.forEach((function(n) {
                        t.add(n.trim())
                    })), n.otherInvestors.forEach((function(n) {
                        t.add(n.trim())
                    }))
                })), Array.from(t).sort()
            }
            var u = e(17882);

            function c() {
                var n = function() {
                        var n = (0, o.ZP)(r.CQ, a._i),
                            t = n.data,
                            e = n.error;
                        return {
                            data: t,
                            error: e,
                            loading: !t && !e
                        }
                    }(),
                    t = n.data,
                    e = n.loading;
                return {
                    data: i(t).map((function(n) {
                        return {
                            name: n,
                            route: "/raises/".concat((0, u.oF)(n.toLowerCase()))
                        }
                    })),
                    loading: e,
                    error: !t && !e,
                    onSearchTermChange: null,
                    onItemClick: null
                }
            }
        },
        76386: function(n, t, e) {
            e.d(t, {
                D: function() {
                    return c
                }
            });
            var o = e(67294),
                r = e(8100),
                a = e(8151),
                i = e(50771),
                u = e(17882);

            function c() {
                var n, t = function() {
                        var n = (0, r.ZP)(a.eg, i._i),
                            t = n.data,
                            e = n.error;
                        return {
                            data: t,
                            error: e,
                            loading: !t && !e
                        }
                    }(),
                    e = t.data,
                    c = t.loading,
                    l = o.useMemo((function() {
                        var t;
                        return null !== (n = null === e || void 0 === e || null === (t = e.peggedAssets) || void 0 === t ? void 0 : t.map((function(n) {
                            return {
                                logo: (0, u.ie)(n.name),
                                route: "/stablecoin/".concat((0, u.R5)(n.name)),
                                name: "".concat(n.name, " (").concat(n.symbol, ")")
                            }
                        }))) && void 0 !== n ? n : []
                    }), [e]);
                return {
                    data: l,
                    loading: c,
                    error: !e && !c
                }
            }
        },
        52969: function(n, t, e) {
            e.d(t, {
                ED: function() {
                    return d
                },
                Lk: function() {
                    return s
                },
                uL: function() {
                    return l
                }
            });
            var o = e(828),
                r = e(29815),
                a = e(67294),
                i = e(11163),
                u = e(86933),
                c = e(17882);

            function l() {
                var n = (0, i.useRouter)(),
                    t = (0, u.Eg)(),
                    e = t.data,
                    o = t.loading,
                    l = (0, u.kP)(),
                    s = l.data,
                    d = l.loading,
                    f = a.useMemo((function() {
                        var t, o, a = null !== (t = null === e || void 0 === e ? void 0 : e.map((function(t) {
                                return {
                                    name: "".concat(t.name, " (").concat(t.symbol.toUpperCase(), ")"),
                                    symbol: t.symbol.toUpperCase(),
                                    route: "/yields/projects" === n.pathname || "/yields/watchlist" === n.pathname || n.pathname.includes("/yields/pool") ? "/yields?token=".concat(t.symbol.toUpperCase()) : "".concat(n.pathname, "?token=").concat(t.symbol.toUpperCase()),
                                    logo: t.image
                                }
                            }))) && void 0 !== t ? t : [],
                            i = null !== (o = null === s || void 0 === s ? void 0 : s.map((function(t) {
                                return {
                                    name: "Show all ".concat(t.name, " pools"),
                                    route: "/yields/projects" === n.pathname || "/yields/watchlist" === n.pathname || n.pathname.includes("/yields/pool") ? "/yields?project=".concat(t.slug) : "".concat(n.pathname, "?project=").concat(t.slug),
                                    logo: (0, c.cT)(t.slug)
                                }
                            }))) && void 0 !== o ? o : [];
                        return (0, r.Z)(a).concat((0, r.Z)(i))
                    }), [e, s, n.pathname]);
                return {
                    data: f || [],
                    loading: d || o,
                    onItemClick: function(t) {
                        n.push(t.route, void 0, {
                            shallow: !0
                        })
                    }
                }
            }

            function s() {
                var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = (0, i.useRouter)(),
                    e = (0, u.Eg)(),
                    r = e.data,
                    c = e.loading,
                    l = (0, o.Z)(n ? ["lend", "borrow"] : ["borrow", "lend"], 2),
                    s = l[0],
                    d = l[1],
                    f = a.useMemo((function() {
                        return {
                            name: "All USD Stablecoins",
                            symbol: "USD_Stables",
                            route: "/yields/optimizer?".concat(s, "=USD_Stables&").concat(d, "=").concat(t.query[d] || ""),
                            logo: "/icons/usd_native.png"
                        }
                    }), [r, d, t.query, s]),
                    m = a.useMemo((function() {
                        var n, e = null !== (n = null === r || void 0 === r ? void 0 : r.map((function(n) {
                            return {
                                name: "".concat(n.name, " (").concat(n.symbol.toUpperCase(), ")"),
                                symbol: n.symbol.toUpperCase(),
                                route: "/yields/optimizer?".concat(s, "=").concat(n.symbol.toUpperCase(), "&").concat(d, "=").concat(t.query[d] || ""),
                                logo: n.image
                            }
                        }))) && void 0 !== n ? n : [];
                        return [f].concat(e)
                    }), [r, d, t.query, s, f]),
                    h = function(n) {
                        t.push(n.route, void 0, {
                            shallow: !0
                        })
                    };
                return {
                    data: m || [],
                    loading: c,
                    onItemClick: h
                }
            }

            function d() {
                var n = (0, i.useRouter)(),
                    t = (0, u.Eg)(),
                    e = t.data,
                    o = t.loading,
                    r = a.useMemo((function() {
                        var t;
                        return (null !== (t = null === e || void 0 === e ? void 0 : e.map((function(t) {
                            return [{
                                name: "".concat(t.name, " (").concat(t.symbol.toUpperCase(), ")"),
                                symbol: t.symbol.toUpperCase(),
                                route: "/yields/optimizer?lend=".concat(t.symbol.toUpperCase() || "USDC", "&borrow=").concat(n.query.borrow || "ETH"),
                                logo: t.image
                            }, {
                                name: "Borrow: ".concat(t.name, " (").concat(t.symbol.toUpperCase(), ")"),
                                symbol: t.symbol.toUpperCase(),
                                route: "/yields/optimizer?lend=".concat(n.query.lend || "USDC", "&borrow=").concat(t.symbol.toUpperCase() || "ETH"),
                                logo: t.image
                            }]
                        }))) && void 0 !== t ? t : []).flat()
                    }), [e, n.query]);
                return {
                    data: r || [],
                    loading: o,
                    onItemClick: function(t) {
                        n.push(t.route, void 0, {
                            shallow: !0
                        })
                    }
                }
            }
        },
        76489: function(n, t, e) {
            var o;
            e.d(t, {
                    O: function() {
                        return o
                    }
                }),
                function(n) {
                    n.PROTOCOLS = "protocols", n.CHAINS = "chains", n.GROUPED_CHAINS = "grouped_chains"
                }(o || (o = {}))
        },
        73469: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return g
                }
            });
            var o = e(26042),
                r = e(69396),
                a = e(99534),
                i = e(828),
                u = e(7297),
                c = e(85893),
                l = e(67294),
                s = e(73324),
                d = e(61608),
                f = e.n(d),
                m = e(23046);

            function h() {
                var n = (0, u.Z)(["\n\tdisplay: inline-block;\n\tobject-fit: cover;\n\taspect-ratio: 1;\n\tbackground: ", ";\n\tborder-radius: 50%;\n\tflex-shrink: 0;\n"]);
                return h = function() {
                    return n
                }, n
            }
            var p = {},
                v = (0, s.default)(f()).withConfig({
                    componentId: "sc-f78f24-0"
                })(h(), (function(n) {
                    return n.theme.bg3
                }));

            function g(n) {
                var t = n.logo,
                    e = void 0 === t ? null : t,
                    u = (n.external, n.size),
                    s = void 0 === u ? 24 : u,
                    d = n.style,
                    f = (n.skipApiRoute, n.id),
                    h = (0, a.Z)(n, ["logo", "external", "size", "style", "skipApiRoute", "id"]),
                    g = (0, i.Z)(l.useState(!1), 2),
                    y = g[0],
                    b = g[1],
                    x = y || !e || p[e] ? m.Z : e;
                return (0, c.jsx)(v, (0, r.Z)((0, o.Z)({}, h), {
                    alt: "",
                    src: x,
                    onError: function(n) {
                        n.preventDefault(), p[e] = !0, b(!0)
                    },
                    height: s,
                    width: s,
                    id: f,
                    style: d
                }))
            }
        },
        8151: function(n, t, e) {
            e.d(t, {
                $2: function() {
                    return i
                },
                AC: function() {
                    return x
                },
                CQ: function() {
                    return Z
                },
                DW: function() {
                    return m
                },
                E0: function() {
                    return v
                },
                Gt: function() {
                    return l
                },
                Nm: function() {
                    return f
                },
                Ny: function() {
                    return y
                },
                OT: function() {
                    return b
                },
                Pm: function() {
                    return u
                },
                RO: function() {
                    return w
                },
                WF: function() {
                    return o
                },
                Ze: function() {
                    return s
                },
                Zi: function() {
                    return r
                },
                a6: function() {
                    return a
                },
                bV: function() {
                    return g
                },
                bY: function() {
                    return j
                },
                cb: function() {
                    return p
                },
                eg: function() {
                    return h
                },
                mv: function() {
                    return k
                },
                rQ: function() {
                    return c
                },
                sp: function() {
                    return C
                },
                zt: function() {
                    return d
                },
                zv: function() {
                    return A
                }
            });
            var o = "https://api.llama.fi/lite/charts",
                r = "https://api.llama.fi/lite/protocols2",
                a = "https://api.llama.fi/updatedProtocol",
                i = "https://api.llama.fi/config",
                u = "https://api.llama.fi/hourly",
                c = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/collection",
                l = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/collections",
                s = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/chart",
                d = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/chains",
                f = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/marketplaces",
                m = "https://ybrjmu6r60.execute-api.eu-west-2.amazonaws.com/prod/search",
                h = "https://stablecoins.llama.fi/stablecoins",
                p = "https://yields.llama.fi/pools",
                v = "https://yields.llama.fi/poolsEnriched",
                g = "https://yields.llama.fi/chart",
                y = "https://api.llama.fi/config/yields?a=1",
                b = "https://yields.llama.fi/chartLendBorrow",
                x = "https://defillama-datasets.s3.eu-central-1.amazonaws.com/liqs",
                w = "https://api.llama.fi/chains",
                j = "https://api.llama.fi/dexs",
                A = "https://api.llama.fi/dex",
                k = "https://fees.llama.fi/fees",
                Z = "https://api.llama.fi/raises",
                C = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=<PLACEHOLDER>"
        },
        10362: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = e(67294);

            function r(n, t) {
                var e = (0, o.useState)(n),
                    r = e[0],
                    a = e[1];
                return (0, o.useEffect)((function() {
                    var e = setTimeout((function() {
                        a(n)
                    }), t);
                    return function() {
                        clearTimeout(e)
                    }
                }), [n, t]), r
            }
        },
        84545: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = e(67294);

            function r(n, t) {
                var e = (0, o.useState)(function(n, t) {
                        return void 0 !== t ? t : window.matchMedia(n).matches
                    }(n, t)),
                    r = e[0],
                    a = e[1];
                return (0, o.useEffect)((function() {
                    var t = window.matchMedia(n);
                    a(t.matches);
                    var e = function() {
                        return a(!!t.matches)
                    };
                    return t.addEventListener("change", e),
                        function() {
                            return t.removeEventListener("change", e)
                        }
                }), [n]), r
            }
        },
        30137: function(n, t, e) {
            e.d(t, {
                J8: function() {
                    return m
                },
                OT: function() {
                    return p
                },
                U0: function() {
                    return y
                },
                WO: function() {
                    return b
                },
                zA: function() {
                    return v
                }
            });
            var o = e(47568),
                r = e(14924),
                a = e(26042),
                i = e(69396),
                u = e(828),
                c = e(20414),
                l = e(8151),
                s = e(17882),
                d = function(n, t) {
                    var e = 6 * Math.floor(t / 3600 / 6);
                    return "".concat(l.AC, "/").concat(n.toLowerCase(), "/").concat(e, ".json")
                },
                f = function() {
                    var n = (0, o.Z)((function() {
                        return (0, c.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch("".concat(l.AC, "/availability.json"))];
                                case 1:
                                    return [4, n.sent().json()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        }))
                    }));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }();

            function m() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, o.Z)((function() {
                    var n, t, e;
                    return (0, c.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, f()];
                            case 1:
                                return n = o.sent(), t = n.availability, e = n.time, [2, {
                                    assets: g.filter((function(n) {
                                        return !!t[n.symbol.toLowerCase()]
                                    })),
                                    time: e
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(n) {
                if ("number" !== typeof n || isNaN(n) || 0 === n) return "0";
                if (Math.abs(n) < 1e3) return n.toPrecision(4);
                var t = Math.floor(Math.log(n) / Math.log(1e3));
                return (n / Math.pow(1e3, t)).toFixed(1) + ["", "k", "m", "b", "t", "q", "Q", "s", "S", "o", "n", "d", "U", "D", "T", "Qt", "Qd", "Sd", "St", "O", "N"][t]
            }
            var v = function() {
                    var n = (0, o.Z)((function(n) {
                        var t, e, o, r, u, l, s;
                        return (0, c.__generator)(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = Math.round(Date.now() / 1e3), e = d(n, t), [4, fetch(e)];
                                case 1:
                                    return [4, c.sent().json()];
                                case 2:
                                    return o = c.sent(), r = o.time, u = o.positions, l = u.filter((function(n) {
                                        return n.liqPrice < o.currentPrice && n.collateralValue > 0
                                    })).map((function(t) {
                                        return (0, i.Z)((0, a.Z)({}, t), {
                                            symbol: n
                                        })
                                    })), s = ["symbol", "chain", "protocol", "liqPrice", "collateralValue", "collateralAmount", "owner", "timestamp"].join(","), [2, l.map((function(n) {
                                        var t = n.symbol,
                                            e = n.chain,
                                            o = n.protocol,
                                            a = n.liqPrice,
                                            i = n.collateralValue,
                                            u = n.collateralAmount,
                                            c = n.owner;
                                        return "".concat(t.toUpperCase(), ",").concat(e, ",").concat(o, ",").concat(a, ",").concat(i, ",").concat(u, ",").concat(c, ",").concat(r)
                                    })).reduce((function(n, t) {
                                        return n + "\n" + t
                                    }), s)]
                            }
                        }))
                    }));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }(),
                g = [{
                    name: "Ethereum",
                    symbol: "ETH"
                }, {
                    name: "Wrapped Bitcoin",
                    symbol: "WBTC"
                }, {
                    name: "Dai",
                    symbol: "DAI"
                }, {
                    name: "Solana",
                    symbol: "SOL"
                }, {
                    name: "Binance Coin",
                    symbol: "BNB"
                }, {
                    name: "USD Coin",
                    symbol: "USDC"
                }, {
                    name: "Lido Staked ETH",
                    symbol: "STETH"
                }, {
                    name: "Lido Wrapped stETH",
                    symbol: "WSTETH"
                }, {
                    name: "Lido Staked SOL",
                    symbol: "STSOL"
                }, {
                    name: "Marinade Staked SOL",
                    symbol: "MSOL"
                }, {
                    name: "Tether",
                    symbol: "USDT"
                }, {
                    name: "Solar Network",
                    symbol: "SXP"
                }, {
                    name: "yearn.finance",
                    symbol: "YFI"
                }, {
                    name: "FTX Token",
                    symbol: "FTT"
                }, {
                    name: "Uniswap",
                    symbol: "UNI"
                }, {
                    name: "PancakeSwap",
                    symbol: "CAKE"
                }, {
                    name: "Cardano",
                    symbol: "ADA"
                }, {
                    name: "Basic Attention",
                    symbol: "BAT"
                }, {
                    name: "Binance USD",
                    symbol: "BUSD"
                }, {
                    name: "Curve DAO",
                    symbol: "CRV"
                }, {
                    name: "ChainLink",
                    symbol: "LINK"
                }, {
                    name: "TrueUSD",
                    symbol: "TUSD"
                }, {
                    name: "Aave",
                    symbol: "AAVE"
                }, {
                    name: "MakerDAO",
                    symbol: "MKR"
                }, {
                    name: "Avalanche",
                    symbol: "AVAX"
                }, {
                    name: "Polygon",
                    symbol: "MATIC"
                }, {
                    name: "SushiSwap",
                    symbol: "SUSHI"
                }, {
                    name: "Synthetix",
                    symbol: "SNX"
                }, {
                    name: "Trader Joe",
                    symbol: "JOE"
                }, {
                    name: "Magic Internet Money",
                    symbol: "MIM"
                }, {
                    name: "0x",
                    symbol: "ZRX"
                }, {
                    name: "Enjin Coin",
                    symbol: "ENJ"
                }, {
                    name: "Decentraland",
                    symbol: "MANA"
                }, {
                    name: "1inch",
                    symbol: "1INCH"
                }, {
                    name: "REN",
                    symbol: "REN"
                }].map((function(n) {
                    var t = n.name,
                        e = n.symbol;
                    return {
                        name: t,
                        symbol: e,
                        route: "/liquidations/".concat(e.toLowerCase()),
                        logo: (0, s.hq)(e.toLowerCase())
                    }
                })),
                y = {
                    "aave-v2": "Aave V2",
                    compound: "Compound",
                    euler: "Euler",
                    liquity: "Liquity",
                    maker: "MakerDAO",
                    traderjoe: "Trader Joe",
                    polygon: "Polygon",
                    ethereum: "Ethereum",
                    avalanche: "Avalanche",
                    solend: "Solend",
                    solana: "Solana",
                    benqi: "Benqi",
                    venus: "Venus",
                    bsc: "BSC"
                },
                b = Object.entries(y).reduce((function(n, t) {
                    var e = (0, u.Z)(t, 2),
                        o = e[0],
                        c = e[1];
                    return (0, i.Z)((0, a.Z)({}, n), (0, r.Z)({}, c, o))
                }), {})
        },
        50771: function(n, t, e) {
            e.d(t, {
                Kg: function() {
                    return r
                },
                Ti: function() {
                    return a
                },
                _i: function() {
                    return o
                }
            });
            var o = function(n, t) {
                    return fetch(n, t).then((function(n) {
                        return n.json()
                    }))
                },
                r = function(n) {
                    return Promise.all(n.map((function(n) {
                        return o(n)
                    })))
                },
                a = function(n, t, e, o, r) {
                    var a = r.retryCount;
                    a >= 3 || setTimeout((function() {
                        return o({
                            retryCount: a
                        })
                    }), 200)
                }
        }
    }
]);