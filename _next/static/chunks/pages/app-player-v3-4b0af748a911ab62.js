(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6710],
  {
    10085: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/app-player-v3",
        function () {
          return t(75239);
        },
      ]);
    },
    57654: function (e, n, t) {
      "use strict";
      t.d(n, {
        y: function () {
          return r;
        },
      });
      var i = t(51438),
        r = (function () {
          function e() {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              t = arguments.length > 1 ? arguments[1] : void 0,
              r = arguments.length > 2 ? arguments[2] : void 0;
            ((0, i.Z)(this, e),
              (this.volume = 1),
              (this.previousVolume = 1),
              (this.volume = n),
              (this.onVolumeChange = t),
              (this.onDisabledChange = r));
          }
          var n = e.prototype;
          return (
            (n.setVolume = function (e) {
              var n;
              (0 === e && (this.previousVolume = this.volume),
                (this.volume = e),
                null === (n = this.onVolumeChange) ||
                  void 0 === n ||
                  n.call(this, e));
            }),
            (n.setDisabled = function (e) {
              var n;
              null === (n = this.onDisabledChange) ||
                void 0 === n ||
                n.call(this, e);
            }),
            (n.getVolume = function () {
              return this.volume;
            }),
            (n.getPreviousVolume = function () {
              return this.previousVolume;
            }),
            (n.mute = function () {
              this.setVolume(0);
            }),
            (n.unmute = function () {
              this.setVolume(this.previousVolume || 1);
            }),
            (n.toggle = function () {
              0 === this.volume ? this.unmute() : this.mute();
            }),
            e
          );
        })();
    },
    91328: function (e, n, t) {
      "use strict";
      var i = t(85893),
        r = t(67294),
        o = t(48566),
        a = t(98842),
        s = t(28055),
        u = t(38824),
        l = t(67814),
        c = t(59417);
      n.Z = function (e) {
        var n = e.qualities,
          t = e.selectedQuality,
          d = e.onQualityChange,
          v = (0, r.useState)(!1),
          m = v[0],
          f = v[1];
        return (0, i.jsxs)(o.Z, {
          direction: "up",
          isOpen: m,
          toggle: function () {
            f(!m);
          },
          id: "quality-selector",
          onMouseEnter: function () {
            f(!0);
          },
          onMouseLeave: function () {
            f(!1);
          },
          children: [
            (0, i.jsx)(a.Z, {
              className: "text-white icon",
              color: "transparent",
              children: (0, i.jsx)(l.G, { icon: c.gr5 }),
            }),
            (0, i.jsx)(s.Z, {
              end: !0,
              style: { right: "-100% !important" },
              dark: !0,
              children: n.map(function (e, n) {
                return (0, i.jsx)(
                  u.Z,
                  {
                    value: e.path,
                    name: e.quality,
                    active: t.quality == e.quality,
                    onClick: d,
                    children: e.quality,
                  },
                  n,
                );
              }),
            }),
          ],
        });
      };
    },
    70789: function (e, n, t) {
      "use strict";
      var i = t(85893),
        r = t(67294);
      n.Z = function (e) {
        var n = e.currentTime,
          t = e.bufferedTime,
          o = e.seekBarDisabled,
          a = e.onTimeChange,
          s = (0, r.useRef)(null),
          u = (0, r.useState)(!1),
          l = u[0],
          c = u[1],
          d = function (e) {
            return s.current
              ? ((e - s.current.getBoundingClientRect().left) /
                  s.current.clientWidth) *
                  100
              : 0;
          },
          v = function (e) {
            if (l) {
              var n = d(e);
              a({ target: { value: n } });
            }
          },
          m = function (e) {
            l && v(e.touches[0].clientX);
          };
        return (
          (0, r.useEffect)(
            function () {
              var e = function () {
                  l && c(!1);
                },
                n = function (e) {
                  l && v(e.clientX);
                };
              return (
                window.addEventListener("mousemove", n),
                window.addEventListener("mouseup", e),
                window.addEventListener("touchmove", m),
                window.addEventListener("touchend", e),
                function () {
                  (window.removeEventListener("mousemove", n),
                    window.removeEventListener("mouseup", e),
                    window.removeEventListener("touchmove", m),
                    window.removeEventListener("touchend", e));
                }
              );
            },
            [l],
          ),
          (0, i.jsx)("div", {
            className: "custom-seek-bar-container",
            onClick: function (e) {
              var n = d(e.clientX);
              a({ target: { value: n } });
            },
            onMouseDown: function () {
              c(!0);
            },
            onTouchStart: function () {
              return c(!0);
            },
            ref: s,
            children: (0, i.jsxs)("div", {
              className: "seek-bar-background",
              children: [
                (0, i.jsx)("div", {
                  className: "seek-bar-progress",
                  style: { width: "".concat(o ? 100 : n, "%") },
                }),
                (0, i.jsx)("div", {
                  className: "seek-bar-buffered",
                  style: { width: "".concat(t, "%") },
                }),
              ],
            }),
          })
        );
      };
    },
    68777: function (e, n, t) {
      "use strict";
      var i = t(85893),
        r = t(67294),
        o = t(48566),
        a = t(98842),
        s = t(28055),
        u = t(38824);
      n.Z = function (e) {
        var n = e.speed,
          t = e.onSpeedChange,
          l = (0, r.useState)(!1),
          c = l[0],
          d = l[1];
        return (0, i.jsxs)(o.Z, {
          id: "speed-control",
          direction: "up",
          isOpen: c,
          toggle: function () {
            d(!c);
          },
          onMouseEnter: function () {
            d(!0);
          },
          onMouseLeave: function () {
            d(!1);
          },
          children: [
            (0, i.jsxs)(a.Z, {
              className: "text-white icon",
              color: "transparent",
              children: [n, "x"],
            }),
            (0, i.jsx)(s.Z, {
              end: !0,
              style: { right: "-100% !important" },
              dark: !0,
              className: "max-h-[100px] overflow-auto lg:max-h-none",
              children: [
                { label: "0.5x", value: "0.5" },
                { label: "0.75x", value: "0.75" },
                { label: "1x", value: "1" },
                { label: "1.25x", value: "1.25" },
                { label: "1.5x", value: "1.5" },
                { label: "1.75x", value: "1.75" },
                { label: "2.0x", value: "2" },
                { label: "2.5x", value: "2.5" },
                { label: "3.0x", value: "3" },
                { label: "4.0x", value: "4" },
              ].map(function (e, r) {
                return (0, i.jsx)(
                  u.Z,
                  {
                    active: e.value == n,
                    value: e.value,
                    onClick: t,
                    children: e.label,
                  },
                  e.value,
                );
              }),
            }),
          ],
        });
      };
    },
    43704: function (e, n, t) {
      "use strict";
      var i = t(85893),
        r = t(67294),
        o = t(67814),
        a = t(59417),
        s = t(57654),
        u = t(96076);
      n.Z = function () {
        var e = (0, r.useState)(1),
          n = e[0],
          t = e[1],
          l = (0, r.useState)(!1),
          c = l[0],
          d = l[1],
          v = (0, r.useRef)(null);
        ((0, r.useEffect)(
          function () {
            var e = document.querySelector("video");
            (e && (e.volume = n),
              window.parent !== window &&
                window.parent.postMessage(
                  { type: "VIDEO_VOLUME_UPDATE", volume: n },
                  "*",
                ));
          },
          [n],
        ),
          (0, r.useEffect)(function () {
            var e,
              n = document.querySelector("video"),
              i = (null === n || void 0 === n ? void 0 : n.volume) || 1;
            ((v.current = new s.y(
              i,
              function (e) {
                return t(e);
              },
              function (e) {
                return d(e);
              },
            )),
            window.parent !== window) &&
              window.parent.postMessage(
                {
                  type: "REGISTER_VOLUME_CONTROL",
                  controllerId:
                    null === (e = window.frameElement) || void 0 === e
                      ? void 0
                      : e.id,
                },
                "*",
              );
            ((window._volumeControls = window._volumeControls || new Map()),
              window._volumeControls.set("main", v.current));
            var r = function (e) {
              var n = e.data || {},
                t = n.type,
                i = n.volume,
                r = n.disabled;
              t === u.Rv.SET_VOLUME && v.current
                ? v.current.setVolume(i)
                : t === u.Rv.SET_DISABLED &&
                  v.current &&
                  v.current.setDisabled(r);
            };
            return (
              window.addEventListener("message", r),
              function () {
                var e;
                (null === (e = window._volumeControls) ||
                  void 0 === e ||
                  e.delete("main"),
                  window.removeEventListener("message", r));
              }
            );
          }, []));
        var m = n > 0 ? a.ihg : a.YLJ;
        return (0, i.jsxs)("div", {
          className: "volume-control icon d-flex align-items-center",
          style: { opacity: c ? 0.5 : 1 },
          children: [
            (0, i.jsx)(o.G, {
              icon: m,
              onClick: function () {
                !c && v.current && v.current.toggle();
              },
              style: { cursor: c ? "not-allowed" : "pointer" },
            }),
            (0, i.jsx)("input", {
              type: "range",
              className: "form-range align-top m-2",
              min: "0",
              max: "1",
              step: "0.1",
              value: n,
              onChange: function (e) {
                if (!c && v.current) {
                  var n = parseFloat(e.target.value);
                  v.current.setVolume(n);
                }
              },
              disabled: c,
            }),
          ],
        });
      };
    },
    39154: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(26042),
        r = t(69396),
        o = t(85893),
        a = t(96486),
        s = t(67294),
        u = t(89885),
        l = t(73716),
        c = t(42474),
        d = t.n(c),
        v = t(96076),
        m = {
          display: "block",
          visibility: "visible",
          opacity: "0.1",
          zIndex: "1000",
          fontSize: "0.5rem",
          color: "rgb(128, 128, 128)",
          background: "transparent",
          backgroundColor: "transparent",
          overflow: "visible",
          position: "absolute",
          padding: "0px",
          minWidth: "24px",
          textAlign: "center",
          pointerEvents: "none",
          borderRadius: "0px",
        },
        f = (0, r.Z)((0, i.Z)({}, m), {
          color: "rgb(255, 0, 0)",
          background: "rgb(246, 247, 249)",
          backgroundColor: "rgb(246, 247, 249)",
          opacity: "0.5",
          fontSize: "1.6rem",
          minWidth: "120px",
          padding: "4px 10px",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }),
        p = (0, r.Z)((0, i.Z)({}, m), {
          opacity: "0.1",
          zIndex: "1000",
          fontSize: "0.4rem",
        }),
        g = function (e) {
          var n = window.getComputedStyle(e),
            t = Object.keys(m).reduce(function (e, t) {
              return ((e[t] = n[t]), e);
            }, {});
          return d()
            .createHash("sha256")
            .update(JSON.stringify(t))
            .digest("hex");
        };
      function h(e) {
        var n = (0, s.useContext)(u.Z),
          t = n.currentUser,
          c = n.appConfig,
          d = (0, s.useState)(),
          h = d[0],
          y = d[1],
          w = (0, s.useRef)(""),
          x = function (n) {
            var o, s;
            if (!(0, a.isEmpty)(e.message) || !(0, a.isEmpty)(t)) {
              if (
                !n &&
                !1 ===
                  (function () {
                    var n,
                      i,
                      r,
                      o,
                      s,
                      u,
                      l = document.getElementById("watermark");
                    if (!l) return !1;
                    if (
                      l.hidden ||
                      l.clientHeight < (e.isAdmin ? 40 : 10) ||
                      l.clientWidth < (e.isAdmin ? 120 : 20)
                    )
                      return !1;
                    if (l.style.display !== p.display) return !1;
                    if (l.style.visibility !== p.visibility) return !1;
                    if (Number(l.style.opacity) < Number(p.opacity)) return !1;
                    if (Number(l.style.zIndex) < Number(p.zIndex)) return !1;
                    if (l.style.fontSize !== p.fontSize) return !1;
                    if (l.style.color !== p.color) return !1;
                    if (l.style.background !== p.background) return !1;
                    if (l.style.position !== p.position) return !1;
                    if (l.style.padding !== p.padding) return !1;
                    if (
                      [
                        "right",
                        "bottom",
                        "maxHeight",
                        "maxWidth",
                        "margin",
                        "marginTop",
                        "marginBottom",
                        "marginLeft",
                        "marginRight",
                        "scale",
                        "transform",
                        "translate",
                        "contentVisibility",
                        "contain",
                        "clipPath",
                        "webkitTransform",
                      ].some(function (e) {
                        return !(!l.style[e] || (0, a.isEmpty)(l.style[e]));
                      })
                    )
                      return !1;
                    var c = Number(
                        null === (n = l.style.top) || void 0 === n
                          ? void 0
                          : n.replace("%", ""),
                      ),
                      d = Number(
                        null === (i = l.style.left) || void 0 === i
                          ? void 0
                          : i.replace("%", ""),
                      );
                    if (
                      !(null === (r = l.style.top) || void 0 === r
                        ? void 0
                        : r.endsWith("%")) ||
                      !(null === (o = l.style.left) || void 0 === o
                        ? void 0
                        : o.endsWith("%")) ||
                      c < 0 ||
                      c > 100 ||
                      d < 0 ||
                      d > 100
                    )
                      return !1;
                    var v =
                      e.message ||
                      ""
                        .concat(
                          null === (s = t.email) || void 0 === s
                            ? void 0
                            : s.trim(),
                          "\n",
                        )
                        .concat(
                          null === (u = t.phone) || void 0 === u
                            ? void 0
                            : u.trim(),
                        );
                    if (l.innerText !== v) return !1;
                    var f = g(l);
                    if (!w.current) return ((w.current = f), !0);
                    var h = f === w.current;
                    if (!h) {
                      var y = window.getComputedStyle(l);
                      Object.keys(m).forEach(function (e) {
                        y[e];
                      });
                    }
                    return h;
                  })()
              )
                return (window.parent.location, void window.location);
              var u = document.getElementById("watermark");
              if (h) {
                (u || (u = document.createElement("div")),
                  (u.id = "watermark"));
                var l = (0, a.random)(0, 85),
                  d = (0, a.random)(5, 90);
                ((u.innerText =
                  e.message ||
                  ""
                    .concat(
                      null === (o = t.email) || void 0 === o
                        ? void 0
                        : o.trim(),
                      "\n",
                    )
                    .concat(
                      null === (s = t.phone) || void 0 === s
                        ? void 0
                        : s.trim(),
                    )),
                  (u.hidden = !1));
                var v = e.isAdmin
                    ? 50
                    : !(0, a.isEmpty)(c.web_videowatermarkopacity) &&
                        c.web_videowatermarkopacity > 0
                      ? c.web_videowatermarkopacity
                      : 10,
                  y = (0, r.Z)((0, i.Z)({}, e.isAdmin ? f : m), {
                    left: "".concat(l, "%"),
                    top: "".concat(d, "%"),
                    opacity: "".concat(v, "%"),
                  });
                (Object.assign(u.style, y),
                  h.appendChild(u),
                  (w.current = g(u)));
              }
            }
          };
        return (
          (0, s.useEffect)(function () {
            window.addEventListener("message", function (e) {
              e.data.event === v.Rv.DEBUG_MODE_VALUE &&
                (window.__debugMode = e.data.value);
            });
          }, []),
          (0, s.useEffect)(
            function () {
              if (!(0, a.isEmpty)(e.message) || !(0, a.isEmpty)(t)) {
                var n = document.getElementById("watermark"),
                  i = n.parentNode;
                y(i);
              }
            },
            [e.message, t],
          ),
          (0, s.useEffect)(
            function () {
              if (h) {
                x(!0);
                var e = (0, l.XR)(x, 2e4);
                return function () {
                  e.cancel();
                };
              }
            },
            [h],
          ),
          (0, o.jsx)("div", { id: "watermark" })
        );
      }
    },
    75239: function (e, n, t) {
      "use strict";
      (t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        }));
      var i = t(47568),
        r = t(26042),
        o = t(97582),
        a = t(85893),
        s = t(67294),
        u = t(59417),
        l = t(67814),
        c = t(3751),
        d = (t(73716), t(91328)),
        v = t(70789),
        m = t(68777),
        f = t(39154),
        p = t(91444),
        g = t(84082),
        h = t(43704),
        y = t(96076),
        w = t(57654),
        x = t(76585),
        b = t(84902);
      function E(e) {
        var n = function (e) {
            var n = document.getElementById("videojs"),
              t = {};
            console.log("App Player Version Code: ".concat("1.1.1.3"));
            var i = (0, b.Z)(e, ".mp4");
            t =
              k && !i
                ? {
                    autoplay: !1,
                    controls: !1,
                    liveui: !1,
                    responsive: !0,
                    preload: "auto",
                    fluid: !0,
                    html5: {
                      nativeAudioTracks: !0,
                      nativeVideoTracks: !0,
                      nativeTextTracks: !0,
                      vhs: {
                        experimentalLLHLS: !0,
                        experimentalBufferBasedABR: !0,
                      },
                    },
                  }
                : {
                    autoplay: !1,
                    controls: !1,
                    responsive: !0,
                    preload: "auto",
                    fluid: !T,
                    html5: {
                      vhs: { overrideNative: !0 },
                      nativeAudioTracks: !1,
                      nativeVideoTracks: !1,
                    },
                  };
            var o = window.videojs(n, t, function (t) {
                var i,
                  a =
                    null === (i = ie.current) || void 0 === i
                      ? void 0
                      : i.getElementsByTagName("video")[0];
                if (a) {
                  var s = new w.y(
                    a.volume,
                    function (e) {
                      a.volume = e;
                    },
                    function (e) {
                      var n = document.querySelector(".volume-control");
                      n &&
                        ((n.style.opacity = e ? "0.5" : "1"),
                        (n.style.pointerEvents = e ? "none" : "auto"));
                    },
                  );
                  ((window._volumeControls =
                    window._volumeControls || new Map()),
                    window._volumeControls.set(
                      (null === n || void 0 === n ? void 0 : n.id) || "player",
                      s,
                    ),
                    a.addEventListener("timeupdate", de),
                    a.addEventListener("loadedmetadata", function () {
                      (console.log("loadedmetadata called"),
                        (a.playbackRate = q),
                        o
                          .play()
                          .then(function (e) {
                            (R(!0), X(!1));
                          })
                          .catch(function (e) {
                            X(!0);
                          }));
                    }),
                    o.off("error"),
                    o.on("error", function () {
                      var n = o.error();
                      if (
                        (n && console.log("VIDEO_PLAYER: ON-ERROR", n),
                        n &&
                          3 === n.code &&
                          navigator.onLine &&
                          r &&
                          ne.current <= 3)
                      ) {
                        console.log("Handling missing chunk error", n);
                        var t = r.findIndex(function (n) {
                          return n.path == e;
                        });
                        (pe({
                          target: {
                            value: r[t == r.length - 1 ? 0 : t + 1].path,
                          },
                        }),
                          (ne.current += 1));
                      }
                    }),
                    o.ready(function () {
                      var e = o.tech();
                      if (e && e.name && e.hls) {
                        var n = {},
                          t = e.hls,
                          i = t.xhr;
                        t.xhr = function (e, r) {
                          if (
                            !e.uri.includes("ck.") ||
                            e.uri.includes("/Android")
                          )
                            return i.call(t, e, r);
                          var o =
                            "ck." + e.uri.split(".").pop().split(/\#|\?/)[0];
                          n[e.uri.includes("ck.") ? o : e.uri]
                            ? r(null, {
                                response: n[e.uri.includes("ck.") ? o : e.uri],
                                responseURL: e,
                                uri: e.uri,
                                responseType: "arraybuffer",
                              })
                            : fetch(e.uri, { headers: { referer: y.AC } })
                                .then(function (e) {
                                  return e.arrayBuffer();
                                })
                                .then(function (t) {
                                (n[e.uri.includes("ck.") ? o : e.uri] = t);
                                //  console.log("============= KEY TRACKER ==============");
                                //  console.log("1. Key kis function me ja rahi hai?: \n", r.toString());
                                    r(null, {
                                      response:
                                        n[e.uri.includes("ck.") ? o : e.uri],
                                      responseURL: e,
                                      uri: e.uri,
                                      responseType: "arraybuffer",
                                    });  
                                })
                                .catch(function (e) {
                                  console.log("⚠️ Server link expired! Injecting offline master key instead.");
                              });
                        };
                      }
                    }),
                    a.addEventListener("ended", function (e) {
                      R(!1);
                    }));
                }
              }),
              a = { type: "application/x-mpegURL", src: e || ue };
            (i && (a = { type: "video/mp4", src: e }),
              e.endsWith(".aac") && (a = { type: "audio/aac", src: e }),
              o.src(a));
          },
          t = function () {
            var e,
              n =
                null === (e = ie.current) || void 0 === e
                  ? void 0
                  : e.getElementsByTagName("video")[0];
            if ((p.Am.error("Network disconnected."), n.buffered.length > 0)) {
              var t = n.buffered.end(0);
              n.currentTime + 5 >= t && n.pause();
            }
          },
          i = function (e) {
            var n;
            (e.preventDefault(), e.stopImmediatePropagation());
            var t =
              null === (n = ie.current) || void 0 === n
                ? void 0
                : n.getElementsByTagName("video")[0];
            (p.Am.success("You are back online."),
              t.paused || t.pause(),
              t.play().catch(function (e) {
                console.error("Error resuming playback:", e);
              }));
          },
          r = e.qualities,
          o = e.seekBarDisabled,
          E = void 0 !== o && o,
          k = e.low_latency_enabled,
          j = e.onBeforeQualityChange,
          N = e.isMobile,
          L = e.disableFluidMode,
          T = void 0 === L || L,
          S = e.isPremier,
          C = void 0 === S ? "0" : S,
          _ = (0, s.useState)(!1),
          B = _[0],
          R = _[1],
          Z = (0, s.useState)(!1),
          D = (Z[0], Z[1], (0, s.useState)(0)),
          I = D[0],
          V = D[1],
          A = (0, s.useState)("00:00/00:00"),
          M = A[0],
          O = A[1],
          P = (0, s.useState)(1),
          q = P[0],
          z = P[1],
          U = (0, s.useState)(!1),
          F = U[0],
          G = U[1],
          Q = (0, s.useState)(!1),
          W = Q[0],
          X = Q[1],
          H = (0, s.useState)(0),
          Y = H[0],
          J = H[1],
          K = (0, s.useState)(e.selectedQuality),
          $ = K[0],
          ee = K[1],
          ne = (0, s.useRef)(0),
          te = (0, c.useTimer)({ autoStart: !1, expiryTimestamp: new Date() }),
          ie = (0, s.useRef)(),
          re = (0, s.useState)(),
          oe = re[0],
          ae = re[1],
          se = (0, s.useState)(),
          ue = se[0],
          le = se[1],
          ce = (0, c.useTimer)({
            autoStart: !0,
            expiryTimestamp: new Date().setSeconds(
              new Date().getSeconds() + y.kL,
            ),
            onExpire: function () {
              he();
            },
          }),
          de = function () {
            var e,
              n =
                null === (e = ie.current) || void 0 === e
                  ? void 0
                  : e.getElementsByTagName("video")[0];
            if (n) {
              !(function () {
                var e,
                  n =
                    null === (e = ie.current) || void 0 === e
                      ? void 0
                      : e.getElementsByTagName("video")[0];
                if (n && n.buffered && n.buffered.length > 0) {
                  var t = (100 / n.duration) * n.buffered.end(0);
                  J(t);
                }
              })();
              var t = (100 / n.duration) * n.currentTime;
              if (isNaN(t)) (V(0), O("00:00/00:00"));
              else {
                V(t);
                var i = new Date(1e3 * n.duration).toISOString().substr(11, 8),
                  r = new Date(1e3 * n.currentTime).toISOString().substr(11, 8),
                  o = Math.floor(n.duration / 3600),
                  a = Math.floor(n.currentTime / 3600);
                if (0 != o)
                  if (0 != a) O(r + "/" + i);
                  else {
                    var s = r.split(":");
                    ((r = s[1] + ":" + s[2]), O(r + "/" + i));
                  }
                else {
                  var u = i.split(":");
                  if (((i = u[1] + ":" + u[2]), 0 != a)) O(r + "/" + i);
                  else {
                    var l = r.split(":");
                    ((r = l[1] + ":" + l[2]), O(r + "/" + i));
                  }
                }
              }
            }
          };
        ((0, s.useEffect)(function () {
          window.init_player = function (e, t) { 
          console.log("============= INIT PLAYER ==============");
        //  console.log("init_player : \n", n.toString());
            return (ae(t), n(e), le(e), !0);
          };
        }, []),
          (0, s.useEffect)(function () {
            var e,
              n =
                null === (e = ie.current) || void 0 === e
                  ? void 0
                  : e.getElementsByTagName("video")[0];
            return (
              (n.requestPictureInPicture = function () {}),
              document.addEventListener("keydown", ve),
              (window.onStartupPlay = function () {
                n.play();
              }),
              window.addEventListener("online", i),
              window.addEventListener("offline", t),
              function () {
                (document.removeEventListener("keydown", ve),
                  window.removeEventListener("online", i),
                  window.removeEventListener("offline", t));
              }
            );
          }, []));
        var ve = function (e) {
            "INPUT" != e.target.tagName &&
              ("ArrowLeft" == e.code
                ? (e.preventDefault(), me(-5))
                : "ArrowRight" == e.code
                  ? (e.preventDefault(), me(5))
                  : "Space" == e.code && (e.preventDefault(), fe()));
          },
          me = function (e) {
            var n,
              t =
                null === (n = ie.current) || void 0 === n
                  ? void 0
                  : n.getElementsByTagName("video")[0],
              i = t.currentTime + e;
            t.currentTime = i;
          },
          fe = function () {
            var e;
            if (ue) {
              var n =
                null === (e = ie.current) || void 0 === e
                  ? void 0
                  : e.getElementsByTagName("video")[0];
              (n.paused ? n.play() : n.pause(), R(!n.paused), X(!1), n.paused);
            }
          },
          pe = function (e) {
            var t = e.target.value,
              i = e.target.name,
              o = r.find(function (e) {
                return e.path == t && e.quality == i;
              });
            if (j && !1 === j(o)) return;
            (ee(o), R(!0), n(t));
          },
          ge = function () {
            var e = document.getElementById("hlsplayer");
            if (
              (!e || !e.classList.contains("user-active")) &&
              (e.classList.remove("user-inactive"),
              e.classList.add("user-active"),
              !ce.seconds <= 1)
            ) {
              var n = new Date().setSeconds(new Date().getSeconds() + y.kL);
              ce.restart(n, !0);
            }
          },
          he = function () {
            var e = document.getElementById("hlsplayer");
            e &&
              (e.classList.remove("user-active"),
              e.classList.add("user-inactive"));
          };
        return (0, a.jsxs)("div", {
          id: "hlsplayer",
          ref: ie,
          onClick: function (e) {
            if (!(
              e.target.closest("#hls-player-video-controls") ||
              e.target.closest("#floatingBtns")
            )) {
              var n = document.getElementById("hlsplayer");
              n && n.classList.contains("user-active")
                ? (he(), ce.pause())
                : ge();
            }
          },
          onMouseMove: ge,
          onTouchStart: ge,
          style: { position: "relative" },
          children: [
            (0, a.jsx)(f.Z, { message: oe }, "watermark"),
            (0, a.jsx)("video", {
              id: "videojs",
              style: T ? { height: "100vh" } : { maxHeight: "100vh" },
              className: "video-js vjs-big-play-centered",
              controlsList: "nodownload",
              poster: y.u7,
              disablePictureInPicture: !0,
              onContextMenu: function (e) {
                e.preventDefault();
              },
              playsInline: !0,
              controls: !1,
            }),
            W
              ? (0, a.jsx)(l.G, {
                  icon: u.aQp,
                  size: "3x",
                  className:
                    "position-absolute center opacity-75 cursor-pointer text-gray",
                  onClick: fe,
                })
              : (0, a.jsxs)("div", {
                  id: "floatingBtns",
                  className:
                    "position-absolute center opacity-75 align-items-center",
                  children: [
                    !te.isRunning &&
                      (0, a.jsx)(g.Z, {
                        color: "link",
                        onClick: function () {
                          return me(-10);
                        },
                        children: (0, a.jsx)(l.G, { size: "2x", icon: u.DYF }),
                      }),
                    (0, a.jsx)(g.Z, {
                      color: "link",
                      onClick: fe,
                      children: (0, a.jsx)(l.G, {
                        icon: B ? u.ul5 : u.aQp,
                        size: "3x",
                        className: "mx-4",
                      }),
                    }),
                    !te.isRunning &&
                      (0, a.jsx)(g.Z, {
                        color: "link",
                        onClick: function () {
                          return me(10);
                        },
                        children: (0, a.jsx)(l.G, { size: "2x", icon: u.irl }),
                      }),
                  ],
                }),
            !W &&
              (0, a.jsxs)("div", {
                id: "hls-player-video-controls",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "d-flex align-items-center justify-content-between",
                    children: [
                      "1" != C &&
                        (0, a.jsx)("div", {
                          className:
                            "duration mx-2 font-sm d-md-none text-white",
                          children: M.split("/")[0],
                        }),
                      !te.isRunning &&
                        (0, a.jsx)(v.Z, {
                          currentTime: I,
                          bufferedTime: Y,
                          onTimeChange: function (e) {
                            var n,
                              t =
                                null === (n = ie.current) || void 0 === n
                                  ? void 0
                                  : n.getElementsByTagName("video")[0],
                              i = t.duration * (e.target.value / 100);
                            ((t.currentTime = i), V(e.target.value));
                          },
                          seekBarDisabled: E,
                        }),
                      "1" != C &&
                        (0, a.jsx)("div", {
                          className:
                            "duration mx-2 font-sm d-md-none text-white",
                          children: M.split("/")[1],
                        }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "d-flex align-items-center justify-content-between px-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                          (0, a.jsx)("div", {
                            id: "hls-play-pause",
                            className: "icon",
                            onClick: fe,
                            children: (0, a.jsx)(l.G, {
                              icon: B ? u.XQY : u.zc,
                            }),
                          }),
                          !te.isRunning &&
                            (0, a.jsx)("div", {
                              className: "icon",
                              onClick: function () {
                                return me(-10);
                              },
                              children: (0, a.jsx)("img", {
                                src: "/icons/backwards.svg",
                                alt: "Rewind 10 seconds",
                              }),
                            }),
                          !te.isRunning &&
                            (0, a.jsx)("div", {
                              className: "icon",
                              onClick: function () {
                                return me(10);
                              },
                              children: (0, a.jsx)("img", {
                                src: "/icons/forward.svg",
                                alt: "Forward 10 seconds",
                              }),
                            }),
                          !N && (0, a.jsx)(h.Z, {}),
                          "1" != C &&
                            (0, a.jsx)("div", {
                              className:
                                "duration ms-2 font-sm d-none d-md-block text-white",
                              children: M,
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "speed-di",
                            children: (0, a.jsx)(m.Z, {
                              speed: q,
                              onSpeedChange: function (e) {
                                var n,
                                  t = e.target.value;
                                (((null === (n = ie.current) || void 0 === n
                                  ? void 0
                                  : n.getElementsByTagName("video")[0]
                                ).playbackRate = t),
                                  z(t));
                              },
                            }),
                          }),
                          r &&
                            $ &&
                            r.length > 0 &&
                            (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)(d.Z, {
                                qualities: r,
                                selectedQuality: $,
                                onQualityChange: pe,
                              }),
                            }),
                          (0, a.jsx)("div", {
                            id: "hls-full-screen",
                            className: "icon",
                            style: N ? { visibility: "hidden" } : {},
                            onClick: function () {
                              var e,
                                n = document.getElementById("hlsplayer"),
                                t =
                                  null === (e = ie.current) || void 0 === e
                                    ? void 0
                                    : e.getElementsByTagName("video")[0],
                                i = function () {
                                  document.fullscreenElement ||
                                  document.webkitFullscreenElement
                                    ? G(!0)
                                    : (G(!1), t && t.paused && R(!1));
                                };
                              if (
                                !F &&
                                navigator.userAgent.includes("Mac") &&
                                "ontouchend" in document &&
                                t.webkitEnterFullScreen
                              )
                                return (
                                  console.log("ipad found"),
                                  t.webkitEnterFullScreen(),
                                  void t.addEventListener(
                                    "webkitendfullscreen",
                                    i,
                                  )
                                );
                              document.fullscreenElement
                                ? (document.exitFullscreen(),
                                  screen.orientation.lock &&
                                    screen.orientation.lock("natural"))
                                : ((0, x.Zx)(n, t, i),
                                  screen.orientation.lock &&
                                    screen.orientation.lock(
                                      "landscape-primary",
                                    ));
                            },
                            children: (0, a.jsx)(l.G, {
                              icon: F ? u.Qj4 : u.TL5,
                              className: "me-",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      ((E.getInitialProps = (function () {
        var e = (0, i.Z)(function (e) {
          return (0, o.__generator)(this, function (n) {
            return [2, (0, r.Z)({}, e.query)];
          });
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })()),
        (E.layout = function (e) {
          var n = e.children;
          return (0, a.jsx)("div", { children: n });
        }));
    },
    84902: function (e, n, t) {
      "use strict";
      n.Z = function (e, n) {
        if (!e || "string" !== typeof e) return !1;
        var t = e;
        try {
          var i;
          t = null === (i = new URL(e)) || void 0 === i ? void 0 : i.pathname;
        } catch (r) {
          console.log("error - parsing video url", r);
        }
        return Array.isArray(n)
          ? n.some(function (e) {
              return null === t || void 0 === t ? void 0 : t.endsWith(e);
            })
          : null === t || void 0 === t
            ? void 0
            : t.endsWith(n);
      };
    },
  },
  function (e) {
    e.O(0, [614, 7237, 9774, 2888, 179], function () {
      return ((n = 10085), e((e.s = n)));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
