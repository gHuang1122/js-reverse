const CryptoJs = require("crypto-js");

function getHeaders(reqObj) {
    const comment = {
        "accept": "application/json, text/plain, */*",
        "date": "",
        "contentType": "",
        "headers": {
            "common": {
                "Accept": "application/json, text/plain, */*"
            },
            "delete": {},
            "get": {},
            "head": {},
            "post": {
                "Content-Type": "application/json;charset=UTF-8"
            },
            "put": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "patch": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "X-Ca-Key": 203899271,
            // "X-Ca-Nonce": "d04e8ed7-9de9-4ee5-98d9-d31530fa2627"
            "X-Ca-Nonce": getXCaNonce()
        },
        "appSecret": "bK9jk5dBEtjauy6gXL7vZCPJ1fOy076H"
    }
    const merageObj = Object.assign(comment, reqObj)
    merageObj["headers"]["X-Ca-Signature"] = getXCaSignature(merageObj)
    merageObj["headers"]["X-Ca-Signature-Headers"] = getXCaSignatureHeaders(merageObj["headers"])
    return merageObj["headers"]
}

function getXCaNonce(e) {
    var t = e || null;
    return null == t && (t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }
    )))
}

function getXCaSignature(e) {
    var t = e.method
        , n = e.url
        , o = e.appSecret
        , i = e.accept
        , r = ""
        , s = e.contentType
        , a = e.params
        , l = e.headers
        , c = "";
    a || -1 === n.indexOf("?") ? a || (a = {}) : (a = function (e) {
        var t = {}
            , n = e.match(/[?&]([^=&#]+)=([^&#]*)/g);
        if (n)
            for (var o in n) {
                var i = n[o].split("=")
                    , r = i[0].substr(1)
                    , s = i[1];
                t[r] ? t[r] = [].concat(t[r], s) : t[r] = s
            }
        return t
    }(n),
        n = n.split("?")[0]);
    c += "".concat(t, "\n"),
        c += "".concat(i, "\n"),
        c += "".concat("", "\n"),
        c += "".concat(s, "\n"),
        c += "".concat(r, "\n");
    var p, f = m(l), h = d(Array.from(Object.keys(f)).sort());
    try {
        for (h.s(); !(p = h.n()).done;) {
            var v = p.value;
            c += v + ":" + f[v] + "\n"
        }
    } catch (e) {
        h.e(e)
    } finally {
        h.f()
    }
    return c += function (e, t) {
        var n, o = null, i = d(Array.from(Object.keys(t)).sort());
        try {
            for (i.s(); !(n = i.n()).done;) {
                var r = n.value
                    , s = void 0;
                null !== t[r] && void 0 !== t[r] && (s = "" !== t[r] ? r + "=" + t[r] : r + t[r],
                    o = o ? o + "&" + s : s)
            }
        } catch (e) {
            i.e(e)
        } finally {
            i.f()
        }
        return o ? e + "?" + o : e
    }(n.replace(/^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.csdn\.net)/, ""), a),
        CryptoJs.HmacSHA256(c, o).toString(CryptoJs.enc.Base64)
}

function getXCaSignatureHeaders(e) {
    var t, n, o = m(e), i = d(Array.from(Object.keys(o)).sort());
    try {
        for (i.s(); !(n = i.n()).done;) {
            var r = n.value;
            "x-ca-signature" !== r && (t = t ? t + "," + r : r)
        }
    } catch (e) {
        i.e(e)
    } finally {
        i.f()
    }
    return t
}

function m(e) {
    var t = {};
    for (var n in e) {
        var o = n.toLowerCase();
        o.startsWith("x-ca-") && ("x-ca-signature" !== o && "x-ca-signature-headers" !== o && "x-ca-key" !== o && "x-ca-nonce" !== o || (t[o] = e[n]))
    }
    return t
}

function d(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return p(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var o = 0
                , i = function () {
            };
            return {
                s: i,
                n: function () {
                    return o >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[o++]
                    }
                },
                e: function (e) {
                    throw e
                },
                f: i
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var r, s = !0, a = !1;
    return {
        s: function () {
            n = n.call(e)
        },
        n: function () {
            var e = n.next();
            return s = e.done,
                e
        },
        e: function (e) {
            a = !0,
                r = e
        },
        f: function () {
            try {
                s || null == n.return || n.return()
            } finally {
                if (a)
                    throw r
            }
        }
    }
}


module.exports = {
    getHeaders
}