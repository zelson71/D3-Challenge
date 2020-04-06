!(function(t, e) {
  if ("function" == typeof define && define.amd) define(["d3"], e);
  else if ("object" == typeof module && module.exports) {
    var n = require("d3");
    module.exports = e(n);
  } else t.d3.tip = e(t.d3);
})(this, function(t) {
  return function() {
    function e(t) {
      (b = d(t)), (C = b.createSVGPoint()), document.body.appendChild(T);
    }
    function n() {
      return "n";
    }
    function r() {
      return [0, 0];
    }
    function o() {
      return " ";
    }
    function l() {
      var t = h();
      return { top: t.n.y - T.offsetHeight, left: t.n.x - T.offsetWidth / 2 };
    }
    function i() {
      var t = h();
      return { top: t.s.y, left: t.s.x - T.offsetWidth / 2 };
    }
    function f() {
      var t = h();
      return { top: t.e.y - T.offsetHeight / 2, left: t.e.x };
    }
    function u() {
      var t = h();
      return { top: t.w.y - T.offsetHeight / 2, left: t.w.x - T.offsetWidth };
    }
    function s() {
      var t = h();
      return { top: t.nw.y - T.offsetHeight, left: t.nw.x - T.offsetWidth };
    }
    function a() {
      var t = h();
      return { top: t.ne.y - T.offsetHeight, left: t.ne.x };
    }
    function c() {
      var t = h();
      return { top: t.sw.y, left: t.sw.x - T.offsetWidth };
    }
    function p() {
      var t = h();
      return { top: t.se.y, left: t.e.x };
    }
    function y() {
      var e = t.select(document.createElement("div"));
      return (
        e
          .style("position", "absolute")
          .style("top", 0)
          .style("opacity", 0)
          .style("pointer-events", "none")
          .style("box-sizing", "border-box"),
        e.node()
      );
    }
    function d(t) {
      return (
        (t = t.node()),
        "svg" === t.tagName.toLowerCase() ? t : t.ownerSVGElement
      );
    }
    function m() {
      return (
        null === T && ((T = y()), document.body.appendChild(T)), t.select(T)
      );
    }
    function h() {
      for (
        var e = E || t.event.target;
        "undefined" == typeof e.getScreenCTM && "undefined" === e.parentNode;

      )
        e = e.parentNode;
      var n = {},
        r = e.getScreenCTM(),
        o = e.getBBox(),
        l = o.width,
        i = o.height,
        f = o.x,
        u = o.y;
      return (
        (C.x = f),
        (C.y = u),
        (n.nw = C.matrixTransform(r)),
        (C.x += l),
        (n.ne = C.matrixTransform(r)),
        (C.y += i),
        (n.se = C.matrixTransform(r)),
        (C.x -= l),
        (n.sw = C.matrixTransform(r)),
        (C.y -= i / 2),
        (n.w = C.matrixTransform(r)),
        (C.x += l),
        (n.e = C.matrixTransform(r)),
        (C.x -= l / 2),
        (C.y -= i / 2),
        (n.n = C.matrixTransform(r)),
        (C.y += i),
        (n.s = C.matrixTransform(r)),
        n
      );
    }
    function x(t) {
      return "function" == typeof t
        ? t
        : function() {
            return t;
          };
    }
    var v = n,
      g = r,
      w = o,
      T = y(),
      b = null,
      C = null,
      E = null;
    (e.show = function() {
      var t = Array.prototype.slice.call(arguments);
      t[t.length - 1] instanceof SVGElement && (E = t.pop());
      var n,
        r = w.apply(this, t),
        o = g.apply(this, t),
        l = v.apply(this, t),
        i = m(),
        f = S.length,
        u = document.documentElement.scrollTop || document.body.scrollTop,
        s = document.documentElement.scrollLeft || document.body.scrollLeft;
      for (
        i
          .html(r)
          .style("opacity", 1)
          .style("pointer-events", "all");
        f--;

      )
        i.classed(S[f], !1);
      return (
        (n = H.get(l).apply(this)),
        i
          .classed(l, !0)
          .style("top", n.top + o[0] + u + "px")
          .style("left", n.left + o[1] + s + "px"),
        e
      );
    }),
      (e.hide = function() {
        var t = m();
        return t.style("opacity", 0).style("pointer-events", "none"), e;
      }),
      (e.attr = function(n, r) {
        if (arguments.length < 2 && "string" == typeof n) return m().attr(n);
        var o = Array.prototype.slice.call(arguments);
        return t.selection.prototype.attr.apply(m(), o), e;
      }),
      (e.style = function(n, r) {
        if (arguments.length < 2 && "string" == typeof n) return m().style(n);
        var o = Array.prototype.slice.call(arguments);
        return t.selection.prototype.style.apply(m(), o), e;
      }),
      (e.direction = function(t) {
        return arguments.length ? ((v = null == t ? t : x(t)), e) : v;
      }),
      (e.offset = function(t) {
        return arguments.length ? ((g = null == t ? t : x(t)), e) : g;
      }),
      (e.html = function(t) {
        return arguments.length ? ((w = null == t ? t : x(t)), e) : w;
      }),
      (e.destroy = function() {
        return T && (m().remove(), (T = null)), e;
      });
    var H = t.map({ n: l, s: i, e: f, w: u, nw: s, ne: a, sw: c, se: p }),
      S = H.keys();
    return e;
  };
});
//# sourceMappingURL=d3-tip.min.js.map
