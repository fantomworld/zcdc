"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2274], {
        35845: function(t, e, n) {
            n.d(e, {
                P: function() {
                    return i
                },
                x: function() {
                    return a
                }
            });
            var r = n(26042),
                l = n(69396),
                v = n(99534),
                u = n(828),
                o = n(17882);

            function a(t) {
                var e = t.data,
                    n = t.defaultSortingColumn,
                    a = t.dir,
                    i = t.applyLqAndDc,
                    c = t.extraTvlsEnabled,
                    d = e.map((function(t) {
                        var e = t.tvl,
                            n = t.tvlPrevDay,
                            a = t.tvlPrevWeek,
                            d = t.tvlPrevMonth,
                            s = t.extraTvl,
                            f = t.mcap,
                            P = (0, v.Z)(t, ["tvl", "tvlPrevDay", "tvlPrevWeek", "tvlPrevMonth", "extraTvl", "mcap"]),
                            h = e,
                            m = n,
                            p = a,
                            b = d;
                        Object.entries(s).forEach((function(t) {
                            var e = (0, u.Z)(t, 2),
                                n = e[0],
                                r = e[1],
                                l = r.tvl,
                                v = r.tvlPrevDay,
                                o = r.tvlPrevWeek,
                                a = r.tvlPrevMonth;
                            i && "doublecounted" === n && !c.doublecounted && (l && (h = (h || 0) - l), v && (m = (m || 0) - v), o && (p = (p || 0) - o), a && (b = (b || 0) - a)), i && "liquidstaking" === n && !c.liquidstaking && (l && (h = (h || 0) - l), v && (m = (m || 0) - v), o && (p = (p || 0) - o), a && (b = (b || 0) - a)), i && "dcandlsoverlap" === n.toLowerCase() && (c.doublecounted && c.liquidstaking || (l && (h = (h || 0) + l), v && (m = (m || 0) + v), o && (p = (p || 0) + o), a && (b = (b || 0) + a))), c[n.toLowerCase()] && "doublecounted" !== n && "liquidstaking" !== n && (l && (h = (h || 0) + l), v && (m = (m || 0) + v), o && (p = (p || 0) + o), a && (b = (b || 0) + a))
                        }));
                        var y = (0, o.Yu)(h, m),
                            k = (0, o.Yu)(h, p),
                            g = (0, o.Yu)(h, b),
                            Z = f && h ? f / h : null;
                        return (0, l.Z)((0, r.Z)({}, P), {
                            tvl: h,
                            tvlPrevDay: m,
                            tvlPrevWeek: p,
                            tvlPrevMonth: b,
                            change_1d: y,
                            change_7d: k,
                            change_1m: g,
                            mcap: f,
                            mcaptvl: Z
                        })
                    }));
                return void 0 === n ? d.sort((function(t, e) {
                    return e.tvl - t.tvl
                })) : d.sort((function(t, e) {
                    return "asc" === a ? t[n] - e[n] : e[n] - t[n]
                }))
            }

            function i(t) {
                var e = t.chains,
                    n = t.tvlTypes,
                    l = t.extraTvlsEnabled,
                    o = (0, r.Z)({}, l),
                    a = "tvl";
                null !== n && (a = n[a], o = Object.fromEntries(Object.entries(o).map((function(t) {
                    var e = (0, u.Z)(t, 2),
                        r = e[0],
                        l = e[1];
                    return [n[r], l]
                }))));
                var i = {},
                    d = e.map((function(t) {
                        var e = (0, u.Z)(t, 2),
                            n = e[0],
                            l = e[1],
                            v = {},
                            c = 0;
                        return Object.entries(l).forEach((function(t) {
                            var e = (0, u.Z)(t, 2),
                                n = e[0],
                                r = e[1],
                                l = r[a];
                            for (var i in c += r[a] || 0, r) "doublecounted" !== i && "d" !== i || o.doublecounted || (l -= r[i], c -= r[i]), "liquidstaking" !== i && "l" !== i || o.liquidstaking || (l -= r[i], c -= r[i]), "dcandlsoverlap" !== i.toLowerCase() && "dl" !== i || o.doublecounted && o.liquidstaking || (l += r[i], c += r[i]), o[i.toLowerCase()] && "doublecounted" !== i && "liquidstaking" !== i && (l += r[i], c += r[i]);
                            v[n] = l
                        })), i[n] = c, (0, r.Z)({
                            date: Number(n)
                        }, v)
                    })),
                    s = d.map((function(t) {
                        var e = t.date,
                            n = (0, v.Z)(t, ["date"]),
                            l = {};
                        for (var u in n) l[u] = c(n[u], i[e]);
                        return (0, r.Z)({
                            date: e
                        }, l)
                    }));
                return {
                    chainsWithExtraTvlsByDay: d,
                    chainsWithExtraTvlsAndDominanceByDay: s
                }
            }
            var c = function(t, e) {
                return Number((100 * (e > 0 ? t / e : 0)).toFixed(2))
            }
        },
        82274: function(t, e, n) {
            n.d(e, {
                oL: function() {
                    return b
                },
                Y5: function() {
                    return p
                },
                Qy: function() {
                    return P
                },
                By: function() {
                    return h
                },
                SE: function() {
                    return f
                },
                oc: function() {
                    return m
                }
            });
            var r = n(26042),
                l = n(69396),
                v = n(99534),
                u = n(828),
                o = n(29815),
                a = n(67294),
                i = n(63872),
                c = n(17882),
                d = n(35845),
                s = function(t, e) {
                    var n = (0, o.Z)(t);
                    return e.forEach((function(e) {
                        var r = t.filter((function(t) {
                            return t.parentProtocol === e.id
                        }));
                        r.length >= 2 && (n = n.filter((function(t) {
                            return t.parentProtocol !== e.id
                        }))).push(function(t, e) {
                            var n = t.reduce((function(t, e) {
                                    return e.tvl && (t.tvl = (t.tvl || 0) + e.tvl), e.tvlPrevDay && (t.tvlPrevDay = (t.tvlPrevDay || 0) + e.tvlPrevDay), e.tvlPrevWeek && (t.tvlPrevWeek = (t.tvlPrevWeek || 0) + e.tvlPrevWeek), e.tvlPrevMonth && (t.tvlPrevMonth = (t.tvlPrevMonth || 0) + e.tvlPrevMonth), e.mcap ? t.mcap = (t.mcap || 0) + e.mcap : t.mcap = null, t
                                }), {
                                    mcap: null,
                                    tvl: null,
                                    tvlPrevDay: null,
                                    tvlPrevWeek: null,
                                    tvlPrevMonth: null
                                }),
                                r = n.mcap,
                                l = n.tvl,
                                v = n.tvlPrevDay,
                                u = n.tvlPrevWeek,
                                a = n.tvlPrevMonth,
                                i = (0, c.Yu)(l, v),
                                d = (0, c.Yu)(l, u),
                                s = (0, c.Yu)(l, a),
                                f = r && l ? r / l : null;
                            return {
                                name: e.name,
                                logo: e.logo,
                                url: e.url,
                                chains: e.chains,
                                tvl: l,
                                tvlPrevDay: v,
                                tvlPrevWeek: u,
                                tvlPrevMonth: a,
                                change_1d: i,
                                change_7d: d,
                                change_1m: s,
                                mcap: r,
                                mcaptvl: f,
                                extraTvl: {},
                                symbol: void 0,
                                category: void 0,
                                subRows: (0, o.Z)(t),
                                chainTvls: {}
                            }
                        }(r, e))
                    })), n.sort((function(t, e) {
                        return e.tvl - t.tvl
                    }))
                },
                f = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        l = (0, u.Z)((0, i.M5)(), 1),
                        v = l[0],
                        o = (0, a.useMemo)((function() {
                            return (0, d.x)({
                                data: t,
                                defaultSortingColumn: e,
                                dir: n,
                                applyLqAndDc: r,
                                extraTvlsEnabled: v
                            })
                        }), [t, v, e, n, r]);
                    return o
                },
                P = function(t) {
                    var e = t.protocols,
                        n = t.parentProtocols,
                        o = (0, u.Z)((0, i.M5)(), 1)[0],
                        d = (0, a.useMemo)((function() {
                            var t = (0, l.Z)((0, r.Z)({}, o), {
                                    doublecounted: !o.doublecounted
                                }),
                                a = Object.values(t).every((function(t) {
                                    return !t
                                })) ? e : e.map((function(t) {
                                    var e = t.tvl,
                                        n = t.tvlPrevDay,
                                        a = t.tvlPrevWeek,
                                        i = t.tvlPrevMonth,
                                        d = t.extraTvl,
                                        s = t.mcap,
                                        f = (0, v.Z)(t, ["tvl", "tvlPrevDay", "tvlPrevWeek", "tvlPrevMonth", "extraTvl", "mcap"]),
                                        P = e,
                                        h = n,
                                        m = a,
                                        p = i,
                                        b = !1;
                                    "Liquid Staking" !== f.category || o.liquidstaking || (b = !0), Object.entries(d).forEach((function(t) {
                                        var e = (0, u.Z)(t, 2),
                                            n = e[0],
                                            r = e[1],
                                            l = r.tvl,
                                            v = r.tvlPrevDay,
                                            a = r.tvlPrevWeek,
                                            i = r.tvlPrevMonth;
                                        "doublecounted" !== n || o.doublecounted ? o[n.toLowerCase()] && "doublecounted" !== n.toLowerCase() && "liquidstaking" !== n.toLowerCase() && (l && (P = (P || 0) + l), v && (h = (h || 0) + v), a && (m = (m || 0) + a), i && (p = (p || 0) + i)) : b = !0
                                    }));
                                    var y = (0, c.Yu)(P, h),
                                        k = (0, c.Yu)(P, m),
                                        g = (0, c.Yu)(P, p),
                                        Z = s && P ? s / P : null;
                                    return (0, l.Z)((0, r.Z)({}, f), {
                                        tvl: P,
                                        tvlPrevDay: h,
                                        tvlPrevWeek: m,
                                        tvlPrevMonth: p,
                                        change_1d: y,
                                        change_7d: k,
                                        change_1m: g,
                                        mcap: s,
                                        mcaptvl: Z,
                                        strikeTvl: b
                                    })
                                }));
                            return n ? s(a, n) : a
                        }), [e, o, n]);
                    return d
                },
                h = function(t, e) {
                    var n = (0, u.Z)((0, i.M5)(), 1)[0];
                    return (0, a.useMemo)((function() {
                        var r = e;
                        return Object.entries(t).forEach((function(t) {
                            var e = (0, u.Z)(t, 2),
                                l = e[0],
                                v = e[1];
                            "doublecounted" === l && (r -= v), n[l.toLowerCase()] && (r += v)
                        })), r
                    }), [n, e, t])
                },
                m = function(t, e) {
                    var n = (0, u.Z)((0, i.s9)(), 1)[0];
                    return (0, a.useMemo)((function() {
                        var v = function(v) {
                                var i = null,
                                    c = null,
                                    d = null,
                                    s = null,
                                    f = null,
                                    P = null;
                                u[v] = {};
                                var h = t.find((function(t) {
                                    return t.name === v
                                }));
                                h ? (i = h.tvl || null, c = h.tvlPrevDay || null, d = h.tvlPrevWeek || null, s = h.tvlPrevMonth || null, f = h.mcap || null, P = h.protocols || null, u[v] = (0, l.Z)((0, r.Z)({}, h), {
                                    subRows: [h],
                                    symbol: "-"
                                }), a.push(v)) : u[v] = {
                                    symbol: "-"
                                };
                                var m = !1;
                                for (var p in e[v])
                                    if (!0 === n[p]) {
                                        var b = !0,
                                            y = !1,
                                            k = void 0;
                                        try {
                                            for (var g, Z = function() {
                                                    var e, n = g.value,
                                                        h = t.find((function(t) {
                                                            return t.name === n
                                                        })),
                                                        p = (null !== (e = u[v].subRows) && void 0 !== e ? e : []).find((function(t) {
                                                            return t.name === n
                                                        }));
                                                    if (h && void 0 === p) {
                                                        i += h.tvl, c += h.tvlPrevDay, d += h.tvlPrevWeek, s += h.tvlPrevMonth, f += h.mcap, P += h.protocols;
                                                        var b = u[v].subRows || [],
                                                            y = f && i && f / i;
                                                        u[v] = (0, l.Z)((0, r.Z)({}, u[v]), {
                                                            tvl: i,
                                                            tvlPrevDay: c,
                                                            tvlPrevWeek: d,
                                                            tvlPrevMonth: s,
                                                            mcap: f,
                                                            mcaptvl: y,
                                                            protocols: P,
                                                            name: v,
                                                            subRows: (0, o.Z)(b).concat([h])
                                                        }), a.push(n), m = !0
                                                    }
                                                }, M = e[v][p][Symbol.iterator](); !(b = (g = M.next()).done); b = !0) Z()
                                        } catch (D) {
                                            y = !0, k = D
                                        } finally {
                                            try {
                                                b || null == M.return || M.return()
                                            } finally {
                                                if (y) throw k
                                            }
                                        }
                                    }
                                m || (void 0 === u[v].tvl ? delete u[v] : u[v] = h)
                            },
                            u = {},
                            a = [];
                        for (var i in e) v(i);
                        return t.forEach((function(t) {
                            a.includes(t.name) || (u[t.name] = t)
                        })), Object.values(u).sort((function(t, e) {
                            return e.tvl - t.tvl
                        }))
                    }), [t, e, n])
                },
                p = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = (0, u.Z)((0, i.M5)(), 1),
                        r = n[0];
                    return (0, d.P)({
                        chains: t,
                        tvlTypes: e,
                        extraTvlsEnabled: r
                    })
                },
                b = function(t) {
                    var e = (0, u.Z)((0, i.M5)(), 1)[0];
                    return (0, a.useMemo)((function() {
                        return t.map((function(t) {
                            var n = (0, u.Z)(t, 2),
                                r = n[0],
                                l = n[1],
                                v = l.tvl || 0;
                            for (var o in l) "doublecounted" !== o || e.doublecounted || (v -= l[o]), "liquidstaking" !== o && "d" !== o || e.liquidstaking || (v -= l[o]), "dcandlsoverlap" === o.toLowerCase() && (e.doublecounted && e.liquidstaking || (v += l[o])), e[o.toLowerCase()] && "doublecounted" !== o && "liquidstaking" !== o && (v += l[o]);
                            return [r, v]
                        }))
                    }), [t, e])
                }
        }
    }
]);