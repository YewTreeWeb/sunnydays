(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ 0:
/*!*************************************!*\
  !*** multi ./website/src/js/app.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mat/Sites/jekyll/sunnydays/website/src/js/app.js */"kFay");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "E4hX":
/*!*******************************************!*\
  !*** ./website/src/js/modules/helpers.js ***!
  \*******************************************/
/*! exports provided: ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(breakpoints, browser) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
// Avoid `console` errors in browsers that lack a console.
;

(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Add tabbing indicator to window


var handleFirstTab = function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab); // Detect if mobile or desktop.

var body = document.getElementsByTagName('body')[0];
breakpoints({
  xlarge: ['1281px', '1680px'],
  large: ['981px', '1280px'],
  medium: ['737px', '980px'],
  small: ['481px', '736px'],
  xsmall: [null, '480px']
});

if (browser.mobile) {
  body.classList.add('is-mobile');
} else {
  breakpoints.on('>medium', function () {
    body.classList.remove('is-mobile');
    body.classList.add('is-desktop');
  });
  breakpoints.on('<=medium', function () {
    body.classList.remove('is-desktop');
    body.classList.add('is-mobile');
  });
}

var ready = function ready(cb) {
  if (document.readyState != 'loading') {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! breakpoints */ "a6Qp"), __webpack_require__(/*! browser */ "txRt")))

/***/ }),

/***/ "HJsn":
/*!**********************************************!*\
  !*** ./website/src/js/modules/background.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

var body = document.getElementsByTagName('body')[0]; // Set time of day class

var localTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date()).format('H');
var theme = 'data-theme';
var dayNight;

if (localTime >= 21 && localTime < 24 || localTime >= 0 && localTime < 5) {
  dayNight = 'night';
} else if (localTime > 7 && localTime <= 18) {
  dayNight = 'day';
} else {
  dayNight = 'sunrise-sunset';
}

switch (dayNight) {
  case 'night':
    body.removeAttribute(theme, 'day sunrise-sunset');
    body.setAttribute(theme, 'night');
    break;

  case 'day':
    body.removeAttribute(theme, 'night sunrise-sunset');
    body.setAttribute(theme, 'day');
    break;

  default:
    body.removeAttribute(theme, 'night day');
    body.setAttribute(theme, 'sunrise-sunset');
    break;
}

/***/ }),

/***/ "a6Qp":
/*!******************************!*\
  !*** external "breakpoints" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = breakpoints;

/***/ }),

/***/ "kFay":
/*!*******************************!*\
  !*** ./website/src/js/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(browser) {/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "OuUZ");
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers */ "E4hX");
/* harmony import */ var _modules_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/background */ "HJsn");
// External
 // Internal


 // Dynamic Import local modules

if (window.location.pathname === '/') {
  Promise.all(/*! import() | savedcities */[__webpack_require__.e("vendors"), __webpack_require__.e("newcity~savedcities"), __webpack_require__.e("savedcities")]).then(__webpack_require__.bind(null, /*! ./modules/savedcities */ "fgBT")).then(function (module) {
    if (true) {
      console.log('Saved cities import loaded');
    }

    var saved = module["default"];
    return saved;
  })["catch"](function (err) {
    return console.error(err);
  });
} else if (window.location.pathname === '/search/') {
  Promise.all(/*! import() | newcity */[__webpack_require__.e("vendors"), __webpack_require__.e("newcity~savedcities"), __webpack_require__.e("newcity")]).then(__webpack_require__.bind(null, /*! ./modules/newcity */ "mjH6")).then(function (module) {
    if (true) {
      console.log('New city import loaded');
    }

    var newCity = module["default"];
    return newCity;
  })["catch"](function (err) {
    return console.error(err);
  });
}

var body = document.getElementsByTagName('body')[0];
var html = document.getElementsByTagName('html')[0]; // Log if running in localhost when in development mode.

if (window.location.hostname === 'localhost' && "development" !== 'production') {
  console.log('localhost detected!');
  console.log(window.location);
} // Remove loading class from body on window load.


window.onload = function () {
  window.setTimeout(function () {
    body.classList.remove('is-loading');
  }, 100);
};

html.setAttribute('data-browser', browser.name);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! browser */ "txRt")))

/***/ }),

/***/ "txRt":
/*!**************************!*\
  !*** external "browser" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = browser;

/***/ })

},[[0,"runtime","vendors"]],["vendors","newcity~savedcities","newcity","savedcities"]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsLmluc3BlY3QgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJlYWtwb2ludHNcIiIsIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIl0sIm5hbWVzIjpbIm1ldGhvZCIsIm5vb3AiLCJtZXRob2RzIiwibGVuZ3RoIiwiY29uc29sZSIsIndpbmRvdyIsImhhbmRsZUZpcnN0VGFiIiwiZSIsImtleUNvZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYnJlYWtwb2ludHMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwieHNtYWxsIiwiYnJvd3NlciIsIm1vYmlsZSIsIm9uIiwicmVtb3ZlIiwicmVhZHkiLCJjYiIsInJlYWR5U3RhdGUiLCJsb2NhbFRpbWUiLCJkYXlqcyIsIkRhdGUiLCJmb3JtYXQiLCJ0aGVtZSIsImRheU5pZ2h0IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRoZW4iLCJtb2R1bGUiLCJwcm9jZXNzIiwibG9nIiwic2F2ZWQiLCJlcnIiLCJlcnJvciIsIm5ld0NpdHkiLCJodG1sIiwiaG9zdG5hbWUiLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUMsQ0FBQyxZQUFNO0FBQ04sTUFB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QVIsQ0FBWSxxQkFBWjtBQUNBdEMsU0FBTyxDQUFDc0MsR0FBUixDQUFZckMsTUFBTSxDQUFDZ0MsUUFBbkI7QUFDRCxDLENBRUQ7OztBQUNBaEMsTUFBTSxDQUFDNEMsTUFBUCxHQUFnQixZQUFNO0FBQ3BCNUMsUUFBTSxDQUFDNkMsVUFBUCxDQUFrQixZQUFNO0FBQ3RCeEMsUUFBSSxDQUFDQyxTQUFMLENBQWVjLE1BQWYsQ0FBc0IsWUFBdEI7QUFDRCxHQUZELEVBRUcsR0FGSDtBQUdELENBSkQ7O0FBTUFzQixJQUFJLENBQUNYLFlBQUwsQ0FBa0IsY0FBbEIsRUFBa0NkLE9BQU8sQ0FBQzZCLElBQTFDLEU7Ozs7Ozs7Ozs7OztBQ3JEQSx5QiIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIiwiLy8gQXZvaWQgYGNvbnNvbGVgIGVycm9ycyBpbiBicm93c2VycyB0aGF0IGxhY2sgYSBjb25zb2xlLlxuOygoKSA9PiB7XG4gIGxldCBtZXRob2RcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHt9XG4gIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgJ2Fzc2VydCcsXG4gICAgJ2NsZWFyJyxcbiAgICAnY291bnQnLFxuICAgICdkZWJ1ZycsXG4gICAgJ2RpcicsXG4gICAgJ2RpcnhtbCcsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXhjZXB0aW9uJyxcbiAgICAnZ3JvdXAnLFxuICAgICdncm91cENvbGxhcHNlZCcsXG4gICAgJ2dyb3VwRW5kJyxcbiAgICAnaW5mbycsXG4gICAgJ2xvZycsXG4gICAgJ21hcmtUaW1lbGluZScsXG4gICAgJ3Byb2ZpbGUnLFxuICAgICdwcm9maWxlRW5kJyxcbiAgICAndGFibGUnLFxuICAgICd0aW1lJyxcbiAgICAndGltZUVuZCcsXG4gICAgJ3RpbWVsaW5lJyxcbiAgICAndGltZWxpbmVFbmQnLFxuICAgICd0aW1lU3RhbXAnLFxuICAgICd0cmFjZScsXG4gICAgJ3dhcm4nLFxuICBdXG4gIGxldCBsZW5ndGggPSBtZXRob2RzLmxlbmd0aFxuICBsZXQgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KVxuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXVxuXG4gICAgLy8gT25seSBzdHViIHVuZGVmaW5lZCBtZXRob2RzLlxuICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG4gICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wXG4gICAgfVxuICB9XG59KSgpXG5cbi8vIEFkZCB0YWJiaW5nIGluZGljYXRvciB0byB3aW5kb3dcbmNvbnN0IGhhbmRsZUZpcnN0VGFiID0gKGUpID0+IHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgIC8vIHRoZSBcIkkgYW0gYSBrZXlib2FyZCB1c2VyXCIga2V5XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd1c2VyLWlzLXRhYmJpbmcnKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRmlyc3RUYWIpXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVGaXJzdFRhYilcblxuLy8gRGV0ZWN0IGlmIG1vYmlsZSBvciBkZXNrdG9wLlxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXVxuYnJlYWtwb2ludHMoe1xuICB4bGFyZ2U6IFsnMTI4MXB4JywgJzE2ODBweCddLFxuICBsYXJnZTogWyc5ODFweCcsICcxMjgwcHgnXSxcbiAgbWVkaXVtOiBbJzczN3B4JywgJzk4MHB4J10sXG4gIHNtYWxsOiBbJzQ4MXB4JywgJzczNnB4J10sXG4gIHhzbWFsbDogW251bGwsICc0ODBweCddLFxufSlcblxuaWYgKGJyb3dzZXIubW9iaWxlKSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtbW9iaWxlJylcbn0gZWxzZSB7XG4gIGJyZWFrcG9pbnRzLm9uKCc+bWVkaXVtJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbW9iaWxlJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLWRlc2t0b3AnKVxuICB9KVxuICBicmVha3BvaW50cy5vbignPD1tZWRpdW0nLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kZXNrdG9wJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vYmlsZScpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCByZWFkeSA9IChjYikgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnbG9hZGluZycpIHtcbiAgICBjYigpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNiKVxuICB9XG59XG4iLCJpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdXG5cbi8vIFNldCB0aW1lIG9mIGRheSBjbGFzc1xuY29uc3QgbG9jYWxUaW1lID0gZGF5anMobmV3IERhdGUoKSkuZm9ybWF0KCdIJylcbmNvbnN0IHRoZW1lID0gJ2RhdGEtdGhlbWUnXG5sZXQgZGF5TmlnaHRcblxuaWYgKChsb2NhbFRpbWUgPj0gMjEgJiYgbG9jYWxUaW1lIDwgMjQpIHx8IChsb2NhbFRpbWUgPj0gMCAmJiBsb2NhbFRpbWUgPCA1KSkge1xuICBkYXlOaWdodCA9ICduaWdodCdcbn0gZWxzZSBpZiAobG9jYWxUaW1lID4gNyAmJiBsb2NhbFRpbWUgPD0gMTgpIHtcbiAgZGF5TmlnaHQgPSAnZGF5J1xufSBlbHNlIHtcbiAgZGF5TmlnaHQgPSAnc3VucmlzZS1zdW5zZXQnXG59XG5zd2l0Y2ggKGRheU5pZ2h0KSB7XG4gIGNhc2UgJ25pZ2h0JzpcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSh0aGVtZSwgJ2RheSBzdW5yaXNlLXN1bnNldCcpXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUodGhlbWUsICduaWdodCcpXG4gICAgYnJlYWtcbiAgY2FzZSAnZGF5JzpcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSh0aGVtZSwgJ25pZ2h0IHN1bnJpc2Utc3Vuc2V0JylcbiAgICBib2R5LnNldEF0dHJpYnV0ZSh0aGVtZSwgJ2RheScpXG4gICAgYnJlYWtcbiAgZGVmYXVsdDpcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSh0aGVtZSwgJ25pZ2h0IGRheScpXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUodGhlbWUsICdzdW5yaXNlLXN1bnNldCcpXG4gICAgYnJlYWtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gYnJlYWtwb2ludHM7IiwiLy8gRXh0ZXJuYWxcbmltcG9ydCAnYWlyYm5iLWJyb3dzZXItc2hpbXMnXG5cbi8vIEludGVybmFsXG5pbXBvcnQgJy4vbW9kdWxlcy9oZWxwZXJzJ1xuaW1wb3J0ICcuL21vZHVsZXMvYmFja2dyb3VuZCdcblxuLy8gRHluYW1pYyBJbXBvcnQgbG9jYWwgbW9kdWxlc1xuaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nKSB7XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNhdmVkY2l0aWVzXCIgKi8gLyogd2VicGFja1ByZWZldGNoOiB0cnVlICovICcuL21vZHVsZXMvc2F2ZWRjaXRpZXMnXG4gIClcbiAgICAudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZygnU2F2ZWQgY2l0aWVzIGltcG9ydCBsb2FkZWQnKVxuICAgICAgfVxuICAgICAgY29uc3Qgc2F2ZWQgPSBtb2R1bGUuZGVmYXVsdFxuICAgICAgcmV0dXJuIHNhdmVkXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxufSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvc2VhcmNoLycpIHtcbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibmV3Y2l0eVwiICovIC8qIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqLyAnLi9tb2R1bGVzL25ld2NpdHknXG4gIClcbiAgICAudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZygnTmV3IGNpdHkgaW1wb3J0IGxvYWRlZCcpXG4gICAgICB9XG4gICAgICBjb25zdCBuZXdDaXR5ID0gbW9kdWxlLmRlZmF1bHRcbiAgICAgIHJldHVybiBuZXdDaXR5XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxufVxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXVxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF1cblxuLy8gTG9nIGlmIHJ1bm5pbmcgaW4gbG9jYWxob3N0IHdoZW4gaW4gZGV2ZWxvcG1lbnQgbW9kZS5cbmlmIChcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyAmJlxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4pIHtcbiAgY29uc29sZS5sb2coJ2xvY2FsaG9zdCBkZXRlY3RlZCEnKVxuICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24pXG59XG5cbi8vIFJlbW92ZSBsb2FkaW5nIGNsYXNzIGZyb20gYm9keSBvbiB3aW5kb3cgbG9hZC5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKVxuICB9LCAxMDApXG59XG5cbmh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJyb3dzZXInLCBicm93c2VyLm5hbWUpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==