import {
  __commonJS,
  __require
} from "./chunk-7D4SUZUM.js";

// node_modules/jsuites/dist/jsuites.js
var require_jsuites = __commonJS({
  "node_modules/jsuites/dist/jsuites.js"(exports2, module2) {
    (function(global, factory2) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? module2.exports = factory2() : typeof define === "function" && define.amd ? define(factory2) : global.jSuites = factory2();
    })(exports2, function() {
      var jSuites2;
      (function() {
        var __webpack_modules__2 = {
          /***/
          195: (
            /***/
            function(module3) {
              ;
              (function(global, factory2) {
                true ? module3.exports = factory2() : 0;
              })(this, function() {
                return function(str) {
                  function int64(msint_32, lsint_32) {
                    this.highOrder = msint_32;
                    this.lowOrder = lsint_32;
                  }
                  var H = [
                    new int64(1779033703, 4089235720),
                    new int64(3144134277, 2227873595),
                    new int64(1013904242, 4271175723),
                    new int64(2773480762, 1595750129),
                    new int64(1359893119, 2917565137),
                    new int64(2600822924, 725511199),
                    new int64(528734635, 4215389547),
                    new int64(1541459225, 327033209)
                  ];
                  var K = [
                    new int64(1116352408, 3609767458),
                    new int64(1899447441, 602891725),
                    new int64(3049323471, 3964484399),
                    new int64(3921009573, 2173295548),
                    new int64(961987163, 4081628472),
                    new int64(1508970993, 3053834265),
                    new int64(2453635748, 2937671579),
                    new int64(2870763221, 3664609560),
                    new int64(3624381080, 2734883394),
                    new int64(310598401, 1164996542),
                    new int64(607225278, 1323610764),
                    new int64(1426881987, 3590304994),
                    new int64(1925078388, 4068182383),
                    new int64(2162078206, 991336113),
                    new int64(2614888103, 633803317),
                    new int64(3248222580, 3479774868),
                    new int64(3835390401, 2666613458),
                    new int64(4022224774, 944711139),
                    new int64(264347078, 2341262773),
                    new int64(604807628, 2007800933),
                    new int64(770255983, 1495990901),
                    new int64(1249150122, 1856431235),
                    new int64(1555081692, 3175218132),
                    new int64(1996064986, 2198950837),
                    new int64(2554220882, 3999719339),
                    new int64(2821834349, 766784016),
                    new int64(2952996808, 2566594879),
                    new int64(3210313671, 3203337956),
                    new int64(3336571891, 1034457026),
                    new int64(3584528711, 2466948901),
                    new int64(113926993, 3758326383),
                    new int64(338241895, 168717936),
                    new int64(666307205, 1188179964),
                    new int64(773529912, 1546045734),
                    new int64(1294757372, 1522805485),
                    new int64(1396182291, 2643833823),
                    new int64(1695183700, 2343527390),
                    new int64(1986661051, 1014477480),
                    new int64(2177026350, 1206759142),
                    new int64(2456956037, 344077627),
                    new int64(2730485921, 1290863460),
                    new int64(2820302411, 3158454273),
                    new int64(3259730800, 3505952657),
                    new int64(3345764771, 106217008),
                    new int64(3516065817, 3606008344),
                    new int64(3600352804, 1432725776),
                    new int64(4094571909, 1467031594),
                    new int64(275423344, 851169720),
                    new int64(430227734, 3100823752),
                    new int64(506948616, 1363258195),
                    new int64(659060556, 3750685593),
                    new int64(883997877, 3785050280),
                    new int64(958139571, 3318307427),
                    new int64(1322822218, 3812723403),
                    new int64(1537002063, 2003034995),
                    new int64(1747873779, 3602036899),
                    new int64(1955562222, 1575990012),
                    new int64(2024104815, 1125592928),
                    new int64(2227730452, 2716904306),
                    new int64(2361852424, 442776044),
                    new int64(2428436474, 593698344),
                    new int64(2756734187, 3733110249),
                    new int64(3204031479, 2999351573),
                    new int64(3329325298, 3815920427),
                    new int64(3391569614, 3928383900),
                    new int64(3515267271, 566280711),
                    new int64(3940187606, 3454069534),
                    new int64(4118630271, 4000239992),
                    new int64(116418474, 1914138554),
                    new int64(174292421, 2731055270),
                    new int64(289380356, 3203993006),
                    new int64(460393269, 320620315),
                    new int64(685471733, 587496836),
                    new int64(852142971, 1086792851),
                    new int64(1017036298, 365543100),
                    new int64(1126000580, 2618297676),
                    new int64(1288033470, 3409855158),
                    new int64(1501505948, 4234509866),
                    new int64(1607167915, 987167468),
                    new int64(1816402316, 1246189591)
                  ];
                  var W = new Array(64);
                  var a, b, c, d, e, f, g, h, i2, j;
                  var T1, T2;
                  var charsize = 8;
                  function utf8_encode(str2) {
                    return unescape(encodeURIComponent(str2));
                  }
                  function str2binb(str2) {
                    var bin = [];
                    var mask = (1 << charsize) - 1;
                    var len = str2.length * charsize;
                    for (var i3 = 0; i3 < len; i3 += charsize) {
                      bin[i3 >> 5] |= (str2.charCodeAt(i3 / charsize) & mask) << 32 - charsize - i3 % 32;
                    }
                    return bin;
                  }
                  function binb2hex(binarray2) {
                    var hex_tab = "0123456789abcdef";
                    var str2 = "";
                    var length = binarray2.length * 4;
                    var srcByte;
                    for (var i3 = 0; i3 < length; i3 += 1) {
                      srcByte = binarray2[i3 >> 2] >> (3 - i3 % 4) * 8;
                      str2 += hex_tab.charAt(srcByte >> 4 & 15) + hex_tab.charAt(srcByte & 15);
                    }
                    return str2;
                  }
                  function safe_add_2(x2, y2) {
                    var lsw, msw, lowOrder, highOrder;
                    lsw = (x2.lowOrder & 65535) + (y2.lowOrder & 65535);
                    msw = (x2.lowOrder >>> 16) + (y2.lowOrder >>> 16) + (lsw >>> 16);
                    lowOrder = (msw & 65535) << 16 | lsw & 65535;
                    lsw = (x2.highOrder & 65535) + (y2.highOrder & 65535) + (msw >>> 16);
                    msw = (x2.highOrder >>> 16) + (y2.highOrder >>> 16) + (lsw >>> 16);
                    highOrder = (msw & 65535) << 16 | lsw & 65535;
                    return new int64(highOrder, lowOrder);
                  }
                  function safe_add_4(a2, b2, c2, d2) {
                    var lsw, msw, lowOrder, highOrder;
                    lsw = (a2.lowOrder & 65535) + (b2.lowOrder & 65535) + (c2.lowOrder & 65535) + (d2.lowOrder & 65535);
                    msw = (a2.lowOrder >>> 16) + (b2.lowOrder >>> 16) + (c2.lowOrder >>> 16) + (d2.lowOrder >>> 16) + (lsw >>> 16);
                    lowOrder = (msw & 65535) << 16 | lsw & 65535;
                    lsw = (a2.highOrder & 65535) + (b2.highOrder & 65535) + (c2.highOrder & 65535) + (d2.highOrder & 65535) + (msw >>> 16);
                    msw = (a2.highOrder >>> 16) + (b2.highOrder >>> 16) + (c2.highOrder >>> 16) + (d2.highOrder >>> 16) + (lsw >>> 16);
                    highOrder = (msw & 65535) << 16 | lsw & 65535;
                    return new int64(highOrder, lowOrder);
                  }
                  function safe_add_5(a2, b2, c2, d2, e2) {
                    var lsw, msw, lowOrder, highOrder;
                    lsw = (a2.lowOrder & 65535) + (b2.lowOrder & 65535) + (c2.lowOrder & 65535) + (d2.lowOrder & 65535) + (e2.lowOrder & 65535);
                    msw = (a2.lowOrder >>> 16) + (b2.lowOrder >>> 16) + (c2.lowOrder >>> 16) + (d2.lowOrder >>> 16) + (e2.lowOrder >>> 16) + (lsw >>> 16);
                    lowOrder = (msw & 65535) << 16 | lsw & 65535;
                    lsw = (a2.highOrder & 65535) + (b2.highOrder & 65535) + (c2.highOrder & 65535) + (d2.highOrder & 65535) + (e2.highOrder & 65535) + (msw >>> 16);
                    msw = (a2.highOrder >>> 16) + (b2.highOrder >>> 16) + (c2.highOrder >>> 16) + (d2.highOrder >>> 16) + (e2.highOrder >>> 16) + (lsw >>> 16);
                    highOrder = (msw & 65535) << 16 | lsw & 65535;
                    return new int64(highOrder, lowOrder);
                  }
                  function maj(x2, y2, z) {
                    return new int64(
                      x2.highOrder & y2.highOrder ^ x2.highOrder & z.highOrder ^ y2.highOrder & z.highOrder,
                      x2.lowOrder & y2.lowOrder ^ x2.lowOrder & z.lowOrder ^ y2.lowOrder & z.lowOrder
                    );
                  }
                  function ch(x2, y2, z) {
                    return new int64(
                      x2.highOrder & y2.highOrder ^ ~x2.highOrder & z.highOrder,
                      x2.lowOrder & y2.lowOrder ^ ~x2.lowOrder & z.lowOrder
                    );
                  }
                  function rotr(x2, n) {
                    if (n <= 32) {
                      return new int64(
                        x2.highOrder >>> n | x2.lowOrder << 32 - n,
                        x2.lowOrder >>> n | x2.highOrder << 32 - n
                      );
                    } else {
                      return new int64(
                        x2.lowOrder >>> n | x2.highOrder << 32 - n,
                        x2.highOrder >>> n | x2.lowOrder << 32 - n
                      );
                    }
                  }
                  function sigma0(x2) {
                    var rotr28 = rotr(x2, 28);
                    var rotr34 = rotr(x2, 34);
                    var rotr39 = rotr(x2, 39);
                    return new int64(
                      rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
                      rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
                    );
                  }
                  function sigma1(x2) {
                    var rotr14 = rotr(x2, 14);
                    var rotr18 = rotr(x2, 18);
                    var rotr41 = rotr(x2, 41);
                    return new int64(
                      rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
                      rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
                    );
                  }
                  function gamma0(x2) {
                    var rotr1 = rotr(x2, 1), rotr8 = rotr(x2, 8), shr7 = shr(x2, 7);
                    return new int64(
                      rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
                      rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
                    );
                  }
                  function gamma1(x2) {
                    var rotr19 = rotr(x2, 19);
                    var rotr61 = rotr(x2, 61);
                    var shr6 = shr(x2, 6);
                    return new int64(
                      rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
                      rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
                    );
                  }
                  function shr(x2, n) {
                    if (n <= 32) {
                      return new int64(
                        x2.highOrder >>> n,
                        x2.lowOrder >>> n | x2.highOrder << 32 - n
                      );
                    } else {
                      return new int64(
                        0,
                        x2.highOrder << 32 - n
                      );
                    }
                  }
                  var str = utf8_encode(str);
                  var strlen = str.length * charsize;
                  str = str2binb(str);
                  str[strlen >> 5] |= 128 << 24 - strlen % 32;
                  str[(strlen + 128 >> 10 << 5) + 31] = strlen;
                  for (var i2 = 0; i2 < str.length; i2 += 32) {
                    a = H[0];
                    b = H[1];
                    c = H[2];
                    d = H[3];
                    e = H[4];
                    f = H[5];
                    g = H[6];
                    h = H[7];
                    for (var j = 0; j < 80; j++) {
                      if (j < 16) {
                        W[j] = new int64(str[j * 2 + i2], str[j * 2 + i2 + 1]);
                      } else {
                        W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]);
                      }
                      T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
                      T2 = safe_add_2(sigma0(a), maj(a, b, c));
                      h = g;
                      g = f;
                      f = e;
                      e = safe_add_2(d, T1);
                      d = c;
                      c = b;
                      b = a;
                      a = safe_add_2(T1, T2);
                    }
                    H[0] = safe_add_2(a, H[0]);
                    H[1] = safe_add_2(b, H[1]);
                    H[2] = safe_add_2(c, H[2]);
                    H[3] = safe_add_2(d, H[3]);
                    H[4] = safe_add_2(e, H[4]);
                    H[5] = safe_add_2(f, H[5]);
                    H[6] = safe_add_2(g, H[6]);
                    H[7] = safe_add_2(h, H[7]);
                  }
                  var binarray = [];
                  for (var i2 = 0; i2 < H.length; i2++) {
                    binarray.push(H[i2].highOrder);
                    binarray.push(H[i2].lowOrder);
                  }
                  return binb2hex(binarray);
                };
              });
            }
          )
          /******/
        };
        var __webpack_module_cache__2 = {};
        function __webpack_require__2(moduleId) {
          var cachedModule = __webpack_module_cache__2[moduleId];
          if (cachedModule !== void 0) {
            return cachedModule.exports;
          }
          var module3 = __webpack_module_cache__2[moduleId] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          __webpack_modules__2[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__2);
          return module3.exports;
        }
        !function() {
          __webpack_require__2.n = function(module3) {
            var getter = module3 && module3.__esModule ? (
              /******/
              function() {
                return module3["default"];
              }
            ) : (
              /******/
              function() {
                return module3;
              }
            );
            __webpack_require__2.d(getter, { a: getter });
            return getter;
          };
        }();
        !function() {
          __webpack_require__2.d = function(exports3, definition) {
            for (var key in definition) {
              if (__webpack_require__2.o(definition, key) && !__webpack_require__2.o(exports3, key)) {
                Object.defineProperty(exports3, key, { enumerable: true, get: definition[key] });
              }
            }
          };
        }();
        !function() {
          __webpack_require__2.o = function(obj2, prop) {
            return Object.prototype.hasOwnProperty.call(obj2, prop);
          };
        }();
        var __webpack_exports__2 = {};
        !function() {
          "use strict";
          __webpack_require__2.d(__webpack_exports__2, {
            "default": function() {
              return (
                /* binding */
                jsuites
              );
            }
          });
          ;
          var setDictionary = function(d) {
            if (!document.dictionary) {
              document.dictionary = {};
            }
            var t = null;
            var i2 = null;
            var k = Object.keys(d);
            for (i2 = 0; i2 < k.length; i2++) {
              document.dictionary[k[i2]] = d[k[i2]];
            }
          };
          var translate = function(t) {
            if (typeof document !== "undefined" && document.dictionary) {
              return document.dictionary[t] || t;
            } else {
              return t;
            }
          };
          var dictionary = { setDictionary, translate };
          ;
          const Tracking = function(component2, state) {
            if (state === true) {
              window["jSuitesStateControl"] = window["jSuitesStateControl"].filter(function(v) {
                return v !== null;
              });
              setTimeout(function() {
                window["jSuitesStateControl"].push(component2);
              }, 0);
            } else {
              var index = window["jSuitesStateControl"].indexOf(component2);
              if (index >= 0) {
                window["jSuitesStateControl"].splice(index, 1);
              }
            }
          };
          var tracking = Tracking;
          ;
          var Helpers2 = {};
          Helpers2.two = function(value2) {
            value2 = "" + value2;
            if (value2.length == 1) {
              value2 = "0" + value2;
            }
            return value2;
          };
          Helpers2.focus = function(el2) {
            if (el2.innerText.length) {
              var range = document.createRange();
              var sel = window.getSelection();
              var node = el2.childNodes[el2.childNodes.length - 1];
              range.setStart(node, node.length);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
              el2.scrollLeft = el2.scrollWidth;
            }
          };
          Helpers2.isNumeric = function(num) {
            if (typeof num === "string") {
              num = num.trim();
            }
            return !isNaN(num) && num !== null && num !== "";
          };
          Helpers2.guid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
              return v.toString(16);
            });
          };
          Helpers2.getNode = function() {
            var node = document.getSelection().anchorNode;
            if (node) {
              return node.nodeType == 3 ? node.parentNode : node;
            } else {
              return null;
            }
          };
          Helpers2.hash = function(str) {
            var hash = 0, i2, chr;
            if (str.length === 0) {
              return hash;
            } else {
              for (i2 = 0; i2 < str.length; i2++) {
                chr = str.charCodeAt(i2);
                if (chr > 32) {
                  hash = (hash << 5) - hash + chr;
                  hash |= 0;
                }
              }
            }
            return hash;
          };
          Helpers2.randomColor = function(h) {
            var lum = -0.25;
            var hex = String("#" + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, "");
            if (hex.length < 6) {
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            var rgb = [], c, i2;
            for (i2 = 0; i2 < 3; i2++) {
              c = parseInt(hex.substr(i2 * 2, 2), 16);
              c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
              rgb.push(("00" + c).substr(c.length));
            }
            if (h == true) {
              return "#" + Helpers2.two(rgb[0].toString(16)) + Helpers2.two(rgb[1].toString(16)) + Helpers2.two(rgb[2].toString(16));
            }
            return rgb;
          };
          Helpers2.getWindowWidth = function() {
            var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], x2 = w.innerWidth || e.clientWidth || g.clientWidth;
            return x2;
          };
          Helpers2.getWindowHeight = function() {
            var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], y2 = w.innerHeight || e.clientHeight || g.clientHeight;
            return y2;
          };
          Helpers2.getPosition = function(e) {
            if (e.changedTouches && e.changedTouches[0]) {
              var x2 = e.changedTouches[0].pageX;
              var y2 = e.changedTouches[0].pageY;
            } else {
              var x2 = window.Event ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
              var y2 = window.Event ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
            }
            return [x2, y2];
          };
          Helpers2.click = function(el2) {
            if (el2.click) {
              el2.click();
            } else {
              var evt = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window
              });
              el2.dispatchEvent(evt);
            }
          };
          Helpers2.findElement = function(element, condition) {
            var foundElement = false;
            function path(element2) {
              if (element2 && !foundElement) {
                if (typeof condition == "function") {
                  foundElement = condition(element2);
                } else if (typeof condition == "string") {
                  if (element2.classList && element2.classList.contains(condition)) {
                    foundElement = element2;
                  }
                }
              }
              if (element2.parentNode && !foundElement) {
                path(element2.parentNode);
              }
            }
            path(element);
            return foundElement;
          };
          var helpers = Helpers2;
          ;
          function Path(str, val, remove) {
            str = str.split(".");
            if (str.length) {
              let o = this;
              let p = null;
              while (str.length > 1) {
                p = str.shift();
                if (o.hasOwnProperty(p)) {
                  o = o[p];
                } else {
                  if (typeof val === "undefined") {
                    return void 0;
                  } else {
                    o[p] = {};
                    o = o[p];
                  }
                }
              }
              p = str.shift();
              if (typeof val !== "undefined") {
                if (remove === true) {
                  delete o[p];
                } else {
                  o[p] = val;
                }
                return true;
              } else {
                if (o) {
                  return o[p];
                }
              }
            }
            return false;
          }
          ;
          function Sorting(el2, options2) {
            var obj2 = {};
            obj2.options = {};
            var defaults2 = {
              pointer: null,
              direction: null,
              ondragstart: null,
              ondragend: null,
              ondrop: null
            };
            var dragElement = null;
            for (var property2 in defaults2) {
              if (options2 && options2.hasOwnProperty(property2)) {
                obj2.options[property2] = options2[property2];
              } else {
                obj2.options[property2] = defaults2[property2];
              }
            }
            el2.classList.add("jsorting");
            el2.addEventListener("dragstart", function(e) {
              let target = e.target;
              if (target.nodeType === 3) {
                if (target.parentNode.getAttribute("draggable") === "true") {
                  target = target.parentNode;
                } else {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
              }
              if (target.getAttribute("draggable") === "true") {
                let position2 = Array.prototype.indexOf.call(target.parentNode.children, target);
                dragElement = {
                  element: target,
                  o: position2,
                  d: position2
                };
                target.style.opacity = "0.25";
                if (typeof obj2.options.ondragstart == "function") {
                  obj2.options.ondragstart(el2, target, e);
                }
                e.dataTransfer.setDragImage(target, 0, 0);
              }
            });
            el2.addEventListener("dragover", function(e) {
              e.preventDefault();
              if (dragElement) {
                if (getElement(e.target)) {
                  if (e.target.getAttribute("draggable") == "true" && dragElement.element != e.target) {
                    if (!obj2.options.direction) {
                      var condition = e.target.clientHeight / 2 > e.offsetY;
                    } else {
                      var condition = e.target.clientWidth / 2 > e.offsetX;
                    }
                    if (condition) {
                      e.target.parentNode.insertBefore(dragElement.element, e.target);
                    } else {
                      e.target.parentNode.insertBefore(dragElement.element, e.target.nextSibling);
                    }
                    dragElement.d = Array.prototype.indexOf.call(e.target.parentNode.children, dragElement.element);
                  }
                }
              }
            });
            el2.addEventListener("dragleave", function(e) {
              e.preventDefault();
            });
            el2.addEventListener("dragend", function(e) {
              e.preventDefault();
              if (dragElement) {
                if (typeof obj2.options.ondragend == "function") {
                  obj2.options.ondragend(el2, dragElement.element, e);
                }
                if (dragElement.o < dragElement.d) {
                  e.target.parentNode.insertBefore(dragElement.element, e.target.parentNode.children[dragElement.o]);
                } else {
                  e.target.parentNode.insertBefore(dragElement.element, e.target.parentNode.children[dragElement.o].nextSibling);
                }
                dragElement.element.style.opacity = "";
                dragElement = null;
              }
            });
            el2.addEventListener("drop", function(e) {
              e.preventDefault();
              if (dragElement) {
                if (dragElement.o !== dragElement.d) {
                  if (typeof obj2.options.ondrop == "function") {
                    obj2.options.ondrop(el2, dragElement.o, dragElement.d, dragElement.element, e.target, e);
                  }
                }
                dragElement.element.style.opacity = "";
                dragElement = null;
              }
            });
            var getElement = function(element) {
              var sorting = false;
              function path(element2) {
                if (element2.className) {
                  if (element2.classList.contains("jsorting")) {
                    sorting = true;
                  }
                }
                if (!sorting) {
                  path(element2.parentNode);
                }
              }
              path(element);
              return sorting;
            };
            for (var i2 = 0; i2 < el2.children.length; i2++) {
              if (!el2.children[i2].hasAttribute("draggable")) {
                el2.children[i2].setAttribute("draggable", "true");
              }
            }
            el2.val = function() {
              var id = null;
              var data = [];
              for (var i3 = 0; i3 < el2.children.length; i3++) {
                if (id = el2.children[i3].getAttribute("data-id")) {
                  data.push(id);
                }
              }
              return data;
            };
            return el2;
          }
          ;
          function LazyLoading(el2, options2) {
            var obj2 = {};
            if (!options2.loadUp || typeof options2.loadUp != "function") {
              options2.loadUp = function() {
                return false;
              };
            }
            if (!options2.loadDown || typeof options2.loadDown != "function") {
              options2.loadDown = function() {
                return false;
              };
            }
            if (!options2.timer) {
              options2.timer = 100;
            }
            var timeControlLoading = null;
            var scrollControls = function(e) {
              if (timeControlLoading == null) {
                var event = false;
                var scrollTop = el2.scrollTop;
                if (el2.scrollTop + el2.clientHeight * 2 >= el2.scrollHeight) {
                  if (options2.loadDown()) {
                    if (scrollTop == el2.scrollTop) {
                      el2.scrollTop = el2.scrollTop - el2.clientHeight;
                    }
                    event = true;
                  }
                } else if (el2.scrollTop <= el2.clientHeight) {
                  if (options2.loadUp()) {
                    if (scrollTop == el2.scrollTop) {
                      el2.scrollTop = el2.scrollTop + el2.clientHeight;
                    }
                    event = true;
                  }
                }
                timeControlLoading = setTimeout(function() {
                  timeControlLoading = null;
                }, options2.timer);
                if (event) {
                  if (typeof options2.onupdate == "function") {
                    options2.onupdate();
                  }
                }
              }
            };
            el2.onscroll = function(e) {
              scrollControls(e);
            };
            el2.onwheel = function(e) {
              scrollControls(e);
            };
            return obj2;
          }
          ;
          function Ajax() {
            var Component = function(options2, complete) {
              if (Array.isArray(options2)) {
                var multiple = {
                  instance: [],
                  complete
                };
                if (options2.length > 0) {
                  for (var i2 = 0; i2 < options2.length; i2++) {
                    options2[i2].multiple = multiple;
                    multiple.instance.push(Component(options2[i2]));
                  }
                }
                return multiple;
              }
              if (!options2.data) {
                options2.data = {};
              }
              if (options2.type) {
                options2.method = options2.type;
              }
              if (!options2.method) {
                options2.method = "GET";
              }
              if (!options2.dataType) {
                options2.dataType = "json";
              }
              if (options2.data) {
                var parseData = function(value2, key) {
                  var vars2 = [];
                  if (value2) {
                    var keys = Object.keys(value2);
                    if (keys.length) {
                      for (var i3 = 0; i3 < keys.length; i3++) {
                        if (key) {
                          var k2 = key + "[" + keys[i3] + "]";
                        } else {
                          var k2 = keys[i3];
                        }
                        if (value2[k2] instanceof FileList) {
                          vars2[k2] = value2[keys[i3]];
                        } else if (value2[keys[i3]] === null || value2[keys[i3]] === void 0) {
                          vars2[k2] = "";
                        } else if (typeof value2[keys[i3]] == "object") {
                          var r = parseData(value2[keys[i3]], k2);
                          var o = Object.keys(r);
                          for (var j2 = 0; j2 < o.length; j2++) {
                            vars2[o[j2]] = r[o[j2]];
                          }
                        } else {
                          vars2[k2] = value2[keys[i3]];
                        }
                      }
                    }
                  }
                  return vars2;
                };
                var d = parseData(options2.data);
                var k = Object.keys(d);
                if (options2.method == "GET") {
                  if (k.length) {
                    var data = [];
                    for (var i2 = 0; i2 < k.length; i2++) {
                      data.push(k[i2] + "=" + encodeURIComponent(d[k[i2]]));
                    }
                    if (options2.url.indexOf("?") < 0) {
                      options2.url += "?";
                    }
                    options2.url += data.join("&");
                  }
                } else {
                  var data = new FormData();
                  for (var i2 = 0; i2 < k.length; i2++) {
                    if (d[k[i2]] instanceof FileList) {
                      if (d[k[i2]].length) {
                        for (var j = 0; j < d[k[i2]].length; j++) {
                          data.append(k[i2], d[k[i2]][j], d[k[i2]][j].name);
                        }
                      }
                    } else {
                      data.append(k[i2], d[k[i2]]);
                    }
                  }
                }
              }
              var httpRequest = new XMLHttpRequest();
              httpRequest.open(options2.method, options2.url, true);
              if (options2.contentType) {
                httpRequest.setRequestHeader("Content-Type", options2.contentType);
              }
              if (options2.method === "POST") {
                httpRequest.setRequestHeader("Accept", "application/json");
              } else {
                if (options2.dataType === "blob") {
                  httpRequest.responseType = "blob";
                } else {
                  if (!options2.contentType) {
                    if (options2.dataType === "json") {
                      httpRequest.setRequestHeader("Content-Type", "text/json");
                    } else if (options2.dataType === "html") {
                      httpRequest.setRequestHeader("Content-Type", "text/html");
                    }
                  }
                }
              }
              if (options2.cache !== true) {
                httpRequest.setRequestHeader("pragma", "no-cache");
                httpRequest.setRequestHeader("cache-control", "no-cache");
              }
              if (options2.withCredentials === true) {
                httpRequest.withCredentials = true;
              }
              if (typeof options2.beforeSend == "function") {
                options2.beforeSend(httpRequest);
              }
              if (typeof Component.beforeSend == "function") {
                Component.beforeSend(httpRequest);
              }
              if (document.ajax && typeof document.ajax.beforeSend == "function") {
                document.ajax.beforeSend(httpRequest);
              }
              httpRequest.onerror = function() {
                if (options2.error && typeof options2.error == "function") {
                  options2.error({
                    message: "Network error: Unable to reach the server.",
                    status: 0
                  });
                }
              };
              httpRequest.ontimeout = function() {
                if (options2.error && typeof options2.error == "function") {
                  options2.error({
                    message: "Request timed out after " + httpRequest.timeout + "ms.",
                    status: 0
                  });
                }
              };
              httpRequest.onload = function() {
                if (httpRequest.status >= 200 && httpRequest.status < 300) {
                  if (options2.dataType === "json") {
                    try {
                      var result = JSON.parse(httpRequest.responseText);
                      if (options2.success && typeof options2.success == "function") {
                        options2.success(result);
                      }
                    } catch (err) {
                      if (options2.error && typeof options2.error == "function") {
                        options2.error(err, result);
                      }
                    }
                  } else {
                    if (options2.dataType === "blob") {
                      var result = httpRequest.response;
                    } else {
                      var result = httpRequest.responseText;
                    }
                    if (options2.success && typeof options2.success == "function") {
                      options2.success(result);
                    }
                  }
                } else {
                  if (options2.error && typeof options2.error == "function") {
                    options2.error(httpRequest.responseText, httpRequest.status);
                  }
                }
                if (Component.queue && Component.queue.length > 0) {
                  Component.send(Component.queue.shift());
                }
                if (Component.requests && Component.requests.length) {
                  var index = Component.requests.indexOf(httpRequest);
                  Component.requests.splice(index, 1);
                  if (!Component.requests.length) {
                    if (options2.complete && typeof options2.complete == "function") {
                      options2.complete(result);
                    }
                  }
                  if (options2.group) {
                    if (Component.oncomplete && typeof Component.oncomplete[options2.group] == "function") {
                      if (!Component.pending(options2.group)) {
                        Component.oncomplete[options2.group]();
                        Component.oncomplete[options2.group] = null;
                      }
                    }
                  }
                  if (options2.multiple && options2.multiple.instance) {
                    var index = options2.multiple.instance.indexOf(httpRequest);
                    options2.multiple.instance.splice(index, 1);
                    if (!options2.multiple.instance.length) {
                      if (options2.multiple.complete && typeof options2.multiple.complete == "function") {
                        options2.multiple.complete(result);
                      }
                    }
                  }
                }
              };
              httpRequest.options = options2;
              httpRequest.data = data;
              if (options2.queue === true && Component.requests.length > 0) {
                Component.queue.push(httpRequest);
              } else {
                Component.send(httpRequest);
              }
              return httpRequest;
            };
            Component.send = function(httpRequest) {
              if (httpRequest.data) {
                if (Array.isArray(httpRequest.data)) {
                  httpRequest.send(httpRequest.data.join("&"));
                } else {
                  httpRequest.send(httpRequest.data);
                }
              } else {
                httpRequest.send();
              }
              Component.requests.push(httpRequest);
            };
            Component.exists = function(url, __callback) {
              var http = new XMLHttpRequest();
              http.open("HEAD", url, false);
              http.send();
              if (http.status) {
                __callback(http.status);
              }
            };
            Component.pending = function(group) {
              var n = 0;
              var o = Component.requests;
              if (o && o.length) {
                for (var i2 = 0; i2 < o.length; i2++) {
                  if (!group || group == o[i2].options.group) {
                    n++;
                  }
                }
              }
              return n;
            };
            Component.oncomplete = {};
            Component.requests = [];
            Component.queue = [];
            return Component;
          }
          var ajax = Ajax();
          ;
          function Animation() {
            const Component = {
              loading: {}
            };
            Component.loading.show = function(timeout) {
              if (!Component.loading.element) {
                Component.loading.element = document.createElement("div");
                Component.loading.element.className = "jloading";
              }
              document.body.appendChild(Component.loading.element);
              if (timeout > 0) {
                setTimeout(function() {
                  Component.loading.hide();
                }, timeout * 1e3);
              }
            };
            Component.loading.hide = function() {
              if (Component.loading.element && Component.loading.element.parentNode) {
                document.body.removeChild(Component.loading.element);
              }
            };
            Component.slideLeft = function(element, direction, done) {
              if (direction == true) {
                element.classList.add("jslide-left-in");
                setTimeout(function() {
                  element.classList.remove("jslide-left-in");
                  if (typeof done == "function") {
                    done();
                  }
                }, 400);
              } else {
                element.classList.add("jslide-left-out");
                setTimeout(function() {
                  element.classList.remove("jslide-left-out");
                  if (typeof done == "function") {
                    done();
                  }
                }, 400);
              }
            };
            Component.slideRight = function(element, direction, done) {
              if (direction === true) {
                element.classList.add("jslide-right-in");
                setTimeout(function() {
                  element.classList.remove("jslide-right-in");
                  if (typeof done == "function") {
                    done();
                  }
                }, 400);
              } else {
                element.classList.add("jslide-right-out");
                setTimeout(function() {
                  element.classList.remove("jslide-right-out");
                  if (typeof done == "function") {
                    done();
                  }
                }, 400);
              }
            };
            Component.slideTop = function(element, direction, done) {
              if (direction === true) {
                element.classList.add("jslide-top-in");
                setTimeout(function() {
                  element.classList.remove("jslide-top-in");
                  if (typeof done == "function") {
                    done();
                  }
                }, 400);
              } else {
                element.classList.add("jslide-top-out");
                setTimeout(function() {
                  element.classList.remove("jslide-top-out");
                  if (typeof done == "function") {
                    done();
                  }
                }, 400);
              }
            };
            Component.slideBottom = function(element, direction, done) {
              if (direction === true) {
                element.classList.add("jslide-bottom-in");
                setTimeout(function() {
                  element.classList.remove("jslide-bottom-in");
                  if (typeof done == "function") {
                    done();
                  }
                }, 400);
              } else {
                element.classList.add("jslide-bottom-out");
                setTimeout(function() {
                  element.classList.remove("jslide-bottom-out");
                  if (typeof done == "function") {
                    done();
                  }
                }, 100);
              }
            };
            Component.fadeIn = function(element, done) {
              element.style.display = "";
              element.classList.add("jfade-in");
              setTimeout(function() {
                element.classList.remove("jfade-in");
                if (typeof done == "function") {
                  done();
                }
              }, 2e3);
            };
            Component.fadeOut = function(element, done) {
              element.classList.add("jfade-out");
              setTimeout(function() {
                element.style.display = "none";
                element.classList.remove("jfade-out");
                if (typeof done == "function") {
                  done();
                }
              }, 1e3);
            };
            return Component;
          }
          var animation = Animation();
          ;
          function HelpersDate() {
            var Component = {};
            Component.now = function(date, dateOnly) {
              var y2 = null;
              var m = null;
              var d = null;
              var h = null;
              var i2 = null;
              var s = null;
              if (Array.isArray(date)) {
                y2 = date[0];
                m = date[1];
                d = date[2];
                h = date[3];
                i2 = date[4];
                s = date[5];
              } else {
                if (!date) {
                  date = /* @__PURE__ */ new Date();
                }
                y2 = date.getFullYear();
                m = date.getMonth() + 1;
                d = date.getDate();
                h = date.getHours();
                i2 = date.getMinutes();
                s = date.getSeconds();
              }
              if (dateOnly == true) {
                return helpers.two(y2) + "-" + helpers.two(m) + "-" + helpers.two(d);
              } else {
                return helpers.two(y2) + "-" + helpers.two(m) + "-" + helpers.two(d) + " " + helpers.two(h) + ":" + helpers.two(i2) + ":" + helpers.two(s);
              }
            };
            Component.toArray = function(value2) {
              var date = value2.split(value2.indexOf("T") !== -1 ? "T" : " ");
              var time = date[1];
              var date = date[0].split("-");
              var y2 = parseInt(date[0]);
              var m = parseInt(date[1]);
              var d = parseInt(date[2]);
              var h = 0;
              var i2 = 0;
              if (time) {
                time = time.split(":");
                h = parseInt(time[0]);
                i2 = parseInt(time[1]);
              }
              return [y2, m, d, h, i2, 0];
            };
            var excelInitialTime = Date.UTC(1900, 0, 0);
            var excelLeapYearBug = Date.UTC(1900, 1, 29);
            var millisecondsPerDay = 864e5;
            Component.dateToNum = function(jsDate) {
              if (typeof jsDate === "string") {
                jsDate = /* @__PURE__ */ new Date(jsDate + "  GMT+0");
              }
              var jsDateInMilliseconds = jsDate.getTime();
              if (jsDateInMilliseconds >= excelLeapYearBug) {
                jsDateInMilliseconds += millisecondsPerDay;
              }
              jsDateInMilliseconds -= excelInitialTime;
              return jsDateInMilliseconds / millisecondsPerDay;
            };
            Component.numToDate = function(excelSerialNumber) {
              var jsDateInMilliseconds = excelInitialTime + excelSerialNumber * millisecondsPerDay;
              if (jsDateInMilliseconds >= excelLeapYearBug) {
                jsDateInMilliseconds -= millisecondsPerDay;
              }
              const d = new Date(jsDateInMilliseconds);
              var date = [
                d.getUTCFullYear(),
                d.getUTCMonth() + 1,
                d.getUTCDate(),
                d.getUTCHours(),
                d.getUTCMinutes(),
                d.getUTCSeconds()
              ];
              return Component.now(date);
            };
            let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            Object.defineProperty(Component, "weekdays", {
              get: function() {
                return weekdays.map(function(v) {
                  return dictionary.translate(v);
                });
              }
            });
            Object.defineProperty(Component, "weekdaysShort", {
              get: function() {
                return weekdays.map(function(v) {
                  return dictionary.translate(v).substring(0, 3);
                });
              }
            });
            Object.defineProperty(Component, "months", {
              get: function() {
                return months.map(function(v) {
                  return dictionary.translate(v);
                });
              }
            });
            Object.defineProperty(Component, "monthsShort", {
              get: function() {
                return months.map(function(v) {
                  return dictionary.translate(v).substring(0, 3);
                });
              }
            });
            return Component;
          }
          var helpers_date = HelpersDate();
          ;
          function Mask() {
            var tokens2 = {
              // Text
              text: ["@"],
              // Currency tokens
              currency: ["#(.{1})##0?(.{1}0+)?( ?;(.*)?)?", "#"],
              // Scientific
              scientific: ["0{1}(.{1}0+)?E{1}\\+0+"],
              // Percentage
              percentage: ["0{1}(.{1}0+)?%"],
              // Number
              numeric: ["0{1}(.{1}0+)?"],
              // Data tokens
              datetime: ["YYYY", "YYY", "YY", "MMMMM", "MMMM", "MMM", "MM", "DDDDD", "DDDD", "DDD", "DD", "DY", "DAY", "WD", "D", "Q", "MONTH", "MON", "HH24", "HH12", "HH", "\\[H\\]", "H", "AM/PM", "MI", "SS", "MS", "Y", "M"],
              // Other
              general: ["A", "0", "[0-9a-zA-Z$]+", "."]
            };
            var getDate = function() {
              if (this.mask.toLowerCase().indexOf("[h]") !== -1) {
                var m = 0;
                if (this.date[4]) {
                  m = parseFloat(this.date[4] / 60);
                }
                var v = parseInt(this.date[3]) + m;
                v /= 24;
              } else if (!(this.date[0] && this.date[1] && this.date[2]) && (this.date[3] || this.date[4])) {
                v = helpers.two(this.date[3]) + ":" + helpers.two(this.date[4]) + ":" + helpers.two(this.date[5]);
              } else {
                if (this.date[0] && this.date[1] && !this.date[2]) {
                  this.date[2] = 1;
                }
                v = helpers.two(this.date[0]) + "-" + helpers.two(this.date[1]) + "-" + helpers.two(this.date[2]);
                if (this.date[3] || this.date[4] || this.date[5]) {
                  v += " " + helpers.two(this.date[3]) + ":" + helpers.two(this.date[4]) + ":" + helpers.two(this.date[5]);
                }
              }
              return v;
            };
            var extractDate = function() {
              var v = "";
              if (!(this.date[0] && this.date[1] && this.date[2]) && (this.date[3] || this.date[4])) {
                if (this.mask.toLowerCase().indexOf("[h]") !== -1) {
                  v = parseInt(this.date[3]);
                } else {
                  let h = parseInt(this.date[3]);
                  if (h < 13 && this.values.indexOf("PM") !== -1) {
                    v = (h + 12) % 24;
                  } else {
                    v = h % 24;
                  }
                }
                if (this.date[4]) {
                  v += parseFloat(this.date[4] / 60);
                }
                if (this.date[5]) {
                  v += parseFloat(this.date[5] / 3600);
                }
                v /= 24;
              } else if (this.date[0] || this.date[1] || this.date[2] || this.date[3] || this.date[4] || this.date[5]) {
                if (this.date[0] && this.date[1] && !this.date[2]) {
                  this.date[2] = 1;
                }
                var t = helpers_date.now(this.date);
                v = helpers_date.dateToNum(t);
                if (this.date[4]) {
                  v += parseFloat(this.date[4] / 60);
                }
              }
              if (isNaN(v)) {
                v = "";
              }
              return v;
            };
            var isBlank = function(v) {
              return v === null || v === "" || v === void 0 ? true : false;
            };
            var isFormula2 = function(value2) {
              var v = ("" + value2)[0];
              return v == "=" ? true : false;
            };
            var isNumeric = function(t) {
              return t === "currency" || t === "percentage" || t === "scientific" || t === "numeric" ? true : false;
            };
            var getDecimal = function(v) {
              if (v && Number(v) == v) {
                return ".";
              } else {
                if (this.options.decimal) {
                  return this.options.decimal;
                } else {
                  if (this.locale) {
                    var t = Intl.NumberFormat(this.locale).format(1.1);
                    return this.options.decimal = t[1];
                  } else {
                    if (!v) {
                      v = this.mask;
                    }
                    var e = new RegExp("0{1}(.{1})0+", "ig");
                    var t = e.exec(v);
                    if (t && t[1] && t[1].length == 1) {
                      this.options.decimal = t[1];
                      return t[1];
                    } else {
                      var e = new RegExp("#{1}(.{1})#+", "ig");
                      var t = e.exec(v);
                      if (t && t[1] && t[1].length == 1) {
                        if (t[1] === ",") {
                          this.options.decimal = ".";
                        } else {
                          this.options.decimal = ",";
                        }
                      } else {
                        this.options.decimal = "1.1".toLocaleString().substring(1, 2);
                      }
                    }
                  }
                }
              }
              if (this.options.decimal) {
                return this.options.decimal;
              } else {
                return null;
              }
            };
            var ParseValue = function(v, decimal) {
              if (v == "") {
                return "";
              }
              if (!decimal) {
                decimal = getDecimal.call(this);
              }
              v = ("" + v).split(decimal);
              var signal = v[0].match(/[-]+/g);
              if (signal && signal.length) {
                signal = true;
              } else {
                signal = false;
              }
              v[0] = v[0].match(/[0-9]+/g);
              if (v[0]) {
                if (signal) {
                  v[0].unshift("-");
                }
                v[0] = v[0].join("");
              } else {
                if (signal) {
                  v[0] = "-";
                }
              }
              if (v[0] || v[1]) {
                if (v[1] !== void 0) {
                  v[1] = v[1].match(/[0-9]+/g);
                  if (v[1]) {
                    v[1] = v[1].join("");
                  } else {
                    v[1] = "";
                  }
                }
              } else {
                return "";
              }
              return v;
            };
            var FormatValue = function(v, event) {
              if (v === "") {
                return "";
              }
              var d = getDecimal.call(this);
              var o = this.options;
              v = ParseValue.call(this, v);
              if (v === "") {
                return "";
              }
              var t = null;
              if (v[0]) {
                if (o.style === "percent") {
                  t = parseFloat(v[0]) / 100;
                } else {
                  t = parseFloat(v[0] + ".1");
                }
              }
              if ((v[0] === "-" || v[0] === "-00") && !v[1] && (event && event.inputType == "deleteContentBackward")) {
                return "";
              }
              var n = new Intl.NumberFormat(this.locale, o).format(t);
              n = n.split(d);
              if (o.style === "percent") {
                if (n[0].indexOf("%") !== -1) {
                  n[0] = n[0].replace("%", "");
                  n[2] = "%";
                }
              }
              if (typeof n[1] !== "undefined") {
                var s = n[1].replace(/[0-9]*/g, "");
                if (s) {
                  n[2] = s;
                }
              }
              if (v[1] !== void 0) {
                n[1] = d + v[1];
              } else {
                n[1] = "";
              }
              return n.join("");
            };
            var Format = function(e, event) {
              var v = Value.call(e);
              if (!v) {
                return;
              }
              var n = FormatValue.call(this, v, event);
              var t = n.length - v.length;
              var index = Caret.call(e) + t;
              Value.call(e, n, index, true);
            };
            var Extract = function(v) {
              var current = ParseValue.call(this, v);
              if (current) {
                if (current[0] === "-") {
                  current[0] = "-0";
                }
                return parseFloat(current.join("."));
              }
              return null;
            };
            var Caret = function(index, adjustNumeric) {
              if (index === void 0) {
                if (this.tagName == "DIV") {
                  var pos = 0;
                  var s = window.getSelection();
                  if (s) {
                    if (s.rangeCount !== 0) {
                      var r = s.getRangeAt(0);
                      var p = r.cloneRange();
                      p.selectNodeContents(this);
                      p.setEnd(r.endContainer, r.endOffset);
                      pos = p.toString().length;
                    }
                  }
                  return pos;
                } else {
                  return this.selectionStart;
                }
              } else {
                var n = Value.call(this);
                if (adjustNumeric) {
                  var p = null;
                  for (var i2 = 0; i2 < n.length; i2++) {
                    if (n[i2].match(/[\-0-9]/g) || n[i2] === "." || n[i2] === ",") {
                      p = i2;
                    }
                  }
                  if (p === null) {
                    p = n.indexOf(" ");
                  }
                  if (index >= p) {
                    index = p + 1;
                  }
                }
                if (index > n.length) {
                  index = n.length;
                }
                if (index) {
                  if (this.tagName == "DIV") {
                    var s = window.getSelection();
                    var r = document.createRange();
                    if (this.childNodes[0]) {
                      r.setStart(this.childNodes[0], index);
                      s.removeAllRanges();
                      s.addRange(r);
                    }
                  } else {
                    this.selectionStart = index;
                    this.selectionEnd = index;
                  }
                }
              }
            };
            var Value = function(v, updateCaret, adjustNumeric) {
              if (this.tagName == "DIV") {
                if (v === void 0) {
                  var v = this.innerText;
                  if (this.value && this.value.length > v.length) {
                    v = this.value;
                  }
                  return v;
                } else {
                  if (this.innerText !== v) {
                    this.innerText = v;
                    if (updateCaret) {
                      Caret.call(this, updateCaret, adjustNumeric);
                    }
                  }
                }
              } else {
                if (v === void 0) {
                  return this.value;
                } else {
                  if (this.value !== v) {
                    this.value = v;
                    if (updateCaret) {
                      Caret.call(this, updateCaret, adjustNumeric);
                    }
                  }
                }
              }
            };
            var weekDaysFull = helpers_date.weekdays;
            var weekDays = helpers_date.weekdaysShort;
            var monthsFull = helpers_date.months;
            var months = helpers_date.monthsShort;
            var parser = {
              "YEAR": function(v, s) {
                var y2 = "" + (/* @__PURE__ */ new Date()).getFullYear();
                if (typeof this.values[this.index] === "undefined") {
                  this.values[this.index] = "";
                }
                if (parseInt(v) >= 0 && parseInt(v) <= 10) {
                  if (this.values[this.index].length < s) {
                    this.values[this.index] += v;
                  }
                }
                if (this.values[this.index].length == s) {
                  if (s == 2) {
                    var y2 = y2.substr(0, 2) + this.values[this.index];
                  } else if (s == 3) {
                    var y2 = y2.substr(0, 1) + this.values[this.index];
                  } else if (s == 4) {
                    var y2 = this.values[this.index];
                  }
                  this.date[0] = y2;
                  this.index++;
                }
              },
              "YYYY": function(v) {
                parser.YEAR.call(this, v, 4);
              },
              "YYY": function(v) {
                parser.YEAR.call(this, v, 3);
              },
              "YY": function(v) {
                parser.YEAR.call(this, v, 2);
              },
              "FIND": function(v, a) {
                if (isBlank(this.values[this.index])) {
                  this.values[this.index] = "";
                }
                if (this.event && this.event.inputType && this.event.inputType.indexOf("delete") > -1) {
                  this.values[this.index] += v;
                  return;
                }
                var pos = 0;
                var count = 0;
                var value2 = (this.values[this.index] + v).toLowerCase();
                for (var i2 = 0; i2 < a.length; i2++) {
                  if (a[i2].toLowerCase().indexOf(value2) == 0) {
                    pos = i2;
                    count++;
                  }
                }
                if (count > 1) {
                  this.values[this.index] += v;
                } else if (count == 1) {
                  var t = a[pos].length - this.values[this.index].length - 1;
                  this.position += t;
                  this.values[this.index] = a[pos];
                  this.index++;
                  return pos;
                }
              },
              "MMM": function(v) {
                var ret = parser.FIND.call(this, v, months);
                if (ret !== void 0) {
                  this.date[1] = ret + 1;
                }
              },
              "MON": function(v) {
                parser["MMM"].call(this, v);
              },
              "MMMM": function(v) {
                var ret = parser.FIND.call(this, v, monthsFull);
                if (ret !== void 0) {
                  this.date[1] = ret + 1;
                }
              },
              "MONTH": function(v) {
                parser["MMMM"].call(this, v);
              },
              "MMMMM": function(v) {
                if (isBlank(this.values[this.index])) {
                  this.values[this.index] = "";
                }
                var pos = 0;
                var count = 0;
                var value2 = (this.values[this.index] + v).toLowerCase();
                for (var i2 = 0; i2 < monthsFull.length; i2++) {
                  if (monthsFull[i2][0].toLowerCase().indexOf(value2) == 0) {
                    this.values[this.index] = monthsFull[i2][0];
                    this.date[1] = i2 + 1;
                    this.index++;
                    break;
                  }
                }
              },
              "MM": function(v) {
                if (isBlank(this.values[this.index])) {
                  if (parseInt(v) > 1 && parseInt(v) < 10) {
                    this.date[1] = this.values[this.index] = "0" + v;
                    this.index++;
                  } else if (parseInt(v) < 2) {
                    this.values[this.index] = v;
                  }
                } else {
                  if (this.values[this.index] == 1 && parseInt(v) < 3) {
                    this.date[1] = this.values[this.index] += v;
                    this.index++;
                  } else if (this.values[this.index] == 0 && parseInt(v) > 0 && parseInt(v) < 10) {
                    this.date[1] = this.values[this.index] += v;
                    this.index++;
                  }
                }
              },
              "M": function(v) {
                var test = false;
                if (parseInt(v) >= 0 && parseInt(v) < 10) {
                  if (isBlank(this.values[this.index])) {
                    this.values[this.index] = v;
                    if (v > 1) {
                      this.date[1] = this.values[this.index];
                      this.index++;
                    }
                  } else {
                    if (this.values[this.index] == 1 && parseInt(v) < 3) {
                      this.date[1] = this.values[this.index] += v;
                      this.index++;
                    } else if (this.values[this.index] == 0 && parseInt(v) > 0) {
                      this.date[1] = this.values[this.index] += v;
                      this.index++;
                    } else {
                      var test = true;
                    }
                  }
                } else {
                  var test = true;
                }
                if (test == true) {
                  var t = parseInt(this.values[this.index]);
                  if (t > 0 && t < 12) {
                    this.date[1] = this.values[this.index];
                    this.index++;
                    this.position--;
                  }
                }
              },
              "D": function(v) {
                var test = false;
                if (parseInt(v) >= 0 && parseInt(v) < 10) {
                  if (isBlank(this.values[this.index])) {
                    this.values[this.index] = v;
                    if (parseInt(v) > 3) {
                      this.date[2] = this.values[this.index];
                      this.index++;
                    }
                  } else {
                    if (this.values[this.index] == 3 && parseInt(v) < 2) {
                      this.date[2] = this.values[this.index] += v;
                      this.index++;
                    } else if (this.values[this.index] == 1 || this.values[this.index] == 2) {
                      this.date[2] = this.values[this.index] += v;
                      this.index++;
                    } else if (this.values[this.index] == 0 && parseInt(v) > 0) {
                      this.date[2] = this.values[this.index] += v;
                      this.index++;
                    } else {
                      var test = true;
                    }
                  }
                } else {
                  var test = true;
                }
                if (test == true) {
                  var t = parseInt(this.values[this.index]);
                  if (t > 0 && t < 32) {
                    this.date[2] = this.values[this.index];
                    this.index++;
                    this.position--;
                  }
                }
              },
              "DD": function(v) {
                if (isBlank(this.values[this.index])) {
                  if (parseInt(v) > 3 && parseInt(v) < 10) {
                    this.date[2] = this.values[this.index] = "0" + v;
                    this.index++;
                  } else if (parseInt(v) < 10) {
                    this.values[this.index] = v;
                  }
                } else {
                  if (this.values[this.index] == 3 && parseInt(v) < 2) {
                    this.date[2] = this.values[this.index] += v;
                    this.index++;
                  } else if ((this.values[this.index] == 1 || this.values[this.index] == 2) && parseInt(v) < 10) {
                    this.date[2] = this.values[this.index] += v;
                    this.index++;
                  } else if (this.values[this.index] == 0 && parseInt(v) > 0 && parseInt(v) < 10) {
                    this.date[2] = this.values[this.index] += v;
                    this.index++;
                  }
                }
              },
              "DDD": function(v) {
                parser.FIND.call(this, v, weekDays);
              },
              "DY": function(v) {
                parser["DDD"].call(this, v);
              },
              "DDDD": function(v) {
                parser.FIND.call(this, v, weekDaysFull);
              },
              "DAY": function(v) {
                parser["DDDD"].call(this, v);
              },
              "HH12": function(v, two) {
                if (isBlank(this.values[this.index])) {
                  if (parseInt(v) > 1 && parseInt(v) < 10) {
                    if (two) {
                      v = 0 + v;
                    }
                    this.date[3] = this.values[this.index] = v;
                    this.index++;
                  } else if (parseInt(v) < 10) {
                    this.values[this.index] = v;
                  }
                } else {
                  if (this.values[this.index] == 1 && parseInt(v) < 3) {
                    this.date[3] = this.values[this.index] += v;
                    this.index++;
                  } else if (this.values[this.index] < 1 && parseInt(v) < 10) {
                    this.date[3] = this.values[this.index] += v;
                    this.index++;
                  }
                }
              },
              "HH24": function(v, two) {
                if (parseInt(v) >= 0 && parseInt(v) < 10) {
                  if (this.values[this.index] == null || this.values[this.index] == "") {
                    if (parseInt(v) > 2 && parseInt(v) < 10) {
                      if (two) {
                        v = 0 + v;
                      }
                      this.date[3] = this.values[this.index] = v;
                      this.index++;
                    } else if (parseInt(v) < 10) {
                      this.values[this.index] = v;
                    }
                  } else {
                    if (this.values[this.index] == 2 && parseInt(v) < 4) {
                      if (!two && this.values[this.index] === "0") {
                        this.values[this.index] = "";
                      }
                      this.date[3] = this.values[this.index] += v;
                      this.index++;
                    } else if (this.values[this.index] < 2 && parseInt(v) < 10) {
                      if (!two && this.values[this.index] === "0") {
                        this.values[this.index] = "";
                      }
                      this.date[3] = this.values[this.index] += v;
                      this.index++;
                    }
                  }
                }
              },
              "HH": function(v) {
                parser["HH24"].call(this, v, 1);
              },
              "H": function(v) {
                parser["HH24"].call(this, v, 0);
              },
              "\\[H\\]": function(v) {
                if (this.values[this.index] == void 0) {
                  this.values[this.index] = "";
                }
                if (v.match(/[0-9]/g)) {
                  this.date[3] = this.values[this.index] += v;
                } else {
                  if (this.values[this.index].match(/[0-9]/g)) {
                    this.date[3] = this.values[this.index];
                    this.index++;
                    this.position--;
                  }
                }
              },
              "N60": function(v, i2) {
                if (this.values[this.index] == null || this.values[this.index] == "") {
                  if (parseInt(v) > 5 && parseInt(v) < 10) {
                    this.date[i2] = this.values[this.index] = "0" + v;
                    this.index++;
                  } else if (parseInt(v) < 10) {
                    this.values[this.index] = v;
                  }
                } else {
                  if (parseInt(v) < 10) {
                    this.date[i2] = this.values[this.index] += v;
                    this.index++;
                  }
                }
              },
              "MI": function(v) {
                parser.N60.call(this, v, 4);
              },
              "SS": function(v) {
                parser.N60.call(this, v, 5);
              },
              "AM/PM": function(v) {
                if (typeof this.values[this.index] === "undefined") {
                  this.values[this.index] = "";
                }
                if (this.values[this.index] === "") {
                  if (v.match(/a/i) && this.date[3] < 13) {
                    this.values[this.index] += "A";
                  } else if (v.match(/p/i)) {
                    this.values[this.index] += "P";
                  }
                } else if (this.values[this.index] === "A" || this.values[this.index] === "P") {
                  this.values[this.index] += "M";
                  this.index++;
                }
              },
              "WD": function(v) {
                if (typeof this.values[this.index] === "undefined") {
                  this.values[this.index] = "";
                }
                if (parseInt(v) >= 0 && parseInt(v) < 7) {
                  this.values[this.index] = v;
                }
                if (this.values[this.index].length == 1) {
                  this.index++;
                }
              },
              "0{1}(.{1}0+)?": function(v) {
                var decimal = getDecimal.call(this);
                var neg = false;
                if (isBlank(this.values[this.index])) {
                  this.values[this.index] = "";
                } else {
                  if (this.values[this.index] == "-") {
                    neg = true;
                  }
                }
                var current = ParseValue.call(this, this.values[this.index], decimal);
                if (current) {
                  this.values[this.index] = current.join(decimal);
                }
                if (parseInt(v) >= 0 && parseInt(v) < 10) {
                  if (this.values[this.index] == "0" && v > 0) {
                    this.values[this.index] = "";
                  } else if (this.values[this.index] == "-0" && v > 0) {
                    this.values[this.index] = "-";
                  }
                  if (this.values[this.index] != "0" && this.values[this.index] != "-0" || v == decimal) {
                    this.values[this.index] += v;
                  }
                } else if (decimal && v == decimal) {
                  if (this.values[this.index].indexOf(decimal) == -1) {
                    if (!this.values[this.index]) {
                      this.values[this.index] = "0";
                    }
                    this.values[this.index] += v;
                  }
                } else if (v == "-") {
                  neg = true;
                }
                if (neg === true && this.values[this.index][0] !== "-") {
                  this.values[this.index] = "-" + this.values[this.index];
                }
              },
              "0{1}(.{1}0+)?E{1}\\+0+": function(v) {
                parser["0{1}(.{1}0+)?"].call(this, v);
              },
              "0{1}(.{1}0+)?%": function(v) {
                parser["0{1}(.{1}0+)?"].call(this, v);
                if (this.values[this.index].match(/[\-0-9]/g)) {
                  if (this.values[this.index] && this.values[this.index].indexOf("%") == -1) {
                    this.values[this.index] += "%";
                  }
                } else {
                  this.values[this.index] = "";
                }
              },
              "#(.{1})##0?(.{1}0+)?( ?;(.*)?)?": function(v) {
                parser["0{1}(.{1}0+)?"].call(this, v);
                var decimal = getDecimal.call(this);
                var separator = this.tokens[this.index].substr(1, 1);
                var negative = this.values[this.index][0] === "-" ? true : false;
                var current = ParseValue.call(this, this.values[this.index], decimal);
                if (current !== "") {
                  var n = current[0].match(/[0-9]/g);
                  if (n) {
                    n = n.join("");
                    var t = [];
                    var s = 0;
                    for (var j = n.length - 1; j >= 0; j--) {
                      t.push(n[j]);
                      s++;
                      if (!(s % 3)) {
                        t.push(separator);
                      }
                    }
                    t = t.reverse();
                    current[0] = t.join("");
                    if (current[0].substr(0, 1) == separator) {
                      current[0] = current[0].substr(1);
                    }
                  } else {
                    current[0] = "";
                  }
                  this.values[this.index] = current.join(decimal);
                  if (negative) {
                    this.values[this.index] = "-" + this.values[this.index];
                  }
                }
              },
              "0": function(v) {
                if (v.match(/[0-9]/g)) {
                  this.values[this.index] = v;
                  this.index++;
                }
              },
              "[0-9a-zA-Z$]+": function(v) {
                if (isBlank(this.values[this.index])) {
                  this.values[this.index] = "";
                }
                var t = this.tokens[this.index];
                var s = this.values[this.index];
                var i2 = s.length;
                if (t[i2] == v) {
                  this.values[this.index] += v;
                  if (this.values[this.index] == t) {
                    this.index++;
                  }
                } else {
                  this.values[this.index] = t;
                  this.index++;
                  if (v.match(/[\-0-9]/g)) {
                    this.position--;
                  }
                }
              },
              "A": function(v) {
                if (v.match(/[a-zA-Z]/gi)) {
                  this.values[this.index] = v;
                  this.index++;
                }
              },
              ".": function(v) {
                parser["[0-9a-zA-Z$]+"].call(this, v);
              },
              "@": function(v) {
                if (isBlank(this.values[this.index])) {
                  this.values[this.index] = "";
                }
                this.values[this.index] += v;
              }
            };
            var getTokens = function(str) {
              if (this.type == "general") {
                var t = [].concat(tokens2.general);
              } else {
                var t = [].concat(tokens2.currency, tokens2.datetime, tokens2.percentage, tokens2.scientific, tokens2.numeric, tokens2.text, tokens2.general);
              }
              var e = new RegExp(t.join("|"), "gi");
              return str.match(e);
            };
            var getMethod = function(str) {
              if (!this.type) {
                var types = Object.keys(tokens2);
              } else if (this.type == "text") {
                var types = ["text"];
              } else if (this.type == "general") {
                var types = ["general"];
              } else if (this.type == "datetime") {
                var types = ["numeric", "datetime", "general"];
              } else {
                var types = ["currency", "percentage", "scientific", "numeric", "general"];
              }
              for (var i2 = 0; i2 < types.length; i2++) {
                var type = types[i2];
                for (var j = 0; j < tokens2[type].length; j++) {
                  var e = new RegExp(tokens2[type][j], "gi");
                  var r = str.match(e);
                  if (r) {
                    return { type, method: tokens2[type][j] };
                  }
                }
              }
            };
            var getMethods = function(t) {
              var result = [];
              for (var i2 = 0; i2 < t.length; i2++) {
                var m = getMethod.call(this, t[i2]);
                if (m) {
                  result.push(m.method);
                } else {
                  result.push(null);
                }
              }
              for (var i2 = 0; i2 < result.length; i2++) {
                if (result[i2] == "MM") {
                  if (result[i2 - 1] && result[i2 - 1].indexOf("H") >= 0) {
                    result[i2] = "MI";
                  } else if (result[i2 - 2] && result[i2 - 2].indexOf("H") >= 0) {
                    result[i2] = "MI";
                  } else if (result[i2 + 1] && result[i2 + 1].indexOf("S") >= 0) {
                    result[i2] = "MI";
                  } else if (result[i2 + 2] && result[i2 + 2].indexOf("S") >= 0) {
                    result[i2] = "MI";
                  }
                }
              }
              return result;
            };
            var getType = function(str) {
              var m = getMethod.call(this, str);
              if (m) {
                var type = m.type;
              }
              if (type) {
                var numeric = 0;
                var t = getTokens.call(this, str);
                for (var i2 = 0; i2 < t.length; i2++) {
                  m = getMethod.call(this, t[i2]);
                  if (m && isNumeric(m.type)) {
                    numeric++;
                  }
                }
                if (numeric > 1) {
                  type = "general";
                }
              }
              return type;
            };
            var parse = function() {
              if (typeof parser[this.methods[this.index]] == "function") {
                parser[this.methods[this.index]].call(this, this.value[this.position]);
                this.position++;
              } else {
                this.values[this.index] = this.tokens[this.index];
                this.index++;
              }
            };
            var toPlainString = function(num) {
              return ("" + +num).replace(
                /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
                function(a, b, c, d, e) {
                  return e < 0 ? b + "0." + Array(1 - e - c.length).join(0) + c + d : b + c + d + Array(e - d.length + 1).join(0);
                }
              );
            };
            var obj2 = function(e, config, returnObject) {
              var r = null;
              var t = null;
              var o = {
                // Element
                input: null,
                // Current value
                value: null,
                // Mask options
                options: {},
                // New values for each token found
                values: [],
                // Token position
                index: 0,
                // Character position
                position: 0,
                // Date raw values
                date: [0, 0, 0, 0, 0, 0],
                // Raw number for the numeric values
                number: 0
              };
              if (typeof e == "object") {
                o.input = e.target;
                o.value = Value.call(e.target);
                o.caret = Caret.call(e.target);
                if (t = e.target.getAttribute("data-mask")) {
                  o.mask = t;
                }
                if (t = e.target.getAttribute("data-type")) {
                  o.type = t;
                }
                if (e.target.mask) {
                  if (e.target.mask.options) {
                    o.options = e.target.mask.options;
                  }
                  if (e.target.mask.locale) {
                    o.locale = e.target.mask.locale;
                  }
                } else {
                  if (t = e.target.getAttribute("data-locale")) {
                    o.locale = t;
                    if (o.mask) {
                      o.options.style = o.mask;
                    }
                  }
                }
                if (e.target.attributes && e.target.attributes.length) {
                  for (var i2 = 0; i2 < e.target.attributes.length; i2++) {
                    var k = e.target.attributes[i2].name;
                    var v = e.target.attributes[i2].value;
                    if (k.substr(0, 4) == "data") {
                      o.options[k.substr(5)] = v;
                    }
                  }
                }
              } else {
                if (typeof config == "string") {
                  o.mask = config;
                } else {
                  var k = Object.keys(config);
                  for (var i2 = 0; i2 < k.length; i2++) {
                    o[k[i2]] = config[k[i2]];
                  }
                }
                if (typeof e === "number") {
                  getDecimal.call(o, o.mask);
                  e = ("" + e).replace(".", o.options.decimal);
                }
                o.value = e;
                if (o.input) {
                  Value.call(o.input, e);
                  helpers.focus(o.input);
                  o.caret = Caret.call(o.input);
                }
              }
              if (!isFormula2(o.value) && (o.mask || o.locale)) {
                if (o.mask) {
                  o.mask = o.mask.replace(new RegExp(/\[h]/), "|h|");
                  o.mask = o.mask.replace(new RegExp(/\[.*?\]/), "");
                  o.mask = o.mask.replace(new RegExp(/\|h\|/), "[h]");
                  if (o.mask.indexOf(";") !== -1) {
                    var t = o.mask.split(";");
                    o.mask = t[0];
                  }
                  if (o.mask.indexOf("##") !== -1) {
                    var d = o.mask.split(";");
                    if (d[0]) {
                      if (typeof e == "object") {
                        d[0] = d[0].replace(new RegExp(/_\)/g), "");
                        d[0] = d[0].replace(new RegExp(/_\(/g), "");
                      }
                      d[0] = d[0].replace("*", "	");
                      d[0] = d[0].replace(new RegExp(/_-/g), "");
                      d[0] = d[0].replace(new RegExp(/_/g), "");
                      d[0] = d[0].replace(new RegExp(/"/g), "");
                      d[0] = d[0].replace("##0.###", "##0.000");
                      d[0] = d[0].replace("##0.##", "##0.00");
                      d[0] = d[0].replace("##0.#", "##0.0");
                      d[0] = d[0].replace("##0,###", "##0,000");
                      d[0] = d[0].replace("##0,##", "##0,00");
                      d[0] = d[0].replace("##0,#", "##0,0");
                    }
                    o.mask = d[0];
                  }
                  if (o.mask.indexOf("\\") !== -1) {
                    var d = o.mask.split(";");
                    d[0] = d[0].replace(new RegExp(/\\/g), "");
                    o.mask = d[0];
                  }
                  if (!o.type) {
                    o.type = getType.call(o, o.mask);
                  }
                  o.tokens = getTokens.call(o, o.mask);
                }
                if (typeof e !== "object" || !e.inputType || !e.inputType.indexOf("insert") || !e.inputType.indexOf("delete")) {
                  if (o.locale) {
                    if (o.input) {
                      Format.call(o, o.input, e);
                    } else {
                      var newValue = FormatValue.call(o, o.value);
                    }
                  } else {
                    o.methods = getMethods.call(o, o.tokens);
                    o.event = e;
                    while (o.position < o.value.length && typeof o.tokens[o.index] !== "undefined") {
                      parse.call(o);
                    }
                    var newValue = o.values.join("");
                    if (isNumeric(o.type) && newValue !== "") {
                      while (typeof o.tokens[o.index] !== "undefined") {
                        var t = getMethod.call(o, o.tokens[o.index]);
                        if (t && t.type == "general") {
                          o.values[o.index] = o.tokens[o.index];
                        }
                        o.index++;
                      }
                      var adjustNumeric = true;
                    } else {
                      var adjustNumeric = false;
                    }
                    newValue = o.values.join("");
                    if (o.input) {
                      t = newValue.length - o.value.length;
                      if (t > 0) {
                        var caret = o.caret + t;
                      } else {
                        var caret = o.caret;
                      }
                      Value.call(o.input, newValue, caret, adjustNumeric);
                    }
                  }
                }
                if (o.input) {
                  var label = null;
                  if (isNumeric(o.type)) {
                    let v2 = Value.call(o.input);
                    o.number = Extract.call(o, v2);
                    if (o.type == "percentage" && ("" + v2).indexOf("%") !== -1) {
                      label = obj2.adjustPrecision(o.number / 100);
                    } else {
                      label = o.number;
                    }
                  } else if (o.type == "datetime") {
                    label = getDate.call(o);
                    if (o.date[0] && o.date[1] && o.date[2]) {
                      o.input.setAttribute("data-completed", true);
                    }
                  }
                  if (label) {
                    o.input.setAttribute("data-value", label);
                  }
                }
                if (newValue !== void 0) {
                  if (returnObject) {
                    return o;
                  } else {
                    return newValue;
                  }
                }
              }
            };
            obj2.adjustPrecision = function(num) {
              if (typeof num === "number" && !Number.isInteger(num)) {
                const v = num.toString().split(".");
                if (v[1] && v[1].length > 10) {
                  let t0 = 0;
                  const t1 = v[1][v[1].length - 2];
                  if (t1 == 0 || t1 == 9) {
                    for (let i2 = v[1].length - 2; i2 > 0; i2--) {
                      if (t0 >= 0 && v[1][i2] == t1) {
                        t0++;
                        if (t0 > 6) {
                          break;
                        }
                      } else {
                        t0 = 0;
                        break;
                      }
                    }
                    if (t0) {
                      return parseFloat(parseFloat(num).toFixed(v[1].length - 1));
                    }
                  }
                }
              }
              return num;
            };
            obj2.getType = getType;
            obj2.prepare = function(str, o) {
              if (!o) {
                o = {};
              }
              return getTokens.call(o, str);
            };
            obj2.apply = function(e) {
              var v = Value.call(e.target);
              if (e.key.length == 1) {
                v += e.key;
              }
              Value.call(e.target, obj2(v, e.target.getAttribute("data-mask")));
            };
            obj2.run = function(value2, mask2, decimal) {
              return obj2(value2, { mask: mask2, decimal });
            };
            obj2.extract = function(v, options2, returnObject) {
              if (isBlank(v)) {
                return v;
              }
              if (typeof options2 != "object") {
                return v;
              } else {
                options2 = Object.assign({}, options2);
                if (!options2.options) {
                  options2.options = {};
                }
              }
              if (!options2.mask && options2.format) {
                options2.mask = options2.format;
              }
              if (options2.mask) {
                if (options2.mask.indexOf(";") !== -1) {
                  var t = options2.mask.split(";");
                  options2.mask = t[0];
                }
                options2.mask = options2.mask.replace(new RegExp(/\[h]/), "|h|");
                options2.mask = options2.mask.replace(new RegExp(/\[.*?\]/), "");
                options2.mask = options2.mask.replace(new RegExp(/\|h\|/), "[h]");
              }
              getDecimal.call(options2, options2.mask);
              var type = null;
              var value2 = null;
              if (options2.type == "percent" || options2.options.style == "percent") {
                type = "percentage";
              } else if (options2.mask) {
                type = getType.call(options2, options2.mask);
              }
              if (type === "general") {
                var o = obj2(v, options2, true);
                value2 = v;
              } else if (type === "datetime") {
                if (v instanceof Date) {
                  v = obj2.getDateString(v, options2.mask);
                }
                var o = obj2(v, options2, true);
                if (helpers.isNumeric(v)) {
                  value2 = v;
                } else {
                  value2 = extractDate.call(o);
                }
              } else if (type === "scientific") {
                value2 = v;
                if (typeof v === "string") {
                  value2 = Number(value2);
                }
                var o = options2;
              } else {
                value2 = Extract.call(options2, v);
                if (type === "percentage" && ("" + v).indexOf("%") !== -1) {
                  value2 /= 100;
                }
                var o = options2;
              }
              o.value = value2;
              if (!o.type && type) {
                o.type = type;
              }
              if (returnObject) {
                return o;
              } else {
                return value2;
              }
            };
            obj2.render = function(value2, options2, fullMask) {
              if (isBlank(value2)) {
                return value2;
              }
              if (typeof options2 != "object") {
                return value2;
              } else {
                options2 = Object.assign({}, options2);
                if (!options2.options) {
                  options2.options = {};
                }
              }
              if (!options2.mask && options2.format) {
                options2.mask = options2.format;
              }
              if (options2.mask) {
                if (options2.mask.indexOf(";") !== -1) {
                  var t = options2.mask.split(";");
                  if (!fullMask) {
                    t[0] = t[0].replace(new RegExp(/_\)/g), "");
                    t[0] = t[0].replace(new RegExp(/_\(/g), "");
                  }
                  options2.mask = t[0];
                }
                options2.mask = options2.mask.replace(new RegExp(/\[h]/), "|h|");
                options2.mask = options2.mask.replace(new RegExp(/\[.*?\]/), "");
                options2.mask = options2.mask.replace(new RegExp(/\|h\|/), "[h]");
              }
              var type = null;
              if (options2.type == "percent" || options2.options.style == "percent") {
                type = "percentage";
              } else if (options2.mask) {
                type = getType.call(options2, options2.mask);
              } else if (value2 instanceof Date) {
                type = "datetime";
              }
              var fillWithBlanks = false;
              if (type == "datetime" || options2.type == "calendar") {
                var t = obj2.getDateString(value2, options2.mask);
                if (t) {
                  value2 = t;
                }
                if (options2.mask && fullMask) {
                  fillWithBlanks = true;
                }
              } else {
                if (typeof value2 === "string" && jSuites2.isNumeric(value2)) {
                  value2 = Number(value2);
                }
                if (type === "percentage") {
                  value2 = obj2.adjustPrecision(value2 * 100);
                }
                if (typeof value2 === "number") {
                  var t = null;
                  if (options2.mask && fullMask) {
                    var d = getDecimal.call(options2, options2.mask);
                    if (type === "scientific") {
                      if (options2.mask.indexOf(d) !== -1) {
                        let exp = options2.mask.split("E");
                        exp = exp[0].split(d);
                        exp = "" + exp[1].match(/[0-9]+/g);
                        exp = exp.length;
                        t = value2.toExponential(exp);
                      } else {
                        t = value2.toExponential(0);
                      }
                    } else {
                      if (options2.mask.indexOf(d) !== -1) {
                        d = options2.mask.split(d);
                        d = "" + d[1].match(/[0-9]+/g);
                        d = d.length;
                        t = value2.toFixed(d);
                        let n = value2.toString().split(".");
                        let fraction = n[1];
                        if (fraction && fraction.length > d && fraction[fraction.length - 1] === "5") {
                          t = parseFloat(n[0] + "." + fraction + "1").toFixed(d);
                        }
                      } else {
                        if (value2.toString().indexOf(d) !== -1) {
                          t = value2.toFixed(0);
                        }
                      }
                      if (("" + t).indexOf("e") !== -1) {
                        t = toPlainString(t);
                      }
                    }
                  } else if (options2.locale && fullMask) {
                    var d = ("" + value2).split(".");
                    if (options2.options) {
                      if (typeof d[1] === "undefined") {
                        d[1] = "";
                      }
                      var len = d[1].length;
                      if (options2.options.minimumFractionDigits > len) {
                        for (var i2 = 0; i2 < options2.options.minimumFractionDigits - len; i2++) {
                          d[1] += "0";
                        }
                      }
                    }
                    if (!d[1].length) {
                      t = d[0];
                    } else {
                      t = d.join(".");
                    }
                    var len = d[1].length;
                    if (options2.options && options2.options.maximumFractionDigits < len) {
                      t = parseFloat(t).toFixed(options2.options.maximumFractionDigits);
                    }
                  } else {
                    t = toPlainString(value2);
                  }
                  if (t !== null) {
                    value2 = t;
                    getDecimal.call(options2, options2.mask);
                    if (options2.options.decimal) {
                      value2 = value2.replace(".", options2.options.decimal);
                    }
                  }
                } else {
                  if (options2.mask && fullMask) {
                    fillWithBlanks = true;
                  }
                }
              }
              if (fillWithBlanks) {
                var s = options2.mask.length - value2.length;
                if (s > 0) {
                  for (var i2 = 0; i2 < s; i2++) {
                    value2 += " ";
                  }
                }
              }
              if (type === "scientific") {
                if (!fullMask) {
                  value2 = toPlainString(value2);
                } else {
                  return value2;
                }
              }
              value2 = obj2(value2, options2);
              if (fullMask && type === "numeric") {
                var maskZeros = options2.mask.match(new RegExp(/^[0]+$/gm));
                if (maskZeros && maskZeros.length === 1) {
                  var maskLength = maskZeros[0].length;
                  if (maskLength > 3) {
                    value2 = "" + value2;
                    while (value2.length < maskLength) {
                      value2 = "0" + value2;
                    }
                  }
                }
              }
              return value2;
            };
            obj2.set = function(e, m) {
              if (m) {
                e.setAttribute("data-mask", m);
                var event = new Event("input", {
                  bubbles: true,
                  cancelable: true
                });
                e.dispatchEvent(event);
              }
            };
            obj2.extractDateFromString = function(date, format) {
              var o = obj2(date, { mask: format }, true);
              if (date > 0 && Number(date) == date && (o.values.join("") !== o.value || o.type == "numeric")) {
                var d = new Date(Math.round((date - 25569) * 86400 * 1e3));
                return d.getFullYear() + "-" + helpers.two(d.getMonth()) + "-" + helpers.two(d.getDate()) + " 00:00:00";
              }
              var complete = false;
              if (o.values && o.values.length === o.tokens.length && o.values[o.values.length - 1].length >= o.tokens[o.tokens.length - 1].length) {
                complete = true;
              }
              if (o.date[0] && o.date[1] && (o.date[2] || complete)) {
                if (!o.date[2]) {
                  o.date[2] = 1;
                }
                return o.date[0] + "-" + helpers.two(o.date[1]) + "-" + helpers.two(o.date[2]) + " " + helpers.two(o.date[3]) + ":" + helpers.two(o.date[4]) + ":" + helpers.two(o.date[5]);
              }
              return "";
            };
            obj2.getDateString = function(value2, options2) {
              if (!options2) {
                var options2 = {};
              }
              if (options2 && typeof options2 == "object") {
                if (options2.format) {
                  var format = options2.format;
                } else if (options2.mask) {
                  var format = options2.mask;
                }
              } else {
                var format = options2;
              }
              if (!format) {
                format = "YYYY-MM-DD";
              }
              if (format.indexOf("[h]") >= 0) {
                var result = 0;
                if (value2 && helpers.isNumeric(value2)) {
                  result = parseFloat(24 * Number(value2));
                  if (format.indexOf("mm") >= 0) {
                    var h = ("" + result).split(".");
                    if (h[1]) {
                      var d = 60 * parseFloat("0." + h[1]);
                      d = parseFloat(d.toFixed(2));
                    } else {
                      var d = 0;
                    }
                    result = parseInt(h[0]) + ":" + helpers.two(d);
                  }
                }
                return result;
              }
              if (value2 instanceof Date) {
                value2 = helpers_date.now(value2);
              } else if (value2 && helpers.isNumeric(value2)) {
                value2 = helpers_date.numToDate(value2);
              }
              var tokens3 = ["DAY", "WD", "DDDD", "DDD", "DD", "D", "Q", "HH24", "HH12", "HH", "H", "AM/PM", "MI", "SS", "MS", "YYYY", "YYY", "YY", "Y", "MONTH", "MON", "MMMMM", "MMMM", "MMM", "MM", "M", "."];
              var e = new RegExp(tokens3.join("|"), "gi");
              var t = format.match(e);
              for (var i2 = 0; i2 < t.length; i2++) {
                if (t[i2].toUpperCase() == "MM") {
                  if (t[i2 - 1] && t[i2 - 1].toUpperCase().indexOf("H") >= 0) {
                    t[i2] = "mi";
                  } else if (t[i2 - 2] && t[i2 - 2].toUpperCase().indexOf("H") >= 0) {
                    t[i2] = "mi";
                  } else if (t[i2 + 1] && t[i2 + 1].toUpperCase().indexOf("S") >= 0) {
                    t[i2] = "mi";
                  } else if (t[i2 + 2] && t[i2 + 2].toUpperCase().indexOf("S") >= 0) {
                    t[i2] = "mi";
                  }
                }
              }
              var o = {
                tokens: t
              };
              if (value2) {
                var d = "" + value2;
                var splitStr = d.indexOf("T") !== -1 ? "T" : " ";
                d = d.split(splitStr);
                var h = 0;
                var m = 0;
                var s = 0;
                if (d[1]) {
                  h = d[1].split(":");
                  m = h[1] ? h[1] : 0;
                  s = h[2] ? h[2] : 0;
                  h = h[0] ? h[0] : 0;
                }
                d = d[0].split("-");
                let day = new Date(d[0], d[1], 0).getDate();
                if (d[0] && d[1] && d[2] && d[0] > 0 && d[1] > 0 && d[1] < 13 && d[2] > 0 && d[2] <= day) {
                  o.data = [d[0], d[1], d[2], h, m, s];
                  o.value = [];
                  var calendar2 = new Date(o.data[0], o.data[1] - 1, o.data[2], o.data[3], o.data[4], o.data[5]);
                  var get = function(i3) {
                    var t2 = this.tokens[i3];
                    var s2 = t2.toUpperCase();
                    var v = null;
                    if (s2 === "YYYY") {
                      v = this.data[0];
                    } else if (s2 === "YYY") {
                      v = this.data[0].substring(1, 4);
                    } else if (s2 === "YY") {
                      v = this.data[0].substring(2, 4);
                    } else if (s2 === "Y") {
                      v = this.data[0].substring(3, 4);
                    } else if (t2 === "MON") {
                      v = helpers_date.months[calendar2.getMonth()].substr(0, 3).toUpperCase();
                    } else if (t2 === "mon") {
                      v = helpers_date.months[calendar2.getMonth()].substr(0, 3).toLowerCase();
                    } else if (t2 === "MONTH") {
                      v = helpers_date.months[calendar2.getMonth()].toUpperCase();
                    } else if (t2 === "month") {
                      v = helpers_date.months[calendar2.getMonth()].toLowerCase();
                    } else if (s2 === "MMMMM") {
                      v = helpers_date.months[calendar2.getMonth()].substr(0, 1);
                    } else if (s2 === "MMMM" || t2 === "Month") {
                      v = helpers_date.months[calendar2.getMonth()];
                    } else if (s2 === "MMM" || t2 == "Mon") {
                      v = helpers_date.months[calendar2.getMonth()].substr(0, 3);
                    } else if (s2 === "MM") {
                      v = helpers.two(this.data[1]);
                    } else if (s2 === "M") {
                      v = calendar2.getMonth() + 1;
                    } else if (t2 === "DAY") {
                      v = helpers_date.weekdays[calendar2.getDay()].toUpperCase();
                    } else if (t2 === "day") {
                      v = helpers_date.weekdays[calendar2.getDay()].toLowerCase();
                    } else if (s2 === "DDDD" || t2 == "Day") {
                      v = helpers_date.weekdays[calendar2.getDay()];
                    } else if (s2 === "DDD") {
                      v = helpers_date.weekdays[calendar2.getDay()].substr(0, 3);
                    } else if (s2 === "DD") {
                      v = helpers.two(this.data[2]);
                    } else if (s2 === "D") {
                      v = parseInt(this.data[2]);
                    } else if (s2 === "Q") {
                      v = Math.floor((calendar2.getMonth() + 3) / 3);
                    } else if (s2 === "HH24" || s2 === "HH") {
                      v = this.data[3];
                      if (v > 12 && this.tokens.indexOf("am/pm") !== -1) {
                        v -= 12;
                      }
                      v = helpers.two(v);
                    } else if (s2 === "HH12") {
                      if (this.data[3] > 12) {
                        v = helpers.two(this.data[3] - 12);
                      } else {
                        v = helpers.two(this.data[3]);
                      }
                    } else if (s2 === "H") {
                      v = this.data[3];
                      if (v > 12 && this.tokens.indexOf("am/pm") !== -1) {
                        v -= 12;
                        v = helpers.two(v);
                      }
                    } else if (s2 === "MI") {
                      v = helpers.two(this.data[4]);
                    } else if (s2 === "SS") {
                      v = helpers.two(this.data[5]);
                    } else if (s2 === "MS") {
                      v = calendar2.getMilliseconds();
                    } else if (s2 === "AM/PM") {
                      if (this.data[3] >= 12) {
                        v = "PM";
                      } else {
                        v = "AM";
                      }
                    } else if (s2 === "WD") {
                      v = helpers_date.weekdays[calendar2.getDay()];
                    }
                    if (v === null) {
                      this.value[i3] = this.tokens[i3];
                    } else {
                      this.value[i3] = v;
                    }
                  };
                  for (var i2 = 0; i2 < o.tokens.length; i2++) {
                    get.call(o, i2);
                  }
                  value2 = o.value.join("");
                } else {
                  value2 = "";
                }
              }
              return value2;
            };
            return obj2;
          }
          var mask = Mask();
          ;
          function Calendar() {
            var Component = function(el2, options2) {
              if (el2.calendar) {
                return el2.calendar.setOptions(options2, true);
              }
              var obj2 = { type: "calendar" };
              obj2.options = {};
              obj2.date = null;
              obj2.setOptions = function(options3, reset) {
                var defaults2 = {
                  // Render type: [ default | year-month-picker ]
                  type: "default",
                  // Restrictions
                  validRange: null,
                  // Starting weekday - 0 for sunday, 6 for saturday
                  startingDay: null,
                  // Date format
                  format: "DD/MM/YYYY",
                  // Allow keyboard date entry
                  readonly: true,
                  // Today is default
                  today: false,
                  // Show timepicker
                  time: false,
                  // Show the reset button
                  resetButton: true,
                  // Placeholder
                  placeholder: "",
                  // Translations can be done here
                  months: helpers_date.monthsShort,
                  monthsFull: helpers_date.months,
                  weekdays: helpers_date.weekdays,
                  textDone: dictionary.translate("Done"),
                  textReset: dictionary.translate("Reset"),
                  textUpdate: dictionary.translate("Update"),
                  // Value
                  value: null,
                  // Fullscreen (this is automatic set for screensize < 800)
                  fullscreen: false,
                  // Create the calendar closed as default
                  opened: false,
                  // Events
                  onopen: null,
                  onclose: null,
                  onchange: null,
                  onupdate: null,
                  // Internal mode controller
                  mode: null,
                  position: null,
                  // Data type
                  dataType: null,
                  // Controls
                  controls: true,
                  // Auto select
                  autoSelect: true
                };
                for (var property2 in defaults2) {
                  if (options3 && options3.hasOwnProperty(property2)) {
                    obj2.options[property2] = options3[property2];
                  } else {
                    if (typeof obj2.options[property2] == "undefined" || reset === true) {
                      obj2.options[property2] = defaults2[property2];
                    }
                  }
                }
                if (obj2.options.resetButton == false) {
                  calendarReset.style.display = "none";
                } else {
                  calendarReset.style.display = "";
                }
                if (obj2.options.readonly) {
                  el2.setAttribute("readonly", "readonly");
                } else {
                  el2.removeAttribute("readonly");
                }
                if (obj2.options.placeholder) {
                  el2.setAttribute("placeholder", obj2.options.placeholder);
                } else {
                  el2.removeAttribute("placeholder");
                }
                if (helpers.isNumeric(obj2.options.value) && obj2.options.value > 0) {
                  obj2.options.value = Component.numToDate(obj2.options.value);
                  obj2.options.dataType = "numeric";
                }
                calendarReset.innerHTML = obj2.options.textReset;
                calendarConfirm.innerHTML = obj2.options.textDone;
                calendarControlsUpdateButton.innerHTML = obj2.options.textUpdate;
                el2.setAttribute("data-mask", obj2.options.format.toLowerCase());
                if (!obj2.options.value && obj2.options.today) {
                  var value2 = Component.now();
                } else {
                  var value2 = obj2.options.value;
                }
                if (value2) {
                  obj2.options.value = null;
                  obj2.setValue(value2);
                }
                return obj2;
              };
              obj2.open = function(value2) {
                if (!calendar2.classList.contains("jcalendar-focus")) {
                  if (!calendar2.classList.contains("jcalendar-inline")) {
                    Component.current = obj2;
                    tracking(obj2, true);
                    obj2.getDays();
                    if (obj2.options.type == "year-month-picker") {
                      obj2.getMonths();
                    }
                    if (obj2.options.time) {
                      calendarSelectHour.value = obj2.date[3];
                      calendarSelectMin.value = obj2.date[4];
                    }
                    calendar2.classList.add("jcalendar-focus");
                    if (helpers.getWindowWidth() < 800 || obj2.options.fullscreen) {
                      calendar2.classList.add("jcalendar-fullsize");
                      animation.slideBottom(calendarContent, 1);
                    } else {
                      calendar2.classList.remove("jcalendar-fullsize");
                      var rect = el2.getBoundingClientRect();
                      var rectContent = calendarContent.getBoundingClientRect();
                      if (obj2.options.position) {
                        calendarContainer.style.position = "fixed";
                        if (window.innerHeight < rect.bottom + rectContent.height) {
                          calendarContainer.style.top = rect.top - (rectContent.height + 2) + "px";
                        } else {
                          calendarContainer.style.top = rect.top + rect.height + 2 + "px";
                        }
                        calendarContainer.style.left = rect.left + "px";
                      } else {
                        if (window.innerHeight < rect.bottom + rectContent.height) {
                          var d = -1 * (rect.height + rectContent.height + 2);
                          if (d + rect.top < 0) {
                            d = -1 * (rect.top + rect.height);
                          }
                          calendarContainer.style.top = d + "px";
                        } else {
                          calendarContainer.style.top = "2px";
                        }
                        if (window.innerWidth < rect.left + rectContent.width) {
                          var d = window.innerWidth - (rect.left + rectContent.width + 20);
                          calendarContainer.style.left = d + "px";
                        } else {
                          calendarContainer.style.left = "0px";
                        }
                      }
                    }
                    if (typeof obj2.options.onopen == "function") {
                      obj2.options.onopen(el2);
                    }
                  }
                }
              };
              obj2.close = function(ignoreEvents, update) {
                if (obj2.options.autoSelect !== true && typeof update === "undefined") {
                  update = false;
                }
                if (calendar2.classList.contains("jcalendar-focus")) {
                  if (update !== false) {
                    var element = calendar2.querySelector(".jcalendar-selected");
                    if (typeof update == "string") {
                      var value2 = update;
                    } else if (!element || element.classList.contains("jcalendar-disabled")) {
                      var value2 = obj2.options.value;
                    } else {
                      var value2 = obj2.getValue();
                    }
                    obj2.setValue(value2);
                  } else {
                    let value3 = obj2.options.value || "";
                    obj2.options.value = null;
                    obj2.setValue(value3);
                  }
                  if (!ignoreEvents && typeof obj2.options.onclose == "function") {
                    obj2.options.onclose(el2);
                  }
                  calendar2.classList.remove("jcalendar-focus");
                  tracking(obj2, false);
                  Component.current = null;
                }
                return obj2.options.value;
              };
              obj2.prev = function() {
                if (obj2.options.mode == "years") {
                  obj2.date[0] = obj2.date[0] - 12;
                  obj2.getYears();
                } else if (obj2.options.mode == "months") {
                  obj2.date[0] = parseInt(obj2.date[0]) - 1;
                  obj2.getMonths();
                } else {
                  if (obj2.date[1] < 2) {
                    obj2.date[0] = obj2.date[0] - 1;
                    obj2.date[1] = 12;
                  } else {
                    obj2.date[1] = obj2.date[1] - 1;
                  }
                  obj2.getDays();
                }
              };
              obj2.next = function() {
                if (obj2.options.mode == "years") {
                  obj2.date[0] = parseInt(obj2.date[0]) + 12;
                  obj2.getYears();
                } else if (obj2.options.mode == "months") {
                  obj2.date[0] = parseInt(obj2.date[0]) + 1;
                  obj2.getMonths();
                } else {
                  if (obj2.date[1] > 11) {
                    obj2.date[0] = parseInt(obj2.date[0]) + 1;
                    obj2.date[1] = 1;
                  } else {
                    obj2.date[1] = parseInt(obj2.date[1]) + 1;
                  }
                  obj2.getDays();
                }
              };
              obj2.setToday = function() {
                var value2 = (/* @__PURE__ */ new Date()).toISOString().substr(0, 10);
                obj2.setValue(value2);
                return value2;
              };
              obj2.setValue = function(val) {
                if (!val) {
                  val = "" + val;
                }
                var newValue = val;
                var oldValue = obj2.options.value;
                if (oldValue != newValue) {
                  if (!newValue) {
                    obj2.date = null;
                    var val = "";
                    el2.classList.remove("jcalendar_warning");
                    el2.title = "";
                  } else {
                    var value2 = obj2.setLabel(newValue, obj2.options);
                    var date = newValue.split(" ");
                    if (!date[1]) {
                      date[1] = "00:00:00";
                    }
                    var time = date[1].split(":");
                    var date = date[0].split("-");
                    var y2 = parseInt(date[0]);
                    var m = parseInt(date[1]);
                    var d = parseInt(date[2]);
                    var h = parseInt(time[0]);
                    var i2 = parseInt(time[1]);
                    obj2.date = [y2, m, d, h, i2, 0];
                    var val = obj2.setLabel(newValue, obj2.options);
                    var current = Component.now(new Date(y2, m - 1, d), true);
                    if (obj2.options.validRange) {
                      if (!obj2.options.validRange[0] || current >= obj2.options.validRange[0]) {
                        var test1 = true;
                      } else {
                        var test1 = false;
                      }
                      if (!obj2.options.validRange[1] || current <= obj2.options.validRange[1]) {
                        var test2 = true;
                      } else {
                        var test2 = false;
                      }
                      if (!(test1 && test2)) {
                        el2.classList.add("jcalendar_warning");
                        el2.title = dictionary.translate("Date outside the valid range");
                      } else {
                        el2.classList.remove("jcalendar_warning");
                        el2.title = "";
                      }
                    } else {
                      el2.classList.remove("jcalendar_warning");
                      el2.title = "";
                    }
                  }
                  obj2.options.value = newValue;
                  if (typeof obj2.options.onchange == "function") {
                    obj2.options.onchange(el2, newValue, oldValue);
                  }
                  if (el2.value != val) {
                    el2.value = val;
                    if (typeof el2.oninput == "function") {
                      el2.oninput({
                        type: "input",
                        target: el2,
                        value: el2.value
                      });
                    }
                  }
                }
                if (obj2.date) {
                  obj2.getDays();
                  if (obj2.options.type == "year-month-picker") {
                    obj2.getMonths();
                  }
                }
              };
              obj2.getValue = function() {
                if (obj2.date) {
                  if (obj2.options.time) {
                    return helpers.two(obj2.date[0]) + "-" + helpers.two(obj2.date[1]) + "-" + helpers.two(obj2.date[2]) + " " + helpers.two(obj2.date[3]) + ":" + helpers.two(obj2.date[4]) + ":" + helpers.two(0);
                  } else {
                    return helpers.two(obj2.date[0]) + "-" + helpers.two(obj2.date[1]) + "-" + helpers.two(obj2.date[2]) + " " + helpers.two(0) + ":" + helpers.two(0) + ":" + helpers.two(0);
                  }
                } else {
                  return "";
                }
              };
              obj2.update = function(element, v) {
                if (element.classList.contains("jcalendar-disabled")) {
                } else {
                  var elements = calendar2.querySelector(".jcalendar-selected");
                  if (elements) {
                    elements.classList.remove("jcalendar-selected");
                  }
                  element.classList.add("jcalendar-selected");
                  if (element.classList.contains("jcalendar-set-month")) {
                    obj2.date[1] = v;
                    obj2.date[2] = 1;
                  } else {
                    obj2.date[2] = element.innerText;
                  }
                  if (!obj2.options.time) {
                    obj2.close(null, true);
                  } else {
                    obj2.date[3] = calendarSelectHour.value;
                    obj2.date[4] = calendarSelectMin.value;
                  }
                }
                updateActions();
              };
              obj2.reset = function() {
                obj2.setValue("");
                obj2.date = null;
                obj2.close(false, false);
              };
              obj2.getDays = function() {
                obj2.options.mode = "days";
                var date = /* @__PURE__ */ new Date();
                var year = obj2.date && helpers.isNumeric(obj2.date[0]) ? obj2.date[0] : parseInt(date.getFullYear());
                var month = obj2.date && helpers.isNumeric(obj2.date[1]) ? obj2.date[1] : parseInt(date.getMonth()) + 1;
                var day = obj2.date && helpers.isNumeric(obj2.date[2]) ? obj2.date[2] : parseInt(date.getDate());
                var hour = obj2.date && helpers.isNumeric(obj2.date[3]) ? obj2.date[3] : parseInt(date.getHours());
                var min = obj2.date && helpers.isNumeric(obj2.date[4]) ? obj2.date[4] : parseInt(date.getMinutes());
                obj2.date = [year, month, day, hour, min, 0];
                calendarLabelYear.innerHTML = year;
                calendarLabelMonth.innerHTML = obj2.options.months[month - 1];
                var isCurrentMonthAndYear = date.getMonth() == month - 1 && date.getFullYear() == year ? true : false;
                var currentDay = date.getDate();
                var date = new Date(year, month, 0, 0, 0);
                var numberOfDays = date.getDate();
                var date = new Date(year, month - 1, 0, 0, 0);
                var firstDay = date.getDay() + 1;
                var index = obj2.options.startingDay || 0;
                firstDay = firstDay - index;
                calendarBody.innerHTML = "";
                var row = document.createElement("tr");
                row.setAttribute("align", "center");
                calendarBody.appendChild(row);
                for (var i2 = 0; i2 < 7; i2++) {
                  var cell = document.createElement("td");
                  cell.classList.add("jcalendar-weekday");
                  cell.innerHTML = obj2.options.weekdays[index].substr(0, 1);
                  row.appendChild(cell);
                  index++;
                  if (index > 6) {
                    index = 0;
                  }
                }
                var index = 0;
                var d = 0;
                for (var j = 0; j < 6; j++) {
                  var row = document.createElement("tr");
                  row.setAttribute("align", "center");
                  row.style.height = "34px";
                  for (var i2 = 0; i2 < 7; i2++) {
                    var cell = document.createElement("td");
                    cell.classList.add("jcalendar-set-day");
                    if (index >= firstDay && index < firstDay + numberOfDays) {
                      d++;
                      cell.innerHTML = d;
                      if (d == day) {
                        cell.classList.add("jcalendar-selected");
                      }
                      if (isCurrentMonthAndYear && currentDay == d) {
                        cell.style.fontWeight = "bold";
                      }
                      var current = Component.now(new Date(year, month - 1, d), true);
                      if (obj2.options.validRange) {
                        if (!obj2.options.validRange[0] || current >= obj2.options.validRange[0]) {
                          var test1 = true;
                        } else {
                          var test1 = false;
                        }
                        if (!obj2.options.validRange[1] || current <= obj2.options.validRange[1]) {
                          var test2 = true;
                        } else {
                          var test2 = false;
                        }
                        if (!(test1 && test2)) {
                          cell.classList.add("jcalendar-disabled");
                        }
                      }
                    }
                    row.appendChild(cell);
                    index++;
                  }
                  calendarBody.appendChild(row);
                }
                if (obj2.options.time) {
                  calendarControlsTime.style.display = "";
                } else {
                  calendarControlsTime.style.display = "none";
                }
                updateActions();
              };
              obj2.getMonths = function() {
                obj2.options.mode = "months";
                var months = obj2.options.months;
                var value2 = obj2.options.value;
                var date = /* @__PURE__ */ new Date();
                var currentYear = parseInt(date.getFullYear());
                var currentMonth = parseInt(date.getMonth()) + 1;
                var selectedYear = obj2.date && helpers.isNumeric(obj2.date[0]) ? obj2.date[0] : currentYear;
                var selectedMonth = obj2.date && helpers.isNumeric(obj2.date[1]) ? obj2.date[1] : currentMonth;
                calendarLabelYear.innerHTML = obj2.date[0];
                calendarLabelMonth.innerHTML = months[selectedMonth - 1];
                var table = document.createElement("table");
                table.setAttribute("width", "100%");
                var row = null;
                for (var i2 = 0; i2 < 12; i2++) {
                  if (!(i2 % 4)) {
                    var row = document.createElement("tr");
                    row.setAttribute("align", "center");
                    table.appendChild(row);
                  }
                  var cell = document.createElement("td");
                  cell.classList.add("jcalendar-set-month");
                  cell.setAttribute("data-value", i2 + 1);
                  cell.innerText = months[i2];
                  if (obj2.options.validRange) {
                    var current = selectedYear + "-" + helpers.two(i2 + 1);
                    if (!obj2.options.validRange[0] || current >= obj2.options.validRange[0].substr(0, 7)) {
                      var test1 = true;
                    } else {
                      var test1 = false;
                    }
                    if (!obj2.options.validRange[1] || current <= obj2.options.validRange[1].substr(0, 7)) {
                      var test2 = true;
                    } else {
                      var test2 = false;
                    }
                    if (!(test1 && test2)) {
                      cell.classList.add("jcalendar-disabled");
                    }
                  }
                  if (i2 + 1 == selectedMonth) {
                    cell.classList.add("jcalendar-selected");
                  }
                  if (currentYear == selectedYear && i2 + 1 == currentMonth) {
                    cell.style.fontWeight = "bold";
                  }
                  row.appendChild(cell);
                }
                calendarBody.innerHTML = '<tr><td colspan="7"></td></tr>';
                calendarBody.children[0].children[0].appendChild(table);
                updateActions();
              };
              obj2.getYears = function() {
                obj2.options.mode = "years";
                var date = /* @__PURE__ */ new Date();
                var currentYear = date.getFullYear();
                var selectedYear = obj2.date && helpers.isNumeric(obj2.date[0]) ? obj2.date[0] : parseInt(date.getFullYear());
                var y2 = [];
                for (var i2 = 0; i2 < 25; i2++) {
                  y2[i2] = parseInt(obj2.date[0]) + (i2 - 12);
                }
                var table = document.createElement("table");
                table.setAttribute("width", "100%");
                for (var i2 = 0; i2 < 25; i2++) {
                  if (!(i2 % 5)) {
                    var row = document.createElement("tr");
                    row.setAttribute("align", "center");
                    table.appendChild(row);
                  }
                  var cell = document.createElement("td");
                  cell.classList.add("jcalendar-set-year");
                  cell.innerText = y2[i2];
                  if (selectedYear == y2[i2]) {
                    cell.classList.add("jcalendar-selected");
                  }
                  if (currentYear == y2[i2]) {
                    cell.style.fontWeight = "bold";
                  }
                  row.appendChild(cell);
                }
                calendarBody.innerHTML = '<tr><td colspan="7"></td></tr>';
                calendarBody.firstChild.firstChild.appendChild(table);
                updateActions();
              };
              obj2.setLabel = function(value2, mixed) {
                return Component.getDateString(value2, mixed);
              };
              obj2.fromFormatted = function(value2, format) {
                return Component.extractDateFromString(value2, format);
              };
              var mouseUpControls = function(e) {
                var element = helpers.findElement(e.target, "jcalendar-container");
                if (element) {
                  var action = e.target.className;
                  if (action == "jcalendar-prev") {
                    obj2.prev();
                  } else if (action == "jcalendar-next") {
                    obj2.next();
                  } else if (action == "jcalendar-month") {
                    obj2.getMonths();
                  } else if (action == "jcalendar-year") {
                    obj2.getYears();
                  } else if (action == "jcalendar-set-year") {
                    obj2.date[0] = e.target.innerText;
                    if (obj2.options.type == "year-month-picker") {
                      obj2.getMonths();
                    } else {
                      obj2.getDays();
                    }
                  } else if (e.target.classList.contains("jcalendar-set-month")) {
                    var month = parseInt(e.target.getAttribute("data-value"));
                    if (obj2.options.type == "year-month-picker") {
                      obj2.update(e.target, month);
                    } else {
                      obj2.date[1] = month;
                      obj2.getDays();
                    }
                  } else if (action == "jcalendar-confirm" || action == "jcalendar-update" || action == "jcalendar-close") {
                    obj2.close(null, true);
                  } else if (action == "jcalendar-backdrop") {
                    obj2.close(false, false);
                  } else if (action == "jcalendar-reset") {
                    obj2.reset();
                  } else if (e.target.classList.contains("jcalendar-set-day") && e.target.innerText) {
                    obj2.update(e.target);
                  }
                } else {
                  obj2.close(false, false);
                }
              };
              var keyUpControls = function(e) {
                if (e.target.value && e.target.value.length > 3) {
                  var test = Component.extractDateFromString(e.target.value, obj2.options.format);
                  if (test) {
                    obj2.setValue(test);
                  }
                }
              };
              var updateActions = function() {
                var currentDay = calendar2.querySelector(".jcalendar-selected");
                if (currentDay && currentDay.classList.contains("jcalendar-disabled")) {
                  calendarControlsUpdateButton.setAttribute("disabled", "disabled");
                  calendarSelectHour.setAttribute("disabled", "disabled");
                  calendarSelectMin.setAttribute("disabled", "disabled");
                } else {
                  calendarControlsUpdateButton.removeAttribute("disabled");
                  calendarSelectHour.removeAttribute("disabled");
                  calendarSelectMin.removeAttribute("disabled");
                }
                if (typeof obj2.options.onupdate == "function") {
                  obj2.options.onupdate(el2, obj2.getValue());
                }
              };
              var calendar2 = null;
              var calendarReset = null;
              var calendarConfirm = null;
              var calendarContainer = null;
              var calendarContent = null;
              var calendarLabelYear = null;
              var calendarLabelMonth = null;
              var calendarTable = null;
              var calendarBody = null;
              var calendarControls = null;
              var calendarControlsTime = null;
              var calendarControlsUpdate = null;
              var calendarControlsUpdateButton = null;
              var calendarSelectHour = null;
              var calendarSelectMin = null;
              var init = function() {
                if (el2.tagName == "INPUT" && el2.value) {
                  options2.value = el2.value;
                }
                calendarReset = document.createElement("div");
                calendarReset.className = "jcalendar-reset";
                calendarConfirm = document.createElement("div");
                calendarConfirm.className = "jcalendar-confirm";
                calendarControls = document.createElement("div");
                calendarControls.className = "jcalendar-controls";
                calendarControls.style.borderBottom = "1px solid #ddd";
                calendarControls.appendChild(calendarReset);
                calendarControls.appendChild(calendarConfirm);
                calendarContainer = document.createElement("div");
                calendarContainer.className = "jcalendar-container";
                calendarContent = document.createElement("div");
                calendarContent.className = "jcalendar-content";
                calendarContainer.appendChild(calendarContent);
                if (el2.tagName == "DIV") {
                  calendar2 = el2;
                  calendar2.classList.add("jcalendar-inline");
                } else {
                  calendarContent.appendChild(calendarControls);
                  calendar2 = document.createElement("div");
                  calendar2.className = "jcalendar";
                }
                calendar2.classList.add("jcalendar-container");
                calendar2.appendChild(calendarContainer);
                var calendarTableContainer = document.createElement("div");
                calendarTableContainer.className = "jcalendar-table";
                calendarContent.appendChild(calendarTableContainer);
                var calendarHeaderPrev = document.createElement("td");
                calendarHeaderPrev.setAttribute("colspan", "2");
                calendarHeaderPrev.className = "jcalendar-prev";
                calendarLabelYear = document.createElement("span");
                calendarLabelYear.className = "jcalendar-year";
                calendarLabelMonth = document.createElement("span");
                calendarLabelMonth.className = "jcalendar-month";
                var calendarHeaderTitle = document.createElement("td");
                calendarHeaderTitle.className = "jcalendar-header";
                calendarHeaderTitle.setAttribute("colspan", "3");
                calendarHeaderTitle.appendChild(calendarLabelMonth);
                calendarHeaderTitle.appendChild(calendarLabelYear);
                var calendarHeaderNext = document.createElement("td");
                calendarHeaderNext.setAttribute("colspan", "2");
                calendarHeaderNext.className = "jcalendar-next";
                var calendarHeader = document.createElement("thead");
                var calendarHeaderRow = document.createElement("tr");
                calendarHeaderRow.appendChild(calendarHeaderPrev);
                calendarHeaderRow.appendChild(calendarHeaderTitle);
                calendarHeaderRow.appendChild(calendarHeaderNext);
                calendarHeader.appendChild(calendarHeaderRow);
                calendarTable = document.createElement("table");
                calendarBody = document.createElement("tbody");
                calendarTable.setAttribute("cellpadding", "0");
                calendarTable.setAttribute("cellspacing", "0");
                calendarTable.appendChild(calendarHeader);
                calendarTable.appendChild(calendarBody);
                calendarTableContainer.appendChild(calendarTable);
                calendarSelectHour = document.createElement("select");
                calendarSelectHour.className = "jcalendar-select";
                calendarSelectHour.onchange = function() {
                  obj2.date[3] = this.value;
                  if (typeof obj2.options.onupdate == "function") {
                    obj2.options.onupdate(el2, obj2.getValue());
                  }
                };
                for (var i2 = 0; i2 < 24; i2++) {
                  var element = document.createElement("option");
                  element.value = i2;
                  element.innerHTML = helpers.two(i2);
                  calendarSelectHour.appendChild(element);
                }
                calendarSelectMin = document.createElement("select");
                calendarSelectMin.className = "jcalendar-select";
                calendarSelectMin.onchange = function() {
                  obj2.date[4] = this.value;
                  if (typeof obj2.options.onupdate == "function") {
                    obj2.options.onupdate(el2, obj2.getValue());
                  }
                };
                for (var i2 = 0; i2 < 60; i2++) {
                  var element = document.createElement("option");
                  element.value = i2;
                  element.innerHTML = helpers.two(i2);
                  calendarSelectMin.appendChild(element);
                }
                var calendarControlsFooter = document.createElement("div");
                calendarControlsFooter.className = "jcalendar-controls";
                calendarControlsTime = document.createElement("div");
                calendarControlsTime.className = "jcalendar-time";
                calendarControlsTime.style.maxWidth = "140px";
                calendarControlsTime.appendChild(calendarSelectHour);
                calendarControlsTime.appendChild(calendarSelectMin);
                calendarControlsUpdateButton = document.createElement("button");
                calendarControlsUpdateButton.setAttribute("type", "button");
                calendarControlsUpdateButton.className = "jcalendar-update";
                calendarControlsUpdate = document.createElement("div");
                calendarControlsUpdate.style.flexGrow = "10";
                calendarControlsUpdate.appendChild(calendarControlsUpdateButton);
                calendarControlsFooter.appendChild(calendarControlsTime);
                if (el2.tagName == "INPUT") {
                  calendarControlsFooter.appendChild(calendarControlsUpdate);
                }
                calendarContent.appendChild(calendarControlsFooter);
                var calendarBackdrop = document.createElement("div");
                calendarBackdrop.className = "jcalendar-backdrop";
                calendar2.appendChild(calendarBackdrop);
                el2.addEventListener("keyup", keyUpControls);
                calendar2.addEventListener("swipeleft", function(e) {
                  animation.slideLeft(calendarTable, 0, function() {
                    obj2.next();
                    animation.slideRight(calendarTable, 1);
                  });
                  e.preventDefault();
                  e.stopPropagation();
                });
                calendar2.addEventListener("swiperight", function(e) {
                  animation.slideRight(calendarTable, 0, function() {
                    obj2.prev();
                    animation.slideLeft(calendarTable, 1);
                  });
                  e.preventDefault();
                  e.stopPropagation();
                });
                if ("ontouchend" in document.documentElement === true) {
                  calendar2.addEventListener("touchend", mouseUpControls);
                  el2.addEventListener("touchend", obj2.open);
                } else {
                  calendar2.addEventListener("mouseup", mouseUpControls);
                  el2.addEventListener("mouseup", obj2.open);
                }
                if (!Component.hasEvents) {
                  Component.hasEvents = true;
                  document.addEventListener("keydown", Component.keydown);
                }
                obj2.setOptions(options2);
                if (el2.tagName == "INPUT") {
                  el2.parentNode.insertBefore(calendar2, el2.nextSibling);
                  el2.setAttribute("autocomplete", "off");
                  el2.classList.add("jcalendar-input");
                  el2.value = obj2.setLabel(obj2.getValue(), obj2.options);
                } else {
                  obj2.getDays();
                  if (obj2.options.time) {
                    calendarSelectHour.value = obj2.date[3];
                    calendarSelectMin.value = obj2.date[4];
                  }
                }
                if (obj2.options.opened == true) {
                  obj2.open();
                }
                if (obj2.options.controls == false) {
                  calendarContainer.classList.add("jcalendar-hide-controls");
                }
                el2.change = obj2.setValue;
                el2.val = function(val) {
                  if (val === void 0) {
                    return obj2.getValue();
                  } else {
                    obj2.setValue(val);
                  }
                };
                el2.calendar = calendar2.calendar = obj2;
              };
              init();
              return obj2;
            };
            Component.keydown = function(e) {
              var calendar2 = null;
              if (calendar2 = Component.current) {
                if (e.which == 13) {
                  calendar2.close(false, true);
                } else if (e.which == 27) {
                  calendar2.close(false, false);
                }
              }
            };
            Component.prettify = function(d, texts) {
              if (!texts) {
                var texts = {
                  justNow: "Just now",
                  xMinutesAgo: "{0}m ago",
                  xHoursAgo: "{0}h ago",
                  xDaysAgo: "{0}d ago",
                  xWeeksAgo: "{0}w ago",
                  xMonthsAgo: "{0} mon ago",
                  xYearsAgo: "{0}y ago"
                };
              }
              if (d.indexOf("GMT") === -1 && d.indexOf("Z") === -1) {
                d += " GMT";
              }
              var d1 = /* @__PURE__ */ new Date();
              var d2 = new Date(d);
              var total = parseInt((d1 - d2) / 1e3 / 60);
              String.prototype.format = function(o) {
                return this.replace("{0}", o);
              };
              if (total == 0) {
                var text = texts.justNow;
              } else if (total < 90) {
                var text = texts.xMinutesAgo.format(total);
              } else if (total < 1440) {
                var text = texts.xHoursAgo.format(Math.round(total / 60));
              } else if (total < 20160) {
                var text = texts.xDaysAgo.format(Math.round(total / 1440));
              } else if (total < 43200) {
                var text = texts.xWeeksAgo.format(Math.round(total / 10080));
              } else if (total < 1036800) {
                var text = texts.xMonthsAgo.format(Math.round(total / 43200));
              } else {
                var text = texts.xYearsAgo.format(Math.round(total / 525600));
              }
              return text;
            };
            Component.prettifyAll = function() {
              var elements = document.querySelectorAll(".prettydate");
              for (var i2 = 0; i2 < elements.length; i2++) {
                if (elements[i2].getAttribute("data-date")) {
                  elements[i2].innerHTML = Component.prettify(elements[i2].getAttribute("data-date"));
                } else {
                  if (elements[i2].innerHTML) {
                    elements[i2].setAttribute("title", elements[i2].innerHTML);
                    elements[i2].setAttribute("data-date", elements[i2].innerHTML);
                    elements[i2].innerHTML = Component.prettify(elements[i2].innerHTML);
                  }
                }
              }
            };
            Component.now = helpers_date.now;
            Component.toArray = helpers_date.toArray;
            Component.dateToNum = helpers_date.dateToNum;
            Component.numToDate = helpers_date.numToDate;
            Component.weekdays = helpers_date.weekdays;
            Component.months = helpers_date.months;
            Component.weekdaysShort = helpers_date.weekdaysShort;
            Component.monthsShort = helpers_date.monthsShort;
            Component.extractDateFromString = mask.extractDateFromString;
            Component.getDateString = mask.getDateString;
            return Component;
          }
          var calendar = Calendar();
          ;
          function Palette() {
            var palette2 = {
              material: [
                ["#ffebee", "#fce4ec", "#f3e5f5", "#e8eaf6", "#e3f2fd", "#e0f7fa", "#e0f2f1", "#e8f5e9", "#f1f8e9", "#f9fbe7", "#fffde7", "#fff8e1", "#fff3e0", "#fbe9e7", "#efebe9", "#fafafa", "#eceff1"],
                ["#ffcdd2", "#f8bbd0", "#e1bee7", "#c5cae9", "#bbdefb", "#b2ebf2", "#b2dfdb", "#c8e6c9", "#dcedc8", "#f0f4c3", "#fff9c4", "#ffecb3", "#ffe0b2", "#ffccbc", "#d7ccc8", "#f5f5f5", "#cfd8dc"],
                ["#ef9a9a", "#f48fb1", "#ce93d8", "#9fa8da", "#90caf9", "#80deea", "#80cbc4", "#a5d6a7", "#c5e1a5", "#e6ee9c", "#fff59d", "#ffe082", "#ffcc80", "#ffab91", "#bcaaa4", "#eeeeee", "#b0bec5"],
                ["#e57373", "#f06292", "#ba68c8", "#7986cb", "#64b5f6", "#4dd0e1", "#4db6ac", "#81c784", "#aed581", "#dce775", "#fff176", "#ffd54f", "#ffb74d", "#ff8a65", "#a1887f", "#e0e0e0", "#90a4ae"],
                ["#ef5350", "#ec407a", "#ab47bc", "#5c6bc0", "#42a5f5", "#26c6da", "#26a69a", "#66bb6a", "#9ccc65", "#d4e157", "#ffee58", "#ffca28", "#ffa726", "#ff7043", "#8d6e63", "#bdbdbd", "#78909c"],
                ["#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#2196f3", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"],
                ["#e53935", "#d81b60", "#8e24aa", "#3949ab", "#1e88e5", "#00acc1", "#00897b", "#43a047", "#7cb342", "#c0ca33", "#fdd835", "#ffb300", "#fb8c00", "#f4511e", "#6d4c41", "#757575", "#546e7a"],
                ["#d32f2f", "#c2185b", "#7b1fa2", "#303f9f", "#1976d2", "#0097a7", "#00796b", "#388e3c", "#689f38", "#afb42b", "#fbc02d", "#ffa000", "#f57c00", "#e64a19", "#5d4037", "#616161", "#455a64"],
                ["#c62828", "#ad1457", "#6a1b9a", "#283593", "#1565c0", "#00838f", "#00695c", "#2e7d32", "#558b2f", "#9e9d24", "#f9a825", "#ff8f00", "#ef6c00", "#d84315", "#4e342e", "#424242", "#37474f"],
                ["#b71c1c", "#880e4f", "#4a148c", "#1a237e", "#0d47a1", "#006064", "#004d40", "#1b5e20", "#33691e", "#827717", "#f57f17", "#ff6f00", "#e65100", "#bf360c", "#3e2723", "#212121", "#263238"]
              ],
              fire: [
                ["0b1a6d", "840f38", "b60718", "de030b", "ff0c0c", "fd491c", "fc7521", "faa331", "fbb535", "ffc73a"],
                ["071147", "5f0b28", "930513", "be0309", "ef0000", "fa3403", "fb670b", "f9991b", "faad1e", "ffc123"],
                ["03071e", "370617", "6a040f", "9d0208", "d00000", "dc2f02", "e85d04", "f48c06", "faa307", "ffba08"],
                ["020619", "320615", "61040d", "8c0207", "bc0000", "c82a02", "d05203", "db7f06", "e19405", "efab00"],
                ["020515", "2d0513", "58040c", "7f0206", "aa0000", "b62602", "b94903", "c57205", "ca8504", "d89b00"]
              ],
              baby: [
                ["eddcd2", "fff1e6", "fde2e4", "fad2e1", "c5dedd", "dbe7e4", "f0efeb", "d6e2e9", "bcd4e6", "99c1de"],
                ["e1c4b3", "ffd5b5", "fab6ba", "f5a8c4", "aacecd", "bfd5cf", "dbd9d0", "baceda", "9dc0db", "7eb1d5"],
                ["daa990", "ffb787", "f88e95", "f282a9", "8fc4c3", "a3c8be", "cec9b3", "9dbcce", "82acd2", "649dcb"],
                ["d69070", "ff9c5e", "f66770", "f05f8f", "74bbb9", "87bfae", "c5b993", "83aac3", "699bca", "4d89c2"],
                ["c97d5d", "f58443", "eb4d57", "e54a7b", "66a9a7", "78ae9c", "b5a67e", "7599b1", "5c88b7", "4978aa"]
              ],
              chart: [
                ["#C1D37F", "#4C5454", "#FFD275", "#66586F", "#D05D5B", "#C96480", "#95BF8F", "#6EA240", "#0F0F0E", "#EB8258", "#95A3B3", "#995D81"]
              ]
            };
            var Component = function(o) {
              if (palette2[o]) {
                return palette2[o];
              } else {
                return palette2.material;
              }
            };
            Component.get = function(o) {
              if (palette2[o]) {
                return palette2[o];
              } else {
                return palette2;
              }
            };
            Component.set = function(o, v) {
              palette2[o] = v;
            };
            return Component;
          }
          var palette = Palette();
          ;
          function Tabs(el2, options2) {
            var obj2 = {};
            obj2.options = {};
            var defaults2 = {
              data: [],
              position: null,
              allowCreate: false,
              allowChangePosition: false,
              onclick: null,
              onload: null,
              onchange: null,
              oncreate: null,
              ondelete: null,
              onbeforecreate: null,
              onchangeposition: null,
              animation: false,
              hideHeaders: false,
              padding: null,
              palette: null,
              maxWidth: null
            };
            for (var property2 in defaults2) {
              if (options2 && options2.hasOwnProperty(property2)) {
                obj2.options[property2] = options2[property2];
              } else {
                obj2.options[property2] = defaults2[property2];
              }
            }
            el2.classList.add("jtabs");
            var prev = null;
            var next = null;
            var border = null;
            const setBorder = function(index) {
              if (obj2.options.animation) {
                setTimeout(function() {
                  let rect = obj2.headers.children[index].getBoundingClientRect();
                  if (obj2.options.palette === "modern") {
                    border.style.width = rect.width - 4 + "px";
                    border.style.left = obj2.headers.children[index].offsetLeft + 2 + "px";
                  } else {
                    border.style.width = rect.width + "px";
                    border.style.left = obj2.headers.children[index].offsetLeft + "px";
                  }
                  if (obj2.options.position === "bottom") {
                    border.style.top = "0px";
                  } else {
                    border.style.bottom = "0px";
                  }
                }, 50);
              }
            };
            var updateControls = function(x2) {
              if (typeof obj2.headers.scrollTo == "function") {
                obj2.headers.scrollTo({
                  left: x2,
                  behavior: "smooth"
                });
              } else {
                obj2.headers.scrollLeft = x2;
              }
              if (x2 <= 1) {
                prev.classList.add("disabled");
              } else {
                prev.classList.remove("disabled");
              }
              if (x2 >= obj2.headers.scrollWidth - obj2.headers.offsetWidth) {
                next.classList.add("disabled");
              } else {
                next.classList.remove("disabled");
              }
              if (obj2.headers.scrollWidth <= obj2.headers.offsetWidth) {
                prev.style.display = "none";
                next.style.display = "none";
              } else {
                prev.style.display = "";
                next.style.display = "";
              }
            };
            obj2.setBorder = setBorder;
            obj2.open = function(index) {
              const items = Array.from(obj2.content.children);
              if (!obj2.content.children[index]) {
                return;
              }
              var previous = null;
              for (var i3 = 0; i3 < obj2.headers.children.length; i3++) {
                if (obj2.headers.children[i3].classList.contains("jtabs-selected")) {
                  previous = i3;
                }
                obj2.headers.children[i3].classList.remove("jtabs-selected");
                if (obj2.content.children[i3]) {
                  obj2.content.children[i3].classList.remove("jtabs-selected");
                }
              }
              obj2.headers.children[index].classList.add("jtabs-selected");
              if (obj2.content.children[index]) {
                obj2.content.children[index].classList.add("jtabs-selected");
              }
              if (previous != index && typeof obj2.options.onchange == "function") {
                if (obj2.content.children[index]) {
                  obj2.options.onchange(el2, obj2, index, obj2.headers.children[index], obj2.content.children[index]);
                }
              }
              if (obj2.options.hideHeaders == true && (obj2.headers.children.length < 3 && obj2.options.allowCreate == false)) {
                obj2.headers.parentNode.style.display = "none";
              } else {
                obj2.headers.parentNode.style.display = "";
                var x1 = obj2.headers.children[index].offsetLeft;
                var x2 = x1 + obj2.headers.children[index].offsetWidth;
                var r1 = obj2.headers.scrollLeft;
                var r2 = r1 + obj2.headers.offsetWidth;
                if (!(r1 <= x1 && r2 >= x2)) {
                  updateControls(x1 - 1);
                }
                setBorder(index);
              }
            };
            obj2.selectIndex = function(a) {
              var index = Array.prototype.indexOf.call(obj2.headers.children, a);
              if (index >= 0) {
                obj2.open(index);
              }
              return index;
            };
            obj2.rename = function(i3, title) {
              if (!title) {
                title = prompt("New title", obj2.headers.children[i3].innerText);
              }
              obj2.headers.children[i3].innerText = title;
              setBorder(obj2.getActive());
            };
            obj2.create = function(title, url) {
              if (typeof obj2.options.onbeforecreate == "function") {
                var ret = obj2.options.onbeforecreate(el2);
                if (ret === false) {
                  return false;
                } else {
                  title = ret;
                }
              }
              var div2 = obj2.appendElement(title);
              if (typeof obj2.options.oncreate == "function") {
                obj2.options.oncreate(el2, div2);
              }
              setBorder(obj2.getActive());
              return div2;
            };
            obj2.remove = function(index) {
              return obj2.deleteElement(index);
            };
            obj2.nextNumber = function() {
              var num = 0;
              for (var i3 = 0; i3 < obj2.headers.children.length; i3++) {
                var tmp = obj2.headers.children[i3].innerText.match(/[0-9].*/);
                if (tmp > num) {
                  num = parseInt(tmp);
                }
              }
              if (!num) {
                num = 1;
              } else {
                num++;
              }
              return num;
            };
            obj2.deleteElement = function(index) {
              let current = obj2.getActive();
              if (!obj2.headers.children[index]) {
                return false;
              } else {
                obj2.headers.removeChild(obj2.headers.children[index]);
                obj2.content.removeChild(obj2.content.children[index]);
              }
              if (current === index) {
                obj2.open(0);
              } else {
                let current2 = obj2.getActive() || 0;
                setBorder(current2);
              }
              if (typeof obj2.options.ondelete == "function") {
                obj2.options.ondelete(el2, index);
              }
            };
            obj2.appendElement = function(title, cb, openTab, position2) {
              if (!title) {
                var title = prompt("Title?", "");
              }
              if (title) {
                var div2 = document.createElement("div");
                var h = document.createElement("div");
                h.innerHTML = title;
                h.content = div2;
                if (typeof position2 === "undefined") {
                  obj2.content.appendChild(div2);
                  obj2.headers.insertBefore(h, obj2.headers.lastChild);
                } else {
                  let r = obj2.content.children[position2];
                  if (r) {
                    obj2.content.insertBefore(div2, r);
                  } else {
                    obj2.content.appendChild(div2);
                  }
                  r = obj2.headers.children[position2] || obj2.headers.lastChild;
                  obj2.headers.insertBefore(h, r);
                }
                if (obj2.options.allowChangePosition) {
                  h.setAttribute("draggable", "true");
                }
                if (openTab !== false) {
                  obj2.selectIndex(h);
                }
                if (typeof cb == "function") {
                  cb(div2, h);
                }
                return div2;
              }
            };
            obj2.getActive = function() {
              for (var i3 = 0; i3 < obj2.headers.children.length; i3++) {
                if (obj2.headers.children[i3].classList.contains("jtabs-selected")) {
                  return i3;
                }
              }
              return false;
            };
            obj2.updateContent = function(position2, newContent) {
              if (typeof newContent !== "string") {
                var contentItem = newContent;
              } else {
                var contentItem = document.createElement("div");
                contentItem.innerHTML = newContent;
              }
              if (obj2.content.children[position2].classList.contains("jtabs-selected")) {
                newContent.classList.add("jtabs-selected");
              }
              obj2.content.replaceChild(newContent, obj2.content.children[position2]);
              setBorder();
            };
            obj2.updatePosition = function(f, t, ignoreEvents, openTab) {
              if (f > t) {
                obj2.content.insertBefore(obj2.content.children[f], obj2.content.children[t]);
              } else {
                obj2.content.insertBefore(obj2.content.children[f], obj2.content.children[t].nextSibling);
              }
              if (openTab !== false) {
                obj2.open(t);
              } else {
                const activeIndex = obj2.getActive();
                if (t < activeIndex) {
                  obj2.setBorder(activeIndex);
                }
              }
              if (!ignoreEvents && typeof obj2.options.onchangeposition == "function") {
                obj2.options.onchangeposition(obj2.headers, f, t);
              }
            };
            obj2.move = function(f, t, ignoreEvents, openTab) {
              if (f > t) {
                obj2.headers.insertBefore(obj2.headers.children[f], obj2.headers.children[t]);
              } else {
                obj2.headers.insertBefore(obj2.headers.children[f], obj2.headers.children[t].nextSibling);
              }
              obj2.updatePosition(f, t, ignoreEvents, openTab);
            };
            obj2.setBorder = setBorder;
            obj2.init = function() {
              el2.innerHTML = "";
              obj2.headers = document.createElement("div");
              obj2.content = document.createElement("div");
              obj2.headers.classList.add("jtabs-headers");
              obj2.content.classList.add("jtabs-content");
              if (obj2.options.palette) {
                el2.classList.add("jtabs-modern");
              } else {
                el2.classList.remove("jtabs-modern");
              }
              if (obj2.options.padding) {
                obj2.content.style.padding = parseInt(obj2.options.padding) + "px";
              }
              var header = document.createElement("div");
              header.className = "jtabs-headers-container";
              header.appendChild(obj2.headers);
              if (obj2.options.maxWidth) {
                header.style.maxWidth = parseInt(obj2.options.maxWidth) + "px";
              }
              var controls = document.createElement("div");
              controls.className = "jtabs-controls";
              controls.setAttribute("draggable", "false");
              header.appendChild(controls);
              if (obj2.options.position == "bottom") {
                el2.appendChild(obj2.content);
                el2.appendChild(header);
              } else {
                el2.appendChild(header);
                el2.appendChild(obj2.content);
              }
              if (obj2.options.allowCreate == true) {
                var add = document.createElement("div");
                add.className = "jtabs-add";
                add.onclick = function() {
                  obj2.create();
                };
                controls.appendChild(add);
              }
              prev = document.createElement("div");
              prev.className = "jtabs-prev";
              prev.onclick = function() {
                updateControls(obj2.headers.scrollLeft - obj2.headers.offsetWidth);
              };
              controls.appendChild(prev);
              next = document.createElement("div");
              next.className = "jtabs-next";
              next.onclick = function() {
                updateControls(obj2.headers.scrollLeft + obj2.headers.offsetWidth);
              };
              controls.appendChild(next);
              for (var i3 = 0; i3 < obj2.options.data.length; i3++) {
                if (obj2.options.data[i3].titleElement) {
                  var headerItem = obj2.options.data[i3].titleElement;
                } else {
                  var headerItem = document.createElement("div");
                }
                if (obj2.options.data[i3].icon) {
                  var iconContainer = document.createElement("div");
                  var icon = document.createElement("i");
                  icon.classList.add("material-icons");
                  icon.innerHTML = obj2.options.data[i3].icon;
                  iconContainer.appendChild(icon);
                  headerItem.appendChild(iconContainer);
                }
                if (obj2.options.data[i3].title) {
                  var title = document.createTextNode(obj2.options.data[i3].title);
                  headerItem.appendChild(title);
                }
                if (obj2.options.data[i3].width) {
                  headerItem.style.width = obj2.options.data[i3].width;
                }
                if (obj2.options.data[i3].contentElement) {
                  var contentItem = obj2.options.data[i3].contentElement;
                } else {
                  var contentItem = document.createElement("div");
                  contentItem.innerHTML = obj2.options.data[i3].content;
                }
                obj2.headers.appendChild(headerItem);
                obj2.content.appendChild(contentItem);
              }
              border = document.createElement("div");
              border.className = "jtabs-border";
              obj2.headers.appendChild(border);
              if (obj2.options.animation) {
                el2.classList.add("jtabs-animation");
              }
              obj2.headers.addEventListener("click", function(e) {
                if (e.target.parentNode.classList.contains("jtabs-headers")) {
                  var target = e.target;
                } else {
                  if (e.target.tagName == "I") {
                    var target = e.target.parentNode.parentNode;
                  } else {
                    var target = e.target.parentNode;
                  }
                }
                var index = obj2.selectIndex(target);
                if (typeof obj2.options.onclick == "function") {
                  obj2.options.onclick(el2, obj2, index, obj2.headers.children[index], obj2.content.children[index]);
                }
              });
              obj2.headers.addEventListener("contextmenu", function(e) {
                obj2.selectIndex(e.target);
              });
              if (obj2.headers.children.length) {
                obj2.open(0);
              }
              updateControls(0);
              if (obj2.options.allowChangePosition == true) {
                Sorting(obj2.headers, {
                  direction: 1,
                  ondrop: function(a, b, c) {
                    obj2.updatePosition(b, c);
                  }
                });
              }
              if (typeof obj2.options.onload == "function") {
                obj2.options.onload(el2, obj2);
              }
            };
            if (el2.children[0] && el2.children[0].children.length) {
              for (var i2 = 0; i2 < el2.children[0].children.length; i2++) {
                var item = obj2.options.data && obj2.options.data[i2] ? obj2.options.data[i2] : {};
                if (el2.children[1] && el2.children[1].children[i2]) {
                  item.titleElement = el2.children[0].children[i2];
                  item.contentElement = el2.children[1].children[i2];
                } else {
                  item.contentElement = el2.children[0].children[i2];
                }
                obj2.options.data[i2] = item;
              }
            }
            var loadingRemoteData = false;
            if (obj2.options.data) {
              for (var i2 = 0; i2 < obj2.options.data.length; i2++) {
                if (obj2.options.data[i2].url) {
                  ajax({
                    url: obj2.options.data[i2].url,
                    type: "GET",
                    dataType: "text/html",
                    index: i2,
                    success: function(result) {
                      obj2.options.data[this.index].content = result;
                    },
                    complete: function() {
                      obj2.init();
                    }
                  });
                  loadingRemoteData = true;
                }
              }
            }
            if (!loadingRemoteData) {
              obj2.init();
            }
            el2.tabs = obj2;
            return obj2;
          }
          ;
          function Color(el2, options2) {
            if (el2.color) {
              return el2.color.setOptions(options2, true);
            }
            var obj2 = { type: "color" };
            obj2.options = {};
            var container = null;
            var backdrop = null;
            var content = null;
            var resetButton = null;
            var closeButton = null;
            var tabs = null;
            var jsuitesTabs = null;
            obj2.setOptions = function(options3, reset) {
              var defaults2 = {
                placeholder: "",
                value: null,
                onopen: null,
                onclose: null,
                onchange: null,
                closeOnChange: true,
                palette: null,
                position: null,
                doneLabel: "Done",
                resetLabel: "Reset",
                fullscreen: false,
                opened: false
              };
              if (!options3) {
                options3 = {};
              }
              if (options3 && !options3.palette) {
                options3.palette = palette();
              }
              for (var property2 in defaults2) {
                if (options3 && options3.hasOwnProperty(property2)) {
                  obj2.options[property2] = options3[property2];
                } else {
                  if (typeof obj2.options[property2] == "undefined" || reset === true) {
                    obj2.options[property2] = defaults2[property2];
                  }
                }
              }
              if (resetButton) {
                resetButton.innerHTML = obj2.options.resetLabel;
              }
              if (closeButton) {
                closeButton.innerHTML = obj2.options.doneLabel;
              }
              if (obj2.options.palette && jsuitesTabs) {
                jsuitesTabs.updateContent(0, table());
              }
              if (typeof obj2.options.value === "string") {
                el2.value = obj2.options.value;
                if (el2.tagName === "INPUT") {
                  el2.style.color = el2.value;
                  el2.style.backgroundColor = el2.value;
                }
              }
              if (obj2.options.placeholder) {
                el2.setAttribute("placeholder", obj2.options.placeholder);
              } else {
                if (el2.getAttribute("placeholder")) {
                  el2.removeAttribute("placeholder");
                }
              }
              return obj2;
            };
            obj2.select = function(color) {
              var selected = container.querySelector(".jcolor-selected");
              if (selected) {
                selected.classList.remove("jcolor-selected");
              }
              if (obj2.values[color]) {
                obj2.values[color].classList.add("jcolor-selected");
              }
              obj2.options.value = color;
            };
            obj2.open = function() {
              if (!container.classList.contains("jcolor-focus")) {
                tracking(obj2, true);
                container.classList.add("jcolor-focus");
                if (obj2.options.value) {
                  obj2.select(obj2.options.value);
                }
                content.style.marginTop = "";
                content.style.marginLeft = "";
                var rectContent = content.getBoundingClientRect();
                var availableWidth = helpers.getWindowWidth();
                var availableHeight = helpers.getWindowHeight();
                if (availableWidth < 800 || obj2.options.fullscreen == true) {
                  content.classList.add("jcolor-fullscreen");
                  animation.slideBottom(content, 1);
                  backdrop.style.display = "block";
                } else {
                  if (content.classList.contains("jcolor-fullscreen")) {
                    content.classList.remove("jcolor-fullscreen");
                    backdrop.style.display = "";
                  }
                  if (obj2.options.position) {
                    content.style.position = "fixed";
                  } else {
                    content.style.position = "";
                  }
                  if (rectContent.left + rectContent.width > availableWidth) {
                    content.style.marginLeft = -1 * (rectContent.left + rectContent.width - (availableWidth - 20)) + "px";
                  }
                  if (rectContent.top + rectContent.height > availableHeight) {
                    content.style.marginTop = -1 * (rectContent.top + rectContent.height - (availableHeight - 20)) + "px";
                  }
                }
                if (typeof obj2.options.onopen == "function") {
                  obj2.options.onopen(el2, obj2);
                }
                jsuitesTabs.setBorder(jsuitesTabs.getActive());
                if (obj2.options.value) {
                  var rgb = HexToRgb(obj2.options.value);
                  rgbInputs.forEach(function(rgbInput, index) {
                    rgbInput.value = rgb[index];
                    rgbInput.dispatchEvent(new Event("input"));
                  });
                }
              }
            };
            obj2.close = function(ignoreEvents) {
              if (container.classList.contains("jcolor-focus")) {
                container.classList.remove("jcolor-focus");
                backdrop.style.display = "";
                if (!ignoreEvents && typeof obj2.options.onclose == "function") {
                  obj2.options.onclose(el2, obj2);
                }
                tracking(obj2, false);
              }
              return obj2.options.value;
            };
            obj2.setValue = function(color) {
              if (!color) {
                color = "";
              }
              if (color != obj2.options.value) {
                obj2.options.value = color;
                slidersResult = color;
                obj2.select(color);
                if (typeof obj2.options.onchange == "function") {
                  obj2.options.onchange(el2, color, obj2);
                }
                if (el2.value != obj2.options.value) {
                  el2.value = obj2.options.value;
                  if (el2.tagName === "INPUT") {
                    el2.style.color = el2.value;
                    el2.style.backgroundColor = el2.value;
                  }
                  if (typeof el2.oninput == "function") {
                    el2.oninput({
                      type: "input",
                      target: el2,
                      value: el2.value
                    });
                  }
                }
                if (obj2.options.closeOnChange == true) {
                  obj2.close();
                }
              }
            };
            obj2.getValue = function() {
              return obj2.options.value;
            };
            var backdropClickControl = false;
            var decToHex = function(num) {
              var hex = num.toString(16);
              return hex.length === 1 ? "0" + hex : hex;
            };
            var rgbToHex = function(r, g, b) {
              return "#" + decToHex(r) + decToHex(g) + decToHex(b);
            };
            var hexToDec = function(hex) {
              return parseInt("0x" + hex);
            };
            var HexToRgb = function(hex) {
              return [hexToDec(hex.substr(1, 2)), hexToDec(hex.substr(3, 2)), hexToDec(hex.substr(5, 2))];
            };
            var table = function() {
              var tableContainer = document.createElement("div");
              tableContainer.className = "jcolor-grid";
              obj2.values = [];
              var t = document.createElement("table");
              t.setAttribute("cellpadding", "7");
              t.setAttribute("cellspacing", "0");
              for (var j = 0; j < obj2.options.palette.length; j++) {
                var tr = document.createElement("tr");
                for (var i2 = 0; i2 < obj2.options.palette[j].length; i2++) {
                  var td = document.createElement("td");
                  var color = obj2.options.palette[j][i2];
                  if (color.length < 7 && color.substr(0, 1) !== "#") {
                    color = "#" + color;
                  }
                  td.style.backgroundColor = color;
                  td.setAttribute("data-value", color);
                  td.innerHTML = "";
                  tr.appendChild(td);
                  if (obj2.options.value == color) {
                    td.classList.add("jcolor-selected");
                  }
                  obj2.values[color] = td;
                }
                t.appendChild(tr);
              }
              tableContainer.appendChild(t);
              return tableContainer;
            };
            var canvas = document.createElement("canvas");
            canvas.width = 200;
            canvas.height = 160;
            var context = canvas.getContext("2d");
            var resizeCanvas = function() {
              var m = tabs.firstChild.getBoundingClientRect();
              canvas.width = m.width - 14;
              gradient();
            };
            var gradient = function() {
              var g = context.createLinearGradient(0, 0, canvas.width, 0);
              g.addColorStop(0, "rgb(255,0,0)");
              g.addColorStop(0.15, "rgb(255,0,255)");
              g.addColorStop(0.33, "rgb(0,0,255)");
              g.addColorStop(0.49, "rgb(0,255,255)");
              g.addColorStop(0.67, "rgb(0,255,0)");
              g.addColorStop(0.84, "rgb(255,255,0)");
              g.addColorStop(1, "rgb(255,0,0)");
              context.fillStyle = g;
              context.fillRect(0, 0, canvas.width, canvas.height);
              g = context.createLinearGradient(0, 0, 0, canvas.height);
              g.addColorStop(0, "rgba(255,255,255,1)");
              g.addColorStop(0.5, "rgba(255,255,255,0)");
              g.addColorStop(0.5, "rgba(0,0,0,0)");
              g.addColorStop(1, "rgba(0,0,0,1)");
              context.fillStyle = g;
              context.fillRect(0, 0, canvas.width, canvas.height);
            };
            var hsl = function() {
              var element = document.createElement("div");
              element.className = "jcolor-hsl";
              var point = document.createElement("div");
              point.className = "jcolor-point";
              var div2 = document.createElement("div");
              div2.appendChild(canvas);
              div2.appendChild(point);
              element.appendChild(div2);
              var update = function(buttons, x2, y2) {
                if (buttons === 1) {
                  var rect = element.getBoundingClientRect();
                  var left = x2 - rect.left;
                  var top = y2 - rect.top;
                  if (left < 0) {
                    left = 0;
                  }
                  if (top < 0) {
                    top = 0;
                  }
                  if (left > rect.width) {
                    left = rect.width;
                  }
                  if (top > rect.height) {
                    top = rect.height;
                  }
                  point.style.left = left + "px";
                  point.style.top = top + "px";
                  var pixel = context.getImageData(left, top, 1, 1).data;
                  slidersResult = rgbToHex(pixel[0], pixel[1], pixel[2]);
                }
              };
              element.addEventListener("mousedown", function(e) {
                update(e.buttons, e.clientX, e.clientY);
              });
              element.addEventListener("mousemove", function(e) {
                update(e.buttons, e.clientX, e.clientY);
              });
              element.addEventListener("touchmove", function(e) {
                update(1, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
              });
              return element;
            };
            var slidersResult = "";
            var rgbInputs = [];
            var changeInputColors = function() {
              if (slidersResult !== "") {
                for (var j = 0; j < rgbInputs.length; j++) {
                  var currentColor = HexToRgb(slidersResult);
                  currentColor[j] = 0;
                  var newGradient = "linear-gradient(90deg, rgb(";
                  newGradient += currentColor.join(", ");
                  newGradient += "), rgb(";
                  currentColor[j] = 255;
                  newGradient += currentColor.join(", ");
                  newGradient += "))";
                  rgbInputs[j].style.backgroundImage = newGradient;
                }
              }
            };
            var sliders = function() {
              var slidersElement = document.createElement("div");
              slidersElement.className = "jcolor-sliders";
              var slidersBody = document.createElement("div");
              var createSliderInput = function(name) {
                var inputContainer = document.createElement("div");
                inputContainer.className = "jcolor-sliders-input-container";
                var label = document.createElement("label");
                label.innerText = name;
                var subContainer = document.createElement("div");
                subContainer.className = "jcolor-sliders-input-subcontainer";
                var input = document.createElement("input");
                input.type = "range";
                input.min = 0;
                input.max = 255;
                input.value = 0;
                inputContainer.appendChild(label);
                subContainer.appendChild(input);
                var value2 = document.createElement("div");
                value2.innerText = input.value;
                input.addEventListener("input", function() {
                  value2.innerText = input.value;
                });
                subContainer.appendChild(value2);
                inputContainer.appendChild(subContainer);
                slidersBody.appendChild(inputContainer);
                return input;
              };
              rgbInputs = [
                createSliderInput("Red"),
                createSliderInput("Green"),
                createSliderInput("Blue")
              ];
              slidersElement.appendChild(slidersBody);
              var slidersResultColor = document.createElement("div");
              slidersResultColor.className = "jcolor-sliders-final-color";
              var resultElement = document.createElement("div");
              resultElement.style.visibility = "hidden";
              resultElement.innerText = "a";
              slidersResultColor.appendChild(resultElement);
              var updateResult = function() {
                var resultColor = rgbToHex(parseInt(rgbInputs[0].value), parseInt(rgbInputs[1].value), parseInt(rgbInputs[2].value));
                resultElement.innerText = resultColor;
                resultElement.style.color = resultColor;
                resultElement.style.removeProperty("visibility");
                slidersResult = resultColor;
              };
              rgbInputs.forEach(function(rgbInput) {
                rgbInput.addEventListener("input", function() {
                  updateResult();
                  changeInputColors();
                });
              });
              slidersElement.appendChild(slidersResultColor);
              return slidersElement;
            };
            var init = function() {
              obj2.setOptions(options2);
              if (el2.tagName == "INPUT") {
                el2.classList.add("jcolor-input");
                el2.readOnly = true;
              }
              container = document.createElement("div");
              container.className = "jcolor";
              backdrop = document.createElement("div");
              backdrop.className = "jcolor-backdrop";
              container.appendChild(backdrop);
              content = document.createElement("div");
              content.className = "jcolor-content";
              var controls = document.createElement("div");
              controls.className = "jcolor-controls";
              content.appendChild(controls);
              resetButton = document.createElement("div");
              resetButton.className = "jcolor-reset";
              resetButton.innerHTML = obj2.options.resetLabel;
              controls.appendChild(resetButton);
              closeButton = document.createElement("div");
              closeButton.className = "jcolor-close";
              closeButton.innerHTML = obj2.options.doneLabel;
              controls.appendChild(closeButton);
              tabs = document.createElement("div");
              content.appendChild(tabs);
              jsuitesTabs = Tabs(tabs, {
                animation: true,
                data: [
                  {
                    title: "Grid",
                    contentElement: table()
                  },
                  {
                    title: "Spectrum",
                    contentElement: hsl()
                  },
                  {
                    title: "Sliders",
                    contentElement: sliders()
                  }
                ],
                onchange: function(element, instance, index) {
                  if (index === 1) {
                    resizeCanvas();
                  } else {
                    var color = slidersResult !== "" ? slidersResult : obj2.getValue();
                    if (index === 2 && color) {
                      var rgb = HexToRgb(color);
                      rgbInputs.forEach(function(rgbInput, index2) {
                        rgbInput.value = rgb[index2];
                        rgbInput.dispatchEvent(new Event("input"));
                      });
                    }
                  }
                },
                palette: "modern"
              });
              container.appendChild(content);
              if (el2.tagName == "INPUT") {
                el2.parentNode.insertBefore(container, el2.nextSibling);
              } else {
                el2.appendChild(container);
              }
              container.addEventListener("click", function(e) {
                if (e.target.tagName == "TD") {
                  var value2 = e.target.getAttribute("data-value");
                  if (value2) {
                    obj2.setValue(value2);
                  }
                } else if (e.target.classList.contains("jcolor-reset")) {
                  obj2.setValue("");
                  obj2.close();
                } else if (e.target.classList.contains("jcolor-close")) {
                  if (jsuitesTabs.getActive() > 0) {
                    obj2.setValue(slidersResult);
                  }
                  obj2.close();
                } else if (e.target.classList.contains("jcolor-backdrop")) {
                  obj2.close();
                } else {
                  obj2.open();
                }
              });
              el2.addEventListener("mouseup", function(e) {
                obj2.open();
              });
              window.addEventListener("resize", function() {
                if (container.classList.contains("jcolor-focus") && jsuitesTabs.getActive() == 1) {
                  resizeCanvas();
                }
              });
              if (obj2.options.opened == true) {
                obj2.open();
              }
              el2.change = obj2.setValue;
              el2.val = function(val) {
                if (val === void 0) {
                  return obj2.getValue();
                } else {
                  obj2.setValue(val);
                }
              };
              el2.color = obj2;
              container.color = obj2;
            };
            obj2.toHex = function(rgb) {
              var hex = function(x2) {
                return ("0" + parseInt(x2).toString(16)).slice(-2);
              };
              if (rgb) {
                if (/^#[0-9A-F]{6}$/i.test(rgb)) {
                  return rgb;
                } else {
                  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                  if (rgb && rgb.length) {
                    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
                  } else {
                    return "";
                  }
                }
              }
            };
            init();
            return obj2;
          }
          ;
          function Contextmenu() {
            var Component = function(el2, options2) {
              var obj2 = { type: "contextmenu" };
              obj2.options = {};
              var defaults2 = {
                items: null,
                onclick: null
              };
              for (var property2 in defaults2) {
                if (options2 && options2.hasOwnProperty(property2)) {
                  obj2.options[property2] = options2[property2];
                } else {
                  obj2.options[property2] = defaults2[property2];
                }
              }
              el2.classList.add("jcontextmenu");
              obj2.open = function(e, items) {
                if (items) {
                  obj2.options.items = items;
                  obj2.create(items);
                }
                if (Component.current) {
                  Component.current.close();
                }
                tracking(obj2, true);
                el2.classList.add("jcontextmenu-focus");
                Component.current = obj2;
                if (obj2.options.items && obj2.options.items.length > 0 || el2.children.length) {
                  if (e.target) {
                    if (e.changedTouches && e.changedTouches[0]) {
                      x2 = e.changedTouches[0].clientX;
                      y2 = e.changedTouches[0].clientY;
                    } else {
                      var x2 = e.clientX;
                      var y2 = e.clientY;
                    }
                  } else {
                    var x2 = e.x;
                    var y2 = e.y;
                  }
                  var rect = el2.getBoundingClientRect();
                  if (window.innerHeight < y2 + rect.height) {
                    var h = y2 - rect.height;
                    if (h < 0) {
                      h = 0;
                    }
                    el2.style.top = h + "px";
                  } else {
                    el2.style.top = y2 + "px";
                  }
                  if (window.innerWidth < x2 + rect.width) {
                    if (x2 - rect.width > 0) {
                      el2.style.left = x2 - rect.width + "px";
                    } else {
                      el2.style.left = "10px";
                    }
                  } else {
                    el2.style.left = x2 + "px";
                  }
                }
              };
              obj2.isOpened = function() {
                return el2.classList.contains("jcontextmenu-focus") ? true : false;
              };
              obj2.close = function() {
                if (el2.classList.contains("jcontextmenu-focus")) {
                  el2.classList.remove("jcontextmenu-focus");
                }
                tracking(obj2, false);
              };
              obj2.create = function(items) {
                el2.innerHTML = "";
                var itemHeader = createHeader();
                el2.appendChild(itemHeader);
                for (var i2 = 0; i2 < items.length; i2++) {
                  var itemContainer = createItemElement(items[i2]);
                  el2.appendChild(itemContainer);
                }
              };
              function createHeader() {
                var header = document.createElement("div");
                header.classList.add("header");
                header.addEventListener("click", function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                });
                var title = document.createElement("a");
                title.classList.add("title");
                title.innerHTML = dictionary.translate("Menu");
                header.appendChild(title);
                var closeButton = document.createElement("a");
                closeButton.classList.add("close");
                closeButton.innerHTML = dictionary.translate("close");
                closeButton.addEventListener("click", function(e) {
                  obj2.close();
                });
                header.appendChild(closeButton);
                return header;
              }
              function createItemElement(item) {
                if (item.type && (item.type == "line" || item.type == "divisor")) {
                  var itemContainer = document.createElement("hr");
                } else {
                  var itemContainer = document.createElement("div");
                  var itemText = document.createElement("a");
                  itemText.innerHTML = item.title;
                  if (item.tooltip) {
                    itemContainer.setAttribute("title", item.tooltip);
                  }
                  if (item.icon) {
                    itemContainer.setAttribute("data-icon", item.icon);
                  }
                  if (item.id) {
                    itemContainer.id = item.id;
                  }
                  if (item.disabled) {
                    itemContainer.className = "jcontextmenu-disabled";
                  } else if (item.onclick) {
                    itemContainer.method = item.onclick;
                    itemContainer.addEventListener("mousedown", function(e) {
                      e.preventDefault();
                    });
                    itemContainer.addEventListener("mouseup", function(e) {
                      this.method(this, e);
                    });
                  }
                  itemContainer.appendChild(itemText);
                  if (item.submenu) {
                    var itemIconSubmenu = document.createElement("span");
                    itemIconSubmenu.innerHTML = "&#9658;";
                    itemContainer.appendChild(itemIconSubmenu);
                    itemContainer.classList.add("jcontexthassubmenu");
                    var el_submenu = document.createElement("div");
                    el_submenu.classList.add("jcontextmenu");
                    el_submenu.setAttribute("tabindex", "900");
                    var submenu = item.submenu;
                    for (var i2 = 0; i2 < submenu.length; i2++) {
                      var itemContainerSubMenu = createItemElement(submenu[i2]);
                      el_submenu.appendChild(itemContainerSubMenu);
                    }
                    itemContainer.appendChild(el_submenu);
                  } else if (item.shortcut) {
                    var itemShortCut = document.createElement("span");
                    itemShortCut.innerHTML = item.shortcut;
                    itemContainer.appendChild(itemShortCut);
                  }
                }
                return itemContainer;
              }
              if (typeof obj2.options.onclick == "function") {
                el2.addEventListener("click", function(e) {
                  obj2.options.onclick(obj2, e);
                });
              }
              if (obj2.options.items) {
                obj2.create(obj2.options.items);
              }
              window.addEventListener("mousewheel", function() {
                obj2.close();
              });
              el2.contextmenu = obj2;
              return obj2;
            };
            return Component;
          }
          var contextmenu = Contextmenu();
          ;
          function Dropdown() {
            var Component = function(el2, options2) {
              if (el2.dropdown) {
                return el2.dropdown.setOptions(options2, true);
              }
              var obj2 = { type: "dropdown" };
              obj2.options = {};
              var success = function(data, val) {
                if (data && data.length) {
                  if (obj2.options.sortResults !== false) {
                    if (typeof obj2.options.sortResults == "function") {
                      data.sort(obj2.options.sortResults);
                    } else {
                      data.sort(sortData);
                    }
                  }
                  obj2.setData(data);
                }
                if (typeof obj2.options.onload == "function") {
                  obj2.options.onload(el2, obj2, data, val);
                }
                if (val) {
                  applyValue(val);
                }
                if (val === void 0 || val === null) {
                  obj2.options.value = "";
                }
                el2.value = obj2.options.value;
                if (obj2.options.opened == true) {
                  obj2.open();
                }
              };
              var sortData = function(itemA, itemB) {
                var testA, testB;
                if (typeof itemA == "string") {
                  testA = itemA;
                } else {
                  if (itemA.text) {
                    testA = itemA.text;
                  } else if (itemA.name) {
                    testA = itemA.name;
                  }
                }
                if (typeof itemB == "string") {
                  testB = itemB;
                } else {
                  if (itemB.text) {
                    testB = itemB.text;
                  } else if (itemB.name) {
                    testB = itemB.name;
                  }
                }
                if (typeof testA == "string" || typeof testB == "string") {
                  if (typeof testA != "string") {
                    testA = "" + testA;
                  }
                  if (typeof testB != "string") {
                    testB = "" + testB;
                  }
                  return testA.localeCompare(testB);
                } else {
                  return testA - testB;
                }
              };
              var resetValue = function() {
                obj2.value = {};
                for (var i2 = 0; i2 < obj2.items.length; i2++) {
                  if (obj2.items[i2].selected == true) {
                    if (obj2.items[i2].element) {
                      obj2.items[i2].element.classList.remove("jdropdown-selected");
                    }
                    obj2.items[i2].selected = null;
                  }
                }
                obj2.options.value = "";
                el2.value = "";
              };
              var applyValue = function(values) {
                resetValue();
                if (values !== null) {
                  if (!values) {
                    if (typeof obj2.value[""] !== "undefined") {
                      obj2.value[""] = "";
                    }
                  } else {
                    if (!Array.isArray(values)) {
                      values = ("" + values).split(";");
                    }
                    for (var i2 = 0; i2 < values.length; i2++) {
                      obj2.value[values[i2]] = "";
                    }
                  }
                }
                for (var i2 = 0; i2 < obj2.items.length; i2++) {
                  if (typeof obj2.value[Value(i2)] !== "undefined") {
                    if (obj2.items[i2].element) {
                      obj2.items[i2].element.classList.add("jdropdown-selected");
                    }
                    obj2.items[i2].selected = true;
                    obj2.value[Value(i2)] = Text(i2);
                  }
                }
                obj2.options.value = Object.keys(obj2.value).join(";");
                obj2.header.value = obj2.getText();
              };
              var Value = function(k, v) {
                if (!obj2.options.format) {
                  var property2 = "value";
                } else {
                  var property2 = "id";
                }
                if (obj2.items[k]) {
                  if (v !== void 0) {
                    return obj2.items[k].data[property2] = v;
                  } else {
                    return obj2.items[k].data[property2];
                  }
                }
                return "";
              };
              var Text = function(k, v) {
                if (!obj2.options.format) {
                  var property2 = "text";
                } else {
                  var property2 = "name";
                }
                if (obj2.items[k]) {
                  if (v !== void 0) {
                    return obj2.items[k].data[property2] = v;
                  } else {
                    return obj2.items[k].data[property2];
                  }
                }
                return "";
              };
              var getValue = function() {
                return Object.keys(obj2.value);
              };
              var getText = function() {
                var data = [];
                var k = Object.keys(obj2.value);
                for (var i2 = 0; i2 < k.length; i2++) {
                  data.push(obj2.value[k[i2]]);
                }
                return data;
              };
              obj2.setOptions = function(options3, reset) {
                if (!options3) {
                  options3 = {};
                }
                var defaults2 = {
                  url: null,
                  data: [],
                  format: 0,
                  multiple: false,
                  autocomplete: false,
                  remoteSearch: false,
                  lazyLoading: false,
                  type: null,
                  width: null,
                  maxWidth: null,
                  opened: false,
                  value: null,
                  placeholder: "",
                  newOptions: false,
                  position: false,
                  onchange: null,
                  onload: null,
                  onopen: null,
                  onclose: null,
                  onfocus: null,
                  onblur: null,
                  oninsert: null,
                  onbeforeinsert: null,
                  onsearch: null,
                  onbeforesearch: null,
                  sortResults: false,
                  autofocus: false,
                  prompt: null,
                  allowEmpty: true
                };
                for (var property2 in defaults2) {
                  if (options3 && options3.hasOwnProperty(property2)) {
                    obj2.options[property2] = options3[property2];
                  } else {
                    if (typeof obj2.options[property2] == "undefined" || reset === true) {
                      obj2.options[property2] = defaults2[property2];
                    }
                  }
                }
                if (obj2.options.remoteSearch == true || obj2.options.type === "searchbar") {
                  obj2.options.autocomplete = true;
                }
                if (obj2.options.newOptions == true) {
                  obj2.header.classList.add("jdropdown-add");
                } else {
                  obj2.header.classList.remove("jdropdown-add");
                }
                if (obj2.options.autocomplete == true) {
                  obj2.header.removeAttribute("readonly");
                } else {
                  obj2.header.setAttribute("readonly", "readonly");
                }
                if (obj2.options.placeholder) {
                  obj2.header.setAttribute("placeholder", obj2.options.placeholder);
                } else {
                  obj2.header.removeAttribute("placeholder");
                }
                el2.classList.remove("jdropdown-searchbar");
                el2.classList.remove("jdropdown-picker");
                el2.classList.remove("jdropdown-list");
                if (obj2.options.type == "searchbar") {
                  el2.classList.add("jdropdown-searchbar");
                } else if (obj2.options.type == "list") {
                  el2.classList.add("jdropdown-list");
                } else if (obj2.options.type == "picker") {
                  el2.classList.add("jdropdown-picker");
                } else {
                  if (helpers.getWindowWidth() < 800) {
                    if (obj2.options.autocomplete) {
                      el2.classList.add("jdropdown-searchbar");
                      obj2.options.type = "searchbar";
                    } else {
                      el2.classList.add("jdropdown-picker");
                      obj2.options.type = "picker";
                    }
                  } else {
                    if (obj2.options.width) {
                      el2.style.width = obj2.options.width;
                      el2.style.minWidth = obj2.options.width;
                    } else {
                      el2.style.removeProperty("width");
                      el2.style.removeProperty("min-width");
                    }
                    el2.classList.add("jdropdown-default");
                    obj2.options.type = "default";
                  }
                }
                if (obj2.options.type == "searchbar") {
                  containerHeader.appendChild(closeButton);
                } else {
                  container.insertBefore(closeButton, container.firstChild);
                }
                if (obj2.options.url && !options3.data) {
                  ajax({
                    url: obj2.options.url,
                    method: "GET",
                    dataType: "json",
                    success: function(data) {
                      if (data) {
                        success(data, obj2.options.value);
                      }
                    }
                  });
                } else {
                  success(obj2.options.data, obj2.options.value);
                }
                return obj2;
              };
              var containerHeader = null;
              var container = null;
              var content = null;
              var closeButton = null;
              var resetButton = null;
              var backdrop = null;
              var keyTimer = null;
              var init = function() {
                if (!options2) {
                  options2 = {};
                }
                if (el2.tagName == "SELECT") {
                  var ret = Component.extractFromDom(el2, options2);
                  el2 = ret.el;
                  options2 = ret.options;
                }
                if (!options2.placeholder && el2.getAttribute("placeholder")) {
                  options2.placeholder = el2.getAttribute("placeholder");
                }
                obj2.value = {};
                obj2.items = [];
                obj2.groups = [];
                obj2.search = "";
                obj2.results = null;
                el2.classList.add("jdropdown");
                containerHeader = document.createElement("div");
                containerHeader.className = "jdropdown-container-header";
                obj2.header = document.createElement("input");
                obj2.header.className = "jdropdown-header jss_object";
                obj2.header.type = "text";
                obj2.header.setAttribute("autocomplete", "off");
                obj2.header.onfocus = function() {
                  if (typeof obj2.options.onfocus == "function") {
                    obj2.options.onfocus(el2);
                  }
                };
                obj2.header.onblur = function() {
                  if (typeof obj2.options.onblur == "function") {
                    obj2.options.onblur(el2);
                  }
                };
                obj2.header.onkeyup = function(e) {
                  if (obj2.options.autocomplete == true && !keyTimer) {
                    if (obj2.search != obj2.header.value.trim()) {
                      keyTimer = setTimeout(function() {
                        obj2.find(obj2.header.value.trim());
                        keyTimer = null;
                      }, 400);
                    }
                    if (!el2.classList.contains("jdropdown-focus")) {
                      obj2.open();
                    }
                  } else {
                    if (!obj2.options.autocomplete) {
                      obj2.next(e.key);
                    }
                  }
                };
                if (!Component.hasEvents) {
                  Component.hasEvents = true;
                  document.addEventListener("keydown", Component.keydown);
                }
                container = document.createElement("div");
                container.className = "jdropdown-container";
                content = document.createElement("div");
                content.className = "jdropdown-content";
                closeButton = document.createElement("div");
                closeButton.className = "jdropdown-close";
                closeButton.textContent = "Done";
                resetButton = document.createElement("div");
                resetButton.className = "jdropdown-reset";
                resetButton.textContent = "x";
                resetButton.onclick = function() {
                  obj2.reset();
                  obj2.close();
                };
                backdrop = document.createElement("div");
                backdrop.className = "jdropdown-backdrop";
                containerHeader.appendChild(obj2.header);
                container.appendChild(content);
                el2.appendChild(containerHeader);
                el2.appendChild(container);
                el2.appendChild(backdrop);
                obj2.setOptions(options2);
                if ("ontouchsend" in document.documentElement === true) {
                  el2.addEventListener("touchsend", Component.mouseup);
                } else {
                  el2.addEventListener("mouseup", Component.mouseup);
                }
                if (obj2.options.lazyLoading == true) {
                  LazyLoading(content, {
                    loadUp: obj2.loadUp,
                    loadDown: obj2.loadDown
                  });
                }
                content.onwheel = function(e) {
                  e.stopPropagation();
                };
                el2.change = obj2.setValue;
                el2.val = function(val) {
                  if (val === void 0) {
                    return obj2.getValue(obj2.options.multiple ? true : false);
                  } else {
                    obj2.setValue(val);
                  }
                };
                el2.dropdown = obj2;
              };
              obj2.getUrl = function() {
                return obj2.options.url;
              };
              obj2.setUrl = function(url, callback) {
                obj2.options.url = url;
                ajax({
                  url: obj2.options.url,
                  method: "GET",
                  dataType: "json",
                  success: function(data) {
                    obj2.setData(data);
                    if (typeof callback == "function") {
                      callback(obj2);
                    }
                  }
                });
              };
              obj2.setId = function(item, v) {
                if (!obj2.options.format) {
                  var property2 = "value";
                } else {
                  var property2 = "id";
                }
                if (typeof item == "object") {
                  item[property2] = v;
                } else {
                  obj2.items[item].data[property2] = v;
                }
              };
              const add = function(title, id) {
                if (!title) {
                  let current = obj2.options.autocomplete == true ? obj2.header.value : "";
                  title = prompt(dictionary.translate("Add A New Option"), current);
                  if (!title) {
                    return false;
                  }
                }
                if (!id) {
                  id = helpers.guid();
                }
                if (!obj2.options.format) {
                  var item = {
                    value: id,
                    text: title
                  };
                } else {
                  var item = {
                    id,
                    name: title
                  };
                }
                if (typeof obj2.options.onbeforeinsert == "function") {
                  let ret = obj2.options.onbeforeinsert(obj2, item);
                  if (ret === false) {
                    return false;
                  } else if (ret) {
                    item = ret;
                  }
                }
                obj2.options.data.push(item);
                var newItem = obj2.createItem(item);
                content.appendChild(newItem.element);
                if (typeof obj2.options.oninsert == "function") {
                  obj2.options.oninsert(obj2, item, newItem);
                }
                if (content.style.display == "none") {
                  content.style.display = "";
                }
                if (obj2.results) {
                  obj2.results.push(newItem);
                }
                return item;
              };
              obj2.add = function(title, id) {
                if (typeof obj2.options.prompt == "function") {
                  return obj2.options.prompt.call(obj2, add);
                }
                return add(title, id);
              };
              obj2.createItem = function(data, group, groupName) {
                if (!obj2.options.format) {
                  if (!data.value && data.id !== void 0) {
                    data.value = data.id;
                  }
                  if (!data.text && data.name !== void 0) {
                    data.text = data.name;
                  }
                } else {
                  if (!data.id && data.value !== void 0) {
                    data.id = data.value;
                  }
                  if (!data.name && data.text !== void 0) {
                    data.name = data.text;
                  }
                }
                var item = {};
                item.element = document.createElement("div");
                item.element.className = "jdropdown-item";
                item.element.indexValue = obj2.items.length;
                item.data = data;
                if (group) {
                  item.group = group;
                }
                if (data.id) {
                  item.element.setAttribute("id", data.id);
                }
                if (data.disabled == true) {
                  item.element.setAttribute("data-disabled", true);
                }
                if (data.tooltip) {
                  item.element.setAttribute("title", data.tooltip);
                }
                if (data.image) {
                  var image = document.createElement("img");
                  image.className = "jdropdown-image";
                  image.src = data.image;
                  if (!data.title) {
                    image.classList.add("jdropdown-image-small");
                  }
                  item.element.appendChild(image);
                } else if (data.icon) {
                  var icon = document.createElement("span");
                  icon.className = "jdropdown-icon material-icons";
                  icon.innerText = data.icon;
                  if (!data.title) {
                    icon.classList.add("jdropdown-icon-small");
                  }
                  if (data.color) {
                    icon.style.color = data.color;
                  }
                  item.element.appendChild(icon);
                } else if (data.color) {
                  var color = document.createElement("div");
                  color.className = "jdropdown-color";
                  color.style.backgroundColor = data.color;
                  item.element.appendChild(color);
                }
                if (!obj2.options.format) {
                  var text = data.text;
                } else {
                  var text = data.name;
                }
                var node = document.createElement("div");
                node.className = "jdropdown-description";
                node.textContent = text || "&nbsp;";
                if (data.title) {
                  var title = document.createElement("div");
                  title.className = "jdropdown-title";
                  title.innerText = data.title;
                  node.appendChild(title);
                }
                if (!obj2.options.format) {
                  var val = data.value;
                } else {
                  var val = data.id;
                }
                if (obj2.value[val]) {
                  item.element.classList.add("jdropdown-selected");
                  item.selected = true;
                }
                obj2.items.push(item);
                item.element.appendChild(node);
                return item;
              };
              obj2.appendData = function(data) {
                if (data.length) {
                  var items = [];
                  var groups = [];
                  for (var i2 = 0; i2 < data.length; i2++) {
                    if (data[i2].group) {
                      if (!groups[data[i2].group]) {
                        groups[data[i2].group] = [];
                      }
                      groups[data[i2].group].push(i2);
                    } else {
                      items.push(i2);
                    }
                  }
                  var counter = 0;
                  var groupNames = Object.keys(groups);
                  if (groupNames.length > 0) {
                    for (var i2 = 0; i2 < groupNames.length; i2++) {
                      var group = document.createElement("div");
                      group.className = "jdropdown-group";
                      var groupName = document.createElement("div");
                      groupName.className = "jdropdown-group-name";
                      groupName.textContent = groupNames[i2];
                      var groupArrow = document.createElement("i");
                      groupArrow.className = "jdropdown-group-arrow jdropdown-group-arrow-down";
                      groupName.appendChild(groupArrow);
                      var groupContent = document.createElement("div");
                      groupContent.className = "jdropdown-group-items";
                      for (var j = 0; j < groups[groupNames[i2]].length; j++) {
                        var item = obj2.createItem(data[groups[groupNames[i2]][j]], group, groupNames[i2]);
                        if (obj2.options.lazyLoading == false || counter < 200) {
                          groupContent.appendChild(item.element);
                          counter++;
                        }
                      }
                      group.appendChild(groupName);
                      group.appendChild(groupContent);
                      obj2.groups.push(group);
                      if (groupContent.children.length > 0) {
                        content.appendChild(group);
                      }
                    }
                  }
                  if (items.length) {
                    for (var i2 = 0; i2 < items.length; i2++) {
                      var item = obj2.createItem(data[items[i2]]);
                      if (obj2.options.lazyLoading == false || counter < 200) {
                        content.appendChild(item.element);
                        counter++;
                      }
                    }
                  }
                }
              };
              obj2.setData = function(data) {
                resetValue();
                content.textContent = "";
                obj2.header.value = "";
                obj2.items = [];
                if (data && data.length) {
                  for (var i2 = 0; i2 < data.length; i2++) {
                    if (typeof data[i2] != "object") {
                      if (!obj2.options.format) {
                        data[i2] = {
                          value: data[i2],
                          text: data[i2]
                        };
                      } else {
                        data[i2] = {
                          id: data[i2],
                          name: data[i2]
                        };
                      }
                    }
                  }
                  obj2.appendData(data);
                  obj2.options.data = data;
                } else {
                  obj2.options.data = [];
                }
                obj2.close();
              };
              obj2.getData = function() {
                return obj2.options.data;
              };
              obj2.getPosition = function(val) {
                for (var i2 = 0; i2 < obj2.items.length; i2++) {
                  if (Value(i2) == val) {
                    return i2;
                  }
                }
                return false;
              };
              obj2.getText = function(asArray) {
                var v = getText();
                if (asArray) {
                  return v;
                } else {
                  return v.join("; ");
                }
              };
              obj2.getValue = function(asArray) {
                var v = getValue();
                if (asArray) {
                  return v;
                } else {
                  return v.join(";");
                }
              };
              var change = function(oldValue) {
                if (el2.value != obj2.options.value) {
                  el2.value = obj2.options.value;
                  if (typeof el2.oninput == "function") {
                    el2.oninput({
                      type: "input",
                      target: el2,
                      value: el2.value
                    });
                  }
                }
                if (typeof obj2.options.onchange == "function") {
                  obj2.options.onchange(el2, obj2, oldValue, obj2.options.value);
                }
              };
              obj2.setValue = function(newValue) {
                var oldValue = obj2.getValue();
                if (Array.isArray(newValue)) {
                  newValue = newValue.join(";");
                }
                if (oldValue !== newValue) {
                  applyValue(newValue);
                  change(oldValue);
                }
              };
              obj2.resetSelected = function() {
                obj2.setValue(null);
              };
              obj2.selectIndex = function(index, force) {
                var index = parseInt(index);
                if (obj2.items && obj2.items[index] && (force === true || obj2.items[index].data.disabled !== true)) {
                  obj2.setCursor(index, false);
                  if (!obj2.options.multiple) {
                    if (obj2.items[index].selected) {
                      if (obj2.options.allowEmpty !== false) {
                        obj2.setValue(null);
                      }
                    } else {
                      obj2.setValue(Value(index));
                    }
                    obj2.close();
                  } else {
                    var oldValue = obj2.options.value;
                    if (obj2.items[index].selected) {
                      obj2.items[index].element.classList.remove("jdropdown-selected");
                      obj2.items[index].selected = false;
                      delete obj2.value[Value(index)];
                    } else {
                      obj2.items[index].element.classList.add("jdropdown-selected");
                      obj2.items[index].selected = true;
                      obj2.value[Value(index)] = Text(index);
                    }
                    obj2.options.value = Object.keys(obj2.value).join(";");
                    if (obj2.options.autocomplete == false) {
                      obj2.header.value = getText().join("; ");
                    }
                    change(oldValue);
                  }
                }
              };
              obj2.selectItem = function(item) {
                obj2.selectIndex(item.indexValue);
              };
              var exists = function(k, result) {
                for (var j = 0; j < result.length; j++) {
                  if (!obj2.options.format) {
                    if (result[j].value == k) {
                      return true;
                    }
                  } else {
                    if (result[j].id == k) {
                      return true;
                    }
                  }
                }
                return false;
              };
              obj2.find = function(str) {
                if (obj2.search == str.trim()) {
                  return false;
                }
                obj2.search = str;
                obj2.setCursor();
                if (obj2.groups.length) {
                  for (var i2 = 0; i2 < obj2.groups.length; i2++) {
                    obj2.groups[i2].lastChild.textContent = "";
                  }
                }
                content.textContent = "";
                if (obj2.options.remoteSearch == true) {
                  obj2.results = null;
                  var url = obj2.options.url;
                  let o = {
                    url,
                    method: "GET",
                    data: { q: str },
                    dataType: "json",
                    success: function(result) {
                      obj2.items = [];
                      var current = Object.keys(obj2.value);
                      if (current.length) {
                        for (var i3 = 0; i3 < current.length; i3++) {
                          if (!exists(current[i3], result)) {
                            if (!obj2.options.format) {
                              result.unshift({ value: current[i3], text: obj2.value[current[i3]] });
                            } else {
                              result.unshift({ id: current[i3], name: obj2.value[current[i3]] });
                            }
                          }
                        }
                      }
                      obj2.appendData(result);
                      if (!result.length) {
                        content.style.display = "none";
                      } else {
                        content.style.display = "";
                      }
                      if (typeof obj2.options.onsearch === "function") {
                        obj2.options.onsearch(obj2, result);
                      }
                    }
                  };
                  if (typeof obj2.options.onbeforesearch === "function") {
                    let ret = obj2.options.onbeforesearch(obj2, o);
                    if (ret === false) {
                      return;
                    } else if (typeof ret === "object") {
                      o = ret;
                    }
                  }
                  ajax(o);
                } else {
                  str = new RegExp(str, "gi");
                  var results = [];
                  for (var i2 = 0; i2 < obj2.items.length; i2++) {
                    var label = Text(i2);
                    var title = obj2.items[i2].data.title || "";
                    var groupName = obj2.items[i2].data.group || "";
                    var synonym = obj2.items[i2].data.synonym || "";
                    if (synonym) {
                      synonym = synonym.join(" ");
                    }
                    if (str == null || obj2.items[i2].selected == true || label.toString().match(str) || title.match(str) || groupName.match(str) || synonym.match(str)) {
                      results.push(obj2.items[i2]);
                    }
                  }
                  if (!results.length) {
                    content.style.display = "none";
                    obj2.results = null;
                  } else {
                    content.style.display = "";
                    obj2.results = results;
                    var number2 = results.length || 0;
                    if (obj2.options.lazyLoading == true && number2 > 200) {
                      number2 = 200;
                    }
                    for (var i2 = 0; i2 < number2; i2++) {
                      if (obj2.results[i2].group) {
                        if (!obj2.results[i2].group.parentNode) {
                          content.appendChild(obj2.results[i2].group);
                        }
                        obj2.results[i2].group.lastChild.appendChild(obj2.results[i2].element);
                      } else {
                        content.appendChild(obj2.results[i2].element);
                      }
                    }
                  }
                }
                if (obj2.options.autofocus == true) {
                  obj2.first();
                }
              };
              obj2.open = function() {
                if (!el2.classList.contains("jdropdown-focus")) {
                  Component.current = obj2;
                  tracking(obj2, true);
                  el2.classList.add("jdropdown-focus");
                  if (helpers.getWindowWidth() < 800) {
                    if (obj2.options.type == null || obj2.options.type == "picker") {
                      animation.slideBottom(container, 1);
                    }
                  }
                  if (obj2.options.autocomplete == true) {
                    obj2.header.value = obj2.search;
                    obj2.header.focus();
                  }
                  var k = getValue();
                  if (k[0]) {
                    var cursor = obj2.getPosition(k[0]);
                    if (cursor !== false) {
                      obj2.setCursor(cursor);
                    }
                  }
                  if (!obj2.options.type || obj2.options.type == "default") {
                    var rect = el2.getBoundingClientRect();
                    var rectContainer = container.getBoundingClientRect();
                    if (obj2.options.position) {
                      container.style.position = "fixed";
                      if (window.innerHeight < rect.bottom + rectContainer.height) {
                        container.style.top = "";
                        container.style.bottom = window.innerHeight - rect.top + 1 + "px";
                      } else {
                        container.style.top = rect.bottom + "px";
                        container.style.bottom = "";
                      }
                      container.style.left = rect.left + "px";
                    } else {
                      if (window.innerHeight < rect.bottom + rectContainer.height) {
                        container.style.top = "";
                        container.style.bottom = rect.height + 1 + "px";
                      } else {
                        container.style.top = "";
                        container.style.bottom = "";
                      }
                    }
                    container.style.minWidth = rect.width + "px";
                    if (obj2.options.maxWidth) {
                      container.style.maxWidth = obj2.options.maxWidth;
                    }
                    if (!obj2.items.length && obj2.options.autocomplete == true) {
                      content.style.display = "none";
                    } else {
                      content.style.display = "";
                    }
                  }
                }
                if (typeof obj2.options.onopen == "function") {
                  obj2.options.onopen(el2);
                }
              };
              obj2.close = function(ignoreEvents) {
                if (el2.classList.contains("jdropdown-focus")) {
                  obj2.header.value = obj2.getText();
                  obj2.setCursor();
                  if (!ignoreEvents && typeof obj2.options.onclose == "function") {
                    obj2.options.onclose(el2);
                  }
                  if (obj2.header.blur) {
                    obj2.header.blur();
                  }
                  el2.classList.remove("jdropdown-focus");
                  tracking(obj2, false);
                  Component.current = null;
                }
                return obj2.getValue();
              };
              obj2.setCursor = function(index, setPosition) {
                if (obj2.currentIndex != null) {
                  if (obj2.items && obj2.items[obj2.currentIndex]) {
                    obj2.items[obj2.currentIndex].element.classList.remove("jdropdown-cursor");
                  }
                }
                if (index == void 0) {
                  obj2.currentIndex = null;
                } else {
                  index = parseInt(index);
                  if (obj2.items[index].element.parentNode) {
                    obj2.items[index].element.classList.add("jdropdown-cursor");
                    obj2.currentIndex = index;
                    if (setPosition !== false && obj2.items[obj2.currentIndex].element) {
                      var container2 = content.scrollTop;
                      var element = obj2.items[obj2.currentIndex].element;
                      content.scrollTop = element.offsetTop - element.scrollTop + element.clientTop - 95;
                    }
                  }
                }
              };
              obj2.resetCursor = obj2.setCursor;
              obj2.updateCursor = obj2.setCursor;
              obj2.reset = function() {
                obj2.setCursor();
                obj2.setValue(null);
              };
              obj2.first = function() {
                if (obj2.options.lazyLoading === true) {
                  obj2.loadFirst();
                }
                var items = content.querySelectorAll(".jdropdown-item");
                if (items.length) {
                  var newIndex = items[0].indexValue;
                  obj2.setCursor(newIndex);
                }
              };
              obj2.last = function() {
                if (obj2.options.lazyLoading === true) {
                  obj2.loadLast();
                }
                var items = content.querySelectorAll(".jdropdown-item");
                if (items.length) {
                  var newIndex = items[items.length - 1].indexValue;
                  obj2.setCursor(newIndex);
                }
              };
              obj2.next = function(letter) {
                var newIndex = null;
                if (letter) {
                  if (letter.length == 1) {
                    var current = obj2.currentIndex || -1;
                    letter = letter.toLowerCase();
                    var e = null;
                    var l = null;
                    var items = content.querySelectorAll(".jdropdown-item");
                    if (items.length) {
                      for (var i2 = 0; i2 < items.length; i2++) {
                        if (items[i2].indexValue > current) {
                          if (e = obj2.items[items[i2].indexValue]) {
                            if (l = e.element.innerText[0]) {
                              l = l.toLowerCase();
                              if (letter == l) {
                                newIndex = items[i2].indexValue;
                                break;
                              }
                            }
                          }
                        }
                      }
                      obj2.setCursor(newIndex);
                    }
                  }
                } else {
                  if (obj2.currentIndex == void 0 || obj2.currentIndex == null) {
                    obj2.first();
                  } else {
                    var element = obj2.items[obj2.currentIndex].element;
                    var next = element.nextElementSibling;
                    if (next) {
                      if (next.classList.contains("jdropdown-group")) {
                        next = next.lastChild.firstChild;
                      }
                      newIndex = next.indexValue;
                    } else {
                      if (element.parentNode.classList.contains("jdropdown-group-items")) {
                        if (next = element.parentNode.parentNode.nextElementSibling) {
                          if (next.classList.contains("jdropdown-group")) {
                            next = next.lastChild.firstChild;
                          } else if (next.classList.contains("jdropdown-item")) {
                            newIndex = next.indexValue;
                          } else {
                            next = null;
                          }
                        }
                        if (next) {
                          newIndex = next.indexValue;
                        }
                      }
                    }
                    if (newIndex !== null) {
                      obj2.setCursor(newIndex);
                    }
                  }
                }
              };
              obj2.prev = function() {
                var newIndex = null;
                if (obj2.currentIndex === null) {
                  obj2.first();
                } else {
                  var element = obj2.items[obj2.currentIndex].element;
                  var prev = element.previousElementSibling;
                  if (prev) {
                    if (prev.classList.contains("jdropdown-group")) {
                      prev = prev.lastChild.lastChild;
                    }
                    newIndex = prev.indexValue;
                  } else {
                    if (element.parentNode.classList.contains("jdropdown-group-items")) {
                      if (prev = element.parentNode.parentNode.previousElementSibling) {
                        if (prev.classList.contains("jdropdown-group")) {
                          prev = prev.lastChild.lastChild;
                        } else if (prev.classList.contains("jdropdown-item")) {
                          newIndex = prev.indexValue;
                        } else {
                          prev = null;
                        }
                      }
                      if (prev) {
                        newIndex = prev.indexValue;
                      }
                    }
                  }
                }
                if (newIndex !== null) {
                  obj2.setCursor(newIndex);
                }
              };
              obj2.loadFirst = function() {
                if (obj2.results) {
                  var results = obj2.results;
                } else {
                  var results = obj2.items;
                }
                var number2 = results.length || 0;
                if (obj2.options.lazyLoading == true && number2 > 200) {
                  number2 = 200;
                }
                content.textContent = "";
                for (var i2 = 0; i2 < number2; i2++) {
                  if (results[i2].group) {
                    if (!results[i2].group.parentNode) {
                      content.appendChild(results[i2].group);
                    }
                    results[i2].group.lastChild.appendChild(results[i2].element);
                  } else {
                    content.appendChild(results[i2].element);
                  }
                }
                content.scrollTop = 0;
              };
              obj2.loadLast = function() {
                if (obj2.results) {
                  var results = obj2.results;
                } else {
                  var results = obj2.items;
                }
                var number2 = results.length;
                if (number2 > 200) {
                  number2 = number2 - 200;
                  content.textContent = "";
                  for (var i2 = number2; i2 < results.length; i2++) {
                    if (results[i2].group) {
                      if (!results[i2].group.parentNode) {
                        content.appendChild(results[i2].group);
                      }
                      results[i2].group.lastChild.appendChild(results[i2].element);
                    } else {
                      content.appendChild(results[i2].element);
                    }
                  }
                  content.scrollTop = content.scrollHeight;
                }
              };
              obj2.loadUp = function() {
                var test = false;
                if (obj2.results) {
                  var results = obj2.results;
                } else {
                  var results = obj2.items;
                }
                var items = content.querySelectorAll(".jdropdown-item");
                var fistItem = items[0].indexValue;
                fistItem = obj2.items[fistItem];
                var index = results.indexOf(fistItem) - 1;
                if (index > 0) {
                  var number2 = 0;
                  while (index > 0 && results[index] && number2 < 200) {
                    if (results[index].group) {
                      if (!results[index].group.parentNode) {
                        content.insertBefore(results[index].group, content.firstChild);
                      }
                      results[index].group.lastChild.insertBefore(results[index].element, results[index].group.lastChild.firstChild);
                    } else {
                      content.insertBefore(results[index].element, content.firstChild);
                    }
                    index--;
                    number2++;
                  }
                  test = true;
                }
                return test;
              };
              obj2.loadDown = function() {
                var test = false;
                if (obj2.results) {
                  var results = obj2.results;
                } else {
                  var results = obj2.items;
                }
                var items = content.querySelectorAll(".jdropdown-item");
                var lastItem = items[items.length - 1].indexValue;
                lastItem = obj2.items[lastItem];
                var index = results.indexOf(lastItem) + 1;
                if (index < results.length) {
                  var number2 = 0;
                  while (index < results.length && results[index] && number2 < 200) {
                    if (results[index].group) {
                      if (!results[index].group.parentNode) {
                        content.appendChild(results[index].group);
                      }
                      results[index].group.lastChild.appendChild(results[index].element);
                    } else {
                      content.appendChild(results[index].element);
                    }
                    index++;
                    number2++;
                  }
                  test = true;
                }
                return test;
              };
              init();
              return obj2;
            };
            Component.keydown = function(e) {
              var dropdown2 = null;
              if (dropdown2 = Component.current) {
                if (e.which == 13 || e.which == 9) {
                  if (dropdown2.header.value && dropdown2.currentIndex == null && dropdown2.options.newOptions) {
                    dropdown2.add();
                  } else {
                    if (dropdown2.currentIndex == null && dropdown2.options.autocomplete == true && dropdown2.header.value != "") {
                      dropdown2.find(dropdown2.header.value);
                    }
                    dropdown2.selectIndex(dropdown2.currentIndex);
                  }
                } else if (e.which == 38) {
                  if (dropdown2.currentIndex == null) {
                    dropdown2.first();
                  } else if (dropdown2.currentIndex > 0) {
                    dropdown2.prev();
                  }
                  e.preventDefault();
                } else if (e.which == 40) {
                  if (dropdown2.currentIndex == null) {
                    dropdown2.first();
                  } else if (dropdown2.currentIndex + 1 < dropdown2.items.length) {
                    dropdown2.next();
                  }
                  e.preventDefault();
                } else if (e.which == 36) {
                  dropdown2.first();
                  if (!e.target.classList.contains("jdropdown-header")) {
                    e.preventDefault();
                  }
                } else if (e.which == 35) {
                  dropdown2.last();
                  if (!e.target.classList.contains("jdropdown-header")) {
                    e.preventDefault();
                  }
                } else if (e.which == 27) {
                  dropdown2.close();
                } else if (e.which == 33) {
                  if (dropdown2.currentIndex == null) {
                    dropdown2.first();
                  } else if (dropdown2.currentIndex > 0) {
                    for (var i2 = 0; i2 < 7; i2++) {
                      dropdown2.prev();
                    }
                  }
                  e.preventDefault();
                } else if (e.which == 34) {
                  if (dropdown2.currentIndex == null) {
                    dropdown2.first();
                  } else if (dropdown2.currentIndex + 1 < dropdown2.items.length) {
                    for (var i2 = 0; i2 < 7; i2++) {
                      dropdown2.next();
                    }
                  }
                  e.preventDefault();
                }
              }
            };
            Component.mouseup = function(e) {
              var element = helpers.findElement(e.target, "jdropdown");
              if (element) {
                var dropdown2 = element.dropdown;
                if (e.target.classList.contains("jdropdown-header")) {
                  if (element.classList.contains("jdropdown-focus") && element.classList.contains("jdropdown-default")) {
                    var rect = element.getBoundingClientRect();
                    if (e.changedTouches && e.changedTouches[0]) {
                      var x2 = e.changedTouches[0].clientX;
                      var y2 = e.changedTouches[0].clientY;
                    } else {
                      var x2 = e.clientX;
                      var y2 = e.clientY;
                    }
                    if (rect.width - (x2 - rect.left) < 30) {
                      if (e.target.classList.contains("jdropdown-add")) {
                        dropdown2.add();
                      } else {
                        dropdown2.close();
                      }
                    } else {
                      if (dropdown2.options.autocomplete == false) {
                        dropdown2.close();
                      }
                    }
                  } else {
                    dropdown2.open();
                  }
                } else if (e.target.classList.contains("jdropdown-group-name")) {
                  var items = e.target.nextSibling.children;
                  if (e.target.nextSibling.style.display != "none") {
                    for (var i2 = 0; i2 < items.length; i2++) {
                      if (items[i2].style.display != "none") {
                        dropdown2.selectItem(items[i2]);
                      }
                    }
                  }
                } else if (e.target.classList.contains("jdropdown-group-arrow")) {
                  if (e.target.classList.contains("jdropdown-group-arrow-down")) {
                    e.target.classList.remove("jdropdown-group-arrow-down");
                    e.target.classList.add("jdropdown-group-arrow-up");
                    e.target.parentNode.nextSibling.style.display = "none";
                  } else {
                    e.target.classList.remove("jdropdown-group-arrow-up");
                    e.target.classList.add("jdropdown-group-arrow-down");
                    e.target.parentNode.nextSibling.style.display = "";
                  }
                } else if (e.target.classList.contains("jdropdown-item")) {
                  dropdown2.selectItem(e.target);
                } else if (e.target.classList.contains("jdropdown-image")) {
                  dropdown2.selectItem(e.target.parentNode);
                } else if (e.target.classList.contains("jdropdown-description")) {
                  dropdown2.selectItem(e.target.parentNode);
                } else if (e.target.classList.contains("jdropdown-title")) {
                  dropdown2.selectItem(e.target.parentNode.parentNode);
                } else if (e.target.classList.contains("jdropdown-close") || e.target.classList.contains("jdropdown-backdrop")) {
                  dropdown2.close();
                }
              }
            };
            Component.extractFromDom = function(el2, options2) {
              var select = el2;
              if (!options2) {
                options2 = {};
              }
              if (el2.getAttribute("multiple") && (!options2 || options2.multiple == void 0)) {
                options2.multiple = true;
              }
              if (el2.getAttribute("placeholder") && (!options2 || options2.placeholder == void 0)) {
                options2.placeholder = el2.getAttribute("placeholder");
              }
              if (el2.getAttribute("data-autocomplete") && (!options2 || options2.autocomplete == void 0)) {
                options2.autocomplete = true;
              }
              if (!options2 || options2.width == void 0) {
                options2.width = el2.offsetWidth;
              }
              if (el2.value && (!options2 || options2.value == void 0)) {
                options2.value = el2.value;
              }
              if (!options2 || options2.data == void 0) {
                options2.data = [];
                for (var j = 0; j < el2.children.length; j++) {
                  if (el2.children[j].tagName == "OPTGROUP") {
                    for (var i2 = 0; i2 < el2.children[j].children.length; i2++) {
                      options2.data.push({
                        value: el2.children[j].children[i2].value,
                        text: el2.children[j].children[i2].textContent,
                        group: el2.children[j].getAttribute("label")
                      });
                    }
                  } else {
                    options2.data.push({
                      value: el2.children[j].value,
                      text: el2.children[j].textContent
                    });
                  }
                }
              }
              if (!options2 || options2.onchange == void 0) {
                options2.onchange = function(a, b, c, d) {
                  if (options2.multiple == true) {
                    if (obj.items[b].classList.contains("jdropdown-selected")) {
                      select.options[b].setAttribute("selected", "selected");
                    } else {
                      select.options[b].removeAttribute("selected");
                    }
                  } else {
                    select.value = d;
                  }
                };
              }
              var div2 = document.createElement("div");
              el2.parentNode.insertBefore(div2, el2);
              el2.style.display = "none";
              el2 = div2;
              return { el: el2, options: options2 };
            };
            return Component;
          }
          var dropdown = Dropdown();
          ;
          function Picker(el2, options2) {
            if (el2.picker) {
              return el2.picker.setOptions(options2, true);
            }
            var obj2 = { type: "picker" };
            obj2.options = {};
            var dropdownHeader = null;
            var dropdownContent = null;
            var isDOM = function(o) {
              return o instanceof Element || o instanceof HTMLDocument;
            };
            var createContent = function() {
              dropdownContent.innerHTML = "";
              var keys = Object.keys(obj2.options.data);
              for (var i2 = 0; i2 < keys.length; i2++) {
                var dropdownItem = document.createElement("div");
                dropdownItem.classList.add("jpicker-item");
                dropdownItem.k = keys[i2];
                dropdownItem.v = obj2.options.data[keys[i2]];
                var item = obj2.getLabel(keys[i2], dropdownItem);
                if (isDOM(item)) {
                  dropdownItem.appendChild(item);
                } else {
                  dropdownItem.innerHTML = item;
                }
                dropdownContent.appendChild(dropdownItem);
              }
            };
            obj2.setOptions = function(options3, reset) {
              var defaults2 = {
                value: 0,
                data: null,
                render: null,
                onchange: null,
                onmouseover: null,
                onselect: null,
                onopen: null,
                onclose: null,
                onload: null,
                width: null,
                header: true,
                right: false,
                bottom: false,
                content: false,
                columns: null,
                grid: null,
                height: null
              };
              if (options3 && options3.options) {
                options3.data = options3.options;
              }
              for (var property2 in defaults2) {
                if (options3 && options3.hasOwnProperty(property2)) {
                  obj2.options[property2] = options3[property2];
                } else {
                  if (typeof obj2.options[property2] == "undefined" || reset === true) {
                    obj2.options[property2] = defaults2[property2];
                  }
                }
              }
              if (obj2.options.header === false) {
                dropdownHeader.style.display = "none";
              } else {
                dropdownHeader.style.display = "";
              }
              if (obj2.options.width) {
                dropdownHeader.style.width = parseInt(obj2.options.width) + "px";
              } else {
                dropdownHeader.style.width = "";
              }
              if (obj2.options.height) {
                dropdownContent.style.maxHeight = obj2.options.height + "px";
                dropdownContent.style.overflow = "scroll";
              } else {
                dropdownContent.style.overflow = "";
              }
              if (obj2.options.columns > 0) {
                if (!obj2.options.grid) {
                  dropdownContent.classList.add("jpicker-columns");
                  dropdownContent.style.width = obj2.options.width ? obj2.options.width : 36 * obj2.options.columns + "px";
                } else {
                  dropdownContent.classList.add("jpicker-grid");
                  dropdownContent.style.gridTemplateColumns = "repeat(" + obj2.options.grid + ", 1fr)";
                }
              }
              if (isNaN(parseInt(obj2.options.value))) {
                obj2.options.value = 0;
              }
              createContent();
              obj2.setValue(obj2.options.value);
              return obj2;
            };
            obj2.getValue = function() {
              return obj2.options.value;
            };
            obj2.setValue = function(k, e) {
              obj2.setLabel(k);
              obj2.options.value = String(k);
              if (el2.value != obj2.options.value) {
                el2.value = obj2.options.value;
                if (typeof el2.oninput == "function") {
                  el2.oninput({
                    type: "input",
                    target: el2,
                    value: el2.value
                  });
                }
              }
              if (dropdownContent.children[k] && dropdownContent.children[k].getAttribute("type") !== "generic") {
                obj2.close();
              }
              if (e) {
                if (typeof obj2.options.onchange == "function") {
                  var v = obj2.options.data[k];
                  obj2.options.onchange(el2, obj2, v, v, k, e);
                }
              }
            };
            obj2.getLabel = function(v, item) {
              var label = obj2.options.data[v] || null;
              if (typeof obj2.options.render == "function") {
                label = obj2.options.render(label, item);
              }
              return label;
            };
            obj2.setLabel = function(v) {
              var item;
              if (obj2.options.content) {
                item = '<i class="material-icons">' + obj2.options.content + "</i>";
              } else {
                item = obj2.getLabel(v, null);
              }
              if (isDOM(item)) {
                dropdownHeader.innerHTML = "";
                dropdownHeader.appendChild(item);
              } else {
                dropdownHeader.innerHTML = item;
              }
            };
            obj2.open = function() {
              if (!el2.classList.contains("jpicker-focus")) {
                tracking(obj2, true);
                el2.classList.add("jpicker-focus");
                el2.focus();
                var top = 0;
                var left = 0;
                dropdownContent.style.marginLeft = "";
                var rectHeader = dropdownHeader.getBoundingClientRect();
                var rectContent = dropdownContent.getBoundingClientRect();
                if (window.innerHeight < rectHeader.bottom + rectContent.height || obj2.options.bottom) {
                  top = -1 * (rectContent.height + 4);
                } else {
                  top = rectHeader.height + 4;
                }
                if (obj2.options.right === true) {
                  left = -1 * rectContent.width + rectHeader.width;
                }
                if (rectContent.left + left < 0) {
                  left = left + rectContent.left + 10;
                }
                if (rectContent.left + rectContent.width > window.innerWidth) {
                  left = -1 * (10 + rectContent.left + rectContent.width - window.innerWidth);
                }
                dropdownContent.style.marginTop = parseInt(top) + "px";
                dropdownContent.style.marginLeft = parseInt(left) + "px";
                if (typeof obj2.options.onopen == "function") {
                  obj2.options.onopen(el2, obj2);
                }
              }
            };
            obj2.close = function() {
              if (el2.classList.contains("jpicker-focus")) {
                el2.classList.remove("jpicker-focus");
                tracking(obj2, false);
                if (typeof obj2.options.onclose == "function") {
                  obj2.options.onclose(el2, obj2);
                }
              }
            };
            var init = function() {
              el2.classList.add("jpicker");
              el2.setAttribute("tabindex", "900");
              el2.onmousedown = function(e) {
                if (!el2.classList.contains("jpicker-focus")) {
                  obj2.open();
                }
              };
              dropdownHeader = document.createElement("div");
              dropdownHeader.classList.add("jpicker-header");
              dropdownContent = document.createElement("div");
              dropdownContent.classList.add("jpicker-content");
              dropdownContent.onclick = function(e) {
                var item = helpers.findElement(e.target, "jpicker-item");
                if (item) {
                  if (item.parentNode === dropdownContent) {
                    obj2.setValue(item.k, e);
                  }
                }
              };
              el2.appendChild(dropdownHeader);
              el2.appendChild(dropdownContent);
              el2.value = options2.value || 0;
              obj2.setOptions(options2);
              if (typeof obj2.options.onload == "function") {
                obj2.options.onload(el2, obj2);
              }
              el2.change = obj2.setValue;
              el2.val = function(val) {
                if (val === void 0) {
                  return obj2.getValue();
                } else {
                  obj2.setValue(val);
                }
              };
              el2.picker = obj2;
            };
            init();
            return obj2;
          }
          ;
          function Toolbar(el2, options2) {
            var obj2 = { type: "toolbar" };
            obj2.options = {};
            var defaults2 = {
              app: null,
              container: false,
              badge: false,
              title: false,
              responsive: false,
              maxWidth: null,
              bottom: true,
              items: []
            };
            for (var property2 in defaults2) {
              if (options2 && options2.hasOwnProperty(property2)) {
                obj2.options[property2] = options2[property2];
              } else {
                obj2.options[property2] = defaults2[property2];
              }
            }
            if (!el2 && options2.app && options2.app.el) {
              el2 = document.createElement("div");
              options2.app.el.appendChild(el2);
            }
            var toolbarArrow = document.createElement("div");
            toolbarArrow.classList.add("jtoolbar-item");
            toolbarArrow.classList.add("jtoolbar-arrow");
            var toolbarFloating = document.createElement("div");
            toolbarFloating.classList.add("jtoolbar-floating");
            toolbarArrow.appendChild(toolbarFloating);
            obj2.selectItem = function(element) {
              var elements = toolbarContent.children;
              for (var i2 = 0; i2 < elements.length; i2++) {
                if (element != elements[i2]) {
                  elements[i2].classList.remove("jtoolbar-selected");
                }
              }
              element.classList.add("jtoolbar-selected");
            };
            obj2.hide = function() {
              animation.slideBottom(el2, 0, function() {
                el2.style.display = "none";
              });
            };
            obj2.show = function() {
              el2.style.display = "";
              animation.slideBottom(el2, 1);
            };
            obj2.get = function() {
              return el2;
            };
            obj2.setBadge = function(index, value2) {
              toolbarContent.children[index].children[1].firstChild.innerHTML = value2;
            };
            obj2.destroy = function() {
              toolbar.remove();
              el2.innerHTML = "";
            };
            obj2.update = function(a, b) {
              for (var i2 = 0; i2 < toolbarContent.children.length; i2++) {
                var toolbarItem = toolbarContent.children[i2];
                if (typeof toolbarItem.updateState == "function") {
                  toolbarItem.updateState(el2, obj2, toolbarItem, a, b);
                }
              }
              for (var i2 = 0; i2 < toolbarFloating.children.length; i2++) {
                var toolbarItem = toolbarFloating.children[i2];
                if (typeof toolbarItem.updateState == "function") {
                  toolbarItem.updateState(el2, obj2, toolbarItem, a, b);
                }
              }
            };
            obj2.create = function(items) {
              toolbarContent.innerHTML = "";
              for (var i2 = 0; i2 < items.length; i2++) {
                var toolbarItem = document.createElement("div");
                toolbarItem.classList.add("jtoolbar-item");
                if (items[i2].width) {
                  toolbarItem.style.width = parseInt(items[i2].width) + "px";
                }
                if (items[i2].k) {
                  toolbarItem.k = items[i2].k;
                }
                if (items[i2].tooltip) {
                  toolbarItem.setAttribute("title", items[i2].tooltip);
                }
                if (items[i2].id) {
                  toolbarItem.setAttribute("id", items[i2].id);
                }
                if (items[i2].updateState) {
                  toolbarItem.updateState = items[i2].updateState;
                }
                if (items[i2].active) {
                  toolbarItem.classList.add("jtoolbar-active");
                }
                if (items[i2].disabled) {
                  toolbarItem.classList.add("jtoolbar-disabled");
                }
                if (items[i2].type == "select" || items[i2].type == "dropdown") {
                  Picker(toolbarItem, items[i2]);
                } else if (items[i2].type == "divisor") {
                  toolbarItem.classList.add("jtoolbar-divisor");
                } else if (items[i2].type == "label") {
                  toolbarItem.classList.add("jtoolbar-label");
                  toolbarItem.innerHTML = items[i2].content;
                } else {
                  var toolbarIcon = document.createElement("i");
                  if (typeof items[i2].class === "undefined") {
                    toolbarIcon.classList.add("material-icons");
                  } else {
                    var c = items[i2].class.split(" ");
                    for (var j = 0; j < c.length; j++) {
                      toolbarIcon.classList.add(c[j]);
                    }
                  }
                  toolbarIcon.innerHTML = items[i2].content ? items[i2].content : "";
                  toolbarItem.appendChild(toolbarIcon);
                  if (obj2.options.badge == true) {
                    var toolbarBadge = document.createElement("div");
                    toolbarBadge.classList.add("jbadge");
                    var toolbarBadgeContent = document.createElement("div");
                    toolbarBadgeContent.innerHTML = items[i2].badge ? items[i2].badge : "";
                    toolbarBadge.appendChild(toolbarBadgeContent);
                    toolbarItem.appendChild(toolbarBadge);
                  }
                  if (items[i2].title) {
                    if (obj2.options.title == true) {
                      var toolbarTitle = document.createElement("span");
                      toolbarTitle.innerHTML = items[i2].title;
                      toolbarItem.appendChild(toolbarTitle);
                    } else {
                      toolbarItem.setAttribute("title", items[i2].title);
                    }
                  }
                  if (obj2.options.app && items[i2].route) {
                    toolbarItem.route = items[i2].route;
                    toolbarItem.onclick = function() {
                      obj2.options.app.pages(this.route);
                    };
                    obj2.options.app.pages(items[i2].route, {
                      toolbarItem,
                      closed: true
                    });
                  }
                  if (typeof items[i2].render === "function") {
                    items[i2].render(toolbarItem, items[i2]);
                  }
                }
                if (items[i2].onclick) {
                  toolbarItem.onclick = items[i2].onclick.bind(items[i2], el2, obj2, toolbarItem);
                }
                toolbarContent.appendChild(toolbarItem);
              }
              setTimeout(function() {
                obj2.refresh();
              }, 0);
            };
            obj2.open = function() {
              toolbarArrow.classList.add("jtoolbar-arrow-selected");
              var rectElement = el2.getBoundingClientRect();
              var rect = toolbarFloating.getBoundingClientRect();
              if (rect.bottom > window.innerHeight || obj2.options.bottom) {
                toolbarFloating.style.bottom = "0";
              } else {
                toolbarFloating.style.removeProperty("bottom");
              }
              toolbarFloating.style.right = "0";
              toolbarArrow.children[0].focus();
              tracking(obj2, true);
            };
            obj2.close = function() {
              toolbarArrow.classList.remove("jtoolbar-arrow-selected");
              tracking(obj2, false);
            };
            obj2.refresh = function() {
              if (obj2.options.responsive == true) {
                var rect = el2.parentNode.getBoundingClientRect();
                if (!obj2.options.maxWidth) {
                  obj2.options.maxWidth = rect.width;
                }
                var available = parseInt(obj2.options.maxWidth);
                if (toolbarArrow.parentNode) {
                  toolbarArrow.parentNode.removeChild(toolbarArrow);
                }
                while (toolbarFloating.firstChild) {
                  toolbarContent.appendChild(toolbarFloating.firstChild);
                }
                if (available < toolbarContent.offsetWidth) {
                  available -= 50;
                  while (toolbarContent.lastChild && available < toolbarContent.offsetWidth) {
                    toolbarFloating.insertBefore(toolbarContent.lastChild, toolbarFloating.firstChild);
                  }
                }
                if (toolbarFloating.children.length > 0) {
                  toolbarContent.appendChild(toolbarArrow);
                }
              }
            };
            obj2.setReadonly = function(state) {
              state = state ? "add" : "remove";
              el2.classList[state]("jtoolbar-disabled");
            };
            el2.onclick = function(e) {
              var element = helpers.findElement(e.target, "jtoolbar-item");
              if (element) {
                obj2.selectItem(element);
              }
              if (e.target.classList.contains("jtoolbar-arrow")) {
                obj2.open();
              }
            };
            window.addEventListener("resize", function() {
              obj2.refresh();
            });
            el2.classList.add("jtoolbar");
            el2.innerHTML = "";
            if (obj2.options.container == true) {
              el2.classList.add("jtoolbar-container");
            }
            var toolbarContent = document.createElement("div");
            el2.appendChild(toolbarContent);
            if (obj2.options.app) {
              el2.classList.add("jtoolbar-mobile");
            }
            obj2.create(obj2.options.items);
            el2.toolbar = obj2;
            return obj2;
          }
          ;
          function Editor() {
            var Component = function(el2, options2) {
              var obj2 = { type: "editor" };
              obj2.options = {};
              var defaults2 = {
                // Load data from a remove location
                url: null,
                // Initial HTML content
                value: "",
                // Initial snippet
                snippet: null,
                // Add toolbar
                toolbar: true,
                toolbarOnTop: false,
                // Website parser is to read websites and images from cross domain
                remoteParser: null,
                // Placeholder
                placeholder: null,
                // Parse URL
                filterPaste: true,
                // Accept drop files
                dropZone: true,
                dropAsSnippet: false,
                acceptImages: true,
                acceptFiles: false,
                maxFileSize: 5e6,
                allowImageResize: true,
                // Style
                maxHeight: null,
                height: null,
                focus: false,
                // Events
                onclick: null,
                onfocus: null,
                onblur: null,
                onload: null,
                onkeyup: null,
                onkeydown: null,
                onchange: null,
                extensions: null,
                type: null
              };
              for (var property2 in defaults2) {
                if (options2 && options2.hasOwnProperty(property2)) {
                  obj2.options[property2] = options2[property2];
                } else {
                  obj2.options[property2] = defaults2[property2];
                }
              }
              var editorTimer = null;
              var editorAction = null;
              var files = [];
              obj2.el = el2;
              if (typeof obj2.options.onclick == "function") {
                el2.onclick = function(e) {
                  obj2.options.onclick(el2, obj2, e);
                };
              }
              el2.classList.add("jeditor-container");
              var snippet = document.createElement("div");
              snippet.className = "jsnippet";
              snippet.setAttribute("contenteditable", false);
              var toolbar2 = document.createElement("div");
              toolbar2.className = "jeditor-toolbar";
              obj2.editor = document.createElement("div");
              obj2.editor.setAttribute("contenteditable", true);
              obj2.editor.setAttribute("spellcheck", false);
              obj2.editor.classList.add("jeditor");
              if (obj2.options.placeholder) {
                obj2.editor.setAttribute("data-placeholder", obj2.options.placeholder);
              }
              if (obj2.options.maxHeight || obj2.options.height) {
                obj2.editor.style.overflowY = "auto";
                if (obj2.options.maxHeight) {
                  obj2.editor.style.maxHeight = obj2.options.maxHeight;
                }
                if (obj2.options.height) {
                  obj2.editor.style.height = obj2.options.height;
                }
              }
              if (obj2.options.url) {
                ajax({
                  url: obj2.options.url,
                  dataType: "html",
                  success: function(result) {
                    obj2.editor.innerHTML = result;
                    Component.setCursor(obj2.editor, obj2.options.focus == "initial" ? true : false);
                  }
                });
              } else {
                if (obj2.options.value) {
                  obj2.editor.innerHTML = obj2.options.value;
                } else {
                  for (var i2 = 0; i2 < el2.children.length; i2++) {
                    obj2.editor.appendChild(el2.children[i2]);
                  }
                }
              }
              el2.innerHTML = "";
              var change = function(e) {
                if (typeof obj2.options.onchange == "function") {
                  obj2.options.onchange(el2, obj2, e);
                }
                obj2.options.value = obj2.getData();
                if (el2.value != obj2.options.value) {
                  el2.value = obj2.options.value;
                  if (typeof el2.oninput == "function") {
                    el2.oninput({
                      type: "input",
                      target: el2,
                      value: el2.value
                    });
                  }
                }
              };
              var extractImageFromHtml = function(html) {
                var div2 = document.createElement("div");
                div2.innerHTML = html;
                var img = div2.querySelectorAll("img");
                if (img.length) {
                  for (var i3 = 0; i3 < img.length; i3++) {
                    obj2.addImage(img[i3].src);
                  }
                }
              };
              var insertNodeAtCaret = function(newNode) {
                var sel, range;
                if (window.getSelection) {
                  sel = window.getSelection();
                  if (sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    var selectedText = range.toString();
                    range.deleteContents();
                    range.insertNode(newNode);
                    range.setStartAfter(newNode);
                    range.setEndAfter(newNode);
                    sel.removeAllRanges();
                    sel.addRange(range);
                  }
                }
              };
              var updateTotalImages = function() {
                var o = null;
                if (o = snippet.children[0]) {
                  if (!o.classList.contains("jslider-grid")) {
                    o.classList.add("jslider-grid");
                  }
                  var number2 = o.children.length;
                  o.setAttribute("data-number", number2 > 4 ? 4 : number2);
                  if (number2 > 4) {
                    o.setAttribute("data-total", number2 - 4);
                  } else {
                    o.removeAttribute("data-total");
                  }
                }
              };
              var appendImage = function(image) {
                if (!snippet.innerHTML) {
                  obj2.appendSnippet({});
                }
                snippet.children[0].appendChild(image);
                updateTotalImages();
              };
              obj2.appendSnippet = function(data) {
                snippet.innerHTML = "";
                var a = ["image", "title", "description", "host", "url"];
                for (var i3 = 0; i3 < a.length; i3++) {
                  var div2 = document.createElement("div");
                  div2.className = "jsnippet-" + a[i3];
                  div2.setAttribute("data-k", a[i3]);
                  snippet.appendChild(div2);
                  if (data[a[i3]]) {
                    if (a[i3] == "image") {
                      if (!Array.isArray(data.image)) {
                        data.image = [data.image];
                      }
                      for (var j = 0; j < data.image.length; j++) {
                        var img = document.createElement("img");
                        img.src = data.image[j];
                        div2.appendChild(img);
                      }
                    } else {
                      div2.innerHTML = data[a[i3]];
                    }
                  }
                }
                obj2.editor.appendChild(document.createElement("br"));
                obj2.editor.appendChild(snippet);
              };
              obj2.setData = function(o) {
                if (typeof o == "object") {
                  obj2.editor.innerHTML = o.content;
                } else {
                  obj2.editor.innerHTML = o;
                }
                if (obj2.options.focus) {
                  Component.setCursor(obj2.editor, true);
                }
                files = [];
              };
              obj2.getFiles = function() {
                var f = obj2.editor.querySelectorAll(".jfile");
                var d = [];
                for (var i3 = 0; i3 < f.length; i3++) {
                  if (files[f[i3].src]) {
                    d.push(files[f[i3].src]);
                  }
                }
                return d;
              };
              obj2.getText = function() {
                return obj2.editor.innerText;
              };
              obj2.getData = function(json) {
                if (!json) {
                  var data = obj2.editor.innerHTML;
                } else {
                  var data = {
                    content: ""
                  };
                  if (snippet.innerHTML) {
                    var index = 0;
                    data.snippet = {};
                    for (var i3 = 0; i3 < snippet.children.length; i3++) {
                      var key = snippet.children[i3].getAttribute("data-k");
                      if (key) {
                        if (key == "image") {
                          if (!data.snippet.image) {
                            data.snippet.image = [];
                          }
                          for (var j = 0; j < snippet.children[i3].children.length; j++) {
                            data.snippet.image.push(snippet.children[i3].children[j].getAttribute("src"));
                          }
                        } else {
                          data.snippet[key] = snippet.children[i3].innerHTML;
                        }
                      }
                    }
                  }
                  var f = Object.keys(files);
                  if (f.length) {
                    data.files = [];
                    for (var i3 = 0; i3 < f.length; i3++) {
                      data.files.push(files[f[i3]]);
                    }
                  }
                  var d = document.createElement("div");
                  d.innerHTML = obj2.editor.innerHTML;
                  var s = d.querySelector(".jsnippet");
                  if (s) {
                    s.remove();
                  }
                  var text = d.innerHTML;
                  text = text.replace(/<br>/g, "\n");
                  text = text.replace(/<\/div>/g, "</div>\n");
                  text = text.replace(/<(?:.|\n)*?>/gm, "");
                  data.content = text.trim();
                  processExtensions("getData", data);
                }
                return data;
              };
              obj2.reset = function() {
                obj2.editor.innerHTML = "";
                snippet.innerHTML = "";
                files = [];
              };
              obj2.addPdf = function(data) {
                if (data.result.substr(0, 4) != "data") {
                  console.error("Invalid source");
                } else {
                  var canvas = document.createElement("canvas");
                  canvas.width = 60;
                  canvas.height = 60;
                  var img = new Image();
                  var ctx = canvas.getContext("2d");
                  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                  canvas.toBlob(function(blob) {
                    var newImage = document.createElement("img");
                    newImage.src = window.URL.createObjectURL(blob);
                    newImage.title = data.name;
                    newImage.className = "jfile pdf";
                    files[newImage.src] = {
                      file: newImage.src,
                      extension: "pdf",
                      content: data.result
                    };
                    document.execCommand("insertHtml", false, newImage.outerHTML);
                  });
                }
              };
              obj2.addImage = function(src, asSnippet) {
                if (!obj2.options.acceptImages) {
                  return;
                }
                if (!src) {
                  src = "";
                }
                if (src.substr(0, 4) != "data" && !obj2.options.remoteParser) {
                  console.error("remoteParser not defined in your initialization");
                } else {
                  if (src.substr(0, 4) == "data") {
                    var extension = src.split(";");
                    extension = extension[0].split("/");
                    extension = extension[1];
                  } else {
                    var extension = src.substr(src.lastIndexOf(".") + 1);
                    src = obj2.options.remoteParser + src;
                  }
                  var img = new Image();
                  img.onload = function onload() {
                    var canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob(function(blob) {
                      var newImage = document.createElement("img");
                      newImage.src = window.URL.createObjectURL(blob);
                      newImage.classList.add("jfile");
                      newImage.setAttribute("tabindex", "900");
                      newImage.setAttribute("width", img.width);
                      newImage.setAttribute("height", img.height);
                      files[newImage.src] = {
                        file: newImage.src,
                        extension,
                        content: canvas.toDataURL()
                      };
                      if (obj2.options.dropAsSnippet || asSnippet) {
                        appendImage(newImage);
                        files[newImage.src].snippet = true;
                      } else {
                        document.execCommand("insertHtml", false, newImage.outerHTML);
                      }
                      change();
                    });
                  };
                  img.src = src;
                }
              };
              obj2.addFile = function(files2) {
                var reader = [];
                for (var i3 = 0; i3 < files2.length; i3++) {
                  if (files2[i3].size > obj2.options.maxFileSize) {
                    alert("The file is too big");
                  } else {
                    var type = files2[i3].type.split("/");
                    if (type[0] == "image") {
                      type = 1;
                    } else if (type[1] == "pdf") {
                      type = 2;
                    } else {
                      type = 0;
                    }
                    if (type) {
                      reader[i3] = new FileReader();
                      reader[i3].index = i3;
                      reader[i3].type = type;
                      reader[i3].name = files2[i3].name;
                      reader[i3].date = files2[i3].lastModified;
                      reader[i3].size = files2[i3].size;
                      reader[i3].addEventListener("load", function(data) {
                        if (data.target.type == 2) {
                          if (obj2.options.acceptFiles == true) {
                            obj2.addPdf(data.target);
                          }
                        } else {
                          obj2.addImage(data.target.result);
                        }
                      }, false);
                      reader[i3].readAsDataURL(files2[i3]);
                    } else {
                      alert("The extension is not allowed");
                    }
                  }
                }
              };
              obj2.destroy = function() {
                obj2.editor.removeEventListener("mouseup", editorMouseUp);
                obj2.editor.removeEventListener("mousedown", editorMouseDown);
                obj2.editor.removeEventListener("mousemove", editorMouseMove);
                obj2.editor.removeEventListener("keyup", editorKeyUp);
                obj2.editor.removeEventListener("keydown", editorKeyDown);
                obj2.editor.removeEventListener("dragstart", editorDragStart);
                obj2.editor.removeEventListener("dragenter", editorDragEnter);
                obj2.editor.removeEventListener("dragover", editorDragOver);
                obj2.editor.removeEventListener("drop", editorDrop);
                obj2.editor.removeEventListener("paste", editorPaste);
                obj2.editor.removeEventListener("blur", editorBlur);
                obj2.editor.removeEventListener("focus", editorFocus);
                el2.editor = null;
                el2.classList.remove("jeditor-container");
                toolbar2.remove();
                snippet.remove();
                obj2.editor.remove();
              };
              obj2.upload = function() {
                helpers.click(obj2.file);
              };
              const validTags = [
                "html",
                "body",
                "address",
                "span",
                "div",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "p",
                "b",
                "i",
                "blockquote",
                "strong",
                "em",
                "ul",
                "ol",
                "li",
                "a",
                "code",
                "pre",
                "hr",
                "br",
                "img",
                "figure",
                "picture",
                "figcaption",
                "iframe",
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr",
                "th",
                "td",
                "caption",
                "u",
                "del",
                "ins",
                "sub",
                "sup",
                "small",
                "mark",
                "input",
                "textarea",
                "select",
                "option",
                "button",
                "label",
                "fieldset",
                "legend",
                "audio",
                "video",
                "abbr",
                "cite",
                "kbd",
                "section",
                "article",
                "nav",
                "aside",
                "header",
                "footer",
                "main",
                "details",
                "summary",
                "svg",
                "line",
                "source"
              ];
              const validProperty = ["width", "height", "align", "border", "src", "tabindex"];
              const validStyle = ["color", "font-weight", "font-size", "background", "background-color", "margin"];
              const parse = function(element) {
                if (element.tagName && validTags.indexOf(element.tagName.toLowerCase()) === -1) {
                  if (element.innerText) {
                    element.innerHTML = element.innerText;
                  }
                }
                if (element.attributes && element.attributes.length) {
                  let style = null;
                  let elementStyle = element.getAttribute("style");
                  if (elementStyle) {
                    style = [];
                    let t = elementStyle.split(";");
                    for (let j = 0; j < t.length; j++) {
                      let v = t[j].trim().split(":");
                      if (validStyle.indexOf(v[0].trim()) >= 0) {
                        let k = v.shift();
                        v = v.join(":");
                        style.push(k + ":" + v);
                      }
                    }
                  }
                  if (element.tagName.toUpperCase() === "IMG") {
                    if (!obj2.options.acceptImages || !element.src) {
                      element.parentNode.removeChild(element);
                    } else {
                      element.setAttribute("tabindex", "900");
                      obj2.addImage(element.src);
                    }
                  }
                  let attr = [];
                  for (let i3 = 0; i3 < element.attributes.length; i3++) {
                    attr.push(element.attributes[i3].name);
                  }
                  if (attr.length) {
                    attr.forEach(function(v) {
                      if (validProperty.indexOf(v) === -1) {
                        element.removeAttribute(v);
                      } else {
                        if (element.attributes && element.attributes[i2] && element.attributes[i2].value.indexOf("<") !== -1) {
                          element.attributes[i2].value.replace("<", "&#60;");
                        }
                      }
                    });
                  }
                  element.style = "";
                  if (style && style.length) {
                    element.setAttribute("style", style.join(";"));
                  }
                }
                if (element.children.length) {
                  for (let i3 = element.children.length; i3 > 0; i3--) {
                    parse(element.children[i3 - 1]);
                  }
                }
              };
              var select = function(e) {
                var s = window.getSelection();
                var r = document.createRange();
                r.selectNode(e);
                s.addRange(r);
              };
              var filter = function(data) {
                if (data) {
                  data = data.replace(new RegExp("<!--(.*?)-->", "gsi"), "");
                }
                var parser = new DOMParser();
                var d = parser.parseFromString(data, "text/html");
                parse(d);
                var div2 = document.createElement("div");
                div2.innerHTML = d.firstChild.innerHTML;
                return div2;
              };
              var editorPaste = function(e) {
                if (obj2.options.filterPaste == true) {
                  if (e.clipboardData || e.originalEvent.clipboardData) {
                    var html = (e.originalEvent || e).clipboardData.getData("text/html");
                    var text = (e.originalEvent || e).clipboardData.getData("text/plain");
                    var file = (e.originalEvent || e).clipboardData.files;
                  } else if (window.clipboardData) {
                    var html = window.clipboardData.getData("Html");
                    var text = window.clipboardData.getData("Text");
                    var file = window.clipboardData.files;
                  }
                  if (file.length) {
                    obj2.addFile(file);
                  } else {
                    if (!html) {
                      html = text.split("\r\n");
                      if (!e.target.innerText) {
                        html.map(function(v) {
                          var d2 = document.createElement("div");
                          d2.innerText = v;
                          obj2.editor.appendChild(d2);
                        });
                      } else {
                        html = html.map(function(v) {
                          return "<div>" + v + "</div>";
                        });
                        document.execCommand("insertText", false, html.join(""));
                      }
                    } else {
                      var d = filter(html);
                      document.execCommand("insertHtml", false, d.innerHTML);
                    }
                  }
                  e.preventDefault();
                }
              };
              var editorDragStart = function(e) {
                if (editorAction && editorAction.e) {
                  e.preventDefault();
                }
              };
              var editorDragEnter = function(e) {
                if (editorAction || obj2.options.dropZone == false) {
                } else {
                  el2.classList.add("jeditor-dragging");
                  e.preventDefault();
                }
              };
              var editorDragOver = function(e) {
                if (editorAction || obj2.options.dropZone == false) {
                } else {
                  if (editorTimer) {
                    clearTimeout(editorTimer);
                  }
                  editorTimer = setTimeout(function() {
                    el2.classList.remove("jeditor-dragging");
                  }, 100);
                  e.preventDefault();
                }
              };
              var editorDrop = function(e) {
                if (editorAction || obj2.options.dropZone == false) {
                } else {
                  var range = null;
                  if (document.caretRangeFromPoint) {
                    range = document.caretRangeFromPoint(e.clientX, e.clientY);
                  } else if (e.rangeParent) {
                    range = document.createRange();
                    range.setStart(e.rangeParent, e.rangeOffset);
                  }
                  var sel = window.getSelection();
                  sel.removeAllRanges();
                  sel.addRange(range);
                  sel.anchorNode.parentNode.focus();
                  var html = (e.originalEvent || e).dataTransfer.getData("text/html");
                  var text = (e.originalEvent || e).dataTransfer.getData("text/plain");
                  var file = (e.originalEvent || e).dataTransfer.files;
                  if (file.length) {
                    obj2.addFile(file);
                  } else if (text) {
                    extractImageFromHtml(html);
                  }
                  el2.classList.remove("jeditor-dragging");
                  e.preventDefault();
                }
              };
              var editorBlur = function(e) {
                processExtensions("onevent", e);
                change(e);
                if (typeof obj2.options.onblur == "function") {
                  obj2.options.onblur(el2, obj2, e);
                }
              };
              var editorFocus = function(e) {
                if (typeof obj2.options.onfocus == "function") {
                  obj2.options.onfocus(el2, obj2, e);
                }
              };
              var editorKeyUp = function(e) {
                if (!obj2.editor.innerHTML) {
                  obj2.editor.innerHTML = "<div><br></div>";
                }
                if (typeof obj2.options.onkeyup == "function") {
                  obj2.options.onkeyup(el2, obj2, e);
                }
              };
              var editorKeyDown = function(e) {
                processExtensions("onevent", e);
                if (e.key == "Delete") {
                  if (e.target.tagName == "IMG") {
                    var parent = e.target.parentNode;
                    select(e.target);
                    if (parent.classList.contains("jsnippet-image")) {
                      updateTotalImages();
                    }
                  }
                }
                if (typeof obj2.options.onkeydown == "function") {
                  obj2.options.onkeydown(el2, obj2, e);
                }
              };
              var editorMouseUp = function(e) {
                if (editorAction && editorAction.e) {
                  editorAction.e.classList.remove("resizing");
                  if (editorAction.e.changed == true) {
                    var image = editorAction.e.cloneNode();
                    image.width = parseInt(editorAction.e.style.width) || editorAction.e.getAttribute("width");
                    image.height = parseInt(editorAction.e.style.height) || editorAction.e.getAttribute("height");
                    editorAction.e.style.width = "";
                    editorAction.e.style.height = "";
                    select(editorAction.e);
                    document.execCommand("insertHtml", false, image.outerHTML);
                  }
                }
                editorAction = false;
              };
              var editorMouseDown = function(e) {
                var close = function(snippet2) {
                  var rect2 = snippet2.getBoundingClientRect();
                  if (rect2.width - (e.clientX - rect2.left) < 40 && e.clientY - rect2.top < 40) {
                    snippet2.innerHTML = "";
                    snippet2.remove();
                  }
                };
                if (e.target.tagName == "IMG") {
                  if (e.target.style.cursor) {
                    var rect = e.target.getBoundingClientRect();
                    editorAction = {
                      e: e.target,
                      x: e.clientX,
                      y: e.clientY,
                      w: rect.width,
                      h: rect.height,
                      d: e.target.style.cursor
                    };
                    if (!e.target.getAttribute("width")) {
                      e.target.setAttribute("width", rect.width);
                    }
                    if (!e.target.getAttribute("height")) {
                      e.target.setAttribute("height", rect.height);
                    }
                    var s = window.getSelection();
                    if (s.rangeCount) {
                      for (var i3 = 0; i3 < s.rangeCount; i3++) {
                        s.removeRange(s.getRangeAt(i3));
                      }
                    }
                    e.target.classList.add("resizing");
                  } else {
                    editorAction = true;
                  }
                } else {
                  if (e.target.classList.contains("jsnippet")) {
                    close(e.target);
                  } else if (e.target.parentNode.classList.contains("jsnippet")) {
                    close(e.target.parentNode);
                  }
                  editorAction = true;
                }
              };
              var editorMouseMove = function(e) {
                if (e.target.tagName == "IMG" && !e.target.parentNode.classList.contains("jsnippet-image") && obj2.options.allowImageResize == true) {
                  if (e.target.getAttribute("tabindex")) {
                    var rect = e.target.getBoundingClientRect();
                    if (e.clientY - rect.top < 5) {
                      if (rect.width - (e.clientX - rect.left) < 5) {
                        e.target.style.cursor = "ne-resize";
                      } else if (e.clientX - rect.left < 5) {
                        e.target.style.cursor = "nw-resize";
                      } else {
                        e.target.style.cursor = "n-resize";
                      }
                    } else if (rect.height - (e.clientY - rect.top) < 5) {
                      if (rect.width - (e.clientX - rect.left) < 5) {
                        e.target.style.cursor = "se-resize";
                      } else if (e.clientX - rect.left < 5) {
                        e.target.style.cursor = "sw-resize";
                      } else {
                        e.target.style.cursor = "s-resize";
                      }
                    } else if (rect.width - (e.clientX - rect.left) < 5) {
                      e.target.style.cursor = "e-resize";
                    } else if (e.clientX - rect.left < 5) {
                      e.target.style.cursor = "w-resize";
                    } else {
                      e.target.style.cursor = "";
                    }
                  }
                }
                if (e.which == 1 && editorAction && editorAction.d) {
                  if (editorAction.d == "e-resize" || editorAction.d == "ne-resize" || editorAction.d == "se-resize") {
                    editorAction.e.style.width = editorAction.w + (e.clientX - editorAction.x);
                    if (e.shiftKey) {
                      var newHeight = (e.clientX - editorAction.x) * (editorAction.h / editorAction.w);
                      editorAction.e.style.height = editorAction.h + newHeight;
                    } else {
                      var newHeight = null;
                    }
                  }
                  if (!newHeight) {
                    if (editorAction.d == "s-resize" || editorAction.d == "se-resize" || editorAction.d == "sw-resize") {
                      if (!e.shiftKey) {
                        editorAction.e.style.height = editorAction.h + (e.clientY - editorAction.y);
                      }
                    }
                  }
                  editorAction.e.changed = true;
                }
              };
              var processExtensions = function(method, data) {
                if (obj2.options.extensions) {
                  var ext = Object.keys(obj2.options.extensions);
                  if (ext.length) {
                    for (var i3 = 0; i3 < ext.length; i3++)
                      if (obj2.options.extensions[ext[i3]] && typeof obj2.options.extensions[ext[i3]][method] == "function") {
                        obj2.options.extensions[ext[i3]][method].call(obj2, data);
                      }
                  }
                }
              };
              var loadExtensions = function() {
                if (obj2.options.extensions) {
                  var ext = Object.keys(obj2.options.extensions);
                  if (ext.length) {
                    for (var i3 = 0; i3 < ext.length; i3++) {
                      if (obj2.options.extensions[ext[i3]] && typeof obj2.options.extensions[ext[i3]] == "function") {
                        obj2.options.extensions[ext[i3]] = obj2.options.extensions[ext[i3]](el2, obj2);
                      }
                    }
                  }
                }
              };
              document.addEventListener("mouseup", editorMouseUp);
              document.addEventListener("mousemove", editorMouseMove);
              obj2.editor.addEventListener("mousedown", editorMouseDown);
              obj2.editor.addEventListener("keyup", editorKeyUp);
              obj2.editor.addEventListener("keydown", editorKeyDown);
              obj2.editor.addEventListener("dragstart", editorDragStart);
              obj2.editor.addEventListener("dragenter", editorDragEnter);
              obj2.editor.addEventListener("dragover", editorDragOver);
              obj2.editor.addEventListener("drop", editorDrop);
              obj2.editor.addEventListener("paste", editorPaste);
              obj2.editor.addEventListener("focus", editorFocus);
              obj2.editor.addEventListener("blur", editorBlur);
              el2.appendChild(obj2.editor);
              if (obj2.options.snippet) {
                obj2.appendSnippet(obj2.options.snippet);
              }
              if (obj2.options.toolbar) {
                if (Array.isArray(obj2.options.toolbar)) {
                  var toolbarOptions = {
                    container: true,
                    responsive: true,
                    items: obj2.options.toolbar
                  };
                } else if (obj2.options.toolbar === true) {
                  var toolbarOptions = {
                    container: true,
                    responsive: true,
                    items: []
                  };
                } else {
                  var toolbarOptions = obj2.options.toolbar;
                }
                if (!(toolbarOptions.items && toolbarOptions.items.length)) {
                  toolbarOptions.items = Component.getDefaultToolbar(obj2);
                }
                if (obj2.options.toolbarOnTop) {
                  el2.classList.add("toolbar-on-top");
                  el2.insertBefore(toolbar2, el2.firstChild);
                } else {
                  obj2.editor.style.padding = "15px";
                  el2.appendChild(toolbar2);
                }
                Toolbar(toolbar2, toolbarOptions);
                toolbar2.addEventListener("click", function() {
                  obj2.editor.focus();
                });
              }
              obj2.file = document.createElement("input");
              obj2.file.style.display = "none";
              obj2.file.type = "file";
              obj2.file.setAttribute("accept", "image/*");
              obj2.file.onchange = function() {
                obj2.addFile(this.files);
              };
              el2.appendChild(obj2.file);
              if (obj2.options.focus) {
                Component.setCursor(obj2.editor, obj2.options.focus == "initial" ? true : false);
              }
              el2.change = obj2.setData;
              el2.val = function(val) {
                if (val === void 0) {
                  var o = el2.getAttribute("data-html") === "true" ? false : true;
                  return obj2.getData(o);
                } else {
                  obj2.setData(val);
                }
              };
              loadExtensions();
              el2.editor = obj2;
              if (typeof obj2.options.onload == "function") {
                obj2.options.onload(el2, obj2, obj2.editor);
              }
              return obj2;
            };
            Component.setCursor = function(element, first) {
              element.focus();
              document.execCommand("selectAll");
              var sel = window.getSelection();
              var range = sel.getRangeAt(0);
              if (first == true) {
                var node = range.startContainer;
                var size = 0;
              } else {
                var node = range.endContainer;
                var size = node.length;
              }
              range.setStart(node, size);
              range.setEnd(node, size);
              sel.removeAllRanges();
              sel.addRange(range);
            };
            Component.getDefaultToolbar = function(obj2) {
              var color = function(a, b, c) {
                if (!c.color) {
                  var t = null;
                  var colorPicker = Color(c, {
                    onchange: function(o, v) {
                      if (c.k === "color") {
                        document.execCommand("foreColor", false, v);
                      } else {
                        document.execCommand("backColor", false, v);
                      }
                    }
                  });
                  c.color.open();
                }
              };
              var items = [];
              items.push({
                content: "undo",
                onclick: function() {
                  document.execCommand("undo");
                }
              });
              items.push({
                content: "redo",
                onclick: function() {
                  document.execCommand("redo");
                }
              });
              items.push({
                type: "divisor"
              });
              if (obj2.options.toolbarOnTop) {
                items.push({
                  type: "select",
                  width: "140px",
                  options: ["Default", "Verdana", "Arial", "Courier New"],
                  render: function(e) {
                    return '<span style="font-family:' + e + '">' + e + "</span>";
                  },
                  onchange: function(a, b, c, d, e) {
                    document.execCommand("fontName", false, d);
                  }
                });
                items.push({
                  type: "select",
                  content: "format_size",
                  options: ["x-small", "small", "medium", "large", "x-large"],
                  render: function(e) {
                    return '<span style="font-size:' + e + '">' + e + "</span>";
                  },
                  onchange: function(a, b, c, d, e) {
                    document.execCommand("fontSize", false, parseInt(e) + 1);
                  }
                });
                items.push({
                  type: "select",
                  options: ["format_align_left", "format_align_center", "format_align_right", "format_align_justify"],
                  render: function(e) {
                    return '<i class="material-icons">' + e + "</i>";
                  },
                  onchange: function(a, b, c, d, e) {
                    var options2 = ["JustifyLeft", "justifyCenter", "justifyRight", "justifyFull"];
                    document.execCommand(options2[e]);
                  }
                });
                items.push({
                  type: "divisor"
                });
                items.push({
                  content: "format_color_text",
                  k: "color",
                  onclick: color
                });
                items.push({
                  content: "format_color_fill",
                  k: "background-color",
                  onclick: color
                });
              }
              items.push({
                content: "format_bold",
                onclick: function(a, b, c) {
                  document.execCommand("bold");
                  if (document.queryCommandState("bold")) {
                    c.classList.add("selected");
                  } else {
                    c.classList.remove("selected");
                  }
                }
              });
              items.push({
                content: "format_italic",
                onclick: function(a, b, c) {
                  document.execCommand("italic");
                  if (document.queryCommandState("italic")) {
                    c.classList.add("selected");
                  } else {
                    c.classList.remove("selected");
                  }
                }
              });
              items.push({
                content: "format_underline",
                onclick: function(a, b, c) {
                  document.execCommand("underline");
                  if (document.queryCommandState("underline")) {
                    c.classList.add("selected");
                  } else {
                    c.classList.remove("selected");
                  }
                }
              });
              items.push({
                type: "divisor"
              });
              items.push({
                content: "format_list_bulleted",
                onclick: function(a, b, c) {
                  document.execCommand("insertUnorderedList");
                  if (document.queryCommandState("insertUnorderedList")) {
                    c.classList.add("selected");
                  } else {
                    c.classList.remove("selected");
                  }
                }
              });
              items.push({
                content: "format_list_numbered",
                onclick: function(a, b, c) {
                  document.execCommand("insertOrderedList");
                  if (document.queryCommandState("insertOrderedList")) {
                    c.classList.add("selected");
                  } else {
                    c.classList.remove("selected");
                  }
                }
              });
              items.push({
                content: "format_indent_increase",
                onclick: function(a, b, c) {
                  document.execCommand("indent", true, null);
                  if (document.queryCommandState("indent")) {
                    c.classList.add("selected");
                  } else {
                    c.classList.remove("selected");
                  }
                }
              });
              items.push({
                content: "format_indent_decrease",
                onclick: function() {
                  document.execCommand("outdent");
                  if (document.queryCommandState("outdent")) {
                    this.classList.add("selected");
                  } else {
                    this.classList.remove("selected");
                  }
                }
              });
              if (obj2.options.toolbarOnTop) {
                items.push({
                  type: "divisor"
                });
                items.push({
                  content: "photo",
                  onclick: function() {
                    obj2.upload();
                  }
                });
                items.push({
                  type: "select",
                  content: "table_view",
                  columns: 8,
                  grid: 8,
                  right: true,
                  options: [
                    "0x0",
                    "1x0",
                    "2x0",
                    "3x0",
                    "4x0",
                    "5x0",
                    "6x0",
                    "7x0",
                    "0x1",
                    "1x1",
                    "2x1",
                    "3x1",
                    "4x1",
                    "5x1",
                    "6x1",
                    "7x1",
                    "0x2",
                    "1x2",
                    "2x2",
                    "3x2",
                    "4x2",
                    "5x2",
                    "6x2",
                    "7x2",
                    "0x3",
                    "1x3",
                    "2x3",
                    "3x3",
                    "4x3",
                    "5x3",
                    "6x3",
                    "7x3",
                    "0x4",
                    "1x4",
                    "2x4",
                    "3x4",
                    "4x4",
                    "5x4",
                    "6x4",
                    "7x4",
                    "0x5",
                    "1x5",
                    "2x5",
                    "3x5",
                    "4x5",
                    "5x5",
                    "6x5",
                    "7x5",
                    "0x6",
                    "1x6",
                    "2x6",
                    "3x6",
                    "4x6",
                    "5x6",
                    "6x6",
                    "7x6",
                    "0x7",
                    "1x7",
                    "2x7",
                    "3x7",
                    "4x7",
                    "5x7",
                    "6x7",
                    "7x7"
                  ],
                  render: function(e, item) {
                    if (item) {
                      item.onmouseover = this.onmouseover;
                      e = e.split("x");
                      item.setAttribute("data-x", e[0]);
                      item.setAttribute("data-y", e[1]);
                    }
                    var element = document.createElement("div");
                    item.style.margin = "1px";
                    item.style.border = "1px solid #ddd";
                    return element;
                  },
                  onmouseover: function(e) {
                    var x2 = parseInt(e.target.getAttribute("data-x"));
                    var y2 = parseInt(e.target.getAttribute("data-y"));
                    for (var i2 = 0; i2 < e.target.parentNode.children.length; i2++) {
                      var element = e.target.parentNode.children[i2];
                      var ex = parseInt(element.getAttribute("data-x"));
                      var ey = parseInt(element.getAttribute("data-y"));
                      if (ex <= x2 && ey <= y2) {
                        element.style.backgroundColor = "#cae1fc";
                        element.style.borderColor = "#2977ff";
                      } else {
                        element.style.backgroundColor = "";
                        element.style.borderColor = "#ddd";
                      }
                    }
                  },
                  onchange: function(a, b, c) {
                    c = c.split("x");
                    var table = document.createElement("table");
                    var tbody = document.createElement("tbody");
                    for (var y2 = 0; y2 <= c[1]; y2++) {
                      var tr = document.createElement("tr");
                      for (var x2 = 0; x2 <= c[0]; x2++) {
                        var td = document.createElement("td");
                        td.innerHTML = "";
                        tr.appendChild(td);
                      }
                      tbody.appendChild(tr);
                    }
                    table.appendChild(tbody);
                    table.setAttribute("width", "100%");
                    table.setAttribute("cellpadding", "6");
                    table.setAttribute("cellspacing", "0");
                    document.execCommand("insertHTML", false, table.outerHTML);
                  }
                });
              }
              return items;
            };
            return Component;
          }
          var editor = Editor();
          ;
          function Floating() {
            var Component = function(el2, options2) {
              var obj2 = {};
              obj2.options = {};
              var defaults2 = {
                type: "big",
                title: "Untitled",
                width: 510,
                height: 472
              };
              for (var property2 in defaults2) {
                if (options2 && options2.hasOwnProperty(property2)) {
                  obj2.options[property2] = options2[property2];
                } else {
                  obj2.options[property2] = defaults2[property2];
                }
              }
              var setContent = function() {
                var temp = document.createElement("div");
                while (el2.children[0]) {
                  temp.appendChild(el2.children[0]);
                }
                obj2.content = document.createElement("div");
                obj2.content.className = "jfloating_content";
                obj2.content.innerHTML = el2.innerHTML;
                while (temp.children[0]) {
                  obj2.content.appendChild(temp.children[0]);
                }
                obj2.container = document.createElement("div");
                obj2.container.className = "jfloating";
                obj2.container.appendChild(obj2.content);
                if (obj2.options.title) {
                  obj2.container.setAttribute("title", obj2.options.title);
                } else {
                  obj2.container.classList.add("no-title");
                }
                if (obj2.options.width) {
                  obj2.container.style.width = parseInt(obj2.options.width) + "px";
                }
                if (obj2.options.height) {
                  obj2.container.style.height = parseInt(obj2.options.height) + "px";
                }
                el2.innerHTML = "";
                el2.appendChild(obj2.container);
              };
              var setEvents = function() {
                if (obj2.container) {
                  obj2.container.addEventListener("click", function(e) {
                    var rect = e.target.getBoundingClientRect();
                    if (e.target.classList.contains("jfloating")) {
                      if (e.changedTouches && e.changedTouches[0]) {
                        var x2 = e.changedTouches[0].clientX;
                        var y2 = e.changedTouches[0].clientY;
                      } else {
                        var x2 = e.clientX;
                        var y2 = e.clientY;
                      }
                      if (rect.width - (x2 - rect.left) < 50 && y2 - rect.top < 50) {
                        setTimeout(function() {
                          obj2.close();
                        }, 100);
                      } else {
                        obj2.setState();
                      }
                    }
                  });
                }
              };
              var setType = function() {
                obj2.container.classList.add("jfloating-" + obj2.options.type);
              };
              obj2.state = {
                isMinized: false
              };
              obj2.setState = function() {
                if (obj2.state.isMinized) {
                  obj2.container.classList.remove("jfloating-minimized");
                } else {
                  obj2.container.classList.add("jfloating-minimized");
                }
                obj2.state.isMinized = !obj2.state.isMinized;
              };
              obj2.close = function() {
                Components.elements.splice(Component.elements.indexOf(obj2.container), 1);
                obj2.updatePosition();
                el2.remove();
              };
              obj2.updatePosition = function() {
                for (var i2 = 0; i2 < Component.elements.length; i2++) {
                  var floating2 = Component.elements[i2];
                  var prevFloating = Component.elements[i2 - 1];
                  floating2.style.right = i2 * (prevFloating ? prevFloating.offsetWidth : floating2.offsetWidth) * 1.01 + "px";
                }
              };
              obj2.init = function() {
                setContent();
                setEvents();
                setType();
                Component.elements.push(obj2.container);
                obj2.updatePosition();
                el2.floating = obj2;
              };
              obj2.init();
              return obj2;
            };
            Component.elements = [];
            return Component;
          }
          var floating = Floating();
          ;
          function Validations() {
            const isNumeric = function(num) {
              return !isNaN(num) && num !== null && (typeof num !== "string" || num.trim() !== "");
            };
            const numberCriterias = {
              "between": function(value2, range) {
                return value2 >= range[0] && value2 <= range[1];
              },
              "not between": function(value2, range) {
                return value2 < range[0] || value2 > range[1];
              },
              "<": function(value2, range) {
                return value2 < range[0];
              },
              "<=": function(value2, range) {
                return value2 <= range[0];
              },
              ">": function(value2, range) {
                return value2 > range[0];
              },
              ">=": function(value2, range) {
                return value2 >= range[0];
              },
              "=": function(value2, range) {
                return value2 == range[0];
              },
              "!=": function(value2, range) {
                return value2 != range[0];
              }
            };
            const dateCriterias = {
              "valid date": function() {
                return true;
              },
              "=": function(value2, range) {
                return value2 === range[0];
              },
              "!=": function(value2, range) {
                return value2 !== range[0];
              },
              "<": function(value2, range) {
                return value2 < range[0];
              },
              "<=": function(value2, range) {
                return value2 <= range[0];
              },
              ">": function(value2, range) {
                return value2 > range[0];
              },
              ">=": function(value2, range) {
                return value2 >= range[0];
              },
              "between": function(value2, range) {
                return value2 >= range[0] && value2 <= range[1];
              },
              "not between": function(value2, range) {
                return value2 < range[0] || value2 > range[1];
              }
            };
            const textCriterias = {
              "contains": function(value2, range) {
                return value2.includes(range[0]);
              },
              "not contains": function(value2, range) {
                return !value2.includes(range[0]);
              },
              "begins with": function(value2, range) {
                return value2.startsWith(range[0]);
              },
              "ends with": function(value2, range) {
                return value2.endsWith(range[0]);
              },
              "=": function(value2, range) {
                return value2 === range[0];
              },
              "!=": function(value2, range) {
                return value2 !== range[0];
              },
              "valid email": function(value2) {
                var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
                return pattern.test(value2);
              },
              "valid url": function(value2) {
                var pattern = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);
                return pattern.test(value2);
              }
            };
            const component2 = function(value2, options2) {
              if (typeof component2[options2.type] === "function") {
                if (options2.allowBlank && (typeof value2 === "undefined" || value2 === "" || value2 === null)) {
                  return true;
                }
                return component2[options2.type].call(this, value2, options2);
              }
              return null;
            };
            component2.url = function(data) {
              var pattern = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);
              return pattern.test(data) ? true : false;
            };
            component2.email = function(data) {
              var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
              return data && pattern.test(data) ? true : false;
            };
            component2.required = function(data) {
              return data && data.trim() ? true : false;
            };
            component2.empty = function(data) {
              return typeof data === "undefined" || data === null || typeof data === "string" && !data.toString().trim();
            };
            component2["not exist"] = component2.empty;
            component2.notEmpty = function(data) {
              return !component2.empty(data);
            };
            component2.exist = component2.notEmpty;
            component2.number = function(data, options2) {
              if (!isNumeric(data)) {
                return false;
              }
              if (!options2 || !options2.criteria) {
                return true;
              }
              if (!numberCriterias[options2.criteria]) {
                return false;
              }
              let values = options2.value.map(function(num) {
                return parseFloat(num);
              });
              return numberCriterias[options2.criteria](data, values);
            };
            component2.login = function(data) {
              let pattern = new RegExp(/^[a-zA-Z0-9._-]+$/);
              return data && pattern.test(data) ? true : false;
            };
            component2.list = function(data, options2) {
              let dataType = typeof data;
              if (dataType !== "string" && dataType !== "number") {
                return false;
              }
              let list;
              if (typeof options2.value[0] === "string") {
                list = options2.value[0].split(",");
              } else {
                list = options2.value[0];
              }
              if (!Array.isArray(list)) {
                return false;
              } else {
                let validOption = list.findIndex(function(item) {
                  return item == data;
                });
                return validOption > -1;
              }
            };
            const getCurrentDateWithoutTime = function() {
              let date = /* @__PURE__ */ new Date();
              date.setHours(0, 0, 0, 0);
              return date;
            };
            const relativeDates = {
              "one year ago": function() {
                let date = getCurrentDateWithoutTime();
                date.setFullYear(date.getFullYear() - 1);
                return date;
              },
              "one month ago": function() {
                let date = getCurrentDateWithoutTime();
                date.setMonth(date.getMonth() - 1);
                return date;
              },
              "one week ago": function() {
                let date = getCurrentDateWithoutTime();
                date.setDate(date.getDate() - 7);
                return date;
              },
              yesterday: function() {
                let date = getCurrentDateWithoutTime();
                date.setDate(date.getDate() - 1);
                return date;
              },
              today: getCurrentDateWithoutTime,
              tomorrow: function() {
                let date = getCurrentDateWithoutTime();
                date.setDate(date.getDate() + 1);
                return date;
              }
            };
            component2.date = function(data, options2) {
              if (isNumeric(data) && data > 0 && data < 1e6) {
                data = helpers_date.numToDate(data);
              }
              if (new Date(data) == "Invalid Date") {
                return false;
              }
              if (!options2 || !options2.criteria) {
                return true;
              }
              if (!dateCriterias[options2.criteria]) {
                return false;
              }
              let values = options2.value.map(function(date) {
                if (typeof date === "string" && relativeDates[date]) {
                  return relativeDates[date]().getTime();
                }
                return new Date(date).getTime();
              });
              return dateCriterias[options2.criteria](new Date(data).getTime(), values);
            };
            component2.text = function(data, options2) {
              if (typeof data === "undefined" || data === null) {
                data = "";
              } else if (typeof data !== "string") {
                return false;
              }
              if (!options2 || !options2.criteria) {
                return true;
              }
              if (!textCriterias[options2.criteria]) {
                return false;
              }
              return textCriterias[options2.criteria](data, options2.value);
            };
            component2.textLength = function(data, options2) {
              data = data.toString();
              return component2.number(data.length, options2);
            };
            return component2;
          }
          var validations = Validations();
          ;
          function Form() {
            var Component = function(el2, options2) {
              var obj2 = {};
              obj2.options = {};
              var defaults2 = {
                url: null,
                message: "Are you sure? There are unsaved information in your form",
                ignore: false,
                currentHash: null,
                submitButton: null,
                validations: null,
                onbeforeload: null,
                onload: null,
                onbeforesave: null,
                onsave: null,
                onbeforeremove: null,
                onremove: null,
                onerror: function(el3, message) {
                  alert(message);
                }
              };
              for (var property2 in defaults2) {
                if (options2 && options2.hasOwnProperty(property2)) {
                  obj2.options[property2] = options2[property2];
                } else {
                  obj2.options[property2] = defaults2[property2];
                }
              }
              if (!obj2.options.validations) {
                obj2.options.validations = {};
              }
              if (!obj2.options.submitButton) {
                obj2.options.submitButton = el2.querySelector("input[type=submit]");
              }
              if (obj2.options.submitButton && obj2.options.url) {
                obj2.options.submitButton.onclick = function() {
                  obj2.save();
                };
              }
              if (!obj2.options.validations.email) {
                obj2.options.validations.email = validations.email;
              }
              if (!obj2.options.validations.length) {
                obj2.options.validations.length = validations.length;
              }
              if (!obj2.options.validations.required) {
                obj2.options.validations.required = validations.required;
              }
              obj2.setUrl = function(url) {
                obj2.options.url = url;
              };
              obj2.load = function() {
                ajax({
                  url: obj2.options.url,
                  method: "GET",
                  dataType: "json",
                  queue: true,
                  success: function(data) {
                    if (typeof obj2.options.onbeforeload == "function") {
                      var ret = obj2.options.onbeforeload(el2, data);
                      if (ret) {
                        data = ret;
                      }
                    }
                    Component.setElements(el2, data);
                    if (typeof obj2.options.onload == "function") {
                      obj2.options.onload(el2, data);
                    }
                  }
                });
              };
              obj2.save = function() {
                var test = obj2.validate();
                if (test) {
                  obj2.options.onerror(el2, test);
                } else {
                  var data = Component.getElements(el2, true);
                  if (typeof obj2.options.onbeforesave == "function") {
                    var data = obj2.options.onbeforesave(el2, data);
                    if (data === false) {
                      return;
                    }
                  }
                  ajax({
                    url: obj2.options.url,
                    method: "POST",
                    dataType: "json",
                    data,
                    success: function(result) {
                      if (typeof obj2.options.onsave == "function") {
                        obj2.options.onsave(el2, data, result);
                      }
                    }
                  });
                }
              };
              obj2.remove = function() {
                if (typeof obj2.options.onbeforeremove == "function") {
                  var ret = obj2.options.onbeforeremove(el2, obj2);
                  if (ret === false) {
                    return false;
                  }
                }
                ajax({
                  url: obj2.options.url,
                  method: "DELETE",
                  dataType: "json",
                  success: function(result) {
                    if (typeof obj2.options.onremove == "function") {
                      obj2.options.onremove(el2, obj2, result);
                    }
                    obj2.reset();
                  }
                });
              };
              var addError = function(element) {
                element.classList.add("error");
                if (obj2.options.submitButton) {
                  obj2.options.submitButton.setAttribute("disabled", true);
                }
                var error = element.getAttribute("data-error") || "There is an error in the form";
                element.setAttribute("title", error);
                return error;
              };
              var delError = function(element) {
                var error = false;
                element.classList.remove("error");
                element.removeAttribute("title");
                var elements = el2.querySelectorAll("input, select, textarea, div[name]");
                for (var i2 = 0; i2 < elements.length; i2++) {
                  if (elements[i2].getAttribute("data-validation")) {
                    if (elements[i2].classList.contains("error")) {
                      error = true;
                    }
                  }
                }
                if (obj2.options.submitButton) {
                  if (error) {
                    obj2.options.submitButton.setAttribute("disabled", true);
                  } else {
                    obj2.options.submitButton.removeAttribute("disabled");
                  }
                }
              };
              obj2.validateElement = function(element) {
                var test = false;
                var value2 = Component.getValue(element);
                var validation = element.getAttribute("data-validation");
                if (typeof obj2.options.validations[validation] == "function" && !obj2.options.validations[validation](value2, element)) {
                  test = addError(element);
                } else {
                  if (element.classList.contains("error")) {
                    delError(element);
                  }
                }
                return test;
              };
              obj2.reset = function() {
                var name = null;
                var elements = el2.querySelectorAll("input, select, textarea, div[name]");
                for (var i2 = 0; i2 < elements.length; i2++) {
                  if (name = elements[i2].getAttribute("name")) {
                    if (elements[i2].type == "checkbox" || elements[i2].type == "radio") {
                      elements[i2].checked = false;
                    } else {
                      if (typeof elements[i2].val == "function") {
                        elements[i2].val("");
                      } else {
                        elements[i2].value = "";
                      }
                    }
                  }
                }
              };
              obj2.validate = function() {
                var test = [];
                var elements = el2.querySelectorAll("input, select, textarea, div[name]");
                for (var i2 = 0; i2 < elements.length; i2++) {
                  if (elements[i2].getAttribute("data-validation")) {
                    var res2 = obj2.validateElement(elements[i2]);
                    if (res2) {
                      test.push(res2);
                    }
                  }
                }
                if (test.length > 0) {
                  return test.join("<br>");
                } else {
                  return false;
                }
              };
              obj2.getError = function() {
                return obj2.validation() ? true : false;
              };
              obj2.setHash = function() {
                return obj2.getHash(Component.getElements(el2));
              };
              obj2.getHash = function(str) {
                var hash = 0, i2, chr;
                if (str.length === 0) {
                  return hash;
                } else {
                  for (i2 = 0; i2 < str.length; i2++) {
                    chr = str.charCodeAt(i2);
                    hash = (hash << 5) - hash + chr;
                    hash |= 0;
                  }
                }
                return hash;
              };
              obj2.isChanged = function() {
                var hash = obj2.setHash();
                return obj2.options.currentHash != hash;
              };
              obj2.resetTracker = function() {
                obj2.options.currentHash = obj2.setHash();
                obj2.options.ignore = false;
              };
              obj2.setIgnore = function(ignoreFlag) {
                obj2.options.ignore = ignoreFlag ? true : false;
              };
              setTimeout(function() {
                obj2.options.currentHash = obj2.setHash();
              }, 1e3);
              el2.addEventListener("keyup", function(e) {
                if (e.target.getAttribute("data-validation")) {
                  obj2.validateElement(e.target);
                }
              });
              if (!Component.hasEvents) {
                window.addEventListener("beforeunload", function(e) {
                  if (obj2.isChanged() && obj2.options.ignore == false) {
                    var confirmationMessage = obj2.options.message ? obj2.options.message : "o/";
                    if (confirmationMessage) {
                      if (typeof e == "undefined") {
                        e = window.event;
                      }
                      if (e) {
                        e.returnValue = confirmationMessage;
                      }
                      return confirmationMessage;
                    } else {
                      return void 0;
                    }
                  }
                });
                Component.hasEvents = true;
              }
              el2.form = obj2;
              return obj2;
            };
            Component.getValue = function(element) {
              var value2 = null;
              if (element.type == "checkbox") {
                if (element.checked == true) {
                  value2 = element.value || true;
                }
              } else if (element.type == "radio") {
                if (element.checked == true) {
                  value2 = element.value;
                }
              } else if (element.type == "file") {
                value2 = element.files;
              } else if (element.tagName == "select" && element.multiple == true) {
                value2 = [];
                var options2 = element.querySelectorAll("options[selected]");
                for (var j = 0; j < options2.length; j++) {
                  value2.push(options2[j].value);
                }
              } else if (typeof element.val == "function") {
                value2 = element.val();
              } else {
                value2 = element.value || "";
              }
              return value2;
            };
            Component.getElements = function(el2, asArray) {
              var data = {};
              var name = null;
              var elements = el2.querySelectorAll("input, select, textarea, div[name]");
              for (var i2 = 0; i2 < elements.length; i2++) {
                if (name = elements[i2].getAttribute("name")) {
                  data[name] = Component.getValue(elements[i2]) || "";
                }
              }
              return asArray == true ? data : JSON.stringify(data);
            };
            Component.setElements = function(el2, data) {
              var name = null;
              var value2 = null;
              var elements = el2.querySelectorAll("input, select, textarea, div[name]");
              for (var i2 = 0; i2 < elements.length; i2++) {
                var type = elements[i2].getAttribute("type");
                if (name = elements[i2].getAttribute("name")) {
                  name = name.replace(new RegExp(/\[(.*?)\]/ig), ".$1");
                  value2 = null;
                  if (name.match(/\./)) {
                    var tmp = Path.call(data, name) || "";
                    if (typeof tmp !== "undefined") {
                      value2 = tmp;
                    }
                  } else {
                    if (typeof data[name] !== "undefined") {
                      value2 = data[name];
                    }
                  }
                  if (value2 !== null) {
                    if (type == "checkbox" || type == "radio") {
                      elements[i2].checked = value2 ? true : false;
                    } else if (type == "file") {
                    } else {
                      if (typeof elements[i2].val == "function") {
                        elements[i2].val(value2);
                      } else {
                        elements[i2].value = value2;
                      }
                    }
                  }
                }
              }
            };
            return Component;
          }
          var plugins_form = Form();
          ;
          function Modal() {
            var Events2 = function() {
              var tracker = null;
              var keyDown = function(e) {
                if (e.which == 27) {
                  var modals = document.querySelectorAll(".jmodal");
                  for (var i2 = 0; i2 < modals.length; i2++) {
                    modals[i2].parentNode.modal.close();
                  }
                }
              };
              var mouseUp = function(e) {
                let element = e.composedPath();
                var item = helpers.findElement(element[0], "jmodal");
                if (item) {
                  var rect = item.getBoundingClientRect();
                  if (e.changedTouches && e.changedTouches[0]) {
                    var x2 = e.changedTouches[0].clientX;
                    var y2 = e.changedTouches[0].clientY;
                  } else {
                    var x2 = e.clientX;
                    var y2 = e.clientY;
                  }
                  if (rect.width - (x2 - rect.left) < 50 && y2 - rect.top < 50) {
                    item.parentNode.modal.close();
                  }
                }
                if (tracker) {
                  tracker.element.style.cursor = "auto";
                  tracker = null;
                }
              };
              var mouseDown = function(e) {
                let element = e.composedPath();
                var item = helpers.findElement(element[0], "jmodal");
                if (item) {
                  var rect = item.getBoundingClientRect();
                  if (e.changedTouches && e.changedTouches[0]) {
                    var x2 = e.changedTouches[0].clientX;
                    var y2 = e.changedTouches[0].clientY;
                  } else {
                    var x2 = e.clientX;
                    var y2 = e.clientY;
                  }
                  if (rect.width - (x2 - rect.left) < 50 && y2 - rect.top < 50) {
                  } else {
                    if (y2 - rect.top < 50) {
                      if (document.selection) {
                        document.selection.empty();
                      } else if (window.getSelection) {
                        window.getSelection().removeAllRanges();
                      }
                      tracker = {
                        left: rect.left,
                        top: rect.top,
                        x: e.clientX,
                        y: e.clientY,
                        width: rect.width,
                        height: rect.height,
                        element: item
                      };
                    }
                  }
                }
              };
              var mouseMove = function(e) {
                if (tracker) {
                  e = e || window.event;
                  if (e.buttons) {
                    var mouseButton = e.buttons;
                  } else if (e.button) {
                    var mouseButton = e.button;
                  } else {
                    var mouseButton = e.which;
                  }
                  if (mouseButton) {
                    tracker.element.style.top = tracker.top + (e.clientY - tracker.y) + tracker.height / 2 + "px";
                    tracker.element.style.left = tracker.left + (e.clientX - tracker.x) + tracker.width / 2 + "px";
                    tracker.element.style.cursor = "move";
                  } else {
                    tracker.element.style.cursor = "auto";
                  }
                }
              };
              document.addEventListener("keydown", keyDown);
              document.addEventListener("mouseup", mouseUp);
              document.addEventListener("mousedown", mouseDown);
              document.addEventListener("mousemove", mouseMove);
            };
            var Component = function(el2, options2) {
              var obj2 = {};
              obj2.options = {};
              var defaults2 = {
                url: null,
                onopen: null,
                onclose: null,
                onload: null,
                closed: false,
                width: null,
                height: null,
                title: null,
                padding: null,
                backdrop: true,
                icon: null
              };
              for (var property2 in defaults2) {
                if (options2 && options2.hasOwnProperty(property2)) {
                  obj2.options[property2] = options2[property2];
                } else {
                  obj2.options[property2] = defaults2[property2];
                }
              }
              if (!obj2.options.title && el2.getAttribute("title")) {
                obj2.options.title = el2.getAttribute("title");
              }
              var temp = document.createElement("div");
              while (el2.children[0]) {
                temp.appendChild(el2.children[0]);
              }
              obj2.title = document.createElement("div");
              obj2.title.className = "jmodal_title";
              if (obj2.options.icon) {
                obj2.title.setAttribute("data-icon", obj2.options.icon);
              }
              obj2.content = document.createElement("div");
              obj2.content.className = "jmodal_content";
              obj2.content.innerHTML = el2.innerHTML;
              while (temp.children[0]) {
                obj2.content.appendChild(temp.children[0]);
              }
              obj2.container = document.createElement("div");
              obj2.container.className = "jmodal";
              obj2.container.appendChild(obj2.title);
              obj2.container.appendChild(obj2.content);
              if (obj2.options.padding) {
                obj2.content.style.padding = obj2.options.padding;
              }
              if (obj2.options.width) {
                obj2.container.style.width = obj2.options.width;
              }
              if (obj2.options.height) {
                obj2.container.style.height = obj2.options.height;
              }
              if (obj2.options.title) {
                var title = document.createElement("h4");
                title.innerText = obj2.options.title;
                obj2.title.appendChild(title);
              }
              el2.innerHTML = "";
              el2.style.display = "none";
              el2.appendChild(obj2.container);
              if (obj2.options.backdrop) {
                var backdrop = document.createElement("div");
                backdrop.className = "jmodal_backdrop";
                backdrop.onclick = function() {
                  obj2.close();
                };
                el2.appendChild(backdrop);
              }
              obj2.open = function() {
                el2.style.display = "block";
                var rect = obj2.container.getBoundingClientRect();
                if (helpers.getWindowWidth() < rect.width) {
                  obj2.container.style.top = "";
                  obj2.container.style.left = "";
                  obj2.container.classList.add("jmodal_fullscreen");
                  animation.slideBottom(obj2.container, 1);
                } else {
                  if (obj2.options.backdrop) {
                    backdrop.style.display = "block";
                  }
                }
                if (typeof obj2.options.onopen == "function") {
                  obj2.options.onopen(el2, obj2);
                }
              };
              obj2.resetPosition = function() {
                obj2.container.style.top = "";
                obj2.container.style.left = "";
              };
              obj2.isOpen = function() {
                return el2.style.display != "none" ? true : false;
              };
              obj2.close = function() {
                if (obj2.isOpen()) {
                  el2.style.display = "none";
                  if (obj2.options.backdrop) {
                    backdrop.style.display = "";
                  }
                  obj2.container.classList.remove("jmodal_fullscreen");
                  if (typeof obj2.options.onclose == "function") {
                    obj2.options.onclose(el2, obj2);
                  }
                }
              };
              if (obj2.options.url) {
                ajax({
                  url: obj2.options.url,
                  method: "GET",
                  dataType: "text/html",
                  success: function(data) {
                    obj2.content.innerHTML = data;
                    if (!obj2.options.closed) {
                      obj2.open();
                    }
                    if (typeof obj2.options.onload === "function") {
                      obj2.options.onload(obj2);
                    }
                  }
                });
              } else {
                if (!obj2.options.closed) {
                  obj2.open();
                }
                if (typeof obj2.options.onload === "function") {
                  obj2.options.onload(obj2);
                }
              }
              el2.modal = obj2;
              Events2();
              Events2 = function() {
              };
              return obj2;
            };
            return Component;
          }
          var modal = Modal();
          ;
          function Notification() {
            var Component = function(options2) {
              var obj2 = {};
              obj2.options = {};
              var defaults2 = {
                icon: null,
                name: "Notification",
                date: null,
                error: null,
                title: null,
                message: null,
                timeout: 4e3,
                autoHide: true,
                closeable: true
              };
              for (var property2 in defaults2) {
                if (options2 && options2.hasOwnProperty(property2)) {
                  obj2.options[property2] = options2[property2];
                } else {
                  obj2.options[property2] = defaults2[property2];
                }
              }
              var notification2 = document.createElement("div");
              notification2.className = "jnotification";
              if (obj2.options.error) {
                notification2.classList.add("jnotification-error");
              }
              var notificationContainer = document.createElement("div");
              notificationContainer.className = "jnotification-container";
              notification2.appendChild(notificationContainer);
              var notificationHeader = document.createElement("div");
              notificationHeader.className = "jnotification-header";
              notificationContainer.appendChild(notificationHeader);
              var notificationImage = document.createElement("div");
              notificationImage.className = "jnotification-image";
              notificationHeader.appendChild(notificationImage);
              if (obj2.options.icon) {
                var notificationIcon = document.createElement("img");
                notificationIcon.src = obj2.options.icon;
                notificationImage.appendChild(notificationIcon);
              }
              var notificationName = document.createElement("div");
              notificationName.className = "jnotification-name";
              notificationName.innerHTML = obj2.options.name;
              notificationHeader.appendChild(notificationName);
              if (obj2.options.closeable == true) {
                var notificationClose = document.createElement("div");
                notificationClose.className = "jnotification-close";
                notificationClose.onclick = function() {
                  obj2.hide();
                };
                notificationHeader.appendChild(notificationClose);
              }
              var notificationDate = document.createElement("div");
              notificationDate.className = "jnotification-date";
              notificationHeader.appendChild(notificationDate);
              var notificationContent = document.createElement("div");
              notificationContent.className = "jnotification-content";
              notificationContainer.appendChild(notificationContent);
              if (obj2.options.title) {
                var notificationTitle = document.createElement("div");
                notificationTitle.className = "jnotification-title";
                notificationTitle.innerHTML = obj2.options.title;
                notificationContent.appendChild(notificationTitle);
              }
              var notificationMessage = document.createElement("div");
              notificationMessage.className = "jnotification-message";
              notificationMessage.innerHTML = obj2.options.message;
              notificationContent.appendChild(notificationMessage);
              obj2.show = function() {
                document.body.appendChild(notification2);
                if (helpers.getWindowWidth() > 800) {
                  animation.fadeIn(notification2);
                } else {
                  animation.slideTop(notification2, 1);
                }
              };
              obj2.hide = function() {
                if (helpers.getWindowWidth() > 800) {
                  animation.fadeOut(notification2, function() {
                    if (notification2.parentNode) {
                      notification2.parentNode.removeChild(notification2);
                      if (notificationTimeout) {
                        clearTimeout(notificationTimeout);
                      }
                    }
                  });
                } else {
                  animation.slideTop(notification2, 0, function() {
                    if (notification2.parentNode) {
                      notification2.parentNode.removeChild(notification2);
                      if (notificationTimeout) {
                        clearTimeout(notificationTimeout);
                      }
                    }
                  });
                }
              };
              obj2.show();
              if (obj2.options.autoHide == true) {
                var notificationTimeout = setTimeout(function() {
                  obj2.hide();
                }, obj2.options.timeout);
              }
              if (helpers.getWindowWidth() < 800) {
                notification2.addEventListener("swipeup", function(e) {
                  obj2.hide();
                  e.preventDefault();
                  e.stopPropagation();
                });
              }
              return obj2;
            };
            Component.isVisible = function() {
              var j = document.querySelector(".jnotification");
              return j && j.parentNode ? true : false;
            };
            return Component;
          }
          var notification = Notification();
          ;
          function Progressbar(el2, options2) {
            var obj2 = {};
            obj2.options = {};
            var defaults2 = {
              value: 0,
              onchange: null,
              width: null
            };
            for (var property2 in defaults2) {
              if (options2 && options2.hasOwnProperty(property2)) {
                obj2.options[property2] = options2[property2];
              } else {
                obj2.options[property2] = defaults2[property2];
              }
            }
            el2.classList.add("jprogressbar");
            el2.setAttribute("tabindex", 1);
            el2.setAttribute("data-value", obj2.options.value);
            var bar = document.createElement("div");
            bar.style.width = obj2.options.value + "%";
            bar.style.color = "#fff";
            el2.appendChild(bar);
            if (obj2.options.width) {
              el2.style.width = obj2.options.width;
            }
            obj2.setValue = function(value2) {
              value2 = parseInt(value2);
              obj2.options.value = value2;
              bar.style.width = value2 + "%";
              el2.setAttribute("data-value", value2 + "%");
              if (value2 < 6) {
                el2.style.color = "#000";
              } else {
                el2.style.color = "#fff";
              }
              obj2.options.value = value2;
              if (typeof obj2.options.onchange == "function") {
                obj2.options.onchange(el2, value2);
              }
              if (el2.value != obj2.options.value) {
                el2.value = obj2.options.value;
                if (typeof el2.oninput == "function") {
                  el2.oninput({
                    type: "input",
                    target: el2,
                    value: el2.value
                  });
                }
              }
            };
            obj2.getValue = function() {
              return obj2.options.value;
            };
            var action = function(e) {
              if (e.which) {
                var rect = el2.getBoundingClientRect();
                if (e.changedTouches && e.changedTouches[0]) {
                  var x2 = e.changedTouches[0].clientX;
                  var y2 = e.changedTouches[0].clientY;
                } else {
                  var x2 = e.clientX;
                  var y2 = e.clientY;
                }
                obj2.setValue(Math.round((x2 - rect.left) / rect.width * 100));
              }
            };
            if ("touchstart" in document.documentElement === true) {
              el2.addEventListener("touchstart", action);
              el2.addEventListener("touchend", action);
            } else {
              el2.addEventListener("mousedown", action);
              el2.addEventListener("mousemove", action);
            }
            el2.change = obj2.setValue;
            el2.val = function(val) {
              if (val === void 0) {
                return obj2.getValue();
              } else {
                obj2.setValue(val);
              }
            };
            el2.progressbar = obj2;
            return obj2;
          }
          ;
          function Rating(el2, options2) {
            if (el2.rating) {
              return el2.rating.setOptions(options2, true);
            }
            var obj2 = {};
            obj2.options = {};
            obj2.setOptions = function(options3, reset) {
              var defaults2 = {
                number: 5,
                value: 0,
                tooltip: ["Very bad", "Bad", "Average", "Good", "Very good"],
                onchange: null
              };
              for (var property2 in defaults2) {
                if (options3 && options3.hasOwnProperty(property2)) {
                  obj2.options[property2] = options3[property2];
                } else {
                  if (typeof obj2.options[property2] == "undefined" || reset === true) {
                    obj2.options[property2] = defaults2[property2];
                  }
                }
              }
              el2.innerHTML = "";
              for (var i2 = 0; i2 < obj2.options.number; i2++) {
                var div2 = document.createElement("div");
                div2.setAttribute("data-index", i2 + 1);
                div2.setAttribute("title", obj2.options.tooltip[i2]);
                el2.appendChild(div2);
              }
              if (obj2.options.value) {
                for (var i2 = 0; i2 < obj2.options.number; i2++) {
                  if (i2 < obj2.options.value) {
                    el2.children[i2].classList.add("jrating-selected");
                  }
                }
              }
              return obj2;
            };
            obj2.setValue = function(index) {
              for (var i2 = 0; i2 < obj2.options.number; i2++) {
                if (i2 < index) {
                  el2.children[i2].classList.add("jrating-selected");
                } else {
                  el2.children[i2].classList.remove("jrating-over");
                  el2.children[i2].classList.remove("jrating-selected");
                }
              }
              obj2.options.value = index;
              if (typeof obj2.options.onchange == "function") {
                obj2.options.onchange(el2, index);
              }
              if (el2.value != obj2.options.value) {
                el2.value = obj2.options.value;
                if (typeof el2.oninput == "function") {
                  el2.oninput({
                    type: "input",
                    target: el2,
                    value: el2.value
                  });
                }
              }
            };
            obj2.getValue = function() {
              return obj2.options.value;
            };
            var init = function() {
              obj2.setOptions(options2);
              el2.classList.add("jrating");
              el2.addEventListener("click", function(e) {
                var index = e.target.getAttribute("data-index");
                if (index != void 0) {
                  if (index == obj2.options.value) {
                    obj2.setValue(0);
                  } else {
                    obj2.setValue(index);
                  }
                }
              });
              el2.addEventListener("mouseover", function(e) {
                var index = e.target.getAttribute("data-index");
                for (var i2 = 0; i2 < obj2.options.number; i2++) {
                  if (i2 < index) {
                    el2.children[i2].classList.add("jrating-over");
                  } else {
                    el2.children[i2].classList.remove("jrating-over");
                  }
                }
              });
              el2.addEventListener("mouseout", function(e) {
                for (var i2 = 0; i2 < obj2.options.number; i2++) {
                  el2.children[i2].classList.remove("jrating-over");
                }
              });
              el2.change = obj2.setValue;
              el2.val = function(val) {
                if (val === void 0) {
                  return obj2.getValue();
                } else {
                  obj2.setValue(val);
                }
              };
              el2.rating = obj2;
            };
            init();
            return obj2;
          }
          ;
          function Search(el2, options2) {
            if (el2.search) {
              return el2.search;
            }
            var index = null;
            var select = function(e) {
              if (e.target.classList.contains("jsearch_item")) {
                var element = e.target;
              } else {
                var element = e.target.parentNode;
              }
              obj2.selectIndex(element);
              e.preventDefault();
            };
            var createList = function(data) {
              if (typeof obj2.options.onsearch == "function") {
                var ret = obj2.options.onsearch(obj2, data);
                if (ret) {
                  data = ret;
                }
              }
              container.innerHTML = "";
              if (!data.length) {
                el2.style.display = "";
              } else {
                el2.style.display = "block";
                var len = data.length < 11 ? data.length : 10;
                for (var i2 = 0; i2 < len; i2++) {
                  if (typeof data[i2] == "string") {
                    var text = data[i2];
                    var value2 = data[i2];
                  } else {
                    var text = data[i2].text;
                    if (!text && data[i2].name) {
                      text = data[i2].name;
                    }
                    var value2 = data[i2].value;
                    if (!value2 && data[i2].id) {
                      value2 = data[i2].id;
                    }
                  }
                  var div2 = document.createElement("div");
                  div2.setAttribute("data-value", value2);
                  div2.setAttribute("data-text", text);
                  div2.className = "jsearch_item";
                  if (data[i2].id) {
                    div2.setAttribute("id", data[i2].id);
                  }
                  if (obj2.options.forceSelect && i2 == 0) {
                    div2.classList.add("selected");
                  }
                  var img = document.createElement("img");
                  if (data[i2].image) {
                    img.src = data[i2].image;
                  } else {
                    img.style.display = "none";
                  }
                  div2.appendChild(img);
                  var item = document.createElement("div");
                  item.innerHTML = text;
                  div2.appendChild(item);
                  container.appendChild(div2);
                }
              }
            };
            var execute2 = function(str) {
              if (str != obj2.terms) {
                obj2.terms = str;
                if (obj2.options.forceSelect) {
                  index = 0;
                } else {
                  index = null;
                }
                if (Array.isArray(obj2.options.data)) {
                  var test = function(o) {
                    if (typeof o == "string") {
                      if (("" + o).toLowerCase().search(str.toLowerCase()) >= 0) {
                        return true;
                      }
                    } else {
                      for (var key in o) {
                        var value2 = o[key];
                        if (("" + value2).toLowerCase().search(str.toLowerCase()) >= 0) {
                          return true;
                        }
                      }
                    }
                    return false;
                  };
                  var results = obj2.options.data.filter(function(item) {
                    return test(item);
                  });
                  createList(results);
                } else {
                  ajax({
                    url: obj2.options.data + str,
                    method: "GET",
                    dataType: "json",
                    success: function(data) {
                      createList(data);
                    }
                  });
                }
              }
            };
            var timer = null;
            var obj2 = function(str) {
              if (timer) {
                clearTimeout(timer);
              }
              timer = setTimeout(function() {
                execute2(str);
              }, 500);
            };
            if (options2.forceSelect === null) {
              options2.forceSelect = true;
            }
            obj2.options = {
              data: options2.data || null,
              input: options2.input || null,
              searchByNode: options2.searchByNode || null,
              onselect: options2.onselect || null,
              forceSelect: options2.forceSelect,
              onsearch: options2.onsearch || null,
              onbeforesearch: options2.onbeforesearch || null
            };
            obj2.selectIndex = function(item) {
              var id = item.getAttribute("id");
              var text = item.getAttribute("data-text");
              var value2 = item.getAttribute("data-value");
              var image = item.children[0].src || "";
              if (typeof obj2.options.onselect == "function") {
                obj2.options.onselect(obj2, text, value2, id, image);
              }
              obj2.close();
            };
            obj2.open = function() {
              el2.style.display = "block";
            };
            obj2.close = function() {
              if (timer) {
                clearTimeout(timer);
              }
              obj2.terms = "";
              container.innerHTML = "";
              el2.style.display = "";
            };
            obj2.isOpened = function() {
              return el2.style.display ? true : false;
            };
            obj2.keydown = function(e) {
              if (obj2.isOpened()) {
                if (e.key == "Enter") {
                  if (index !== null && container.children[index]) {
                    obj2.selectIndex(container.children[index]);
                    e.preventDefault();
                  } else {
                    obj2.close();
                  }
                } else if (e.key === "ArrowUp") {
                  if (index !== null && container.children[0]) {
                    container.children[index].classList.remove("selected");
                    if (!obj2.options.forceSelect && index === 0) {
                      index = null;
                    } else {
                      index = Math.max(0, index - 1);
                      container.children[index].classList.add("selected");
                    }
                  }
                  e.preventDefault();
                } else if (e.key === "ArrowDown") {
                  if (index == null) {
                    index = -1;
                  } else {
                    container.children[index].classList.remove("selected");
                  }
                  if (index < 9 && container.children[index + 1]) {
                    index++;
                  }
                  container.children[index].classList.add("selected");
                  e.preventDefault();
                }
              }
            };
            obj2.keyup = function(e) {
              if (!obj2.options.searchByNode && obj2.options.input) {
                if (obj2.options.input.tagName === "DIV") {
                  var terms = obj2.options.input.innerText;
                } else {
                  var terms = obj2.options.input.value;
                }
              } else {
                var node = helpers.getNode();
                if (node) {
                  var terms = node.innerText;
                }
              }
              if (typeof obj2.options.onbeforesearch == "function") {
                var ret = obj2.options.onbeforesearch(obj2, terms);
                if (ret) {
                  terms = ret;
                } else {
                  if (ret === false) {
                    return;
                  }
                }
              }
              obj2(terms);
            };
            obj2.blur = function(e) {
              obj2.close();
            };
            if (obj2.options.input) {
              obj2.options.input.addEventListener("keyup", obj2.keyup);
              obj2.options.input.addEventListener("keydown", obj2.keydown);
              obj2.options.input.addEventListener("blur", obj2.blur);
            }
            var container = document.createElement("div");
            container.classList.add("jsearch_container");
            container.onmousedown = select;
            el2.appendChild(container);
            el2.classList.add("jsearch");
            el2.search = obj2;
            return obj2;
          }
          ;
          function Slider(el2, options2) {
            var obj2 = {};
            obj2.options = {};
            obj2.currentImage = null;
            if (options2) {
              obj2.options = options2;
            }
            el2.setAttribute("tabindex", "900");
            obj2.options.items = [];
            if (!el2.classList.contains("jslider")) {
              el2.classList.add("jslider");
              el2.classList.add("unselectable");
              if (obj2.options.height) {
                el2.style.minHeight = parseInt(obj2.options.height) + "px";
              }
              if (obj2.options.width) {
                el2.style.width = parseInt(obj2.options.width) + "px";
              }
              if (obj2.options.grid) {
                el2.classList.add("jslider-grid");
                var number2 = el2.children.length;
                if (number2 > 4) {
                  el2.setAttribute("data-total", number2 - 4);
                }
                el2.setAttribute("data-number", number2 > 4 ? 4 : number2);
              }
              var counter = document.createElement("div");
              counter.classList.add("jslider-counter");
              if (el2.children.length > 0) {
                for (var i2 = 0; i2 < el2.children.length; i2++) {
                  obj2.options.items.push(el2.children[i2]);
                  var item = document.createElement("div");
                  item.onclick = function() {
                    var index = Array.prototype.slice.call(counter.children).indexOf(this);
                    obj2.show(obj2.currentImage = obj2.options.items[index]);
                  };
                  counter.appendChild(item);
                }
              }
              var caption = document.createElement("div");
              caption.className = "jslider-caption";
              var controls = document.createElement("div");
              var close = document.createElement("div");
              close.className = "jslider-close";
              close.innerHTML = "";
              close.onclick = function() {
                obj2.close();
              };
              controls.appendChild(caption);
              controls.appendChild(close);
            }
            obj2.updateCounter = function(index) {
              for (var i3 = 0; i3 < counter.children.length; i3++) {
                if (counter.children[i3].classList.contains("jslider-counter-focus")) {
                  counter.children[i3].classList.remove("jslider-counter-focus");
                  break;
                }
              }
              counter.children[index].classList.add("jslider-counter-focus");
            };
            obj2.show = function(target) {
              if (!target) {
                var target = el2.children[0];
              }
              el2.classList.add("jslider-focus");
              el2.classList.remove("jslider-grid");
              el2.appendChild(controls);
              el2.appendChild(counter);
              var index = obj2.options.items.indexOf(target);
              obj2.updateCounter(index);
              for (var i3 = 0; i3 < el2.children.length; i3++) {
                el2.children[i3].style.display = "";
              }
              target.style.display = "block";
              if (target.previousElementSibling) {
                el2.classList.add("jslider-left");
              } else {
                el2.classList.remove("jslider-left");
              }
              if (target.nextElementSibling && target.nextElementSibling.tagName == "IMG") {
                el2.classList.add("jslider-right");
              } else {
                el2.classList.remove("jslider-right");
              }
              obj2.currentImage = target;
              if (obj2.currentImage.offsetHeight > obj2.currentImage.offsetWidth) {
                obj2.currentImage.classList.add("jslider-vertical");
              }
              controls.children[0].innerText = obj2.currentImage.getAttribute("title");
            };
            obj2.open = function() {
              obj2.show();
              if (typeof obj2.options.onopen == "function") {
                obj2.options.onopen(el2);
              }
            };
            obj2.close = function() {
              el2.classList.remove("jslider-focus");
              el2.classList.remove("jslider-left");
              el2.classList.remove("jslider-right");
              if (obj2.options.grid) {
                el2.classList.add("jslider-grid");
              }
              for (var i3 = 0; i3 < el2.children.length; i3++) {
                el2.children[i3].style.display = "";
              }
              counter.remove();
              controls.remove();
              obj2.currentImage = null;
              if (typeof obj2.options.onclose == "function") {
                obj2.options.onclose(el2);
              }
            };
            obj2.reset = function() {
              el2.innerHTML = "";
            };
            obj2.next = function() {
              var nextImage = obj2.currentImage.nextElementSibling;
              if (nextImage && nextImage.tagName === "IMG") {
                obj2.show(obj2.currentImage.nextElementSibling);
              }
            };
            obj2.prev = function() {
              if (obj2.currentImage.previousElementSibling) {
                obj2.show(obj2.currentImage.previousElementSibling);
              }
            };
            var mouseUp = function(e) {
              if (e.target.tagName == "IMG") {
                obj2.show(e.target);
              } else if (!e.target.classList.contains("jslider-close") && !(e.target.parentNode.classList.contains("jslider-counter") || e.target.classList.contains("jslider-counter"))) {
                var offsetX = e.offsetX || e.changedTouches[0].clientX;
                if (e.target.clientWidth - offsetX < 40) {
                  obj2.next();
                } else if (offsetX < 40) {
                  obj2.prev();
                }
              }
            };
            if ("ontouchend" in document.documentElement === true) {
              el2.addEventListener("touchend", mouseUp);
            } else {
              el2.addEventListener("mouseup", mouseUp);
            }
            el2.addEventListener("swipeleft", function(e) {
              obj2.next();
              e.preventDefault();
              e.stopPropagation();
            });
            el2.addEventListener("swiperight", function(e) {
              obj2.prev();
              e.preventDefault();
              e.stopPropagation();
            });
            el2.addEventListener("keydown", function(e) {
              if (e.which == 27) {
                obj2.close();
              }
            });
            el2.slider = obj2;
            return obj2;
          }
          ;
          function Tags(el2, options2) {
            if (el2.tags) {
              return el2.tags.setOptions(options2, true);
            }
            var obj2 = { type: "tags" };
            obj2.options = {};
            var limit = function() {
              return obj2.options.limit && el2.children.length >= obj2.options.limit ? true : false;
            };
            var search = null;
            var searchContainer = null;
            obj2.setOptions = function(options3, reset) {
              var defaults2 = {
                value: "",
                limit: null,
                search: null,
                placeholder: null,
                validation: null,
                onbeforepaste: null,
                onbeforechange: null,
                onremoveitem: null,
                onlimit: null,
                onchange: null,
                onfocus: null,
                onblur: null,
                onload: null
              };
              for (var property2 in defaults2) {
                if (options3 && options3.hasOwnProperty(property2)) {
                  obj2.options[property2] = options3[property2];
                } else {
                  if (typeof obj2.options[property2] == "undefined" || reset === true) {
                    obj2.options[property2] = defaults2[property2];
                  }
                }
              }
              if (obj2.options.placeholder) {
                el2.setAttribute("data-placeholder", obj2.options.placeholder);
              } else {
                el2.removeAttribute("data-placeholder");
              }
              el2.placeholder = obj2.options.placeholder;
              obj2.setValue(obj2.options.value);
              filter();
              if (obj2.options.search) {
                if (!searchContainer) {
                  searchContainer = document.createElement("div");
                  el2.parentNode.insertBefore(searchContainer, el2.nextSibling);
                  search = Search(searchContainer, {
                    data: obj2.options.search,
                    onselect: function(a, b, c) {
                      obj2.selectIndex(b, c);
                    }
                  });
                }
              } else {
                if (searchContainer) {
                  search = null;
                  searchContainer.remove();
                  searchContainer = null;
                }
              }
              return obj2;
            };
            obj2.add = function(value2, focus) {
              if (typeof obj2.options.onbeforechange == "function") {
                var ret = obj2.options.onbeforechange(el2, obj2, obj2.options.value, value2);
                if (ret === false) {
                  return false;
                } else {
                  if (ret != null) {
                    value2 = ret;
                  }
                }
              }
              if (search) {
                search.close();
              }
              if (limit()) {
                if (typeof obj2.options.onlimit == "function") {
                  obj2.options.onlimit(obj2, obj2.options.limit);
                } else {
                  alert(dictionary.translate("You reach the limit number of entries") + " " + obj2.options.limit);
                }
              } else {
                var node = helpers.getNode();
                if (node && node.parentNode && node.parentNode.classList.contains("jtags") && node.nextSibling && !(node.nextSibling.innerText && node.nextSibling.innerText.trim())) {
                  div2 = node.nextSibling;
                } else {
                  if (el2.lastChild) {
                    if (!el2.lastChild.innerText.trim()) {
                      el2.removeChild(el2.lastChild);
                    }
                  }
                  if (!value2 || typeof value2 == "string") {
                    var div2 = createElement(value2, value2, node);
                  } else {
                    for (var i2 = 0; i2 <= value2.length; i2++) {
                      if (!limit()) {
                        if (!value2[i2] || typeof value2[i2] == "string") {
                          var t = value2[i2] || "";
                          var v = null;
                        } else {
                          var t = value2[i2].text;
                          var v = value2[i2].value;
                        }
                        var div2 = createElement(t, v);
                      }
                    }
                  }
                  change();
                }
                if (focus) {
                  setFocus(div2);
                }
              }
            };
            obj2.setLimit = function(limit2) {
              obj2.options.limit = limit2;
              var n = el2.children.length - limit2;
              while (el2.children.length > limit2) {
                el2.removeChild(el2.lastChild);
              }
            };
            obj2.remove = function(node) {
              node.parentNode.removeChild(node);
              if (!el2.children.length) {
                obj2.add("", true);
              } else {
                change();
              }
              if (typeof obj2.options.onremoveitem == "function") {
                obj2.options.onremoveitem(el2, obj2, node);
              }
            };
            obj2.getData = function() {
              var data = [];
              for (var i2 = 0; i2 < el2.children.length; i2++) {
                var text = el2.children[i2].innerText.replace("\n", "");
                var value2 = el2.children[i2].getAttribute("data-value");
                if (!value2) {
                  value2 = text;
                }
                if (text || value2) {
                  data.push({ text, value: value2 });
                }
              }
              return data;
            };
            obj2.getValue = function(index) {
              var value2 = null;
              if (index != null) {
                value2 = el2.children[index].getAttribute("data-value");
                if (!value2) {
                  value2 = el2.children[index].innerText.replace("\n", "");
                }
              } else {
                var data = [];
                for (var i2 = 0; i2 < el2.children.length; i2++) {
                  value2 = el2.children[i2].innerText.replace("\n", "");
                  if (value2) {
                    data.push(obj2.getValue(i2));
                  }
                }
                value2 = data.join(",");
              }
              return value2;
            };
            obj2.setValue = function(mixed) {
              if (!mixed) {
                obj2.reset();
              } else {
                if (el2.value != mixed) {
                  if (Array.isArray(mixed)) {
                    obj2.add(mixed);
                  } else {
                    var text = ("" + mixed).trim();
                    var data = extractTags(text);
                    el2.innerHTML = "";
                    obj2.add(data);
                  }
                }
              }
            };
            obj2.reset = function() {
              el2.classList.add("jtags-empty");
              el2.innerHTML = "<div></div>";
              change();
            };
            obj2.isValid = function() {
              var test = 0;
              for (var i2 = 0; i2 < el2.children.length; i2++) {
                if (el2.children[i2].classList.contains("jtags_error")) {
                  test++;
                }
              }
              return test == 0 ? true : false;
            };
            obj2.selectIndex = function(text, value2) {
              var node = helpers.getNode();
              if (node) {
                node.innerText = text;
                if (value2) {
                  node.setAttribute("data-value", value2);
                }
                node.classList.remove("jtags_error");
                if (!limit()) {
                  obj2.add("", true);
                }
              }
            };
            obj2.search = function(node) {
              var terms = node.innerText;
            };
            obj2.destroy = function() {
              el2.removeEventListener("mouseup", tagsMouseUp);
              el2.removeEventListener("keydown", tagsKeyDown);
              el2.removeEventListener("keyup", tagsKeyUp);
              el2.removeEventListener("paste", tagsPaste);
              el2.removeEventListener("focus", tagsFocus);
              el2.removeEventListener("blur", tagsBlur);
              el2.parentNode.removeChild(el2);
            };
            var setFocus = function(node) {
              if (el2.children.length) {
                var range = document.createRange();
                var sel = window.getSelection();
                if (!node) {
                  var node = el2.childNodes[el2.childNodes.length - 1];
                }
                range.setStart(node, node.length);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                el2.scrollLeft = el2.scrollWidth;
              }
            };
            var createElement = function(label, value2, node) {
              var div2 = document.createElement("div");
              div2.textContent = label ? label : "";
              if (value2) {
                div2.setAttribute("data-value", value2);
              }
              if (node && node.parentNode.classList.contains("jtags")) {
                el2.insertBefore(div2, node.nextSibling);
              } else {
                el2.appendChild(div2);
              }
              return div2;
            };
            var change = function() {
              var value2 = obj2.getValue();
              if (value2 != obj2.options.value) {
                obj2.options.value = value2;
                if (typeof obj2.options.onchange == "function") {
                  obj2.options.onchange(el2, obj2, obj2.options.value);
                }
                if (el2.value != obj2.options.value) {
                  el2.value = obj2.options.value;
                  if (typeof el2.oninput == "function") {
                    el2.oninput({
                      type: "input",
                      target: el2,
                      value: el2.value
                    });
                  }
                }
              }
              filter();
            };
            var filter = function() {
              for (var i2 = 0; i2 < el2.children.length; i2++) {
                if (el2.children[i2].tagName === "DIV") {
                  if (!obj2.getValue(i2)) {
                    el2.children[i2].classList.remove("jtags_label");
                  } else {
                    el2.children[i2].classList.add("jtags_label");
                    if (typeof obj2.options.validation == "function") {
                      if (obj2.getValue(i2)) {
                        if (!obj2.options.validation(el2.children[i2], el2.children[i2].innerText, el2.children[i2].getAttribute("data-value"))) {
                          el2.children[i2].classList.add("jtags_error");
                        } else {
                          el2.children[i2].classList.remove("jtags_error");
                        }
                      } else {
                        el2.children[i2].classList.remove("jtags_error");
                      }
                    } else {
                      el2.children[i2].classList.remove("jtags_error");
                    }
                  }
                }
              }
              isEmpty();
            };
            var isEmpty = function() {
              if (!el2.innerText.trim()) {
                if (!el2.children.length || el2.children[0].tagName === "BR") {
                  el2.innerHTML = "";
                  setFocus(createElement());
                }
              } else {
                el2.classList.remove("jtags-empty");
              }
            };
            var extractTags = function(text) {
              var data = [];
              var word = "";
              text = text.trim();
              if (text) {
                for (var i2 = 0; i2 < text.length; i2++) {
                  if (text[i2] == "," || text[i2] == ";" || text[i2] == "\n") {
                    if (word) {
                      data.push(word.trim());
                      word = "";
                    }
                  } else {
                    word += text[i2];
                  }
                }
                if (word) {
                  data.push(word);
                }
              }
              return data;
            };
            var anchorOffset = 0;
            var tagsKeyDown = function(e) {
              anchorOffset = window.getSelection().anchorOffset;
              isEmpty();
              if (e.key === "Tab" || e.key === ";" || e.key === ",") {
                var n = window.getSelection().anchorOffset;
                if (n > 1) {
                  if (limit()) {
                    if (typeof obj2.options.onlimit == "function") {
                      obj2.options.onlimit(obj2, obj2.options.limit);
                    }
                  } else {
                    obj2.add("", true);
                  }
                }
                e.preventDefault();
              } else if (e.key == "Enter") {
                if (!search || !search.isOpened()) {
                  var n = window.getSelection().anchorOffset;
                  if (n > 1) {
                    if (!limit()) {
                      obj2.add("", true);
                    }
                  }
                  e.preventDefault();
                }
              } else if (e.key == "Backspace") {
                if (el2.children.length == 1 && window.getSelection().anchorOffset < 1) {
                  e.preventDefault();
                }
              }
              if (search) {
                search.keydown(e);
              }
              isEmpty();
            };
            var tagsKeyUp = function(e) {
              if (e.which == 39) {
                var n = window.getSelection().anchorOffset;
                if (n > 1 && n == anchorOffset) {
                  obj2.add("", true);
                }
              } else if (e.which == 13 || e.which == 38 || e.which == 40) {
                e.preventDefault();
              } else {
                if (search) {
                  search.keyup(e);
                }
              }
              filter();
            };
            var tagsPaste = function(e) {
              if (e.clipboardData || e.originalEvent.clipboardData) {
                var text = (e.originalEvent || e).clipboardData.getData("text/plain");
              } else if (window.clipboardData) {
                var text = window.clipboardData.getData("Text");
              }
              var data = extractTags(text);
              if (typeof obj2.options.onbeforepaste == "function") {
                var ret = obj2.options.onbeforepaste(el2, obj2, data);
                if (ret === false) {
                  e.preventDefault();
                  return false;
                } else {
                  if (ret) {
                    data = ret;
                  }
                }
              }
              if (data.length > 1) {
                obj2.add(data, true);
                e.preventDefault();
              } else if (data[0]) {
                document.execCommand("insertText", false, data[0]);
                e.preventDefault();
              }
            };
            var tagsMouseUp = function(e) {
              if (e.target.parentNode && e.target.parentNode.classList.contains("jtags")) {
                if (e.target.classList.contains("jtags_label") || e.target.classList.contains("jtags_error")) {
                  var rect = e.target.getBoundingClientRect();
                  if (rect.width - (e.clientX - rect.left) < 16) {
                    obj2.remove(e.target);
                  }
                }
              }
              if (e.target == el2) {
                setFocus();
              }
            };
            var tagsFocus = function() {
              if (!el2.classList.contains("jtags-focus")) {
                if (!el2.children.length || obj2.getValue(el2.children.length - 1)) {
                  if (!limit()) {
                    createElement("");
                  }
                }
                if (typeof obj2.options.onfocus == "function") {
                  obj2.options.onfocus(el2, obj2, obj2.getValue());
                }
                el2.classList.add("jtags-focus");
              }
            };
            var tagsBlur = function() {
              if (el2.classList.contains("jtags-focus")) {
                if (search) {
                  search.close();
                }
                for (var i2 = 0; i2 < el2.children.length - 1; i2++) {
                  if (!obj2.getValue(i2)) {
                    el2.removeChild(el2.children[i2]);
                  }
                }
                change();
                el2.classList.remove("jtags-focus");
                if (typeof obj2.options.onblur == "function") {
                  obj2.options.onblur(el2, obj2, obj2.getValue());
                }
              }
            };
            var init = function() {
              if ("touchend" in document.documentElement === true) {
                el2.addEventListener("touchend", tagsMouseUp);
              } else {
                el2.addEventListener("mouseup", tagsMouseUp);
              }
              el2.addEventListener("keydown", tagsKeyDown);
              el2.addEventListener("keyup", tagsKeyUp);
              el2.addEventListener("paste", tagsPaste);
              el2.addEventListener("focus", tagsFocus);
              el2.addEventListener("blur", tagsBlur);
              el2.setAttribute("contenteditable", true);
              el2.classList.add("jtags");
              obj2.setOptions(options2);
              if (typeof obj2.options.onload == "function") {
                obj2.options.onload(el2, obj2);
              }
              el2.change = obj2.setValue;
              el2.val = function(val) {
                if (val === void 0) {
                  return obj2.getValue();
                } else {
                  obj2.setValue(val);
                }
              };
              el2.tags = obj2;
            };
            init();
            return obj2;
          }
          ;
          function Upload(el2, options2) {
            var obj2 = {};
            obj2.options = {};
            var defaults2 = {
              type: "image",
              extension: "*",
              input: false,
              minWidth: false,
              maxWidth: null,
              maxHeight: null,
              maxJpegSizeBytes: null,
              // For example, 350Kb would be 350000
              onchange: null,
              multiple: false,
              remoteParser: null
            };
            for (var property2 in defaults2) {
              if (options2 && options2.hasOwnProperty(property2)) {
                obj2.options[property2] = options2[property2];
              } else {
                obj2.options[property2] = defaults2[property2];
              }
            }
            if (obj2.options.multiple == true) {
              el2.setAttribute("data-multiple", true);
            }
            el2.content = [];
            el2.classList.add("jupload");
            if (obj2.options.input == true) {
              el2.classList.add("input");
            }
            obj2.add = function(data) {
              if (obj2.options.multiple == false) {
                el2.content = [];
                el2.innerText = "";
              }
              if (obj2.options.type == "image") {
                var img = document.createElement("img");
                img.setAttribute("src", data.file);
                img.setAttribute("tabindex", -1);
                if (!el2.getAttribute("name")) {
                  img.className = "jfile";
                  img.content = data;
                }
                el2.appendChild(img);
              } else {
                if (data.name) {
                  var name = data.name;
                } else {
                  var name = data.file;
                }
                var div2 = document.createElement("div");
                div2.innerText = name || obj2.options.type;
                div2.classList.add("jupload-item");
                div2.setAttribute("tabindex", -1);
                el2.appendChild(div2);
              }
              if (data.content) {
                data.file = helpers.guid();
              }
              el2.content.push(data);
              if (typeof obj2.options.onchange == "function") {
                obj2.options.onchange(el2, data);
              }
            };
            obj2.addFromFile = function(file) {
              var type = file.type.split("/");
              if (type[0] == obj2.options.type) {
                var readFile = new FileReader();
                readFile.addEventListener("load", function(v) {
                  var data = {
                    file: v.srcElement.result,
                    extension: file.name.substr(file.name.lastIndexOf(".") + 1),
                    name: file.name,
                    size: file.size,
                    lastmodified: file.lastModified,
                    content: v.srcElement.result
                  };
                  obj2.add(data);
                });
                readFile.readAsDataURL(file);
              } else {
                alert(dictionary.translate("This extension is not allowed"));
              }
            };
            obj2.addFromUrl = function(src) {
              if (src.substr(0, 4) != "data" && !obj2.options.remoteParser) {
                console.error("remoteParser not defined in your initialization");
              } else {
                if (src.substr(0, 4) == "data") {
                  var extension = src.split(";");
                  extension = extension[0].split("/");
                  var type = extension[0].replace("data:", "");
                  if (type == obj2.options.type) {
                    var data = {
                      file: src,
                      name: "",
                      extension: extension[1],
                      content: src
                    };
                    obj2.add(data);
                  } else {
                    alert(obj2.options.text.extensionNotAllowed);
                  }
                } else {
                  var extension = src.substr(src.lastIndexOf(".") + 1);
                  src = obj2.options.remoteParser + src;
                  ajax({
                    url: src,
                    type: "GET",
                    dataType: "blob",
                    success: function(data2) {
                    }
                  });
                }
              }
            };
            var getDataURL = function(canvas, type) {
              var compression = 0.92;
              var lastContentLength = null;
              var content = canvas.toDataURL(type, compression);
              while (obj2.options.maxJpegSizeBytes && type === "image/jpeg" && content.length > obj2.options.maxJpegSizeBytes && content.length !== lastContentLength) {
                compression *= 0.9;
                lastContentLength = content.length;
                content = canvas.toDataURL(type, compression);
              }
              return content;
            };
            var mime = obj2.options.type + "/" + obj2.options.extension;
            var input = document.createElement("input");
            input.type = "file";
            input.setAttribute("accept", mime);
            input.onchange = function() {
              for (var i2 = 0; i2 < this.files.length; i2++) {
                obj2.addFromFile(this.files[i2]);
              }
            };
            if (obj2.options.multiple == true) {
              input.setAttribute("multiple", true);
            }
            var current = null;
            el2.addEventListener("click", function(e) {
              current = null;
              if (!el2.children.length || e.target === el2) {
                helpers.click(input);
              } else {
                if (e.target.parentNode == el2) {
                  current = e.target;
                }
              }
            });
            el2.addEventListener("dblclick", function(e) {
              helpers.click(input);
            });
            el2.addEventListener("dragenter", function(e) {
              el2.style.border = "1px dashed #000";
            });
            el2.addEventListener("dragleave", function(e) {
              el2.style.border = "1px solid #eee";
            });
            el2.addEventListener("dragstop", function(e) {
              el2.style.border = "1px solid #eee";
            });
            el2.addEventListener("dragover", function(e) {
              e.preventDefault();
            });
            el2.addEventListener("keydown", function(e) {
              if (current && e.which == 46) {
                var index = Array.prototype.indexOf.call(el2.children, current);
                if (index >= 0) {
                  el2.content.splice(index, 1);
                  current.remove();
                  current = null;
                }
              }
            });
            el2.addEventListener("drop", function(e) {
              e.preventDefault();
              e.stopPropagation();
              var html = (e.originalEvent || e).dataTransfer.getData("text/html");
              var file = (e.originalEvent || e).dataTransfer.files;
              if (file.length) {
                for (var i2 = 0; i2 < e.dataTransfer.files.length; i2++) {
                  obj2.addFromFile(e.dataTransfer.files[i2]);
                }
              } else if (html) {
                if (obj2.options.multiple == false) {
                  el2.innerText = "";
                }
                var div2 = document.createElement("div");
                div2.innerHTML = html;
                var img = div2.querySelectorAll("img");
                if (img.length) {
                  for (var i2 = 0; i2 < img.length; i2++) {
                    obj2.addFromUrl(img[i2].src);
                  }
                }
              }
              el2.style.border = "1px solid #eee";
              return false;
            });
            el2.val = function(val) {
              if (val === void 0) {
                return el2.content && el2.content.length ? el2.content : null;
              } else {
                el2.innerText = "";
                el2.content = [];
                if (val) {
                  if (Array.isArray(val)) {
                    for (var i2 = 0; i2 < val.length; i2++) {
                      if (typeof val[i2] == "string") {
                        obj2.add({ file: val[i2] });
                      } else {
                        obj2.add(val[i2]);
                      }
                    }
                  } else if (typeof val == "string") {
                    obj2.add({ file: val });
                  }
                }
              }
            };
            el2.upload = el2.image = obj2;
            return obj2;
          }
          var sha512 = __webpack_require__2(195);
          var sha512_default = __webpack_require__2.n(sha512);
          ;
          var jsuites_jSuites = {
            // Helpers
            ...dictionary,
            ...helpers,
            /** Current version */
            version: "5.7.0",
            /** Bind new extensions to Jsuites */
            setExtensions: function(o) {
              if (typeof o == "object") {
                var k = Object.keys(o);
                for (var i2 = 0; i2 < k.length; i2++) {
                  jsuites_jSuites[k[i2]] = o[k[i2]];
                }
              }
            },
            tracking,
            path: Path,
            sorting: Sorting,
            lazyLoading: LazyLoading,
            // Plugins
            ajax,
            animation,
            calendar,
            color: Color,
            contextmenu,
            dropdown,
            editor,
            floating,
            form: plugins_form,
            mask,
            modal,
            notification,
            palette,
            picker: Picker,
            progressbar: Progressbar,
            rating: Rating,
            search: Search,
            slider: Slider,
            tabs: Tabs,
            tags: Tags,
            toolbar: Toolbar,
            upload: Upload,
            validations
          };
          jsuites_jSuites.image = Upload;
          jsuites_jSuites.image.create = function(data) {
            var img = document.createElement("img");
            img.setAttribute("src", data.file);
            img.className = "jfile";
            img.setAttribute("tabindex", -1);
            img.content = data;
            return img;
          };
          jsuites_jSuites.tracker = plugins_form;
          jsuites_jSuites.loading = animation.loading;
          jsuites_jSuites.sha512 = sha512_default();
          const Events = function() {
            if (typeof window["jSuitesStateControl"] === "undefined") {
              window["jSuitesStateControl"] = [];
            } else {
              return;
            }
            const find = function(DOMElement, component2) {
              if (DOMElement[component2.type] && DOMElement[component2.type] == component2) {
                return true;
              }
              if (DOMElement.component && DOMElement.component == component2) {
                return true;
              }
              if (DOMElement.parentNode) {
                return find(DOMElement.parentNode, component2);
              }
              return false;
            };
            const isOpened = function(e) {
              let state2 = window["jSuitesStateControl"];
              if (state2 && state2.length > 0) {
                for (let i2 = 0; i2 < state2.length; i2++) {
                  if (state2[i2] && !find(e, state2[i2])) {
                    state2[i2].close();
                  }
                }
              }
            };
            let cornerSize = 15;
            let element = null;
            let editorAction = false;
            let state = {
              x: null,
              y: null
            };
            let tooltip = document.createElement("div");
            tooltip.classList.add("jtooltip");
            const isWebcomponent = function(e) {
              return e && (e.shadowRoot || e.tagName && e.tagName.includes("-"));
            };
            const getElement = function(e) {
              let d;
              let element2;
              let path = e.path || e.composedPath && e.composedPath();
              if (path) {
                element2 = path[0];
                if (element2 && isWebcomponent(element2) && !element2.shadowRoot && e.toElement) {
                  element2 = e.toElement;
                }
              } else {
                if (e.target && isWebcomponent(e.target)) {
                  d = e.target.shadowRoot;
                } else {
                  d = document;
                }
                element2 = d.elementFromPoint(x, y);
              }
              return element2;
            };
            const mouseDown = function(e) {
              if (e.changedTouches && e.changedTouches[0]) {
                var x2 = e.changedTouches[0].clientX;
                var y2 = e.changedTouches[0].clientY;
              } else {
                var x2 = e.clientX;
                var y2 = e.clientY;
              }
              let element2 = getElement(e);
              let editable = element2 && element2.tagName === "DIV" && element2.getAttribute("contentEditable");
              let item = jsuites_jSuites.findElement(element2, "jpanel");
              if (item && !item.classList.contains("readonly") && !editable) {
                let rect = item.getBoundingClientRect();
                let angle = 0;
                if (item.style.rotate) {
                  angle = parseFloat(item.style.rotate);
                }
                let action = "move";
                if (element2.getAttribute("data-action")) {
                  action = element2.getAttribute("data-action");
                } else {
                  if (item.style.cursor) {
                    action = "resize";
                  } else {
                    item.style.cursor = "move";
                  }
                }
                editorAction = {
                  action,
                  a: angle,
                  e: item,
                  x: x2,
                  y: y2,
                  l: rect.left,
                  t: rect.top,
                  b: rect.bottom,
                  r: rect.right,
                  w: rect.width,
                  h: rect.height,
                  d: item.style.cursor,
                  actioned: false
                };
                if (!item.style.width) {
                  item.style.width = rect.width + "px";
                }
                if (!item.style.height) {
                  item.style.height = rect.height + "px";
                }
              } else {
                editorAction = false;
              }
              isOpened(element2);
              focus(e);
            };
            const calculateAngle = function(x1, y1, x2, y2, x3, y3) {
              const dx1 = x2 - x1;
              const dy1 = y2 - y1;
              const dx2 = x3 - x1;
              const dy2 = y3 - y1;
              let angle1 = Math.atan2(dy1, dx1);
              let angle2 = Math.atan2(dy2, dx2);
              let angleDifference = angle2 - angle1;
              angleDifference = angleDifference * (180 / Math.PI);
              if (angleDifference < 0) {
                angleDifference += 360;
              }
              return angleDifference;
            };
            const mouseUp = function(e) {
              if (editorAction && editorAction.e) {
                if (typeof editorAction.e.refresh == "function" && state.actioned) {
                  editorAction.e.refresh();
                }
                editorAction.e.style.cursor = "";
              }
              state = {
                x: null,
                y: null
              };
              editorAction = false;
            };
            const mouseMove = function(e) {
              if (editorAction) {
                let x2 = e.clientX || e.pageX;
                let y2 = e.clientY || e.pageY;
                if (state.x == null && state.y == null) {
                  state.x = x2;
                  state.y = y2;
                }
                if (editorAction.action === "move") {
                  var dx = x2 - state.x;
                  var dy = y2 - state.y;
                  var top = editorAction.e.offsetTop + dy;
                  var left = editorAction.e.offsetLeft + dx;
                  editorAction.e.style.top = top + "px";
                  editorAction.e.style.left = left + "px";
                  if (typeof editorAction.e.refresh == "function") {
                    state.actioned = true;
                    editorAction.e.refresh("position", top, left);
                  }
                } else if (editorAction.action === "rotate") {
                  let ox = editorAction.l + editorAction.w / 2;
                  let oy = editorAction.t + editorAction.h / 2;
                  let angle = calculateAngle(ox, oy, editorAction.x, editorAction.y, x2, y2);
                  angle = angle + editorAction.a % 360;
                  angle = Math.round(angle / 2) * 2;
                  editorAction.e.style.rotate = `${angle}deg`;
                  if (typeof editorAction.e.refresh == "function") {
                    state.actioned = true;
                    editorAction.e.refresh("rotate", angle);
                  }
                } else if (editorAction.action === "resize") {
                  let top2 = null;
                  let left2 = null;
                  let width = null;
                  let height = null;
                  if (editorAction.d == "e-resize" || editorAction.d == "ne-resize" || editorAction.d == "se-resize") {
                    width = editorAction.e.offsetWidth + (x2 - state.x);
                    if (e.shiftKey) {
                      height = editorAction.e.offsetHeight + (x2 - state.x) * (editorAction.e.offsetHeight / editorAction.e.offsetWidth);
                    }
                  } else if (editorAction.d === "w-resize" || editorAction.d == "nw-resize" || editorAction.d == "sw-resize") {
                    left2 = editorAction.e.offsetLeft + (x2 - state.x);
                    width = editorAction.e.offsetLeft + editorAction.e.offsetWidth - left2;
                    if (e.shiftKey) {
                      height = editorAction.e.offsetHeight - (x2 - state.x) * (editorAction.e.offsetHeight / editorAction.e.offsetWidth);
                    }
                  }
                  if (editorAction.d == "s-resize" || editorAction.d == "se-resize" || editorAction.d == "sw-resize") {
                    if (!height) {
                      height = editorAction.e.offsetHeight + (y2 - state.y);
                    }
                  } else if (editorAction.d === "n-resize" || editorAction.d == "ne-resize" || editorAction.d == "nw-resize") {
                    top2 = editorAction.e.offsetTop + (y2 - state.y);
                    height = editorAction.e.offsetTop + editorAction.e.offsetHeight - top2;
                  }
                  if (top2) {
                    editorAction.e.style.top = top2 + "px";
                  }
                  if (left2) {
                    editorAction.e.style.left = left2 + "px";
                  }
                  if (width) {
                    editorAction.e.style.width = width + "px";
                  }
                  if (height) {
                    editorAction.e.style.height = height + "px";
                  }
                  if (typeof editorAction.e.refresh == "function") {
                    state.actioned = true;
                    editorAction.e.refresh("dimensions", width, height);
                  }
                }
                state.x = x2;
                state.y = y2;
              } else {
                let element2 = getElement(e);
                let item = jsuites_jSuites.findElement(element2, "jpanel");
                if (item) {
                  let controls = item.classList.contains("jpanel-controls");
                  if (controls) {
                    let position3 = element2.getAttribute("data-position");
                    if (position3) {
                      item.style.cursor = position3;
                    } else {
                      item.style.cursor = "";
                    }
                  } else if (item.getAttribute("tabindex")) {
                    let rect = item.getBoundingClientRect();
                    if (e.clientY - rect.top < cornerSize) {
                      if (rect.width - (e.clientX - rect.left) < cornerSize) {
                        item.style.cursor = "ne-resize";
                      } else if (e.clientX - rect.left < cornerSize) {
                        item.style.cursor = "nw-resize";
                      } else {
                        item.style.cursor = "n-resize";
                      }
                    } else if (rect.height - (e.clientY - rect.top) < cornerSize) {
                      if (rect.width - (e.clientX - rect.left) < cornerSize) {
                        item.style.cursor = "se-resize";
                      } else if (e.clientX - rect.left < cornerSize) {
                        item.style.cursor = "sw-resize";
                      } else {
                        item.style.cursor = "s-resize";
                      }
                    } else if (rect.width - (e.clientX - rect.left) < cornerSize) {
                      item.style.cursor = "e-resize";
                    } else if (e.clientX - rect.left < cornerSize) {
                      item.style.cursor = "w-resize";
                    } else {
                      item.style.cursor = "";
                    }
                  }
                }
              }
            };
            let position2 = ["n", "ne", "e", "se", "s", "sw", "w", "nw", "rotate"];
            position2.forEach(function(v, k) {
              position2[k] = document.createElement("div");
              position2[k].classList.add("jpanel-action");
              if (v === "rotate") {
                position2[k].setAttribute("data-action", "rotate");
              } else {
                position2[k].setAttribute("data-action", "resize");
                position2[k].setAttribute("data-position", v + "-resize");
              }
            });
            let currentElement;
            const focus = function(e) {
              let element2 = getElement(e);
              let item = jsuites_jSuites.findElement(element2, "jpanel");
              if (item && !item.classList.contains("readonly") && item.classList.contains("jpanel-controls")) {
                item.append(...position2);
                if (!item.classList.contains("jpanel-rotate")) {
                  position2[position2.length - 1].remove();
                }
                currentElement = item;
              } else {
                blur(e);
              }
            };
            const blur = function(e) {
              if (currentElement) {
                position2.forEach(function(v) {
                  v.remove();
                });
                currentElement = null;
              }
            };
            const mouseOver = function(e) {
              let element2 = getElement(e);
              var message = element2.getAttribute("data-tooltip");
              if (message) {
                tooltip.innerText = message;
                if (e.changedTouches && e.changedTouches[0]) {
                  var x2 = e.changedTouches[0].clientX;
                  var y2 = e.changedTouches[0].clientY;
                } else {
                  var x2 = e.clientX;
                  var y2 = e.clientY;
                }
                tooltip.style.top = y2 + "px";
                tooltip.style.left = x2 + "px";
                document.body.appendChild(tooltip);
              } else if (tooltip.innerText) {
                tooltip.innerText = "";
                document.body.removeChild(tooltip);
              }
            };
            const contextMenu = function(e) {
              var item = document.activeElement;
              if (item && typeof item.contextmenu == "function") {
                item.contextmenu(e);
                e.preventDefault();
                e.stopImmediatePropagation();
              } else {
                item = jsuites_jSuites.findElement(e.target, function(o2) {
                  return o2.tagName && o2.getAttribute("aria-contextmenu-id");
                });
                if (item) {
                  var o = document.querySelector("#" + item);
                  if (!o) {
                    console.error("JSUITES: contextmenu id not found: " + item);
                  } else {
                    o.contextmenu.open(e);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                  }
                }
              }
            };
            const keyDown = function(e) {
              let item = document.activeElement;
              if (item) {
                if (e.key === "Delete" && typeof item.delete == "function") {
                  item.delete();
                  e.preventDefault();
                  e.stopImmediatePropagation();
                }
              }
              let state2 = window["jSuitesStateControl"];
              if (state2 && state2.length > 0) {
                item = state2[state2.length - 1];
                if (item) {
                  if (e.key === "Escape" && typeof item.isOpened == "function" && typeof item.close == "function") {
                    if (item.isOpened()) {
                      item.close();
                      e.preventDefault();
                      e.stopImmediatePropagation();
                    }
                  }
                }
              }
            };
            const input = function(e) {
              if (e.target.getAttribute("data-mask") || e.target.mask) {
                jsuites_jSuites.mask(e);
              }
            };
            document.addEventListener("focusin", focus);
            document.addEventListener("mouseup", mouseUp);
            document.addEventListener("mousedown", mouseDown);
            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseover", mouseOver);
            document.addEventListener("keydown", keyDown);
            document.addEventListener("contextmenu", contextMenu);
            document.addEventListener("input", input);
          };
          if (typeof document !== "undefined") {
            Events();
          }
          var jsuites = jsuites_jSuites;
        }();
        jSuites2 = __webpack_exports__2["default"];
      })();
      return jSuites2;
    });
  }
});

// node_modules/jspreadsheet-ce/dist/index.js
var require_dist = __commonJS({
  "node_modules/jspreadsheet-ce/dist/index.js"(exports, module) {
    if (!jSuites && typeof __require === "function") {
      jSuites = require_jsuites();
    }
    var jSuites;
    (function(global, factory2) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory2() : typeof define === "function" && define.amd ? define(factory2) : global.jspreadsheet = factory2();
    })(exports, function() {
      var jspreadsheet;
      (function() {
        var __webpack_modules__ = { 463: function(e) {
          var t;
          e.exports = (function() {
            var e2 = { 765: function(e3, t2) {
              var o2;
              o2 = function(e4) {
                e4.version = "1.0.2";
                var t3 = Math;
                function o3(e5, t4) {
                  for (var o4 = 0, n3 = 0; o4 < e5.length; ++o4) n3 = t4 * n3 + e5[o4];
                  return n3;
                }
                function n2(e5, t4, o4, n3, r3) {
                  if (0 === t4) return o4;
                  if (1 === t4) return n3;
                  for (var l2 = 2 / e5, i3 = n3, s2 = 1; s2 < t4; ++s2) i3 = n3 * s2 * l2 + r3 * o4, o4 = n3, n3 = i3;
                  return i3;
                }
                function r2(e5, t4, o4, r3, l2) {
                  return function(o5, i3) {
                    if (r3) {
                      if (0 === o5) return 1 == r3 ? -1 / 0 : 1 / 0;
                      if (o5 < 0) return NaN;
                    }
                    return 0 === i3 ? e5(o5) : 1 === i3 ? t4(o5) : i3 < 0 ? NaN : n2(o5, i3 |= 0, e5(o5), t4(o5), l2);
                  };
                }
                var l, i2, s, a, u, c, f, d, p, b, j, h, g, m = function() {
                  var e5 = 0.636619772, r3 = [57568490574, -13362590354, 6516196407e-1, -1121442418e-2, 77392.33017, -184.9052456].reverse(), l2 = [57568490411, 1029532985, 9494680718e-3, 59272.64853, 267.8532712, 1].reverse(), i3 = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse(), s2 = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934935152e-16].reverse();
                  function a2(n3) {
                    var a3 = 0, u3 = 0, c3 = 0, f3 = n3 * n3;
                    if (n3 < 8) a3 = (u3 = o3(r3, f3)) / (c3 = o3(l2, f3));
                    else {
                      var d3 = n3 - 0.785398164;
                      u3 = o3(i3, f3 = 64 / f3), c3 = o3(s2, f3), a3 = t3.sqrt(e5 / n3) * (t3.cos(d3) * u3 - t3.sin(d3) * c3 * 8 / n3);
                    }
                    return a3;
                  }
                  var u2 = [72362614232, -7895059235, 2423968531e-1, -2972611439e-3, 15704.4826, -30.16036606].reverse(), c2 = [144725228442, 2300535178, 1858330474e-2, 99447.43394, 376.9991397, 1].reverse(), f2 = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse(), d2 = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
                  function p2(n3) {
                    var r4 = 0, l3 = 0, i4 = 0, s3 = n3 * n3, a3 = t3.abs(n3) - 2.356194491;
                    return Math.abs(n3) < 8 ? r4 = (l3 = n3 * o3(u2, s3)) / (i4 = o3(c2, s3)) : (l3 = o3(f2, s3 = 64 / s3), i4 = o3(d2, s3), r4 = t3.sqrt(e5 / t3.abs(n3)) * (t3.cos(a3) * l3 - t3.sin(a3) * i4 * 8 / t3.abs(n3)), n3 < 0 && (r4 = -r4)), r4;
                  }
                  return function e6(o4, r4) {
                    if (r4 = Math.round(r4), !isFinite(o4)) return isNaN(o4) ? o4 : 0;
                    if (r4 < 0) return (r4 % 2 ? -1 : 1) * e6(o4, -r4);
                    if (o4 < 0) return (r4 % 2 ? -1 : 1) * e6(-o4, r4);
                    if (0 === r4) return a2(o4);
                    if (1 === r4) return p2(o4);
                    if (0 === o4) return 0;
                    var l3 = 0;
                    if (o4 > r4) l3 = n2(o4, r4, a2(o4), p2(o4), -1);
                    else {
                      for (var i4 = false, s3 = 0, u3 = 0, c3 = 1, f3 = 0, d3 = 2 / o4, b2 = 2 * t3.floor((r4 + t3.floor(t3.sqrt(40 * r4))) / 2); b2 > 0; b2--) f3 = b2 * d3 * c3 - s3, s3 = c3, c3 = f3, t3.abs(c3) > 1e10 && (c3 *= 1e-10, s3 *= 1e-10, l3 *= 1e-10, u3 *= 1e-10), i4 && (u3 += c3), i4 = !i4, b2 == r4 && (l3 = s3);
                      l3 /= u3 = 2 * u3 - c3;
                    }
                    return l3;
                  };
                }(), v = (l = 0.636619772, i2 = [-2957821389, 7062834065, -5123598036e-1, 1087988129e-2, -86327.92757, 228.4622733].reverse(), s = [40076544269, 7452499648e-1, 7189466438e-3, 47447.2647, 226.1030244, 1].reverse(), a = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse(), u = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934945152e-16].reverse(), c = [-4900604943e3, 127527439e4, -51534381390, 7349264551e-1, -4237922726e-3, 8511.937935].reverse(), f = [249958057e5, 424441966400, 3733650367, 2245904002e-2, 102042.605, 354.9632885, 1].reverse(), d = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse(), p = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse(), r2(function(e5) {
                  var n3 = 0, r3 = 0, c2 = 0, f2 = e5 * e5, d2 = e5 - 0.785398164;
                  return e5 < 8 ? n3 = (r3 = o3(i2, f2)) / (c2 = o3(s, f2)) + l * m(e5, 0) * t3.log(e5) : (r3 = o3(a, f2 = 64 / f2), c2 = o3(u, f2), n3 = t3.sqrt(l / e5) * (t3.sin(d2) * r3 + t3.cos(d2) * c2 * 8 / e5)), n3;
                }, function(e5) {
                  var n3 = 0, r3 = 0, i3 = 0, s2 = e5 * e5, a2 = e5 - 2.356194491;
                  return e5 < 8 ? n3 = (r3 = e5 * o3(c, s2)) / (i3 = o3(f, s2)) + l * (m(e5, 1) * t3.log(e5) - 1 / e5) : (r3 = o3(d, s2 = 64 / s2), i3 = o3(p, s2), n3 = t3.sqrt(l / e5) * (t3.sin(a2) * r3 + t3.cos(a2) * i3 * 8 / e5)), n3;
                }, 0, 1, -1)), y2 = (b = [1, 3.5156229, 3.0899424, 1.2067492, 0.2659732, 0.0360768, 45813e-7].reverse(), j = [0.39894228, 0.01328592, 225319e-8, -157565e-8, 916281e-8, -0.02057706, 0.02635537, -0.01647633, 392377e-8].reverse(), h = [0.5, 0.87890594, 0.51498869, 0.15084934, 0.02658733, 301532e-8, 32411e-8].reverse(), g = [0.39894228, -0.03988024, -362018e-8, 163801e-8, -0.01031555, 0.02282967, -0.02895312, 0.01787654, -420059e-8].reverse(), function e5(n3, r3) {
                  if (0 === (r3 = Math.round(r3))) return function(e6) {
                    return e6 <= 3.75 ? o3(b, e6 * e6 / 14.0625) : t3.exp(t3.abs(e6)) / t3.sqrt(t3.abs(e6)) * o3(j, 3.75 / t3.abs(e6));
                  }(n3);
                  if (1 === r3) return function(e6) {
                    return e6 < 3.75 ? e6 * o3(h, e6 * e6 / 14.0625) : (e6 < 0 ? -1 : 1) * t3.exp(t3.abs(e6)) / t3.sqrt(t3.abs(e6)) * o3(g, 3.75 / t3.abs(e6));
                  }(n3);
                  if (r3 < 0) return NaN;
                  if (0 === t3.abs(n3)) return 0;
                  if (n3 == 1 / 0) return 1 / 0;
                  var l2, i3 = 0, s2 = 2 / t3.abs(n3), a2 = 0, u2 = 1, c2 = 0;
                  for (l2 = 2 * t3.round((r3 + t3.round(t3.sqrt(40 * r3))) / 2); l2 > 0; l2--) c2 = l2 * s2 * u2 + a2, a2 = u2, u2 = c2, t3.abs(u2) > 1e10 && (u2 *= 1e-10, a2 *= 1e-10, i3 *= 1e-10), l2 == r3 && (i3 = a2);
                  return i3 *= e5(n3, 0) / u2, n3 < 0 && r3 % 2 ? -i3 : i3;
                }), C = function() {
                  var e5 = [-0.57721566, 0.4227842, 0.23069756, 0.0348859, 262698e-8, 1075e-7, 74e-7].reverse(), n3 = [1.25331414, -0.07832358, 0.02189568, -0.01062446, 587872e-8, -25154e-7, 53208e-8].reverse(), l2 = [1, 0.15443144, -0.67278579, -0.18156897, -0.01919402, -110404e-8, -4686e-8].reverse(), i3 = [1.25331414, 0.23498619, -0.0365562, 0.01504268, -780353e-8, 325614e-8, -68245e-8].reverse();
                  return r2(function(r3) {
                    return r3 <= 2 ? -t3.log(r3 / 2) * y2(r3, 0) + o3(e5, r3 * r3 / 4) : t3.exp(-r3) / t3.sqrt(r3) * o3(n3, 2 / r3);
                  }, function(e6) {
                    return e6 <= 2 ? t3.log(e6 / 2) * y2(e6, 1) + 1 / e6 * o3(l2, e6 * e6 / 4) : t3.exp(-e6) / t3.sqrt(e6) * o3(i3, 2 / e6);
                  }, 0, 2, 1);
                }();
                e4.besselj = m, e4.bessely = v, e4.besseli = y2, e4.besselk = C;
              }, "undefined" == typeof DO_NOT_EXPORT_BESSEL ? o2(t2) : o2({});
            }, 162: function(e3) {
              var t2;
              e3.exports = (t2 = function(e4, t3) {
                var o2 = Array.prototype.concat, n2 = Array.prototype.slice, r2 = Object.prototype.toString;
                function l(t4, o3) {
                  var n3 = t4 > o3 ? t4 : o3;
                  return e4.pow(10, 17 - ~~(e4.log(n3 > 0 ? n3 : -n3) * e4.LOG10E));
                }
                var i2 = Array.isArray || function(e5) {
                  return "[object Array]" === r2.call(e5);
                };
                function s(e5) {
                  return "[object Function]" === r2.call(e5);
                }
                function a(e5) {
                  return "number" == typeof e5 && e5 - e5 == 0;
                }
                function u() {
                  return new u._init(arguments);
                }
                function c() {
                  return 0;
                }
                function f() {
                  return 1;
                }
                function d(e5, t4) {
                  return e5 === t4 ? 1 : 0;
                }
                u.fn = u.prototype, u._init = function(e5) {
                  if (i2(e5[0])) if (i2(e5[0][0])) {
                    s(e5[1]) && (e5[0] = u.map(e5[0], e5[1]));
                    for (var t4 = 0; t4 < e5[0].length; t4++) this[t4] = e5[0][t4];
                    this.length = e5[0].length;
                  } else this[0] = s(e5[1]) ? u.map(e5[0], e5[1]) : e5[0], this.length = 1;
                  else if (a(e5[0])) this[0] = u.seq.apply(null, e5), this.length = 1;
                  else {
                    if (e5[0] instanceof u) return u(e5[0].toArray());
                    this[0] = [], this.length = 1;
                  }
                  return this;
                }, u._init.prototype = u.prototype, u._init.constructor = u, u.utils = { calcRdx: l, isArray: i2, isFunction: s, isNumber: a, toVector: function(e5) {
                  return o2.apply([], e5);
                } }, u._random_fn = e4.random, u.setRandom = function(e5) {
                  if ("function" != typeof e5) throw new TypeError("fn is not a function");
                  u._random_fn = e5;
                }, u.extend = function(e5) {
                  var t4, o3;
                  if (1 === arguments.length) {
                    for (o3 in e5) u[o3] = e5[o3];
                    return this;
                  }
                  for (t4 = 1; t4 < arguments.length; t4++) for (o3 in arguments[t4]) e5[o3] = arguments[t4][o3];
                  return e5;
                }, u.rows = function(e5) {
                  return e5.length || 1;
                }, u.cols = function(e5) {
                  return e5[0].length || 1;
                }, u.dimensions = function(e5) {
                  return { rows: u.rows(e5), cols: u.cols(e5) };
                }, u.row = function(e5, t4) {
                  return i2(t4) ? t4.map(function(t5) {
                    return u.row(e5, t5);
                  }) : e5[t4];
                }, u.rowa = function(e5, t4) {
                  return u.row(e5, t4);
                }, u.col = function(e5, t4) {
                  if (i2(t4)) {
                    var o3 = u.arange(e5.length).map(function() {
                      return new Array(t4.length);
                    });
                    return t4.forEach(function(t5, n4) {
                      u.arange(e5.length).forEach(function(r4) {
                        o3[r4][n4] = e5[r4][t5];
                      });
                    }), o3;
                  }
                  for (var n3 = new Array(e5.length), r3 = 0; r3 < e5.length; r3++) n3[r3] = [e5[r3][t4]];
                  return n3;
                }, u.cola = function(e5, t4) {
                  return u.col(e5, t4).map(function(e6) {
                    return e6[0];
                  });
                }, u.diag = function(e5) {
                  for (var t4 = u.rows(e5), o3 = new Array(t4), n3 = 0; n3 < t4; n3++) o3[n3] = [e5[n3][n3]];
                  return o3;
                }, u.antidiag = function(e5) {
                  for (var t4 = u.rows(e5) - 1, o3 = new Array(t4), n3 = 0; t4 >= 0; t4--, n3++) o3[n3] = [e5[n3][t4]];
                  return o3;
                }, u.transpose = function(e5) {
                  var t4, o3, n3, r3, l2, s2 = [];
                  for (i2(e5[0]) || (e5 = [e5]), o3 = e5.length, n3 = e5[0].length, l2 = 0; l2 < n3; l2++) {
                    for (t4 = new Array(o3), r3 = 0; r3 < o3; r3++) t4[r3] = e5[r3][l2];
                    s2.push(t4);
                  }
                  return 1 === s2.length ? s2[0] : s2;
                }, u.map = function(e5, t4, o3) {
                  var n3, r3, l2, s2, a2;
                  for (i2(e5[0]) || (e5 = [e5]), r3 = e5.length, l2 = e5[0].length, s2 = o3 ? e5 : new Array(r3), n3 = 0; n3 < r3; n3++) for (s2[n3] || (s2[n3] = new Array(l2)), a2 = 0; a2 < l2; a2++) s2[n3][a2] = t4(e5[n3][a2], n3, a2);
                  return 1 === s2.length ? s2[0] : s2;
                }, u.cumreduce = function(e5, t4, o3) {
                  var n3, r3, l2, s2, a2;
                  for (i2(e5[0]) || (e5 = [e5]), r3 = e5.length, l2 = e5[0].length, s2 = o3 ? e5 : new Array(r3), n3 = 0; n3 < r3; n3++) for (s2[n3] || (s2[n3] = new Array(l2)), l2 > 0 && (s2[n3][0] = e5[n3][0]), a2 = 1; a2 < l2; a2++) s2[n3][a2] = t4(s2[n3][a2 - 1], e5[n3][a2]);
                  return 1 === s2.length ? s2[0] : s2;
                }, u.alter = function(e5, t4) {
                  return u.map(e5, t4, true);
                }, u.create = function(e5, t4, o3) {
                  var n3, r3, l2 = new Array(e5);
                  for (s(t4) && (o3 = t4, t4 = e5), n3 = 0; n3 < e5; n3++) for (l2[n3] = new Array(t4), r3 = 0; r3 < t4; r3++) l2[n3][r3] = o3(n3, r3);
                  return l2;
                }, u.zeros = function(e5, t4) {
                  return a(t4) || (t4 = e5), u.create(e5, t4, c);
                }, u.ones = function(e5, t4) {
                  return a(t4) || (t4 = e5), u.create(e5, t4, f);
                }, u.rand = function(e5, t4) {
                  return a(t4) || (t4 = e5), u.create(e5, t4, u._random_fn);
                }, u.identity = function(e5, t4) {
                  return a(t4) || (t4 = e5), u.create(e5, t4, d);
                }, u.symmetric = function(e5) {
                  var t4, o3, n3 = e5.length;
                  if (e5.length !== e5[0].length) return false;
                  for (t4 = 0; t4 < n3; t4++) for (o3 = 0; o3 < n3; o3++) if (e5[o3][t4] !== e5[t4][o3]) return false;
                  return true;
                }, u.clear = function(e5) {
                  return u.alter(e5, c);
                }, u.seq = function(e5, t4, o3, n3) {
                  s(n3) || (n3 = false);
                  var r3, i3 = [], a2 = l(e5, t4), u2 = (t4 * a2 - e5 * a2) / ((o3 - 1) * a2), c2 = e5;
                  for (r3 = 0; c2 <= t4 && r3 < o3; c2 = (e5 * a2 + u2 * a2 * ++r3) / a2) i3.push(n3 ? n3(c2, r3) : c2);
                  return i3;
                }, u.arange = function(e5, o3, n3) {
                  var r3, l2 = [];
                  if (n3 = n3 || 1, o3 === t3 && (o3 = e5, e5 = 0), e5 === o3 || 0 === n3) return [];
                  if (e5 < o3 && n3 < 0) return [];
                  if (e5 > o3 && n3 > 0) return [];
                  if (n3 > 0) for (r3 = e5; r3 < o3; r3 += n3) l2.push(r3);
                  else for (r3 = e5; r3 > o3; r3 += n3) l2.push(r3);
                  return l2;
                }, u.slice = /* @__PURE__ */ function() {
                  function e5(e6, o3, n3, r3) {
                    var l2, i3 = [], s2 = e6.length;
                    if (o3 === t3 && n3 === t3 && r3 === t3) return u.copy(e6);
                    if (r3 = r3 || 1, (o3 = (o3 = o3 || 0) >= 0 ? o3 : s2 + o3) === (n3 = (n3 = n3 || e6.length) >= 0 ? n3 : s2 + n3) || 0 === r3) return [];
                    if (o3 < n3 && r3 < 0) return [];
                    if (o3 > n3 && r3 > 0) return [];
                    if (r3 > 0) for (l2 = o3; l2 < n3; l2 += r3) i3.push(e6[l2]);
                    else for (l2 = o3; l2 > n3; l2 += r3) i3.push(e6[l2]);
                    return i3;
                  }
                  return function(t4, o3) {
                    var n3, r3;
                    return a((o3 = o3 || {}).row) ? a(o3.col) ? t4[o3.row][o3.col] : e5(u.rowa(t4, o3.row), (n3 = o3.col || {}).start, n3.end, n3.step) : a(o3.col) ? e5(u.cola(t4, o3.col), (r3 = o3.row || {}).start, r3.end, r3.step) : (r3 = o3.row || {}, n3 = o3.col || {}, e5(t4, r3.start, r3.end, r3.step).map(function(t5) {
                      return e5(t5, n3.start, n3.end, n3.step);
                    }));
                  };
                }(), u.sliceAssign = function(o3, n3, r3) {
                  var l2, i3;
                  if (a(n3.row)) {
                    if (a(n3.col)) return o3[n3.row][n3.col] = r3;
                    n3.col = n3.col || {}, n3.col.start = n3.col.start || 0, n3.col.end = n3.col.end || o3[0].length, n3.col.step = n3.col.step || 1, l2 = u.arange(n3.col.start, e4.min(o3.length, n3.col.end), n3.col.step);
                    var s2 = n3.row;
                    return l2.forEach(function(e5, t4) {
                      o3[s2][e5] = r3[t4];
                    }), o3;
                  }
                  if (a(n3.col)) {
                    n3.row = n3.row || {}, n3.row.start = n3.row.start || 0, n3.row.end = n3.row.end || o3.length, n3.row.step = n3.row.step || 1, i3 = u.arange(n3.row.start, e4.min(o3[0].length, n3.row.end), n3.row.step);
                    var c2 = n3.col;
                    return i3.forEach(function(e5, t4) {
                      o3[e5][c2] = r3[t4];
                    }), o3;
                  }
                  return r3[0].length === t3 && (r3 = [r3]), n3.row.start = n3.row.start || 0, n3.row.end = n3.row.end || o3.length, n3.row.step = n3.row.step || 1, n3.col.start = n3.col.start || 0, n3.col.end = n3.col.end || o3[0].length, n3.col.step = n3.col.step || 1, i3 = u.arange(n3.row.start, e4.min(o3.length, n3.row.end), n3.row.step), l2 = u.arange(n3.col.start, e4.min(o3[0].length, n3.col.end), n3.col.step), i3.forEach(function(e5, t4) {
                    l2.forEach(function(n4, l3) {
                      o3[e5][n4] = r3[t4][l3];
                    });
                  }), o3;
                }, u.diagonal = function(e5) {
                  var t4 = u.zeros(e5.length, e5.length);
                  return e5.forEach(function(e6, o3) {
                    t4[o3][o3] = e6;
                  }), t4;
                }, u.copy = function(e5) {
                  return e5.map(function(e6) {
                    return a(e6) ? e6 : e6.map(function(e7) {
                      return e7;
                    });
                  });
                };
                var p = u.prototype;
                return p.length = 0, p.push = Array.prototype.push, p.sort = Array.prototype.sort, p.splice = Array.prototype.splice, p.slice = Array.prototype.slice, p.toArray = function() {
                  return this.length > 1 ? n2.call(this) : n2.call(this)[0];
                }, p.map = function(e5, t4) {
                  return u(u.map(this, e5, t4));
                }, p.cumreduce = function(e5, t4) {
                  return u(u.cumreduce(this, e5, t4));
                }, p.alter = function(e5) {
                  return u.alter(this, e5), this;
                }, function(e5) {
                  for (var t4 = 0; t4 < e5.length; t4++) !function(e6) {
                    p[e6] = function(t5) {
                      var o3, n3 = this;
                      return t5 ? (setTimeout(function() {
                        t5.call(n3, p[e6].call(n3));
                      }), this) : (o3 = u[e6](this), i2(o3) ? u(o3) : o3);
                    };
                  }(e5[t4]);
                }("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")), function(e5) {
                  for (var t4 = 0; t4 < e5.length; t4++) !function(e6) {
                    p[e6] = function(t5, o3) {
                      var n3 = this;
                      return o3 ? (setTimeout(function() {
                        o3.call(n3, p[e6].call(n3, t5));
                      }), this) : u(u[e6](this, t5));
                    };
                  }(e5[t4]);
                }("row col".split(" ")), function(e5) {
                  for (var t4 = 0; t4 < e5.length; t4++) !function(e6) {
                    p[e6] = function() {
                      return u(u[e6].apply(null, arguments));
                    };
                  }(e5[t4]);
                }("create zeros ones rand identity".split(" ")), u;
              }(Math), function(e4, t3) {
                var o2 = e4.utils.isFunction;
                function n2(e5, t4) {
                  return e5 - t4;
                }
                function r2(e5, o3, n3) {
                  return t3.max(o3, t3.min(e5, n3));
                }
                e4.sum = function(e5) {
                  for (var t4 = 0, o3 = e5.length; --o3 >= 0; ) t4 += e5[o3];
                  return t4;
                }, e4.sumsqrd = function(e5) {
                  for (var t4 = 0, o3 = e5.length; --o3 >= 0; ) t4 += e5[o3] * e5[o3];
                  return t4;
                }, e4.sumsqerr = function(t4) {
                  for (var o3, n3 = e4.mean(t4), r3 = 0, l2 = t4.length; --l2 >= 0; ) r3 += (o3 = t4[l2] - n3) * o3;
                  return r3;
                }, e4.sumrow = function(e5) {
                  for (var t4 = 0, o3 = e5.length; --o3 >= 0; ) t4 += e5[o3];
                  return t4;
                }, e4.product = function(e5) {
                  for (var t4 = 1, o3 = e5.length; --o3 >= 0; ) t4 *= e5[o3];
                  return t4;
                }, e4.min = function(e5) {
                  for (var t4 = e5[0], o3 = 0; ++o3 < e5.length; ) e5[o3] < t4 && (t4 = e5[o3]);
                  return t4;
                }, e4.max = function(e5) {
                  for (var t4 = e5[0], o3 = 0; ++o3 < e5.length; ) e5[o3] > t4 && (t4 = e5[o3]);
                  return t4;
                }, e4.unique = function(e5) {
                  for (var t4 = {}, o3 = [], n3 = 0; n3 < e5.length; n3++) t4[e5[n3]] || (t4[e5[n3]] = true, o3.push(e5[n3]));
                  return o3;
                }, e4.mean = function(t4) {
                  return e4.sum(t4) / t4.length;
                }, e4.meansqerr = function(t4) {
                  return e4.sumsqerr(t4) / t4.length;
                }, e4.geomean = function(o3) {
                  var n3 = o3.map(t3.log), r3 = e4.mean(n3);
                  return t3.exp(r3);
                }, e4.median = function(e5) {
                  var t4 = e5.length, o3 = e5.slice().sort(n2);
                  return 1 & t4 ? o3[t4 / 2 | 0] : (o3[t4 / 2 - 1] + o3[t4 / 2]) / 2;
                }, e4.cumsum = function(t4) {
                  return e4.cumreduce(t4, function(e5, t5) {
                    return e5 + t5;
                  });
                }, e4.cumprod = function(t4) {
                  return e4.cumreduce(t4, function(e5, t5) {
                    return e5 * t5;
                  });
                }, e4.diff = function(e5) {
                  var t4, o3 = [], n3 = e5.length;
                  for (t4 = 1; t4 < n3; t4++) o3.push(e5[t4] - e5[t4 - 1]);
                  return o3;
                }, e4.rank = function(e5) {
                  var t4, o3 = [], r3 = {};
                  for (t4 = 0; t4 < e5.length; t4++) r3[a = e5[t4]] ? r3[a]++ : (r3[a] = 1, o3.push(a));
                  var l2 = o3.sort(n2), i2 = {}, s = 1;
                  for (t4 = 0; t4 < l2.length; t4++) {
                    var a, u = r3[a = l2[t4]], c = (s + (s + u - 1)) / 2;
                    i2[a] = c, s += u;
                  }
                  return e5.map(function(e6) {
                    return i2[e6];
                  });
                }, e4.mode = function(e5) {
                  var t4, o3 = e5.length, r3 = e5.slice().sort(n2), l2 = 1, i2 = 0, s = 0, a = [];
                  for (t4 = 0; t4 < o3; t4++) r3[t4] === r3[t4 + 1] ? l2++ : (l2 > i2 ? (a = [r3[t4]], i2 = l2, s = 0) : l2 === i2 && (a.push(r3[t4]), s++), l2 = 1);
                  return 0 === s ? a[0] : a;
                }, e4.range = function(t4) {
                  return e4.max(t4) - e4.min(t4);
                }, e4.variance = function(t4, o3) {
                  return e4.sumsqerr(t4) / (t4.length - (o3 ? 1 : 0));
                }, e4.pooledvariance = function(t4) {
                  return t4.reduce(function(t5, o3) {
                    return t5 + e4.sumsqerr(o3);
                  }, 0) / (t4.reduce(function(e5, t5) {
                    return e5 + t5.length;
                  }, 0) - t4.length);
                }, e4.deviation = function(t4) {
                  for (var o3 = e4.mean(t4), n3 = t4.length, r3 = new Array(n3), l2 = 0; l2 < n3; l2++) r3[l2] = t4[l2] - o3;
                  return r3;
                }, e4.stdev = function(o3, n3) {
                  return t3.sqrt(e4.variance(o3, n3));
                }, e4.pooledstdev = function(o3) {
                  return t3.sqrt(e4.pooledvariance(o3));
                }, e4.meandev = function(o3) {
                  for (var n3 = e4.mean(o3), r3 = [], l2 = o3.length - 1; l2 >= 0; l2--) r3.push(t3.abs(o3[l2] - n3));
                  return e4.mean(r3);
                }, e4.meddev = function(o3) {
                  for (var n3 = e4.median(o3), r3 = [], l2 = o3.length - 1; l2 >= 0; l2--) r3.push(t3.abs(o3[l2] - n3));
                  return e4.median(r3);
                }, e4.coeffvar = function(t4) {
                  return e4.stdev(t4) / e4.mean(t4);
                }, e4.quartiles = function(e5) {
                  var o3 = e5.length, r3 = e5.slice().sort(n2);
                  return [r3[t3.round(o3 / 4) - 1], r3[t3.round(o3 / 2) - 1], r3[t3.round(3 * o3 / 4) - 1]];
                }, e4.quantiles = function(e5, o3, l2, i2) {
                  var s, a, u, c, f, d = e5.slice().sort(n2), p = [o3.length], b = e5.length;
                  for (void 0 === l2 && (l2 = 3 / 8), void 0 === i2 && (i2 = 3 / 8), s = 0; s < o3.length; s++) u = b * (a = o3[s]) + (l2 + a * (1 - l2 - i2)), c = t3.floor(r2(u, 1, b - 1)), f = r2(u - c, 0, 1), p[s] = (1 - f) * d[c - 1] + f * d[c];
                  return p;
                }, e4.percentile = function(e5, t4, o3) {
                  var r3 = e5.slice().sort(n2), l2 = t4 * (r3.length + (o3 ? 1 : -1)) + (o3 ? 0 : 1), i2 = parseInt(l2), s = l2 - i2;
                  return i2 + 1 < r3.length ? r3[i2 - 1] + s * (r3[i2] - r3[i2 - 1]) : r3[i2 - 1];
                }, e4.percentileOfScore = function(e5, t4, o3) {
                  var n3, r3, l2 = 0, i2 = e5.length, s = false;
                  for ("strict" === o3 && (s = true), r3 = 0; r3 < i2; r3++) n3 = e5[r3], (s && n3 < t4 || !s && n3 <= t4) && l2++;
                  return l2 / i2;
                }, e4.histogram = function(o3, n3) {
                  n3 = n3 || 4;
                  var r3, l2 = e4.min(o3), i2 = (e4.max(o3) - l2) / n3, s = o3.length, a = [];
                  for (r3 = 0; r3 < n3; r3++) a[r3] = 0;
                  for (r3 = 0; r3 < s; r3++) a[t3.min(t3.floor((o3[r3] - l2) / i2), n3 - 1)] += 1;
                  return a;
                }, e4.covariance = function(t4, o3) {
                  var n3, r3 = e4.mean(t4), l2 = e4.mean(o3), i2 = t4.length, s = new Array(i2);
                  for (n3 = 0; n3 < i2; n3++) s[n3] = (t4[n3] - r3) * (o3[n3] - l2);
                  return e4.sum(s) / (i2 - 1);
                }, e4.corrcoeff = function(t4, o3) {
                  return e4.covariance(t4, o3) / e4.stdev(t4, 1) / e4.stdev(o3, 1);
                }, e4.spearmancoeff = function(t4, o3) {
                  return t4 = e4.rank(t4), o3 = e4.rank(o3), e4.corrcoeff(t4, o3);
                }, e4.stanMoment = function(o3, n3) {
                  for (var r3 = e4.mean(o3), l2 = e4.stdev(o3), i2 = o3.length, s = 0, a = 0; a < i2; a++) s += t3.pow((o3[a] - r3) / l2, n3);
                  return s / o3.length;
                }, e4.skewness = function(t4) {
                  return e4.stanMoment(t4, 3);
                }, e4.kurtosis = function(t4) {
                  return e4.stanMoment(t4, 4) - 3;
                };
                var l = e4.prototype;
                !function(t4) {
                  for (var n3 = 0; n3 < t4.length; n3++) !function(t5) {
                    l[t5] = function(n4, r3) {
                      var i2 = [], s = 0, a = this;
                      if (o2(n4) && (r3 = n4, n4 = false), r3) return setTimeout(function() {
                        r3.call(a, l[t5].call(a, n4));
                      }), this;
                      if (this.length > 1) {
                        for (a = true === n4 ? this : this.transpose(); s < a.length; s++) i2[s] = e4[t5](a[s]);
                        return i2;
                      }
                      return e4[t5](this[0], n4);
                    };
                  }(t4[n3]);
                }("cumsum cumprod".split(" ")), function(t4) {
                  for (var n3 = 0; n3 < t4.length; n3++) !function(t5) {
                    l[t5] = function(n4, r3) {
                      var i2 = [], s = 0, a = this;
                      if (o2(n4) && (r3 = n4, n4 = false), r3) return setTimeout(function() {
                        r3.call(a, l[t5].call(a, n4));
                      }), this;
                      if (this.length > 1) {
                        for ("sumrow" !== t5 && (a = true === n4 ? this : this.transpose()); s < a.length; s++) i2[s] = e4[t5](a[s]);
                        return true === n4 ? e4[t5](e4.utils.toVector(i2)) : i2;
                      }
                      return e4[t5](this[0], n4);
                    };
                  }(t4[n3]);
                }("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")), function(t4) {
                  for (var n3 = 0; n3 < t4.length; n3++) !function(t5) {
                    l[t5] = function() {
                      var n4, r3 = [], i2 = 0, s = this, a = Array.prototype.slice.call(arguments);
                      if (o2(a[a.length - 1])) {
                        n4 = a[a.length - 1];
                        var u = a.slice(0, a.length - 1);
                        return setTimeout(function() {
                          n4.call(s, l[t5].apply(s, u));
                        }), this;
                      }
                      n4 = void 0;
                      var c = function(o3) {
                        return e4[t5].apply(s, [o3].concat(a));
                      };
                      if (this.length > 1) {
                        for (s = s.transpose(); i2 < s.length; i2++) r3[i2] = c(s[i2]);
                        return r3;
                      }
                      return c(this[0]);
                    };
                  }(t4[n3]);
                }("quantiles percentileOfScore".split(" "));
              }(t2, Math), function(e4, t3) {
                e4.gammaln = function(e5) {
                  var o2, n2, r2, l = 0, i2 = [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -5395239384953e-18], s = 1.000000000190015;
                  for (r2 = (n2 = o2 = e5) + 5.5, r2 -= (o2 + 0.5) * t3.log(r2); l < 6; l++) s += i2[l] / ++n2;
                  return t3.log(2.5066282746310007 * s / o2) - r2;
                }, e4.loggam = function(e5) {
                  var o2, n2, r2, l, i2, s, a, u = [0.08333333333333333, -0.002777777777777778, 7936507936507937e-19, -5952380952380952e-19, 8417508417508418e-19, -0.001917526917526918, 0.00641025641025641, -0.02955065359477124, 0.1796443723688307, -1.3924322169059];
                  if (o2 = e5, a = 0, 1 == e5 || 2 == e5) return 0;
                  for (e5 <= 7 && (o2 = e5 + (a = t3.floor(7 - e5))), n2 = 1 / (o2 * o2), r2 = 2 * t3.PI, i2 = u[9], s = 8; s >= 0; s--) i2 *= n2, i2 += u[s];
                  if (l = i2 / o2 + 0.5 * t3.log(r2) + (o2 - 0.5) * t3.log(o2) - o2, e5 <= 7) for (s = 1; s <= a; s++) l -= t3.log(o2 - 1), o2 -= 1;
                  return l;
                }, e4.gammafn = function(e5) {
                  var o2, n2, r2, l, i2 = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054], s = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.11842098015, 4755.846277527881, -134659.9598649693, -115132.2596755535], a = false, u = 0, c = 0, f = 0, d = e5;
                  if (e5 > 171.6243769536076) return 1 / 0;
                  if (d <= 0) {
                    if (!(l = d % 1 + 36e-17)) return 1 / 0;
                    a = (1 & d ? -1 : 1) * t3.PI / t3.sin(t3.PI * l), d = 1 - d;
                  }
                  for (r2 = d, n2 = d < 1 ? d++ : (d -= u = (0 | d) - 1) - 1, o2 = 0; o2 < 8; ++o2) f = (f + i2[o2]) * n2, c = c * n2 + s[o2];
                  if (l = f / c + 1, r2 < d) l /= r2;
                  else if (r2 > d) for (o2 = 0; o2 < u; ++o2) l *= d, d++;
                  return a && (l = a / l), l;
                }, e4.gammap = function(t4, o2) {
                  return e4.lowRegGamma(t4, o2) * e4.gammafn(t4);
                }, e4.lowRegGamma = function(o2, n2) {
                  var r2, l = e4.gammaln(o2), i2 = o2, s = 1 / o2, a = s, u = n2 + 1 - o2, c = 1 / 1e-30, f = 1 / u, d = f, p = 1, b = -~(8.5 * t3.log(o2 >= 1 ? o2 : 1 / o2) + 0.4 * o2 + 17);
                  if (n2 < 0 || o2 <= 0) return NaN;
                  if (n2 < o2 + 1) {
                    for (; p <= b; p++) s += a *= n2 / ++i2;
                    return s * t3.exp(-n2 + o2 * t3.log(n2) - l);
                  }
                  for (; p <= b; p++) d *= (f = 1 / (f = (r2 = -p * (p - o2)) * f + (u += 2))) * (c = u + r2 / c);
                  return 1 - d * t3.exp(-n2 + o2 * t3.log(n2) - l);
                }, e4.factorialln = function(t4) {
                  return t4 < 0 ? NaN : e4.gammaln(t4 + 1);
                }, e4.factorial = function(t4) {
                  return t4 < 0 ? NaN : e4.gammafn(t4 + 1);
                }, e4.combination = function(o2, n2) {
                  return o2 > 170 || n2 > 170 ? t3.exp(e4.combinationln(o2, n2)) : e4.factorial(o2) / e4.factorial(n2) / e4.factorial(o2 - n2);
                }, e4.combinationln = function(t4, o2) {
                  return e4.factorialln(t4) - e4.factorialln(o2) - e4.factorialln(t4 - o2);
                }, e4.permutation = function(t4, o2) {
                  return e4.factorial(t4) / e4.factorial(t4 - o2);
                }, e4.betafn = function(o2, n2) {
                  if (!(o2 <= 0 || n2 <= 0)) return o2 + n2 > 170 ? t3.exp(e4.betaln(o2, n2)) : e4.gammafn(o2) * e4.gammafn(n2) / e4.gammafn(o2 + n2);
                }, e4.betaln = function(t4, o2) {
                  return e4.gammaln(t4) + e4.gammaln(o2) - e4.gammaln(t4 + o2);
                }, e4.betacf = function(e5, o2, n2) {
                  var r2, l, i2, s, a = 1e-30, u = 1, c = o2 + n2, f = o2 + 1, d = o2 - 1, p = 1, b = 1 - c * e5 / f;
                  for (t3.abs(b) < a && (b = a), s = b = 1 / b; u <= 100 && (b = 1 + (l = u * (n2 - u) * e5 / ((d + (r2 = 2 * u)) * (o2 + r2))) * b, t3.abs(b) < a && (b = a), p = 1 + l / p, t3.abs(p) < a && (p = a), s *= (b = 1 / b) * p, b = 1 + (l = -(o2 + u) * (c + u) * e5 / ((o2 + r2) * (f + r2))) * b, t3.abs(b) < a && (b = a), p = 1 + l / p, t3.abs(p) < a && (p = a), s *= i2 = (b = 1 / b) * p, !(t3.abs(i2 - 1) < 3e-7)); u++) ;
                  return s;
                }, e4.gammapinv = function(o2, n2) {
                  var r2, l, i2, s, a, u, c = 0, f = n2 - 1, d = e4.gammaln(n2);
                  if (o2 >= 1) return t3.max(100, n2 + 100 * t3.sqrt(n2));
                  if (o2 <= 0) return 0;
                  for (n2 > 1 ? (a = t3.log(f), u = t3.exp(f * (a - 1) - d), s = o2 < 0.5 ? o2 : 1 - o2, r2 = (2.30753 + 0.27061 * (l = t3.sqrt(-2 * t3.log(s)))) / (1 + l * (0.99229 + 0.04481 * l)) - l, o2 < 0.5 && (r2 = -r2), r2 = t3.max(1e-3, n2 * t3.pow(1 - 1 / (9 * n2) - r2 / (3 * t3.sqrt(n2)), 3))) : r2 = o2 < (l = 1 - n2 * (0.253 + 0.12 * n2)) ? t3.pow(o2 / l, 1 / n2) : 1 - t3.log(1 - (o2 - l) / (1 - l)); c < 12; c++) {
                    if (r2 <= 0) return 0;
                    if ((r2 -= l = (i2 = (e4.lowRegGamma(n2, r2) - o2) / (l = n2 > 1 ? u * t3.exp(-(r2 - f) + f * (t3.log(r2) - a)) : t3.exp(-r2 + f * t3.log(r2) - d))) / (1 - 0.5 * t3.min(1, i2 * ((n2 - 1) / r2 - 1)))) <= 0 && (r2 = 0.5 * (r2 + l)), t3.abs(l) < 1e-8 * r2) break;
                  }
                  return r2;
                }, e4.erf = function(e5) {
                  var o2, n2, r2, l, i2 = [-1.3026537197817094, 0.6419697923564902, 0.019476473204185836, -0.00956151478680863, -946595344482036e-18, 366839497852761e-18, 42523324806907e-18, -20278578112534e-18, -1624290004647e-18, 130365583558e-17, 15626441722e-18, -85238095915e-18, 6529054439e-18, 5059343495e-18, -991364156e-18, -227365122e-18, 96467911e-18, 2394038e-18, -6886027e-18, 894487e-18, 313092e-18, -112708e-18, 381e-18, 7106e-18, -1523e-18, -94e-18, 121e-18, -28e-18], s = i2.length - 1, a = false, u = 0, c = 0;
                  for (e5 < 0 && (e5 = -e5, a = true), n2 = 4 * (o2 = 2 / (2 + e5)) - 2; s > 0; s--) r2 = u, u = n2 * u - c + i2[s], c = r2;
                  return l = o2 * t3.exp(-e5 * e5 + 0.5 * (i2[0] + n2 * u) - c), a ? l - 1 : 1 - l;
                }, e4.erfc = function(t4) {
                  return 1 - e4.erf(t4);
                }, e4.erfcinv = function(o2) {
                  var n2, r2, l, i2, s = 0;
                  if (o2 >= 2) return -100;
                  if (o2 <= 0) return 100;
                  for (i2 = o2 < 1 ? o2 : 2 - o2, n2 = -0.70711 * ((2.30753 + 0.27061 * (l = t3.sqrt(-2 * t3.log(i2 / 2)))) / (1 + l * (0.99229 + 0.04481 * l)) - l); s < 2; s++) n2 += (r2 = e4.erfc(n2) - i2) / (1.1283791670955126 * t3.exp(-n2 * n2) - n2 * r2);
                  return o2 < 1 ? n2 : -n2;
                }, e4.ibetainv = function(o2, n2, r2) {
                  var l, i2, s, a, u, c, f, d, p, b, j = n2 - 1, h = r2 - 1, g = 0;
                  if (o2 <= 0) return 0;
                  if (o2 >= 1) return 1;
                  for (n2 >= 1 && r2 >= 1 ? (s = o2 < 0.5 ? o2 : 1 - o2, c = (2.30753 + 0.27061 * (a = t3.sqrt(-2 * t3.log(s)))) / (1 + a * (0.99229 + 0.04481 * a)) - a, o2 < 0.5 && (c = -c), f = (c * c - 3) / 6, d = 2 / (1 / (2 * n2 - 1) + 1 / (2 * r2 - 1)), p = c * t3.sqrt(f + d) / d - (1 / (2 * r2 - 1) - 1 / (2 * n2 - 1)) * (f + 5 / 6 - 2 / (3 * d)), c = n2 / (n2 + r2 * t3.exp(2 * p))) : (l = t3.log(n2 / (n2 + r2)), i2 = t3.log(r2 / (n2 + r2)), c = o2 < (a = t3.exp(n2 * l) / n2) / (p = a + (u = t3.exp(r2 * i2) / r2)) ? t3.pow(n2 * p * o2, 1 / n2) : 1 - t3.pow(r2 * p * (1 - o2), 1 / r2)), b = -e4.gammaln(n2) - e4.gammaln(r2) + e4.gammaln(n2 + r2); g < 10; g++) {
                    if (0 === c || 1 === c) return c;
                    if ((c -= a = (u = (e4.ibeta(c, n2, r2) - o2) / (a = t3.exp(j * t3.log(c) + h * t3.log(1 - c) + b))) / (1 - 0.5 * t3.min(1, u * (j / c - h / (1 - c))))) <= 0 && (c = 0.5 * (c + a)), c >= 1 && (c = 0.5 * (c + a + 1)), t3.abs(a) < 1e-8 * c && g > 0) break;
                  }
                  return c;
                }, e4.ibeta = function(o2, n2, r2) {
                  var l = 0 === o2 || 1 === o2 ? 0 : t3.exp(e4.gammaln(n2 + r2) - e4.gammaln(n2) - e4.gammaln(r2) + n2 * t3.log(o2) + r2 * t3.log(1 - o2));
                  return !(o2 < 0 || o2 > 1) && (o2 < (n2 + 1) / (n2 + r2 + 2) ? l * e4.betacf(o2, n2, r2) / n2 : 1 - l * e4.betacf(1 - o2, r2, n2) / r2);
                }, e4.randn = function(o2, n2) {
                  var r2, l, i2, s, a;
                  if (n2 || (n2 = o2), o2) return e4.create(o2, n2, function() {
                    return e4.randn();
                  });
                  do {
                    r2 = e4._random_fn(), l = 1.7156 * (e4._random_fn() - 0.5), a = (i2 = r2 - 0.449871) * i2 + (s = t3.abs(l) + 0.386595) * (0.196 * s - 0.25472 * i2);
                  } while (a > 0.27597 && (a > 0.27846 || l * l > -4 * t3.log(r2) * r2 * r2));
                  return l / r2;
                }, e4.randg = function(o2, n2, r2) {
                  var l, i2, s, a, u, c, f = o2;
                  if (r2 || (r2 = n2), o2 || (o2 = 1), n2) return (c = e4.zeros(n2, r2)).alter(function() {
                    return e4.randg(o2);
                  }), c;
                  o2 < 1 && (o2 += 1), l = o2 - 1 / 3, i2 = 1 / t3.sqrt(9 * l);
                  do {
                    do {
                      a = 1 + i2 * (u = e4.randn());
                    } while (a <= 0);
                    a *= a * a, s = e4._random_fn();
                  } while (s > 1 - 0.331 * t3.pow(u, 4) && t3.log(s) > 0.5 * u * u + l * (1 - a + t3.log(a)));
                  if (o2 == f) return l * a;
                  do {
                    s = e4._random_fn();
                  } while (0 === s);
                  return t3.pow(s, 1 / f) * l * a;
                }, function(t4) {
                  for (var o2 = 0; o2 < t4.length; o2++) !function(t5) {
                    e4.fn[t5] = function() {
                      return e4(e4.map(this, function(o3) {
                        return e4[t5](o3);
                      }));
                    };
                  }(t4[o2]);
                }("gammaln gammafn factorial factorialln".split(" ")), function(t4) {
                  for (var o2 = 0; o2 < t4.length; o2++) !function(t5) {
                    e4.fn[t5] = function() {
                      return e4(e4[t5].apply(null, arguments));
                    };
                  }(t4[o2]);
                }("randn".split(" "));
              }(t2, Math), function(e4, t3) {
                function o2(e5, o3, n3, r2) {
                  for (var l, i2 = 0, s = 1, a = 1, u = 1, c = 0, f = 0; t3.abs((a - f) / a) > r2; ) f = a, s = u + (l = -(o3 + c) * (o3 + n3 + c) * e5 / (o3 + 2 * c) / (o3 + 2 * c + 1)) * s, a = (i2 = a + l * i2) + (l = (c += 1) * (n3 - c) * e5 / (o3 + 2 * c - 1) / (o3 + 2 * c)) * a, i2 /= u = s + l * u, s /= u, a /= u, u = 1;
                  return a / o3;
                }
                function n2(o3, n3, r2) {
                  var l = [0.9815606342467192, 0.9041172563704749, 0.7699026741943047, 0.5873179542866175, 0.3678314989981802, 0.1252334085114689], i2 = [0.04717533638651183, 0.10693932599531843, 0.16007832854334622, 0.20316742672306592, 0.2334925365383548, 0.24914704581340277], s = 0.5 * o3;
                  if (s >= 8) return 1;
                  var a, u = 2 * e4.normal.cdf(s, 0, 1, 1, 0) - 1;
                  u = u >= t3.exp(-50 / r2) ? t3.pow(u, r2) : 0;
                  for (var c = s, f = (8 - s) / (a = o3 > 3 ? 2 : 3), d = c + f, p = 0, b = r2 - 1, j = 1; j <= a; j++) {
                    for (var h = 0, g = 0.5 * (d + c), m = 0.5 * (d - c), v = 1; v <= 12; v++) {
                      var y2, C = g + m * (6 < v ? l[(y2 = 12 - v + 1) - 1] : -l[(y2 = v) - 1]), x2 = C * C;
                      if (x2 > 60) break;
                      var w = 2 * e4.normal.cdf(C, 0, 1, 1, 0) * 0.5 - 2 * e4.normal.cdf(C, o3, 1, 1, 0) * 0.5;
                      w >= t3.exp(-30 / b) && (h += w = i2[y2 - 1] * t3.exp(-0.5 * x2) * t3.pow(w, b));
                    }
                    p += h *= 2 * m * r2 / t3.sqrt(2 * t3.PI), c = d, d += f;
                  }
                  return (u += p) <= t3.exp(-30 / n3) ? 0 : (u = t3.pow(u, n3)) >= 1 ? 1 : u;
                }
                !function(t4) {
                  for (var o3 = 0; o3 < t4.length; o3++) !function(t5) {
                    e4[t5] = function e5(t6, o4, n3) {
                      return this instanceof e5 ? (this._a = t6, this._b = o4, this._c = n3, this) : new e5(t6, o4, n3);
                    }, e4.fn[t5] = function(o4, n3, r2) {
                      var l = e4[t5](o4, n3, r2);
                      return l.data = this, l;
                    }, e4[t5].prototype.sample = function(o4) {
                      var n3 = this._a, r2 = this._b, l = this._c;
                      return o4 ? e4.alter(o4, function() {
                        return e4[t5].sample(n3, r2, l);
                      }) : e4[t5].sample(n3, r2, l);
                    }, function(o4) {
                      for (var n3 = 0; n3 < o4.length; n3++) !function(o5) {
                        e4[t5].prototype[o5] = function(n4) {
                          var r2 = this._a, l = this._b, i2 = this._c;
                          return n4 || 0 === n4 || (n4 = this.data), "number" != typeof n4 ? e4.fn.map.call(n4, function(n5) {
                            return e4[t5][o5](n5, r2, l, i2);
                          }) : e4[t5][o5](n4, r2, l, i2);
                        };
                      }(o4[n3]);
                    }("pdf cdf inv".split(" ")), function(o4) {
                      for (var n3 = 0; n3 < o4.length; n3++) !function(o5) {
                        e4[t5].prototype[o5] = function() {
                          return e4[t5][o5](this._a, this._b, this._c);
                        };
                      }(o4[n3]);
                    }("mean median mode variance".split(" "));
                  }(t4[o3]);
                }("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")), e4.extend(e4.beta, { pdf: function(o3, n3, r2) {
                  return o3 > 1 || o3 < 0 ? 0 : 1 == n3 && 1 == r2 ? 1 : n3 < 512 && r2 < 512 ? t3.pow(o3, n3 - 1) * t3.pow(1 - o3, r2 - 1) / e4.betafn(n3, r2) : t3.exp((n3 - 1) * t3.log(o3) + (r2 - 1) * t3.log(1 - o3) - e4.betaln(n3, r2));
                }, cdf: function(t4, o3, n3) {
                  return t4 > 1 || t4 < 0 ? 1 * (t4 > 1) : e4.ibeta(t4, o3, n3);
                }, inv: function(t4, o3, n3) {
                  return e4.ibetainv(t4, o3, n3);
                }, mean: function(e5, t4) {
                  return e5 / (e5 + t4);
                }, median: function(t4, o3) {
                  return e4.ibetainv(0.5, t4, o3);
                }, mode: function(e5, t4) {
                  return (e5 - 1) / (e5 + t4 - 2);
                }, sample: function(t4, o3) {
                  var n3 = e4.randg(t4);
                  return n3 / (n3 + e4.randg(o3));
                }, variance: function(e5, o3) {
                  return e5 * o3 / (t3.pow(e5 + o3, 2) * (e5 + o3 + 1));
                } }), e4.extend(e4.centralF, { pdf: function(o3, n3, r2) {
                  var l;
                  return o3 < 0 ? 0 : n3 <= 2 ? 0 === o3 && n3 < 2 ? 1 / 0 : 0 === o3 && 2 === n3 ? 1 : 1 / e4.betafn(n3 / 2, r2 / 2) * t3.pow(n3 / r2, n3 / 2) * t3.pow(o3, n3 / 2 - 1) * t3.pow(1 + n3 / r2 * o3, -(n3 + r2) / 2) : (l = n3 * o3 / (r2 + o3 * n3), n3 * (r2 / (r2 + o3 * n3)) / 2 * e4.binomial.pdf((n3 - 2) / 2, (n3 + r2 - 2) / 2, l));
                }, cdf: function(t4, o3, n3) {
                  return t4 < 0 ? 0 : e4.ibeta(o3 * t4 / (o3 * t4 + n3), o3 / 2, n3 / 2);
                }, inv: function(t4, o3, n3) {
                  return n3 / (o3 * (1 / e4.ibetainv(t4, o3 / 2, n3 / 2) - 1));
                }, mean: function(e5, t4) {
                  return t4 > 2 ? t4 / (t4 - 2) : void 0;
                }, mode: function(e5, t4) {
                  return e5 > 2 ? t4 * (e5 - 2) / (e5 * (t4 + 2)) : void 0;
                }, sample: function(t4, o3) {
                  return 2 * e4.randg(t4 / 2) / t4 / (2 * e4.randg(o3 / 2) / o3);
                }, variance: function(e5, t4) {
                  if (!(t4 <= 4)) return 2 * t4 * t4 * (e5 + t4 - 2) / (e5 * (t4 - 2) * (t4 - 2) * (t4 - 4));
                } }), e4.extend(e4.cauchy, { pdf: function(e5, o3, n3) {
                  return n3 < 0 ? 0 : n3 / (t3.pow(e5 - o3, 2) + t3.pow(n3, 2)) / t3.PI;
                }, cdf: function(e5, o3, n3) {
                  return t3.atan((e5 - o3) / n3) / t3.PI + 0.5;
                }, inv: function(e5, o3, n3) {
                  return o3 + n3 * t3.tan(t3.PI * (e5 - 0.5));
                }, median: function(e5) {
                  return e5;
                }, mode: function(e5) {
                  return e5;
                }, sample: function(o3, n3) {
                  return e4.randn() * t3.sqrt(1 / (2 * e4.randg(0.5))) * n3 + o3;
                } }), e4.extend(e4.chisquare, { pdf: function(o3, n3) {
                  return o3 < 0 ? 0 : 0 === o3 && 2 === n3 ? 0.5 : t3.exp((n3 / 2 - 1) * t3.log(o3) - o3 / 2 - n3 / 2 * t3.log(2) - e4.gammaln(n3 / 2));
                }, cdf: function(t4, o3) {
                  return t4 < 0 ? 0 : e4.lowRegGamma(o3 / 2, t4 / 2);
                }, inv: function(t4, o3) {
                  return 2 * e4.gammapinv(t4, 0.5 * o3);
                }, mean: function(e5) {
                  return e5;
                }, median: function(e5) {
                  return e5 * t3.pow(1 - 2 / (9 * e5), 3);
                }, mode: function(e5) {
                  return e5 - 2 > 0 ? e5 - 2 : 0;
                }, sample: function(t4) {
                  return 2 * e4.randg(t4 / 2);
                }, variance: function(e5) {
                  return 2 * e5;
                } }), e4.extend(e4.exponential, { pdf: function(e5, o3) {
                  return e5 < 0 ? 0 : o3 * t3.exp(-o3 * e5);
                }, cdf: function(e5, o3) {
                  return e5 < 0 ? 0 : 1 - t3.exp(-o3 * e5);
                }, inv: function(e5, o3) {
                  return -t3.log(1 - e5) / o3;
                }, mean: function(e5) {
                  return 1 / e5;
                }, median: function(e5) {
                  return 1 / e5 * t3.log(2);
                }, mode: function() {
                  return 0;
                }, sample: function(o3) {
                  return -1 / o3 * t3.log(e4._random_fn());
                }, variance: function(e5) {
                  return t3.pow(e5, -2);
                } }), e4.extend(e4.gamma, { pdf: function(o3, n3, r2) {
                  return o3 < 0 ? 0 : 0 === o3 && 1 === n3 ? 1 / r2 : t3.exp((n3 - 1) * t3.log(o3) - o3 / r2 - e4.gammaln(n3) - n3 * t3.log(r2));
                }, cdf: function(t4, o3, n3) {
                  return t4 < 0 ? 0 : e4.lowRegGamma(o3, t4 / n3);
                }, inv: function(t4, o3, n3) {
                  return e4.gammapinv(t4, o3) * n3;
                }, mean: function(e5, t4) {
                  return e5 * t4;
                }, mode: function(e5, t4) {
                  if (e5 > 1) return (e5 - 1) * t4;
                }, sample: function(t4, o3) {
                  return e4.randg(t4) * o3;
                }, variance: function(e5, t4) {
                  return e5 * t4 * t4;
                } }), e4.extend(e4.invgamma, { pdf: function(o3, n3, r2) {
                  return o3 <= 0 ? 0 : t3.exp(-(n3 + 1) * t3.log(o3) - r2 / o3 - e4.gammaln(n3) + n3 * t3.log(r2));
                }, cdf: function(t4, o3, n3) {
                  return t4 <= 0 ? 0 : 1 - e4.lowRegGamma(o3, n3 / t4);
                }, inv: function(t4, o3, n3) {
                  return n3 / e4.gammapinv(1 - t4, o3);
                }, mean: function(e5, t4) {
                  return e5 > 1 ? t4 / (e5 - 1) : void 0;
                }, mode: function(e5, t4) {
                  return t4 / (e5 + 1);
                }, sample: function(t4, o3) {
                  return o3 / e4.randg(t4);
                }, variance: function(e5, t4) {
                  if (!(e5 <= 2)) return t4 * t4 / ((e5 - 1) * (e5 - 1) * (e5 - 2));
                } }), e4.extend(e4.kumaraswamy, { pdf: function(e5, o3, n3) {
                  return 0 === e5 && 1 === o3 ? n3 : 1 === e5 && 1 === n3 ? o3 : t3.exp(t3.log(o3) + t3.log(n3) + (o3 - 1) * t3.log(e5) + (n3 - 1) * t3.log(1 - t3.pow(e5, o3)));
                }, cdf: function(e5, o3, n3) {
                  return e5 < 0 ? 0 : e5 > 1 ? 1 : 1 - t3.pow(1 - t3.pow(e5, o3), n3);
                }, inv: function(e5, o3, n3) {
                  return t3.pow(1 - t3.pow(1 - e5, 1 / n3), 1 / o3);
                }, mean: function(t4, o3) {
                  return o3 * e4.gammafn(1 + 1 / t4) * e4.gammafn(o3) / e4.gammafn(1 + 1 / t4 + o3);
                }, median: function(e5, o3) {
                  return t3.pow(1 - t3.pow(2, -1 / o3), 1 / e5);
                }, mode: function(e5, o3) {
                  if (e5 >= 1 && o3 >= 1 && 1 !== e5 && 1 !== o3) return t3.pow((e5 - 1) / (e5 * o3 - 1), 1 / e5);
                }, variance: function() {
                  throw new Error("variance not yet implemented");
                } }), e4.extend(e4.lognormal, { pdf: function(e5, o3, n3) {
                  return e5 <= 0 ? 0 : t3.exp(-t3.log(e5) - 0.5 * t3.log(2 * t3.PI) - t3.log(n3) - t3.pow(t3.log(e5) - o3, 2) / (2 * n3 * n3));
                }, cdf: function(o3, n3, r2) {
                  return o3 < 0 ? 0 : 0.5 + 0.5 * e4.erf((t3.log(o3) - n3) / t3.sqrt(2 * r2 * r2));
                }, inv: function(o3, n3, r2) {
                  return t3.exp(-1.4142135623730951 * r2 * e4.erfcinv(2 * o3) + n3);
                }, mean: function(e5, o3) {
                  return t3.exp(e5 + o3 * o3 / 2);
                }, median: function(e5) {
                  return t3.exp(e5);
                }, mode: function(e5, o3) {
                  return t3.exp(e5 - o3 * o3);
                }, sample: function(o3, n3) {
                  return t3.exp(e4.randn() * n3 + o3);
                }, variance: function(e5, o3) {
                  return (t3.exp(o3 * o3) - 1) * t3.exp(2 * e5 + o3 * o3);
                } }), e4.extend(e4.noncentralt, { pdf: function(o3, n3, r2) {
                  return t3.abs(r2) < 1e-14 ? e4.studentt.pdf(o3, n3) : t3.abs(o3) < 1e-14 ? t3.exp(e4.gammaln((n3 + 1) / 2) - r2 * r2 / 2 - 0.5 * t3.log(t3.PI * n3) - e4.gammaln(n3 / 2)) : n3 / o3 * (e4.noncentralt.cdf(o3 * t3.sqrt(1 + 2 / n3), n3 + 2, r2) - e4.noncentralt.cdf(o3, n3, r2));
                }, cdf: function(o3, n3, r2) {
                  var l = 1e-14;
                  if (t3.abs(r2) < l) return e4.studentt.cdf(o3, n3);
                  var i2 = false;
                  o3 < 0 && (i2 = true, r2 = -r2);
                  for (var s = e4.normal.cdf(-r2, 0, 1), a = l + 1, u = a, c = o3 * o3 / (o3 * o3 + n3), f = 0, d = t3.exp(-r2 * r2 / 2), p = t3.exp(-r2 * r2 / 2 - 0.5 * t3.log(2) - e4.gammaln(1.5)) * r2; f < 200 || u > l || a > l; ) u = a, f > 0 && (d *= r2 * r2 / (2 * f), p *= r2 * r2 / (2 * (f + 0.5))), s += 0.5 * (a = d * e4.beta.cdf(c, f + 0.5, n3 / 2) + p * e4.beta.cdf(c, f + 1, n3 / 2)), f++;
                  return i2 ? 1 - s : s;
                } }), e4.extend(e4.normal, { pdf: function(e5, o3, n3) {
                  return t3.exp(-0.5 * t3.log(2 * t3.PI) - t3.log(n3) - t3.pow(e5 - o3, 2) / (2 * n3 * n3));
                }, cdf: function(o3, n3, r2) {
                  return 0.5 * (1 + e4.erf((o3 - n3) / t3.sqrt(2 * r2 * r2)));
                }, inv: function(t4, o3, n3) {
                  return -1.4142135623730951 * n3 * e4.erfcinv(2 * t4) + o3;
                }, mean: function(e5) {
                  return e5;
                }, median: function(e5) {
                  return e5;
                }, mode: function(e5) {
                  return e5;
                }, sample: function(t4, o3) {
                  return e4.randn() * o3 + t4;
                }, variance: function(e5, t4) {
                  return t4 * t4;
                } }), e4.extend(e4.pareto, { pdf: function(e5, o3, n3) {
                  return e5 < o3 ? 0 : n3 * t3.pow(o3, n3) / t3.pow(e5, n3 + 1);
                }, cdf: function(e5, o3, n3) {
                  return e5 < o3 ? 0 : 1 - t3.pow(o3 / e5, n3);
                }, inv: function(e5, o3, n3) {
                  return o3 / t3.pow(1 - e5, 1 / n3);
                }, mean: function(e5, o3) {
                  if (!(o3 <= 1)) return o3 * t3.pow(e5, o3) / (o3 - 1);
                }, median: function(e5, o3) {
                  return e5 * (o3 * t3.SQRT2);
                }, mode: function(e5) {
                  return e5;
                }, variance: function(e5, o3) {
                  if (!(o3 <= 2)) return e5 * e5 * o3 / (t3.pow(o3 - 1, 2) * (o3 - 2));
                } }), e4.extend(e4.studentt, { pdf: function(o3, n3) {
                  return n3 = n3 > 1e100 ? 1e100 : n3, 1 / (t3.sqrt(n3) * e4.betafn(0.5, n3 / 2)) * t3.pow(1 + o3 * o3 / n3, -(n3 + 1) / 2);
                }, cdf: function(o3, n3) {
                  var r2 = n3 / 2;
                  return e4.ibeta((o3 + t3.sqrt(o3 * o3 + n3)) / (2 * t3.sqrt(o3 * o3 + n3)), r2, r2);
                }, inv: function(o3, n3) {
                  var r2 = e4.ibetainv(2 * t3.min(o3, 1 - o3), 0.5 * n3, 0.5);
                  return r2 = t3.sqrt(n3 * (1 - r2) / r2), o3 > 0.5 ? r2 : -r2;
                }, mean: function(e5) {
                  return e5 > 1 ? 0 : void 0;
                }, median: function() {
                  return 0;
                }, mode: function() {
                  return 0;
                }, sample: function(o3) {
                  return e4.randn() * t3.sqrt(o3 / (2 * e4.randg(o3 / 2)));
                }, variance: function(e5) {
                  return e5 > 2 ? e5 / (e5 - 2) : e5 > 1 ? 1 / 0 : void 0;
                } }), e4.extend(e4.weibull, { pdf: function(e5, o3, n3) {
                  return e5 < 0 || o3 < 0 || n3 < 0 ? 0 : n3 / o3 * t3.pow(e5 / o3, n3 - 1) * t3.exp(-t3.pow(e5 / o3, n3));
                }, cdf: function(e5, o3, n3) {
                  return e5 < 0 ? 0 : 1 - t3.exp(-t3.pow(e5 / o3, n3));
                }, inv: function(e5, o3, n3) {
                  return o3 * t3.pow(-t3.log(1 - e5), 1 / n3);
                }, mean: function(t4, o3) {
                  return t4 * e4.gammafn(1 + 1 / o3);
                }, median: function(e5, o3) {
                  return e5 * t3.pow(t3.log(2), 1 / o3);
                }, mode: function(e5, o3) {
                  return o3 <= 1 ? 0 : e5 * t3.pow((o3 - 1) / o3, 1 / o3);
                }, sample: function(o3, n3) {
                  return o3 * t3.pow(-t3.log(e4._random_fn()), 1 / n3);
                }, variance: function(o3, n3) {
                  return o3 * o3 * e4.gammafn(1 + 2 / n3) - t3.pow(e4.weibull.mean(o3, n3), 2);
                } }), e4.extend(e4.uniform, { pdf: function(e5, t4, o3) {
                  return e5 < t4 || e5 > o3 ? 0 : 1 / (o3 - t4);
                }, cdf: function(e5, t4, o3) {
                  return e5 < t4 ? 0 : e5 < o3 ? (e5 - t4) / (o3 - t4) : 1;
                }, inv: function(e5, t4, o3) {
                  return t4 + e5 * (o3 - t4);
                }, mean: function(e5, t4) {
                  return 0.5 * (e5 + t4);
                }, median: function(t4, o3) {
                  return e4.mean(t4, o3);
                }, mode: function() {
                  throw new Error("mode is not yet implemented");
                }, sample: function(t4, o3) {
                  return t4 / 2 + o3 / 2 + (o3 / 2 - t4 / 2) * (2 * e4._random_fn() - 1);
                }, variance: function(e5, o3) {
                  return t3.pow(o3 - e5, 2) / 12;
                } }), e4.extend(e4.binomial, { pdf: function(o3, n3, r2) {
                  return 0 === r2 || 1 === r2 ? n3 * r2 === o3 ? 1 : 0 : e4.combination(n3, o3) * t3.pow(r2, o3) * t3.pow(1 - r2, n3 - o3);
                }, cdf: function(n3, r2, l) {
                  var i2, s = 1e-10;
                  if (n3 < 0) return 0;
                  if (n3 >= r2) return 1;
                  if (l < 0 || l > 1 || r2 <= 0) return NaN;
                  var a = l, u = (n3 = t3.floor(n3)) + 1, c = r2 - n3, f = u + c, d = t3.exp(e4.gammaln(f) - e4.gammaln(c) - e4.gammaln(u) + u * t3.log(a) + c * t3.log(1 - a));
                  return i2 = a < (u + 1) / (f + 2) ? d * o2(a, u, c, s) : 1 - d * o2(1 - a, c, u, s), t3.round(1 / s * (1 - i2)) / (1 / s);
                } }), e4.extend(e4.negbin, { pdf: function(o3, n3, r2) {
                  return o3 === o3 >>> 0 && (o3 < 0 ? 0 : e4.combination(o3 + n3 - 1, n3 - 1) * t3.pow(1 - r2, o3) * t3.pow(r2, n3));
                }, cdf: function(t4, o3, n3) {
                  var r2 = 0, l = 0;
                  if (t4 < 0) return 0;
                  for (; l <= t4; l++) r2 += e4.negbin.pdf(l, o3, n3);
                  return r2;
                } }), e4.extend(e4.hypgeom, { pdf: function(o3, n3, r2, l) {
                  if (o3 != o3 | 0) return false;
                  if (o3 < 0 || o3 < r2 - (n3 - l)) return 0;
                  if (o3 > l || o3 > r2) return 0;
                  if (2 * r2 > n3) return 2 * l > n3 ? e4.hypgeom.pdf(n3 - r2 - l + o3, n3, n3 - r2, n3 - l) : e4.hypgeom.pdf(l - o3, n3, n3 - r2, l);
                  if (2 * l > n3) return e4.hypgeom.pdf(r2 - o3, n3, r2, n3 - l);
                  if (r2 < l) return e4.hypgeom.pdf(o3, n3, l, r2);
                  for (var i2 = 1, s = 0, a = 0; a < o3; a++) {
                    for (; i2 > 1 && s < l; ) i2 *= 1 - r2 / (n3 - s), s++;
                    i2 *= (l - a) * (r2 - a) / ((a + 1) * (n3 - r2 - l + a + 1));
                  }
                  for (; s < l; s++) i2 *= 1 - r2 / (n3 - s);
                  return t3.min(1, t3.max(0, i2));
                }, cdf: function(o3, n3, r2, l) {
                  if (o3 < 0 || o3 < r2 - (n3 - l)) return 0;
                  if (o3 >= l || o3 >= r2) return 1;
                  if (2 * r2 > n3) return 2 * l > n3 ? e4.hypgeom.cdf(n3 - r2 - l + o3, n3, n3 - r2, n3 - l) : 1 - e4.hypgeom.cdf(l - o3 - 1, n3, n3 - r2, l);
                  if (2 * l > n3) return 1 - e4.hypgeom.cdf(r2 - o3 - 1, n3, r2, n3 - l);
                  if (r2 < l) return e4.hypgeom.cdf(o3, n3, l, r2);
                  for (var i2 = 1, s = 1, a = 0, u = 0; u < o3; u++) {
                    for (; i2 > 1 && a < l; ) {
                      var c = 1 - r2 / (n3 - a);
                      s *= c, i2 *= c, a++;
                    }
                    i2 += s *= (l - u) * (r2 - u) / ((u + 1) * (n3 - r2 - l + u + 1));
                  }
                  for (; a < l; a++) i2 *= 1 - r2 / (n3 - a);
                  return t3.min(1, t3.max(0, i2));
                } }), e4.extend(e4.poisson, { pdf: function(o3, n3) {
                  return n3 < 0 || o3 % 1 != 0 || o3 < 0 ? 0 : t3.pow(n3, o3) * t3.exp(-n3) / e4.factorial(o3);
                }, cdf: function(t4, o3) {
                  var n3 = [], r2 = 0;
                  if (t4 < 0) return 0;
                  for (; r2 <= t4; r2++) n3.push(e4.poisson.pdf(r2, o3));
                  return e4.sum(n3);
                }, mean: function(e5) {
                  return e5;
                }, variance: function(e5) {
                  return e5;
                }, sampleSmall: function(o3) {
                  var n3 = 1, r2 = 0, l = t3.exp(-o3);
                  do {
                    r2++, n3 *= e4._random_fn();
                  } while (n3 > l);
                  return r2 - 1;
                }, sampleLarge: function(o3) {
                  var n3, r2, l, i2, s, a, u, c, f, d, p = o3;
                  for (i2 = t3.sqrt(p), s = t3.log(p), a = 0.02483 * (u = 0.931 + 2.53 * i2) - 0.059, c = 1.1239 + 1.1328 / (u - 3.4), f = 0.9277 - 3.6224 / (u - 2); ; ) {
                    if (r2 = t3.random() - 0.5, l = t3.random(), d = 0.5 - t3.abs(r2), n3 = t3.floor((2 * a / d + u) * r2 + p + 0.43), d >= 0.07 && l <= f) return n3;
                    if (!(n3 < 0 || d < 0.013 && l > d) && t3.log(l) + t3.log(c) - t3.log(a / (d * d) + u) <= n3 * s - p - e4.loggam(n3 + 1)) return n3;
                  }
                }, sample: function(e5) {
                  return e5 < 10 ? this.sampleSmall(e5) : this.sampleLarge(e5);
                } }), e4.extend(e4.triangular, { pdf: function(e5, t4, o3, n3) {
                  return o3 <= t4 || n3 < t4 || n3 > o3 ? NaN : e5 < t4 || e5 > o3 ? 0 : e5 < n3 ? 2 * (e5 - t4) / ((o3 - t4) * (n3 - t4)) : e5 === n3 ? 2 / (o3 - t4) : 2 * (o3 - e5) / ((o3 - t4) * (o3 - n3));
                }, cdf: function(e5, o3, n3, r2) {
                  return n3 <= o3 || r2 < o3 || r2 > n3 ? NaN : e5 <= o3 ? 0 : e5 >= n3 ? 1 : e5 <= r2 ? t3.pow(e5 - o3, 2) / ((n3 - o3) * (r2 - o3)) : 1 - t3.pow(n3 - e5, 2) / ((n3 - o3) * (n3 - r2));
                }, inv: function(e5, o3, n3, r2) {
                  return n3 <= o3 || r2 < o3 || r2 > n3 ? NaN : e5 <= (r2 - o3) / (n3 - o3) ? o3 + (n3 - o3) * t3.sqrt(e5 * ((r2 - o3) / (n3 - o3))) : o3 + (n3 - o3) * (1 - t3.sqrt((1 - e5) * (1 - (r2 - o3) / (n3 - o3))));
                }, mean: function(e5, t4, o3) {
                  return (e5 + t4 + o3) / 3;
                }, median: function(e5, o3, n3) {
                  return n3 <= (e5 + o3) / 2 ? o3 - t3.sqrt((o3 - e5) * (o3 - n3)) / t3.sqrt(2) : n3 > (e5 + o3) / 2 ? e5 + t3.sqrt((o3 - e5) * (n3 - e5)) / t3.sqrt(2) : void 0;
                }, mode: function(e5, t4, o3) {
                  return o3;
                }, sample: function(o3, n3, r2) {
                  var l = e4._random_fn();
                  return l < (r2 - o3) / (n3 - o3) ? o3 + t3.sqrt(l * (n3 - o3) * (r2 - o3)) : n3 - t3.sqrt((1 - l) * (n3 - o3) * (n3 - r2));
                }, variance: function(e5, t4, o3) {
                  return (e5 * e5 + t4 * t4 + o3 * o3 - e5 * t4 - e5 * o3 - t4 * o3) / 18;
                } }), e4.extend(e4.arcsine, { pdf: function(e5, o3, n3) {
                  return n3 <= o3 ? NaN : e5 <= o3 || e5 >= n3 ? 0 : 2 / t3.PI * t3.pow(t3.pow(n3 - o3, 2) - t3.pow(2 * e5 - o3 - n3, 2), -0.5);
                }, cdf: function(e5, o3, n3) {
                  return e5 < o3 ? 0 : e5 < n3 ? 2 / t3.PI * t3.asin(t3.sqrt((e5 - o3) / (n3 - o3))) : 1;
                }, inv: function(e5, o3, n3) {
                  return o3 + (0.5 - 0.5 * t3.cos(t3.PI * e5)) * (n3 - o3);
                }, mean: function(e5, t4) {
                  return t4 <= e5 ? NaN : (e5 + t4) / 2;
                }, median: function(e5, t4) {
                  return t4 <= e5 ? NaN : (e5 + t4) / 2;
                }, mode: function() {
                  throw new Error("mode is not yet implemented");
                }, sample: function(o3, n3) {
                  return (o3 + n3) / 2 + (n3 - o3) / 2 * t3.sin(2 * t3.PI * e4.uniform.sample(0, 1));
                }, variance: function(e5, o3) {
                  return o3 <= e5 ? NaN : t3.pow(o3 - e5, 2) / 8;
                } }), e4.extend(e4.laplace, { pdf: function(e5, o3, n3) {
                  return n3 <= 0 ? 0 : t3.exp(-t3.abs(e5 - o3) / n3) / (2 * n3);
                }, cdf: function(e5, o3, n3) {
                  return n3 <= 0 ? 0 : e5 < o3 ? 0.5 * t3.exp((e5 - o3) / n3) : 1 - 0.5 * t3.exp(-(e5 - o3) / n3);
                }, mean: function(e5) {
                  return e5;
                }, median: function(e5) {
                  return e5;
                }, mode: function(e5) {
                  return e5;
                }, variance: function(e5, t4) {
                  return 2 * t4 * t4;
                }, sample: function(o3, n3) {
                  var r2, l = e4._random_fn() - 0.5;
                  return o3 - n3 * ((r2 = l) / t3.abs(r2)) * t3.log(1 - 2 * t3.abs(l));
                } }), e4.extend(e4.tukey, { cdf: function(o3, r2, l) {
                  var i2 = r2, s = [0.9894009349916499, 0.9445750230732326, 0.8656312023878318, 0.755404408355003, 0.6178762444026438, 0.45801677765722737, 0.2816035507792589, 0.09501250983763744], a = [0.027152459411754096, 0.062253523938647894, 0.09515851168249279, 0.12462897125553388, 0.14959598881657674, 0.16915651939500254, 0.18260341504492358, 0.1894506104550685];
                  if (o3 <= 0) return 0;
                  if (l < 2 || i2 < 2) return NaN;
                  if (!Number.isFinite(o3)) return 1;
                  if (l > 25e3) return n2(o3, 1, i2);
                  var u, c = 0.5 * l, f = c * t3.log(l) - l * t3.log(2) - e4.gammaln(c), d = c - 1, p = 0.25 * l;
                  u = l <= 100 ? 1 : l <= 800 ? 0.5 : l <= 5e3 ? 0.25 : 0.125, f += t3.log(u);
                  for (var b = 0, j = 1; j <= 50; j++) {
                    for (var h = 0, g = (2 * j - 1) * u, m = 1; m <= 16; m++) {
                      var v, y2;
                      8 < m ? (v = m - 8 - 1, y2 = f + d * t3.log(g + s[v] * u) - (s[v] * u + g) * p) : (v = m - 1, y2 = f + d * t3.log(g - s[v] * u) + (s[v] * u - g) * p), y2 >= -30 && (h += n2(8 < m ? o3 * t3.sqrt(0.5 * (s[v] * u + g)) : o3 * t3.sqrt(0.5 * (-s[v] * u + g)), 1, i2) * a[v] * t3.exp(y2));
                    }
                    if (j * u >= 1 && h <= 1e-14) break;
                    b += h;
                  }
                  if (h > 1e-14) throw new Error("tukey.cdf failed to converge");
                  return b > 1 && (b = 1), b;
                }, inv: function(o3, n3, r2) {
                  if (r2 < 2 || n3 < 2) return NaN;
                  if (o3 < 0 || o3 > 1) return NaN;
                  if (0 === o3) return 0;
                  if (1 === o3) return 1 / 0;
                  var l, i2 = function(e5, o4, n4) {
                    var r3 = 0.5 - 0.5 * e5, l2 = t3.sqrt(t3.log(1 / (r3 * r3))), i3 = l2 + ((((-453642210148e-16 * l2 - 0.204231210125) * l2 - 0.342242088547) * l2 - 1) * l2 + 0.322232421088) / ((((0.0038560700634 * l2 + 0.10353775285) * l2 + 0.531103462366) * l2 + 0.588581570495) * l2 + 0.099348462606);
                    n4 < 120 && (i3 += (i3 * i3 * i3 + i3) / n4 / 4);
                    var s2 = 0.8832 - 0.2368 * i3;
                    return n4 < 120 && (s2 += -1.214 / n4 + 1.208 * i3 / n4), i3 * (s2 * t3.log(o4 - 1) + 1.4142);
                  }(o3, n3, r2), s = e4.tukey.cdf(i2, n3, r2) - o3;
                  l = s > 0 ? t3.max(0, i2 - 1) : i2 + 1;
                  for (var a, u = e4.tukey.cdf(l, n3, r2) - o3, c = 1; c < 50; c++) if (a = l - u * (l - i2) / (u - s), s = u, i2 = l, a < 0 && (a = 0, u = -o3), u = e4.tukey.cdf(a, n3, r2) - o3, l = a, t3.abs(l - i2) < 1e-4) return a;
                  throw new Error("tukey.inv failed to converge");
                } });
              }(t2, Math), function(e4, t3) {
                var o2, n2, r2 = Array.prototype.push, l = e4.utils.isArray;
                function i2(t4) {
                  return l(t4) || t4 instanceof e4;
                }
                e4.extend({ add: function(t4, o3) {
                  return i2(o3) ? (i2(o3[0]) || (o3 = [o3]), e4.map(t4, function(e5, t5, n3) {
                    return e5 + o3[t5][n3];
                  })) : e4.map(t4, function(e5) {
                    return e5 + o3;
                  });
                }, subtract: function(t4, o3) {
                  return i2(o3) ? (i2(o3[0]) || (o3 = [o3]), e4.map(t4, function(e5, t5, n3) {
                    return e5 - o3[t5][n3] || 0;
                  })) : e4.map(t4, function(e5) {
                    return e5 - o3;
                  });
                }, divide: function(t4, o3) {
                  return i2(o3) ? (i2(o3[0]) || (o3 = [o3]), e4.multiply(t4, e4.inv(o3))) : e4.map(t4, function(e5) {
                    return e5 / o3;
                  });
                }, multiply: function(t4, o3) {
                  var n3, r3, l2, s, a, u, c, f;
                  if (void 0 === t4.length && void 0 === o3.length) return t4 * o3;
                  if (a = t4.length, u = t4[0].length, c = e4.zeros(a, l2 = i2(o3) ? o3[0].length : u), f = 0, i2(o3)) {
                    for (; f < l2; f++) for (n3 = 0; n3 < a; n3++) {
                      for (s = 0, r3 = 0; r3 < u; r3++) s += t4[n3][r3] * o3[r3][f];
                      c[n3][f] = s;
                    }
                    return 1 === a && 1 === f ? c[0][0] : c;
                  }
                  return e4.map(t4, function(e5) {
                    return e5 * o3;
                  });
                }, outer: function(t4, o3) {
                  return e4.multiply(t4.map(function(e5) {
                    return [e5];
                  }), [o3]);
                }, dot: function(t4, o3) {
                  i2(t4[0]) || (t4 = [t4]), i2(o3[0]) || (o3 = [o3]);
                  for (var n3, r3, l2 = 1 === t4[0].length && 1 !== t4.length ? e4.transpose(t4) : t4, s = 1 === o3[0].length && 1 !== o3.length ? e4.transpose(o3) : o3, a = [], u = 0, c = l2.length, f = l2[0].length; u < c; u++) {
                    for (a[u] = [], n3 = 0, r3 = 0; r3 < f; r3++) n3 += l2[u][r3] * s[u][r3];
                    a[u] = n3;
                  }
                  return 1 === a.length ? a[0] : a;
                }, pow: function(o3, n3) {
                  return e4.map(o3, function(e5) {
                    return t3.pow(e5, n3);
                  });
                }, exp: function(o3) {
                  return e4.map(o3, function(e5) {
                    return t3.exp(e5);
                  });
                }, log: function(o3) {
                  return e4.map(o3, function(e5) {
                    return t3.log(e5);
                  });
                }, abs: function(o3) {
                  return e4.map(o3, function(e5) {
                    return t3.abs(e5);
                  });
                }, norm: function(e5, o3) {
                  var n3 = 0, r3 = 0;
                  for (isNaN(o3) && (o3 = 2), i2(e5[0]) && (e5 = e5[0]); r3 < e5.length; r3++) n3 += t3.pow(t3.abs(e5[r3]), o3);
                  return t3.pow(n3, 1 / o3);
                }, angle: function(o3, n3) {
                  return t3.acos(e4.dot(o3, n3) / (e4.norm(o3) * e4.norm(n3)));
                }, aug: function(e5, t4) {
                  var o3, n3 = [];
                  for (o3 = 0; o3 < e5.length; o3++) n3.push(e5[o3].slice());
                  for (o3 = 0; o3 < n3.length; o3++) r2.apply(n3[o3], t4[o3]);
                  return n3;
                }, inv: function(t4) {
                  for (var o3, n3 = t4.length, r3 = t4[0].length, l2 = e4.identity(n3, r3), i3 = e4.gauss_jordan(t4, l2), s = [], a = 0; a < n3; a++) for (s[a] = [], o3 = r3; o3 < i3[0].length; o3++) s[a][o3 - r3] = i3[a][o3];
                  return s;
                }, det: function e5(t4) {
                  if (2 === t4.length) return t4[0][0] * t4[1][1] - t4[0][1] * t4[1][0];
                  for (var o3 = 0, n3 = 0; n3 < t4.length; n3++) {
                    for (var r3 = [], l2 = 1; l2 < t4.length; l2++) {
                      r3[l2 - 1] = [];
                      for (var i3 = 0; i3 < t4.length; i3++) i3 < n3 ? r3[l2 - 1][i3] = t4[l2][i3] : i3 > n3 && (r3[l2 - 1][i3 - 1] = t4[l2][i3]);
                    }
                    var s = n3 % 2 ? -1 : 1;
                    o3 += e5(r3) * t4[0][n3] * s;
                  }
                  return o3;
                }, gauss_elimination: function(o3, n3) {
                  var r3, l2, i3, s, a = 0, u = 0, c = o3.length, f = o3[0].length, d = 1, p = 0, b = [];
                  for (r3 = (o3 = e4.aug(o3, n3))[0].length, a = 0; a < c; a++) {
                    for (l2 = o3[a][a], u = a, s = a + 1; s < f; s++) l2 < t3.abs(o3[s][a]) && (l2 = o3[s][a], u = s);
                    if (u != a) for (s = 0; s < r3; s++) i3 = o3[a][s], o3[a][s] = o3[u][s], o3[u][s] = i3;
                    for (u = a + 1; u < c; u++) for (d = o3[u][a] / o3[a][a], s = a; s < r3; s++) o3[u][s] = o3[u][s] - d * o3[a][s];
                  }
                  for (a = c - 1; a >= 0; a--) {
                    for (p = 0, u = a + 1; u <= c - 1; u++) p += b[u] * o3[a][u];
                    b[a] = (o3[a][r3 - 1] - p) / o3[a][a];
                  }
                  return b;
                }, gauss_jordan: function(o3, n3) {
                  var r3, l2, i3, s = e4.aug(o3, n3), a = s.length, u = s[0].length, c = 0;
                  for (l2 = 0; l2 < a; l2++) {
                    var f = l2;
                    for (i3 = l2 + 1; i3 < a; i3++) t3.abs(s[i3][l2]) > t3.abs(s[f][l2]) && (f = i3);
                    var d = s[l2];
                    for (s[l2] = s[f], s[f] = d, i3 = l2 + 1; i3 < a; i3++) for (c = s[i3][l2] / s[l2][l2], r3 = l2; r3 < u; r3++) s[i3][r3] -= s[l2][r3] * c;
                  }
                  for (l2 = a - 1; l2 >= 0; l2--) {
                    for (c = s[l2][l2], i3 = 0; i3 < l2; i3++) for (r3 = u - 1; r3 > l2 - 1; r3--) s[i3][r3] -= s[l2][r3] * s[i3][l2] / c;
                    for (s[l2][l2] /= c, r3 = a; r3 < u; r3++) s[l2][r3] /= c;
                  }
                  return s;
                }, triaUpSolve: function(t4, o3) {
                  var n3, r3 = t4[0].length, l2 = e4.zeros(1, r3)[0], i3 = false;
                  return null != o3[0].length && (o3 = o3.map(function(e5) {
                    return e5[0];
                  }), i3 = true), e4.arange(r3 - 1, -1, -1).forEach(function(i4) {
                    n3 = e4.arange(i4 + 1, r3).map(function(e5) {
                      return l2[e5] * t4[i4][e5];
                    }), l2[i4] = (o3[i4] - e4.sum(n3)) / t4[i4][i4];
                  }), i3 ? l2.map(function(e5) {
                    return [e5];
                  }) : l2;
                }, triaLowSolve: function(t4, o3) {
                  var n3, r3 = t4[0].length, l2 = e4.zeros(1, r3)[0], i3 = false;
                  return null != o3[0].length && (o3 = o3.map(function(e5) {
                    return e5[0];
                  }), i3 = true), e4.arange(r3).forEach(function(r4) {
                    n3 = e4.arange(r4).map(function(e5) {
                      return t4[r4][e5] * l2[e5];
                    }), l2[r4] = (o3[r4] - e4.sum(n3)) / t4[r4][r4];
                  }), i3 ? l2.map(function(e5) {
                    return [e5];
                  }) : l2;
                }, lu: function(t4) {
                  var o3, n3 = t4.length, r3 = e4.identity(n3), l2 = e4.zeros(t4.length, t4[0].length);
                  return e4.arange(n3).forEach(function(e5) {
                    l2[0][e5] = t4[0][e5];
                  }), e4.arange(1, n3).forEach(function(i3) {
                    e4.arange(i3).forEach(function(n4) {
                      o3 = e4.arange(n4).map(function(e5) {
                        return r3[i3][e5] * l2[e5][n4];
                      }), r3[i3][n4] = (t4[i3][n4] - e4.sum(o3)) / l2[n4][n4];
                    }), e4.arange(i3, n3).forEach(function(n4) {
                      o3 = e4.arange(i3).map(function(e5) {
                        return r3[i3][e5] * l2[e5][n4];
                      }), l2[i3][n4] = t4[o3.length][n4] - e4.sum(o3);
                    });
                  }), [r3, l2];
                }, cholesky: function(o3) {
                  var n3, r3 = o3.length, l2 = e4.zeros(o3.length, o3[0].length);
                  return e4.arange(r3).forEach(function(i3) {
                    n3 = e4.arange(i3).map(function(e5) {
                      return t3.pow(l2[i3][e5], 2);
                    }), l2[i3][i3] = t3.sqrt(o3[i3][i3] - e4.sum(n3)), e4.arange(i3 + 1, r3).forEach(function(t4) {
                      n3 = e4.arange(i3).map(function(e5) {
                        return l2[i3][e5] * l2[t4][e5];
                      }), l2[t4][i3] = (o3[i3][t4] - e4.sum(n3)) / l2[i3][i3];
                    });
                  }), l2;
                }, gauss_jacobi: function(o3, n3, r3, l2) {
                  for (var i3, s, a, u, c = 0, f = 0, d = o3.length, p = [], b = [], j = []; c < d; c++) for (p[c] = [], b[c] = [], j[c] = [], f = 0; f < d; f++) c > f ? (p[c][f] = o3[c][f], b[c][f] = j[c][f] = 0) : c < f ? (b[c][f] = o3[c][f], p[c][f] = j[c][f] = 0) : (j[c][f] = o3[c][f], p[c][f] = b[c][f] = 0);
                  for (a = e4.multiply(e4.multiply(e4.inv(j), e4.add(p, b)), -1), s = e4.multiply(e4.inv(j), n3), i3 = r3, u = e4.add(e4.multiply(a, r3), s), c = 2; t3.abs(e4.norm(e4.subtract(u, i3))) > l2; ) i3 = u, u = e4.add(e4.multiply(a, i3), s), c++;
                  return u;
                }, gauss_seidel: function(o3, n3, r3, l2) {
                  for (var i3, s, a, u, c, f = 0, d = o3.length, p = [], b = [], j = []; f < d; f++) for (p[f] = [], b[f] = [], j[f] = [], i3 = 0; i3 < d; i3++) f > i3 ? (p[f][i3] = o3[f][i3], b[f][i3] = j[f][i3] = 0) : f < i3 ? (b[f][i3] = o3[f][i3], p[f][i3] = j[f][i3] = 0) : (j[f][i3] = o3[f][i3], p[f][i3] = b[f][i3] = 0);
                  for (u = e4.multiply(e4.multiply(e4.inv(e4.add(j, p)), b), -1), a = e4.multiply(e4.inv(e4.add(j, p)), n3), s = r3, c = e4.add(e4.multiply(u, r3), a), f = 2; t3.abs(e4.norm(e4.subtract(c, s))) > l2; ) s = c, c = e4.add(e4.multiply(u, s), a), f += 1;
                  return c;
                }, SOR: function(o3, n3, r3, l2, i3) {
                  for (var s, a, u, c, f, d = 0, p = o3.length, b = [], j = [], h = []; d < p; d++) for (b[d] = [], j[d] = [], h[d] = [], s = 0; s < p; s++) d > s ? (b[d][s] = o3[d][s], j[d][s] = h[d][s] = 0) : d < s ? (j[d][s] = o3[d][s], b[d][s] = h[d][s] = 0) : (h[d][s] = o3[d][s], b[d][s] = j[d][s] = 0);
                  for (c = e4.multiply(e4.inv(e4.add(h, e4.multiply(b, i3))), e4.subtract(e4.multiply(h, 1 - i3), e4.multiply(j, i3))), u = e4.multiply(e4.multiply(e4.inv(e4.add(h, e4.multiply(b, i3))), n3), i3), a = r3, f = e4.add(e4.multiply(c, r3), u), d = 2; t3.abs(e4.norm(e4.subtract(f, a))) > l2; ) a = f, f = e4.add(e4.multiply(c, a), u), d++;
                  return f;
                }, householder: function(o3) {
                  for (var n3, r3, l2, i3, s = o3.length, a = o3[0].length, u = 0, c = [], f = []; u < s - 1; u++) {
                    for (n3 = 0, i3 = u + 1; i3 < a; i3++) n3 += o3[i3][u] * o3[i3][u];
                    for (n3 = (o3[u + 1][u] > 0 ? -1 : 1) * t3.sqrt(n3), r3 = t3.sqrt((n3 * n3 - o3[u + 1][u] * n3) / 2), (c = e4.zeros(s, 1))[u + 1][0] = (o3[u + 1][u] - n3) / (2 * r3), l2 = u + 2; l2 < s; l2++) c[l2][0] = o3[l2][u] / (2 * r3);
                    f = e4.subtract(e4.identity(s, a), e4.multiply(e4.multiply(c, e4.transpose(c)), 2)), o3 = e4.multiply(f, e4.multiply(o3, f));
                  }
                  return o3;
                }, QR: (o2 = e4.sum, n2 = e4.arange, function(r3) {
                  var l2, i3, s, a = r3.length, u = r3[0].length, c = e4.zeros(u, u);
                  for (r3 = e4.copy(r3), i3 = 0; i3 < u; i3++) {
                    for (c[i3][i3] = t3.sqrt(o2(n2(a).map(function(e5) {
                      return r3[e5][i3] * r3[e5][i3];
                    }))), l2 = 0; l2 < a; l2++) r3[l2][i3] = r3[l2][i3] / c[i3][i3];
                    for (s = i3 + 1; s < u; s++) for (c[i3][s] = o2(n2(a).map(function(e5) {
                      return r3[e5][i3] * r3[e5][s];
                    })), l2 = 0; l2 < a; l2++) r3[l2][s] = r3[l2][s] - r3[l2][i3] * c[i3][s];
                  }
                  return [r3, c];
                }), lstsq: function(t4, o3) {
                  var n3 = false;
                  void 0 === o3[0].length && (o3 = o3.map(function(e5) {
                    return [e5];
                  }), n3 = true);
                  var r3 = e4.QR(t4), l2 = r3[0], i3 = r3[1], s = t4[0].length, a = e4.slice(l2, { col: { end: s } }), u = function(t5) {
                    var o4 = (t5 = e4.copy(t5)).length, n4 = e4.identity(o4);
                    return e4.arange(o4 - 1, -1, -1).forEach(function(o5) {
                      e4.sliceAssign(n4, { row: o5 }, e4.divide(e4.slice(n4, { row: o5 }), t5[o5][o5])), e4.sliceAssign(t5, { row: o5 }, e4.divide(e4.slice(t5, { row: o5 }), t5[o5][o5])), e4.arange(o5).forEach(function(r4) {
                        var l3 = e4.multiply(t5[r4][o5], -1), i4 = e4.slice(t5, { row: r4 }), s2 = e4.multiply(e4.slice(t5, { row: o5 }), l3);
                        e4.sliceAssign(t5, { row: r4 }, e4.add(i4, s2));
                        var a2 = e4.slice(n4, { row: r4 }), u2 = e4.multiply(e4.slice(n4, { row: o5 }), l3);
                        e4.sliceAssign(n4, { row: r4 }, e4.add(a2, u2));
                      });
                    }), n4;
                  }(e4.slice(i3, { row: { end: s } })), c = e4.transpose(a);
                  void 0 === c[0].length && (c = [c]);
                  var f = e4.multiply(e4.multiply(u, c), o3);
                  return void 0 === f.length && (f = [[f]]), n3 ? f.map(function(e5) {
                    return e5[0];
                  }) : f;
                }, jacobi: function(o3) {
                  for (var n3, r3, l2, i3, s, a, u, c = 1, f = o3.length, d = e4.identity(f, f), p = []; 1 === c; ) {
                    for (s = o3[0][1], l2 = 0, i3 = 1, n3 = 0; n3 < f; n3++) for (r3 = 0; r3 < f; r3++) n3 != r3 && s < t3.abs(o3[n3][r3]) && (s = t3.abs(o3[n3][r3]), l2 = n3, i3 = r3);
                    for (a = o3[l2][l2] === o3[i3][i3] ? o3[l2][i3] > 0 ? t3.PI / 4 : -t3.PI / 4 : t3.atan(2 * o3[l2][i3] / (o3[l2][l2] - o3[i3][i3])) / 2, (u = e4.identity(f, f))[l2][l2] = t3.cos(a), u[l2][i3] = -t3.sin(a), u[i3][l2] = t3.sin(a), u[i3][i3] = t3.cos(a), d = e4.multiply(d, u), o3 = e4.multiply(e4.multiply(e4.inv(u), o3), u), c = 0, n3 = 1; n3 < f; n3++) for (r3 = 1; r3 < f; r3++) n3 != r3 && t3.abs(o3[n3][r3]) > 1e-3 && (c = 1);
                  }
                  for (n3 = 0; n3 < f; n3++) p.push(o3[n3][n3]);
                  return [d, p];
                }, rungekutta: function(e5, t4, o3, n3, r3, l2) {
                  var i3, s, a;
                  if (2 === l2) for (; n3 <= o3; ) r3 += ((i3 = t4 * e5(n3, r3)) + (s = t4 * e5(n3 + t4, r3 + i3))) / 2, n3 += t4;
                  if (4 === l2) for (; n3 <= o3; ) r3 += ((i3 = t4 * e5(n3, r3)) + 2 * (s = t4 * e5(n3 + t4 / 2, r3 + i3 / 2)) + 2 * (a = t4 * e5(n3 + t4 / 2, r3 + s / 2)) + t4 * e5(n3 + t4, r3 + a)) / 6, n3 += t4;
                  return r3;
                }, romberg: function(e5, o3, n3, r3) {
                  for (var l2, i3, s, a, u, c = 0, f = (n3 - o3) / 2, d = [], p = [], b = []; c < r3 / 2; ) {
                    for (u = e5(o3), s = o3, a = 0; s <= n3; s += f, a++) d[a] = s;
                    for (l2 = d.length, s = 1; s < l2 - 1; s++) u += (s % 2 != 0 ? 4 : 2) * e5(d[s]);
                    u = f / 3 * (u + e5(n3)), b[c] = u, f /= 2, c++;
                  }
                  for (i3 = b.length, l2 = 1; 1 !== i3; ) {
                    for (s = 0; s < i3 - 1; s++) p[s] = (t3.pow(4, l2) * b[s + 1] - b[s]) / (t3.pow(4, l2) - 1);
                    i3 = p.length, b = p, p = [], l2++;
                  }
                  return b;
                }, richardson: function(e5, o3, n3, r3) {
                  function l2(e6, t4) {
                    for (var o4, n4 = 0, r4 = e6.length; n4 < r4; n4++) e6[n4] === t4 && (o4 = n4);
                    return o4;
                  }
                  for (var i3, s, a, u, c, f = t3.abs(n3 - e5[l2(e5, n3) + 1]), d = 0, p = [], b = []; r3 >= f; ) i3 = l2(e5, n3 + r3), s = l2(e5, n3), p[d] = (o3[i3] - 2 * o3[s] + o3[2 * s - i3]) / (r3 * r3), r3 /= 2, d++;
                  for (u = p.length, a = 1; 1 != u; ) {
                    for (c = 0; c < u - 1; c++) b[c] = (t3.pow(4, a) * p[c + 1] - p[c]) / (t3.pow(4, a) - 1);
                    u = b.length, p = b, b = [], a++;
                  }
                  return p;
                }, simpson: function(e5, t4, o3, n3) {
                  for (var r3, l2 = (o3 - t4) / n3, i3 = e5(t4), s = [], a = t4, u = 0, c = 1; a <= o3; a += l2, u++) s[u] = a;
                  for (r3 = s.length; c < r3 - 1; c++) i3 += (c % 2 != 0 ? 4 : 2) * e5(s[c]);
                  return l2 / 3 * (i3 + e5(o3));
                }, hermite: function(e5, t4, o3, n3) {
                  for (var r3, l2 = e5.length, i3 = 0, s = 0, a = [], u = [], c = [], f = []; s < l2; s++) {
                    for (a[s] = 1, r3 = 0; r3 < l2; r3++) s != r3 && (a[s] *= (n3 - e5[r3]) / (e5[s] - e5[r3]));
                    for (u[s] = 0, r3 = 0; r3 < l2; r3++) s != r3 && (u[s] += 1 / (e5[s] - e5[r3]));
                    c[s] = (1 - 2 * (n3 - e5[s]) * u[s]) * (a[s] * a[s]), f[s] = (n3 - e5[s]) * (a[s] * a[s]), i3 += c[s] * t4[s] + f[s] * o3[s];
                  }
                  return i3;
                }, lagrange: function(e5, t4, o3) {
                  for (var n3, r3, l2 = 0, i3 = 0, s = e5.length; i3 < s; i3++) {
                    for (r3 = t4[i3], n3 = 0; n3 < s; n3++) i3 != n3 && (r3 *= (o3 - e5[n3]) / (e5[i3] - e5[n3]));
                    l2 += r3;
                  }
                  return l2;
                }, cubic_spline: function(t4, o3, n3) {
                  for (var r3, l2, i3 = t4.length, s = 0, a = [], u = [], c = [], f = [], d = [], p = []; s < i3 - 1; s++) f[s] = t4[s + 1] - t4[s];
                  for (c[0] = 0, s = 1; s < i3 - 1; s++) c[s] = 3 / f[s] * (o3[s + 1] - o3[s]) - 3 / f[s - 1] * (o3[s] - o3[s - 1]);
                  for (s = 1; s < i3 - 1; s++) a[s] = [], u[s] = [], a[s][s - 1] = f[s - 1], a[s][s] = 2 * (f[s - 1] + f[s]), a[s][s + 1] = f[s], u[s][0] = c[s];
                  for (l2 = e4.multiply(e4.inv(a), u), r3 = 0; r3 < i3 - 1; r3++) d[r3] = (o3[r3 + 1] - o3[r3]) / f[r3] - f[r3] * (l2[r3 + 1][0] + 2 * l2[r3][0]) / 3, p[r3] = (l2[r3 + 1][0] - l2[r3][0]) / (3 * f[r3]);
                  for (r3 = 0; r3 < i3 && !(t4[r3] > n3); r3++) ;
                  return o3[r3 -= 1] + (n3 - t4[r3]) * d[r3] + e4.sq(n3 - t4[r3]) * l2[r3] + (n3 - t4[r3]) * e4.sq(n3 - t4[r3]) * p[r3];
                }, gauss_quadrature: function() {
                  throw new Error("gauss_quadrature not yet implemented");
                }, PCA: function(t4) {
                  var o3, n3, r3, l2, i3, s = t4.length, a = t4[0].length, u = 0, c = [], f = [], d = [], p = [], b = [], j = [], h = [];
                  for (u = 0; u < s; u++) c[u] = e4.sum(t4[u]) / a;
                  for (u = 0; u < a; u++) for (b[u] = [], o3 = 0; o3 < s; o3++) b[u][o3] = t4[o3][u] - c[o3];
                  for (b = e4.transpose(b), u = 0; u < s; u++) for (j[u] = [], o3 = 0; o3 < s; o3++) j[u][o3] = e4.dot([b[u]], [b[o3]]) / (a - 1);
                  for (i3 = (r3 = e4.jacobi(j))[0], f = r3[1], h = e4.transpose(i3), u = 0; u < f.length; u++) for (o3 = u; o3 < f.length; o3++) f[u] < f[o3] && (n3 = f[u], f[u] = f[o3], f[o3] = n3, d = h[u], h[u] = h[o3], h[o3] = d);
                  for (l2 = e4.transpose(b), u = 0; u < s; u++) for (p[u] = [], o3 = 0; o3 < l2.length; o3++) p[u][o3] = e4.dot([h[u]], [l2[o3]]);
                  return [t4, f, h, p];
                } }), function(t4) {
                  for (var o3 = 0; o3 < t4.length; o3++) !function(t5) {
                    e4.fn[t5] = function(o4, n3) {
                      var r3 = this;
                      return n3 ? (setTimeout(function() {
                        n3.call(r3, e4.fn[t5].call(r3, o4));
                      }, 15), this) : "number" == typeof e4[t5](this, o4) ? e4[t5](this, o4) : e4(e4[t5](this, o4));
                    };
                  }(t4[o3]);
                }("add divide multiply subtract dot pow exp log abs norm angle".split(" "));
              }(t2, Math), function(e4, t3) {
                var o2 = [].slice, n2 = e4.utils.isNumber, r2 = e4.utils.isArray;
                function l(e5, o3, n3, r3) {
                  if (e5 > 1 || n3 > 1 || e5 <= 0 || n3 <= 0) throw new Error("Proportions should be greater than 0 and less than 1");
                  var l2 = (e5 * o3 + n3 * r3) / (o3 + r3);
                  return (e5 - n3) / t3.sqrt(l2 * (1 - l2) * (1 / o3 + 1 / r3));
                }
                e4.extend({ zscore: function() {
                  var t4 = o2.call(arguments);
                  return n2(t4[1]) ? (t4[0] - t4[1]) / t4[2] : (t4[0] - e4.mean(t4[1])) / e4.stdev(t4[1], t4[2]);
                }, ztest: function() {
                  var n3, l2 = o2.call(arguments);
                  return r2(l2[1]) ? (n3 = e4.zscore(l2[0], l2[1], l2[3]), 1 === l2[2] ? e4.normal.cdf(-t3.abs(n3), 0, 1) : 2 * e4.normal.cdf(-t3.abs(n3), 0, 1)) : l2.length > 2 ? (n3 = e4.zscore(l2[0], l2[1], l2[2]), 1 === l2[3] ? e4.normal.cdf(-t3.abs(n3), 0, 1) : 2 * e4.normal.cdf(-t3.abs(n3), 0, 1)) : (n3 = l2[0], 1 === l2[1] ? e4.normal.cdf(-t3.abs(n3), 0, 1) : 2 * e4.normal.cdf(-t3.abs(n3), 0, 1));
                } }), e4.extend(e4.fn, { zscore: function(e5, t4) {
                  return (e5 - this.mean()) / this.stdev(t4);
                }, ztest: function(o3, n3, r3) {
                  var l2 = t3.abs(this.zscore(o3, r3));
                  return 1 === n3 ? e4.normal.cdf(-l2, 0, 1) : 2 * e4.normal.cdf(-l2, 0, 1);
                } }), e4.extend({ tscore: function() {
                  var n3 = o2.call(arguments);
                  return 4 === n3.length ? (n3[0] - n3[1]) / (n3[2] / t3.sqrt(n3[3])) : (n3[0] - e4.mean(n3[1])) / (e4.stdev(n3[1], true) / t3.sqrt(n3[1].length));
                }, ttest: function() {
                  var r3, l2 = o2.call(arguments);
                  return 5 === l2.length ? (r3 = t3.abs(e4.tscore(l2[0], l2[1], l2[2], l2[3])), 1 === l2[4] ? e4.studentt.cdf(-r3, l2[3] - 1) : 2 * e4.studentt.cdf(-r3, l2[3] - 1)) : n2(l2[1]) ? (r3 = t3.abs(l2[0]), 1 == l2[2] ? e4.studentt.cdf(-r3, l2[1] - 1) : 2 * e4.studentt.cdf(-r3, l2[1] - 1)) : (r3 = t3.abs(e4.tscore(l2[0], l2[1])), 1 == l2[2] ? e4.studentt.cdf(-r3, l2[1].length - 1) : 2 * e4.studentt.cdf(-r3, l2[1].length - 1));
                } }), e4.extend(e4.fn, { tscore: function(e5) {
                  return (e5 - this.mean()) / (this.stdev(true) / t3.sqrt(this.cols()));
                }, ttest: function(o3, n3) {
                  return 1 === n3 ? 1 - e4.studentt.cdf(t3.abs(this.tscore(o3)), this.cols() - 1) : 2 * e4.studentt.cdf(-t3.abs(this.tscore(o3)), this.cols() - 1);
                } }), e4.extend({ anovafscore: function() {
                  var n3, r3, l2, i2, s, a, u, c, f = o2.call(arguments);
                  if (1 === f.length) {
                    for (s = new Array(f[0].length), u = 0; u < f[0].length; u++) s[u] = f[0][u];
                    f = s;
                  }
                  for (r3 = new Array(), u = 0; u < f.length; u++) r3 = r3.concat(f[u]);
                  for (l2 = e4.mean(r3), n3 = 0, u = 0; u < f.length; u++) n3 += f[u].length * t3.pow(e4.mean(f[u]) - l2, 2);
                  for (n3 /= f.length - 1, a = 0, u = 0; u < f.length; u++) for (i2 = e4.mean(f[u]), c = 0; c < f[u].length; c++) a += t3.pow(f[u][c] - i2, 2);
                  return n3 / (a / (r3.length - f.length));
                }, anovaftest: function() {
                  var t4, r3, l2, i2, s = o2.call(arguments);
                  if (n2(s[0])) return 1 - e4.centralF.cdf(s[0], s[1], s[2]);
                  var a = e4.anovafscore(s);
                  for (t4 = s.length - 1, l2 = 0, i2 = 0; i2 < s.length; i2++) l2 += s[i2].length;
                  return r3 = l2 - t4 - 1, 1 - e4.centralF.cdf(a, t4, r3);
                }, ftest: function(t4, o3, n3) {
                  return 1 - e4.centralF.cdf(t4, o3, n3);
                } }), e4.extend(e4.fn, { anovafscore: function() {
                  return e4.anovafscore(this.toArray());
                }, anovaftes: function() {
                  var t4, o3 = 0;
                  for (t4 = 0; t4 < this.length; t4++) o3 += this[t4].length;
                  return e4.ftest(this.anovafscore(), this.length - 1, o3 - this.length);
                } }), e4.extend({ qscore: function() {
                  var r3, l2, i2, s, a, u = o2.call(arguments);
                  return n2(u[0]) ? (r3 = u[0], l2 = u[1], i2 = u[2], s = u[3], a = u[4]) : (r3 = e4.mean(u[0]), l2 = e4.mean(u[1]), i2 = u[0].length, s = u[1].length, a = u[2]), t3.abs(r3 - l2) / (a * t3.sqrt((1 / i2 + 1 / s) / 2));
                }, qtest: function() {
                  var t4, n3 = o2.call(arguments);
                  3 === n3.length ? (t4 = n3[0], n3 = n3.slice(1)) : 7 === n3.length ? (t4 = e4.qscore(n3[0], n3[1], n3[2], n3[3], n3[4]), n3 = n3.slice(5)) : (t4 = e4.qscore(n3[0], n3[1], n3[2]), n3 = n3.slice(3));
                  var r3 = n3[0], l2 = n3[1];
                  return 1 - e4.tukey.cdf(t4, l2, r3 - l2);
                }, tukeyhsd: function(t4) {
                  for (var o3 = e4.pooledstdev(t4), n3 = t4.map(function(t5) {
                    return e4.mean(t5);
                  }), r3 = t4.reduce(function(e5, t5) {
                    return e5 + t5.length;
                  }, 0), l2 = [], i2 = 0; i2 < t4.length; ++i2) for (var s = i2 + 1; s < t4.length; ++s) {
                    var a = e4.qtest(n3[i2], n3[s], t4[i2].length, t4[s].length, o3, r3, t4.length);
                    l2.push([[i2, s], a]);
                  }
                  return l2;
                } }), e4.extend({ normalci: function() {
                  var n3, r3 = o2.call(arguments), l2 = new Array(2);
                  return n3 = 4 === r3.length ? t3.abs(e4.normal.inv(r3[1] / 2, 0, 1) * r3[2] / t3.sqrt(r3[3])) : t3.abs(e4.normal.inv(r3[1] / 2, 0, 1) * e4.stdev(r3[2]) / t3.sqrt(r3[2].length)), l2[0] = r3[0] - n3, l2[1] = r3[0] + n3, l2;
                }, tci: function() {
                  var n3, r3 = o2.call(arguments), l2 = new Array(2);
                  return n3 = 4 === r3.length ? t3.abs(e4.studentt.inv(r3[1] / 2, r3[3] - 1) * r3[2] / t3.sqrt(r3[3])) : t3.abs(e4.studentt.inv(r3[1] / 2, r3[2].length - 1) * e4.stdev(r3[2], true) / t3.sqrt(r3[2].length)), l2[0] = r3[0] - n3, l2[1] = r3[0] + n3, l2;
                }, significant: function(e5, t4) {
                  return e5 < t4;
                } }), e4.extend(e4.fn, { normalci: function(t4, o3) {
                  return e4.normalci(t4, o3, this.toArray());
                }, tci: function(t4, o3) {
                  return e4.tci(t4, o3, this.toArray());
                } }), e4.extend(e4.fn, { oneSidedDifferenceOfProportions: function(t4, o3, n3, r3) {
                  var i2 = l(t4, o3, n3, r3);
                  return e4.ztest(i2, 1);
                }, twoSidedDifferenceOfProportions: function(t4, o3, n3, r3) {
                  var i2 = l(t4, o3, n3, r3);
                  return e4.ztest(i2, 2);
                } });
              }(t2, Math), t2.models = /* @__PURE__ */ function() {
                function e4(e5, o2) {
                  var n2 = e5.length, r2 = o2[0].length - 1, l = n2 - r2 - 1, i2 = t2.lstsq(o2, e5), s = t2.multiply(o2, i2.map(function(e6) {
                    return [e6];
                  })).map(function(e6) {
                    return e6[0];
                  }), a = t2.subtract(e5, s), u = t2.mean(e5), c = t2.sum(s.map(function(e6) {
                    return Math.pow(e6 - u, 2);
                  })), f = t2.sum(e5.map(function(e6, t3) {
                    return Math.pow(e6 - s[t3], 2);
                  })), d = c + f;
                  return { exog: o2, endog: e5, nobs: n2, df_model: r2, df_resid: l, coef: i2, predict: s, resid: a, ybar: u, SST: d, SSE: c, SSR: f, R2: c / d };
                }
                return { ols: function(o2, n2) {
                  var r2 = e4(o2, n2), l = function(o3) {
                    var n3, r3, l2 = (n3 = o3.exog, r3 = n3[0].length, t2.arange(r3).map(function(o4) {
                      var l3 = t2.arange(r3).filter(function(e5) {
                        return e5 !== o4;
                      });
                      return e4(t2.col(n3, o4).map(function(e5) {
                        return e5[0];
                      }), t2.col(n3, l3));
                    })), i3 = Math.sqrt(o3.SSR / o3.df_resid), s2 = l2.map(function(e5) {
                      var t3 = e5.SST, o4 = e5.R2;
                      return i3 / Math.sqrt(t3 * (1 - o4));
                    }), a = o3.coef.map(function(e5, t3) {
                      return (e5 - 0) / s2[t3];
                    }), u = a.map(function(e5) {
                      var n4 = t2.studentt.cdf(e5, o3.df_resid);
                      return 2 * (n4 > 0.5 ? 1 - n4 : n4);
                    }), c = t2.studentt.inv(0.975, o3.df_resid), f = o3.coef.map(function(e5, t3) {
                      var o4 = c * s2[t3];
                      return [e5 - o4, e5 + o4];
                    });
                    return { se: s2, t: a, p: u, sigmaHat: i3, interval95: f };
                  }(r2), i2 = function(e5) {
                    var o3, n3, r3, l2 = e5.R2 / e5.df_model / ((1 - e5.R2) / e5.df_resid);
                    return { F_statistic: l2, pvalue: 1 - (o3 = l2, n3 = e5.df_model, r3 = e5.df_resid, t2.beta.cdf(o3 / (r3 / n3 + o3), n3 / 2, r3 / 2)) };
                  }(r2), s = 1 - (1 - r2.R2) * ((r2.nobs - 1) / r2.df_resid);
                  return r2.t = l, r2.f = i2, r2.adjust_R2 = s, r2;
                } };
              }(), t2.extend({ buildxmatrix: function() {
                for (var e4 = new Array(arguments.length), o2 = 0; o2 < arguments.length; o2++) e4[o2] = [1].concat(arguments[o2]);
                return t2(e4);
              }, builddxmatrix: function() {
                for (var e4 = new Array(arguments[0].length), o2 = 0; o2 < arguments[0].length; o2++) e4[o2] = [1].concat(arguments[0][o2]);
                return t2(e4);
              }, buildjxmatrix: function(e4) {
                for (var o2 = new Array(e4.length), n2 = 0; n2 < e4.length; n2++) o2[n2] = e4[n2];
                return t2.builddxmatrix(o2);
              }, buildymatrix: function(e4) {
                return t2(e4).transpose();
              }, buildjymatrix: function(e4) {
                return e4.transpose();
              }, matrixmult: function(e4, o2) {
                var n2, r2, l, i2, s;
                if (e4.cols() == o2.rows()) {
                  if (o2.rows() > 1) {
                    for (i2 = [], n2 = 0; n2 < e4.rows(); n2++) for (i2[n2] = [], r2 = 0; r2 < o2.cols(); r2++) {
                      for (s = 0, l = 0; l < e4.cols(); l++) s += e4.toArray()[n2][l] * o2.toArray()[l][r2];
                      i2[n2][r2] = s;
                    }
                    return t2(i2);
                  }
                  for (i2 = [], n2 = 0; n2 < e4.rows(); n2++) for (i2[n2] = [], r2 = 0; r2 < o2.cols(); r2++) {
                    for (s = 0, l = 0; l < e4.cols(); l++) s += e4.toArray()[n2][l] * o2.toArray()[r2];
                    i2[n2][r2] = s;
                  }
                  return t2(i2);
                }
              }, regress: function(e4, o2) {
                var n2 = t2.xtranspxinv(e4), r2 = e4.transpose(), l = t2.matrixmult(t2(n2), r2);
                return t2.matrixmult(l, o2);
              }, regresst: function(e4, o2, n2) {
                var r2 = t2.regress(e4, o2), l = { anova: {} }, i2 = t2.jMatYBar(e4, r2);
                l.yBar = i2;
                var s = o2.mean();
                l.anova.residuals = t2.residuals(o2, i2), l.anova.ssr = t2.ssr(i2, s), l.anova.msr = l.anova.ssr / (e4[0].length - 1), l.anova.sse = t2.sse(o2, i2), l.anova.mse = l.anova.sse / (o2.length - (e4[0].length - 1) - 1), l.anova.sst = t2.sst(o2, s), l.anova.mst = l.anova.sst / (o2.length - 1), l.anova.r2 = 1 - l.anova.sse / l.anova.sst, l.anova.r2 < 0 && (l.anova.r2 = 0), l.anova.fratio = l.anova.msr / l.anova.mse, l.anova.pvalue = t2.anovaftest(l.anova.fratio, e4[0].length - 1, o2.length - (e4[0].length - 1) - 1), l.anova.rmse = Math.sqrt(l.anova.mse), l.anova.r2adj = 1 - l.anova.mse / l.anova.mst, l.anova.r2adj < 0 && (l.anova.r2adj = 0), l.stats = new Array(e4[0].length);
                for (var a, u, c, f = t2.xtranspxinv(e4), d = 0; d < r2.length; d++) a = Math.sqrt(l.anova.mse * Math.abs(f[d][d])), u = Math.abs(r2[d] / a), c = t2.ttest(u, o2.length - e4[0].length - 1, n2), l.stats[d] = [r2[d], a, u, c];
                return l.regress = r2, l;
              }, xtranspx: function(e4) {
                return t2.matrixmult(e4.transpose(), e4);
              }, xtranspxinv: function(e4) {
                var o2 = t2.matrixmult(e4.transpose(), e4);
                return t2.inv(o2);
              }, jMatYBar: function(e4, o2) {
                var n2 = t2.matrixmult(e4, o2);
                return new t2(n2);
              }, residuals: function(e4, o2) {
                return t2.matrixsubtract(e4, o2);
              }, ssr: function(e4, t3) {
                for (var o2 = 0, n2 = 0; n2 < e4.length; n2++) o2 += Math.pow(e4[n2] - t3, 2);
                return o2;
              }, sse: function(e4, t3) {
                for (var o2 = 0, n2 = 0; n2 < e4.length; n2++) o2 += Math.pow(e4[n2] - t3[n2], 2);
                return o2;
              }, sst: function(e4, t3) {
                for (var o2 = 0, n2 = 0; n2 < e4.length; n2++) o2 += Math.pow(e4[n2] - t3, 2);
                return o2;
              }, matrixsubtract: function(e4, o2) {
                for (var n2 = new Array(e4.length), r2 = 0; r2 < e4.length; r2++) {
                  n2[r2] = new Array(e4[r2].length);
                  for (var l = 0; l < e4[r2].length; l++) n2[r2][l] = e4[r2][l] - o2[r2][l];
                }
                return t2(n2);
              } }), t2.jStat = t2, t2);
            }, 960: function(e3, t2, o2) {
              const n2 = o2(592);
              e3.exports = function(e4) {
                function t3(e5, t4) {
                  const o4 = t4.split(".");
                  let n3 = e5;
                  for (const e6 of o4) {
                    if (null == n3) return;
                    n3 = n3[e6];
                  }
                  return n3;
                }
                for (let o4 = 0; o4 < Object.keys(n2).length; o4++) {
                  let r3, l2 = Object.keys(n2)[o4], i3 = [];
                  if ("object" == typeof n2[l2]) {
                    i3 = Object.keys(n2[l2]), r3 = Object.values(n2[l2]);
                    for (let e5 = 0; e5 < r3.length; e5++) if ("object" == typeof r3[e5]) {
                      let t4 = i3[e5];
                      n2[l2][t4] && (i3 = [...i3, ...Object.keys(n2[l2][t4]).map((e6) => t4 + "." + e6)], i3.splice(i3.indexOf(t4), 1));
                    }
                  }
                  if (i3.length < 1) e4[l2] = n2[l2];
                  else for (let o5 = 0; o5 < i3.length; o5++) "function" == typeof t3(n2[l2], i3[o5]) && (e4[l2] = t3(n2[l2], i3[o5]));
                }
                let o3 = function(e5) {
                  return "number" == typeof e5 && (e5 = parseInt(e5)), e5;
                }, r2 = null, l = null, i2 = null;
                e4.TABLE = function() {
                  return i2;
                }, e4.COLUMN = e4.COL = function() {
                  return i2.tracking && i2.tracking.push(u.getColumnNameFromCoords(o3(r2), o3(l))), o3(r2) + 1;
                }, e4.ROW = function() {
                  return i2.tracking && i2.tracking.push(u.getColumnNameFromCoords(o3(r2), o3(l))), o3(l) + 1;
                }, e4.CELL = function() {
                  return u.getColumnNameFromCoords(r2, l);
                }, e4.VALUE = function(e5, t4, n3) {
                  return i2.getValueFromCoords(o3(e5) - 1, o3(t4) - 1, n3);
                }, e4.THISROWCELL = function(e5) {
                  return i2.getValueFromCoords(o3(e5) - 1, o3(l));
                };
                const s = function(e5, t4) {
                  for (let o4 = 0; o4 < e5.length; o4++) {
                    let n3 = u.getTokensFromRange(e5[o4]);
                    t4 = t4.replace(e5[o4], "[" + n3.join(",") + "]");
                  }
                  return t4;
                }, a = function(e5) {
                  return "string" == typeof e5 && (e5 = e5.trim()), !isNaN(e5) && null !== e5 && "" !== e5;
                }, u = function(e5, t4, o4, n3, u2) {
                  i2 = u2, r2 = o4, l = n3;
                  let c = "", f = {};
                  if (t4) if (t4.size) {
                    let e6, o5 = null;
                    t4.forEach(function(t5, o6) {
                      e6 = o6.replace(/!/g, "."), -1 !== e6.indexOf(".") && (e6 = e6.split("."), f[e6[0]] = true);
                    }), e6 = Object.keys(f);
                    for (let t5 = 0; t5 < e6.length; t5++) c += "var " + e6[t5] + " = {};";
                    t4.forEach(function(n4, r3) {
                      e6 = r3.replace(/!/g, "."), null === n4 || a(n4) || (o5 = n4.match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g), o5 && o5.length && (n4 = updateRanges(o5, n4))), e6.indexOf(".") > 0 ? c += e6 + " = " + t4.get(r3) + ";\n" : c += "var " + e6 + " = " + n4 + ";\n";
                    });
                  } else {
                    let e6 = Object.keys(t4);
                    if (e6.length) {
                      let o5, n4 = {};
                      for (let t5 = 0; t5 < e6.length; t5++) if (o5 = e6[t5].replace(/\!/g, "."), o5.indexOf(".") > 0) {
                        let e7 = e7.split(".");
                        n4[e7[0]] = {};
                      }
                      o5 = Object.keys(n4);
                      for (let e7 = 0; e7 < o5.length; e7++) c += "var " + o5[e7] + " = {};";
                      for (let n5 = 0; n5 < e6.length; n5++) {
                        if (o5 = e6[n5].replace(/!/g, "."), null !== t4[e6[n5]] && !a(t4[e6[n5]])) {
                          let o6 = t4[e6[n5]].match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g);
                          o6 && o6.length && (t4[e6[n5]] = s(o6, t4[e6[n5]]));
                        }
                        o5.indexOf(".") > 0 ? c += o5 + " = " + t4[e6[n5]] + ";\n" : c += "var " + o5 + " = " + t4[e6[n5]] + ";\n";
                      }
                    }
                  }
                  let d = (e5 = function(e6, t5) {
                    let o5 = "", n4 = 0, r3 = ["=", "!", ">", "<"];
                    for (let t6 = 0; t6 < e6.length; t6++) '"' === e6[t6] && (n4 = 0 === n4 ? 1 : 0), 1 === n4 ? o5 += e6[t6] : (o5 += e6[t6].toUpperCase(), t6 > 0 && "=" === e6[t6] && -1 === r3.indexOf(e6[t6 - 1]) && -1 === r3.indexOf(e6[t6 + 1]) && (o5 += "="));
                    return o5 = o5.replace(/\^/g, "**"), o5 = o5.replace(/<>/g, "!="), o5 = o5.replace(/&/g, "+"), o5 = o5.replace(/\$/g, ""), o5;
                  }(e5 = (e5 = e5.replace(/\$/g, "")).replace(/!/g, "."))).match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g);
                  d && d.length && (e5 = s(d, e5));
                  let p = new Function(c + "; return " + e5)();
                  return null === p && (p = 0), p;
                };
                return u.getColumnNameFromCoords = function(e5, t4) {
                  return n3 = "", (o4 = parseInt(e5)) > 701 ? (n3 += String.fromCharCode(64 + parseInt(o4 / 676)), n3 += String.fromCharCode(64 + parseInt(o4 % 676 / 26))) : o4 > 25 && (n3 += String.fromCharCode(64 + parseInt(o4 / 26))), n3 + String.fromCharCode(65 + o4 % 26) + (parseInt(t4) + 1);
                  var o4, n3;
                }, u.getCoordsFromColumnName = function(e5) {
                  var t4 = /^[a-zA-Z]+/.exec(e5);
                  if (t4) {
                    for (var o4 = 0, n3 = 0; n3 < t4[0].length; n3++) o4 += parseInt(t4[0].charCodeAt(n3) - 64) * Math.pow(26, t4[0].length - 1 - n3);
                    --o4 < 0 && (o4 = 0);
                    var r3 = parseInt(/[0-9]+$/.exec(e5)) || null;
                    return r3 > 0 && r3--, [o4, r3];
                  }
                }, u.getRangeFromTokens = function(e5) {
                  e5 = e5.filter(function(e6) {
                    return "#REF!" != e6;
                  });
                  for (var t4 = "", o4 = "", n3 = 0; n3 < e5.length; n3++) e5[n3].indexOf(".") >= 0 ? t4 = "." : e5[n3].indexOf("!") >= 0 && (t4 = "!"), t4 && (o4 = e5[n3].split(t4), e5[n3] = o4[1], o4 = o4[0] + t4);
                  return e5.sort(function(e6, t5) {
                    var o5 = Helpers.getCoordsFromColumnName(e6), n4 = Helpers.getCoordsFromColumnName(t5);
                    return o5[1] > n4[1] ? 1 : o5[1] < n4[1] ? -1 : o5[0] > n4[0] ? 1 : o5[0] < n4[0] ? -1 : 0;
                  }), e5.length ? o4 + (e5[0] + ":") + e5[e5.length - 1] : "#REF!";
                }, u.getTokensFromRange = function(e5) {
                  if (e5.indexOf(".") > 0) {
                    var t4 = e5.split(".");
                    e5 = t4[1], t4 = t4[0] + ".";
                  } else e5.indexOf("!") > 0 ? (t4 = e5.split("!"), e5 = t4[1], t4 = t4[0] + "!") : t4 = "";
                  e5 = e5.split(":");
                  var o4 = u.getCoordsFromColumnName(e5[0]), n3 = u.getCoordsFromColumnName(e5[1]);
                  if (o4[0] <= n3[0]) var r3 = o4[0], l2 = n3[0];
                  else r3 = n3[0], l2 = o4[0];
                  if (null === o4[1] && null == n3[1]) for (var i3 = null, s2 = null, a2 = Object.keys(vars), c = 0; c < a2.length; c++) {
                    var f = u.getCoordsFromColumnName(a2[c]);
                    f[0] === o4[0] && (null === i3 || f[1] < i3) && (i3 = f[1]), f[0] === n3[0] && (null === s2 || f[1] > s2) && (s2 = f[1]);
                  }
                  else o4[1] <= n3[1] ? (i3 = o4[1], s2 = n3[1]) : (i3 = n3[1], s2 = o4[1]);
                  for (var d = [], p = i3; p <= s2; p++) {
                    var b = [];
                    for (c = r3; c <= l2; c++) b.push(t4 + u.getColumnNameFromCoords(c, p));
                    d.push(b);
                  }
                  return d;
                }, u.setFormula = function(t4) {
                  let o4 = Object.keys(t4);
                  for (let n3 = 0; n3 < o4.length; n3++) "function" == typeof t4[o4[n3]] && (e4[o4[n3]] = t4[o4[n3]]);
                }, u.basic = true, u;
              }("undefined" == typeof window ? o2.g : window);
            }, 592: function(e3, t2, o2) {
              "use strict";
              var n2 = o2(162), r2 = o2(765);
              const l = new Error("#NULL!"), i2 = new Error("#DIV/0!"), s = new Error("#VALUE!"), a = new Error("#REF!"), u = new Error("#NAME?"), c = new Error("#NUM!"), f = new Error("#N/A"), d = new Error("#ERROR!"), p = new Error("#GETTING_DATA");
              var b = Object.freeze({ __proto__: null, data: p, div0: i2, error: d, na: f, name: u, nil: l, num: c, ref: a, value: s });
              function j(e4) {
                const t3 = [];
                return h(e4, (e5) => {
                  t3.push(e5);
                }), t3;
              }
              function h(e4, t3) {
                let o3 = -1;
                const n3 = e4.length;
                for (; ++o3 < n3 && false !== t3(e4[o3], o3, e4); ) ;
                return e4;
              }
              function g(e4) {
                let t3, o3 = e4.length;
                for (; o3--; ) if (t3 = e4[o3], "number" != typeof t3) if (true !== t3) if (false !== t3) {
                  if ("string" == typeof t3) {
                    const n3 = F(t3);
                    e4[o3] = n3 instanceof Error ? 0 : n3;
                  }
                } else e4[o3] = 0;
                else e4[o3] = 1;
                return e4;
              }
              function m(e4, t3) {
                if (!e4) return s;
                e4.every((e5) => Array.isArray(e5)) && 0 !== e4.length || (e4 = [[...e4]]), e4.map((t4, o4) => {
                  t4.map((t5, n4) => {
                    t5 || (e4[o4][n4] = 0);
                  });
                });
                const o3 = e4.reduce((t4, o4, n4) => o4.length > e4[t4].length ? n4 : t4, 0), n3 = e4[o3].length;
                return e4.map((e5) => [...e5, ...Array(n3 - e5.length).fill(t3 || 0)]);
              }
              function v() {
                let e4;
                if (1 === arguments.length) {
                  const o3 = arguments[0];
                  e4 = null != (t3 = o3) && "number" == typeof t3.length && "string" != typeof t3 ? j.apply(null, arguments) : [o3];
                } else e4 = Array.from(arguments);
                for (var t3; !C(e4); ) e4 = y2(e4);
                return e4;
              }
              function y2(e4) {
                return e4 && e4.reduce ? e4.reduce((e5, t3) => {
                  const o3 = Array.isArray(e5), n3 = Array.isArray(t3);
                  return o3 && n3 ? e5.concat(t3) : o3 ? (e5.push(t3), e5) : n3 ? [e5].concat(t3) : [e5, t3];
                }) : [e4];
              }
              function C(e4) {
                if (!e4) return false;
                for (let t3 = 0; t3 < e4.length; ++t3) if (Array.isArray(e4[t3])) return false;
                return true;
              }
              function x2(e4, t3) {
                return t3 = t3 || 1, e4 && "function" == typeof e4.slice ? e4.slice(t3) : e4;
              }
              function w(e4) {
                return e4 ? e4[0].map((t3, o3) => e4.map((e5) => e5[o3])) : s;
              }
              function A(e4, t3) {
                let o3 = null;
                return h(e4, (e5, n3) => {
                  if (e5[0] === t3) return o3 = n3, false;
                }), null == o3 ? s : o3;
              }
              function E() {
                for (let e4 = 0; e4 < arguments.length; e4++) if (arguments[e4] instanceof Error) return arguments[e4];
              }
              function M() {
                let e4 = arguments.length;
                for (; e4--; ) if (arguments[e4] instanceof Error) return true;
                return false;
              }
              function I(e4) {
                const t3 = 1e14;
                return Math.round(e4 * t3) / t3;
              }
              function N() {
                return v.apply(null, arguments).filter((e4) => "number" == typeof e4);
              }
              function S(e4) {
                if ("boolean" == typeof e4) return e4;
                if (e4 instanceof Error) return e4;
                if ("number" == typeof e4) return 0 !== e4;
                if ("string" == typeof e4) {
                  const t3 = e4.toUpperCase();
                  if ("TRUE" === t3) return true;
                  if ("FALSE" === t3) return false;
                }
                return e4 instanceof Date && !isNaN(e4) || s;
              }
              function D(e4) {
                if (!isNaN(e4)) {
                  if (e4 instanceof Date) return new Date(e4);
                  const t3 = parseFloat(e4);
                  return t3 < 0 || t3 >= 2958466 ? c : function(e5) {
                    e5 < 60 && (e5 += 1);
                    const t4 = Math.floor(e5 - 25569), o3 = new Date(86400 * t4 * 1e3), n3 = e5 - Math.floor(e5) + 1e-7;
                    let r3 = Math.floor(86400 * n3);
                    const l2 = r3 % 60;
                    r3 -= l2;
                    const i3 = Math.floor(r3 / 3600), s2 = Math.floor(r3 / 60) % 60;
                    let a2 = o3.getUTCDate(), u2 = o3.getUTCMonth();
                    return e5 >= 60 && e5 < 61 && (a2 = 29, u2 = 1), new Date(o3.getUTCFullYear(), u2, a2, i3, s2, l2);
                  }(t3);
                }
                return "string" != typeof e4 || (e4 = /(\d{4})-(\d\d?)-(\d\d?)$/.test(e4) ? /* @__PURE__ */ new Date(e4 + "T00:00:00.000") : new Date(e4), isNaN(e4)) ? s : e4;
              }
              function T(e4) {
                let t3, o3 = e4.length;
                for (; o3--; ) {
                  if (t3 = D(e4[o3]), t3 === s) return t3;
                  e4[o3] = t3;
                }
                return e4;
              }
              function F(e4) {
                return e4 instanceof Error ? e4 : null == e4 ? 0 : ("boolean" == typeof e4 && (e4 = +e4), isNaN(e4) || "" === e4 ? s : parseFloat(e4));
              }
              function L(e4) {
                let t3, o3;
                if (!e4 || 0 === (t3 = e4.length)) return s;
                for (; t3--; ) {
                  if (e4[t3] instanceof Error) return e4[t3];
                  if (o3 = F(e4[t3]), o3 instanceof Error) return o3;
                  e4[t3] = o3;
                }
                return e4;
              }
              function R(e4) {
                return e4 instanceof Error ? e4 : null == e4 ? "" : e4.toString();
              }
              function O() {
                let e4 = arguments.length;
                for (; e4--; ) if ("string" == typeof arguments[e4]) return true;
                return false;
              }
              function k(e4) {
                return null != e4;
              }
              const H = "=", B = [">", ">=", "<", "<=", "=", "<>"], P = "operator", _ = "literal", V = [P, _], U = P, q = _;
              function z(e4, t3) {
                if (-1 === V.indexOf(t3)) throw new Error("Unsupported token type: " + t3);
                return { value: e4, type: t3 };
              }
              function Y(e4) {
                return function(e5) {
                  let t3 = "";
                  const o3 = [];
                  for (let n3 = 0; n3 < e5.length; n3++) {
                    const r3 = e5[n3];
                    0 === n3 && B.indexOf(r3) >= 0 ? o3.push(z(r3, U)) : t3 += r3;
                  }
                  return t3.length > 0 && o3.push(z(function(e6) {
                    return "string" != typeof e6 || /^\d+(\.\d+)?$/.test(e6) && (e6 = -1 === e6.indexOf(".") ? parseInt(e6, 10) : parseFloat(e6)), e6;
                  }(t3), q)), o3.length > 0 && o3[0].type !== U && o3.unshift(z(H, U)), o3;
                }(function(e5) {
                  const t3 = e5.length, o3 = [];
                  let n3 = 0, r3 = "", l2 = "";
                  for (; n3 < t3; ) {
                    const t4 = e5.charAt(n3);
                    switch (t4) {
                      case ">":
                      case "<":
                      case "=":
                        l2 += t4, r3.length > 0 && (o3.push(r3), r3 = "");
                        break;
                      default:
                        l2.length > 0 && (o3.push(l2), l2 = ""), r3 += t4;
                    }
                    n3++;
                  }
                  return r3.length > 0 && o3.push(r3), l2.length > 0 && o3.push(l2), o3;
                }(e4));
              }
              const W = function(e4) {
                const t3 = [];
                let o3;
                for (let n3 = 0; n3 < e4.length; n3++) {
                  const r3 = e4[n3];
                  switch (r3.type) {
                    case U:
                      o3 = r3.value;
                      break;
                    case q:
                      t3.push(r3.value);
                  }
                }
                return function(e5, t4) {
                  let o4 = false;
                  switch (t4) {
                    case ">":
                      o4 = e5[0] > e5[1];
                      break;
                    case ">=":
                      o4 = e5[0] >= e5[1];
                      break;
                    case "<":
                      o4 = e5[0] < e5[1];
                      break;
                    case "<=":
                      o4 = e5[0] <= e5[1];
                      break;
                    case "=":
                      o4 = e5[0] == e5[1];
                      break;
                    case "<>":
                      o4 = e5[0] != e5[1];
                  }
                  return o4;
                }(t3, o3);
              }, X = {};
              function G(e4) {
                return [s, a, i2, c, u, l].indexOf(e4) >= 0 || "number" == typeof e4 && (isNaN(e4) || !isFinite(e4));
              }
              function K(e4) {
                return G(e4) || e4 === f;
              }
              function $2(e4) {
                return true === e4 || false === e4;
              }
              function J(e4) {
                return "number" == typeof e4 && !isNaN(e4) && isFinite(e4);
              }
              function Q(e4) {
                return "string" == typeof e4;
              }
              function Z() {
                const e4 = [];
                for (let t3 = 0; t3 < arguments.length; ++t3) {
                  let o3 = false;
                  const n3 = arguments[t3];
                  for (let t4 = 0; t4 < e4.length && (o3 = e4[t4] === n3, !o3); ++t4) ;
                  o3 || e4.push(n3);
                }
                return e4;
              }
              function ee(e4, t3, o3, n3) {
                if (!t3 || !o3) return f;
                n3 = !(0 === n3 || false === n3);
                let r3 = f;
                const l2 = "number" == typeof e4;
                let i3 = false;
                for (let s2 = 0; s2 < t3.length; s2++) {
                  const u2 = t3[s2];
                  if (u2[0] === e4) {
                    r3 = o3 < u2.length + 1 ? u2[o3 - 1] : a;
                    break;
                  }
                  !i3 && (l2 && n3 && u2[0] <= e4 || n3 && "string" == typeof u2[0] && u2[0].localeCompare(e4) < 0) && (r3 = o3 < u2.length + 1 ? u2[o3 - 1] : a), l2 && u2[0] > e4 && (i3 = true);
                }
                return r3;
              }
              function te() {
                const e4 = v(arguments).filter(k);
                if (0 === e4.length) return i2;
                const t3 = E.apply(void 0, e4);
                if (t3) return t3;
                const o3 = N(e4), n3 = o3.length;
                let r3, l2 = 0, s2 = 0;
                for (let e5 = 0; e5 < n3; e5++) l2 += o3[e5], s2 += 1;
                return r3 = l2 / s2, isNaN(r3) && (r3 = c), r3;
              }
              function oe() {
                const e4 = v(arguments).filter(k);
                if (0 === e4.length) return i2;
                const t3 = E.apply(void 0, e4);
                if (t3) return t3;
                const o3 = e4, n3 = o3.length;
                let r3, l2 = 0, s2 = 0;
                for (let e5 = 0; e5 < n3; e5++) {
                  const t4 = o3[e5];
                  "number" == typeof t4 && (l2 += t4), true === t4 && l2++, null !== t4 && s2++;
                }
                return r3 = l2 / s2, isNaN(r3) && (r3 = c), r3;
              }
              X.TYPE = (e4) => {
                switch (e4) {
                  case l:
                    return 1;
                  case i2:
                    return 2;
                  case s:
                    return 3;
                  case a:
                    return 4;
                  case u:
                    return 5;
                  case c:
                    return 6;
                  case f:
                    return 7;
                  case p:
                    return 8;
                }
                return f;
              };
              const ne = { DIST: function(e4, t3, o3, r3, l2, i3) {
                return arguments.length < 4 ? s : (l2 = void 0 === l2 ? 0 : l2, i3 = void 0 === i3 ? 1 : i3, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), l2 = F(l2), i3 = F(i3)) ? s : (e4 = (e4 - l2) / (i3 - l2), r3 ? n2.beta.cdf(e4, t3, o3) : n2.beta.pdf(e4, t3, o3)));
              }, INV: (e4, t3, o3, r3, l2) => (r3 = void 0 === r3 ? 0 : r3, l2 = void 0 === l2 ? 1 : l2, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), r3 = F(r3), l2 = F(l2)) ? s : n2.beta.inv(e4, t3, o3) * (l2 - r3) + r3) }, re = { DIST: (e4, t3, o3, r3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3), r3 = F(r3)) ? s : r3 ? n2.binomial.cdf(e4, t3, o3) : n2.binomial.pdf(e4, t3, o3) };
              re.DIST.RANGE = (e4, t3, o3, n3) => {
                if (n3 = void 0 === n3 ? o3 : n3, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3))) return s;
                let r3 = 0;
                for (let l2 = o3; l2 <= n3; l2++) r3 += Ue(e4, l2) * Math.pow(t3, l2) * Math.pow(1 - t3, e4 - l2);
                return r3;
              }, re.INV = (e4, t3, o3) => {
                if (M(e4 = F(e4), t3 = F(t3), o3 = F(o3))) return s;
                let r3 = 0;
                for (; r3 <= e4; ) {
                  if (n2.binomial.cdf(r3, e4, t3) >= o3) return r3;
                  r3++;
                }
              };
              const le = { DIST: (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3)) ? s : o3 ? n2.chisquare.cdf(e4, t3) : n2.chisquare.pdf(e4, t3) };
              le.DIST.RT = (e4, t3) => !e4 | !t3 ? f : e4 < 1 || t3 > Math.pow(10, 10) ? c : "number" != typeof e4 || "number" != typeof t3 ? s : 1 - n2.chisquare.cdf(e4, t3), le.INV = (e4, t3) => M(e4 = F(e4), t3 = F(t3)) ? s : n2.chisquare.inv(e4, t3), le.INV.RT = (e4, t3) => !e4 | !t3 ? f : e4 < 0 || e4 > 1 || t3 < 1 || t3 > Math.pow(10, 10) ? c : "number" != typeof e4 || "number" != typeof t3 ? s : n2.chisquare.inv(1 - e4, t3), le.TEST = function(e4, t3) {
                if (2 !== arguments.length) return f;
                if (!(e4 instanceof Array && t3 instanceof Array)) return s;
                if (e4.length !== t3.length) return s;
                if (e4[0] && t3[0] && e4[0].length !== t3[0].length) return s;
                const o3 = e4.length;
                let n3, r3, l2;
                for (r3 = 0; r3 < o3; r3++) e4[r3] instanceof Array || (n3 = e4[r3], e4[r3] = [], e4[r3].push(n3)), t3[r3] instanceof Array || (n3 = t3[r3], t3[r3] = [], t3[r3].push(n3));
                const i3 = e4[0].length, a2 = 1 === i3 ? o3 - 1 : (o3 - 1) * (i3 - 1);
                let u2 = 0;
                const c2 = Math.PI;
                for (r3 = 0; r3 < o3; r3++) for (l2 = 0; l2 < i3; l2++) u2 += Math.pow(e4[r3][l2] - t3[r3][l2], 2) / t3[r3][l2];
                return Math.round(1e6 * function(e5, t4) {
                  let o4 = Math.exp(-0.5 * e5);
                  t4 % 2 == 1 && (o4 *= Math.sqrt(2 * e5 / c2));
                  let n4 = t4;
                  for (; n4 >= 2; ) o4 = o4 * e5 / n4, n4 -= 2;
                  let r4 = o4, l3 = t4;
                  for (; r4 > 1e-10 * o4; ) l3 += 2, r4 = r4 * e5 / l3, o4 += r4;
                  return 1 - o4;
                }(u2, a2)) / 1e6;
              };
              const ie = {};
              function se() {
                return N(v(arguments)).length;
              }
              function ae() {
                const e4 = v(arguments);
                return e4.length - ue(e4);
              }
              function ue() {
                const e4 = v(arguments);
                let t3, o3 = 0;
                for (let n3 = 0; n3 < e4.length; n3++) t3 = e4[n3], null != t3 && "" !== t3 || o3++;
                return o3;
              }
              ie.NORM = (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : n2.normalci(1, e4, t3, o3)[1] - 1, ie.T = (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : n2.tci(1, e4, t3, o3)[1] - 1;
              const ce = { P: (e4, t3) => {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                const o3 = n2.mean(e4), r3 = n2.mean(t3);
                let l2 = 0;
                const i3 = e4.length;
                for (let n3 = 0; n3 < i3; n3++) l2 += (e4[n3] - o3) * (t3[n3] - r3);
                return l2 / i3;
              }, S: (e4, t3) => M(e4 = L(v(e4)), t3 = L(v(t3))) ? s : n2.covariance(e4, t3) }, fe = { DIST: (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3)) ? s : o3 ? n2.exponential.cdf(e4, t3) : n2.exponential.pdf(e4, t3) }, de = {};
              function pe(e4, t3, o3) {
                if (M(e4 = F(e4), t3 = L(v(t3)), o3 = L(v(o3)))) return s;
                const r3 = n2.mean(o3), l2 = n2.mean(t3), i3 = o3.length;
                let a2 = 0, u2 = 0;
                for (let e5 = 0; e5 < i3; e5++) a2 += (o3[e5] - r3) * (t3[e5] - l2), u2 += Math.pow(o3[e5] - r3, 2);
                const c2 = a2 / u2;
                return l2 - c2 * r3 + c2 * e4;
              }
              function be(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 0 === e4 || parseInt(e4, 10) === e4 && e4 < 0 ? c : n2.gammafn(e4);
              }
              function je(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : n2.gammaln(e4);
              }
              de.DIST = (e4, t3, o3, r3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : r3 ? n2.centralF.cdf(e4, t3, o3) : n2.centralF.pdf(e4, t3, o3), de.DIST.RT = function(e4, t3, o3) {
                return 3 !== arguments.length ? f : e4 < 0 || t3 < 1 || o3 < 1 ? c : "number" != typeof e4 || "number" != typeof t3 || "number" != typeof o3 ? s : 1 - n2.centralF.cdf(e4, t3, o3);
              }, de.INV = (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : e4 <= 0 || e4 > 1 ? c : n2.centralF.inv(e4, t3, o3), de.INV.RT = function(e4, t3, o3) {
                return 3 !== arguments.length ? f : e4 < 0 || e4 > 1 || t3 < 1 || t3 > Math.pow(10, 10) || o3 < 1 || o3 > Math.pow(10, 10) ? c : "number" != typeof e4 || "number" != typeof t3 || "number" != typeof o3 ? s : n2.centralF.inv(1 - e4, t3, o3);
              }, de.TEST = (e4, t3) => {
                if (!e4 || !t3) return f;
                if (!(e4 instanceof Array && t3 instanceof Array)) return f;
                if (e4.length < 2 || t3.length < 2) return i2;
                const o3 = (e5, t4) => {
                  let o4 = 0;
                  for (let n4 = 0; n4 < e5.length; n4++) o4 += Math.pow(e5[n4] - t4, 2);
                  return o4;
                }, n3 = $e(e4) / e4.length, r3 = $e(t3) / t3.length;
                return o3(e4, n3) / (e4.length - 1) / (o3(t3, r3) / (t3.length - 1));
              }, be.DIST = function(e4, t3, o3, r3) {
                return 4 !== arguments.length ? f : e4 < 0 || t3 <= 0 || o3 <= 0 || "number" != typeof e4 || "number" != typeof t3 || "number" != typeof o3 ? s : r3 ? n2.gamma.cdf(e4, t3, o3, true) : n2.gamma.pdf(e4, t3, o3, false);
              }, be.INV = function(e4, t3, o3) {
                return 3 !== arguments.length ? f : e4 < 0 || e4 > 1 || t3 <= 0 || o3 <= 0 ? c : "number" != typeof e4 || "number" != typeof t3 || "number" != typeof o3 ? s : n2.gamma.inv(e4, t3, o3);
              }, je.PRECISE = function(e4) {
                return 1 !== arguments.length ? f : e4 <= 0 ? c : "number" != typeof e4 ? s : n2.gammaln(e4);
              };
              const he = {};
              function ge(e4, t3) {
                return M(e4 = L(v(e4)), t3 = F(t3)) ? e4 : t3 < 0 || e4.length < t3 ? s : e4.sort((e5, t4) => t4 - e5)[t3 - 1];
              }
              function me(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                const o3 = n2.mean(e4), r3 = n2.mean(t3), l2 = t3.length;
                let i3 = 0, a2 = 0;
                for (let n3 = 0; n3 < l2; n3++) i3 += (t3[n3] - r3) * (e4[n3] - o3), a2 += Math.pow(t3[n3] - r3, 2);
                const u2 = i3 / a2;
                return [u2, o3 - u2 * r3];
              }
              he.DIST = (e4, t3, o3, n3, r3) => {
                if (M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3))) return s;
                function l2(e5, t4, o4, n4) {
                  return Ue(o4, e5) * Ue(n4 - o4, t4 - e5) / Ue(n4, t4);
                }
                return r3 ? function(e5, t4, o4, n4) {
                  let r4 = 0;
                  for (let i3 = 0; i3 <= e5; i3++) r4 += l2(i3, t4, o4, n4);
                  return r4;
                }(e4, t3, o3, n3) : l2(e4, t3, o3, n3);
              };
              const ve = {};
              function ye() {
                const e4 = v(arguments), t3 = E.apply(void 0, e4);
                if (t3) return t3;
                const o3 = N(e4);
                return 0 === o3.length ? 0 : Math.max.apply(Math, o3);
              }
              function Ce() {
                const e4 = v(arguments), t3 = E.apply(void 0, e4);
                if (t3) return t3;
                const o3 = g(e4);
                let r3 = n2.median(o3);
                return isNaN(r3) && (r3 = c), r3;
              }
              function xe() {
                const e4 = v(arguments), t3 = E.apply(void 0, e4);
                if (t3) return t3;
                const o3 = N(e4);
                return 0 === o3.length ? 0 : Math.min.apply(Math, o3);
              }
              ve.DIST = (e4, t3, o3, r3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : r3 ? n2.lognormal.cdf(e4, t3, o3) : n2.lognormal.pdf(e4, t3, o3), ve.INV = (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : n2.lognormal.inv(e4, t3, o3);
              const we = { MULT: function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = e4.length, o3 = {};
                let n3, r3 = [], l2 = 0;
                for (let i3 = 0; i3 < t3; i3++) n3 = e4[i3], o3[n3] = o3[n3] ? o3[n3] + 1 : 1, o3[n3] > l2 && (l2 = o3[n3], r3 = []), o3[n3] === l2 && (r3[r3.length] = n3);
                return r3;
              }, SNGL: function() {
                const e4 = L(v(arguments));
                return e4 instanceof Error ? e4 : we.MULT(e4).sort((e5, t3) => e5 - t3)[0];
              } }, Ae = { DIST: (e4, t3, o3, r3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : r3 ? n2.negbin.cdf(e4, t3, o3) : n2.negbin.pdf(e4, t3, o3) }, Ee = {};
              function Me(e4, t3) {
                if (M(t3 = L(v(t3)), e4 = L(v(e4)))) return s;
                const o3 = n2.mean(e4), r3 = n2.mean(t3), l2 = e4.length;
                let i3 = 0, a2 = 0, u2 = 0;
                for (let n3 = 0; n3 < l2; n3++) i3 += (e4[n3] - o3) * (t3[n3] - r3), a2 += Math.pow(e4[n3] - o3, 2), u2 += Math.pow(t3[n3] - r3, 2);
                return i3 / Math.sqrt(a2 * u2);
              }
              Ee.DIST = (e4, t3, o3, r3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : o3 <= 0 ? c : r3 ? n2.normal.cdf(e4, t3, o3) : n2.normal.pdf(e4, t3, o3), Ee.INV = (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : n2.normal.inv(e4, t3, o3), Ee.S = {}, Ee.S.DIST = (e4, t3) => (e4 = F(e4)) instanceof Error ? s : t3 ? n2.normal.cdf(e4, 0, 1) : n2.normal.pdf(e4, 0, 1), Ee.S.INV = (e4) => (e4 = F(e4)) instanceof Error ? s : n2.normal.inv(e4, 0, 1);
              const Ie = { EXC: (e4, t3) => {
                if (M(e4 = L(v(e4)), t3 = F(t3))) return s;
                const o3 = (e4 = e4.sort((e5, t4) => e5 - t4)).length;
                if (t3 < 1 / (o3 + 1) || t3 > 1 - 1 / (o3 + 1)) return c;
                const n3 = t3 * (o3 + 1) - 1, r3 = Math.floor(n3);
                return I(n3 === r3 ? e4[n3] : e4[r3] + (n3 - r3) * (e4[r3 + 1] - e4[r3]));
              }, INC: (e4, t3) => {
                if (M(e4 = L(v(e4)), t3 = F(t3))) return s;
                const o3 = t3 * ((e4 = e4.sort((e5, t4) => e5 - t4)).length - 1), n3 = Math.floor(o3);
                return I(o3 === n3 ? e4[o3] : e4[n3] + (o3 - n3) * (e4[n3 + 1] - e4[n3]));
              } }, Ne = { EXC: (e4, t3, o3) => {
                if (o3 = void 0 === o3 ? 3 : o3, M(e4 = L(v(e4)), t3 = F(t3), o3 = F(o3))) return s;
                e4 = e4.sort((e5, t4) => e5 - t4);
                const n3 = Z.apply(null, e4), r3 = e4.length, l2 = n3.length, i3 = Math.pow(10, o3);
                let a2 = 0, u2 = false, c2 = 0;
                for (; !u2 && c2 < l2; ) t3 === n3[c2] ? (a2 = (e4.indexOf(n3[c2]) + 1) / (r3 + 1), u2 = true) : t3 >= n3[c2] && (t3 < n3[c2 + 1] || c2 === l2 - 1) && (a2 = (e4.indexOf(n3[c2]) + 1 + (t3 - n3[c2]) / (n3[c2 + 1] - n3[c2])) / (r3 + 1), u2 = true), c2++;
                return Math.floor(a2 * i3) / i3;
              }, INC: (e4, t3, o3) => {
                if (o3 = void 0 === o3 ? 3 : o3, M(e4 = L(v(e4)), t3 = F(t3), o3 = F(o3))) return s;
                e4 = e4.sort((e5, t4) => e5 - t4);
                const n3 = Z.apply(null, e4), r3 = e4.length, l2 = n3.length, i3 = Math.pow(10, o3);
                let a2 = 0, u2 = false, c2 = 0;
                for (; !u2 && c2 < l2; ) t3 === n3[c2] ? (a2 = e4.indexOf(n3[c2]) / (r3 - 1), u2 = true) : t3 >= n3[c2] && (t3 < n3[c2 + 1] || c2 === l2 - 1) && (a2 = (e4.indexOf(n3[c2]) + (t3 - n3[c2]) / (n3[c2 + 1] - n3[c2])) / (r3 - 1), u2 = true), c2++;
                return Math.floor(a2 * i3) / i3;
              } }, Se = { DIST: (e4, t3, o3) => M(e4 = F(e4), t3 = F(t3)) ? s : o3 ? n2.poisson.cdf(e4, t3) : n2.poisson.pdf(e4, t3) }, De = { EXC: (e4, t3) => {
                if (M(e4 = L(v(e4)), t3 = F(t3))) return s;
                switch (t3) {
                  case 1:
                    return Ie.EXC(e4, 0.25);
                  case 2:
                    return Ie.EXC(e4, 0.5);
                  case 3:
                    return Ie.EXC(e4, 0.75);
                  default:
                    return c;
                }
              }, INC: (e4, t3) => {
                if (M(e4 = L(v(e4)), t3 = F(t3))) return s;
                switch (t3) {
                  case 1:
                    return Ie.INC(e4, 0.25);
                  case 2:
                    return Ie.INC(e4, 0.5);
                  case 3:
                    return Ie.INC(e4, 0.75);
                  default:
                    return c;
                }
              } }, Te = {};
              function Fe() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = n2.mean(e4), o3 = e4.length;
                let r3 = 0;
                for (let n3 = 0; n3 < o3; n3++) r3 += Math.pow(e4[n3] - t3, 3);
                return o3 * r3 / ((o3 - 1) * (o3 - 2) * Math.pow(n2.stdev(e4, true), 3));
              }
              function Le(e4, t3) {
                return M(e4 = L(v(e4)), t3 = F(t3)) ? e4 : e4.sort((e5, t4) => e5 - t4)[t3 - 1];
              }
              Te.AVG = (e4, t3, o3) => {
                if (M(e4 = F(e4), t3 = L(v(t3)))) return s;
                const n3 = (o3 = o3 || false) ? (e5, t4) => e5 - t4 : (e5, t4) => t4 - e5, r3 = (t3 = (t3 = v(t3)).sort(n3)).length;
                let l2 = 0;
                for (let o4 = 0; o4 < r3; o4++) t3[o4] === e4 && l2++;
                return l2 > 1 ? (2 * t3.indexOf(e4) + l2 + 1) / 2 : t3.indexOf(e4) + 1;
              }, Te.EQ = (e4, t3, o3) => {
                if (M(e4 = F(e4), t3 = L(v(t3)))) return s;
                const n3 = (o3 = o3 || false) ? (e5, t4) => e5 - t4 : (e5, t4) => t4 - e5;
                return (t3 = t3.sort(n3)).indexOf(e4) + 1;
              }, Fe.P = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = n2.mean(e4), o3 = e4.length;
                let r3 = 0, l2 = 0;
                for (let n3 = 0; n3 < o3; n3++) l2 += Math.pow(e4[n3] - t3, 3), r3 += Math.pow(e4[n3] - t3, 2);
                return l2 /= o3, r3 /= o3, l2 / Math.pow(r3, 1.5);
              };
              const Re = { P: function() {
                const e4 = ke.P.apply(this, arguments);
                let t3 = Math.sqrt(e4);
                return isNaN(t3) && (t3 = c), t3;
              }, S: function() {
                const e4 = ke.S.apply(this, arguments);
                return Math.sqrt(e4);
              } }, Oe = { DIST: (e4, t3, o3) => 1 !== o3 && 2 !== o3 ? c : 1 === o3 ? Oe.DIST.RT(e4, t3) : Oe.DIST["2T"](e4, t3) };
              Oe.DIST["2T"] = function(e4, t3) {
                return 2 !== arguments.length ? f : e4 < 0 || t3 < 1 ? c : "number" != typeof e4 || "number" != typeof t3 ? s : 2 * (1 - n2.studentt.cdf(e4, t3));
              }, Oe.DIST.RT = function(e4, t3) {
                return 2 !== arguments.length ? f : e4 < 0 || t3 < 1 ? c : "number" != typeof e4 || "number" != typeof t3 ? s : 1 - n2.studentt.cdf(e4, t3);
              }, Oe.INV = (e4, t3) => M(e4 = F(e4), t3 = F(t3)) ? s : n2.studentt.inv(e4, t3), Oe.INV["2T"] = (e4, t3) => (e4 = F(e4), t3 = F(t3), e4 <= 0 || e4 > 1 || t3 < 1 ? c : M(e4, t3) ? s : Math.abs(n2.studentt.inv(e4 / 2, t3))), Oe.TEST = (e4, t3) => {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                const o3 = n2.mean(e4), r3 = n2.mean(t3);
                let l2, i3 = 0, a2 = 0;
                for (l2 = 0; l2 < e4.length; l2++) i3 += Math.pow(e4[l2] - o3, 2);
                for (l2 = 0; l2 < t3.length; l2++) a2 += Math.pow(t3[l2] - r3, 2);
                i3 /= e4.length - 1, a2 /= t3.length - 1;
                const u2 = Math.abs(o3 - r3) / Math.sqrt(i3 / e4.length + a2 / t3.length);
                return Oe.DIST["2T"](u2, e4.length + t3.length - 2);
              };
              const ke = {};
              function He() {
                const e4 = v(arguments), t3 = e4.length;
                let o3 = 0, n3 = 0;
                const r3 = oe(e4);
                for (let l2 = 0; l2 < t3; l2++) {
                  const t4 = e4[l2];
                  o3 += "number" == typeof t4 ? Math.pow(t4 - r3, 2) : true === t4 ? Math.pow(1 - r3, 2) : Math.pow(0 - r3, 2), null !== t4 && n3++;
                }
                return o3 / (n3 - 1);
              }
              function Be() {
                const e4 = v(arguments), t3 = e4.length;
                let o3 = 0, n3 = 0;
                const r3 = oe(e4);
                let l2;
                for (let l3 = 0; l3 < t3; l3++) {
                  const t4 = e4[l3];
                  o3 += "number" == typeof t4 ? Math.pow(t4 - r3, 2) : true === t4 ? Math.pow(1 - r3, 2) : Math.pow(0 - r3, 2), null !== t4 && n3++;
                }
                return l2 = o3 / n3, isNaN(l2) && (l2 = c), l2;
              }
              ke.P = function() {
                const e4 = N(v(arguments)), t3 = e4.length;
                let o3 = 0;
                const n3 = te(e4);
                let r3;
                for (let r4 = 0; r4 < t3; r4++) o3 += Math.pow(e4[r4] - n3, 2);
                return r3 = o3 / t3, isNaN(r3) && (r3 = c), r3;
              }, ke.S = function() {
                const e4 = N(v(arguments)), t3 = e4.length;
                let o3 = 0;
                const n3 = te(e4);
                for (let r3 = 0; r3 < t3; r3++) o3 += Math.pow(e4[r3] - n3, 2);
                return o3 / (t3 - 1);
              };
              const Pe = { DIST: (e4, t3, o3, n3) => M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : n3 ? 1 - Math.exp(-Math.pow(e4 / o3, t3)) : Math.pow(e4, t3 - 1) * Math.exp(-Math.pow(e4 / o3, t3)) * t3 / Math.pow(o3, t3) }, _e = {};
              function Ve(e4, t3, o3) {
                const n3 = E(e4 = F(e4), t3 = F(t3), o3 = F(o3));
                if (n3) return n3;
                if (0 === t3) return 0;
                t3 = Math.abs(t3);
                const r3 = -Math.floor(Math.log(t3) / Math.log(10));
                return e4 >= 0 ? Ke(Math.ceil(e4 / t3) * t3, r3) : 0 === o3 ? -Ke(Math.floor(Math.abs(e4) / t3) * t3, r3) : -Ke(Math.ceil(Math.abs(e4) / t3) * t3, r3);
              }
              function Ue(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || (e4 < t3 ? c : ze(e4) / (ze(t3) * ze(e4 - t3)));
              }
              _e.TEST = (e4, t3, o3) => {
                if (M(e4 = L(v(e4)), t3 = F(t3))) return s;
                o3 = o3 || Re.S(e4);
                const n3 = e4.length;
                return 1 - Ee.S.DIST((te(e4) - t3) / (o3 / Math.sqrt(n3)), true);
              }, Ve.MATH = Ve, Ve.PRECISE = Ve;
              const qe = [];
              function ze(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                const t3 = Math.floor(e4);
                return 0 === t3 || 1 === t3 ? 1 : (qe[t3] > 0 || (qe[t3] = ze(t3 - 1) * t3), qe[t3]);
              }
              function Ye(e4, t3) {
                const o3 = E(e4 = F(e4), t3 = F(t3));
                if (o3) return o3;
                if (0 === t3) return 0;
                if (!(e4 >= 0 && t3 > 0 || e4 <= 0 && t3 < 0)) return c;
                t3 = Math.abs(t3);
                const n3 = -Math.floor(Math.log(t3) / Math.log(10));
                return e4 >= 0 ? Ke(Math.floor(e4 / t3) * t3, n3) : -Ke(Math.ceil(Math.abs(e4) / t3), n3);
              }
              Ye.MATH = (e4, t3, o3) => {
                if (t3 instanceof Error) return t3;
                t3 = void 0 === t3 ? 0 : t3;
                const n3 = E(e4 = F(e4), t3 = F(t3), o3 = F(o3));
                if (n3) return n3;
                if (0 === t3) return 0;
                t3 = t3 ? Math.abs(t3) : 1;
                const r3 = -Math.floor(Math.log(t3) / Math.log(10));
                return e4 >= 0 ? Ke(Math.floor(e4 / t3) * t3, r3) : 0 === o3 || void 0 === o3 ? -Ke(Math.ceil(Math.abs(e4) / t3) * t3, r3) : -Ke(Math.floor(Math.abs(e4) / t3) * t3, r3);
              }, Ye.PRECISE = Ye.MATH;
              const We = { CEILING: Ve };
              function Xe(e4, t3) {
                const o3 = E(e4 = F(e4), t3 = F(t3));
                if (o3) return o3;
                if (0 === e4 && 0 === t3) return c;
                const n3 = Math.pow(e4, t3);
                return isNaN(n3) ? c : n3;
              }
              function Ge() {
                const e4 = v(arguments).filter((e5) => null != e5);
                if (0 === e4.length) return 0;
                const t3 = L(e4);
                if (t3 instanceof Error) return t3;
                let o3 = 1;
                for (let e5 = 0; e5 < t3.length; e5++) o3 *= t3[e5];
                return o3;
              }
              function Ke(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || Number(Math.round(Number(e4 + "e" + t3)) + "e" + -1 * t3);
              }
              function $e() {
                let e4 = 0;
                return h(j(arguments), (t3) => {
                  if (e4 instanceof Error) return false;
                  if (t3 instanceof Error) e4 = t3;
                  else if ("number" == typeof t3) e4 += t3;
                  else if ("string" == typeof t3) {
                    const o3 = parseFloat(t3);
                    !isNaN(o3) && (e4 += o3);
                  } else if (Array.isArray(t3)) {
                    const o3 = $e.apply(null, t3);
                    o3 instanceof Error ? e4 = o3 : e4 += o3;
                  }
                }), e4;
              }
              var Je = Object.freeze({ __proto__: null, ADD: function(e4, t3) {
                return 2 !== arguments.length ? f : E(e4 = F(e4), t3 = F(t3)) || e4 + t3;
              }, DIVIDE: function(e4, t3) {
                return 2 !== arguments.length ? f : E(e4 = F(e4), t3 = F(t3)) || (0 === t3 ? i2 : e4 / t3);
              }, EQ: function(e4, t3) {
                return 2 !== arguments.length ? f : e4 instanceof Error ? e4 : t3 instanceof Error ? t3 : (null === e4 && (e4 = void 0), null === t3 && (t3 = void 0), e4 === t3);
              }, GT: function(e4, t3) {
                return 2 !== arguments.length ? f : e4 instanceof Error ? e4 : t3 instanceof Error ? t3 : (O(e4, t3) ? (e4 = R(e4), t3 = R(t3)) : (e4 = F(e4), t3 = F(t3)), E(e4, t3) || e4 > t3);
              }, GTE: function(e4, t3) {
                return 2 !== arguments.length ? f : (O(e4, t3) ? (e4 = R(e4), t3 = R(t3)) : (e4 = F(e4), t3 = F(t3)), E(e4, t3) || e4 >= t3);
              }, LT: function(e4, t3) {
                return 2 !== arguments.length ? f : (O(e4, t3) ? (e4 = R(e4), t3 = R(t3)) : (e4 = F(e4), t3 = F(t3)), E(e4, t3) || e4 < t3);
              }, LTE: function(e4, t3) {
                return 2 !== arguments.length ? f : (O(e4, t3) ? (e4 = R(e4), t3 = R(t3)) : (e4 = F(e4), t3 = F(t3)), E(e4, t3) || e4 <= t3);
              }, MINUS: function(e4, t3) {
                return 2 !== arguments.length ? f : E(e4 = F(e4), t3 = F(t3)) || e4 - t3;
              }, MULTIPLY: function(e4, t3) {
                return 2 !== arguments.length ? f : E(e4 = F(e4), t3 = F(t3)) || e4 * t3;
              }, NE: function(e4, t3) {
                return 2 !== arguments.length ? f : e4 instanceof Error ? e4 : t3 instanceof Error ? t3 : (null === e4 && (e4 = void 0), null === t3 && (t3 = void 0), e4 !== t3);
              }, POW: function(e4, t3) {
                return 2 !== arguments.length ? f : Xe(e4, t3);
              } });
              const Qe = new Date(Date.UTC(1900, 0, 1)), Ze = [void 0, 0, 1, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 1, 2, 3, 4, 5, 6, 0], et = [[], [1, 2, 3, 4, 5, 6, 7], [7, 1, 2, 3, 4, 5, 6], [6, 0, 1, 2, 3, 4, 5], [], [], [], [], [], [], [], [7, 1, 2, 3, 4, 5, 6], [6, 7, 1, 2, 3, 4, 5], [5, 6, 7, 1, 2, 3, 4], [4, 5, 6, 7, 1, 2, 3], [3, 4, 5, 6, 7, 1, 2], [2, 3, 4, 5, 6, 7, 1], [1, 2, 3, 4, 5, 6, 7]], tt = [[], [6, 0], [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], void 0, void 0, void 0, [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]];
              function ot(e4, t3, o3) {
                o3 = o3.toUpperCase(), e4 = D(e4), t3 = D(t3);
                const n3 = e4.getFullYear(), r3 = e4.getMonth(), l2 = e4.getDate(), i3 = t3.getFullYear(), s2 = t3.getMonth(), a2 = t3.getDate();
                let u2;
                switch (o3) {
                  case "Y":
                    u2 = Math.floor(ft(e4, t3));
                    break;
                  case "D":
                    u2 = rt(t3, e4);
                    break;
                  case "M":
                    u2 = s2 - r3 + 12 * (i3 - n3), a2 < l2 && u2--;
                    break;
                  case "MD":
                    l2 <= a2 ? u2 = a2 - l2 : (0 === s2 ? (e4.setFullYear(i3 - 1), e4.setMonth(12)) : (e4.setFullYear(i3), e4.setMonth(s2 - 1)), u2 = rt(t3, e4));
                    break;
                  case "YM":
                    u2 = s2 - r3 + 12 * (i3 - n3), a2 < l2 && u2--, u2 %= 12;
                    break;
                  case "YD":
                    s2 > r3 || s2 === r3 && a2 < l2 ? e4.setFullYear(i3) : e4.setFullYear(i3 - 1), u2 = rt(t3, e4);
                }
                return u2;
              }
              function nt(e4) {
                const t3 = new Date(e4);
                return t3.setHours(0, 0, 0, 0), t3;
              }
              function rt(e4, t3) {
                return e4 = D(e4), t3 = D(t3), e4 instanceof Error ? e4 : t3 instanceof Error ? t3 : dt(nt(e4)) - dt(nt(t3));
              }
              function lt(e4, t3, o3) {
                if (o3 = S(o3 || "false"), e4 = D(e4), t3 = D(t3), e4 instanceof Error) return e4;
                if (t3 instanceof Error) return t3;
                if (o3 instanceof Error) return o3;
                const n3 = e4.getMonth();
                let r3, l2, i3 = t3.getMonth();
                if (o3) r3 = 31 === e4.getDate() ? 30 : e4.getDate(), l2 = 31 === t3.getDate() ? 30 : t3.getDate();
                else {
                  const o4 = new Date(e4.getFullYear(), n3 + 1, 0).getDate(), s2 = new Date(t3.getFullYear(), i3 + 1, 0).getDate();
                  r3 = e4.getDate() === o4 ? 30 : e4.getDate(), t3.getDate() === s2 ? r3 < 30 ? (i3++, l2 = 1) : l2 = 30 : l2 = t3.getDate();
                }
                return 360 * (t3.getFullYear() - e4.getFullYear()) + 30 * (i3 - n3) + (l2 - r3);
              }
              function it(e4) {
                if ((e4 = D(e4)) instanceof Error) return e4;
                (e4 = nt(e4)).setDate(e4.getDate() + 4 - (e4.getDay() || 7));
                const t3 = new Date(e4.getFullYear(), 0, 1);
                return Math.ceil(((e4 - t3) / 864e5 + 1) / 7);
              }
              function st(e4, t3, o3) {
                return st.INTL(e4, t3, 1, o3);
              }
              function at(e4, t3, o3) {
                return at.INTL(e4, t3, 1, o3);
              }
              function ut(e4) {
                return 1 === new Date(e4, 1, 29).getMonth();
              }
              function ct(e4, t3) {
                return Math.ceil((t3 - e4) / 1e3 / 60 / 60 / 24);
              }
              function ft(e4, t3, o3) {
                if ((e4 = D(e4)) instanceof Error) return e4;
                if ((t3 = D(t3)) instanceof Error) return t3;
                o3 = o3 || 0;
                let n3 = e4.getDate();
                const r3 = e4.getMonth() + 1, l2 = e4.getFullYear();
                let i3 = t3.getDate();
                const s2 = t3.getMonth() + 1, a2 = t3.getFullYear();
                switch (o3) {
                  case 0:
                    return 31 === n3 && 31 === i3 ? (n3 = 30, i3 = 30) : 31 === n3 ? n3 = 30 : 30 === n3 && 31 === i3 && (i3 = 30), (i3 + 30 * s2 + 360 * a2 - (n3 + 30 * r3 + 360 * l2)) / 360;
                  case 1: {
                    const o4 = (e5, t4) => {
                      const o5 = e5.getFullYear(), n4 = new Date(o5, 2, 1);
                      if (ut(o5) && e5 < n4 && t4 >= n4) return true;
                      const r4 = t4.getFullYear(), l3 = new Date(r4, 2, 1);
                      return ut(r4) && t4 >= l3 && e5 < l3;
                    };
                    let u2 = 365;
                    if (l2 === a2 || l2 + 1 === a2 && (r3 > s2 || r3 === s2 && n3 >= i3)) return (l2 === a2 && ut(l2) || o4(e4, t3) || 1 === s2 && 29 === i3) && (u2 = 366), ct(e4, t3) / u2;
                    const c2 = a2 - l2 + 1, f2 = (new Date(a2 + 1, 0, 1) - new Date(l2, 0, 1)) / 1e3 / 60 / 60 / 24 / c2;
                    return ct(e4, t3) / f2;
                  }
                  case 2:
                    return ct(e4, t3) / 360;
                  case 3:
                    return ct(e4, t3) / 365;
                  case 4:
                    return (i3 + 30 * s2 + 360 * a2 - (n3 + 30 * r3 + 360 * l2)) / 360;
                }
              }
              function dt(e4) {
                const t3 = e4 > -22038912e5 ? 2 : 1;
                return Math.ceil((e4 - Qe) / 864e5) + t3;
              }
              function pt(e4) {
                return 0 === (e4 = F(e4)) ? s : e4 instanceof Error ? e4 : String.fromCharCode(e4);
              }
              function bt(e4) {
                if (M(e4)) return e4;
                let t3 = (e4 = e4 || "").charCodeAt(0);
                return isNaN(t3) && (t3 = s), t3;
              }
              function jt() {
                const e4 = v(arguments), t3 = E.apply(void 0, e4);
                if (t3) return t3;
                let o3 = 0;
                for (; (o3 = e4.indexOf(true)) > -1; ) e4[o3] = "TRUE";
                let n3 = 0;
                for (; (n3 = e4.indexOf(false)) > -1; ) e4[n3] = "FALSE";
                return e4.join("");
              }
              st.INTL = (e4, t3, o3, n3) => {
                if ((e4 = D(e4)) instanceof Error) return e4;
                if ((t3 = D(t3)) instanceof Error) return t3;
                let r3 = false;
                const l2 = [], i3 = [1, 2, 3, 4, 5, 6, 0], a2 = new RegExp("^[0|1]{7}$");
                if (void 0 === o3) o3 = tt[1];
                else if ("string" == typeof o3 && a2.test(o3)) {
                  r3 = true, o3 = o3.split("");
                  for (let e5 = 0; e5 < o3.length; e5++) "1" === o3[e5] && l2.push(i3[e5]);
                } else o3 = tt[o3];
                if (!(o3 instanceof Array)) return s;
                void 0 === n3 ? n3 = [] : n3 instanceof Array || (n3 = [n3]);
                for (let e5 = 0; e5 < n3.length; e5++) {
                  const t4 = D(n3[e5]);
                  if (t4 instanceof Error) return t4;
                  n3[e5] = t4;
                }
                const u2 = Math.round((t3 - e4) / 864e5) + 1;
                let c2 = u2;
                const f2 = e4;
                for (let e5 = 0; e5 < u2; e5++) {
                  const e6 = (/* @__PURE__ */ new Date()).getTimezoneOffset() > 0 ? f2.getUTCDay() : f2.getDay();
                  let t4 = r3 ? l2.includes(e6) : e6 === o3[0] || e6 === o3[1];
                  for (let e7 = 0; e7 < n3.length; e7++) {
                    const o4 = n3[e7];
                    if (o4.getDate() === f2.getDate() && o4.getMonth() === f2.getMonth() && o4.getFullYear() === f2.getFullYear()) {
                      t4 = true;
                      break;
                    }
                  }
                  t4 && c2--, f2.setDate(f2.getDate() + 1);
                }
                return c2;
              }, at.INTL = (e4, t3, o3, n3) => {
                if ((e4 = D(e4)) instanceof Error) return e4;
                if ((t3 = F(t3)) instanceof Error) return t3;
                if (t3 < 0) return c;
                if (!((o3 = void 0 === o3 ? tt[1] : tt[o3]) instanceof Array)) return s;
                void 0 === n3 ? n3 = [] : n3 instanceof Array || (n3 = [n3]);
                for (let e5 = 0; e5 < n3.length; e5++) {
                  const t4 = D(n3[e5]);
                  if (t4 instanceof Error) return t4;
                  n3[e5] = t4;
                }
                let r3 = 0;
                for (; r3 < t3; ) {
                  e4.setDate(e4.getDate() + 1);
                  const t4 = e4.getDay();
                  if (t4 !== o3[0] && t4 !== o3[1]) {
                    for (let t5 = 0; t5 < n3.length; t5++) {
                      const o4 = n3[t5];
                      if (o4.getDate() === e4.getDate() && o4.getMonth() === e4.getMonth() && o4.getFullYear() === e4.getFullYear()) {
                        r3--;
                        break;
                      }
                    }
                    r3++;
                  }
                }
                return e4;
              };
              const ht = jt;
              function gt(e4, t3 = 2, o3 = false) {
                if (e4 = F(e4), isNaN(e4)) return s;
                if (t3 = F(t3), isNaN(t3)) return s;
                if (t3 < 0) {
                  const o4 = Math.pow(10, -t3);
                  e4 = Math.round(e4 / o4) * o4;
                } else e4 = e4.toFixed(t3);
                if (o3) e4 = e4.toString().replace(/,/g, "");
                else {
                  const t4 = e4.toString().split(".");
                  t4[0] = t4[0].replace(/\B(?=(\d{3})+$)/g, ","), e4 = t4.join(".");
                }
                return e4;
              }
              function mt(e4, t3) {
                return E(e4, t3) || (e4 = R(e4), (t3 = F(t3)) instanceof Error ? t3 : new Array(t3 + 1).join(e4));
              }
              const vt = pt, yt = bt;
              function Ct(e4) {
                return /^[01]{1,10}$/.test(e4);
              }
              function xt(e4, t3, o3) {
                if (M(e4 = F(e4), t3 = F(t3))) return e4;
                if ("i" !== (o3 = void 0 === o3 ? "i" : o3) && "j" !== o3) return s;
                if (0 === e4 && 0 === t3) return 0;
                if (0 === e4) return 1 === t3 ? o3 : t3.toString() + o3;
                if (0 === t3) return e4.toString();
                {
                  const n3 = t3 > 0 ? "+" : "";
                  return e4.toString() + n3 + (1 === t3 ? o3 : t3.toString() + o3);
                }
              }
              function wt(e4, t3) {
                return t3 = void 0 === t3 ? 0 : t3, M(e4 = F(e4), t3 = F(t3)) ? s : n2.erf(e4);
              }
              function At(e4) {
                return isNaN(e4) ? s : n2.erfc(e4);
              }
              function Et(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                return M(t3, o3) ? s : Math.sqrt(Math.pow(t3, 2) + Math.pow(o3, 2));
              }
              function Mt(e4) {
                if (void 0 === e4 || true === e4 || false === e4) return s;
                if (0 === e4 || "0" === e4) return 0;
                if (["i", "j"].indexOf(e4) >= 0) return 1;
                let t3 = (e4 = (e4 += "").replace("+i", "+1i").replace("-i", "-1i").replace("+j", "+1j").replace("-j", "-1j")).indexOf("+"), o3 = e4.indexOf("-");
                0 === t3 && (t3 = e4.indexOf("+", 1)), 0 === o3 && (o3 = e4.indexOf("-", 1));
                const n3 = e4.substring(e4.length - 1, e4.length), r3 = "i" === n3 || "j" === n3;
                return t3 >= 0 || o3 >= 0 ? r3 ? t3 >= 0 ? isNaN(e4.substring(0, t3)) || isNaN(e4.substring(t3 + 1, e4.length - 1)) ? c : Number(e4.substring(t3 + 1, e4.length - 1)) : isNaN(e4.substring(0, o3)) || isNaN(e4.substring(o3 + 1, e4.length - 1)) ? c : -Number(e4.substring(o3 + 1, e4.length - 1)) : c : r3 ? isNaN(e4.substring(0, e4.length - 1)) ? c : e4.substring(0, e4.length - 1) : isNaN(e4) ? c : 0;
              }
              function It(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                return M(t3, o3) ? s : 0 === t3 && 0 === o3 ? i2 : 0 === t3 && o3 > 0 ? Math.PI / 2 : 0 === t3 && o3 < 0 ? -Math.PI / 2 : 0 === o3 && t3 > 0 ? 0 : 0 === o3 && t3 < 0 ? -Math.PI : t3 > 0 ? Math.atan(o3 / t3) : t3 < 0 && o3 >= 0 ? Math.atan(o3 / t3) + Math.PI : Math.atan(o3 / t3) - Math.PI;
              }
              function Nt(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", xt(Math.cos(t3) * (Math.exp(o3) + Math.exp(-o3)) / 2, -Math.sin(t3) * (Math.exp(o3) - Math.exp(-o3)) / 2, n3);
              }
              function St(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", xt(Math.cos(o3) * (Math.exp(t3) + Math.exp(-t3)) / 2, Math.sin(o3) * (Math.exp(t3) - Math.exp(-t3)) / 2, n3);
              }
              function Dt(e4, t3) {
                const o3 = Tt(e4), n3 = Mt(e4), r3 = Tt(t3), l2 = Mt(t3);
                if (M(o3, n3, r3, l2)) return s;
                const i3 = e4.substring(e4.length - 1), a2 = t3.substring(t3.length - 1);
                let u2 = "i";
                if (("j" === i3 || "j" === a2) && (u2 = "j"), 0 === r3 && 0 === l2) return c;
                const f2 = r3 * r3 + l2 * l2;
                return xt((o3 * r3 + n3 * l2) / f2, (n3 * r3 - o3 * l2) / f2, u2);
              }
              function Tt(e4) {
                if (void 0 === e4 || true === e4 || false === e4) return s;
                if (0 === e4 || "0" === e4) return 0;
                if (["i", "+i", "1i", "+1i", "-i", "-1i", "j", "+j", "1j", "+1j", "-j", "-1j"].indexOf(e4) >= 0) return 0;
                let t3 = (e4 += "").indexOf("+"), o3 = e4.indexOf("-");
                0 === t3 && (t3 = e4.indexOf("+", 1)), 0 === o3 && (o3 = e4.indexOf("-", 1));
                const n3 = e4.substring(e4.length - 1, e4.length), r3 = "i" === n3 || "j" === n3;
                return t3 >= 0 || o3 >= 0 ? r3 ? t3 >= 0 ? isNaN(e4.substring(0, t3)) || isNaN(e4.substring(t3 + 1, e4.length - 1)) ? c : Number(e4.substring(0, t3)) : isNaN(e4.substring(0, o3)) || isNaN(e4.substring(o3 + 1, e4.length - 1)) ? c : Number(e4.substring(0, o3)) : c : r3 ? isNaN(e4.substring(0, e4.length - 1)) ? c : 0 : isNaN(e4) ? c : e4;
              }
              function Ft(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", xt(Math.sin(t3) * (Math.exp(o3) + Math.exp(-o3)) / 2, Math.cos(t3) * (Math.exp(o3) - Math.exp(-o3)) / 2, n3);
              }
              function Lt(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", xt(Math.cos(o3) * (Math.exp(t3) - Math.exp(-t3)) / 2, Math.sin(o3) * (Math.exp(t3) + Math.exp(-t3)) / 2, n3);
              }
              wt.PRECISE = () => {
                throw new Error("ERF.PRECISE is not implemented");
              }, At.PRECISE = () => {
                throw new Error("ERFC.PRECISE is not implemented");
              };
              const Rt = ne.DIST, Ot = ne.INV, kt = re.DIST, Ht = Ve.MATH, Bt = Ve.PRECISE, Pt = le.DIST, _t = le.DIST.RT, Vt = le.INV, Ut = le.INV.RT, qt = le.TEST, zt = ce.P, Yt = ce.P, Wt = ce.S, Xt = re.INV, Gt = At.PRECISE, Kt = wt.PRECISE, $t = fe.DIST, Jt = de.DIST, Qt = de.DIST.RT, Zt = de.INV, eo = de.INV.RT, to = Ye.MATH, oo = Ye.PRECISE, no = de.TEST, ro = be.DIST, lo = be.INV, io = je.PRECISE, so = he.DIST, ao = ve.INV, uo = ve.DIST, co = ve.INV, fo = we.MULT, po = we.SNGL, bo = Ae.DIST, jo = st.INTL, ho = Ee.DIST, go = Ee.INV, mo = Ee.S.DIST, vo = Ee.S.INV, yo = Ie.EXC, Co = Ie.INC, xo = Ne.EXC, wo = Ne.INC, Ao = Se.DIST, Eo = De.EXC, Mo = De.INC, Io = Te.AVG, No = Te.EQ, So = Fe.P, Do = Re.P, To = Re.S, Fo = Oe.DIST, Lo = Oe.DIST.RT, Ro = Oe.INV, Oo = Oe.TEST, ko = ke.P, Ho = ke.S, Bo = Pe.DIST, Po = at.INTL, _o = _e.TEST;
              function Vo(e4) {
                const t3 = [];
                return h(e4, (e5) => {
                  e5 && t3.push(e5);
                }), t3;
              }
              function Uo(e4, t3) {
                const o3 = {};
                for (let t4 = 1; t4 < e4[0].length; ++t4) o3[t4] = true;
                let n3 = t3[0].length;
                for (let e5 = 1; e5 < t3.length; ++e5) t3[e5].length > n3 && (n3 = t3[e5].length);
                for (let r4 = 1; r4 < e4.length; ++r4) for (let l2 = 1; l2 < e4[r4].length; ++l2) {
                  let i3 = false, s2 = false;
                  for (let o4 = 0; o4 < t3.length; ++o4) {
                    const a2 = t3[o4];
                    if (a2.length < n3) continue;
                    const u2 = a2[0];
                    if (e4[r4][0] === u2) {
                      s2 = true;
                      for (let t4 = 1; t4 < a2.length; ++t4) if (!i3) if (void 0 === a2[t4] || "*" === a2[t4]) i3 = true;
                      else {
                        const o5 = Y(a2[t4] + ""), n4 = [z(e4[r4][l2], q)].concat(o5);
                        i3 = W(n4);
                      }
                    }
                  }
                  s2 && (o3[l2] = o3[l2] && i3);
                }
                const r3 = [];
                for (let t4 = 0; t4 < e4[0].length; ++t4) o3[t4] && r3.push(t4 - 1);
                return r3;
              }
              function qo(e4) {
                return e4 && e4.getTime && !isNaN(e4.getTime());
              }
              function zo(e4) {
                return e4 instanceof Date ? e4 : new Date(e4);
              }
              function Yo(e4, t3, o3, n3, r3) {
                if (n3 = n3 || 0, r3 = r3 || 0, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3))) return s;
                let l2;
                if (0 === e4) l2 = n3 + o3 * t3;
                else {
                  const i3 = Math.pow(1 + e4, t3);
                  l2 = 1 === r3 ? n3 * i3 + o3 * (1 + e4) * (i3 - 1) / e4 : n3 * i3 + o3 * (i3 - 1) / e4;
                }
                return -l2;
              }
              function Wo(e4, t3, o3, n3, r3, l2) {
                if (r3 = r3 || 0, l2 = l2 || 0, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3), l2 = F(l2))) return s;
                const i3 = Go(e4, o3, n3, r3, l2);
                return (1 === t3 ? 1 === l2 ? 0 : -n3 : 1 === l2 ? Yo(e4, t3 - 2, i3, n3, 1) - i3 : Yo(e4, t3 - 1, i3, n3, 0)) * e4;
              }
              function Xo() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = e4[0];
                let o3 = 0;
                for (let n3 = 1; n3 < e4.length; n3++) o3 += e4[n3] / Math.pow(1 + t3, n3);
                return o3;
              }
              function Go(e4, t3, o3, n3, r3) {
                if (n3 = n3 || 0, r3 = r3 || 0, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3))) return s;
                let l2;
                if (0 === e4) l2 = (o3 + n3) / t3;
                else {
                  const i3 = Math.pow(1 + e4, t3);
                  l2 = 1 === r3 ? (n3 * e4 / (i3 - 1) + o3 * e4 / (1 - 1 / i3)) / (1 + e4) : n3 * e4 / (i3 - 1) + o3 * e4 / (1 - 1 / i3);
                }
                return -l2;
              }
              const Ko = { errors: b, symbols: Je };
              t2.ABS = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.abs(e4);
              }, t2.ACCRINT = function(e4, t3, o3, n3, r3, l2, i3) {
                return e4 = zo(e4), t3 = zo(t3), o3 = zo(o3), qo(e4) && qo(t3) && qo(o3) ? n3 <= 0 || r3 <= 0 || -1 === [1, 2, 4].indexOf(l2) || -1 === [0, 1, 2, 3, 4].indexOf(i3) || o3 <= e4 ? c : (r3 = r3 || 0) * n3 * ft(e4, o3, i3 = i3 || 0) : s;
              }, t2.ACCRINTM = function() {
                throw new Error("ACCRINTM is not implemented");
              }, t2.ACOS = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                let t3 = Math.acos(e4);
                return isNaN(t3) && (t3 = c), t3;
              }, t2.ACOSH = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                let t3 = Math.log(e4 + Math.sqrt(e4 * e4 - 1));
                return isNaN(t3) && (t3 = c), t3;
              }, t2.ACOT = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.atan(1 / e4);
              }, t2.ACOTH = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                let t3 = 0.5 * Math.log((e4 + 1) / (e4 - 1));
                return isNaN(t3) && (t3 = c), t3;
              }, t2.AGGREGATE = function(e4, t3, o3, n3) {
                if (M(e4 = F(e4), F(e4))) return s;
                switch (e4) {
                  case 1:
                    return te(o3);
                  case 2:
                    return se(o3);
                  case 3:
                    return ae(o3);
                  case 4:
                    return ye(o3);
                  case 5:
                    return xe(o3);
                  case 6:
                    return Ge(o3);
                  case 7:
                    return Re.S(o3);
                  case 8:
                    return Re.P(o3);
                  case 9:
                    return $e(o3);
                  case 10:
                    return ke.S(o3);
                  case 11:
                    return ke.P(o3);
                  case 12:
                    return Ce(o3);
                  case 13:
                    return we.SNGL(o3);
                  case 14:
                    return ge(o3, n3);
                  case 15:
                    return Le(o3, n3);
                  case 16:
                    return Ie.INC(o3, n3);
                  case 17:
                    return De.INC(o3, n3);
                  case 18:
                    return Ie.EXC(o3, n3);
                  case 19:
                    return De.EXC(o3, n3);
                }
              }, t2.AMORDEGRC = function() {
                throw new Error("AMORDEGRC is not implemented");
              }, t2.AMORLINC = function() {
                throw new Error("AMORLINC is not implemented");
              }, t2.AND = function() {
                const e4 = v(arguments);
                let t3 = s;
                for (let o3 = 0; o3 < e4.length; o3++) {
                  if (e4[o3] instanceof Error) return e4[o3];
                  void 0 !== e4[o3] && null !== e4[o3] && "string" != typeof e4[o3] && (t3 === s && (t3 = true), e4[o3] || (t3 = false));
                }
                return t3;
              }, t2.ARABIC = function(e4) {
                if (null == e4) return 0;
                if (e4 instanceof Error) return e4;
                if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(e4)) return s;
                let t3 = 0;
                return e4.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (e5) => {
                  t3 += { M: 1e3, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }[e5];
                }), t3;
              }, t2.ASC = function() {
                throw new Error("ASC is not implemented");
              }, t2.ASIN = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                let t3 = Math.asin(e4);
                return isNaN(t3) && (t3 = c), t3;
              }, t2.ASINH = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.log(e4 + Math.sqrt(e4 * e4 + 1));
              }, t2.ATAN = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.atan(e4);
              }, t2.ATAN2 = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || Math.atan2(e4, t3);
              }, t2.ATANH = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                let t3 = Math.log((1 + e4) / (1 - e4)) / 2;
                return isNaN(t3) && (t3 = c), t3;
              }, t2.AVEDEV = function() {
                const e4 = v(arguments).filter(k);
                if (0 === e4.length) return c;
                const t3 = L(e4);
                return t3 instanceof Error ? t3 : n2.sum(n2(t3).subtract(n2.mean(t3)).abs()[0]) / t3.length;
              }, t2.AVERAGE = te, t2.AVERAGEA = oe, t2.AVERAGEIF = function(e4, t3, o3) {
                if (arguments.length <= 1) return f;
                if (o3 = L(v(o3 = o3 || e4).filter(k)), e4 = v(e4), o3 instanceof Error) return o3;
                let n3 = 0, r3 = 0;
                const l2 = void 0 === t3 || "*" === t3, i3 = l2 ? null : Y(t3 + "");
                for (let t4 = 0; t4 < e4.length; t4++) {
                  const s2 = e4[t4];
                  if (l2) r3 += o3[t4], n3++;
                  else {
                    const e5 = [z(s2, q)].concat(i3);
                    W(e5) && (r3 += o3[t4], n3++);
                  }
                }
                return r3 / n3;
              }, t2.AVERAGEIFS = function() {
                const e4 = j(arguments), t3 = (e4.length - 1) / 2, o3 = v(e4[0]);
                let n3 = 0, r3 = 0;
                for (let l3 = 0; l3 < o3.length; l3++) {
                  let i3 = false;
                  for (let o4 = 0; o4 < t3; o4++) {
                    const t4 = e4[2 * o4 + 1][l3], n4 = e4[2 * o4 + 2];
                    let r4 = false;
                    if (void 0 === n4 || "*" === n4) r4 = true;
                    else {
                      const e5 = Y(n4 + ""), o5 = [z(t4, q)].concat(e5);
                      r4 = W(o5);
                    }
                    if (!r4) {
                      i3 = false;
                      break;
                    }
                    i3 = true;
                  }
                  i3 && (r3 += o3[l3], n3++);
                }
                const l2 = r3 / n3;
                return isNaN(l2) ? 0 : l2;
              }, t2.BAHTTEXT = function() {
                throw new Error("BAHTTEXT is not implemented");
              }, t2.BASE = function(e4, t3, o3) {
                const n3 = E(e4 = F(e4), t3 = F(t3), o3 = F(o3));
                if (n3) return n3;
                if (0 === t3) return c;
                const r3 = e4.toString(t3);
                return new Array(Math.max(o3 + 1 - r3.length, 0)).join("0") + r3;
              }, t2.BESSELI = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : r2.besseli(e4, t3);
              }, t2.BESSELJ = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : r2.besselj(e4, t3);
              }, t2.BESSELK = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : r2.besselk(e4, t3);
              }, t2.BESSELY = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : r2.bessely(e4, t3);
              }, t2.BETA = ne, t2.BETADIST = Rt, t2.BETAINV = Ot, t2.BIN2DEC = function(e4) {
                if (!Ct(e4)) return c;
                const t3 = parseInt(e4, 2), o3 = e4.toString();
                return 10 === o3.length && "1" === o3.substring(0, 1) ? parseInt(o3.substring(1), 2) - 512 : t3;
              }, t2.BIN2HEX = function(e4, t3) {
                if (!Ct(e4)) return c;
                const o3 = e4.toString();
                if (10 === o3.length && "1" === o3.substring(0, 1)) return (1099511627264 + parseInt(o3.substring(1), 2)).toString(16);
                const n3 = parseInt(e4, 2).toString(16);
                return void 0 === t3 ? n3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= n3.length ? mt("0", t3 - n3.length) + n3 : c;
              }, t2.BIN2OCT = function(e4, t3) {
                if (!Ct(e4)) return c;
                const o3 = e4.toString();
                if (10 === o3.length && "1" === o3.substring(0, 1)) return (1073741312 + parseInt(o3.substring(1), 2)).toString(8);
                const n3 = parseInt(e4, 2).toString(8);
                return void 0 === t3 ? n3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= n3.length ? mt("0", t3 - n3.length) + n3 : c;
              }, t2.BINOM = re, t2.BINOMDIST = kt, t2.BITAND = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : e4 < 0 || t3 < 0 || Math.floor(e4) !== e4 || Math.floor(t3) !== t3 || e4 > 281474976710655 || t3 > 281474976710655 ? c : e4 & t3;
              }, t2.BITLSHIFT = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : e4 < 0 || Math.floor(e4) !== e4 || e4 > 281474976710655 || Math.abs(t3) > 53 ? c : t3 >= 0 ? e4 << t3 : e4 >> -t3;
              }, t2.BITOR = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : e4 < 0 || t3 < 0 || Math.floor(e4) !== e4 || Math.floor(t3) !== t3 || e4 > 281474976710655 || t3 > 281474976710655 ? c : e4 | t3;
              }, t2.BITRSHIFT = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : e4 < 0 || Math.floor(e4) !== e4 || e4 > 281474976710655 || Math.abs(t3) > 53 ? c : t3 >= 0 ? e4 >> t3 : e4 << -t3;
              }, t2.BITXOR = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : e4 < 0 || t3 < 0 || Math.floor(e4) !== e4 || Math.floor(t3) !== t3 || e4 > 281474976710655 || t3 > 281474976710655 ? c : e4 ^ t3;
              }, t2.CEILING = Ve, t2.CEILINGMATH = Ht, t2.CEILINGPRECISE = Bt, t2.CELL = function() {
                throw new Error("CELL is not implemented");
              }, t2.CHAR = pt, t2.CHIDIST = Pt, t2.CHIDISTRT = _t, t2.CHIINV = Vt, t2.CHIINVRT = Ut, t2.CHISQ = le, t2.CHITEST = qt, t2.CHOOSE = function() {
                if (arguments.length < 2) return f;
                const e4 = arguments[0];
                return e4 < 1 || e4 > 254 || arguments.length < e4 + 1 ? s : arguments[e4];
              }, t2.CLEAN = function(e4) {
                return M(e4) ? e4 : (e4 = e4 || "").replace(/[\0-\x1F]/g, "");
              }, t2.CODE = bt, t2.COLUMN = function(e4, t3) {
                return 2 !== arguments.length ? f : t3 < 0 ? c : e4 instanceof Array && "number" == typeof t3 ? 0 !== e4.length ? n2.col(e4, t3) : void 0 : s;
              }, t2.COLUMNS = function(e4) {
                return 1 !== arguments.length ? f : e4 instanceof Array ? 0 === e4.length ? 0 : n2.cols(e4) : s;
              }, t2.COMBIN = Ue, t2.COMBINA = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || (e4 < t3 ? c : 0 === e4 && 0 === t3 ? 1 : Ue(e4 + t3 - 1, e4 - 1));
              }, t2.COMPLEX = xt, t2.CONCAT = ht, t2.CONCATENATE = jt, t2.CONFIDENCE = ie, t2.CONVERT = function(e4, t3, o3) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                const n3 = [["a.u. of action", "?", null, "action", false, false, 105457168181818e-48], ["a.u. of charge", "e", null, "electric_charge", false, false, 160217653141414e-33], ["a.u. of energy", "Eh", null, "energy", false, false, 435974417757576e-32], ["a.u. of length", "a?", null, "length", false, false, 529177210818182e-25], ["a.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45], ["a.u. of time", "?/Eh", null, "time", false, false, 241888432650516e-31], ["admiralty knot", "admkn", null, "speed", false, true, 0.514773333], ["ampere", "A", null, "electric_current", true, false, 1], ["ampere per meter", "A/m", null, "magnetic_field_intensity", true, false, 1], ["ångström", "Å", ["ang"], "length", false, true, 1e-10], ["are", "ar", null, "area", false, true, 100], ["astronomical unit", "ua", null, "length", false, false, 149597870691667e-25], ["bar", "bar", null, "pressure", false, false, 1e5], ["barn", "b", null, "area", false, false, 1e-28], ["becquerel", "Bq", null, "radioactivity", true, false, 1], ["bit", "bit", ["b"], "information", false, true, 1], ["btu", "BTU", ["btu"], "energy", false, true, 1055.05585262], ["byte", "byte", null, "information", false, true, 8], ["candela", "cd", null, "luminous_intensity", true, false, 1], ["candela per square metre", "cd/m?", null, "luminance", true, false, 1], ["coulomb", "C", null, "electric_charge", true, false, 1], ["cubic ångström", "ang3", ["ang^3"], "volume", false, true, 1e-30], ["cubic foot", "ft3", ["ft^3"], "volume", false, true, 0.028316846592], ["cubic inch", "in3", ["in^3"], "volume", false, true, 16387064e-12], ["cubic light-year", "ly3", ["ly^3"], "volume", false, true, 846786664623715e-61], ["cubic metre", "m?", null, "volume", true, true, 1], ["cubic mile", "mi3", ["mi^3"], "volume", false, true, 416818182544058e-5], ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", false, true, 6352182208], ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", false, true, 758660370370369e-22], ["cubic yard", "yd3", ["yd^3"], "volume", false, true, 0.764554857984], ["cup", "cup", null, "volume", false, true, 2365882365e-13], ["dalton", "Da", ["u"], "mass", false, false, 166053886282828e-41], ["day", "d", ["day"], "time", false, true, 86400], ["degree", "°", null, "angle", false, false, 0.0174532925199433], ["degrees Rankine", "Rank", null, "temperature", false, true, 0.555555555555556], ["dyne", "dyn", ["dy"], "force", false, true, 1e-5], ["electronvolt", "eV", ["ev"], "energy", false, true, 1.60217656514141], ["ell", "ell", null, "length", false, true, 1.143], ["erg", "erg", ["e"], "energy", false, true, 1e-7], ["farad", "F", null, "electric_capacitance", true, false, 1], ["fluid ounce", "oz", null, "volume", false, true, 295735295625e-16], ["foot", "ft", null, "length", false, true, 0.3048], ["foot-pound", "flb", null, "energy", false, true, 1.3558179483314], ["gal", "Gal", null, "acceleration", false, false, 0.01], ["gallon", "gal", null, "volume", false, true, 0.003785411784], ["gauss", "G", ["ga"], "magnetic_flux_density", false, true, 1], ["grain", "grain", null, "mass", false, true, 647989e-10], ["gram", "g", null, "mass", false, true, 1e-3], ["gray", "Gy", null, "absorbed_dose", true, false, 1], ["gross registered ton", "GRT", ["regton"], "volume", false, true, 2.8316846592], ["hectare", "ha", null, "area", false, true, 1e4], ["henry", "H", null, "inductance", true, false, 1], ["hertz", "Hz", null, "frequency", true, false, 1], ["horsepower", "HP", ["h"], "power", false, true, 745.69987158227], ["horsepower-hour", "HPh", ["hh", "hph"], "energy", false, true, 2684519538e-3], ["hour", "h", ["hr"], "time", false, true, 3600], ["imperial gallon (U.K.)", "uk_gal", null, "volume", false, true, 454609e-8], ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", false, true, 50.802345], ["imperial quart (U.K)", "uk_qt", null, "volume", false, true, 0.0011365225], ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", false, true, 1016.046909], ["inch", "in", null, "length", false, true, 0.0254], ["international acre", "uk_acre", null, "area", false, true, 4046.8564224], ["IT calorie", "cal", null, "energy", false, true, 4.1868], ["joule", "J", null, "energy", true, true, 1], ["katal", "kat", null, "catalytic_activity", true, false, 1], ["kelvin", "K", ["kel"], "temperature", true, true, 1], ["kilogram", "kg", null, "mass", true, true, 1], ["knot", "kn", null, "speed", false, true, 0.514444444444444], ["light-year", "ly", null, "length", false, true, 9460730472580800], ["litre", "L", ["l", "lt"], "volume", false, true, 1e-3], ["lumen", "lm", null, "luminous_flux", true, false, 1], ["lux", "lx", null, "illuminance", true, false, 1], ["maxwell", "Mx", null, "magnetic_flux", false, false, 1e-18], ["measurement ton", "MTON", null, "volume", false, true, 1.13267386368], ["meter per hour", "m/h", ["m/hr"], "speed", false, true, 27777777777778e-17], ["meter per second", "m/s", ["m/sec"], "speed", true, true, 1], ["meter per second squared", "m?s??", null, "acceleration", true, false, 1], ["parsec", "pc", ["parsec"], "length", false, true, 30856775814671900], ["meter squared per second", "m?/s", null, "kinematic_viscosity", true, false, 1], ["metre", "m", null, "length", true, true, 1], ["miles per hour", "mph", null, "speed", false, true, 0.44704], ["millimetre of mercury", "mmHg", null, "pressure", false, false, 133.322], ["minute", "?", null, "angle", false, false, 290888208665722e-18], ["minute", "min", ["mn"], "time", false, true, 60], ["modern teaspoon", "tspm", null, "volume", false, true, 5e-6], ["mole", "mol", null, "amount_of_substance", true, false, 1], ["morgen", "Morgen", null, "area", false, true, 2500], ["n.u. of action", "?", null, "action", false, false, 105457168181818e-48], ["n.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45], ["n.u. of speed", "c?", null, "speed", false, false, 299792458], ["n.u. of time", "?/(me?c??)", null, "time", false, false, 128808866778687e-35], ["nautical mile", "M", ["Nmi"], "length", false, true, 1852], ["newton", "N", null, "force", true, true, 1], ["œrsted", "Oe ", null, "magnetic_field_intensity", false, false, 79.5774715459477], ["ohm", "Ω", null, "electric_resistance", true, false, 1], ["ounce mass", "ozm", null, "mass", false, true, 0.028349523125], ["pascal", "Pa", null, "pressure", true, false, 1], ["pascal second", "Pa?s", null, "dynamic_viscosity", true, false, 1], ["pferdestärke", "PS", null, "power", false, true, 735.49875], ["phot", "ph", null, "illuminance", false, false, 1e-4], ["pica (1/6 inch)", "pica", null, "length", false, true, 35277777777778e-17], ["pica (1/72 inch)", "Pica", ["Picapt"], "length", false, true, 0.00423333333333333], ["poise", "P", null, "dynamic_viscosity", false, false, 0.1], ["pond", "pond", null, "force", false, true, 980665e-8], ["pound force", "lbf", null, "force", false, true, 4.4482216152605], ["pound mass", "lbm", null, "mass", false, true, 0.45359237], ["quart", "qt", null, "volume", false, true, 946352946e-12], ["radian", "rad", null, "angle", true, false, 1], ["second", "?", null, "angle", false, false, 484813681109536e-20], ["second", "s", ["sec"], "time", true, true, 1], ["short hundredweight", "cwt", ["shweight"], "mass", false, true, 45.359237], ["siemens", "S", null, "electrical_conductance", true, false, 1], ["sievert", "Sv", null, "equivalent_dose", true, false, 1], ["slug", "sg", null, "mass", false, true, 14.59390294], ["square ångström", "ang2", ["ang^2"], "area", false, true, 1e-20], ["square foot", "ft2", ["ft^2"], "area", false, true, 0.09290304], ["square inch", "in2", ["in^2"], "area", false, true, 64516e-8], ["square light-year", "ly2", ["ly^2"], "area", false, true, 895054210748189e17], ["square meter", "m?", null, "area", true, true, 1], ["square mile", "mi2", ["mi^2"], "area", false, true, 2589988110336e-6], ["square nautical mile", "Nmi2", ["Nmi^2"], "area", false, true, 3429904], ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", false, true, 1792111111111e-17], ["square yard", "yd2", ["yd^2"], "area", false, true, 0.83612736], ["statute mile", "mi", null, "length", false, true, 1609.344], ["steradian", "sr", null, "solid_angle", true, false, 1], ["stilb", "sb", null, "luminance", false, false, 1e-4], ["stokes", "St", null, "kinematic_viscosity", false, false, 1e-4], ["stone", "stone", null, "mass", false, true, 6.35029318], ["tablespoon", "tbs", null, "volume", false, true, 147868e-10], ["teaspoon", "tsp", null, "volume", false, true, 492892e-11], ["tesla", "T", null, "magnetic_flux_density", true, true, 1], ["thermodynamic calorie", "c", null, "energy", false, true, 4.184], ["ton", "ton", null, "mass", false, true, 907.18474], ["tonne", "t", null, "mass", false, false, 1e3], ["U.K. pint", "uk_pt", null, "volume", false, true, 56826125e-11], ["U.S. bushel", "bushel", null, "volume", false, true, 0.03523907], ["U.S. oil barrel", "barrel", null, "volume", false, true, 0.158987295], ["U.S. pint", "pt", ["us_pt"], "volume", false, true, 473176473e-12], ["U.S. survey mile", "survey_mi", null, "length", false, true, 1609.347219], ["U.S. survey/statute acre", "us_acre", null, "area", false, true, 4046.87261], ["volt", "V", null, "voltage", true, false, 1], ["watt", "W", null, "power", true, true, 1], ["watt-hour", "Wh", ["wh"], "energy", false, true, 3600], ["weber", "Wb", null, "magnetic_flux", true, false, 1], ["yard", "yd", null, "length", false, true, 0.9144], ["year", "yr", null, "time", false, true, 31557600]], r3 = { Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"], Zi: ["zebi", 70, 11805916207174113e5, "Zi", "zetta"], Ei: ["exbi", 60, 1152921504606847e3, "Ei", "exa"], Pi: ["pebi", 50, 1125899906842624, "Pi", "peta"], Ti: ["tebi", 40, 1099511627776, "Ti", "tera"], Gi: ["gibi", 30, 1073741824, "Gi", "giga"], Mi: ["mebi", 20, 1048576, "Mi", "mega"], ki: ["kibi", 10, 1024, "ki", "kilo"] }, l2 = { Y: ["yotta", 1e24, "Y"], Z: ["zetta", 1e21, "Z"], E: ["exa", 1e18, "E"], P: ["peta", 1e15, "P"], T: ["tera", 1e12, "T"], G: ["giga", 1e9, "G"], M: ["mega", 1e6, "M"], k: ["kilo", 1e3, "k"], h: ["hecto", 100, "h"], e: ["dekao", 10, "e"], d: ["deci", 0.1, "d"], c: ["centi", 0.01, "c"], m: ["milli", 1e-3, "m"], u: ["micro", 1e-6, "u"], n: ["nano", 1e-9, "n"], p: ["pico", 1e-12, "p"], f: ["femto", 1e-15, "f"], a: ["atto", 1e-18, "a"], z: ["zepto", 1e-21, "z"], y: ["yocto", 1e-24, "y"] };
                let i3, s2 = null, a2 = null, u2 = t3, c2 = o3, d2 = 1, p2 = 1;
                for (let e5 = 0; e5 < n3.length; e5++) i3 = null === n3[e5][2] ? [] : n3[e5][2], (n3[e5][1] === u2 || i3.indexOf(u2) >= 0) && (s2 = n3[e5]), (n3[e5][1] === c2 || i3.indexOf(c2) >= 0) && (a2 = n3[e5]);
                if (null === s2) {
                  const e5 = r3[t3.substring(0, 2)];
                  let o4 = l2[t3.substring(0, 1)];
                  "da" === t3.substring(0, 2) && (o4 = ["dekao", 10, "da"]), e5 ? (d2 = e5[2], u2 = t3.substring(2)) : o4 && (d2 = o4[1], u2 = t3.substring(o4[2].length));
                  for (let e6 = 0; e6 < n3.length; e6++) i3 = null === n3[e6][2] ? [] : n3[e6][2], (n3[e6][1] === u2 || i3.indexOf(u2) >= 0) && (s2 = n3[e6]);
                }
                if (null === a2) {
                  const e5 = r3[o3.substring(0, 2)];
                  let t4 = l2[o3.substring(0, 1)];
                  "da" === o3.substring(0, 2) && (t4 = ["dekao", 10, "da"]), e5 ? (p2 = e5[2], c2 = o3.substring(2)) : t4 && (p2 = t4[1], c2 = o3.substring(t4[2].length));
                  for (let e6 = 0; e6 < n3.length; e6++) i3 = null === n3[e6][2] ? [] : n3[e6][2], (n3[e6][1] === c2 || i3.indexOf(c2) >= 0) && (a2 = n3[e6]);
                }
                return null === s2 || null === a2 || s2[3] !== a2[3] ? f : e4 * s2[6] * d2 / (a2[6] * p2);
              }, t2.CORREL = function(e4, t3) {
                return M(e4 = L(v(e4)), t3 = L(v(t3))) ? s : n2.corrcoeff(e4, t3);
              }, t2.COS = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.cos(e4);
              }, t2.COSH = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : (Math.exp(e4) + Math.exp(-e4)) / 2;
              }, t2.COT = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 0 === e4 ? i2 : 1 / Math.tan(e4);
              }, t2.COTH = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                if (0 === e4) return i2;
                const t3 = Math.exp(2 * e4);
                return (t3 + 1) / (t3 - 1);
              }, t2.COUNT = se, t2.COUNTA = ae, t2.COUNTBLANK = ue, t2.COUNTIF = function(e4, t3) {
                if (e4 = v(e4), void 0 === t3 || "*" === t3) return e4.length;
                let o3 = 0;
                const n3 = Y(t3 + "");
                for (let t4 = 0; t4 < e4.length; t4++) {
                  const r3 = [z(e4[t4], q)].concat(n3);
                  W(r3) && o3++;
                }
                return o3;
              }, t2.COUNTIFS = function() {
                const e4 = j(arguments), t3 = new Array(v(e4[0]).length);
                for (let e5 = 0; e5 < t3.length; e5++) t3[e5] = true;
                for (let o4 = 0; o4 < e4.length; o4 += 2) {
                  const n3 = v(e4[o4]), r3 = e4[o4 + 1];
                  if (void 0 !== r3 && "*" !== r3) {
                    const e5 = Y(r3 + "");
                    for (let o5 = 0; o5 < n3.length; o5++) {
                      const r4 = [z(n3[o5], q)].concat(e5);
                      t3[o5] = t3[o5] && W(r4);
                    }
                  }
                }
                let o3 = 0;
                for (let e5 = 0; e5 < t3.length; e5++) t3[e5] && o3++;
                return o3;
              }, t2.COUPDAYBS = function() {
                throw new Error("COUPDAYBS is not implemented");
              }, t2.COUPDAYS = function() {
                throw new Error("COUPDAYS is not implemented");
              }, t2.COUPDAYSNC = function() {
                throw new Error("COUPDAYSNC is not implemented");
              }, t2.COUPNCD = function() {
                throw new Error("COUPNCD is not implemented");
              }, t2.COUPNUM = function() {
                throw new Error("COUPNUM is not implemented");
              }, t2.COUPPCD = function() {
                throw new Error("COUPPCD is not implemented");
              }, t2.COVAR = zt, t2.COVARIANCE = ce, t2.COVARIANCEP = Yt, t2.COVARIANCES = Wt, t2.CRITBINOM = Xt, t2.CSC = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 0 === e4 ? i2 : 1 / Math.sin(e4);
              }, t2.CSCH = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 0 === e4 ? i2 : 2 / (Math.exp(e4) - Math.exp(-e4));
              }, t2.CUMIPMT = function(e4, t3, o3, n3, r3, l2) {
                if (M(e4 = F(e4), t3 = F(t3), o3 = F(o3))) return s;
                if (e4 <= 0 || t3 <= 0 || o3 <= 0) return c;
                if (n3 < 1 || r3 < 1 || n3 > r3) return c;
                if (0 !== l2 && 1 !== l2) return c;
                const i3 = Go(e4, t3, o3, 0, l2);
                let a2 = 0;
                1 === n3 && (0 === l2 && (a2 = -o3), n3++);
                for (let t4 = n3; t4 <= r3; t4++) a2 += 1 === l2 ? Yo(e4, t4 - 2, i3, o3, 1) - i3 : Yo(e4, t4 - 1, i3, o3, 0);
                return a2 *= e4, a2;
              }, t2.CUMPRINC = function(e4, t3, o3, n3, r3, l2) {
                if (M(e4 = F(e4), t3 = F(t3), o3 = F(o3))) return s;
                if (e4 <= 0 || t3 <= 0 || o3 <= 0) return c;
                if (n3 < 1 || r3 < 1 || n3 > r3) return c;
                if (0 !== l2 && 1 !== l2) return c;
                const i3 = Go(e4, t3, o3, 0, l2);
                let a2 = 0;
                1 === n3 && (a2 = 0 === l2 ? i3 + o3 * e4 : i3, n3++);
                for (let t4 = n3; t4 <= r3; t4++) a2 += l2 > 0 ? i3 - (Yo(e4, t4 - 2, i3, o3, 1) - i3) * e4 : i3 - Yo(e4, t4 - 1, i3, o3, 0) * e4;
                return a2;
              }, t2.DATE = function(e4, t3, o3) {
                let n3;
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? n3 = s : (n3 = new Date(e4, t3 - 1, o3), n3.getFullYear() < 0 && (n3 = c)), n3;
              }, t2.DATEDIF = ot, t2.DATEVALUE = function(e4) {
                if ("string" != typeof e4) return s;
                const t3 = Date.parse(e4);
                return isNaN(t3) ? s : new Date(e4);
              }, t2.DAVERAGE = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                let l2 = 0;
                return h(n3, (e5) => {
                  l2 += r3[e5];
                }), 0 === n3.length ? i2 : l2 / n3.length;
              }, t2.DAY = function(e4) {
                const t3 = D(e4);
                return t3 instanceof Error ? t3 : t3.getDate();
              }, t2.DAYS = rt, t2.DAYS360 = lt, t2.DB = function(e4, t3, o3, n3, r3) {
                if (r3 = void 0 === r3 ? 12 : r3, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3))) return s;
                if (e4 < 0 || t3 < 0 || o3 < 0 || n3 < 0) return c;
                if (-1 === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(r3)) return c;
                if (n3 > o3) return c;
                if (t3 >= e4) return 0;
                const l2 = (1 - Math.pow(t3 / e4, 1 / o3)).toFixed(3), i3 = e4 * l2 * r3 / 12;
                let a2 = i3, u2 = 0;
                const f2 = n3 === o3 ? o3 - 1 : n3;
                for (let t4 = 2; t4 <= f2; t4++) u2 = (e4 - a2) * l2, a2 += u2;
                return 1 === n3 ? i3 : n3 === o3 ? (e4 - a2) * l2 : u2;
              }, t2.DBCS = function() {
                throw new Error("DBCS is not implemented");
              }, t2.DCOUNT = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                const l2 = [];
                return h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), se(l2);
              }, t2.DCOUNTA = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                const l2 = [];
                return h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), ae(l2);
              }, t2.DDB = function(e4, t3, o3, n3, r3) {
                if (r3 = void 0 === r3 ? 2 : r3, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3))) return s;
                if (e4 < 0 || t3 < 0 || o3 < 0 || n3 < 0 || r3 <= 0) return c;
                if (n3 > o3) return c;
                if (t3 >= e4) return 0;
                let l2 = 0, i3 = 0;
                for (let s2 = 1; s2 <= n3; s2++) i3 = Math.min(r3 / o3 * (e4 - l2), e4 - t3 - l2), l2 += i3;
                return i3;
              }, t2.DEC2BIN = function(e4, t3) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                if (!/^-?[0-9]{1,3}$/.test(e4) || e4 < -512 || e4 > 511) return c;
                if (e4 < 0) return "1" + mt("0", 9 - (512 + e4).toString(2).length) + (512 + e4).toString(2);
                const o3 = parseInt(e4, 10).toString(2);
                return void 0 === t3 ? o3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= o3.length ? mt("0", t3 - o3.length) + o3 : c;
              }, t2.DEC2HEX = function(e4, t3) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                if (!/^-?[0-9]{1,12}$/.test(e4) || e4 < -549755813888 || e4 > 549755813887) return c;
                if (e4 < 0) return (1099511627776 + e4).toString(16);
                const o3 = parseInt(e4, 10).toString(16);
                return void 0 === t3 ? o3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= o3.length ? mt("0", t3 - o3.length) + o3 : c;
              }, t2.DEC2OCT = function(e4, t3) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                if (!/^-?[0-9]{1,9}$/.test(e4) || e4 < -536870912 || e4 > 536870911) return c;
                if (e4 < 0) return (1073741824 + e4).toString(8);
                const o3 = parseInt(e4, 10).toString(8);
                return void 0 === t3 ? o3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= o3.length ? mt("0", t3 - o3.length) + o3 : c;
              }, t2.DECIMAL = function(e4, t3) {
                return arguments.length < 1 ? s : E(e4 = F(e4), t3 = F(t3)) || (0 === t3 ? c : parseInt(e4, t3));
              }, t2.DEGREES = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 180 * e4 / Math.PI;
              }, t2.DELTA = function(e4, t3) {
                return t3 = void 0 === t3 ? 0 : t3, M(e4 = F(e4), t3 = F(t3)) ? s : e4 === t3 ? 1 : 0;
              }, t2.DEVSQ = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = n2.mean(e4);
                let o3 = 0;
                for (let n3 = 0; n3 < e4.length; n3++) o3 += Math.pow(e4[n3] - t3, 2);
                return o3;
              }, t2.DGET = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                return r3 = x2("string" == typeof t3 ? e4[A(e4, t3)] : e4[t3]), 0 === n3.length ? s : n3.length > 1 ? c : r3[n3[0]];
              }, t2.DISC = function(e4, t3, o3, n3, r3) {
                if (M(e4 = D(e4), t3 = D(t3), o3 = F(o3), n3 = F(n3), r3 = (r3 = F(r3)) || 0)) return s;
                if (o3 <= 0 || n3 <= 0) return c;
                if (e4 >= t3) return s;
                let l2, i3;
                switch (r3) {
                  case 0:
                    l2 = 360, i3 = lt(e4, t3, false);
                    break;
                  case 1:
                  case 3:
                    l2 = 365, i3 = ot(e4, t3, "D");
                    break;
                  case 2:
                    l2 = 360, i3 = ot(e4, t3, "D");
                    break;
                  case 4:
                    l2 = 360, i3 = lt(e4, t3, true);
                    break;
                  default:
                    return c;
                }
                return (n3 - o3) / n3 * l2 / i3;
              }, t2.DMAX = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                let l2 = r3[n3[0]];
                return h(n3, (e5) => {
                  l2 < r3[e5] && (l2 = r3[e5]);
                }), l2;
              }, t2.DMIN = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                let l2 = r3[n3[0]];
                return h(n3, (e5) => {
                  l2 > r3[e5] && (l2 = r3[e5]);
                }), l2;
              }, t2.DOLLAR = function(e4, t3 = 2) {
                if (e4 = F(e4), isNaN(e4)) return s;
                const o3 = { style: "currency", currency: "USD", minimumFractionDigits: t3 >= 0 ? t3 : 0, maximumFractionDigits: t3 >= 0 ? t3 : 0 }, n3 = (e4 = Ke(e4, t3)).toLocaleString("en-US", o3);
                return e4 < 0 ? "$(" + n3.slice(2) + ")" : n3;
              }, t2.DOLLARDE = function(e4, t3) {
                if (M(e4 = F(e4), t3 = F(t3))) return s;
                if (t3 < 0) return c;
                if (t3 >= 0 && t3 < 1) return i2;
                t3 = parseInt(t3, 10);
                let o3 = parseInt(e4, 10);
                o3 += e4 % 1 * Math.pow(10, Math.ceil(Math.log(t3) / Math.LN10)) / t3;
                const n3 = Math.pow(10, Math.ceil(Math.log(t3) / Math.LN2) + 1);
                return o3 = Math.round(o3 * n3) / n3, o3;
              }, t2.DOLLARFR = function(e4, t3) {
                if (M(e4 = F(e4), t3 = F(t3))) return s;
                if (t3 < 0) return c;
                if (t3 >= 0 && t3 < 1) return i2;
                t3 = parseInt(t3, 10);
                let o3 = parseInt(e4, 10);
                return o3 += e4 % 1 * Math.pow(10, -Math.ceil(Math.log(t3) / Math.LN10)) * t3, o3;
              }, t2.DPRODUCT = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                let l2 = [];
                h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), l2 = Vo(l2);
                let i3 = 1;
                return h(l2, (e5) => {
                  i3 *= e5;
                }), i3;
              }, t2.DSTDEV = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                let l2 = [];
                return h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), l2 = Vo(l2), Re.S(l2);
              }, t2.DSTDEVP = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                let l2 = [];
                return h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), l2 = Vo(l2), Re.P(l2);
              }, t2.DSUM = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                const l2 = [];
                return h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), $e(l2);
              }, t2.DURATION = function() {
                throw new Error("DURATION is not implemented");
              }, t2.DVAR = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                const l2 = [];
                return h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), ke.S(l2);
              }, t2.DVARP = function(e4, t3, o3) {
                if (isNaN(t3) && "string" != typeof t3) return s;
                const n3 = Uo(e4, o3);
                let r3 = [];
                if ("string" == typeof t3) {
                  const o4 = A(e4, t3);
                  r3 = x2(e4[o4]);
                } else r3 = x2(e4[t3]);
                const l2 = [];
                return h(n3, (e5) => {
                  l2.push(r3[e5]);
                }), ke.P(l2);
              }, t2.EDATE = function(e4, t3) {
                return (e4 = D(e4)) instanceof Error ? e4 : isNaN(t3) ? s : (t3 = parseInt(t3, 10), e4.setMonth(e4.getMonth() + t3), e4);
              }, t2.EFFECT = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : e4 <= 0 || t3 < 1 ? c : (t3 = parseInt(t3, 10), Math.pow(1 + e4 / t3, t3) - 1);
              }, t2.EOMONTH = function(e4, t3) {
                return (e4 = D(e4)) instanceof Error ? e4 : isNaN(t3) ? s : (t3 = parseInt(t3, 10), new Date(e4.getFullYear(), e4.getMonth() + t3 + 1, 0));
              }, t2.ERF = wt, t2.ERFC = At, t2.ERFCPRECISE = Gt, t2.ERFPRECISE = Kt, t2.ERROR = X, t2.EVEN = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Ve(e4, -2, -1);
              }, t2.EXACT = function(e4, t3) {
                return 2 !== arguments.length ? f : E(e4, t3) || (e4 = R(e4)) === R(t3);
              }, t2.EXP = function(e4) {
                return arguments.length < 1 ? f : arguments.length > 1 ? d : (e4 = F(e4)) instanceof Error ? e4 : e4 = Math.exp(e4);
              }, t2.EXPON = fe, t2.EXPONDIST = $t, t2.F = de, t2.FACT = ze, t2.FACTDOUBLE = function e4(t3) {
                if ((t3 = F(t3)) instanceof Error) return t3;
                const o3 = Math.floor(t3);
                return o3 <= 0 ? 1 : o3 * e4(o3 - 2);
              }, t2.FALSE = function() {
                return false;
              }, t2.FDIST = Jt, t2.FDISTRT = Qt, t2.FIND = function(e4, t3, o3) {
                if (arguments.length < 2) return f;
                e4 = R(e4), o3 = void 0 === o3 ? 0 : o3;
                const n3 = (t3 = R(t3)).indexOf(e4, o3 - 1);
                return -1 === n3 ? s : n3 + 1;
              }, t2.FINV = Zt, t2.FINVRT = eo, t2.FISHER = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.log((1 + e4) / (1 - e4)) / 2;
              }, t2.FISHERINV = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                const t3 = Math.exp(2 * e4);
                return (t3 - 1) / (t3 + 1);
              }, t2.FIXED = gt, t2.FLOOR = Ye, t2.FLOORMATH = to, t2.FLOORPRECISE = oo, t2.FORECAST = pe, t2.FREQUENCY = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                const o3 = e4.length, n3 = t3.length, r3 = [];
                for (let l2 = 0; l2 <= n3; l2++) {
                  r3[l2] = 0;
                  for (let i3 = 0; i3 < o3; i3++) 0 === l2 ? e4[i3] <= t3[0] && (r3[0] += 1) : l2 < n3 ? e4[i3] > t3[l2 - 1] && e4[i3] <= t3[l2] && (r3[l2] += 1) : l2 === n3 && e4[i3] > t3[n3 - 1] && (r3[n3] += 1);
                }
                return r3;
              }, t2.FTEST = no, t2.FV = Yo, t2.FVSCHEDULE = function(e4, t3) {
                if (M(e4 = F(e4), t3 = L(v(t3)))) return s;
                const o3 = t3.length;
                let n3 = e4;
                for (let e5 = 0; e5 < o3; e5++) n3 *= 1 + t3[e5];
                return n3;
              }, t2.GAMMA = be, t2.GAMMADIST = ro, t2.GAMMAINV = lo, t2.GAMMALN = je, t2.GAMMALNPRECISE = io, t2.GAUSS = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : n2.normal.cdf(e4, 0, 1) - 0.5;
              }, t2.GCD = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = e4.length, o3 = e4[0];
                let n3 = o3 < 0 ? -o3 : o3;
                for (let o4 = 1; o4 < t3; o4++) {
                  const t4 = e4[o4];
                  let r3 = t4 < 0 ? -t4 : t4;
                  for (; n3 && r3; ) n3 > r3 ? n3 %= r3 : r3 %= n3;
                  n3 += r3;
                }
                return n3;
              }, t2.GEOMEAN = function() {
                const e4 = L(v(arguments));
                return e4 instanceof Error ? e4 : n2.geomean(e4);
              }, t2.GESTEP = function(e4, t3) {
                return M(t3 = t3 || 0, e4 = F(e4)) ? e4 : e4 >= t3 ? 1 : 0;
              }, t2.GROWTH = function(e4, t3, o3, n3) {
                if ((e4 = L(e4)) instanceof Error) return e4;
                let r3;
                if (void 0 === t3) for (t3 = [], r3 = 1; r3 <= e4.length; r3++) t3.push(r3);
                if (void 0 === o3) for (o3 = [], r3 = 1; r3 <= e4.length; r3++) o3.push(r3);
                if (M(t3 = L(t3), o3 = L(o3))) return s;
                void 0 === n3 && (n3 = true);
                const l2 = e4.length;
                let i3, a2, u2 = 0, c2 = 0, f2 = 0, d2 = 0;
                for (r3 = 0; r3 < l2; r3++) {
                  const o4 = t3[r3], n4 = Math.log(e4[r3]);
                  u2 += o4, c2 += n4, f2 += o4 * n4, d2 += o4 * o4;
                }
                u2 /= l2, c2 /= l2, f2 /= l2, d2 /= l2, n3 ? (i3 = (f2 - u2 * c2) / (d2 - u2 * u2), a2 = c2 - i3 * u2) : (i3 = f2 / d2, a2 = 0);
                const p2 = [];
                for (r3 = 0; r3 < o3.length; r3++) p2.push(Math.exp(a2 + i3 * o3[r3]));
                return p2;
              }, t2.HARMEAN = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = e4.length;
                let o3 = 0;
                for (let n3 = 0; n3 < t3; n3++) o3 += 1 / e4[n3];
                return t3 / o3;
              }, t2.HEX2BIN = function(e4, t3) {
                if (!/^[0-9A-Fa-f]{1,10}$/.test(e4)) return c;
                const o3 = !(10 !== e4.length || "f" !== e4.substring(0, 1).toLowerCase()), n3 = o3 ? parseInt(e4, 16) - 1099511627776 : parseInt(e4, 16);
                if (n3 < -512 || n3 > 511) return c;
                if (o3) return "1" + mt("0", 9 - (512 + n3).toString(2).length) + (512 + n3).toString(2);
                const r3 = n3.toString(2);
                return void 0 === t3 ? r3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= r3.length ? mt("0", t3 - r3.length) + r3 : c;
              }, t2.HEX2DEC = function(e4) {
                if (!/^[0-9A-Fa-f]{1,10}$/.test(e4)) return c;
                const t3 = parseInt(e4, 16);
                return t3 >= 549755813888 ? t3 - 1099511627776 : t3;
              }, t2.HEX2OCT = function(e4, t3) {
                if (!/^[0-9A-Fa-f]{1,10}$/.test(e4)) return c;
                const o3 = parseInt(e4, 16);
                if (o3 > 536870911 && o3 < 1098974756864) return c;
                if (o3 >= 1098974756864) return (o3 - 1098437885952).toString(8);
                const n3 = o3.toString(8);
                return void 0 === t3 ? n3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= n3.length ? mt("0", t3 - n3.length) + n3 : c;
              }, t2.HLOOKUP = function(e4, t3, o3, n3) {
                return ee(e4, w(t3), o3, n3);
              }, t2.HOUR = function(e4) {
                return (e4 = D(e4)) instanceof Error ? e4 : e4.getHours();
              }, t2.HYPGEOM = he, t2.HYPGEOMDIST = so, t2.IF = function(e4, t3, o3) {
                return e4 instanceof Error ? e4 : (null == (t3 = !(arguments.length >= 2) || t3) && (t3 = 0), null == (o3 = 3 === arguments.length && o3) && (o3 = 0), e4 ? t3 : o3);
              }, t2.IFERROR = function(e4, t3) {
                return K(e4) ? t3 : e4;
              }, t2.IFNA = function(e4, t3) {
                return e4 === f ? t3 : e4;
              }, t2.IFS = function() {
                for (let e4 = 0; e4 < arguments.length / 2; e4++) if (arguments[2 * e4]) return arguments[2 * e4 + 1];
                return f;
              }, t2.IMABS = Et, t2.IMAGINARY = Mt, t2.IMARGUMENT = It, t2.IMCONJUGATE = function(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", 0 !== o3 ? xt(t3, -o3, n3) : e4;
              }, t2.IMCOS = Nt, t2.IMCOSH = St, t2.IMCOT = function(e4) {
                return M(Tt(e4), Mt(e4)) ? s : Dt(Nt(e4), Ft(e4));
              }, t2.IMCSC = function(e4) {
                return true === e4 || false === e4 ? s : M(Tt(e4), Mt(e4)) ? c : Dt("1", Ft(e4));
              }, t2.IMCSCH = function(e4) {
                return true === e4 || false === e4 ? s : M(Tt(e4), Mt(e4)) ? c : Dt("1", Lt(e4));
              }, t2.IMDIV = Dt, t2.IMEXP = function(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                n3 = "i" === n3 || "j" === n3 ? n3 : "i";
                const r3 = Math.exp(t3);
                return xt(r3 * Math.cos(o3), r3 * Math.sin(o3), n3);
              }, t2.IMLN = function(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", xt(Math.log(Math.sqrt(t3 * t3 + o3 * o3)), Math.atan(o3 / t3), n3);
              }, t2.IMLOG10 = function(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", xt(Math.log(Math.sqrt(t3 * t3 + o3 * o3)) / Math.log(10), Math.atan(o3 / t3) / Math.log(10), n3);
              }, t2.IMLOG2 = function(e4) {
                const t3 = Tt(e4), o3 = Mt(e4);
                if (M(t3, o3)) return s;
                let n3 = e4.substring(e4.length - 1);
                return n3 = "i" === n3 || "j" === n3 ? n3 : "i", xt(Math.log(Math.sqrt(t3 * t3 + o3 * o3)) / Math.log(2), Math.atan(o3 / t3) / Math.log(2), n3);
              }, t2.IMPOWER = function(e4, t3) {
                if (M(t3 = F(t3), Tt(e4), Mt(e4))) return s;
                let o3 = e4.substring(e4.length - 1);
                o3 = "i" === o3 || "j" === o3 ? o3 : "i";
                const n3 = Math.pow(Et(e4), t3), r3 = It(e4);
                return xt(n3 * Math.cos(t3 * r3), n3 * Math.sin(t3 * r3), o3);
              }, t2.IMPRODUCT = function() {
                let e4 = arguments[0];
                if (!arguments.length) return s;
                for (let t3 = 1; t3 < arguments.length; t3++) {
                  const o3 = Tt(e4), n3 = Mt(e4), r3 = Tt(arguments[t3]), l2 = Mt(arguments[t3]);
                  if (M(o3, n3, r3, l2)) return s;
                  e4 = xt(o3 * r3 - n3 * l2, o3 * l2 + n3 * r3);
                }
                return e4;
              }, t2.IMREAL = Tt, t2.IMSEC = function(e4) {
                return true === e4 || false === e4 || M(Tt(e4), Mt(e4)) ? s : Dt("1", Nt(e4));
              }, t2.IMSECH = function(e4) {
                return M(Tt(e4), Mt(e4)) ? s : Dt("1", St(e4));
              }, t2.IMSIN = Ft, t2.IMSINH = Lt, t2.IMSQRT = function(e4) {
                if (M(Tt(e4), Mt(e4))) return s;
                let t3 = e4.substring(e4.length - 1);
                t3 = "i" === t3 || "j" === t3 ? t3 : "i";
                const o3 = Math.sqrt(Et(e4)), n3 = It(e4);
                return xt(o3 * Math.cos(n3 / 2), o3 * Math.sin(n3 / 2), t3);
              }, t2.IMSUB = function(e4, t3) {
                const o3 = Tt(e4), n3 = Mt(e4), r3 = Tt(t3), l2 = Mt(t3);
                if (M(o3, n3, r3, l2)) return s;
                const i3 = e4.substring(e4.length - 1), a2 = t3.substring(t3.length - 1);
                let u2 = "i";
                return ("j" === i3 || "j" === a2) && (u2 = "j"), xt(o3 - r3, n3 - l2, u2);
              }, t2.IMSUM = function() {
                if (!arguments.length) return s;
                const e4 = v(arguments);
                let t3 = e4[0];
                for (let o3 = 1; o3 < e4.length; o3++) {
                  const n3 = Tt(t3), r3 = Mt(t3), l2 = Tt(e4[o3]), i3 = Mt(e4[o3]);
                  if (M(n3, r3, l2, i3)) return s;
                  t3 = xt(n3 + l2, r3 + i3);
                }
                return t3;
              }, t2.IMTAN = function(e4) {
                return true === e4 || false === e4 || M(Tt(e4), Mt(e4)) ? s : Dt(Ft(e4), Nt(e4));
              }, t2.INDEX = function(e4, t3, o3) {
                const n3 = E(e4, t3, o3);
                if (n3) return n3;
                if (!Array.isArray(e4)) return s;
                const r3 = e4.length > 0 && !Array.isArray(e4[0]);
                return r3 && !o3 ? (o3 = t3, t3 = 1) : (o3 = o3 || 1, t3 = t3 || 1), o3 < 0 || t3 < 0 ? s : r3 && 1 === t3 && o3 <= e4.length ? e4[o3 - 1] : t3 <= e4.length && o3 <= e4[t3 - 1].length ? e4[t3 - 1][o3 - 1] : a;
              }, t2.INFO = function() {
                throw new Error("INFO is not implemented");
              }, t2.INT = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.floor(e4);
              }, t2.INTERCEPT = function(e4, t3) {
                return M(e4 = L(e4), t3 = L(t3)) ? s : e4.length !== t3.length ? f : pe(0, e4, t3);
              }, t2.INTRATE = function() {
                throw new Error("INTRATE is not implemented");
              }, t2.IPMT = Wo, t2.IRR = function(e4, t3) {
                if (t3 = t3 || 0, M(e4 = L(v(e4)), t3 = F(t3))) return s;
                const o3 = (e5, t4, o4) => {
                  const n4 = o4 + 1;
                  let r4 = e5[0];
                  for (let o5 = 1; o5 < e5.length; o5++) r4 += e5[o5] / Math.pow(n4, (t4[o5] - t4[0]) / 365);
                  return r4;
                }, n3 = (e5, t4, o4) => {
                  const n4 = o4 + 1;
                  let r4 = 0;
                  for (let o5 = 1; o5 < e5.length; o5++) {
                    const l3 = (t4[o5] - t4[0]) / 365;
                    r4 -= l3 * e5[o5] / Math.pow(n4, l3 + 1);
                  }
                  return r4;
                }, r3 = [];
                let l2 = false, i3 = false;
                for (let t4 = 0; t4 < e4.length; t4++) r3[t4] = 0 === t4 ? 0 : r3[t4 - 1] + 365, e4[t4] > 0 && (l2 = true), e4[t4] < 0 && (i3 = true);
                if (!l2 || !i3) return c;
                let a2, u2, f2, d2 = t3 = void 0 === t3 ? 0.1 : t3, p2 = true;
                do {
                  f2 = o3(e4, r3, d2), a2 = d2 - f2 / n3(e4, r3, d2), u2 = Math.abs(a2 - d2), d2 = a2, p2 = u2 > 1e-10 && Math.abs(f2) > 1e-10;
                } while (p2);
                return d2;
              }, t2.ISBLANK = function(e4) {
                return null === e4;
              }, t2.ISERR = G, t2.ISERROR = K, t2.ISEVEN = function(e4) {
                return !(1 & Math.floor(Math.abs(e4)));
              }, t2.ISFORMULA = function() {
                throw new Error("ISFORMULA is not implemented");
              }, t2.ISLOGICAL = $2, t2.ISNA = function(e4) {
                return e4 === f;
              }, t2.ISNONTEXT = function(e4) {
                return "string" != typeof e4;
              }, t2.ISNUMBER = J, t2.ISO = We, t2.ISODD = function(e4) {
                return !!(1 & Math.floor(Math.abs(e4)));
              }, t2.ISOWEEKNUM = it, t2.ISPMT = function(e4, t3, o3, n3) {
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3)) ? s : n3 * e4 * (t3 / o3 - 1);
              }, t2.ISREF = function() {
                throw new Error("ISREF is not implemented");
              }, t2.ISTEXT = Q, t2.KURT = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                const t3 = n2.mean(e4), o3 = e4.length;
                let r3 = 0;
                for (let n3 = 0; n3 < o3; n3++) r3 += Math.pow(e4[n3] - t3, 4);
                return r3 /= Math.pow(n2.stdev(e4, true), 4), o3 * (o3 + 1) / ((o3 - 1) * (o3 - 2) * (o3 - 3)) * r3 - 3 * (o3 - 1) * (o3 - 1) / ((o3 - 2) * (o3 - 3));
              }, t2.LARGE = ge, t2.LCM = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                for (var t3, o3, n3, r3, l2 = 1; void 0 !== (n3 = e4.pop()); ) {
                  if (0 === n3) return 0;
                  for (; n3 > 1; ) {
                    if (n3 % 2) {
                      for (t3 = 3, o3 = Math.floor(Math.sqrt(n3)); t3 <= o3 && n3 % t3; t3 += 2) ;
                      r3 = t3 <= o3 ? t3 : n3;
                    } else r3 = 2;
                    for (n3 /= r3, l2 *= r3, t3 = e4.length; t3; e4[--t3] % r3 == 0 && 1 == (e4[t3] /= r3) && e4.splice(t3, 1)) ;
                  }
                }
                return l2;
              }, t2.LEFT = function(e4, t3) {
                return E(e4, t3) || (e4 = R(e4), (t3 = F(t3 = void 0 === t3 ? 1 : t3)) instanceof Error || "string" != typeof e4 ? s : e4.substring(0, t3));
              }, t2.LEN = function(e4) {
                return 0 === arguments.length ? d : e4 instanceof Error ? e4 : Array.isArray(e4) ? s : R(e4).length;
              }, t2.LINEST = me, t2.LN = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 0 === e4 ? c : Math.log(e4);
              }, t2.LOG = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || (0 === e4 || 0 === t3 ? c : Math.log(e4) / Math.log(t3));
              }, t2.LOG10 = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 0 === e4 ? c : Math.log(e4) / Math.log(10);
              }, t2.LOGEST = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                if (e4.length !== t3.length) return s;
                for (let t4 = 0; t4 < e4.length; t4++) e4[t4] = Math.log(e4[t4]);
                const o3 = me(e4, t3);
                return o3[0] = Math.round(1e6 * Math.exp(o3[0])) / 1e6, o3[1] = Math.round(1e6 * Math.exp(o3[1])) / 1e6, o3;
              }, t2.LOGINV = ao, t2.LOGNORM = ve, t2.LOGNORMDIST = uo, t2.LOGNORMINV = co, t2.LOOKUP = function(e4, t3, o3) {
                t3 = v(t3), o3 = o3 ? v(o3) : t3;
                const n3 = "number" == typeof e4;
                let r3 = f;
                for (let l2 = 0; l2 < t3.length; l2++) {
                  if (t3[l2] === e4) return o3[l2];
                  if (n3 && t3[l2] <= e4 || "string" == typeof t3[l2] && t3[l2].localeCompare(e4) < 0) r3 = o3[l2];
                  else if (n3 && t3[l2] > e4) return r3;
                }
                return r3;
              }, t2.LOWER = function(e4) {
                return 1 !== arguments.length ? s : M(e4 = R(e4)) ? e4 : e4.toLowerCase();
              }, t2.MATCH = function(e4, t3, o3) {
                if (!e4 || !t3) return f;
                if (2 === arguments.length && (o3 = 1), !((t3 = v(t3)) instanceof Array)) return f;
                if (-1 !== o3 && 0 !== o3 && 1 !== o3) return f;
                let n3, r3;
                for (let l2 = 0; l2 < t3.length; l2++) if (1 === o3) {
                  if (t3[l2] === e4) return l2 + 1;
                  t3[l2] < e4 && (r3 ? t3[l2] > r3 && (n3 = l2 + 1, r3 = t3[l2]) : (n3 = l2 + 1, r3 = t3[l2]));
                } else if (0 === o3) {
                  if ("string" == typeof e4 && "string" == typeof t3[l2]) {
                    const o4 = e4.toLowerCase().replace(/\?/g, ".").replace(/\*/g, ".*").replace(/~/g, "\\");
                    if (new RegExp("^" + o4 + "$").test(t3[l2].toLowerCase())) return l2 + 1;
                  } else if (t3[l2] === e4) return l2 + 1;
                } else if (-1 === o3) {
                  if (t3[l2] === e4) return l2 + 1;
                  t3[l2] > e4 && (r3 ? t3[l2] < r3 && (n3 = l2 + 1, r3 = t3[l2]) : (n3 = l2 + 1, r3 = t3[l2]));
                }
                return n3 || f;
              }, t2.MAX = ye, t2.MAXA = function() {
                const e4 = v(arguments), t3 = E.apply(void 0, e4);
                if (t3) return t3;
                let o3 = g(e4);
                return o3 = o3.map((e5) => null == e5 ? 0 : e5), 0 === o3.length ? 0 : Math.max.apply(Math, o3);
              }, t2.MDURATION = function() {
                throw new Error("MDURATION is not implemented");
              }, t2.MEDIAN = Ce, t2.MID = function(e4, t3, o3) {
                if (null == t3) return s;
                if (M(t3 = F(t3), o3 = F(o3)) || "string" != typeof e4) return o3;
                const n3 = t3 - 1, r3 = n3 + o3;
                return e4.substring(n3, r3);
              }, t2.MIN = xe, t2.MINA = function() {
                const e4 = v(arguments), t3 = E.apply(void 0, e4);
                if (t3) return t3;
                let o3 = g(e4);
                return o3 = o3.map((e5) => null == e5 ? 0 : e5), 0 === o3.length ? 0 : Math.min.apply(Math, o3);
              }, t2.MINUTE = function(e4) {
                return (e4 = D(e4)) instanceof Error ? e4 : e4.getMinutes();
              }, t2.MIRR = function(e4, t3, o3) {
                if (M(e4 = L(v(e4)), t3 = F(t3), o3 = F(o3))) return s;
                const n3 = e4.length, r3 = [], l2 = [];
                for (let t4 = 0; t4 < n3; t4++) e4[t4] < 0 ? r3.push(e4[t4]) : l2.push(e4[t4]);
                const i3 = -Xo(o3, l2) * Math.pow(1 + o3, n3 - 1), a2 = Xo(t3, r3) * (1 + t3);
                return Math.pow(i3 / a2, 1 / (n3 - 1)) - 1;
              }, t2.MMULT = function(e4, t3) {
                return !Array.isArray(e4) || !Array.isArray(t3) || e4.some((e5) => !e5.length) || t3.some((e5) => !e5.length) || y2(e4).some((e5) => "number" != typeof e5) || y2(t3).some((e5) => "number" != typeof e5) || e4[0].length !== t3.length ? s : Array(e4.length).fill(0).map(() => Array(t3[0].length).fill(0)).map((o3, n3) => o3.map((o4, r3) => e4[n3].reduce((e5, o5, n4) => e5 + o5 * t3[n4][r3], 0)));
              }, t2.MOD = function(e4, t3) {
                const o3 = E(e4 = F(e4), t3 = F(t3));
                if (o3) return o3;
                if (0 === t3) return i2;
                let n3 = Math.abs(e4 % t3);
                return n3 = e4 < 0 ? t3 - n3 : n3, t3 > 0 ? n3 : -n3;
              }, t2.MODE = we, t2.MODEMULT = fo, t2.MODESNGL = po, t2.MONTH = function(e4) {
                return (e4 = D(e4)) instanceof Error ? e4 : e4.getMonth() + 1;
              }, t2.MROUND = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || (e4 * t3 == 0 ? 0 : e4 * t3 < 0 ? c : Math.round(e4 / t3) * t3);
              }, t2.MULTINOMIAL = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                let t3 = 0, o3 = 1;
                for (let n3 = 0; n3 < e4.length; n3++) t3 += e4[n3], o3 *= ze(e4[n3]);
                return ze(t3) / o3;
              }, t2.MUNIT = function(e4) {
                return arguments.length > 1 ? f : !(e4 = parseInt(e4)) || e4 <= 0 ? s : Array(e4).fill(0).map(() => Array(e4).fill(0)).map((e5, t3) => (e5[t3] = 1, e5));
              }, t2.N = function(e4) {
                return J(e4) ? e4 : e4 instanceof Date ? e4.getTime() : true === e4 ? 1 : false === e4 ? 0 : K(e4) ? e4 : 0;
              }, t2.NA = function() {
                return f;
              }, t2.NEGBINOM = Ae, t2.NEGBINOMDIST = bo, t2.NETWORKDAYS = st, t2.NETWORKDAYSINTL = jo, t2.NOMINAL = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : e4 <= 0 || t3 < 1 ? c : (t3 = parseInt(t3, 10), (Math.pow(e4 + 1, 1 / t3) - 1) * t3);
              }, t2.NORM = Ee, t2.NORMDIST = ho, t2.NORMINV = go, t2.NORMSDIST = mo, t2.NORMSINV = vo, t2.NOT = function(e4) {
                return "string" == typeof e4 ? s : e4 instanceof Error ? e4 : !e4;
              }, t2.NOW = function() {
                return /* @__PURE__ */ new Date();
              }, t2.NPER = function(e4, t3, o3, n3, r3) {
                if (r3 = void 0 === r3 ? 0 : r3, n3 = void 0 === n3 ? 0 : n3, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3))) return s;
                if (0 === e4) return -(o3 + n3) / t3;
                {
                  const l2 = t3 * (1 + e4 * r3) - n3 * e4, i3 = o3 * e4 + t3 * (1 + e4 * r3);
                  return Math.log(l2 / i3) / Math.log(1 + e4);
                }
              }, t2.NPV = Xo, t2.NUMBERVALUE = function(e4, t3, o3) {
                return "number" == typeof (e4 = k(e4) ? e4 : "") ? e4 : "string" != typeof e4 ? f : (t3 = void 0 === t3 ? "." : t3, o3 = void 0 === o3 ? "," : o3, Number(e4.replace(t3, ".").replace(o3, "")));
              }, t2.OCT2BIN = function(e4, t3) {
                if (!/^[0-7]{1,10}$/.test(e4)) return c;
                const o3 = !(10 !== e4.length || "7" !== e4.substring(0, 1)), n3 = o3 ? parseInt(e4, 8) - 1073741824 : parseInt(e4, 8);
                if (n3 < -512 || n3 > 511) return c;
                if (o3) return "1" + mt("0", 9 - (512 + n3).toString(2).length) + (512 + n3).toString(2);
                const r3 = n3.toString(2);
                return void 0 === t3 ? r3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= r3.length ? mt("0", t3 - r3.length) + r3 : c;
              }, t2.OCT2DEC = function(e4) {
                if (!/^[0-7]{1,10}$/.test(e4)) return c;
                const t3 = parseInt(e4, 8);
                return t3 >= 536870912 ? t3 - 1073741824 : t3;
              }, t2.OCT2HEX = function(e4, t3) {
                if (!/^[0-7]{1,10}$/.test(e4)) return c;
                const o3 = parseInt(e4, 8);
                if (o3 >= 536870912) return "ff" + (o3 + 3221225472).toString(16);
                const n3 = o3.toString(16);
                return void 0 === t3 ? n3 : isNaN(t3) ? s : t3 < 0 ? c : (t3 = Math.floor(t3)) >= n3.length ? mt("0", t3 - n3.length) + n3 : c;
              }, t2.ODD = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                let t3 = Math.ceil(Math.abs(e4));
                return t3 = 1 & t3 ? t3 : t3 + 1, e4 >= 0 ? t3 : -t3;
              }, t2.ODDFPRICE = function() {
                throw new Error("ODDFPRICE is not implemented");
              }, t2.ODDFYIELD = function() {
                throw new Error("ODDFYIELD is not implemented");
              }, t2.ODDLPRICE = function() {
                throw new Error("ODDLPRICE is not implemented");
              }, t2.ODDLYIELD = function() {
                throw new Error("ODDLYIELD is not implemented");
              }, t2.OR = function() {
                const e4 = v(arguments);
                let t3 = s;
                for (let o3 = 0; o3 < e4.length; o3++) {
                  if (e4[o3] instanceof Error) return e4[o3];
                  void 0 !== e4[o3] && null !== e4[o3] && "string" != typeof e4[o3] && (t3 === s && (t3 = false), e4[o3] && (t3 = true));
                }
                return t3;
              }, t2.PDURATION = function(e4, t3, o3) {
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : e4 <= 0 ? c : (Math.log(o3) - Math.log(t3)) / Math.log(1 + e4);
              }, t2.PEARSON = Me, t2.PERCENTILE = Ie, t2.PERCENTILEEXC = yo, t2.PERCENTILEINC = Co, t2.PERCENTRANK = Ne, t2.PERCENTRANKEXC = xo, t2.PERCENTRANKINC = wo, t2.PERMUT = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : ze(e4) / ze(e4 - t3);
              }, t2.PERMUTATIONA = function(e4, t3) {
                return M(e4 = F(e4), t3 = F(t3)) ? s : Math.pow(e4, t3);
              }, t2.PHI = function(e4) {
                return (e4 = F(e4)) instanceof Error ? s : Math.exp(-0.5 * e4 * e4) / 2.5066282746310002;
              }, t2.PI = function() {
                return Math.PI;
              }, t2.PMT = Go, t2.POISSON = Se, t2.POISSONDIST = Ao, t2.POWER = Xe, t2.PPMT = function(e4, t3, o3, n3, r3, l2) {
                return r3 = r3 || 0, l2 = l2 || 0, M(e4 = F(e4), o3 = F(o3), n3 = F(n3), r3 = F(r3), l2 = F(l2)) ? s : Go(e4, o3, n3, r3, l2) - Wo(e4, t3, o3, n3, r3, l2);
              }, t2.PRICE = function() {
                throw new Error("PRICE is not implemented");
              }, t2.PRICEDISC = function(e4, t3, o3, n3, r3) {
                if (M(e4 = D(e4), t3 = D(t3), o3 = F(o3), n3 = F(n3), r3 = (r3 = F(r3)) || 0)) return s;
                if (o3 <= 0 || n3 <= 0) return c;
                if (e4 >= t3) return s;
                let l2, i3;
                switch (r3) {
                  case 0:
                    l2 = 360, i3 = lt(e4, t3, false);
                    break;
                  case 1:
                  case 3:
                    l2 = 365, i3 = ot(e4, t3, "D");
                    break;
                  case 2:
                    l2 = 360, i3 = ot(e4, t3, "D");
                    break;
                  case 4:
                    l2 = 360, i3 = lt(e4, t3, true);
                    break;
                  default:
                    return c;
                }
                return n3 - o3 * n3 * i3 / l2;
              }, t2.PRICEMAT = function() {
                throw new Error("PRICEMAT is not implemented");
              }, t2.PROB = function(e4, t3, o3, n3) {
                if (void 0 === o3) return 0;
                if (n3 = void 0 === n3 ? o3 : n3, M(e4 = L(v(e4)), t3 = L(v(t3)), o3 = F(o3), n3 = F(n3))) return s;
                if (o3 === n3) return e4.indexOf(o3) >= 0 ? t3[e4.indexOf(o3)] : 0;
                const r3 = e4.sort((e5, t4) => e5 - t4), l2 = r3.length;
                let i3 = 0;
                for (let s2 = 0; s2 < l2; s2++) r3[s2] >= o3 && r3[s2] <= n3 && (i3 += t3[e4.indexOf(r3[s2])]);
                return i3;
              }, t2.PRODUCT = Ge, t2.PRONETIC = function() {
                throw new Error("PRONETIC is not implemented");
              }, t2.PROPER = function(e4) {
                return M(e4) ? e4 : isNaN(e4) && "number" == typeof e4 ? s : (e4 = R(e4)).replace(/\w\S*/g, (e5) => e5.charAt(0).toUpperCase() + e5.substr(1).toLowerCase());
              }, t2.PV = function(e4, t3, o3, n3, r3) {
                return n3 = n3 || 0, r3 = r3 || 0, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3)) ? s : 0 === e4 ? -o3 * t3 - n3 : ((1 - Math.pow(1 + e4, t3)) / e4 * o3 * (1 + e4 * r3) - n3) / Math.pow(1 + e4, t3);
              }, t2.QUARTILE = De, t2.QUARTILEEXC = Eo, t2.QUARTILEINC = Mo, t2.QUOTIENT = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || parseInt(e4 / t3, 10);
              }, t2.RADIANS = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : e4 * Math.PI / 180;
              }, t2.RAND = function() {
                return Math.random();
              }, t2.RANDBETWEEN = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || e4 + Math.ceil((t3 - e4 + 1) * Math.random()) - 1;
              }, t2.RANK = Te, t2.RANKAVG = Io, t2.RANKEQ = No, t2.RATE = function(e4, t3, o3, n3, r3, l2) {
                if (l2 = void 0 === l2 ? 0.01 : l2, n3 = void 0 === n3 ? 0 : n3, r3 = void 0 === r3 ? 0 : r3, M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3), r3 = F(r3), l2 = F(l2))) return s;
                const i3 = 1e-10;
                let a2 = l2;
                r3 = r3 ? 1 : 0;
                for (let l3 = 0; l3 < 20; l3++) {
                  if (a2 <= -1) return c;
                  let l4, s2, u2;
                  if (Math.abs(a2) < i3 ? l4 = o3 * (1 + e4 * a2) + t3 * (1 + a2 * r3) * e4 + n3 : (s2 = Math.pow(1 + a2, e4), l4 = o3 * s2 + t3 * (1 / a2 + r3) * (s2 - 1) + n3), Math.abs(l4) < i3) return a2;
                  if (Math.abs(a2) < i3) u2 = o3 * e4 + t3 * r3 * e4;
                  else {
                    s2 = Math.pow(1 + a2, e4);
                    const n4 = e4 * Math.pow(1 + a2, e4 - 1);
                    u2 = o3 * n4 + t3 * (1 / a2 + r3) * n4 + t3 * (-1 / (a2 * a2)) * (s2 - 1);
                  }
                  a2 -= l4 / u2;
                }
                return a2;
              }, t2.RECEIVED = function() {
                throw new Error("RECEIVED is not implemented");
              }, t2.REPLACE = function(e4, t3, o3, n3) {
                return M(t3 = F(t3), o3 = F(o3)) || "string" != typeof e4 || "string" != typeof n3 ? s : e4.substr(0, t3 - 1) + n3 + e4.substr(t3 - 1 + o3);
              }, t2.REPT = mt, t2.RIGHT = function(e4, t3) {
                return E(e4, t3) || (e4 = R(e4), (t3 = F(t3 = void 0 === t3 ? 1 : t3)) instanceof Error ? t3 : e4.substring(e4.length - t3));
              }, t2.ROMAN = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                const t3 = String(e4).split(""), o3 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
                let n3 = "", r3 = 3;
                for (; r3--; ) n3 = (o3[+t3.pop() + 10 * r3] || "") + n3;
                return new Array(+t3.join("") + 1).join("M") + n3;
              }, t2.ROUND = Ke, t2.ROUNDDOWN = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || (e4 > 0 ? 1 : -1) * Math.floor(Math.abs(e4) * Math.pow(10, t3)) / Math.pow(10, t3);
              }, t2.ROUNDUP = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || (e4 > 0 ? 1 : -1) * Math.ceil(Math.abs(e4) * Math.pow(10, t3)) / Math.pow(10, t3);
              }, t2.ROW = function(e4, t3) {
                return 2 !== arguments.length ? f : t3 < 0 ? c : e4 instanceof Array && "number" == typeof t3 ? 0 !== e4.length ? n2.row(e4, t3) : void 0 : s;
              }, t2.ROWS = function(e4) {
                return 1 !== arguments.length ? f : e4 instanceof Array ? 0 === e4.length ? 0 : n2.rows(e4) : s;
              }, t2.RRI = function(e4, t3, o3) {
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : 0 === e4 || 0 === t3 ? c : Math.pow(o3 / t3, 1 / e4) - 1;
              }, t2.RSQ = function(e4, t3) {
                return M(e4 = L(v(e4)), t3 = L(v(t3))) ? s : Math.pow(Me(e4, t3), 2);
              }, t2.SEARCH = function(e4, t3, o3) {
                let n3;
                return "string" != typeof e4 || "string" != typeof t3 ? s : (o3 = void 0 === o3 ? 0 : o3, n3 = t3.toLowerCase().indexOf(e4.toLowerCase(), o3 - 1) + 1, 0 === n3 ? s : n3);
              }, t2.SEC = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 1 / Math.cos(e4);
              }, t2.SECH = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : 2 / (Math.exp(e4) + Math.exp(-e4));
              }, t2.SECOND = function(e4) {
                return (e4 = D(e4)) instanceof Error ? e4 : e4.getSeconds();
              }, t2.SERIESSUM = function(e4, t3, o3, n3) {
                if (M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = L(n3))) return s;
                let r3 = n3[0] * Math.pow(e4, t3);
                for (let l2 = 1; l2 < n3.length; l2++) r3 += n3[l2] * Math.pow(e4, t3 + l2 * o3);
                return r3;
              }, t2.SHEET = function() {
                throw new Error("SHEET is not implemented");
              }, t2.SHEETS = function() {
                throw new Error("SHEETS is not implemented");
              }, t2.SIGN = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : e4 < 0 ? -1 : 0 === e4 ? 0 : 1;
              }, t2.SIN = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.sin(e4);
              }, t2.SINH = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : (Math.exp(e4) - Math.exp(-e4)) / 2;
              }, t2.SKEW = Fe, t2.SKEWP = So, t2.SLN = function(e4, t3, o3) {
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : 0 === o3 ? c : (e4 - t3) / o3;
              }, t2.SLOPE = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                const o3 = n2.mean(t3), r3 = n2.mean(e4), l2 = t3.length;
                let i3 = 0, a2 = 0;
                for (let n3 = 0; n3 < l2; n3++) i3 += (t3[n3] - o3) * (e4[n3] - r3), a2 += Math.pow(t3[n3] - o3, 2);
                return i3 / a2;
              }, t2.SMALL = Le, t2.SORT = function(e4, t3 = 1, o3 = 1, n3 = false) {
                if (!e4 || !Array.isArray(e4)) return f;
                if (0 === e4.length) return 0;
                if (!(t3 = F(t3)) || t3 < 1) return s;
                if (1 !== (o3 = F(o3)) && -1 !== o3) return s;
                if ("boolean" != typeof (n3 = S(n3))) return u;
                const r3 = (e5) => e5.sort((e6, n4) => (e6 = R(e6[t3 - 1]), n4 = R(n4[t3 - 1]), 1 === o3 ? e6 < n4 ? -1 * o3 : o3 : e6 > n4 ? o3 : -1 * o3)), l2 = m(e4), i3 = n3 ? w(l2) : l2;
                return t3 >= 1 && t3 <= i3[0].length ? n3 ? w(r3(i3)) : r3(i3) : s;
              }, t2.SQRT = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : e4 < 0 ? c : Math.sqrt(e4);
              }, t2.SQRTPI = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.sqrt(e4 * Math.PI);
              }, t2.STANDARDIZE = function(e4, t3, o3) {
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : (e4 - t3) / o3;
              }, t2.STDEV = Re, t2.STDEVA = function() {
                const e4 = He.apply(this, arguments);
                return Math.sqrt(e4);
              }, t2.STDEVP = Do, t2.STDEVPA = function() {
                const e4 = Be.apply(this, arguments);
                let t3 = Math.sqrt(e4);
                return isNaN(t3) && (t3 = c), t3;
              }, t2.STDEVS = To, t2.STEYX = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                const o3 = n2.mean(t3), r3 = n2.mean(e4), l2 = t3.length;
                let i3 = 0, a2 = 0, u2 = 0;
                for (let n3 = 0; n3 < l2; n3++) i3 += Math.pow(e4[n3] - r3, 2), a2 += (t3[n3] - o3) * (e4[n3] - r3), u2 += Math.pow(t3[n3] - o3, 2);
                return Math.sqrt((i3 - a2 * a2 / u2) / (l2 - 2));
              }, t2.SUBSTITUTE = function(e4, t3, o3, n3) {
                if (arguments.length < 3) return f;
                if (e4 && t3) {
                  if (void 0 === n3) return e4.split(t3).join(o3);
                  {
                    if (n3 = Math.floor(Number(n3)), Number.isNaN(n3) || n3 <= 0) return s;
                    let r3 = 0, l2 = 0;
                    for (; r3 > -1 && e4.indexOf(t3, r3) > -1; ) if (r3 = e4.indexOf(t3, r3 + 1), l2++, r3 > -1 && l2 === n3) return e4.substring(0, r3) + o3 + e4.substring(r3 + t3.length);
                    return e4;
                  }
                }
                return e4;
              }, t2.SUBTOTAL = function(e4, t3) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                switch (e4) {
                  case 1:
                  case 101:
                    return te(t3);
                  case 2:
                  case 102:
                    return se(t3);
                  case 3:
                  case 103:
                    return ae(t3);
                  case 4:
                  case 104:
                    return ye(t3);
                  case 5:
                  case 105:
                    return xe(t3);
                  case 6:
                  case 106:
                    return Ge(t3);
                  case 7:
                  case 107:
                    return Re.S(t3);
                  case 8:
                  case 108:
                    return Re.P(t3);
                  case 9:
                  case 109:
                    return $e(t3);
                  case 10:
                  case 110:
                    return ke.S(t3);
                  case 11:
                  case 111:
                    return ke.P(t3);
                }
              }, t2.SUM = $e, t2.SUMIF = function(e4, t3, o3) {
                if (e4 = v(e4), o3 = o3 ? v(o3) : e4, e4 instanceof Error) return e4;
                if (null == t3 || t3 instanceof Error) return 0;
                let n3 = 0;
                const r3 = "*" === t3, l2 = r3 ? null : Y(t3 + "");
                for (let t4 = 0; t4 < e4.length; t4++) {
                  const i3 = e4[t4], s2 = o3[t4];
                  if (r3) n3 += i3;
                  else {
                    const e5 = [z(i3, q)].concat(l2);
                    n3 += W(e5) ? s2 : 0;
                  }
                }
                return n3;
              }, t2.SUMIFS = function() {
                const e4 = j(arguments), t3 = L(v(e4.shift()));
                if (t3 instanceof Error) return t3;
                const o3 = e4, n3 = o3.length / 2;
                for (let e5 = 0; e5 < n3; e5++) o3[2 * e5] = v(o3[2 * e5]);
                let r3 = 0;
                for (let e5 = 0; e5 < t3.length; e5++) {
                  let l2 = false;
                  for (let t4 = 0; t4 < n3; t4++) {
                    const n4 = o3[2 * t4][e5], r4 = o3[2 * t4 + 1];
                    let i3 = false;
                    if (void 0 === r4 || "*" === r4) i3 = true;
                    else {
                      const e6 = Y(r4 + ""), t5 = [z(n4, q)].concat(e6);
                      i3 = W(t5);
                    }
                    if (!i3) {
                      l2 = false;
                      break;
                    }
                    l2 = true;
                  }
                  l2 && (r3 += t3[e5]);
                }
                return r3;
              }, t2.SUMPRODUCT = function() {
                if (!arguments || 0 === arguments.length) return s;
                const e4 = arguments.length + 1;
                let t3, o3, n3, r3, l2 = 0;
                for (let i3 = 0; i3 < arguments[0].length; i3++) if (arguments[0][i3] instanceof Array) for (let n4 = 0; n4 < arguments[0][i3].length; n4++) {
                  for (t3 = 1, o3 = 1; o3 < e4; o3++) {
                    const e5 = arguments[o3 - 1][i3][n4];
                    if (e5 instanceof Error) return e5;
                    if (r3 = F(e5), r3 instanceof Error) return r3;
                    t3 *= r3;
                  }
                  l2 += t3;
                }
                else {
                  for (t3 = 1, o3 = 1; o3 < e4; o3++) {
                    const e5 = arguments[o3 - 1][i3];
                    if (e5 instanceof Error) return e5;
                    if (n3 = F(e5), n3 instanceof Error) return n3;
                    t3 *= n3;
                  }
                  l2 += t3;
                }
                return l2;
              }, t2.SUMSQ = function() {
                const e4 = L(v(arguments));
                if (e4 instanceof Error) return e4;
                let t3 = 0;
                const o3 = e4.length;
                for (let n3 = 0; n3 < o3; n3++) t3 += J(e4[n3]) ? e4[n3] * e4[n3] : 0;
                return t3;
              }, t2.SUMX2MY2 = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                let o3 = 0;
                for (let n3 = 0; n3 < e4.length; n3++) o3 += e4[n3] * e4[n3] - t3[n3] * t3[n3];
                return o3;
              }, t2.SUMX2PY2 = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                let o3 = 0;
                e4 = L(v(e4)), t3 = L(v(t3));
                for (let n3 = 0; n3 < e4.length; n3++) o3 += e4[n3] * e4[n3] + t3[n3] * t3[n3];
                return o3;
              }, t2.SUMXMY2 = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)))) return s;
                let o3 = 0;
                e4 = v(e4), t3 = v(t3);
                for (let n3 = 0; n3 < e4.length; n3++) o3 += Math.pow(e4[n3] - t3[n3], 2);
                return o3;
              }, t2.SWITCH = function() {
                let e4;
                if (arguments.length > 0) {
                  const t3 = arguments[0], o3 = arguments.length - 1, n3 = Math.floor(o3 / 2);
                  let r3 = false;
                  const l2 = o3 % 2 != 0, i3 = o3 % 2 == 0 ? null : arguments[arguments.length - 1];
                  if (n3) {
                    for (let o4 = 0; o4 < n3; o4++) if (t3 === arguments[2 * o4 + 1]) {
                      e4 = arguments[2 * o4 + 2], r3 = true;
                      break;
                    }
                  }
                  r3 || (e4 = l2 ? i3 : f);
                } else e4 = s;
                return e4;
              }, t2.SYD = function(e4, t3, o3, n3) {
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3), n3 = F(n3)) ? s : 0 === o3 || n3 < 1 || n3 > o3 ? c : (e4 - t3) * (o3 - (n3 = parseInt(n3, 10)) + 1) * 2 / (o3 * (o3 + 1));
              }, t2.T = function(e4) {
                return e4 instanceof Error || "string" == typeof e4 ? e4 : "";
              }, t2.TAN = function(e4) {
                return (e4 = F(e4)) instanceof Error ? e4 : Math.tan(e4);
              }, t2.TANH = function(e4) {
                if ((e4 = F(e4)) instanceof Error) return e4;
                const t3 = Math.exp(2 * e4);
                return (t3 - 1) / (t3 + 1);
              }, t2.TBILLEQ = function(e4, t3, o3) {
                return M(e4 = D(e4), t3 = D(t3), o3 = F(o3)) ? s : o3 <= 0 || e4 > t3 || t3 - e4 > 31536e6 ? c : 365 * o3 / (360 - o3 * lt(e4, t3, false));
              }, t2.TBILLPRICE = function(e4, t3, o3) {
                return M(e4 = D(e4), t3 = D(t3), o3 = F(o3)) ? s : o3 <= 0 || e4 > t3 || t3 - e4 > 31536e6 ? c : 100 * (1 - o3 * lt(e4, t3, false) / 360);
              }, t2.TBILLYIELD = function(e4, t3, o3) {
                return M(e4 = D(e4), t3 = D(t3), o3 = F(o3)) ? s : o3 <= 0 || e4 > t3 || t3 - e4 > 31536e6 ? c : 360 * (100 - o3) / (o3 * lt(e4, t3, false));
              }, t2.TDIST = Fo, t2.TDISTRT = Lo, t2.TEXT = function(e4, t3) {
                if (void 0 === e4 || e4 instanceof Error || t3 instanceof Error) return f;
                if (null == t3) return "";
                if ("number" == typeof t3) return String(t3);
                if ("string" != typeof t3) return s;
                const o3 = t3.startsWith("$") ? "$" : "", n3 = t3.endsWith("%");
                return n3 && (e4 *= 100), e4 = (e4 = gt(e4, (t3 = t3.replace(/%/g, "").replace(/\$/g, "")).split(".")[1].match(/0/g).length, !t3.includes(","))).startsWith("-") ? "-" + o3 + (e4 = e4.replace("-", "")) : o3 + e4, n3 && (e4 += "%"), e4;
              }, t2.TEXTJOIN = function(e4, t3, ...o3) {
                if ("boolean" != typeof t3 && (t3 = S(t3)), arguments.length < 3) return f;
                e4 = null != e4 ? e4 : "";
                let n3 = v(o3), r3 = t3 ? n3.filter((e5) => e5) : n3;
                if (Array.isArray(e4)) {
                  e4 = v(e4);
                  let t4 = r3.map((e5) => [e5]), o4 = 0;
                  for (let n4 = 0; n4 < t4.length - 1; n4++) t4[n4].push(e4[o4]), o4++, o4 === e4.length && (o4 = 0);
                  return r3 = v(t4), r3.join("");
                }
                return r3.join(e4);
              }, t2.TIME = function(e4, t3, o3) {
                return M(e4 = F(e4), t3 = F(t3), o3 = F(o3)) ? s : e4 < 0 || t3 < 0 || o3 < 0 ? c : (3600 * e4 + 60 * t3 + o3) / 86400;
              }, t2.TIMEVALUE = function(e4) {
                return (e4 = D(e4)) instanceof Error ? e4 : (3600 * e4.getHours() + 60 * e4.getMinutes() + e4.getSeconds()) / 86400;
              }, t2.TINV = Ro, t2.TODAY = function() {
                return nt(/* @__PURE__ */ new Date());
              }, t2.TRANSPOSE = function(e4) {
                return e4 ? w(m(e4)) : f;
              }, t2.TREND = function(e4, t3, o3) {
                if (M(e4 = L(v(e4)), t3 = L(v(t3)), o3 = L(v(o3)))) return s;
                const n3 = me(e4, t3), r3 = n3[0], l2 = n3[1], i3 = [];
                return o3.forEach((e5) => {
                  i3.push(r3 * e5 + l2);
                }), i3;
              }, t2.TRIM = function(e4) {
                return (e4 = R(e4)) instanceof Error ? e4 : e4.replace(/\s+/g, " ").trim();
              }, t2.TRIMMEAN = function(e4, t3) {
                if (M(e4 = L(v(e4)), t3 = F(t3))) return s;
                const o3 = Ye(e4.length * t3, 2) / 2;
                return n2.mean((l2 = (l2 = o3) || 1, (r3 = x2(e4.sort((e5, t4) => e5 - t4), o3)) && "function" == typeof r3.slice ? r3.slice(0, r3.length - l2) : r3));
                var r3, l2;
              }, t2.TRUE = function() {
                return true;
              }, t2.TRUNC = function(e4, t3) {
                return E(e4 = F(e4), t3 = F(t3)) || (e4 > 0 ? 1 : -1) * Math.floor(Math.abs(e4) * Math.pow(10, t3)) / Math.pow(10, t3);
              }, t2.TTEST = Oo, t2.TYPE = function(e4) {
                return J(e4) ? 1 : Q(e4) ? 2 : $2(e4) ? 4 : K(e4) ? 16 : Array.isArray(e4) ? 64 : void 0;
              }, t2.UNICHAR = vt, t2.UNICODE = yt, t2.UNIQUE = Z, t2.UPPER = function(e4) {
                return (e4 = R(e4)) instanceof Error ? e4 : e4.toUpperCase();
              }, t2.VALUE = function(e4) {
                const t3 = E(e4);
                if (t3) return t3;
                if ("number" == typeof e4) return e4;
                if (k(e4) || (e4 = ""), "string" != typeof e4) return s;
                const o3 = /(%)$/.test(e4) || /^(%)/.test(e4);
                if ("" === (e4 = (e4 = (e4 = e4.replace(/^[^0-9-]{0,3}/, "")).replace(/[^0-9]{0,3}$/, "")).replace(/[ ,]/g, ""))) return 0;
                let n3 = Number(e4);
                return isNaN(n3) ? s : (n3 = n3 || 0, o3 && (n3 *= 0.01), n3);
              }, t2.VAR = ke, t2.VARA = He, t2.VARP = ko, t2.VARPA = Be, t2.VARS = Ho, t2.VDB = function() {
                throw new Error("VDB is not implemented");
              }, t2.VLOOKUP = ee, t2.WEEKDAY = function(e4, t3) {
                if ((e4 = D(e4)) instanceof Error) return e4;
                void 0 === t3 && (t3 = 1);
                const o3 = e4.getDay();
                return et[t3][o3];
              }, t2.WEEKNUM = function(e4, t3) {
                if ((e4 = D(e4)) instanceof Error) return e4;
                if (void 0 === t3 && (t3 = 1), 21 === t3) return it(e4);
                const o3 = Ze[t3];
                let n3 = new Date(e4.getFullYear(), 0, 1);
                const r3 = n3.getDay() < o3 ? 1 : 0;
                return n3 -= 24 * Math.abs(n3.getDay() - o3) * 60 * 60 * 1e3, Math.floor((e4 - n3) / 864e5 / 7 + 1) + r3;
              }, t2.WEIBULL = Pe, t2.WEIBULLDIST = Bo, t2.WORKDAY = at, t2.WORKDAYINTL = Po, t2.XIRR = function(e4, t3, o3) {
                if (M(e4 = L(v(e4)), t3 = T(v(t3)), o3 = F(o3))) return s;
                const n3 = (e5, t4, o4) => {
                  const n4 = o4 + 1;
                  let r4 = e5[0];
                  for (let o5 = 1; o5 < e5.length; o5++) r4 += e5[o5] / Math.pow(n4, rt(t4[o5], t4[0]) / 365);
                  return r4;
                }, r3 = (e5, t4, o4) => {
                  const n4 = o4 + 1;
                  let r4 = 0;
                  for (let o5 = 1; o5 < e5.length; o5++) {
                    const l3 = rt(t4[o5], t4[0]) / 365;
                    r4 -= l3 * e5[o5] / Math.pow(n4, l3 + 1);
                  }
                  return r4;
                };
                let l2 = false, i3 = false;
                for (let t4 = 0; t4 < e4.length; t4++) e4[t4] > 0 && (l2 = true), e4[t4] < 0 && (i3 = true);
                if (!l2 || !i3) return c;
                let a2, u2, f2, d2 = o3 = o3 || 0.1, p2 = true;
                do {
                  f2 = n3(e4, t3, d2), a2 = d2 - f2 / r3(e4, t3, d2), u2 = Math.abs(a2 - d2), d2 = a2, p2 = u2 > 1e-10 && Math.abs(f2) > 1e-10;
                } while (p2);
                return d2;
              }, t2.XNPV = function(e4, t3, o3) {
                if (M(e4 = F(e4), t3 = L(v(t3)), o3 = T(v(o3)))) return s;
                let n3 = 0;
                for (let r3 = 0; r3 < t3.length; r3++) n3 += t3[r3] / Math.pow(1 + e4, rt(o3[r3], o3[0]) / 365);
                return n3;
              }, t2.XOR = function() {
                const e4 = v(arguments);
                let t3 = s;
                for (let o3 = 0; o3 < e4.length; o3++) {
                  if (e4[o3] instanceof Error) return e4[o3];
                  void 0 !== e4[o3] && null !== e4[o3] && "string" != typeof e4[o3] && (t3 === s && (t3 = 0), e4[o3] && t3++);
                }
                return t3 === s ? t3 : !!(1 & Math.floor(Math.abs(t3)));
              }, t2.YEAR = function(e4) {
                return (e4 = D(e4)) instanceof Error ? e4 : e4.getFullYear();
              }, t2.YEARFRAC = ft, t2.YIELD = function() {
                throw new Error("YIELD is not implemented");
              }, t2.YIELDDISC = function() {
                throw new Error("YIELDDISC is not implemented");
              }, t2.YIELDMAT = function() {
                throw new Error("YIELDMAT is not implemented");
              }, t2.Z = _e, t2.ZTEST = _o, t2.utils = Ko;
            } }, o = {};
            function n(t2) {
              var r2 = o[t2];
              if (void 0 !== r2) return r2.exports;
              var l = o[t2] = { exports: {} };
              return e2[t2].call(l.exports, l, l.exports, n), l.exports;
            }
            n.g = function() {
              if ("object" == typeof globalThis) return globalThis;
              try {
                return this || new Function("return this")();
              } catch (e3) {
                if ("object" == typeof window) return window;
              }
            }();
            var r = n(960);
            t = r;
          }(), t);
        }, 44: function(module, __unused_webpack_exports, __webpack_require__) {
          if (!formula) var formula = __webpack_require__(463);
          var factory;
          factory = function() {
            "use strict";
            var Version = (info = { title: "Jspreadsheet", version: "4.14.0", type: "CE", host: "https://bossanova.uk/jspreadsheet", license: "MIT", print: function() {
              return [this.title + " " + this.type + " " + this.version, this.host, this.license].join("\r\n");
            } }, function() {
              return info;
            }), info, isFormula = function(e) {
              var t = ("" + e)[0];
              return "=" == t || "#" == t;
            }, getMask = function(e) {
              if (e.format || e.mask || e.locale) {
                var t = {};
                return e.mask ? t.mask = e.mask : e.format ? t.mask = e.format : (t.locale = e.locale, t.options = e.options), e.decimal && (t.options || (t.options = {}), t.options = { decimal: e.decimal }), t;
              }
              return null;
            }, jexcel = function(el, options) {
              var obj = { options: {} };
              if (!(el instanceof Element || el instanceof HTMLDocument)) return console.error("Jspreadsheet: el is not a valid DOM element"), false;
              if ("TABLE" == el.tagName) {
                if (!(options = jexcel.createFromTable(el, options))) return console.error("Jspreadsheet: el is not a valid DOM element"), false;
                var div = document.createElement("div");
                el.parentNode.insertBefore(div, el), el.remove(), el = div;
              }
              var defaults = { url: null, method: "GET", requestVariables: null, data: null, sorting: null, copyCompatibility: false, root: null, rows: [], columns: [], colHeaders: [], colWidths: [], colAlignments: [], nestedHeaders: null, defaultColWidth: 50, defaultColAlign: "center", defaultRowHeight: null, minSpareRows: 0, minSpareCols: 0, minDimensions: [0, 0], allowExport: true, includeHeadersOnDownload: false, includeHeadersOnCopy: false, columnSorting: true, columnDrag: false, columnResize: true, rowResize: false, rowDrag: true, editable: true, allowInsertRow: true, allowManualInsertRow: true, allowInsertColumn: true, allowManualInsertColumn: true, allowDeleteRow: true, allowDeletingAllRows: false, allowDeleteColumn: true, allowRenameColumn: true, allowComments: false, wordWrap: false, imageOptions: null, csv: null, csvFileName: "jspreadsheet", csvHeaders: true, csvDelimiter: ",", parseTableFirstRowAsHeader: false, parseTableAutoCellType: false, selectionCopy: true, mergeCells: {}, toolbar: null, search: false, pagination: false, paginationOptions: null, fullscreen: false, lazyLoading: false, loadingSpin: false, tableOverflow: false, tableHeight: "300px", tableWidth: null, textOverflow: false, meta: null, style: null, classes: null, parseFormulas: true, autoIncrement: true, autoCasting: true, secureFormulas: true, stripHTML: true, stripHTMLOnCopy: false, filters: false, footers: null, onundo: null, onredo: null, onload: null, onchange: null, oncomments: null, onbeforechange: null, onafterchanges: null, onbeforeinsertrow: null, oninsertrow: null, onbeforeinsertcolumn: null, oninsertcolumn: null, onbeforedeleterow: null, ondeleterow: null, onbeforedeletecolumn: null, ondeletecolumn: null, onmoverow: null, onmovecolumn: null, onresizerow: null, onresizecolumn: null, onsort: null, onselection: null, oncopy: null, onpaste: null, onbeforepaste: null, onmerge: null, onfocus: null, onblur: null, onchangeheader: null, oncreateeditor: null, oneditionstart: null, oneditionend: null, onchangestyle: null, onchangemeta: null, onchangepage: null, onbeforesave: null, onsave: null, onevent: null, persistance: false, updateTable: null, detachForUpdates: false, freezeColumns: null, text: { noRecordsFound: "No records found", showingPage: "Showing page {0} of {1} entries", show: "Show ", search: "Search", entries: " entries", columnName: "Column name", insertANewColumnBefore: "Insert a new column before", insertANewColumnAfter: "Insert a new column after", deleteSelectedColumns: "Delete selected columns", renameThisColumn: "Rename this column", orderAscending: "Order ascending", orderDescending: "Order descending", insertANewRowBefore: "Insert a new row before", insertANewRowAfter: "Insert a new row after", deleteSelectedRows: "Delete selected rows", editComments: "Edit comments", addComments: "Add comments", comments: "Comments", clearComments: "Clear comments", copy: "Copy...", paste: "Paste...", saveAs: "Save as...", about: "About", areYouSureToDeleteTheSelectedRows: "Are you sure to delete the selected rows?", areYouSureToDeleteTheSelectedColumns: "Are you sure to delete the selected columns?", thisActionWillDestroyAnyExistingMergedCellsAreYouSure: "This action will destroy any existing merged cells. Are you sure?", thisActionWillClearYourSearchResultsAreYouSure: "This action will clear your search results. Are you sure?", thereIsAConflictWithAnotherMergedCell: "There is a conflict with another merged cell", invalidMergeProperties: "Invalid merged properties", cellAlreadyMerged: "Cell already merged", noCellsSelected: "No cells selected" }, about: true };
              for (var property in defaults) if (options && options.hasOwnProperty(property)) if ("text" === property) for (var textKey in obj.options[property] = defaults[property], options[property]) options[property].hasOwnProperty(textKey) && (obj.options[property][textKey] = options[property][textKey]);
              else obj.options[property] = options[property];
              else obj.options[property] = defaults[property];
              obj.el = el, obj.corner = null, obj.contextMenu = null, obj.textarea = null, obj.ads = null, obj.content = null, obj.table = null, obj.thead = null, obj.tbody = null, obj.rows = [], obj.results = null, obj.searchInput = null, obj.toolbar = null, obj.pagination = null, obj.pageNumber = null, obj.headerContainer = null, obj.colgroupContainer = null, obj.headers = [], obj.records = [], obj.history = [], obj.formula = [], obj.colgroup = [], obj.selection = [], obj.highlighted = [], obj.selectedCell = null, obj.selectedContainer = null, obj.style = [], obj.data = null, obj.filter = null, obj.filters = [], obj.cursor = null, obj.historyIndex = -1, obj.ignoreEvents = false, obj.ignoreHistory = false, obj.edition = null, obj.hashString = null, obj.resizing = null, obj.dragging = null, 1 == obj.options.lazyLoading && 0 == obj.options.tableOverflow && 0 == obj.options.fullscreen && (console.error("Jspreadsheet: The lazyloading only works when tableOverflow = yes or fullscreen = yes"), obj.options.lazyLoading = false), obj.fullscreen = function(e) {
                null == e && (e = !obj.options.fullscreen), obj.options.fullscreen != e && (obj.options.fullscreen = e, 1 == e ? el.classList.add("fullscreen") : el.classList.remove("fullscreen"));
              }, obj.dispatch = function(e) {
                if (!obj.ignoreEvents) {
                  if ("function" == typeof obj.options.onevent) var t = obj.options.onevent.apply(this, arguments);
                  "function" == typeof obj.options[e] && (t = obj.options[e].apply(this, Array.prototype.slice.call(arguments, 1)));
                }
                if ("onafterchanges" == e && obj.options.persistance) {
                  var o = 1 == obj.options.persistance ? obj.options.url : obj.options.persistance, n = obj.prepareJson(arguments[2]);
                  obj.save(o, n);
                }
                return t;
              }, obj.prepareTable = function() {
                var e = obj.options.columns.length;
                if (obj.options.data && void 0 !== obj.options.data[0]) {
                  var t = Object.keys(obj.options.data[0]);
                  t.length > e && (e = t.length);
                }
                obj.options.minDimensions[0] > e && (e = obj.options.minDimensions[0]);
                for (var o = [], n = 0; n < e; n++) obj.options.colHeaders[n] || (obj.options.colHeaders[n] = ""), obj.options.colWidths[n] || (obj.options.colWidths[n] = obj.options.defaultColWidth), obj.options.colAlignments[n] || (obj.options.colAlignments[n] = obj.options.defaultColAlign), obj.options.columns[n] ? obj.options.columns[n].type || (obj.options.columns[n].type = "text") : obj.options.columns[n] = { type: "text" }, obj.options.columns[n].name || (obj.options.columns[n].name = t && t[n] ? t[n] : n), obj.options.columns[n].source || (obj.options.columns[n].source = []), obj.options.columns[n].options || (obj.options.columns[n].options = []), obj.options.columns[n].editor || (obj.options.columns[n].editor = null), obj.options.columns[n].allowEmpty || (obj.options.columns[n].allowEmpty = false), obj.options.columns[n].title || (obj.options.columns[n].title = obj.options.colHeaders[n] ? obj.options.colHeaders[n] : ""), obj.options.columns[n].width || (obj.options.columns[n].width = obj.options.colWidths[n] ? obj.options.colWidths[n] : obj.options.defaultColWidth), obj.options.columns[n].align || (obj.options.columns[n].align = obj.options.colAlignments[n] ? obj.options.colAlignments[n] : "center"), "autocomplete" == obj.options.columns[n].type || "dropdown" == obj.options.columns[n].type ? obj.options.columns[n].url && o.push({ url: obj.options.columns[n].url, index: n, method: "GET", dataType: "json", success: function(e2) {
                  for (var t2 = 0; t2 < e2.length; t2++) obj.options.columns[this.index].source.push(e2[t2]);
                } }) : "calendar" == obj.options.columns[n].type && (obj.options.columns[n].options.format || (obj.options.columns[n].options.format = "DD/MM/YYYY"));
                o.length ? jSuites.ajax(o, function() {
                  obj.createTable();
                }) : obj.createTable();
              }, obj.createTable = function() {
                obj.table = document.createElement("table"), obj.thead = document.createElement("thead"), obj.tbody = document.createElement("tbody"), obj.headers = [], obj.colgroup = [], obj.content = document.createElement("div"), obj.content.classList.add("jexcel_content"), obj.content.onscroll = function(e2) {
                  obj.scrollControls(e2);
                }, obj.content.onwheel = function(e2) {
                  obj.wheelControls(e2);
                }, obj.toolbar = document.createElement("div"), obj.toolbar.classList.add("jexcel_toolbar");
                var e = document.createElement("div"), t = document.createTextNode(obj.options.text.search + ": ");
                obj.searchInput = document.createElement("input"), obj.searchInput.classList.add("jexcel_search"), e.appendChild(t), e.appendChild(obj.searchInput), obj.searchInput.onfocus = function() {
                  obj.resetSelection();
                };
                var o = document.createElement("div");
                if (obj.options.pagination > 0 && obj.options.paginationOptions && obj.options.paginationOptions.length > 0) {
                  obj.paginationDropdown = document.createElement("select"), obj.paginationDropdown.classList.add("jexcel_pagination_dropdown"), obj.paginationDropdown.onchange = function() {
                    obj.options.pagination = parseInt(this.value), obj.page(0);
                  };
                  for (var n = 0; n < obj.options.paginationOptions.length; n++) {
                    var r = document.createElement("option");
                    r.value = obj.options.paginationOptions[n], r.innerHTML = obj.options.paginationOptions[n], obj.paginationDropdown.appendChild(r);
                  }
                  obj.paginationDropdown.value = obj.options.pagination, o.appendChild(document.createTextNode(obj.options.text.show)), o.appendChild(obj.paginationDropdown), o.appendChild(document.createTextNode(obj.options.text.entries));
                }
                var l, i2 = document.createElement("div");
                if (i2.classList.add("jexcel_filter"), i2.appendChild(o), i2.appendChild(e), obj.colgroupContainer = document.createElement("colgroup"), (l = document.createElement("col")).setAttribute("width", "50"), obj.colgroupContainer.appendChild(l), obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) for (var s = 0; s < obj.options.nestedHeaders.length; s++) obj.thead.appendChild(obj.createNestedHeader(obj.options.nestedHeaders[s]));
                else obj.thead.appendChild(obj.createNestedHeader(obj.options.nestedHeaders));
                for (obj.headerContainer = document.createElement("tr"), (l = document.createElement("td")).classList.add("jexcel_selectall"), obj.headerContainer.appendChild(l), n = 0; n < obj.options.columns.length; n++) obj.createCellHeader(n), obj.headerContainer.appendChild(obj.headers[n]), obj.colgroupContainer.appendChild(obj.colgroup[n]);
                if (obj.thead.appendChild(obj.headerContainer), 1 == obj.options.filters) {
                  obj.filter = document.createElement("tr");
                  var a = document.createElement("td");
                  for (obj.filter.appendChild(a), n = 0; n < obj.options.columns.length; n++) (a = document.createElement("td")).innerHTML = "&nbsp;", a.setAttribute("data-x", n), a.className = "jexcel_column_filter", "hidden" == obj.options.columns[n].type && (a.style.display = "none"), obj.filter.appendChild(a);
                  obj.thead.appendChild(obj.filter);
                }
                obj.table = document.createElement("table"), obj.table.classList.add("jexcel"), obj.table.setAttribute("cellpadding", "0"), obj.table.setAttribute("cellspacing", "0"), obj.table.setAttribute("unselectable", "yes"), obj.table.appendChild(obj.colgroupContainer), obj.table.appendChild(obj.thead), obj.table.appendChild(obj.tbody), obj.options.textOverflow || obj.table.classList.add("jexcel_overflow"), obj.corner = document.createElement("div"), obj.corner.className = "jexcel_corner", obj.corner.setAttribute("unselectable", "on"), obj.corner.setAttribute("onselectstart", "return false"), 0 == obj.options.selectionCopy && (obj.corner.style.display = "none"), obj.textarea = document.createElement("textarea"), obj.textarea.className = "jexcel_textarea", obj.textarea.id = "jexcel_textarea", obj.textarea.tabIndex = "-1", obj.contextMenu = document.createElement("div"), obj.contextMenu.className = "jexcel_contextmenu", jSuites.contextmenu(obj.contextMenu, { onclick: function() {
                  obj.contextMenu.contextmenu.close(false);
                } });
                var u = document.createElement("a");
                u.setAttribute("href", "https://bossanova.uk/jspreadsheet/"), obj.ads = document.createElement("div"), obj.ads.className = "jexcel_about";
                try {
                  if ("undefined" != typeof sessionStorage && !sessionStorage.getItem("jexcel")) {
                    sessionStorage.setItem("jexcel", true);
                    var c = document.createElement("img");
                    c.src = "//bossanova.uk/jspreadsheet/logo.png", u.appendChild(c);
                  }
                } catch (e2) {
                }
                var f = document.createElement("span");
                f.innerHTML = "Jspreadsheet CE", u.appendChild(f), obj.ads.appendChild(u), document.createElement("div").classList.add("jexcel_table"), obj.pagination = document.createElement("div"), obj.pagination.classList.add("jexcel_pagination");
                var d = document.createElement("div"), p = document.createElement("div");
                if (obj.pagination.appendChild(d), obj.pagination.appendChild(p), obj.options.pagination || (obj.pagination.style.display = "none"), 1 == obj.options.search && el.appendChild(i2), obj.content.appendChild(obj.table), obj.content.appendChild(obj.corner), obj.content.appendChild(obj.textarea), el.appendChild(obj.toolbar), el.appendChild(obj.content), el.appendChild(obj.pagination), el.appendChild(obj.contextMenu), el.appendChild(obj.ads), el.classList.add("jexcel_container"), obj.options.toolbar && obj.options.toolbar.length && obj.createToolbar(), 1 == obj.options.fullscreen ? el.classList.add("fullscreen") : 1 == obj.options.tableOverflow && (obj.options.tableHeight && (obj.content.style["overflow-y"] = "auto", obj.content.style["box-shadow"] = "rgb(221 221 221) 2px 2px 5px 0.1px", obj.content.style.maxHeight = obj.options.tableHeight), obj.options.tableWidth && (obj.content.style["overflow-x"] = "auto", obj.content.style.width = obj.options.tableWidth)), 1 != obj.options.tableOverflow && obj.options.toolbar && el.classList.add("with-toolbar"), 1 == obj.options.columnDrag && obj.thead.classList.add("draggable"), 1 == obj.options.columnResize && obj.thead.classList.add("resizable"), 1 == obj.options.rowDrag && obj.tbody.classList.add("draggable"), 1 == obj.options.rowResize && obj.tbody.classList.add("resizable"), obj.setData(), obj.options.style && obj.setStyle(obj.options.style, null, null, 1, 1), obj.options.classes) {
                  var b = Object.keys(obj.options.classes);
                  for (n = 0; n < b.length; n++) {
                    var j = jexcel.getIdFromColumnName(b[n], true);
                    obj.records[j[1]][j[0]].classList.add(obj.options.classes[b[n]]);
                  }
                }
              }, obj.refresh = function() {
                obj.options.url ? (1 == obj.options.loadingSpin && jSuites.loading.show(), jSuites.ajax({ url: obj.options.url, method: obj.options.method, data: obj.options.requestVariables, dataType: "json", success: function(e) {
                  obj.options.data = e.data ? e.data : e, obj.setData(), 1 == obj.options.loadingSpin && jSuites.loading.hide();
                } })) : obj.setData();
              }, obj.setData = function(e) {
                if (e && ("string" == typeof e && (e = JSON.parse(e)), obj.options.data = e), obj.options.data || (obj.options.data = []), obj.options.data && obj.options.data[0] && !Array.isArray(obj.options.data[0])) {
                  e = [];
                  for (var t = 0; t < obj.options.data.length; t++) {
                    for (var o = [], n = 0; n < obj.options.columns.length; n++) o[n] = obj.options.data[t][obj.options.columns[n].name];
                    e.push(o);
                  }
                  obj.options.data = e;
                }
                t = 0, n = 0;
                var r = obj.options.columns.length, l = obj.options.data.length, i2 = obj.options.minDimensions[0], s = obj.options.minDimensions[1], a = i2 > r ? i2 : r, u = s > l ? s : l;
                for (t = 0; t < u; t++) for (n = 0; n < a; n++) null == obj.options.data[t] && (obj.options.data[t] = []), null == obj.options.data[t][n] && (obj.options.data[t][n] = "");
                if (obj.rows = [], obj.results = null, obj.records = [], obj.history = [], obj.historyIndex = -1, obj.tbody.innerHTML = "", 1 == obj.options.lazyLoading) {
                  var c = 0, f = obj.options.data.length < 100 ? obj.options.data.length : 100;
                  obj.options.pagination && (obj.options.pagination = false, console.error("Jspreadsheet: Pagination will be disable due the lazyLoading"));
                } else obj.options.pagination ? (obj.pageNumber || (obj.pageNumber = 0), obj.options.pagination, c = obj.options.pagination * obj.pageNumber, f = obj.options.pagination * obj.pageNumber + obj.options.pagination, obj.options.data.length < f && (f = obj.options.data.length)) : (c = 0, f = obj.options.data.length);
                for (t = 0; t < obj.options.data.length; t++) {
                  var d = obj.createRow(t, obj.options.data[t]);
                  t >= c && t < f && obj.tbody.appendChild(d);
                }
                if (1 == obj.options.lazyLoading || obj.options.pagination && obj.updatePagination(), obj.options.mergeCells) {
                  var p = Object.keys(obj.options.mergeCells);
                  for (n = 0; n < p.length; n++) {
                    var b = obj.options.mergeCells[p[n]];
                    obj.setMerge(p[n], b[0], b[1], 1);
                  }
                }
                obj.updateTable(), obj.dispatch("onload", el, obj);
              }, obj.getData = function(e, t) {
                for (var o = [], n = 0, r = 0, l = 1 == t || 0 == obj.options.copyCompatibility, i2 = obj.options.columns.length, s = obj.options.data.length, a = 0; a < s; a++) {
                  n = 0;
                  for (var u = 0; u < i2; u++) e && !obj.records[a][u].classList.contains("highlight") || (o[r] || (o[r] = []), o[r][n] = l ? obj.options.data[a][u] : obj.records[a][u].innerHTML, n++);
                  n > 0 && r++;
                }
                return o;
              }, obj.getJsonRow = function(e) {
                for (var t = obj.options.data[e], o = obj.options.columns.length, n = {}, r = 0; r < o; r++) obj.options.columns[r].name || (obj.options.columns[r].name = r), n[obj.options.columns[r].name] = t[r];
                return n;
              }, obj.getJson = function(e) {
                for (var t = [], o = obj.options.columns.length, n = obj.options.data.length, r = 0; r < n; r++) {
                  for (var l = null, i2 = 0; i2 < o; i2++) e && !obj.records[r][i2].classList.contains("highlight") || (null == l && (l = {}), obj.options.columns[i2].name || (obj.options.columns[i2].name = i2), l[obj.options.columns[i2].name] = obj.options.data[r][i2]);
                  null != l && t.push(l);
                }
                return t;
              }, obj.prepareJson = function(e) {
                for (var t = [], o = 0; o < e.length; o++) {
                  var n = e[o].x, r = e[o].y, l = obj.options.columns[n].name ? obj.options.columns[n].name : n;
                  t[r] || (t[r] = { row: r, data: {} }), t[r].data[l] = e[o].newValue;
                }
                return t.filter(function(e2) {
                  return null != e2;
                });
              }, obj.save = function(e, t) {
                var o = obj.dispatch("onbeforesave", el, obj, t);
                if (o) t = o;
                else if (false === o) return false;
                jSuites.ajax({ url: e, method: "POST", dataType: "json", data: { data: JSON.stringify(t) }, success: function(e2) {
                  obj.dispatch("onsave", el, obj, t);
                } });
              }, obj.getRowData = function(e) {
                return obj.options.data[e];
              }, obj.setRowData = function(e, t) {
                for (var o = 0; o < obj.headers.length; o++) {
                  var n = jexcel.getColumnNameFromId([o, e]);
                  null != t[o] && obj.setValue(n, t[o]);
                }
              }, obj.getColumnData = function(e) {
                for (var t = [], o = 0; o < obj.options.data.length; o++) t.push(obj.options.data[o][e]);
                return t;
              }, obj.setColumnData = function(e, t) {
                for (var o = 0; o < obj.rows.length; o++) {
                  var n = jexcel.getColumnNameFromId([e, o]);
                  null != t[o] && obj.setValue(n, t[o]);
                }
              }, obj.createRow = function(e, t) {
                obj.records[e] || (obj.records[e] = []), t || (t = obj.options.data[e]), obj.rows[e] = document.createElement("tr"), obj.rows[e].setAttribute("data-y", e);
                var o = null;
                obj.options.defaultRowHeight && (obj.rows[e].style.height = obj.options.defaultRowHeight + "px"), obj.options.rows[e] && (obj.options.rows[e].height && (obj.rows[e].style.height = obj.options.rows[e].height), obj.options.rows[e].title && (o = obj.options.rows[e].title)), o || (o = parseInt(e + 1));
                var n = document.createElement("td");
                n.innerHTML = o, n.setAttribute("data-y", e), n.className = "jexcel_row", obj.rows[e].appendChild(n);
                for (var r = 0; r < obj.options.columns.length; r++) obj.records[e][r] = obj.createCell(r, e, t[r]), obj.rows[e].appendChild(obj.records[e][r]);
                return obj.rows[e];
              }, obj.parseValue = function(e, t, o, n) {
                "=" == ("" + o).substr(0, 1) && 1 == obj.options.parseFormulas && (o = obj.executeFormula(o, e, t));
                var r = obj.options.columns[e];
                if (r && !isFormula(o)) {
                  var l = null;
                  if (l = getMask(r)) {
                    o && o == Number(o) && (o = Number(o));
                    var i2 = jSuites.mask.render(o, l, true);
                    if (n && l.mask) {
                      var s = l.mask.split(";");
                      s[1] && (s[1].match(new RegExp("\\[Red\\]", "gi")) && (o < 0 ? n.classList.add("red") : n.classList.remove("red")), s[1].match(new RegExp("\\(", "gi")) && o < 0 && (i2 = "(" + i2 + ")"));
                    }
                    i2 && (o = i2);
                  }
                }
                return o;
              };
              var validDate = function(e) {
                return "-" == (e = "" + e).substr(4, 1) && "-" == e.substr(7, 1) || 4 == (e = e.split("-"))[0].length && e[0] == Number(e[0]) && 2 == e[1].length && e[1] == Number(e[1]);
              };
              obj.createCell = function(e, t, o) {
                var n = document.createElement("td");
                if (n.setAttribute("data-x", e), n.setAttribute("data-y", t), "=" == ("" + o).substr(0, 1) && 1 == obj.options.secureFormulas) {
                  var r = secureFormula(o);
                  r != o && (o = r);
                }
                if (obj.options.columns[e].editor) false === obj.options.stripHTML || false === obj.options.columns[e].stripHTML ? n.innerHTML = o : n.textContent = o, "function" == typeof obj.options.columns[e].editor.createCell && (n = obj.options.columns[e].editor.createCell(n));
                else if ("hidden" == obj.options.columns[e].type) n.style.display = "none", n.textContent = o;
                else if ("checkbox" == obj.options.columns[e].type || "radio" == obj.options.columns[e].type) {
                  var l = document.createElement("input");
                  l.type = obj.options.columns[e].type, l.name = "c" + e, l.checked = 1 == o || 1 == o || "true" == o, l.onclick = function() {
                    obj.setValue(n, this.checked);
                  }, 1 != obj.options.columns[e].readOnly && 0 != obj.options.editable || l.setAttribute("disabled", "disabled"), n.appendChild(l), obj.options.data[t][e] = l.checked;
                } else if ("calendar" == obj.options.columns[e].type) {
                  var i2 = null;
                  if (!validDate(o)) {
                    var s = jSuites.calendar.extractDateFromString(o, obj.options.columns[e].options.format);
                    s && (i2 = s);
                  }
                  n.textContent = jSuites.calendar.getDateString(i2 || o, obj.options.columns[e].options.format);
                } else if ("dropdown" == obj.options.columns[e].type || "autocomplete" == obj.options.columns[e].type) n.classList.add("jexcel_dropdown"), n.textContent = obj.getDropDownValue(e, o);
                else if ("color" == obj.options.columns[e].type) if ("square" == obj.options.columns[e].render) {
                  var a = document.createElement("div");
                  a.className = "color", a.style.backgroundColor = o, n.appendChild(a);
                } else n.style.color = o, n.textContent = o;
                else if ("image" == obj.options.columns[e].type) {
                  if (o && "data:image" == o.substr(0, 10)) {
                    var u = document.createElement("img");
                    u.src = o, n.appendChild(u);
                  }
                } else "html" == obj.options.columns[e].type || false === obj.options.stripHTML || false === obj.options.columns[e].stripHTML ? n.innerHTML = stripScript(obj.parseValue(e, t, o, n)) : n.textContent = obj.parseValue(e, t, o, n);
                1 == obj.options.columns[e].readOnly && (n.className = "readonly");
                var c = obj.options.columns[e].align ? obj.options.columns[e].align : "center";
                return n.style.textAlign = c, 0 != obj.options.columns[e].wordWrap && (1 == obj.options.wordWrap || 1 == obj.options.columns[e].wordWrap || n.innerHTML.length > 200) && (n.style.whiteSpace = "pre-wrap"), e > 0 && 1 == this.options.textOverflow && (o || n.innerHTML ? obj.records[t][e - 1].style.overflow = "hidden" : e == obj.options.columns.length - 1 && (n.style.overflow = "hidden")), n;
              }, obj.createCellHeader = function(e) {
                var t = obj.options.columns[e].width ? obj.options.columns[e].width : obj.options.defaultColWidth, o = obj.options.columns[e].align ? obj.options.columns[e].align : obj.options.defaultColAlign;
                obj.headers[e] = document.createElement("td"), obj.options.stripHTML ? obj.headers[e].textContent = obj.options.columns[e].title ? obj.options.columns[e].title : jexcel.getColumnName(e) : obj.headers[e].innerHTML = obj.options.columns[e].title ? obj.options.columns[e].title : jexcel.getColumnName(e), obj.headers[e].setAttribute("data-x", e), obj.headers[e].style.textAlign = o, obj.options.columns[e].title && obj.headers[e].setAttribute("title", obj.headers[e].innerText), obj.options.columns[e].id && obj.headers[e].setAttribute("id", obj.options.columns[e].id), obj.colgroup[e] = document.createElement("col"), obj.colgroup[e].setAttribute("width", t), "hidden" == obj.options.columns[e].type && (obj.headers[e].style.display = "none", obj.colgroup[e].style.display = "none");
              }, obj.updateNestedHeader = function(e, t, o) {
                obj.options.nestedHeaders[t][e].title && (obj.options.nestedHeaders[t][e].title = o, obj.options.nestedHeaders[t].element.children[e + 1].textContent = o);
              }, obj.createNestedHeader = function(e) {
                var t = document.createElement("tr");
                t.classList.add("jexcel_nested");
                var o = document.createElement("td");
                t.appendChild(o), e.element = t;
                for (var n = 0, r = 0; r < e.length; r++) {
                  e[r].colspan || (e[r].colspan = 1), e[r].align || (e[r].align = "center"), e[r].title || (e[r].title = ""), e[r].id || (e[r].id = "");
                  for (var l = e[r].colspan, i2 = [], s = 0; s < l; s++) obj.options.columns[n] && "hidden" == obj.options.columns[n].type && l++, i2.push(n), n++;
                  (o = document.createElement("td")).setAttribute("data-column", i2.join(",")), o.setAttribute("colspan", e[r].colspan), o.setAttribute("align", e[r].align), o.setAttribute("id", e[r].id), o.textContent = e[r].title, t.appendChild(o);
                }
                return t;
              }, obj.createToolbar = function(e) {
                e ? obj.options.toolbar = e : e = obj.options.toolbar;
                for (var t = 0; t < e.length; t++) if ("i" == e[t].type) (l = document.createElement("i")).classList.add("jexcel_toolbar_item"), l.classList.add("material-icons"), l.setAttribute("data-k", e[t].k), l.setAttribute("data-v", e[t].v), l.setAttribute("id", e[t].id), e[t].tooltip && l.setAttribute("title", e[t].tooltip), e[t].onclick && (e[t].onclick, 1) ? l.onclick = /* @__PURE__ */ function(t2) {
                  var o2 = t2;
                  return function() {
                    e[o2].onclick(el, obj, this);
                  };
                }(t) : l.onclick = function() {
                  var e2 = this.getAttribute("data-k"), t2 = this.getAttribute("data-v");
                  obj.setStyle(obj.highlighted, e2, t2);
                }, l.textContent = e[t].content, obj.toolbar.appendChild(l);
                else if ("select" == e[t].type) {
                  var o = false;
                  (l = document.createElement("select")).classList.add("jexcel_toolbar_item"), l.setAttribute("data-k", e[t].k), e[t].tooltip && l.setAttribute("title", e[t].tooltip), e[t].onchange && (e[t].onchange, 1) ? (l.onchange = e[t].onchange, o = true) : l.onchange = function() {
                    var e2 = this.getAttribute("data-k");
                    obj.setStyle(obj.highlighted, e2, this.value);
                  };
                  for (var n = 0; n < e[t].v.length; n++) {
                    var r = document.createElement("option");
                    r.value = e[t].v[n], r.textContent = e[t].v[n], e[t].selectedValue && r.value === e[t].selectedValue && (r.selected = true), l.appendChild(r);
                  }
                  o && l.dispatchEvent(new Event("change")), obj.toolbar.appendChild(l);
                } else if ("color" == e[t].type) {
                  var l;
                  (l = document.createElement("i")).classList.add("jexcel_toolbar_item"), l.classList.add("material-icons"), l.setAttribute("data-k", e[t].k), l.setAttribute("data-v", ""), e[t].tooltip && l.setAttribute("title", e[t].tooltip), obj.toolbar.appendChild(l), l.textContent = e[t].content, jSuites.color(l, { onchange: function(e2, t2) {
                    var o2 = e2.getAttribute("data-k");
                    obj.setStyle(obj.highlighted, o2, t2);
                  } });
                }
              }, obj.setMerge = function(e, t, o, n) {
                var r = false;
                if (!e) {
                  if (!obj.highlighted.length) return alert(obj.options.text.noCellsSelected), null;
                  var l = parseInt(obj.highlighted[0].getAttribute("data-x")), i2 = parseInt(obj.highlighted[0].getAttribute("data-y")), s = parseInt(obj.highlighted[obj.highlighted.length - 1].getAttribute("data-x")), a = parseInt(obj.highlighted[obj.highlighted.length - 1].getAttribute("data-y"));
                  e = jexcel.getColumnNameFromId([l, i2]), t = s - l + 1, o = a - i2 + 1;
                }
                var u = jexcel.getIdFromColumnName(e, true);
                if (obj.options.mergeCells[e]) obj.records[u[1]][u[0]].getAttribute("data-merged") && (r = obj.options.text.cellAlreadyMerged);
                else if ((!t || t < 2) && (!o || o < 2)) r = obj.options.text.invalidMergeProperties;
                else for (var c = u[1]; c < u[1] + o; c++) for (var f = u[0]; f < u[0] + t; f++) jexcel.getColumnNameFromId([f, c]), obj.records[c][f].getAttribute("data-merged") && (r = obj.options.text.thereIsAConflictWithAnotherMergedCell);
                if (r) alert(r);
                else {
                  t > 1 ? obj.records[u[1]][u[0]].setAttribute("colspan", t) : t = 1, o > 1 ? obj.records[u[1]][u[0]].setAttribute("rowspan", o) : o = 1, obj.options.mergeCells[e] = [t, o, []], obj.records[u[1]][u[0]].setAttribute("data-merged", "true"), obj.records[u[1]][u[0]].style.overflow = "hidden";
                  for (var d = [], p = u[1]; p < u[1] + o; p++) for (var b = u[0]; b < u[0] + t; b++) u[0] == b && u[1] == p || (d.push(obj.options.data[p][b]), obj.updateCell(b, p, "", true), obj.options.mergeCells[e][2].push(obj.records[p][b]), obj.records[p][b].style.display = "none", obj.records[p][b] = obj.records[u[1]][u[0]]);
                  obj.updateSelection(obj.records[u[1]][u[0]]), n || (obj.setHistory({ action: "setMerge", column: e, colspan: t, rowspan: o, data: d }), obj.dispatch("onmerge", el, e, t, o));
                }
              }, obj.getMerge = function(e) {
                var t = {};
                if (e) t = obj.options.mergeCells[e] ? [obj.options.mergeCells[e][0], obj.options.mergeCells[e][1]] : null;
                else if (obj.options.mergeCells) {
                  obj.options.mergeCells;
                  for (var o = Object.keys(obj.options.mergeCells), n = 0; n < o.length; n++) t[o[n]] = [obj.options.mergeCells[o[n]][0], obj.options.mergeCells[o[n]][1]];
                }
                return t;
              }, obj.removeMerge = function(e, t, o) {
                if (obj.options.mergeCells[e]) {
                  var n = jexcel.getIdFromColumnName(e, true);
                  obj.records[n[1]][n[0]].removeAttribute("colspan"), obj.records[n[1]][n[0]].removeAttribute("rowspan"), obj.records[n[1]][n[0]].removeAttribute("data-merged");
                  for (var r = obj.options.mergeCells[e], l = 0, i2 = 0; i2 < r[1]; i2++) for (var s = 0; s < r[0]; s++) (i2 > 0 || s > 0) && (obj.records[n[1] + i2][n[0] + s] = r[2][l], obj.records[n[1] + i2][n[0] + s].style.display = "", t && t[l] && obj.updateCell(n[0] + s, n[1] + i2, t[l]), l++);
                  obj.updateSelection(obj.records[n[1]][n[0]], obj.records[n[1] + i2 - 1][n[0] + s - 1]), o || delete obj.options.mergeCells[e];
                }
              }, obj.destroyMerged = function(e) {
                if (obj.options.mergeCells) {
                  obj.options.mergeCells;
                  for (var t = Object.keys(obj.options.mergeCells), o = 0; o < t.length; o++) obj.removeMerge(t[o], null, e);
                }
              }, obj.isColMerged = function(e, t) {
                var o = [];
                if (obj.options.mergeCells) for (var n = Object.keys(obj.options.mergeCells), r = 0; r < n.length; r++) {
                  var l = jexcel.getIdFromColumnName(n[r], true), i2 = obj.options.mergeCells[n[r]][0], s = l[0], a = l[0] + (i2 > 1 ? i2 - 1 : 0);
                  null == t ? s <= e && a >= e && o.push(n[r]) : t ? s < e && a >= e && o.push(n[r]) : s <= e && a > e && o.push(n[r]);
                }
                return o;
              }, obj.isRowMerged = function(e, t) {
                var o = [];
                if (obj.options.mergeCells) for (var n = Object.keys(obj.options.mergeCells), r = 0; r < n.length; r++) {
                  var l = jexcel.getIdFromColumnName(n[r], true), i2 = obj.options.mergeCells[n[r]][1], s = l[1], a = l[1] + (i2 > 1 ? i2 - 1 : 0);
                  null == t ? s <= e && a >= e && o.push(n[r]) : t ? s < e && a >= e && o.push(n[r]) : s <= e && a > e && o.push(n[r]);
                }
                return o;
              }, obj.openFilter = function(e) {
                if (obj.options.filters) {
                  e = parseInt(e), obj.resetSelection();
                  var t = [];
                  if ("checkbox" == obj.options.columns[e].type) t.push({ id: "true", name: "True" }), t.push({ id: "false", name: "False" });
                  else {
                    for (var o = [], n = false, r = 0; r < obj.options.data.length; r++) {
                      var l = obj.options.data[r][e], i2 = obj.records[r][e].innerHTML;
                      l && i2 ? o[l] = i2 : n = true;
                    }
                    var s = Object.keys(o);
                    for (t = [], r = 0; r < s.length; r++) t.push({ id: s[r], name: o[s[r]] });
                    n && t.push({ value: "", id: "", name: "(Blanks)" });
                  }
                  var a = document.createElement("div");
                  obj.filter.children[e + 1].innerHTML = "", obj.filter.children[e + 1].appendChild(a), obj.filter.children[e + 1].style.paddingLeft = "0px", obj.filter.children[e + 1].style.paddingRight = "0px", obj.filter.children[e + 1].style.overflow = "initial";
                  var u = { data: t, multiple: true, autocomplete: true, opened: true, value: void 0 !== obj.filters[e] ? obj.filters[e] : null, width: "100%", position: 1 == obj.options.tableOverflow || 1 == obj.options.fullscreen, onclose: function(t2) {
                    obj.resetFilters(), obj.filters[e] = t2.dropdown.getValue(true), obj.filter.children[e + 1].innerHTML = t2.dropdown.getText(), obj.filter.children[e + 1].style.paddingLeft = "", obj.filter.children[e + 1].style.paddingRight = "", obj.filter.children[e + 1].style.overflow = "", obj.closeFilter(e), obj.refreshSelection();
                  } };
                  jSuites.dropdown(a, u);
                } else console.log("Jspreadsheet: filters not enabled.");
              }, obj.resetFilters = function() {
                if (obj.options.filters) for (var e = 0; e < obj.filter.children.length; e++) obj.filter.children[e].innerHTML = "&nbsp;", obj.filters[e] = null;
                obj.results = null, obj.updateResult();
              }, obj.closeFilter = function(e) {
                if (!e) for (var t = 0; t < obj.filter.children.length; t++) obj.filters[t] && (e = t);
                var o = function(e2, t2, o2) {
                  for (var n2 = 0; n2 < e2.length; n2++) {
                    var r2 = "" + obj.options.data[o2][t2], l = "" + obj.records[o2][t2].innerHTML;
                    if (e2[n2] == r2 || e2[n2] == l) return true;
                  }
                  return false;
                }, n = obj.filters[e];
                obj.results = [];
                for (var r = 0; r < obj.options.data.length; r++) o(n, e, r) && obj.results.push(r);
                obj.results.length || (obj.results = null), obj.updateResult();
              }, obj.openEditor = function(e, t, o) {
                var n = e.getAttribute("data-y"), r = e.getAttribute("data-x");
                obj.dispatch("oneditionstart", el, e, r, n), r > 0 && (obj.records[n][r - 1].style.overflow = "hidden");
                var l = function(t2) {
                  var o2 = e.getBoundingClientRect(), l2 = document.createElement(t2);
                  return l2.style.width = o2.width + "px", l2.style.height = o2.height - 2 + "px", l2.style.minHeight = o2.height - 2 + "px", e.classList.add("editor"), e.innerHTML = "", e.appendChild(l2), obj.dispatch("oncreateeditor", el, e, r, n, l2), l2;
                };
                if (1 == e.classList.contains("readonly")) ;
                else if (obj.edition = [obj.records[n][r], obj.records[n][r].innerHTML, r, n], obj.options.columns[r].editor) obj.options.columns[r].editor.openEditor(e, el, t, o);
                else if ("hidden" == obj.options.columns[r].type) ;
                else if ("checkbox" == obj.options.columns[r].type || "radio" == obj.options.columns[r].type) {
                  var i2 = !e.children[0].checked;
                  obj.setValue(e, i2), obj.edition = null;
                } else if ("dropdown" == obj.options.columns[r].type || "autocomplete" == obj.options.columns[r].type) {
                  if (i2 = obj.options.data[n][r], obj.options.columns[r].multiple && !Array.isArray(i2) && (i2 = i2.split(";")), "function" == typeof obj.options.columns[r].filter) var s = obj.options.columns[r].filter(el, e, r, n, obj.options.columns[r].source);
                  else s = obj.options.columns[r].source;
                  for (var a = [], u = 0; u < s.length; u++) a.push(s[u]);
                  var c = l("div"), f = { data: a, multiple: !!obj.options.columns[r].multiple, autocomplete: !(!obj.options.columns[r].autocomplete && "autocomplete" != obj.options.columns[r].type), opened: true, value: i2, width: "100%", height: c.style.minHeight, position: 1 == obj.options.tableOverflow || 1 == obj.options.fullscreen, onclose: function() {
                    obj.closeEditor(e, true);
                  } };
                  obj.options.columns[r].options && obj.options.columns[r].options.type && (f.type = obj.options.columns[r].options.type), jSuites.dropdown(c, f);
                } else if ("calendar" == obj.options.columns[r].type || "color" == obj.options.columns[r].type) i2 = obj.options.data[n][r], (c = l("input")).value = i2, 1 != obj.options.tableOverflow && 1 != obj.options.fullscreen || (obj.options.columns[r].options.position = true), obj.options.columns[r].options.value = obj.options.data[n][r], obj.options.columns[r].options.opened = true, obj.options.columns[r].options.onclose = function(t2, o2) {
                  obj.closeEditor(e, true);
                }, "color" == obj.options.columns[r].type ? jSuites.color(c, obj.options.columns[r].options) : jSuites.calendar(c, obj.options.columns[r].options), c.focus();
                else if ("html" == obj.options.columns[r].type) {
                  i2 = obj.options.data[n][r], (c = l("div")).style.position = "relative", (b = document.createElement("div")).classList.add("jexcel_richtext"), c.appendChild(b), jSuites.editor(b, { focus: true, value: i2 });
                  var d = e.getBoundingClientRect(), p = b.getBoundingClientRect();
                  window.innerHeight < d.bottom + p.height ? b.style.top = d.top - (p.height + 2) + "px" : b.style.top = d.top + "px";
                } else if ("image" == obj.options.columns[r].type) {
                  var b, j = e.children[0];
                  (c = l("div")).style.position = "relative", (b = document.createElement("div")).classList.add("jclose"), j && j.src && b.appendChild(j), c.appendChild(b), jSuites.image(b, obj.options.imageOptions), d = e.getBoundingClientRect(), p = b.getBoundingClientRect(), window.innerHeight < d.bottom + p.height ? b.style.top = d.top - (p.height + 2) + "px" : b.style.top = d.top + "px";
                } else {
                  if (i2 = 1 == t ? "" : obj.options.data[n][r], 0 == obj.options.columns[r].wordWrap || 1 != obj.options.wordWrap && 1 != obj.options.columns[r].wordWrap) c = l("input");
                  else c = l("textarea");
                  c.focus(), c.value = i2, f = obj.options.columns[r];
                  var h = null;
                  if (!isFormula(i2) && (h = getMask(f))) {
                    if (!f.disabledMaskOnEdition) if (f.mask) {
                      var g = f.mask.split(";");
                      c.setAttribute("data-mask", g[0]);
                    } else f.locale && c.setAttribute("data-locale", f.locale);
                    h.input = c, c.mask = h, jSuites.mask.render(i2, h, false);
                  }
                  c.onblur = function() {
                    obj.closeEditor(e, true);
                  }, c.scrollLeft = c.scrollWidth;
                }
              }, obj.closeEditor = function(e, t) {
                var o = parseInt(e.getAttribute("data-x")), n = parseInt(e.getAttribute("data-y"));
                if (1 == t) {
                  if (obj.options.columns[o].editor) var r = obj.options.columns[o].editor.closeEditor(e, t);
                  else if ("checkbox" == obj.options.columns[o].type || "radio" == obj.options.columns[o].type || "hidden" == obj.options.columns[o].type) ;
                  else if ("dropdown" == obj.options.columns[o].type || "autocomplete" == obj.options.columns[o].type) r = e.children[0].dropdown.close(true);
                  else if ("calendar" == obj.options.columns[o].type) r = e.children[0].calendar.close(true);
                  else if ("color" == obj.options.columns[o].type) r = e.children[0].color.close(true);
                  else if ("html" == obj.options.columns[o].type) r = e.children[0].children[0].editor.getData();
                  else if ("image" == obj.options.columns[o].type) {
                    var l = e.children[0].children[0].children[0];
                    r = l && "IMG" == l.tagName ? l.src : "";
                  } else if ("numeric" == obj.options.columns[o].type) "=" != ("" + (r = e.children[0].value)).substr(0, 1) && "" == r && (r = obj.options.columns[o].allowEmpty ? "" : 0), e.children[0].onblur = null;
                  else {
                    r = e.children[0].value, e.children[0].onblur = null;
                    var i2, s = obj.options.columns[o];
                    if ((i2 = getMask(s)) && "" !== r && !isFormula(r) && "number" != typeof r) {
                      var a = jSuites.mask.extract(r, i2, true);
                      a && "" !== a.value && (r = a.value);
                    }
                  }
                  obj.options.data[n][o] == r ? e.innerHTML = obj.edition[1] : obj.setValue(e, r);
                } else obj.options.columns[o].editor ? obj.options.columns[o].editor.closeEditor(e, t) : "dropdown" == obj.options.columns[o].type || "autocomplete" == obj.options.columns[o].type ? e.children[0].dropdown.close(true) : "calendar" == obj.options.columns[o].type ? e.children[0].calendar.close(true) : "color" == obj.options.columns[o].type ? e.children[0].color.close(true) : e.children[0].onblur = null, e.innerHTML = obj.edition && obj.edition[1] ? obj.edition[1] : "";
                obj.dispatch("oneditionend", el, e, o, n, r, t), e.classList.remove("editor"), obj.edition = null;
              }, obj.getCell = function(e) {
                var t = (e = jexcel.getIdFromColumnName(e, true))[0], o = e[1];
                return obj.records[o][t];
              }, obj.getColumnOptions = function(e, t) {
                var o = obj.options.columns[e];
                return o || (o = { type: "text" }), o;
              }, obj.getCellFromCoords = function(e, t) {
                return obj.records[t][e];
              }, obj.getLabel = function(e) {
                var t = (e = jexcel.getIdFromColumnName(e, true))[0], o = e[1];
                return obj.records[o][t].innerHTML;
              }, obj.getLabelFromCoords = function(e, t) {
                return obj.records[t][e].innerHTML;
              }, obj.getValue = function(e, t) {
                if ("object" == typeof e) var o = e.getAttribute("data-x"), n = e.getAttribute("data-y");
                else o = (e = jexcel.getIdFromColumnName(e, true))[0], n = e[1];
                var r = null;
                return null != o && null != n && (obj.records[n] && obj.records[n][o] && (t || 1 == obj.options.copyCompatibility) ? r = obj.records[n][o].innerHTML : obj.options.data[n] && "undefined" != obj.options.data[n][o] && (r = obj.options.data[n][o])), r;
              }, obj.getValueFromCoords = function(e, t, o) {
                var n = null;
                return null != e && null != t && (obj.records[t] && obj.records[t][e] && o || 1 == obj.options.copyCompatibility ? n = obj.records[t][e].innerHTML : obj.options.data[t] && "undefined" != obj.options.data[t][e] && (n = obj.options.data[t][e])), n;
              }, obj.setValue = function(e, t, o) {
                var n = [];
                if ("string" == typeof e) {
                  var r = (a = jexcel.getIdFromColumnName(e, true))[0], l = a[1];
                  n.push(obj.updateCell(r, l, t, o)), obj.updateFormulaChain(r, l, n);
                } else if (r = null, l = null, e && e.getAttribute && (r = e.getAttribute("data-x"), l = e.getAttribute("data-y")), null != r && null != l) n.push(obj.updateCell(r, l, t, o)), obj.updateFormulaChain(r, l, n);
                else {
                  var i2 = Object.keys(e);
                  if (i2.length > 0) for (var s = 0; s < i2.length; s++) {
                    var a;
                    "string" == typeof e[s] ? (r = (a = jexcel.getIdFromColumnName(e[s], true))[0], l = a[1]) : null != e[s].x && null != e[s].y ? (r = e[s].x, l = e[s].y, null != e[s].newValue ? t = e[s].newValue : null != e[s].value && (t = e[s].value)) : (r = e[s].getAttribute("data-x"), l = e[s].getAttribute("data-y")), null != r && null != l && (n.push(obj.updateCell(r, l, t, o)), obj.updateFormulaChain(r, l, n));
                  }
                }
                obj.setHistory({ action: "setValue", records: n, selection: obj.selectedCell }), obj.updateTable(), obj.onafterchanges(el, n);
              }, obj.setValueFromCoords = function(e, t, o, n) {
                var r = [];
                r.push(obj.updateCell(e, t, o, n)), obj.updateFormulaChain(e, t, r), obj.setHistory({ action: "setValue", records: r, selection: obj.selectedCell }), obj.updateTable(), obj.onafterchanges(el, r);
              }, obj.setCheckRadioValue = function() {
                for (var e = [], t = Object.keys(obj.highlighted), o = 0; o < t.length; o++) {
                  var n = obj.highlighted[o].getAttribute("data-x"), r = obj.highlighted[o].getAttribute("data-y");
                  "checkbox" != obj.options.columns[n].type && "radio" != obj.options.columns[n].type || e.push(obj.updateCell(n, r, !obj.options.data[r][n]));
                }
                e.length && (obj.setHistory({ action: "setValue", records: e, selection: obj.selectedCell }), obj.onafterchanges(el, e));
              };
              var stripScript = function(e) {
                var t = new Option();
                t.innerHTML = e;
                var o = null;
                for (e = t.getElementsByTagName("script"); o = e[0]; ) o.parentNode.removeChild(o);
                return t.innerHTML;
              };
              obj.updateCell = function(e, t, o, n) {
                if (1 != obj.records[t][e].classList.contains("readonly") || n) {
                  var r;
                  "=" == ("" + o).substr(0, 1) && 1 == obj.options.secureFormulas && (r = secureFormula(o)) != o && (o = r), null != (r = obj.dispatch("onbeforechange", el, obj.records[t][e], e, t, o)) && (o = r), obj.options.columns[e].editor && "function" == typeof obj.options.columns[e].editor.updateCell && (o = obj.options.columns[e].editor.updateCell(obj.records[t][e], o, n)), c = { x: e, y: t, col: e, row: t, newValue: o, oldValue: obj.options.data[t][e] };
                  let f = obj.options.columns[e].editor;
                  if (f) obj.options.data[t][e] = o, "function" == typeof f.setValue && f.setValue(obj.records[t][e], o);
                  else if ("checkbox" == obj.options.columns[e].type || "radio" == obj.options.columns[e].type) {
                    if ("radio" == obj.options.columns[e].type) for (var l = 0; l < obj.options.data.length; l++) obj.options.data[l][e] = false;
                    obj.records[t][e].children[0].checked = 1 == o || 1 == o || "true" == o || "TRUE" == o, obj.options.data[t][e] = obj.records[t][e].children[0].checked;
                  } else if ("dropdown" == obj.options.columns[e].type || "autocomplete" == obj.options.columns[e].type) obj.options.data[t][e] = o, obj.records[t][e].textContent = obj.getDropDownValue(e, o);
                  else if ("calendar" == obj.options.columns[e].type) {
                    var i2 = null;
                    if (!validDate(o)) {
                      var s = jSuites.calendar.extractDateFromString(o, obj.options.columns[e].options.format);
                      s && (i2 = s);
                    }
                    obj.options.data[t][e] = o, obj.records[t][e].textContent = jSuites.calendar.getDateString(i2 || o, obj.options.columns[e].options.format);
                  } else if ("color" == obj.options.columns[e].type) if (obj.options.data[t][e] = o, "square" == obj.options.columns[e].render) {
                    var a = document.createElement("div");
                    a.className = "color", a.style.backgroundColor = o, obj.records[t][e].textContent = "", obj.records[t][e].appendChild(a);
                  } else obj.records[t][e].style.color = o, obj.records[t][e].textContent = o;
                  else if ("image" == obj.options.columns[e].type) {
                    if (o = "" + o, obj.options.data[t][e] = o, obj.records[t][e].innerHTML = "", o && "data:image" == o.substr(0, 10)) {
                      var u = document.createElement("img");
                      u.src = o, obj.records[t][e].appendChild(u);
                    }
                  } else obj.options.data[t][e] = o, "html" == obj.options.columns[e].type ? obj.records[t][e].innerHTML = stripScript(obj.parseValue(e, t, o)) : false === obj.options.stripHTML || false === obj.options.columns[e].stripHTML ? obj.records[t][e].innerHTML = stripScript(obj.parseValue(e, t, o, obj.records[t][e])) : obj.records[t][e].textContent = obj.parseValue(e, t, o, obj.records[t][e]), 0 != obj.options.columns[e].wordWrap && (1 == obj.options.wordWrap || 1 == obj.options.columns[e].wordWrap || obj.records[t][e].innerHTML.length > 200) ? obj.records[t][e].style.whiteSpace = "pre-wrap" : obj.records[t][e].style.whiteSpace = "";
                  e > 0 && (obj.records[t][e - 1].style.overflow = o ? "hidden" : ""), obj.dispatch("onchange", el, obj.records[t] && obj.records[t][e] ? obj.records[t][e] : null, e, t, o, c.oldValue);
                } else var c = { x: e, y: t, col: e, row: t };
                return c;
              }, obj.copyData = function(e, t) {
                var o = obj.getData(true, true), n = obj.selectedContainer, r = parseInt(e.getAttribute("data-x")), l = parseInt(e.getAttribute("data-y")), i2 = parseInt(t.getAttribute("data-x")), s = parseInt(t.getAttribute("data-y")), a = [], u = false;
                if (n[0] == r) {
                  if (l < n[1]) var c = l - n[1];
                  else c = 1;
                  var f = 0;
                } else f = r < n[0] ? r - n[0] : 1, c = 0;
                for (var d = 0, p = 0, b = l; b <= s; b++) if (!obj.rows[b] || "none" != obj.rows[b].style.display) {
                  null == o[p] && (p = 0), d = 0, n[0] != r && (f = r < n[0] ? r - n[0] : 1);
                  for (var j = r; j <= i2; j++) {
                    if (obj.records[b][j] && !obj.records[b][j].classList.contains("readonly") && "none" != obj.records[b][j].style.display && 0 == u) {
                      if (!obj.selection.length && "" != obj.options.data[b][j]) {
                        u = true;
                        continue;
                      }
                      (null == o[p] || null == o[p][d]) && (d = 0);
                      var h = o[p][d];
                      if (h && !o[1] && 1 == obj.options.autoIncrement) {
                        if ("text" == obj.options.columns[j].type || "number" == obj.options.columns[j].type) if ("=" == ("" + h).substr(0, 1)) {
                          var g = h.match(/([A-Z]+[0-9]+)/g);
                          if (g) {
                            for (var m = [], v = 0; v < g.length; v++) {
                              var y2 = jexcel.getIdFromColumnName(g[v], 1);
                              y2[0] += f, y2[1] += c, y2[1] < 0 && (y2[1] = 0);
                              var C = jexcel.getColumnNameFromId([y2[0], y2[1]]);
                              C != g[v] && (m[g[v]] = C);
                            }
                            m && (h = obj.updateFormula(h, m));
                          }
                        } else h == Number(h) && (h = Number(h) + c);
                        else if ("calendar" == obj.options.columns[j].type) {
                          var x2 = new Date(h);
                          x2.setDate(x2.getDate() + c), h = x2.getFullYear() + "-" + jexcel.doubleDigitFormat(parseInt(x2.getMonth() + 1)) + "-" + jexcel.doubleDigitFormat(x2.getDate()) + " 00:00:00";
                        }
                      }
                      a.push(obj.updateCell(j, b, h)), obj.updateFormulaChain(j, b, a);
                    }
                    d++, n[0] != r && f++;
                  }
                  p++, c++;
                }
                obj.setHistory({ action: "setValue", records: a, selection: obj.selectedCell }), obj.updateTable(), obj.onafterchanges(el, a);
              }, obj.refreshSelection = function() {
                obj.selectedCell && obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
              }, obj.conditionalSelectionUpdate = function(e, t, o) {
                if (1 == e) {
                  if (obj.selectedCell && (t >= obj.selectedCell[1] && t <= obj.selectedCell[3] || o >= obj.selectedCell[1] && o <= obj.selectedCell[3])) return void obj.resetSelection();
                } else if (obj.selectedCell && (t >= obj.selectedCell[0] && t <= obj.selectedCell[2] || o >= obj.selectedCell[0] && o <= obj.selectedCell[2])) return void obj.resetSelection();
              }, obj.resetSelection = function(e) {
                if (obj.highlighted.length) {
                  u = 1;
                  for (var t = 0; t < obj.highlighted.length; t++) {
                    obj.highlighted[t].classList.remove("highlight"), obj.highlighted[t].classList.remove("highlight-left"), obj.highlighted[t].classList.remove("highlight-right"), obj.highlighted[t].classList.remove("highlight-top"), obj.highlighted[t].classList.remove("highlight-bottom"), obj.highlighted[t].classList.remove("highlight-selected");
                    var o = parseInt(obj.highlighted[t].getAttribute("data-x")), n = parseInt(obj.highlighted[t].getAttribute("data-y"));
                    if (obj.highlighted[t].getAttribute("data-merged")) var r = parseInt(obj.highlighted[t].getAttribute("colspan")), l = parseInt(obj.highlighted[t].getAttribute("rowspan")), i2 = r > 0 ? o + (r - 1) : o, s = l > 0 ? n + (l - 1) : n;
                    else i2 = o, s = n;
                    for (var a = o; a <= i2; a++) obj.headers[a] && obj.headers[a].classList.remove("selected");
                    for (a = n; a <= s; a++) obj.rows[a] && obj.rows[a].classList.remove("selected");
                  }
                } else var u = 0;
                return obj.highlighted = [], obj.selectedCell = null, obj.corner.style.top = "-2000px", obj.corner.style.left = "-2000px", 1 == e && 1 == u && obj.dispatch("onblur", el), u;
              }, obj.updateSelection = function(e, t, o) {
                var n = e.getAttribute("data-x"), r = e.getAttribute("data-y");
                if (t) var l = t.getAttribute("data-x"), i2 = t.getAttribute("data-y");
                else l = n, i2 = r;
                obj.updateSelectionFromCoords(n, r, l, i2, o);
              }, obj.updateSelectionFromCoords = function(e, t, o, n, r) {
                var l = obj.resetSelection();
                if (null == t && (t = 0, n = obj.rows.length - 1), null == o && (o = e), null == n && (n = t), e >= obj.headers.length && (e = obj.headers.length - 1), t >= obj.rows.length && (t = obj.rows.length - 1), o >= obj.headers.length && (o = obj.headers.length - 1), n >= obj.rows.length && (n = obj.rows.length - 1), obj.selectedCell = [e, t, o, n], null != e) {
                  if (obj.records[t][e] && obj.records[t][e].classList.add("highlight-selected"), parseInt(e) < parseInt(o)) var i2 = parseInt(e), s = parseInt(o);
                  else i2 = parseInt(o), s = parseInt(e);
                  if (parseInt(t) < parseInt(n)) var a = parseInt(t), u = parseInt(n);
                  else a = parseInt(n), u = parseInt(t);
                  for (var c = i2; c <= s; c++) for (var f = a; f <= u; f++) if (obj.records[f][c] && obj.records[f][c].getAttribute("data-merged")) {
                    var d = parseInt(obj.records[f][c].getAttribute("data-x")), p = parseInt(obj.records[f][c].getAttribute("data-y")), b = parseInt(obj.records[f][c].getAttribute("colspan")), j = parseInt(obj.records[f][c].getAttribute("rowspan"));
                    b > 1 && (d < i2 && (i2 = d), d + b > s && (s = d + b - 1)), j && (p < a && (a = p), p + j > u && (u = p + j - 1));
                  }
                  var h = null, g = null, m = null, v = null;
                  for (f = a; f <= u; f++) "none" != obj.rows[f].style.display && (null == m && (m = f), v = f);
                  for (c = i2; c <= s; c++) {
                    for (f = a; f <= u; f++) "none" != obj.rows[f].style.display && "none" != obj.records[f][c].style.display && (obj.records[f][c].classList.add("highlight"), obj.highlighted.push(obj.records[f][c]));
                    "hidden" != obj.options.columns[c].type && (null == h && (h = c), g = c);
                  }
                  for (h || (h = 0), g || (g = 0), c = h; c <= g; c++) "hidden" != obj.options.columns[c].type && obj.colgroup[c].style && "none" != obj.colgroup[c].style.display && (obj.records[m] && obj.records[m][c] && obj.records[m][c].classList.add("highlight-top"), obj.records[v] && obj.records[v][c] && obj.records[v][c].classList.add("highlight-bottom"), obj.headers[c].classList.add("selected"));
                  for (f = m; f <= v; f++) obj.rows[f] && "none" != obj.rows[f].style.display && (obj.records[f][h].classList.add("highlight-left"), obj.records[f][g].classList.add("highlight-right"), obj.rows[f].classList.add("selected"));
                  obj.selectedContainer = [h, m, g, v];
                }
                0 == l && (obj.dispatch("onfocus", el), obj.removeCopyingSelection()), obj.dispatch("onselection", el, h, m, g, v, r), obj.updateCornerPosition();
              }, obj.removeCopySelection = function() {
                for (var e = 0; e < obj.selection.length; e++) obj.selection[e].classList.remove("selection"), obj.selection[e].classList.remove("selection-left"), obj.selection[e].classList.remove("selection-right"), obj.selection[e].classList.remove("selection-top"), obj.selection[e].classList.remove("selection-bottom");
                obj.selection = [];
              }, obj.updateCopySelection = function(e, t) {
                obj.removeCopySelection();
                var o = obj.selectedContainer[0], n = obj.selectedContainer[1], r = obj.selectedContainer[2], l = obj.selectedContainer[3];
                if (null != e && null != t) {
                  if (e - r > 0) var i2 = parseInt(r) + 1, s = parseInt(e);
                  else i2 = parseInt(e), s = parseInt(o) - 1;
                  if (t - l > 0) var a = parseInt(l) + 1, u = parseInt(t);
                  else a = parseInt(t), u = parseInt(n) - 1;
                  s - i2 <= u - a ? (i2 = parseInt(o), s = parseInt(r)) : (a = parseInt(n), u = parseInt(l));
                  for (var c = a; c <= u; c++) for (var f = i2; f <= s; f++) obj.records[c][f] && "none" != obj.rows[c].style.display && "none" != obj.records[c][f].style.display && (obj.records[c][f].classList.add("selection"), obj.records[a][f].classList.add("selection-top"), obj.records[u][f].classList.add("selection-bottom"), obj.records[c][i2].classList.add("selection-left"), obj.records[c][s].classList.add("selection-right"), obj.selection.push(obj.records[c][f]));
                }
              }, obj.updateCornerPosition = function() {
                if (obj.highlighted.length) {
                  var e = obj.highlighted[obj.highlighted.length - 1], t = e.getAttribute("data-x"), o = obj.content.getBoundingClientRect(), n = o.left, r = o.top, l = e.getBoundingClientRect(), i2 = l.left, s = l.top, a = l.width, u = l.height, c = i2 - n + obj.content.scrollLeft + a - 4, f = s - r + obj.content.scrollTop + u - 4;
                  if (obj.corner.style.top = f + "px", obj.corner.style.left = c + "px", obj.options.freezeColumns) {
                    var d = obj.getFreezeWidth();
                    t > obj.options.freezeColumns - 1 && i2 - n + a < d ? obj.corner.style.display = "none" : 1 == obj.options.selectionCopy && (obj.corner.style.display = "");
                  } else 1 == obj.options.selectionCopy && (obj.corner.style.display = "");
                } else obj.corner.style.top = "-2000px", obj.corner.style.left = "-2000px";
              }, obj.updateScroll = function(e) {
                var t = obj.content.getBoundingClientRect(), o = t.left, n = t.top, r = t.width, l = t.height, i2 = obj.records[obj.selectedCell[3]][obj.selectedCell[2]].getBoundingClientRect(), s = i2.left, a = i2.top, u = i2.width, c = i2.height;
                if (0 == e || 1 == e) var f = s - o + obj.content.scrollLeft, d = a - n + obj.content.scrollTop - 2;
                else f = s - o + obj.content.scrollLeft + u, d = a - n + obj.content.scrollTop + c;
                d > obj.content.scrollTop + 30 && d < obj.content.scrollTop + l || (d < obj.content.scrollTop + 30 ? obj.content.scrollTop = d - c : obj.content.scrollTop = d - (l - 2));
                var p = obj.getFreezeWidth();
                f > obj.content.scrollLeft + p && f < obj.content.scrollLeft + r || (f < obj.content.scrollLeft + 30 ? (obj.content.scrollLeft = f, obj.content.scrollLeft < 50 && (obj.content.scrollLeft = 0)) : f < obj.content.scrollLeft + p ? obj.content.scrollLeft = f - p - 1 : obj.content.scrollLeft = f - (r - 20));
              }, obj.getWidth = function(e) {
                if (void 0 === e) for (var t = [], o = 0; o < obj.headers.length; o++) t.push(obj.options.columns[o].width);
                else "object" == typeof e && (e = e.getAttribute("data-x")), t = obj.colgroup[e].getAttribute("width");
                return t;
              }, obj.setWidth = function(e, t, o) {
                if (t) {
                  if (Array.isArray(e)) {
                    o || (o = []);
                    for (var n = 0; n < e.length; n++) {
                      o[n] || (o[n] = obj.colgroup[e[n]].getAttribute("width"));
                      var r = Array.isArray(t) && t[n] ? t[n] : t;
                      obj.colgroup[e[n]].setAttribute("width", r), obj.options.columns[e[n]].width = r;
                    }
                  } else o || (o = obj.colgroup[e].getAttribute("width")), obj.colgroup[e].setAttribute("width", t), obj.options.columns[e].width = t;
                  obj.setHistory({ action: "setWidth", column: e, oldValue: o, newValue: t }), obj.dispatch("onresizecolumn", el, e, t, o), obj.updateCornerPosition();
                }
              }, obj.setHeight = function(e, t, o) {
                t > 0 && ("object" == typeof e && (e = e.getAttribute("data-y")), o || (o = obj.rows[e].getAttribute("height")) || (o = obj.rows[e].getBoundingClientRect().height), t = parseInt(t), obj.rows[e].style.height = t + "px", obj.options.rows[e] || (obj.options.rows[e] = {}), obj.options.rows[e].height = t, obj.setHistory({ action: "setHeight", row: e, oldValue: o, newValue: t }), obj.dispatch("onresizerow", el, e, t, o), obj.updateCornerPosition());
              }, obj.getHeight = function(e) {
                if (void 0 === e) for (var t = [], o = 0; o < obj.rows.length; o++) {
                  var n = obj.rows[o].style.height;
                  n && (t[o] = n);
                }
                else "object" == typeof e && (e = $(e).getAttribute("data-y")), t = obj.rows[e].style.height;
                return t;
              }, obj.setFooter = function(e) {
                if (e && (obj.options.footers = e), obj.options.footers) {
                  obj.tfoot || (obj.tfoot = document.createElement("tfoot"), obj.table.appendChild(obj.tfoot));
                  for (var t = 0; t < obj.options.footers.length; t++) {
                    if (obj.tfoot.children[t]) var o = obj.tfoot.children[t];
                    else {
                      o = document.createElement("tr");
                      var n = document.createElement("td");
                      o.appendChild(n), obj.tfoot.appendChild(o);
                    }
                    for (var r = 0; r < obj.headers.length; r++) {
                      if (obj.options.footers[t][r] || (obj.options.footers[t][r] = ""), obj.tfoot.children[t].children[r + 1]) n = obj.tfoot.children[t].children[r + 1];
                      else {
                        n = document.createElement("td"), o.appendChild(n);
                        var l = obj.options.columns[r].align ? obj.options.columns[r].align : "center";
                        n.style.textAlign = l;
                      }
                      n.textContent = obj.parseValue(+obj.records.length + r, t, obj.options.footers[t][r]), n.style.display = obj.colgroup[r].style.display;
                    }
                  }
                }
              }, obj.getHeader = function(e) {
                return obj.headers[e].textContent;
              }, obj.setHeader = function(e, t) {
                if (obj.headers[e]) {
                  var o = obj.headers[e].textContent;
                  t || (t = prompt(obj.options.text.columnName, o)), t && (obj.headers[e].textContent = t, obj.headers[e].setAttribute("title", t), obj.options.columns[e].title = t), obj.setHistory({ action: "setHeader", column: e, oldValue: o, newValue: t }), obj.dispatch("onchangeheader", el, e, o, t);
                }
              }, obj.getHeaders = function(e) {
                for (var t = [], o = 0; o < obj.headers.length; o++) t.push(obj.getHeader(o));
                return e ? t : t.join(obj.options.csvDelimiter);
              }, obj.getMeta = function(e, t) {
                return e ? t ? obj.options.meta[e] && obj.options.meta[e][t] ? obj.options.meta[e][t] : null : obj.options.meta[e] ? obj.options.meta[e] : null : obj.options.meta;
              }, obj.setMeta = function(e, t, o) {
                if (obj.options.meta || (obj.options.meta = {}), t && o) obj.options.meta[e] || (obj.options.meta[e] = {}), obj.options.meta[e][t] = o;
                else for (var n = Object.keys(e), r = 0; r < n.length; r++) {
                  obj.options.meta[n[r]] || (obj.options.meta[n[r]] = {});
                  for (var l = Object.keys(e[n[r]]), i2 = 0; i2 < l.length; i2++) obj.options.meta[n[r]][l[i2]] = e[n[r]][l[i2]];
                }
                obj.dispatch("onchangemeta", el, e, t, o);
              }, obj.updateMeta = function(e) {
                if (obj.options.meta) {
                  for (var t = {}, o = Object.keys(obj.options.meta), n = 0; n < o.length; n++) e[o[n]] ? t[e[o[n]]] = obj.options.meta[o[n]] : t[o[n]] = obj.options.meta[o[n]];
                  obj.options.meta = t;
                }
              }, obj.getStyle = function(e, t) {
                if (e) return e = jexcel.getIdFromColumnName(e, true), t ? obj.records[e[1]][e[0]].style[t] : obj.records[e[1]][e[0]].getAttribute("style");
                for (var o = {}, n = obj.options.data[0].length, r = obj.options.data.length, l = 0; l < r; l++) for (var i2 = 0; i2 < n; i2++) {
                  var s = t ? obj.records[l][i2].style[t] : obj.records[l][i2].getAttribute("style");
                  s && (o[jexcel.getColumnNameFromId([i2, l])] = s);
                }
                return o;
              }, obj.resetStyle = function(e, t) {
                for (var o = Object.keys(e), n = 0; n < o.length; n++) {
                  var r = jexcel.getIdFromColumnName(o[n], true);
                  obj.records[r[1]] && obj.records[r[1]][r[0]] && obj.records[r[1]][r[0]].setAttribute("style", "");
                }
                obj.setStyle(e, null, null, null, t);
              }, obj.setStyle = function(e, t, o, n, r) {
                var l = {}, i2 = {}, s = function(e2, t2, o2) {
                  var r2 = jexcel.getIdFromColumnName(e2, true);
                  if (obj.records[r2[1]] && obj.records[r2[1]][r2[0]] && (0 == obj.records[r2[1]][r2[0]].classList.contains("readonly") || n)) {
                    var s2 = obj.records[r2[1]][r2[0]].style[t2];
                    s2 != o2 || n ? obj.records[r2[1]][r2[0]].style[t2] = o2 : (o2 = "", obj.records[r2[1]][r2[0]].style[t2] = ""), i2[e2] || (i2[e2] = []), l[e2] || (l[e2] = []), i2[e2].push([t2 + ":" + s2]), l[e2].push([t2 + ":" + o2]);
                  }
                };
                if (t && o) if ("string" == typeof e) s(e, t, o);
                else for (var a = [], u = 0; u < e.length; u++) {
                  var c = e[u].getAttribute("data-x"), f = e[u].getAttribute("data-y"), d = jexcel.getColumnNameFromId([c, f]);
                  a[d] || (s(d, t, o), a[d] = true);
                }
                else {
                  var p = Object.keys(e);
                  for (u = 0; u < p.length; u++) {
                    var b = e[p[u]];
                    "string" == typeof b && (b = b.split(";"));
                    for (var j = 0; j < b.length; j++) "string" == typeof b[j] && (b[j] = b[j].split(":")), b[j][0].trim() && s(p[u], b[j][0].trim(), b[j][1]);
                  }
                }
                for (p = Object.keys(i2), u = 0; u < p.length; u++) i2[p[u]] = i2[p[u]].join(";");
                for (p = Object.keys(l), u = 0; u < p.length; u++) l[p[u]] = l[p[u]].join(";");
                r || obj.setHistory({ action: "setStyle", oldValue: i2, newValue: l }), obj.dispatch("onchangestyle", el, e, t, o);
              }, obj.getComments = function(e, t) {
                if (e) return "string" == typeof e && (e = jexcel.getIdFromColumnName(e, true)), t ? [obj.records[e[1]][e[0]].getAttribute("title"), obj.records[e[1]][e[0]].getAttribute("author")] : obj.records[e[1]][e[0]].getAttribute("title") || "";
                for (var o = {}, n = 0; n < obj.options.data.length; n++) for (var r = 0; r < obj.options.columns.length; r++) {
                  var l = obj.records[n][r].getAttribute("title");
                  l && (o[e = jexcel.getColumnNameFromId([r, n])] = l);
                }
                return o;
              }, obj.setComments = function(e, t, o) {
                if ("string" == typeof e) var n = jexcel.getIdFromColumnName(e, true);
                else n = e;
                var r = obj.records[n[1]][n[0]].getAttribute("title"), l = [r, o = obj.records[n[1]][n[0]].getAttribute("data-author")];
                obj.records[n[1]][n[0]].setAttribute("title", t || ""), obj.records[n[1]][n[0]].setAttribute("data-author", o || ""), t ? obj.records[n[1]][n[0]].classList.add("jexcel_comments") : obj.records[n[1]][n[0]].classList.remove("jexcel_comments"), obj.setHistory({ action: "setComments", column: e, newValue: [t, o], oldValue: l }), obj.dispatch("oncomments", el, t, r, n, n[0], n[1]);
              }, obj.getConfig = function() {
                var e = obj.options;
                return e.style = obj.getStyle(), e.mergeCells = obj.getMerge(), e.comments = obj.getComments(), e;
              }, obj.orderBy = function(e, t) {
                if (e >= 0) {
                  if (Object.keys(obj.options.mergeCells).length > 0) {
                    if (!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) return false;
                    obj.destroyMerged();
                  }
                  t = null == t ? obj.headers[e].classList.contains("arrow-down") ? 1 : 0 : t ? 1 : 0;
                  var o = [];
                  if ("number" == obj.options.columns[e].type || "numeric" == obj.options.columns[e].type || "percentage" == obj.options.columns[e].type || "autonumber" == obj.options.columns[e].type || "color" == obj.options.columns[e].type) for (var n = 0; n < obj.options.data.length; n++) o[n] = [n, Number(obj.options.data[n][e])];
                  else if ("calendar" == obj.options.columns[e].type || "checkbox" == obj.options.columns[e].type || "radio" == obj.options.columns[e].type) for (n = 0; n < obj.options.data.length; n++) o[n] = [n, obj.options.data[n][e]];
                  else for (n = 0; n < obj.options.data.length; n++) o[n] = [n, obj.records[n][e].textContent.toLowerCase()];
                  "function" != typeof obj.options.sorting && (obj.options.sorting = function(e2) {
                    return function(t2, o2) {
                      var n2 = t2[1], r2 = o2[1];
                      return e2 ? "" === n2 && "" !== r2 ? 1 : "" !== n2 && "" === r2 || n2 > r2 ? -1 : n2 < r2 ? 1 : 0 : "" === n2 && "" !== r2 ? 1 : "" !== n2 && "" === r2 ? -1 : n2 > r2 ? 1 : n2 < r2 ? -1 : 0;
                    };
                  }), o = o.sort(obj.options.sorting(t));
                  var r = [];
                  for (n = 0; n < o.length; n++) r[n] = o[n][0];
                  return obj.setHistory({ action: "orderBy", rows: r, column: e, order: t }), obj.updateOrderArrow(e, t), obj.updateOrder(r), obj.dispatch("onsort", el, e, t), true;
                }
              }, obj.updateOrderArrow = function(e, t) {
                for (var o = 0; o < obj.headers.length; o++) obj.headers[o].classList.remove("arrow-up"), obj.headers[o].classList.remove("arrow-down");
                t ? obj.headers[e].classList.add("arrow-up") : obj.headers[e].classList.add("arrow-down");
              }, obj.updateOrder = function(e) {
                for (var t = [], o = 0; o < e.length; o++) t[o] = obj.options.data[e[o]];
                for (obj.options.data = t, t = [], o = 0; o < e.length; o++) t[o] = obj.records[e[o]];
                for (obj.records = t, t = [], o = 0; o < e.length; o++) t[o] = obj.rows[e[o]];
                if (obj.rows = t, obj.updateTableReferences(), obj.results && obj.results.length) obj.searchInput.value ? obj.search(obj.searchInput.value) : obj.closeFilter();
                else if (obj.results = null, obj.pageNumber = 0, obj.options.pagination > 0) obj.page(0);
                else if (1 == obj.options.lazyLoading) obj.loadPage(0);
                else for (o = 0; o < obj.rows.length; o++) obj.tbody.appendChild(obj.rows[o]);
              }, obj.moveRow = function(e, t, o) {
                if (Object.keys(obj.options.mergeCells).length > 0) {
                  if (e > t) var n = 1;
                  else n = 0;
                  if (obj.isRowMerged(e).length || obj.isRowMerged(t, n).length) {
                    if (!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) return false;
                    obj.destroyMerged();
                  }
                }
                if (1 == obj.options.search) {
                  if (obj.results && obj.results.length != obj.rows.length) {
                    if (!confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure)) return false;
                    obj.resetSearch();
                  }
                  obj.results = null;
                }
                o || (Array.prototype.indexOf.call(obj.tbody.children, obj.rows[t]) >= 0 ? e > t ? obj.tbody.insertBefore(obj.rows[e], obj.rows[t]) : obj.tbody.insertBefore(obj.rows[e], obj.rows[t].nextSibling) : obj.tbody.removeChild(obj.rows[e])), obj.rows.splice(t, 0, obj.rows.splice(e, 1)[0]), obj.records.splice(t, 0, obj.records.splice(e, 1)[0]), obj.options.data.splice(t, 0, obj.options.data.splice(e, 1)[0]), obj.options.pagination > 0 && obj.tbody.children.length != obj.options.pagination && obj.page(obj.pageNumber), obj.setHistory({ action: "moveRow", oldValue: e, newValue: t }), obj.updateTableReferences(), obj.dispatch("onmoverow", el, e, t);
              }, obj.insertRow = function(e, t, o) {
                if (1 == obj.options.allowInsertRow) {
                  var n = [];
                  if (e > 0) var r = e;
                  else r = 1, e && (n = e);
                  o = !!o;
                  var l = obj.options.data.length - 1;
                  if ((null == t || t >= parseInt(l) || t < 0) && (t = l), false === obj.dispatch("onbeforeinsertrow", el, t, r, o)) return false;
                  if (Object.keys(obj.options.mergeCells).length > 0 && obj.isRowMerged(t, o).length) {
                    if (!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) return false;
                    obj.destroyMerged();
                  }
                  if (1 == obj.options.search) {
                    if (obj.results && obj.results.length != obj.rows.length) {
                      if (!confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure)) return false;
                      obj.resetSearch();
                    }
                    obj.results = null;
                  }
                  for (var i2 = o ? t : t + 1, s = obj.records.splice(i2), a = obj.options.data.splice(i2), u = obj.rows.splice(i2), c = [], f = [], d = [], p = i2; p < r + i2; p++) {
                    obj.options.data[p] = [];
                    for (var b = 0; b < obj.options.columns.length; b++) obj.options.data[p][b] = n[b] ? n[b] : "";
                    var j = obj.createRow(p, obj.options.data[p]);
                    u[0] ? Array.prototype.indexOf.call(obj.tbody.children, u[0]) >= 0 && obj.tbody.insertBefore(j, u[0]) : Array.prototype.indexOf.call(obj.tbody.children, obj.rows[t]) >= 0 && obj.tbody.appendChild(j), c.push(obj.records[p]), f.push(obj.options.data[p]), d.push(j);
                  }
                  Array.prototype.push.apply(obj.records, s), Array.prototype.push.apply(obj.options.data, a), Array.prototype.push.apply(obj.rows, u), obj.options.pagination > 0 && obj.page(obj.pageNumber), obj.setHistory({ action: "insertRow", rowNumber: t, numOfRows: r, insertBefore: o, rowRecords: c, rowData: f, rowNode: d }), obj.updateTableReferences(), obj.dispatch("oninsertrow", el, t, r, c, o);
                }
              }, obj.deleteRow = function(e, t) {
                if (1 == obj.options.allowDeleteRow) if (1 == obj.options.allowDeletingAllRows || obj.options.data.length > 1) {
                  if (null == e) {
                    var o = obj.getSelectedRows();
                    o[0] ? (e = parseInt(o[0].getAttribute("data-y")), t = o.length) : (e = obj.options.data.length - 1, t = 1);
                  }
                  var n = obj.options.data.length - 1;
                  if ((null == e || e > n || e < 0) && (e = n), t || (t = 1), e + t >= obj.options.data.length && (t = obj.options.data.length - e), false === obj.dispatch("onbeforedeleterow", el, e, t)) return false;
                  if (parseInt(e) > -1) {
                    var r = false;
                    if (Object.keys(obj.options.mergeCells).length > 0) for (var l = e; l < e + t; l++) obj.isRowMerged(l, false).length && (r = true);
                    if (r) {
                      if (!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) return false;
                      obj.destroyMerged();
                    }
                    if (1 == obj.options.search) {
                      if (obj.results && obj.results.length != obj.rows.length) {
                        if (!confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure)) return false;
                        obj.resetSearch();
                      }
                      obj.results = null;
                    }
                    for (0 == obj.options.allowDeletingAllRows && n + 1 === t && (t--, console.error("Jspreadsheet: It is not possible to delete the last row")), l = e; l < e + t; l++) Array.prototype.indexOf.call(obj.tbody.children, obj.rows[l]) >= 0 && (obj.rows[l].className = "", obj.rows[l].parentNode.removeChild(obj.rows[l]));
                    var i2 = obj.records.splice(e, t), s = obj.options.data.splice(e, t), a = obj.rows.splice(e, t);
                    obj.options.pagination > 0 && obj.tbody.children.length != obj.options.pagination && obj.page(obj.pageNumber), obj.conditionalSelectionUpdate(1, e, e + t - 1), obj.setHistory({ action: "deleteRow", rowNumber: e, numOfRows: t, insertBefore: 1, rowRecords: i2, rowData: s, rowNode: a }), obj.updateTableReferences(), obj.dispatch("ondeleterow", el, e, t, i2);
                  }
                } else console.error("Jspreadsheet: It is not possible to delete the last row");
              }, obj.moveColumn = function(e, t) {
                if (Object.keys(obj.options.mergeCells).length > 0) {
                  if (e > t) var o = 1;
                  else o = 0;
                  if (obj.isColMerged(e).length || obj.isColMerged(t, o).length) {
                    if (!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) return false;
                    obj.destroyMerged();
                  }
                }
                if ((e = parseInt(e)) > (t = parseInt(t))) {
                  obj.headerContainer.insertBefore(obj.headers[e], obj.headers[t]), obj.colgroupContainer.insertBefore(obj.colgroup[e], obj.colgroup[t]);
                  for (var n = 0; n < obj.rows.length; n++) obj.rows[n].insertBefore(obj.records[n][e], obj.records[n][t]);
                } else for (obj.headerContainer.insertBefore(obj.headers[e], obj.headers[t].nextSibling), obj.colgroupContainer.insertBefore(obj.colgroup[e], obj.colgroup[t].nextSibling), n = 0; n < obj.rows.length; n++) obj.rows[n].insertBefore(obj.records[n][e], obj.records[n][t].nextSibling);
                for (obj.options.columns.splice(t, 0, obj.options.columns.splice(e, 1)[0]), obj.headers.splice(t, 0, obj.headers.splice(e, 1)[0]), obj.colgroup.splice(t, 0, obj.colgroup.splice(e, 1)[0]), n = 0; n < obj.rows.length; n++) obj.options.data[n].splice(t, 0, obj.options.data[n].splice(e, 1)[0]), obj.records[n].splice(t, 0, obj.records[n].splice(e, 1)[0]);
                if (obj.options.footers) for (n = 0; n < obj.options.footers.length; n++) obj.options.footers[n].splice(t, 0, obj.options.footers[n].splice(e, 1)[0]);
                obj.setHistory({ action: "moveColumn", oldValue: e, newValue: t }), obj.updateTableReferences(), obj.dispatch("onmovecolumn", el, e, t);
              }, obj.insertColumn = function(e, t, o, n) {
                if (1 == obj.options.allowInsertColumn) {
                  var r = [];
                  if (e > 0) var l = e;
                  else l = 1, e && (r = e);
                  o = !!o;
                  var i2 = obj.options.columns.length - 1;
                  if ((null == t || t >= parseInt(i2) || t < 0) && (t = i2), false === obj.dispatch("onbeforeinsertcolumn", el, t, l, o)) return false;
                  if (Object.keys(obj.options.mergeCells).length > 0 && obj.isColMerged(t, o).length) {
                    if (!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) return false;
                    obj.destroyMerged();
                  }
                  n || (n = []);
                  for (var s = 0; s < l; s++) n[s] || (n[s] = { type: "text", source: [], options: [], width: obj.options.defaultColWidth, align: obj.options.defaultColAlign });
                  var a = o ? t : t + 1;
                  obj.options.columns = jexcel.injectArray(obj.options.columns, a, n);
                  for (var u = obj.headers.splice(a), c = obj.colgroup.splice(a), f = [], d = [], p = [], b = [], j = [], h = a; h < l + a; h++) obj.createCellHeader(h), obj.headerContainer.insertBefore(obj.headers[h], obj.headerContainer.children[h + 1]), obj.colgroupContainer.insertBefore(obj.colgroup[h], obj.colgroupContainer.children[h + 1]), f.push(obj.headers[h]), d.push(obj.colgroup[h]);
                  if (obj.options.footers) for (var g = 0; g < obj.options.footers.length; g++) {
                    for (j[g] = [], s = 0; s < l; s++) j[g].push("");
                    obj.options.footers[g].splice(a, 0, j[g]);
                  }
                  for (var m = 0; m < obj.options.data.length; m++) {
                    var v = obj.options.data[m].splice(a), y2 = obj.records[m].splice(a);
                    for (b[m] = [], p[m] = [], h = a; h < l + a; h++) {
                      var C = r[m] ? r[m] : "";
                      obj.options.data[m][h] = C;
                      var x2 = obj.createCell(h, m, obj.options.data[m][h]);
                      obj.records[m][h] = x2, obj.rows[m] && obj.rows[m].insertBefore(x2, obj.rows[m].children[h + 1]), b[m].push(C), p[m].push(x2);
                    }
                    Array.prototype.push.apply(obj.options.data[m], v), Array.prototype.push.apply(obj.records[m], y2);
                  }
                  if (Array.prototype.push.apply(obj.headers, u), Array.prototype.push.apply(obj.colgroup, c), obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) for (g = 0; g < obj.options.nestedHeaders.length; g++) {
                    var w = parseInt(obj.options.nestedHeaders[g][obj.options.nestedHeaders[g].length - 1].colspan) + l;
                    obj.options.nestedHeaders[g][obj.options.nestedHeaders[g].length - 1].colspan = w, obj.thead.children[g].children[obj.thead.children[g].children.length - 1].setAttribute("colspan", w);
                    var A = obj.thead.children[g].children[obj.thead.children[g].children.length - 1].getAttribute("data-column");
                    for (A = A.split(","), h = a; h < l + a; h++) A.push(h);
                    obj.thead.children[g].children[obj.thead.children[g].children.length - 1].setAttribute("data-column", A);
                  }
                  else w = parseInt(obj.options.nestedHeaders[0].colspan) + l, obj.options.nestedHeaders[0].colspan = w, obj.thead.children[0].children[obj.thead.children[0].children.length - 1].setAttribute("colspan", w);
                  obj.setHistory({ action: "insertColumn", columnNumber: t, numOfColumns: l, insertBefore: o, columns: n, headers: f, colgroup: d, records: p, footers: j, data: b }), obj.updateTableReferences(), obj.dispatch("oninsertcolumn", el, t, l, p, o);
                }
              }, obj.deleteColumn = function(e, t) {
                if (1 == obj.options.allowDeleteColumn) if (obj.headers.length > 1) {
                  if (null == e) {
                    var o = obj.getSelectedColumns(true);
                    o.length ? (e = parseInt(o[0]), t = parseInt(o.length)) : (e = obj.headers.length - 1, t = 1);
                  }
                  var n = obj.options.data[0].length - 1;
                  if ((null == e || e > n || e < 0) && (e = n), t || (t = 1), t > obj.options.data[0].length - e && (t = obj.options.data[0].length - e), false === obj.dispatch("onbeforedeletecolumn", el, e, t)) return false;
                  if (parseInt(e) > -1) {
                    var r = false;
                    if (Object.keys(obj.options.mergeCells).length > 0) for (var l = e; l < e + t; l++) obj.isColMerged(l, false).length && (r = true);
                    if (r) {
                      if (!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) return false;
                      obj.destroyMerged();
                    }
                    var i2 = obj.options.columns.splice(e, t);
                    for (l = e; l < e + t; l++) obj.colgroup[l].className = "", obj.headers[l].className = "", obj.colgroup[l].parentNode.removeChild(obj.colgroup[l]), obj.headers[l].parentNode.removeChild(obj.headers[l]);
                    for (var s = obj.headers.splice(e, t), a = obj.colgroup.splice(e, t), u = [], c = [], f = [], d = 0; d < obj.options.data.length; d++) for (l = e; l < e + t; l++) obj.records[d][l].className = "", obj.records[d][l].parentNode.removeChild(obj.records[d][l]);
                    for (d = 0; d < obj.options.data.length; d++) c[d] = obj.options.data[d].splice(e, t), u[d] = obj.records[d].splice(e, t);
                    if (obj.options.footers) for (d = 0; d < obj.options.footers.length; d++) f[d] = obj.options.footers[d].splice(e, t);
                    if (obj.conditionalSelectionUpdate(0, e, e + t - 1), obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) for (var p = 0; p < obj.options.nestedHeaders.length; p++) {
                      var b = parseInt(obj.options.nestedHeaders[p][obj.options.nestedHeaders[p].length - 1].colspan) - t;
                      obj.options.nestedHeaders[p][obj.options.nestedHeaders[p].length - 1].colspan = b, obj.thead.children[p].children[obj.thead.children[p].children.length - 1].setAttribute("colspan", b);
                    }
                    else b = parseInt(obj.options.nestedHeaders[0].colspan) - t, obj.options.nestedHeaders[0].colspan = b, obj.thead.children[0].children[obj.thead.children[0].children.length - 1].setAttribute("colspan", b);
                    obj.setHistory({ action: "deleteColumn", columnNumber: e, numOfColumns: t, insertBefore: 1, columns: i2, headers: s, colgroup: a, records: u, footers: f, data: c }), obj.updateTableReferences(), obj.dispatch("ondeletecolumn", el, e, t, u);
                  }
                } else console.error("Jspreadsheet: It is not possible to delete the last column");
              }, obj.getSelectedRows = function(e) {
                for (var t = [], o = 0; o < obj.rows.length; o++) obj.rows[o].classList.contains("selected") && (e ? t.push(o) : t.push(obj.rows[o]));
                return t;
              }, obj.getSelectedColumns = function() {
                for (var e = [], t = 0; t < obj.headers.length; t++) obj.headers[t].classList.contains("selected") && e.push(t);
                return e;
              }, obj.getHighlighted = function() {
                return obj.highlighted;
              }, obj.updateTableReferences = function() {
                for (var e = 0; e < obj.headers.length; e++) (l = obj.headers[e].getAttribute("data-x")) != e && (obj.headers[e].setAttribute("data-x", e), obj.headers[e].getAttribute("title") || (obj.headers[e].innerHTML = jexcel.getColumnName(e)));
                for (var t = 0; t < obj.rows.length; t++) obj.rows[t] && (i2 = obj.rows[t].getAttribute("data-y")) != t && (obj.rows[t].setAttribute("data-y", t), obj.rows[t].children[0].setAttribute("data-y", t), obj.rows[t].children[0].innerHTML = t + 1);
                var o = [], n = [], r = function(e2, t2, n2, r2) {
                  if (e2 != n2 && obj.records[r2][n2].setAttribute("data-x", n2), t2 != r2 && obj.records[r2][n2].setAttribute("data-y", r2), e2 != n2 || t2 != r2) {
                    var l2 = jexcel.getColumnNameFromId([e2, t2]), i3 = jexcel.getColumnNameFromId([n2, r2]);
                    o[l2] = i3;
                  }
                };
                for (t = 0; t < obj.records.length; t++) for (e = 0; e < obj.records[0].length; e++) if (obj.records[t][e]) {
                  var l = obj.records[t][e].getAttribute("data-x"), i2 = obj.records[t][e].getAttribute("data-y");
                  if (obj.records[t][e].getAttribute("data-merged")) {
                    var s = jexcel.getColumnNameFromId([l, i2]), a = jexcel.getColumnNameFromId([e, t]);
                    if (null == n[s]) if (s == a) n[s] = false;
                    else {
                      var u = parseInt(e - l), c = parseInt(t - i2);
                      n[s] = [a, u, c];
                    }
                  } else r(l, i2, e, t);
                }
                var f = Object.keys(n);
                if (f.length) {
                  for (e = 0; e < f.length; e++) if (n[f[e]]) {
                    var d = jexcel.getIdFromColumnName(f[e], true);
                    for (r(l = d[0], i2 = d[1], l + n[f[e]][1], i2 + n[f[e]][2]), s = f[e], a = n[f[e]][0], t = 0; t < obj.options.mergeCells[s][2].length; t++) l = parseInt(obj.options.mergeCells[s][2][t].getAttribute("data-x")), i2 = parseInt(obj.options.mergeCells[s][2][t].getAttribute("data-y")), obj.options.mergeCells[s][2][t].setAttribute("data-x", l + n[f[e]][1]), obj.options.mergeCells[s][2][t].setAttribute("data-y", i2 + n[f[e]][2]);
                    obj.options.mergeCells[a] = obj.options.mergeCells[s], delete obj.options.mergeCells[s];
                  }
                }
                obj.updateFormulas(o), obj.updateMeta(o), obj.refreshSelection(), obj.updateTable();
              }, obj.updateTable = function() {
                if (obj.options.minSpareRows > 0) {
                  for (var e = 0, t = obj.rows.length - 1; t >= 0; t--) {
                    for (var o = false, n = 0; n < obj.headers.length; n++) obj.options.data[t][n] && (o = true);
                    if (o) break;
                    e++;
                  }
                  obj.options.minSpareRows - e > 0 && obj.insertRow(obj.options.minSpareRows - e);
                }
                if (obj.options.minSpareCols > 0) {
                  var r = 0;
                  for (n = obj.headers.length - 1; n >= 0; n--) {
                    for (o = false, t = 0; t < obj.rows.length; t++) obj.options.data[t][n] && (o = true);
                    if (o) break;
                    r++;
                  }
                  obj.options.minSpareCols - r > 0 && obj.insertColumn(obj.options.minSpareCols - r);
                }
                if ("function" == typeof obj.options.updateTable) {
                  for (obj.options.detachForUpdates && el.removeChild(obj.content), t = 0; t < obj.rows.length; t++) for (n = 0; n < obj.headers.length; n++) obj.options.updateTable(el, obj.records[t][n], n, t, obj.options.data[t][n], obj.records[t][n].textContent, jexcel.getColumnNameFromId([n, t]));
                  obj.options.detachForUpdates && el.insertBefore(obj.content, obj.pagination);
                }
                obj.options.footers && obj.setFooter(), setTimeout(function() {
                  obj.updateCornerPosition();
                }, 0);
              }, obj.isReadOnly = function(e) {
                if (e = obj.getCell(e)) return !!e.classList.contains("readonly");
              }, obj.setReadOnly = function(e, t) {
                (e = obj.getCell(e)) && (t ? e.classList.add("readonly") : e.classList.remove("readonly"));
              }, obj.showRow = function(e) {
                obj.rows[e].style.display = "";
              }, obj.hideRow = function(e) {
                obj.rows[e].style.display = "none";
              }, obj.showColumn = function(e) {
                obj.headers[e].style.display = "", obj.colgroup[e].style.display = "", obj.filter && obj.filter.children.length > e + 1 && (obj.filter.children[e + 1].style.display = "");
                for (var t = 0; t < obj.options.data.length; t++) obj.records[t][e].style.display = "";
                obj.options.footers && obj.setFooter(), obj.resetSelection();
              }, obj.hideColumn = function(e) {
                obj.headers[e].style.display = "none", obj.colgroup[e].style.display = "none", obj.filter && obj.filter.children.length > e + 1 && (obj.filter.children[e + 1].style.display = "none");
                for (var t = 0; t < obj.options.data.length; t++) obj.records[t][e].style.display = "none";
                obj.options.footers && obj.setFooter(), obj.resetSelection();
              }, obj.showIndex = function() {
                obj.table.classList.remove("jexcel_hidden_index");
              }, obj.hideIndex = function() {
                obj.table.classList.add("jexcel_hidden_index");
              };
              var chainLoopProtection = [];
              obj.updateFormulaChain = function(e, t, o) {
                var n = jexcel.getColumnNameFromId([e, t]);
                if (obj.formula[n] && obj.formula[n].length > 0) if (chainLoopProtection[n]) obj.records[t][e].innerHTML = "#ERROR", obj.formula[n] = "";
                else {
                  chainLoopProtection[n] = true;
                  for (var r = 0; r < obj.formula[n].length; r++) {
                    var l = jexcel.getIdFromColumnName(obj.formula[n][r], true), i2 = "" + obj.options.data[l[1]][l[0]];
                    "=" == i2.substr(0, 1) ? o.push(obj.updateCell(l[0], l[1], i2, true)) : Object.keys(obj.formula)[r] = null, obj.updateFormulaChain(l[0], l[1], o);
                  }
                }
                chainLoopProtection = [];
              }, obj.updateFormulas = function(e) {
                for (var t = 0; t < obj.options.data.length; t++) for (var o = 0; o < obj.options.data[0].length; o++) if ("=" == (s = "" + obj.options.data[t][o]).substr(0, 1)) {
                  var n = obj.updateFormula(s, e);
                  n != s && (obj.options.data[t][o] = n);
                }
                var r = [], l = Object.keys(obj.formula);
                for (t = 0; t < l.length; t++) {
                  var i2 = l[t], s = obj.formula[i2];
                  for (e[i2] && (i2 = e[i2]), r[i2] = [], o = 0; o < s.length; o++) {
                    var a = s[o];
                    e[a] && (a = e[a]), r[i2].push(a);
                  }
                }
                obj.formula = r;
              }, obj.updateFormula = function(e, t) {
                for (var o = /[A-Z]/, n = /[0-9]/, r = "", l = null, i2 = null, s = "", a = 0; a < e.length; a++) o.exec(e[a]) ? (l = 1, i2 = 0, s += e[a]) : n.exec(e[a]) ? (i2 = l ? 1 : 0, s += e[a]) : (l && i2 && (s = t[s] ? t[s] : s), r += s, r += e[a], l = 0, i2 = 0, s = "");
                return s && (l && i2 && (s = t[s] ? t[s] : s), r += s), r;
              };
              var secureFormula = function(e) {
                for (var t = "", o = 0, n = 0; n < e.length; n++) '"' == e[n] && (o = 0 == o ? 1 : 0), t += 1 == o ? e[n] : e[n].toUpperCase();
                return t;
              };
              obj.executeFormula = function(expression, x, y) {
                var formulaResults = [], formulaLoopProtection = [], execute = function(expression, x, y) {
                  var parentId = jexcel.getColumnNameFromId([x, y]);
                  if (formulaLoopProtection[parentId]) return console.error("Reference loop detected"), "#ERROR";
                  formulaLoopProtection[parentId] = true;
                  var tokensUpdate = function(e) {
                    for (var t = 0; t < e.length; t++) {
                      var o = [], n = e[t].split(":"), r = jexcel.getIdFromColumnName(n[0], true), l = jexcel.getIdFromColumnName(n[1], true);
                      if (r[0] <= l[0]) var i2 = r[0], s = l[0];
                      else i2 = l[0], s = r[0];
                      if (r[1] <= l[1]) var a = r[1], u = l[1];
                      else a = l[1], u = r[1];
                      for (var c = a; c <= u; c++) for (var f = i2; f <= s; f++) o.push(jexcel.getColumnNameFromId([f, c]));
                      expression = expression.replace(e[t], o.join(","));
                    }
                  };
                  expression = expression.replace(/\$?([A-Z]+)\$?([0-9]+)/g, "$1$2");
                  var tokens = expression.match(/([A-Z]+[0-9]+)\:([A-Z]+[0-9]+)/g);
                  tokens && tokens.length && tokensUpdate(tokens);
                  var tokens = expression.match(/([A-Z]+[0-9]+)/g);
                  if (tokens && tokens.indexOf(parentId) > -1) return console.error("Self Reference detected"), "#ERROR";
                  var formulaExpressions = {};
                  if (tokens) {
                    for (var i = 0; i < tokens.length; i++) if (obj.formula[tokens[i]] || (obj.formula[tokens[i]] = []), obj.formula[tokens[i]].indexOf(parentId) < 0 && obj.formula[tokens[i]].push(parentId), eval("typeof(" + tokens[i] + ') == "undefined"')) {
                      var position = jexcel.getIdFromColumnName(tokens[i], 1);
                      if (void 0 !== obj.options.data[position[1]] && void 0 !== obj.options.data[position[1]][position[0]]) var value = obj.options.data[position[1]][position[0]];
                      else var value = "";
                      if ("=" == ("" + value).substr(0, 1) && (void 0 !== formulaResults[tokens[i]] ? value = formulaResults[tokens[i]] : (value = execute(value, position[0], position[1]), formulaResults[tokens[i]] = value)), "" == ("" + value).trim()) formulaExpressions[tokens[i]] = null;
                      else if (value == Number(value) && 1 == obj.options.autoCasting) formulaExpressions[tokens[i]] = Number(value);
                      else {
                        var number = obj.parseNumber(value, position[0]);
                        1 == obj.options.autoCasting && number ? formulaExpressions[tokens[i]] = number : formulaExpressions[tokens[i]] = '"' + value + '"';
                      }
                    }
                  }
                  try {
                    var res = jexcel.formula(expression.substr(1), formulaExpressions, x, y, obj);
                  } catch (e) {
                    var res = "#ERROR";
                    console.log(e);
                  }
                  return res;
                };
                return execute(expression, x, y);
              }, obj.parseNumber = function(e, t) {
                var o = t && obj.options.columns[t].decimal ? obj.options.columns[t].decimal : ".", n = "" + e;
                if ((n = n.split(o))[0] = n[0].match(/[+-]?[0-9]/g), n[0] && (n[0] = n[0].join("")), n[1] && (n[1] = n[1].match(/[0-9]*/g).join("")), n[0] && Number.isInteger(Number(n[0]))) if (n[1]) e = Number(n[0] + "." + n[1]);
                else e = Number(n[0] + ".00");
                else e = null;
                return e;
              }, obj.row = function(e) {
              }, obj.col = function(e) {
              }, obj.up = function(e, t) {
                if (e ? obj.selectedCell[3] > 0 && obj.up.visible(1, t ? 0 : 1) : (obj.selectedCell[1] > 0 && obj.up.visible(0, t ? 0 : 1), obj.selectedCell[2] = obj.selectedCell[0], obj.selectedCell[3] = obj.selectedCell[1]), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]), 1 == obj.options.lazyLoading) if (0 == obj.selectedCell[1] || 0 == obj.selectedCell[3]) obj.loadPage(0), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
                else if (obj.loadValidation()) obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
                else {
                  var o = parseInt(obj.tbody.firstChild.getAttribute("data-y"));
                  obj.selectedCell[1] - o < 30 && (obj.loadUp(), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]));
                }
                else if (obj.options.pagination > 0) {
                  var n = obj.whichPage(obj.selectedCell[3]);
                  n != obj.pageNumber && obj.page(n);
                }
                obj.updateScroll(1);
              }, obj.up.visible = function(e, t) {
                if (0 == e) var o = parseInt(obj.selectedCell[0]), n = parseInt(obj.selectedCell[1]);
                else o = parseInt(obj.selectedCell[2]), n = parseInt(obj.selectedCell[3]);
                if (0 == t) {
                  for (var r = 0; r < n; r++) if ("none" != obj.records[r][o].style.display && "none" != obj.rows[r].style.display) {
                    n = r;
                    break;
                  }
                } else n = obj.up.get(o, n);
                0 == e ? (obj.selectedCell[0] = o, obj.selectedCell[1] = n) : (obj.selectedCell[2] = o, obj.selectedCell[3] = n);
              }, obj.up.get = function(e, t) {
                e = parseInt(e);
                for (var o = (t = parseInt(t)) - 1; o >= 0; o--) if ("none" != obj.records[o][e].style.display && "none" != obj.rows[o].style.display) {
                  if (obj.records[o][e].getAttribute("data-merged") && obj.records[o][e] == obj.records[t][e]) continue;
                  t = o;
                  break;
                }
                return t;
              }, obj.down = function(e, t) {
                if (e ? obj.selectedCell[3] < obj.records.length - 1 && obj.down.visible(1, t ? 0 : 1) : (obj.selectedCell[1] < obj.records.length - 1 && obj.down.visible(0, t ? 0 : 1), obj.selectedCell[2] = obj.selectedCell[0], obj.selectedCell[3] = obj.selectedCell[1]), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]), 1 == obj.options.lazyLoading) obj.selectedCell[1] == obj.records.length - 1 || obj.selectedCell[3] == obj.records.length - 1 ? (obj.loadPage(-1), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3])) : obj.loadValidation() ? obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]) : parseInt(obj.tbody.lastChild.getAttribute("data-y")) - obj.selectedCell[3] < 30 && (obj.loadDown(), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]));
                else if (obj.options.pagination > 0) {
                  var o = obj.whichPage(obj.selectedCell[3]);
                  o != obj.pageNumber && obj.page(o);
                }
                obj.updateScroll(3);
              }, obj.down.visible = function(e, t) {
                if (0 == e) var o = parseInt(obj.selectedCell[0]), n = parseInt(obj.selectedCell[1]);
                else o = parseInt(obj.selectedCell[2]), n = parseInt(obj.selectedCell[3]);
                if (0 == t) {
                  for (var r = obj.rows.length - 1; r > n; r--) if ("none" != obj.records[r][o].style.display && "none" != obj.rows[r].style.display) {
                    n = r;
                    break;
                  }
                } else n = obj.down.get(o, n);
                0 == e ? (obj.selectedCell[0] = o, obj.selectedCell[1] = n) : (obj.selectedCell[2] = o, obj.selectedCell[3] = n);
              }, obj.down.get = function(e, t) {
                e = parseInt(e);
                for (var o = (t = parseInt(t)) + 1; o < obj.rows.length; o++) if ("none" != obj.records[o][e].style.display && "none" != obj.rows[o].style.display) {
                  if (obj.records[o][e].getAttribute("data-merged") && obj.records[o][e] == obj.records[t][e]) continue;
                  t = o;
                  break;
                }
                return t;
              }, obj.right = function(e, t) {
                e ? obj.selectedCell[2] < obj.headers.length - 1 && obj.right.visible(1, t ? 0 : 1) : (obj.selectedCell[0] < obj.headers.length - 1 && obj.right.visible(0, t ? 0 : 1), obj.selectedCell[2] = obj.selectedCell[0], obj.selectedCell[3] = obj.selectedCell[1]), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]), obj.updateScroll(2);
              }, obj.right.visible = function(e, t) {
                if (0 == e) var o = parseInt(obj.selectedCell[0]), n = parseInt(obj.selectedCell[1]);
                else o = parseInt(obj.selectedCell[2]), n = parseInt(obj.selectedCell[3]);
                if (0 == t) {
                  for (var r = obj.headers.length - 1; r > o; r--) if ("none" != obj.records[n][r].style.display) {
                    o = r;
                    break;
                  }
                } else o = obj.right.get(o, n);
                0 == e ? (obj.selectedCell[0] = o, obj.selectedCell[1] = n) : (obj.selectedCell[2] = o, obj.selectedCell[3] = n);
              }, obj.right.get = function(e, t) {
                e = parseInt(e), t = parseInt(t);
                for (var o = e + 1; o < obj.headers.length; o++) if ("none" != obj.records[t][o].style.display) {
                  if (obj.records[t][o].getAttribute("data-merged") && obj.records[t][o] == obj.records[t][e]) continue;
                  e = o;
                  break;
                }
                return e;
              }, obj.left = function(e, t) {
                e ? obj.selectedCell[2] > 0 && obj.left.visible(1, t ? 0 : 1) : (obj.selectedCell[0] > 0 && obj.left.visible(0, t ? 0 : 1), obj.selectedCell[2] = obj.selectedCell[0], obj.selectedCell[3] = obj.selectedCell[1]), obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]), obj.updateScroll(0);
              }, obj.left.visible = function(e, t) {
                if (0 == e) var o = parseInt(obj.selectedCell[0]), n = parseInt(obj.selectedCell[1]);
                else o = parseInt(obj.selectedCell[2]), n = parseInt(obj.selectedCell[3]);
                if (0 == t) {
                  for (var r = 0; r < o; r++) if ("none" != obj.records[n][r].style.display) {
                    o = r;
                    break;
                  }
                } else o = obj.left.get(o, n);
                0 == e ? (obj.selectedCell[0] = o, obj.selectedCell[1] = n) : (obj.selectedCell[2] = o, obj.selectedCell[3] = n);
              }, obj.left.get = function(e, t) {
                e = parseInt(e), t = parseInt(t);
                for (var o = e - 1; o >= 0; o--) if ("none" != obj.records[t][o].style.display) {
                  if (obj.records[t][o].getAttribute("data-merged") && obj.records[t][o] == obj.records[t][e]) continue;
                  e = o;
                  break;
                }
                return e;
              }, obj.first = function(e, t) {
                if (e ? t ? obj.selectedCell[3] = 0 : obj.left.visible(1, 0) : (t ? obj.selectedCell[1] = 0 : obj.left.visible(0, 0), obj.selectedCell[2] = obj.selectedCell[0], obj.selectedCell[3] = obj.selectedCell[1]), 1 != obj.options.lazyLoading || 0 != obj.selectedCell[1] && 0 != obj.selectedCell[3]) {
                  if (obj.options.pagination > 0) {
                    var o = obj.whichPage(obj.selectedCell[3]);
                    o != obj.pageNumber && obj.page(o);
                  }
                } else obj.loadPage(0);
                obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]), obj.updateScroll(1);
              }, obj.last = function(e, t) {
                if (e ? t ? obj.selectedCell[3] = obj.records.length - 1 : obj.right.visible(1, 0) : (t ? obj.selectedCell[1] = obj.records.length - 1 : obj.right.visible(0, 0), obj.selectedCell[2] = obj.selectedCell[0], obj.selectedCell[3] = obj.selectedCell[1]), 1 != obj.options.lazyLoading || obj.selectedCell[1] != obj.records.length - 1 && obj.selectedCell[3] != obj.records.length - 1) {
                  if (obj.options.pagination > 0) {
                    var o = obj.whichPage(obj.selectedCell[3]);
                    o != obj.pageNumber && obj.page(o);
                  }
                } else obj.loadPage(-1);
                obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]), obj.updateScroll(3);
              }, obj.selectAll = function() {
                obj.selectedCell || (obj.selectedCell = []), obj.selectedCell[0] = 0, obj.selectedCell[1] = 0, obj.selectedCell[2] = obj.headers.length - 1, obj.selectedCell[3] = obj.records.length - 1, obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
              }, obj.loadPage = function(e) {
                if (1 != obj.options.search && 1 != obj.options.filters || !obj.results) t = obj.rows;
                else var t = obj.results;
                var o = 100;
                null != e && -1 != e || (e = Math.ceil(t.length / o) - 1);
                var n = e * o, r = e * o + o;
                r > t.length && (r = t.length), (n = r - 100) < 0 && (n = 0);
                for (var l = n; l < r; l++) 1 != obj.options.search && 1 != obj.options.filters || !obj.results ? obj.tbody.appendChild(obj.rows[l]) : obj.tbody.appendChild(obj.rows[t[l]]), obj.tbody.children.length > o && obj.tbody.removeChild(obj.tbody.firstChild);
              }, obj.loadUp = function() {
                if (1 != obj.options.search && 1 != obj.options.filters || !obj.results) e = obj.rows;
                else var e = obj.results;
                var t = 0;
                if (e.length > 100) {
                  var o = parseInt(obj.tbody.firstChild.getAttribute("data-y"));
                  if (1 != obj.options.search && 1 != obj.options.filters || !obj.results || (o = e.indexOf(o)), o > 0) for (var n = 0; n < 30; n++) (o -= 1) > -1 && (1 != obj.options.search && 1 != obj.options.filters || !obj.results ? obj.tbody.insertBefore(obj.rows[o], obj.tbody.firstChild) : obj.tbody.insertBefore(obj.rows[e[o]], obj.tbody.firstChild), obj.tbody.children.length > 100 && (obj.tbody.removeChild(obj.tbody.lastChild), t = 1));
                }
                return t;
              }, obj.loadDown = function() {
                if (1 != obj.options.search && 1 != obj.options.filters || !obj.results) e = obj.rows;
                else var e = obj.results;
                var t = 0;
                if (e.length > 100) {
                  var o = parseInt(obj.tbody.lastChild.getAttribute("data-y"));
                  if (1 != obj.options.search && 1 != obj.options.filters || !obj.results || (o = e.indexOf(o)), o < obj.rows.length - 1) for (var n = 0; n <= 30; n++) o < e.length && (1 != obj.options.search && 1 != obj.options.filters || !obj.results ? obj.tbody.appendChild(obj.rows[o]) : obj.tbody.appendChild(obj.rows[e[o]]), obj.tbody.children.length > 100 && (obj.tbody.removeChild(obj.tbody.firstChild), t = 1)), o += 1;
                }
                return t;
              }, obj.loadValidation = function() {
                if (obj.selectedCell) {
                  var e = parseInt(obj.tbody.firstChild.getAttribute("data-y")) / 100, t = parseInt(obj.selectedCell[3] / 100), o = parseInt(obj.rows.length / 100);
                  if (e != t && t <= o && !Array.prototype.indexOf.call(obj.tbody.children, obj.rows[obj.selectedCell[3]])) return obj.loadPage(t), true;
                }
                return false;
              }, obj.resetSearch = function() {
                obj.searchInput.value = "", obj.search(""), obj.results = null;
              }, obj.search = function(e) {
                if (obj.options.filters && obj.resetFilters(), obj.resetSelection(), obj.pageNumber = 0, obj.results = [], e) {
                  var t = function(e2) {
                    -1 == obj.results.indexOf(e2) && obj.results.push(e2);
                  }, o = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                  o = new RegExp(o, "i"), obj.options.data.forEach(function(e2, n) {
                    if (function(e3, t2, o2) {
                      for (var n2 = 0; n2 < e3.length; n2++) if (("" + e3[n2]).toLowerCase().search(t2) >= 0 || ("" + obj.records[o2][n2].innerHTML).toLowerCase().search(t2) >= 0) return true;
                      return false;
                    }(e2, o, n)) {
                      var r = obj.isRowMerged(n);
                      if (r.length) for (var l = 0; l < r.length; l++) for (var i2 = jexcel.getIdFromColumnName(r[l], true), s = 0; s < obj.options.mergeCells[r[l]][1]; s++) t(i2[1] + s);
                      else t(n);
                    }
                  });
                } else obj.results = null;
                return obj.updateResult();
              }, obj.updateResult = function() {
                var e, t = 0;
                for (e = 1 == obj.options.lazyLoading ? 100 : obj.options.pagination > 0 ? obj.options.pagination : obj.results ? obj.results.length : obj.rows.length; obj.tbody.firstChild; ) obj.tbody.removeChild(obj.tbody.firstChild);
                for (var o = 0; o < obj.rows.length; o++) !obj.results || obj.results.indexOf(o) > -1 ? (t < e && (obj.tbody.appendChild(obj.rows[o]), t++), obj.rows[o].style.display = "") : obj.rows[o].style.display = "none";
                return obj.options.pagination > 0 && obj.updatePagination(), obj.updateCornerPosition(), e;
              }, obj.whichPage = function(e) {
                return 1 != obj.options.search && 1 != obj.options.filters || !obj.results || (e = obj.results.indexOf(e)), Math.ceil((parseInt(e) + 1) / parseInt(obj.options.pagination)) - 1;
              }, obj.page = function(e) {
                var t = obj.pageNumber;
                if (1 != obj.options.search && 1 != obj.options.filters || !obj.results) o = obj.rows;
                else var o = obj.results;
                var n = parseInt(obj.options.pagination);
                null != e && -1 != e || (e = Math.ceil(o.length / n) - 1), obj.pageNumber = e;
                var r = e * n, l = e * n + n;
                for (l > o.length && (l = o.length), r < 0 && (r = 0); obj.tbody.firstChild; ) obj.tbody.removeChild(obj.tbody.firstChild);
                for (var i2 = r; i2 < l; i2++) 1 != obj.options.search && 1 != obj.options.filters || !obj.results ? obj.tbody.appendChild(obj.rows[i2]) : obj.tbody.appendChild(obj.rows[o[i2]]);
                obj.options.pagination > 0 && obj.updatePagination(), obj.updateCornerPosition(), obj.dispatch("onchangepage", el, e, t);
              }, obj.updatePagination = function() {
                if (obj.pagination.children[0].innerHTML = "", obj.pagination.children[1].innerHTML = "", obj.options.pagination) {
                  if (1 != obj.options.search && 1 != obj.options.filters || !obj.results) e = obj.rows.length;
                  else var e = obj.results.length;
                  if (e) {
                    var t = Math.ceil(e / obj.options.pagination);
                    if (obj.pageNumber < 6) var o = 1, n = t < 10 ? t : 10;
                    else t - obj.pageNumber < 5 ? (n = t, (o = t - 9) < 1 && (o = 1)) : (o = obj.pageNumber - 4, n = obj.pageNumber + 5);
                    o > 1 && ((l = document.createElement("div")).className = "jexcel_page", l.innerHTML = "<", l.title = 1, obj.pagination.children[1].appendChild(l));
                    for (var r = o; r <= n; r++) {
                      var l;
                      (l = document.createElement("div")).className = "jexcel_page", l.innerHTML = r, obj.pagination.children[1].appendChild(l), obj.pageNumber == r - 1 && l.classList.add("jexcel_page_selected");
                    }
                    n < t && ((l = document.createElement("div")).className = "jexcel_page", l.innerHTML = ">", l.title = t, obj.pagination.children[1].appendChild(l)), obj.pagination.children[0].innerHTML = function(e2) {
                      var t2 = Array.prototype.slice.call(arguments, 1);
                      return e2.replace(/{(\d+)}/g, function(e3, o2) {
                        return void 0 !== t2[o2] ? t2[o2] : e3;
                      });
                    }(obj.options.text.showingPage, obj.pageNumber + 1, t);
                  } else obj.pagination.children[0].innerHTML = obj.options.text.noRecordsFound;
                }
              }, obj.download = function(e) {
                if (0 == obj.options.allowExport) console.error("Export not allowed");
                else {
                  var t = "";
                  t += obj.copy(false, obj.options.csvDelimiter, true, e, true);
                  var o = new Blob(["\uFEFF" + t], { type: "text/csv;charset=utf-8;" });
                  if (window.navigator && window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(o, obj.options.csvFileName + ".csv");
                  else {
                    var n = document.createElement("a"), r = URL.createObjectURL(o);
                    n.href = r, n.setAttribute("download", obj.options.csvFileName + ".csv"), document.body.appendChild(n), n.click(), n.parentNode.removeChild(n);
                  }
                }
              }, obj.setHistory = function(e) {
                if (1 != obj.ignoreHistory) {
                  var t = ++obj.historyIndex;
                  obj.history = obj.history = obj.history.slice(0, t + 1), obj.history[t] = e;
                }
              }, obj.copy = function(e, t, o, n, r) {
                t || (t = "	");
                for (var l = new RegExp(t, "ig"), i2 = [], s = [], a = [], u = [], c = [], f = obj.options.data[0].length, d = obj.options.data.length, p = "", b = false, j = "", h = "", g = 0, m = 0, v = 0, y2 = 0, C = true, x2 = 0; x2 < d; x2++) for (var w = 0; w < f; w++) e && !obj.records[x2][w].classList.contains("highlight") || (v <= w && (v = w), y2 <= x2 && (y2 = x2));
                if (f === v + 1 && d === y2 + 1 && (C = false), r && 1 == obj.options.includeHeadersOnDownload || !r && 1 == obj.options.includeHeadersOnCopy && !C || n) {
                  if (obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) for (p = obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0] ? obj.options.nestedHeaders : [obj.options.nestedHeaders], x2 = 0; x2 < p.length; x2++) {
                    var A = [];
                    for (w = 0; w < p[x2].length; w++) {
                      var E = parseInt(p[x2][w].colspan);
                      A.push(p[x2][w].title);
                      for (var M = 0; M < E - 1; M++) A.push("");
                    }
                    h += A.join(t) + "\r\n";
                  }
                  b = true;
                }
                for (obj.style = [], x2 = 0; x2 < d; x2++) {
                  for (s = [], a = [], w = 0; w < f; w++) if (!e || obj.records[x2][w].classList.contains("highlight")) {
                    1 == b && i2.push(obj.headers[w].textContent);
                    var I = obj.options.data[x2][w];
                    if (I.match && (I.match(l) || I.match(/,/g) || I.match(/\n/) || I.match(/\"/)) && (I = '"' + (I = I.replace(new RegExp('"', "g"), '""')) + '"'), s.push(I), "checkbox" == obj.options.columns[w].type || "radio" == obj.options.columns[w].type) var N = I;
                    else (N = 1 == obj.options.stripHTMLOnCopy ? obj.records[x2][w].textContent : obj.records[x2][w].innerHTML).match && (N.match(l) || N.match(/,/g) || N.match(/\n/) || N.match(/\"/)) && (N = '"' + (N = N.replace(new RegExp('"', "g"), '""')) + '"');
                    a.push(N), p = (p = obj.records[x2][w].getAttribute("style")).replace("display: none;", ""), obj.style.push(p || "");
                  }
                  s.length && (b && (g = s.length, u.push(i2.join(t))), u.push(s.join(t))), a.length && (m++, b && (c.push(i2.join(t)), b = false), c.push(a.join(t)));
                }
                f == g && d == m && (j = h);
                var S = j + u.join("\r\n"), D = j + c.join("\r\n");
                if (o || (1 == obj.options.copyCompatibility ? obj.textarea.value = D : obj.textarea.value = S, obj.textarea.select(), document.execCommand("copy")), 1 == obj.options.copyCompatibility ? obj.data = D : obj.data = S, obj.hashString = obj.hash(obj.data), !o) {
                  if (obj.removeCopyingSelection(), obj.highlighted) for (w = 0; w < obj.highlighted.length; w++) obj.highlighted[w].classList.add("copying"), obj.highlighted[w].classList.contains("highlight-left") && obj.highlighted[w].classList.add("copying-left"), obj.highlighted[w].classList.contains("highlight-right") && obj.highlighted[w].classList.add("copying-right"), obj.highlighted[w].classList.contains("highlight-top") && obj.highlighted[w].classList.add("copying-top"), obj.highlighted[w].classList.contains("highlight-bottom") && obj.highlighted[w].classList.add("copying-bottom");
                  obj.dispatch("oncopy", el, 1 == obj.options.copyCompatibility ? c : u, obj.hashString);
                }
                return obj.data;
              }, obj.paste = function(e, t, o) {
                var n = parseInt(e), r = parseInt(t), l = parseInt(obj.selectedCell[2]), i2 = parseInt(obj.selectedCell[3]), s = l - n + 1, a = i2 - r + 1;
                l < n && (e = l.toString(), s = n - l + 1), i2 < r && (t = i2.toString(), a = r - i2 + 1);
                var u = obj.dispatch("onbeforepaste", el, o, e, t);
                if (false === u) return false;
                u && (o = u);
                var c = obj.hash(o), f = c == obj.hashString ? obj.style : null;
                if (1 == obj.options.copyCompatibility && c == obj.hashString && (o = obj.data), o = obj.parseCSV(o, "	"), s > 1 & Number.isInteger(s / o[0].length)) {
                  f = null, p = s / o[0].length;
                  var d = o.map(function(e2, t2) {
                    var o2 = Array.apply(null, { length: p * e2.length }).map(function(t3, o3) {
                      return e2[o3 % e2.length];
                    });
                    return o2;
                  });
                  o = d;
                }
                if (a > 1 & Number.isInteger(a / o.length)) {
                  f = null;
                  var p = a / o.length;
                  d = Array.apply(null, { length: p * o.length }).map(function(e2, t2) {
                    return o[t2 % o.length];
                  }), o = d;
                }
                if (null != e && null != t && o) {
                  for (var b = 0, j = 0, h = [], g = {}, m = {}, v = 0, y2 = parseInt(e), C = parseInt(t), x2 = null; x2 = o[j]; ) {
                    for (b = 0, y2 = parseInt(e); null != x2[b]; ) {
                      var w = obj.updateCell(y2, C, x2[b]);
                      if (h.push(w), obj.updateFormulaChain(y2, C, h), f && f[v]) {
                        var A = jexcel.getColumnNameFromId([y2, C]);
                        g[A] = f[v], m[A] = obj.getStyle(A), obj.records[C][y2].setAttribute("style", f[v]), v++;
                      }
                      if (null != x2[++b]) {
                        if (y2 >= obj.headers.length - 1) {
                          if (1 != obj.options.allowInsertColumn) break;
                          obj.insertColumn();
                        }
                        y2 = obj.right.get(y2, C);
                      }
                    }
                    if (j++, o[j]) {
                      if (C >= obj.rows.length - 1) {
                        if (1 != obj.options.allowInsertRow) break;
                        obj.insertRow();
                      }
                      C = obj.down.get(e, C);
                    }
                  }
                  obj.updateSelectionFromCoords(e, t, y2, C), obj.setHistory({ action: "setValue", records: h, selection: obj.selectedCell, newStyle: g, oldStyle: m }), obj.updateTable(), obj.dispatch("onpaste", el, o), obj.onafterchanges(el, h);
                }
                obj.removeCopyingSelection();
              }, obj.removeCopyingSelection = function() {
                for (var e = document.querySelectorAll(".jexcel .copying"), t = 0; t < e.length; t++) e[t].classList.remove("copying"), e[t].classList.remove("copying-left"), e[t].classList.remove("copying-right"), e[t].classList.remove("copying-top"), e[t].classList.remove("copying-bottom");
              }, obj.historyProcessRow = function(e, t) {
                var o = t.insertBefore ? +t.rowNumber : t.rowNumber + 1;
                if (1 == obj.options.search && obj.results && obj.results.length != obj.rows.length && obj.resetSearch(), 1 == e) {
                  for (var n = t.numOfRows, r = o; r < n + o; r++) obj.rows[r].parentNode.removeChild(obj.rows[r]);
                  obj.records.splice(o, n), obj.options.data.splice(o, n), obj.rows.splice(o, n), obj.conditionalSelectionUpdate(1, o, n + o - 1);
                } else {
                  obj.records = jexcel.injectArray(obj.records, o, t.rowRecords), obj.options.data = jexcel.injectArray(obj.options.data, o, t.rowData), obj.rows = jexcel.injectArray(obj.rows, o, t.rowNode);
                  var l = 0;
                  for (r = o; r < t.numOfRows + o; r++) obj.tbody.insertBefore(t.rowNode[l], obj.tbody.children[r]), l++;
                }
                obj.options.pagination > 0 && obj.page(obj.pageNumber), obj.updateTableReferences();
              }, obj.historyProcessColumn = function(e, t) {
                var o = t.insertBefore ? t.columnNumber : t.columnNumber + 1;
                if (1 == e) {
                  var n = t.numOfColumns;
                  obj.options.columns.splice(o, n);
                  for (var r = o; r < n + o; r++) obj.headers[r].parentNode.removeChild(obj.headers[r]), obj.colgroup[r].parentNode.removeChild(obj.colgroup[r]);
                  obj.headers.splice(o, n), obj.colgroup.splice(o, n);
                  for (var l = 0; l < t.data.length; l++) {
                    for (r = o; r < n + o; r++) obj.records[l][r].parentNode.removeChild(obj.records[l][r]);
                    obj.records[l].splice(o, n), obj.options.data[l].splice(o, n);
                  }
                  if (obj.options.footers) for (l = 0; l < obj.options.footers.length; l++) obj.options.footers[l].splice(o, n);
                } else {
                  obj.options.columns = jexcel.injectArray(obj.options.columns, o, t.columns), obj.headers = jexcel.injectArray(obj.headers, o, t.headers), obj.colgroup = jexcel.injectArray(obj.colgroup, o, t.colgroup);
                  var i2 = 0;
                  for (r = o; r < t.numOfColumns + o; r++) obj.headerContainer.insertBefore(t.headers[i2], obj.headerContainer.children[r + 1]), obj.colgroupContainer.insertBefore(t.colgroup[i2], obj.colgroupContainer.children[r + 1]), i2++;
                  for (l = 0; l < t.data.length; l++) for (obj.options.data[l] = jexcel.injectArray(obj.options.data[l], o, t.data[l]), obj.records[l] = jexcel.injectArray(obj.records[l], o, t.records[l]), i2 = 0, r = o; r < t.numOfColumns + o; r++) obj.rows[l].insertBefore(t.records[l][i2], obj.rows[l].children[r + 1]), i2++;
                  if (obj.options.footers) for (l = 0; l < obj.options.footers.length; l++) obj.options.footers[l] = jexcel.injectArray(obj.options.footers[l], o, t.footers[l]);
                }
                if (obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) for (l = 0; l < obj.options.nestedHeaders.length; l++) {
                  if (1 == e) var s = parseInt(obj.options.nestedHeaders[l][obj.options.nestedHeaders[l].length - 1].colspan) - t.numOfColumns;
                  else s = parseInt(obj.options.nestedHeaders[l][obj.options.nestedHeaders[l].length - 1].colspan) + t.numOfColumns;
                  obj.options.nestedHeaders[l][obj.options.nestedHeaders[l].length - 1].colspan = s, obj.thead.children[l].children[obj.thead.children[l].children.length - 1].setAttribute("colspan", s);
                }
                else s = 1 == e ? parseInt(obj.options.nestedHeaders[0].colspan) - t.numOfColumns : parseInt(obj.options.nestedHeaders[0].colspan) + t.numOfColumns, obj.options.nestedHeaders[0].colspan = s, obj.thead.children[0].children[obj.thead.children[0].children.length - 1].setAttribute("colspan", s);
                obj.updateTableReferences();
              }, obj.undo = function() {
                var e = !!obj.ignoreEvents, t = !!obj.ignoreHistory;
                obj.ignoreEvents = true, obj.ignoreHistory = true;
                var o = [];
                if (obj.historyIndex >= 0) {
                  var n = obj.history[obj.historyIndex--];
                  if ("insertRow" == n.action) obj.historyProcessRow(1, n);
                  else if ("deleteRow" == n.action) obj.historyProcessRow(0, n);
                  else if ("insertColumn" == n.action) obj.historyProcessColumn(1, n);
                  else if ("deleteColumn" == n.action) obj.historyProcessColumn(0, n);
                  else if ("moveRow" == n.action) obj.moveRow(n.newValue, n.oldValue);
                  else if ("moveColumn" == n.action) obj.moveColumn(n.newValue, n.oldValue);
                  else if ("setMerge" == n.action) obj.removeMerge(n.column, n.data);
                  else if ("setStyle" == n.action) obj.setStyle(n.oldValue, null, null, 1);
                  else if ("setWidth" == n.action) obj.setWidth(n.column, n.oldValue);
                  else if ("setHeight" == n.action) obj.setHeight(n.row, n.oldValue);
                  else if ("setHeader" == n.action) obj.setHeader(n.column, n.oldValue);
                  else if ("setComments" == n.action) obj.setComments(n.column, n.oldValue[0], n.oldValue[1]);
                  else if ("orderBy" == n.action) {
                    for (var r = [], l = 0; l < n.rows.length; l++) r[n.rows[l]] = l;
                    obj.updateOrderArrow(n.column, n.order ? 0 : 1), obj.updateOrder(r);
                  } else if ("setValue" == n.action) {
                    for (var i2 = 0; i2 < n.records.length; i2++) o.push({ x: n.records[i2].x, y: n.records[i2].y, newValue: n.records[i2].oldValue }), n.oldStyle && obj.resetStyle(n.oldStyle);
                    obj.setValue(o), n.selection && obj.updateSelectionFromCoords(n.selection[0], n.selection[1], n.selection[2], n.selection[3]);
                  }
                }
                obj.ignoreEvents = e, obj.ignoreHistory = t, obj.dispatch("onundo", el, n);
              }, obj.redo = function() {
                var e = !!obj.ignoreEvents, t = !!obj.ignoreHistory;
                if (obj.ignoreEvents = true, obj.ignoreHistory = true, obj.historyIndex < obj.history.length - 1) {
                  var o = obj.history[++obj.historyIndex];
                  if ("insertRow" == o.action) obj.historyProcessRow(0, o);
                  else if ("deleteRow" == o.action) obj.historyProcessRow(1, o);
                  else if ("insertColumn" == o.action) obj.historyProcessColumn(0, o);
                  else if ("deleteColumn" == o.action) obj.historyProcessColumn(1, o);
                  else if ("moveRow" == o.action) obj.moveRow(o.oldValue, o.newValue);
                  else if ("moveColumn" == o.action) obj.moveColumn(o.oldValue, o.newValue);
                  else if ("setMerge" == o.action) obj.setMerge(o.column, o.colspan, o.rowspan, 1);
                  else if ("setStyle" == o.action) obj.setStyle(o.newValue, null, null, 1);
                  else if ("setWidth" == o.action) obj.setWidth(o.column, o.newValue);
                  else if ("setHeight" == o.action) obj.setHeight(o.row, o.newValue);
                  else if ("setHeader" == o.action) obj.setHeader(o.column, o.newValue);
                  else if ("setComments" == o.action) obj.setComments(o.column, o.newValue[0], o.newValue[1]);
                  else if ("orderBy" == o.action) obj.updateOrderArrow(o.column, o.order), obj.updateOrder(o.rows);
                  else if ("setValue" == o.action) {
                    obj.setValue(o.records);
                    for (var n = 0; n < o.records.length; n++) o.oldStyle && obj.resetStyle(o.newStyle);
                    o.selection && obj.updateSelectionFromCoords(o.selection[0], o.selection[1], o.selection[2], o.selection[3]);
                  }
                }
                obj.ignoreEvents = e, obj.ignoreHistory = t, obj.dispatch("onredo", el, o);
              }, obj.getDropDownValue = function(e, t) {
                var o = [];
                if (obj.options.columns[e] && obj.options.columns[e].source) {
                  for (var n = [], r = obj.options.columns[e].source, l = 0; l < r.length; l++) "object" == typeof r[l] ? n[r[l].id] = r[l].name : n[r[l]] = r[l];
                  var i2 = Array.isArray(t) ? t : ("" + t).split(";");
                  for (l = 0; l < i2.length; l++) "object" == typeof i2[l] ? o.push(n[i2[l].id]) : n[i2[l]] && o.push(n[i2[l]]);
                } else console.error("Invalid column");
                return o.length > 0 ? o.join("; ") : "";
              }, obj.parseCSV = function(e, t) {
                9 == (e = e.replace(/\r?\n$|\r$|\n$/g, "")).charCodeAt(e.length - 1) && (e += "\0"), t = t || ",";
                for (var o = [], n = false, r = 0, l = 0, i2 = 0; i2 < e.length; i2++) {
                  var s = e[i2], a = e[i2 + 1];
                  o[r] = o[r] || [], o[r][l] = o[r][l] || "", '"' == s && n && '"' == a ? (o[r][l] += s, ++i2) : '"' != s ? s != t || n ? "\r" != s || "\n" != a || n ? "\n" == s && !n || "\r" == s && !n ? (++r, l = 0) : o[r][l] += s : (++r, l = 0, ++i2) : ++l : n = !n;
                }
                return o;
              }, obj.hash = function(e) {
                var t, o = 0;
                if (0 === e.length) return o;
                for (t = 0; t < e.length; t++) o = (o << 5) - o + e.charCodeAt(t), o |= 0;
                return o;
              }, obj.onafterchanges = function(e, t) {
                obj.dispatch("onafterchanges", e, t);
              }, obj.destroy = function() {
                jexcel.destroy(el);
              }, obj.init = function() {
                jexcel.current = obj, "function" == typeof jexcel.build && (obj.options.root ? jexcel.build(obj.options.root) : (jexcel.build(document), jexcel.build = null)), el.setAttribute("tabindex", 1), el.addEventListener("focus", function(e) {
                  jexcel.current && !obj.selectedCell && (obj.updateSelectionFromCoords(0, 0, 0, 0), obj.left());
                }), obj.options.csv ? (1 == obj.options.loadingSpin && jSuites.loading.show(), jSuites.ajax({ url: obj.options.csv, method: obj.options.method, data: obj.options.requestVariables, dataType: "text", success: function(e) {
                  var t = obj.parseCSV(e, obj.options.csvDelimiter);
                  if (1 == obj.options.csvHeaders && t.length > 0) for (var o = t.shift(), n = 0; n < o.length; n++) obj.options.columns[n] || (obj.options.columns[n] = { type: "text", align: obj.options.defaultColAlign, width: obj.options.defaultColWidth }), void 0 === obj.options.columns[n].title && (obj.options.columns[n].title = o[n]);
                  obj.options.data = t, obj.prepareTable(), 1 == obj.options.loadingSpin && jSuites.loading.hide();
                } })) : obj.options.url ? (1 == obj.options.loadingSpin && jSuites.loading.show(), jSuites.ajax({ url: obj.options.url, method: obj.options.method, data: obj.options.requestVariables, dataType: "json", success: function(e) {
                  obj.options.data = e.data ? e.data : e, obj.prepareTable(), 1 == obj.options.loadingSpin && jSuites.loading.hide();
                } })) : obj.prepareTable();
              }, options && null != options.contextMenu ? obj.options.contextMenu = options.contextMenu : obj.options.contextMenu = function(e, t, o, n) {
                var r = [];
                if (null == o) 1 == obj.options.allowInsertColumn && r.push({ title: obj.options.text.insertANewColumnBefore, onclick: function() {
                  obj.insertColumn(1, parseInt(t), 1);
                } }), 1 == obj.options.allowInsertColumn && r.push({ title: obj.options.text.insertANewColumnAfter, onclick: function() {
                  obj.insertColumn(1, parseInt(t), 0);
                } }), 1 == obj.options.allowDeleteColumn && r.push({ title: obj.options.text.deleteSelectedColumns, onclick: function() {
                  obj.deleteColumn(obj.getSelectedColumns().length ? void 0 : parseInt(t));
                } }), 1 == obj.options.allowRenameColumn && r.push({ title: obj.options.text.renameThisColumn, onclick: function() {
                  obj.setHeader(t);
                } }), 1 == obj.options.columnSorting && (r.push({ type: "line" }), r.push({ title: obj.options.text.orderAscending, onclick: function() {
                  obj.orderBy(t, 0);
                } }), r.push({ title: obj.options.text.orderDescending, onclick: function() {
                  obj.orderBy(t, 1);
                } }));
                else if (1 == obj.options.allowInsertRow && (r.push({ title: obj.options.text.insertANewRowBefore, onclick: function() {
                  obj.insertRow(1, parseInt(o), 1);
                } }), r.push({ title: obj.options.text.insertANewRowAfter, onclick: function() {
                  obj.insertRow(1, parseInt(o));
                } })), 1 == obj.options.allowDeleteRow && r.push({ title: obj.options.text.deleteSelectedRows, onclick: function() {
                  obj.deleteRow(obj.getSelectedRows().length ? void 0 : parseInt(o));
                } }), t && 1 == obj.options.allowComments) {
                  r.push({ type: "line" });
                  var l = obj.records[o][t].getAttribute("title") || "";
                  r.push({ title: l ? obj.options.text.editComments : obj.options.text.addComments, onclick: function() {
                    var e2 = prompt(obj.options.text.comments, l);
                    e2 && obj.setComments([t, o], e2);
                  } }), l && r.push({ title: obj.options.text.clearComments, onclick: function() {
                    obj.setComments([t, o], "");
                  } });
                }
                return r.push({ type: "line" }), r.push({ title: obj.options.text.copy, shortcut: "Ctrl + C", onclick: function() {
                  obj.copy(true);
                } }), navigator && navigator.clipboard && r.push({ title: obj.options.text.paste, shortcut: "Ctrl + V", onclick: function() {
                  obj.selectedCell && navigator.clipboard.readText().then(function(e2) {
                    e2 && jexcel.current.paste(obj.selectedCell[0], obj.selectedCell[1], e2);
                  });
                } }), obj.options.allowExport && r.push({ title: obj.options.text.saveAs, shortcut: "Ctrl + S", onclick: function() {
                  obj.download();
                } }), obj.options.about && r.push({ title: obj.options.text.about, onclick: function() {
                  true === obj.options.about ? alert(Version().print()) : alert(obj.options.about);
                } }), r;
              }, obj.scrollControls = function(e) {
                obj.wheelControls(), obj.options.freezeColumns > 0 && obj.content.scrollLeft != scrollLeft && obj.updateFreezePosition(), 1 != obj.options.lazyLoading && 1 != obj.options.tableOverflow || obj.edition && "jdropdown" != e.target.className.substr(0, 9) && obj.closeEditor(obj.edition[0], true);
              }, obj.wheelControls = function(e) {
                1 == obj.options.lazyLoading && null == jexcel.timeControlLoading && (jexcel.timeControlLoading = setTimeout(function() {
                  obj.content.scrollTop + obj.content.clientHeight >= obj.content.scrollHeight - 10 ? obj.loadDown() && (obj.content.scrollTop + obj.content.clientHeight > obj.content.scrollHeight - 10 && (obj.content.scrollTop = obj.content.scrollTop - obj.content.clientHeight), obj.updateCornerPosition()) : obj.content.scrollTop <= obj.content.clientHeight && obj.loadUp() && (obj.content.scrollTop < 10 && (obj.content.scrollTop = obj.content.scrollTop + obj.content.clientHeight), obj.updateCornerPosition()), jexcel.timeControlLoading = null;
                }, 100));
              }, obj.getFreezeWidth = function() {
                var e = 0;
                if (obj.options.freezeColumns > 0) for (var t = 0; t < obj.options.freezeColumns; t++) e += parseInt(obj.options.columns[t].width);
                return e;
              };
              var scrollLeft = 0;
              return obj.updateFreezePosition = function() {
                var e = 0;
                if ((scrollLeft = obj.content.scrollLeft) > 50) for (var t = 0; t < obj.options.freezeColumns; t++) {
                  t > 0 && "hidden" !== obj.options.columns[t - 1].type && (e += parseInt(obj.options.columns[t - 1].width)), obj.headers[t].classList.add("jexcel_freezed"), obj.headers[t].style.left = e + "px";
                  for (var o = 0; o < obj.rows.length; o++) if (obj.rows[o] && obj.records[o][t]) {
                    var n = scrollLeft + (t > 0 ? obj.records[o][t - 1].style.width : 0) - 51 + "px";
                    obj.records[o][t].classList.add("jexcel_freezed"), obj.records[o][t].style.left = n;
                  }
                }
                else for (t = 0; t < obj.options.freezeColumns; t++) for (obj.headers[t].classList.remove("jexcel_freezed"), obj.headers[t].style.left = "", o = 0; o < obj.rows.length; o++) obj.records[o][t] && (obj.records[o][t].classList.remove("jexcel_freezed"), obj.records[o][t].style.left = "");
                obj.updateCornerPosition();
              }, el.addEventListener("DOMMouseScroll", obj.wheelControls), el.addEventListener("mousewheel", obj.wheelControls), el.jexcel = obj, el.jspreadsheet = obj, obj.init(), obj;
            };
            jexcel.setDictionary = function(e) {
              jSuites.setDictionary(e);
            }, jexcel.setExtensions = function(e) {
              for (var t = Object.keys(e), o = 0; o < t.length; o++) "function" == typeof e[t[o]] && (jexcel[t[o]] = e[t[o]], jexcel.license && "function" == typeof e[t[o]].license && e[t[o]].license(jexcel.license));
            }, void 0 !== formula && (jexcel.formula = formula), jexcel.version = Version, jexcel.current = null, jexcel.timeControl = null, jexcel.timeControlLoading = null;
            const destroyEvents = function(e) {
              e.removeEventListener("mouseup", jexcel.mouseUpControls), e.removeEventListener("mousedown", jexcel.mouseDownControls), e.removeEventListener("mousemove", jexcel.mouseMoveControls), e.removeEventListener("mouseover", jexcel.mouseOverControls), e.removeEventListener("dblclick", jexcel.doubleClickControls), e.removeEventListener("paste", jexcel.pasteControls), e.removeEventListener("contextmenu", jexcel.contextMenuControls), e.removeEventListener("touchstart", jexcel.touchStartControls), e.removeEventListener("touchend", jexcel.touchEndControls), e.removeEventListener("touchcancel", jexcel.touchEndControls), document.removeEventListener("keydown", jexcel.keyDownControls);
            };
            var component;
            return jexcel.destroy = function(e, t) {
              if (e.jexcel) {
                var o = e.jexcel.options.root ? e.jexcel.options.root : document;
                e.removeEventListener("DOMMouseScroll", e.jexcel.scrollControls), e.removeEventListener("mousewheel", e.jexcel.scrollControls), e.jexcel = null, e.innerHTML = "", t && (destroyEvents(o), jexcel = null);
              }
            }, jexcel.build = function(e) {
              destroyEvents(e), e.addEventListener("mouseup", jexcel.mouseUpControls), e.addEventListener("mousedown", jexcel.mouseDownControls), e.addEventListener("mousemove", jexcel.mouseMoveControls), e.addEventListener("mouseover", jexcel.mouseOverControls), e.addEventListener("dblclick", jexcel.doubleClickControls), e.addEventListener("paste", jexcel.pasteControls), e.addEventListener("contextmenu", jexcel.contextMenuControls), e.addEventListener("touchstart", jexcel.touchStartControls), e.addEventListener("touchend", jexcel.touchEndControls), e.addEventListener("touchcancel", jexcel.touchEndControls), e.addEventListener("touchmove", jexcel.touchEndControls), document.addEventListener("keydown", jexcel.keyDownControls);
            }, jexcel.keyDownControls = function(e) {
              if (jexcel.current) {
                if (jexcel.current.edition) if (27 == e.which) jexcel.current.edition && jexcel.current.closeEditor(jexcel.current.edition[0], false), e.preventDefault();
                else if (13 == e.which) if ("calendar" == jexcel.current.options.columns[jexcel.current.edition[2]].type) jexcel.current.closeEditor(jexcel.current.edition[0], true);
                else if ("dropdown" == jexcel.current.options.columns[jexcel.current.edition[2]].type || "autocomplete" == jexcel.current.options.columns[jexcel.current.edition[2]].type) ;
                else if ((1 == jexcel.current.options.wordWrap || 1 == jexcel.current.options.columns[jexcel.current.edition[2]].wordWrap || jexcel.current.options.data[jexcel.current.edition[3]][jexcel.current.edition[2]].length > 200) && e.altKey) {
                  var t = jexcel.current.edition[0].children[0], o = jexcel.current.edition[0].children[0].value, n = t.selectionStart;
                  o = o.slice(0, n) + "\n" + o.slice(n), t.value = o, t.focus(), t.selectionStart = n + 1, t.selectionEnd = n + 1;
                } else jexcel.current.edition[0].children[0].blur();
                else 9 == e.which && (["calendar", "html"].includes(jexcel.current.options.columns[jexcel.current.edition[2]].type) ? jexcel.current.closeEditor(jexcel.current.edition[0], true) : jexcel.current.edition[0].children[0].blur());
                if (!jexcel.current.edition && jexcel.current.selectedCell) if (37 == e.which) jexcel.current.left(e.shiftKey, e.ctrlKey), e.preventDefault();
                else if (39 == e.which) jexcel.current.right(e.shiftKey, e.ctrlKey), e.preventDefault();
                else if (38 == e.which) jexcel.current.up(e.shiftKey, e.ctrlKey), e.preventDefault();
                else if (40 == e.which) jexcel.current.down(e.shiftKey, e.ctrlKey), e.preventDefault();
                else if (36 == e.which) jexcel.current.first(e.shiftKey, e.ctrlKey), e.preventDefault();
                else if (35 == e.which) jexcel.current.last(e.shiftKey, e.ctrlKey), e.preventDefault();
                else if (46 == e.which || 8 == e.which) 1 == jexcel.current.options.editable && (jexcel.current.selectedRow ? 1 == jexcel.current.options.allowDeleteRow && confirm(jexcel.current.options.text.areYouSureToDeleteTheSelectedRows) && jexcel.current.deleteRow() : jexcel.current.selectedHeader ? 1 == jexcel.current.options.allowDeleteColumn && confirm(jexcel.current.options.text.areYouSureToDeleteTheSelectedColumns) && jexcel.current.deleteColumn() : jexcel.current.setValue(jexcel.current.highlighted, ""));
                else if (13 == e.which) e.shiftKey ? jexcel.current.up() : (1 == jexcel.current.options.allowInsertRow && 1 == jexcel.current.options.allowManualInsertRow && jexcel.current.selectedCell[1] == jexcel.current.options.data.length - 1 && jexcel.current.insertRow(), jexcel.current.down()), e.preventDefault();
                else if (9 == e.which) e.shiftKey ? jexcel.current.left() : (1 == jexcel.current.options.allowInsertColumn && 1 == jexcel.current.options.allowManualInsertColumn && jexcel.current.selectedCell[0] == jexcel.current.options.data[0].length - 1 && jexcel.current.insertColumn(), jexcel.current.right()), e.preventDefault();
                else if (!e.ctrlKey && !e.metaKey || e.shiftKey) {
                  if (jexcel.current.selectedCell && 1 == jexcel.current.options.editable) {
                    var r = jexcel.current.selectedCell[1], l = jexcel.current.selectedCell[0];
                    "readonly" != jexcel.current.options.columns[l].type && (32 == e.keyCode ? (e.preventDefault(), "checkbox" == jexcel.current.options.columns[l].type || "radio" == jexcel.current.options.columns[l].type ? jexcel.current.setCheckRadioValue() : jexcel.current.openEditor(jexcel.current.records[r][l], true)) : 113 == e.keyCode ? jexcel.current.openEditor(jexcel.current.records[r][l], false) : (8 == e.keyCode || e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 111 || e.keyCode >= 187 && e.keyCode <= 190 || (String.fromCharCode(e.keyCode) == e.key || String.fromCharCode(e.keyCode).toLowerCase() == e.key.toLowerCase()) && jexcel.validLetter(String.fromCharCode(e.keyCode))) && (jexcel.current.openEditor(jexcel.current.records[r][l], true), "calendar" == jexcel.current.options.columns[l].type && e.preventDefault()));
                  }
                } else 65 == e.which ? (jexcel.current.selectAll(), e.preventDefault()) : 83 == e.which ? (jexcel.current.download(), e.preventDefault()) : 89 == e.which ? (jexcel.current.redo(), e.preventDefault()) : 90 == e.which ? (jexcel.current.undo(), e.preventDefault()) : 67 == e.which ? (jexcel.current.copy(true), e.preventDefault()) : 88 == e.which ? (1 == jexcel.current.options.editable ? jexcel.cutControls() : jexcel.copyControls(), e.preventDefault()) : 86 == e.which && jexcel.pasteControls();
                else e.target.classList.contains("jexcel_search") && (jexcel.timeControl && clearTimeout(jexcel.timeControl), jexcel.timeControl = setTimeout(function() {
                  jexcel.current.search(e.target.value);
                }, 200));
              }
            }, jexcel.isMouseAction = false, jexcel.mouseDownControls = function(e) {
              if ((e = e || window.event).buttons) var t = e.buttons;
              else t = e.button ? e.button : e.which;
              var o = jexcel.getElement(e.target);
              if (o[0] ? jexcel.current != o[0].jexcel && (jexcel.current && (jexcel.current.edition && jexcel.current.closeEditor(jexcel.current.edition[0], true), jexcel.current.resetSelection()), jexcel.current = o[0].jexcel) : jexcel.current && (jexcel.current.edition && jexcel.current.closeEditor(jexcel.current.edition[0], true), jexcel.current.resetSelection(true), jexcel.current = null), jexcel.current && 1 == t) {
                if (e.target.classList.contains("jexcel_selectall")) jexcel.current && jexcel.current.selectAll();
                else if (e.target.classList.contains("jexcel_corner")) 1 == jexcel.current.options.editable && (jexcel.current.selectedCorner = true);
                else {
                  if (1 == o[1]) {
                    if (p = e.target.getAttribute("data-x")) {
                      var n = e.target.getBoundingClientRect();
                      if (1 == jexcel.current.options.columnResize && n.width - e.offsetX < 6) {
                        jexcel.current.resizing = { mousePosition: e.pageX, column: p, width: n.width }, jexcel.current.headers[p].classList.add("resizing");
                        for (var r = 0; r < jexcel.current.records.length; r++) jexcel.current.records[r][p] && jexcel.current.records[r][p].classList.add("resizing");
                      } else if (1 == jexcel.current.options.columnDrag && n.height - e.offsetY < 6) if (jexcel.current.isColMerged(p).length) console.error("Jspreadsheet: This column is part of a merged cell.");
                      else for (jexcel.current.resetSelection(), jexcel.current.dragging = { element: e.target, column: p, destination: p }, jexcel.current.headers[p].classList.add("dragging"), r = 0; r < jexcel.current.records.length; r++) jexcel.current.records[r][p] && jexcel.current.records[r][p].classList.add("dragging");
                      else {
                        if (jexcel.current.selectedHeader && (e.shiftKey || e.ctrlKey)) var l = jexcel.current.selectedHeader, i2 = p;
                        else jexcel.current.selectedHeader == p && 1 == jexcel.current.options.allowRenameColumn && (jexcel.timeControl = setTimeout(function() {
                          jexcel.current.setHeader(p);
                        }, 800)), jexcel.current.selectedHeader = p, l = p, i2 = p;
                        jexcel.current.updateSelectionFromCoords(l, 0, i2, jexcel.current.options.data.length - 1);
                      }
                    } else if (e.target.parentNode.classList.contains("jexcel_nested")) {
                      if (e.target.getAttribute("data-column")) var s = e.target.getAttribute("data-column").split(","), a = parseInt(s[0]), u = parseInt(s[s.length - 1]);
                      else a = 0, u = jexcel.current.options.columns.length - 1;
                      jexcel.current.updateSelectionFromCoords(a, 0, u, jexcel.current.options.data.length - 1);
                    }
                  } else jexcel.current.selectedHeader = false;
                  if (2 == o[1]) {
                    var c = e.target.getAttribute("data-y");
                    if (e.target.classList.contains("jexcel_row")) n = e.target.getBoundingClientRect(), 1 == jexcel.current.options.rowResize && n.height - e.offsetY < 6 ? (jexcel.current.resizing = { element: e.target.parentNode, mousePosition: e.pageY, row: c, height: n.height }, e.target.parentNode.classList.add("resizing")) : 1 == jexcel.current.options.rowDrag && n.width - e.offsetX < 6 ? jexcel.current.isRowMerged(c).length ? console.error("Jspreadsheet: This row is part of a merged cell") : 1 == jexcel.current.options.search && jexcel.current.results ? console.error("Jspreadsheet: Please clear your search before perform this action") : (jexcel.current.resetSelection(), jexcel.current.dragging = { element: e.target.parentNode, row: c, destination: c }, e.target.parentNode.classList.add("dragging")) : (jexcel.current.selectedRow && (e.shiftKey || e.ctrlKey) ? (l = jexcel.current.selectedRow, i2 = c) : (jexcel.current.selectedRow = c, l = c, i2 = c), jexcel.current.updateSelectionFromCoords(0, l, jexcel.current.options.data[0].length - 1, i2));
                    else if (e.target.classList.contains("jclose") && e.target.clientWidth - e.offsetX < 50 && e.offsetY < 50) jexcel.current.closeEditor(jexcel.current.edition[0], true);
                    else {
                      var f = function(e2) {
                        var t2 = e2.getAttribute("data-x"), o2 = e2.getAttribute("data-y");
                        return t2 && o2 ? [t2, o2] : e2.parentNode ? f(e2.parentNode) : void 0;
                      }, d = f(e.target);
                      if (d) {
                        var p = d[0];
                        c = d[1], jexcel.current.edition && (jexcel.current.edition[2] == p && jexcel.current.edition[3] == c || jexcel.current.closeEditor(jexcel.current.edition[0], true)), jexcel.current.edition || (e.shiftKey ? jexcel.current.updateSelectionFromCoords(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], p, c) : jexcel.current.updateSelectionFromCoords(p, c)), jexcel.current.selectedHeader = null, jexcel.current.selectedRow = null;
                      }
                    }
                  } else jexcel.current.selectedRow = false;
                  e.target.classList.contains("jexcel_page") && ("<" == e.target.textContent ? jexcel.current.page(0) : ">" == e.target.textContent ? jexcel.current.page(e.target.getAttribute("title") - 1) : jexcel.current.page(e.target.textContent - 1));
                }
                jexcel.current.edition ? jexcel.isMouseAction = false : jexcel.isMouseAction = true;
              } else jexcel.isMouseAction = false;
            }, jexcel.mouseUpControls = function(e) {
              if (jexcel.current) if (jexcel.current.resizing) {
                if (jexcel.current.resizing.column) {
                  var t = jexcel.current.colgroup[jexcel.current.resizing.column].getAttribute("width"), o = jexcel.current.getSelectedColumns();
                  if (o.length > 1) {
                    for (var n = [], r = 0; r < o.length; r++) n.push(parseInt(jexcel.current.colgroup[o[r]].getAttribute("width")));
                    n[o.indexOf(parseInt(jexcel.current.resizing.column))] = jexcel.current.resizing.width, jexcel.current.setWidth(o, t, n);
                  } else jexcel.current.setWidth(jexcel.current.resizing.column, t, jexcel.current.resizing.width);
                  jexcel.current.headers[jexcel.current.resizing.column].classList.remove("resizing");
                  for (var l = 0; l < jexcel.current.records.length; l++) jexcel.current.records[l][jexcel.current.resizing.column] && jexcel.current.records[l][jexcel.current.resizing.column].classList.remove("resizing");
                } else {
                  jexcel.current.rows[jexcel.current.resizing.row].children[0].classList.remove("resizing");
                  var i2 = jexcel.current.rows[jexcel.current.resizing.row].getAttribute("height");
                  jexcel.current.setHeight(jexcel.current.resizing.row, i2, jexcel.current.resizing.height), jexcel.current.resizing.element.classList.remove("resizing");
                }
                jexcel.current.resizing = null;
              } else if (jexcel.current.dragging) {
                if (jexcel.current.dragging) {
                  if (jexcel.current.dragging.column) {
                    var s = e.target.getAttribute("data-x");
                    for (jexcel.current.headers[jexcel.current.dragging.column].classList.remove("dragging"), l = 0; l < jexcel.current.rows.length; l++) jexcel.current.records[l][jexcel.current.dragging.column] && jexcel.current.records[l][jexcel.current.dragging.column].classList.remove("dragging");
                    for (r = 0; r < jexcel.current.headers.length; r++) jexcel.current.headers[r].classList.remove("dragging-left"), jexcel.current.headers[r].classList.remove("dragging-right");
                    s && jexcel.current.dragging.column != jexcel.current.dragging.destination && jexcel.current.moveColumn(jexcel.current.dragging.column, jexcel.current.dragging.destination);
                  } else {
                    if (jexcel.current.dragging.element.nextSibling) {
                      var a = parseInt(jexcel.current.dragging.element.nextSibling.getAttribute("data-y"));
                      jexcel.current.dragging.row < a && (a -= 1);
                    } else a = parseInt(jexcel.current.dragging.element.previousSibling.getAttribute("data-y"));
                    jexcel.current.dragging.row != jexcel.current.dragging.destination && jexcel.current.moveRow(jexcel.current.dragging.row, a, true), jexcel.current.dragging.element.classList.remove("dragging");
                  }
                  jexcel.current.dragging = null;
                }
              } else jexcel.current.selectedCorner && (jexcel.current.selectedCorner = false, jexcel.current.selection.length > 0 && (jexcel.current.copyData(jexcel.current.selection[0], jexcel.current.selection[jexcel.current.selection.length - 1]), jexcel.current.removeCopySelection()));
              jexcel.timeControl && (clearTimeout(jexcel.timeControl), jexcel.timeControl = null), jexcel.isMouseAction = false;
            }, jexcel.mouseMoveControls = function(e) {
              if ((e = e || window.event).buttons) var t = e.buttons;
              else t = e.button ? e.button : e.which;
              if (t || (jexcel.isMouseAction = false), jexcel.current) if (1 == jexcel.isMouseAction) {
                if (jexcel.current.resizing) if (jexcel.current.resizing.column) {
                  var o = e.pageX - jexcel.current.resizing.mousePosition;
                  if (jexcel.current.resizing.width + o > 0) {
                    var n = jexcel.current.resizing.width + o;
                    jexcel.current.colgroup[jexcel.current.resizing.column].setAttribute("width", n), jexcel.current.updateCornerPosition();
                  }
                } else {
                  var r = e.pageY - jexcel.current.resizing.mousePosition;
                  if (jexcel.current.resizing.height + r > 0) {
                    var l = jexcel.current.resizing.height + r;
                    jexcel.current.rows[jexcel.current.resizing.row].setAttribute("height", l), jexcel.current.updateCornerPosition();
                  }
                }
                else if (jexcel.current.dragging) if (jexcel.current.dragging.column) {
                  var i2 = e.target.getAttribute("data-x");
                  if (i2) if (jexcel.current.isColMerged(i2).length) console.error("Jspreadsheet: This column is part of a merged cell.");
                  else {
                    for (var s = 0; s < jexcel.current.headers.length; s++) jexcel.current.headers[s].classList.remove("dragging-left"), jexcel.current.headers[s].classList.remove("dragging-right");
                    jexcel.current.dragging.column == i2 ? jexcel.current.dragging.destination = parseInt(i2) : e.target.clientWidth / 2 > e.offsetX ? (jexcel.current.dragging.column < i2 ? jexcel.current.dragging.destination = parseInt(i2) - 1 : jexcel.current.dragging.destination = parseInt(i2), jexcel.current.headers[i2].classList.add("dragging-left")) : (jexcel.current.dragging.column < i2 ? jexcel.current.dragging.destination = parseInt(i2) : jexcel.current.dragging.destination = parseInt(i2) + 1, jexcel.current.headers[i2].classList.add("dragging-right"));
                  }
                } else {
                  var a = e.target.getAttribute("data-y");
                  if (a) if (jexcel.current.isRowMerged(a).length) console.error("Jspreadsheet: This row is part of a merged cell.");
                  else {
                    var u = e.target.clientHeight / 2 > e.offsetY ? e.target.parentNode.nextSibling : e.target.parentNode;
                    jexcel.current.dragging.element != u && (e.target.parentNode.parentNode.insertBefore(jexcel.current.dragging.element, u), jexcel.current.dragging.destination = Array.prototype.indexOf.call(jexcel.current.dragging.element.parentNode.children, jexcel.current.dragging.element));
                  }
                }
              } else {
                var c = e.target.getAttribute("data-x"), f = e.target.getAttribute("data-y"), d = e.target.getBoundingClientRect();
                jexcel.current.cursor && (jexcel.current.cursor.style.cursor = "", jexcel.current.cursor = null), e.target.parentNode.parentNode && e.target.parentNode.parentNode.className && (e.target.parentNode.parentNode.classList.contains("resizable") && (e.target && c && !f && d.width - (e.clientX - d.left) < 6 ? (jexcel.current.cursor = e.target, jexcel.current.cursor.style.cursor = "col-resize") : e.target && !c && f && d.height - (e.clientY - d.top) < 6 && (jexcel.current.cursor = e.target, jexcel.current.cursor.style.cursor = "row-resize")), e.target.parentNode.parentNode.classList.contains("draggable") && (e.target && !c && f && d.width - (e.clientX - d.left) < 6 || e.target && c && !f && d.height - (e.clientY - d.top) < 6) && (jexcel.current.cursor = e.target, jexcel.current.cursor.style.cursor = "move"));
              }
            }, jexcel.mouseOverControls = function(e) {
              if ((e = e || window.event).buttons) var t = e.buttons;
              else t = e.button ? e.button : e.which;
              if (t || (jexcel.isMouseAction = false), jexcel.current && 1 == jexcel.isMouseAction) {
                var o = jexcel.getElement(e.target);
                if (o[0]) {
                  if (jexcel.current != o[0].jexcel && jexcel.current) return false;
                  var n = e.target.getAttribute("data-x"), r = e.target.getAttribute("data-y");
                  if (jexcel.current.resizing || jexcel.current.dragging) ;
                  else {
                    if (1 == o[1] && jexcel.current.selectedHeader) {
                      n = e.target.getAttribute("data-x");
                      var l = jexcel.current.selectedHeader, i2 = n;
                      jexcel.current.updateSelectionFromCoords(l, 0, i2, jexcel.current.options.data.length - 1);
                    }
                    2 == o[1] && (e.target.classList.contains("jexcel_row") ? jexcel.current.selectedRow && (l = jexcel.current.selectedRow, i2 = r, jexcel.current.updateSelectionFromCoords(0, l, jexcel.current.options.data[0].length - 1, i2)) : jexcel.current.edition || n && r && (jexcel.current.selectedCorner ? jexcel.current.updateCopySelection(n, r) : jexcel.current.selectedCell && jexcel.current.updateSelectionFromCoords(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], n, r)));
                  }
                }
              }
              jexcel.timeControl && (clearTimeout(jexcel.timeControl), jexcel.timeControl = null);
            }, jexcel.doubleClickControls = function(e) {
              if (jexcel.current) if (e.target.classList.contains("jexcel_corner")) {
                if (jexcel.current.highlighted.length > 0) {
                  var t = jexcel.current.highlighted[0].getAttribute("data-x"), o = parseInt(jexcel.current.highlighted[jexcel.current.highlighted.length - 1].getAttribute("data-y")) + 1, n = jexcel.current.highlighted[jexcel.current.highlighted.length - 1].getAttribute("data-x"), r = jexcel.current.records.length - 1;
                  jexcel.current.copyData(jexcel.current.records[o][t], jexcel.current.records[r][n]);
                }
              } else if (e.target.classList.contains("jexcel_column_filter")) {
                var l = e.target.getAttribute("data-x");
                jexcel.current.openFilter(l);
              } else {
                var i2 = jexcel.getElement(e.target);
                if (1 == i2[1] && 1 == jexcel.current.options.columnSorting && (l = e.target.getAttribute("data-x")) && jexcel.current.orderBy(l), 2 == i2[1] && 1 == jexcel.current.options.editable && !jexcel.current.edition) {
                  var s = function(e2) {
                    if (e2.parentNode) {
                      var t2 = e2.getAttribute("data-x"), o2 = e2.getAttribute("data-y");
                      return t2 && o2 ? e2 : s(e2.parentNode);
                    }
                  }, a = s(e.target);
                  a && a.classList.contains("highlight") && jexcel.current.openEditor(a);
                }
              }
            }, jexcel.copyControls = function(e) {
              jexcel.current && jexcel.copyControls.enabled && (jexcel.current.edition || jexcel.current.copy(true));
            }, jexcel.cutControls = function(e) {
              jexcel.current && (jexcel.current.edition || (jexcel.current.copy(true), 1 == jexcel.current.options.editable && jexcel.current.setValue(jexcel.current.highlighted, "")));
            }, jexcel.pasteControls = function(e) {
              jexcel.current && jexcel.current.selectedCell && (jexcel.current.edition || 1 == jexcel.current.options.editable && (e && e.clipboardData ? (jexcel.current.paste(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], e.clipboardData.getData("text")), e.preventDefault()) : window.clipboardData && jexcel.current.paste(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], window.clipboardData.getData("text"))));
            }, jexcel.contextMenuControls = function(e) {
              if ("buttons" in (e = e || window.event) ? e.buttons : e.which || e.button, jexcel.current) {
                if (jexcel.current.edition) e.preventDefault();
                else if (jexcel.current.options.contextMenu && (jexcel.current.contextMenu.contextmenu.close(), jexcel.current)) {
                  var t = e.target.getAttribute("data-x"), o = e.target.getAttribute("data-y");
                  if (t || o) {
                    (t < parseInt(jexcel.current.selectedCell[0]) || t > parseInt(jexcel.current.selectedCell[2]) || o < parseInt(jexcel.current.selectedCell[1]) || o > parseInt(jexcel.current.selectedCell[3])) && jexcel.current.updateSelectionFromCoords(t, o, t, o);
                    var n = jexcel.current.options.contextMenu(jexcel.current, t, o, e);
                    jexcel.current.contextMenu.contextmenu.open(e, n), e.preventDefault();
                  }
                }
              }
            }, jexcel.touchStartControls = function(e) {
              var t = jexcel.getElement(e.target);
              if (t[0] ? jexcel.current != t[0].jexcel && (jexcel.current && jexcel.current.resetSelection(), jexcel.current = t[0].jexcel) : jexcel.current && (jexcel.current.resetSelection(), jexcel.current = null), jexcel.current && !jexcel.current.edition) {
                var o = e.target.getAttribute("data-x"), n = e.target.getAttribute("data-y");
                o && n && (jexcel.current.updateSelectionFromCoords(o, n), jexcel.timeControl = setTimeout(function() {
                  "color" == jexcel.current.options.columns[o].type ? jexcel.tmpElement = null : jexcel.tmpElement = e.target, jexcel.current.openEditor(e.target, false, e);
                }, 500));
              }
            }, jexcel.touchEndControls = function(e) {
              jexcel.timeControl && (clearTimeout(jexcel.timeControl), jexcel.timeControl = null, jexcel.tmpElement && "INPUT" == jexcel.tmpElement.children[0].tagName && jexcel.tmpElement.children[0].focus(), jexcel.tmpElement = null);
            }, jexcel.tabs = function(e, t) {
              var o = [];
              if (e.classList.contains("jexcel_tabs")) r = e.children[0], l = e.children[1];
              else {
                e.innerHTML = "", e.classList.add("jexcel_tabs"), e.jexcel = [];
                var n = document.createElement("div"), r = e.appendChild(n), l = (n = document.createElement("div"), e.appendChild(n));
              }
              for (var i2 = [], s = [], a = 0; a < t.length; a++) {
                i2[a] = document.createElement("div"), i2[a].classList.add("jexcel_tab");
                var u = jexcel(i2[a], t[a]);
                l.appendChild(i2[a]), o[a] = e.jexcel.push(u), s[a] = document.createElement("div"), s[a].classList.add("jexcel_tab_link"), s[a].setAttribute("data-spreadsheet", e.jexcel.length - 1), s[a].innerHTML = t[a].sheetName, s[a].onclick = function() {
                  for (var e2 = 0; e2 < r.children.length; e2++) r.children[e2].classList.remove("selected"), l.children[e2].style.display = "none";
                  var t2 = this.getAttribute("data-spreadsheet");
                  l.children[t2].style.display = "block", r.children[t2].classList.add("selected");
                }, r.appendChild(s[a]);
              }
              for (var c = 0; c < r.children.length; c++) r.children[c].classList.remove("selected"), l.children[c].style.display = "none";
              return r.children[r.children.length - 1].classList.add("selected"), l.children[r.children.length - 1].style.display = "block", o;
            }, jexcel.createTabs = jexcel.tabs, jexcel.fromSpreadsheet = function(e, t) {
              var o, n = function(e2) {
                var t2 = [];
                return e2.SheetNames.forEach(function(o2) {
                  var n2 = { rows: [], columns: [], data: [], style: {} };
                  if (n2.sheetName = o2, (d = e2.Sheets[o2]["!cols"]) && d.length) for (var r = 0; r < d.length; r++) n2.columns[r] = {}, d[r] && d[r].wpx && (n2.columns[r].width = d[r].wpx + "px");
                  if ((d = e2.Sheets[o2]["!rows"]) && d.length) for (r = 0; r < d.length; r++) d[r] && d[r].hpx && (n2.rows[r] = {}, n2.rows[r].height = d[r].hpx + "px");
                  if ((d = e2.Sheets[o2]["!merges"]) && d.length > 0) for (n2.mergeCells = [], r = 0; r < d.length; r++) {
                    var l = d[r].s.c, i2 = d[r].s.r, s = d[r].e.c, a = d[r].e.r, u = jexcel.getColumnNameFromId([l, i2]);
                    n2.mergeCells[u] = [s - l + 1, a - i2 + 1];
                  }
                  var c = 0, f = 0, d = Object.keys(e2.Sheets[o2]);
                  for (r = 0; r < d.length; r++) if ("!" != d[r].substr(0, 1)) {
                    var p = e2.Sheets[o2][d[r]], b = jexcel.getIdFromColumnName(d[r], true);
                    n2.data[b[1]] || (n2.data[b[1]] = []), n2.data[b[1]][b[0]] = p.f ? "=" + p.f : p.w, c < b[0] && (c = b[0]), f < b[1] && (f = b[1]), p.style && Object.keys(p.style).length > 0 && (n2.style[d[r]] = p.style), p.s && p.s.fgColor && (n2.style[d[r]] && (n2.style[d[r]] += ";"), n2.style[d[r]] += "background-color:#" + p.s.fgColor.rgb);
                  }
                  for (var j = n2.columns, h = 0; h <= f; h++) for (r = 0; r <= c; r++) n2.data[h] || (n2.data[h] = []), n2.data[h][r] || j < r && (n2.data[h][r] = "");
                  t2.push(n2);
                }), t2;
              };
              (o = new XMLHttpRequest()).open("GET", e, true), "undefined" != typeof Uint8Array ? (o.responseType = "arraybuffer", o.onload = function(e2) {
                var r = o.response, l = new Uint8Array(r), i2 = XLSX.read(l, { type: "array", cellFormula: true, cellStyles: true });
                t(n(i2));
              }) : (o.setRequestHeader("Accept-Charset", "x-user-defined"), o.onreadystatechange = function() {
                if (4 == o.readyState && 200 == o.status) {
                  var e2 = convertResponseBodyToText(o.responseBody), r = XLSX.read(e2, { type: "binary", cellFormula: true, cellStyles: true });
                  t(n(r));
                }
              }), o.send();
            }, jexcel.validLetter = function(e) {
              return e.match(/([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC-\u0400-\u04FF']+)/g) ? 1 : 0;
            }, jexcel.injectArray = function(e, t, o) {
              return e.slice(0, t).concat(o).concat(e.slice(t));
            }, jexcel.getColumnName = function(e) {
              return jexcel.helpers.getColumnName(e);
            }, jexcel.getIdFromColumnName = function(e, t) {
              var o = /^[a-zA-Z]+/.exec(e);
              if (o) {
                for (var n = 0, r = 0; r < o[0].length; r++) n += parseInt(o[0].charCodeAt(r) - 64) * Math.pow(26, o[0].length - 1 - r);
                --n < 0 && (n = 0);
                var l = parseInt(/[0-9]+$/.exec(e));
                l > 0 && l--, e = 1 == t ? [n, l] : n + "-" + l;
              }
              return e;
            }, jexcel.getColumnNameFromId = function(e) {
              return Array.isArray(e) || (e = e.split("-")), jexcel.getColumnName(parseInt(e[0])) + (parseInt(e[1]) + 1);
            }, jexcel.getElement = function(e) {
              var t = 0, o = 0;
              return function e2(n) {
                n.className && n.classList.contains("jexcel_container") && (o = n), "THEAD" == n.tagName ? t = 1 : "TBODY" == n.tagName && (t = 2), n.parentNode && (o || e2(n.parentNode));
              }(e), [o, t];
            }, jexcel.doubleDigitFormat = function(e) {
              return 1 == (e = "" + e).length && (e = "0" + e), e;
            }, jexcel.createFromTable = function(e, t) {
              if ("TABLE" == e.tagName) {
                t || (t = {}), t.columns = [], t.data = [];
                var o = e.querySelectorAll("colgroup > col");
                if (o.length) for (var n = 0; n < o.length; n++) {
                  if (!(r = o[n].style.width)) var r = o[n].getAttribute("width");
                  r && (t.columns[n] || (t.columns[n] = {}), t.columns[n].width = r);
                }
                var l = function(e2) {
                  var o2 = e2.getBoundingClientRect(), r2 = o2.width > 50 ? o2.width : 50;
                  t.columns[n] || (t.columns[n] = {}), e2.getAttribute("data-celltype") ? t.columns[n].type = e2.getAttribute("data-celltype") : t.columns[n].type = "text", t.columns[n].width = r2 + "px", t.columns[n].title = e2.innerHTML, t.columns[n].align = e2.style.textAlign || "center", (o2 = e2.getAttribute("name")) && (t.columns[n].name = o2), (o2 = e2.getAttribute("id")) && (t.columns[n].id = o2), (o2 = e2.getAttribute("data-mask")) && (t.columns[n].mask = o2);
                }, i2 = [], s = e.querySelectorAll(":scope > thead > tr");
                if (s.length) {
                  for (var a = 0; a < s.length - 1; a++) {
                    var u = [];
                    for (n = 0; n < s[a].children.length; n++) {
                      var c = { title: s[a].children[n].textContent, colspan: s[a].children[n].getAttribute("colspan") || 1 };
                      u.push(c);
                    }
                    i2.push(u);
                  }
                  for (s = s[s.length - 1].children, n = 0; n < s.length; n++) l(s[n]);
                }
                var f = 0, d = {}, p = {}, b = {}, j = {}, h = e.querySelectorAll(":scope > tr, :scope > tbody > tr");
                for (a = 0; a < h.length; a++) if (t.data[f] = [], 1 != t.parseTableFirstRowAsHeader || s.length || 0 != a) {
                  for (n = 0; n < h[a].children.length; n++) {
                    if (g = h[a].children[n].getAttribute("data-formula")) "=" != g.substr(0, 1) && (g = "=" + g);
                    else var g = h[a].children[n].innerHTML;
                    t.data[f].push(g);
                    var m = jexcel.getColumnNameFromId([n, a]), v = h[a].children[n].getAttribute("class");
                    v && (j[m] = v);
                    var y2 = parseInt(h[a].children[n].getAttribute("colspan")) || 0, C = parseInt(h[a].children[n].getAttribute("rowspan")) || 0;
                    (y2 || C) && (d[m] = [y2 || 1, C || 1]), h[a].children[n].style && "none" == h[a].children[n].style.display && (h[a].children[n].style.display = "");
                    var x2 = h[a].children[n].getAttribute("style");
                    x2 && (b[m] = x2), h[a].children[n].classList.contains("styleBold") && (b[m] ? b[m] += "; font-weight:bold;" : b[m] = "font-weight:bold;");
                  }
                  h[a].style && h[a].style.height && (p[a] = { height: h[a].style.height }), f++;
                } else for (n = 0; n < h[a].children.length; n++) l(h[a].children[n]);
                if (Object.keys(i2).length > 0 && (t.nestedHeaders = i2), Object.keys(b).length > 0 && (t.style = b), Object.keys(d).length > 0 && (t.mergeCells = d), Object.keys(p).length > 0 && (t.rows = p), Object.keys(j).length > 0 && (t.classes = j), (h = e.querySelectorAll("tfoot tr")).length) {
                  var w = [];
                  for (a = 0; a < h.length; a++) {
                    var A = [];
                    for (n = 0; n < h[a].children.length; n++) A.push(h[a].children[n].textContent);
                    w.push(A);
                  }
                  Object.keys(w).length > 0 && (t.footers = w);
                }
                if (1 == t.parseTableAutoCellType) {
                  var E = [];
                  for (n = 0; n < t.columns.length; n++) {
                    var M = true, I = true;
                    for (E[n] = [], a = 0; a < t.data.length; a++) g = t.data[a][n], E[n][g] || (E[n][g] = 0), E[n][g]++, g.length > 25 && (M = false), 10 == g.length && "-" == g.substr(4, 1) && "-" == g.substr(7, 1) || (I = false);
                    var N = Object.keys(E[n]).length;
                    I ? t.columns[n].type = "calendar" : 1 == M && N > 1 && N <= parseInt(0.1 * t.data.length) && (t.columns[n].type = "dropdown", t.columns[n].source = Object.keys(E[n]));
                  }
                }
                return t;
              }
              console.log("Element is not a table");
            }, jexcel.helpers = (component = { getCaretIndex: function(e) {
              if (this.config.root) var t = this.config.root;
              else t = window;
              var o = 0, n = t.getSelection();
              if (n && 0 !== n.rangeCount) {
                var r = n.getRangeAt(0), l = r.cloneRange();
                l.selectNodeContents(e), l.setEnd(r.endContainer, r.endOffset), o = l.toString().length;
              }
              return o;
            }, invert: function(e) {
              for (var t = [], o = Object.keys(e), n = 0; n < o.length; n++) t[e[o[n]]] = o[n];
              return t;
            }, getColumnName: function(e) {
              let t, o = e + 1, n = "";
              for (; o > 0; ) t = (o - 1) % 26, n = String.fromCharCode(65 + t).toString() + n, o = parseInt((o - t) / 26);
              return n;
            }, getColumnNameFromCoords: function(e, t) {
              return component.getColumnName(parseInt(e)) + (parseInt(t) + 1);
            }, getCoordsFromColumnName: function(e) {
              var t = /^[a-zA-Z]+/.exec(e);
              if (t) {
                for (var o = 0, n = 0; n < t[0].length; n++) o += parseInt(t[0].charCodeAt(n) - 64) * Math.pow(26, t[0].length - 1 - n);
                --o < 0 && (o = 0);
                var r = parseInt(/[0-9]+$/.exec(e)) || null;
                return r > 0 && r--, [o, r];
              }
            }, createFromTable: function() {
            }, injectArray: function(e, t, o) {
              return e.slice(0, t).concat(o).concat(e.slice(t));
            }, parseCSV: function(e, t) {
              t = t || ",";
              for (var o = 0, n = 0, r = [[]], l = 0, i2 = null, s = false, a = false, u = 0; u < e.length; u++) if (r[n] || (r[n] = []), r[n][o] || (r[n][o] = ""), "\r" != e[u]) if ("\n" != e[u] && e[u] != t || 0 != s && 1 != a && i2) {
                if ('"' == e[u] && (s = !s), null === i2) {
                  if (1 == (i2 = s)) continue;
                } else if (true === i2 && !a && '"' == e[u]) {
                  '"' == e[u + 1] ? (s = true, r[n][o] += e[u], u++) : a = true;
                  continue;
                }
                r[n][o] += e[u];
              } else {
                if (i2 = null, s = false, a = false, '"' == r[n][o][0]) {
                  var c = r[n][o].trim();
                  '"' == c[c.length - 1] && (r[n][o] = c.substr(1, c.length - 2));
                }
                "\n" == e[u] ? (o = 0, n++) : ++o > l && (l = o);
              }
              for (var f = 0; f < r.length; f++) for (u = 0; u <= l; u++) void 0 === r[f][u] && (r[f][u] = "");
              return r;
            } }, component), "undefined" != typeof jQuery && function(e) {
              e.fn.jspreadsheet = e.fn.jexcel = function(t) {
                var o = e(this).get(0);
                return o.jexcel ? Array.isArray(o.jexcel) ? o.jexcel[t][arguments[1]].apply(this, Array.prototype.slice.call(arguments, 2)) : o.jexcel[t].apply(this, Array.prototype.slice.call(arguments, 1)) : jexcel(e(this).get(0), arguments[0]);
              };
            }(jQuery), jexcel;
          }, module.exports = factory();
        } }, __webpack_module_cache__ = {};
        function __webpack_require__(e) {
          var t = __webpack_module_cache__[e];
          if (void 0 !== t) return t.exports;
          var o = __webpack_module_cache__[e] = { exports: {} };
          return __webpack_modules__[e].call(o.exports, o, o.exports, __webpack_require__), o.exports;
        }
        var __webpack_exports__ = __webpack_require__(44);
        jspreadsheet = __webpack_exports__;
      })();
      return jspreadsheet;
    });
  }
});
export default require_dist();
//# sourceMappingURL=jspreadsheet-ce.js.map
