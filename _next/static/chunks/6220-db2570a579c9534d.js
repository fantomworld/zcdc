"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6220], {
        86220: function(n, t, e) {
            e.d(t, {
                Z4: function() {
                    return z
                },
                lk: function() {
                    return I
                }
            });
            var r = e(26042),
                i = e(69396),
                o = e(99534),
                c = e(828),
                u = e(7297),
                a = e(85893),
                d = e(73324),
                f = e(39377),
                s = e(22114),
                l = e(23391),
                p = e(34029),
                m = e(16626),
                h = e(63872),
                x = e(3877),
                g = e(45214),
                b = e(63947);

            function v() {
                var n = (0, u.Z)(["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\tdisplay: none;\n\tgap: 8px;\n\talign-items: center;\n\tmargin-left: auto;\n\tpadding: 0 16px;\n\n\tlabel {\n\t\topacity: 0.8;\n\t}\n\n\t@media screen and (min-width: 96.0625rem) {\n\t\tdisplay: flex;\n\t}\n"]);
                return v = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, u.Z)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tfont-size: 0.875rem;\n"]);
                return w = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, u.Z)(["\n\t&:not(:first-child) {\n\t\tmargin-left: 12px;\n\t}\n"]);
                return y = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, u.Z)(["\n\tbackground: ", ";\n\tfont-size: 0.875rem;\n"]);
                return Z = function() {
                    return n
                }, n
            }
            var k = d.default.section.withConfig({
                    componentId: "sc-17f6bbf7-0"
                })(v(), (function(n) {
                    return n.theme.text1
                })),
                I = d.default.ul.withConfig({
                    componentId: "sc-17f6bbf7-1"
                })(w()),
                C = d.default.li.withConfig({
                    componentId: "sc-17f6bbf7-2"
                })(y()),
                j = (0, d.default)(s.UN).withConfig({
                    componentId: "sc-17f6bbf7-3"
                })(Z(), (function(n) {
                    return "dark" === n.theme.mode ? "#000" : "#f5f5f5"
                })),
                z = function(n) {
                    var t = n.options,
                        e = (0, o.Z)(n, ["options"]),
                        u = (0, c.Z)((0, h.M5)(), 2),
                        d = u[0],
                        f = u[1],
                        s = t || x.i;
                    return (0, a.jsxs)(k, {
                        children: [(0, a.jsx)("label", {
                            children: "INCLUDE IN TVL:"
                        }), (0, a.jsx)(I, (0, i.Z)((0, r.Z)({}, e), {
                            children: s.length > 3 ? (0, a.jsxs)(a.Fragment, {
                                children: [s.slice(0, 3).map((function(n) {
                                    return (0, a.jsx)(C, {
                                        children: (0, a.jsx)(l.Z, (0, i.Z)((0, r.Z)({}, n), {
                                            toggle: f(n.key),
                                            enabled: d[n.key]
                                        }))
                                    }, n.key)
                                })), (0, a.jsx)(C, {
                                    children: (0, a.jsx)(S, {
                                        options: s.slice(3)
                                    })
                                })]
                            }) : s.map((function(n) {
                                return (0, a.jsx)(C, {
                                    children: (0, a.jsx)(l.Z, (0, i.Z)((0, r.Z)({}, n), {
                                        toggle: f(n.key),
                                        enabled: d[n.key]
                                    }))
                                }, n.key)
                            }))
                        }))]
                    })
                };

            function S(n) {
                var t = n.options,
                    e = (0, o.Z)(n, ["options"]),
                    u = (0, g.Q)(),
                    d = (0, c.Z)((0, b.eG)(), 1)[0],
                    l = 0;
                return t.forEach((function(n) {
                    u.value.includes(n.key) && (l += 1)
                })), (0, a.jsxs)("span", (0, i.Z)((0, r.Z)({}, e), {
                    children: [(0, a.jsxs)(j, {
                        state: u,
                        children: [(0, a.jsx)("span", {
                            children: "Others"
                        }), (0, a.jsx)(f.n, {}), l > 0 && (0, a.jsx)(s.wr, {
                            children: l
                        })]
                    }), u.mounted && (0, a.jsx)(s.vA, {
                        state: u,
                        modal: !d,
                        children: t.map((function(n) {
                            var t = n.key,
                                e = n.name,
                                r = n.help;
                            return (0, a.jsxs)(s.Ql, {
                                value: t,
                                children: [r ? (0, a.jsx)(p.Z, {
                                    title: e,
                                    text: r
                                }) : e, (0, a.jsx)(m.XZ, {
                                    checked: u.value.includes(t)
                                })]
                            }, t)
                        }))
                    })]
                }))
            }
        },
        3877: function(n, t, e) {
            e.d(t, {
                i: function() {
                    return i
                }
            });
            var r = e(63872),
                i = [{
                    name: "Staking",
                    key: r.cm.STAKING,
                    help: "Include governance tokens staked in the protocol"
                }, {
                    name: "Pool2",
                    key: r.cm.POOL2,
                    help: "Include staked lp tokens where one of the coins in the pair is the governance token"
                }, {
                    name: "Borrows",
                    key: r.cm.BORROWED,
                    help: "Include borrowed coins in lending protocols"
                }, {
                    name: "Double Count",
                    key: r.cm.DOUBLE_COUNT,
                    help: "Include TVL of protocols which TVL feeds into another protocol"
                }, {
                    name: "Liquid Staking",
                    key: r.cm.LIQUID_STAKING,
                    help: "Include Rewards/Liquidity for staked assets"
                }]
        },
        45214: function(n, t, e) {
            e.d(t, {
                Q: function() {
                    return d
                }
            });
            var r = e(26042),
                i = e(828),
                o = e(79161),
                c = e(63947),
                u = e(63872),
                a = e(3877);

            function d(n) {
                var t = (0, i.Z)((0, u.M5)(), 2),
                    e = t[0],
                    d = t[1],
                    f = a.i.map((function(n) {
                        return n.key
                    })).filter((function(n) {
                        return e[n]
                    })),
                    s = (0, i.Z)((0, c.eG)(), 2)[1];
                return (0, o.d)((0, r.Z)({
                    value: f,
                    setValue: function(n) {
                        if (n.length < f.length) {
                            var t = f.find((function(t) {
                                return !n.includes(t)
                            }));
                            d(t)()
                        } else {
                            var e = n.find((function(n) {
                                return !f.includes(n)
                            }));
                            d(e)()
                        }
                    },
                    defaultValue: f,
                    gutter: 6,
                    animated: !0,
                    renderCallback: s
                }, n))
            }
        },
        22114: function(n, t, e) {
            e.d(t, {
                JK: function() {
                    return y
                },
                Ph: function() {
                    return x
                },
                Ql: function() {
                    return b
                },
                UN: function() {
                    return w
                },
                kp: function() {
                    return v
                },
                vA: function() {
                    return g
                },
                wr: function() {
                    return Z
                }
            });
            var r = e(7297),
                i = e(70006),
                o = e(56277),
                c = e(78823),
                u = e(62810),
                a = e(73324);

            function d() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tpadding: 12px;\n\tborder-radius: 12px;\n\tborder: none;\n\tmargin: 0;\n\twidth: 200px;\n\n\t& > *:first-child {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n\n\t:focus-visible,\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n"]);
                return d = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tmax-height: calc(100vh - 200px);\n\tmin-width: 180px;\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\toutline: none !important;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t#no-results {\n\t\tpadding: 0 12px 8px;\n\t\ttext-align: center;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tmax-height: 400px;\n\t\tfont-size: 0.825rem;\n\t\tfont-weight: 400;\n\t\tgap: 0px;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\t}\n"]);
                return f = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, r.Z)(["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\ttext-align: start;\n\tdisplay: flex;\n\talign-items: center;\n\n\t&:first-of-type {\n\t\tpadding-top: 16px;\n\t}\n\n\t&:last-of-type {\n\t\tpadding-bottom: 24px;\n\t}\n\n\t&:first-of-type,\n\t&:last-of-type {\n\t\tborder-radius: 0;\n\t}\n\n\topacity: ", ";\n\n\t@media screen and (min-width: 640px) {\n\t\tborder-bottom: ", ";\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-active-item] {\n\t\t\toutline: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&:first-of-type {\n\t\t\tpadding-top: 12px;\n\t\t}\n\n\t\t&:last-of-type {\n\t\t\tpadding-bottom: 12px;\n\t\t\tborder: none;\n\t\t}\n\t}\n"]);
                return s = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, r.Z)(["\n\tz-index: 10;\n\theight: 60vh;\n\t#no-results {\n\t\tmargin: 24px 0;\n\t}\n\n\t.filter-by-list {\n\t\tpadding: 0;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\theight: unset;\n\t}\n"]);
                return l = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, r.Z)(["\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid transparent;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t:focus-visible {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\tspan:first-of-type {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n"]);
                return p = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, r.Z)(["\n\tposition: sticky;\n\ttop: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tpadding: 12px;\n\tfont-size: 0.75rem;\n\tbackground: ", ";\n\tborder-bottom: ", ";\n\tz-index: 1;\n\n\tbutton {\n\t\tpadding: 4px 0;\n\t\tcolor: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tbackground: ", ";\n\t}\n"]);
                return m = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, r.Z)(["\n\tposition: absolute;\n\ttop: -8px;\n\tright: -8px;\n\tfont-size: 10px;\n\tpadding: 2px;\n\tmin-width: 16px;\n\tbackground: ", ";\n\tborder-radius: 9999px;\n"]);
                return h = function() {
                    return n
                }, n
            }
            var x = (0, a.default)(i.P).withConfig({
                    componentId: "sc-ea6b1404-0"
                })(d(), (function(n) {
                    return n.theme.bg6
                }), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    return "1px solid " + n.theme.text1
                })),
                g = (0, a.default)(o.v).withConfig({
                    componentId: "sc-ea6b1404-1"
                })(f(), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    return n.theme.bg1
                }), (function(n) {
                    return "dark" === n.theme.mode ? "#40444f" : "#cbcbcb"
                }), (function(n) {
                    return "dark" === n.theme.mode ? "drop-shadow(0px 6px 10px rgba(0, 0, 0, 40%))" : "drop-shadow(0px 6px 10px rgba(0, 0, 0, 15%))"
                }), (function(n) {
                    return "dark" === n.theme.mode ? "#1c1f2d" : "#f4f6ff"
                })),
                b = (0, a.default)(c.Q).withConfig({
                    componentId: "sc-ea6b1404-2"
                })(s(), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    return n.disabled ? .6 : 1
                }), (function(n) {
                    var t = n.theme;
                    return "1px solid " + (0, u.DZ)(.9, t.text1)
                }), (function(n) {
                    var t = n.theme;
                    return (0, u.DZ)(.8, t.primary1)
                })),
                v = (0, a.default)(g).withConfig({
                    componentId: "sc-ea6b1404-3"
                })(l()),
                w = (0, a.default)(i.P).withConfig({
                    componentId: "sc-ea6b1404-4"
                })(p(), (function(n) {
                    var t = n.color,
                        e = n.theme;
                    return (0, u.DZ)(.9, t || e.primary1)
                }), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    var t = n.color,
                        e = n.theme;
                    return (0, u.DZ)(.8, t || e.primary1)
                }), (function(n) {
                    return "1px solid " + n.theme.text1
                })),
                y = a.default.span.withConfig({
                    componentId: "sc-ea6b1404-5"
                })(m(), (function(n) {
                    return n.theme.bg1
                }), (function(n) {
                    var t = n.theme;
                    return "1px solid " + (0, u.DZ)(.9, t.text1)
                }), (function(n) {
                    return n.theme.primary1
                }), (function(n) {
                    return n.theme.bpLg
                }), (function(n) {
                    return "dark" === n.theme.mode ? "#1c1f2d" : "#f4f6ff"
                })),
                Z = a.default.span.withConfig({
                    componentId: "sc-ea6b1404-6"
                })(h(), (function(n) {
                    return n.theme.bg4
                }))
        },
        34029: function(n, t, e) {
            var r = e(26042),
                i = e(69396),
                o = e(99534),
                c = e(7297),
                u = e(85893),
                a = (e(67294), e(73324)),
                d = e(36103),
                f = e(17650);

            function s() {
                var n = (0, c.Z)(["\n\tposition: relative;\n\tcolor: ", ";\n\tfont-size: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\twhite-space: nowrap;\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: ", ";\n\t}\n"]);
                return s = function() {
                    return n
                }, n
            }
            var l = a.default.div.withConfig({
                componentId: "sc-56539cd5-0"
            })(s(), (function(n) {
                var t = n.theme;
                return n.link ? t.blue : t.text1
            }), (function(n) {
                var t = n.fontSize;
                return null !== t && void 0 !== t ? t : "inherit"
            }), (function(n) {
                return n.adjustSize && "12px"
            }));
            t.Z = function(n) {
                var t = n.title,
                    e = n.text,
                    c = n.adjustSize,
                    a = void 0 !== c && c,
                    s = n.fontSize,
                    p = n.link,
                    m = (0, o.Z)(n, ["title", "text", "adjustSize", "fontSize", "link"]);
                return (0, u.jsx)(f.Z, (0, i.Z)((0, r.Z)({
                    content: e
                }, m), {
                    children: (0, u.jsxs)(l, {
                        adjustSize: a,
                        link: p,
                        fontSize: s,
                        children: [(0, u.jsx)("span", {
                            children: t
                        }), (0, u.jsx)(d.Z, {
                            size: 15,
                            style: {
                                marginLeft: ".3rem",
                                marginRight: m.headerIsSorted ? "1rem" : void 0
                            }
                        })]
                    })
                }))
            }
        },
        23391: function(n, t, e) {
            var r = e(85893),
                i = e(59936),
                o = e(62480),
                c = e(34029),
                u = i.default;
            t.Z = function(n) {
                var t = n.toggle,
                    e = n.enabled,
                    i = void 0 !== e && e,
                    a = n.help,
                    d = n.name;
                return (0, r.jsxs)(o.wD.body, {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    },
                    children: [(0, r.jsx)(u, {
                        onChange: t,
                        checked: i,
                        onColor: "#0A71F1",
                        height: 20,
                        width: 40,
                        uncheckedIcon: !1,
                        checkedIcon: !1
                    }), "\xa0", a ? (0, r.jsx)(c.Z, {
                        title: d,
                        text: a
                    }) : d]
                })
            }
        },
        63947: function(n, t, e) {
            e.d(t, {
                eG: function() {
                    return c
                }
            });
            var r = e(67294),
                i = e(84545);

            function o(n, t) {
                if (!n) return function() {};
                var e = n.style.cssText;
                Object.assign(n.style, t);
                return function() {
                    n.style.cssText = e
                }
            }

            function c() {
                var n = (0, i.Z)("(min-width: 640px)", !0),
                    t = (0, r.useCallback)((function(t) {
                        var e = t.popover,
                            r = t.defaultRenderCallback;
                        return n ? r() : function(n, t) {
                            var e = o(n, {
                                    position: "fixed",
                                    bottom: "0",
                                    width: "100%",
                                    top: "unset"
                                }),
                                r = o(t, {
                                    display: "none"
                                });
                            return function() {
                                e(), r()
                            }
                        }(e)
                    }), [n]);
                return [n, t]
            }
        },
        16626: function(n, t, e) {
            e.d(t, {
                Bv: function() {
                    return P
                },
                GZ: function() {
                    return T
                },
                Gc: function() {
                    return O
                },
                Go: function() {
                    return A
                },
                Lp: function() {
                    return _
                },
                Sk: function() {
                    return V
                },
                UT: function() {
                    return E
                },
                XZ: function() {
                    return Q
                },
                _8: function() {
                    return R
                },
                a1: function() {
                    return B
                },
                iz: function() {
                    return U
                },
                o6: function() {
                    return M
                },
                ov: function() {
                    return N
                },
                s_: function() {
                    return G
                }
            });
            var r = e(7297),
                i = (e(85893), e(67294), e(73324)),
                o = e(1237),
                c = e(75926),
                u = e(7708),
                a = e(7500);

            function d() {
                var n = (0, r.Z)(["\n\tposition: relative;\n\tbackground-color: ", ";\n\tpadding: 1.25rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tborder-radius: 8px;\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n"]);
                return d = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, r.Z)(["\n\tdisplay: none;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: flex;\n\t}\n"]);
                return f = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: none;\n\t}\n"]);
                return s = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 0.2rem;\n\tmargin-left: 0.2rem;\n\t:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t@media (min-width: 80rem) {\n\t\tmargin-right: 0.2rem;\n\t}\n"]);
                return l = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tposition: relative;\n\n\t#chartWrapper {\n\t\tflex: 1;\n\t\tmin-height: 381px;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tflex-direction: row;\n\t}\n"]);
                return p = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tflex: 1;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmax-width: 350px;\n\t}\n"]);
                return m = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, r.Z)(["\n\tflex: 1;\n\tgap: 4px;\n\tpadding: 18px 25px;\n\tjustify-content: center;\n\n\t& > h1,\n\t& > h2 {\n\t\tmin-width: 0;\n\t\tfont-weight: 500;\n\t\tfont-size: 1rem;\n\t}\n\n\t& > p {\n\t\tmargin: 4px 0 -6px;\n\t\tfont-weight: 600;\n\t\tfont-size: 2rem;\n\t\tcolor: var(--tile-text-color);\n\t}\n"]);
                return h = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, r.Z)(["\n\t@media screen and (max-width: 50rem) {\n\t\tdisplay: none;\n\t}\n"]);
                return x = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, r.Z)(["\n\theight: 1px;\n\tbackground-color: ", ";\n"]);
                return g = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, r.Z)(["\n\tposition: absolute;\n\tright: 0;\n\tborder-radius: 3px;\n\theight: 16px;\n\twidth: 16px;\n\tpadding: 0px;\n\tbottom: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: ", ";\n\n\t:hover {\n\t\tcursor: pointer;\n\t\topacity: 0.7;\n\t}\n"]);
                return b = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, r.Z)(["\n\t:hover {\n\t\tcursor: pointer;\n\t\topacity: ", ";\n\t}\n"]);
                return v = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, r.Z)(["\n\tcolor: ", ";\n"]);
                return w = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 200px;\n\tborder-radius: 20px;\n\tcolor: ", ";\n\theight: ", ";\n"]);
                return y = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, r.Z)(["\n\tdisplay: grid;\n\tgrid-gap: 24px;\n\tposition: sticky;\n\ttop: 4rem;\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, r.Z)(["\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tpadding: 0;\n\tmargin-bottom: 2rem;\n"]);
                return k = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, r.Z)(["\n\tlist-style: none;\n\tdisplay: flex;\n\tpadding-bottom: 0.5rem;\n\tmargin-right: 1rem;\n\tfont-weight: ", ";\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0);\n\n\t:hover {\n\t\tcursor: pointer;\n\t\tborder-bottom: 1px solid ", ";\n\t}\n"]);
                return I = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, r.Z)(["\n\tpadding: 12px;\n\tmargin: 12px 0 0;\n\tbackground: #2172e5;\n\tcolor: #fff;\n\tfont-weight: 400;\n\tborder-radius: 8px;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground: #4190ff;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tborder-radius: 0 0 8px 8px;\n\t}\n"]);
                return C = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, r.Z)(["\n\tdisplay: flex;\n\theight: 13px;\n\twidth: 13px;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-left: auto;\n\tborder-radius: 2px;\n\tborder: 1px solid #28a2b5;\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n\tcolor: ", ";\n"]);
                return j = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, r.Z)(["\n\tpadding: 4px 6px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tposition: absolute;\n\tbottom: 8px;\n\tright: 8px;\n\tdisplay: flex;\n\talign-items: center;\n"]);
                return z = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, r.Z)(["\n\tcolor: inherit;\n\twidth: 16px;\n\theight: 16px;\n"]);
                return S = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, r.Z)(["\n\tposition: relative;\n\ttop: 1px;\n\tpadding: 0;\n\t-webkit-appearance: none;\n\tappearance: none;\n\tbackground-color: transparent;\n\twidth: 1em;\n\theight: 1em;\n\tborder: ", ";\n\tborder-radius: 0.15em;\n\ttransform: translateY(-0.075em);\n\tdisplay: grid;\n\tplace-content: center;\n\n\t::before {\n\t\tcontent: '';\n\t\twidth: 0.5em;\n\t\theight: 0.5em;\n\t\ttransform: scale(0);\n\t\ttransition: 120ms transform ease-in-out;\n\t\tbox-shadow: ", ";\n\t\ttransform-origin: bottom left;\n\t\tclip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n\t}\n\n\t:checked::before {\n\t\ttransform: scale(1);\n\t}\n\n\t:focus-visible {\n\t\toutline-offset: max(2px, 0.15em);\n\t}\n\n\t:hover {\n\t\tcursor: pointer;\n\t}\n"]);
                return L = function() {
                    return n
                }, n
            }

            function D() {
                var n = (0, r.Z)(["\n\tpadding: 1.25rem;\n\ttext-align: center;\n\tbackground-color: ", ";\n\tborder-radius: 8px;\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n"]);
                return D = function() {
                    return n
                }, n
            }
            var G = i.default.div.withConfig({
                    componentId: "sc-da243cfb-0"
                })(d(), (function(n) {
                    return n.theme.advancedBG
                }), (function(n) {
                    return n.theme.bg3
                })),
                E = (0, i.default)(G).withConfig({
                    componentId: "sc-da243cfb-1"
                })(f()),
                N = ((0, i.default)(G).withConfig({
                    componentId: "sc-da243cfb-2"
                })(s()), i.default.a.withConfig({
                    componentId: "sc-da243cfb-3"
                })(l())),
                T = i.default.div.withConfig({
                    componentId: "sc-da243cfb-4"
                })(p()),
                O = i.default.div.withConfig({
                    componentId: "sc-da243cfb-5"
                })(m()),
                _ = (0, i.default)(G).withConfig({
                    componentId: "sc-da243cfb-6"
                })(h()),
                A = (0, i.default)(_).withConfig({
                    componentId: "sc-da243cfb-7"
                })(x()),
                U = (0, i.default)(o.xu).withConfig({
                    componentId: "sc-da243cfb-8"
                })(g(), (function(n) {
                    return n.theme.divider
                })),
                B = i.default.div.withConfig({
                    componentId: "sc-da243cfb-9"
                })(b(), (function(n) {
                    return n.theme.text1
                })),
                P = (i.default.div.withConfig({
                    componentId: "sc-da243cfb-10"
                })(v(), (function(n) {
                    return n.fade && "0.7"
                })), i.default.div.withConfig({
                    componentId: "sc-da243cfb-11"
                })(w(), (function(n) {
                    return n.theme.text1
                })), i.default.div.withConfig({
                    componentId: "sc-da243cfb-12"
                })(y(), (function(n) {
                    return n.theme.text1
                }), (function(n) {
                    var t = n.height;
                    return t && t
                })), i.default.span.withConfig({
                    componentId: "sc-da243cfb-13"
                })(Z()), i.default.ul.withConfig({
                    componentId: "sc-da243cfb-14"
                })(k()), i.default.li.withConfig({
                    componentId: "sc-da243cfb-15"
                })(I(), (function(n) {
                    return n.isActive ? 600 : 500
                }), (function(n) {
                    return n.theme.bg3
                })), i.default.button.withConfig({
                    componentId: "sc-da243cfb-16"
                })(C())),
                Q = (0, i.default)(c.P).withConfig({
                    componentId: "sc-da243cfb-17"
                })(j(), (function(n) {
                    return n.theme.text1
                })),
                M = (0, i.default)(a.AM).withConfig({
                    componentId: "sc-da243cfb-18"
                })(z(), (function(n) {
                    return n.theme.bg3
                })),
                R = (0, i.default)(u.Z).withConfig({
                    componentId: "sc-da243cfb-19"
                })(S()),
                V = i.default.input.withConfig({
                    componentId: "sc-da243cfb-20"
                })(L(), (function(n) {
                    return "1px solid " + n.theme.text4
                }), (function(n) {
                    return "inset 1em 1em " + n.theme.text1
                }));
            i.default.p.withConfig({
                componentId: "sc-da243cfb-21"
            })(D(), (function(n) {
                return n.theme.advancedBG
            }), (function(n) {
                return n.theme.bg3
            }))
        },
        84545: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = e(67294);

            function i(n, t) {
                var e = (0, r.useState)(function(n, t) {
                        return void 0 !== t ? t : window.matchMedia(n).matches
                    }(n, t)),
                    i = e[0],
                    o = e[1];
                return (0, r.useEffect)((function() {
                    var t = window.matchMedia(n);
                    o(t.matches);
                    var e = function() {
                        return o(!!t.matches)
                    };
                    return t.addEventListener("change", e),
                        function() {
                            return t.removeEventListener("change", e)
                        }
                }), [n]), i
            }
        }
    }
]);