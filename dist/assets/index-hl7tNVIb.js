(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
    return a2;
  })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a)) for (var g = 0; g < a.length; g++) {
    k2 = a[g];
    var f2 = d + Q$1(k2, g);
    h += R$1(k2, b, e, f2, c);
  }
  else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a: for (; 0 < c; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
      else break a;
    }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
        else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
        else break a;
      }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback) k2(t2);
      else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
    else {
      var b = h(t2);
      null !== b && K2(H2, b.startTime - a);
    }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else k2(r2);
        v2 = h(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
  if (d) return false;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return false === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) if (b = function() {
      throw Error();
    }, Object.defineProperty(b.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a, [], b);
    } else {
      try {
        b.call();
      } catch (l2) {
        d = l2;
      }
      a.call(b.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e[g] !== f2[h]) {
              var k2 = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {
      }
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b = a._valueTracker;
  if (!b) return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c) if ("number" === d) {
    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
  } else a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b.firstChild; ) a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate) for (; b.return; ) b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c) return Xb(e), a;
        if (f2 === d) return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id$6, c), Sc(a, d);
    else if (Uc(e, a, b, c, d)) d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id$6, c);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id$6 = null;
function Yc(a, b, c, d) {
  id$6 = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;
  else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id$6 = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++) ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++) ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length) return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c) a = b.contentWindow;
    else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a], c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h = d[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
        else if (me(h2)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c) e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I) return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ng(a) {
  var b = a._init;
  return b(a._payload);
}
function Og(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a) return null;
    for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Pg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a) return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
    d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Lg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Mg(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      Mg(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      Mg(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c(
      e2,
      m3
    ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = Lg(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c(a2, d2.sibling);
                d2 = e(d2, f3.children || []);
                d2.return = a2;
                a2 = d2;
                break a;
              } else {
                c(a2, d2);
                break;
              }
              else b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3)) return n2(a2, d2, f3, h2);
      if (Ka(f3)) return t2(a2, d2, f3, h2);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b = Wg.current;
  E(Wg);
  a._currentValue = b;
}
function bh(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return ih(a, d);
}
function ih(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return ih(a, c);
}
function oh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function qh(a, b, c, d) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;
      else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function sh(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b], e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b) {
  G(wh, b);
  G(vh, a);
  G(uh, th);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(uh);
  G(uh, b);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a) {
  xh(wh.current);
  var b = xh(uh.current);
  var c = lb(b, a.type);
  b !== c && (G(vh, a), G(uh, c));
}
function Bh(a) {
  vh.current === a && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a, b) {
  if (null === b) return false;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
  return true;
}
function Nh(a, b, c, d, e, f2) {
  Hh = f2;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = false;
  if (b) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N) {
    var a = M.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a;
  else {
    if (null === a) throw Error(p(310));
    N = a;
    a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Wh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        M.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (dh = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function Xh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (dh = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a, b) {
  var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, dh = true);
  d = d.queue;
  $h(ai.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi(9, ci.bind(null, c, d, e, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c, b, e);
  }
  return e;
}
function di(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ci(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  ei(b) && fi(a);
}
function ai(a, b, c) {
  return c(function() {
    ei(b) && fi(a);
  });
}
function ei(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function fi(a) {
  var b = ih(a, 1);
  null !== b && gi(b, a, 1, -1);
}
function hi(a) {
  var b = Th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ii.bind(null, M, a);
  return [b.memoizedState, a];
}
function bi(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b, c, d) {
  var e = Th();
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function li(a, b, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi(b, c, f2, d);
      return;
    }
  }
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, f2, d);
}
function mi(a, b) {
  return ki(8390656, 8, a, b);
}
function $h(a, b) {
  return li(2048, 8, a, b);
}
function ni(a, b) {
  return li(4, 2, a, b);
}
function oi(a, b) {
  return li(4, 4, a, b);
}
function pi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function() {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
    b.current = null;
  };
}
function qi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li(4, 4, pi.bind(null, b, a), c);
}
function ri() {
}
function si(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ti(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function ui(a, b, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
  return b;
}
function vi(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b, c) {
  var d = yi(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, c);
  else if (c = hh(a, b, c, d), null !== c) {
    var e = R();
    gi(c, a, d, e);
    Bi(c, b, d);
  }
}
function ii(a, b, c) {
  var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
      var g = b.lastRenderedState, h = f2(g, c);
      e.hasEagerState = true;
      e.eagerState = h;
      if (He(h, g)) {
        var k2 = b.interleaved;
        null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c = hh(a, b, e, d);
    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
  }
}
function zi(a) {
  var b = a.alternate;
  return a === M || null !== b && b === M;
}
function Ai(a, b) {
  Jh = Ih = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Bi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
  Th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ki(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ki(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Th();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Th();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = xi.bind(null, M, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = Th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = M, e = Th();
  if (I) {
    if (void 0 === c) throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  mi(ai.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  bi(9, ci.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = Th(), b = Q.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Kh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b = Uh();
    return ui(b, N.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b = Uh();
  return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b = Uh().memoizedState;
  return [a, b];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Di(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = R(), d = yi(a), e = mh(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = nh(a, e, d);
  null !== b && (gi(b, a, d, c), oh(b, a, d));
} };
function Fi(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function Gi(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Hi(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Ki(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Li(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Oi || (Oi = true, Pi = d);
    Li(a, b);
  };
  return c;
}
function Qi(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Li(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Li(a, b);
    "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Si(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
}
function Ui(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b, c, d) {
  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
}
function Yi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  ch(b, e);
  d = Nh(a, b, c, d, f2, e);
  c = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Xi(a, b, d, e);
  return b.child;
}
function $i(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
    a = Rg(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
  }
  b.flags |= 1;
  a = Pg(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function bj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b.lanes = a.lanes, Zi(a, b, e);
  }
  return cj(a, b, c, d, e);
}
function dj(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
  else {
    if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
    b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c;
    G(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
  Xi(a, b, e, c);
  return b.child;
}
function gj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function cj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  ch(b, e);
  c = Nh(a, b, c, d, f2, e);
  d = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Xi(a, b, c, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else f2 = false;
  ch(b, e);
  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
    jh = false;
    var r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    lh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
    jh = false;
    r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return jj(a, b, c, d, f2, e);
}
function jj(a, b, c, d, e, f2) {
  gj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
  d = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function kj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  yh(a, b.containerInfo);
}
function lj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Xi(a, b, c, d);
  return b.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b, c) {
  var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h) f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G(L, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = mj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function qj(a, b) {
  b = pj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function sj(a, b, c, d) {
  null !== d && Jg(d);
  Ug(b, a.child, null, c);
  a = qj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function rj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = pj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Tg(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f2;
  }
  if (0 === (b.mode & 1)) return sj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Ki(f2, d, void 0);
    return sj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki(Error(p(421)));
    return sj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = qj(b, d.children);
  b.flags |= 4096;
  return b;
}
function vj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  bh(a.return, b, c);
}
function wj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function xj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Xi(a, b, d.children, c);
  d = L.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
      else if (19 === a.tag) vj(a, c, b);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(L, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;
  else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      wj(b, false, e, c, f2);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b, true, c, null, f2);
      break;
    case "together":
      wj(b, false, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  rh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = Pg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function yj(a, b, c) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
        G(L, L.current & 1);
        a = Zi(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(L, L.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(L, L.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a, b, c);
  }
  return Zi(a, b, c);
}
var zj, Aj, Bj, Cj;
zj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h = e[l2];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
      } else c || (f2 || (f2 = []), f2.push(
        l2,
        c
      )), c = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2) b.flags |= 4;
  }
};
Cj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Dj(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Ej(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      zh();
      E(Wf);
      E(H);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e = xh(wh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h,
              a
            ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          zj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
            }
          }
          f2 && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(L);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(L);
      f2 = b.memoizedState;
      if (null === f2) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
          g = Ch(a);
          if (null !== g) {
            b.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b.updateQueue = d, b.flags |= 4);
            b.subtreeFlags = 0;
            d = c;
            for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
            G(L, L.current & 1 | 2);
            return b.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
      }
      else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E(L);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  }
  else c.current = null;
}
function Mj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Nj = false;
function Oj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f2.nodeType;
        } catch (F2) {
          c = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c && ++l2 === e && (h = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c = null;
    }
    c = c || { start: 0, end: 0 };
  } else c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
  else for (; null !== V; ) {
    b = V;
    try {
      var n2 = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W(b, b.return, F2);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Rj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Sj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Sj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
}
var X = null, Xj = false;
function Yj(a, b, c) {
  for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
}
function Zj(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {
  }
  switch (c.tag) {
    case 5:
      U || Lj(c, b);
    case 6:
      var d = X, e = Xj;
      X = null;
      Yj(a, b, c);
      X = d;
      Xj = e;
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Xj;
      X = c.stateNode.containerInfo;
      Xj = true;
      Yj(a, b, c);
      X = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b, c);
      break;
    case 1:
      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Yj(a, b, c);
      break;
    case 21:
      Yj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
      break;
    default:
      Yj(a, b, c);
  }
}
function ak(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b.forEach(function(b2) {
      var d = bk.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function ck(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f2 = a, g = b, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      Zj(f2, g, e);
      X = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W(e, b, l2);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
}
function dk(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t2) {
        W(a, a.return, t2);
      }
      break;
    case 4:
      ck(b, a);
      ek(a);
      break;
    case 13:
      ck(b, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
      d & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
      ek(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c = r2.return;
                  try {
                    b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W(d, c, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function hk(a, b, c) {
  V = a;
  ik(a);
}
function ik(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l2 = U;
        Jj = g;
        if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e;
        Jj = h;
        U = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
            else {
              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b.updateQueue;
            null !== f2 && sh(b, f2, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              sh(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k2 = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c.focus();
                  break;
                case "img":
                  k2.src && (c.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l2 = b.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function gk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function jk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Qj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K & 6) && jg();
    }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Gk(a, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Jk();
    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K = e;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
    if (6 === b) Ck(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
  a = Ik(a, b);
  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f2(), e)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
    else {
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Ck(a, b) {
  b &= ~rk;
  b &= ~qk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Dk(a, B()), null;
  var c = Ik(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Pk(a, tk, uk);
  Dk(a, B());
  return null;
}
function Qk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c = ok.transition, d = C;
  try {
    if (ok.transition = null, C = 1, a) return a();
  } finally {
    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c; ) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L);
        break;
      case 19:
        E(L);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q = a;
  Y = a = Pg(a.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next, f2 = c.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b) {
  do {
    var c = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g, h, f2, b);
            y2.mode & 1 && Si(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f2, l2, b);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Ui(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g, h, f2, b);
            Jg(Ji(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Ni(f2, k2, b);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Qi(f2, h, b);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a, b) {
  var c = K;
  K |= 2;
  var d = Jk();
  if (Q !== a || Z !== b) uk = null, Kk(a, b);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K = c;
  mk.current = d;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b ? Sk(a) : Y = b;
  nk.current = null;
}
function Sk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Ej(c, b, fj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Ij(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a, b, c) {
  var d = C, e = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a, b, c, d);
  } finally {
    ok.transition = e, C = d;
  }
  return null;
}
function Wk(a, b, c, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === Q && (Y = Q = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c);
    dc();
    K = h;
    C = g;
    ok.transition = f2;
  } else a.current = c;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c.stateNode);
  Dk(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b = ok.transition, c = C;
    try {
      ok.transition = null;
      C = 16 > a ? 16 : a;
      if (null === wk) var d = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V = F2;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C = c, ok.transition = b;
    }
  }
  return false;
}
function Xk(a, b, c) {
  b = Ji(c, b);
  b = Ni(a, b, 1);
  a = nh(a, b, 1);
  b = R();
  null !== a && (Ac(a, 1, b), Dk(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Xk(a, a, c);
  else for (; null !== b; ) {
    if (3 === b.tag) {
      Xk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
        a = Ji(c, a);
        a = Qi(b, a, 1);
        b = nh(b, a, 1);
        a = R();
        null !== b && (Ac(b, 1, a), Dk(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = R();
  a.pingedLanes |= a.suspendedLanes & c;
  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b);
}
function Yk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R();
  a = ih(a, b);
  null !== a && (Ac(a, b, c), Dk(a, c));
}
function uj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Yk(a, c);
}
function bk(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Yk(a, c);
}
var Vk;
Vk = function(a, b, c) {
  if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      ij(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      ch(b, c);
      e = Nh(null, b, d, a, e, c);
      var f2 = Sh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        ij(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Zk(d);
        a = Ci(d, a);
        switch (e) {
          case 0:
            b = cj(null, b, d, a, c);
            break a;
          case 1:
            b = hj(null, b, d, a, c);
            break a;
          case 11:
            b = Yi(null, b, d, a, c);
            break a;
          case 14:
            b = $i(null, b, d, Ci(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
    case 3:
      a: {
        kj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        lh(a, b);
        qh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
          e = Ji(Error(p(423)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else if (d !== e) {
          e = Ji(Error(p(424)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = Zi(a, b, c);
            break a;
          }
          Xi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return oj(a, b, c);
    case 4:
      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
    case 7:
      return Xi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He(f2.value, g)) {
          if (f2.children === e.children && !Wf.current) {
            b = Zi(a, b, c);
            break a;
          }
        } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c & -c);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c);
                bh(
                  f2.return,
                  c,
                  b
                );
                h.lanes |= c;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
    case 15:
      return bj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
    case 19:
      return xj(a, b, c);
    case 22:
      return dj(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Fk(a, b) {
  return ac(a, b);
}
function $k(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new $k(a, b, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);
  else if ("string" === typeof a) g = 5;
  else a: switch (a) {
    case ya:
      return Tg(c.children, e, f2, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c, e, f2, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Tg(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function pj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function Sg(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function al(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b, c, d, e, f2, g, h, k2) {
  a = new al(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function el(a, b, c, d, e, f2, g, h, k2) {
  a = bl(c, d, true, a, e, f2, g, h, k2);
  a.context = dl(null);
  c = a.current;
  d = R();
  e = yi(c);
  f2 = mh(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  nh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b, c, d) {
  var e = b.current, f2 = R(), g = yi(e);
  c = dl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = mh(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = nh(e, b, g);
  null !== a && (gi(a, e, g, f2), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function il(a, b) {
  hl(a, b);
  (a = a.alternate) && hl(a, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = gl(g);
        f2.call(a2);
      };
    }
    var g = el(b, d, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = gl(k2);
      h.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b, k2, c, d);
  });
  return k2;
}
function rl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = gl(g);
        h.call(a2);
      };
    }
    fl(b, g, a, e);
  } else g = ql(c, b, a, e, d);
  return gl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b2 = ih(a, 1);
        if (null !== b2) {
          var c2 = R();
          gi(b2, a, 1, c2);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = ih(a, 134217728);
    if (null !== b) {
      var c = R();
      gi(b, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = yi(a), c = ih(a, b);
    if (null !== c) {
      var d = R();
      gi(c, a, b, d);
    }
    il(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; ) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!nl(a)) throw Error(p(299));
  var c = false, d = "", e = kl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = bl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
    c,
    e
  );
  return new ml(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b, c, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const id$5 = 1;
const title$5 = "Kubernetes";
const description$5 = "Comprehensive knowledge of Kubernetes fundamentals, architecture, and best practices";
const category$5 = "Ops";
const questions$5 = [
  {
    id: 1,
    question: "What is the smallest deployable unit in Kubernetes?",
    options: [
      "Pod",
      "Container",
      "Node",
      "Cluster"
    ],
    correctAnswer: "Pod",
    explanation: "A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers that share storage, network, and specifications for how to run."
  },
  {
    id: 2,
    question: "Which component manages containers in Pods on each node?",
    options: [
      "API Server",
      "Controller Manager",
      "Scheduler",
      "Kubelet"
    ],
    correctAnswer: "Kubelet",
    explanation: "The Kubelet is an agent that runs on each node and ensures containers are running in a Pod as specified."
  },
  {
    id: 3,
    question: "What is a Deployment in Kubernetes?",
    options: [
      "A single Pod",
      "A declarative way to manage Pods and ReplicaSets",
      "A network service",
      "A storage volume"
    ],
    correctAnswer: "A declarative way to manage Pods and ReplicaSets",
    explanation: "A Deployment provides declarative updates to Pods and ReplicaSets, enabling rolling updates, rollbacks, and scaling."
  },
  {
    id: 4,
    question: "Which object provides stable IP and DNS for Pods?",
    options: [
      "Deployment",
      "Service",
      "Ingress",
      "ConfigMap"
    ],
    correctAnswer: "Service",
    explanation: "A Service provides a stable cluster IP address and DNS name for accessing a set of Pods, abstracting away individual Pod IPs."
  },
  {
    id: 5,
    question: "What command scales a Deployment to 5 replicas?",
    options: [
      "kubectl scale deployment <name> --replicas=5",
      "kubectl edit deployment <name>",
      "kubectl create deployment <name> --replicas=5",
      "kubectl apply deployment <name> -r 5"
    ],
    correctAnswer: "kubectl scale deployment <name> --replicas=5",
    explanation: "The kubectl scale command changes the number of replicas in a Deployment, ReplicaSet, or other scalable resources."
  },
  {
    id: 6,
    question: "Which of these is NOT a Kubernetes object?",
    options: [
      "Pod",
      "Node",
      "Container",
      "Namespace"
    ],
    correctAnswer: "Container",
    explanation: "Container is a Docker concept. Kubernetes works with Pods (which contain containers), not directly with containers."
  },
  {
    id: 7,
    question: "What is the purpose of a ConfigMap?",
    options: [
      "Store configuration data as key-value pairs",
      "Store secrets",
      "Define network policies",
      "Schedule cron jobs"
    ],
    correctAnswer: "Store configuration data as key-value pairs",
    explanation: "ConfigMaps store configuration data in key-value pairs, allowing you to decouple configuration from application code."
  },
  {
    id: 8,
    question: "Which controller ensures desired Pod count?",
    options: [
      "ReplicaSet",
      "Deployment",
      "StatefulSet",
      "DaemonSet"
    ],
    correctAnswer: "ReplicaSet",
    explanation: "A ReplicaSet ensures that a specified number of Pod replicas are running at any given time."
  },
  {
    id: 9,
    question: "What does Ingress provide?",
    options: [
      "Internal DNS",
      "External HTTP(S) access to Services",
      "Load balancing between nodes",
      "Storage provisioning"
    ],
    correctAnswer: "External HTTP(S) access to Services",
    explanation: "Ingress provides external HTTP(S) access to Services in a cluster, typically with path-based routing and TLS termination."
  },
  {
    id: 10,
    question: "What file format is used for Kubernetes manifests?",
    options: [
      "JSON",
      "YAML",
      "XML",
      "TOML"
    ],
    correctAnswer: "YAML",
    explanation: "Kubernetes manifests are typically written in YAML format (though JSON is also supported). YAML is more human-readable."
  },
  {
    id: 11,
    question: "What is a Namespace?",
    options: [
      "Divides cluster resources between users/teams/applications",
      "Creates separate physical clusters",
      "Stores configuration data",
      "Defines network policies"
    ],
    correctAnswer: "Divides cluster resources between users/teams/applications",
    explanation: "Namespaces provide a mechanism to divide cluster resources and can be used for isolation and organization."
  },
  {
    id: 12,
    question: "What is a StatefulSet?",
    options: [
      "Manages stateful apps with stable, persistent identities for Pods",
      "Manages stateless apps",
      "Manages temporary Pods",
      "Manages network services"
    ],
    correctAnswer: "Manages stateful apps with stable, persistent identities for Pods",
    explanation: "StatefulSets manage the deployment and scaling of Pods and provide guarantees about the ordering and uniqueness of these Pods."
  },
  {
    id: 13,
    question: "What is a DaemonSet?",
    options: [
      "Runs exactly one Pod per node",
      "Runs a specified number of Pods",
      "Runs Pods on specific nodes",
      "Runs batch jobs"
    ],
    correctAnswer: "Runs exactly one Pod per node",
    explanation: "A DaemonSet ensures that a copy of a Pod runs on all (or some) nodes in the cluster."
  },
  {
    id: 14,
    question: "What lists all Pods in all namespaces?",
    options: [
      "kubectl get pods",
      "kubectl get pods --all",
      "kubectl get pods -A",
      "kubectl list pods"
    ],
    correctAnswer: "kubectl get pods -A",
    explanation: "The -A or --all-namespaces flag displays resources from all namespaces."
  },
  {
    id: 15,
    question: "What is PersistentVolume (PV)?",
    options: [
      "Piece of storage provisioned by admin",
      "Volume tied to specific Pod",
      "Network-attached storage",
      "Backup copy"
    ],
    correctAnswer: "Piece of storage provisioned by admin",
    explanation: "A PersistentVolume is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes."
  },
  {
    id: 16,
    question: "What is PersistentVolumeClaim (PVC)?",
    options: [
      "Request for storage by a user",
      "Claim on a PV by a Pod",
      "Demand for resources from node",
      "Configuration for volume"
    ],
    correctAnswer: "Request for storage by a user",
    explanation: "A PersistentVolumeClaim is a request for storage by a user. It's similar to a Pod consuming node resources."
  },
  {
    id: 17,
    question: "What is a Job?",
    options: [
      "Runs Pod that exits after completing work",
      "Runs long-running service",
      "Creates ReplicaSet",
      "Manages network policies"
    ],
    correctAnswer: "Runs Pod that exits after completing work",
    explanation: "A Job creates one or more Pods and ensures that a specified number of them successfully terminate."
  },
  {
    id: 18,
    question: "What is a CronJob?",
    options: [
      "Job that runs on time-based schedule",
      "Job that runs continuously",
      "Job on specific node",
      "Job with elevated privileges"
    ],
    correctAnswer: "Job that runs on time-based schedule",
    explanation: "A CronJob creates Jobs on a time-based schedule, written in Cron format."
  },
  {
    id: 19,
    question: "What is HorizontalPodAutoscaler (HPA)?",
    options: [
      "Auto-scales Pods based on CPU/memory",
      "Auto-restarts failed Pods",
      "Auto-assigns Pods to nodes",
      "Auto-updates Pod images"
    ],
    correctAnswer: "Auto-scales Pods based on CPU/memory",
    explanation: "HPA automatically adjusts the number of Pods in a Deployment, ReplicaSet, or StatefulSet based on observed CPU/memory usage."
  },
  {
    id: 20,
    question: "What is NetworkPolicy?",
    options: [
      "Controls network traffic to/from Pods",
      "Controls which nodes Pods can run on",
      "Controls resource limits",
      "Controls user access"
    ],
    correctAnswer: "Controls network traffic to/from Pods",
    explanation: "NetworkPolicy defines rules for ingress and/or egress traffic from and to the Pods selected by the policy."
  },
  {
    id: 21,
    question: "What is the Control Plane in Kubernetes?",
    options: [
      "Manages cluster state and coordinates workloads",
      "Runs application workloads",
      "Stores data",
      "Handles networking"
    ],
    correctAnswer: "Manages cluster state and coordinates workloads",
    explanation: "The Control Plane (formerly Master) manages the cluster state, coordinates workloads, and makes global decisions about the cluster."
  },
  {
    id: 22,
    question: "What are the components of the Control Plane?",
    options: [
      "API Server, etcd, Controller Manager, Scheduler",
      "Kubelet, Kube-proxy",
      "API Server, Kubelet, Scheduler",
      "etcd, Controller Manager, Kube-proxy"
    ],
    correctAnswer: "API Server, etcd, Controller Manager, Scheduler",
    explanation: "The Control Plane consists of: API Server (entry point), etcd (key-value store), Controller Manager (runs controllers), and Scheduler (assigns Pods to Nodes)."
  },
  {
    id: 23,
    question: "What is etcd in Kubernetes?",
    options: [
      "Distributed key-value store for cluster state",
      "Database for Pods",
      "Configuration store",
      "Network manager"
    ],
    correctAnswer: "Distributed key-value store for cluster state",
    explanation: "etcd is a distributed, consistent key-value store that stores the cluster state and configuration."
  },
  {
    id: 24,
    question: "What is the API Server in Kubernetes?",
    options: [
      "Front-end for the Control Plane",
      "Back-end for Nodes",
      "Network gateway",
      "Storage manager"
    ],
    correctAnswer: "Front-end for the Control Plane",
    explanation: "The API Server is the front-end for the Kubernetes Control Plane, exposing the Kubernetes API via REST."
  },
  {
    id: 25,
    question: "What is the Controller Manager?",
    options: [
      "Runs controller loops that watch cluster state",
      "Manages controllers",
      "Schedules controllers",
      "Monitors controllers"
    ],
    correctAnswer: "Runs controller loops that watch cluster state",
    explanation: "The Controller Manager runs controller loops that watch the shared state of the cluster and make changes to drive the current state towards the desired state."
  },
  {
    id: 26,
    question: "What is the Scheduler in Kubernetes?",
    options: [
      "Assigns Pods to Nodes based on resource availability",
      "Schedules Jobs",
      "Schedules Deployments",
      "Manages resources"
    ],
    correctAnswer: "Assigns Pods to Nodes based on resource availability",
    explanation: "The Scheduler watches for newly created Pods and assigns them to Nodes based on resource availability, constraints, and other factors."
  },
  {
    id: 27,
    question: "What are Worker Nodes in Kubernetes?",
    options: [
      "Machines that run application workloads",
      "Machines that run Control Plane",
      "Machines that store data",
      "Machines that handle networking"
    ],
    correctAnswer: "Machines that run application workloads",
    explanation: "Worker Nodes (formerly Minions) are the machines that run the application workloads (containers in Pods)."
  },
  {
    id: 28,
    question: "What is the Kubelet?",
    options: [
      "Agent that runs on each Node and communicates with Control Plane",
      "Controller on Master",
      "Network proxy",
      "Storage manager"
    ],
    correctAnswer: "Agent that runs on each Node and communicates with Control Plane",
    explanation: "The Kubelet is an agent that runs on each Node and ensures containers are running in a Pod, communicating with the Control Plane."
  },
  {
    id: 29,
    question: "What is the Kube-proxy?",
    options: [
      "Network proxy that runs on each Node",
      "API proxy",
      "Controller proxy",
      "Storage proxy"
    ],
    correctAnswer: "Network proxy that runs on each Node",
    explanation: "Kube-proxy is a network proxy that runs on each Node and implements the Kubernetes Service concept, providing load balancing and routing."
  },
  {
    id: 30,
    question: "What is a Container Runtime?",
    options: [
      "Software responsible for running containers",
      "Software for building containers",
      "Software for storing containers",
      "Software for networking containers"
    ],
    correctAnswer: "Software responsible for running containers",
    explanation: "The Container Runtime is the software responsible for running containers (e.g., Docker, containerd, CRI-O)."
  },
  {
    id: 31,
    question: "What is CRI?",
    options: [
      "Container Runtime Interface",
      "Container Runtime Interface for Kubernetes",
      "Container Registry Interface",
      "Container Runtime Integration"
    ],
    correctAnswer: "Container Runtime Interface",
    explanation: "CRI (Container Runtime Interface) is the API that the Kubelet uses to communicate with container runtimes."
  },
  {
    id: 32,
    question: "What is CNI?",
    options: [
      "Container Network Interface",
      "Cluster Network Interface",
      "Container Node Interface",
      "Cluster Node Interface"
    ],
    correctAnswer: "Container Network Interface",
    explanation: "CNI (Container Network Interface) is a standard for configuring networking in containerized environments."
  },
  {
    id: 33,
    question: "What is CSI?",
    options: [
      "Container Storage Interface",
      "Cluster Storage Interface",
      "Container System Interface",
      "Cluster System Interface"
    ],
    correctAnswer: "Container Storage Interface",
    explanation: "CSI (Container Storage Interface) is a standard for exposing storage systems to containerized workloads."
  },
  {
    id: 34,
    question: "What is a Pod in Kubernetes?",
    options: [
      "Smallest deployable unit, one or more containers with shared resources",
      "Single container",
      "Group of containers on different nodes",
      "Virtual machine"
    ],
    correctAnswer: "Smallest deployable unit, one or more containers with shared resources",
    explanation: "A Pod is the smallest deployable unit in Kubernetes, containing one or more containers that share the same network namespace, storage, and specifications."
  },
  {
    id: 35,
    question: "What is a multi-container Pod?",
    options: [
      "Pod with multiple containers that work together",
      "Multiple Pods with one container each",
      "Pod with containers on different nodes",
      "Pod with backup containers"
    ],
    correctAnswer: "Pod with multiple containers that work together",
    explanation: "A multi-container Pod contains multiple containers that work together, typically with one main container and sidecar containers that provide supporting functionality."
  },
  {
    id: 36,
    question: "What is a sidecar container?",
    options: [
      "Helper container that runs alongside main container",
      "Primary container",
      "Backup container",
      "Monitoring container"
    ],
    correctAnswer: "Helper container that runs alongside main container",
    explanation: "A sidecar container is a helper container that runs alongside the main container in a Pod, providing supporting functionality like logging, monitoring, or networking."
  },
  {
    id: 37,
    question: "What is an init container?",
    options: [
      "Container that runs before app containers to set up Pod",
      "Container that initializes cluster",
      "Container that runs first in cluster",
      "Container that configures cluster"
    ],
    correctAnswer: "Container that runs before app containers to set up Pod",
    explanation: "Init containers are specialized containers that run before app containers in a Pod to perform setup tasks like configuration, data loading, or dependency checks."
  },
  {
    id: 38,
    question: "What is a Liveness Probe?",
    options: [
      "Checks if container is running and healthy",
      "Checks if application is ready",
      "Checks if container is starting",
      "Checks if application is responding"
    ],
    correctAnswer: "Checks if container is running and healthy",
    explanation: "A Liveness Probe indicates whether a container is running and healthy. If the probe fails, the container is restarted."
  },
  {
    id: 39,
    question: "What is a Readiness Probe?",
    options: [
      "Checks if container is ready to serve traffic",
      "Checks if container is running",
      "Checks if container is healthy",
      "Checks if container is starting"
    ],
    correctAnswer: "Checks if container is ready to serve traffic",
    explanation: "A Readiness Probe indicates whether the container is ready to respond to requests. If the probe fails, the container is removed from Service endpoints."
  },
  {
    id: 40,
    question: "What is a Startup Probe?",
    options: [
      "Checks if application has started successfully",
      "Checks if container is running",
      "Checks if container is ready",
      "Checks if application is healthy"
    ],
    correctAnswer: "Checks if application has started successfully",
    explanation: "A Startup Probe indicates whether the application within the container has started. If it fails, the container is restarted."
  },
  {
    id: 41,
    question: "What are the types of probes in Kubernetes?",
    options: [
      "Liveness, Readiness, Startup",
      "Health, Ready, Start",
      "Live, Read, Start",
      "Liveness, Readiness, Health"
    ],
    correctAnswer: "Liveness, Readiness, Startup",
    explanation: "Kubernetes supports three types of probes: Liveness Probe (checks if container is running), Readiness Probe (checks if container is ready), and Startup Probe (checks if application has started)."
  },
  {
    id: 42,
    question: "What is a ReplicaSet?",
    options: [
      "Ensures specified number of Pod replicas are running",
      "Manages deployments",
      "Creates ReplicaSets",
      "Manages Replicas"
    ],
    correctAnswer: "Ensures specified number of Pod replicas are running",
    explanation: "A ReplicaSet ensures that a specified number of Pod replicas are running at any given time, replacing any Pods that fail."
  },
  {
    id: 43,
    question: "What is the difference between Deployment and ReplicaSet?",
    options: [
      "Deployment provides declarative updates and rollback",
      "Deployment manages ReplicaSets",
      "Both A and B",
      "Deployment is a type of ReplicaSet"
    ],
    correctAnswer: "Both A and B",
    explanation: "A Deployment provides declarative updates to Pods and ReplicaSets, enables rolling updates and rollbacks, and manages ReplicaSets. ReplicaSet only ensures the specified number of replicas are running."
  },
  {
    id: 44,
    question: "What is a Rolling Update in Kubernetes?",
    options: [
      "Update Pods incrementally without downtime",
      "Update all Pods at once",
      "Update Pods randomly",
      "Update Pods sequentially"
    ],
    correctAnswer: "Update Pods incrementally without downtime",
    explanation: "A Rolling Update updates Pods incrementally (one by one or in batches) without downtime, replacing old Pods with new ones as they become ready."
  },
  {
    id: 45,
    question: "What is a Rollback in Kubernetes?",
    options: [
      "Revert to previous Deployment revision",
      "Revert to previous Pod",
      "Revert to previous ReplicaSet",
      "Revert to previous version"
    ],
    correctAnswer: "Revert to previous Deployment revision",
    explanation: "A Rollback reverts a Deployment to a previous revision, restoring the previous Pod template and configuration."
  },
  {
    id: 46,
    question: "What is kubectl rollout status?",
    options: [
      "Watch rolling update status",
      "Watch rollout history",
      "Watch Deployment status",
      "Watch Pod status"
    ],
    correctAnswer: "Watch rolling update status",
    explanation: "kubectl rollout status monitors the progress of a rolling update, waiting for it to complete or reporting any errors."
  },
  {
    id: 47,
    question: "What is kubectl rollout history?",
    options: [
      "View history of rollouts for a resource",
      "View rollout status",
      "View Deployment history",
      "View Pod history"
    ],
    correctAnswer: "View history of rollouts for a resource",
    explanation: "kubectl rollout history displays the rollout history for a Deployment or other resource, showing previous revisions."
  },
  {
    id: 48,
    question: "What is kubectl rollout undo?",
    options: [
      "Rollback to previous revision",
      "Undo rollout",
      "Cancel rollout",
      "Reset rollout"
    ],
    correctAnswer: "Rollback to previous revision",
    explanation: "kubectl rollout undo rolls back a Deployment to the previous revision."
  },
  {
    id: 49,
    question: "What is a Service in Kubernetes?",
    options: [
      "Exposes Pods as network service with stable IP and DNS",
      "Network service for containers",
      "Service mesh",
      "API service"
    ],
    correctAnswer: "Exposes Pods as network service with stable IP and DNS",
    explanation: "A Service exposes a set of Pods as a network service with a stable cluster IP address and DNS name, abstracting away individual Pod IPs."
  },
  {
    id: 50,
    question: "What are the types of Services in Kubernetes?",
    options: [
      "ClusterIP, NodePort, LoadBalancer, ExternalName",
      "Internal, External, Public, Private",
      "IP, Node, Load, External",
      "Cluster, Node, Load, External"
    ],
    correctAnswer: "ClusterIP, NodePort, LoadBalancer, ExternalName",
    explanation: "The four types of Services are: ClusterIP (internal cluster IP), NodePort (exposes service on each Node's IP), LoadBalancer (creates external load balancer), and ExternalName (maps to external DNS)."
  },
  {
    id: 51,
    question: "What is ClusterIP Service?",
    options: [
      "Internal Service with cluster-internal IP",
      "External Service",
      "Node-level Service",
      "Load balanced Service"
    ],
    correctAnswer: "Internal Service with cluster-internal IP",
    explanation: "ClusterIP Service exposes the Service on an internal IP in the cluster, making it accessible only from within the cluster."
  },
  {
    id: 52,
    question: "What is NodePort Service?",
    options: [
      "Exposes Service on static port on each Node's IP",
      "Exposes Service on cluster IP",
      "Exposes Service on external IP",
      "Exposes Service on DNS"
    ],
    correctAnswer: "Exposes Service on static port on each Node's IP",
    explanation: "NodePort Service exposes the Service on each Node's IP at a static port (the NodePort), making it accessible from outside the cluster."
  },
  {
    id: 53,
    question: "What is LoadBalancer Service?",
    options: [
      "Creates external load balancer in cloud provider",
      "Creates internal load balancer",
      "Creates node-level load balancer",
      "Creates DNS load balancer"
    ],
    correctAnswer: "Creates external load balancer in cloud provider",
    explanation: "LoadBalancer Service creates an external load balancer in the cloud provider (e.g., AWS ELB, GCP Load Balancer) to expose the Service externally."
  },
  {
    id: 54,
    question: "What is ExternalName Service?",
    options: [
      "Maps Service to external DNS name",
      "Maps to external IP",
      "Maps to external load balancer",
      "Maps to external NodePort"
    ],
    correctAnswer: "Maps Service to external DNS name",
    explanation: "ExternalName Service maps the Service to an external DNS name (CNAME record), redirecting requests to that external service."
  },
  {
    id: 55,
    question: "What is Headless Service?",
    options: [
      "Service without cluster IP for direct Pod access",
      "Service without Pods",
      "Service without Selector",
      "Service without DNS"
    ],
    correctAnswer: "Service without cluster IP for direct Pod access",
    explanation: "A Headless Service is a Service with ClusterIP set to None, allowing direct access to Pods via DNS without load balancing or proxying."
  },
  {
    id: 56,
    question: "What is kube-proxy mode ipvs?",
    options: [
      "Uses Linux IPVS for load balancing",
      "Uses iptables",
      "Uses userspace",
      "Uses kernel space"
    ],
    correctAnswer: "Uses Linux IPVS for load balancing",
    explanation: "The ipvs mode of kube-proxy uses Linux IPVS (IP Virtual Server) for load balancing, providing better performance and scalability than iptables mode."
  },
  {
    id: 57,
    question: "What is kube-proxy mode iptables?",
    options: [
      "Uses iptables rules for load balancing",
      "Uses IPVS",
      "Uses userspace",
      "Uses kernel space"
    ],
    correctAnswer: "Uses iptables rules for load balancing",
    explanation: "The iptables mode of kube-proxy uses iptables rules to implement Service load balancing, which was the default mode before ipvs."
  },
  {
    id: 58,
    question: "What is an Ingress Controller?",
    options: [
      "Manages Ingress resources and provides external access",
      "Manages Services",
      "Manages Deployments",
      "Manages Routes"
    ],
    correctAnswer: "Manages Ingress resources and provides external access",
    explanation: "An Ingress Controller is a specialized load balancer that manages Ingress resources and provides external HTTP(S) access to Services in the cluster."
  },
  {
    id: 59,
    question: "What is a Secret?",
    options: [
      "Stores sensitive data like passwords, tokens, keys",
      "Stores configuration data",
      "Stores application data",
      "Stores network data"
    ],
    correctAnswer: "Stores sensitive data like passwords, tokens, keys",
    explanation: "A Secret is an object that stores sensitive data like passwords, OAuth tokens, SSH keys, and other credentials."
  },
  {
    id: 60,
    question: "What is the difference between ConfigMap and Secret?",
    options: [
      "ConfigMap for non-sensitive, Secret for sensitive data",
      "ConfigMap for sensitive, Secret for non-sensitive",
      "Both for sensitive data",
      "Both for non-sensitive data"
    ],
    correctAnswer: "ConfigMap for non-sensitive, Secret for sensitive data",
    explanation: "ConfigMaps are intended for storing non-sensitive configuration data, while Secrets are designed for storing sensitive data that should be protected."
  },
  {
    id: 61,
    question: "What is the difference between Secret and ConfigMap?",
    options: [
      "Secrets are base64 encoded by default",
      "Secrets are encrypted by default",
      "ConfigMaps are encrypted by default",
      "Both are the same"
    ],
    correctAnswer: "Secrets are base64 encoded by default",
    explanation: "Secrets store data as base64 encoded strings by default (not encrypted), while ConfigMaps store data as plain text. Both need additional encryption for security."
  },
  {
    id: 62,
    question: "What is Volume in Kubernetes?",
    options: [
      "Persistent storage mounted into Pod",
      "Temporary storage",
      "Network storage",
      "Memory storage"
    ],
    correctAnswer: "Persistent storage mounted into Pod",
    explanation: "A Volume is a directory containing data that is accessible to the containers in a Pod, with different types supporting various storage backends."
  },
  {
    id: 63,
    question: "What is emptyDir Volume?",
    options: [
      "Temporary storage that exists as long as Pod exists",
      "Persistent storage",
      "Network storage",
      "Shared storage"
    ],
    correctAnswer: "Temporary storage that exists as long as Pod exists",
    explanation: "emptyDir is a Volume type that creates an empty directory for the Pod and exists as long as the Pod exists, deleted when the Pod is removed."
  },
  {
    id: 64,
    question: "What is hostPath Volume?",
    options: [
      "Mounts file or directory from host node into Pod",
      "Mounts network storage",
      "Mounts temporary storage",
      "Mounts cloud storage"
    ],
    correctAnswer: "Mounts file or directory from host node into Pod",
    explanation: "hostPath Volume mounts a file or directory from the host Node's filesystem into the Pod, useful for accessing Node-specific files."
  },
  {
    id: 65,
    question: "What is StorageClass in Kubernetes?",
    options: [
      "Defines different types of storage like SSD, HDD",
      "Defines storage size",
      "Defines storage location",
      "Defines storage type"
    ],
    correctAnswer: "Defines different types of storage like SSD, HDD",
    explanation: "StorageClass defines different types of storage (e.g., fast SSD, slow HDD) that can be dynamically provisioned, with different performance characteristics."
  },
  {
    id: 66,
    question: "What is dynamic provisioning?",
    options: [
      "Automatically creates PersistentVolumes when PVC is created",
      "Manually creates PersistentVolumes",
      "Dynamically allocates storage",
      "Automatically creates PVCs"
    ],
    correctAnswer: "Automatically creates PersistentVolumes when PVC is created",
    explanation: "Dynamic provisioning automatically creates PersistentVolumes when a PersistentVolumeClaim is created, using StorageClass to determine the storage type."
  },
  {
    id: 67,
    question: "What is static provisioning?",
    options: [
      "Manually creates PersistentVolumes by administrator",
      "Automatically creates PersistentVolumes",
      "Dynamically creates PersistentVolumes",
      "Creates PersistentVolumes from StorageClass"
    ],
    correctAnswer: "Manually creates PersistentVolumes by administrator",
    explanation: "Static provisioning involves manually creating PersistentVolumes by an administrator, which are then bound to PersistentVolumeClaims."
  },
  {
    id: 68,
    question: "What is Access Mode in PersistentVolume?",
    options: [
      "Defines how PV can be mounted: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
      "Defines who can access",
      "Defines access permissions",
      "Defines access control"
    ],
    correctAnswer: "Defines how PV can be mounted: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
    explanation: "Access Mode defines how a PersistentVolume can be mounted: ReadWriteOnce (single node read-write), ReadOnlyMany (multiple nodes read-only), or ReadWriteMany (multiple nodes read-write)."
  },
  {
    id: 69,
    question: "What is Reclaim Policy in PersistentVolume?",
    options: [
      "Defines what happens to PV when PVC is deleted: Retain, Delete, Recycle",
      "Defines reclaim strategy",
      "Defines cleanup policy",
      "Defines deletion policy"
    ],
    correctAnswer: "Defines what happens to PV when PVC is deleted: Retain, Delete, Recycle",
    explanation: "Reclaim Policy defines what happens to a PersistentVolume when its PersistentVolumeClaim is deleted: Retain (keep PV), Delete (delete PV), or Recycle (scrub and make available)."
  },
  {
    id: 70,
    question: "What is a Namespace in Kubernetes?",
    options: [
      "Provides scope for names, virtual clusters",
      "Physical cluster",
      "Network partition",
      "Storage partition"
    ],
    correctAnswer: "Provides scope for names, virtual clusters",
    explanation: "A Namespace provides a scope for names (resource names must be unique within a Namespace) and acts as a virtual cluster for organizing resources."
  },
  {
    id: 71,
    question: "What is default Namespace?",
    options: [
      "Namespace where resources are created if not specified",
      "Namespace for system resources",
      "Namespace for all resources",
      "Namespace for kube-system"
    ],
    correctAnswer: "Namespace where resources are created if not specified",
    explanation: "The default Namespace is where resources are created if no Namespace is specified. Resources created without a Namespace go into the default Namespace."
  },
  {
    id: 72,
    question: "What is kube-system Namespace?",
    options: [
      "Namespace for Kubernetes system components",
      "Namespace for user applications",
      "Namespace for system applications",
      "Namespace for cluster resources"
    ],
    correctAnswer: "Namespace for Kubernetes system components",
    explanation: "The kube-system Namespace is reserved for Kubernetes system components like the API Server, etcd, DNS, Dashboard, and other cluster services."
  },
  {
    id: 73,
    question: "What is kube-public Namespace?",
    options: [
      "Namespace for public resources, readable by all users",
      "Namespace for public applications",
      "Namespace for system resources",
      "Namespace for cluster resources"
    ],
    correctAnswer: "Namespace for public resources, readable by all users",
    explanation: "The kube-public Namespace is for public resources that should be readable by all users, even unauthenticated users."
  },
  {
    id: 74,
    question: "What is a Context in kubectl?",
    options: [
      "Combination of cluster, Namespace, and user",
      "Configuration for kubectl",
      "Connection to cluster",
      "Authentication for cluster"
    ],
    correctAnswer: "Combination of cluster, Namespace, and user",
    explanation: "A Context in kubectl is a combination of a cluster, a Namespace, and a user, allowing quick switching between different configurations."
  },
  {
    id: 75,
    question: "What is RBAC in Kubernetes?",
    options: [
      "Role-Based Access Control for authorization",
      "Role-Based Authentication Control",
      "Resource-Based Access Control",
      "Rule-Based Access Control"
    ],
    correctAnswer: "Role-Based Access Control for authorization",
    explanation: "RBAC (Role-Based Access Control) is an authorization mechanism that uses Roles and RoleBindings to control access to Kubernetes resources."
  },
  {
    id: 76,
    question: "What is a Role in RBAC?",
    options: [
      "Set of permissions within a Namespace",
      "Set of permissions across all Namespaces",
      "Set of users",
      "Set of resources"
    ],
    correctAnswer: "Set of permissions within a Namespace",
    explanation: "A Role in RBAC defines a set of permissions (rules) within a single Namespace, specifying what operations are allowed on which resources."
  },
  {
    id: 77,
    question: "What is a ClusterRole in RBAC?",
    options: [
      "Set of permissions across all Namespaces",
      "Set of permissions within a Namespace",
      "Set of users",
      "Set of resources"
    ],
    correctAnswer: "Set of permissions across all Namespaces",
    explanation: "A ClusterRole in RBAC defines a set of permissions across all Namespaces in the cluster, specifying what operations are allowed on which resources."
  },
  {
    id: 78,
    question: "What is a RoleBinding in RBAC?",
    options: [
      "Grants Role permissions to users within a Namespace",
      "Binds users to Roles",
      "Grants ClusterRole permissions",
      "Binds ClusterRoles to users"
    ],
    correctAnswer: "Grants Role permissions to users within a Namespace",
    explanation: "A RoleBinding grants the permissions defined in a Role to a user or group of users within a specific Namespace."
  },
  {
    id: 79,
    question: "What is a ClusterRoleBinding in RBAC?",
    options: [
      "Grants ClusterRole permissions across all Namespaces",
      "Binds users to Roles",
      "Grants Role permissions",
      "Binds Roles to users"
    ],
    correctAnswer: "Grants ClusterRole permissions across all Namespaces",
    explanation: "A ClusterRoleBinding grants the permissions defined in a ClusterRole to a user or group of users across all Namespaces in the cluster."
  },
  {
    id: 80,
    question: "What is a ServiceAccount?",
    options: [
      "Provides identity for processes in Pods",
      "Provides authentication for users",
      "Provides authorization for services",
      "Provides identity for clusters"
    ],
    correctAnswer: "Provides identity for processes in Pods",
    explanation: "A ServiceAccount provides an identity for processes that run in Pods, allowing them to authenticate with the API Server and access resources based on RBAC permissions."
  },
  {
    id: 81,
    question: "What is default ServiceAccount?",
    options: [
      "ServiceAccount created automatically in each Namespace",
      "ServiceAccount for system",
      "ServiceAccount for users",
      "ServiceAccount for clusters"
    ],
    correctAnswer: "ServiceAccount created automatically in each Namespace",
    explanation: "The default ServiceAccount is created automatically in each Namespace and is used by Pods that don't specify a ServiceAccount."
  },
  {
    id: 82,
    question: "What is kubectl config?",
    options: [
      "Manages kubectl configuration",
      "Configures kubectl",
      "Manages contexts",
      "Manages clusters"
    ],
    correctAnswer: "Manages kubectl configuration",
    explanation: "kubectl config is a command group for managing kubectl configuration, including contexts, clusters, and users."
  },
  {
    id: 83,
    question: "What is kubectl get?",
    options: [
      "Lists resources",
      "Gets resource details",
      "Retrieves resources",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "kubectl get is a versatile command that lists resources, retrieves resource details, and can display information in various formats."
  },
  {
    id: 84,
    question: "What is kubectl describe?",
    options: [
      "Shows detailed information about a resource",
      "Lists resources",
      "Gets resource details",
      "Describes resource"
    ],
    correctAnswer: "Shows detailed information about a resource",
    explanation: "kubectl describe provides detailed information about a specific resource, including its configuration, status, and events."
  },
  {
    id: 85,
    question: "What is kubectl logs?",
    options: [
      "Prints logs from Pod containers",
      "Prints logs from cluster",
      "Prints logs from Nodes",
      "Prints logs from Services"
    ],
    correctAnswer: "Prints logs from Pod containers",
    explanation: "kubectl logs prints the logs from the containers in a Pod, useful for debugging and monitoring."
  }
];
const kubernetes = {
  id: id$5,
  title: title$5,
  description: description$5,
  category: category$5,
  questions: questions$5
};
const id$4 = 2;
const title$4 = "Data Engineering - Beginner";
const description$4 = "Fundamental concepts for data engineering beginners";
const category$4 = "Data";
const questions$4 = [
  {
    id: 1,
    question: "What does ETL stand for?",
    options: [
      "Extract, Transform, Load",
      "Edit, Transfer, Log",
      "Extract, Transfer, Load",
      "Edit, Transform, Load"
    ],
    correctAnswer: "Extract, Transform, Load",
    explanation: "ETL is the process of extracting data from sources, transforming it into a consistent format, and loading it into a target system like a data warehouse."
  },
  {
    id: 2,
    question: "What does ELT stand for?",
    options: [
      "Extract, Load, Transform",
      "Edit, Load, Transform",
      "Extract, Load, Transfer",
      "Execute, Load, Transform"
    ],
    correctAnswer: "Extract, Load, Transform",
    explanation: "ELT loads raw data first, then transforms it within the target system. This approach leverages cloud platform processing power."
  },
  {
    id: 3,
    question: "What is ETL vs ELT key difference?",
    options: [
      "ETL transforms before loading - ELT transforms after",
      "ETL uses cloud - ELT uses on-prem",
      "ETL is faster - ELT is reliable",
      "ETL is batch - ELT is real-time"
    ],
    correctAnswer: "ETL transforms before loading - ELT transforms after",
    explanation: "The key difference is when transformation happens. ETL transforms during extraction before loading. ELT loads raw data first, then transforms within the target."
  },
  {
    id: 4,
    question: "Primary purpose of a data warehouse?",
    options: [
      "Store raw unstructured data",
      "Centralized repository for structured data optimized for querying",
      "Process real-time streaming data",
      "Backup database files"
    ],
    correctAnswer: "Centralized repository for structured data optimized for querying",
    explanation: "A data warehouse is a centralized repository that stores integrated data from multiple sources, optimized for analytical querying and reporting."
  },
  {
    id: 5,
    question: "What is a data lake?",
    options: [
      "Database storing data in tables",
      "Storage holding raw data in native format",
      "Real-time processing engine",
      "Visualization tool"
    ],
    correctAnswer: "Storage holding raw data in native format",
    explanation: "A data lake stores raw data in its native format without requiring a predefined schema, supporting structured, semi-structured, and unstructured data."
  },
  {
    id: 6,
    question: "What is a data lakehouse?",
    options: [
      "Combination of data lake and warehouse features",
      "Data lake that serves as house",
      "Data warehouse storing raw data",
      "Cloud-only storage"
    ],
    correctAnswer: "Combination of data lake and warehouse features",
    explanation: "A data lakehouse combines the flexibility and low-cost storage of data lakes with the reliability, performance, and ACID transactions of data warehouses."
  },
  {
    id: 7,
    question: "Which is NOT a data warehouse?",
    options: [
      "Snowflake",
      "BigQuery",
      "Kafka",
      "Redshift"
    ],
    correctAnswer: "Kafka",
    explanation: "Kafka is a distributed event streaming platform, not a data warehouse. Snowflake, BigQuery, and Redshift are data warehouse solutions."
  },
  {
    id: 8,
    question: "Which file format is optimized for columnar storage?",
    options: [
      "JSON",
      "CSV",
      "Parquet",
      "XML"
    ],
    correctAnswer: "Parquet",
    explanation: "Parquet is a columnar storage file format optimized for use with big data processing frameworks, providing efficient compression and encoding."
  },
  {
    id: 9,
    question: "Who developed Parquet file format?",
    options: [
      "Twitter and Cloudera",
      "Microsoft and Cloudera",
      "Facebook and Twitter",
      "Google and Microsoft"
    ],
    correctAnswer: "Twitter and Cloudera",
    explanation: "Parquet was initially created by Twitter and Cloudera as an efficient columnar storage format for Hadoop."
  },
  {
    id: 10,
    question: "What is ORC file format?",
    options: [
      "Microsoft and Cloudera alternative to Parquet",
      "Facebook for Hadoop",
      "Google for BigQuery",
      "Apache for Spark"
    ],
    correctAnswer: "Microsoft and Cloudera alternative to Parquet",
    explanation: "ORC (Optimized Row Columnar) is a columnar file format created by Microsoft and Cloudera as an alternative to Parquet."
  },
  {
    id: 11,
    question: "What does CSV stand for?",
    options: [
      "Comma-Separated Values",
      "Column-Separated Values",
      "Compressed Structured Values",
      "Code-Specific Variables"
    ],
    correctAnswer: "Comma-Separated Values",
    explanation: "CSV is a simple file format that stores tabular data in plain text, with values separated by commas."
  },
  {
    id: 12,
    question: "Best format for human-readable nested structures?",
    options: [
      "CSV",
      "Parquet",
      "JSON",
      "Avro"
    ],
    correctAnswer: "JSON",
    explanation: "JSON (JavaScript Object Notation) is human-readable and can represent complex nested structures, though not as space-efficient as binary formats."
  },
  {
    id: 13,
    question: "Purpose of a data pipeline?",
    options: [
      "Move data only",
      "Extract, transform, process, and load data",
      "Store data only",
      "Create schemas"
    ],
    correctAnswer: "Extract, transform, process, and load data",
    explanation: "A data pipeline moves data from source to target while performing transformations, cleaning, aggregation, and other processing steps."
  },
  {
    id: 14,
    question: "Which is a batch processing framework?",
    options: [
      "Apache Spark",
      "Apache Kafka",
      "Apache Flink",
      "Node.js"
    ],
    correctAnswer: "Apache Spark",
    explanation: "Apache Spark is a unified analytics engine for large-scale data processing, with batch processing as its primary use case."
  },
  {
    id: 15,
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Language",
      "Structured Question Logic"
    ],
    correctAnswer: "Structured Query Language",
    explanation: "SQL is the standard language for defining, manipulating, and querying relational databases."
  },
  {
    id: 16,
    question: "Which SQL clause filters rows BEFORE aggregation?",
    options: [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    correctAnswer: "WHERE",
    explanation: "The WHERE clause filters individual rows from the result set before any grouping or aggregation is performed."
  },
  {
    id: 17,
    question: "Which SQL clause filters AFTER aggregation?",
    options: [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "FILTER"
    ],
    correctAnswer: "HAVING",
    explanation: "The HAVING clause filters groups created by GROUP BY after aggregation has been performed."
  },
  {
    id: 18,
    question: "What does LEFT JOIN return?",
    options: [
      "All rows from left table and matched right",
      "Only matching rows",
      "All rows from both",
      "All rows from right"
    ],
    correctAnswer: "All rows from left table and matched right",
    explanation: "A LEFT JOIN returns all rows from the left table, with matched rows from the right table, or NULLs if no match."
  },
  {
    id: 19,
    question: "What does INNER JOIN return?",
    options: [
      "All rows from both",
      "Only rows with matches in both",
      "All rows from left",
      "All rows from right"
    ],
    correctAnswer: "Only rows with matches in both",
    explanation: "An INNER JOIN returns only rows from both tables where the join condition is met."
  },
  {
    id: 20,
    question: "What is data modeling?",
    options: [
      "Creating visual charts",
      "Defining structure and relationships of data",
      "Writing SQL queries",
      "Building ML models"
    ],
    correctAnswer: "Defining structure and relationships of data",
    explanation: "Data modeling involves defining the structure, relationships, and business rules for data, creating schemas that represent the data domain."
  },
  {
    id: 21,
    question: "What is a fact table in dimensional modeling?",
    options: [
      "Stores quantitative data and foreign keys to dimensions",
      "Stores descriptive attributes",
      "Stores metadata",
      "Stores configuration"
    ],
    correctAnswer: "Stores quantitative data and foreign keys to dimensions",
    explanation: "A fact table stores quantitative data (measures/facts) and foreign keys that reference dimension tables."
  },
  {
    id: 22,
    question: "What is a dimension table in dimensional modeling?",
    options: [
      "Stores descriptive attributes about entities",
      "Stores quantitative data",
      "Stores transaction data",
      "Stores metadata"
    ],
    correctAnswer: "Stores descriptive attributes about entities",
    explanation: "A dimension table stores descriptive attributes (dimensions) about entities like customers, products, dates, etc."
  },
  {
    id: 23,
    question: "What is a star schema?",
    options: [
      "Fact table in center with dimension tables radiating out",
      "Multiple fact tables",
      "Snowflake schema",
      "Galaxy schema"
    ],
    correctAnswer: "Fact table in center with dimension tables radiating out",
    explanation: "A star schema has a central fact table connected directly to multiple dimension tables, forming a star-like structure."
  },
  {
    id: 24,
    question: "What is a snowflake schema?",
    options: [
      "Star schema with normalized dimensions",
      "Denormalized star schema",
      "Multiple fact tables",
      "Simple star schema"
    ],
    correctAnswer: "Star schema with normalized dimensions",
    explanation: "A snowflake schema is a star schema where dimension tables are normalized into multiple related tables, forming a snowflake pattern."
  },
  {
    id: 25,
    question: "What is a galaxy schema?",
    options: [
      "Multiple fact tables sharing dimension tables",
      "Single fact table",
      "Star schema",
      "Snowflake schema"
    ],
    correctAnswer: "Multiple fact tables sharing dimension tables",
    explanation: "A galaxy schema (or fact constellation) has multiple fact tables that share some dimension tables, forming a galaxy-like structure."
  },
  {
    id: 26,
    question: "What is a surrogate key in dimensional modeling?",
    options: [
      "Artificial primary key for dimension tables",
      "Natural key",
      "Composite key",
      "Foreign key"
    ],
    correctAnswer: "Artificial primary key for dimension tables",
    explanation: "A surrogate key is an artificial, system-generated primary key used in dimension tables, typically an integer."
  },
  {
    id: 27,
    question: "What is a natural key in dimensional modeling?",
    options: [
      "Business meaningful identifier",
      "Artificial key",
      "Composite key",
      "Foreign key"
    ],
    correctAnswer: "Business meaningful identifier",
    explanation: "A natural key is a business meaningful identifier (like customer SSN, product SKU) that exists in the source system."
  },
  {
    id: 28,
    question: "What is a grain in dimensional modeling?",
    options: [
      "Level of detail in a fact table",
      "Size of table",
      "Number of rows",
      "Number of columns"
    ],
    correctAnswer: "Level of detail in a fact table",
    explanation: "The grain (or granularity) defines the level of detail in a fact table (e.g., transaction-level, daily-level, monthly-level)."
  },
  {
    id: 29,
    question: "What is a conformed dimension?",
    options: [
      "Dimension used consistently across multiple fact tables",
      "Dimension with same name",
      "Dimension with same columns",
      "Dimension with same data"
    ],
    correctAnswer: "Dimension used consistently across multiple fact tables",
    explanation: "A conformed dimension is used consistently across multiple fact tables, ensuring the same meaning and content."
  },
  {
    id: 30,
    question: "What is a junk dimension?",
    options: [
      "Group of random or miscellaneous attributes",
      "Unused dimension",
      "Null dimension",
      "Temporary dimension"
    ],
    correctAnswer: "Group of random or miscellaneous attributes",
    explanation: "A junk dimension groups together random or miscellaneous attributes (like flags, indicators) that don't logically belong in other dimensions."
  },
  {
    id: 31,
    question: "What is a degenerate dimension?",
    options: [
      "Dimension stored in fact table as attribute",
      "Empty dimension",
      "Small dimension",
      "Normalized dimension"
    ],
    correctAnswer: "Dimension stored in fact table as attribute",
    explanation: "A degenerate dimension is a dimension that is stored in the fact table as an attribute rather than in a separate dimension table."
  },
  {
    id: 32,
    question: "What is a bridge table?",
    options: [
      "Resolves multi-valued attributes in dimensions",
      "Connects fact tables",
      "Connects dimensions",
      "Resolves many-to-many relationships"
    ],
    correctAnswer: "Resolves multi-valued attributes in dimensions",
    explanation: "A bridge table resolves multi-valued attributes in a dimension (e.g., a customer with multiple bank accounts) by creating a separate table."
  },
  {
    id: 33,
    question: "What is a role-playing dimension?",
    options: [
      "Same dimension used multiple times with different roles",
      "Dimension with multiple purposes",
      "Dimension with multiple tables",
      "Dimension with multiple columns"
    ],
    correctAnswer: "Same dimension used multiple times with different roles",
    explanation: "A role-playing dimension is when the same dimension is used multiple times in a fact table with different roles (e.g., date as order date, ship date, delivery date)."
  },
  {
    id: 34,
    question: "What is a slowly changing dimension (SCD)?",
    options: [
      "Dimension that changes infrequently over time",
      "Dimension that changes frequently",
      "Dimension that never changes",
      "Dimension with only numbers"
    ],
    correctAnswer: "Dimension that changes infrequently over time",
    explanation: "A slowly changing dimension (SCD) stores and manages both current and historical data over time as dimension attributes change."
  },
  {
    id: 35,
    question: "What is Type 1 SCD?",
    options: [
      "Overwrite old value with new value",
      "Track full history",
      "Track current and previous",
      "Store history separately"
    ],
    correctAnswer: "Overwrite old value with new value",
    explanation: "Type 1 SCD overwrites the old value with the new value, maintaining only the current state without history."
  },
  {
    id: 36,
    question: "What is Type 2 SCD?",
    options: [
      "Create new row with new value, keep old row",
      "Overwrite old value",
      "Update existing row",
      "Delete old row"
    ],
    correctAnswer: "Create new row with new value, keep old row",
    explanation: "Type 2 SCD creates a new row with the new value while keeping the old row, maintaining full history with effective dates."
  },
  {
    id: 37,
    question: "What is Type 3 SCD?",
    options: [
      "Store current and one previous value in same row",
      "Store full history",
      "Store only current value",
      "Store multiple previous values"
    ],
    correctAnswer: "Store current and one previous value in same row",
    explanation: "Type 3 SCD stores both the current and one previous value in the same row, typically with columns like current_value and previous_value."
  },
  {
    id: 38,
    question: "What is Type 4 SCD?",
    options: [
      "Store history in separate table",
      "Store full history in same table",
      "Overwrite old values",
      "Track changes in dimension"
    ],
    correctAnswer: "Store history in separate table",
    explanation: "Type 4 SCD stores the current values in the main dimension table and history in a separate history table."
  },
  {
    id: 39,
    question: "What is a measure in a fact table?",
    options: [
      "Numeric value that can be aggregated",
      "Descriptive attribute",
      "Foreign key",
      "Primary key"
    ],
    correctAnswer: "Numeric value that can be aggregated",
    explanation: "A measure (or fact) in a fact table is a numeric value that can be aggregated, such as sales amount, quantity, or profit."
  },
  {
    id: 40,
    question: "What is an additively additive measure?",
    options: [
      "Can be summed across all dimensions",
      "Cannot be summed across any dimension",
      "Can be summed across some dimensions",
      "Can be averaged"
    ],
    correctAnswer: "Can be summed across all dimensions",
    explanation: "An additively additive measure (like sales amount) can be summed across all dimensions (time, geography, product)."
  },
  {
    id: 41,
    question: "What is a non-additive measure?",
    options: [
      "Cannot be summed across dimensions",
      "Can be summed across all dimensions",
      "Can be summed across some dimensions",
      "Can be averaged"
    ],
    correctAnswer: "Cannot be summed across dimensions",
    explanation: "A non-additive measure (like average temperature, ratio) cannot be meaningfully summed across dimensions."
  },
  {
    id: 42,
    question: "What is a semi-additive measure?",
    options: [
      "Can be summed across some but not all dimensions",
      "Can be summed across all dimensions",
      "Cannot be summed across any dimension",
      "Can be averaged"
    ],
    correctAnswer: "Can be summed across some but not all dimensions",
    explanation: "A semi-additive measure (like inventory balance) can be summed across some dimensions (product) but not others (time)."
  },
  {
    id: 43,
    question: "What is a derived measure?",
    options: [
      "Calculated from other measures",
      "Stored directly",
      "Copied from source",
      "Imported from external system"
    ],
    correctAnswer: "Calculated from other measures",
    explanation: "A derived measure is calculated from other measures (e.g., profit = revenue - cost, margin = profit / revenue)."
  },
  {
    id: 44,
    question: "What is a factless fact table?",
    options: [
      "Fact table without measures, only foreign keys",
      "Fact table with no data",
      "Fact table with only measures",
      "Dimension table with facts"
    ],
    correctAnswer: "Fact table without measures, only foreign keys",
    explanation: "A factless fact table contains only foreign keys to dimensions and no measures, used to track events or coverage (e.g., student attendance)."
  },
  {
    id: 45,
    question: "What is a periodic snapshot fact table?",
    options: [
      "Stores state of dimension at regular intervals",
      "Stores transactions",
      "Stores events",
      "Stores changes"
    ],
    correctAnswer: "Stores state of dimension at regular intervals",
    explanation: "A periodic snapshot fact table stores the state of a dimension (like inventory, account balance) at regular intervals (daily, monthly)."
  },
  {
    id: 46,
    question: "What is an accumulating snapshot fact table?",
    options: [
      "Tracks progress through a process over time",
      "Tracks periodic snapshots",
      "Tracks transactions",
      "Tracks events"
    ],
    correctAnswer: "Tracks progress through a process over time",
    explanation: "An accumulating snapshot fact table tracks the progress of entities through a well-defined process (like order fulfillment) over time."
  },
  {
    id: 47,
    question: "What is a consolidated fact table?",
    options: [
      "Combines data from multiple sources at different grains",
      "Consolidates dimensions",
      "Consolidates measures",
      "Combines fact tables"
    ],
    correctAnswer: "Combines data from multiple sources at different grains",
    explanation: "A consolidated fact table combines data from multiple sources or processes at different grains into a single table."
  },
  {
    id: 48,
    question: "What is Avro format?",
    options: [
      "Row-based binary format with schema evolution",
      "Columnar format",
      "JSON format",
      "Text format"
    ],
    correctAnswer: "Row-based binary format with schema evolution",
    explanation: "Avro is a row-based binary serialization format that supports schema evolution, making it suitable for data that changes over time."
  },
  {
    id: 49,
    question: "What is Protocol Buffers (protobuf)?",
    options: [
      "Binary serialization format by Google",
      "JSON format",
      "XML format",
      "CSV format"
    ],
    correctAnswer: "Binary serialization format by Google",
    explanation: "Protocol Buffers is a language-neutral, platform-neutral binary serialization format developed by Google for efficient data interchange."
  },
  {
    id: 50,
    question: "What is a database index?",
    options: [
      "Data structure that improves query performance",
      "Primary key",
      "Foreign key",
      "Constraint"
    ],
    correctAnswer: "Data structure that improves query performance",
    explanation: "A database index is a data structure that improves the speed of data retrieval operations on a database table."
  },
  {
    id: 51,
    question: "What is a primary key?",
    options: [
      "Unique identifier for each row in a table",
      "Index on a table",
      "Foreign key to another table",
      "Constraint on a column"
    ],
    correctAnswer: "Unique identifier for each row in a table",
    explanation: "A primary key is a column (or set of columns) that uniquely identifies each row in a table and cannot contain null values."
  },
  {
    id: 52,
    question: "What is a foreign key?",
    options: [
      "Column that references primary key in another table",
      "Unique identifier",
      "Index on a table",
      "Constraint on a column"
    ],
    correctAnswer: "Column that references primary key in another table",
    explanation: "A foreign key is a column (or set of columns) in one table that references the primary key in another table, establishing a relationship."
  },
  {
    id: 53,
    question: "What is normalization in databases?",
    options: [
      "Process of organizing data to reduce redundancy",
      "Process of combining tables",
      "Process of creating indexes",
      "Process of adding constraints"
    ],
    correctAnswer: "Process of organizing data to reduce redundancy",
    explanation: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity through a series of normal forms."
  },
  {
    id: 54,
    question: "What is denormalization in databases?",
    options: [
      "Process of combining tables to improve query performance",
      "Process of normalizing data",
      "Process of creating indexes",
      "Process of adding constraints"
    ],
    correctAnswer: "Process of combining tables to improve query performance",
    explanation: "Denormalization is the process of combining tables and adding redundant data to improve query performance, typically at the cost of data integrity."
  },
  {
    id: 55,
    question: "What is a star schema vs snowflake schema?",
    options: [
      "Star has denormalized dimensions, snowflake has normalized",
      "Star has normalized dimensions, snowflake has denormalized",
      "Star has more tables",
      "Snowflake has fewer tables"
    ],
    correctAnswer: "Star has denormalized dimensions, snowflake has normalized",
    explanation: "Star schema has denormalized dimension tables directly connected to the fact table, while snowflake schema has normalized dimension tables split into multiple tables."
  },
  {
    id: 56,
    question: "What is OLAP?",
    options: [
      "Online Analytical Processing for complex queries",
      "Online Transaction Processing",
      "Online Learning and Analytics",
      "Operational Analytics Processing"
    ],
    correctAnswer: "Online Analytical Processing for complex queries",
    explanation: "OLAP (Online Analytical Processing) is a category of software tools that provide analysis of data for business decisions, typically involving complex queries and aggregations."
  },
  {
    id: 57,
    question: "What is OLTP?",
    options: [
      "Online Transaction Processing for transactional workloads",
      "Online Analytical Processing",
      "Online Learning and Transaction",
      "Operational Transaction Processing"
    ],
    correctAnswer: "Online Transaction Processing for transactional workloads",
    explanation: "OLTP (Online Transaction Processing) handles transactional workloads involving small, fast operations like inserts, updates, and deletes."
  },
  {
    id: 58,
    question: "What is the difference between OLAP and OLTP?",
    options: [
      "OLAP for analytics, OLTP for transactions",
      "OLAP for transactions, OLTP for analytics",
      "Both for analytics",
      "Both for transactions"
    ],
    correctAnswer: "OLAP for analytics, OLTP for transactions",
    explanation: "OLAP is optimized for analytical queries (complex, read-heavy), while OLTP is optimized for transactional operations (simple, write-heavy)."
  },
  {
    id: 59,
    question: "What is a data mart?",
    options: [
      "Subset of data warehouse for specific business function",
      "Entire data warehouse",
      "Collection of data lakes",
      "Data storage system"
    ],
    correctAnswer: "Subset of data warehouse for specific business function",
    explanation: "A data mart is a subset of a data warehouse designed for a specific business function, team, or department."
  },
  {
    id: 60,
    question: "What is a conformed fact?",
    options: [
      "Fact used consistently across multiple data marts",
      "Fact with same name",
      "Fact with same value",
      "Fact with same measure"
    ],
    correctAnswer: "Fact used consistently across multiple data marts",
    explanation: "A conformed fact is a fact that is used consistently across multiple data marts, ensuring the same meaning and calculation."
  },
  {
    id: 61,
    question: "What is a bus matrix in data warehousing?",
    options: [
      "Matrix showing relationship between business processes and dimensions",
      "Matrix showing data flows",
      "Matrix showing data volumes",
      "Matrix showing data types"
    ],
    correctAnswer: "Matrix showing relationship between business processes and dimensions",
    explanation: "A bus matrix is a matrix that shows the relationship between business processes (rows) and dimensions (columns), helping to identify conformed dimensions and facts."
  },
  {
    id: 62,
    question: "What is a slowly changing dimension Type 6?",
    options: [
      "Combination of Type 1, 2, and 3",
      "Separate table",
      "Overwrite and track history",
      "Store current and previous values"
    ],
    correctAnswer: "Combination of Type 1, 2, and 3",
    explanation: "Type 6 SCD combines aspects of Type 1 (overwrite), Type 2 (track history), and Type 3 (store previous value) approaches."
  },
  {
    id: 63,
    question: "What is a fact table with only foreign keys called?",
    options: [
      "Factless fact table",
      "Event tracking table",
      "Coverage table",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "A fact table with only foreign keys and no measures is called a factless fact table, also known as an event tracking table or coverage table."
  },
  {
    id: 64,
    question: "What is the purpose of a bridge table in dimensional modeling?",
    options: [
      "Handle multi-valued attributes",
      "Resolve many-to-many relationships",
      "Both A and B",
      "Connect dimensions"
    ],
    correctAnswer: "Both A and B",
    explanation: "A bridge table handles multi-valued attributes and resolves many-to-many relationships between facts and dimensions."
  },
  {
    id: 65,
    question: "What is a heterogeneous SCD?",
    options: [
      "Different SCD types for different attributes",
      "Same SCD type for all attributes",
      "SCD for different dimensions",
      "SCD for different fact tables"
    ],
    correctAnswer: "Different SCD types for different attributes",
    explanation: "A heterogeneous SCD uses different slowly changing dimension types (Type 1, 2, 3, etc.) for different attributes within the same dimension."
  },
  {
    id: 66,
    question: "What is a mini-dimension?",
    options: [
      "Separate dimension for frequently changing attributes",
      "Small dimension",
      "Normalized dimension",
      "Denormalized dimension"
    ],
    correctAnswer: "Separate dimension for frequently changing attributes",
    explanation: "A mini-dimension is a separate dimension table created for attributes that change frequently, containing only the changing attributes with a foreign key back to the main dimension."
  },
  {
    id: 67,
    question: "What is a time dimension in data warehousing?",
    options: [
      "Dimension containing date and time attributes",
      "Dimension for time tracking",
      "Dimension for scheduling",
      "Dimension for timing"
    ],
    correctAnswer: "Dimension containing date and time attributes",
    explanation: "A time dimension contains date and time attributes (day, month, year, quarter, day of week, etc.) used for time-based analysis."
  },
  {
    id: 68,
    question: "What is a role-playing dimension example?",
    options: [
      "Date dimension used as order date and ship date",
      "Customer dimension used twice",
      "Product dimension used multiple times",
      "All of the above"
    ],
    correctAnswer: "Date dimension used as order date and ship date",
    explanation: "A role-playing dimension example is the date dimension used multiple times in a fact table with different roles (order date, ship date, delivery date)."
  },
  {
    id: 69,
    question: "What is the purpose of a snowflake schema?",
    options: [
      "Reduce data redundancy",
      "Improve query performance",
      "Both A and B",
      "Simplify schema"
    ],
    correctAnswer: "Both A and B",
    explanation: "A snowflake schema reduces data redundancy by normalizing dimension tables, which can improve query performance by reducing the data volume."
  },
  {
    id: 70,
    question: "What is a junk dimension example?",
    options: [
      "Flags and indicators grouped together",
      "Customer attributes",
      "Product attributes",
      "Date attributes"
    ],
    correctAnswer: "Flags and indicators grouped together",
    explanation: "A junk dimension example would be grouping together various flags and indicators (like promotion flag, discount flag, priority flag) that don't logically belong in other dimensions."
  },
  {
    id: 71,
    question: "What is a degenerate dimension example?",
    options: [
      "Invoice number stored in fact table",
      "Customer name",
      "Product description",
      "Date"
    ],
    correctAnswer: "Invoice number stored in fact table",
    explanation: "A degenerate dimension example is an invoice number stored as an attribute in the fact table rather than in a separate dimension table."
  },
  {
    id: 72,
    question: "What is a fact table grain example?",
    options: [
      "Transaction-level fact table",
      "Daily-level fact table",
      "Monthly-level fact table",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "Fact table grain examples include transaction-level (each row is a transaction), daily-level (each row is daily summary), and monthly-level (each row is monthly summary)."
  },
  {
    id: 73,
    question: "What is the purpose of surrogate keys in dimensional modeling?",
    options: [
      "Provide stable, integer keys for joins",
      "Replace natural keys",
      "Ensure data integrity",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "Surrogate keys provide stable, integer keys for joins, replace potentially unstable natural keys, and help ensure data integrity in dimensional models."
  },
  {
    id: 74,
    question: "What is a bus schema in data warehousing?",
    options: [
      "Enterprise-wide dimensional model",
      "Star schema",
      "Snowflake schema",
      "Galaxy schema"
    ],
    correctAnswer: "Enterprise-wide dimensional model",
    explanation: "A bus schema is an enterprise-wide dimensional model that integrates all business processes and dimensions across the organization."
  },
  {
    id: 75,
    question: "What is a conformed dimension example?",
    options: [
      "Date dimension used across all fact tables",
      "Customer dimension",
      "Product dimension",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "Conformed dimension examples include date, customer, and product dimensions that are used consistently across multiple fact tables."
  },
  {
    id: 76,
    question: "What is a Star Join Schema?",
    options: [
      "Star schema used for join operations",
      "Join between fact and dimension tables",
      "Schema for star-shaped queries",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "A Star Join Schema (or Star Schema) is used for join operations, particularly joins between fact tables and dimension tables, forming star-shaped query patterns."
  },
  {
    id: 77,
    question: "What is a Snowflake Join Schema?",
    options: [
      "Snowflake schema used for join operations",
      "Join between normalized dimensions",
      "Schema for snowflake-shaped queries",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "A Snowflake Join Schema (or Snowflake Schema) is used for join operations in normalized dimensions, forming snowflake-shaped query patterns."
  },
  {
    id: 78,
    question: "What is a slowly changing dimension Type 5?",
    options: [
      "Type 1 and Type 4 combined",
      "Type 2 and Type 3 combined",
      "Type 1 and Type 2 combined",
      "Type 3 and Type 4 combined"
    ],
    correctAnswer: "Type 1 and Type 4 combined",
    explanation: "Type 5 SCD combines Type 1 (overwrite) for the current value and Type 4 (history in separate table) for tracking history."
  },
  {
    id: 79,
    question: "What is a hierarchical dimension?",
    options: [
      "Dimension with parent-child relationships",
      "Flat dimension",
      "Normalized dimension",
      "Denormalized dimension"
    ],
    correctAnswer: "Dimension with parent-child relationships",
    explanation: "A hierarchical dimension contains parent-child relationships (like geographic hierarchy: country > region > city, or organizational hierarchy: company > department > employee)."
  },
  {
    id: 80,
    question: "What is a fixed dimension in data warehousing?",
    options: [
      "Dimension with fixed, unchanging values",
      "Dimension that changes frequently",
      "Dimension that changes infrequently",
      "Dimension with variable values"
    ],
    correctAnswer: "Dimension with fixed, unchanging values",
    explanation: "A fixed dimension (or static dimension) contains values that are fixed and unchanging over time, like date or time dimensions."
  },
  {
    id: 81,
    question: "What is a variable dimension?",
    options: [
      "Dimension with changing values",
      "Dimension with fixed values",
      "Dimension with no values",
      "Dimension with single value"
    ],
    correctAnswer: "Dimension with changing values",
    explanation: "A variable dimension (or changing dimension) contains values that change over time, requiring slowly changing dimension techniques."
  },
  {
    id: 82,
    question: "What is a monster dimension?",
    options: [
      "Very large dimension with many attributes",
      "Small dimension",
      "Fast-changing dimension",
      "Static dimension"
    ],
    correctAnswer: "Very large dimension with many attributes",
    explanation: "A monster dimension is a very large dimension with many attributes (e.g., 50+ columns), which can cause performance issues."
  }
];
const dataEngineeringBeginner = {
  id: id$4,
  title: title$4,
  description: description$4,
  category: category$4,
  questions: questions$4
};
const id$3 = 3;
const title$3 = "Data Engineering - Mid Level";
const description$3 = "Intermediate concepts for experienced data engineers";
const category$3 = "Data";
const questions$3 = [
  {
    id: 1,
    question: "What is data partitioning?",
    options: [
      "Splitting data into smaller physical files for performance",
      "Encrypting data",
      "Compressing data",
      "Indexing data"
    ],
    correctAnswer: "Splitting data into smaller physical files for performance",
    explanation: "Data partitioning splits large datasets into smaller files based on criteria like date, range, or hash, improving query performance through partition pruning."
  },
  {
    id: 2,
    question: "What is partition pruning?",
    options: [
      "Skipping non-relevant partitions",
      "Removing old partitions",
      "Combining partitions",
      "Optimizing partition sizes"
    ],
    correctAnswer: "Skipping non-relevant partitions",
    explanation: "Partition pruning automatically skips reading partitions that do not contain relevant data for a query, improving performance."
  },
  {
    id: 3,
    question: "Data lake vs data warehouse - key difference?",
    options: [
      "Lake-raw, schema-on-read; Warehouse-structured, schema-on-write",
      "Lake-NoSQL; Warehouse-SQL",
      "Lake-real-time; Warehouse-batch",
      "Lake-cloud; Warehouse-on-prem"
    ],
    correctAnswer: "Lake-raw, schema-on-read; Warehouse-structured, schema-on-write",
    explanation: "Data lakes store raw data with schema-on-read; data warehouses store processed, structured data with schema-on-write."
  },
  {
    id: 4,
    question: "What is a staging area?",
    options: [
      "Temporary hold for raw data before transformation",
      "Final processed data storage",
      "Backup storage",
      "Query execution area"
    ],
    correctAnswer: "Temporary hold for raw data before transformation",
    explanation: "A staging area temporarily holds raw extracted data before it undergoes transformation, cleaning, and integration."
  },
  {
    id: 5,
    question: "What is a dimensional model?",
    options: [
      "Facts and dimensions for analytics",
      "3D data visualization",
      "Real-time data model",
      "Physical storage model"
    ],
    correctAnswer: "Facts and dimensions for analytics",
    explanation: "Dimensional modeling organizes data into facts (measures) and dimensions (descriptive attributes) for efficient analytical querying."
  },
  {
    id: 6,
    question: "What is OLTP vs OLAP?",
    options: [
      "OLTP-transactional; OLAP-analytical",
      "OLTP-NoSQL; OLAP-SQL",
      "OLTP-batch; OLAP-real-time",
      "OLTP-read; OLAP-write"
    ],
    correctAnswer: "OLTP-transactional; OLAP-analytical",
    explanation: "OLTP handles transactional workloads (small, fast operations); OLAP handles analytical workloads (complex queries, aggregations)."
  },
  {
    id: 7,
    question: "What is a materialized view?",
    options: [
      "Stores query results physically",
      "Virtual table",
      "Updatable view",
      "Temporary table"
    ],
    correctAnswer: "Stores query results physically",
    explanation: "A materialized view stores the pre-computed results of a query physically, allowing for faster query performance."
  },
  {
    id: 8,
    question: "What is ELT?",
    options: [
      "Extract, Load, Transform",
      "Edit, Load, Transform",
      "Extract, Load, Transfer",
      "Execute, Load, Transform"
    ],
    correctAnswer: "Extract, Load, Transform",
    explanation: "ELT loads raw data first into the target system, then performs transformations within that system."
  },
  {
    id: 9,
    question: "What is Apache Airflow used for?",
    options: [
      "Orchestrating data pipelines",
      "Data visualization",
      "Real-time processing",
      "Data storage"
    ],
    correctAnswer: "Orchestrating data pipelines",
    explanation: "Apache Airflow is a platform for programmatically authoring, scheduling, and monitoring workflows and data pipelines."
  },
  {
    id: 10,
    question: "What is a DAG in Airflow?",
    options: [
      "Directed Acyclic Graph of tasks",
      "Data Access Gateway",
      "Distributed Application Grid",
      "Database Abstraction Layer"
    ],
    correctAnswer: "Directed Acyclic Graph of tasks",
    explanation: "In Airflow, a DAG is a collection of tasks with dependencies defined between them, represented as a directed acyclic graph."
  },
  {
    id: 11,
    question: "What is data lineage?",
    options: [
      "History of data transformations",
      "Physical location of data",
      "Schema definition",
      "Encryption keys"
    ],
    correctAnswer: "History of data transformations",
    explanation: "Data lineage tracks the flow of data from source to destination, including all transformations, providing transparency into data origins and movements."
  },
  {
    id: 12,
    question: "What is a data catalog?",
    options: [
      "Centralized metadata repository",
      "List of files",
      "Query history",
      "Collection of data sources"
    ],
    correctAnswer: "Centralized metadata repository",
    explanation: "A data catalog provides a centralized inventory of data assets with metadata, making them discoverable and understandable."
  },
  {
    id: 13,
    question: "What is SCD?",
    options: [
      "Dimension that changes infrequently",
      "Dimension that loads slowly",
      "Dimension never updated",
      "Dimension with only numbers"
    ],
    correctAnswer: "Dimension that changes infrequently",
    explanation: "SCD (Slowly Changing Dimension) stores and manages both current and historical data over time as attributes change."
  },
  {
    id: 14,
    question: "What is Type 2 SCD?",
    options: [
      "Tracks full history with new rows",
      "Overwrites old values",
      "Tracks current and previous",
      "Stores history separately"
    ],
    correctAnswer: "Tracks full history with new rows",
    explanation: "Type 2 SCD tracks full history by creating new rows with effective dates when attributes change, allowing historical analysis."
  },
  {
    id: 15,
    question: "What is data governance?",
    options: [
      "Ensuring data quality, security, compliance",
      "Storing data in governed location",
      "Visualizing data",
      "Deleting old data"
    ],
    correctAnswer: "Ensuring data quality, security, compliance",
    explanation: "Data governance is the overall management of data availability, usability, integrity, and security, ensuring compliance with policies and regulations."
  },
  {
    id: 16,
    question: "What is data quality?",
    options: [
      "How well data meets intended use",
      "Quantity of data",
      "Speed of processing",
      "Complexity of data"
    ],
    correctAnswer: "How well data meets intended use",
    explanation: "Data quality is the measure of how well data meets the needs of its intended use, typically measured by dimensions like accuracy, completeness, consistency, timeliness, validity, and uniqueness."
  },
  {
    id: 17,
    question: "What is a data mart?",
    options: [
      "Subset of data warehouse for specific function",
      "Type of database",
      "Processing engine",
      "Visualization tool"
    ],
    correctAnswer: "Subset of data warehouse for specific function",
    explanation: "A data mart is a subset of a data warehouse designed for a specific business function, team, or department."
  },
  {
    id: 18,
    question: "What is a conformed dimension?",
    options: [
      "Used consistently across fact tables",
      "Conforms to specific standard",
      "Validated dimension",
      "Read-only dimension"
    ],
    correctAnswer: "Used consistently across fact tables",
    explanation: "A conformed dimension has the same meaning and content when it appears in different fact tables, ensuring consistency."
  },
  {
    id: 19,
    question: "What is a junk dimension?",
    options: [
      "Random or miscellaneous attributes",
      "Only numeric values",
      "Unused dimension",
      "Null-only dimension"
    ],
    correctAnswer: "Random or miscellaneous attributes",
    explanation: "A junk dimension contains attributes that do not logically belong with other attributes in existing dimensions, like flags or indicators."
  },
  {
    id: 20,
    question: "What is data vault modeling?",
    options: [
      "Scalable, agile data warehouse architecture",
      "Simple star schema",
      "Replace dimensional modeling",
      "Store only recent data"
    ],
    correctAnswer: "Scalable, agile data warehouse architecture",
    explanation: "Data Vault is a database modeling approach for highly scalable, agile data warehouses with hubs, links, and satellites."
  },
  {
    id: 21,
    question: "What is a hub in Data Vault?",
    options: [
      "Core table containing business keys",
      "Link table",
      "Satellite table",
      "Connection table"
    ],
    correctAnswer: "Core table containing business keys",
    explanation: "A hub in Data Vault is a core table that contains the business keys (primary keys from source systems) for a business entity."
  },
  {
    id: 22,
    question: "What is a link in Data Vault?",
    options: [
      "Table representing relationships between hubs",
      "Hub table",
      "Satellite table",
      "Connection between satellites"
    ],
    correctAnswer: "Table representing relationships between hubs",
    explanation: "A link in Data Vault is a table that represents relationships (transactions or associations) between hubs."
  },
  {
    id: 23,
    question: "What is a satellite in Data Vault?",
    options: [
      "Table containing descriptive attributes for a hub or link",
      "Hub table",
      "Link table",
      "Attribute table"
    ],
    correctAnswer: "Table containing descriptive attributes for a hub or link",
    explanation: "A satellite in Data Vault contains descriptive attributes (context) for a hub or link, with a foreign key to the hub or link."
  },
  {
    id: 24,
    question: "What is a hub-satellite relationship in Data Vault?",
    options: [
      "One-to-many: one hub, many satellites",
      "One-to-one: one hub, one satellite",
      "Many-to-many: many hubs, many satellites",
      "One-to-many: one satellite, many hubs"
    ],
    correctAnswer: "One-to-many: one hub, many satellites",
    explanation: "In Data Vault, the relationship between hubs and satellites is one-to-many: one hub can have many satellites with different attributes."
  },
  {
    id: 25,
    question: "What is the purpose of hashes in Data Vault?",
    options: [
      "Provide consistent, stable keys for joins",
      "Encrypt data",
      "Compress data",
      "Index data"
    ],
    correctAnswer: "Provide consistent, stable keys for joins",
    explanation: "Data Vault uses hash keys (MD5 or SHA-256 hashes of business keys) to provide consistent, stable keys for joins and relationships."
  },
  {
    id: 26,
    question: "What is a same-as link in Data Vault?",
    options: [
      "Link indicating same business entity with different keys",
      "Link to same table",
      "Link with same attributes",
      "Link with same hubs"
    ],
    correctAnswer: "Link indicating same business entity with different keys",
    explanation: "A same-as link in Data Vault indicates that different business keys refer to the same business entity."
  },
  {
    id: 27,
    question: "What is a reference table in Data Vault?",
    options: [
      "Predefined, static data like codes and descriptions",
      "Dynamic data",
      "Temporary data",
      "User data"
    ],
    correctAnswer: "Predefined, static data like codes and descriptions",
    explanation: "A reference table in Data Vault contains predefined, static data like codes, descriptions, or lookup values."
  },
  {
    id: 28,
    question: "What is the difference between Data Vault and dimensional modeling?",
    options: [
      "Data Vault is agile and adaptable, dimensional is rigid",
      "Data Vault is rigid, dimensional is agile",
      "Data Vault is for OLTP, dimensional for OLAP",
      "Both are the same"
    ],
    correctAnswer: "Data Vault is agile and adaptable, dimensional is rigid",
    explanation: "Data Vault is designed to be agile and adaptable to changes in source systems, while traditional dimensional modeling can be rigid and require significant rework for changes."
  },
  {
    id: 29,
    question: "What is a PIT table in Data Vault?",
    options: [
      "Point-In-Time table for querying satellite data as of a point in time",
      "Point-In-Time satellite",
      "Point-In-Time link",
      "Point-In-Time hub"
    ],
    correctAnswer: "Point-In-Time table for querying satellite data as of a point in time",
    explanation: "A PIT (Point-In-Time) table in Data Vault enables querying satellite data as it was at a specific point in time, using effective dates."
  },
  {
    id: 30,
    question: "What is a bridge table in Data Vault?",
    options: [
      "Used for multi-valued attributes",
      "Connects hubs",
      "Connects satellites",
      "Resolves many-to-many relationships"
    ],
    correctAnswer: "Used for multi-valued attributes",
    explanation: "A bridge table in Data Vault (similar to traditional modeling) is used for handling multi-valued attributes that cannot be stored directly in satellites."
  },
  {
    id: 31,
    question: "What is data warehousing automation?",
    options: [
      "Automating design, development, and maintenance of data warehouses",
      "Automating data ingestion",
      "Automating data processing",
      "Automating data storage"
    ],
    correctAnswer: "Automating design, development, and maintenance of data warehouses",
    explanation: "Data warehousing automation involves using tools and frameworks to automate the design, development, testing, deployment, and maintenance of data warehouses."
  },
  {
    id: 32,
    question: "What is WhereScape?",
    options: [
      "Data warehousing automation tool",
      "ETL tool",
      "Data modeling tool",
      "Data visualization tool"
    ],
    correctAnswer: "Data warehousing automation tool",
    explanation: "WhereScape is a data warehousing automation tool that automates the design, development, and maintenance of data warehouses."
  },
  {
    id: 33,
    question: "What is the Kimball methodology?",
    options: [
      "Bottom-up approach to data warehousing",
      "Top-down approach",
      "Hybrid approach",
      "Agile approach"
    ],
    correctAnswer: "Bottom-up approach to data warehousing",
    explanation: "The Kimball methodology is a bottom-up approach to data warehousing that focuses on dimensional modeling and building data marts first, then integrating them into a bus architecture."
  },
  {
    id: 34,
    question: "What is the Inmon methodology?",
    options: [
      "Top-down approach to data warehousing",
      "Bottom-up approach",
      "Hybrid approach",
      "Agile approach"
    ],
    correctAnswer: "Top-down approach to data warehousing",
    explanation: "The Inmon methodology is a top-down approach to data warehousing that starts with an enterprise data model and builds a centralized data warehouse."
  },
  {
    id: 35,
    question: "What is the difference between Kimball and Inmon methodologies?",
    options: [
      "Kimball-bottom-up with data marts, Inmon-top-down with EDW",
      "Kimball-top-down, Inmon-bottom-up",
      "Kimball for OLAP, Inmon for OLTP",
      "Both are the same"
    ],
    correctAnswer: "Kimball-bottom-up with data marts, Inmon-top-down with EDW",
    explanation: "Kimball uses a bottom-up approach building data marts and integrating them, while Inmon uses a top-down approach building an enterprise data warehouse (EDW) first."
  },
  {
    id: 36,
    question: "What is a 3NF model?",
    options: [
      "Third normal form for relational databases",
      "Normal form for data warehouses",
      "Model for dimensional data",
      "Model for star schemas"
    ],
    correctAnswer: "Third normal form for relational databases",
    explanation: "3NF (Third Normal Form) is a normalization level in relational database design where tables are free from transitive dependencies."
  },
  {
    id: 37,
    question: "What is a dimensional model bus schema?",
    options: [
      "Enterprise-wide dimensional model with conformed dimensions",
      "Star schema",
      "Snowflake schema",
      "Galaxy schema"
    ],
    correctAnswer: "Enterprise-wide dimensional model with conformed dimensions",
    explanation: "A bus schema in dimensional modeling is an enterprise-wide model that uses conformed dimensions to integrate data across business processes."
  },
  {
    id: 38,
    question: "What is a drill-down in OLAP?",
    options: [
      "Navigate from summary to detailed data",
      "Navigate from detailed to summary data",
      "Filter data",
      "Sort data"
    ],
    correctAnswer: "Navigate from summary to detailed data",
    explanation: "Drill-down in OLAP allows users to navigate from summary (aggregated) data to more detailed data (e.g., from yearly to monthly to daily)."
  },
  {
    id: 39,
    question: "What is a roll-up in OLAP?",
    options: [
      "Navigate from detailed to summary data",
      "Navigate from summary to detailed data",
      "Filter data",
      "Sort data"
    ],
    correctAnswer: "Navigate from detailed to summary data",
    explanation: "Roll-up in OLAP allows users to navigate from detailed data to summary (aggregated) data (e.g., from daily to monthly to yearly)."
  },
  {
    id: 40,
    question: "What is slicing in OLAP?",
    options: [
      "Selecting a subset of data by fixing one dimension",
      "Selecting all data",
      "Selecting by multiple dimensions",
      "Selecting by time"
    ],
    correctAnswer: "Selecting a subset of data by fixing one dimension",
    explanation: "Slicing in OLAP is selecting a subset of data by fixing one dimension to a specific value (e.g., selecting data for a specific region)."
  },
  {
    id: 41,
    question: "What is dicing in OLAP?",
    options: [
      "Selecting a subset of data by fixing multiple dimensions",
      "Selecting all data",
      "Selecting by one dimension",
      "Selecting by time"
    ],
    correctAnswer: "Selecting a subset of data by fixing multiple dimensions",
    explanation: "Dicing in OLAP is selecting a subset of data by fixing multiple dimensions to specific values (e.g., selecting data for a specific region and product)."
  },
  {
    id: 42,
    question: "What is pivoting in OLAP?",
    options: [
      "Rotating axes to view data from different perspectives",
      "Filtering data",
      "Sorting data",
      "Grouping data"
    ],
    correctAnswer: "Rotating axes to view data from different perspectives",
    explanation: "Pivoting in OLAP involves rotating the axes (rows and columns) to view data from different perspectives, like swapping rows and columns in a crosstab report."
  },
  {
    id: 43,
    question: "What is a ROLAP system?",
    options: [
      "Relational OLAP using relational databases",
      "OLAP using multidimensional databases",
      "OLAP using in-memory databases",
      "OLAP using file systems"
    ],
    correctAnswer: "Relational OLAP using relational databases",
    explanation: "ROLAP (Relational OLAP) is an OLAP implementation that uses relational databases to store and query multidimensional data."
  },
  {
    id: 44,
    question: "What is a MOLAP system?",
    options: [
      "Multidimensional OLAP using specialized databases",
      "OLAP using relational databases",
      "OLAP using in-memory databases",
      "OLAP using file systems"
    ],
    correctAnswer: "Multidimensional OLAP using specialized databases",
    explanation: "MOLAP (Multidimensional OLAP) is an OLAP implementation that uses specialized multidimensional databases optimized for OLAP queries."
  },
  {
    id: 45,
    question: "What is a HOLAP system?",
    options: [
      "Hybrid OLAP combining ROLAP and MOLAP",
      "OLAP using hybrid databases",
      "OLAP using both relational and multidimensional",
      "Both A and C"
    ],
    correctAnswer: "Both A and C",
    explanation: "HOLAP (Hybrid OLAP) combines aspects of ROLAP and MOLAP, using both relational and multidimensional databases for different data."
  },
  {
    id: 46,
    question: "What is a cube in OLAP?",
    options: [
      "Multidimensional dataset for analysis",
      "Database table",
      "Data warehouse",
      "ETL process"
    ],
    correctAnswer: "Multidimensional dataset for analysis",
    explanation: "A cube in OLAP is a multidimensional dataset that allows for fast analysis of data from multiple perspectives (dimensions)."
  },
  {
    id: 47,
    question: "What is a level in dimensional hierarchy?",
    options: [
      "Position in a hierarchy like year, quarter, month, day",
      "Size of data",
      "Type of data",
      "Volume of data"
    ],
    correctAnswer: "Position in a hierarchy like year, quarter, month, day",
    explanation: "A level in a dimensional hierarchy represents a position in the hierarchy (e.g., year > quarter > month > day in a time dimension)."
  },
  {
    id: 48,
    question: "What is a member in dimensional hierarchy?",
    options: [
      "Specific value at a level like January, February",
      "Type of level",
      "Name of hierarchy",
      "Name of dimension"
    ],
    correctAnswer: "Specific value at a level like January, February",
    explanation: "A member in a dimensional hierarchy is a specific value at a particular level (e.g., January, February at the month level)."
  },
  {
    id: 49,
    question: "What is a parent-child hierarchy?",
    options: [
      "Hierarchy where each member can have multiple parents and children",
      "Hierarchy with fixed levels",
      "Hierarchy with single parent",
      "Hierarchy with no children"
    ],
    correctAnswer: "Hierarchy where each member can have multiple parents and children",
    explanation: "A parent-child hierarchy is a flexible hierarchy where each member can have multiple parents and children, allowing for complex relationships."
  },
  {
    id: 50,
    question: "What is a ragged hierarchy?",
    options: [
      "Hierarchy with inconsistent levels like geography",
      "Hierarchy with fixed levels",
      "Hierarchy with single level",
      "Hierarchy with no levels"
    ],
    correctAnswer: "Hierarchy with inconsistent levels like geography",
    explanation: "A ragged hierarchy is one where the levels are inconsistent (e.g., geography: Country > State > City, but some countries don't have states)."
  },
  {
    id: 51,
    question: "What is a balanced hierarchy?",
    options: [
      "Hierarchy with consistent levels across all branches",
      "Hierarchy with inconsistent levels",
      "Hierarchy with single level",
      "Hierarchy with no levels"
    ],
    correctAnswer: "Hierarchy with consistent levels across all branches",
    explanation: "A balanced hierarchy has consistent levels across all branches (e.g., year > quarter > month > day for all dates)."
  },
  {
    id: 52,
    question: "What is a skip-level hierarchy?",
    options: [
      "Hierarchy where levels can be skipped",
      "Hierarchy with all levels",
      "Hierarchy with single level",
      "Hierarchy with no levels"
    ],
    correctAnswer: "Hierarchy where levels can be skipped",
    explanation: "A skip-level hierarchy allows querying at non-consecutive levels (e.g., going from year directly to day, skipping quarter and month)."
  },
  {
    id: 53,
    question: "What is a multiple hierarchy?",
    options: [
      "Dimension with multiple hierarchies like geography and sales",
      "Dimension with single hierarchy",
      "Dimension with no hierarchy",
      "Dimension with fixed hierarchy"
    ],
    correctAnswer: "Dimension with multiple hierarchies like geography and sales",
    explanation: "A multiple hierarchy is a dimension that has more than one hierarchy (e.g., geography hierarchy and sales hierarchy in a customer dimension)."
  },
  {
    id: 54,
    question: "What is a recursive hierarchy?",
    options: [
      "Hierarchy where members can be parents of themselves",
      "Hierarchy with fixed levels",
      "Hierarchy with single level",
      "Hierarchy with no levels"
    ],
    correctAnswer: "Hierarchy where members can be parents of themselves",
    explanation: "A recursive hierarchy is one where members can be parents of themselves (directly or indirectly), creating cycles in the hierarchy."
  },
  {
    id: 55,
    question: "What is data warehouse performance tuning?",
    options: [
      "Optimizing queries, indexes, and data structures",
      "Increasing data volume",
      "Adding more tables",
      "Changing database vendor"
    ],
    correctAnswer: "Optimizing queries, indexes, and data structures",
    explanation: "Data warehouse performance tuning involves optimizing queries, creating appropriate indexes, partitioning data, and designing efficient data structures."
  },
  {
    id: 56,
    question: "What is query optimization in data warehouses?",
    options: [
      "Improving query execution plans",
      "Writing faster queries",
      "Using better hardware",
      "Changing database schema"
    ],
    correctAnswer: "Improving query execution plans",
    explanation: "Query optimization involves analyzing and improving query execution plans, using appropriate join strategies, and leveraging database optimizer features."
  },
  {
    id: 57,
    question: "What is indexing strategy in data warehouses?",
    options: [
      "Choosing appropriate indexes for query performance",
      "Creating indexes on all columns",
      "Avoiding indexes",
      "Using only primary keys"
    ],
    correctAnswer: "Choosing appropriate indexes for query performance",
    explanation: "Indexing strategy involves carefully choosing which columns to index, the type of indexes (B-tree, bitmap, hash), and balancing the overhead of index maintenance with query performance."
  },
  {
    id: 58,
    question: "What is bitmap indexing?",
    options: [
      "Index using bit arrays for low-cardinality columns",
      "Index using B-trees",
      "Index using hash values",
      "Index using sorted lists"
    ],
    correctAnswer: "Index using bit arrays for low-cardinality columns",
    explanation: "Bitmap indexing uses bit arrays to represent the presence or absence of values in columns, which is efficient for low-cardinality columns with many repeated values."
  },
  {
    id: 59,
    question: "What is B-tree indexing?",
    options: [
      "Balanced tree structure for efficient range queries",
      "Binary tree",
      "Bitmap tree",
      "Hash tree"
    ],
    correctAnswer: "Balanced tree structure for efficient range queries",
    explanation: "B-tree indexing uses a balanced tree structure that is efficient for range queries, equality queries, and sorting."
  },
  {
    id: 60,
    question: "What is hash indexing?",
    options: [
      "Index using hash values for fast equality queries",
      "Index using B-trees",
      "Index using bitmaps",
      "Index using sorted lists"
    ],
    correctAnswer: "Index using hash values for fast equality queries",
    explanation: "Hash indexing uses hash values to map keys to storage locations, providing fast equality queries but not efficient for range queries."
  },
  {
    id: 61,
    question: "What is a covering index?",
    options: [
      "Index that contains all columns needed for a query",
      "Index that covers all rows",
      "Index that covers all tables",
      "Index that covers all databases"
    ],
    correctAnswer: "Index that contains all columns needed for a query",
    explanation: "A covering index contains all the columns needed for a query, allowing the query to be satisfied entirely from the index without accessing the underlying table."
  },
  {
    id: 62,
    question: "What is index-only scan?",
    options: [
      "Query satisfied entirely from index",
      "Query using only indexes",
      "Query scanning only indexes",
      "Query without table access"
    ],
    correctAnswer: "Query satisfied entirely from index",
    explanation: "An index-only scan (or index-only query) is when a query can be satisfied entirely from the index without accessing the underlying table data."
  },
  {
    id: 63,
    question: "What is a composite index?",
    options: [
      "Index on multiple columns",
      "Index on single column",
      "Index on all columns",
      "Index on computed column"
    ],
    correctAnswer: "Index on multiple columns",
    explanation: "A composite index (or multi-column index) is an index on multiple columns, useful for queries that filter or sort on multiple columns."
  },
  {
    id: 64,
    question: "What is the purpose of data partitioning in data warehouses?",
    options: [
      "Divide large tables into smaller, manageable pieces",
      "Increase table size",
      "Combine tables",
      "Encrypt tables"
    ],
    correctAnswer: "Divide large tables into smaller, manageable pieces",
    explanation: "Data partitioning divides large tables into smaller, more manageable pieces based on criteria like date ranges, improving query performance and maintenance."
  },
  {
    id: 65,
    question: "What is range partitioning?",
    options: [
      "Partition based on value ranges",
      "Partition based on hash values",
      "Partition based on list of values",
      "Partition based on round-robin"
    ],
    correctAnswer: "Partition based on value ranges",
    explanation: "Range partitioning divides data into partitions based on value ranges (e.g., date ranges, numeric ranges)."
  },
  {
    id: 66,
    question: "What is hash partitioning?",
    options: [
      "Partition based on hash values of keys",
      "Partition based on value ranges",
      "Partition based on list of values",
      "Partition based on round-robin"
    ],
    correctAnswer: "Partition based on hash values of keys",
    explanation: "Hash partitioning divides data into partitions based on hash values of partition keys, distributing data evenly across partitions."
  },
  {
    id: 67,
    question: "What is list partitioning?",
    options: [
      "Partition based on discrete list of values",
      "Partition based on value ranges",
      "Partition based on hash values",
      "Partition based on round-robin"
    ],
    correctAnswer: "Partition based on discrete list of values",
    explanation: "List partitioning divides data into partitions based on a discrete list of values (e.g., partitioning by region: North, South, East, West)."
  },
  {
    id: 68,
    question: "What is round-robin partitioning?",
    options: [
      "Distribute data evenly across partitions",
      "Partition based on value ranges",
      "Partition based on hash values",
      "Partition based on list of values"
    ],
    correctAnswer: "Distribute data evenly across partitions",
    explanation: "Round-robin partitioning distributes data evenly across partitions in a circular, round-robin fashion."
  },
  {
    id: 69,
    question: "What is composite partitioning?",
    options: [
      "Combination of multiple partitioning strategies",
      "Partition on multiple columns",
      "Partition with multiple methods",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "Composite partitioning combines multiple partitioning strategies (e.g., range-hash partitioning, list-hash partitioning) to achieve better distribution and performance."
  },
  {
    id: 70,
    question: "What is data clustering in data warehouses?",
    options: [
      "Physically co-locating related data",
      "Grouping data logically",
      "Partitioning data",
      "Indexing data"
    ],
    correctAnswer: "Physically co-locating related data",
    explanation: "Data clustering physically co-locates related data (e.g., data with the same partitioning key) to improve query performance by reducing I/O."
  },
  {
    id: 71,
    question: "What is query caching in data warehouses?",
    options: [
      "Caching query results to avoid recomputation",
      "Caching data",
      "Caching indexes",
      "Caching metadata"
    ],
    correctAnswer: "Caching query results to avoid recomputation",
    explanation: "Query caching stores the results of frequently executed queries, allowing subsequent identical queries to retrieve results from cache instead of recomputing."
  },
  {
    id: 72,
    question: "What is materialized view refresh?",
    options: [
      "Updating materialized view with latest data",
      "Creating materialized view",
      "Deleting materialized view",
      "Querying materialized view"
    ],
    correctAnswer: "Updating materialized view with latest data",
    explanation: "Materialized view refresh is the process of updating a materialized view with the latest data from the underlying tables, which can be done on a schedule or on demand."
  },
  {
    id: 73,
    question: "What is incremental refresh?",
    options: [
      "Refresh only changed data since last refresh",
      "Refresh all data",
      "Refresh on schedule",
      "Refresh on demand"
    ],
    correctAnswer: "Refresh only changed data since last refresh",
    explanation: "Incremental refresh updates a materialized view or data warehouse with only the data that has changed since the last refresh, improving efficiency."
  },
  {
    id: 74,
    question: "What is full refresh?",
    options: [
      "Refresh all data in materialized view",
      "Refresh only changed data",
      "Refresh on schedule",
      "Refresh on demand"
    ],
    correctAnswer: "Refresh all data in materialized view",
    explanation: "Full refresh rebuilds a materialized view from scratch, refreshing all data to ensure consistency with the underlying tables."
  },
  {
    id: 75,
    question: "What is fast refresh in materialized views?",
    options: [
      "Refresh materialized view incrementally using change logs",
      "Refresh quickly",
      "Refresh all data",
      "Refresh on demand"
    ],
    correctAnswer: "Refresh materialized view incrementally using change logs",
    explanation: "Fast refresh (or fast incremental refresh) updates a materialized view incrementally using change logs or triggers, providing near real-time updates."
  },
  {
    id: 76,
    question: "What is complete refresh in materialized views?",
    options: [
      "Full rebuild of materialized view",
      "Partial rebuild",
      "Incremental update",
      "On-demand refresh"
    ],
    correctAnswer: "Full rebuild of materialized view",
    explanation: "Complete refresh (or full rebuild) recreates the materialized view from scratch, reading all data from the underlying tables."
  },
  {
    id: 77,
    question: "What is data warehouse metadata?",
    options: [
      "Data about data in the warehouse",
      "Data storage information",
      "Data processing information",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "Data warehouse metadata includes information about data (schemas, definitions, lineage), storage (locations, formats), and processing (ETL jobs, schedules, dependencies)."
  },
  {
    id: 78,
    question: "What is the purpose of a data dictionary?",
    options: [
      "Document data elements and their meanings",
      "Store data",
      "Process data",
      "Analyze data"
    ],
    correctAnswer: "Document data elements and their meanings",
    explanation: "A data dictionary documents data elements (tables, columns, fields) and their meanings, definitions, formats, and business rules."
  },
  {
    id: 79,
    question: "What is data profiling?",
    options: [
      "Analyzing data to understand its structure, content, and quality",
      "Processing data",
      "Storing data",
      "Querying data"
    ],
    correctAnswer: "Analyzing data to understand its structure, content, and quality",
    explanation: "Data profiling involves analyzing data to understand its structure, content, relationships, and quality characteristics (completeness, uniqueness, patterns, etc.)."
  },
  {
    id: 80,
    question: "What is data cleansing?",
    options: [
      "Identifying and correcting errors in data",
      "Processing data",
      "Storing data",
      "Querying data"
    ],
    correctAnswer: "Identifying and correcting errors in data",
    explanation: "Data cleansing (or data cleaning) involves identifying and correcting errors, inconsistencies, and inaccuracies in data to improve quality."
  },
  {
    id: 81,
    question: "What is data enrichment?",
    options: [
      "Adding value to data by augmenting it with additional information",
      "Processing data",
      "Storing data",
      "Querying data"
    ],
    correctAnswer: "Adding value to data by augmenting it with additional information",
    explanation: "Data enrichment adds value to data by augmenting it with additional information from external sources (e.g., adding geographic data to customer addresses)."
  },
  {
    id: 82,
    question: "What is data integration?",
    options: [
      "Combining data from multiple sources",
      "Processing data",
      "Storing data",
      "Querying data"
    ],
    correctAnswer: "Combining data from multiple sources",
    explanation: "Data integration involves combining data from multiple sources into a unified, consistent format for analysis and reporting."
  },
  {
    id: 83,
    question: "What is data consolidation?",
    options: [
      "Combining data from multiple sources into a single system",
      "Processing data",
      "Storing data",
      "Querying data"
    ],
    correctAnswer: "Combining data from multiple sources into a single system",
    explanation: "Data consolidation combines data from multiple sources into a single, centralized system (like a data warehouse or data lake)."
  },
  {
    id: 84,
    question: "What is data federation?",
    options: [
      "Querying data from multiple sources without consolidating",
      "Consolidating data",
      "Processing data",
      "Storing data"
    ],
    correctAnswer: "Querying data from multiple sources without consolidating",
    explanation: "Data federation (or virtual integration) allows querying data from multiple sources as if it were in a single location, without physically consolidating the data."
  },
  {
    id: 85,
    question: "What is data virtualization?",
    options: [
      "Creating virtual views of data from multiple sources",
      "Storing data virtually",
      "Processing data virtually",
      "Querying data virtually"
    ],
    correctAnswer: "Creating virtual views of data from multiple sources",
    explanation: "Data virtualization creates virtual views of data from multiple sources, allowing users to access and query data without knowing its physical location or format."
  }
];
const dataEngineeringMidLevel = {
  id: id$3,
  title: title$3,
  description: description$3,
  category: category$3,
  questions: questions$3
};
const id$2 = 4;
const title$2 = "Data Streaming";
const description$2 = "Real-time data processing with Kafka, Flink, Spark Streaming, and related technologies";
const category$2 = "Data";
const questions$2 = [
  {
    id: 1,
    question: "What is Apache Kafka?",
    options: [
      "High-throughput distributed event streaming platform",
      "Batch processing framework",
      "Database management system",
      "Data visualization tool"
    ],
    correctAnswer: "High-throughput distributed event streaming platform",
    explanation: "Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant, low-latency event processing."
  },
  {
    id: 2,
    question: "What is a Kafka topic?",
    options: [
      "Category or feed name to which events are published",
      "Database table",
      "Processing engine",
      "Backup location"
    ],
    correctAnswer: "Category or feed name to which events are published",
    explanation: "A Kafka topic is a category or feed name to which events are published by producers."
  },
  {
    id: 3,
    question: "What is a Kafka partition?",
    options: [
      "Ordered, immutable sequence of events within a topic",
      "Database shard",
      "Processing thread",
      "Backup copy"
    ],
    correctAnswer: "Ordered, immutable sequence of events within a topic",
    explanation: "A partition is an ordered, immutable sequence of events within a topic. Each topic is split into partitions for scalability."
  },
  {
    id: 4,
    question: "What is a Kafka broker?",
    options: [
      "Server that stores topic partitions and serves client requests",
      "Client producing events",
      "Client consuming events",
      "Database server"
    ],
    correctAnswer: "Server that stores topic partitions and serves client requests",
    explanation: "A Kafka broker is a server that stores topic partitions and serves client requests."
  },
  {
    id: 5,
    question: "What was ZooKeeper's role in traditional Kafka?",
    options: [
      "Maintain cluster metadata and coordinate brokers",
      "Store events",
      "Process events",
      "Serve requests"
    ],
    correctAnswer: "Maintain cluster metadata and coordinate brokers",
    explanation: "ZooKeeper maintained cluster metadata and coordinated between brokers in traditional Kafka clusters."
  },
  {
    id: 6,
    question: "What is a Kafka producer?",
    options: [
      "Client application that publishes events to topics",
      "Client that reads events",
      "Server",
      "Database client"
    ],
    correctAnswer: "Client application that publishes events to topics",
    explanation: "A Kafka producer is a client application that publishes (writes) events to Kafka topics."
  },
  {
    id: 7,
    question: "What is a Kafka consumer?",
    options: [
      "Client application that subscribes to and reads events",
      "Client that publishes events",
      "Server",
      "Database client"
    ],
    correctAnswer: "Client application that subscribes to and reads events",
    explanation: "A Kafka consumer is a client application that subscribes to and reads events from Kafka topics."
  },
  {
    id: 8,
    question: "What is a consumer group?",
    options: [
      "Group of consumers that collectively read from a topic",
      "Group of producers",
      "Group of brokers",
      "Group of topics"
    ],
    correctAnswer: "Group of consumers that collectively read from a topic",
    explanation: "A consumer group is a group of consumer instances that collectively read from a topic, with each partition read by only one consumer."
  },
  {
    id: 9,
    question: "What are consumer group offsets?",
    options: [
      "Track the reading position in each partition",
      "Track writing position",
      "Track replication",
      "Track health"
    ],
    correctAnswer: "Track the reading position in each partition",
    explanation: "Kafka tracks the offset of the last event read by each consumer group for each partition, allowing consumers to resume from where they left off."
  },
  {
    id: 10,
    question: "What is Kafka Connect?",
    options: [
      "Framework for integrating Kafka with external systems",
      "Client library",
      "Monitoring tool",
      "Testing framework"
    ],
    correctAnswer: "Framework for integrating Kafka with external systems",
    explanation: "Kafka Connect is a framework for building data pipelines that integrate Kafka with external systems using connectors."
  },
  {
    id: 11,
    question: "What is a source connector in Kafka Connect?",
    options: [
      "Ingests data from external systems into Kafka",
      "Exports data from Kafka",
      "Both ingests and exports",
      "Processes data"
    ],
    correctAnswer: "Ingests data from external systems into Kafka",
    explanation: "A source connector imports data from external systems (databases, files, etc.) into Kafka topics."
  },
  {
    id: 12,
    question: "What is a sink connector in Kafka Connect?",
    options: [
      "Exports data from Kafka to external systems",
      "Imports data to Kafka",
      "Both imports and exports",
      "Processes data"
    ],
    correctAnswer: "Exports data from Kafka to external systems",
    explanation: "A sink connector exports data from Kafka topics to external systems (databases, storage, etc.)."
  },
  {
    id: 13,
    question: "What is Kafka Streams?",
    options: [
      "Client library for building stream processing applications",
      "Streaming framework",
      "Database",
      "Visualization tool"
    ],
    correctAnswer: "Client library for building stream processing applications",
    explanation: "Kafka Streams is a client library for building stream processing applications and microservices that process data in Kafka topics."
  },
  {
    id: 14,
    question: "What is KSQL?",
    options: [
      "Streaming SQL engine for Kafka",
      "NoSQL database",
      "Query language",
      "ETL tool"
    ],
    correctAnswer: "Streaming SQL engine for Kafka",
    explanation: "KSQL is a streaming SQL engine that allows you to query, transform, and process data in Kafka using SQL-like syntax."
  },
  {
    id: 15,
    question: "What is the purpose of Kafka Schema Registry?",
    options: [
      "Manage and enforce schemas for Kafka messages",
      "Store messages",
      "Process messages",
      "Validate consumers"
    ],
    correctAnswer: "Manage and enforce schemas for Kafka messages",
    explanation: "Schema Registry manages and enforces schemas for Kafka messages, enabling schema evolution and compatibility checking."
  },
  {
    id: 16,
    question: "What is Avro format in Kafka?",
    options: [
      "Binary serialization format with schema",
      "Text format",
      "JSON format",
      "XML format"
    ],
    correctAnswer: "Binary serialization format with schema",
    explanation: "Avro is a binary serialization format that includes schema information, enabling efficient serialization and deserialization with schema evolution."
  },
  {
    id: 17,
    question: "What is the offset in Kafka?",
    options: [
      "Sequential ID of an event within a partition",
      "Position in topic",
      "ID of consumer",
      "ID of producer"
    ],
    correctAnswer: "Sequential ID of an event within a partition",
    explanation: "An offset is a sequential ID assigned to each event within a partition, starting at 0 and incrementing by 1 for each new event."
  },
  {
    id: 18,
    question: "What is the leader of a Kafka partition?",
    options: [
      "Broker responsible for all reads and writes to a partition",
      "Primary consumer",
      "Main producer",
      "Cluster manager"
    ],
    correctAnswer: "Broker responsible for all reads and writes to a partition",
    explanation: "The leader is the broker responsible for all reads and writes to a partition. Followers replicate from the leader."
  },
  {
    id: 19,
    question: "What is a follower in Kafka?",
    options: [
      "Broker that replicates partition data from leader",
      "Secondary consumer",
      "Backup producer",
      "Standby broker"
    ],
    correctAnswer: "Broker that replicates partition data from leader",
    explanation: "A follower is a broker that replicates partition data from the leader to maintain redundancy and fault tolerance."
  },
  {
    id: 20,
    question: "What is ISR in Kafka?",
    options: [
      "In-Sync Replicas - set of brokers that are in sync with leader",
      "Internal Storage Registry",
      "In-System Replication",
      "Integrated Service Router"
    ],
    correctAnswer: "In-Sync Replicas - set of brokers that are in sync with leader",
    explanation: "ISR (In-Sync Replicas) is the set of brokers that are currently in sync with the partition leader and eligible to be elected as leader."
  },
  {
    id: 21,
    question: "What is the replication factor in Kafka?",
    options: [
      "Number of copies of each partition across brokers",
      "Number of brokers",
      "Number of topics",
      "Number of partitions"
    ],
    correctAnswer: "Number of copies of each partition across brokers",
    explanation: "The replication factor determines how many copies of each partition are maintained across different brokers for fault tolerance."
  },
  {
    id: 22,
    question: "What is the minimum.insync.replicas setting?",
    options: [
      "Minimum number of in-sync replicas required for producer writes",
      "Minimum number of brokers",
      "Minimum number of topics",
      "Minimum number of partitions"
    ],
    correctAnswer: "Minimum number of in-sync replicas required for producer writes",
    explanation: "minimum.insync.replicas specifies the minimum number of in-sync replicas required for a producer to successfully write to a partition, ensuring durability."
  },
  {
    id: 23,
    question: "What is unclean.leader.election.enable?",
    options: [
      "Allow leader election from out-of-sync replicas",
      "Prevent unclean leader election",
      "Enable fast leader election",
      "Allow automatic leader election"
    ],
    correctAnswer: "Allow leader election from out-of-sync replicas",
    explanation: "When enabled, unclean.leader.election.enable allows a broker that is not in the ISR to be elected as leader, potentially causing data loss."
  },
  {
    id: 24,
    question: "What is acks in Kafka producer?",
    options: [
      "Number of broker acknowledgments required",
      "Number of consumers",
      "Number of producers",
      "Number of topics"
    ],
    correctAnswer: "Number of broker acknowledgments required",
    explanation: "acks setting in producer determines how many broker acknowledgments are required: 0 (no ack), 1 (leader ack), or all (all in-sync replicas)."
  },
  {
    id: 25,
    question: "What is idempotent producer in Kafka?",
    options: [
      "Producer that prevents duplicate sends of same message",
      "Producer with unique ID",
      "Producer that only sends once",
      "Producer that always succeeds"
    ],
    correctAnswer: "Producer that prevents duplicate sends of same message",
    explanation: "An idempotent producer ensures that each message is delivered exactly once, even if it's retried, preventing duplicates."
  },
  {
    id: 26,
    question: "What is transactional producer in Kafka?",
    options: [
      "Producer that can send messages to multiple partitions atomically",
      "Producer with transactions",
      "Producer that only commits once",
      "Producer that supports rollbacks"
    ],
    correctAnswer: "Producer that can send messages to multiple partitions atomically",
    explanation: "A transactional producer can send messages to multiple partitions and topics atomically, ensuring all messages are committed or none are."
  },
  {
    id: 27,
    question: "What is consumer lag?",
    options: [
      "Difference between latest offset and consumer offset",
      "Time delay",
      "Network latency",
      "Processing delay"
    ],
    correctAnswer: "Difference between latest offset and consumer offset",
    explanation: "Consumer lag is the difference between the latest offset in a partition and the current offset of the consumer group, indicating how far behind the consumer is."
  },
  {
    id: 28,
    question: "What is the purpose of consumer groups rebalancing?",
    options: [
      "Reassign partitions to consumers when group membership changes",
      "Restart consumers",
      "Reconnect to brokers",
      "Refresh metadata"
    ],
    correctAnswer: "Reassign partitions to consumers when group membership changes",
    explanation: "Rebalancing reassigns partition ownership among consumers in a group when consumers join, leave, or when partitions are added/removed."
  },
  {
    id: 29,
    question: "What is heartbeat.interval.ms in Kafka consumer?",
    options: [
      "Interval at which consumer sends heartbeats",
      "Interval for consuming",
      "Interval for processing",
      "Interval for committing"
    ],
    correctAnswer: "Interval at which consumer sends heartbeats",
    explanation: "heartbeat.interval.ms is the interval at which the consumer sends heartbeats to the group coordinator to indicate it's alive."
  },
  {
    id: 30,
    question: "What is session.timeout.ms in Kafka consumer?",
    options: [
      "Maximum time between heartbeats before consumer is considered dead",
      "Time for consuming",
      "Time for processing",
      "Time for connecting"
    ],
    correctAnswer: "Maximum time between heartbeats before consumer is considered dead",
    explanation: "session.timeout.ms is the maximum time between heartbeats before a consumer is considered dead and triggers rebalancing."
  },
  {
    id: 31,
    question: "What is max.poll.records in Kafka consumer?",
    options: [
      "Maximum number of records returned in a single poll",
      "Maximum poll duration",
      "Maximum batch size",
      "Maximum fetch size"
    ],
    correctAnswer: "Maximum number of records returned in a single poll",
    explanation: "max.poll.records limits the maximum number of records returned in a single call to poll(), controlling batch size."
  },
  {
    id: 32,
    question: "What is auto.offset.reset in Kafka consumer?",
    options: [
      "What to do when offset is out of range",
      "Auto reset consumer",
      "Auto commit offset",
      "Auto reconnect"
    ],
    correctAnswer: "What to do when offset is out of range",
    explanation: "auto.offset.reset determines what to do when there's no initial offset or the offset is out of range: earliest, latest, or none."
  },
  {
    id: 33,
    question: "What is enable.auto.commit in Kafka consumer?",
    options: [
      "Whether to automatically commit offsets",
      "Auto enable consumer",
      "Auto commit all",
      "Auto acknowledge"
    ],
    correctAnswer: "Whether to automatically commit offsets",
    explanation: "enable.auto.commit controls whether offsets are automatically committed (true) or manually committed by the application (false)."
  },
  {
    id: 34,
    question: "What is commitSync in Kafka consumer?",
    options: [
      "Synchronously commit offsets",
      "Synchronously consume",
      "Synchronously process",
      "Synchronously acknowledge"
    ],
    correctAnswer: "Synchronously commit offsets",
    explanation: "commitSync() synchronously commits offsets to Kafka, blocking until the commit is acknowledged by the broker."
  },
  {
    id: 35,
    question: "What is commitAsync in Kafka consumer?",
    options: [
      "Asynchronously commit offsets",
      "Asynchronously consume",
      "Asynchronously process",
      "Asynchronously acknowledge"
    ],
    correctAnswer: "Asynchronously commit offsets",
    explanation: "commitAsync() asynchronously commits offsets to Kafka, returning immediately and allowing the application to continue processing."
  },
  {
    id: 36,
    question: "What is seek in Kafka consumer?",
    options: [
      "Manually set offset for a partition",
      "Search for messages",
      "Skip messages",
      "Filter messages"
    ],
    correctAnswer: "Manually set offset for a partition",
    explanation: "seek() allows manually setting the offset for a specific partition, enabling replay or skipping of messages."
  },
  {
    id: 37,
    question: "What is Apache Flink?",
    options: [
      "Stateful stream processing framework",
      "Batch processing framework",
      "Database",
      "Message queue"
    ],
    correctAnswer: "Stateful stream processing framework",
    explanation: "Apache Flink is a stateful stream processing framework for distributed, high-performance, exactly-once processing of unbounded data streams."
  },
  {
    id: 38,
    question: "What is a DataStream in Flink?",
    options: [
      "Representation of a stream of data",
      "Data structure",
      "Processing engine",
      "Storage system"
    ],
    correctAnswer: "Representation of a stream of data",
    explanation: "A DataStream in Flink is a representation of a stream of data that can be transformed using various operations."
  },
  {
    id: 39,
    question: "What is a DataSet in Flink?",
    options: [
      "Representation of a finite dataset",
      "Stream of data",
      "Processing engine",
      "Storage system"
    ],
    correctAnswer: "Representation of a finite dataset",
    explanation: "A DataSet in Flink is a representation of a finite, bounded dataset that can be processed in batch mode."
  },
  {
    id: 40,
    question: "What is a Table in Flink Table API?",
    options: [
      "Relational table abstraction for streams and batches",
      "Data structure",
      "Processing engine",
      "Storage system"
    ],
    correctAnswer: "Relational table abstraction for streams and batches",
    explanation: "In Flink's Table API, a Table is a relational abstraction that can represent both streaming and batch data, enabling SQL-like operations."
  },
  {
    id: 41,
    question: "What is SQL API in Flink?",
    options: [
      "Query streams and batches using SQL",
      "Query database",
      "Query files",
      "Query Kafka"
    ],
    correctAnswer: "Query streams and batches using SQL",
    explanation: "Flink's SQL API allows you to query both streaming and batch data using standard SQL syntax."
  },
  {
    id: 42,
    question: "What is Flink's event time?",
    options: [
      "Time when event actually occurred",
      "Time when event is processed",
      "Time when event arrives",
      "Time when event is stored"
    ],
    correctAnswer: "Time when event actually occurred",
    explanation: "Event time in Flink is the time when the event actually occurred (typically embedded in the event data), as opposed to processing time or ingestion time."
  },
  {
    id: 43,
    question: "What is watermark in Flink?",
    options: [
      "Estimate of event time progress",
      "Timestamp in event",
      "Progress indicator",
      "Time marker"
    ],
    correctAnswer: "Estimate of event time progress",
    explanation: "A watermark in Flink is an estimate of event time progress, used to trigger window computations and handle late data."
  },
  {
    id: 44,
    question: "What is a window in Flink?",
    options: [
      "Finite set of events grouped together",
      "Processing unit",
      "Storage location",
      "Time period"
    ],
    correctAnswer: "Finite set of events grouped together",
    explanation: "A window in Flink is a finite set of events grouped together based on time or count, used for aggregations and computations."
  },
  {
    id: 45,
    question: "What is a tumbling window in Flink?",
    options: [
      "Fixed-size, non-overlapping windows",
      "Overlapping windows",
      "Sliding windows",
      "Session windows"
    ],
    correctAnswer: "Fixed-size, non-overlapping windows",
    explanation: "Tumbling windows are fixed-size, non-overlapping windows where events are assigned to exactly one window."
  },
  {
    id: 46,
    question: "What is a sliding window in Flink?",
    options: [
      "Fixed-size, overlapping windows",
      "Non-overlapping windows",
      "Session windows",
      "Global windows"
    ],
    correctAnswer: "Fixed-size, overlapping windows",
    explanation: "Sliding windows are fixed-size windows that overlap with each other, allowing events to belong to multiple windows."
  },
  {
    id: 47,
    question: "What is a session window in Flink?",
    options: [
      "Windows based on activity gaps",
      "Fixed-size windows",
      "Sliding windows",
      "Tumbling windows"
    ],
    correctAnswer: "Windows based on activity gaps",
    explanation: "Session windows group events into sessions based on gaps of inactivity (e.g., user sessions that end after a period of inactivity)."
  },
  {
    id: 48,
    question: "What is a global window in Flink?",
    options: [
      "Single window containing all events",
      "Multiple windows",
      "Sliding windows",
      "Session windows"
    ],
    correctAnswer: "Single window containing all events",
    explanation: "A global window contains all events in the stream, typically used with custom triggers for aggregation."
  },
  {
    id: 49,
    question: "What is a trigger in Flink?",
    options: [
      "Determines when a window is evaluated",
      "Triggers processing",
      "Triggers events",
      "Triggers state"
    ],
    correctAnswer: "Determines when a window is evaluated",
    explanation: "A trigger in Flink determines when a window is evaluated and results are emitted, based on time or event counts."
  },
  {
    id: 50,
    question: "What is state in Flink?",
    options: [
      "Data maintained during stream processing",
      "Processing state",
      "Storage state",
      "Network state"
    ],
    correctAnswer: "Data maintained during stream processing",
    explanation: "State in Flink is data that is maintained and updated during stream processing, such as counts, aggregations, or user sessions."
  },
  {
    id: 51,
    question: "What is Keyed State in Flink?",
    options: [
      "State scoped to a key",
      "Global state",
      "Local state",
      "Shared state"
    ],
    correctAnswer: "State scoped to a key",
    explanation: "Keyed State in Flink is state that is scoped to a specific key, accessible only when processing events with that key."
  },
  {
    id: 52,
    question: "What is Operator State in Flink?",
    options: [
      "State scoped to an operator",
      "State per key",
      "State per event",
      "State per partition"
    ],
    correctAnswer: "State scoped to an operator",
    explanation: "Operator State in Flink is state that is scoped to a specific operator (e.g., Kafka consumer state), independent of keys."
  },
  {
    id: 53,
    question: "What is a state backend in Flink?",
    options: [
      "Where state is stored and how it's checkpointed",
      "Processing engine",
      "Storage system",
      "Network layer"
    ],
    correctAnswer: "Where state is stored and how it's checkpointed",
    explanation: "A state backend in Flink determines where state is stored (memory, filesystem, RocksDB) and how it's checkpointed."
  },
  {
    id: 54,
    question: "What is MemoryStateBackend in Flink?",
    options: [
      "Stores state in heap memory",
      "Stores state in RocksDB",
      "Stores state on filesystem",
      "Stores state in memory-mapped files"
    ],
    correctAnswer: "Stores state in heap memory",
    explanation: "MemoryStateBackend stores state in Java heap memory, suitable for development and small state workloads."
  },
  {
    id: 55,
    question: "What is RocksDBStateBackend in Flink?",
    options: [
      "Stores state in RocksDB (on disk)",
      "Stores state in memory",
      "Stores state on filesystem",
      "Stores state in database"
    ],
    correctAnswer: "Stores state in RocksDB (on disk)",
    explanation: "RocksDBStateBackend stores state in RocksDB, an embedded key-value store on disk, suitable for large state that doesn't fit in memory."
  },
  {
    id: 56,
    question: "What is FsStateBackend in Flink?",
    options: [
      "Stores state in memory and checkpoints to filesystem",
      "Stores state in RocksDB",
      "Stores state on filesystem",
      "Stores state in memory-mapped files"
    ],
    correctAnswer: "Stores state in memory and checkpoints to filesystem",
    explanation: "FsStateBackend stores state in memory and checkpoints to a filesystem (local or distributed), providing a balance between performance and scalability."
  },
  {
    id: 57,
    question: "What is checkpointing in Flink?",
    options: [
      "Periodic snapshots of state for fault tolerance",
      "Periodic state backup",
      "State storage",
      "State recovery"
    ],
    correctAnswer: "Periodic snapshots of state for fault tolerance",
    explanation: "Checkpointing in Flink creates periodic snapshots of state and offsets, enabling fault tolerance and exactly-once processing."
  },
  {
    id: 58,
    question: "What is a savepoint in Flink?",
    options: [
      "Manual checkpoint that can be restored",
      "Automatic checkpoint",
      "State snapshot",
      "Recovery point"
    ],
    correctAnswer: "Manual checkpoint that can be restored",
    explanation: "A savepoint in Flink is a manual checkpoint that can be restored later, useful for planned upgrades or state changes."
  },
  {
    id: 59,
    question: "What is exactly-once processing in Flink?",
    options: [
      "Each event is processed exactly once, even with failures",
      "Each event processed once",
      "No duplicates",
      "No failures"
    ],
    correctAnswer: "Each event is processed exactly once, even with failures",
    explanation: "Exactly-once processing in Flink ensures that each event is processed exactly once, even in the presence of failures, using checkpointing and transactional sinks."
  },
  {
    id: 60,
    question: "What is Spark Streaming?",
    options: [
      "Micro-batch stream processing framework",
      "Real-time database",
      "Message queue",
      "Visualization tool"
    ],
    correctAnswer: "Micro-batch stream processing framework",
    explanation: "Spark Streaming processes live data streams by dividing them into micro-batches, which are processed using Spark's batch processing engine."
  },
  {
    id: 61,
    question: "What is a DStream in Spark Streaming?",
    options: [
      "Discretized Stream - sequence of RDDs",
      "Data Stream Manager",
      "Stream processing algorithm",
      "Distributed Stream"
    ],
    correctAnswer: "Discretized Stream - sequence of RDDs",
    explanation: "A DStream (Discretized Stream) is a sequence of RDDs representing a stream of data, where each RDD contains data from a specific time interval."
  },
  {
    id: 62,
    question: "What is Structured Streaming in Spark?",
    options: [
      "High-level API for stream processing built on DataFrame API",
      "Low-level API using RDDs",
      "Stream processing with SQL only",
      "Graph-based stream processing"
    ],
    correctAnswer: "High-level API for stream processing built on DataFrame API",
    explanation: "Structured Streaming is a high-level API for stream processing built on the DataFrame API, providing end-to-end fault tolerance and exactly-once semantics."
  },
  {
    id: 63,
    question: "What is a DataFrame in Spark Streaming?",
    options: [
      "Distributed collection of data organized into named columns",
      "Single machine data structure",
      "Key-value pair collection",
      "Graph data structure"
    ],
    correctAnswer: "Distributed collection of data organized into named columns",
    explanation: "A DataFrame is a distributed collection of data organized into named columns, used in both batch and streaming processing."
  },
  {
    id: 64,
    question: "What is the batch interval in Spark Streaming?",
    options: [
      "Time interval for micro-batch processing",
      "Batch size",
      "Processing time",
      "Interval between batches"
    ],
    correctAnswer: "Time interval for micro-batch processing",
    explanation: "The batch interval determines how often Spark Streaming creates micro-batches of data for processing (e.g., 1 second, 5 seconds)."
  },
  {
    id: 65,
    question: "What is a receiver in Spark Streaming?",
    options: [
      "Component that ingests data from external sources",
      "Component that processes data",
      "Component that stores data",
      "Component that exports data"
    ],
    correctAnswer: "Component that ingests data from external sources",
    explanation: "A receiver in Spark Streaming is a component that ingests data from external sources (Kafka, Flume, Kinesis, etc.) into Spark."
  },
  {
    id: 66,
    question: "What is Direct Approach (Kafka Direct Stream) in Spark Streaming?",
    options: [
      "Query Kafka directly without receivers",
      "Use receivers to ingest from Kafka",
      "Direct connection to Kafka brokers",
      "Kafka consumer in Spark"
    ],
    correctAnswer: "Query Kafka directly without receivers",
    explanation: "The Direct Approach (Kafka Direct Stream) allows Spark to query Kafka directly without using receivers, improving reliability and parallelism."
  },
  {
    id: 67,
    question: "What is mapWithState in Spark Streaming?",
    options: [
      "Stateful transformation maintaining state across batches",
      "Map transformation",
      "Stateful map",
      "State processing"
    ],
    correctAnswer: "Stateful transformation maintaining state across batches",
    explanation: "mapWithState is a stateful transformation in Spark Streaming that maintains state across batches, useful for maintaining aggregations or sessions."
  },
  {
    id: 68,
    question: "What is updateStateByKey in Spark Streaming?",
    options: [
      "Stateful aggregation maintaining state across batches",
      "State update",
      "Key-based update",
      "State transformation"
    ],
    correctAnswer: "Stateful aggregation maintaining state across batches",
    explanation: "updateStateByKey is a stateful aggregation in Spark Streaming that maintains and updates state for each key across batches."
  },
  {
    id: 69,
    question: "What is checkpointing in Spark Streaming?",
    options: [
      "Save state to fault-tolerant storage",
      "State backup",
      "State storage",
      "State recovery"
    ],
    correctAnswer: "Save state to fault-tolerant storage",
    explanation: "Checkpointing in Spark Streaming saves state and RDDs to fault-tolerant storage (HDFS, S3) to enable recovery from failures."
  },
  {
    id: 70,
    question: "What is output operations in Spark Streaming?",
    options: [
      "Operations that produce output to external systems",
      "Processing operations",
      "Input operations",
      "Transformation operations"
    ],
    correctAnswer: "Operations that produce output to external systems",
    explanation: "Output operations in Spark Streaming produce results to external systems (databases, files, dashboards) like print(), saveAsTextFiles(), foreachRDD()."
  },
  {
    id: 71,
    question: "What is foreachRDD in Spark Streaming?",
    options: [
      "Apply function to each RDD in a DStream",
      "Process each element",
      "Iterate over RDD",
      "Apply to each partition"
    ],
    correctAnswer: "Apply function to each RDD in a DStream",
    explanation: "foreachRDD applies a function to each RDD in a DStream as it's generated, useful for writing data to external systems."
  },
  {
    id: 72,
    question: "What is transform in Spark Streaming?",
    options: [
      "Apply RDD-to-RDD transformation to each batch",
      "Transform data",
      "Process data",
      "Map transformation"
    ],
    correctAnswer: "Apply RDD-to-RDD transformation to each batch",
    explanation: "transform applies an arbitrary RDD-to-RDD transformation to each batch in a DStream, providing flexibility for complex operations."
  },
  {
    id: 73,
    question: "What is the difference between Spark Streaming and Flink?",
    options: [
      "Spark uses micro-batches, Flink uses true streaming",
      "Spark is batch-only",
      "Flink uses micro-batches",
      "Both use true streaming"
    ],
    correctAnswer: "Spark uses micro-batches, Flink uses true streaming",
    explanation: "The key difference is their processing model: Spark Streaming uses micro-batch processing, while Flink uses true streaming with event-by-event processing."
  },
  {
    id: 74,
    question: "What is Kafka Streams vs KSQL?",
    options: [
      "Kafka Streams is Java library, KSQL is SQL interface",
      "Kafka Streams uses SQL",
      "KSQL is Java library",
      "Both are the same"
    ],
    correctAnswer: "Kafka Streams is Java library, KSQL is SQL interface",
    explanation: "Kafka Streams is a Java library for building stream processing applications, while KSQL is a SQL interface for querying and processing Kafka data using SQL-like syntax."
  },
  {
    id: 75,
    question: "What is Apache Pulsar?",
    options: [
      "Multi-tenancy pub-sub messaging system",
      "Stream processing framework",
      "Database",
      "Batch processing framework"
    ],
    correctAnswer: "Multi-tenancy pub-sub messaging system",
    explanation: "Apache Pulsar is a multi-tenancy, high-performance pub-sub messaging system that also supports queueing, streaming, and other patterns."
  },
  {
    id: 76,
    question: "What is the difference between Kafka and Pulsar?",
    options: [
      "Pulsar has multi-tenancy built-in, Kafka added it later",
      "Kafka has better performance",
      "Pulsar is only for messaging",
      "Kafka doesn't support streaming"
    ],
    correctAnswer: "Pulsar has multi-tenancy built-in, Kafka added it later",
    explanation: "Pulsar was designed with multi-tenancy as a first-class feature from the beginning, while Kafka added multi-tenancy support later through namespaces."
  },
  {
    id: 77,
    question: "What is Apache Beam?",
    options: [
      "Unified programming model for batch and streaming",
      "Stream processing framework",
      "Batch processing framework",
      "ETL tool"
    ],
    correctAnswer: "Unified programming model for batch and streaming",
    explanation: "Apache Beam is a unified, portable programming model for defining both batch and streaming data processing pipelines."
  },
  {
    id: 78,
    question: "What is a runner in Apache Beam?",
    options: [
      "Execution engine that runs Beam pipelines",
      "Processing engine",
      "Pipeline runner",
      "Execution backend"
    ],
    correctAnswer: "Execution engine that runs Beam pipelines",
    explanation: "A runner in Beam is an execution engine that runs Beam pipelines, such as Spark Runner, Flink Runner, or Google Dataflow Runner."
  },
  {
    id: 79,
    question: "What is windowing in streaming?",
    options: [
      "Grouping events into finite windows for processing",
      "Processing events in batches",
      "Dividing streams into partitions",
      "Filtering events"
    ],
    correctAnswer: "Grouping events into finite windows for processing",
    explanation: "Windowing in streaming divides the continuous stream of events into finite, processable chunks (windows) based on time or count."
  },
  {
    id: 80,
    question: "What is event time vs processing time?",
    options: [
      "Event time when event occurred, processing time when processed",
      "Event time when processed, processing time when occurred",
      "Same thing",
      "Different time zones"
    ],
    correctAnswer: "Event time when event occurred, processing time when processed",
    explanation: "Event time is when the event actually occurred (embedded in event data), while processing time is when the event is processed by the system."
  },
  {
    id: 81,
    question: "What is late data in streaming?",
    options: [
      "Events that arrive after their event time",
      "Events that arrive late",
      "Events with wrong timestamp",
      "Events that are delayed"
    ],
    correctAnswer: "Events that arrive after their event time",
    explanation: "Late data refers to events that arrive at the processing system after their event time has already passed, which can be handled using watermarks and allowed lateness."
  },
  {
    id: 82,
    question: "What is allowed lateness in streaming?",
    options: [
      "Maximum time to wait for late data",
      "Time to process late data",
      "Time to drop late data",
      "Time to accept late data"
    ],
    correctAnswer: "Maximum time to wait for late data",
    explanation: "Allowed lateness is the maximum amount of time a streaming system will wait for late data to arrive before considering it as late and potentially discarding it."
  }
];
const dataStreaming = {
  id: id$2,
  title: title$2,
  description: description$2,
  category: category$2,
  questions: questions$2
};
const id$1 = 5;
const title$1 = "Data Lake";
const description$1 = "Architecture, storage, governance, and advanced concepts for data lakes";
const category$1 = "Data";
const questions$1 = [
  {
    id: 1,
    question: "What is a data lake?",
    options: [
      "Centralized repository for raw data in native format",
      "Database with tables",
      "Processing engine",
      "Visualization tool"
    ],
    correctAnswer: "Centralized repository for raw data in native format",
    explanation: "A data lake is a centralized repository that holds raw data in its native format, supporting structured, semi-structured, and unstructured data."
  },
  {
    id: 2,
    question: "What is schema-on-read?",
    options: [
      "Schema applied when reading data",
      "Schema applied when writing",
      "Schema during processing",
      "No schema"
    ],
    correctAnswer: "Schema applied when reading data",
    explanation: "Schema-on-read applies the schema when data is read from the lake, not when it is written, allowing flexible data ingestion."
  },
  {
    id: 3,
    question: "What is schema-on-write?",
    options: [
      "Schema applied when writing data",
      "Schema applied when reading",
      "Schema during processing",
      "No schema"
    ],
    correctAnswer: "Schema applied when writing data",
    explanation: "Schema-on-write applies schema and data validation when data is written to the system, ensuring data consistency."
  },
  {
    id: 4,
    question: "Data lake vs warehouse - key difference?",
    options: [
      "Lake-raw, schema-on-read; Warehouse-structured, schema-on-write",
      "Lake-NoSQL; Warehouse-SQL",
      "Lake-real-time; Warehouse-batch",
      "Lake-cloud; Warehouse-on-prem"
    ],
    correctAnswer: "Lake-raw, schema-on-read; Warehouse-structured, schema-on-write",
    explanation: "Data lakes accept data in any format with schema-on-read; data warehouses require structured data with schema-on-write."
  },
  {
    id: 5,
    question: "What is a data lakehouse?",
    options: [
      "Combines lake and warehouse features",
      "Lake with house structure",
      "Warehouse with lake storage",
      "Hybrid cloud"
    ],
    correctAnswer: "Combines lake and warehouse features",
    explanation: "A data lakehouse combines the flexibility of data lakes with the reliability and performance of data warehouses."
  },
  {
    id: 6,
    question: "What is Delta Lake?",
    options: [
      "Open-source storage layer with ACID transactions",
      "Processing framework",
      "Database",
      "Visualization tool"
    ],
    correctAnswer: "Open-source storage layer with ACID transactions",
    explanation: "Delta Lake is an open-source storage layer that brings ACID transactions to Apache Spark and big data workloads."
  },
  {
    id: 7,
    question: "What is Apache Iceberg?",
    options: [
      "Open table format for analytic datasets",
      "Processing framework",
      "Database",
      "Streaming platform"
    ],
    correctAnswer: "Open table format for analytic datasets",
    explanation: "Apache Iceberg is an open table format for huge analytic datasets, providing reliability and simplicity."
  },
  {
    id: 8,
    question: "What is Apache Hudi?",
    options: [
      "Open-source data lake with upserts, deletes",
      "Processing framework",
      "Database",
      "Streaming platform"
    ],
    correctAnswer: "Open-source data lake with upserts, deletes",
    explanation: "Apache Hudi provides upserts, deletes, and near-real-time ingestion capabilities to data lakes."
  },
  {
    id: 9,
    question: "What are typical data lake zones?",
    options: [
      "Landing, Raw, Cleaned, Curated, Consumption",
      "Input, Process, Output",
      "Hot, Warm, Cold",
      "Prod, Stage, Dev"
    ],
    correctAnswer: "Landing, Raw, Cleaned, Curated, Consumption",
    explanation: "Typical zones are: Landing (temporary), Raw (persistent raw data), Cleaned (validated), Curated (business-ready), Consumption (optimized for users)."
  },
  {
    id: 10,
    question: "What is a data swamp?",
    options: [
      "Disorganized data lake hard to use",
      "High storage costs",
      "Slow ingestion",
      "Lack of query capability"
    ],
    correctAnswer: "Disorganized data lake hard to use",
    explanation: "A data swamp is what happens when a data lake lacks proper governance, metadata, and organization, making data hard to find, understand, and use."
  },
  {
    id: 11,
    question: "Which company originally developed Delta Lake?",
    options: [
      "Databricks",
      "Cloudera",
      "Microsoft",
      "Google"
    ],
    correctAnswer: "Databricks",
    explanation: "Delta Lake was originally developed by Databricks as an open-source storage layer for Apache Spark."
  },
  {
    id: 12,
    question: "What file format does Delta Lake use?",
    options: [
      "Parquet",
      "ORC",
      "Avro",
      "CSV"
    ],
    correctAnswer: "Parquet",
    explanation: "Delta Lake uses Parquet as its underlying file format for efficient columnar storage."
  },
  {
    id: 13,
    question: "What is the Delta Lake transaction log?",
    options: [
      "Record of all changes made to the table",
      "Log of queries",
      "Log of users",
      "Log of errors"
    ],
    correctAnswer: "Record of all changes made to the table",
    explanation: "The Delta Lake transaction log is a set of JSON files that record all changes made to the table, enabling ACID transactions and time travel."
  },
  {
    id: 14,
    question: "What is time travel in Delta Lake?",
    options: [
      "Querying data as it was at a previous point in time",
      "Going back in time to fix errors",
      "Restoring deleted tables",
      "Accessing historical logs"
    ],
    correctAnswer: "Querying data as it was at a previous point in time",
    explanation: "Time travel in Delta Lake allows you to query data as it was at a previous version or timestamp, using the transaction log."
  },
  {
    id: 15,
    question: "What is OPTIMIZE in Delta Lake?",
    options: [
      "Compacts small files into larger ones",
      "Optimizes queries",
      "Optimizes storage",
      "Compacts transaction logs"
    ],
    correctAnswer: "Compacts small files into larger ones",
    explanation: "OPTIMIZE command in Delta Lake compacts small files into larger ones to improve query performance."
  },
  {
    id: 16,
    question: "What is Z-Ordering in Delta Lake?",
    options: [
      "Co-locates related data for faster reads",
      "Zips data files",
      "Orders data by time",
      "Compresses data with Z-standard"
    ],
    correctAnswer: "Co-locates related data for faster reads",
    explanation: "Z-Ordering is a technique that co-locates related data in the same files to minimize the amount of data read during queries."
  },
  {
    id: 17,
    question: "What is VACUUM in Delta Lake?",
    options: [
      "Removes old files no longer referenced by the table",
      "Cleans transaction logs",
      "Removes all data",
      "Compacts files"
    ],
    correctAnswer: "Removes old files no longer referenced by the table",
    explanation: "VACUUM removes old data files that are no longer referenced by the current table version, freeing up storage space."
  },
  {
    id: 18,
    question: "What is the purpose of the _delta_log directory?",
    options: [
      "Stores transaction log files",
      "Stores data files",
      "Stores configuration",
      "Stores temporary files"
    ],
    correctAnswer: "Stores transaction log files",
    explanation: "The _delta_log directory stores all transaction log files that record changes to a Delta Lake table."
  },
  {
    id: 19,
    question: "Which companies originally developed Iceberg?",
    options: [
      "Netflix and Apple",
      "Google and Microsoft",
      "Cloudera and Twitter",
      "Databricks and Apache"
    ],
    correctAnswer: "Netflix and Apple",
    explanation: "Apache Iceberg was originally developed by Netflix and Apple as an open table format."
  },
  {
    id: 20,
    question: "What is snapshot isolation in Iceberg?",
    options: [
      "Readers see a consistent snapshot of the table",
      "Writers see isolated snapshots",
      "Tables are isolated from each other",
      "Snapshots are isolated from users"
    ],
    correctAnswer: "Readers see a consistent snapshot of the table",
    explanation: "Snapshot isolation in Iceberg ensures that readers see a consistent snapshot of the table at a point in time, even while writes are occurring."
  },
  {
    id: 21,
    question: "What is the metadata file in Iceberg?",
    options: [
      "Stores schema and table properties",
      "Stores data",
      "Stores configuration",
      "Stores logs"
    ],
    correctAnswer: "Stores schema and table properties",
    explanation: "The metadata file in Iceberg contains the schema, table properties, and partition information."
  },
  {
    id: 22,
    question: "What is a manifest file in Iceberg?",
    options: [
      "Lists data files and their metadata",
      "Manifest of all changes",
      "List of snapshots",
      "List of partitions"
    ],
    correctAnswer: "Lists data files and their metadata",
    explanation: "A manifest file in Iceberg contains a list of data files with their metadata, such as file location, size, and partition information."
  },
  {
    id: 23,
    question: "What is partition evolution in Iceberg?",
    options: [
      "Changing partition scheme without rewriting data",
      "Evolving partitions over time",
      "Adding new partitions",
      "Removing old partitions"
    ],
    correctAnswer: "Changing partition scheme without rewriting data",
    explanation: "Partition evolution allows you to change the partitioning scheme of an Iceberg table without rewriting all the data."
  },
  {
    id: 24,
    question: "What is view evolution in Iceberg?",
    options: [
      "Changing schema without rewriting data",
      "Evolving views over time",
      "Adding new columns to views",
      "Removing columns from views"
    ],
    correctAnswer: "Changing schema without rewriting data",
    explanation: "View evolution in Iceberg allows you to change the schema of a view without rewriting the underlying data."
  },
  {
    id: 25,
    question: "What is hidden partitioning in Iceberg?",
    options: [
      "Partitioning visible to queries but not to users",
      "Partitioning not visible to queries",
      "Partitioning hidden from metadata",
      "Partitioning hidden from storage"
    ],
    correctAnswer: "Partitioning visible to queries but not to users",
    explanation: "Hidden partitioning in Iceberg allows partitioning data for performance while hiding the partitioning columns from query results."
  },
  {
    id: 26,
    question: "Which company originally developed Hudi?",
    options: [
      "Uber",
      "Netflix",
      "Google",
      "Microsoft"
    ],
    correctAnswer: "Uber",
    explanation: "Apache Hudi was originally developed by Uber for near-real-time data ingestion and processing."
  },
  {
    id: 27,
    question: "What does Hudi stand for?",
    options: [
      "Hadoop Upsert Delete Incremental",
      "Hadoop Unified Data Infrastructure",
      "Hadoop Update and Incremental",
      "Hadoop Data Interface"
    ],
    correctAnswer: "Hadoop Upsert Delete Incremental",
    explanation: "Hudi stands for Hadoop Upsert Delete Incremental, reflecting its support for upsert and delete operations on data lakes."
  },
  {
    id: 28,
    question: "What is MOR in Hudi?",
    options: [
      "Merge-On-Read table type",
      "Merge-Only-Read",
      "Merge-On-Record",
      "Merge-On-Reduce"
    ],
    correctAnswer: "Merge-On-Read table type",
    explanation: "MOR (Merge-On-Read) is a table type in Hudi where updates are stored as delta files and merged during read time."
  },
  {
    id: 29,
    question: "What is COW in Hudi?",
    options: [
      "Copy-On-Write table type",
      "Change-On-Write",
      "Copy-On-Record",
      "Copy-On-Read"
    ],
    correctAnswer: "Copy-On-Write table type",
    explanation: "COW (Copy-On-Write) is a table type in Hudi where updates create new file versions and old files are deleted."
  },
  {
    id: 30,
    question: "What is an index in Hudi?",
    options: [
      "Data structure to quickly locate records",
      "List of all records",
      "Metadata about files",
      "Transaction log"
    ],
    correctAnswer: "Data structure to quickly locate records",
    explanation: "An index in Hudi is a data structure (like a HBase or bloom filter index) that allows quick location of records for updates and deletes."
  },
  {
    id: 31,
    question: "What is the purpose of the Landing zone in a data lake?",
    options: [
      "Temporary storage for incoming data",
      "Long-term storage",
      "Processed data storage",
      "User access layer"
    ],
    correctAnswer: "Temporary storage for incoming data",
    explanation: "The Landing zone is for temporary storage of incoming raw data before it's validated and moved to the Raw zone."
  },
  {
    id: 32,
    question: "What is the purpose of the Raw zone in a data lake?",
    options: [
      "Persistent storage of immutable raw data",
      "Temporary storage",
      "Processed data",
      "User-facing data"
    ],
    correctAnswer: "Persistent storage of immutable raw data",
    explanation: "The Raw zone stores immutable raw data in its original format, serving as the single source of truth."
  },
  {
    id: 33,
    question: "What is the purpose of the Cleaned zone?",
    options: [
      "Data that has been validated and cleansed",
      "Raw data",
      "User-facing data",
      "Temporary data"
    ],
    correctAnswer: "Data that has been validated and cleansed",
    explanation: "The Cleaned zone contains data that has been validated, cleansed, and standardized from the Raw zone."
  },
  {
    id: 34,
    question: "What is the purpose of the Curated zone?",
    options: [
      "Business-ready data with relationships and rules",
      "Raw data",
      "Cleaned data",
      "User-facing data"
    ],
    correctAnswer: "Business-ready data with relationships and rules",
    explanation: "The Curated zone contains business-ready data that has been enriched with relationships, business rules, and aggregations."
  },
  {
    id: 35,
    question: "What is the purpose of the Consumption zone?",
    options: [
      "Data optimized for end-user access and analytics",
      "Raw data",
      "Processed data",
      "Storage optimization"
    ],
    correctAnswer: "Data optimized for end-user access and analytics",
    explanation: "The Consumption zone contains data that has been optimized for end-user access, analytics, and visualization."
  },
  {
    id: 36,
    question: "What is data governance in a data lake?",
    options: [
      "Policies, procedures, and standards for data management",
      "Data storage rules",
      "Data processing rules",
      "Data access rules"
    ],
    correctAnswer: "Policies, procedures, and standards for data management",
    explanation: "Data governance defines policies, procedures, standards, and metrics that ensure the effective and efficient use of data."
  },
  {
    id: 37,
    question: "What is metadata management in a data lake?",
    options: [
      "Capture, storage, and management of data about data",
      "Storing data",
      "Processing data",
      "Managing users"
    ],
    correctAnswer: "Capture, storage, and management of data about data",
    explanation: "Metadata management involves capturing, storing, and managing information about the data (schema, lineage, ownership, etc.)."
  },
  {
    id: 38,
    question: "What is data lineage in a data lake?",
    options: [
      "History of data transformations and movements",
      "Data origin",
      "Data destination",
      "Data processing history"
    ],
    correctAnswer: "History of data transformations and movements",
    explanation: "Data lineage tracks the flow of data from source to destination, including all transformations and movements."
  },
  {
    id: 39,
    question: "What is a data catalog in a data lake?",
    options: [
      "Centralized repository of metadata for data discovery",
      "List of files",
      "List of tables",
      "Query history"
    ],
    correctAnswer: "Centralized repository of metadata for data discovery",
    explanation: "A data catalog is a centralized repository of metadata that makes data assets discoverable, understandable, and usable."
  },
  {
    id: 40,
    question: "What is data quality management in a data lake?",
    options: [
      "Ensuring data meets quality standards",
      "Checking data exists",
      "Validating data format",
      "Monitoring data size"
    ],
    correctAnswer: "Ensuring data meets quality standards",
    explanation: "Data quality management ensures data meets defined quality standards such as accuracy, completeness, consistency, and timeliness."
  },
  {
    id: 41,
    question: "What is data security in a data lake?",
    options: [
      "Protecting data from unauthorized access and breaches",
      "Encrypting all data",
      "Restricting access",
      "Monitoring users"
    ],
    correctAnswer: "Protecting data from unauthorized access and breaches",
    explanation: "Data security involves protecting data from unauthorized access, use, disclosure, disruption, modification, or destruction."
  },
  {
    id: 42,
    question: "What is data retention in a data lake?",
    options: [
      "Policies for how long data should be kept",
      "Data backup policy",
      "Data storage policy",
      "Data archival policy"
    ],
    correctAnswer: "Policies for how long data should be kept",
    explanation: "Data retention defines policies for how long different types of data should be kept in the data lake."
  },
  {
    id: 43,
    question: "What is data archiving in a data lake?",
    options: [
      "Moving infrequently accessed data to cheaper storage",
      "Deleting old data",
      "Compressing data",
      "Encrypting data"
    ],
    correctAnswer: "Moving infrequently accessed data to cheaper storage",
    explanation: "Data archiving moves infrequently accessed data from expensive hot storage to cheaper cold storage while maintaining access."
  },
  {
    id: 44,
    question: "What is tiered storage in a data lake?",
    options: [
      "Different storage types based on access frequency",
      "Same storage for all data",
      "Storage by data type",
      "Storage by data size"
    ],
    correctAnswer: "Different storage types based on access frequency",
    explanation: "Tiered storage uses different storage types (hot, warm, cold) based on data access frequency and performance requirements."
  },
  {
    id: 45,
    question: "What is hot storage in a data lake?",
    options: [
      "Fast, expensive storage for frequently accessed data",
      "Slow, cheap storage",
      "Archival storage",
      "Backup storage"
    ],
    correctAnswer: "Fast, expensive storage for frequently accessed data",
    explanation: "Hot storage is fast, expensive storage (like SSD) used for frequently accessed data that requires low-latency access."
  },
  {
    id: 46,
    question: "What is cold storage in a data lake?",
    options: [
      "Slow, cheap storage for infrequently accessed data",
      "Fast, expensive storage",
      "Archive storage",
      "Backup storage"
    ],
    correctAnswer: "Slow, cheap storage for infrequently accessed data",
    explanation: "Cold storage is slow, cheap storage (like HDD or cloud archive) used for infrequently accessed data."
  },
  {
    id: 47,
    question: "What is data partitioning in a data lake?",
    options: [
      "Dividing data into manageable subsets based on criteria",
      "Splitting data by file size",
      "Dividing data by type",
      "Separating data by source"
    ],
    correctAnswer: "Dividing data into manageable subsets based on criteria",
    explanation: "Data partitioning divides large datasets into smaller, manageable subsets based on criteria like date, region, or business unit."
  },
  {
    id: 48,
    question: "What is partition pruning in a data lake?",
    options: [
      "Skipping irrelevant partitions during queries",
      "Combining partitions",
      "Removing old partitions",
      "Adding new partitions"
    ],
    correctAnswer: "Skipping irrelevant partitions during queries",
    explanation: "Partition pruning is an optimization that skips reading partitions that don't contain relevant data for a query, improving performance."
  },
  {
    id: 49,
    question: "What is bucketing in a data lake?",
    options: [
      "Hash-based partitioning within partitions",
      "Grouping by date",
      "Dividing by size",
      "Splitting by type"
    ],
    correctAnswer: "Hash-based partitioning within partitions",
    explanation: "Bucketing uses hash-based partitioning within existing partitions to co-locate related data and improve join performance."
  },
  {
    id: 50,
    question: "What is clustering in a data lake?",
    options: [
      "Co-locating related data in the same files",
      "Grouping files by size",
      "Dividing by type",
      "Sorting by date"
    ],
    correctAnswer: "Co-locating related data in the same files",
    explanation: "Clustering (like Z-Ordering) co-locates related data in the same files to minimize I/O during queries."
  },
  {
    id: 51,
    question: "What is compaction in a data lake?",
    options: [
      "Combining small files into larger ones",
      "Compressing data",
      "Deleting files",
      "Merging partitions"
    ],
    correctAnswer: "Combining small files into larger ones",
    explanation: "Compaction combines many small files into larger files to improve query performance by reducing the number of files to read."
  },
  {
    id: 52,
    question: "What is the small file problem in data lakes?",
    options: [
      "Too many small files causing performance issues",
      "Small files are hard to store",
      "Small files are hard to process",
      "Small files cause metadata overhead"
    ],
    correctAnswer: "Too many small files causing performance issues",
    explanation: "The small file problem occurs when there are too many small files, which causes performance issues due to high metadata overhead and many I/O operations."
  },
  {
    id: 53,
    question: "What is data compression in a data lake?",
    options: [
      "Reducing data size to save storage and improve performance",
      "Encrypting data",
      "Encoding data",
      "Partitioning data"
    ],
    correctAnswer: "Reducing data size to save storage and improve performance",
    explanation: "Data compression reduces the size of data files to save storage space and improve I/O performance by reading less data."
  },
  {
    id: 54,
    question: "What is columnar storage in a data lake?",
    options: [
      "Storing data by columns instead of rows",
      "Storing data by rows",
      "Storing data by partitions",
      "Storing data by files"
    ],
    correctAnswer: "Storing data by columns instead of rows",
    explanation: "Columnar storage stores data by columns instead of rows, which is more efficient for analytical queries that typically read only a subset of columns."
  },
  {
    id: 55,
    question: "What is Parquet format?",
    options: [
      "Columnar storage format optimized for analytics",
      "Row-based storage",
      "Compressed JSON",
      "Binary CSV"
    ],
    correctAnswer: "Columnar storage format optimized for analytics",
    explanation: "Parquet is an open-source columnar storage file format optimized for use with big data processing frameworks like Spark and Hadoop."
  },
  {
    id: 56,
    question: "What is ORC format?",
    options: [
      "Optimized Row Columnar format for Hadoop",
      "Parquet format",
      "JSON format",
      "CSV format"
    ],
    correctAnswer: "Optimized Row Columnar format for Hadoop",
    explanation: "ORC (Optimized Row Columnar) is a columnar file format created for Hadoop that provides efficient columnar storage with compression."
  },
  {
    id: 57,
    question: "What is Avro format?",
    options: [
      "Row-based format with schema evolution support",
      "Columnar format",
      "JSON format",
      "Binary CSV"
    ],
    correctAnswer: "Row-based format with schema evolution support",
    explanation: "Avro is a row-based binary format that supports schema evolution, making it suitable for data that changes over time."
  },
  {
    id: 58,
    question: "What is the advantage of columnar formats for analytics?",
    options: [
      "Efficient reading of specific columns",
      "Faster writes",
      "Better compression",
      "Easier to parse"
    ],
    correctAnswer: "Efficient reading of specific columns",
    explanation: "Columnar formats allow analytical queries to read only the columns they need, dramatically reducing I/O and improving performance."
  },
  {
    id: 59,
    question: "What is predicate pushdown in a data lake?",
    options: [
      "Filtering data at the storage layer before reading",
      "Pushing predicates to executors",
      "Filtering after loading all data",
      "Processing predicates in parallel"
    ],
    correctAnswer: "Filtering data at the storage layer before reading",
    explanation: "Predicate pushdown pushes filter conditions down to the storage layer, allowing files or partitions to be skipped entirely during reads."
  },
  {
    id: 60,
    question: "What is column pruning in a data lake?",
    options: [
      "Reading only the columns needed for a query",
      "Pruning rows based on conditions",
      "Removing duplicate columns",
      "Compressing columns"
    ],
    correctAnswer: "Reading only the columns needed for a query",
    explanation: "Column pruning is an optimization where only the columns required by a query are read, rather than reading entire files."
  },
  {
    id: 61,
    question: "What is a data lake on AWS?",
    options: [
      "S3-based data lake",
      "RDS database",
      "Redshift warehouse",
      "DynamoDB table"
    ],
    correctAnswer: "S3-based data lake",
    explanation: "On AWS, a data lake is typically built on Amazon S3, with services like AWS Glue for metadata and Athena for querying."
  },
  {
    id: 62,
    question: "What is AWS Glue?",
    options: [
      "Serverless ETL and data catalog service",
      "Data warehouse",
      "Query engine",
      "Storage service"
    ],
    correctAnswer: "Serverless ETL and data catalog service",
    explanation: "AWS Glue is a serverless ETL (Extract, Transform, Load) service that also provides a data catalog for metadata management."
  },
  {
    id: 63,
    question: "What is Athena on AWS?",
    options: [
      "Serverless query service for data in S3",
      "Data warehouse",
      "ETL service",
      "Storage service"
    ],
    correctAnswer: "Serverless query service for data in S3",
    explanation: "Amazon Athena is a serverless query service that allows you to analyze data in Amazon S3 using standard SQL."
  },
  {
    id: 64,
    question: "What is Azure Data Lake Storage?",
    options: [
      "Scalable cloud storage for big data analytics",
      "Database service",
      "Query engine",
      "ETL service"
    ],
    correctAnswer: "Scalable cloud storage for big data analytics",
    explanation: "Azure Data Lake Storage is a scalable cloud storage service optimized for big data analytics workloads."
  },
  {
    id: 65,
    question: "What is Google Cloud Storage for data lakes?",
    options: [
      "Object storage service for data lakes",
      "Database service",
      "Query engine",
      "ETL service"
    ],
    correctAnswer: "Object storage service for data lakes",
    explanation: "Google Cloud Storage is an object storage service that can be used as the foundation for a data lake on Google Cloud."
  },
  {
    id: 66,
    question: "What is BigQuery for data lakes?",
    options: [
      "Serverless data warehouse with data lake capabilities",
      "Storage service",
      "ETL service",
      "Query engine only"
    ],
    correctAnswer: "Serverless data warehouse with data lake capabilities",
    explanation: "Google BigQuery is a serverless data warehouse that can query data directly from Cloud Storage, providing data lake capabilities."
  },
  {
    id: 67,
    question: "What is Databricks Lakehouse?",
    options: [
      "Unified data lake and warehouse platform",
      "Data lake only",
      "Data warehouse only",
      "ETL platform"
    ],
    correctAnswer: "Unified data lake and warehouse platform",
    explanation: "Databricks Lakehouse Platform provides a unified architecture that combines the best of data lakes and data warehouses."
  },
  {
    id: 68,
    question: "What is Auto Loader in Databricks?",
    options: [
      "Incremental file ingestion service",
      "Batch loader",
      "Manual loader",
      "Streaming service"
    ],
    correctAnswer: "Incremental file ingestion service",
    explanation: "Auto Loader is a Databricks service that incrementally ingests new files as they arrive in cloud storage."
  },
  {
    id: 69,
    question: "What is Photon in Databricks?",
    options: [
      "Vectorized query engine for faster SQL",
      "Storage format",
      "ETL service",
      "Query optimizer"
    ],
    correctAnswer: "Vectorized query engine for faster SQL",
    explanation: "Photon is Databricks' vectorized query engine that provides significant performance improvements for SQL workloads."
  },
  {
    id: 70,
    question: "What is Unity Catalog in Databricks?",
    options: [
      "Centralized governance solution for data and AI assets",
      "Data catalog",
      "Metadata store",
      "Access control system"
    ],
    correctAnswer: "Centralized governance solution for data and AI assets",
    explanation: "Unity Catalog is Databricks' centralized governance solution for managing data, files, tables, ML models, and dashboards."
  },
  {
    id: 71,
    question: "What is data sharing in Databricks?",
    options: [
      "Securely sharing data between organizations",
      "Copying data",
      "Moving data",
      "Exporting data"
    ],
    correctAnswer: "Securely sharing data between organizations",
    explanation: "Databricks Delta Sharing allows organizations to securely share data with other organizations without copying or moving the data."
  },
  {
    id: 72,
    question: "What is the purpose of a bronze table in Databricks medallion architecture?",
    options: [
      "Raw data with minimal transformations",
      "Cleaned data",
      "Curated data",
      "Consumption data"
    ],
    correctAnswer: "Raw data with minimal transformations",
    explanation: "In Databricks' medallion architecture, bronze tables contain raw data from source systems with minimal transformations."
  },
  {
    id: 73,
    question: "What is the purpose of a silver table in Databricks medallion architecture?",
    options: [
      "Cleaned, validated, and enriched data",
      "Raw data",
      "Curated data",
      "Consumption data"
    ],
    correctAnswer: "Cleaned, validated, and enriched data",
    explanation: "Silver tables in the medallion architecture contain cleaned, validated, and enriched data that addresses data quality issues."
  },
  {
    id: 74,
    question: "What is the purpose of a gold table in Databricks medallion architecture?",
    options: [
      "Business-ready data for analytics and ML",
      "Raw data",
      "Cleaned data",
      "Processed data"
    ],
    correctAnswer: "Business-ready data for analytics and ML",
    explanation: "Gold tables contain business-ready data that has been aggregated, joined, and prepared for analytics, reporting, and machine learning."
  },
  {
    id: 75,
    question: "What is CDF in Delta Lake?",
    options: [
      "Continuous Data Feed for change data capture",
      "Change Data Format",
      "Continuous Data Flow",
      "Change Data Framework"
    ],
    correctAnswer: "Continuous Data Feed for change data capture",
    explanation: "CDF (Continuous Data Feed) is a feature in Delta Lake that enables change data capture, tracking row-level changes in tables."
  },
  {
    id: 76,
    question: "What is Dynamic File Pruning in Delta Lake?",
    options: [
      "Skipping files that don't match query predicates",
      "Dynamic partitioning",
      "File compression",
      "File merging"
    ],
    correctAnswer: "Skipping files that don't match query predicates",
    explanation: "Dynamic File Pruning uses statistics stored in the transaction log to skip files that don't match query predicates, improving performance."
  },
  {
    id: 77,
    question: "What is Dynamic Partition Pruning in Delta Lake?",
    options: [
      "Skipping partitions that don't match query predicates",
      "Dynamic file pruning",
      "Partition merging",
      "Partition compression"
    ],
    correctAnswer: "Skipping partitions that don't match query predicates",
    explanation: "Dynamic Partition Pruning skips entire partitions that don't match query predicates, providing significant performance improvements."
  },
  {
    id: 78,
    question: "What is the purpose of a data mesh?",
    options: [
      "Decentralized data architecture with domain ownership",
      "Centralized data lake",
      "Data warehouse architecture",
      "ETL architecture"
    ],
    correctAnswer: "Decentralized data architecture with domain ownership",
    explanation: "Data mesh is a decentralized data architecture that treats data as a product, with domain ownership and self-serve data infrastructure."
  },
  {
    id: 79,
    question: "What is domain ownership in data mesh?",
    options: [
      "Business domains own their data products",
      "IT owns all data",
      "Central team owns data",
      "External vendors own data"
    ],
    correctAnswer: "Business domains own their data products",
    explanation: "In data mesh, business domains (like Finance, Marketing) own their data products, ensuring quality and relevance."
  },
  {
    id: 80,
    question: "What is a data product in data mesh?",
    options: [
      "Self-contained, reusable data asset",
      "Raw data",
      "Processed data",
      "Storage system"
    ],
    correctAnswer: "Self-contained, reusable data asset",
    explanation: "A data product in data mesh is a self-contained, reusable data asset that is managed as a product with defined interfaces and SLAs."
  },
  {
    id: 81,
    question: "What is self-serve data infrastructure in data mesh?",
    options: [
      "Platform that enables domain teams to serve their data",
      "Central IT infrastructure",
      "External hosting",
      "Managed service"
    ],
    correctAnswer: "Platform that enables domain teams to serve their data",
    explanation: "Self-serve data infrastructure is a platform that enables domain teams to easily publish, discover, and consume data products without central IT involvement."
  },
  {
    id: 82,
    question: "What is federated computational governance in data mesh?",
    options: [
      "Global governance with local domain control",
      "Central governance",
      "No governance",
      "External governance"
    ],
    correctAnswer: "Global governance with local domain control",
    explanation: "Federated computational governance balances global standards and policies with local domain control and decision-making."
  }
];
const dataLake = {
  id: id$1,
  title: title$1,
  description: description$1,
  category: category$1,
  questions: questions$1
};
const id = 6;
const title = "Apache Spark";
const description = "Big data processing with Spark Core, SQL, Streaming, and MLlib";
const category = "Data";
const questions = [
  {
    id: 1,
    question: "What is Apache Spark?",
    options: [
      "Unified analytics engine for large-scale data processing",
      "Database management system",
      "Real-time streaming platform only",
      "Visualization tool"
    ],
    correctAnswer: "Unified analytics engine for large-scale data processing",
    explanation: "Apache Spark is a unified analytics engine designed for large-scale data processing, with built-in modules for SQL, streaming, machine learning, and graph processing."
  },
  {
    id: 2,
    question: "What are the main components of Spark?",
    options: [
      "Spark Core, Spark SQL, Spark Streaming, MLlib, GraphX",
      "Spark Core, HDFS, YARN, Mesos",
      "Spark SQL, Kafka, Flink, Hadoop",
      "Spark Core, Hive, Pig, Tez"
    ],
    correctAnswer: "Spark Core, Spark SQL, Spark Streaming, MLlib, GraphX",
    explanation: "The main components are: Spark Core (foundation), Spark SQL (structured data), Spark Streaming (real-time), MLlib (machine learning), and GraphX (graph processing)."
  },
  {
    id: 3,
    question: "What is Spark Core?",
    options: [
      "Foundation layer with task scheduling, memory management, and fault recovery",
      "SQL query engine",
      "Streaming processing module",
      "Machine learning library"
    ],
    correctAnswer: "Foundation layer with task scheduling, memory management, and fault recovery",
    explanation: "Spark Core is the foundation layer providing distributed task dispatching, scheduling, memory management, and fault recovery capabilities."
  },
  {
    id: 4,
    question: "What does RDD stand for?",
    options: [
      "Resilient Distributed Dataset",
      "Replicated Data Directory",
      "Remote Data Driver",
      "Real-time Data Distribution"
    ],
    correctAnswer: "Resilient Distributed Dataset",
    explanation: "RDD is Spark's core data structure: an immutable, fault-tolerant, distributed collection of objects that can be processed in parallel."
  },
  {
    id: 5,
    question: "What are the two types of RDD operations?",
    options: [
      "Transformations and Actions",
      "Map and Reduce",
      "Filter and Aggregate",
      "Parallel and Sequential"
    ],
    correctAnswer: "Transformations and Actions",
    explanation: "RDDs support Transformations (which create new RDDs) and Actions (which compute results). Transformations are lazy while Actions trigger execution."
  },
  {
    id: 6,
    question: "Which of these is a Transformation operation?",
    options: [
      "map",
      "count",
      "collect",
      "reduce"
    ],
    correctAnswer: "map",
    explanation: "map() is a Transformation that applies a function to each element of an RDD, creating a new RDD without triggering execution."
  },
  {
    id: 7,
    question: "Which of these is an Action operation?",
    options: [
      "count",
      "map",
      "filter",
      "flatMap"
    ],
    correctAnswer: "count",
    explanation: "count() is an Action that returns the number of elements in an RDD, triggering execution of all accumulated Transformations."
  },
  {
    id: 8,
    question: "What is lazy evaluation in Spark?",
    options: [
      "Transformations are not executed until an Action is called",
      "Transformations execute immediately",
      "Actions are evaluated lazily",
      "Data is loaded lazily by default"
    ],
    correctAnswer: "Transformations are not executed until an Action is called",
    explanation: "Spark uses lazy evaluation: Transformations build a DAG of operations but do not execute until an Action is called, enabling optimization of the entire pipeline."
  },
  {
    id: 9,
    question: "What is a DAG in Spark?",
    options: [
      "Directed Acyclic Graph representing the sequence of operations",
      "Data structure for storing RDDs",
      "Scheduling algorithm",
      "Partitioning strategy"
    ],
    correctAnswer: "Directed Acyclic Graph representing the sequence of operations",
    explanation: "A DAG represents the sequence of Transformations and Actions to be executed, with nodes representing RDDs and edges representing operations between them."
  },
  {
    id: 10,
    question: "What is Spark SQL?",
    options: [
      "Module for structured and semi-structured data processing",
      "NoSQL database",
      "Streaming engine",
      "Graph processing library"
    ],
    correctAnswer: "Module for structured and semi-structured data processing",
    explanation: "Spark SQL provides a DataFrame API and SQL interface for querying structured and semi-structured data from various sources like JSON, Parquet, and databases."
  },
  {
    id: 11,
    question: "What is a DataFrame in Spark?",
    options: [
      "Distributed collection of data organized into named columns",
      "Single machine data structure",
      "Key-value pair collection",
      "Graph data structure"
    ],
    correctAnswer: "Distributed collection of data organized into named columns",
    explanation: "A DataFrame is a distributed collection of data organized into named columns (like a table in relational databases or a DataFrame in Python/R)."
  },
  {
    id: 12,
    question: "What is the difference between RDD and DataFrame?",
    options: [
      "DataFrames have schema information and optimized execution",
      "RDDs are faster",
      "DataFrames don't support SQL",
      "RDDs can only store integers"
    ],
    correctAnswer: "DataFrames have schema information and optimized execution",
    explanation: "DataFrames provide schema information and use Catalyst optimizer for efficient execution, while RDDs are low-level without schema. DataFrames are built on top of RDDs."
  },
  {
    id: 13,
    question: "What is Catalyst optimizer in Spark SQL?",
    options: [
      "Query optimization framework that transforms logical to physical plans",
      "Memory management system",
      "Cluster manager",
      "Data partitioning tool"
    ],
    correctAnswer: "Query optimization framework that transforms logical to physical plans",
    explanation: "Catalyst is Spark SQL's extensible query optimization framework that transforms logical execution plans into optimized physical execution plans using rule-based optimization."
  },
  {
    id: 14,
    question: "What is Tungsten in Spark?",
    options: [
      "Binary processing engine for improved performance",
      "Memory management system",
      "Cluster manager",
      "Data serialization format"
    ],
    correctAnswer: "Binary processing engine for improved performance",
    explanation: "Tungsten is Spark's binary processing engine that improves performance through cache-aware computation, code generation, and off-heap memory management."
  },
  {
    id: 15,
    question: "What is Spark Streaming?",
    options: [
      "Micro-batch stream processing framework",
      "Real-time database",
      "Message queue",
      "Visualization tool"
    ],
    correctAnswer: "Micro-batch stream processing framework",
    explanation: "Spark Streaming processes live data streams by dividing them into micro-batches, which are processed using Spark's batch processing engine."
  },
  {
    id: 16,
    question: "What is a DStream in Spark Streaming?",
    options: [
      "Discretized Stream - sequence of RDDs representing stream data",
      "Data Stream Manager",
      "Stream processing algorithm",
      "Distributed Stream"
    ],
    correctAnswer: "Discretized Stream - sequence of RDDs representing stream data",
    explanation: "A DStream (Discretized Stream) is a sequence of RDDs representing a stream of data, where each RDD contains data from a specific time interval."
  },
  {
    id: 17,
    question: "What is Structured Streaming in Spark?",
    options: [
      "High-level API for stream processing built on DataFrame API",
      "Low-level API using RDDs",
      "Stream processing with SQL only",
      "Graph-based stream processing"
    ],
    correctAnswer: "High-level API for stream processing built on DataFrame API",
    explanation: "Structured Streaming is a high-level API for stream processing built on the DataFrame API, providing end-to-end fault tolerance and exactly-once semantics."
  },
  {
    id: 18,
    question: "What is MLlib in Spark?",
    options: [
      "Machine learning library for distributed ML algorithms",
      "Memory management library",
      "Cluster management library",
      "Data visualization library"
    ],
    correctAnswer: "Machine learning library for distributed ML algorithms",
    explanation: "MLlib is Spark's scalable machine learning library that provides distributed implementations of common ML algorithms including classification, regression, clustering, and collaborative filtering."
  },
  {
    id: 19,
    question: "What is GraphX in Spark?",
    options: [
      "Graph processing library for graph-parallel computation",
      "Data visualization library",
      "Graph database",
      "Network protocol"
    ],
    correctAnswer: "Graph processing library for graph-parallel computation",
    explanation: "GraphX is Spark's API for graph-parallel computation that enables users to interactively build, transform, and reason about graph-structured data at scale."
  },
  {
    id: 20,
    question: "What is Spark Session?",
    options: [
      "Entry point to Spark functionality in Spark 2.0+",
      "User interface for Spark",
      "Cluster management interface",
      "Data storage system"
    ],
    correctAnswer: "Entry point to Spark functionality in Spark 2.0+",
    explanation: "SparkSession is the entry point to all Spark functionality in Spark 2.0 and later, providing access to SparkContext, SQLContext, HiveContext, and streaming functionality."
  },
  {
    id: 21,
    question: "What command creates a SparkSession in PySpark?",
    options: [
      "SparkSession.builder.getOrCreate()",
      "SparkContext()",
      "SQLContext()",
      "HiveContext()"
    ],
    correctAnswer: "SparkSession.builder.getOrCreate()",
    explanation: "In PySpark, you create or retrieve a SparkSession using SparkSession.builder.getOrCreate(), which provides a builder pattern for configuration."
  },
  {
    id: 22,
    question: "What is narrow dependency in Spark?",
    options: [
      "Each partition of parent RDD contributes to at most one partition of child RDD",
      "Each partition contributes to multiple child partitions",
      "Partition depends on all previous partitions",
      "No dependency between partitions"
    ],
    correctAnswer: "Each partition of parent RDD contributes to at most one partition of child RDD",
    explanation: "Narrow dependency (or narrow transformation) is when each partition of the parent RDD contributes to at most one partition of the child RDD. These can be pipelined and don't require shuffling."
  },
  {
    id: 23,
    question: "What is wide dependency in Spark?",
    options: [
      "Each partition of parent RDD contributes to multiple partitions of child RDD",
      "Each partition contributes to one child partition",
      "Partition doesn't depend on parent",
      "All partitions merged into one"
    ],
    correctAnswer: "Each partition of parent RDD contributes to multiple partitions of child RDD",
    explanation: "Wide dependency (or wide transformation) is when each partition of the parent RDD contributes to multiple partitions of the child RDD, requiring data shuffling across the network."
  },
  {
    id: 24,
    question: "Which transformation causes a shuffle in Spark?",
    options: [
      "groupByKey",
      "map",
      "filter",
      "flatMap"
    ],
    correctAnswer: "groupByKey",
    explanation: "groupByKey() is a wide transformation that causes data to be shuffled across the network because keys from different partitions need to be grouped together."
  },
  {
    id: 25,
    question: "What is the purpose of persist() in Spark?",
    options: [
      "Store RDD/DataFrame in memory or disk to avoid recomputation",
      "Save to external storage",
      "Stop execution",
      "Partition data"
    ],
    correctAnswer: "Store RDD/DataFrame in memory or disk to avoid recomputation",
    explanation: "persist() marks an RDD or DataFrame to be stored in memory or disk after first computation, avoiding the need to recompute it for subsequent actions."
  },
  {
    id: 26,
    question: "What are the storage levels in Spark?",
    options: [
      "MEMORY_ONLY, MEMORY_AND_DISK, DISK_ONLY, etc.",
      "FAST, MEDIUM, SLOW",
      "IN_MEMORY, ON_DISK",
      "CACHE, STORE, PERSIST"
    ],
    correctAnswer: "MEMORY_ONLY, MEMORY_AND_DISK, DISK_ONLY, etc.",
    explanation: "Storage levels include MEMORY_ONLY (store in memory as deserialized Java objects), MEMORY_AND_DISK (spill to disk if memory full), DISK_ONLY, MEMORY_ONLY_SER (serialized), MEMORY_AND_DISK_SER, DISK_ONLY_2, etc."
  },
  {
    id: 27,
    question: "What is the difference between cache() and persist() in Spark?",
    options: [
      "cache() uses default storage level (MEMORY_ONLY), persist() allows specifying storage level",
      "cache() stores on disk, persist() in memory",
      "cache() is for DataFrames only",
      "persist() doesn't store data"
    ],
    correctAnswer: "cache() uses default storage level (MEMORY_ONLY), persist() allows specifying storage level",
    explanation: "cache() is a shorthand for persist(StorageLevel.MEMORY_ONLY), while persist() allows you to specify which storage level to use."
  },
  {
    id: 28,
    question: "What is partitioning in Spark?",
    options: [
      "Dividing data into chunks that can be processed in parallel",
      "Splitting data by key",
      "Storing data in different formats",
      "Compressing data"
    ],
    correctAnswer: "Dividing data into chunks that can be processed in parallel",
    explanation: "Partitioning divides data into logical chunks (partitions) that can be stored and processed in parallel across the cluster, with each partition typically processed by one task."
  },
  {
    id: 29,
    question: "What is the default number of partitions when creating an RDD from a local collection?",
    options: [
      "Number of cores in the cluster",
      "Number of cores on the driver",
      "Number of nodes in the cluster",
      "Always 1"
    ],
    correctAnswer: "Number of cores on the driver",
    explanation: "When creating an RDD from a local collection using parallelize(), the default number of partitions equals the number of cores on the driver machine."
  },
  {
    id: 30,
    question: "What does repartition() do in Spark?",
    options: [
      "Increases or decreases the number of partitions",
      "Changes partition keys",
      "Rebalances data across existing partitions",
      "Creates a new RDD with different data"
    ],
    correctAnswer: "Increases or decreases the number of partitions",
    explanation: "repartition() increases or decreases the number of partitions in an RDD or DataFrame, requiring a full shuffle of the data."
  },
  {
    id: 31,
    question: "What does coalesce() do in Spark?",
    options: [
      "Reduces the number of partitions without full shuffle",
      "Increases partitions",
      "Rebalances data",
      "Combines partitions by key"
    ],
    correctAnswer: "Reduces the number of partitions without full shuffle",
    explanation: "coalesce() reduces the number of partitions in an RDD without requiring a full shuffle, only moving data from partitions being removed."
  },
  {
    id: 32,
    question: "What is a broadcast variable in Spark?",
    options: [
      "Read-only shared variable cached on each machine",
      "Variable shared across all executors",
      "Mutable variable for accumulators",
      "Partition variable"
    ],
    correctAnswer: "Read-only shared variable cached on each machine",
    explanation: "A broadcast variable is a read-only shared variable that is cached on each machine, allowing efficient access to large, read-only datasets across all nodes without duplication."
  },
  {
    id: 33,
    question: "What is an accumulator in Spark?",
    options: [
      "Variable for aggregating values across tasks",
      "Variable for broadcasting data",
      "Variable for partitioning data",
      "Variable for caching data"
    ],
    correctAnswer: "Variable for aggregating values across tasks",
    explanation: "An accumulator is a shared variable that can be used to aggregate values across tasks, with only the driver program allowed to read its value."
  },
  {
    id: 34,
    question: "What is the purpose of checkpointing in Spark?",
    options: [
      "Truncating RDD lineage to avoid long recovery times",
      "Saving RDD to disk",
      "Creating backup of SparkSession",
      "Restarting failed tasks"
    ],
    correctAnswer: "Truncating RDD lineage to avoid long recovery times",
    explanation: "Checkpointing saves an RDD to reliable storage, truncating its lineage graph. This avoids the need to recompute long lineages during recovery, improving fault tolerance."
  },
  {
    id: 35,
    question: "What file formats does Spark support natively?",
    options: [
      "Text, JSON, Parquet, ORC, CSV",
      "Binary, XML, Avro",
      "YAML, TOML",
      "All of the above"
    ],
    correctAnswer: "Text, JSON, Parquet, ORC, CSV",
    explanation: "Spark natively supports text, JSON, Parquet, ORC, and CSV file formats, with additional formats available through packages."
  },
  {
    id: 36,
    question: "What is the most efficient file format for Spark?",
    options: [
      "Parquet",
      "JSON",
      "CSV",
      "Text"
    ],
    correctAnswer: "Parquet",
    explanation: "Parquet is a columnar storage format that provides the best performance for Spark due to its efficient compression, columnar encoding, and predicate pushdown capabilities."
  },
  {
    id: 37,
    question: "What is predicate pushdown in Spark?",
    options: [
      "Filtering data at the storage layer before reading",
      "Pushing predicates to executors",
      "Filtering after loading all data",
      "Processing predicates in parallel"
    ],
    correctAnswer: "Filtering data at the storage layer before reading",
    explanation: "Predicate pushdown is an optimization that pushes filter conditions down to the storage layer, allowing files or partitions to be skipped entirely during reads, improving performance."
  },
  {
    id: 38,
    question: "What is column pruning in Spark SQL?",
    options: [
      "Reading only the columns needed for a query",
      "Pruning rows based on conditions",
      "Removing duplicate columns",
      "Compressing columns"
    ],
    correctAnswer: "Reading only the columns needed for a query",
    explanation: "Column pruning is an optimization where Spark SQL only reads the columns that are actually needed for a query, rather than reading entire files, reducing I/O."
  },
  {
    id: 39,
    question: "What is partitioning in Spark SQL?",
    options: [
      "Organizing data based on column values for efficient querying",
      "Splitting data by file size",
      "Dividing data by number of cores",
      "Storing data in different directories"
    ],
    correctAnswer: "Organizing data based on column values for efficient querying",
    explanation: "In Spark SQL, partitioning organizes data into directories based on column values, enabling partition pruning and improving query performance."
  },
  {
    id: 40,
    question: "What is bucketing in Spark SQL?",
    options: [
      "Hash partitioning within partitions for efficient joins",
      "Storing data in buckets",
      "Grouping data by size",
      "Dividing data by date"
    ],
    correctAnswer: "Hash partitioning within partitions for efficient joins",
    explanation: "Bucketing is a data organization technique that uses hash partitioning within partitions, enabling efficient joins and aggregations by co-locating related data."
  },
  {
    id: 41,
    question: "What is the difference between partitionBy and repartitionByRange in Spark?",
    options: [
      "partitionBy uses hash partitioning, repartitionByRange uses range partitioning",
      "partitionBy uses range, repartitionByRange uses hash",
      "partitionBy stores on disk, repartitionByRange in memory",
      "Both use the same partitioning"
    ],
    correctAnswer: "partitionBy uses hash partitioning, repartitionByRange uses range partitioning",
    explanation: "partitionBy() uses hash partitioning to distribute data across partitions, while repartitionByRange() uses range partitioning which is useful for ordered data."
  },
  {
    id: 42,
    question: "What is the purpose of sortByKey in Spark?",
    options: [
      "Sort RDD by key",
      "Sort RDD by value",
      "Partition by key",
      "Group by key"
    ],
    correctAnswer: "Sort RDD by key",
    explanation: "sortByKey() sorts an RDD by its keys, which is a wide transformation that requires shuffling data across the network."
  },
  {
    id: 43,
    question: "What is reduceByKey in Spark?",
    options: [
      "Aggregate values for each key using a function",
      "Reduce RDD to single value",
      "Map values for each key",
      "Filter keys"
    ],
    correctAnswer: "Aggregate values for each key using a function",
    explanation: "reduceByKey() aggregates the values of each key using a reduce function, providing a more efficient alternative to groupByKey() followed by reduce()."
  },
  {
    id: 44,
    question: "What is the difference between reduceByKey and groupByKey?",
    options: [
      "reduceByKey performs map-side aggregation, groupByKey does not",
      "reduceByKey is slower",
      "groupByKey is preferred for aggregations",
      "No difference"
    ],
    correctAnswer: "reduceByKey performs map-side aggregation, groupByKey does not",
    explanation: "reduceByKey() performs map-side aggregation (combining values within each partition before shuffling), making it more efficient than groupByKey() which requires all values to be shuffled first."
  },
  {
    id: 45,
    question: "What is aggregateByKey in Spark?",
    options: [
      "Aggregate values with different functions for map-side and reduce-side",
      "Aggregate with single function",
      "Group values by key",
      "Sort values by key"
    ],
    correctAnswer: "Aggregate values with different functions for map-side and reduce-side",
    explanation: "aggregateByKey() allows different aggregation functions for map-side (within partitions) and reduce-side (across partitions), providing more flexibility than reduceByKey()."
  },
  {
    id: 46,
    question: "What is combineByKey in Spark?",
    options: [
      "Custom aggregation with different functions for creating, merging, and combining values",
      "Combining RDDs by key",
      "Merging partitions",
      "Joining RDDs"
    ],
    correctAnswer: "Custom aggregation with different functions for creating, merging, and combining values",
    explanation: "combineByKey() is a generic aggregation function that allows you to specify custom functions for creating the first value, merging values within a partition, and combining values across partitions."
  },
  {
    id: 47,
    question: "What is join in Spark?",
    options: [
      "Combine RDDs based on keys",
      "Combine RDDs by index",
      "Combine all elements",
      "Merge partitions"
    ],
    correctAnswer: "Combine RDDs based on keys",
    explanation: "join() combines two RDDs based on matching keys, returning an RDD of (key, (value1, value2)) pairs for all keys present in both RDDs."
  },
  {
    id: 48,
    question: "What is the difference between inner join and left join in Spark?",
    options: [
      "Inner join returns only matching keys, left join returns all keys from left RDD",
      "Inner join returns all keys, left join returns matching keys",
      "Both return the same results",
      "Inner join is faster"
    ],
    correctAnswer: "Inner join returns only matching keys, left join returns all keys from left RDD",
    explanation: "Inner join returns only pairs with keys present in both RDDs, while left join (leftOuterJoin) returns all keys from the left RDD with matching values from the right RDD or None if no match exists."
  },
  {
    id: 49,
    question: "What is cogroup in Spark?",
    options: [
      "Group data from both RDDs by key and return pairs of iterators",
      "Combine RDDs by key",
      "Join RDDs",
      "Filter by key"
    ],
    correctAnswer: "Group data from both RDDs by key and return pairs of iterators",
    explanation: "cogroup() groups data from both RDDs by key, returning an RDD of (key, (Iterable[V], Iterable[W])) pairs, which can be more efficient than join for certain operations."
  },
  {
    id: 50,
    question: "What is the purpose of subtract in Spark?",
    options: [
      "Return elements in first RDD not present in second",
      "Subtract values",
      "Remove duplicates",
      "Filter elements"
    ],
    correctAnswer: "Return elements in first RDD not present in second",
    explanation: "subtract() returns an RDD containing elements that are present in the first RDD but not in the second RDD."
  },
  {
    id: 51,
    question: "What does intersect do in Spark?",
    options: [
      "Return elements present in both RDDs",
      "Return common keys",
      "Merge RDDs",
      "Find differences"
    ],
    correctAnswer: "Return elements present in both RDDs",
    explanation: "intersect() returns an RDD containing elements that are present in both RDDs."
  },
  {
    id: 52,
    question: "What does union do in Spark?",
    options: [
      "Return all elements from both RDDs",
      "Combine RDDs by key",
      "Merge RDDs and remove duplicates",
      "Find unique elements"
    ],
    correctAnswer: "Return all elements from both RDDs",
    explanation: "union() returns an RDD containing all elements from both RDDs, including duplicates."
  },
  {
    id: 53,
    question: "What does cartesian do in Spark?",
    options: [
      "Return the Cartesian product of two RDDs",
      "Combine RDDs by key",
      "Filter by condition",
      "Aggregate values"
    ],
    correctAnswer: "Return the Cartesian product of two RDDs",
    explanation: "cartesian() returns the Cartesian product of two RDDs, pairing each element of the first RDD with each element of the second RDD."
  },
  {
    id: 54,
    question: "What is the purpose of sample in Spark?",
    options: [
      "Return a random sample of elements",
      "Sample data by key",
      "Create sample RDD",
      "Randomly partition data"
    ],
    correctAnswer: "Return a random sample of elements",
    explanation: "sample() returns a random sample of elements from an RDD, with or without replacement, based on specified probabilities."
  },
  {
    id: 55,
    question: "What does take do in Spark?",
    options: [
      "Return first N elements",
      "Take elements by key",
      "Remove elements",
      "Filter elements"
    ],
    correctAnswer: "Return first N elements",
    explanation: "take(n) returns an array containing the first n elements of an RDD as an array to the driver program."
  },
  {
    id: 56,
    question: "What does first do in Spark?",
    options: [
      "Return first element",
      "Return first N elements",
      "Return first element by key",
      "Sort and return first"
    ],
    correctAnswer: "Return first element",
    explanation: "first() returns the first element of an RDD as a single value to the driver program."
  },
  {
    id: 57,
    question: "What does top do in Spark?",
    options: [
      "Return top N elements based on natural ordering",
      "Return top N elements by key",
      "Sort and return first N",
      "Return largest elements"
    ],
    correctAnswer: "Return top N elements based on natural ordering",
    explanation: "top(n) returns an array containing the top n elements of an RDD based on their natural ordering (ascending by default)."
  },
  {
    id: 58,
    question: "What does takeOrdered do in Spark?",
    options: [
      "Return first N elements in specified order",
      "Take elements by key",
      "Return sorted elements",
      "Filter and sort"
    ],
    correctAnswer: "Return first N elements in specified order",
    explanation: "takeOrdered(n) returns an array containing the first n elements of an RDD sorted in ascending order based on a specified ordering."
  },
  {
    id: 59,
    question: "What does countByKey do in Spark?",
    options: [
      "Return count of each key",
      "Count all elements",
      "Count by value",
      "Group and count"
    ],
    correctAnswer: "Return count of each key",
    explanation: "countByKey() returns a map containing the count of each key in an RDD of key-value pairs."
  },
  {
    id: 60,
    question: "What does countByValue do in Spark?",
    options: [
      "Return count of each value",
      "Count all elements",
      "Count by key",
      "Group and count"
    ],
    correctAnswer: "Return count of each value",
    explanation: "countByValue() returns a map containing the count of each unique value in an RDD."
  },
  {
    id: 61,
    question: "What does lookup do in Spark?",
    options: [
      "Return all values for a specific key",
      "Lookup key in RDD",
      "Search for value",
      "Find matching keys"
    ],
    correctAnswer: "Return all values for a specific key",
    explanation: "lookup(key) returns an array of all values associated with a specific key in an RDD of key-value pairs."
  },
  {
    id: 62,
    question: "What does keys do in Spark?",
    options: [
      "Return RDD of keys",
      "Return all keys as array",
      "Filter by key",
      "Extract keys"
    ],
    correctAnswer: "Return RDD of keys",
    explanation: "keys() returns an RDD containing only the keys from an RDD of key-value pairs."
  },
  {
    id: 63,
    question: "What does values do in Spark?",
    options: [
      "Return RDD of values",
      "Return all values as array",
      "Extract values by key",
      "Filter values"
    ],
    correctAnswer: "Return RDD of values",
    explanation: "values() returns an RDD containing only the values from an RDD of key-value pairs."
  },
  {
    id: 64,
    question: "What does saveAsTextFile do in Spark?",
    options: [
      "Save RDD as text file",
      "Save as binary file",
      "Save as JSON",
      "Save to database"
    ],
    correctAnswer: "Save RDD as text file",
    explanation: "saveAsTextFile(path) writes the elements of an RDD as a text file (or multiple text files) to the specified directory, with each element on a separate line."
  },
  {
    id: 65,
    question: "What does saveAsSequenceFile do in Spark?",
    options: [
      "Save RDD as Hadoop SequenceFile",
      "Save as text file",
      "Save as JSON",
      "Save as Parquet"
    ],
    correctAnswer: "Save RDD as Hadoop SequenceFile",
    explanation: "saveAsSequenceFile(path) writes the elements of an RDD as a Hadoop SequenceFile, which is a binary file format for key-value pairs."
  },
  {
    id: 66,
    question: "What does saveAsObjectFile do in Spark?",
    options: [
      "Save RDD as serialized Java objects",
      "Save as text",
      "Save as JSON",
      "Save as binary"
    ],
    correctAnswer: "Save RDD as serialized Java objects",
    explanation: "saveAsObjectFile(path) writes the elements of an RDD as serialized Java objects to a directory, with each partition written as a separate file."
  },
  {
    id: 67,
    question: "What is the purpose of foreach in Spark?",
    options: [
      "Apply function to each element",
      "Iterate over RDD",
      "Filter elements",
      "Map elements"
    ],
    correctAnswer: "Apply function to each element",
    explanation: "foreach(func) applies a function to each element of an RDD, typically used for side effects like writing to external systems."
  },
  {
    id: 68,
    question: "What is the purpose of foreachPartition in Spark?",
    options: [
      "Apply function to each partition (more efficient for connections)",
      "Apply to each element",
      "Filter partitions",
      "Process partitions in parallel"
    ],
    correctAnswer: "Apply function to each partition (more efficient for connections)",
    explanation: "foreachPartition(func) applies a function to each partition of an RDD, which is more efficient than foreach when the function initializes expensive resources (like database connections) that can be reused for all elements in a partition."
  },
  {
    id: 69,
    question: "What does mapPartitions do in Spark?",
    options: [
      "Apply function to each partition and return new RDD",
      "Map elements in partition",
      "Filter partitions",
      "Aggregate partitions"
    ],
    correctAnswer: "Apply function to each partition and return new RDD",
    explanation: "mapPartitions(func) applies a function to each partition of an RDD and returns a new RDD, allowing for more efficient processing when expensive resources can be reused across all elements in a partition."
  },
  {
    id: 70,
    question: "What does mapPartitionsWithIndex do in Spark?",
    options: [
      "Apply function with partition index to each partition",
      "Map elements with index",
      "Filter with index",
      "Process with partition number"
    ],
    correctAnswer: "Apply function with partition index to each partition",
    explanation: "mapPartitionsWithIndex(func) is similar to mapPartitions but provides the partition index to the function, useful for partition-specific operations."
  },
  {
    id: 71,
    question: "What is the purpose of glom in Spark?",
    options: [
      "Convert each partition into an array of its elements",
      "Combine partitions",
      "Split partitions",
      "Filter partitions"
    ],
    correctAnswer: "Convert each partition into an array of its elements",
    explanation: "glom() converts each partition of an RDD into an array containing all the elements of that partition, resulting in an RDD[Array[T]]."
  },
  {
    id: 72,
    question: "What does distinct do in Spark?",
    options: [
      "Return unique elements",
      "Remove duplicates",
      "Count unique elements",
      "Filter duplicates"
    ],
    correctAnswer: "Return unique elements",
    explanation: "distinct() returns an RDD containing only the unique elements from the source RDD, removing duplicates."
  },
  {
    id: 73,
    question: "What does filter do in Spark?",
    options: [
      "Return elements that satisfy a predicate",
      "Remove elements",
      "Keep matching elements",
      "Select elements"
    ],
    correctAnswer: "Return elements that satisfy a predicate",
    explanation: "filter(func) returns an RDD containing only the elements that satisfy a specified predicate function."
  },
  {
    id: 74,
    question: "What does flatMap do in Spark?",
    options: [
      "Map function that returns iterator and flattens results",
      "Flatten nested structures",
      "Map and flatten",
      "Process each element"
    ],
    correctAnswer: "Map function that returns iterator and flattens results",
    explanation: "flatMap(func) is similar to map but the function returns an iterator, and the results are flattened into a single RDD."
  },
  {
    id: 75,
    question: "What does flatMapValues do in Spark?",
    options: [
      "Apply flatMap to values of key-value RDD",
      "Flatten key-value pairs",
      "Map and flatten values",
      "Process values"
    ],
    correctAnswer: "Apply flatMap to values of key-value RDD",
    explanation: "flatMapValues(func) applies a flatMap function to each value of a key-value RDD, keeping the original keys and flattening the results."
  },
  {
    id: 76,
    question: "What does mapValues do in Spark?",
    options: [
      "Apply map function to values of key-value RDD",
      "Map all elements",
      "Map keys",
      "Transform values"
    ],
    correctAnswer: "Apply map function to values of key-value RDD",
    explanation: "mapValues(func) applies a map function to each value of a key-value RDD, keeping the original keys."
  },
  {
    id: 77,
    question: "What does sort do in Spark?",
    options: [
      "Sort elements using natural or custom ordering",
      "Sort by key",
      "Sort by value",
      "Order elements"
    ],
    correctAnswer: "Sort elements using natural or custom ordering",
    explanation: "sort() sorts the elements of an RDD using either their natural ordering or a custom comparator."
  },
  {
    id: 78,
    question: "What does sortBy do in Spark?",
    options: [
      "Sort by specified key function",
      "Sort by natural order",
      "Sort and group",
      "Custom sort"
    ],
    correctAnswer: "Sort by specified key function",
    explanation: "sortBy(func) sorts elements by applying a key function to each element and using the returned keys for sorting."
  },
  {
    id: 79,
    question: "What is the default storage level when caching in Spark?",
    options: [
      "MEMORY_ONLY",
      "MEMORY_AND_DISK",
      "DISK_ONLY",
      "MEMORY_ONLY_SER"
    ],
    correctAnswer: "MEMORY_ONLY",
    explanation: "The default storage level for caching (using cache() or persist()) is MEMORY_ONLY, which stores data in memory as deserialized Java objects."
  },
  {
    id: 80,
    question: "What is the difference between Spark and Hadoop MapReduce?",
    options: [
      "Spark processes data in memory for faster performance",
      "Spark uses disk-based processing",
      "MapReduce is faster",
      "MapReduce uses memory"
    ],
    correctAnswer: "Spark processes data in memory for faster performance",
    explanation: "Spark's key advantage over Hadoop MapReduce is its ability to process data in memory, avoiding the need to read/write data to disk for each transformation, resulting in significantly faster performance."
  },
  {
    id: 81,
    question: "What is the driver program in Spark?",
    options: [
      "Process that runs the main function and manages Spark application",
      "Worker process",
      "Cluster manager",
      "Executor process"
    ],
    correctAnswer: "Process that runs the main function and manages Spark application",
    explanation: "The driver program runs the main() function of the application and manages the execution of Spark jobs, creating the SparkContext and coordinating task execution."
  },
  {
    id: 82,
    question: "What are executors in Spark?",
    options: [
      "Processes that run tasks and store data",
      "Worker nodes",
      "Cluster managers",
      "Driver processes"
    ],
    correctAnswer: "Processes that run tasks and store data",
    explanation: "Executors are worker processes that run on cluster nodes and are responsible for executing tasks and storing data (RDDs, cached data) for the Spark application."
  },
  {
    id: 83,
    question: "What is the cluster manager in Spark?",
    options: [
      "External service for allocating resources to Spark applications",
      "Process for managing Spark cluster",
      "Driver program",
      "Executor process"
    ],
    correctAnswer: "External service for allocating resources to Spark applications",
    explanation: "The cluster manager is an external service (like YARN, Mesos, or Kubernetes) that allocates resources (CPU, memory) to Spark applications."
  },
  {
    id: 84,
    question: "What is the Spark standalone mode?",
    options: [
      "Built-in cluster manager for Spark",
      "External cluster manager",
      "Single machine mode",
      "Local mode"
    ],
    correctAnswer: "Built-in cluster manager for Spark",
    explanation: "Spark standalone mode is a simple built-in cluster manager that comes with Spark, making it easy to set up a Spark cluster without external dependencies."
  },
  {
    id: 85,
    question: "What is Spark local mode?",
    options: [
      "Run Spark application on a single machine",
      "Run on local cluster",
      "Run on single core",
      "Run without network"
    ],
    correctAnswer: "Run Spark application on a single machine",
    explanation: "In local mode, Spark runs the entire application on a single machine using multiple threads, useful for development and testing."
  }
];
const apacheSpark = {
  id,
  title,
  description,
  category,
  questions
};
const quizzes = [
  kubernetes,
  dataEngineeringBeginner,
  dataEngineeringMidLevel,
  dataStreaming,
  dataLake,
  apacheSpark
];
const categories = [...new Set(quizzes.map((q2) => q2.category))];
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
};
const getRandomQuestions = (allQuestions, count = 20) => {
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
function App() {
  const [currentPage, setCurrentPage] = reactExports.useState("home");
  const [selectedQuiz, setSelectedQuiz] = reactExports.useState(null);
  const [currentQuestion, setCurrentQuestion] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [completed, setCompleted] = reactExports.useState(false);
  const [selectedAnswer, setSelectedAnswer] = reactExports.useState(null);
  const [isAnswered, setIsAnswered] = reactExports.useState(false);
  const [filterCategory, setFilterCategory] = reactExports.useState("all");
  const filteredQuizzes = filterCategory === "all" ? quizzes : quizzes.filter((q2) => q2.category === filterCategory);
  const handleAnswerSelect = reactExports.useCallback((option) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === selectedQuiz?.questions[currentQuestion]?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  }, [isAnswered, selectedQuiz, currentQuestion]);
  const handleNext = reactExports.useCallback(() => {
    if (!selectedQuiz) return;
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setCompleted(true);
    }
  }, [selectedQuiz, currentQuestion]);
  const startQuiz = reactExports.useCallback((quiz) => {
    const quizWithRandomQuestions = {
      ...quiz,
      questions: getRandomQuestions(quiz.questions, 20),
      originalQuestionsCount: quiz.questions.length
    };
    setSelectedQuiz(quizWithRandomQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCurrentPage("quiz");
  }, []);
  const restartQuiz = reactExports.useCallback(() => {
    if (selectedQuiz) {
      startQuiz(selectedQuiz);
    }
  }, [selectedQuiz, startQuiz]);
  const resetQuiz = reactExports.useCallback(() => {
    setCurrentPage("home");
  }, []);
  if (currentPage === "home") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-indigo-600", children: "Get-It" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Master your interview skills" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Practice quizzes • Data Engineering • Real interview questions" }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-4xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-2", children: "Available Quizzes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Select a quiz to start - 20 random questions will be selected" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setFilterCategory("all"),
              className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${filterCategory === "all" ? "bg-indigo-600 text-white" : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"}`,
              children: "All Categories"
            }
          ),
          categories.map((category2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setFilterCategory(category2),
              className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${filterCategory === category2 ? "bg-indigo-600 text-white" : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"}`,
              children: category2
            },
            category2
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredQuizzes.map((quiz) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "card cursor-pointer hover:shadow-lg transition-shadow hover:-translate-y-1",
            onClick: () => startQuiz(quiz),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full", children: quiz.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: quiz.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mb-4", children: quiz.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-400", children: [
                quiz.questions.length,
                " questions available • 20 random per session"
              ] })
            ]
          },
          quiz.id
        )) }),
        filteredQuizzes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "No quizzes found for this category" }) })
      ] })
    ] });
  }
  if (currentPage === "quiz" && selectedQuiz) {
    const question = selectedQuiz.questions[currentQuestion];
    selectedAnswer === question?.correctAnswer;
    const progress = (currentQuestion + (isAnswered ? 1 : 0)) / selectedQuiz.questions.length * 100;
    if (completed) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card max-w-md w-full text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-10 h-10 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800", children: "Quiz Completed!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-2", children: "You scored:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-bold text-indigo-600", children: [
            score,
            "/",
            selectedQuiz.questions.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-400 mt-2", children: [
            Math.round(score / selectedQuiz.questions.length * 100),
            "% Correct"
          ] }),
          selectedQuiz.originalQuestionsCount && selectedQuiz.originalQuestionsCount > selectedQuiz.questions.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-400 mt-2", children: [
            "(Selected from ",
            selectedQuiz.originalQuestionsCount,
            " questions)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: restartQuiz, className: "btn-primary w-full", children: "Try Again (New Random Questions)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetQuiz, className: "btn-secondary w-full", children: "Back to Quizzes" })
        ] })
      ] }) });
    }
    if (!question) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: resetQuiz, className: "flex items-center text-gray-500 hover:text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 mr-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
          "Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-gray-800", children: selectedQuiz.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400", children: [
            "Question ",
            currentQuestion + 1,
            " of ",
            selectedQuiz.questions.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-indigo-600 h-2 rounded-full",
            style: { width: `${progress}%` }
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-800 mb-6", children: question.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: question.options && question.options.map((option, idx) => {
            const isSel = selectedAnswer === option;
            let bgClass = "bg-gray-50 hover:bg-gray-100";
            let borderClass = "border-2 border-transparent";
            let textClass = "text-gray-700";
            if (isAnswered) {
              if (option === question.correctAnswer) {
                bgClass = "bg-green-50";
                borderClass = "border-green-500";
                textClass = "text-green-700";
              } else if (isSel) {
                bgClass = "bg-red-50";
                borderClass = "border-red-500";
                textClass = "text-red-700";
              } else {
                bgClass = "bg-gray-50";
                textClass = "text-gray-400";
              }
            } else if (isSel) {
              bgClass = "bg-indigo-50 border-indigo-500";
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleAnswerSelect(option),
                disabled: isAnswered,
                className: `w-full p-4 rounded-lg border ${borderClass} ${bgClass} transition-colors ${isAnswered ? "cursor-default" : "cursor-pointer hover:border-indigo-300"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium ${textClass}`, children: option }),
                  isAnswered && option === question.correctAnswer && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "float-right text-green-600", children: "✓" }),
                  isAnswered && isSel && option !== question.correctAnswer && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "float-right text-red-600", children: "✗" })
                ]
              },
              idx
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-400", children: [
            "Score: ",
            score
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleNext,
              disabled: !isAnswered,
              className: `btn-primary ${!isAnswered ? "opacity-50 cursor-not-allowed" : ""}`,
              children: currentQuestion < selectedQuiz.questions.length - 1 ? "Next" : "Finish"
            }
          )
        ] }),
        isAnswered && question.explanation && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card mt-6 bg-indigo-50 border border-indigo-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-indigo-800", children: question.explanation })
        ] }) })
      ] })
    ] });
  }
  return null;
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
);
