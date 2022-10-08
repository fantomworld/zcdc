"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7178], {
        5148: function(e, n, t) {
            var r = t(26042),
                a = t(69396),
                o = t(99534),
                i = t(7297),
                c = t(85893),
                u = t(67294),
                l = t(10980),
                d = t(73324),
                s = t(63872),
                g = t(26183),
                h = t(17882);

            function f() {
                var e = (0, i.Z)(["\n\tpadding-inline: 0;\n\n\t& > svg {\n\t\tfill: ", ";\n\t\tpath {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"]);
                return f = function() {
                    return e
                }, e
            }
            var m = d.default.button.withConfig({
                componentId: "sc-c71a62fd-0"
            })(f(), (function(e) {
                var n = e.theme.text1;
                return e.saved ? n : "none"
            }), (function(e) {
                return e.theme.text1
            }));
            n.Z = function(e) {
                var n = e.readableProtocolName,
                    t = (0, o.Z)(e, ["readableProtocolName"]),
                    i = (0, u.useRef)(null),
                    d = (0, s.BP)(),
                    f = d.savedProtocols,
                    p = d.addProtocol,
                    v = d.removeProtocol,
                    x = (0, g.O_)(),
                    b = Object.keys(f) || [],
                    w = (0, h.R5)(n),
                    y = (null === b || void 0 === b ? void 0 : b.includes(w)) && x,
                    Z = y ? function() {
                        return v(n)
                    } : function() {
                        return p(n)
                    };
                return (0, c.jsxs)(m, (0, a.Z)((0, r.Z)({
                    ref: i,
                    onClick: Z,
                    saved: y
                }, t), {
                    children: [(0, c.jsx)("span", {
                        className: "visually-hidden",
                        children: "Bookmark ".concat(w)
                    }), (0, c.jsx)(l.Z, {
                        width: 16,
                        height: 16
                    })]
                }))
            }
        },
        7178: function(e, n, t) {
            t.d(n, {
                dz: function() {
                    return F
                },
                ud: function() {
                    return O
                },
                WF: function() {
                    return I
                }
            });
            var r = t(828),
                a = t(29815),
                o = t(85893),
                i = t(67294),
                c = t(24799),
                u = t(58552),
                l = t(7297),
                d = t(27434),
                s = t(80628),
                g = t(73324),
                h = t(5148),
                f = t(85411),
                m = t(7500),
                p = t(45061),
                v = t(73469),
                x = t(17650),
                b = t(63872),
                w = t(17882),
                y = t(37888),
                Z = t(38132);

            function C() {
                var e = (0, l.Z)(["\n\twidth: 120px;\n\n\t.tooltip-trigger {\n\t\tmargin-left: auto;\n\t\ttext-align: end;\n\t}\n"]);
                return C = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, l.Z)(["\n\tpadding: 6px;\n"]);
                return j = function() {
                    return e
                }, e
            }
            var S = [{
                    header: function() {
                        return (0, o.jsx)(y.VG, {
                            children: "Name"
                        })
                    },
                    accessorKey: "name",
                    enableSorting: !1,
                    cell: function(e) {
                        var n, t = e.getValue,
                            r = e.row,
                            a = e.table,
                            i = t(),
                            c = 0 === r.depth ? a.getSortedRowModel().rows.findIndex((function(e) {
                                return e.id === r.id
                            })) : r.index;
                        return (0, o.jsxs)(y.VG, {
                            depth: r.depth,
                            children: [(null === (n = r.subRows) || void 0 === n ? void 0 : n.length) > 0 ? (0, o.jsx)(y.KF, {
                                onClick: r.getToggleExpandedHandler(),
                                children: r.getIsExpanded() ? (0, o.jsx)(d.Z, {
                                    size: 16
                                }) : (0, o.jsx)(s.Z, {
                                    size: 16
                                })
                            }) : (0, o.jsx)(h.Z, {
                                readableProtocolName: i,
                                "data-lgonly": !0,
                                "data-bookmark": !0
                            }), (0, o.jsx)("span", {
                                children: c + 1
                            }), (0, o.jsx)(v.Z, {
                                logo: (0, w.cT)(i),
                                "data-lgonly": !0
                            }), (0, o.jsx)(m.xb, {
                                href: "/protocol/".concat((0, w.oF)(i)),
                                children: "".concat(i)
                            })]
                        })
                    },
                    size: 240
                }, {
                    header: "Category",
                    accessorKey: "category",
                    meta: {
                        align: "end"
                    },
                    size: 140
                }, {
                    header: "Chains",
                    accessorKey: "chains",
                    enableSorting: !1,
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(f.Z, {
                            links: n(),
                            url: "/chain",
                            iconType: "chain"
                        })
                    },
                    meta: {
                        align: "end",
                        headerHelperText: "Chains are ordered by protocol's highest TVL on each chain"
                    },
                    size: 200
                }, {
                    header: "1d Change",
                    accessorKey: "change_1d",
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(o.Fragment, {
                            children: (0, w.qO)(n())
                        })
                    },
                    meta: {
                        align: "end"
                    },
                    size: 100
                }, {
                    header: "7d Change",
                    accessorKey: "change_7d",
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(o.Fragment, {
                            children: (0, w.qO)(n())
                        })
                    },
                    meta: {
                        align: "end"
                    },
                    size: 100
                }, {
                    header: "1m Change",
                    accessorKey: "change_1m",
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(o.Fragment, {
                            children: (0, w.qO)(n())
                        })
                    },
                    meta: {
                        align: "end"
                    },
                    size: 100
                }, {
                    header: "TVL",
                    accessorKey: "tvl",
                    cell: function(e) {
                        var n = e.getValue,
                            t = e.row;
                        return (0, o.jsx)(M, {
                            value: n(),
                            rowValues: t.original
                        })
                    },
                    meta: {
                        align: "end"
                    },
                    size: 100
                }, {
                    header: "Mcap/TVL",
                    accessorKey: "mcaptvl",
                    cell: function(e) {
                        return (0, o.jsx)(o.Fragment, {
                            children: e.getValue() && (0, w.yb)(e.getValue())
                        })
                    },
                    size: 100,
                    meta: {
                        align: "end"
                    }
                }],
                V = {
                    header: "Listed At",
                    accessorKey: "listedAt",
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(K, {
                            children: (0, o.jsx)(L, {
                                content: "at ".concat((0, w.Sd)(n())),
                                children: (0, w.dl)(n())
                            })
                        })
                    },
                    size: 120,
                    meta: {
                        align: "end"
                    }
                },
                k = (0, a.Z)(S.slice(0, 3)).concat([V], (0, a.Z)(S.slice(3))),
                z = [{
                    header: function() {
                        return (0, o.jsx)(y.VG, {
                            children: "Name"
                        })
                    },
                    accessorKey: "name",
                    enableSorting: !1,
                    cell: function(e) {
                        var n = e.getValue,
                            t = e.row,
                            r = e.table,
                            a = n(),
                            i = 0 === t.depth ? r.getSortedRowModel().rows.findIndex((function(e) {
                                return e.id === t.id
                            })) : t.index;
                        return (0, o.jsxs)(y.VG, {
                            depth: t.depth,
                            children: [(0, o.jsx)(h.Z, {
                                readableProtocolName: a,
                                "data-lgonly": !0,
                                "data-bookmark": !0
                            }), (0, o.jsx)("span", {
                                children: i + 1
                            }), (0, o.jsx)(v.Z, {
                                logo: (0, w.cT)(a),
                                "data-lgonly": !0
                            }), (0, o.jsx)(m.xb, {
                                href: "/protocol/".concat((0, w.oF)(a)),
                                children: "".concat(a)
                            })]
                        })
                    },
                    size: 260
                }, {
                    header: "Chains",
                    accessorKey: "chains",
                    enableSorting: !1,
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(f.Z, {
                            links: n(),
                            url: "/chain",
                            iconType: "chain"
                        })
                    },
                    meta: {
                        align: "end",
                        headerHelperText: "Chains are ordered by protocol's highest TVL on each chain"
                    },
                    size: 200
                }, {
                    header: "1d Change",
                    accessorKey: "change_1d",
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(o.Fragment, {
                            children: (0, w.qO)(n())
                        })
                    },
                    meta: {
                        align: "end"
                    },
                    size: 100
                }, {
                    header: "TVL",
                    accessorKey: "tvl",
                    cell: function(e) {
                        var n = e.getValue;
                        return (0, o.jsx)(o.Fragment, {
                            children: "$" + (0, w.yb)(n())
                        })
                    },
                    meta: {
                        align: "end"
                    },
                    size: 100
                }, {
                    header: "Mcap/TVL",
                    accessorKey: "mcaptvl",
                    cell: function(e) {
                        return (0, o.jsx)(o.Fragment, {
                            children: e.getValue() && (0, w.yb)(e.getValue())
                        })
                    },
                    size: 120,
                    meta: {
                        align: "end"
                    }
                }],
                T = {
                    borrowed: {
                        header: "Borrowed",
                        accessorKey: "borrowed",
                        cell: function(e) {
                            return (0, o.jsx)(o.Fragment, {
                                children: e.getValue() && (0, w.yb)(e.getValue())
                            })
                        },
                        size: 120,
                        meta: {
                            align: "end"
                        }
                    },
                    supplied: {
                        header: "Supplied",
                        accessorKey: "supplied",
                        cell: function(e) {
                            return (0, o.jsx)(o.Fragment, {
                                children: e.getValue() && (0, w.yb)(e.getValue())
                            })
                        },
                        size: 120,
                        meta: {
                            align: "end"
                        }
                    },
                    suppliedTvl: {
                        header: "Supplied/TVL",
                        accessorKey: "suppliedTvl",
                        cell: function(e) {
                            return (0, o.jsx)(o.Fragment, {
                                children: e.getValue() && (0, w.yb)(e.getValue())
                            })
                        },
                        size: 120,
                        meta: {
                            align: "end"
                        }
                    }
                },
                R = (0, Z.rh)({
                    0: ["name", "tvl", "change_7d", "category", "chains", "change_1m", "change_1d", "mcaptvl"],
                    480: ["name", "change_7d", "tvl", "category", "chains", "change_1m", "change_1d", "mcaptvl"],
                    1024: ["name", "category", "chains", "change_1d", "change_7d", "change_1m", "tvl", "mcaptvl"]
                }),
                _ = {
                    0: {
                        name: 180,
                        category: 140,
                        chains: 140,
                        change_1d: 100,
                        change_7d: 100,
                        change_1m: 100,
                        tvl: 100,
                        mcaptvl: 100
                    },
                    1024: {
                        name: 240,
                        category: 140,
                        chains: 140,
                        change_1d: 100,
                        change_7d: 100,
                        change_1m: 100,
                        tvl: 100,
                        mcaptvl: 100
                    },
                    1280: {
                        name: 240,
                        category: 140,
                        chains: 200,
                        change_1d: 100,
                        change_7d: 100,
                        change_1m: 100,
                        tvl: 100,
                        mcaptvl: 100
                    }
                },
                M = function(e) {
                    var n = e.value,
                        t = e.rowValues,
                        a = (0, r.Z)((0, b.M5)(), 1)[0],
                        i = null;
                    return t.strikeTvl && (a.doublecounted || (i = 'This protocol deposits into another protocol and is subtracted from total TVL because "Double Count" toggle is off'), a.liquidstaking || (i = 'This protocol is under Liquid Staking category and is subtracted from total TVL because "Liquid Staking" toggle is off'), a.doublecounted || a.liquidstaking || (i = 'This protocol deposits into another protocol or is under Liquid Staking category, so it is subtracted from total TVL because both "Liquid Staking" and "Double Count" toggles are off')), (0, o.jsxs)("span", {
                        style: {
                            display: "flex",
                            gap: "4px",
                            justifyContent: "flex-end"
                        },
                        children: [i ? (0, o.jsx)(p.Z, {
                            text: i
                        }) : null, (0, o.jsx)("span", {
                            style: {
                                color: t.strikeTvl ? "gray" : "inherit"
                            },
                            children: "$" + (0, w.yb)(n)
                        })]
                    })
                },
                K = g.default.div.withConfig({
                    componentId: "sc-b0fd351c-0"
                })(C()),
                L = (0, g.default)(x.Z).withConfig({
                    componentId: "sc-b0fd351c-1"
                })(j()),
                N = t(91173),
                E = Object.keys(_).map((function(e) {
                    return Number(e)
                })).sort((function(e, n) {
                    return Number(n) - Number(e)
                }));

            function F(e) {
                var n = e.data,
                    t = e.addlColumns,
                    l = e.removeColumns,
                    d = (0, r.Z)(i.useState([{
                        desc: !0,
                        id: "tvl"
                    }]), 2),
                    s = d[0],
                    g = d[1],
                    h = (0, r.Z)(i.useState([]), 2),
                    f = h[0],
                    m = h[1],
                    p = (0, r.Z)(i.useState({}), 2),
                    v = p[0],
                    x = p[1],
                    b = (0, r.Z)(i.useState({}), 2),
                    w = b[0],
                    y = b[1],
                    Z = (0, N.Z)(),
                    C = i.useMemo((function() {
                        return t || l ? (0, a.Z)(S.filter((function(e) {
                            return !(null !== l && void 0 !== l ? l : []).includes(e.accessorKey)
                        }))).concat((0, a.Z)((null !== t && void 0 !== t ? t : []).map((function(e) {
                            return T[e]
                        })))) : S
                    }), [t, l]),
                    j = (0, c.useReactTable)({
                        data: n,
                        columns: C,
                        state: {
                            sorting: s,
                            expanded: w,
                            columnOrder: f,
                            columnSizing: v
                        },
                        onExpandedChange: y,
                        getSubRows: function(e) {
                            return e.subRows
                        },
                        onSortingChange: g,
                        onColumnOrderChange: m,
                        onColumnSizingChange: x,
                        getCoreRowModel: (0, c.getCoreRowModel)(),
                        getSortedRowModel: (0, c.getSortedRowModel)(),
                        getExpandedRowModel: (0, c.getExpandedRowModel)()
                    });
                return i.useEffect((function() {
                    var e, n, t = j.getAllLeafColumns().map((function(e) {
                            return e.id
                        })),
                        a = Z.width && null !== (n = null === (e = R.find((function(e) {
                            var n = (0, r.Z)(e, 1)[0];
                            return Z.width > n
                        }))) || void 0 === e ? void 0 : e[1]) && void 0 !== n ? n : t,
                        o = Z.width ? E.find((function(e) {
                            return Z.width > Number(e)
                        })) : E[0];
                    j.setColumnSizing(_[o]), j.setColumnOrder(a)
                }), [Z, j]), (0, o.jsx)(u.Z, {
                    instance: j
                })
            }

            function O(e) {
                var n = e.data,
                    t = (0, r.Z)(i.useState([{
                        desc: !0,
                        id: "listedAt"
                    }]), 2),
                    a = t[0],
                    l = t[1],
                    d = (0, r.Z)(i.useState({}), 2),
                    s = d[0],
                    g = d[1],
                    h = (0, r.Z)(i.useState({}), 2),
                    f = h[0],
                    m = h[1],
                    p = (0, N.Z)(),
                    v = (0, c.useReactTable)({
                        data: n,
                        columns: k,
                        state: {
                            sorting: a,
                            expanded: f,
                            columnSizing: s
                        },
                        onExpandedChange: m,
                        getSubRows: function(e) {
                            return e.subRows
                        },
                        onSortingChange: l,
                        onColumnSizingChange: g,
                        getCoreRowModel: (0, c.getCoreRowModel)(),
                        getSortedRowModel: (0, c.getSortedRowModel)(),
                        getExpandedRowModel: (0, c.getExpandedRowModel)()
                    });
                return i.useEffect((function() {
                    var e = p.width ? E.find((function(e) {
                        return p.width > Number(e)
                    })) : E[0];
                    v.setColumnSizing(_[e])
                }), [p, v]), (0, o.jsx)(u.Z, {
                    instance: v
                })
            }

            function I(e) {
                var n = e.data,
                    t = (0, r.Z)(i.useState([]), 2),
                    a = t[0],
                    l = t[1],
                    d = (0, c.useReactTable)({
                        data: n,
                        columns: z,
                        state: {
                            sorting: a
                        },
                        onSortingChange: l,
                        getCoreRowModel: (0, c.getCoreRowModel)(),
                        getSortedRowModel: (0, c.getSortedRowModel)()
                    });
                return (0, o.jsx)(u.Z, {
                    instance: d
                })
            }
        },
        37888: function(e, n, t) {
            t.d(n, {
                KF: function() {
                    return s
                },
                VG: function() {
                    return d
                },
                dm: function() {
                    return h
                },
                ok: function() {
                    return g
                },
                xD: function() {
                    return f
                }
            });
            var r = t(7297),
                a = t(73324);

            function o() {
                var e = (0, r.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tpadding-left: ", "px;\n\tposition: relative;\n\n\t& > *[data-bookmark] {\n\t\tposition: absolute;\n\t\ttop: 4px;\n\t\tleft: -2px;\n\t}\n\n\ta {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n\n\ta:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t& > *[data-lgonly] {\n\t\tdisplay: none;\n\t}\n\n\t@media (min-width: ", ") {\n\t\t& > *[data-lgonly] {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"]);
                return o = function() {
                    return e
                }, e
            }

            function i() {
                var e = (0, r.Z)(["\n\tposition: absolute;\n\tleft: -8px;\n"]);
                return i = function() {
                    return e
                }, e
            }

            function c() {
                var e = (0, r.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 20px;\n\tmargin: 0 0 -20px;\n\tpadding-right: 16px;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function u() {
                var e = (0, r.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 20px;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function l() {
                var e = (0, r.Z)(["\n\tmargin: 0 auto 0 0;\n\tfont-weight: 500;\n\tfont-size: 1.125rem;\n"]);
                return l = function() {
                    return e
                }, e
            }
            var d = a.default.span.withConfig({
                    componentId: "sc-58b01224-0"
                })(o(), (function(e) {
                    var n = e.depth;
                    return n ? 48 * n : 0 === n ? 24 : 0
                }), (function(e) {
                    return e.theme.bpLg
                })),
                s = a.default.button.withConfig({
                    componentId: "sc-58b01224-1"
                })(i()),
                g = a.default.div.withConfig({
                    componentId: "sc-58b01224-2"
                })(c()),
                h = a.default.span.withConfig({
                    componentId: "sc-58b01224-3"
                })(u()),
                f = a.default.h1.withConfig({
                    componentId: "sc-58b01224-4"
                })(l())
        },
        38132: function(e, n, t) {
            t.d(n, {
                YO: function() {
                    return i
                },
                gJ: function() {
                    return o
                },
                rh: function() {
                    return a
                }
            });
            var r = t(828),
                a = function(e) {
                    return Object.entries(e).map((function(e) {
                        var n = (0, r.Z)(e, 2),
                            t = n[0],
                            a = n[1];
                        return [Number(t), a]
                    })).sort((function(e, n) {
                        var t = (0, r.Z)(e, 1)[0];
                        return (0, r.Z)(n, 1)[0] - t
                    }))
                };

            function o(e, n) {
                return e.reduce((function(e, t) {
                    return t[n] || 0 === t[n] ? e[0].push(t) : e[1].push(t), e
                }), [
                    [],
                    []
                ])
            }

            function i(e) {
                return Object.keys(e).map((function(e) {
                    return Number(e)
                })).sort((function(e, n) {
                    return Number(n) - Number(e)
                }))
            }
        },
        10362: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var r = t(67294);

            function a(e, n) {
                var t = (0, r.useState)(e),
                    a = t[0],
                    o = t[1];
                return (0, r.useEffect)((function() {
                    var t = setTimeout((function() {
                        o(e)
                    }), n);
                    return function() {
                        clearTimeout(t)
                    }
                }), [e, n]), a
            }
        },
        91173: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return o
                }
            });
            var r = t(67294),
                a = t(10362);

            function o() {
                var e = (0, r.useState)({
                        width: void 0,
                        height: void 0
                    }),
                    n = e[0],
                    t = e[1];
                return (0, r.useEffect)((function() {
                    var e = function() {
                        t({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, a.Z)(n, 1e3)
            }
        }
    }
]);