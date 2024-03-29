/*! Amaze UI v2.4.0 | by Amaze UI Team | (c) 2015 AllMobilize, Inc. | Licensed under MIT | 2015-06-01T09:54:08+0800 */
!
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: this,
        e.AMUI = t()
    }
} (function() {
    return function t(e, i, n) {
        function o(a, r) {
            if (!i[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(a, !0);
                    if (s) return s(a, !0);
                    var d = new Error("Cannot find module '" + a + "'");
                    throw d.code = "MODULE_NOT_FOUND",
                    d
                }
                var u = i[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports,
                function(t) {
                    var i = e[a][1][t];
                    return o(i ? i: t)
                },
                u, u.exports, t, e, i, n)
            }
            return i[a].exports
        }
        for (var s = "function" == typeof require && require,
        a = 0; a < n.length; a++) o(n[a]);
        return o
    } ({
        1 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(30),
                t(3),
                t(4),
                t(5),
                t(6),
                t(7),
                t(8),
                t(9),
                t(10),
                t(11),
                t(12),
                t(13),
                t(14),
                t(15),
                t(16),
                t(17),
                t(18),
                t(19),
                t(20),
                t(21),
                t(22),
                t(23),
                t(24),
                t(25),
                t(26),
                t(27),
                t(28),
                t(29),
                t(31),
                t(32),
                t(33),
                t(34),
                t(35),
                t(36),
                t(37),
                t(38),
                t(39),
                t(40),
                t(41),
                t(42),
                t(43),
                t(44),
                t(45),
                t(46),
                t(47),
                t(48),
                t(49),
                t(50),
                t(51),
                t(52),
                e.exports = n.AMUI
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            10 : 10,
            11 : 11,
            12 : 12,
            13 : 13,
            14 : 14,
            15 : 15,
            16 : 16,
            17 : 17,
            18 : 18,
            19 : 19,
            2 : 2,
            20 : 20,
            21 : 21,
            22 : 22,
            23 : 23,
            24 : 24,
            25 : 25,
            26 : 26,
            27 : 27,
            28 : 28,
            29 : 29,
            3 : 3,
            30 : 30,
            31 : 31,
            32 : 32,
            33 : 33,
            34 : 34,
            35 : 35,
            36 : 36,
            37 : 37,
            38 : 38,
            39 : 39,
            4 : 4,
            40 : 40,
            41 : 41,
            42 : 42,
            43 : 43,
            44 : 44,
            45 : 45,
            46 : 46,
            47 : 47,
            48 : 48,
            49 : 49,
            5 : 5,
            50 : 50,
            51 : 51,
            52 : 52,
            6 : 6,
            7 : 7,
            8 : 8,
            9 : 9
        }],
        2 : [function(t, e, i) { (function(t) {
                "use strict";
                var i = "undefined" != typeof window ? window.jQuery: "undefined" != typeof t ? t.jQuery: null;
                if ("undefined" == typeof i) throw new Error("Amaze UI 2.x requires jQuery :-(\n\u7231\u4e0a\u4e00\u5339\u91ce\u9a6c\uff0c\u53ef\u4f60\u7684\u5bb6\u91cc\u6ca1\u6709\u8349\u539f\u2026");
                var n = i.AMUI || {},
                o = i(window),
                s = window.document,
                a = i("html");
                n.VERSION = "2.4.0",
                n.support = {},
                n.support.transition = function() {
                    var t = function() {
                        var t = s.body || s.documentElement,
                        e = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                        for (var i in e) if (void 0 !== t.style[i]) return e[i]
                    } ();
                    return t && {
                        end: t
                    }
                } (),
                n.support.animation = function() {
                    var t = function() {
                        var t = s.body || s.documentElement,
                        e = {
                            WebkitAnimation: "webkitAnimationEnd",
                            MozAnimation: "animationend",
                            OAnimation: "oAnimationEnd oanimationend",
                            animation: "animationend"
                        };
                        for (var i in e) if (void 0 !== t.style[i]) return e[i]
                    } ();
                    return t && {
                        end: t
                    }
                } (),
                n.support.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1,
                n.support.mutationobserver = window.MutationObserver || window.WebKitMutationObserver || null,
                n.support.formValidation = "function" == typeof document.createElement("form").checkValidity,
                n.utils = {},
                n.utils.debounce = function(t, e, i) {
                    var n;
                    return function() {
                        var o = this,
                        s = arguments,
                        a = function() {
                            n = null,
                            i || t.apply(o, s)
                        },
                        r = i && !n;
                        clearTimeout(n),
                        n = setTimeout(a, e),
                        r && t.apply(o, s)
                    }
                },
                n.utils.isInView = function(t, e) {
                    var n = i(t),
                    s = !(!n.width() && !n.height()) && "none" !== n.css("display");
                    if (!s) return ! 1;
                    var a = o.scrollLeft(),
                    r = o.scrollTop(),
                    l = n.offset(),
                    d = l.left,
                    u = l.top;
                    return e = i.extend({
                        topOffset: 0,
                        leftOffset: 0
                    },
                    e),
                    u + n.height() >= r && u - e.topOffset <= r + o.height() && d + n.width() >= a && d - e.leftOffset <= a + o.width()
                },
                n.utils.parseOptions = n.utils.options = function(t) {
                    if (i.isPlainObject(t)) return t;
                    var e = t ? t.indexOf("{") : -1,
                    n = {};
                    if ( - 1 != e) try {
                        n = new Function("", "var json = " + t.substr(e) + "; return JSON.parse(JSON.stringify(json));")()
                    } catch(o) {}
                    return n
                },
                n.utils.generateGUID = function(t) {
                    var e = t + "-" || "am-";
                    do e += Math.random().toString(36).substring(2, 7);
                    while (document.getElementById(e));
                    return e
                },
                i.fn.emulateTransitionEnd = function(t) {
                    var e = !1,
                    o = this;
                    i(this).one(n.support.transition.end,
                    function() {
                        e = !0
                    });
                    var s = function() {
                        e || i(o).trigger(n.support.transition.end),
                        o.transitionEndTimmer = void 0
                    };
                    return this.transitionEndTimmer = setTimeout(s, t),
                    this
                },
                i.fn.redraw = function() {
                    return i(this).each(function() {
                        this.offsetHeight
                    }),
                    this
                },
                i.fn.transitionEnd = function(t) {
                    function e(n) {
                        t.call(this, n),
                        i && o.off(i, e)
                    }
                    var i = n.support.transition.end,
                    o = this;
                    return t && i && o.on(i, e),
                    this
                },
                i.fn.removeClassRegEx = function() {
                    return this.each(function(t) {
                        var e = i(this).attr("class");
                        if (!e || !t) return ! 1;
                        var n = [];
                        e = e.split(" ");
                        for (var o = 0,
                        s = e.length; s > o; o++) e[o].match(t) || n.push(e[o]);
                        i(this).attr("class", n.join(" "))
                    })
                },
                i.fn.alterClass = function(t, e) {
                    var n = this;
                    if ( - 1 === t.indexOf("*")) return n.removeClass(t),
                    e ? n.addClass(e) : n;
                    var o = new RegExp("\\s" + t.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
                    return n.each(function(t, e) {
                        for (var n = " " + e.className + " "; o.test(n);) n = n.replace(o, " ");
                        e.className = i.trim(n)
                    }),
                    e ? n.addClass(e) : n
                },
                n.utils.rAF = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
                    function(t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }
                } (),
                n.utils.cancelAF = function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
                    function(t) {
                        window.clearTimeout(t)
                    }
                } (),
                n.utils.measureScrollbar = function() {
                    if (document.body.clientWidth >= window.innerWidth) return 0;
                    var t = i('<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;"></div>');
                    i(document.body).append(t);
                    var e = t[0].offsetWidth - t[0].clientWidth;
                    return t.remove(),
                    e
                },
                n.utils.imageLoader = function(t, e) {
                    function i() {
                        e(t[0])
                    }
                    function n() {
                        if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                            var t = this.attr("src"),
                            e = t.match(/\?/) ? "&": "?";
                            e += "random=" + (new Date).getTime(),
                            this.attr("src", t + e)
                        }
                    }
                    return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i()
                },
                n.template = function(t, e) {
                    var i = n.template;
                    return i.cache[t] || (i.cache[t] = function() {
                        var e = t,
                        n = /^[\w\-]+$/.test(t) ? i.get(t) : (e = "template(string)", t),
                        o = 1,
                        s = ("try { " + (i.variable ? "var " + i.variable + " = this.stash;": "with (this.stash) { ") + "this.ret += '" + n.replace(/<%/g, "").replace(/%>/g, "").replace(/'(?![^\x11\x13]+?\x13)/g, "\\x27").replace(/^\s*|\s*$/g, "").replace(/\n/g,
                        function() {
                            return "';\nthis.line = " + ++o + "; this.ret += '\\n"
                        }).replace(/\x11-(.+?)\x13/g, "' + ($1) + '").replace(/\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g, "'; $1; this.ret += '") + "'; " + (i.variable ? "": "}") + "return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on " + e + "' + ' line ' + this.line + ')'; } //@ sourceURL=" + e + "\n").replace(/this\.ret \+= '';/g, ""),
                        a = new Function(s),
                        r = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&#x22;",
                            "'": "&#x27;"
                        },
                        l = function(t) {
                            return ("" + t).replace(/[&<>\'\"]/g,
                            function(t) {
                                return r[t]
                            })
                        };
                        return function(t) {
                            return a.call(i.context = {
                                escapeHTML: l,
                                line: 1,
                                ret: "",
                                stash: t
                            })
                        }
                    } ()),
                    e ? i.cache[t](e) : i.cache[t]
                },
                n.template.cache = {},
                n.template.get = function(t) {
                    if (t) {
                        var e = document.getElementById(t);
                        return e && e.innerHTML || ""
                    }
                },
                n.DOMWatchers = [],
                n.DOMReady = !1,
                n.ready = function(t) {
                    n.DOMWatchers.push(t),
                    n.DOMReady && t(document)
                },
                n.DOMObserve = function(t, e, o) {
                    var s = n.support.mutationobserver;
                    s && (e = i.isPlainObject(e) ? e: {
                        childList: !0,
                        subtree: !0
                    },
                    o = "function" == typeof o && o ||
                    function() {},
                    i(t).each(function() {
                        var t = this,
                        a = i(t);
                        if (!a.data("am.observer")) try {
                            var r = new s(n.utils.debounce(function(e, i) {
                                o.call(t, e, i),
                                a.trigger("changed.dom.amui")
                            },
                            50));
                            r.observe(t, e),
                            a.data("am.observer", r)
                        } catch(l) {}
                    }))
                },
                i.fn.DOMObserve = function(t, e) {
                    return this.each(function() {
                        n.DOMObserve(this, t, e)
                    })
                },
                n.support.touch && a.addClass("am-touch"),
                i(document).on("changed.dom.amui",
                function(t) {
                    var e = t.target;
                    i.each(n.DOMWatchers,
                    function(t, i) {
                        i(e)
                    })
                }),
                i(function() {
                    var t = i("body");
                    n.DOMReady = !0,
                    i.each(n.DOMWatchers,
                    function(t, e) {
                        e(document)
                    }),
                    n.DOMObserve("[data-am-observe]"),
                    a.removeClass("no-js").addClass("js"),
                    n.support.animation && a.addClass("cssanimations"),
                    window.navigator.standalone && a.addClass("am-standalone"),
                    i(".am-topbar-fixed-top").length && t.addClass("am-with-topbar-fixed-top"),
                    i(".am-topbar-fixed-bottom").length && t.addClass("am-with-topbar-fixed-bottom");
                    var e = i(".am-layout");
                    e.find('[class*="md-block-grid"]').alterClass("md-block-grid-*"),
                    e.find('[class*="lg-block-grid"]').alterClass("lg-block-grid"),
                    i("[data-am-widget]").each(function() {
                        var t = i(this);
                        0 === t.parents(".am-layout").length && t.addClass("am-no-layout")
                    })
                }),
                i.AMUI = n,
                e.exports = n
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {}],
        3 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    window.removeEventListener("load", n, !1),
                    l = !0
                }
                function o(t) {
                    return d = d || new o.Class(t)
                }
                function s(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }
                function a() {
                    "#ath" == document.location.hash && history.replaceState("", window.document.title, document.location.href.split("#")[0]),
                    u.test(document.location.href) && history.replaceState("", window.document.title, document.location.href.replace(u, "$1")),
                    c.test(document.location.search) && history.replaceState("", window.document.title, document.location.href.replace(c, "$2"))
                }
                var r = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2);
                var l = !1;
                "complete" === document.readyState ? l = !0 : window.addEventListener("load", n, !1);
                var d, u = /\/ath(\/)?$/,
                c = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;
                o.intl = {
                    en_us: {
                        message: "To add this web app to the home screen: tap %icon and then <strong>%action</strong>.",
                        action: {
                            ios: "Add to Home Screen",
                            android: "Add to homescreen",
                            windows: "pin to start"
                        }
                    },
                    zh_cn: {
                        message: "\u5982\u8981\u628a\u5e94\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55,\u8bf7\u70b9\u51fb%icon, \u7136\u540e<strong>%action</strong>",
                        action: {
                            ios: "\u52a0\u81f3\u4e3b\u5c4f\u5e55",
                            android: "\u52a0\u81f3\u4e3b\u5c4f\u5e55",
                            windows: "\u6309\u4f4f\u542f\u52a8"
                        }
                    },
                    zh_tw: {
                        message: "\u5982\u8981\u628a\u61c9\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55, \u8acb\u9ede\u64ca%icon, \u7136\u5f8c<strong>%action</strong>.",
                        action: {
                            ios: "\u52a0\u81f3\u4e3b\u5c4f\u5e55",
                            android: "\u52a0\u81f3\u4e3b\u5c4f\u5e55",
                            windows: "\u6309\u4f4f\u555f\u52d5"
                        }
                    }
                };
                for (var h in o.intl) o.intl[h.substr(0, 2)] = o.intl[h];
                o.defaults = {
                    appID: "org.cubiq.addtohome",
                    fontSize: 15,
                    debug: !1,
                    modal: !1,
                    mandatory: !1,
                    autostart: !0,
                    skipFirstVisit: !1,
                    startDelay: 1,
                    lifespan: 15,
                    displayPace: 1440,
                    maxDisplayCount: 0,
                    icon: !0,
                    message: "",
                    validLocation: [],
                    onInit: null,
                    onShow: null,
                    onRemove: null,
                    onAdd: null,
                    onPrivate: null,
                    detectHomescreen: !1
                };
                var p = window.navigator.userAgent,
                f = window.navigator;
                s(o, {
                    hasToken: "#ath" == document.location.hash || u.test(document.location.href) || c.test(document.location.search),
                    isRetina: window.devicePixelRatio && window.devicePixelRatio > 1,
                    isIDevice: /iphone|ipod|ipad/i.test(p),
                    isMobileChrome: p.indexOf("Android") > -1 && /Chrome\/[.0-9]*/.test(p),
                    isMobileIE: p.indexOf("Windows Phone") > -1,
                    language: f.language && f.language.toLowerCase().replace("-", "_") || ""
                }),
                o.language = o.language && o.language in o.intl ? o.language: "en_us",
                o.isMobileSafari = o.isIDevice && p.indexOf("Safari") > -1 && p.indexOf("CriOS") < 0,
                o.OS = o.isIDevice ? "ios": o.isMobileChrome ? "android": o.isMobileIE ? "windows": "unsupported",
                o.OSVersion = p.match(/(OS|Android) (\d+[_\.]\d+)/),
                o.OSVersion = o.OSVersion && o.OSVersion[2] ? +o.OSVersion[2].replace("_", ".") : 0,
                o.isStandalone = window.navigator.standalone || o.isMobileChrome && screen.height - document.documentElement.clientHeight < 40,
                o.isTablet = o.isMobileSafari && p.indexOf("iPad") > -1 || o.isMobileChrome && p.indexOf("Mobile") < 0,
                o.isCompatible = o.isMobileSafari && o.OSVersion >= 6 || o.isMobileChrome;
                var m = {
                    lastDisplayTime: 0,
                    returningVisitor: !1,
                    displayCount: 0,
                    optedout: !1,
                    added: !1
                };
                o.removeSession = function(t) {
                    try {
                        localStorage.removeItem(t || o.defaults.appID)
                    } catch(e) {}
                },
                o.Class = function(t) {
                    if (this.options = s({},
                    o.defaults), s(this.options, t), this.options.mandatory = this.options.mandatory && ("standalone" in window.navigator || this.options.debug), this.options.modal = this.options.modal || this.options.mandatory, this.options.mandatory && (this.options.startDelay = -.5), this.options.detectHomescreen = this.options.detectHomescreen === !0 ? "hash": this.options.detectHomescreen, this.options.debug && (o.isCompatible = !0, o.OS = "string" == typeof this.options.debug ? this.options.debug: "unsupported" == o.OS ? "android": o.OS, o.OSVersion = "ios" == o.OS ? "8": "4"), this.container = document.documentElement, this.session = localStorage.getItem(this.options.appID), this.session = this.session ? JSON.parse(this.session) : void 0, !o.hasToken || o.isCompatible && this.session || (o.hasToken = !1, a()), o.isCompatible) {
                        this.session = this.session || m;
                        try {
                            localStorage.setItem(this.options.appID, JSON.stringify(this.session)),
                            o.hasLocalStorage = !0
                        } catch(e) {
                            o.hasLocalStorage = !1,
                            this.options.onPrivate && this.options.onPrivate.call(this)
                        }
                        for (var i = !this.options.validLocation.length,
                        n = this.options.validLocation.length; n--;) if (this.options.validLocation[n].test(document.location.href)) {
                            i = !0;
                            break
                        }
                        if (localStorage.getItem("addToHome") && this.optOut(), !this.session.optedout && !this.session.added && i) {
                            if (o.isStandalone) return void(this.session.added || (this.session.added = !0, this.updateSession(), this.options.onAdd && o.hasLocalStorage && this.options.onAdd.call(this)));
                            if (this.options.detectHomescreen) {
                                if (o.hasToken) return a(),
                                void(this.session.added || (this.session.added = !0, this.updateSession(), this.options.onAdd && o.hasLocalStorage && this.options.onAdd.call(this)));
                                "hash" == this.options.detectHomescreen ? history.replaceState("", window.document.title, document.location.href + "#ath") : "smartURL" == this.options.detectHomescreen ? history.replaceState("", window.document.title, document.location.href.replace(/(\/)?$/, "/ath$1")) : history.replaceState("", window.document.title, document.location.href + (document.location.search ? "&": "?") + "ath=")
                            } (this.session.returningVisitor || (this.session.returningVisitor = !0, this.updateSession(), !this.options.skipFirstVisit)) && o.hasLocalStorage && (this.ready = !0, this.options.onInit && this.options.onInit.call(this), this.options.autostart && this.show())
                        }
                    }
                },
                o.Class.prototype = {
                    events: {
                        load: "_delayedShow",
                        error: "_delayedShow",
                        orientationchange: "resize",
                        resize: "resize",
                        scroll: "resize",
                        click: "remove",
                        touchmove: "_preventDefault",
                        transitionend: "_removeElements",
                        webkitTransitionEnd: "_removeElements",
                        MSTransitionEnd: "_removeElements"
                    },
                    handleEvent: function(t) {
                        var e = this.events[t.type];
                        e && this[e](t)
                    },
                    show: function(t) {
                        if (this.options.autostart && !l) return void setTimeout(this.show.bind(this), 50);
                        if (!this.shown) {
                            var e = Date.now(),
                            i = this.session.lastDisplayTime;
                            if (t !== !0) {
                                if (!this.ready) return;
                                if (e - i < 6e4 * this.options.displayPace) return;
                                if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount) return
                            }
                            this.shown = !0,
                            this.session.lastDisplayTime = e,
                            this.session.displayCount++,
                            this.updateSession(),
                            this.applicationIcon || (this.applicationIcon = document.querySelector("ios" == o.OS ? 'head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]': 'head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]'));
                            var n = "";
                            n = this.options.message in o.intl ? o.intl[this.options.message].message.replace("%action", o.intl[this.options.message].action[o.OS]) : "" !== this.options.message ? this.options.message: o.intl[o.language].message.replace("%action", o.intl[o.language].action[o.OS]),
                            n = "<p>" + n.replace("%icon", '<span class="ath-action-icon">icon</span>') + "</p>",
                            this.viewport = document.createElement("div"),
                            this.viewport.className = "ath-viewport",
                            this.options.modal && (this.viewport.className += " ath-modal"),
                            this.options.mandatory && (this.viewport.className += " ath-mandatory"),
                            this.viewport.style.position = "absolute",
                            this.element = document.createElement("div"),
                            this.element.className = "ath-container ath-" + o.OS + " ath-" + o.OS + (o.OSVersion + "").substr(0, 1) + " ath-" + (o.isTablet ? "tablet": "phone"),
                            this.element.style.cssText = "-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);transition-property:transform,opacity;transition-duration:0;transform:translate3d(0,0,0);-webkit-transition-timing-function:ease-out",
                            this.element.style.webkitTransform = "translate3d(0,-" + window.innerHeight + "px,0)",
                            this.element.style.webkitTransitionDuration = "0s",
                            this.options.icon && this.applicationIcon && (this.element.className += " ath-icon", this.img = document.createElement("img"), this.img.className = "ath-application-icon", this.img.addEventListener("load", this, !1), this.img.addEventListener("error", this, !1), this.img.src = this.applicationIcon.href, this.element.appendChild(this.img)),
                            this.element.innerHTML += n,
                            this.viewport.style.left = "-99999em",
                            this.viewport.appendChild(this.element),
                            this.container.appendChild(this.viewport),
                            this.img || this._delayedShow()
                        }
                    },
                    _delayedShow: function(t) {
                        setTimeout(this._show.bind(this), 1e3 * this.options.startDelay + 500)
                    },
                    _show: function() {
                        var t = this;
                        this.updateViewport(),
                        window.addEventListener("resize", this, !1),
                        window.addEventListener("scroll", this, !1),
                        window.addEventListener("orientationchange", this, !1),
                        this.options.modal && document.addEventListener("touchmove", this, !0),
                        this.options.mandatory || setTimeout(function() {
                            t.element.addEventListener("click", t, !0)
                        },
                        1e3),
                        setTimeout(function() {
                            t.element.style.webkitTransform = "translate3d(0,0,0)",
                            t.element.style.webkitTransitionDuration = "1.2s"
                        },
                        0),
                        this.options.lifespan && (this.removeTimer = setTimeout(this.remove.bind(this), 1e3 * this.options.lifespan)),
                        this.options.onShow && this.options.onShow.call(this)
                    },
                    remove: function() {
                        clearTimeout(this.removeTimer),
                        this.img && (this.img.removeEventListener("load", this, !1), this.img.removeEventListener("error", this, !1)),
                        window.removeEventListener("resize", this, !1),
                        window.removeEventListener("scroll", this, !1),
                        window.removeEventListener("orientationchange", this, !1),
                        document.removeEventListener("touchmove", this, !0),
                        this.element.removeEventListener("click", this, !0),
                        this.element.addEventListener("transitionend", this, !1),
                        this.element.addEventListener("webkitTransitionEnd", this, !1),
                        this.element.addEventListener("MSTransitionEnd", this, !1),
                        this.element.style.webkitTransitionDuration = "0.3s",
                        this.element.style.opacity = "0"
                    },
                    _removeElements: function() {
                        this.element.removeEventListener("transitionend", this, !1),
                        this.element.removeEventListener("webkitTransitionEnd", this, !1),
                        this.element.removeEventListener("MSTransitionEnd", this, !1),
                        this.container.removeChild(this.viewport),
                        this.shown = !1,
                        this.options.onRemove && this.options.onRemove.call(this)
                    },
                    updateViewport: function() {
                        if (this.shown) {
                            this.viewport.style.width = window.innerWidth + "px",
                            this.viewport.style.height = window.innerHeight + "px",
                            this.viewport.style.left = window.scrollX + "px",
                            this.viewport.style.top = window.scrollY + "px";
                            var t = document.documentElement.clientWidth;
                            this.orientation = t > document.documentElement.clientHeight ? "landscape": "portrait";
                            var e = "ios" == o.OS ? "portrait" == this.orientation ? screen.width: screen.height: screen.width;
                            this.scale = screen.width > t ? 1 : e / window.innerWidth,
                            this.element.style.fontSize = this.options.fontSize / this.scale + "px"
                        }
                    },
                    resize: function() {
                        clearTimeout(this.resizeTimer),
                        this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100)
                    },
                    updateSession: function() {
                        o.hasLocalStorage !== !1 && localStorage.setItem(this.options.appID, JSON.stringify(this.session))
                    },
                    clearSession: function() {
                        this.session = m,
                        this.updateSession()
                    },
                    optOut: function() {
                        this.session.optedout = !0,
                        this.updateSession()
                    },
                    optIn: function() {
                        this.session.optedout = !1,
                        this.updateSession()
                    },
                    clearDisplayCount: function() {
                        this.session.displayCount = 0,
                        this.updateSession()
                    },
                    _preventDefault: function(t) {
                        t.preventDefault(),
                        t.stopPropagation()
                    }
                },
                r.AMUI.addToHomescreen = o,
                e.exports = o
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        4 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = t(2),
                s = function(t, e) {
                    var i = this;
                    this.options = n.extend({},
                    s.DEFAULTS, e),
                    this.$element = n(t),
                    this.$element.addClass("am-fade am-in").on("click.alert.amui", ".am-close",
                    function() {
                        i.close.call(this)
                    })
                };
                s.DEFAULTS = {
                    removeElement: !0
                },
                s.prototype.close = function() {
                    function t() {
                        i.trigger("closed.alert.amui").remove()
                    }
                    var e = n(this),
                    i = e.hasClass("am-alert") ? e: e.parent(".am-alert");
                    i.trigger("close.alert.amui"),
                    i.removeClass("am-in"),
                    o.support.transition && i.hasClass("am-fade") ? i.one(o.support.transition.end, t).emulateTransitionEnd(200) : t()
                },
                n.fn.alert = function(t) {
                    return this.each(function() {
                        var e = n(this),
                        i = e.data("amui.alert"),
                        o = "object" == typeof t && t;
                        i || e.data("amui.alert", i = new s(this, o || {})),
                        "string" == typeof t && i[t].call(e)
                    })
                },
                n(document).on("click.alert.amui.data-api", "[data-am-alert]",
                function(t) {
                    var e = n(t.target);
                    n(this).addClass("am-fade am-in"),
                    e.is(".am-close") && n(this).alert("close")
                }),
                n.AMUI.alert = s,
                e.exports = s
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        5 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.button"),
                        n = "object" == typeof t && t || {};
                        i || e.data("amui.button", i = new a(this, n)),
                        "toggle" == t ? i.toggle() : "string" == typeof t && i.setState(t)
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = function(t, e) {
                    this.$element = o(t),
                    this.options = o.extend({},
                    a.DEFAULTS, e),
                    this.isLoading = !1,
                    this.hasSpinner = !1
                };
                a.DEFAULTS = {
                    loadingText: "loading...",
                    className: {
                        loading: "am-btn-loading",
                        disabled: "am-disabled"
                    },
                    spinner: void 0
                },
                a.prototype.setState = function(t) {
                    var e = "disabled",
                    i = this.$element,
                    n = this.options,
                    a = i.is("input") ? "val": "html",
                    r = n.className.disabled + " " + n.className.loading;
                    t += "Text",
                    n.resetText || (n.resetText = i[a]()),
                    s.support.animation && n.spinner && "html" === a && !this.hasSpinner && (n.loadingText = '<span class="am-icon-' + n.spinner + ' am-icon-spin"></span>' + n.loadingText, this.hasSpinner = !0),
                    i[a](n[t]),
                    setTimeout(o.proxy(function() {
                        "loadingText" == t ? (i.addClass(r).attr(e, e), this.isLoading = !0) : this.isLoading && (i.removeClass(r).removeAttr(e), this.isLoading = !1)
                    },
                    this), 0)
                },
                a.prototype.toggle = function() {
                    var t = !0,
                    e = this.$element,
                    i = this.$element.parent(".am-btn-group");
                    if (i.length) {
                        var n = this.$element.find("input");
                        "radio" == n.prop("type") && (n.prop("checked") && e.hasClass("am-active") ? t = !1 : i.find(".am-active").removeClass("am-active")),
                        t && n.prop("checked", !e.hasClass("am-active")).trigger("change")
                    }
                    t && (e.toggleClass("am-active"), e.hasClass("am-active") || e.blur())
                },
                o.fn.button = n,
                o(document).on("click.button.amui.data-api", "[data-am-button]",
                function(t) {
                    var e = o(t.target);
                    e.hasClass("am-btn") || (e = e.closest(".am-btn")),
                    n.call(e, "toggle"),
                    t.preventDefault()
                }),
                s.ready(function(t) {
                    o("[data-am-loading]", t).each(function() {
                        o(this).button(s.utils.parseOptions(o(this).data("amLoading")))
                    })
                }),
                o.AMUI.button = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        6 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.collapse"),
                        n = o.extend({},
                        a.DEFAULTS, s.utils.options(e.attr("data-am-collapse")), "object" == typeof t && t); ! i && n.toggle && "open" == t && (t = !t),
                        i || e.data("amui.collapse", i = new a(this, n)),
                        "string" == typeof t && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = function(t, e) {
                    this.$element = o(t),
                    this.options = o.extend({},
                    a.DEFAULTS, e),
                    this.transitioning = null,
                    this.options.parent && (this.$parent = o(this.options.parent)),
                    this.options.toggle && this.toggle()
                };
                a.DEFAULTS = {
                    toggle: !0
                },
                a.prototype.open = function() {
                    if (!this.transitioning && !this.$element.hasClass("am-in")) {
                        var t = o.Event("open.collapse.amui");
                        if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                            var e = this.$parent && this.$parent.find("> .am-panel > .am-in");
                            if (e && e.length) {
                                var i = e.data("amui.collapse");
                                if (i && i.transitioning) return;
                                n.call(e, "close"),
                                i || e.data("amui.collapse", null)
                            }
                            this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0),
                            this.transitioning = 1;
                            var a = function() {
                                this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height(""),
                                this.transitioning = 0,
                                this.$element.trigger("opened.collapse.amui")
                            };
                            if (!s.support.transition) return a.call(this);
                            var r = this.$element[0].scrollHeight;
                            this.$element.one(s.support.transition.end, o.proxy(a, this)).emulateTransitionEnd(300).css({
                                height: r
                            })
                        }
                    }
                },
                a.prototype.close = function() {
                    if (!this.transitioning && this.$element.hasClass("am-in")) {
                        var t = o.Event("close.collapse.amui");
                        if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                            this.$element.height(this.$element.height()).redraw(),
                            this.$element.addClass("am-collapsing").removeClass("am-collapse am-in"),
                            this.transitioning = 1;
                            var e = function() {
                                this.transitioning = 0,
                                this.$element.trigger("closed.collapse.amui").removeClass("am-collapsing").addClass("am-collapse")
                            };
                            return s.support.transition ? void this.$element.height(0).one(s.support.transition.end, o.proxy(e, this)).emulateTransitionEnd(300) : e.call(this)
                        }
                    }
                },
                a.prototype.toggle = function() {
                    this[this.$element.hasClass("am-in") ? "close": "open"]()
                },
                o.fn.collapse = n,
                o(document).on("click.collapse.amui.data-api", "[data-am-collapse]",
                function(t) {
                    var e, i = o(this),
                    a = s.utils.options(i.attr("data-am-collapse")),
                    r = a.target || t.preventDefault() || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
                    l = o(r),
                    d = l.data("amui.collapse"),
                    u = d ? "toggle": a,
                    c = a.parent,
                    h = c && o(c);
                    d && d.transitioning || (h && h.find("[data-am-collapse]").not(i).addClass("am-collapsed"), i[l.hasClass("am-in") ? "addClass": "removeClass"]("am-collapsed")),
                    n.call(l, u)
                }),
                o.AMUI.collapse = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        7 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = t(2),
                s = n(document),
                a = function(t, e) {
                    if (this.$element = n(t), this.options = n.extend({},
                    a.DEFAULTS, e), this.format = r.parseFormat(this.options.format), this.$element.data("date", this.options.date), this.language = this.getLocale(this.options.locale), this.theme = this.options.theme, this.$picker = n(r.template).appendTo("body").on({
                        click: n.proxy(this.click, this)
                    }), this.isInput = this.$element.is("input"), this.component = this.$element.is(".am-datepicker-date") ? this.$element.find(".am-datepicker-add-on") : !1, this.isInput ? this.$element.on({
                        "click.datepicker.amui": n.proxy(this.open, this),
                        "keyup.datepicker.amui": n.proxy(this.update, this)
                    }) : this.component ? this.component.on("click.datepicker.amui", n.proxy(this.open, this)) : this.$element.on("click.datepicker.amui", n.proxy(this.open, this)), this.minViewMode = this.options.minViewMode, "string" == typeof this.minViewMode) switch (this.minViewMode) {
                    case "months":
                        this.minViewMode = 1;
                        break;
                    case "years":
                        this.minViewMode = 2;
                        break;
                    default:
                        this.minViewMode = 0
                    }
                    if (this.viewMode = this.options.viewMode, "string" == typeof this.viewMode) switch (this.viewMode) {
                    case "months":
                        this.viewMode = 1;
                        break;
                    case "years":
                        this.viewMode = 2;
                        break;
                    default:
                        this.viewMode = 0
                    }
                    this.startViewMode = this.viewMode,
                    this.weekStart = (this.options.weekStart || a.locales[this.language].weekStart || 0) % 7,
                    this.weekEnd = (this.weekStart + 6) % 7,
                    this.onRender = this.options.onRender,
                    this.setTheme(),
                    this.fillDow(),
                    this.fillMonths(),
                    this.update(),
                    this.showMode()
                };
                a.DEFAULTS = {
                    locale: "zh_CN",
                    format: "yyyy-mm-dd",
                    weekStart: void 0,
                    viewMode: 0,
                    minViewMode: 0,
                    date: "",
                    theme: "",
                    autoClose: 1,
                    onRender: function(t) {
                        return ""
                    }
                },
                a.prototype.open = function(t) {
                    this.$picker.show(),
                    this.height = this.component ? this.component.outerHeight() : this.$element.outerHeight(),
                    this.place(),
                    n(window).on("resize.datepicker.amui", n.proxy(this.place, this)),
                    t && (t.stopPropagation(), t.preventDefault());
                    var e = this;
                    s.on("mousedown.datapicker.amui touchstart.datepicker.amui",
                    function(t) {
                        0 === n(t.target).closest(".am-datepicker").length && e.close()
                    }),
                    this.$element.trigger({
                        type: "open.datepicker.amui",
                        date: this.date
                    })
                },
                a.prototype.close = function() {
                    this.$picker.hide(),
                    n(window).off("resize.datepicker.amui", this.place),
                    this.viewMode = this.startViewMode,
                    this.showMode(),
                    this.isInput || n(document).off("mousedown.datapicker.amui touchstart.datepicker.amui", this.close),
                    this.$element.trigger({
                        type: "close.datepicker.amui",
                        date: this.date
                    })
                },
                a.prototype.set = function() {
                    var t = r.formatDate(this.date, this.format);
                    this.isInput ? this.$element.prop("value", t) : (this.component && this.$element.find("input").prop("value", t), this.$element.data("date", t))
                },
                a.prototype.setValue = function(t) {
                    this.date = "string" == typeof t ? r.parseDate(t, this.format) : new Date(t),
                    this.set(),
                    this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0),
                    this.fill()
                },
                a.prototype.place = function() {
                    var t = this.component ? this.component.offset() : this.$element.offset(),
                    e = this.component ? this.component.width() : this.$element.width(),
                    i = t.top + this.height,
                    n = t.left,
                    o = s.width() - t.left - e,
                    a = this.isOutView();
                    if (this.$picker.removeClass("am-datepicker-right"), this.$picker.removeClass("am-datepicker-up"), s.width() > 640) {
                        if (a.outRight) return this.$picker.addClass("am-datepicker-right"),
                        void this.$picker.css({
                            top: i,
                            left: "auto",
                            right: o
                        });
                        a.outBottom && (this.$picker.addClass("am-datepicker-up"), i = t.top - this.$picker.outerHeight(!0))
                    } else n = 0;
                    this.$picker.css({
                        top: i,
                        left: n
                    })
                },
                a.prototype.update = function(t) {
                    this.date = r.parseDate("string" == typeof t ? t: this.isInput ? this.$element.prop("value") : this.$element.data("date"), this.format),
                    this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0),
                    this.fill()
                },
                a.prototype.fillDow = function() {
                    for (var t = this.weekStart,
                    e = "<tr>"; t < this.weekStart + 7;) e += '<th class="am-datepicker-dow">' + a.locales[this.language].daysMin[t++%7] + "</th>";
                    e += "</tr>",
                    this.$picker.find(".am-datepicker-days thead").append(e)
                },
                a.prototype.fillMonths = function() {
                    for (var t = "",
                    e = 0; 12 > e;) t += '<span class="am-datepicker-month">' + a.locales[this.language].monthsShort[e++] + "</span>";
                    this.$picker.find(".am-datepicker-months td").append(t)
                },
                a.prototype.fill = function() {
                    var t = new Date(this.viewDate),
                    e = t.getFullYear(),
                    i = t.getMonth(),
                    n = this.date.valueOf(),
                    o = new Date(e, i - 1, 28, 0, 0, 0, 0),
                    s = r.getDaysInMonth(o.getFullYear(), o.getMonth()),
                    l = this.$picker.find(".am-datepicker-days .am-datepicker-select");
                    l.text("zh_CN" === this.language ? e + a.locales[this.language].year[0] + " " + a.locales[this.language].months[i] : a.locales[this.language].months[i] + " " + e),
                    o.setDate(s),
                    o.setDate(s - (o.getDay() - this.weekStart + 7) % 7);
                    var d = new Date(o);
                    d.setDate(d.getDate() + 42),
                    d = d.valueOf();
                    for (var u, c, h, p = []; o.valueOf() < d;) o.getDay() === this.weekStart && p.push("<tr>"),
                    u = this.onRender(o),
                    c = o.getFullYear(),
                    h = o.getMonth(),
                    i > h && c === e || e > c ? u += " am-datepicker-old": (h > i && c === e || c > e) && (u += " am-datepicker-new"),
                    o.valueOf() === n && (u += " am-active"),
                    p.push('<td class="am-datepicker-day ' + u + '">' + o.getDate() + "</td>"),
                    o.getDay() === this.weekEnd && p.push("</tr>"),
                    o.setDate(o.getDate() + 1);
                    this.$picker.find(".am-datepicker-days tbody").empty().append(p.join(""));
                    var f = this.date.getFullYear(),
                    m = this.$picker.find(".am-datepicker-months").find(".am-datepicker-select").text(e);
                    m = m.end().find("span").removeClass("am-active").removeClass("am-disabled");
                    for (var v = 0; 12 > v;) this.onRender(t.setFullYear(e, v)) && m.eq(v).addClass("am-disabled"),
                    v++;
                    f === e && m.eq(this.date.getMonth()).removeClass("am-disabled").addClass("am-active"),
                    p = "",
                    e = 10 * parseInt(e / 10, 10);
                    var g, w = this.$picker.find(".am-datepicker-years").find(".am-datepicker-select").text(e + "-" + (e + 9)).end().find("td");
                    e -= 1;
                    for (var y = -1; 11 > y; y++) g = this.onRender(t.setFullYear(e)),
                    p += '<span class="' + g + ( - 1 === y || 10 === y ? " am-datepicker-old": "") + (f === e ? " am-active": "") + '">' + e + "</span>",
                    e += 1;
                    w.html(p)
                },
                a.prototype.click = function(t) {
                    t.stopPropagation(),
                    t.preventDefault();
                    var e, i, o = this.$picker.find(".am-datepicker-days").find(".am-active"),
                    s = this.$picker.find(".am-datepicker-months"),
                    a = s.find(".am-active").index(),
                    l = n(t.target).closest("span, td, th");
                    if (1 === l.length) switch (l[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (l[0].className) {
                        case "am-datepicker-switch":
                            this.showMode(1);

                            break;
                        case "am-datepicker-prev":
                        case "am-datepicker-next":
                            this.viewDate["set" + r.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + r.modes[this.viewMode].navFnc].call(this.viewDate) + r.modes[this.viewMode].navStep * ("am-datepicker-prev" === l[0].className ? -1 : 1)),
                            this.fill(),
                            this.set()
                        }
                        break;
                    case "span":
                        if (l.is(".am-disabled")) return;
                        l.is(".am-datepicker-month") ? (e = l.parent().find("span").index(l), l.is(".am-active") ? this.viewDate.setMonth(e, o.text()) : this.viewDate.setMonth(e)) : (i = parseInt(l.text(), 10) || 0, l.is(".am-active") ? this.viewDate.setFullYear(i, a, o.text()) : this.viewDate.setFullYear(i)),
                        0 !== this.viewMode && (this.date = new Date(this.viewDate), this.$element.trigger({
                            type: "changeDate.datepicker.amui",
                            date: this.date,
                            viewMode: r.modes[this.viewMode].clsName
                        })),
                        this.showMode( - 1),
                        this.fill(),
                        this.set();
                        break;
                    case "td":
                        if (l.is(".am-datepicker-day") && !l.is(".am-disabled")) {
                            var d = parseInt(l.text(), 10) || 1;
                            e = this.viewDate.getMonth(),
                            l.is(".am-datepicker-old") ? e -= 1 : l.is(".am-datepicker-new") && (e += 1),
                            i = this.viewDate.getFullYear(),
                            this.date = new Date(i, e, d, 0, 0, 0, 0),
                            this.viewDate = new Date(i, e, Math.min(28, d), 0, 0, 0, 0),
                            this.fill(),
                            this.set(),
                            this.$element.trigger({
                                type: "changeDate.datepicker.amui",
                                date: this.date,
                                viewMode: r.modes[this.viewMode].clsName
                            }),
                            this.options.autoClose && this.close()
                        }
                    }
                },
                a.prototype.mousedown = function(t) {
                    t.stopPropagation(),
                    t.preventDefault()
                },
                a.prototype.showMode = function(t) {
                    t && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + t))),
                    this.$picker.find(">div").hide().filter(".am-datepicker-" + r.modes[this.viewMode].clsName).show()
                },
                a.prototype.isOutView = function() {
                    var t = this.component ? this.component.offset() : this.$element.offset(),
                    e = {
                        outRight: !1,
                        outBottom: !1
                    },
                    i = this.$picker,
                    n = t.left + i.outerWidth(!0),
                    o = t.top + i.outerHeight(!0) + this.$element.innerHeight();
                    return n > s.width() && (e.outRight = !0),
                    o > s.height() && (e.outBottom = !0),
                    e
                },
                a.prototype.getLocale = function(t) {
                    return t || (t = navigator.language && navigator.language.split("-"), t[1] = t[1].toUpperCase(), t = t.join("_")),
                    a.locales[t] || (t = "en_US"),
                    t
                },
                a.prototype.setTheme = function() {
                    this.theme && this.$picker.addClass("am-datepicker-" + this.theme)
                },
                a.locales = {
                    en_US: {
                        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        weekStart: 0
                    },
                    zh_CN: {
                        days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
                        daysShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],
                        daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
                        months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                        monthsShort: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                        weekStart: 1,
                        year: ["\u5e74"]
                    }
                };
                var r = {
                    modes: [{
                        clsName: "days",
                        navFnc: "Month",
                        navStep: 1
                    },
                    {
                        clsName: "months",
                        navFnc: "FullYear",
                        navStep: 1
                    },
                    {
                        clsName: "years",
                        navFnc: "FullYear",
                        navStep: 10
                    }],
                    isLeapYear: function(t) {
                        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                    },
                    getDaysInMonth: function(t, e) {
                        return [31, r.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
                    },
                    parseFormat: function(t) {
                        var e = t.match(/[.\/\-\s].*?/),
                        i = t.split(/\W+/);
                        if (!e || !i || 0 === i.length) throw new Error("Invalid date format.");
                        return {
                            separator: e,
                            parts: i
                        }
                    },
                    parseDate: function(t, e) {
                        var i, n = t.split(e.separator);
                        if (t = new Date, t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), n.length === e.parts.length) {
                            for (var o = t.getFullYear(), s = t.getDate(), a = t.getMonth(), r = 0, l = e.parts.length; l > r; r++) switch (i = parseInt(n[r], 10) || 1, e.parts[r]) {
                            case "dd":
                            case "d":
                                s = i,
                                t.setDate(i);
                                break;
                            case "mm":
                            case "m":
                                a = i - 1,
                                t.setMonth(i - 1);
                                break;
                            case "yy":
                                o = 2e3 + i,
                                t.setFullYear(2e3 + i);
                                break;
                            case "yyyy":
                                o = i,
                                t.setFullYear(i)
                            }
                            t = new Date(o, a, s, 0, 0, 0)
                        }
                        return t
                    },
                    formatDate: function(t, e) {
                        var i = {
                            d: t.getDate(),
                            m: t.getMonth() + 1,
                            yy: t.getFullYear().toString().substring(2),
                            yyyy: t.getFullYear()
                        },
                        n = [];
                        i.dd = (i.d < 10 ? "0": "") + i.d,
                        i.mm = (i.m < 10 ? "0": "") + i.m;
                        for (var o = 0,
                        s = e.parts.length; s > o; o++) n.push(i[e.parts[o]]);
                        return n.join(e.separator)
                    },
                    headTemplate: '<thead><tr class="am-datepicker-header"><th class="am-datepicker-prev"><i class="am-datepicker-prev-icon"></i></th><th colspan="5" class="am-datepicker-switch"><div class="am-datepicker-select"></div></th><th class="am-datepicker-next"><i class="am-datepicker-next-icon"></i></th></tr></thead>',
                    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
                };
                r.template = '<div class="am-datepicker am-datepicker-dropdown"><div class="am-datepicker-caret"></div><div class="am-datepicker-days"><table class="am-datepicker-table">' + r.headTemplate + '<tbody></tbody></table></div><div class="am-datepicker-months"><table class="am-datepicker-table">' + r.headTemplate + r.contTemplate + '</table></div><div class="am-datepicker-years"><table class="am-datepicker-table">' + r.headTemplate + r.contTemplate + "</table></div></div>",
                n.fn.datepicker = function(t, e) {
                    return this.each(function() {
                        var i = n(this),
                        s = i.data("amui.datepicker"),
                        r = n.extend({},
                        o.utils.options(i.data("amDatepicker")), "object" == typeof t && t);
                        s || i.data("amui.datepicker", s = new a(this, r)),
                        "string" == typeof t && s[t] && s[t](e)
                    })
                },
                n.fn.datepicker.Constructor = a,
                o.ready(function(t) {
                    n("[data-am-datepicker]").datepicker()
                }),
                n.AMUI.datepicker = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        8 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = t(2),
                s = n(document),
                a = o.support.transition,
                r = function() {
                    this.id = o.utils.generateGUID("am-dimmer"),
                    this.$element = n(r.DEFAULTS.tpl, {
                        id: this.id
                    }),
                    this.inited = !1,
                    this.scrollbarWidth = 0,
                    this.$used = n([])
                };
                r.DEFAULTS = {
                    tpl: '<div class="am-dimmer" data-am-dimmer></div>'
                },
                r.prototype.init = function() {
                    return this.inited || (n(document.body).append(this.$element), this.inited = !0, s.trigger("init.dimmer.amui")),
                    this
                },
                r.prototype.open = function(t) {
                    this.inited || this.init();
                    var e = this.$element;
                    return t && (this.$used = this.$used.add(n(t))),
                    this.checkScrollbar().setScrollbar(),
                    e.off(a.end).show().trigger("open.dimmer.amui"),
                    setTimeout(function() {
                        e.addClass("am-active")
                    },
                    0),
                    this
                },
                r.prototype.close = function(t, e) {
                    function i() {
                        o.hide(),
                        this.resetScrollbar()
                    }
                    if (this.$used = this.$used.not(n(t)), !e && this.$used.length) return this;
                    var o = this.$element;
                    return o.removeClass("am-active").trigger("close.dimmer.amui"),
                    i.call(this),
                    this
                },
                r.prototype.checkScrollbar = function() {
                    return this.scrollbarWidth = o.utils.measureScrollbar(),
                    this
                },
                r.prototype.setScrollbar = function() {
                    var t = n(document.body),
                    e = parseInt(t.css("padding-right") || 0, 10);
                    return this.scrollbarWidth && t.css("padding-right", e + this.scrollbarWidth),
                    t.addClass("am-dimmer-active"),
                    this
                },
                r.prototype.resetScrollbar = function() {
                    return n(document.body).css("padding-right", "").removeClass("am-dimmer-active"),
                    this
                };
                var l = new r;
                n.AMUI.dimmer = l,
                e.exports = l
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        9 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.dropdown"),
                        n = o.extend({},
                        s.utils.parseOptions(e.attr("data-am-dropdown")), "object" == typeof t && t);
                        i || e.data("amui.dropdown", i = new r(this, n)),
                        "string" == typeof t && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = s.support.animation,
                r = function(t, e) {
                    this.options = o.extend({},
                    r.DEFAULTS, e),
                    e = this.options,
                    this.$element = o(t),
                    this.$toggle = this.$element.find(e.selector.toggle),
                    this.$dropdown = this.$element.find(e.selector.dropdown),
                    this.$boundary = e.boundary === window ? o(window) : this.$element.closest(e.boundary),
                    this.$justify = e.justify && o(e.justify).length && o(e.justify) || void 0,
                    !this.$boundary.length && (this.$boundary = o(window)),
                    this.active = this.$element.hasClass("am-active") ? !0 : !1,
                    this.animating = null,
                    this.events()
                };
                r.DEFAULTS = {
                    animation: "am-animation-slide-top-fixed",
                    boundary: window,
                    justify: void 0,
                    selector: {
                        dropdown: ".am-dropdown-content",
                        toggle: ".am-dropdown-toggle"
                    },
                    trigger: "click"
                },
                r.prototype.toggle = function() {
                    this.clear(),
                    this.animating || this[this.active ? "close": "open"]()
                },
                r.prototype.open = function(t) {
                    var e = this.$toggle,
                    i = this.$element,
                    n = this.$dropdown;
                    if (!e.is(".am-disabled, :disabled") && !this.active) {
                        i.trigger("open.dropdown.amui").addClass("am-active"),
                        e.trigger("focus"),
                        this.checkDimensions();
                        var s = o.proxy(function() {
                            i.trigger("opened.dropdown.amui"),
                            this.active = !0,
                            this.animating = 0
                        },
                        this);
                        a ? (this.animating = 1, n.addClass(this.options.animation).on(a.end + ".open.dropdown.amui", o.proxy(function() {
                            s(),
                            n.removeClass(this.options.animation)
                        },
                        this))) : s()
                    }
                },
                r.prototype.close = function() {
                    if (this.active) {
                        var t = "am-dropdown-animation",
                        e = this.$element,
                        i = this.$dropdown;
                        e.trigger("close.dropdown.amui");
                        var n = o.proxy(function() {
                            e.removeClass("am-active").trigger("closed.dropdown.amui"),
                            this.active = !1,
                            this.animating = 0,
                            this.$toggle.blur()
                        },
                        this);
                        a ? (i.removeClass(this.options.animation), i.addClass(t), this.animating = 1, i.one(a.end + ".close.dropdown.amui",
                        function() {
                            i.removeClass(t),
                            n()
                        })) : n()
                    }
                },
                r.prototype.checkDimensions = function() {
                    if (this.$dropdown.length) {
                        var t = this.$dropdown,
                        e = t.offset(),
                        i = t.outerWidth(),
                        n = this.$boundary.width(),
                        s = o.isWindow(this.boundary) && this.$boundary.offset() ? this.$boundary.offset().left: 0;
                        this.$justify && t.css({
                            "min-width": this.$justify.css("width")
                        }),
                        i + (e.left - s) > n && this.$element.addClass("am-dropdown-flip")
                    }
                },
                r.prototype.clear = function() {
                    o("[data-am-dropdown]").not(this.$element).each(function() {
                        var t = o(this).data("amui.dropdown");
                        t && t.close()
                    })
                },
                r.prototype.events = function() {
                    var t = "dropdown.amui",
                    e = this.$toggle;
                    e.on("click." + t, o.proxy(function(t) {
                        t.preventDefault(),
                        this.toggle()
                    },
                    this)),
                    o(document).on("keydown.dropdown.amui", o.proxy(function(t) {
                        27 === t.keyCode && this.active && this.close()
                    },
                    this)).on("click.outer.dropdown.amui", o.proxy(function(t) { ! this.active || this.$element[0] !== t.target && this.$element.find(t.target).length || this.close()
                    },
                    this))
                },
                o.fn.dropdown = n,
                s.ready(function(t) {
                    o("[data-am-dropdown]", t).dropdown()
                }),
                o(document).on("click.dropdown.amui.data-api", ".am-dropdown form",
                function(t) {
                    t.stopPropagation()
                }),
                o.AMUI.dropdown = r,
                e.exports = r
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        10 : [function(t, e, i) { (function(i) {
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = t(2);
                n.flexslider = function(t, e) {
                    var i = n(t);
                    i.vars = n.extend({},
                    n.flexslider.defaults, e);
                    var o, s = i.vars.namespace,
                    a = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                    r = ("ontouchstart" in window || a || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
                    l = "click touchend MSPointerUp keyup",
                    d = "",
                    u = "vertical" === i.vars.direction,
                    c = i.vars.reverse,
                    h = i.vars.itemWidth > 0,
                    p = "fade" === i.vars.animation,
                    f = "" !== i.vars.asNavFor,
                    m = {},
                    v = !0;
                    n.data(t, "flexslider", i),
                    m = {
                        init: function() {
                            i.animating = !1,
                            i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt: 0, 10),
                            isNaN(i.currentSlide) && (i.currentSlide = 0),
                            i.animatingTo = i.currentSlide,
                            i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last,
                            i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")),
                            i.slides = n(i.vars.selector, i),
                            i.container = n(i.containerSelector, i),
                            i.count = i.slides.length,
                            i.syncExists = n(i.vars.sync).length > 0,
                            "slide" === i.vars.animation && (i.vars.animation = "swing"),
                            i.prop = u ? "top": "marginLeft",
                            i.args = {},
                            i.manualPause = !1,
                            i.stopped = !1,
                            i.started = !1,
                            i.startTimeout = null,
                            i.transitions = !i.vars.video && !p && i.vars.useCSS &&
                            function() {
                                var t = document.createElement("div"),
                                e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                for (var n in e) if (void 0 !== t.style[e[n]]) return i.pfx = e[n].replace("Perspective", "").toLowerCase(),
                                i.prop = "-" + i.pfx + "-transform",
                                !0;
                                return ! 1
                            } (),
                            i.ensureAnimationEnd = "",
                            "" !== i.vars.controlsContainer && (i.controlsContainer = n(i.vars.controlsContainer).length > 0 && n(i.vars.controlsContainer)),
                            "" !== i.vars.manualControls && (i.manualControls = n(i.vars.manualControls).length > 0 && n(i.vars.manualControls)),
                            i.vars.randomize && (i.slides.sort(function() {
                                return Math.round(Math.random()) - .5
                            }), i.container.empty().append(i.slides)),
                            i.doMath(),
                            i.setup("init"),
                            i.vars.controlNav && m.controlNav.setup(),
                            i.vars.directionNav && m.directionNav.setup(),
                            i.vars.keyboard && (1 === n(i.containerSelector).length || i.vars.multipleKeyboard) && n(document).bind("keyup",
                            function(t) {
                                var e = t.keyCode;
                                if (!i.animating && (39 === e || 37 === e)) {
                                    var n = 39 === e ? i.getTarget("next") : 37 === e ? i.getTarget("prev") : !1;
                                    i.flexAnimate(n, i.vars.pauseOnAction)
                                }
                            }),
                            i.vars.mousewheel && i.bind("mousewheel",
                            function(t, e, n, o) {
                                t.preventDefault();
                                var s = i.getTarget(0 > e ? "next": "prev");
                                i.flexAnimate(s, i.vars.pauseOnAction)
                            }),
                            i.vars.pausePlay && m.pausePlay.setup(),
                            i.vars.slideshow && i.vars.pauseInvisible && m.pauseInvisible.init(),
                            i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
                                i.manualPlay || i.manualPause || i.pause()
                            },
                            function() {
                                i.manualPause || i.manualPlay || i.stopped || i.play()
                            }), i.vars.pauseInvisible && m.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())),
                            f && m.asNav.setup(),
                            r && i.vars.touch && m.touch(),
                            (!p || p && i.vars.smoothHeight) && n(window).bind("resize orientationchange focus", m.resize),
                            i.find("img").attr("draggable", "false"),
                            setTimeout(function() {
                                i.vars.start(i)
                            },
                            200)
                        },
                        asNav: {
                            setup: function() {
                                i.asNav = !0,
                                i.animatingTo = Math.floor(i.currentSlide / i.move),
                                i.currentItem = i.currentSlide,
                                i.slides.removeClass(s + "active-slide").eq(i.currentItem).addClass(s + "active-slide"),
                                a ? (t._slider = i, i.slides.each(function() {
                                    var t = this;
                                    t._gesture = new MSGesture,
                                    t._gesture.target = t,
                                    t.addEventListener("MSPointerDown",
                                    function(t) {
                                        t.preventDefault(),
                                        t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                                    },
                                    !1),
                                    t.addEventListener("MSGestureTap",
                                    function(t) {
                                        t.preventDefault();
                                        var e = n(this),
                                        o = e.index();
                                        n(i.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (i.direction = i.currentItem < o ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                                    })
                                })) : i.slides.on(l,
                                function(t) {
                                    t.preventDefault();
                                    var e = n(this),
                                    o = e.index(),
                                    a = e.offset().left - n(i).scrollLeft();
                                    0 >= a && e.hasClass(s + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : n(i.vars.asNavFor).data("flexslider").animating || e.hasClass(s + "active-slide") || (i.direction = i.currentItem < o ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                                })
                            }
                        },
                        controlNav: {
                            setup: function() {
                                i.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                            },
                            setupPaging: function() {
                                var t, e, o = "thumbnails" === i.vars.controlNav ? "control-thumbs": "control-paging",
                                a = 1;
                                if (i.controlNavScaffold = n('<ol class="' + s + "control-nav " + s + o + '"></ol>'), i.pagingCount > 1) for (var r = 0; r < i.pagingCount; r++) {
                                    if (e = i.slides.eq(r), t = "thumbnails" === i.vars.controlNav ? '<img src="' + e.attr("data-thumb") + '"/>': "<a>" + a + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                                        var u = e.attr("data-thumbcaption");
                                        "" != u && void 0 != u && (t += '<span class="' + s + 'caption">' + u + "</span>")
                                    }
                                    i.controlNavScaffold.append("<li>" + t + "<i></i></li>"),
                                    a++
                                }
                                i.controlsContainer ? n(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold),
                                m.controlNav.set(),
                                m.controlNav.active(),
                                i.controlNavScaffold.delegate("a, img", l,
                                function(t) {
                                    if (t.preventDefault(), "" === d || d === t.type) {
                                        var e = n(this),
                                        o = i.controlNav.index(e);
                                        e.hasClass(s + "active") || (i.direction = o > i.currentSlide ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                                    }
                                    "" === d && (d = t.type),
                                    m.setToClearWatchedEvent()
                                })
                            },
                            setupManual: function() {
                                i.controlNav = i.manualControls,
                                m.controlNav.active(),
                                i.controlNav.bind(l,
                                function(t) {
                                    if (t.preventDefault(), "" === d || d === t.type) {
                                        var e = n(this),
                                        o = i.controlNav.index(e);
                                        e.hasClass(s + "active") || (i.direction = o > i.currentSlide ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                                    }
                                    "" === d && (d = t.type),
                                    m.setToClearWatchedEvent()
                                })
                            },
                            set: function() {
                                var t = "thumbnails" === i.vars.controlNav ? "img": "a";
                                i.controlNav = n("." + s + "control-nav li " + t, i.controlsContainer ? i.controlsContainer: i)
                            },
                            active: function() {
                                i.controlNav.removeClass(s + "active").eq(i.animatingTo).addClass(s + "active")
                            },
                            update: function(t, e) {
                                i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(n("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(e).closest("li").remove(),
                                m.controlNav.set(),
                                i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(e, t) : m.controlNav.active()
                            }
                        },
                        directionNav: {
                            setup: function() {
                                var t = n('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
                                i.controlsContainer ? (n(i.controlsContainer).append(t), i.directionNav = n("." + s + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = n("." + s + "direction-nav li a", i)),
                                m.directionNav.update(),
                                i.directionNav.bind(l,
                                function(t) {
                                    t.preventDefault();
                                    var e; ("" === d || d === t.type) && (e = i.getTarget(n(this).hasClass(s + "next") ? "next": "prev"), i.flexAnimate(e, i.vars.pauseOnAction)),
                                    "" === d && (d = t.type),
                                    m.setToClearWatchedEvent()
                                })
                            },
                            update: function() {
                                var t = s + "disabled";
                                1 === i.pagingCount ? i.directionNav.addClass(t).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(t).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(t).filter("." + s + "prev").addClass(t).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(t).filter("." + s + "next").addClass(t).attr("tabindex", "-1") : i.directionNav.removeClass(t).removeAttr("tabindex")
                            }
                        },
                        pausePlay: {
                            setup: function() {
                                var t = n('<div class="' + s + 'pauseplay"><a></a></div>');
                                i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = n("." + s + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = n("." + s + "pauseplay a", i)),
                                m.pausePlay.update(i.vars.slideshow ? s + "pause": s + "play"),
                                i.pausePlay.bind(l,
                                function(t) {
                                    t.preventDefault(),
                                    ("" === d || d === t.type) && (n(this).hasClass(s + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())),
                                    "" === d && (d = t.type),
                                    m.setToClearWatchedEvent()
                                })
                            },
                            update: function(t) {
                                "play" === t ? i.pausePlay.removeClass(s + "pause").addClass(s + "play").html(i.vars.playText) : i.pausePlay.removeClass(s + "play").addClass(s + "pause").html(i.vars.pauseText)
                            }
                        },
                        touch: function() {
                            function e(e) {
                                i.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (i.pause(), v = u ? i.h: i.w, w = Number(new Date), b = e.touches[0].pageX, T = e.touches[0].pageY, m = h && c && i.animatingTo === i.last ? 0 : h && c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo: h && i.currentSlide === i.last ? i.limit: h ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide: c ? (i.last - i.currentSlide + i.cloneOffset) * v: (i.currentSlide + i.cloneOffset) * v, d = u ? T: b, f = u ? b: T, t.addEventListener("touchmove", n, !1), t.addEventListener("touchend", o, !1))
                            }
                            function n(t) {
                                b = t.touches[0].pageX,
                                T = t.touches[0].pageY,
                                g = u ? d - T: d - b,
                                y = u ? Math.abs(g) < Math.abs(b - f) : Math.abs(g) < Math.abs(T - f);
                                var e = 500; (!y || Number(new Date) - w > e) && (t.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (g /= 0 === i.currentSlide && 0 > g || i.currentSlide === i.last && g > 0 ? Math.abs(g) / v + 2 : 1), i.setProps(m + g, "setTouch")))
                            }
                            function o(e) {
                                if (t.removeEventListener("touchmove", n, !1), i.animatingTo === i.currentSlide && !y && null !== g) {
                                    var s = c ? -g: g,
                                    a = i.getTarget(s > 0 ? "next": "prev");
                                    i.canAdvance(a) && (Number(new Date) - w < 550 && Math.abs(s) > 50 || Math.abs(s) > v / 2) ? i.flexAnimate(a, i.vars.pauseOnAction) : p || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                                }
                                t.removeEventListener("touchend", o, !1),
                                d = null,
                                f = null,
                                g = null,
                                m = null
                            }
                            function s(e) {
                                e.stopPropagation(),
                                i.animating ? e.preventDefault() : (i.pause(), t._gesture.addPointer(e.pointerId), x = 0, v = u ? i.h: i.w, w = Number(new Date), m = h && c && i.animatingTo === i.last ? 0 : h && c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo: h && i.currentSlide === i.last ? i.limit: h ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide: c ? (i.last - i.currentSlide + i.cloneOffset) * v: (i.currentSlide + i.cloneOffset) * v)
                            }
                            function r(e) {
                                e.stopPropagation();
                                var i = e.target._slider;
                                if (i) {
                                    var n = -e.translationX,
                                    o = -e.translationY;
                                    return x += u ? o: n,
                                    g = x,
                                    y = u ? Math.abs(x) < Math.abs( - n) : Math.abs(x) < Math.abs( - o),
                                    e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                        t._gesture.stop()
                                    }) : void((!y || Number(new Date) - w > 500) && (e.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (g = x / (0 === i.currentSlide && 0 > x || i.currentSlide === i.last && x > 0 ? Math.abs(x) / v + 2 : 1)), i.setProps(m + g, "setTouch"))))
                                }
                            }
                            function l(t) {
                                t.stopPropagation();
                                var e = t.target._slider;
                                if (e) {
                                    if (e.animatingTo === e.currentSlide && !y && null !== g) {
                                        var i = c ? -g: g,
                                        n = e.getTarget(i > 0 ? "next": "prev");
                                        e.canAdvance(n) && (Number(new Date) - w < 550 && Math.abs(i) > 50 || Math.abs(i) > v / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : p || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                                    }
                                    d = null,
                                    f = null,
                                    g = null,
                                    m = null,
                                    x = 0
                                }
                            }
                            var d, f, m, v, g, w, y = !1,
                            b = 0,
                            T = 0,
                            x = 0;
                            a ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", s, !1), t._slider = i, t.addEventListener("MSGestureChange", r, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
                        },
                        resize: function() { ! i.animating && i.is(":visible") && (h || i.doMath(), p ? m.smoothHeight() : h ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : u ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && m.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
                        },
                        smoothHeight: function(t) {
                            if (!u || p) {
                                var e = p ? i: i.viewport;
                                t ? e.animate({
                                    height: i.slides.eq(i.animatingTo).height()
                                },
                                t) : e.height(i.slides.eq(i.animatingTo).height())
                            }
                        },
                        sync: function(t) {
                            var e = n(i.vars.sync).data("flexslider"),
                            o = i.animatingTo;
                            switch (t) {
                            case "animate":
                                e.flexAnimate(o, i.vars.pauseOnAction, !1, !0);
                                break;
                            case "play":
                                e.playing || e.asNav || e.play();
                                break;
                            case "pause":
                                e.pause()
                            }
                        },
                        uniqueID: function(t) {
                            return t.filter("[id]").add(t.find("[id]")).each(function() {
                                var t = n(this);
                                t.attr("id", t.attr("id") + "_clone")
                            }),
                            t
                        },
                        pauseInvisible: {
                            visProp: null,
                            init: function() {
                                var t = m.pauseInvisible.getHiddenProp();
                                if (t) {
                                    var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                                    document.addEventListener(e,
                                    function() {
                                        m.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                                    })
                                }
                            },
                            isHidden: function() {
                                var t = m.pauseInvisible.getHiddenProp();
                                return t ? document[t] : !1
                            },
                            getHiddenProp: function() {
                                var t = ["webkit", "moz", "ms", "o"];
                                if ("hidden" in document) return "hidden";
                                for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                                return null
                            }
                        },
                        setToClearWatchedEvent: function() {
                            clearTimeout(o),
                            o = setTimeout(function() {
                                d = ""
                            },
                            3e3)
                        }
                    },
                    i.flexAnimate = function(t, e, o, a, l) {
                        if (i.vars.animationLoop || t === i.currentSlide || (i.direction = t > i.currentSlide ? "next": "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next": "prev"), !i.animating && (i.canAdvance(t, l) || o) && i.is(":visible")) {
                            if (f && a) {
                                var d = n(i.vars.asNavFor).data("flexslider");
                                if (i.atEnd = 0 === t || t === i.count - 1, d.flexAnimate(t, !0, !1, !0, l), i.direction = i.currentItem < t ? "next": "prev", d.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t,
                                i.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"),
                                !1;
                                i.currentItem = t,
                                i.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"),
                                t = Math.floor(t / i.visible)
                            }
                            if (i.animating = !0, i.animatingTo = t, e && i.pause(), i.vars.before(i), i.syncExists && !l && m.sync("animate"), i.vars.controlNav && m.controlNav.active(), h || i.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), i.atEnd = 0 === t || t === i.last, i.vars.directionNav && m.directionNav.update(), t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), p) r ? (i.slides.eq(i.currentSlide).css({
                                opacity: 0,
                                zIndex: 1
                            }), i.slides.eq(t).css({
                                opacity: 1,
                                zIndex: 2
                            }), i.wrapup(y)) : (i.slides.eq(i.currentSlide).css({
                                zIndex: 1
                            }).animate({
                                opacity: 0
                            },
                            i.vars.animationSpeed, i.vars.easing), i.slides.eq(t).css({
                                zIndex: 2
                            }).animate({
                                opacity: 1
                            },
                            i.vars.animationSpeed, i.vars.easing, i.wrapup));
                            else {
                                var v, g, w, y = u ? i.slides.filter(":first").height() : i.computedW;
                                h ? (v = i.vars.itemMargin, w = (i.itemW + v) * i.move * i.animatingTo, g = w > i.limit && 1 !== i.visible ? i.limit: w) : g = 0 === i.currentSlide && t === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? c ? (i.count + i.cloneOffset) * y: 0 : i.currentSlide === i.last && 0 === t && i.vars.animationLoop && "prev" !== i.direction ? c ? 0 : (i.count + 1) * y: c ? (i.count - 1 - t + i.cloneOffset) * y: (t + i.cloneOffset) * y,
                                i.setProps(g, "", i.vars.animationSpeed),
                                i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend",
                                function() {
                                    clearTimeout(i.ensureAnimationEnd),
                                    i.wrapup(y)
                                }), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function() {
                                    i.wrapup(y)
                                },
                                i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing,
                                function() {
                                    i.wrapup(y)
                                })
                            }
                            i.vars.smoothHeight && m.smoothHeight(i.vars.animationSpeed)
                        }
                    },
                    i.wrapup = function(t) {
                        p || h || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(t, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(t, "jumpStart")),
                        i.animating = !1,
                        i.currentSlide = i.animatingTo,
                        i.vars.after(i)
                    },
                    i.animateSlides = function() { ! i.animating && v && i.flexAnimate(i.getTarget("next"))
                    },
                    i.pause = function() {
                        clearInterval(i.animatedSlides),
                        i.animatedSlides = null,
                        i.playing = !1,
                        i.vars.pausePlay && m.pausePlay.update("play"),
                        i.syncExists && m.sync("pause")
                    },
                    i.play = function() {
                        i.playing && clearInterval(i.animatedSlides),
                        i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed),
                        i.started = i.playing = !0,
                        i.vars.pausePlay && m.pausePlay.update("pause"),
                        i.syncExists && m.sync("play")
                    },
                    i.stop = function() {
                        i.pause(),
                        i.stopped = !0
                    },
                    i.canAdvance = function(t, e) {
                        var n = f ? i.pagingCount - 1 : i.last;
                        return e ? !0 : f && i.currentItem === i.count - 1 && 0 === t && "prev" === i.direction ? !0 : f && 0 === i.currentItem && t === i.pagingCount - 1 && "next" !== i.direction ? !1 : t !== i.currentSlide || f ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && t === n && "next" !== i.direction ? !1 : i.atEnd && i.currentSlide === n && 0 === t && "next" === i.direction ? !1 : !0 : !1
                    },
                    i.getTarget = function(t) {
                        return i.direction = t,
                        "next" === t ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last: i.currentSlide - 1
                    },
                    i.setProps = function(t, e, n) {
                        var o = function() {
                            var n = t ? t: (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
                            o = function() {
                                if (h) return "setTouch" === e ? t: c && i.animatingTo === i.last ? 0 : c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo: i.animatingTo === i.last ? i.limit: n;
                                switch (e) {
                                case "setTotal":
                                    return c ? (i.count - 1 - i.currentSlide + i.cloneOffset) * t: (i.currentSlide + i.cloneOffset) * t;
                                case "setTouch":
                                    return c ? t: t;
                                case "jumpEnd":
                                    return c ? t: i.count * t;
                                case "jumpStart":
                                    return c ? i.count * t: t;
                                default:
                                    return t
                                }
                            } ();
                            return - 1 * o + "px"
                        } ();
                        i.transitions && (o = u ? "translate3d(0," + o + ",0)": "translate3d(" + o + ",0,0)", n = void 0 !== n ? n / 1e3 + "s": "0s", i.container.css("-" + i.pfx + "-transition-duration", n), i.container.css("transition-duration", n)),
                        i.args[i.prop] = o,
                        (i.transitions || void 0 === n) && i.container.css(i.args),
                        i.container.css("transform", o)
                    },
                    i.setup = function(t) {
                        if (p) i.slides.css({
                            width: "100%",
                            "float": "left",
                            marginRight: "-100%",
                            position: "relative"
                        }),
                        "init" === t && (r ? i.slides.css({
                            opacity: 0,
                            display: "block",
                            webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                            zIndex: 1
                        }).eq(i.currentSlide).css({
                            opacity: 1,
                            zIndex: 2
                        }) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
                            opacity: 0,
                            display: "block",
                            zIndex: 1
                        }).eq(i.currentSlide).css({
                            zIndex: 2
                        }).css({
                            opacity: 1
                        }) : i.slides.css({
                            opacity: 0,
                            display: "block",
                            zIndex: 1
                        }).eq(i.currentSlide).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        },
                        i.vars.animationSpeed, i.vars.easing)),
                        i.vars.smoothHeight && m.smoothHeight();
                        else {
                            var e, o;
                            "init" === t && (i.viewport = n('<div class="' + s + 'viewport"></div>').css({
                                overflow: "hidden",
                                position: "relative"
                            }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, c && (o = n.makeArray(i.slides).reverse(), i.slides = n(o), i.container.empty().append(i.slides))),
                            i.vars.animationLoop && !h && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(m.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                            i.newSlides = n(i.vars.selector, i),
                            e = c ? i.count - 1 - i.currentSlide + i.cloneOffset: i.currentSlide + i.cloneOffset,
                            u && !h ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                                i.newSlides.css({
                                    display: "block"
                                }),
                                i.doMath(),
                                i.viewport.height(i.h),
                                i.setProps(e * i.h, "init")
                            },
                            "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(e * i.computedW, "init"), setTimeout(function() {
                                i.doMath(),
                                i.newSlides.css({
                                    width: i.computedW,
                                    "float": "left",
                                    display: "block"
                                }),
                                i.vars.smoothHeight && m.smoothHeight()
                            },
                            "init" === t ? 100 : 0))
                        }
                        h || i.slides.removeClass(s + "active-slide").eq(i.currentSlide).addClass(s + "active-slide"),
                        i.vars.init(i)
                    },
                    i.doMath = function() {
                        var t = i.slides.first(),
                        e = i.vars.itemMargin,
                        n = i.vars.minItems,
                        o = i.vars.maxItems;
                        i.w = void 0 === i.viewport ? i.width() : i.viewport.width(),
                        i.h = t.height(),
                        i.boxPadding = t.outerWidth() - t.width(),
                        h ? (i.itemT = i.vars.itemWidth + e, i.minW = n ? n * i.itemT: i.w, i.maxW = o ? o * i.itemT - e: i.w, i.itemW = i.minW > i.w ? (i.w - e * (n - 1)) / n: i.maxW < i.w ? (i.w - e * (o - 1)) / o: i.vars.itemWidth > i.w ? i.w: i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move: i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + e * (i.count - 1) : (i.itemW + e) * i.count - i.w - e) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1),
                        i.computedW = i.itemW - i.boxPadding
                    },
                    i.update = function(t, e) {
                        i.doMath(),
                        h || (t < i.currentSlide ? i.currentSlide += 1 : t <= i.currentSlide && 0 !== t && (i.currentSlide -= 1), i.animatingTo = i.currentSlide),
                        i.vars.controlNav && !i.manualControls && ("add" === e && !h || i.pagingCount > i.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !h || i.pagingCount < i.controlNav.length) && (h && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), m.controlNav.update("remove", i.last))),
                        i.vars.directionNav && m.directionNav.update()
                    },
                    i.addSlide = function(t, e) {
                        var o = n(t);
                        i.count += 1,
                        i.last = i.count - 1,
                        u && c ? void 0 !== e ? i.slides.eq(i.count - e).after(o) : i.container.prepend(o) : void 0 !== e ? i.slides.eq(e).before(o) : i.container.append(o),
                        i.update(e, "add"),
                        i.slides = n(i.vars.selector + ":not(.clone)", i),
                        i.setup(),
                        i.vars.added(i)
                    },
                    i.removeSlide = function(t) {
                        var e = isNaN(t) ? i.slides.index(n(t)) : t;
                        i.count -= 1,
                        i.last = i.count - 1,
                        isNaN(t) ? n(t, i.slides).remove() : u && c ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(),
                        i.doMath(),
                        i.update(e, "remove"),
                        i.slides = n(i.vars.selector + ":not(.clone)", i),
                        i.setup(),
                        i.vars.removed(i)
                    },
                    m.init()
                },
                n(window).blur(function(t) {
                    focused = !1
                }).focus(function(t) {
                    focused = !0
                }),
                n.flexslider.defaults = {
                    namespace: "am-",
                    selector: ".am-slides > li",
                    animation: "slide",
                    easing: "swing",
                    direction: "horizontal",
                    reverse: !1,
                    animationLoop: !0,
                    smoothHeight: !1,
                    startAt: 0,
                    slideshow: !0,
                    slideshowSpeed: 5e3,
                    animationSpeed: 600,
                    initDelay: 0,
                    randomize: !1,
                    fadeFirstSlide: !0,
                    thumbCaptions: !1,
                    pauseOnAction: !0,
                    pauseOnHover: !1,
                    pauseInvisible: !0,
                    useCSS: !0,
                    touch: !0,
                    video: !1,
                    controlNav: !0,
                    directionNav: !0,
                    prevText: " ",
                    nextText: " ",
                    keyboard: !0,
                    multipleKeyboard: !1,
                    mousewheel: !1,
                    pausePlay: !1,
                    pauseText: "Pause",
                    playText: "Play",
                    controlsContainer: "",
                    manualControls: "",
                    sync: "",
                    asNavFor: "",
                    itemWidth: 0,
                    itemMargin: 0,
                    minItems: 1,
                    maxItems: 0,
                    move: 0,
                    allowOneSlide: !0,
                    start: function() {},
                    before: function() {},
                    after: function() {},
                    end: function() {},
                    added: function() {},
                    removed: function() {},
                    init: function() {}
                },
                n.fn.flexslider = function(t) {
                    if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                        var e = n(this),
                        i = t.selector ? t.selector: ".am-slides > li",
                        o = e.find(i);
                        1 === o.length && t.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), t.start && t.start(e)) : void 0 === e.data("flexslider") && new n.flexslider(this, t)
                    });
                    var e = n(this).data("flexslider");
                    switch (t) {
                    case "play":
                        e.play();
                        break;
                    case "pause":
                        e.pause();
                        break;
                    case "stop":
                        e.stop();
                        break;
                    case "next":
                        e.flexAnimate(e.getTarget("next"), !0);
                        break;
                    case "prev":
                    case "previous":
                        e.flexAnimate(e.getTarget("prev"), !0);
                        break;
                    default:
                        "number" == typeof t && e.flexAnimate(t, !0)
                    }
                },
                o.ready(function(t) {
                    n("[data-am-flexslider]", t).each(function(t, e) {
                        var i = n(e),
                        s = o.utils.parseOptions(i.data("amFlexslider"));
                        s.before = function(t) {
                            t._pausedTimer && (window.clearTimeout(t._pausedTimer), t._pausedTimer = null)
                        },
                        s.after = function(t) {
                            var e = t.vars.playAfterPaused; ! e || isNaN(e) || t.playing || t.manualPause || t.manualPlay || t.stopped || (t._pausedTimer = window.setTimeout(function() {
                                t.play()
                            },
                            e))
                        },
                        i.flexslider(s)
                    })
                }),
                e.exports = n.flexslider
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        11 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t, e) {
                    this.wrapper = "string" == typeof t ? document.querySelector(t) : t,
                    this.scroller = this.wrapper.children[0],
                    this.scrollerStyle = this.scroller.style,
                    this.options = {
                        startX: 0,
                        startY: 0,
                        scrollY: !0,
                        directionLockThreshold: 5,
                        momentum: !0,
                        bounce: !0,
                        bounceTime: 600,
                        bounceEasing: "",
                        preventDefault: !0,
                        preventDefaultException: {
                            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                        },
                        HWCompositing: !0,
                        useTransition: !0,
                        useTransform: !0
                    };
                    for (var i in e) this.options[i] = e[i];
                    this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)": "",
                    this.options.useTransition = a.hasTransition && this.options.useTransition,
                    this.options.useTransform = a.hasTransform && this.options.useTransform,
                    this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical": this.options.eventPassthrough,
                    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
                    this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY,
                    this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX,
                    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
                    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
                    this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular: this.options.bounceEasing,
                    this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
                    this.options.tap === !0 && (this.options.tap = "tap"),
                    this.x = 0,
                    this.y = 0,
                    this.directionX = 0,
                    this.directionY = 0,
                    this._events = {},
                    this._init(),
                    this.refresh(),
                    this.scrollTo(this.options.startX, this.options.startY),
                    this.enable()
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = (t(2), window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                function(t) {
                    window.setTimeout(t, 1e3 / 60)
                }),
                a = function() {
                    function t(t) {
                        return n === !1 ? !1 : "" === n ? t: n + t.charAt(0).toUpperCase() + t.substr(1)
                    }
                    var e = {},
                    i = document.createElement("div").style,
                    n = function() {
                        for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, o = e.length; o > n; n++) if (t = e[n] + "ransform", t in i) return e[n].substr(0, e[n].length - 1);
                        return ! 1
                    } ();
                    e.getTime = Date.now ||
                    function() {
                        return (new Date).getTime()
                    },
                    e.extend = function(t, e) {
                        for (var i in e) t[i] = e[i]
                    },
                    e.addEvent = function(t, e, i, n) {
                        t.addEventListener(e, i, !!n)
                    },
                    e.removeEvent = function(t, e, i, n) {
                        t.removeEventListener(e, i, !!n)
                    },
                    e.prefixPointerEvent = function(t) {
                        return window.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
                    },
                    e.momentum = function(t, e, i, n, o, s) {
                        var a, r, l = t - e,
                        d = Math.abs(l) / i;
                        return s = void 0 === s ? 6e-4: s,
                        a = t + d * d / (2 * s) * (0 > l ? -1 : 1),
                        r = d / s,
                        n > a ? (a = o ? n - o / 2.5 * (d / 8) : n, l = Math.abs(a - t), r = l / d) : a > 0 && (a = o ? o / 2.5 * (d / 8) : 0, l = Math.abs(t) + a, r = l / d),
                        {
                            destination: Math.round(a),
                            duration: r
                        }
                    };
                    var o = t("transform");
                    return e.extend(e, {
                        hasTransform: o !== !1,
                        hasPerspective: t("perspective") in i,
                        hasTouch: "ontouchstart" in window,
                        hasPointer: window.PointerEvent || window.MSPointerEvent,
                        hasTransition: t("transition") in i
                    }),
                    e.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion),
                    e.extend(e.style = {},
                    {
                        transform: o,
                        transitionTimingFunction: t("transitionTimingFunction"),
                        transitionDuration: t("transitionDuration"),
                        transitionDelay: t("transitionDelay"),
                        transformOrigin: t("transformOrigin")
                    }),
                    e.hasClass = function(t, e) {
                        var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
                        return i.test(t.className)
                    },
                    e.addClass = function(t, i) {
                        if (!e.hasClass(t, i)) {
                            var n = t.className.split(" ");
                            n.push(i),
                            t.className = n.join(" ")
                        }
                    },
                    e.removeClass = function(t, i) {
                        if (e.hasClass(t, i)) {
                            var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                            t.className = t.className.replace(n, " ")
                        }
                    },
                    e.offset = function(t) {
                        for (var e = -t.offsetLeft,
                        i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft,
                        i -= t.offsetTop;
                        return {
                            left: e,
                            top: i
                        }
                    },
                    e.preventDefaultException = function(t, e) {
                        for (var i in e) if (e[i].test(t[i])) return ! 0;
                        return ! 1
                    },
                    e.extend(e.eventType = {},
                    {
                        touchstart: 1,
                        touchmove: 1,
                        touchend: 1,
                        mousedown: 2,
                        mousemove: 2,
                        mouseup: 2,
                        pointerdown: 3,
                        pointermove: 3,
                        pointerup: 3,
                        MSPointerDown: 3,
                        MSPointerMove: 3,
                        MSPointerUp: 3
                    }),
                    e.extend(e.ease = {},
                    {
                        quadratic: {
                            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            fn: function(t) {
                                return t * (2 - t)
                            }
                        },
                        circular: {
                            style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                            fn: function(t) {
                                return Math.sqrt(1 - --t * t)
                            }
                        },
                        back: {
                            style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            fn: function(t) {
                                var e = 4;
                                return (t -= 1) * t * ((e + 1) * t + e) + 1
                            }
                        },
                        bounce: {
                            style: "",
                            fn: function(t) {
                                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            }
                        },
                        elastic: {
                            style: "",
                            fn: function(t) {
                                var e = .22,
                                i = .4;
                                return 0 === t ? 0 : 1 == t ? 1 : i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e / 4) * Math.PI / e) + 1
                            }
                        }
                    }),
                    e.tap = function(t, e) {
                        var i = document.createEvent("Event");
                        i.initEvent(e, !0, !0),
                        i.pageX = t.pageX,
                        i.pageY = t.pageY,
                        t.target.dispatchEvent(i)
                    },
                    e.click = function(t) {
                        var e, i = t.target;
                        /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = document.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, i.dispatchEvent(e))
                    },
                    e
                } ();
                n.prototype = {
                    version: "5.1.3",
                    _init: function() {
                        this._initEvents()
                    },
                    destroy: function() {
                        this._initEvents(!0),
                        this._execEvent("destroy")
                    },
                    _transitionEnd: function(t) {
                        t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
                    },
                    _start: function(t) {
                        if (! (1 != a.eventType[t.type] && 0 !== t.button || !this.enabled || this.initiated && a.eventType[t.type] !== this.initiated)) { ! this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                            var e, i = t.touches ? t.touches[0] : t;
                            this.initiated = a.eventType[t.type],
                            this.moved = !1,
                            this.distX = 0,
                            this.distY = 0,
                            this.directionX = 0,
                            this.directionY = 0,
                            this.directionLocked = 0,
                            this._transitionTime(),
                            this.startTime = a.getTime(),
                            this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, e = this.getComputedPosition(), this._translate(Math.round(e.x), Math.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")),
                            this.startX = this.x,
                            this.startY = this.y,
                            this.absStartX = this.x,
                            this.absStartY = this.y,
                            this.pointX = i.pageX,
                            this.pointY = i.pageY,
                            this._execEvent("beforeScrollStart")
                        }
                    },
                    _move: function(t) {
                        if (this.enabled && a.eventType[t.type] === this.initiated) {
                            this.options.preventDefault && t.preventDefault();
                            var e, i, n, o, s = t.touches ? t.touches[0] : t,
                            r = s.pageX - this.pointX,
                            l = s.pageY - this.pointY,
                            d = a.getTime();
                            if (this.pointX = s.pageX, this.pointY = s.pageY, this.distX += r, this.distY += l, n = Math.abs(this.distX), o = Math.abs(this.distY), !(d - this.endTime > 300 && 10 > n && 10 > o)) {
                                if (this.directionLocked || this.options.freeScroll || (this.directionLocked = n > o + this.options.directionLockThreshold ? "h": o >= n + this.options.directionLockThreshold ? "v": "n"), "h" == this.directionLocked) {
                                    if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                                    else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                                    l = 0
                                } else if ("v" == this.directionLocked) {
                                    if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                                    else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                                    r = 0
                                }
                                r = this.hasHorizontalScroll ? r: 0,
                                l = this.hasVerticalScroll ? l: 0,
                                e = this.x + r,
                                i = this.y + l,
                                (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + r / 3 : e > 0 ? 0 : this.maxScrollX),
                                (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY),
                                this.directionX = r > 0 ? -1 : 0 > r ? 1 : 0,
                                this.directionY = l > 0 ? -1 : 0 > l ? 1 : 0,
                                this.moved || this._execEvent("scrollStart"),
                                this.moved = !0,
                                this._translate(e, i),
                                d - this.startTime > 300 && (this.startTime = d, this.startX = this.x, this.startY = this.y)
                            }
                        }
                    },
                    _end: function(t) {
                        if (this.enabled && a.eventType[t.type] === this.initiated) {
                            this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                            var e, i, n = (t.changedTouches ? t.changedTouches[0] : t, a.getTime() - this.startTime),
                            o = Math.round(this.x),
                            s = Math.round(this.y),
                            r = Math.abs(o - this.startX),
                            l = Math.abs(s - this.startY),
                            d = 0,
                            u = "";
                            if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) return this.scrollTo(o, s),
                            this.moved ? this._events.flick && 200 > n && 100 > r && 100 > l ? void this._execEvent("flick") : (this.options.momentum && 300 > n && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {
                                destination: o,
                                duration: 0
                            },
                            i = this.hasVerticalScroll ? a.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {
                                destination: s,
                                duration: 0
                            },
                            o = e.destination, s = i.destination, d = Math.max(e.duration, i.duration), this.isInTransition = 1), o != this.x || s != this.y ? ((o > 0 || o < this.maxScrollX || s > 0 || s < this.maxScrollY) && (u = a.ease.quadratic), void this.scrollTo(o, s, d, u)) : void this._execEvent("scrollEnd")) : (this.options.tap && a.tap(t, this.options.tap), this.options.click && a.click(t), void this._execEvent("scrollCancel"))
                        }
                    },
                    _resize: function() {
                        var t = this;
                        clearTimeout(this.resizeTimeout),
                        this.resizeTimeout = setTimeout(function() {
                            t.refresh()
                        },
                        this.options.resizePolling)
                    },
                    resetPosition: function(t) {
                        var e = this.x,
                        i = this.y;
                        return t = t || 0,
                        !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
                        !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
                        e == this.x && i == this.y ? !1 : (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
                    },
                    disable: function() {
                        this.enabled = !1
                    },
                    enable: function() {
                        this.enabled = !0
                    },
                    refresh: function() {
                        this.wrapper.offsetHeight;
                        this.wrapperWidth = this.wrapper.clientWidth,
                        this.wrapperHeight = this.wrapper.clientHeight,
                        this.scrollerWidth = this.scroller.offsetWidth,
                        this.scrollerHeight = this.scroller.offsetHeight,
                        this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
                        this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
                        this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
                        this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
                        this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
                        this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
                        this.endTime = 0,
                        this.directionX = 0,
                        this.directionY = 0,
                        this.wrapperOffset = a.offset(this.wrapper),
                        this._execEvent("refresh"),
                        this.resetPosition()
                    },
                    on: function(t, e) {
                        this._events[t] || (this._events[t] = []),
                        this._events[t].push(e)
                    },
                    off: function(t, e) {
                        if (this._events[t]) {
                            var i = this._events[t].indexOf(e);
                            i > -1 && this._events[t].splice(i, 1)
                        }
                    },
                    _execEvent: function(t) {
                        if (this._events[t]) {
                            var e = 0,
                            i = this._events[t].length;
                            if (i) for (; i > e; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                        }
                    },
                    scrollBy: function(t, e, i, n) {
                        t = this.x + t,
                        e = this.y + e,
                        i = i || 0,
                        this.scrollTo(t, e, i, n)
                    },
                    scrollTo: function(t, e, i, n) {
                        n = n || a.ease.circular,
                        this.isInTransition = this.options.useTransition && i > 0,
                        !i || this.options.useTransition && n.style ? (this._transitionTimingFunction(n.style), this._transitionTime(i), this._translate(t, e)) : this._animate(t, e, i, n.fn)
                    },
                    scrollToElement: function(t, e, i, n, o) {
                        if (t = t.nodeType ? t: this.scroller.querySelector(t)) {
                            var s = a.offset(t);
                            s.left -= this.wrapperOffset.left,
                            s.top -= this.wrapperOffset.top,
                            i === !0 && (i = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                            n === !0 && (n = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                            s.left -= i || 0,
                            s.top -= n || 0,
                            s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX: s.left,
                            s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY: s.top,
                            e = void 0 === e || null === e || "auto" === e ? Math.max(Math.abs(this.x - s.left), Math.abs(this.y - s.top)) : e,
                            this.scrollTo(s.left, s.top, e, o)
                        }
                    },
                    _transitionTime: function(t) {
                        t = t || 0,
                        this.scrollerStyle[a.style.transitionDuration] = t + "ms",
                        !t && a.isBadAndroid && (this.scrollerStyle[a.style.transitionDuration] = "0.001s")
                    },
                    _transitionTimingFunction: function(t) {
                        this.scrollerStyle[a.style.transitionTimingFunction] = t
                    },
                    _translate: function(t, e) {
                        this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ: (t = Math.round(t), e = Math.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"),
                        this.x = t,
                        this.y = e
                    },
                    _initEvents: function(t) {
                        var e = t ? a.removeEvent: a.addEvent,
                        i = this.options.bindToWrapper ? this.wrapper: window;
                        e(window, "orientationchange", this),
                        e(window, "resize", this),
                        this.options.click && e(this.wrapper, "click", this, !0),
                        this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)),
                        a.hasPointer && !this.options.disablePointer && (e(this.wrapper, a.prefixPointerEvent("pointerdown"), this), e(i, a.prefixPointerEvent("pointermove"), this), e(i, a.prefixPointerEvent("pointercancel"), this), e(i, a.prefixPointerEvent("pointerup"), this)),
                        a.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)),
                        e(this.scroller, "transitionend", this),
                        e(this.scroller, "webkitTransitionEnd", this),
                        e(this.scroller, "oTransitionEnd", this),
                        e(this.scroller, "MSTransitionEnd", this)
                    },
                    getComputedPosition: function() {
                        var t, e, i = window.getComputedStyle(this.scroller, null);
                        return this.options.useTransform ? (i = i[a.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), e = +i.top.replace(/[^-\d.]/g, "")),
                        {
                            x: t,
                            y: e
                        }
                    },
                    _animate: function(t, e, i, n) {
                        function o() {
                            var h, p, f, m = a.getTime();
                            return m >= c ? (r.isAnimating = !1, r._translate(t, e), void(r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"))) : (m = (m - u) / i, f = n(m), h = (t - l) * f + l, p = (e - d) * f + d, r._translate(h, p), void(r.isAnimating && s(o)))
                        }
                        var r = this,
                        l = this.x,
                        d = this.y,
                        u = a.getTime(),
                        c = u + i;
                        this.isAnimating = !0,
                        o()
                    },
                    handleEvent: function(t) {
                        switch (t.type) {
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                        case "mousedown":
                            this._start(t);
                            break;
                        case "touchmove":
                        case "pointermove":
                        case "MSPointerMove":
                        case "mousemove":
                            this._move(t);
                            break;
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseup":
                        case "touchcancel":
                        case "pointercancel":
                        case "MSPointerCancel":
                        case "mousecancel":
                            this._end(t);
                            break;
                        case "orientationchange":
                        case "resize":
                            this._resize();
                            break;
                        case "transitionend":
                        case "webkitTransitionEnd":
                        case "oTransitionEnd":
                        case "MSTransitionEnd":
                            this._transitionEnd(t);
                            break;
                        case "wheel":
                        case "DOMMouseScroll":
                        case "mousewheel":
                            this._wheel(t);
                            break;
                        case "keydown":
                            this._key(t);
                            break;
                        case "click":
                            t._constructed || (t.preventDefault(), t.stopPropagation())
                        }
                    }
                },
                n.utils = a,
                o.AMUI.iScroll = n,
                e.exports = n
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        12 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t, e) {
                    return this.each(function() {
                        var i = o(this),
                        n = i.data("amui.modal"),
                        s = o.extend({},
                        d.DEFAULTS, "object" == typeof t && t);
                        n || i.data("amui.modal", n = new d(this, s)),
                        "string" == typeof t ? n[t] && n[t](e) : n.toggle(t && t.relatedTarget || void 0)
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = t(8),
                r = o(document),
                l = s.support.transition,
                d = function(t, e) {
                    this.options = o.extend({},
                    d.DEFAULTS, e || {}),
                    this.$element = o(t),
                    this.$dialog = this.$element.find(".am-modal-dialog"),
                    this.$element.attr("id") || this.$element.attr("id", s.utils.generateGUID("am-modal")),
                    this.isPopup = this.$element.hasClass("am-popup"),
                    this.isActions = this.$element.hasClass("am-modal-actions"),
                    this.isPrompt = this.$element.hasClass("am-modal-prompt"),
                    this.isLoading = this.$element.hasClass("am-modal-loading"),
                    this.active = this.transitioning = this.relatedTarget = null,
                    this.events()
                };
                d.DEFAULTS = {
                    className: {
                        active: "am-modal-active",
                        out: "am-modal-out"
                    },
                    selector: {
                        modal: ".am-modal",
                        active: ".am-modal-active"
                    },
                    closeViaDimmer: !0,
                    cancelable: !0,
                    onConfirm: function() {},
                    onCancel: function() {},
                    height: void 0,
                    width: void 0,
                    duration: 300,
                    transitionEnd: l && l.end + ".modal.amui"
                },
                d.prototype.toggle = function(t) {
                    return this.active ? this.close() : this.open(t)
                },
                d.prototype.open = function(t) {
                    var e = this.$element,
                    i = this.options,
                    n = this.isPopup,
                    s = i.width,
                    r = i.height,
                    d = {};
                    if (!this.active && this.$element.length) {
                        t && (this.relatedTarget = t),
                        this.transitioning && (clearTimeout(e.transitionEndTimmer), e.transitionEndTimmer = null, e.trigger(i.transitionEnd).off(i.transitionEnd)),
                        n && this.$element.show(),
                        this.active = !0,
                        e.trigger(o.Event("open.modal.amui", {
                            relatedTarget: t
                        })),
                        a.open(e),
                        e.show().redraw(),
                        n || this.isActions || (s && (s = parseInt(s, 10), d.width = s + "px", d.marginLeft = -parseInt(s / 2) + "px"), r ? (r = parseInt(r, 10), d.marginTop = -parseInt(r / 2) + "px", this.$dialog.css({
                            height: r + "px"
                        })) : d.marginTop = -parseInt(e.height() / 2, 10) + "px", e.css(d)),
                        e.removeClass(i.className.out).addClass(i.className.active),
                        this.transitioning = 1;
                        var u = function() {
                            e.trigger(o.Event("opened.modal.amui", {
                                relatedTarget: t
                            })),
                            this.transitioning = 0,
                            this.isPrompt && this.$dialog.find("input").eq(0).focus()
                        };
                        return l ? void e.one(i.transitionEnd, o.proxy(u, this)).emulateTransitionEnd(i.duration) : u.call(this)
                    }
                },
                d.prototype.close = function(t) {
                    if (this.active) {
                        var e = this.$element,
                        i = this.options,
                        n = this.isPopup;
                        this.transitioning && (clearTimeout(e.transitionEndTimmer), e.transitionEndTimmer = null, e.trigger(i.transitionEnd).off(i.transitionEnd), a.close(e, !0)),
                        this.$element.trigger(o.Event("close.modal.amui", {
                            relatedTarget: t
                        })),
                        this.transitioning = 1;
                        var s = function() {
                            e.trigger("closed.modal.amui"),
                            n && e.removeClass(i.className.out),
                            e.hide(),
                            this.transitioning = 0,
                            a.close(e, !1),
                            this.active = !1
                        };
                        return e.removeClass(i.className.active).addClass(i.className.out),
                        l ? void e.one(i.transitionEnd, o.proxy(s, this)).emulateTransitionEnd(i.duration) : s.call(this)
                    }
                },
                d.prototype.events = function() {
                    var t = this,
                    e = this.$element,
                    i = e.find(".am-modal-prompt-input"),
                    n = function() {
                        var t = [];
                        return i.each(function() {
                            t.push(o(this).val())
                        }),
                        0 === t.length ? void 0 : 1 === t.length ? t[0] : t
                    };
                    this.options.cancelable && e.on("keyup.modal.amui",
                    function(i) {
                        t.active && 27 === i.which && (e.trigger("cancel.modal.amui"), t.close())
                    }),
                    this.options.closeViaDimmer && !this.isLoading && a.$element.on("click.dimmer.modal.amui",
                    function(e) {
                        t.close()
                    }),
                    e.find("[data-am-modal-close], .am-modal-btn").on("click.close.modal.amui",
                    function(e) {
                        e.preventDefault(),
                        t.close()
                    }),
                    e.find("[data-am-modal-confirm]").on("click.confirm.modal.amui",
                    function() {
                        e.trigger(o.Event("confirm.modal.amui", {
                            trigger: this
                        }))
                    }),
                    e.find("[data-am-modal-cancel]").on("click.cancel.modal.amui",
                    function() {
                        e.trigger(o.Event("cancel.modal.amui", {
                            trigger: this
                        }))
                    }),
                    e.on("confirm.modal.amui",
                    function(e) {
                        e.data = n(),
                        t.options.onConfirm.call(t, e)
                    }).on("cancel.modal.amui",
                    function(e) {
                        e.data = n(),
                        t.options.onCancel.call(t, e)
                    })
                },
                o.fn.modal = n,
                r.on("click.modal.amui.data-api", "[data-am-modal]",
                function() {
                    var t = o(this),
                    e = s.utils.parseOptions(t.attr("data-am-modal")),
                    i = o(e.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, "")),
                    a = i.data("amui.modal") ? "toggle": e;
                    n.call(i, a, this)
                }),
                o.AMUI.modal = d,
                e.exports = d
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2,
            8 : 8
        }],
        13 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t, e) {
                    return this.each(function() {
                        var i = s(this),
                        n = i.data("amui.offcanvas"),
                        o = s.extend({},
                        "object" == typeof t && t);
                        n || (i.data("amui.offcanvas", n = new d(this, o)), (!t || "object" == typeof t) && n.open(e)),
                        "string" == typeof t && n[t] && n[t](e)
                    })
                }
                var o, s = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                a = t(2),
                r = (t(30), s(window)),
                l = s(document),
                d = function(t, e) {
                    this.$element = s(t),
                    this.options = s.extend({},
                    d.DEFAULTS, e),
                    this.active = null,
                    this.bindEvents()
                };
                d.DEFAULTS = {
                    duration: 300,
                    effect: "overlay"
                },
                d.prototype.open = function(t) {
                    var e = this,
                    i = this.$element;
                    if (i.length && !i.hasClass("am-active")) {
                        var n = this.options.effect,
                        a = s("html"),
                        l = s("body"),
                        d = i.find(".am-offcanvas-bar").first(),
                        u = d.hasClass("am-offcanvas-bar-flip") ? -1 : 1;
                        d.addClass("am-offcanvas-bar-" + n),
                        o = {
                            x: window.scrollX,
                            y: window.scrollY
                        },
                        i.addClass("am-active"),
                        l.css({
                            width: window.innerWidth,
                            height: r.height()
                        }).addClass("am-offcanvas-page"),
                        "overlay" !== n && l.css({
                            "margin-left": d.outerWidth() * u
                        }).width(),
                        a.css("margin-top", -1 * o.y),
                        setTimeout(function() {
                            d.addClass("am-offcanvas-bar-active").width()
                        },
                        0),
                        i.trigger("open.offcanvas.amui"),
                        this.active = 1,
                        i.on("click.offcanvas.amui",
                        function(t) {
                            var i = s(t.target);
                            i.hasClass("am-offcanvas-bar") || i.parents(".am-offcanvas-bar").first().length || (t.stopImmediatePropagation(), e.close())
                        }),
                        a.on("keydown.offcanvas.amui",
                        function(t) {
                            27 === t.keyCode && e.close()
                        })
                    }
                },
                d.prototype.close = function(t) {
                    function e() {
                        r.removeClass("am-offcanvas-page").css({
                            width: "",
                            height: "",
                            "margin-left": "",
                            "margin-right": ""
                        }),
                        l.removeClass("am-active"),
                        d.removeClass("am-offcanvas-bar-active"),
                        n.css("margin-top", ""),
                        window.scrollTo(o.x, o.y),
                        l.trigger("closed.offcanvas.amui"),
                        i.active = 0
                    }
                    var i = this,
                    n = s("html"),
                    r = s("body"),
                    l = this.$element,
                    d = l.find(".am-offcanvas-bar").first();
                    l.length && this.active && l.hasClass("am-active") && (l.trigger("close.offcanvas.amui"), a.support.transition ? (setTimeout(function() {
                        d.removeClass("am-offcanvas-bar-active")
                    },
                    0), r.css("margin-left", "").one(a.support.transition.end,
                    function() {
                        e()
                    }).emulateTransitionEnd(this.options.duration)) : e(), l.off("click.offcanvas.amui"), n.off(".offcanvas.amui"))
                },
                d.prototype.bindEvents = function() {
                    var t = this;
                    return l.on("click.offcanvas.amui", '[data-am-dismiss="offcanvas"]',
                    function(e) {
                        e.preventDefault(),
                        t.close()
                    }),
                    r.on("resize.offcanvas.amui orientationchange.offcanvas.amui",
                    function() {
                        t.active && t.close()
                    }),
                    this.$element.hammer().on("swipeleft swipeleft",
                    function(e) {
                        e.preventDefault(),
                        t.close()
                    }),
                    this
                },
                s.fn.offCanvas = n,
                l.on("click.offcanvas.amui", "[data-am-offcanvas]",
                function(t) {
                    t.preventDefault();
                    var e = s(this),
                    i = a.utils.parseOptions(e.data("amOffcanvas")),
                    o = s(i.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, "")),
                    r = o.data("amui.offcanvas") ? "open": i;
                    n.call(o, r, this)
                }),
                s.AMUI.offcanvas = d,
                e.exports = d
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2,
            30 : 30
        }],
        14 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = (t(2),
                function(t) {
                    var e = function(e, i) {
                        this.el = t(e),
                        this.zoomFactor = 1,
                        this.lastScale = 1,
                        this.offset = {
                            x: 0,
                            y: 0
                        },
                        this.options = t.extend({},
                        this.defaults, i),
                        this.setupMarkup(),
                        this.bindEvents(),
                        this.update(),
                        this.enable()
                    },
                    i = function(t, e) {
                        return t + e
                    },
                    n = function(t, e) {
                        return t > e - .01 && e + .01 > t
                    };
                    e.prototype = {
                        defaults: {
                            tapZoomFactor: 2,
                            zoomOutFactor: 1.3,
                            animationDuration: 300,
                            animationInterval: 5,
                            maxZoom: 5,
                            minZoom: .5,
                            lockDragAxis: !1,
                            use2d: !1,
                            zoomStartEventName: "pz_zoomstart",
                            zoomEndEventName: "pz_zoomend",
                            dragStartEventName: "pz_dragstart",
                            dragEndEventName: "pz_dragend",
                            doubleTapEventName: "pz_doubletap"
                        },
                        handleDragStart: function(t) {
                            this.el.trigger(this.options.dragStartEventName),
                            this.stopAnimation(),
                            this.lastDragPosition = !1,
                            this.hasInteraction = !0,
                            this.handleDrag(t)
                        },
                        handleDrag: function(t) {
                            if (this.zoomFactor > 1) {
                                var e = this.getTouches(t)[0];
                                this.drag(e, this.lastDragPosition),
                                this.offset = this.sanitizeOffset(this.offset),
                                this.lastDragPosition = e
                            }
                        },
                        handleDragEnd: function() {
                            this.el.trigger(this.options.dragEndEventName),
                            this.end()
                        },
                        handleZoomStart: function(t) {
                            this.el.trigger(this.options.zoomStartEventName),
                            this.stopAnimation(),
                            this.lastScale = 1,
                            this.nthZoom = 0,
                            this.lastZoomCenter = !1,
                            this.hasInteraction = !0
                        },
                        handleZoom: function(t, e) {
                            var i = this.getTouchCenter(this.getTouches(t)),
                            n = e / this.lastScale;
                            this.lastScale = e,
                            this.nthZoom += 1,
                            this.nthZoom > 3 && (this.scale(n, i), this.drag(i, this.lastZoomCenter)),
                            this.lastZoomCenter = i
                        },
                        handleZoomEnd: function() {
                            this.el.trigger(this.options.zoomEndEventName),
                            this.end()
                        },
                        handleDoubleTap: function(t) {
                            var e = this.getTouches(t)[0],
                            i = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
                            n = this.zoomFactor,
                            o = function(t) {
                                this.scaleTo(n + t * (i - n), e)
                            }.bind(this);
                            this.hasInteraction || (n > i && (e = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, this.options.animationInterval, o, this.swing), this.el.trigger(this.options.doubleTapEventName))
                        },
                        sanitizeOffset: function(t) {
                            var e = (this.zoomFactor - 1) * this.getContainerX(),
                            i = (this.zoomFactor - 1) * this.getContainerY(),
                            n = Math.max(e, 0),
                            o = Math.max(i, 0),
                            s = Math.min(e, 0),
                            a = Math.min(i, 0);
                            return {
                                x: Math.min(Math.max(t.x, s), n),
                                y: Math.min(Math.max(t.y, a), o)
                            }
                        },
                        scaleTo: function(t, e) {
                            this.scale(t / this.zoomFactor, e)
                        },
                        scale: function(t, e) {
                            t = this.scaleZoomFactor(t),
                            this.addOffset({
                                x: (t - 1) * (e.x + this.offset.x),
                                y: (t - 1) * (e.y + this.offset.y)
                            })
                        },
                        scaleZoomFactor: function(t) {
                            var e = this.zoomFactor;
                            return this.zoomFactor *= t,
                            this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)),
                            this.zoomFactor / e
                        },
                        drag: function(t, e) {
                            e && this.addOffset(this.options.lockDragAxis ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? {
                                x: -(t.x - e.x),
                                y: 0
                            }: {
                                y: -(t.y - e.y),
                                x: 0
                            }: {
                                y: -(t.y - e.y),
                                x: -(t.x - e.x)
                            })
                        },
                        getTouchCenter: function(t) {
                            return this.getVectorAvg(t)
                        },
                        getVectorAvg: function(t) {
                            return {
                                x: t.map(function(t) {
                                    return t.x
                                }).reduce(i) / t.length,
                                y: t.map(function(t) {
                                    return t.y
                                }).reduce(i) / t.length
                            }
                        },
                        addOffset: function(t) {
                            this.offset = {
                                x: this.offset.x + t.x,
                                y: this.offset.y + t.y
                            }
                        },
                        sanitize: function() {
                            this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
                        },
                        isInsaneOffset: function(t) {
                            var e = this.sanitizeOffset(t);
                            return e.x !== t.x || e.y !== t.y
                        },
                        sanitizeOffsetAnimation: function() {
                            var t = this.sanitizeOffset(this.offset),
                            e = {
                                x: this.offset.x,
                                y: this.offset.y
                            },
                            i = function(i) {
                                this.offset.x = e.x + i * (t.x - e.x),
                                this.offset.y = e.y + i * (t.y - e.y),
                                this.update()
                            }.bind(this);
                            this.animate(this.options.animationDuration, this.options.animationInterval, i, this.swing)
                        },
                        zoomOutAnimation: function() {
                            var t = this.zoomFactor,
                            e = 1,
                            i = this.getCurrentZoomCenter(),
                            n = function(n) {
                                this.scaleTo(t + n * (e - t), i)
                            }.bind(this);
                            this.animate(this.options.animationDuration, this.options.animationInterval, n, this.swing)
                        },
                        updateAspectRatio: function() {
                            this.setContainerY()
                        },
                        getInitialZoomFactor: function() {
                            return this.container[0].offsetWidth / this.el[0].offsetWidth
                        },
                        getAspectRatio: function() {
                            return this.el[0].offsetWidth / this.el[0].offsetHeight
                        },
                        getCurrentZoomCenter: function() {
                            var t = this.container[0].offsetWidth * this.zoomFactor,
                            e = this.offset.x,
                            i = t - e - this.container[0].offsetWidth,
                            n = e / i,
                            o = n * this.container[0].offsetWidth / (n + 1),
                            s = this.container[0].offsetHeight * this.zoomFactor,
                            a = this.offset.y,
                            r = s - a - this.container[0].offsetHeight,
                            l = a / r,
                            d = l * this.container[0].offsetHeight / (l + 1);
                            return 0 === i && (o = this.container[0].offsetWidth),
                            0 === r && (d = this.container[0].offsetHeight),
                            {
                                x: o,
                                y: d
                            }
                        },
                        canDrag: function() {
                            return ! n(this.zoomFactor, 1)
                        },
                        getTouches: function(t) {
                            var e = this.container.offset();
                            return Array.prototype.slice.call(t.touches).map(function(t) {
                                return {
                                    x: t.pageX - e.left,
                                    y: t.pageY - e.top
                                }
                            })
                        },
                        animate: function(t, e, i, n, o) {
                            var s = (new Date).getTime(),
                            a = function() {
                                if (this.inAnimation) {
                                    var r = (new Date).getTime() - s,
                                    l = r / t;
                                    r >= t ? (i(1), o && o(), this.update(), this.stopAnimation(), this.update()) : (n && (l = n(l)), i(l), this.update(), setTimeout(a, e))
                                }
                            }.bind(this);
                            this.inAnimation = !0,
                            a()
                        },
                        stopAnimation: function() {
                            this.inAnimation = !1
                        },
                        swing: function(t) {
                            return - Math.cos(t * Math.PI) / 2 + .5
                        },
                        getContainerX: function() {
                            return window.innerWidth
                        },
                        getContainerY: function() {
                            return window.innerHeight
                        },
                        setContainerY: function(t) {
                            var e = window.innerHeight;
                            return this.el.css({
                                height: e
                            }),
                            this.container.height(e)
                        },
                        setupMarkup: function() {
                            this.container = t('<div class="pinch-zoom-container"></div>'),
                            this.el.before(this.container),
                            this.container.append(this.el),
                            this.container.css({
                                overflow: "hidden",
                                position: "relative"
                            }),
                            this.el.css({
                                "-webkit-transform-origin": "0% 0%",
                                "-moz-transform-origin": "0% 0%",
                                "-ms-transform-origin": "0% 0%",
                                "-o-transform-origin": "0% 0%",
                                "transform-origin": "0% 0%",
                                position: "absolute"
                            })
                        },
                        end: function() {
                            this.hasInteraction = !1,
                            this.sanitize(),
                            this.update()
                        },
                        bindEvents: function() {
                            o(this.container.get(0), this),
                            t(window).on("resize", this.update.bind(this)),
                            t(this.el).find("img").on("load", this.update.bind(this))
                        },
                        update: function() {
                            this.updatePlaned || (this.updatePlaned = !0, setTimeout(function() {
                                this.updatePlaned = !1,
                                this.updateAspectRatio();
                                var t = this.getInitialZoomFactor() * this.zoomFactor,
                                e = -this.offset.x / t,
                                i = -this.offset.y / t,
                                n = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + i + "px,0px)",
                                o = "scale(" + t + ", " + t + ") translate(" + e + "px," + i + "px)",
                                s = function() {
                                    this.clone && (this.clone.remove(), delete this.clone)
                                }.bind(this); ! this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0, s(), this.el.css({
                                    "-webkit-transform": n,
                                    "-o-transform": o,
                                    "-ms-transform": o,
                                    "-moz-transform": o,
                                    transform: n
                                })) : (this.is3d && (this.clone = this.el.clone(), this.clone.css("pointer-events", "none"), this.clone.appendTo(this.container), setTimeout(s, 200)), this.el.css({
                                    "-webkit-transform": o,
                                    "-o-transform": o,
                                    "-ms-transform": o,
                                    "-moz-transform": o,
                                    transform: o
                                }), this.is3d = !1)
                            }.bind(this), 0))
                        },
                        enable: function() {
                            this.enabled = !0
                        },
                        disable: function() {
                            this.enabled = !1
                        }
                    };
                    var o = function(t, e) {
                        var i = null,
                        n = 0,
                        o = null,
                        s = null,
                        a = function(t, n) {
                            if (i !== t) {
                                if (i && !t) switch (i) {
                                case "zoom":
                                    e.handleZoomEnd(n);
                                    break;
                                case "drag":
                                    e.handleDragEnd(n)
                                }
                                switch (t) {
                                case "zoom":
                                    e.handleZoomStart(n);
                                    break;
                                case "drag":
                                    e.handleDragStart(n)
                                }
                            }
                            i = t
                        },
                        r = function(t) {
                            2 === n ? a("zoom") : 1 === n && e.canDrag() ? a("drag", t) : a(null, t)
                        },
                        l = function(t) {
                            return Array.prototype.slice.call(t).map(function(t) {
                                return {
                                    x: t.pageX,
                                    y: t.pageY
                                }
                            })
                        },
                        d = function(t, e) {
                            var i, n;
                            return i = t.x - e.x,
                            n = t.y - e.y,
                            Math.sqrt(i * i + n * n)
                        },
                        u = function(t, e) {
                            var i = d(t[0], t[1]),
                            n = d(e[0], e[1]);
                            return n / i
                        },
                        c = function(t) {
                            t.stopPropagation(),
                            t.preventDefault()
                        },
                        h = function(t) {
                            var s = (new Date).getTime();
                            if (n > 1 && (o = null), 300 > s - o) switch (c(t), e.handleDoubleTap(t), i) {
                            case "zoom":
                                e.handleZoomEnd(t);
                                break;
                            case "drag":
                                e.handleDragEnd(t)
                            }
                            1 === n && (o = s)
                        },
                        p = !0;
                        t.addEventListener("touchstart",
                        function(t) {
                            e.enabled && (p = !0, n = t.touches.length, h(t))
                        }),
                        t.addEventListener("touchmove",
                        function(t) {
                            if (e.enabled) {
                                if (p) r(t),
                                i && c(t),
                                s = l(t.touches);
                                else {
                                    switch (i) {
                                    case "zoom":
                                        e.handleZoom(t, u(s, l(t.touches)));
                                        break;
                                    case "drag":
                                        e.handleDrag(t)
                                    }
                                    i && (c(t), e.update())
                                }
                                p = !1
                            }
                        }),
                        t.addEventListener("touchend",
                        function(t) {
                            e.enabled && (n = t.touches.length, r(t))
                        })
                    };
                    return e
                });
                n.AMUI.pichzoom = o(n),
                e.exports = o(n)
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        15 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.popover"),
                        n = o.extend({},
                        s.utils.parseOptions(e.attr("data-am-popover")), "object" == typeof t && t);
                        i || e.data("amui.popover", i = new r(this, n)),
                        "string" == typeof t && i[t] && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = o(window),
                r = function(t, e) {
                    this.options = o.extend({},
                    r.DEFAULTS, e || {}),
                    this.$element = o(t),
                    this.active = null,
                    this.$popover = this.options.target && o(this.options.target) || null,
                    this.init(),
                    this.events()
                };
                r.DEFAULTS = {
                    theme: void 0,
                    trigger: "click",
                    content: "",
                    open: !1,
                    target: void 0,
                    tpl: '<div class="am-popover"><div class="am-popover-inner"></div><div class="am-popover-caret"></div></div>'
                },
                r.prototype.init = function() {
                    function t() {
                        i.sizePopover()
                    }
                    var e, i = this,
                    n = this.$element;
                    this.options.target || (this.$popover = this.getPopover(), this.setContent()),
                    e = this.$popover,
                    e.appendTo(o("body")),
                    this.sizePopover(),
                    n.on("open.popover.amui",
                    function() {
                        o(window).on("resize.popover.amui", s.utils.debounce(t, 50))
                    }),
                    n.on("close.popover.amui",
                    function() {
                        o(window).off("resize.popover.amui", t)
                    }),
                    this.options.open && this.open()
                },
                r.prototype.sizePopover = function() {
                    var t = this.$element,
                    e = this.$popover;
                    if (e && e.length) {
                        var i = e.outerWidth(),
                        n = e.outerHeight(),
                        o = e.find(".am-popover-caret"),
                        s = o.outerWidth() / 2 || 8,
                        r = n + 8,
                        l = t.outerWidth(),
                        d = t.outerHeight(),
                        u = t.offset(),
                        c = t[0].getBoundingClientRect(),
                        h = a.height(),
                        p = a.width(),
                        f = 0,
                        m = 0,
                        v = 0,
                        g = 2,
                        w = "top";
                        e.css({
                            left: "",
                            top: ""
                        }).removeClass("am-popover-left am-popover-right am-popover-top am-popover-bottom"),
                        r - g < c.top + g ? f = u.top - r - g: r < h - c.top - c.height ? (w = "bottom", f = u.top + d + s + g) : (w = "middle", f = d / 2 + u.top - n / 2),
                        "top" === w || "bottom" === w ? (m = l / 2 + u.left - i / 2, v = m, 5 > m && (m = 5), m + i > p && (m = p - i - 20), "top" === w && e.addClass("am-popover-top"), "bottom" === w && e.addClass("am-popover-bottom"), v -= m) : "middle" === w && (m = u.left - i - s, e.addClass("am-popover-left"), 5 > m && (m = u.left + l + s, e.removeClass("am-popover-left").addClass("am-popover-right")), m + i > p && (m = p - i - 5, e.removeClass("am-popover-left").addClass("am-popover-right"))),
                        e.css({
                            top: f + "px",
                            left: m + "px"
                        })
                    }
                },
                r.prototype.toggle = function() {
                    return this[this.active ? "close": "open"]()
                },
                r.prototype.open = function() {
                    var t = this.$popover;
                    this.$element.trigger("open.popover.amui"),
                    this.sizePopover(),
                    t.show().addClass("am-active"),
                    this.active = !0
                },
                r.prototype.close = function() {
                    var t = this.$popover;
                    this.$element.trigger("close.popover.amui"),
                    t.removeClass("am-active").trigger("closed.popover.amui").hide(),
                    this.active = !1
                },
                r.prototype.getPopover = function() {
                    var t = s.utils.generateGUID("am-popover"),
                    e = [];
                    return this.options.theme && o.each(this.options.theme.split(","),
                    function(t, i) {
                        e.push("am-popover-" + o.trim(i))
                    }),
                    o(this.options.tpl).attr("id", t).addClass(e.join(" "))
                },
                r.prototype.setContent = function(t) {
                    t = t || this.options.content,
                    this.$popover && this.$popover.find(".am-popover-inner").empty().html(t)
                },
                r.prototype.events = function() {
                    for (var t = "popover.amui",
                    e = this.options.trigger.split(" "), i = e.length; i--;) {
                        var n = e[i];
                        if ("click" === n) this.$element.on("click." + t, o.proxy(this.toggle, this));
                        else {
                            var s = "hover" == n ? "mouseenter": "focusin",
                            a = "hover" == n ? "mouseleave": "focusout";
                            this.$element.on(s + "." + t, o.proxy(this.open, this)),
                            this.$element.on(a + "." + t, o.proxy(this.close, this))
                        }
                    }
                },
                o.fn.popover = n,
                s.ready(function(t) {
                    o("[data-am-popover]", t).popover()
                }),
                o.AMUI.popover = r,
                e.exports = r
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        16 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = (t(2),
                function() {
                    function t(t, e, i) {
                        return e > t ? e: t > i ? i: t
                    }
                    function e(t) {
                        return 100 * ( - 1 + t)
                    }
                    function i(t, i, n) {
                        var o;
                        return o = "translate3d" === a.positionUsing ? {
                            transform: "translate3d(" + e(t) + "%,0,0)"
                        }: "translate" === a.positionUsing ? {
                            transform: "translate(" + e(t) + "%,0)"
                        }: {
                            "margin-left": e(t) + "%"
                        },
                        o.transition = "all " + i + "ms " + n,
                        o
                    }
                    var o = {},
                    s = n("html");
                    o.version = "0.1.6";
                    var a = o.settings = {
                        minimum: .08,
                        easing: "ease",
                        positionUsing: "",
                        speed: 200,
                        trickle: !0,
                        trickleRate: .02,
                        trickleSpeed: 800,
                        showSpinner: !0,
                        parent: "body",
                        barSelector: '[role="nprogress-bar"]',
                        spinnerSelector: '[role="nprogress-spinner"]',
                        template: '<div class="nprogress-bar" role="nprogress-bar"><div class="nprogress-peg"></div></div><div class="nprogress-spinner" role="nprogress-spinner"><div class="nprogress-spinner-icon"></div></div>'
                    };
                    o.configure = function(t) {
                        var e, i;
                        for (e in t) i = t[e],
                        void 0 !== i && t.hasOwnProperty(e) && (a[e] = i);
                        return this
                    },
                    o.status = null,
                    o.set = function(e) {
                        var n = o.isStarted();
                        e = t(e, a.minimum, 1),
                        o.status = 1 === e ? null: e;
                        var s = o.render(!n),
                        d = s.querySelector(a.barSelector),
                        u = a.speed,
                        c = a.easing;
                        return s.offsetWidth,
                        r(function(t) {
                            "" === a.positionUsing && (a.positionUsing = o.getPositioningCSS()),
                            l(d, i(e, u, c)),
                            1 === e ? (l(s, {
                                transition: "none",
                                opacity: 1
                            }), s.offsetWidth, setTimeout(function() {
                                l(s, {
                                    transition: "all " + u + "ms linear",
                                    opacity: 0
                                }),
                                setTimeout(function() {
                                    o.remove(),
                                    t()
                                },
                                u)
                            },
                            u)) : setTimeout(t, u)
                        }),
                        this
                    },
                    o.isStarted = function() {
                        return "number" == typeof o.status
                    },
                    o.start = function() {
                        o.status || o.set(0);
                        var t = function() {
                            setTimeout(function() {
                                o.status && (o.trickle(), t())
                            },
                            a.trickleSpeed)
                        };
                        return a.trickle && t(),
                        this
                    },
                    o.done = function(t) {
                        return t || o.status ? o.inc(.3 + .5 * Math.random()).set(1) : this
                    },
                    o.inc = function(e) {
                        var i = o.status;
                        return i ? ("number" != typeof e && (e = (1 - i) * t(Math.random() * i, .1, .95)), i = t(i + e, 0, .994), o.set(i)) : o.start()
                    },
                    o.trickle = function() {
                        return o.inc(Math.random() * a.trickleRate)
                    },
                    o.render = function(t) {
                        if (o.isRendered()) return document.getElementById("nprogress");
                        s.addClass("nprogress-busy");
                        var i = document.createElement("div");
                        i.id = "nprogress",
                        i.innerHTML = a.template;
                        var r, d = i.querySelector(a.barSelector),
                        u = t ? "-100": e(o.status || 0),
                        c = document.querySelector(a.parent);
                        return l(d, {
                            transition: "all 0 linear",
                            transform: "translate3d(" + u + "%,0,0)"
                        }),
                        a.showSpinner || (r = i.querySelector(a.spinnerSelector), r && n(r).remove()),
                        c != document.body && n(c).addClass("nprogress-custom-parent"),
                        c.appendChild(i),
                        i
                    },
                    o.remove = function() {
                        s.removeClass("nprogress-busy"),
                        n(a.parent).removeClass("nprogress-custom-parent");
                        var t = document.getElementById("nprogress");
                        t && n(t).remove()
                    },
                    o.isRendered = function() {
                        return !! document.getElementById("nprogress")
                    },
                    o.getPositioningCSS = function() {
                        var t = document.body.style,
                        e = "WebkitTransform" in t ? "Webkit": "MozTransform" in t ? "Moz": "msTransform" in t ? "ms": "OTransform" in t ? "O": "";
                        return e + "Perspective" in t ? "translate3d": e + "Transform" in t ? "translate": "margin"
                    };
                    var r = function() {
                        function t() {
                            var i = e.shift();
                            i && i(t)
                        }
                        var e = [];
                        return function(i) {
                            e.push(i),
                            1 == e.length && t()
                        }
                    } (),
                    l = function() {
                        function t(t) {
                            return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi,
                            function(t, e) {
                                return e.toUpperCase()
                            })
                        }
                        function e(t) {
                            var e = document.body.style;
                            if (t in e) return t;
                            for (var i, n = o.length,
                            s = t.charAt(0).toUpperCase() + t.slice(1); n--;) if (i = o[n] + s, i in e) return i;
                            return t
                        }
                        function i(i) {
                            return i = t(i),
                            s[i] || (s[i] = e(i))
                        }
                        function n(t, e, n) {
                            e = i(e),
                            t.style[e] = n
                        }
                        var o = ["Webkit", "O", "Moz", "ms"],
                        s = {};
                        return function(t, e) {
                            var i, o, s = arguments;
                            if (2 == s.length) for (i in e) o = e[i],
                            void 0 !== o && e.hasOwnProperty(i) && n(t, i, o);
                            else n(t, s[1], s[2])
                        }
                    } ();
                    return o
                } ());
                n.AMUI.progress = o,
                e.exports = o
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        17 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.pureview"),
                        n = o.extend({},
                        s.utils.parseOptions(e.data("amPureview")), "object" == typeof t && t);
                        i || e.data("amui.pureview", i = new u(this, n)),
                        "string" == typeof t && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = t(14),
                r = t(30),
                l = s.support.animation,
                d = s.support.transition,
                u = function(t, e) {
                    this.$element = o(t),
                    this.$body = o(document.body),
                    this.options = o.extend({},
                    u.DEFAULTS, e),
                    this.$pureview = o(this.options.tpl).attr("id", s.utils.generateGUID("am-pureview")),
                    this.$slides = null,
                    this.transitioning = null,
                    this.scrollbarWidth = 0,
                    this.init()
                };
                u.DEFAULTS = {
                    tpl: '<div class="am-pureview am-pureview-bar-active"><ul class="am-pureview-slider"></ul><ul class="am-pureview-direction"><li class="am-pureview-prev"><a href=""></a></li><li class="am-pureview-next"><a href=""></a></li></ul><ol class="am-pureview-nav"></ol><div class="am-pureview-bar am-active"><span class="am-pureview-title"></span><div class="am-pureview-counter"><span class="am-pureview-current"></span> / <span class="am-pureview-total"></span></div></div><div class="am-pureview-actions am-active"><a href="javascript: void(0)" class="am-icon-chevron-left" data-am-close="pureview"></a></div></div>',
                    className: {
                        prevSlide: "am-pureview-slide-prev",
                        nextSlide: "am-pureview-slide-next",
                        onlyOne: "am-pureview-only",
                        active: "am-active",
                        barActive: "am-pureview-bar-active",
                        activeBody: "am-pureview-active"
                    },
                    selector: {
                        slider: ".am-pureview-slider",
                        close: '[data-am-close="pureview"]',
                        total: ".am-pureview-total",
                        current: ".am-pureview-current",
                        title: ".am-pureview-title",
                        actions: ".am-pureview-actions",
                        bar: ".am-pureview-bar",
                        pinchZoom: ".am-pinch-zoom",
                        nav: ".am-pureview-nav"
                    },
                    shareBtn: !1,
                    toggleToolbar: !0,
                    target: "img",
                    weChatImagePreview: !0
                },
                u.prototype.init = function() {
                    var t = this,
                    e = this.options,
                    i = this.$element,
                    n = this.$pureview;
                    this.refreshSlides(),
                    o("body").append(n),
                    this.$title = n.find(e.selector.title),
                    this.$current = n.find(e.selector.current),
                    this.$bar = n.find(e.selector.bar),
                    this.$actions = n.find(e.selector.actions),
                    e.shareBtn && this.$actions.append('<a href="javascript: void(0)" class="am-icon-share-square-o" data-am-toggle="share"></a>'),
                    this.$element.on("click.pureview.amui", e.target,
                    function(i) {
                        i.preventDefault();
                        var n = t.$images.index(this);
                        e.weChatImagePreview && window.WeixinJSBridge ? window.WeixinJSBridge.invoke("imagePreview", {
                            current: t.imgUrls[n],
                            urls: t.imgUrls
                        }) : t.open(n)
                    }),
                    n.find(".am-pureview-direction").on("click.direction.pureview.amui", "li",
                    function(e) {
                        e.preventDefault(),
                        o(this).is(".am-pureview-prev") ? t.prevSlide() : t.nextSlide()
                    }),
                    n.find(e.selector.nav).on("click.nav.pureview.amui", "li",
                    function() {
                        var e = t.$navItems.index(o(this));
                        t.activate(t.$slides.eq(e))
                    }),
                    n.find(e.selector.close).on("click.close.pureview.amui",
                    function(e) {
                        e.preventDefault(),
                        t.close()
                    }),
                    this.$slider.hammer().on("swipeleft.pureview.amui",
                    function(e) {
                        e.preventDefault(),
                        t.nextSlide()
                    }).on("swiperight.pureview.amui",
                    function(e) {
                        e.preventDefault(),
                        t.prevSlide()
                    }).on("press.pureview.amui",
                    function(i) {
                        i.preventDefault(),
                        e.toggleToolbar && t.toggleToolBar()
                    }),
                    this.$slider.data("hammer").get("swipe").set({
                        direction: r.DIRECTION_HORIZONTAL,
                        velocity: .35
                    }),
                    i.DOMObserve({
                        childList: !0,
                        subtree: !0
                    },
                    function(t, e) {}),
                    i.on("changed.dom.amui",
                    function(e) {
                        e.stopPropagation(),
                        t.refreshSlides()
                    }),
                    o(document).on("keydown.pureview.amui", o.proxy(function(t) {
                        var e = t.keyCode;
                        37 == e ? this.prevSlide() : 39 == e ? this.nextSlide() : 27 == e && this.close()
                    },
                    this))
                },
                u.prototype.refreshSlides = function() {
                    this.$images = this.$element.find(this.options.target);
                    var t = this,
                    e = this.options,
                    i = this.$pureview,
                    n = o([]),
                    s = o([]),
                    a = this.$images,
                    r = a.length;
                    this.$slider = i.find(e.selector.slider),
                    this.$nav = i.find(e.selector.nav);
                    var l = "data-am-pureviewed";
                    this.imgUrls = this.imgUrls || [],
                    r && (1 === r && i.addClass(e.className.onlyOne), a.not("[" + l + "]").each(function(e, i) {
                        var a, r;
                        "A" === i.nodeName ? (a = i.href, r = i.title || "") : (a = o(i).data("rel") || i.src, r = o(i).attr("alt") || ""),
                        i.setAttribute(l, "1"),
                        t.imgUrls.push(a),
                        n = n.add(o('<li data-src="' + a + '" data-title="' + r + '"></li>')),
                        s = s.add(o("<li>" + (e + 1) + "</li>"))
                    }), i.find(e.selector.total).text(r), this.$slider.append(n), this.$nav.append(s), this.$navItems = this.$nav.find("li"), this.$slides = this.$slider.find("li"))
                },
                u.prototype.loadImage = function(t, e) {
                    var i = "image-appended";
                    if (!t.data(i)) {
                        var n = o("<img>", {
                            src: t.data("src"),
                            alt: t.data("title")
                        });
                        t.html(n).wrapInner('<div class="am-pinch-zoom"></div>').redraw();
                        var s = t.find(this.options.selector.pinchZoom);
                        s.data("amui.pinchzoom", new a(s[0], {})),
                        t.data("image-appended", !0)
                    }
                    e && e.call(this)
                },
                u.prototype.activate = function(t) {
                    var e = this.options,
                    i = this.$slides,
                    n = i.index(t),
                    a = t.data("title") || "",
                    r = e.className.active;
                    i.find("." + r).is(t) || this.transitioning || (this.loadImage(t,
                    function() {
                        s.utils.imageLoader(t.find("img"),
                        function(t) {
                            o(t).addClass("am-img-loaded")
                        })
                    }), this.transitioning = 1, this.$title.text(a), this.$current.text(n + 1), i.removeClass(), t.addClass(r), i.eq(n - 1).addClass(e.className.prevSlide), i.eq(n + 1).addClass(e.className.nextSlide), this.$navItems.removeClass().eq(n).addClass(e.className.active), d ? t.one(d.end, o.proxy(function() {
                        this.transitioning = 0
                    },
                    this)).emulateTransitionEnd(300) : this.transitioning = 0)
                },
                u.prototype.nextSlide = function() {
                    if (1 !== this.$slides.length) {
                        var t = this.$slides,
                        e = t.filter(".am-active"),
                        i = t.index(e),
                        n = "am-animation-right-spring";
                        i + 1 >= t.length ? l && e.addClass(n).on(l.end,
                        function() {
                            e.removeClass(n)
                        }) : this.activate(t.eq(i + 1))
                    }
                },
                u.prototype.prevSlide = function() {
                    if (1 !== this.$slides.length) {
                        var t = this.$slides,
                        e = t.filter(".am-active"),
                        i = this.$slides.index(e),
                        n = "am-animation-left-spring";
                        0 === i ? l && e.addClass(n).on(l.end,
                        function() {
                            e.removeClass(n)
                        }) : this.activate(t.eq(i - 1))
                    }
                },
                u.prototype.toggleToolBar = function() {
                    this.$pureview.toggleClass(this.options.className.barActive)
                },
                u.prototype.open = function(t) {
                    var e = t || 0;
                    this.checkScrollbar(),
                    this.setScrollbar(),
                    this.activate(this.$slides.eq(e)),
                    this.$pureview.show().redraw().addClass(this.options.className.active),
                    this.$body.addClass(this.options.className.activeBody)
                },
                u.prototype.close = function() {
                    function t() {
                        this.$pureview.hide(),
                        this.$body.removeClass(e.className.activeBody),
                        this.resetScrollbar()
                    }
                    var e = this.options;
                    this.$pureview.removeClass(e.className.active),
                    this.$slides.removeClass(),
                    d ? this.$pureview.one(d.end, o.proxy(t, this)).emulateTransitionEnd(300) : t.call(this)
                },
                u.prototype.checkScrollbar = function() {
                    this.scrollbarWidth = s.utils.measureScrollbar()
                },
                u.prototype.setScrollbar = function() {
                    var t = parseInt(this.$body.css("padding-right") || 0, 10);
                    this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
                },
                u.prototype.resetScrollbar = function() {
                    this.$body.css("padding-right", "")
                },
                o.fn.pureview = n,
                s.ready(function(t) {
                    o("[data-am-pureview]", t).pureview()
                }),
                o.AMUI.pureview = u,
                e.exports = u
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            14 : 14,
            2 : 2,
            30 : 30
        }],
        18 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("am.scrollspy"),
                        n = "object" == typeof t && t;
                        i || e.data("am.scrollspy", i = new a(this, n)),
                        "string" == typeof t && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = function(t, e) {
                    if (s.support.animation) {
                        this.options = o.extend({},
                        a.DEFAULTS, e),
                        this.$element = o(t);
                        var i = function() {
                            s.utils.rAF.call(window, o.proxy(this.checkView, this))
                        }.bind(this);
                        this.$window = o(window).on("scroll.scrollspy.amui", i).on("resize.scrollspy.amui orientationchange.scrollspy.amui", s.utils.debounce(i, 50)),
                        this.timer = this.inViewState = this.initInView = null,
                        i()
                    }
                };
                a.DEFAULTS = {
                    animation: "fade",
                    className: {
                        inView: "am-scrollspy-inview",
                        init: "am-scrollspy-init"
                    },
                    repeat: !0,
                    delay: 0,
                    topOffset: 0,
                    leftOffset: 0
                },
                a.prototype.checkView = function() {
                    var t = this.$element,
                    e = this.options,
                    i = s.utils.isInView(t, e),
                    n = e.animation ? " am-animation-" + e.animation: "";
                    i && !this.inViewState && (this.timer && clearTimeout(this.timer), this.initInView || (t.addClass(e.className.init), this.offset = t.offset(), this.initInView = !0, t.trigger("init.scrollspy.amui")), this.timer = setTimeout(function() {
                        i && t.addClass(e.className.inView + n).width()
                    },
                    e.delay), this.inViewState = !0, t.trigger("inview.scrollspy.amui")),
                    !i && this.inViewState && e.repeat && (t.removeClass(e.className.inView + n), this.inViewState = !1, t.trigger("outview.scrollspy.amui"))
                },
                a.prototype.check = function() {
                    s.utils.rAF.call(window, o.proxy(this.checkView, this))
                },
                o.fn.scrollspy = n,
                s.ready(function(t) {
                    o("[data-am-scrollspy]", t).each(function() {
                        var t = o(this),
                        e = s.utils.options(t.data("amScrollspy"));
                        t.scrollspy(e)
                    })
                }),
                o.AMUI.scrollspy = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        19 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.scrollspynav"),
                        n = "object" == typeof t && t;
                        i || e.data("amui.scrollspynav", i = new a(this, n)),
                        "string" == typeof t && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2);
                t(22);
                var a = function(t, e) {
                    this.options = o.extend({},
                    a.DEFAULTS, e),
                    this.$element = o(t),
                    this.anchors = [],
                    this.$links = this.$element.find('a[href^="#"]').each(function(t, e) {
                        this.anchors.push(o(e).attr("href"))
                    }.bind(this)),
                    this.$targets = o(this.anchors.join(", "));
                    var i = function() {
                        s.utils.rAF.call(window, o.proxy(this.process, this))
                    }.bind(this);
                    this.$window = o(window).on("scroll.scrollspynav.amui", i).on("resize.scrollspynav.amui orientationchange.scrollspynav.amui", s.utils.debounce(i, 50)),
                    i(),
                    this.scrollProcess()
                };
                a.DEFAULTS = {
                    className: {
                        active: "am-active"
                    },
                    closest: !1,
                    smooth: !0,
                    offsetTop: 0
                },
                a.prototype.process = function() {
                    var t = this.$window.scrollTop(),
                    e = this.options,
                    i = [],
                    n = this.$links,
                    a = this.$targets;
                    if (a.each(function(t, n) {
                        s.utils.isInView(n, e) && i.push(n)
                    }), i.length) {
                        var r;
                        if (o.each(i,
                        function(e, i) {
                            return o(i).offset().top >= t ? (r = o(i), !1) : void 0
                        }), !r) return;
                        e.closest ? (n.closest(e.closest).removeClass(e.className.active), n.filter('a[href="#' + r.attr("id") + '"]').closest(e.closest).addClass(e.className.active)) : n.removeClass(e.className.active).filter('a[href="#' + r.attr("id") + '"]').addClass(e.className.active)
                    }
                },
                a.prototype.scrollProcess = function() {
                    var t = this.$links,
                    e = this.options;
                    e.smooth && t.on("click",
                    function(t) {
                        t.preventDefault();
                        var i = o(this),
                        n = o(i.attr("href"));
                        if (n) {
                            var s = e.offsetTop && !isNaN(parseInt(e.offsetTop)) && parseInt(e.offsetTop) || 0;
                            o(window).smoothScroll({
                                position: n.offset().top - s
                            })
                        }
                    })
                },
                o.fn.scrollspynav = n,
                s.ready(function(t) {
                    o("[data-am-scrollspy-nav]", t).each(function() {
                        var t = o(this),
                        e = s.utils.options(t.data("amScrollspyNav"));
                        n.call(t, e)
                    })
                }),
                o.AMUI.scrollspynav = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2,
            22 : 22
        }],
        20 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.selected"),
                        n = o.extend({},
                        s.utils.parseOptions(e.data("amSelected")), s.utils.parseOptions(e.data("amSelectit")), "object" == typeof t && t); (i || "destroy" !== t) && (i || e.data("amui.selected", i = new a(this, n)), "string" == typeof t && i[t] && i[t]())
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2);
                o.expr[":"].containsNC = function(t, e, i, n) {
                    return (t.textContent || t.innerText || "").toLowerCase().indexOf((i[3] || "").toLowerCase()) >= 0
                };
                var a = function(t, e) {
                    this.$element = o(t),
                    this.options = o.extend({},
                    a.DEFAULTS, e),
                    this.$originalOptions = this.$element.find("option"),
                    this.multiple = t.multiple,
                    this.$selector = null,
                    this.init()
                };
                a.DEFAULTS = {
                    btnWidth: null,
                    btnSize: null,
                    btnStyle: "default",
                    dropUp: 0,
                    maxHeight: null,
                    noSelectedText: "\u70b9\u51fb\u9009\u62e9...",
                    selectedClass: "am-checked",
                    disabledClass: "am-disabled",
                    searchBox: !1,
                    tpl: '<div class="am-selected am-dropdown <%= dropUp ? \'am-dropdown-up\': \'\' %>" id="<%= id %>" data-am-dropdown>  <button type="button" class="am-selected-btn am-btn am-dropdown-toggle">    <span class="am-selected-status am-fl"></span>    <i class="am-selected-icon am-icon-caret-<%= dropUp ? \'up\' : \'down\' %>"></i>  </button>  <div class="am-selected-content am-dropdown-content">    <h2 class="am-selected-header"><span class="am-icon-chevron-left">\u8fd4\u56de</span></h2>   <% if (searchBox) { %>   <div class="am-selected-search">     <input type="text" autocomplete="off" class="am-form-field" />   </div>   <% } %>    <ul class="am-selected-list">      <% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames%>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>    </ul>    <div class="am-selected-hint"></div>  </div></div>',
                    listTpl: '<% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames %>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>'
                },
                a.prototype.init = function() {
                    var t = this,
                    e = this.$element,
                    i = this.options;
                    e.hide();
                    var n = {
                        id: s.utils.generateGUID("am-selected"),
                        multiple: this.multiple,
                        options: [],
                        searchBox: i.searchBox,
                        dropUp: i.dropUp
                    };
                    this.$selector = o(s.template(this.options.tpl, n)),
                    this.$list = this.$selector.find(".am-selected-list"),
                    this.$searchField = this.$selector.find(".am-selected-search input"),
                    this.$hint = this.$selector.find(".am-selected-hint");
                    var a = this.$selector.find(".am-selected-btn").css({
                        width: this.options.btnWidth
                    }),
                    r = [];
                    i.btnSize && r.push("am-btn-" + i.btnSize),
                    i.btnStyle && r.push("am-btn-" + i.btnStyle),
                    a.addClass(r.join(" ")),
                    this.$selector.dropdown({
                        justify: a
                    }),
                    i.maxHeight && this.$selector.find(".am-selected-list").css({
                        "max-height": i.maxHeight,
                        "overflow-y": "scroll"
                    });
                    var l = [],
                    d = e.attr("minchecked"),
                    u = e.attr("maxchecked");
                    e[0].required && l.push("\u5fc5\u9009"),
                    (d || u) && (d && l.push("\u81f3\u5c11\u9009\u62e9 " + d + " \u9879"), u && l.push("\u81f3\u591a\u9009\u62e9 " + u + " \u9879")),
                    this.$hint.text(l.join("\uff0c")),
                    this.renderOptions(),
                    this.$element.after(this.$selector),
                    this.dropdown = this.$selector.data("amui.dropdown"),
                    this.$status = this.$selector.find(".am-selected-status"),
                    setTimeout(function() {
                        t.syncData()
                    },
                    0),
                    this.bindEvents()
                },
                a.prototype.renderOptions = function() {
                    function t(t, e, o) {
                        var s = "";
                        e.disabled && (s += i.disabledClass),
                        !e.disabled && e.selected && (s += i.selectedClass),
                        n.push({
                            group: o,
                            index: t,
                            classNames: s,
                            text: e.text,
                            value: e.value
                        })
                    }
                    var e = this.$element,
                    i = this.options,
                    n = [],
                    o = e.find("optgroup");
                    this.$originalOptions = this.$element.find("option"),
                    this.multiple || null !== e.val() || (this.$originalOptions.get(0).selected = !0),
                    o.length ? o.each(function(e) {
                        n.push({
                            header: !0,
                            group: e + 1,
                            text: this.label
                        }),
                        o.eq(e).find("option").each(function(i, n) {
                            t(i, n, e)
                        })
                    }) : this.$originalOptions.each(function(e, i) {
                        t(e, i, null)
                    }),
                    this.$list.html(s.template(i.listTpl, {
                        options: n
                    })),
                    this.$shadowOptions = this.$list.find("> li").not(".am-selected-list-header")
                },
                a.prototype.setChecked = function(t) {
                    var e = this.options,
                    i = o(t),
                    n = i.hasClass(e.selectedClass);
                    if (!this.multiple) {
                        if (n) return;
                        this.dropdown.close(),
                        this.$shadowOptions.not(i).removeClass(e.selectedClass)
                    }
                    i.toggleClass(e.selectedClass),
                    this.syncData(t)
                },
                a.prototype.syncData = function(t) {
                    var e = this,
                    i = this.options,
                    n = [],
                    s = o([]);
                    if (this.$shadowOptions.filter("." + i.selectedClass).each(function() {
                        var i = o(this);
                        n.push(i.find(".am-selected-text").text()),
                        t || (s = s.add(e.$originalOptions.filter('[value="' + i.data("value") + '"]').prop("selected", !0)))
                    }), t) {
                        var a = o(t);
                        this.$originalOptions.filter('[value="' + a.data("value") + '"]').prop("selected", a.hasClass(i.selectedClass))
                    } else this.$originalOptions.not(s).prop("selected", !1);
                    this.$element.val() || (n = [i.noSelectedText]),
                    this.$status.text(n.join(", ")),
                    this.$element.trigger("change")
                },
                a.prototype.bindEvents = function() {
                    var t = this,
                    e = "am-selected-list-header",
                    i = s.utils.debounce(function(i) {
                        t.$shadowOptions.not("." + e).hide().filter(':containsNC("' + i.target.value + '")').show()
                    },
                    100);
                    this.$list.on("click", "> li",
                    function(i) {
                        var n = o(this); ! n.hasClass(t.options.disabledClass) && !n.hasClass(e) && t.setChecked(this)
                    }),
                    this.$searchField.on("keyup.selected.amui", i),
                    this.$selector.on("closed.dropdown.amui",
                    function() {
                        t.$searchField.val(""),
                        t.$shadowOptions.css({
                            display: ""
                        })
                    }),
                    s.support.mutationobserver && (this.observer = new s.support.mutationobserver(function() {
                        t.$element.trigger("changed.selected.amui")
                    }), this.observer.observe(this.$element[0], {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        characterData: !0
                    })),
                    this.$element.on("changed.selected.amui",
                    function() {
                        t.renderOptions(),
                        t.syncData()
                    })
                },
                a.prototype.destroy = function() {
                    this.$element.removeData("amui.selected").show(),
                    this.$selector.remove()
                },
                o.fn.selected = o.fn.selectIt = n,
                s.ready(function(t) {
                    o("[data-am-selected]", t).selectIt()
                }),
                o.AMUI.selected = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        21 : [function(t, e, i) { (function(i) {
                "use strict";
                t(12);
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = t(2),
                s = t(31),
                a = document,
                r = n(a),
                l = function(t) {
                    this.options = n.extend({},
                    l.DEFAULTS, t || {}),
                    this.$element = null,
                    this.$wechatQr = null,
                    this.pics = null,
                    this.inited = !1,
                    this.active = !1
                };
                l.DEFAULTS = {
                    sns: ["weibo", "qq", "qzone", "tqq", "wechat", "renren"],
                    title: "\u5206\u4eab\u5230",
                    cancel: "\u53d6\u6d88",
                    closeOnShare: !0,
                    id: o.utils.generateGUID("am-share"),
                    desc: "Hi\uff0c\u5b64\u591c\u89c2\u5929\u8c61\uff0c\u53d1\u73b0\u4e00\u4e2a\u4e0d\u9519\u7684\u897f\u897f\uff0c\u5206\u4eab\u4e00\u4e0b\u4e0b ;-)",
                    via: "Amaze UI",
                    tpl: '<div class="am-share am-modal-actions" id="<%= id %>"><h3 class="am-share-title"><%= title %></h3><ul class="am-share-sns am-avg-sm-3"><% for(var i = 0; i < sns.length; i++) {%><li><a href="<%= sns[i].shareUrl %>" data-am-share-to="<%= sns[i].id %>" ><i class="am-icon-<%= sns[i].icon %>"></i><span><%= sns[i].title %></span></a></li><% } %></ul><div class="am-share-footer"><button class="am-btn am-btn-default am-btn-block" data-am-share-close><%= cancel %></button></div></div>'
                },
                l.SNS = {
                    weibo: {
                        title: "\u65b0\u6d6a\u5fae\u535a",
                        url: "http://service.weibo.com/share/share.php",
                        width: 620,
                        height: 450,
                        icon: "weibo"
                    },
                    qq: {
                        title: "QQ \u597d\u53cb",
                        url: "http://connect.qq.com/widget/shareqq/index.html",
                        icon: "qq"
                    },
                    qzone: {
                        title: "QQ \u7a7a\u95f4",
                        url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                        icon: "star"
                    },
                    tqq: {
                        title: "\u817e\u8baf\u5fae\u535a",
                        url: "http://v.t.qq.com/share/share.php",
                        icon: "tencent-weibo"
                    },
                    wechat: {
                        title: "\u5fae\u4fe1",
                        url: "[qrcode]",
                        icon: "wechat"
                    },
                    renren: {
                        title: "\u4eba\u4eba\u7f51",
                        url: "http://widget.renren.com/dialog/share",
                        icon: "renren"
                    },
                    douban: {
                        title: "\u8c46\u74e3",
                        url: "http://www.douban.com/recommend/",
                        icon: "share-alt"
                    },
                    mail: {
                        title: "\u90ae\u4ef6\u5206\u4eab",
                        url: "mailto:",
                        icon: "envelope-o"
                    },
                    sms: {
                        title: "\u77ed\u4fe1\u5206\u4eab",
                        url: "sms:",
                        icon: "comment"
                    }
                },
                l.prototype.render = function() {
                    var t = this.options,
                    e = [],
                    i = encodeURIComponent(a.title),
                    s = encodeURIComponent(a.location),
                    r = "?body=" + i + s;
                    return t.sns.forEach(function(n, o) {
                        if (l.SNS[n]) {
                            var a, d = l.SNS[n];
                            d.id = n,
                            a = "mail" === n ? r + "&subject=" + t.desc: "sms" === n ? r: "?url=" + s + "&title=" + i,
                            d.shareUrl = d.url + a,
                            e.push(d)
                        }
                    }),
                    o.template(t.tpl, n.extend({},
                    t, {
                        sns: e
                    }))
                },
                l.prototype.init = function() {
                    if (!this.inited) {
                        var t = this,
                        e = "[data-am-share-to]";
                        r.ready(n.proxy(function() {
                            n("body").append(this.render()),
                            this.$element = n("#" + this.options.id),
                            this.$element.find("[data-am-share-close]").on("click.share.amui",
                            function() {
                                t.close()
                            })
                        },
                        this)),
                        r.on("click.share.amui", e, n.proxy(function(t) {
                            var i = n(t.target),
                            o = i.is(e) && i || i.parent(e),
                            s = o.attr("data-am-share-to");
                            "mail" !== s && "sms" !== s && (t.preventDefault(), this.shareTo(s, this.setData(s))),
                            this.close()
                        },
                        this)),
                        this.inited = !0
                    }
                },
                l.prototype.open = function() { ! this.inited && this.init(),
                    this.$element && this.$element.modal("open"),
                    this.$element.trigger("open.share.amui"),
                    this.active = !0
                },
                l.prototype.close = function() {
                    this.$element && this.$element.modal("close"),
                    this.$element.trigger("close.share.amui"),
                    this.active = !1
                },
                l.prototype.toggle = function() {
                    this.active ? this.close() : this.open()
                },
                l.prototype.setData = function(t) {
                    if (t) {
                        var e = {
                            url: a.location,
                            title: a.title
                        },
                        i = this.options.desc,
                        n = this.pics || [],
                        o = /^(qzone|qq|tqq)$/;
                        if (o.test(t) && !n.length) {
                            for (var s = a.images,
                            r = 0; r < s.length && 10 > r; r++) !! s[r].src && n.push(encodeURIComponent(s[r].src));
                            this.pics = n
                        }
                        switch (t) {
                        case "qzone":
                            e.desc = i,
                            e.site = this.options.via,
                            e.pics = n.join("|");
                            break;
                        case "qq":
                            e.desc = i,
                            e.site = this.options.via,
                            e.pics = n[0];
                            break;
                        case "tqq":
                            e.pic = n.join("|")
                        }
                        return e
                    }
                },
                l.prototype.shareTo = function(t, e) {
                    var i = l.SNS[t];
                    if (i) {
                        if ("wechat" === t || "weixin" === t) return this.wechatQr();
                        var n = [];
                        for (var o in e) e[o] && n.push(o.toString() + "=" + ("pic" === o || "pics" === o ? e[o] : encodeURIComponent(e[o])));
                        window.open(i.url + "?" + n.join("&"))
                    }
                },
                l.prototype.wechatQr = function() {
                    if (!this.$wechatQr) {
                        var t = o.utils.generateGUID("am-share-wechat"),
                        e = n('<div class="am-modal am-modal-no-btn am-share-wechat-qr"><div class="am-modal-dialog"><div class="am-modal-hd">\u5206\u4eab\u5230\u5fae\u4fe1 <a href="" class="am-close am-close-spin" data-am-modal-close>&times;</a> </div><div class="am-modal-bd"><div class="am-share-wx-qr"></div><div class="am-share-wechat-tip">\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u5e95\u90e8\u7684<em>\u53d1\u73b0</em>\uff0c<br/> \u4f7f\u7528<em>\u626b\u4e00\u626b</em>\u5c06\u7f51\u9875\u5206\u4eab\u81f3\u670b\u53cb\u5708</div></div></div></div>');
                        e.attr("id", t);
                        var i = new s({
                            render: "canvas",
                            correctLevel: 0,
                            text: a.location.href,
                            width: 180,
                            height: 180,
                            background: "#fff",
                            foreground: "#000"
                        });
                        e.find(".am-share-wx-qr").html(i),
                        e.appendTo(n("body")),
                        this.$wechatQr = n("#" + t)
                    }
                    this.$wechatQr.modal("open")
                };
                var d = new l;
                r.on("click.share.amui.data-api", '[data-am-toggle="share"]',
                function(t) {
                    t.preventDefault(),
                    d.toggle()
                }),
                n.AMUI.share = d,
                e.exports = d
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            12 : 12,
            2 : 2,
            31 : 31
        }],
        22 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = t(2),
                s = o.utils.rAF,
                a = o.utils.cancelAF,
                r = !1,
                l = function(t, e) {
                    function i(t) {
                        return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                    }
                    function o() {
                        p.off("touchstart.smoothscroll.amui", y),
                        r = !1
                    }
                    function d(t) {
                        r && (u || (u = t), c = Math.min(1, Math.max((t - u) / w, 0)), h = Math.round(m + g * i(c)), g > 0 && h > f && (h = f), 0 > g && f > h && (h = f), v != h && p.scrollTop(h), v = h, h !== f ? (a(b), b = s(d)) : (a(b), o()))
                    }
                    e = e || {};
                    var u, c, h, p = n(t),
                    f = parseInt(e.position) || l.DEFAULTS.position,
                    m = p.scrollTop(),
                    v = m,
                    g = f - m,
                    w = e.speed || Math.min(750, Math.min(1500, Math.abs(m - f))),
                    y = function() {
                        o()
                    };
                    if (!r && 0 !== g) {
                        p.on("touchstart.smoothscroll.amui", y),
                        r = !0;
                        var b = s(d)
                    }
                };
                l.DEFAULTS = {
                    position: 0
                },
                n.fn.smoothScroll = function(t) {
                    return this.each(function() {
                        new l(this, t)
                    })
                },
                n(document).on("click.smoothScroll.amui.data-api", "[data-am-smooth-scroll]",
                function(t) {
                    t.preventDefault();
                    var e = o.utils.parseOptions(n(this).data("amSmoothScroll"));
                    n(window).smoothScroll(e)
                }),
                e.exports = l
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        23 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.sticky"),
                        n = "object" == typeof t && t;
                        i || e.data("amui.sticky", i = new a(this, n)),
                        "string" == typeof t && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = function(t, e) {
                    var i = this;
                    this.options = o.extend({},
                    a.DEFAULTS, e),
                    this.$element = o(t),
                    this.sticked = null,
                    this.inited = null,
                    this.$holder = void 0,
                    this.$window = o(window).on("scroll.sticky.amui", s.utils.debounce(o.proxy(this.checkPosition, this), 10)).on("resize.sticky.amui orientationchange.sticky.amui", s.utils.debounce(function() {
                        i.reset(!0,
                        function() {
                            i.checkPosition()
                        })
                    },
                    50)).on("load.sticky.amui", o.proxy(this.checkPosition, this)),
                    this.offset = this.$element.offset(),
                    this.init()
                };
                a.DEFAULTS = {
                    top: 0,
                    bottom: 0,
                    animation: "",
                    className: {
                        sticky: "am-sticky",
                        resetting: "am-sticky-resetting",
                        stickyBtm: "am-sticky-bottom",
                        animationRev: "am-animation-reverse"
                    }
                },
                a.prototype.init = function() {
                    var t = this.check();
                    if (!t) return ! 1;
                    var e = this.$element,
                    i = "";
                    o.each(e.css(["marginTop", "marginRight", "marginBottom", "marginLeft"]),
                    function(t, e) {
                        return i += " " + e
                    });
                    var n = o('<div class="am-sticky-placeholder"></div>').css({
                        height: "absolute" != e.css("position") ? e.outerHeight() : "",
                        "float": "none" != e.css("float") ? e.css("float") : "",
                        margin: i
                    });
                    return this.$holder = e.css("margin", 0).wrap(n).parent(),
                    this.inited = 1,
                    !0
                },
                a.prototype.reset = function(t, e) {
                    var i = this.options,
                    n = this.$element,
                    o = i.animation ? " am-animation-" + i.animation: "",
                    a = function() {
                        n.css({
                            position: "",
                            top: "",
                            width: "",
                            left: "",
                            margin: 0
                        }),
                        n.removeClass([o, i.className.animationRev, i.className.sticky, i.className.resetting].join(" ")),
                        this.animating = !1,
                        this.sticked = !1,
                        this.offset = n.offset(),
                        e && e()
                    }.bind(this);
                    n.addClass(i.className.resetting),
                    !t && i.animation && s.support.animation ? (this.animating = !0, n.removeClass(o).one(s.support.animation.end,
                    function() {
                        a()
                    }).width(), n.addClass(o + " " + i.className.animationRev)) : a()
                },
                a.prototype.check = function() {
                    if (!this.$element.is(":visible")) return ! 1;
                    var t = this.options.media;
                    if (t) switch (typeof t) {
                    case "number":
                        if (window.innerWidth < t) return ! 1;
                        break;
                    case "string":
                        if (window.matchMedia && !window.matchMedia(t).matches) return ! 1
                    }
                    return ! 0
                },
                a.prototype.checkPosition = function() {
                    if (!this.inited) {
                        var t = this.init();
                        if (!t) return
                    }
                    var e = this.options,
                    i = this.$window.scrollTop(),
                    n = e.top,
                    o = e.bottom,
                    s = this.$element,
                    a = e.animation ? " am-animation-" + e.animation: "",
                    r = [e.className.sticky, a].join(" ");
                    "function" == typeof o && (o = o(this.$element));
                    var l = i > this.$holder.offset().top; ! this.sticked && l ? s.addClass(r) : this.sticked && !l && this.reset(),
                    this.$holder.height(s.is(":visible") ? s.height() : 0),
                    l && s.css({
                        top: n,
                        left: this.$holder.offset().left,
                        width: this.$holder.width()
                    }),
                    this.sticked = l
                },
                o.fn.sticky = n,
                o(window).on("load",
                function() {
                    o("[data-am-sticky]").each(function() {
                        var t = o(this),
                        e = s.utils.options(t.attr("data-am-sticky"));
                        n.call(t, e)
                    })
                }),
                o.AMUI.sticky = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        24 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.is(".am-tabs") && e || e.closest(".am-tabs"),
                        n = i.data("amui.tabs"),
                        a = o.extend({},
                        o.isPlainObject(t) ? t: {},
                        s.utils.parseOptions(e.data("amTabs")));
                        n || i.data("amui.tabs", n = new d(i[0], a)),
                        "string" == typeof t && e.is(".am-tabs-nav a") && n[t](e)
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = t(30),
                r = s.support.transition,
                l = s.support.animation,
                d = function(t, e) {
                    this.$element = o(t),
                    this.options = o.extend({},
                    d.DEFAULTS, e || {}),
                    this.$tabNav = this.$element.find(this.options.selector.nav),
                    this.$navs = this.$tabNav.find("a"),
                    this.$content = this.$element.find(this.options.selector.content),
                    this.$tabPanels = this.$content.find(this.options.selector.panel),
                    this.transitioning = null,
                    this.init()
                };
                d.DEFAULTS = {
                    selector: {
                        nav: "> .am-tabs-nav",
                        content: "> .am-tabs-bd",
                        panel: "> .am-tab-panel"
                    },
                    className: {
                        active: "am-active"
                    }
                },
                d.prototype.init = function() {
                    var t = this,
                    e = this.options;
                    if (1 !== this.$tabNav.find("> .am-active").length) {
                        var i = this.$tabNav;
                        this.activate(i.children("li").first(), i),
                        this.activate(this.$tabPanels.first(), this.$content)
                    }
                    if (this.$navs.on("click.tabs.amui",
                    function(e) {
                        e.preventDefault(),
                        t.open(o(this))
                    }), !e.noSwipe) {
                        if (!this.$content.length) return this;
                        var n = new a(this.$content[0]);
                        n.get("pan").set({
                            direction: a.DIRECTION_HORIZONTAL,
                            threshold: 120
                        }),
                        n.on("panleft", s.utils.debounce(function(i) {
                            i.preventDefault();
                            var n = o(i.target);
                            n.is(e.selector.panel) || (n = n.closest(e.selector.panel)),
                            n.focus();
                            var s = t.getNextNav(n);
                            s && t.open(s)
                        },
                        100)),
                        n.on("panright", s.utils.debounce(function(i) {
                            i.preventDefault();
                            var n = o(i.target);
                            n.is(e.selector.panel) || (n = n.closest(e.selector.panel));
                            var s = t.getPrevNav(n);
                            s && t.open(s)
                        },
                        100))
                    }
                },
                d.prototype.open = function(t) {
                    if (t && !this.transitioning && !t.parent("li").hasClass("am-active")) {
                        var e = this.$tabNav,
                        i = this.$navs,
                        n = this.$content,
                        s = t.attr("href"),
                        a = /^#.+$/,
                        r = a.test(s) && this.$content.find(s) || this.$tabPanels.eq(i.index(t)),
                        l = e.find(".am-active a")[0],
                        d = o.Event("open.tabs.amui", {
                            relatedTarget: l
                        });
                        t.trigger(d),
                        d.isDefaultPrevented() || (this.activate(t.closest("li"), e), this.activate(r, n,
                        function() {
                            t.trigger({
                                type: "opened.tabs.amui",
                                relatedTarget: l
                            })
                        }))
                    }
                },
                d.prototype.activate = function(t, e, i) {
                    function n() {
                        i && i(),
                        this.transitioning = !1
                    }
                    this.transitioning = !0;
                    var s = e.find("> .am-active"),
                    a = i && r && !!s.length;
                    s.removeClass("am-active am-in"),
                    t.addClass("am-active"),
                    a ? (t.redraw(), t.addClass("am-in")) : t.removeClass("am-fade"),
                    a ? s.one(r.end, o.proxy(n, this)) : o.proxy(n, this)()
                },
                d.prototype.getNextNav = function(t) {
                    var e = this.$tabPanels.index(t),
                    i = "am-animation-right-spring";
                    return e + 1 >= this.$navs.length ? (l && t.addClass(i).on(l.end,
                    function() {
                        t.removeClass(i)
                    }), null) : this.$navs.eq(e + 1)
                },
                d.prototype.getPrevNav = function(t) {
                    var e = this.$tabPanels.index(t),
                    i = "am-animation-left-spring";
                    return 0 === e ? (l && t.addClass(i).on(l.end,
                    function() {
                        t.removeClass(i)
                    }), null) : this.$navs.eq(e - 1)
                },
                o.fn.tabs = n,
                s.ready(function(t) {
                    o("[data-am-tabs]", t).tabs()
                }),
                o.AMUI.tabs = d,
                e.exports = d
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2,
            30 : 30
        }],
        25 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.ucheck"),
                        n = o.extend({},
                        s.utils.parseOptions(e.data("amUcheck")), "object" == typeof t && t); (i || "destroy" !== t) && (i || e.data("amui.ucheck", i = new a(this, n)), "string" == typeof t && i[t] && i[t](), s.support.touch && e.parent().hover(function() {
                            e.addClass("am-nohover")
                        },
                        function() {
                            e.removeClass("am-nohover")
                        }))
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = function(t, e) {
                    this.options = o.extend({},
                    a.DEFAULTS, e),
                    this.$element = o(t),
                    this.init()
                };
                a.DEFAULTS = {
                    checkboxClass: "am-ucheck-checkbox",
                    radioClass: "am-ucheck-radio",
                    checkboxTpl: '<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>',
                    radioTpl: '<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>'
                },
                a.prototype.init = function() {
                    var t = this.$element,
                    e = t[0],
                    i = this.options;
                    "checkbox" === e.type ? t.addClass(i.checkboxClass).after(i.checkboxTpl) : "radio" === e.type && t.addClass(i.radioClass).after(i.radioTpl)
                },
                a.prototype.check = function() {
                    this.$element.prop("checked", !0).trigger("change.ucheck.amui").trigger("checked.ucheck.amui")
                },
                a.prototype.uncheck = function() {
                    this.$element.prop("checked", !1).trigger("change.ucheck.amui").trigger("unchecked.ucheck.amui")
                },
                a.prototype.toggle = function() {
                    this.$element.prop("checked",
                    function(t, e) {
                        return ! e
                    }).trigger("change.ucheck.amui").trigger("toggled.ucheck.amui")
                },
                a.prototype.disable = function() {
                    this.$element.prop("disabled", !0).trigger("change.ucheck.amui").trigger("disabled.ucheck.amui")
                },
                a.prototype.enable = function() {
                    this.$element.prop("disabled", !1),
                    this.$element.trigger("change.ucheck.amui").trigger("enabled.ucheck.amui")
                },
                a.prototype.destroy = function() {
                    this.$element.removeData("amui.ucheck").removeClass(this.options.checkboxClass + " " + this.options.radioClass).next(".am-ucheck-icons").remove().end().trigger("destroyed.ucheck.amui")
                },
                o.fn.uCheck = n,
                s.ready(function(t) {
                    o("[data-am-ucheck]", t).uCheck()
                }),
                o.AMUI.uCheck = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        26 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t) {
                    return this.each(function() {
                        var e = o(this),
                        i = e.data("amui.validator"),
                        n = o.extend({},
                        s.utils.parseOptions(e.data("amValidator")), "object" == typeof t && t);
                        i || e.data("amui.validator", i = new a(this, n)),
                        "string" == typeof t && i[t] && i[t]()
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = function(t, e) {
                    this.options = o.extend({},
                    a.DEFAULTS, e),
                    this.options.patterns = o.extend({},
                    a.patterns, this.options.patterns);
                    var i = this.options.locales; ! a.validationMessages[i] && (this.options.locales = "zh_CN"),
                    this.$element = o(t),
                    this.init()
                };
                a.DEFAULTS = {
                    debug: !1,
                    locales: "zh_CN",
                    H5validation: !1,
                    H5inputType: ["email", "url", "number"],
                    patterns: {},
                    patternClassPrefix: "js-pattern-",
                    activeClass: "am-active",
                    inValidClass: "am-field-error",
                    validClass: "am-field-valid",
                    validateOnSubmit: !0,
                    allFields: ":input:visible:not(:submit, :button, :disabled, .am-novalidate)",
                    customEvents: "validate",
                    keyboardFields: ":input:not(:submit, :button, :disabled, .am-novalidate)",
                    keyboardEvents: "focusout, change",
                    activeKeyup: !1,
                    textareaMaxlenthKeyup: !0,
                    pointerFields: 'input[type="range"]:not(:disabled, .am-novalidate), input[type="radio"]:not(:disabled, .am-novalidate), input[type="checkbox"]:not(:disabled, .am-novalidate), select:not(:disabled, .am-novalidate), option:not(:disabled, .am-novalidate)',
                    pointerEvents: "click",
                    onValid: function(t) {},
                    onInValid: function(t) {},
                    markValid: function(t) {
                        var e = this.options,
                        i = o(t.field),
                        n = i.closest(".am-form-group");
                        i.addClass(e.validClass).removeClass(e.inValidClass),
                        n.addClass("am-form-success").removeClass("am-form-error"),
                        e.onValid.call(this, t)
                    },
                    markInValid: function(t) {
                        var e = this.options,
                        i = o(t.field),
                        n = i.closest(".am-form-group");
                        i.addClass(e.inValidClass + " " + e.activeClass).removeClass(e.validClass),
                        n.addClass("am-form-error").removeClass("am-form-success"),
                        e.onInValid.call(this, t)
                    },
                    validate: function(t) {},
                    submit: null
                },
                a.VERSION = "2.0.0",
                a.patterns = {
                    email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,
                    url: /^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    integer: /^-?\d+$/
                },
                a.validationMessages = {
                    zh_CN: {
                        valueMissing: "\u8bf7\u586b\u5199\uff08\u9009\u62e9\uff09\u6b64\u5b57\u6bb5",
                        customError: {
                            tooShort: "\u81f3\u5c11\u586b\u5199 %s \u4e2a\u5b57\u7b26",
                            checkedOverflow: "\u81f3\u591a\u9009\u62e9 %s \u9879",
                            checkedUnderflow: "\u81f3\u5c11\u9009\u62e9 %s \u9879"
                        },
                        patternMismatch: "\u8bf7\u6309\u7167\u8981\u6c42\u7684\u683c\u5f0f\u586b\u5199",
                        rangeOverflow: "\u8bf7\u586b\u5199\u5c0f\u4e8e\u7b49\u4e8e %s \u7684\u503c",
                        rangeUnderflow: "\u8bf7\u586b\u5199\u5927\u4e8e\u7b49\u4e8e %s \u7684\u503c",
                        stepMismatch: "",
                        tooLong: "\u81f3\u591a\u586b\u5199 %s \u4e2a\u5b57\u7b26",
                        typeMismatch: "\u8bf7\u6309\u7167\u8981\u6c42\u7684\u7c7b\u578b\u586b\u5199"
                    }
                },
                a.ERROR_MAP = {
                    tooShort: "minlength",
                    checkedOverflow: "maxchecked",
                    checkedUnderflow: "minchecked",
                    rangeOverflow: "max",
                    rangeUnderflow: "min",
                    tooLong: "maxlength"
                },
                a.prototype.init = function() {
                    function t(t) {
                        var e = t.toString();
                        return e.substring(1, e.length - 1)
                    }
                    function e(t, e, a) {
                        var r = e.split(","),
                        l = function(t) {
                            i.validate(this)
                        };
                        a && (l = s.utils.debounce(l, a)),
                        o.each(r,
                        function(e, i) {
                            n.on(i + ".validator.amui", t, l)
                        })
                    }
                    var i = this,
                    n = this.$element,
                    a = this.options;
                    return a.H5validation && s.support.formValidation ? !1 : (n.attr("novalidate", "novalidate"), o.each(a.H5inputType,
                    function(e, i) {
                        var o = n.find("input[type=" + i + "]");
                        o.attr("pattern") || o.is("[class*=" + a.patternClassPrefix + "]") || o.attr("pattern", t(a.patterns[i]))
                    }), o.each(a.patterns,
                    function(e, i) {
                        var o = n.find("." + a.patternClassPrefix + e); ! o.attr("pattern") && o.attr("pattern", t(i))
                    }), n.submit(function(t) {
                        if ("function" == typeof a.submit) return a.submit.call(i, t);
                        if (a.validateOnSubmit) {
                            var e = i.isFormValid();
                            return "boolean" === o.type(e) ? e: n.data("amui.checked") ? !0 : (o.when(e).then(function() {
                                n.data("amui.checked", !0).submit()
                            },
                            function() {
                                n.data("amui.checked", !1).find("." + a.inValidClass).eq(0).focus()
                            }), !1)
                        }
                    }), e(":input", a.customEvents), e(a.keyboardFields, a.keyboardEvents), e(a.pointerFields, a.pointerEvents), a.textareaMaxlenthKeyup && e("textarea[maxlength]", "keyup", 50), void(a.activeKeyup && e(".am-active", "keyup", 50)))
                },
                a.prototype.isValid = function(t) {
                    var e = o(t);
                    return void 0 === e.data("validity") && this.validate(t),
                    e.data("validity") && e.data("validity").valid
                },
                a.prototype.validate = function(t) {
                    var e = this,
                    i = this.$element,
                    n = this.options,
                    s = o(t),
                    a = s.data("equalTo");
                    a && s.attr("pattern", "^" + i.find(a).val() + "$");
                    var r = s.attr("pattern") || !1,
                    l = new RegExp(r),
                    d = null,
                    u = null,
                    c = s.is("[type=checkbox]") ? (u = i.find('input[name="' + t.name + '"]')).filter(":checked").length: s.is("[type=radio]") ? (d = this.$element.find('input[name="' + t.name + '"]')).filter(":checked").length > 0 : s.val();
                    s = u && u.length ? u.first() : s;
                    var h = void 0 !== s.attr("required") && "false" !== s.attr("required"),
                    p = parseInt(s.attr("maxlength"), 10),
                    f = parseInt(s.attr("minlength"), 10),
                    m = Number(s.attr("min")),
                    v = Number(s.attr("max")),
                    g = this.createValidity({
                        field: s[0],
                        valid: !0
                    });
                    if (n.debug && window.console && (console.log("Validate: value -> [" + c + ", regex -> [" + l + "], required -> " + h), console.log("Regex test: " + l.test(c) + ", Pattern: " + r)), !isNaN(p) && c.length > p && (g.valid = !1, g.tooLong = !0), !isNaN(f) && c.length < f && (g.valid = !1, g.customError = "tooShort"), !isNaN(m) && Number(c) < m && (g.valid = !1, g.rangeUnderflow = !0), !isNaN(v) && Number(c) > v && (g.valid = !1, g.rangeOverflow = !0), h && !c) g.valid = !1,
                    g.valueMissing = !0;
                    else if ((u || s.is('select[multiple="multiple"]')) && c) {
                        c = u ? c: c.length;
                        var w = parseInt(s.attr("minchecked"), 10),
                        y = parseInt(s.attr("maxchecked"), 10); ! isNaN(w) && w > c && (g.valid = !1, g.customError = "checkedUnderflow"),
                        !isNaN(y) && c > y && (g.valid = !1, g.customError = "checkedOverflow")
                    } else r && !l.test(c) && c && (g.valid = !1, g.patternMismatch = !0);
                    var b, T = function(t) {
                        this.markField(t),
                        s.trigger("validated.field.validator.amui", t).data("validity", t);
                        var i = d || u;
                        i && i.not(s).data("validity", t).each(function() {
                            t.field = this,
                            e.markField(t)
                        })
                    };
                    if ("function" == typeof n.validate && (b = n.validate.call(this, g)), b) {
                        var x = new o.Deferred;
                        return s.data("amui.dfdValidity", x.promise()),
                        o.when(b).always(function(t) {
                            x[t.valid ? "resolve": "reject"](t),
                            T.call(e, t)
                        })
                    }
                    T.call(this, g)
                },
                a.prototype.markField = function(t) {
                    var e = this.options,
                    i = "mark" + (t.valid ? "": "In") + "Valid";
                    e[i] && e[i].call(this, t)
                },
                a.prototype.validateForm = function() {
                    var t = this,
                    e = this.$element,
                    i = this.options,
                    n = e.find(i.allFields),
                    s = [],
                    a = !0,
                    r = [],
                    l = o([]),
                    d = [],
                    u = !1;
                    e.trigger("validate.form.validator.amui");
                    var c = n.filter(function(t) {
                        var e;
                        if ("INPUT" === this.tagName && "radio" === this.type) {
                            if (e = this.name, s[e] === !0) return ! 1;
                            s[e] = !0
                        }
                        return ! 0
                    });
                    c.each(function() {
                        var i = o(this),
                        n = t.isValid(this),
                        s = i.data("validity");
                        a = !!n && a,
                        r.push(s),
                        n || (l = l.add(o(this), e));
                        var c = i.data("amui.dfdValidity");
                        if (c) d.push(c),
                        u = !0;
                        else {
                            var h = new o.Deferred;
                            d.push(h.promise()),
                            h[n ? "resolve": "reject"](s)
                        }
                    });
                    var h = {
                        valid: a,
                        $invalidFields: l,
                        validity: r,
                        promises: d,
                        async: u
                    };
                    return e.trigger("validated.form.validator.amui", h),
                    h
                },
                a.prototype.isFormValid = function() {
                    var t = this,
                    e = this.validateForm(),
                    i = function(e) {
                        t.$element.trigger(e + ".validator.amui")
                    };
                    if (e.async) {
                        var n = new o.Deferred;
                        return o.when.apply(null, e.promises).then(function() {
                            n.resolve(),
                            i("valid")
                        },
                        function() {
                            n.reject(),
                            i("invalid")
                        }),
                        n.promise()
                    }
                    return e.valid ? (i("valid"), !0) : (e.$invalidFields.first().focus(), i("invalid"), !1)
                },
                a.prototype.createValidity = function(t) {
                    return o.extend({
                        customError: t.customError || !1,
                        patternMismatch: t.patternMismatch || !1,
                        rangeOverflow: t.rangeOverflow || !1,
                        rangeUnderflow: t.rangeUnderflow || !1,
                        stepMismatch: t.stepMismatch || !1,
                        tooLong: t.tooLong || !1,
                        typeMismatch: t.typeMismatch || !1,
                        valid: t.valid || !0,
                        valueMissing: t.valueMissing || !1
                    },
                    t)
                },
                a.prototype.getValidationMessage = function(t) {
                    var e, i, n = a.validationMessages[this.options.locales],
                    s = "%s",
                    r = o(t.field);
                    return (r.is('[type="checkbox"]') || r.is('[type="radio"]')) && (r = this.$element.find("[name=" + r.attr("name") + "]").first()),
                    o.each(t,
                    function(t, i) {
                        return "field" === t || "valid" === t ? t: "customError" === t && i ? (e = i, n = n.customError, !1) : i === !0 ? (e = t, !1) : void 0
                    }),
                    i = n[e] || void 0,
                    i && a.ERROR_MAP[e] && (i = i.replace(s, r.attr(a.ERROR_MAP[e]) || "\u89c4\u5b9a\u7684")),
                    i
                },
                o.fn.validator = n,
                s.ready(function(t) {
                    o("[data-am-validator]", t).validator()
                }),
                o.AMUI.validator = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        27 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2);
                var o = {
                    get: function(t) {
                        var e, i = encodeURIComponent(t) + "=",
                        n = document.cookie.indexOf(i),
                        o = null;
                        return n > -1 && (e = document.cookie.indexOf(";", n), -1 == e && (e = document.cookie.length), o = decodeURIComponent(document.cookie.substring(n + i.length, e))),
                        o
                    },
                    set: function(t, e, i, n, o, s) {
                        var a = encodeURIComponent(t) + "=" + encodeURIComponent(e);
                        i instanceof Date && (a += "; expires=" + i.toUTCString()),
                        n && (a += "; path=" + n),
                        o && (a += "; domain=" + o),
                        s && (a += "; secure"),
                        document.cookie = a
                    },
                    unset: function(t, e, i, n) {
                        this.set(t, "", new Date(0), e, i, n)
                    }
                };
                n.AMUI.utils.cookie = o,
                e.exports = o
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        28 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = (t(2), "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element),
                s = function() {
                    for (var t, e, i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, o = i.length, s = {}; o > n; n++) if (t = i[n], t && t[1] in document) {
                        for (n = 0, e = t.length; e > n; n++) s[i[0][n]] = t[n];
                        return s
                    }
                    return ! 1
                } (),
                a = {
                    request: function(t) {
                        var e = s.requestFullscreen;
                        t = t || document.documentElement,
                        /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? t[e]() : t[e](o && Element.ALLOW_KEYBOARD_INPUT)
                    },
                    exit: function() {
                        document[s.exitFullscreen]()
                    },
                    toggle: function(t) {
                        this.isFullscreen ? this.exit() : this.request(t)
                    },
                    raw: s
                };
                return s ? (Object.defineProperties(a, {
                    isFullscreen: {
                        get: function() {
                            return !! document[s.fullscreenElement]
                        }
                    },
                    element: {
                        enumerable: !0,
                        get: function() {
                            return document[s.fullscreenElement]
                        }
                    },
                    enabled: {
                        enumerable: !0,
                        get: function() {
                            return !! document[s.fullscreenEnabled]
                        }
                    }
                }), a.VERSION = "2.0.0", n.AMUI.fullscreen = a, void(e.exports = a)) : void(e.exports = !1)
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        29 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                o = t(2);
                o.support.geolocation = window.navigator && window.navigator.geolocation;
                var s = o.support.geolocation,
                a = function(t) {
                    this.options = t || {}
                };
                a.MESSAGES = {
                    unsupportedBrowser: "Browser does not support location services",
                    permissionDenied: "You have rejected access to your location",
                    positionUnavailable: "Unable to determine your location",
                    timeout: "Service timeout has been reached"
                },
                a.ERROR_CODE = {
                    0 : "unsupportedBrowser",
                    1 : "permissionDenied",
                    2 : "positionUnavailable",
                    3 : "timeout"
                },
                a.prototype.get = function(t) {
                    var e = this;
                    t = n.extend({},
                    this.options, t);
                    var i = new n.Deferred;
                    return s ? this.watchID = s.getCurrentPosition(function(t) {
                        i.resolve.call(e, t)
                    },
                    function(t) {
                        i.reject(a.MESSAGES[a.ERROR_CODE[t.code]])
                    },
                    t) : i.reject(a.MESSAGES.unsupportedBrowser),
                    i.promise()
                },
                a.prototype.watch = function(t) {
                    if (s && (t = n.extend({},
                    this.options, t), n.isFunction(t.done))) {
                        this.clearWatch();
                        var e = n.isFunction(t.fail) ? t.fail: null;
                        return this.watchID = s.watchPosition(t.done, e, t),
                        this.watchID
                    }
                },
                a.prototype.clearWatch = function() {
                    s && this.watchID && (s.clearWatch(this.watchID), this.watchID = null)
                },
                n.AMUI.Geolocation = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        30 : [function(t, e, i) { (function(i) {
                "use strict";
                function n(t, e, i) {
                    return setTimeout(d(t, i), e)
                }
                function o(t, e, i) {
                    return Array.isArray(t) ? (s(t, i[e], i), !0) : !1
                }
                function s(t, e, i) {
                    var n;
                    if (t) if (t.forEach) t.forEach(e, i);
                    else if (void 0 !== t.length) for (n = 0; n < t.length;) e.call(i, t[n], n, t),
                    n++;
                    else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
                }
                function a(t, e, i) {
                    for (var n = Object.keys(e), o = 0; o < n.length;)(!i || i && void 0 === t[n[o]]) && (t[n[o]] = e[n[o]]),
                    o++;
                    return t
                }
                function r(t, e) {
                    return a(t, e, !0)
                }
                function l(t, e, i) {
                    var n, o = e.prototype;
                    n = t.prototype = Object.create(o),
                    n.constructor = t,
                    n._super = o,
                    i && a(n, i)
                }
                function d(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function u(t, e) {
                    return typeof t == ut ? t.apply(e ? e[0] || void 0 : void 0, e) : t
                }
                function c(t, e) {
                    return void 0 === t ? e: t
                }
                function h(t, e, i) {
                    s(v(e),
                    function(e) {
                        t.addEventListener(e, i, !1)
                    })
                }
                function p(t, e, i) {
                    s(v(e),
                    function(e) {
                        t.removeEventListener(e, i, !1)
                    })
                }
                function f(t, e) {
                    for (; t;) {
                        if (t == e) return ! 0;
                        t = t.parentNode
                    }
                    return ! 1
                }
                function m(t, e) {
                    return t.indexOf(e) > -1
                }
                function v(t) {
                    return t.trim().split(/\s+/g)
                }
                function g(t, e, i) {
                    if (t.indexOf && !i) return t.indexOf(e);
                    for (var n = 0; n < t.length;) {
                        if (i && t[n][i] == e || !i && t[n] === e) return n;
                        n++
                    }
                    return - 1
                }
                function w(t) {
                    return Array.prototype.slice.call(t, 0)
                }
                function y(t, e, i) {
                    for (var n = [], o = [], s = 0; s < t.length;) {
                        var a = e ? t[s][e] : t[s];
                        g(o, a) < 0 && n.push(t[s]),
                        o[s] = a,
                        s++
                    }
                    return i && (n = e ? n.sort(function(t, i) {
                        return t[e] > i[e]
                    }) : n.sort()),
                    n
                }
                function b(t, e) {
                    for (var i, n, o = e[0].toUpperCase() + e.slice(1), s = 0; s < lt.length;) {
                        if (i = lt[s], n = i ? i + o: e, n in t) return n;
                        s++
                    }
                    return void 0
                }
                function T() {
                    return ft++
                }
                function x(t) {
                    var e = t.ownerDocument;
                    return e.defaultView || e.parentWindow
                }
                function C(t, e) {
                    var i = this;
                    this.manager = t,
                    this.callback = e,
                    this.element = t.element,
                    this.target = t.options.inputTarget,
                    this.domHandler = function(e) {
                        u(t.options.enable, [t]) && i.handler(e)
                    },
                    this.init()
                }
                function E(t) {
                    var e, i = t.options.inputClass;
                    return new(e = i ? i: gt ? _: wt ? U: vt ? W: z)(t, S)
                }
                function S(t, e, i) {
                    var n = i.pointers.length,
                    o = i.changedPointers.length,
                    s = e & Et && n - o === 0,
                    a = e & (kt | At) && n - o === 0;
                    i.isFirst = !!s,
                    i.isFinal = !!a,
                    s && (t.session = {}),
                    i.eventType = e,
                    k(t, i),
                    t.emit("hammer.input", i),
                    t.recognize(i),
                    t.session.prevInput = i
                }
                function k(t, e) {
                    var i = t.session,
                    n = e.pointers,
                    o = n.length;
                    i.firstInput || (i.firstInput = F(e)),
                    o > 1 && !i.firstMultiple ? i.firstMultiple = F(e) : 1 === o && (i.firstMultiple = !1);
                    var s = i.firstInput,
                    a = i.firstMultiple,
                    r = a ? a.center: s.center,
                    l = e.center = M(n);
                    e.timeStamp = pt(),
                    e.deltaTime = e.timeStamp - s.timeStamp,
                    e.angle = N(r, l),
                    e.distance = I(r, l),
                    A(i, e),
                    e.offsetDirection = P(e.deltaX, e.deltaY),
                    e.scale = a ? L(a.pointers, n) : 1,
                    e.rotation = a ? O(a.pointers, n) : 0,
                    D(i, e);
                    var d = t.element;
                    f(e.srcEvent.target, d) && (d = e.srcEvent.target),
                    e.target = d
                }
                function A(t, e) {
                    var i = e.center,
                    n = t.offsetDelta || {},
                    o = t.prevDelta || {},
                    s = t.prevInput || {}; (e.eventType === Et || s.eventType === kt) && (o = t.prevDelta = {
                        x: s.deltaX || 0,
                        y: s.deltaY || 0
                    },
                    n = t.offsetDelta = {
                        x: i.x,
                        y: i.y
                    }),
                    e.deltaX = o.x + (i.x - n.x),
                    e.deltaY = o.y + (i.y - n.y)
                }
                function D(t, e) {
                    var i, n, o, s, a = t.lastInterval || e,
                    r = e.timeStamp - a.timeStamp;
                    if (e.eventType != At && (r > Ct || void 0 === a.velocity)) {
                        var l = a.deltaX - e.deltaX,
                        d = a.deltaY - e.deltaY,
                        u = $(r, l, d);
                        n = u.x,
                        o = u.y,
                        i = ht(u.x) > ht(u.y) ? u.x: u.y,
                        s = P(l, d),
                        t.lastInterval = e
                    } else i = a.velocity,
                    n = a.velocityX,
                    o = a.velocityY,
                    s = a.direction;
                    e.velocity = i,
                    e.velocityX = n,
                    e.velocityY = o,
                    e.direction = s
                }
                function F(t) {
                    for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                        clientX: ct(t.pointers[i].clientX),
                        clientY: ct(t.pointers[i].clientY)
                    },
                    i++;
                    return {
                        timeStamp: pt(),
                        pointers: e,
                        center: M(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }
                function M(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: ct(t[0].clientX),
                        y: ct(t[0].clientY)
                    };
                    for (var i = 0,
                    n = 0,
                    o = 0; e > o;) i += t[o].clientX,
                    n += t[o].clientY,
                    o++;
                    return {
                        x: ct(i / e),
                        y: ct(n / e)
                    }
                }
                function $(t, e, i) {
                    return {
                        x: e / t || 0,
                        y: i / t || 0
                    }
                }
                function P(t, e) {
                    return t === e ? Dt: ht(t) >= ht(e) ? t > 0 ? Ft: Mt: e > 0 ? $t: Pt
                }
                function I(t, e, i) {
                    i || (i = Lt);
                    var n = e[i[0]] - t[i[0]],
                    o = e[i[1]] - t[i[1]];
                    return Math.sqrt(n * n + o * o)
                }
                function N(t, e, i) {
                    i || (i = Lt);
                    var n = e[i[0]] - t[i[0]],
                    o = e[i[1]] - t[i[1]];
                    return 180 * Math.atan2(o, n) / Math.PI
                }
                function O(t, e) {
                    return N(e[1], e[0], zt) - N(t[1], t[0], zt)
                }
                function L(t, e) {
                    return I(e[0], e[1], zt) / I(t[0], t[1], zt)
                }
                function z() {
                    this.evEl = jt,
                    this.evWin = Rt,
                    this.allow = !0,
                    this.pressed = !1,
                    C.apply(this, arguments)
                }
                function _() {
                    this.evEl = Wt,
                    this.evWin = Ht,
                    C.apply(this, arguments),
                    this.store = this.manager.session.pointerEvents = []
                }
                function j() {
                    this.evTarget = Qt,
                    this.evWin = Vt,
                    this.started = !1,
                    C.apply(this, arguments)
                }
                function R(t, e) {
                    var i = w(t.touches),
                    n = w(t.changedTouches);
                    return e & (kt | At) && (i = y(i.concat(n), "identifier", !0)),
                    [i, n]
                }
                function U() {
                    this.evTarget = Yt,
                    this.targetIds = {},
                    C.apply(this, arguments)
                }
                function q(t, e) {
                    var i = w(t.touches),
                    n = this.targetIds;
                    if (e & (Et | St) && 1 === i.length) return n[i[0].identifier] = !0,
                    [i, i];
                    var o, s, a = w(t.changedTouches),
                    r = [],
                    l = this.target;
                    if (s = i.filter(function(t) {
                        return f(t.target, l)
                    }), e === Et) for (o = 0; o < s.length;) n[s[o].identifier] = !0,
                    o++;
                    for (o = 0; o < a.length;) n[a[o].identifier] && r.push(a[o]),
                    e & (kt | At) && delete n[a[o].identifier],
                    o++;
                    return r.length ? [y(s.concat(r), "identifier", !0), r] : void 0
                }
                function W() {
                    C.apply(this, arguments);
                    var t = d(this.handler, this);
                    this.touch = new U(this.manager, t),
                    this.mouse = new z(this.manager, t)
                }
                function H(t, e) {
                    this.manager = t,
                    this.set(e)
                }
                function B(t) {
                    if (m(t, ee)) return ee;
                    var e = m(t, ie),
                    i = m(t, ne);
                    return e && i ? ie + " " + ne: e || i ? e ? ie: ne: m(t, te) ? te: Kt
                }
                function Q(t) {
                    this.id = T(),
                    this.manager = null,
                    this.options = r(t || {},
                    this.defaults),
                    this.options.enable = c(this.options.enable, !0),
                    this.state = oe,
                    this.simultaneous = {},
                    this.requireFail = []
                }
                function V(t) {
                    return t & de ? "cancel": t & re ? "end": t & ae ? "move": t & se ? "start": ""
                }
                function X(t) {
                    return t == Pt ? "down": t == $t ? "up": t == Ft ? "left": t == Mt ? "right": ""
                }
                function Y(t, e) {
                    var i = e.manager;
                    return i ? i.get(t) : t
                }
                function Z() {
                    Q.apply(this, arguments)
                }
                function G() {
                    Z.apply(this, arguments),
                    this.pX = null,
                    this.pY = null
                }
                function J() {
                    Z.apply(this, arguments)
                }
                function K() {
                    Q.apply(this, arguments),
                    this._timer = null,
                    this._input = null
                }
                function tt() {
                    Z.apply(this, arguments)
                }
                function et() {
                    Z.apply(this, arguments)
                }
                function it() {
                    Q.apply(this, arguments),
                    this.pTime = !1,
                    this.pCenter = !1,
                    this._timer = null,
                    this._input = null,
                    this.count = 0
                }
                function nt(t, e) {
                    return e = e || {},
                    e.recognizers = c(e.recognizers, nt.defaults.preset),
                    new ot(t, e)
                }
                function ot(t, e) {
                    e = e || {},
                    this.options = r(e, nt.defaults),
                    this.options.inputTarget = this.options.inputTarget || t,
                    this.handlers = {},
                    this.session = {},
                    this.recognizers = [],
                    this.element = t,
                    this.input = E(this),
                    this.touchAction = new H(this, this.options.touchAction),
                    st(this, !0),
                    s(e.recognizers,
                    function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]),
                        t[3] && e.requireFailure(t[3])
                    },
                    this)
                }
                function st(t, e) {
                    var i = t.element;
                    s(t.options.cssProps,
                    function(t, n) {
                        i.style[b(i.style, n)] = e ? t: ""
                    })
                }
                function at(t, e) {
                    var i = document.createEvent("Event");
                    i.initEvent(t, !0, !0),
                    i.gesture = e,
                    e.target.dispatchEvent(i)
                }
                var rt = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                lt = (t(2), ["", "webkit", "moz", "MS", "ms", "o"]),
                dt = document.createElement("div"),
                ut = "function",
                ct = Math.round,
                ht = Math.abs,
                pt = Date.now,
                ft = 1,
                mt = /mobile|tablet|ip(ad|hone|od)|android/i,
                vt = "ontouchstart" in window,
                gt = void 0 !== b(window, "PointerEvent"),
                wt = vt && mt.test(navigator.userAgent),
                yt = "touch",
                bt = "pen",
                Tt = "mouse",
                xt = "kinect",
                Ct = 25,
                Et = 1,
                St = 2,
                kt = 4,
                At = 8,
                Dt = 1,
                Ft = 2,
                Mt = 4,
                $t = 8,
                Pt = 16,
                It = Ft | Mt,
                Nt = $t | Pt,
                Ot = It | Nt,
                Lt = ["x", "y"],
                zt = ["clientX", "clientY"];
                C.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && h(this.element, this.evEl, this.domHandler),
                        this.evTarget && h(this.target, this.evTarget, this.domHandler),
                        this.evWin && h(x(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && p(this.element, this.evEl, this.domHandler),
                        this.evTarget && p(this.target, this.evTarget, this.domHandler),
                        this.evWin && p(x(this.element), this.evWin, this.domHandler)
                    }
                };
                var _t = {
                    mousedown: Et,
                    mousemove: St,
                    mouseup: kt
                },
                jt = "mousedown",
                Rt = "mousemove mouseup";
                l(z, C, {
                    handler: function(t) {
                        var e = _t[t.type];
                        e & Et && 0 === t.button && (this.pressed = !0),
                        e & St && 1 !== t.which && (e = kt),
                        this.pressed && this.allow && (e & kt && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: Tt,
                            srcEvent: t
                        }))
                    }
                });
                var Ut = {
                    pointerdown: Et,
                    pointermove: St,
                    pointerup: kt,
                    pointercancel: At,
                    pointerout: At
                },
                qt = {
                    2 : yt,
                    3 : bt,
                    4 : Tt,
                    5 : xt
                },
                Wt = "pointerdown",
                Ht = "pointermove pointerup pointercancel";
                window.MSPointerEvent && (Wt = "MSPointerDown", Ht = "MSPointerMove MSPointerUp MSPointerCancel"),
                l(_, C, {
                    handler: function(t) {
                        var e = this.store,
                        i = !1,
                        n = t.type.toLowerCase().replace("ms", ""),
                        o = Ut[n],
                        s = qt[t.pointerType] || t.pointerType,
                        a = s == yt,
                        r = g(e, t.pointerId, "pointerId");
                        o & Et && (0 === t.button || a) ? 0 > r && (e.push(t), r = e.length - 1) : o & (kt | At) && (i = !0),
                        0 > r || (e[r] = t, this.callback(this.manager, o, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: s,
                            srcEvent: t
                        }), i && e.splice(r, 1))
                    }
                });
                var Bt = {
                    touchstart: Et,
                    touchmove: St,
                    touchend: kt,
                    touchcancel: At
                },
                Qt = "touchstart",
                Vt = "touchstart touchmove touchend touchcancel";
                l(j, C, {
                    handler: function(t) {
                        var e = Bt[t.type];
                        if (e === Et && (this.started = !0), this.started) {
                            var i = R.call(this, t, e);
                            e & (kt | At) && i[0].length - i[1].length === 0 && (this.started = !1),
                            this.callback(this.manager, e, {
                                pointers: i[0],
                                changedPointers: i[1],
                                pointerType: yt,
                                srcEvent: t
                            })
                        }
                    }
                });
                var Xt = {
                    touchstart: Et,
                    touchmove: St,
                    touchend: kt,
                    touchcancel: At
                },
                Yt = "touchstart touchmove touchend touchcancel";
                l(U, C, {
                    handler: function(t) {
                        var e = Xt[t.type],
                        i = q.call(this, t, e);
                        i && this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: yt,
                            srcEvent: t
                        })
                    }
                }),
                l(W, C, {
                    handler: function(t, e, i) {
                        var n = i.pointerType == yt,
                        o = i.pointerType == Tt;
                        if (n) this.mouse.allow = !1;
                        else if (o && !this.mouse.allow) return;
                        e & (kt | At) && (this.mouse.allow = !0),
                        this.callback(t, e, i)
                    },
                    destroy: function() {
                        this.touch.destroy(),
                        this.mouse.destroy()
                    }
                });
                var Zt = b(dt.style, "touchAction"),
                Gt = void 0 !== Zt,
                Jt = "compute",
                Kt = "auto",
                te = "manipulation",
                ee = "none",
                ie = "pan-x",
                ne = "pan-y";
                H.prototype = {
                    set: function(t) {
                        t == Jt && (t = this.compute()),
                        Gt && (this.manager.element.style[Zt] = t),
                        this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return s(this.manager.recognizers,
                        function(e) {
                            u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }),
                        B(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        if (!Gt) {
                            var e = t.srcEvent,
                            i = t.offsetDirection;
                            if (this.manager.session.prevented) return void e.preventDefault();
                            var n = this.actions,
                            o = m(n, ee),
                            s = m(n, ne),
                            a = m(n, ie);
                            return o || s && i & It || a && i & Nt ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0,
                        t.preventDefault()
                    }
                };
                var oe = 1,
                se = 2,
                ae = 4,
                re = 8,
                le = re,
                de = 16,
                ue = 32;
                Q.prototype = {
                    defaults: {},
                    set: function(t) {
                        return a(this.options, t),
                        this.manager && this.manager.touchAction.update(),
                        this
                    },
                    recognizeWith: function(t) {
                        if (o(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return t = Y(t, this),
                        e[t.id] || (e[t.id] = t, t.recognizeWith(this)),
                        this
                    },
                    dropRecognizeWith: function(t) {
                        return o(t, "dropRecognizeWith", this) ? this: (t = Y(t, this), delete this.simultaneous[t.id], this)
                    },
                    requireFailure: function(t) {
                        if (o(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return t = Y(t, this),
                        -1 === g(e, t) && (e.push(t), t.requireFailure(this)),
                        this
                    },
                    dropRequireFailure: function(t) {
                        if (o(t, "dropRequireFailure", this)) return this;
                        t = Y(t, this);
                        var e = g(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1),
                        this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !! this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        function e(e) {
                            i.manager.emit(i.options.event + (e ? V(n) : ""), t)
                        }
                        var i = this,
                        n = this.state;
                        re > n && e(!0),
                        e(),
                        n >= re && e(!0)
                    },
                    tryEmit: function(t) {
                        return this.canEmit() ? this.emit(t) : void(this.state = ue)
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (! (this.requireFail[t].state & (ue | oe))) return ! 1;
                            t++
                        }
                        return ! 0
                    },
                    recognize: function(t) {
                        var e = a({},
                        t);
                        return u(this.options.enable, [this, e]) ? (this.state & (le | de | ue) && (this.state = oe), this.state = this.process(e), void(this.state & (se | ae | re | de) && this.tryEmit(e))) : (this.reset(), void(this.state = ue))
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {}
                },
                l(Z, Q, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state,
                        i = t.eventType,
                        n = e & (se | ae),
                        o = this.attrTest(t);
                        return n && (i & At || !o) ? e | de: n || o ? i & kt ? e | re: e & se ? e | ae: se: ue
                    }
                }),
                l(G, Z, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: Ot
                    },
                    getTouchAction: function() {
                        var t = this.options.direction,
                        e = [];
                        return t & It && e.push(ne),
                        t & Nt && e.push(ie),
                        e
                    },
                    directionTest: function(t) {
                        var e = this.options,
                        i = !0,
                        n = t.distance,
                        o = t.direction,
                        s = t.deltaX,
                        a = t.deltaY;
                        return o & e.direction || (e.direction & It ? (o = 0 === s ? Dt: 0 > s ? Ft: Mt, i = s != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === a ? Dt: 0 > a ? $t: Pt, i = a != this.pY, n = Math.abs(t.deltaY))),
                        t.direction = o,
                        i && n > e.threshold && o & e.direction
                    },
                    attrTest: function(t) {
                        return Z.prototype.attrTest.call(this, t) && (this.state & se || !(this.state & se) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX,
                        this.pY = t.deltaY;
                        var e = X(t.direction);
                        e && this.manager.emit(this.options.event + e, t),
                        this._super.emit.call(this, t)
                    }
                }),
                l(J, Z, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [ee]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & se)
                    },
                    emit: function(t) {
                        if (this._super.emit.call(this, t), 1 !== t.scale) {
                            var e = t.scale < 1 ? "in": "out";
                            this.manager.emit(this.options.event + e, t)
                        }
                    }
                }),
                l(K, Q, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 500,
                        threshold: 5
                    },
                    getTouchAction: function() {
                        return [Kt]
                    },
                    process: function(t) {
                        var e = this.options,
                        i = t.pointers.length === e.pointers,
                        o = t.distance < e.threshold,
                        s = t.deltaTime > e.time;
                        if (this._input = t, !o || !i || t.eventType & (kt | At) && !s) this.reset();
                        else if (t.eventType & Et) this.reset(),
                        this._timer = n(function() {
                            this.state = le,
                            this.tryEmit()
                        },
                        e.time, this);
                        else if (t.eventType & kt) return le;
                        return ue
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        this.state === le && (t && t.eventType & kt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = pt(), this.manager.emit(this.options.event, this._input)))
                    }
                }),
                l(tt, Z, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [ee]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & se)
                    }
                }),
                l(et, Z, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .65,
                        direction: It | Nt,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return G.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, i = this.options.direction;
                        return i & (It | Nt) ? e = t.velocity: i & It ? e = t.velocityX: i & Nt && (e = t.velocityY),
                        this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && ht(e) > this.options.velocity && t.eventType & kt
                    },
                    emit: function(t) {
                        var e = X(t.direction);
                        e && this.manager.emit(this.options.event + e, t),
                        this.manager.emit(this.options.event, t)
                    }
                }),
                l(it, Q, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 2,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [te]
                    },
                    process: function(t) {
                        var e = this.options,
                        i = t.pointers.length === e.pointers,
                        o = t.distance < e.threshold,
                        s = t.deltaTime < e.time;
                        if (this.reset(), t.eventType & Et && 0 === this.count) return this.failTimeout();
                        if (o && s && i) {
                            if (t.eventType != kt) return this.failTimeout();
                            var a = this.pTime ? t.timeStamp - this.pTime < e.interval: !0,
                            r = !this.pCenter || I(this.pCenter, t.center) < e.posThreshold;
                            this.pTime = t.timeStamp,
                            this.pCenter = t.center,
                            r && a ? this.count += 1 : this.count = 1,
                            this._input = t;
                            var l = this.count % e.taps;
                            if (0 === l) return this.hasRequireFailures() ? (this._timer = n(function() {
                                this.state = le,
                                this.tryEmit()
                            },
                            e.interval, this), se) : le
                        }
                        return ue
                    },
                    failTimeout: function() {
                        return this._timer = n(function() {
                            this.state = ue
                        },
                        this.options.interval, this),
                        ue
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        this.state == le && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }),
                nt.VERSION = "2.0.4",
                nt.defaults = {
                    domEvents: !1,
                    touchAction: Jt,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [[tt, {
                        enable: !1
                    }], [J, {
                        enable: !1
                    },
                    ["rotate"]], [et, {
                        direction: It
                    }], [G, {
                        direction: It
                    },
                    ["swipe"]], [it], [it, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]], [K]],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                };
                var ce = 1,
                he = 2;
                ot.prototype = {
                    set: function(t) {
                        return a(this.options, t),
                        t.touchAction && this.touchAction.update(),
                        t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()),
                        this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? he: ce
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            this.touchAction.preventDefaults(t);
                            var i, n = this.recognizers,
                            o = e.curRecognizer; (!o || o && o.state & le) && (o = e.curRecognizer = null);
                            for (var s = 0; s < n.length;) i = n[s],
                            e.stopped === he || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t),
                            !o && i.state & (se | ae | re) && (o = e.curRecognizer = i),
                            s++
                        }
                    },
                    get: function(t) {
                        if (t instanceof Q) return t;
                        for (var e = this.recognizers,
                        i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];
                        return null
                    },
                    add: function(t) {
                        if (o(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e),
                        this.recognizers.push(t),
                        t.manager = this,
                        this.touchAction.update(),
                        t
                    },
                    remove: function(t) {
                        if (o(t, "remove", this)) return this;
                        var e = this.recognizers;
                        return t = this.get(t),
                        e.splice(g(e, t), 1),
                        this.touchAction.update(),
                        this
                    },
                    on: function(t, e) {
                        var i = this.handlers;
                        return s(v(t),
                        function(t) {
                            i[t] = i[t] || [],
                            i[t].push(e)
                        }),
                        this
                    },
                    off: function(t, e) {
                        var i = this.handlers;
                        return s(v(t),
                        function(t) {
                            e ? i[t].splice(g(i[t], e), 1) : delete i[t]
                        }),
                        this
                    },
                    emit: function(t, e) {
                        this.options.domEvents && at(t, e);
                        var i = this.handlers[t] && this.handlers[t].slice();
                        if (i && i.length) {
                            e.type = t,
                            e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            };
                            for (var n = 0; n < i.length;) i[n](e),
                            n++
                        }
                    },
                    destroy: function() {
                        this.element && st(this, !1),
                        this.handlers = {},
                        this.session = {},
                        this.input.destroy(),
                        this.element = null
                    }
                },
                a(nt, {
                    INPUT_START: Et,
                    INPUT_MOVE: St,
                    INPUT_END: kt,
                    INPUT_CANCEL: At,
                    STATE_POSSIBLE: oe,
                    STATE_BEGAN: se,
                    STATE_CHANGED: ae,
                    STATE_ENDED: re,
                    STATE_RECOGNIZED: le,
                    STATE_CANCELLED: de,
                    STATE_FAILED: ue,
                    DIRECTION_NONE: Dt,
                    DIRECTION_LEFT: Ft,
                    DIRECTION_RIGHT: Mt,
                    DIRECTION_UP: $t,
                    DIRECTION_DOWN: Pt,
                    DIRECTION_HORIZONTAL: It,
                    DIRECTION_VERTICAL: Nt,
                    DIRECTION_ALL: Ot,
                    Manager: ot,
                    Input: C,
                    TouchAction: H,
                    TouchInput: U,
                    MouseInput: z,
                    PointerEventInput: _,
                    TouchMouseInput: W,
                    SingleTouchInput: j,
                    Recognizer: Q,
                    AttrRecognizer: Z,
                    Tap: it,
                    Pan: G,
                    Swipe: et,
                    Pinch: J,
                    Rotate: tt,
                    Press: K,
                    on: h,
                    off: p,
                    each: s,
                    merge: r,
                    extend: a,
                    inherit: l,
                    bindFn: d,
                    prefixed: b
                }),
                function(t, e) {
                    function i(i, n) {
                        var o = t(i);
                        o.data("hammer") || o.data("hammer", new e(o[0], n))
                    }
                    t.fn.hammer = function(t) {
                        return this.each(function() {
                            i(this, t)
                        })
                    },
                    e.Manager.prototype.emit = function(e) {
                        return function(i, n) {
                            e.call(this, i, n),
                            t(this.element).trigger({
                                type: i,
                                gesture: n
                            })
                        }
                    } (e.Manager.prototype.emit)
                } (rt, nt),
                rt.AMUI.Hammer = nt,
                e.exports = nt
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        31 : [function(t, e, i) { (function(i) {
                function n(t) {
                    return 128 > t ? [t] : 2048 > t ? (c0 = 192 + (t >> 6), c1 = 128 + (63 & t), [c0, c1]) : (c0 = 224 + (t >> 12), c1 = 128 + (t >> 6 & 63), c2 = 128 + (63 & t), [c0, c1, c2])
                }
                function o(t) {
                    for (var e = [], i = 0; i < t.length; i++) for (var o = t.charCodeAt(i), s = n(o), a = 0; a < s.length; a++) e.push(s[a]);
                    return e
                }
                function s(t, e) {
                    this.typeNumber = -1,
                    this.errorCorrectLevel = e,
                    this.modules = null,
                    this.moduleCount = 0,
                    this.dataCache = null,
                    this.rsBlocks = null,
                    this.totalDataCount = -1,
                    this.data = t,
                    this.utf8bytes = o(t),
                    this.make()
                }
                function a(t, e) {
                    if (void 0 == t.length) throw new Error(t.length + "/" + e);
                    for (var i = 0; i < t.length && 0 == t[i];) i++;
                    this.num = new Array(t.length - i + e);
                    for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
                }
                function r() {
                    this.buffer = new Array,
                    this.length = 0
                }
                function n(t) {
                    return 128 > t ? [t] : 2048 > t ? (c0 = 192 + (t >> 6), c1 = 128 + (63 & t), [c0, c1]) : (c0 = 224 + (t >> 12), c1 = 128 + (t >> 6 & 63), c2 = 128 + (63 & t), [c0, c1, c2])
                }
                function o(t) {
                    for (var e = [], i = 0; i < t.length; i++) for (var o = t.charCodeAt(i), s = n(o), a = 0; a < s.length; a++) e.push(s[a]);
                    return e
                }
                function s(t, e) {
                    this.typeNumber = -1,
                    this.errorCorrectLevel = e,
                    this.modules = null,
                    this.moduleCount = 0,
                    this.dataCache = null,
                    this.rsBlocks = null,
                    this.totalDataCount = -1,
                    this.data = t,
                    this.utf8bytes = o(t),
                    this.make()
                }
                function a(t, e) {
                    if (void 0 == t.length) throw new Error(t.length + "/" + e);
                    for (var i = 0; i < t.length && 0 == t[i];) i++;
                    this.num = new Array(t.length - i + e);
                    for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
                }
                function r() {
                    this.buffer = new Array,
                    this.length = 0
                }
                var d = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2);
                var u = [],
                c = function(t) {
                    "string" == typeof t && (t = {
                        text: t
                    }),
                    this.options = d.extend({},
                    {
                        text: "",
                        render: "",
                        width: 256,
                        height: 256,
                        correctLevel: 3,
                        background: "#ffffff",
                        foreground: "#000000"
                    },
                    t);
                    for (var e = null,
                    i = 0,
                    n = u.length; n > i; i++) if (u[i].text == this.options.text && u[i].text.correctLevel == this.options.correctLevel) {
                        e = u[i].obj;
                        break
                    }
                    if (i == n && (e = new s(this.options.text, this.options.correctLevel), u.push({
                        text: this.options.text,
                        correctLevel: this.options.correctLevel,
                        obj: e
                    })), this.options.render) switch (this.options.render) {
                    case "canvas":
                        return this.createCanvas(e);
                    case "table":
                        return this.createTable(e);
                    case "svg":
                        return this.createSVG(e);
                    default:
                        return this.createDefault(e)
                    }
                    return this.createDefault(e)
                };
                c.prototype.createDefault = function(t) {
                    var e = document.createElement("canvas");
                    return e.getContext ? this.createCanvas(t) : document.createElementNS && document.createElementNS(SVG_NS, "svg").createSVGRect ? this.createSVG(t) : this.createTable(t)
                },
                c.prototype.createCanvas = function(t) {
                    var e = document.createElement("canvas");
                    e.width = this.options.width,
                    e.height = this.options.height;
                    for (var i = e.getContext("2d"), n = (this.options.width / t.getModuleCount()).toPrecision(4), o = this.options.height / t.getModuleCount().toPrecision(4), s = 0; s < t.getModuleCount(); s++) for (var a = 0; a < t.getModuleCount(); a++) {
                        i.fillStyle = t.modules[s][a] ? this.options.foreground: this.options.background;
                        var r = Math.ceil((a + 1) * n) - Math.floor(a * n),
                        l = Math.ceil((s + 1) * n) - Math.floor(s * n);
                        i.fillRect(Math.round(a * n), Math.round(s * o), r, l)
                    }
                    return e
                },
                c.prototype.createTable = function(t) {
                    var e = [];
                    e.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: ' + this.options.background + ';">');
                    var i = -1,
                    n = -1,
                    o = -1,
                    s = -1;
                    i = o = Math.floor(this.options.width / t.getModuleCount()),
                    n = s = Math.floor(this.options.height / t.getModuleCount()),
                    0 >= o && (i = t.getModuleCount() < 80 ? 2 : 1),
                    0 >= s && (n = t.getModuleCount() < 80 ? 2 : 1),
                    foreTd = '<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color: " + this.options.foreground + '"></td>',
                    backTd = '<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color: " + this.options.background + '"></td>',
                    l = t.getModuleCount();
                    for (var a = 0; a < l; a++) {
                        e.push('<tr style="border:0px; margin:0px; padding:0px; height: ' + n + 'px">');
                        for (var r = 0; r < l; r++) e.push(t.modules[a][r] ? foreTd: backTd);
                        e.push("</tr>")
                    }
                    e.push("</table>");
                    var d = document.createElement("span");
                    return d.innerHTML = e.join(""),
                    d.firstChild
                },
                c.prototype.createSVG = function(t) {
                    for (var e, i, n, o, s = t.getModuleCount(), a = this.options.height / this.options.width, r = '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.options.width + 'px" height="' + this.options.height + 'px" viewbox="0 0 ' + 10 * s + " " + 10 * s * a + '">', l = "<path ", u = ' style="stroke-width:0.5;stroke:' + this.options.foreground + ";fill:" + this.options.foreground + ';"></path>', c = ' style="stroke-width:0.5;stroke:' + this.options.background + ";fill:" + this.options.background + ';"></path>', h = 0; s > h; h++) for (var p = 0; s > p; p++) e = 10 * p,
                    n = 10 * h * a,
                    i = 10 * (p + 1),
                    o = 10 * (h + 1) * a,
                    r += l + 'd="M ' + e + "," + n + " L " + i + "," + n + " L " + i + "," + o + " L " + e + "," + o + ' Z"',
                    r += t.modules[h][p] ? u: c;
                    return r += "</svg>",
                    d(r)[0]
                },
                s.prototype = {
                    constructor: s,
                    getModuleCount: function() {
                        return this.moduleCount
                    },
                    make: function() {
                        this.getRightType(),
                        this.dataCache = this.createData(),
                        this.createQrcode()
                    },
                    makeImpl: function(t) {
                        this.moduleCount = 4 * this.typeNumber + 17,
                        this.modules = new Array(this.moduleCount);
                        for (var e = 0; e < this.moduleCount; e++) this.modules[e] = new Array(this.moduleCount);
                        this.setupPositionProbePattern(0, 0),
                        this.setupPositionProbePattern(this.moduleCount - 7, 0),
                        this.setupPositionProbePattern(0, this.moduleCount - 7),
                        this.setupPositionAdjustPattern(),
                        this.setupTimingPattern(),
                        this.setupTypeInfo(!0, t),
                        this.typeNumber >= 7 && this.setupTypeNumber(!0),
                        this.mapData(this.dataCache, t)
                    },
                    setupPositionProbePattern: function(t, e) {
                        for (var i = -1; 7 >= i; i++) if (! ( - 1 >= t + i || this.moduleCount <= t + i)) for (var n = -1; 7 >= n; n++) - 1 >= e + n || this.moduleCount <= e + n || (this.modules[t + i][e + n] = i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n ? !0 : !1)
                    },
                    createQrcode: function() {
                        for (var t = 0,
                        e = 0,
                        i = null,
                        n = 0; 8 > n; n++) {
                            this.makeImpl(n);
                            var o = f.getLostPoint(this); (0 == n || t > o) && (t = o, e = n, i = this.modules)
                        }
                        this.modules = i,
                        this.setupTypeInfo(!1, e),
                        this.typeNumber >= 7 && this.setupTypeNumber(!1)
                    },
                    setupTimingPattern: function() {
                        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0, null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0))
                    },
                    setupPositionAdjustPattern: function() {
                        for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
                            var n = t[e],
                            o = t[i];
                            if (null == this.modules[n][o]) for (var s = -2; 2 >= s; s++) for (var a = -2; 2 >= a; a++) this.modules[n + s][o + a] = -2 == s || 2 == s || -2 == a || 2 == a || 0 == s && 0 == a ? !0 : !1
                        }
                    },
                    setupTypeNumber: function(t) {
                        for (var e = f.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                            var n = !t && 1 == (e >> i & 1);
                            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n,
                            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
                        }
                    },
                    setupTypeInfo: function(t, e) {
                        for (var i = h[this.errorCorrectLevel] << 3 | e, n = f.getBCHTypeInfo(i), o = 0; 15 > o; o++) {
                            var s = !t && 1 == (n >> o & 1);
                            6 > o ? this.modules[o][8] = s: 8 > o ? this.modules[o + 1][8] = s: this.modules[this.moduleCount - 15 + o][8] = s;
                            var s = !t && 1 == (n >> o & 1);
                            8 > o ? this.modules[8][this.moduleCount - o - 1] = s: 9 > o ? this.modules[8][15 - o - 1 + 1] = s: this.modules[8][15 - o - 1] = s
                        }
                        this.modules[this.moduleCount - 8][8] = !t
                    },
                    createData: function() {
                        var t = new r,
                        e = this.typeNumber > 9 ? 16 : 8;
                        t.put(4, 4),
                        t.put(this.utf8bytes.length, e);
                        for (var i = 0,
                        n = this.utf8bytes.length; n > i; i++) t.put(this.utf8bytes[i], 8);
                        for (t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4); t.length % 8 != 0;) t.putBit(!1);
                        for (;;) {
                            if (t.length >= 8 * this.totalDataCount) break;
                            if (t.put(s.PAD0, 8), t.length >= 8 * this.totalDataCount) break;
                            t.put(s.PAD1, 8)
                        }
                        return this.createBytes(t)
                    },
                    createBytes: function(t) {
                        for (var e = 0,
                        i = 0,
                        n = 0,
                        o = this.rsBlock.length / 3,
                        s = new Array,
                        r = 0; o > r; r++) for (var l = this.rsBlock[3 * r + 0], d = this.rsBlock[3 * r + 1], u = this.rsBlock[3 * r + 2], c = 0; l > c; c++) s.push([u, d]);
                        for (var h = new Array(s.length), p = new Array(s.length), m = 0; m < s.length; m++) {
                            var v = s[m][0],
                            g = s[m][1] - v;
                            i = Math.max(i, v),
                            n = Math.max(n, g),
                            h[m] = new Array(v);
                            for (var r = 0; r < h[m].length; r++) h[m][r] = 255 & t.buffer[r + e];
                            e += v;
                            var w = f.getErrorCorrectPolynomial(g),
                            y = new a(h[m], w.getLength() - 1),
                            b = y.mod(w);
                            p[m] = new Array(w.getLength() - 1);
                            for (var r = 0; r < p[m].length; r++) {
                                var T = r + b.getLength() - p[m].length;
                                p[m][r] = T >= 0 ? b.get(T) : 0
                            }
                        }
                        for (var x = new Array(this.totalDataCount), C = 0, r = 0; i > r; r++) for (var m = 0; m < s.length; m++) r < h[m].length && (x[C++] = h[m][r]);
                        for (var r = 0; n > r; r++) for (var m = 0; m < s.length; m++) r < p[m].length && (x[C++] = p[m][r]);
                        return x
                    },
                    mapData: function(t, e) {
                        for (var i = -1,
                        n = this.moduleCount - 1,
                        o = 7,
                        s = 0,
                        a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--;;) {
                            for (var r = 0; 2 > r; r++) if (null == this.modules[n][a - r]) {
                                var l = !1;
                                s < t.length && (l = 1 == (t[s] >>> o & 1));
                                var d = f.getMask(e, n, a - r);
                                d && (l = !l),
                                this.modules[n][a - r] = l,
                                o--,
                                -1 == o && (s++, o = 7)
                            }
                            if (n += i, 0 > n || this.moduleCount <= n) {
                                n -= i,
                                i = -i;
                                break
                            }
                        }
                    }
                },
                s.PAD0 = 236,
                s.PAD1 = 17;
                for (var h = [1, 0, 3, 2], p = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                },
                f = {
                    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
                        return (t << 10 | e) ^ f.G15_MASK
                    },
                    getBCHTypeNumber: function(t) {
                        for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
                        return t << 12 | e
                    },
                    getBCHDigit: function(t) {
                        for (var e = 0; 0 != t;) e++,
                        t >>>= 1;
                        return e
                    },
                    getPatternPosition: function(t) {
                        return f.PATTERN_POSITION_TABLE[t - 1]
                    },
                    getMask: function(t, e, i) {
                        switch (t) {
                        case p.PATTERN000:
                            return (e + i) % 2 == 0;
                        case p.PATTERN001:
                            return e % 2 == 0;
                        case p.PATTERN010:
                            return i % 3 == 0;
                        case p.PATTERN011:
                            return (e + i) % 3 == 0;
                        case p.PATTERN100:
                            return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
                        case p.PATTERN101:
                            return e * i % 2 + e * i % 3 == 0;
                        case p.PATTERN110:
                            return (e * i % 2 + e * i % 3) % 2 == 0;
                        case p.PATTERN111:
                            return (e * i % 3 + (e + i) % 2) % 2 == 0;
                        default:
                            throw new Error("bad maskPattern:" + t)
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var e = new a([1], 0), i = 0; t > i; i++) e = e.multiply(new a([1, m.gexp(i)], 0));
                        return e
                    },
                    getLostPoint: function(t) {
                        for (var e = t.getModuleCount(), i = 0, n = 0, o = 0; e > o; o++) for (var s = 0,
                        a = t.modules[o][0], r = 0; e > r; r++) {
                            var l = t.modules[o][r];
                            if (e - 6 > r && l && !t.modules[o][r + 1] && t.modules[o][r + 2] && t.modules[o][r + 3] && t.modules[o][r + 4] && !t.modules[o][r + 5] && t.modules[o][r + 6] && (e - 10 > r ? t.modules[o][r + 7] && t.modules[o][r + 8] && t.modules[o][r + 9] && t.modules[o][r + 10] && (i += 40) : r > 3 && t.modules[o][r - 1] && t.modules[o][r - 2] && t.modules[o][r - 3] && t.modules[o][r - 4] && (i += 40)), e - 1 > o && e - 1 > r) {
                                var d = 0;
                                l && d++,
                                t.modules[o + 1][r] && d++,
                                t.modules[o][r + 1] && d++,
                                t.modules[o + 1][r + 1] && d++,
                                (0 == d || 4 == d) && (i += 3)
                            }
                            a ^ l ? s++:(a = l, s >= 5 && (i += 3 + s - 5), s = 1),
                            l && n++
                        }
                        for (var r = 0; e > r; r++) for (var s = 0,
                        a = t.modules[0][r], o = 0; e > o; o++) {
                            var l = t.modules[o][r];
                            e - 6 > o && l && !t.modules[o + 1][r] && t.modules[o + 2][r] && t.modules[o + 3][r] && t.modules[o + 4][r] && !t.modules[o + 5][r] && t.modules[o + 6][r] && (e - 10 > o ? t.modules[o + 7][r] && t.modules[o + 8][r] && t.modules[o + 9][r] && t.modules[o + 10][r] && (i += 40) : o > 3 && t.modules[o - 1][r] && t.modules[o - 2][r] && t.modules[o - 3][r] && t.modules[o - 4][r] && (i += 40)),
                            a ^ l ? s++:(a = l, s >= 5 && (i += 3 + s - 5), s = 1)
                        }
                        var u = Math.abs(100 * n / e / e - 50) / 5;
                        return i += 10 * u
                    }
                },
                m = {
                    glog: function(t) {
                        if (1 > t) throw new Error("glog(" + t + ")");
                        return m.LOG_TABLE[t]
                    },
                    gexp: function(t) {
                        for (; 0 > t;) t += 255;
                        for (; t >= 256;) t -= 255;
                        return m.EXP_TABLE[t]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                },
                v = 0; 8 > v; v++) m.EXP_TABLE[v] = 1 << v;
                for (var v = 8; 256 > v; v++) m.EXP_TABLE[v] = m.EXP_TABLE[v - 4] ^ m.EXP_TABLE[v - 5] ^ m.EXP_TABLE[v - 6] ^ m.EXP_TABLE[v - 8];
                for (var v = 0; 255 > v; v++) m.LOG_TABLE[m.EXP_TABLE[v]] = v;
                a.prototype = {
                    get: function(t) {
                        return this.num[t]
                    },
                    getLength: function() {
                        return this.num.length
                    },
                    multiply: function(t) {
                        for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= m.gexp(m.glog(this.get(i)) + m.glog(t.get(n)));
                        return new a(e, 0)
                    },
                    mod: function(t) {
                        var e = this.getLength(),
                        i = t.getLength();
                        if (0 > e - i) return this;
                        for (var n = new Array(e), o = 0; e > o; o++) n[o] = this.get(o);
                        for (; n.length >= i;) {
                            for (var s = m.glog(n[0]) - m.glog(t.get(0)), o = 0; o < t.getLength(); o++) n[o] ^= m.gexp(m.glog(t.get(o)) + s);
                            for (; 0 == n[0];) n.shift()
                        }
                        return new a(n, 0)
                    }
                };
                var g = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
                s.prototype.getRightType = function() {
                    for (var t = 1; 41 > t; t++) {
                        var e = g[4 * (t - 1) + this.errorCorrectLevel];
                        if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);
                        for (var i = e.length / 3,
                        n = 0,
                        o = 0; i > o; o++) {
                            var s = e[3 * o + 0],
                            a = e[3 * o + 2];
                            n += a * s
                        }
                        var r = t > 9 ? 2 : 1;
                        if (this.utf8bytes.length + r < n || 40 == t) {
                            this.typeNumber = t,
                            this.rsBlock = e,
                            this.totalDataCount = n;
                            break
                        }
                    }
                },
                r.prototype = {
                    get: function(t) {
                        var e = Math.floor(t / 8);
                        return this.buffer[e] >>> 7 - t % 8 & 1
                    },
                    put: function(t, e) {
                        for (var i = 0; e > i; i++) this.putBit(t >>> e - i - 1 & 1)
                    },
                    putBit: function(t) {
                        var e = Math.floor(this.length / 8);
                        this.buffer.length <= e && this.buffer.push(0),
                        t && (this.buffer[e] |= 128 >>> this.length % 8),
                        this.length++
                    }
                },
                s.prototype = {
                    constructor: s,
                    getModuleCount: function() {
                        return this.moduleCount
                    },
                    make: function() {
                        this.getRightType(),
                        this.dataCache = this.createData(),
                        this.createQrcode()
                    },
                    makeImpl: function(t) {
                        this.moduleCount = 4 * this.typeNumber + 17,
                        this.modules = new Array(this.moduleCount);
                        for (var e = 0; e < this.moduleCount; e++) this.modules[e] = new Array(this.moduleCount);
                        this.setupPositionProbePattern(0, 0),
                        this.setupPositionProbePattern(this.moduleCount - 7, 0),
                        this.setupPositionProbePattern(0, this.moduleCount - 7),
                        this.setupPositionAdjustPattern(),
                        this.setupTimingPattern(),
                        this.setupTypeInfo(!0, t),
                        this.typeNumber >= 7 && this.setupTypeNumber(!0),
                        this.mapData(this.dataCache, t)
                    },
                    setupPositionProbePattern: function(t, e) {
                        for (var i = -1; 7 >= i; i++) if (! ( - 1 >= t + i || this.moduleCount <= t + i)) for (var n = -1; 7 >= n; n++) - 1 >= e + n || this.moduleCount <= e + n || (this.modules[t + i][e + n] = i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n ? !0 : !1)
                    },
                    createQrcode: function() {
                        for (var t = 0,
                        e = 0,
                        i = null,
                        n = 0; 8 > n; n++) {
                            this.makeImpl(n);
                            var o = f.getLostPoint(this); (0 == n || t > o) && (t = o, e = n, i = this.modules)
                        }
                        this.modules = i,
                        this.setupTypeInfo(!1, e),
                        this.typeNumber >= 7 && this.setupTypeNumber(!1)
                    },
                    setupTimingPattern: function() {
                        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0, null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0))
                    },
                    setupPositionAdjustPattern: function() {
                        for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
                            var n = t[e],
                            o = t[i];
                            if (null == this.modules[n][o]) for (var s = -2; 2 >= s; s++) for (var a = -2; 2 >= a; a++) this.modules[n + s][o + a] = -2 == s || 2 == s || -2 == a || 2 == a || 0 == s && 0 == a ? !0 : !1
                        }
                    },
                    setupTypeNumber: function(t) {
                        for (var e = f.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                            var n = !t && 1 == (e >> i & 1);
                            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n,
                            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
                        }
                    },
                    setupTypeInfo: function(t, e) {
                        for (var i = h[this.errorCorrectLevel] << 3 | e, n = f.getBCHTypeInfo(i), o = 0; 15 > o; o++) {
                            var s = !t && 1 == (n >> o & 1);
                            6 > o ? this.modules[o][8] = s: 8 > o ? this.modules[o + 1][8] = s: this.modules[this.moduleCount - 15 + o][8] = s;
                            var s = !t && 1 == (n >> o & 1);
                            8 > o ? this.modules[8][this.moduleCount - o - 1] = s: 9 > o ? this.modules[8][15 - o - 1 + 1] = s: this.modules[8][15 - o - 1] = s
                        }
                        this.modules[this.moduleCount - 8][8] = !t
                    },
                    createData: function() {
                        var t = new r,
                        e = this.typeNumber > 9 ? 16 : 8;
                        t.put(4, 4),
                        t.put(this.utf8bytes.length, e);
                        for (var i = 0,
                        n = this.utf8bytes.length; n > i; i++) t.put(this.utf8bytes[i], 8);
                        for (t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4); t.length % 8 != 0;) t.putBit(!1);
                        for (;;) {
                            if (t.length >= 8 * this.totalDataCount) break;
                            if (t.put(s.PAD0, 8), t.length >= 8 * this.totalDataCount) break;
                            t.put(s.PAD1, 8)
                        }
                        return this.createBytes(t)
                    },
                    createBytes: function(t) {
                        for (var e = 0,
                        i = 0,
                        n = 0,
                        o = this.rsBlock.length / 3,
                        s = new Array,
                        r = 0; o > r; r++) for (var l = this.rsBlock[3 * r + 0], d = this.rsBlock[3 * r + 1], u = this.rsBlock[3 * r + 2], c = 0; l > c; c++) s.push([u, d]);
                        for (var h = new Array(s.length), p = new Array(s.length), m = 0; m < s.length; m++) {
                            var v = s[m][0],
                            g = s[m][1] - v;
                            i = Math.max(i, v),
                            n = Math.max(n, g),
                            h[m] = new Array(v);
                            for (var r = 0; r < h[m].length; r++) h[m][r] = 255 & t.buffer[r + e];
                            e += v;
                            var w = f.getErrorCorrectPolynomial(g),
                            y = new a(h[m], w.getLength() - 1),
                            b = y.mod(w);
                            p[m] = new Array(w.getLength() - 1);
                            for (var r = 0; r < p[m].length; r++) {
                                var T = r + b.getLength() - p[m].length;
                                p[m][r] = T >= 0 ? b.get(T) : 0
                            }
                        }
                        for (var x = new Array(this.totalDataCount), C = 0, r = 0; i > r; r++) for (var m = 0; m < s.length; m++) r < h[m].length && (x[C++] = h[m][r]);
                        for (var r = 0; n > r; r++) for (var m = 0; m < s.length; m++) r < p[m].length && (x[C++] = p[m][r]);
                        return x
                    },
                    mapData: function(t, e) {
                        for (var i = -1,
                        n = this.moduleCount - 1,
                        o = 7,
                        s = 0,
                        a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--;;) {
                            for (var r = 0; 2 > r; r++) if (null == this.modules[n][a - r]) {
                                var l = !1;
                                s < t.length && (l = 1 == (t[s] >>> o & 1));
                                var d = f.getMask(e, n, a - r);
                                d && (l = !l),
                                this.modules[n][a - r] = l,
                                o--,
                                -1 == o && (s++, o = 7)
                            }
                            if (n += i, 0 > n || this.moduleCount <= n) {
                                n -= i,
                                i = -i;
                                break
                            }
                        }
                    }
                },
                s.PAD0 = 236,
                s.PAD1 = 17;
                for (var h = [1, 0, 3, 2], p = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                },
                f = {
                    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
                        return (t << 10 | e) ^ f.G15_MASK
                    },
                    getBCHTypeNumber: function(t) {
                        for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
                        return t << 12 | e
                    },
                    getBCHDigit: function(t) {
                        for (var e = 0; 0 != t;) e++,
                        t >>>= 1;
                        return e
                    },
                    getPatternPosition: function(t) {
                        return f.PATTERN_POSITION_TABLE[t - 1]
                    },
                    getMask: function(t, e, i) {
                        switch (t) {
                        case p.PATTERN000:
                            return (e + i) % 2 == 0;
                        case p.PATTERN001:
                            return e % 2 == 0;
                        case p.PATTERN010:
                            return i % 3 == 0;
                        case p.PATTERN011:
                            return (e + i) % 3 == 0;
                        case p.PATTERN100:
                            return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
                        case p.PATTERN101:
                            return e * i % 2 + e * i % 3 == 0;
                        case p.PATTERN110:
                            return (e * i % 2 + e * i % 3) % 2 == 0;
                        case p.PATTERN111:
                            return (e * i % 3 + (e + i) % 2) % 2 == 0;
                        default:
                            throw new Error("bad maskPattern:" + t)
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var e = new a([1], 0), i = 0; t > i; i++) e = e.multiply(new a([1, m.gexp(i)], 0));
                        return e
                    },
                    getLostPoint: function(t) {
                        for (var e = t.getModuleCount(), i = 0, n = 0, o = 0; e > o; o++) for (var s = 0,
                        a = t.modules[o][0], r = 0; e > r; r++) {
                            var l = t.modules[o][r];
                            if (e - 6 > r && l && !t.modules[o][r + 1] && t.modules[o][r + 2] && t.modules[o][r + 3] && t.modules[o][r + 4] && !t.modules[o][r + 5] && t.modules[o][r + 6] && (e - 10 > r ? t.modules[o][r + 7] && t.modules[o][r + 8] && t.modules[o][r + 9] && t.modules[o][r + 10] && (i += 40) : r > 3 && t.modules[o][r - 1] && t.modules[o][r - 2] && t.modules[o][r - 3] && t.modules[o][r - 4] && (i += 40)), e - 1 > o && e - 1 > r) {
                                var d = 0;
                                l && d++,
                                t.modules[o + 1][r] && d++,
                                t.modules[o][r + 1] && d++,
                                t.modules[o + 1][r + 1] && d++,
                                (0 == d || 4 == d) && (i += 3)
                            }
                            a ^ l ? s++:(a = l, s >= 5 && (i += 3 + s - 5), s = 1),
                            l && n++
                        }
                        for (var r = 0; e > r; r++) for (var s = 0,
                        a = t.modules[0][r], o = 0; e > o; o++) {
                            var l = t.modules[o][r];
                            e - 6 > o && l && !t.modules[o + 1][r] && t.modules[o + 2][r] && t.modules[o + 3][r] && t.modules[o + 4][r] && !t.modules[o + 5][r] && t.modules[o + 6][r] && (e - 10 > o ? t.modules[o + 7][r] && t.modules[o + 8][r] && t.modules[o + 9][r] && t.modules[o + 10][r] && (i += 40) : o > 3 && t.modules[o - 1][r] && t.modules[o - 2][r] && t.modules[o - 3][r] && t.modules[o - 4][r] && (i += 40)),
                            a ^ l ? s++:(a = l, s >= 5 && (i += 3 + s - 5), s = 1)
                        }
                        var u = Math.abs(100 * n / e / e - 50) / 5;
                        return i += 10 * u
                    }
                },
                m = {
                    glog: function(t) {
                        if (1 > t) throw new Error("glog(" + t + ")");
                        return m.LOG_TABLE[t]
                    },
                    gexp: function(t) {
                        for (; 0 > t;) t += 255;
                        for (; t >= 256;) t -= 255;
                        return m.EXP_TABLE[t]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                },
                v = 0; 8 > v; v++) m.EXP_TABLE[v] = 1 << v;
                for (var v = 8; 256 > v; v++) m.EXP_TABLE[v] = m.EXP_TABLE[v - 4] ^ m.EXP_TABLE[v - 5] ^ m.EXP_TABLE[v - 6] ^ m.EXP_TABLE[v - 8];
                for (var v = 0; 255 > v; v++) m.LOG_TABLE[m.EXP_TABLE[v]] = v;
                a.prototype = {
                    get: function(t) {
                        return this.num[t]
                    },
                    getLength: function() {
                        return this.num.length
                    },
                    multiply: function(t) {
                        for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= m.gexp(m.glog(this.get(i)) + m.glog(t.get(n)));
                        return new a(e, 0)
                    },
                    mod: function(t) {
                        var e = this.getLength(),
                        i = t.getLength();
                        if (0 > e - i) return this;
                        for (var n = new Array(e), o = 0; e > o; o++) n[o] = this.get(o);
                        for (; n.length >= i;) {
                            for (var s = m.glog(n[0]) - m.glog(t.get(0)), o = 0; o < t.getLength(); o++) n[o] ^= m.gexp(m.glog(t.get(o)) + s);
                            for (; 0 == n[0];) n.shift()
                        }
                        return new a(n, 0)
                    }
                },
                g = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                s.prototype.getRightType = function() {
                    for (var t = 1; 41 > t; t++) {
                        var e = g[4 * (t - 1) + this.errorCorrectLevel];
                        if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);
                        for (var i = e.length / 3,
                        n = 0,
                        o = 0; i > o; o++) {
                            var s = e[3 * o + 0],
                            a = e[3 * o + 2];
                            n += a * s
                        }
                        var r = t > 9 ? 2 : 1;
                        if (this.utf8bytes.length + r < n || 40 == t) {
                            this.typeNumber = t,
                            this.rsBlock = e,
                            this.totalDataCount = n;
                            break
                        }
                    }
                },
                r.prototype = {
                    get: function(t) {
                        var e = Math.floor(t / 8);
                        return this.buffer[e] >>> 7 - t % 8 & 1
                    },
                    put: function(t, e) {
                        for (var i = 0; e > i; i++) this.putBit(t >>> e - i - 1 & 1)
                    },
                    putBit: function(t) {
                        var e = Math.floor(this.length / 8);
                        this.buffer.length <= e && this.buffer.push(0),
                        t && (this.buffer[e] |= 128 >>> this.length % 8),
                        this.length++
                    }
                },
                d.AMUI.qrcode = c,
                e.exports = c
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        32 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    try {
                        return l in r && r[l]
                    } catch(t) {
                        return ! 1
                    }
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2);
                var s, a = {},
                r = window,
                l = "localStorage";
                a.disabled = !1,
                a.version = "1.3.17",
                a.set = function(t, e) {},
                a.get = function(t, e) {},
                a.has = function(t) {
                    return void 0 !== a.get(t)
                },
                a.remove = function(t) {},
                a.clear = function() {},
                a.transact = function(t, e, i) {
                    null == i && (i = e, e = null),
                    null == e && (e = {});
                    var n = a.get(t, e);
                    i(n),
                    a.set(t, n)
                },
                a.getAll = function() {},
                a.forEach = function() {},
                a.serialize = function(t) {
                    return JSON.stringify(t)
                },
                a.deserialize = function(t) {
                    if ("string" != typeof t) return void 0;
                    try {
                        return JSON.parse(t)
                    } catch(e) {
                        return t || void 0
                    }
                },
                n() && (s = r[l], a.set = function(t, e) {
                    return void 0 === e ? a.remove(t) : (s.setItem(t, a.serialize(e)), e)
                },
                a.get = function(t, e) {
                    var i = a.deserialize(s.getItem(t));
                    return void 0 === i ? e: i
                },
                a.remove = function(t) {
                    s.removeItem(t)
                },
                a.clear = function() {
                    s.clear()
                },
                a.getAll = function() {
                    var t = {};
                    return a.forEach(function(e, i) {
                        t[e] = i
                    }),
                    t
                },
                a.forEach = function(t) {
                    for (var e = 0; e < s.length; e++) {
                        var i = s.key(e);
                        t(i, a.get(i))
                    }
                });
                try {
                    var d = "__storeJs__";
                    a.set(d, d),
                    a.get(d) != d && (a.disabled = !0),
                    a.remove(d)
                } catch(u) {
                    a.disabled = !0
                }
                a.enabled = !a.disabled,
                o.AMUI = o.AMUI || {},
                o.AMUI.store = a,
                e.exports = a
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        33 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    var t = o('[data-am-widget="accordion"]'),
                    e = {
                        item: ".am-accordion-item",
                        title: ".am-accordion-title",
                        body: ".am-accordion-bd",
                        disabled: ".am-disabled"
                    };
                    t.each(function(t, i) {
                        var n = s.utils.parseOptions(o(i).attr("data-am-accordion")),
                        a = o(i).find(e.title);
                        a.on("click.accordion.amui",
                        function() {
                            var t = o(this).next(e.body),
                            s = o(this).parent(e.item),
                            a = t.data("amui.collapse");
                            s.is(e.disabled) || (s.toggleClass("am-active"), a ? t.collapse("toggle") : t.collapse(), !n.multiple && o(i).children(".am-active").not(s).not(e.disabled).removeClass("am-active").find(e.body + ".am-in").collapse("close"))
                        })
                    })
                }
                t(2),
                t(6);
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = o.AMUI;
                o(n),
                e.exports = o.AMUI.accordion = {
                    VERSION: "2.1.0",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2,
            6 : 6
        }],
        34 : [function(t, e, i) {
            "use strict";
            e.exports = {
                VERSION: "2.0.1"
            }
        },
        {}],
        35 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    var t = o(".ds-thread"),
                    e = t.parent('[data-am-widget="duoshuo"]').attr("data-ds-short-name"),
                    i = ("https:" == document.location.protocol ? "https:": "http:") + "//static.duoshuo.com/embed.js";
                    if (t.length && e && (window.duoshuoQuery = {
                        short_name: e
                    },
                    !o('script[src="' + i + '"]').length)) {
                        var n = o("<script>", {
                            async: !0,
                            type: "text/javascript",
                            src: i,
                            charset: "utf-8"
                        });
                        o("body").append(n)
                    }
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                o(window).on("load", n),
                e.exports = o.AMUI.duoshuo = {
                    VERSION: "2.0.1",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        36 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    o(".am-figure").each(function(t, e) {
                        var i, n = s.utils.parseOptions(o(e).attr("data-am-figure")),
                        a = o(e);
                        if (n.pureview) if ("auto" === n.pureview) {
                            var r = o.isImgZoomAble(a.find("img")[0]);
                            r && a.pureview()
                        } else a.addClass("am-figure-zoomable").pureview();
                        i = a.data("amui.pureview"),
                        i && a.on("click", ":not(img)",
                        function() {
                            i.open(0)
                        })
                    })
                }
                t(2),
                t(17);
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = o.AMUI;
                o.isImgZoomAble = function(t) {
                    var e = new Image;
                    e.src = t.src;
                    var i = o(t).width() < e.width;
                    return i && o(t).closest(".am-figure").addClass("am-figure-zoomable"),
                    i
                },
                o(window).on("load", n),
                e.exports = o.AMUI.figure = {
                    VERSION: "2.0.3",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            17 : 17,
            2 : 2
        }],
        37 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    o(".am-footer-ysp").on("click",
                    function() {
                        o("#am-footer-modal").modal()
                    });
                    var t = s.utils.parseOptions(o(".am-footer").data("amFooter"));
                    t.addToHS && a(),
                    o('[data-rel="desktop"]').on("click",
                    function(t) {
                        t.preventDefault(),
                        window.AMPlatform ? window.AMPlatform.util.goDesktop() : (r.set("allmobilize", "desktop", "", "/"), window.location = window.location)
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2);
                t(12);
                var a = t(3),
                r = t(27);
                o(n),
                e.exports = o.AMUI.footer = {
                    VERSION: "3.1.2",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            12 : 12,
            2 : 2,
            27 : 27,
            3 : 3
        }],
        38 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    var t = o('[data-am-widget="gallery"]');
                    t.each(function() {
                        var t = s.utils.parseOptions(o(this).attr("data-am-gallery"));
                        t.pureview && ("object" == typeof t.pureview ? o(this).pureview(t.pureview) : o(this).pureview())
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(17);
                var s = o.AMUI;
                o(n),
                e.exports = o.AMUI.gallery = {
                    VERSION: "3.0.0",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            17 : 17,
            2 : 2
        }],
        39 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    function t() {
                        i[(n.scrollTop() > 50 ? "add": "remove") + "Class"]("am-active")
                    }
                    var e = o('[data-am-widget="gotop"]'),
                    i = e.filter(".am-gotop-fixed"),
                    n = o(window);
                    e.data("init") || (e.find("a").on("click",
                    function(t) {
                        t.preventDefault(),
                        n.smoothScroll()
                    }), t(), n.on("scroll.gotop.amui", o.AMUI.utils.debounce(t, 100)), e.data("init", !0))
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(22),
                o(n),
                e.exports = o.AMUI.gotop = {
                    VERSION: "4.0.2",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2,
            22 : 22
        }],
        40 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    o('[data-am-widget="header"]').each(function() {
                        return o(this).hasClass("am-header-fixed") ? (o("body").addClass("am-with-fixed-header"), !1) : void 0
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                o(n),
                e.exports = o.AMUI.header = {
                    VERSION: "2.0.0",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        41 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                e.exports = n.AMUI.intro = {
                    VERSION: "4.0.2",
                    init: function() {}
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        42 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                e.exports = n.AMUI.listNews = {
                    VERSION: "4.0.0",
                    init: function() {}
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        43 : [function(t, e, i) { (function(i) {
                function n(t) {
                    var e = s("<script />", {
                        id: "am-map-api-0"
                    });
                    s("body").append(e),
                    e.on("load",
                    function() {
                        console.log("load");
                        var e = s("<script/>", {
                            id: "am-map-api-1"
                        });
                        s("body").append(e),
                        e.on("load",
                        function() {
                            var e = document.createElement("script");
                            e.textContent = "(" + t.toString() + ")();",
                            s("body")[0].appendChild(e)
                        }).attr("src", "http://api.map.baidu.com/getscript?type=quick&file=feature&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")
                    }).attr("src", "http://api.map.baidu.com/getscript?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")
                }
                function o() {
                    var t = document.querySelector(".am-map"),
                    e = 116.331398,
                    i = 39.897445,
                    n = t.getAttribute("data-name"),
                    o = t.getAttribute("data-address"),
                    s = t.getAttribute("data-longitude") || e,
                    a = t.getAttribute("data-latitude") || i,
                    r = t.getAttribute("data-setZoom") || 17,
                    l = t.getAttribute("data-icon"),
                    d = new BMap.Map("bd-map"),
                    u = new BMap.Point(s, a);
                    d.centerAndZoom(u, r),
                    t.getAttribute("data-zoomControl") && d.addControl(new BMap.ZoomControl),
                    t.getAttribute("data-scaleControl") && d.addControl(new BMap.ScaleControl);
                    var c = new BMap.Marker(u);
                    l && c.setIcon(new BMap.Icon(l, new BMap.Size(40, 40)));
                    var h = {
                        width: 200,
                        title: n
                    },
                    p = new BMap.InfoWindow("\u5730\u5740\uff1a" + o, h),
                    f = new BMap.Geocoder;
                    s == e && a == i ? f.getPoint(o,
                    function(t) {
                        t && (d.centerAndZoom(t, r), c.setPosition(t), d.addOverlay(c), d.openInfoWindow(p, t))
                    },
                    "") : f.getLocation(u,
                    function(t) {
                        d.centerAndZoom(u, r),
                        c.setPosition(u),
                        d.addOverlay(c),
                        o ? d.openInfoWindow(p, u) : d.openInfoWindow(new BMap.InfoWindow(o, h), u)
                    })
                }
                var s = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2);
                var a = function() {
                    s(".am-map").length && n(o)
                };
                s(a),
                e.exports = s.AMUI.map = {
                    VERSION: "2.0.2",
                    init: a
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        44 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    if (o("#mechat").length) {
                        var t = o('[data-am-widget="mechat"]'),
                        e = t.data("am-mechat-unitid"),
                        i = o("<script>", {
                            charset: "utf-8",
                            src: "http://mechatim.com/js/unit/button.js?id=" + e
                        });
                        o("body").append(i)
                    }
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                o(window).on("load", n),
                e.exports = o.AMUI.mechat = {
                    VERSION: "2.0.1",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        45 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(13),
                t(6);
                var o = t(11),
                s = function() {
                    var t = n('[data-am-widget="menu"]');
                    t.find(".am-menu-nav .am-parent > a").on("click",
                    function(t) {
                        t.preventDefault();
                        var e = n(this),
                        i = e.parent(),
                        o = e.next(".am-menu-sub");
                        i.toggleClass("am-open"),
                        o.collapse("toggle"),
                        i.siblings(".am-parent").removeClass("am-open").children(".am-menu-sub.am-in").collapse("close")
                    }),
                    t.filter("[data-am-menu-collapse]").find("> .am-menu-toggle").on("click",
                    function(t) {
                        t.preventDefault();
                        var e = n(this),
                        i = e.next(".am-menu-nav");
                        e.toggleClass("am-active"),
                        i.collapse("toggle")
                    }),
                    t.filter("[data-am-menu-offcanvas]").find("> .am-menu-toggle").on("click",
                    function(t) {
                        t.preventDefault();
                        var e = n(this),
                        i = e.next(".am-offcanvas");
                        e.toggleClass("am-active"),
                        i.offCanvas("open")
                    });
                    var e = '.am-offcanvas[data-dismiss-on="click"]',
                    i = n(e);
                    i.find("a").not(".am-parent>a").on("click",
                    function(t) {
                        n(this).parents(e).offCanvas("close")
                    }),
                    t.filter(".am-menu-one").each(function(t) {
                        var e, i = n(this),
                        s = n('<div class="am-menu-nav-sub-wrap"></div>'),
                        a = 0,
                        r = i.find(".am-menu-nav"),
                        l = r.children("li");
                        l.filter(".am-parent").each(function(t) {
                            n(this).attr("data-rel", "#am-menu-sub-" + t),
                            n(this).find(".am-menu-sub").attr("id", "am-menu-sub-" + t).appendTo(s)
                        }),
                        i.append(s),
                        r.wrap('<div class="am-menu-nav-wrap" id="am-menu-' + t + '">'),
                        l.each(function(t) {
                            a += parseFloat(n(this).css("width"))
                        }),
                        r.width(a);
                        var d = new o("#am-menu-" + t, {
                            eventPassthrough: !0,
                            scrollX: !0,
                            scrollY: !1,
                            preventDefault: !1
                        });
                        l.on("click",
                        function() {
                            var t = n(this);
                            t.addClass("am-active").siblings().removeClass("am-active"),
                            s.find(".am-menu-sub.am-in").collapse("close"),
                            t.is(".am-parent") ? !t.hasClass(".am-open") && s.find(t.attr("data-rel")).collapse("open") : t.siblings().removeClass("am-open"),
                            void 0 === e && (e = n(this).index() ? 0 : 1);
                            var o, a = n(this).index() > e,
                            l = n(this)[a ? "next": "prev"](),
                            u = l.offset() || n(this).offset(),
                            c = i.offset(),
                            h = parseInt(i.css("padding-left")); (a ? u.left + u.width > c.left + c.width: u.left < c.left) && (o = r.offset(), d.scrollTo(a ? c.width - u.left + o.left - u.width - h: o.left - u.left, 0, 400)),
                            e = n(this).index()
                        }),
                        i.on("touchmove",
                        function(t) {
                            t.preventDefault()
                        })
                    })
                };
                n(s),
                e.exports = n.AMUI.menu = {
                    VERSION: "4.0.3",
                    init: s
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            11 : 11,
            13 : 13,
            2 : 2,
            6 : 6
        }],
        46 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    function t() {
                        u.append(b),
                        u.find("li").not(".am-navbar-more").slice(i() - 1).appendTo(y),
                        n.append(y)
                    }
                    function e() {
                        return i() >= h ? (b.hide(), void y.find("li").insertBefore(b)) : (!n.find(".am-navbar-actions").length && t(), b.show(), void(u.find("li").length < i() ? y.find("li").slice(0, i() - u.find("li").length).insertBefore(b) : u.find("li").length > i() && (y.find("li").length ? u.find("li").not(b).slice(i() - 1).insertBefore(y.find("li").first()) : u.find("li").not(b).slice(i() - 1).appendTo(y))))
                    }
                    function i() {
                        return Math.floor((l.width() - m) / f)
                    }
                    var n = o('[data-am-widget="navbar"]');
                    if (n.length) {
                        var l = o(window),
                        d = o("body"),
                        u = n.find(".am-navbar-nav"),
                        c = n.find("li"),
                        h = c.length,
                        p = u.attr("class") && parseInt(u.attr("class").match(/am-avg-sm-(\d+)/)[1]) || 3,
                        f = 60,
                        m = 16,
                        v = c.filter("[data-am-navbar-share]"),
                        g = c.filter("[data-am-navbar-qrcode]"),
                        w = "am-active",
                        y = o('<ul class="am-navbar-actions"></ul>', {
                            id: r.utils.generateGUID("am-navbar-actions")
                        }),
                        b = o('<li class="am-navbar-labels am-navbar-more"><a href="javascript: void(0);"><span class="am-icon-angle-up"></span><span class="am-navbar-label">\u66f4\u591a</span></a></li>');
                        if ("fixed" == n.css("position") && d.addClass("am-with-fixed-navbar"), g.length) {
                            var T = "am-navbar-qrcode";
                            if (C = o("#" + T), !C.length) {
                                var x = g.attr("data-am-navbar-qrcode"),
                                C = o('<div class="am-modal am-modal-no-btn" id=""><div class="am-modal-dialog"><div class="am-modal-bd"></div></div></div>', {
                                    id: T
                                }),
                                E = C.find(".am-modal-bd");
                                if (x) E.html('<img src="' + x + '"/>');
                                else {
                                    var S = new a({
                                        render: "canvas",
                                        correctLevel: 0,
                                        text: window.location.href,
                                        width: 200,
                                        height: 200,
                                        background: "#fff",
                                        foreground: "#000"
                                    });
                                    E.html(S)
                                }
                                d.append(C)
                            }
                            g.on("click",
                            function(t) {
                                t.preventDefault(),
                                C.modal()
                            })
                        }
                        h > p && h > i() && t(),
                        n.on("click.navbar.amui", ".am-navbar-more",
                        function(t) {
                            t.preventDefault(),
                            b[y.hasClass(w) ? "removeClass": "addClass"](w),
                            y.toggleClass(w)
                        }),
                        v.length && v.on("click.navbar.amui",
                        function(t) {
                            t.preventDefault(),
                            s.toggle()
                        }),
                        l.on("resize.navbar.amui orientationchange.navbar.amui", r.utils.debounce(e, 150))
                    }
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(12);
                var s = t(21),
                a = t(31),
                r = o.AMUI;
                o(n),
                e.exports = o.AMUI.navbar = {
                    VERSION: "2.0.2",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            12 : 12,
            2 : 2,
            21 : 21,
            31 : 31
        }],
        47 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                e.exports = n.AMUI.pagination = {
                    VERSION: "3.0.1"
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        48 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    var t = o('[data-am-widget="paragraph"]');
                    t.each(function(t) {
                        var e = o(this),
                        i = a.utils.parseOptions(e.attr("data-am-paragraph")),
                        n = t;
                        i.pureview && e.pureview(),
                        i.tableScrollable && e.find("table").each(function(t) {
                            o(this).width() > o(window).width() && o(this).scrollTable(n + "-" + t)
                        })
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(17);
                var s = t(11),
                a = o.AMUI;
                o.fn.scrollTable = function(t) {
                    var e, i = o(this);
                    i.wrap('<div class="am-paragraph-table-container" id="am-paragraph-table-' + t + '"><div class="am-paragraph-table-scroller"></div></div>'),
                    e = i.parent(),
                    e.width(i.width()),
                    e.height(i.height()),
                    new s("#am-paragraph-table-" + t, {
                        eventPassthrough: !0,
                        scrollX: !0,
                        scrollY: !1,
                        preventDefault: !1
                    })
                },
                o(window).on("load", n),
                e.exports = o.AMUI.paragraph = {
                    VERSION: "2.0.1",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            11 : 11,
            17 : 17,
            2 : 2
        }],
        49 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    var t = o('[data-am-widget="slider"]');
                    t.not(".am-slider-manual").each(function(t, e) {
                        var i = s.utils.parseOptions(o(e).attr("data-am-slider"));
                        o(e).flexslider(i)
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(10);
                var s = o.AMUI;
                o(n),
                e.exports = o.AMUI.slider = {
                    VERSION: "3.0.1",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            10 : 10,
            2 : 2
        }],
        50 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    o('[data-am-widget="tabs"]').each(function() {
                        var t = o(this).data("amTabsNoswipe") ? {
                            noSwipe: 1
                        }: {};
                        o(this).tabs(t)
                    })
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                t(24),
                o(n),
                e.exports = o.AMUI.tab = {
                    VERSION: "4.0.1",
                    init: n
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2,
            24 : 24
        }],
        51 : [function(t, e, i) { (function(i) {
                "use strict";
                var n = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null;
                t(2),
                e.exports = n.AMUI.titlebar = {
                    VERSION: "4.0.1"
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }],
        52 : [function(t, e, i) { (function(i) {
                "use strict";
                function n() {
                    var t = o('[data-am-widget="wechatpay"]');
                    return a ? void t.on("click", ".am-wechatpay-btn",
                    function(t) {
                        t.preventDefault();
                        var e = s.utils.parseOptions(o(this).parent().data("wechatPay"));
                        return window.wx ? void wx.checkJsApi({
                            jsApiList: ["chooseWXPay"],
                            success: function(t) {
                                t.checkResult.chooseWXPay ? wx.chooseWXPay(e) : alert("\u5fae\u4fe1\u7248\u672c\u4e0d\u652f\u6301\u652f\u4ed8\u63a5\u53e3\u6216\u6ca1\u6709\u5f00\u542f\uff01")
                            },
                            fail: function() {
                                alert("\u8c03\u7528 checkJsApi \u63a5\u53e3\u65f6\u53d1\u751f\u9519\u8bef!")
                            }
                        }) : void alert("\u6ca1\u6709\u5fae\u4fe1 JS SDK")
                    }) : (t.hide(), !1)
                }
                var o = "undefined" != typeof window ? window.jQuery: "undefined" != typeof i ? i.jQuery: null,
                s = t(2),
                a = window.navigator.userAgent.indexOf("MicroMessenger") > -1,
                r = n;
                o(r),
                e.exports = o.AMUI.pay = {
                    VERSION: "1.0.0",
                    init: r
                }
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {
            2 : 2
        }]
    },
    {},
    [1])(1)
});