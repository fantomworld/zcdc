"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8100], {
        8100: function(e, n, t) {
            t.d(n, {
                ZP: function() {
                    return Q
                }
            });
            var r = t(67294);

            function i(e, n, t, r) {
                return new(t || (t = Promise))((function(i, u) {
                    function o(e) {
                        try {
                            c(r.next(e))
                        } catch (n) {
                            u(n)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (n) {
                            u(n)
                        }
                    }

                    function c(e) {
                        var n;
                        e.done ? i(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                            e(n)
                        }))).then(o, a)
                    }
                    c((r = r.apply(e, n || [])).next())
                }))
            }

            function u(e, n) {
                var t, r, i, u, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function a(u) {
                    return function(a) {
                        return function(u) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: u[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, r = u[1], u = [0];
                                        continue;
                                    case 7:
                                        u = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            o.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && o.label < i[1]) {
                                            o.label = i[1], i = u;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(u);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                u = n.call(e, o)
                            } catch (a) {
                                u = [6, a], r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, a])
                    }
                }
            }
            var o, a = function() {},
                c = a(),
                f = Object,
                s = function(e) {
                    return e === c
                },
                l = function(e) {
                    return "function" == typeof e
                },
                d = function(e, n) {
                    return f.assign({}, e, n)
                },
                v = "undefined",
                h = function() {
                    return typeof window != v
                },
                g = new WeakMap,
                p = 0,
                b = function(e) {
                    var n, t, r = typeof e,
                        i = e && e.constructor,
                        u = i == Date;
                    if (f(e) !== e || u || i == RegExp) n = u ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if (n = g.get(e)) return n;
                        if (n = ++p + "~", g.set(e, n), i == Array) {
                            for (n = "@", t = 0; t < e.length; t++) n += b(e[t]) + ",";
                            g.set(e, n)
                        }
                        if (i == f) {
                            n = "#";
                            for (var o = f.keys(e).sort(); !s(t = o.pop());) s(e[t]) || (n += t + ":" + b(e[t]) + ",");
                            g.set(e, n)
                        }
                    }
                    return n
                },
                y = !0,
                w = h(),
                m = typeof document != v,
                E = w && window.addEventListener ? window.addEventListener.bind(window) : a,
                R = m ? document.addEventListener.bind(document) : a,
                k = w && window.removeEventListener ? window.removeEventListener.bind(window) : a,
                O = m ? document.removeEventListener.bind(document) : a,
                S = {
                    isOnline: function() {
                        return y
                    },
                    isVisible: function() {
                        var e = m && document.visibilityState;
                        return s(e) || "hidden" !== e
                    }
                },
                T = {
                    initFocus: function(e) {
                        return R("visibilitychange", e), E("focus", e),
                            function() {
                                O("visibilitychange", e), k("focus", e)
                            }
                    },
                    initReconnect: function(e) {
                        var n = function() {
                                y = !0, e()
                            },
                            t = function() {
                                y = !1
                            };
                        return E("online", n), E("offline", t),
                            function() {
                                k("online", n), k("offline", t)
                            }
                    }
                },
                V = !h() || "Deno" in window,
                C = function(e) {
                    return h() && typeof window.requestAnimationFrame != v ? window.requestAnimationFrame(e) : setTimeout(e, 1)
                },
                x = V ? r.useEffect : r.useLayoutEffect,
                D = "undefined" !== typeof navigator && navigator.connection,
                I = !V && D && (["slow-2g", "2g"].includes(D.effectiveType) || D.saveData),
                L = function(e) {
                    if (l(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    var n = [].concat(e);
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? b(e) : "", n, e ? "$swr$" + e : ""]
                },
                P = new WeakMap,
                F = function(e, n, t, r, i, u, o) {
                    void 0 === o && (o = !0);
                    var a = P.get(e),
                        c = a[0],
                        f = a[1],
                        s = a[3],
                        l = c[n],
                        d = f[n];
                    if (o && d)
                        for (var v = 0; v < d.length; ++v) d[v](t, r, i);
                    return u && (delete s[n], l && l[0]) ? l[0](2).then((function() {
                        return e.get(n)
                    })) : e.get(n)
                },
                A = 0,
                M = function() {
                    return ++A
                },
                N = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return i(void 0, void 0, void 0, (function() {
                        var n, t, r, i, o, a, f, v, h, g, p, b, y, w, m, E, R, k, O, S, T;
                        return u(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    if (n = e[0], t = e[1], r = e[2], i = e[3], a = !!s((o = "boolean" === typeof i ? {
                                            revalidate: i
                                        } : i || {}).populateCache) || o.populateCache, f = !1 !== o.revalidate, v = !1 !== o.rollbackOnError, h = o.optimisticData, g = L(t), p = g[0], b = g[2], !p) return [2];
                                    if (y = P.get(n), w = y[2], e.length < 3) return [2, F(n, p, n.get(p), c, c, f, !0)];
                                    if (m = r, R = M(), w[p] = [R, 0], k = !s(h), O = n.get(p), k && (S = l(h) ? h(O) : h, n.set(p, S), F(n, p, S)), l(m)) try {
                                        m = m(n.get(p))
                                    } catch (V) {
                                        E = V
                                    }
                                    return m && l(m.then) ? [4, m.catch((function(e) {
                                        E = e
                                    }))] : [3, 2];
                                case 1:
                                    if (m = u.sent(), R !== w[p][0]) {
                                        if (E) throw E;
                                        return [2, m]
                                    }
                                    E && k && v && (a = !0, m = O, n.set(p, O)), u.label = 2;
                                case 2:
                                    return a && (E || (l(a) && (m = a(m, O)), n.set(p, m)), n.set(b, d(n.get(b), {
                                        error: E
                                    }))), w[p][1] = M(), [4, F(n, p, m, E, c, f, !!a)];
                                case 3:
                                    if (T = u.sent(), E) throw E;
                                    return [2, a ? T : m]
                            }
                        }))
                    }))
                },
                W = function(e, n) {
                    for (var t in e) e[t][0] && e[t][0](n)
                },
                _ = function(e, n) {
                    if (!P.has(e)) {
                        var t = d(T, n),
                            r = {},
                            i = N.bind(c, e),
                            u = a;
                        if (P.set(e, [r, {}, {}, {}, i]), !V) {
                            var o = t.initFocus(setTimeout.bind(c, W.bind(c, r, 0))),
                                f = t.initReconnect(setTimeout.bind(c, W.bind(c, r, 1)));
                            u = function() {
                                o && o(), f && f(), P.delete(e)
                            }
                        }
                        return [e, i, u]
                    }
                    return [e, P.get(e)[4]]
                },
                q = _(new Map),
                J = q[0],
                $ = q[1],
                j = d({
                    onLoadingSlow: a,
                    onSuccess: a,
                    onError: a,
                    onErrorRetry: function(e, n, t, r, i) {
                        var u = t.errorRetryCount,
                            o = i.retryCount,
                            a = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * t.errorRetryInterval;
                        !s(u) && o > u || setTimeout(r, a, i)
                    },
                    onDiscarded: a,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: I ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: I ? 5e3 : 3e3,
                    compare: function(e, n) {
                        return b(e) == b(n)
                    },
                    isPaused: function() {
                        return !1
                    },
                    cache: J,
                    mutate: $,
                    fallback: {}
                }, S),
                G = function(e, n) {
                    var t = d(e, n);
                    if (n) {
                        var r = e.use,
                            i = e.fallback,
                            u = n.use,
                            o = n.fallback;
                        r && u && (t.use = r.concat(u)), i && o && (t.fallback = d(i, o))
                    }
                    return t
                },
                H = (0, r.createContext)({}),
                Z = function(e) {
                    return l(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
                },
                z = function() {
                    return d(j, (0, r.useContext)(H))
                },
                B = function(e, n, t) {
                    var r = n[e] || (n[e] = []);
                    return r.push(t),
                        function() {
                            var e = r.indexOf(t);
                            e >= 0 && (r[e] = r[r.length - 1], r.pop())
                        }
                },
                K = {
                    dedupe: !0
                },
                Q = (f.defineProperty((function(e) {
                    var n = e.value,
                        t = G((0, r.useContext)(H), n),
                        i = n && n.provider,
                        u = (0, r.useState)((function() {
                            return i ? _(i(t.cache || J), n) : c
                        }))[0];
                    return u && (t.cache = u[0], t.mutate = u[1]), x((function() {
                        return u ? u[2] : c
                    }), []), (0, r.createElement)(H.Provider, d(e, {
                        value: t
                    }))
                }), "default", {
                    value: j
                }), o = function(e, n, t) {
                    var o = t.cache,
                        a = t.compare,
                        f = t.fallbackData,
                        v = t.suspense,
                        h = t.revalidateOnMount,
                        g = t.refreshInterval,
                        p = t.refreshWhenHidden,
                        b = t.refreshWhenOffline,
                        y = P.get(o),
                        w = y[0],
                        m = y[1],
                        E = y[2],
                        R = y[3],
                        k = L(e),
                        O = k[0],
                        S = k[1],
                        T = k[2],
                        D = (0, r.useRef)(!1),
                        I = (0, r.useRef)(!1),
                        A = (0, r.useRef)(O),
                        W = (0, r.useRef)(n),
                        _ = (0, r.useRef)(t),
                        q = function() {
                            return _.current
                        },
                        J = function() {
                            return q().isVisible() && q().isOnline()
                        },
                        $ = function(e) {
                            return o.set(T, d(o.get(T), e))
                        },
                        j = o.get(O),
                        G = s(f) ? t.fallback[O] : f,
                        H = s(j) ? G : j,
                        Z = o.get(T) || {},
                        z = Z.error,
                        Q = !D.current,
                        U = function() {
                            return Q && !s(h) ? h : !q().isPaused() && (v ? !s(H) && t.revalidateIfStale : s(H) || t.revalidateIfStale)
                        },
                        X = !(!O || !n) && (!!Z.isValidating || Q && U()),
                        Y = function(e, n) {
                            var t = (0, r.useState)({})[1],
                                i = (0, r.useRef)(e),
                                u = (0, r.useRef)({
                                    data: !1,
                                    error: !1,
                                    isValidating: !1
                                }),
                                o = (0, r.useCallback)((function(e) {
                                    var r = !1,
                                        o = i.current;
                                    for (var a in e) {
                                        var c = a;
                                        o[c] !== e[c] && (o[c] = e[c], u.current[c] && (r = !0))
                                    }
                                    r && !n.current && t({})
                                }), []);
                            return x((function() {
                                i.current = e
                            })), [i, u.current, o]
                        }({
                            data: H,
                            error: z,
                            isValidating: X
                        }, I),
                        ee = Y[0],
                        ne = Y[1],
                        te = Y[2],
                        re = (0, r.useCallback)((function(e) {
                            return i(void 0, void 0, void 0, (function() {
                                var n, r, i, f, d, v, h, g, p, b, y, w, m;
                                return u(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (n = W.current, !O || !n || I.current || q().isPaused()) return [2, !1];
                                            f = !0, d = e || {}, v = !R[O] || !d.dedupe, h = function() {
                                                return !I.current && O === A.current && D.current
                                            }, g = function() {
                                                var e = R[O];
                                                e && e[1] === i && delete R[O]
                                            }, p = {
                                                isValidating: !1
                                            }, b = function() {
                                                $({
                                                    isValidating: !1
                                                }), h() && te(p)
                                            }, $({
                                                isValidating: !0
                                            }), te({
                                                isValidating: !0
                                            }), u.label = 1;
                                        case 1:
                                            return u.trys.push([1, 3, , 4]), v && (F(o, O, ee.current.data, ee.current.error, !0), t.loadingTimeout && !o.get(O) && setTimeout((function() {
                                                f && h() && q().onLoadingSlow(O, t)
                                            }), t.loadingTimeout), R[O] = [n.apply(void 0, S), M()]), m = R[O], r = m[0], i = m[1], [4, r];
                                        case 2:
                                            return r = u.sent(), v && setTimeout(g, t.dedupingInterval), R[O] && R[O][1] === i ? ($({
                                                error: c
                                            }), p.error = c, y = E[O], !s(y) && (i <= y[0] || i <= y[1] || 0 === y[1]) ? (b(), v && h() && q().onDiscarded(O), [2, !1]) : (a(ee.current.data, r) ? p.data = ee.current.data : p.data = r, a(o.get(O), r) || o.set(O, r), v && h() && q().onSuccess(r, O, t), [3, 4])) : (v && h() && q().onDiscarded(O), [2, !1]);
                                        case 3:
                                            return w = u.sent(), g(), q().isPaused() || ($({
                                                error: w
                                            }), p.error = w, v && h() && (q().onError(w, O, t), ("boolean" === typeof t.shouldRetryOnError && t.shouldRetryOnError || l(t.shouldRetryOnError) && t.shouldRetryOnError(w)) && J() && q().onErrorRetry(w, O, t, re, {
                                                retryCount: (d.retryCount || 0) + 1,
                                                dedupe: !0
                                            }))), [3, 4];
                                        case 4:
                                            return f = !1, b(), h() && v && F(o, O, p.data, p.error, !1), [2, !0]
                                    }
                                }))
                            }))
                        }), [O]),
                        ie = (0, r.useCallback)(N.bind(c, o, (function() {
                            return A.current
                        })), []);
                    if (x((function() {
                            W.current = n, _.current = t
                        })), x((function() {
                            if (O) {
                                var e = O !== A.current,
                                    n = re.bind(c, K),
                                    t = 0,
                                    r = B(O, m, (function(e, n, t) {
                                        te(d({
                                            error: n,
                                            isValidating: t
                                        }, a(ee.current.data, e) ? c : {
                                            data: e
                                        }))
                                    })),
                                    i = B(O, w, (function(e) {
                                        if (0 == e) {
                                            var r = Date.now();
                                            q().revalidateOnFocus && r > t && J() && (t = r + q().focusThrottleInterval, n())
                                        } else if (1 == e) q().revalidateOnReconnect && J() && n();
                                        else if (2 == e) return re()
                                    }));
                                return I.current = !1, A.current = O, D.current = !0, e && te({
                                        data: H,
                                        error: z,
                                        isValidating: X
                                    }), U() && (s(H) || V ? n() : C(n)),
                                    function() {
                                        I.current = !0, r(), i()
                                    }
                            }
                        }), [O, re]), x((function() {
                            var e;

                            function n() {
                                var n = l(g) ? g(H) : g;
                                n && -1 !== e && (e = setTimeout(t, n))
                            }

                            function t() {
                                ee.current.error || !p && !q().isVisible() || !b && !q().isOnline() ? n() : re(K).then(n)
                            }
                            return n(),
                                function() {
                                    e && (clearTimeout(e), e = -1)
                                }
                        }), [g, p, b, re]), (0, r.useDebugValue)(H), v && s(H) && O) throw W.current = n, _.current = t, I.current = !1, s(z) ? re(K) : z;
                    return {
                        mutate: ie,
                        get data() {
                            return ne.data = !0, H
                        },
                        get error() {
                            return ne.error = !0, z
                        },
                        get isValidating() {
                            return ne.isValidating = !0, X
                        }
                    }
                }, function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var t = z(),
                        r = Z(e),
                        i = r[0],
                        u = r[1],
                        a = r[2],
                        c = G(t, a),
                        f = o,
                        s = c.use;
                    if (s)
                        for (var l = s.length; l-- > 0;) f = s[l](f);
                    return f(i, u || c.fetcher, c)
                })
        }
    }
]);