(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newcity"],{

/***/ "eurM":
/*!*******************************************!*\
  !*** ./website/src/js/modules/forcast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var Forcast = /*#__PURE__*/function () {
  function Forcast() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Forcast);

    // Add API key from OpenWeather.
    this.key = '312fc733d3070bc27fef36b8a58fa030'; // Add API key form Google TimeZone

    this.gKey = 'AIzaSyDa6qF43QFDOxJzipKKEMqdx2xts0B15A8'; // Get city weather

    this.cityURI = 'https://api.openweathermap.org/data/2.5/weather'; // Get city forcast

    this.forcastURI = 'https://api.openweathermap.org/data/2.5/forecast'; // Get TimeZone

    this.timeZoneURI = 'https://maps.googleapis.com/maps/api/timezone/json'; // UV

    this.uvURI = 'https://api.openweathermap.org/data/2.5/uvi';
  } // Get the data of the weather for the location.
  // Uses exported functions from focast.js


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Forcast, [{
    key: "updateCity",
    value: function () {
      var _updateCity = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(city) {
        var cityData, forcast, timeZone, uv;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getCity(city);

              case 2:
                cityData = _context.sent;
                _context.next = 5;
                return this.getForcast(city);

              case 5:
                forcast = _context.sent;
                _context.next = 8;
                return this.getTimeZone(cityData.coord.lat, cityData.coord.lon, cityData.timezone);

              case 8:
                timeZone = _context.sent;
                _context.next = 11;
                return this.getUv(cityData.coord.lat, cityData.coord.lon);

              case 11:
                uv = _context.sent;
                return _context.abrupt("return", {
                  cityData: cityData,
                  forcast: forcast,
                  timeZone: timeZone,
                  uv: uv
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateCity(_x) {
        return _updateCity.apply(this, arguments);
      }

      return updateCity;
    }() // Get city weather

  }, {
    key: "getCity",
    value: function () {
      var _getCity = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(city) {
        var query, response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "?q=".concat(city, "&appid=").concat(this.key, "&units=metric");
                _context2.next = 3;
                return fetch(this.cityURI + query);

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();

              case 6:
                data = _context2.sent;

                if (true) {
                  console.log(city);
                } // return data[0] With AccuWeather


                return _context2.abrupt("return", data);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCity(_x2) {
        return _getCity.apply(this, arguments);
      }

      return getCity;
    }() // Get city forcast

  }, {
    key: "getForcast",
    value: function () {
      var _getForcast = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(city) {
        var query, response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "?q=".concat(city, "&appid=").concat(this.key, "&units=metric");
                _context3.next = 3;
                return fetch(this.forcastURI + query);

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return response.json();

              case 6:
                data = _context3.sent;

                if (true) {
                  console.log(city);
                } // return data[0] With AccuWeather


                return _context3.abrupt("return", data);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getForcast(_x3) {
        return _getForcast.apply(this, arguments);
      }

      return getForcast;
    }() // Get city UV

  }, {
    key: "getUv",
    value: function () {
      var _getUv = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(lat, lon) {
        var query, response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "?appid=".concat(this.key, "&lat=").concat(lat, "&lon=").concat(lon);
                _context4.next = 3;
                return fetch(this.uvURI + query);

              case 3:
                response = _context4.sent;
                _context4.next = 6;
                return response.json();

              case 6:
                data = _context4.sent;

                if (true) {
                  console.log(lat);
                  console.log(lon);
                } // return data[0] With AccuWeather


                return _context4.abrupt("return", data);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUv(_x4, _x5) {
        return _getUv.apply(this, arguments);
      }

      return getUv;
    }() // Get TimeZone

  }, {
    key: "getTimeZone",
    value: function () {
      var _getTimeZone = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(lat, lon, timezone) {
        var query, response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = "?location=".concat(lat, ",").concat(lon, "&timestamp=").concat(timezone, "&key=").concat(this.gKey);
                _context5.next = 3;
                return fetch(this.timeZoneURI + query);

              case 3:
                response = _context5.sent;
                _context5.next = 6;
                return response.json();

              case 6:
                data = _context5.sent;

                if (true) {
                  console.log(lat);
                  console.log(lon);
                  console.log(timezone);
                }

                return _context5.abrupt("return", data);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getTimeZone(_x6, _x7, _x8) {
        return _getTimeZone.apply(this, arguments);
      }

      return getTimeZone;
    }()
  }]);

  return Forcast;
}();

/* harmony default export */ __webpack_exports__["default"] = (Forcast);

/***/ }),

/***/ "mjH6":
/*!*******************************************!*\
  !*** ./website/src/js/modules/newcity.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(localForage) {/* harmony import */ var _forcast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forcast */ "eurM");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ "Ds8A");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
// Import weather api
 // Import dayJS for date, time formatting



dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default.a); // Call new forcast class

var forcast = new _forcast__WEBPACK_IMPORTED_MODULE_0__["default"](); // Getting weather

var cityForm = document.querySelector('form');
var card = document.querySelector('.card');
var content = document.querySelector('.card__content');
var contentHeader = content.querySelectorAll('.card__header .column')[1];
var savedCity = document.querySelector('.card__save button'); // Output all data to DOM.

var updateUI = function updateUI(data) {
  // destructure properties
  //   const { cityData, weather } = data
  var cityData = data.cityData,
      forcast = data.forcast,
      timeZone = data.timeZone,
      uv = data.uv;

  if (true) {
    console.log('current');
    console.log(cityData);
    console.log('forcast');
    console.log(forcast);
    console.log(timeZone);
    console.log(uv);
  } // update template
  /// Set the type of precipitation expected.


  var precipitation = function precipitation(type) {
    var rainType = null;
    var rainAmount = null;

    if (type === 'Rain' || type === 'Snow') {
      rainType = type;

      if (cityData.rain) {
        rainAmount = cityData.rain['1h'];
        rainAmount = rainAmount + 'mm';
      } else if (cityData.snow) {
        rainAmount = cityData.snow['1h'];
        rainAmount = rainAmount + 'mm';
      } else {
        rainAmount = cityData.weather[0].description;
      }
    } else {
      rainType = 'Rain';
      rainAmount = '0mm';
    }

    return "<p>".concat(rainType, "</p><p>").concat(rainAmount, "</p>");
  }; /// Set UV index


  var uvIndex = function uvIndex(rating) {
    var uvRating;

    if (rating >= 3 && rating < 6) {
      uvRating = 'Moderate';
    } else if (rating >= 6 && rating < 8) {
      uvRating = 'High';
    } else if (rating >= 8 && rating < 11) {
      uvRating = 'Very High';
    } else if (rating > 10) {
      uvRating = 'Extreme';
    } else {
      uvRating = 'Low';
    }

    return uvRating;
  }; /// Get the date and time of the forcast.


  var time = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format('H');
  var dayTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(new Date().toLocaleString('en-UK', {
    timeZone: timeZone.timeZoneId
  })).format('dddd - h:mmA');
  var date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(new Date().toLocaleString('en-UK', {
    timeZone: timeZone.timeZoneId
  })).format('YYYY-MM-D'); /// Generating 5 day forcast

  var dailyForcast = function dailyForcast() {
    // let forcasts = document.createElement('div')
    var forcasts = ''; // forcasts.textContent = 'hello world'

    forcasts += "\n      <div class=\"forcasts__day\">\n        <div class=\"columns\">\n          <div class=\"column is-3\">\n            <h3>Day</h3>\n            <p>Weather</p>\n            <img src=\"\" alt=\"\">\n            <p>Wind</p>\n            <p>2mph</p>\n          </div>\n          <div class=\"column is-3\">\n            <img src=\"\" alt=\"\">\n            <p>High</p>\n            <p>30<sup>&deg;</sup></p>\n            <img src=\"\" alt=\"\">\n            <p>Rain</p>\n            <p>0%</p>\n          </div>\n          <div class=\"column is-6\">\n            <h3>Temp<sup>&deg;</sup></h3>\n            <img src=\"\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    "; // if ()

    console.log(forcasts);
    return forcasts;
  }; /// Set class for time of day.


  var cityDayNight;

  if (time >= 21 && time <= 23 || time >= 0 && time < 5) {
    cityDayNight = 'night';
  } else if (time >= 5 && time <= 7) {
    cityDayNight = 'sunrise';
  } else if (time > 7 && time <= 18) {
    cityDayNight = 'day';
  } else {
    cityDayNight = 'sunset';
  }

  if (true) {
    console.log("".concat(time, " = ").concat(cityDayNight));
  } /// Generate HTML.


  content.innerHTML = "\n    <header class=\"card__header .columns\">\n      <div class=\"column\">\n        <h2>".concat(cityData.main.temp, "<sup>&deg;</sup></h2>\n        <h3>").concat(cityData.name, ", ").concat(cityData.sys.country, "</h3>\n        <time datetime=\"").concat(date, "\">").concat(dayTime, "</time>\n      </div>\n      <div class=\"column\">\n        ").concat(dailyForcast(), "\n      </div>\n    </header>\n    <p>").concat(cityData.weather[0].description, "</p>\n    <hr>\n    <footer class=\"card__footer\">\n      <div class=\"columns card__details\">\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Wind</p>\n          <p>").concat(cityData.wind.speed, "mph</p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>High</p>\n          <p>").concat(cityData.main.temp_max, "<sup>&deg;</sup></p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          ").concat(precipitation(cityData.weather[0].main), "\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Humidity</p>\n          <p>").concat(cityData.main.humidity, "&percnt;</p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>UV</p>\n          <p>").concat(uvIndex(uv.value), "</p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Sunrise</p>\n          <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.unix(cityData.sys.sunrise).format('h:mA'), "</time></p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Sunset</p>\n          <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.unix(cityData.sys.sunset).format('h:mA'), "</time></p>\n        </div>\n      </div>\n    </footer>\n  "); // Show weather card if card doesn't have hidden class

  if (card.classList.contains('is-hidden')) {
    card.classList.remove('is-hidden');
  } // Add time of day class to card.


  card.classList.toggle("card--".concat(cityDayNight)); // Add class for weather image.

  card.querySelector('.card__image img').classList.toggle("".concat(cityData.weather[0].main));
}; // On form submit update the HTML content with the API data
// Save entered location to localStorage


cityForm.addEventListener('submit', function (e) {
  // prevent the default submit.
  e.preventDefault(); // get city value.

  var city = cityForm.city.value.trim();
  cityForm.reset(); // update ui with city

  forcast.updateCity(city).then(function (data) {
    return updateUI(data);
  })["catch"](function (err) {
    return console.error(err);
  }); // set localStorage with localForage.

  localStorage.setItem('city', city);
}); // Get city from localStorage

if (localStorage.getItem('city')) {
  forcast.updateCity(localStorage.getItem('city')).then(function (data) {
    return updateUI(data);
  })["catch"](function (err) {
    return console.error(err);
  });
} // If city is saved add location to localForage


savedCity.addEventListener('click', function () {
  var city = document.querySelector('.card__header h3').innerText;

  if (true) {
    console.log('Saved ' + city);
  }

  localForage.setItem('cities', city);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! localforage */ "oAJy")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2ZvcmNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy9uZXdjaXR5LmpzIl0sIm5hbWVzIjpbIkZvcmNhc3QiLCJrZXkiLCJnS2V5IiwiY2l0eVVSSSIsImZvcmNhc3RVUkkiLCJ0aW1lWm9uZVVSSSIsInV2VVJJIiwiY2l0eSIsImdldENpdHkiLCJjaXR5RGF0YSIsImdldEZvcmNhc3QiLCJmb3JjYXN0IiwiZ2V0VGltZVpvbmUiLCJjb29yZCIsImxhdCIsImxvbiIsInRpbWV6b25lIiwidGltZVpvbmUiLCJnZXRVdiIsInV2IiwicXVlcnkiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsImRheWpzIiwiZXh0ZW5kIiwidXRjIiwiY2l0eUZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkIiwiY29udGVudCIsImNvbnRlbnRIZWFkZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2F2ZWRDaXR5IiwidXBkYXRlVUkiLCJwcmVjaXBpdGF0aW9uIiwidHlwZSIsInJhaW5UeXBlIiwicmFpbkFtb3VudCIsInJhaW4iLCJzbm93Iiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwidXZJbmRleCIsInJhdGluZyIsInV2UmF0aW5nIiwidGltZSIsIkRhdGUiLCJmb3JtYXQiLCJkYXlUaW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lWm9uZUlkIiwiZGF0ZSIsImRhaWx5Rm9yY2FzdCIsImZvcmNhc3RzIiwiY2l0eURheU5pZ2h0IiwiaW5uZXJIVE1MIiwibWFpbiIsInRlbXAiLCJuYW1lIiwic3lzIiwiY291bnRyeSIsIndpbmQiLCJzcGVlZCIsInRlbXBfbWF4IiwiaHVtaWRpdHkiLCJ2YWx1ZSIsInVuaXgiLCJzdW5yaXNlIiwic3Vuc2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInJlc2V0IiwidXBkYXRlQ2l0eSIsInRoZW4iLCJlcnIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiaW5uZXJUZXh0IiwibG9jYWxGb3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxPO0FBQ0oscUJBQWM7QUFBQTs7QUFDWjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxrQ0FBWCxDQUZZLENBR1o7O0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHlDQUFaLENBSlksQ0FLWjs7QUFDQSxTQUFLQyxPQUFMLEdBQWUsaURBQWYsQ0FOWSxDQU9aOztBQUNBLFNBQUtDLFVBQUwsR0FBa0Isa0RBQWxCLENBUlksQ0FTWjs7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLG9EQUFuQixDQVZZLENBV1o7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhLDZDQUFiO0FBQ0QsRyxDQUNEO0FBQ0E7Ozs7Ozs2TUFDaUJDLEk7Ozs7Ozs7dUJBQ1EsS0FBS0MsT0FBTCxDQUFhRCxJQUFiLEM7OztBQUFqQkUsd0I7O3VCQUNnQixLQUFLQyxVQUFMLENBQWdCSCxJQUFoQixDOzs7QUFBaEJJLHVCOzt1QkFDaUIsS0FBS0MsV0FBTCxDQUNyQkgsUUFBUSxDQUFDSSxLQUFULENBQWVDLEdBRE0sRUFFckJMLFFBQVEsQ0FBQ0ksS0FBVCxDQUFlRSxHQUZNLEVBR3JCTixRQUFRLENBQUNPLFFBSFksQzs7O0FBQWpCQyx3Qjs7dUJBS1csS0FBS0MsS0FBTCxDQUFXVCxRQUFRLENBQUNJLEtBQVQsQ0FBZUMsR0FBMUIsRUFBK0JMLFFBQVEsQ0FBQ0ksS0FBVCxDQUFlRSxHQUE5QyxDOzs7QUFBWEksa0I7aURBQ0M7QUFDTFYsMEJBQVEsRUFBUkEsUUFESztBQUVMRSx5QkFBTyxFQUFQQSxPQUZLO0FBR0xNLDBCQUFRLEVBQVJBLFFBSEs7QUFJTEUsb0JBQUUsRUFBRkE7QUFKSyxpQjs7Ozs7Ozs7Ozs7Ozs7O1FBT1Q7Ozs7OzJNQUNjWixJOzs7Ozs7QUFDTmEscUIsZ0JBQWNiLEksb0JBQWMsS0FBS04sRzs7dUJBQ2hCb0IsS0FBSyxDQUFDLEtBQUtsQixPQUFMLEdBQWVpQixLQUFoQixDOzs7QUFBdEJFLHdCOzt1QkFDYUEsUUFBUSxDQUFDQyxJQUFULEU7OztBQUFiQyxvQjs7QUFFTixvQkFBSUMsSUFBSixFQUEyQztBQUN6Q0MseUJBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsSUFBWjtBQUNELGlCLENBRUQ7OztrREFDT2lCLEk7Ozs7Ozs7Ozs7Ozs7OztRQUdUOzs7Ozs4TUFDaUJqQixJOzs7Ozs7QUFDVGEscUIsZ0JBQWNiLEksb0JBQWMsS0FBS04sRzs7dUJBQ2hCb0IsS0FBSyxDQUFDLEtBQUtqQixVQUFMLEdBQWtCZ0IsS0FBbkIsQzs7O0FBQXRCRSx3Qjs7dUJBQ2FBLFFBQVEsQ0FBQ0MsSUFBVCxFOzs7QUFBYkMsb0I7O0FBRU4sb0JBQUlDLElBQUosRUFBMkM7QUFDekNDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWXBCLElBQVo7QUFDRCxpQixDQUVEOzs7a0RBQ09pQixJOzs7Ozs7Ozs7Ozs7Ozs7UUFHVDs7Ozs7eU1BQ1lWLEcsRUFBS0MsRzs7Ozs7O0FBQ1RLLHFCLG9CQUFrQixLQUFLbkIsRyxrQkFBV2EsRyxrQkFBV0MsRzs7dUJBQzVCTSxLQUFLLENBQUMsS0FBS2YsS0FBTCxHQUFhYyxLQUFkLEM7OztBQUF0QkUsd0I7O3VCQUNhQSxRQUFRLENBQUNDLElBQVQsRTs7O0FBQWJDLG9COztBQUVOLG9CQUFJQyxJQUFKLEVBQTJDO0FBQ3pDQyx5QkFBTyxDQUFDQyxHQUFSLENBQVliLEdBQVo7QUFDQVkseUJBQU8sQ0FBQ0MsR0FBUixDQUFZWixHQUFaO0FBQ0QsaUIsQ0FFRDs7O2tEQUNPUyxJOzs7Ozs7Ozs7Ozs7Ozs7UUFHVDs7Ozs7K01BQ2tCVixHLEVBQUtDLEcsRUFBS0MsUTs7Ozs7O0FBQ3BCSSxxQix1QkFBcUJOLEcsY0FBT0MsRyx3QkFBaUJDLFEsa0JBQWdCLEtBQUtkLEk7O3VCQUVqRG1CLEtBQUssQ0FBQyxLQUFLaEIsV0FBTCxHQUFtQmUsS0FBcEIsQzs7O0FBQXRCRSx3Qjs7dUJBQ2FBLFFBQVEsQ0FBQ0MsSUFBVCxFOzs7QUFBYkMsb0I7O0FBRU4sb0JBQUlDLElBQUosRUFBMkM7QUFDekNDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWWIsR0FBWjtBQUNBWSx5QkFBTyxDQUFDQyxHQUFSLENBQVlaLEdBQVo7QUFDQVcseUJBQU8sQ0FBQ0MsR0FBUixDQUFZWCxRQUFaO0FBQ0Q7O2tEQUVNUSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJSXhCLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTRCLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsdURBQWIsRSxDQUVBOztBQUNBLElBQU1uQixPQUFPLEdBQUcsSUFBSVgsZ0RBQUosRUFBaEIsQyxDQUVBOztBQUNBLElBQU0rQixRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFqQjtBQUNBLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBaEI7QUFDQSxJQUFNRyxhQUFhLEdBQUdELE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUIsdUJBQXpCLEVBQWtELENBQWxELENBQXRCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCLEMsQ0FFQTs7QUFDQSxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDZixJQUFELEVBQVU7QUFDekI7QUFDQTtBQUZ5QixNQUdqQmYsUUFIaUIsR0FHbUJlLElBSG5CLENBR2pCZixRQUhpQjtBQUFBLE1BR1BFLE9BSE8sR0FHbUJhLElBSG5CLENBR1BiLE9BSE87QUFBQSxNQUdFTSxRQUhGLEdBR21CTyxJQUhuQixDQUdFUCxRQUhGO0FBQUEsTUFHWUUsRUFIWixHQUdtQkssSUFIbkIsQ0FHWUwsRUFIWjs7QUFLekIsTUFBSU0sSUFBSixFQUEyQztBQUN6Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLFFBQVo7QUFDQWlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVloQixPQUFaO0FBQ0FlLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixRQUFaO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixFQUFaO0FBQ0QsR0Fad0IsQ0FjekI7QUFFQTs7O0FBQ0EsTUFBTXFCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCLFFBQUlDLFFBQVEsR0FBRyxJQUFmO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLFFBQUlGLElBQUksS0FBSyxNQUFULElBQW1CQSxJQUFJLEtBQUssTUFBaEMsRUFBd0M7QUFDdENDLGNBQVEsR0FBR0QsSUFBWDs7QUFDQSxVQUFJaEMsUUFBUSxDQUFDbUMsSUFBYixFQUFtQjtBQUNqQkQsa0JBQVUsR0FBR2xDLFFBQVEsQ0FBQ21DLElBQVQsQ0FBYyxJQUFkLENBQWI7QUFDQUQsa0JBQVUsR0FBR0EsVUFBVSxHQUFHLElBQTFCO0FBQ0QsT0FIRCxNQUdPLElBQUlsQyxRQUFRLENBQUNvQyxJQUFiLEVBQW1CO0FBQ3hCRixrQkFBVSxHQUFHbEMsUUFBUSxDQUFDb0MsSUFBVCxDQUFjLElBQWQsQ0FBYjtBQUNBRixrQkFBVSxHQUFHQSxVQUFVLEdBQUcsSUFBMUI7QUFDRCxPQUhNLE1BR0E7QUFDTEEsa0JBQVUsR0FBR2xDLFFBQVEsQ0FBQ3FDLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0JDLFdBQWpDO0FBQ0Q7QUFDRixLQVhELE1BV087QUFDTEwsY0FBUSxHQUFHLE1BQVg7QUFDQUMsZ0JBQVUsR0FBRyxLQUFiO0FBQ0Q7O0FBRUQsd0JBQWFELFFBQWIsb0JBQStCQyxVQUEvQjtBQUNELEdBcEJELENBakJ5QixDQXVDekI7OztBQUNBLE1BQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBWTtBQUMxQixRQUFJQyxRQUFKOztBQUNBLFFBQUlELE1BQU0sSUFBSSxDQUFWLElBQWVBLE1BQU0sR0FBRyxDQUE1QixFQUErQjtBQUM3QkMsY0FBUSxHQUFHLFVBQVg7QUFDRCxLQUZELE1BRU8sSUFBSUQsTUFBTSxJQUFJLENBQVYsSUFBZUEsTUFBTSxHQUFHLENBQTVCLEVBQStCO0FBQ3BDQyxjQUFRLEdBQUcsTUFBWDtBQUNELEtBRk0sTUFFQSxJQUFJRCxNQUFNLElBQUksQ0FBVixJQUFlQSxNQUFNLEdBQUcsRUFBNUIsRUFBZ0M7QUFDckNDLGNBQVEsR0FBRyxXQUFYO0FBQ0QsS0FGTSxNQUVBLElBQUlELE1BQU0sR0FBRyxFQUFiLEVBQWlCO0FBQ3RCQyxjQUFRLEdBQUcsU0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMQSxjQUFRLEdBQUcsS0FBWDtBQUNEOztBQUVELFdBQU9BLFFBQVA7QUFDRCxHQWZELENBeEN5QixDQXlEekI7OztBQUNBLE1BQU1DLElBQUksR0FBR3ZCLDRDQUFLLENBQUMsSUFBSXdCLElBQUosRUFBRCxDQUFMLENBQWtCQyxNQUFsQixDQUF5QixHQUF6QixDQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHMUIsNENBQUssQ0FDbkIsSUFBSXdCLElBQUosR0FBV0csY0FBWCxDQUEwQixPQUExQixFQUFtQztBQUFFdEMsWUFBUSxFQUFFQSxRQUFRLENBQUN1QztBQUFyQixHQUFuQyxDQURtQixDQUFMLENBRWRILE1BRmMsQ0FFUCxjQUZPLENBQWhCO0FBR0EsTUFBTUksSUFBSSxHQUFHN0IsNENBQUssQ0FDaEIsSUFBSXdCLElBQUosR0FBV0csY0FBWCxDQUEwQixPQUExQixFQUFtQztBQUFFdEMsWUFBUSxFQUFFQSxRQUFRLENBQUN1QztBQUFyQixHQUFuQyxDQURnQixDQUFMLENBRVhILE1BRlcsQ0FFSixXQUZJLENBQWIsQ0E5RHlCLENBa0V6Qjs7QUFDQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWYsQ0FGeUIsQ0FHekI7O0FBQ0FBLFlBQVEsa3JCQUFSLENBSnlCLENBNkJ6Qjs7QUFDQWpDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZ0MsUUFBWjtBQUNBLFdBQU9BLFFBQVA7QUFDRCxHQWhDRCxDQW5FeUIsQ0FxR3pCOzs7QUFDQSxNQUFJQyxZQUFKOztBQUNBLE1BQUtULElBQUksSUFBSSxFQUFSLElBQWNBLElBQUksSUFBSSxFQUF2QixJQUErQkEsSUFBSSxJQUFJLENBQVIsSUFBYUEsSUFBSSxHQUFHLENBQXZELEVBQTJEO0FBQ3pEUyxnQkFBWSxHQUFHLE9BQWY7QUFDRCxHQUZELE1BRU8sSUFBSVQsSUFBSSxJQUFJLENBQVIsSUFBYUEsSUFBSSxJQUFJLENBQXpCLEVBQTRCO0FBQ2pDUyxnQkFBWSxHQUFHLFNBQWY7QUFDRCxHQUZNLE1BRUEsSUFBSVQsSUFBSSxHQUFHLENBQVAsSUFBWUEsSUFBSSxJQUFJLEVBQXhCLEVBQTRCO0FBQ2pDUyxnQkFBWSxHQUFHLEtBQWY7QUFDRCxHQUZNLE1BRUE7QUFDTEEsZ0JBQVksR0FBRyxRQUFmO0FBQ0Q7O0FBRUQsTUFBSW5DLElBQUosRUFBMkM7QUFDekNDLFdBQU8sQ0FBQ0MsR0FBUixXQUFld0IsSUFBZixnQkFBeUJTLFlBQXpCO0FBQ0QsR0FuSHdCLENBcUh6Qjs7O0FBQ0F6QixTQUFPLENBQUMwQixTQUFSLHVHQUdZcEQsUUFBUSxDQUFDcUQsSUFBVCxDQUFjQyxJQUgxQixnREFJWXRELFFBQVEsQ0FBQ3VELElBSnJCLGVBSThCdkQsUUFBUSxDQUFDd0QsR0FBVCxDQUFhQyxPQUozQyw2Q0FLd0JULElBTHhCLGdCQUtpQ0gsT0FMakMsMEVBUVFJLFlBQVksRUFScEIsbURBV09qRCxRQUFRLENBQUNxQyxPQUFULENBQWlCLENBQWpCLEVBQW9CQyxXQVgzQixtT0FrQmF0QyxRQUFRLENBQUMwRCxJQUFULENBQWNDLEtBbEIzQiwwSkF1QmEzRCxRQUFRLENBQUNxRCxJQUFULENBQWNPLFFBdkIzQiw2SUEyQlU3QixhQUFhLENBQUMvQixRQUFRLENBQUNxQyxPQUFULENBQWlCLENBQWpCLEVBQW9CZ0IsSUFBckIsQ0EzQnZCLHVKQWdDYXJELFFBQVEsQ0FBQ3FELElBQVQsQ0FBY1EsUUFoQzNCLDZKQXFDYXRCLE9BQU8sQ0FBQzdCLEVBQUUsQ0FBQ29ELEtBQUosQ0FyQ3BCLDJLQTBDNkJkLElBMUM3QixnQkEwQ3NDN0IsNENBQUssQ0FDeEM0QyxJQURtQyxDQUM5Qi9ELFFBQVEsQ0FBQ3dELEdBQVQsQ0FBYVEsT0FEaUIsRUFFbkNwQixNQUZtQyxDQUU1QixNQUY0QixDQTFDdEMsaUxBaUQ2QkksSUFqRDdCLGdCQWlEc0M3Qiw0Q0FBSyxDQUN4QzRDLElBRG1DLENBQzlCL0QsUUFBUSxDQUFDd0QsR0FBVCxDQUFhUyxNQURpQixFQUVuQ3JCLE1BRm1DLENBRTVCLE1BRjRCLENBakR0QyxrRUF0SHlCLENBK0t6Qjs7QUFDQSxNQUFJbkIsSUFBSSxDQUFDeUMsU0FBTCxDQUFlQyxRQUFmLENBQXdCLFdBQXhCLENBQUosRUFBMEM7QUFDeEMxQyxRQUFJLENBQUN5QyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsV0FBdEI7QUFDRCxHQWxMd0IsQ0FvTHpCOzs7QUFDQTNDLE1BQUksQ0FBQ3lDLFNBQUwsQ0FBZUcsTUFBZixpQkFBK0JsQixZQUEvQixHQXJMeUIsQ0F1THpCOztBQUNBMUIsTUFBSSxDQUNERCxhQURILENBQ2lCLGtCQURqQixFQUVHMEMsU0FGSCxDQUVhRyxNQUZiLFdBRXVCckUsUUFBUSxDQUFDcUMsT0FBVCxDQUFpQixDQUFqQixFQUFvQmdCLElBRjNDO0FBR0QsQ0EzTEQsQyxDQTZMQTtBQUNBOzs7QUFDQS9CLFFBQVEsQ0FBQ2dELGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUNDLENBQUQsRUFBTztBQUN6QztBQUNBQSxHQUFDLENBQUNDLGNBQUYsR0FGeUMsQ0FJekM7O0FBQ0EsTUFBTTFFLElBQUksR0FBR3dCLFFBQVEsQ0FBQ3hCLElBQVQsQ0FBY2dFLEtBQWQsQ0FBb0JXLElBQXBCLEVBQWI7QUFDQW5ELFVBQVEsQ0FBQ29ELEtBQVQsR0FOeUMsQ0FRekM7O0FBQ0F4RSxTQUFPLENBQ0p5RSxVQURILENBQ2M3RSxJQURkLEVBRUc4RSxJQUZILENBRVEsVUFBQzdELElBQUQ7QUFBQSxXQUFVZSxRQUFRLENBQUNmLElBQUQsQ0FBbEI7QUFBQSxHQUZSLFdBR1MsVUFBQzhELEdBQUQ7QUFBQSxXQUFTNUQsT0FBTyxDQUFDNkQsS0FBUixDQUFjRCxHQUFkLENBQVQ7QUFBQSxHQUhULEVBVHlDLENBY3pDOztBQUNBRSxjQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJsRixJQUE3QjtBQUNELENBaEJELEUsQ0FrQkE7O0FBQ0EsSUFBSWlGLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2hDL0UsU0FBTyxDQUNKeUUsVUFESCxDQUNjSSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsTUFBckIsQ0FEZCxFQUVHTCxJQUZILENBRVEsVUFBQzdELElBQUQ7QUFBQSxXQUFVZSxRQUFRLENBQUNmLElBQUQsQ0FBbEI7QUFBQSxHQUZSLFdBR1MsVUFBQzhELEdBQUQ7QUFBQSxXQUFTNUQsT0FBTyxDQUFDNkQsS0FBUixDQUFjRCxHQUFkLENBQVQ7QUFBQSxHQUhUO0FBSUQsQyxDQUVEOzs7QUFDQWhELFNBQVMsQ0FBQ3lDLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDeEMsTUFBTXhFLElBQUksR0FBR3lCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMwRCxTQUF4RDs7QUFDQSxNQUFJbEUsSUFBSixFQUEyQztBQUN6Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBV3BCLElBQXZCO0FBQ0Q7O0FBQ0RxRixhQUFXLENBQUNILE9BQVosQ0FBb0IsUUFBcEIsRUFBOEJsRixJQUE5QjtBQUNELENBTkQsRSIsImZpbGUiOiJuZXdjaXR5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcmNhc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBBZGQgQVBJIGtleSBmcm9tIE9wZW5XZWF0aGVyLlxuICAgIHRoaXMua2V5ID0gJzMxMmZjNzMzZDMwNzBiYzI3ZmVmMzZiOGE1OGZhMDMwJ1xuICAgIC8vIEFkZCBBUEkga2V5IGZvcm0gR29vZ2xlIFRpbWVab25lXG4gICAgdGhpcy5nS2V5ID0gJ0FJemFTeURhNnFGNDNRRkRPeEp6aXBLS0VNcWR4Mnh0czBCMTVBOCdcbiAgICAvLyBHZXQgY2l0eSB3ZWF0aGVyXG4gICAgdGhpcy5jaXR5VVJJID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyJ1xuICAgIC8vIEdldCBjaXR5IGZvcmNhc3RcbiAgICB0aGlzLmZvcmNhc3RVUkkgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0J1xuICAgIC8vIEdldCBUaW1lWm9uZVxuICAgIHRoaXMudGltZVpvbmVVUkkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3RpbWV6b25lL2pzb24nXG4gICAgLy8gVVZcbiAgICB0aGlzLnV2VVJJID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS91dmknXG4gIH1cbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSB3ZWF0aGVyIGZvciB0aGUgbG9jYXRpb24uXG4gIC8vIFVzZXMgZXhwb3J0ZWQgZnVuY3Rpb25zIGZyb20gZm9jYXN0LmpzXG4gIGFzeW5jIHVwZGF0ZUNpdHkoY2l0eSkge1xuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgdGhpcy5nZXRDaXR5KGNpdHkpXG4gICAgY29uc3QgZm9yY2FzdCA9IGF3YWl0IHRoaXMuZ2V0Rm9yY2FzdChjaXR5KVxuICAgIGNvbnN0IHRpbWVab25lID0gYXdhaXQgdGhpcy5nZXRUaW1lWm9uZShcbiAgICAgIGNpdHlEYXRhLmNvb3JkLmxhdCxcbiAgICAgIGNpdHlEYXRhLmNvb3JkLmxvbixcbiAgICAgIGNpdHlEYXRhLnRpbWV6b25lXG4gICAgKVxuICAgIGNvbnN0IHV2ID0gYXdhaXQgdGhpcy5nZXRVdihjaXR5RGF0YS5jb29yZC5sYXQsIGNpdHlEYXRhLmNvb3JkLmxvbilcbiAgICByZXR1cm4ge1xuICAgICAgY2l0eURhdGEsXG4gICAgICBmb3JjYXN0LFxuICAgICAgdGltZVpvbmUsXG4gICAgICB1dixcbiAgICB9XG4gIH1cbiAgLy8gR2V0IGNpdHkgd2VhdGhlclxuICBhc3luYyBnZXRDaXR5KGNpdHkpIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/cT0ke2NpdHl9JmFwcGlkPSR7dGhpcy5rZXl9JnVuaXRzPW1ldHJpY2BcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuY2l0eVVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgIH1cblxuICAgIC8vIHJldHVybiBkYXRhWzBdIFdpdGggQWNjdVdlYXRoZXJcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLy8gR2V0IGNpdHkgZm9yY2FzdFxuICBhc3luYyBnZXRGb3JjYXN0KGNpdHkpIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/cT0ke2NpdHl9JmFwcGlkPSR7dGhpcy5rZXl9JnVuaXRzPW1ldHJpY2BcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuZm9yY2FzdFVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgIH1cblxuICAgIC8vIHJldHVybiBkYXRhWzBdIFdpdGggQWNjdVdlYXRoZXJcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLy8gR2V0IGNpdHkgVVZcbiAgYXN5bmMgZ2V0VXYobGF0LCBsb24pIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/YXBwaWQ9JHt0aGlzLmtleX0mbGF0PSR7bGF0fSZsb249JHtsb259YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51dlVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhsYXQpXG4gICAgICBjb25zb2xlLmxvZyhsb24pXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGRhdGFbMF0gV2l0aCBBY2N1V2VhdGhlclxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvLyBHZXQgVGltZVpvbmVcbiAgYXN5bmMgZ2V0VGltZVpvbmUobGF0LCBsb24sIHRpbWV6b25lKSB7XG4gICAgY29uc3QgcXVlcnkgPSBgP2xvY2F0aW9uPSR7bGF0fSwke2xvbn0mdGltZXN0YW1wPSR7dGltZXpvbmV9JmtleT0ke3RoaXMuZ0tleX1gXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudGltZVpvbmVVUkkgKyBxdWVyeSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2cobGF0KVxuICAgICAgY29uc29sZS5sb2cobG9uKVxuICAgICAgY29uc29sZS5sb2codGltZXpvbmUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JjYXN0XG4iLCIvLyBJbXBvcnQgd2VhdGhlciBhcGlcbmltcG9ydCBGb3JjYXN0IGZyb20gJy4vZm9yY2FzdCdcbi8vIEltcG9ydCBkYXlKUyBmb3IgZGF0ZSwgdGltZSBmb3JtYXR0aW5nXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgdXRjIGZyb20gJ2RheWpzL3BsdWdpbi91dGMnXG5kYXlqcy5leHRlbmQodXRjKVxuXG4vLyBDYWxsIG5ldyBmb3JjYXN0IGNsYXNzXG5jb25zdCBmb3JjYXN0ID0gbmV3IEZvcmNhc3QoKVxuXG4vLyBHZXR0aW5nIHdlYXRoZXJcbmNvbnN0IGNpdHlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG5jb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb250ZW50JylcbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19oZWFkZXIgLmNvbHVtbicpWzFdXG5jb25zdCBzYXZlZENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc2F2ZSBidXR0b24nKVxuXG4vLyBPdXRwdXQgYWxsIGRhdGEgdG8gRE9NLlxuY29uc3QgdXBkYXRlVUkgPSAoZGF0YSkgPT4ge1xuICAvLyBkZXN0cnVjdHVyZSBwcm9wZXJ0aWVzXG4gIC8vICAgY29uc3QgeyBjaXR5RGF0YSwgd2VhdGhlciB9ID0gZGF0YVxuICBjb25zdCB7IGNpdHlEYXRhLCBmb3JjYXN0LCB0aW1lWm9uZSwgdXYgfSA9IGRhdGFcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50JylcbiAgICBjb25zb2xlLmxvZyhjaXR5RGF0YSlcbiAgICBjb25zb2xlLmxvZygnZm9yY2FzdCcpXG4gICAgY29uc29sZS5sb2coZm9yY2FzdClcbiAgICBjb25zb2xlLmxvZyh0aW1lWm9uZSlcbiAgICBjb25zb2xlLmxvZyh1dilcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0ZW1wbGF0ZVxuXG4gIC8vLyBTZXQgdGhlIHR5cGUgb2YgcHJlY2lwaXRhdGlvbiBleHBlY3RlZC5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IHJhaW5UeXBlID0gbnVsbFxuICAgIGxldCByYWluQW1vdW50ID0gbnVsbFxuICAgIGlmICh0eXBlID09PSAnUmFpbicgfHwgdHlwZSA9PT0gJ1Nub3cnKSB7XG4gICAgICByYWluVHlwZSA9IHR5cGVcbiAgICAgIGlmIChjaXR5RGF0YS5yYWluKSB7XG4gICAgICAgIHJhaW5BbW91bnQgPSBjaXR5RGF0YS5yYWluWycxaCddXG4gICAgICAgIHJhaW5BbW91bnQgPSByYWluQW1vdW50ICsgJ21tJ1xuICAgICAgfSBlbHNlIGlmIChjaXR5RGF0YS5zbm93KSB7XG4gICAgICAgIHJhaW5BbW91bnQgPSBjaXR5RGF0YS5zbm93WycxaCddXG4gICAgICAgIHJhaW5BbW91bnQgPSByYWluQW1vdW50ICsgJ21tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFpbkFtb3VudCA9IGNpdHlEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmFpblR5cGUgPSAnUmFpbidcbiAgICAgIHJhaW5BbW91bnQgPSAnMG1tJ1xuICAgIH1cblxuICAgIHJldHVybiBgPHA+JHtyYWluVHlwZX08L3A+PHA+JHtyYWluQW1vdW50fTwvcD5gXG4gIH1cblxuICAvLy8gU2V0IFVWIGluZGV4XG4gIGNvbnN0IHV2SW5kZXggPSAocmF0aW5nKSA9PiB7XG4gICAgbGV0IHV2UmF0aW5nXG4gICAgaWYgKHJhdGluZyA+PSAzICYmIHJhdGluZyA8IDYpIHtcbiAgICAgIHV2UmF0aW5nID0gJ01vZGVyYXRlJ1xuICAgIH0gZWxzZSBpZiAocmF0aW5nID49IDYgJiYgcmF0aW5nIDwgOCkge1xuICAgICAgdXZSYXRpbmcgPSAnSGlnaCdcbiAgICB9IGVsc2UgaWYgKHJhdGluZyA+PSA4ICYmIHJhdGluZyA8IDExKSB7XG4gICAgICB1dlJhdGluZyA9ICdWZXJ5IEhpZ2gnXG4gICAgfSBlbHNlIGlmIChyYXRpbmcgPiAxMCkge1xuICAgICAgdXZSYXRpbmcgPSAnRXh0cmVtZSdcbiAgICB9IGVsc2Uge1xuICAgICAgdXZSYXRpbmcgPSAnTG93J1xuICAgIH1cblxuICAgIHJldHVybiB1dlJhdGluZ1xuICB9XG5cbiAgLy8vIEdldCB0aGUgZGF0ZSBhbmQgdGltZSBvZiB0aGUgZm9yY2FzdC5cbiAgY29uc3QgdGltZSA9IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdCgnSCcpXG4gIGNvbnN0IGRheVRpbWUgPSBkYXlqcyhcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VSycsIHsgdGltZVpvbmU6IHRpbWVab25lLnRpbWVab25lSWQgfSlcbiAgKS5mb3JtYXQoJ2RkZGQgLSBoOm1tQScpXG4gIGNvbnN0IGRhdGUgPSBkYXlqcyhcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VSycsIHsgdGltZVpvbmU6IHRpbWVab25lLnRpbWVab25lSWQgfSlcbiAgKS5mb3JtYXQoJ1lZWVktTU0tRCcpXG5cbiAgLy8vIEdlbmVyYXRpbmcgNSBkYXkgZm9yY2FzdFxuICBjb25zdCBkYWlseUZvcmNhc3QgPSAoKSA9PiB7XG4gICAgLy8gbGV0IGZvcmNhc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgZm9yY2FzdHMgPSAnJ1xuICAgIC8vIGZvcmNhc3RzLnRleHRDb250ZW50ID0gJ2hlbGxvIHdvcmxkJ1xuICAgIGZvcmNhc3RzICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JjYXN0c19fZGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICA8aDM+RGF5PC9oMz5cbiAgICAgICAgICAgIDxwPldlYXRoZXI8L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHA+V2luZDwvcD5cbiAgICAgICAgICAgIDxwPjJtcGg8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHA+SGlnaDwvcD5cbiAgICAgICAgICAgIDxwPjMwPHN1cD4mZGVnOzwvc3VwPjwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8cD5SYWluPC9wPlxuICAgICAgICAgICAgPHA+MCU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy02XCI+XG4gICAgICAgICAgICA8aDM+VGVtcDxzdXA+JmRlZzs8L3N1cD48L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgLy8gaWYgKClcbiAgICBjb25zb2xlLmxvZyhmb3JjYXN0cylcbiAgICByZXR1cm4gZm9yY2FzdHNcbiAgfVxuXG4gIC8vLyBTZXQgY2xhc3MgZm9yIHRpbWUgb2YgZGF5LlxuICBsZXQgY2l0eURheU5pZ2h0XG4gIGlmICgodGltZSA+PSAyMSAmJiB0aW1lIDw9IDIzKSB8fCAodGltZSA+PSAwICYmIHRpbWUgPCA1KSkge1xuICAgIGNpdHlEYXlOaWdodCA9ICduaWdodCdcbiAgfSBlbHNlIGlmICh0aW1lID49IDUgJiYgdGltZSA8PSA3KSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ3N1bnJpc2UnXG4gIH0gZWxzZSBpZiAodGltZSA+IDcgJiYgdGltZSA8PSAxOCkge1xuICAgIGNpdHlEYXlOaWdodCA9ICdkYXknXG4gIH0gZWxzZSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ3N1bnNldCdcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGltZX0gPSAke2NpdHlEYXlOaWdodH1gKVxuICB9XG5cbiAgLy8vIEdlbmVyYXRlIEhUTUwuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkX19oZWFkZXIgLmNvbHVtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgPGgyPiR7Y2l0eURhdGEubWFpbi50ZW1wfTxzdXA+JmRlZzs8L3N1cD48L2gyPlxuICAgICAgICA8aDM+JHtjaXR5RGF0YS5uYW1lfSwgJHtjaXR5RGF0YS5zeXMuY291bnRyeX08L2gzPlxuICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7ZGF0ZX1cIj4ke2RheVRpbWV9PC90aW1lPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICR7ZGFpbHlGb3JjYXN0KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8cD4ke2NpdHlEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgIDxocj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiY2FyZF9fZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBjYXJkX19kZXRhaWxzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5XaW5kPC9wPlxuICAgICAgICAgIDxwPiR7Y2l0eURhdGEud2luZC5zcGVlZH1tcGg8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+SGlnaDwvcD5cbiAgICAgICAgICA8cD4ke2NpdHlEYXRhLm1haW4udGVtcF9tYXh9PHN1cD4mZGVnOzwvc3VwPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAke3ByZWNpcGl0YXRpb24oY2l0eURhdGEud2VhdGhlclswXS5tYWluKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5IdW1pZGl0eTwvcD5cbiAgICAgICAgICA8cD4ke2NpdHlEYXRhLm1haW4uaHVtaWRpdHl9JnBlcmNudDs8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+VVY8L3A+XG4gICAgICAgICAgPHA+JHt1dkluZGV4KHV2LnZhbHVlKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+U3VucmlzZTwvcD5cbiAgICAgICAgICA8cD48dGltZSBkYXRldGltZT1cIiR7ZGF0ZX1cIj4ke2RheWpzXG4gICAgLnVuaXgoY2l0eURhdGEuc3lzLnN1bnJpc2UpXG4gICAgLmZvcm1hdCgnaDptQScpfTwvdGltZT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+U3Vuc2V0PC9wPlxuICAgICAgICAgIDxwPjx0aW1lIGRhdGV0aW1lPVwiJHtkYXRlfVwiPiR7ZGF5anNcbiAgICAudW5peChjaXR5RGF0YS5zeXMuc3Vuc2V0KVxuICAgIC5mb3JtYXQoJ2g6bUEnKX08L3RpbWU+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICBgXG5cbiAgLy8gU2hvdyB3ZWF0aGVyIGNhcmQgaWYgY2FyZCBkb2Vzbid0IGhhdmUgaGlkZGVuIGNsYXNzXG4gIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuJykpIHtcbiAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gIH1cblxuICAvLyBBZGQgdGltZSBvZiBkYXkgY2xhc3MgdG8gY2FyZC5cbiAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKGBjYXJkLS0ke2NpdHlEYXlOaWdodH1gKVxuXG4gIC8vIEFkZCBjbGFzcyBmb3Igd2VhdGhlciBpbWFnZS5cbiAgY2FyZFxuICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2UgaW1nJylcbiAgICAuY2xhc3NMaXN0LnRvZ2dsZShgJHtjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW59YClcbn1cblxuLy8gT24gZm9ybSBzdWJtaXQgdXBkYXRlIHRoZSBIVE1MIGNvbnRlbnQgd2l0aCB0aGUgQVBJIGRhdGFcbi8vIFNhdmUgZW50ZXJlZCBsb2NhdGlvbiB0byBsb2NhbFN0b3JhZ2VcbmNpdHlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgc3VibWl0LlxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyBnZXQgY2l0eSB2YWx1ZS5cbiAgY29uc3QgY2l0eSA9IGNpdHlGb3JtLmNpdHkudmFsdWUudHJpbSgpXG4gIGNpdHlGb3JtLnJlc2V0KClcblxuICAvLyB1cGRhdGUgdWkgd2l0aCBjaXR5XG4gIGZvcmNhc3RcbiAgICAudXBkYXRlQ2l0eShjaXR5KVxuICAgIC50aGVuKChkYXRhKSA9PiB1cGRhdGVVSShkYXRhKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuXG4gIC8vIHNldCBsb2NhbFN0b3JhZ2Ugd2l0aCBsb2NhbEZvcmFnZS5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBjaXR5KVxufSlcblxuLy8gR2V0IGNpdHkgZnJvbSBsb2NhbFN0b3JhZ2VcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eScpKSB7XG4gIGZvcmNhc3RcbiAgICAudXBkYXRlQ2l0eShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eScpKVxuICAgIC50aGVuKChkYXRhKSA9PiB1cGRhdGVVSShkYXRhKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxufVxuXG4vLyBJZiBjaXR5IGlzIHNhdmVkIGFkZCBsb2NhdGlvbiB0byBsb2NhbEZvcmFnZVxuc2F2ZWRDaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2hlYWRlciBoMycpLmlubmVyVGV4dFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdTYXZlZCAnICsgY2l0eSlcbiAgfVxuICBsb2NhbEZvcmFnZS5zZXRJdGVtKCdjaXRpZXMnLCBjaXR5KVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=