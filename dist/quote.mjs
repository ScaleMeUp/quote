(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0;padding-left:15px}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}.cdx-quote__border-color-icon-wrapper{display:flex;align-items:center;justify-content:center}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const Re = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', re = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', He = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>', Fe = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"></circle>
</svg>`, We = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="6" fill="currentColor"/>
</svg>`;
var b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ue(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var v = {}, C = {}, P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.allInputsSelector = qe;
function qe() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = P;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(C);
var s = {}, T = {};
Object.defineProperty(T, "__esModule", { value: !0 });
T.isNativeInput = ze;
function ze(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = T;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(s);
var ae = {}, j = {};
Object.defineProperty(j, "__esModule", { value: !0 });
j.append = Ge;
function Ge(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = j;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(ae);
var S = {}, L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.blockElements = Ke;
function Ke() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.blockElements = void 0;
  var t = L;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(S);
var le = {}, w = {};
Object.defineProperty(w, "__esModule", { value: !0 });
w.calculateBaseline = Xe;
function Xe(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), o = n * 0.8, f = (r - n) / 2, c = l + a + i + f + o;
  return c;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = w;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(le);
var oe = {}, k = {}, M = {}, I = {};
Object.defineProperty(I, "__esModule", { value: !0 });
I.isContentEditable = Ye;
function Ye(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = I;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(M);
Object.defineProperty(k, "__esModule", { value: !0 });
k.canSetCaret = Je;
var Ve = s, Ze = M;
function Je(e) {
  var t = !0;
  if ((0, Ve.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = !1;
        break;
    }
  else
    t = (0, Ze.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = k;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(oe);
var _ = {}, A = {};
function Qe(e, t, n) {
  const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
  if (n[r] = function(...l) {
    return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a];
  }, r === "get" && n.set) {
    const l = n.set;
    n.set = function(o) {
      delete e[a], l.apply(this, o);
    };
  }
  return n;
}
function ue() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function N(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function xe(e) {
  return !N(e);
}
const et = () => typeof window < "u" && window.navigator !== null && N(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function tt(e) {
  const t = ue();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function nt(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function rt(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), r = document.createRange();
  if (r.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t);
}
function it(e, t, n) {
  let r;
  return (...i) => {
    const a = this, l = () => {
      r = void 0, n !== !0 && e.apply(a, i);
    }, o = n === !0 && r !== void 0;
    window.clearTimeout(r), r = window.setTimeout(l, t), o && e.apply(a, i);
  };
}
function u(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function at(e) {
  return u(e) === "boolean";
}
function ce(e) {
  return u(e) === "function" || u(e) === "asyncfunction";
}
function lt(e) {
  return ce(e) && /^\s*class\s+/.test(e.toString());
}
function ot(e) {
  return u(e) === "number";
}
function m(e) {
  return u(e) === "object";
}
function ut(e) {
  return Promise.resolve(e) === e;
}
function ct(e) {
  return u(e) === "string";
}
function st(e) {
  return u(e) === "undefined";
}
function E(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (m(e) && m(n))
    for (const r in n)
      m(n[r]) ? (e[r] === void 0 && Object.assign(e, { [r]: {} }), E(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return E(e, ...t);
}
function dt(e, t, n) {
  const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(r);
}
function ft(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function pt(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const gt = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, vt = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class mt {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n, r) => {
      this.completed = this.completed.then(t).then(n).catch(r);
    });
  }
}
function bt(e, t, n = void 0) {
  let r, i, a, l = null, o = 0;
  n || (n = {});
  const f = function() {
    o = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null);
  };
  return function() {
    const c = Date.now();
    !o && n.leading === !1 && (o = c);
    const p = t - (c - o);
    return r = this, i = arguments, p <= 0 || p > t ? (l && (clearTimeout(l), l = null), o = c, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(f, p)), a;
  };
}
const _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: mt,
  beautifyShortcut: tt,
  cacheable: Qe,
  capitalize: nt,
  copyTextToClipboard: rt,
  debounce: it,
  deepMerge: E,
  deprecationAssert: dt,
  getUserOS: ue,
  getValidUrl: ft,
  isBoolean: at,
  isClass: lt,
  isEmpty: xe,
  isFunction: ce,
  isIosDevice: et,
  isNumber: ot,
  isObject: m,
  isPrintableKey: pt,
  isPromise: ut,
  isString: ct,
  isUndefined: st,
  keyCodes: gt,
  mouseButtons: vt,
  notEmpty: N,
  throttle: bt,
  typeOf: u
}, Symbol.toStringTag, { value: "Module" })), B = /* @__PURE__ */ Ue(_t);
Object.defineProperty(A, "__esModule", { value: !0 });
A.containsOnlyInlineElements = Ot;
var yt = B, ht = S;
function Ot(e) {
  var t;
  (0, yt.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(r) {
    return !(0, ht.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = A;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(_);
var se = {}, $ = {}, y = {}, D = {};
Object.defineProperty(D, "__esModule", { value: !0 });
D.make = Et;
function Et(e, t, n) {
  var r;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a = t.filter(function(o) {
      return o !== void 0;
    });
    (r = i.classList).add.apply(r, a);
  } else
    t !== null && i.classList.add(t);
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) && (i[l] = n[l]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = D;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(y);
Object.defineProperty($, "__esModule", { value: !0 });
$.fragmentToString = Pt;
var Ct = y;
function Pt(e) {
  var t = (0, Ct.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = $;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(se);
var de = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.getContentLength = jt;
var Tt = s;
function jt(e) {
  var t, n;
  return (0, Tt.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = R;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(de);
var H = {}, F = {}, ie = b && b.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(F, "__esModule", { value: !0 });
F.getDeepestBlockElements = fe;
var St = _;
function fe(e) {
  return (0, St.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return ie(ie([], t, !0), fe(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = F;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(H);
var pe = {}, W = {}, h = {}, U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.isLineBreakTag = Lt;
function Lt(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = U;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(h);
var O = {}, q = {};
Object.defineProperty(q, "__esModule", { value: !0 });
q.isSingleTag = wt;
function wt(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isSingleTag = void 0;
  var t = q;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(O);
Object.defineProperty(W, "__esModule", { value: !0 });
W.getDeepestNode = ge;
var kt = s, Mt = h, It = O;
function ge(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var i = e[n];
    if ((0, It.isSingleTag)(i) && !(0, kt.isNativeInput)(i) && !(0, Mt.isLineBreakTag)(i))
      if (i[r])
        i = i[r];
      else if (i.parentNode !== null && i.parentNode[r])
        i = i.parentNode[r];
      else
        return i.parentNode;
    return ge(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = W;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(pe);
var ve = {}, z = {}, g = b && b.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(z, "__esModule", { value: !0 });
z.findAllInputs = Dt;
var At = _, Nt = H, Bt = C, $t = s;
function Dt(e) {
  return Array.from(e.querySelectorAll((0, Bt.allInputsSelector)())).reduce(function(t, n) {
    return (0, $t.isNativeInput)(n) || (0, At.containsOnlyInlineElements)(n) ? g(g([], t, !0), [n], !1) : g(g([], t, !0), (0, Nt.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = z;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(ve);
var me = {}, G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.isCollapsedWhitespaces = Rt;
function Rt(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = G;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(me);
var K = {}, X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.isElement = Ft;
var Ht = B;
function Ft(e) {
  return (0, Ht.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = X;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(K);
var be = {}, Y = {}, V = {}, Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.isLeaf = Wt;
function Wt(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = Z;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(V);
var J = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.isNodeEmpty = Kt;
var Ut = h, qt = K, zt = s, Gt = O;
function Kt(e, t) {
  var n = "";
  return (0, Gt.isSingleTag)(e) && !(0, Ut.isLineBreakTag)(e) ? !1 : ((0, qt.isElement)(e) && (0, zt.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = Q;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(J);
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.isEmpty = Vt;
var Xt = V, Yt = J;
function Vt(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var r = n.shift();
    if (r) {
      if (e = r, (0, Xt.isLeaf)(e) && !(0, Yt.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = Y;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(be);
var _e = {}, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.isFragment = Jt;
var Zt = B;
function Jt(e) {
  return (0, Zt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = x;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(_e);
var ye = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isHTMLString = xt;
var Qt = y;
function xt(e) {
  var t = (0, Qt.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = ee;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(ye);
var he = {}, te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
te.offset = en;
function en(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, a = t.left + n;
  return {
    top: i,
    left: a,
    bottom: i + t.height,
    right: a + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = te;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(he);
var Oe = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.prepend = tn;
function tn(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = ne;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(Oe);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = C;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = s;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var r = ae;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return r.append;
  } });
  var i = S;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var a = le;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return a.calculateBaseline;
  } });
  var l = oe;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return l.canSetCaret;
  } });
  var o = _;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return o.containsOnlyInlineElements;
  } });
  var f = se;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return f.fragmentToString;
  } });
  var c = de;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return c.getContentLength;
  } });
  var p = H;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return p.getDeepestBlockElements;
  } });
  var Ce = pe;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return Ce.getDeepestNode;
  } });
  var Pe = ve;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return Pe.findAllInputs;
  } });
  var Te = me;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return Te.isCollapsedWhitespaces;
  } });
  var je = M;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return je.isContentEditable;
  } });
  var Se = K;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return Se.isElement;
  } });
  var Le = be;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return Le.isEmpty;
  } });
  var we = _e;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return we.isFragment;
  } });
  var ke = ye;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return ke.isHTMLString;
  } });
  var Me = V;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return Me.isLeaf;
  } });
  var Ie = J;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return Ie.isNodeEmpty;
  } });
  var Ae = h;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return Ae.isLineBreakTag;
  } });
  var Ne = O;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return Ne.isSingleTag;
  } });
  var Be = y;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return Be.make;
  } });
  var $e = he;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return $e.offset;
  } });
  var De = Oe;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return De.prepend;
  } });
})(v);
var Ee = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e))(Ee || {});
class d {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {QuoteData} params.data - previously saved data
   * @param {QuoteConfig} params.config - user config for Tool
   * @param {API} params.api - editor.js api
   * @param {boolean} params.readOnly - read only mode flag
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }) {
    const { DEFAULT_ALIGNMENT: l } = d;
    this.api = r, this.readOnly = i, this._quotePlaceholder = n.quotePlaceholder || d.DEFAULT_QUOTE_PLACEHOLDER, this._captionPlaceholder = n.captionPlaceholder || d.DEFAULT_CAPTION_PLACEHOLDER, this._defaultBorderColor = n.defaultBorderColor || d.DEFAULT_BORDER_COLOR, this._borderColors = n.borderColors || d.DEFAULT_BORDER_COLORS, this._data = {
      text: t.text || "",
      caption: t.caption || "",
      alignment: Object.values(Ee).includes(t.alignment) && t.alignment || n.defaultAlignment || l,
      borderColor: t.borderColor || this._defaultBorderColor
    }, this._CSS = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption",
      borderColorIconWrapper: "cdx-quote__border-color-icon-wrapper"
    }, this._block = a, this._element = null;
  }
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: He,
      title: "Quote"
    };
  }
  /**
   * Empty Quote is not empty Block
   *
   * @public
   * @returns {boolean}
   */
  static get contentless() {
    return !0;
  }
  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for quote text
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  /**
   * Default placeholder for quote caption
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  /**
   * Default border color for the quote.
   *
   * @public
   * @returns {string}
   *
   */
  static get DEFAULT_BORDER_COLOR() {
    return "#000000";
  }
  /**
   * Default border colors for the quote.
   *
   * @public
   * @returns {QuoteConfig['borderColors']}
   */
  static get DEFAULT_BORDER_COLORS() {
    return [
      {
        name: "Black",
        color: "#000000"
      }
    ];
  }
  /**
   * Default quote alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }
  /**
   * Allow Quote to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       *
       * @param {QuoteData} quoteData
       * @returns {string}
       */
      export: function(t) {
        return t.caption ? `${t.text} — ${t.caption}` : t.text;
      }
    };
  }
  /**
   * Tool`s styles
   *
   * @returns {QuoteCSS}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption",
      borderColorIconWrapper: "cdx-quote__border-color-icon-wrapper"
    };
  }
  /**
   * Tool`s settings properties
   *
   * @returns {*[]}
   */
  get alignmentSettings() {
    return [
      {
        name: "left",
        icon: re
      },
      {
        name: "center",
        icon: Re
      }
    ];
  }
  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const t = v.make("blockquote", [
      this._CSS.baseClass,
      this._CSS.wrapper
    ], {
      style: `border-left: 5px solid ${this._data.borderColor}`
    }), n = v.make("div", [this._CSS.input, this._CSS.text], {
      contentEditable: !this.readOnly,
      innerHTML: this._data.text
    }), r = v.make("div", [this._CSS.input, this._CSS.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this._data.caption
    });
    return n.dataset.placeholder = this._quotePlaceholder, r.dataset.placeholder = this._captionPlaceholder, t.appendChild(n), t.appendChild(r), this._element = t, t;
  }
  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(t) {
    const n = t.querySelector(`.${this._CSS.text}`), r = t.querySelector(`.${this._CSS.caption}`);
    return Object.assign(this._data, {
      text: (n == null ? void 0 : n.innerHTML) ?? "",
      caption: (r == null ? void 0 : r.innerHTML) ?? ""
    });
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        font: !0,
        br: !0,
        a: !0,
        i: !0,
        b: !0,
        s: !0
      },
      caption: {
        br: !0
      },
      alignment: {}
    };
  }
  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   *
   * @returns {MenuConfig}
   *
   */
  renderSettings() {
    const t = (i) => i && i[0].toUpperCase() + i.slice(1), n = this.alignmentSettings.map((i) => ({
      icon: i.icon,
      title: this.api.i18n.t(t(i.name)),
      onActivate: () => this._toggleAlignmentTune(i.name),
      isActive: this._data.alignment === i.name,
      closeOnActivate: !0
    })), r = this._borderColors.map((i) => ({
      icon: `
        <span 
            class="${this._CSS.borderColorIconWrapper}"
            style="color: ${i.color};"
        >
           ${We}
        </span>
      `,
      title: this.api.i18n.t(i.name),
      onActivate: () => this._toggleBorderColor(i.color),
      isActive: this._data.borderColor === i.color,
      closeOnActivate: !0
    }));
    return [
      {
        name: "alignment",
        title: "Alignment",
        icon: re,
        children: {
          items: n
        }
      },
      {
        name: "border",
        icon: Fe,
        title: "Border color",
        children: {
          items: r
        }
      }
    ];
  }
  /**
   * Toggle quote`s alignment
   *
   * @param {string} tune - alignment
   * @private
   */
  _toggleAlignmentTune(t) {
    this._data.alignment = t, this._block.dispatchChange();
  }
  /**
   * Toggle quote's border color
   *
   * @param {string} color - border color
   * @private
   */
  _toggleBorderColor(t) {
    this._data.borderColor = t, this._element && (this._element.style.borderLeft = `5px solid ${t}`), this._block.dispatchChange();
  }
}
export {
  d as default
};
