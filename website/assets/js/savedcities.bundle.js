(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["savedcities"],{

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

/***/ "fgBT":
/*!***********************************************!*\
  !*** ./website/src/js/modules/savedcities.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(localForage) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forcast */ "eurM");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/plugin/utc */ "Ds8A");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "E4hX");


// Import weather api
 // Import dayJS for date, time formatting



dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_4___default.a);
 // Call new forcast class

var forcast = new _forcast__WEBPACK_IMPORTED_MODULE_2__["default"](); // Getting weather

var card = document.querySelector('.card');
var content = document.querySelector('.columns'); // Get any cities saved to localForage

var savedCities = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var savedCity;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return localForage.getItem('cities');

          case 2:
            savedCity = _context.sent;

            if (!(savedCity === null)) {
              _context.next = 5;
              break;
            }

            throw new Error("Can't get cities or no cities saved!");

          case 5:
            return _context.abrupt("return", savedCity);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function savedCities() {
    return _ref.apply(this, arguments);
  };
}(); // Output all data to DOM.


var updateUI = function updateUI(data) {
  // destructure properties
  //   const { cityData, weather } = data
  var cityData = data.cityData,
      forcast = data.forcast,
      timeZone = data.timeZone,
      uv = data.uv;

  if (true) {
    console.log(cityData);
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


  var time = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(new Date()).format('H');
  var dayTime = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(new Date().toLocaleString('en-UK', {
    timeZone: timeZone.timeZoneId
  })).format('dddd - h:mmA');
  var date = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(new Date().toLocaleString('en-UK', {
    timeZone: timeZone.timeZoneId
  })).format('YYYY-MM-D'); /// Generating 5 day forcast
  // todo Check with current time of search and match the forcast for the next five days at the same name.

  var dailyForcast = function dailyForcast() {
    var forcasts = '';
    forcasts += "\n        <div class=\"forcasts__day\">\n          <div class=\"columns\">\n            <div class=\"column is-3\">\n              <h3>Day</h3>\n              <p>Weather</p>\n              <img src=\"\" alt=\"\">\n              <p>Wind</p>\n              <p>2mph</p>\n            </div>\n            <div class=\"column is-3\">\n              <img src=\"\" alt=\"\">\n              <p>High</p>\n              <p>30<sup>&deg;</sup></p>\n              <img src=\"\" alt=\"\">\n              <p>Rain</p>\n              <p>0%</p>\n            </div>\n            <div class=\"column is-6\">\n              <h3>Temp<sup>&deg;</sup></h3>\n              <img src=\"\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      ";
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


  content.innerHTML += "\n    <div class=\"column is-4 cards__block\">\n        <div class=\"card card--city\">\n            <header class=\"card__header .columns\">\n            <div class=\"column\">\n                <h2>".concat(cityData.main.temp, "<sup>&deg;</sup></h2>\n                <h3>").concat(cityData.name, ", ").concat(cityData.sys.country, "</h3>\n                <time datetime=\"").concat(date, "\">").concat(dayTime, "</time>\n            </div>\n            <div class=\"column\">").concat(dailyForcast(), "</div>\n            </header>\n            <p>").concat(cityData.weather[0].description, "</p>\n            <hr>\n            <footer class=\"card__footer\">\n            <div class=\"columns card__details\">\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Wind</p>\n                <p>").concat(cityData.wind.speed, "mph</p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>High</p>\n                <p>").concat(cityData.main.temp_max, "<sup>&deg;</sup></p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                ").concat(precipitation(cityData.weather[0].main), "\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Humidity</p>\n                <p>").concat(cityData.main.humidity, "&percnt;</p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>UV</p>\n                <p>").concat(uvIndex(uv.value), "</p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Sunrise</p>\n                <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.unix(cityData.sys.sunrise).format('h:mA'), "</time></p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Sunset</p>\n                <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.unix(cityData.sys.sunset).format('h:mA'), "</time></p>\n                </div>\n            </div>\n            </footer>\n        </div>\n    </div>\n  "); // Add time of day class to card.

  card.classList.add("card--".concat(cityDayNight)); // Add class for weather image.
  // const cardImg = document.querySelector('.card__image img')
  // if (typeof cardImg !== 'undefined' || cardImg !== null) {
  //   card
  //     .querySelector('.card__image img')
  //     .classList.add(`${cityData.weather[0].main}`)
  // }
};

Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["ready"])(function () {
  /* Do things after DOM has fully loaded */
  if (true) {
    console.log('DOM loaded!');
  }

  savedCities().then(function (cities) {
    // update ui with city
    cities.forEach(function (city) {
      forcast.updateCity(city.city).then(function (data) {
        if (true) {
          console.log(data);
        }

        updateUI(data);
      })["catch"](function (err) {
        return console.error(err);
      });
    });
  })["catch"](function (err) {
    return console.error(err.message);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! localforage */ "oAJy")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2ZvcmNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy9zYXZlZGNpdGllcy5qcyJdLCJuYW1lcyI6WyJGb3JjYXN0Iiwia2V5IiwiZ0tleSIsImNpdHlVUkkiLCJmb3JjYXN0VVJJIiwidGltZVpvbmVVUkkiLCJ1dlVSSSIsImNpdHkiLCJnZXRDaXR5IiwiY2l0eURhdGEiLCJnZXRGb3JjYXN0IiwiZm9yY2FzdCIsImdldFRpbWVab25lIiwiY29vcmQiLCJsYXQiLCJsb24iLCJ0aW1lem9uZSIsInRpbWVab25lIiwiZ2V0VXYiLCJ1diIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJkYXlqcyIsImV4dGVuZCIsInV0YyIsImNhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50Iiwic2F2ZWRDaXRpZXMiLCJsb2NhbEZvcmFnZSIsImdldEl0ZW0iLCJzYXZlZENpdHkiLCJFcnJvciIsInVwZGF0ZVVJIiwicHJlY2lwaXRhdGlvbiIsInR5cGUiLCJyYWluVHlwZSIsInJhaW5BbW91bnQiLCJyYWluIiwic25vdyIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsInV2SW5kZXgiLCJyYXRpbmciLCJ1dlJhdGluZyIsInRpbWUiLCJEYXRlIiwiZm9ybWF0IiwiZGF5VGltZSIsInRvTG9jYWxlU3RyaW5nIiwidGltZVpvbmVJZCIsImRhdGUiLCJkYWlseUZvcmNhc3QiLCJmb3JjYXN0cyIsImNpdHlEYXlOaWdodCIsImlubmVySFRNTCIsIm1haW4iLCJ0ZW1wIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJ3aW5kIiwic3BlZWQiLCJ0ZW1wX21heCIsImh1bWlkaXR5IiwidmFsdWUiLCJ1bml4Iiwic3VucmlzZSIsInN1bnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlYWR5IiwidGhlbiIsImNpdGllcyIsImZvckVhY2giLCJ1cGRhdGVDaXR5IiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLQyxHQUFMLEdBQVcsa0NBQVgsQ0FGWSxDQUdaOztBQUNBLFNBQUtDLElBQUwsR0FBWSx5Q0FBWixDQUpZLENBS1o7O0FBQ0EsU0FBS0MsT0FBTCxHQUFlLGlEQUFmLENBTlksQ0FPWjs7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLGtEQUFsQixDQVJZLENBU1o7O0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixvREFBbkIsQ0FWWSxDQVdaOztBQUNBLFNBQUtDLEtBQUwsR0FBYSw2Q0FBYjtBQUNELEcsQ0FDRDtBQUNBOzs7Ozs7Nk1BQ2lCQyxJOzs7Ozs7O3VCQUNRLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDOzs7QUFBakJFLHdCOzt1QkFDZ0IsS0FBS0MsVUFBTCxDQUFnQkgsSUFBaEIsQzs7O0FBQWhCSSx1Qjs7dUJBQ2lCLEtBQUtDLFdBQUwsQ0FDckJILFFBQVEsQ0FBQ0ksS0FBVCxDQUFlQyxHQURNLEVBRXJCTCxRQUFRLENBQUNJLEtBQVQsQ0FBZUUsR0FGTSxFQUdyQk4sUUFBUSxDQUFDTyxRQUhZLEM7OztBQUFqQkMsd0I7O3VCQUtXLEtBQUtDLEtBQUwsQ0FBV1QsUUFBUSxDQUFDSSxLQUFULENBQWVDLEdBQTFCLEVBQStCTCxRQUFRLENBQUNJLEtBQVQsQ0FBZUUsR0FBOUMsQzs7O0FBQVhJLGtCO2lEQUNDO0FBQ0xWLDBCQUFRLEVBQVJBLFFBREs7QUFFTEUseUJBQU8sRUFBUEEsT0FGSztBQUdMTSwwQkFBUSxFQUFSQSxRQUhLO0FBSUxFLG9CQUFFLEVBQUZBO0FBSkssaUI7Ozs7Ozs7Ozs7Ozs7OztRQU9UOzs7OzsyTUFDY1osSTs7Ozs7O0FBQ05hLHFCLGdCQUFjYixJLG9CQUFjLEtBQUtOLEc7O3VCQUNoQm9CLEtBQUssQ0FBQyxLQUFLbEIsT0FBTCxHQUFlaUIsS0FBaEIsQzs7O0FBQXRCRSx3Qjs7dUJBQ2FBLFFBQVEsQ0FBQ0MsSUFBVCxFOzs7QUFBYkMsb0I7O0FBRU4sb0JBQUlDLElBQUosRUFBMkM7QUFDekNDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWXBCLElBQVo7QUFDRCxpQixDQUVEOzs7a0RBQ09pQixJOzs7Ozs7Ozs7Ozs7Ozs7UUFHVDs7Ozs7OE1BQ2lCakIsSTs7Ozs7O0FBQ1RhLHFCLGdCQUFjYixJLG9CQUFjLEtBQUtOLEc7O3VCQUNoQm9CLEtBQUssQ0FBQyxLQUFLakIsVUFBTCxHQUFrQmdCLEtBQW5CLEM7OztBQUF0QkUsd0I7O3VCQUNhQSxRQUFRLENBQUNDLElBQVQsRTs7O0FBQWJDLG9COztBQUVOLG9CQUFJQyxJQUFKLEVBQTJDO0FBQ3pDQyx5QkFBTyxDQUFDQyxHQUFSLENBQVlwQixJQUFaO0FBQ0QsaUIsQ0FFRDs7O2tEQUNPaUIsSTs7Ozs7Ozs7Ozs7Ozs7O1FBR1Q7Ozs7O3lNQUNZVixHLEVBQUtDLEc7Ozs7OztBQUNUSyxxQixvQkFBa0IsS0FBS25CLEcsa0JBQVdhLEcsa0JBQVdDLEc7O3VCQUM1Qk0sS0FBSyxDQUFDLEtBQUtmLEtBQUwsR0FBYWMsS0FBZCxDOzs7QUFBdEJFLHdCOzt1QkFDYUEsUUFBUSxDQUFDQyxJQUFULEU7OztBQUFiQyxvQjs7QUFFTixvQkFBSUMsSUFBSixFQUEyQztBQUN6Q0MseUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixHQUFaO0FBQ0FZLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVosR0FBWjtBQUNELGlCLENBRUQ7OztrREFDT1MsSTs7Ozs7Ozs7Ozs7Ozs7O1FBR1Q7Ozs7OytNQUNrQlYsRyxFQUFLQyxHLEVBQUtDLFE7Ozs7OztBQUNwQkkscUIsdUJBQXFCTixHLGNBQU9DLEcsd0JBQWlCQyxRLGtCQUFnQixLQUFLZCxJOzt1QkFFakRtQixLQUFLLENBQUMsS0FBS2hCLFdBQUwsR0FBbUJlLEtBQXBCLEM7OztBQUF0QkUsd0I7O3VCQUNhQSxRQUFRLENBQUNDLElBQVQsRTs7O0FBQWJDLG9COztBQUVOLG9CQUFJQyxJQUFKLEVBQTJDO0FBQ3pDQyx5QkFBTyxDQUFDQyxHQUFSLENBQVliLEdBQVo7QUFDQVkseUJBQU8sQ0FBQ0MsR0FBUixDQUFZWixHQUFaO0FBQ0FXLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVgsUUFBWjtBQUNEOztrREFFTVEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUl4QixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBNEIsNENBQUssQ0FBQ0MsTUFBTixDQUFhQyx1REFBYjtDQUdBOztBQUNBLElBQU1uQixPQUFPLEdBQUcsSUFBSVgsZ0RBQUosRUFBaEIsQyxDQUVBOztBQUNBLElBQU0rQixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEIsQyxDQUVBOztBQUNBLElBQU1FLFdBQVc7QUFBQSxpTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNNQyxXQUFXLENBQUNDLE9BQVosQ0FBb0IsUUFBcEIsQ0FETjs7QUFBQTtBQUNaQyxxQkFEWTs7QUFBQSxrQkFJZEEsU0FBUyxLQUFLLElBSkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBS1YsSUFBSUMsS0FBSixDQUFVLHNDQUFWLENBTFU7O0FBQUE7QUFBQSw2Q0FRWEQsU0FSVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYSCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCLEMsQ0FXQTs7O0FBQ0EsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2hCLElBQUQsRUFBVTtBQUN6QjtBQUNBO0FBRnlCLE1BR2pCZixRQUhpQixHQUdtQmUsSUFIbkIsQ0FHakJmLFFBSGlCO0FBQUEsTUFHUEUsT0FITyxHQUdtQmEsSUFIbkIsQ0FHUGIsT0FITztBQUFBLE1BR0VNLFFBSEYsR0FHbUJPLElBSG5CLENBR0VQLFFBSEY7QUFBQSxNQUdZRSxFQUhaLEdBR21CSyxJQUhuQixDQUdZTCxFQUhaOztBQUt6QixNQUFJTSxJQUFKLEVBQTJDO0FBQ3pDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLFFBQVo7QUFDQWlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsT0FBWjtBQUNBZSxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBWjtBQUNBUyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsRUFBWjtBQUNELEdBVndCLENBWXpCO0FBRUE7OztBQUNBLE1BQU1zQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUM5QixRQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxRQUFJRixJQUFJLEtBQUssTUFBVCxJQUFtQkEsSUFBSSxLQUFLLE1BQWhDLEVBQXdDO0FBQ3RDQyxjQUFRLEdBQUdELElBQVg7O0FBQ0EsVUFBSWpDLFFBQVEsQ0FBQ29DLElBQWIsRUFBbUI7QUFDakJELGtCQUFVLEdBQUduQyxRQUFRLENBQUNvQyxJQUFULENBQWMsSUFBZCxDQUFiO0FBQ0FELGtCQUFVLEdBQUdBLFVBQVUsR0FBRyxJQUExQjtBQUNELE9BSEQsTUFHTyxJQUFJbkMsUUFBUSxDQUFDcUMsSUFBYixFQUFtQjtBQUN4QkYsa0JBQVUsR0FBR25DLFFBQVEsQ0FBQ3FDLElBQVQsQ0FBYyxJQUFkLENBQWI7QUFDQUYsa0JBQVUsR0FBR0EsVUFBVSxHQUFHLElBQTFCO0FBQ0QsT0FITSxNQUdBO0FBQ0xBLGtCQUFVLEdBQUduQyxRQUFRLENBQUNzQyxPQUFULENBQWlCLENBQWpCLEVBQW9CQyxXQUFqQztBQUNEO0FBQ0YsS0FYRCxNQVdPO0FBQ0xMLGNBQVEsR0FBRyxNQUFYO0FBQ0FDLGdCQUFVLEdBQUcsS0FBYjtBQUNEOztBQUVELHdCQUFhRCxRQUFiLG9CQUErQkMsVUFBL0I7QUFDRCxHQXBCRCxDQWZ5QixDQXFDekI7OztBQUNBLE1BQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBWTtBQUMxQixRQUFJQyxRQUFKOztBQUNBLFFBQUlELE1BQU0sSUFBSSxDQUFWLElBQWVBLE1BQU0sR0FBRyxDQUE1QixFQUErQjtBQUM3QkMsY0FBUSxHQUFHLFVBQVg7QUFDRCxLQUZELE1BRU8sSUFBSUQsTUFBTSxJQUFJLENBQVYsSUFBZUEsTUFBTSxHQUFHLENBQTVCLEVBQStCO0FBQ3BDQyxjQUFRLEdBQUcsTUFBWDtBQUNELEtBRk0sTUFFQSxJQUFJRCxNQUFNLElBQUksQ0FBVixJQUFlQSxNQUFNLEdBQUcsRUFBNUIsRUFBZ0M7QUFDckNDLGNBQVEsR0FBRyxXQUFYO0FBQ0QsS0FGTSxNQUVBLElBQUlELE1BQU0sR0FBRyxFQUFiLEVBQWlCO0FBQ3RCQyxjQUFRLEdBQUcsU0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMQSxjQUFRLEdBQUcsS0FBWDtBQUNEOztBQUVELFdBQU9BLFFBQVA7QUFDRCxHQWZELENBdEN5QixDQXVEekI7OztBQUNBLE1BQU1DLElBQUksR0FBR3hCLDRDQUFLLENBQUMsSUFBSXlCLElBQUosRUFBRCxDQUFMLENBQWtCQyxNQUFsQixDQUF5QixHQUF6QixDQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHM0IsNENBQUssQ0FDbkIsSUFBSXlCLElBQUosR0FBV0csY0FBWCxDQUEwQixPQUExQixFQUFtQztBQUFFdkMsWUFBUSxFQUFFQSxRQUFRLENBQUN3QztBQUFyQixHQUFuQyxDQURtQixDQUFMLENBRWRILE1BRmMsQ0FFUCxjQUZPLENBQWhCO0FBR0EsTUFBTUksSUFBSSxHQUFHOUIsNENBQUssQ0FDaEIsSUFBSXlCLElBQUosR0FBV0csY0FBWCxDQUEwQixPQUExQixFQUFtQztBQUFFdkMsWUFBUSxFQUFFQSxRQUFRLENBQUN3QztBQUFyQixHQUFuQyxDQURnQixDQUFMLENBRVhILE1BRlcsQ0FFSixXQUZJLENBQWIsQ0E1RHlCLENBZ0V6QjtBQUNBOztBQUNBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUEsWUFBUSxrdUJBQVI7QUF5QkFsQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWlDLFFBQVo7QUFDQSxXQUFPQSxRQUFQO0FBQ0QsR0E3QkQsQ0FsRXlCLENBaUd6Qjs7O0FBQ0EsTUFBSUMsWUFBSjs7QUFDQSxNQUFLVCxJQUFJLElBQUksRUFBUixJQUFjQSxJQUFJLElBQUksRUFBdkIsSUFBK0JBLElBQUksSUFBSSxDQUFSLElBQWFBLElBQUksR0FBRyxDQUF2RCxFQUEyRDtBQUN6RFMsZ0JBQVksR0FBRyxPQUFmO0FBQ0QsR0FGRCxNQUVPLElBQUlULElBQUksSUFBSSxDQUFSLElBQWFBLElBQUksSUFBSSxDQUF6QixFQUE0QjtBQUNqQ1MsZ0JBQVksR0FBRyxTQUFmO0FBQ0QsR0FGTSxNQUVBLElBQUlULElBQUksR0FBRyxDQUFQLElBQVlBLElBQUksSUFBSSxFQUF4QixFQUE0QjtBQUNqQ1MsZ0JBQVksR0FBRyxLQUFmO0FBQ0QsR0FGTSxNQUVBO0FBQ0xBLGdCQUFZLEdBQUcsUUFBZjtBQUNEOztBQUVELE1BQUlwQyxJQUFKLEVBQTJDO0FBQ3pDQyxXQUFPLENBQUNDLEdBQVIsV0FBZXlCLElBQWYsZ0JBQXlCUyxZQUF6QjtBQUNELEdBL0d3QixDQWlIekI7OztBQUNBM0IsU0FBTyxDQUFDNEIsU0FBUixxTkFLb0JyRCxRQUFRLENBQUNzRCxJQUFULENBQWNDLElBTGxDLHdEQU1vQnZELFFBQVEsQ0FBQ3dELElBTjdCLGVBTXNDeEQsUUFBUSxDQUFDeUQsR0FBVCxDQUFhQyxPQU5uRCxxREFPZ0NULElBUGhDLGdCQU95Q0gsT0FQekMsNEVBU2dDSSxZQUFZLEVBVDVDLDJEQVdlbEQsUUFBUSxDQUFDc0MsT0FBVCxDQUFpQixDQUFqQixFQUFvQkMsV0FYbkMsbVJBa0JtQnZDLFFBQVEsQ0FBQzJELElBQVQsQ0FBY0MsS0FsQmpDLDRMQXVCbUI1RCxRQUFRLENBQUNzRCxJQUFULENBQWNPLFFBdkJqQyx5S0EyQmdCN0IsYUFBYSxDQUFDaEMsUUFBUSxDQUFDc0MsT0FBVCxDQUFpQixDQUFqQixFQUFvQmdCLElBQXJCLENBM0I3Qix5TEFnQ21CdEQsUUFBUSxDQUFDc0QsSUFBVCxDQUFjUSxRQWhDakMsK0xBcUNtQnRCLE9BQU8sQ0FBQzlCLEVBQUUsQ0FBQ3FELEtBQUosQ0FyQzFCLDZNQTBDbUNkLElBMUNuQyxnQkEwQzRDOUIsNENBQUssQ0FDOUM2QyxJQUR5QyxDQUNwQ2hFLFFBQVEsQ0FBQ3lELEdBQVQsQ0FBYVEsT0FEdUIsRUFFekNwQixNQUZ5QyxDQUVsQyxNQUZrQyxDQTFDNUMsbU5BaURtQ0ksSUFqRG5DLGdCQWlENEM5Qiw0Q0FBSyxDQUM5QzZDLElBRHlDLENBQ3BDaEUsUUFBUSxDQUFDeUQsR0FBVCxDQUFhUyxNQUR1QixFQUV6Q3JCLE1BRnlDLENBRWxDLE1BRmtDLENBakQ1QyxvSEFsSHlCLENBNkt6Qjs7QUFDQXZCLE1BQUksQ0FBQzZDLFNBQUwsQ0FBZUMsR0FBZixpQkFBNEJoQixZQUE1QixHQTlLeUIsQ0FnTHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0F2TEQ7O0FBeUxBaUIsc0RBQUssQ0FBQyxZQUFNO0FBQ1Y7QUFDQSxNQUFJckQsSUFBSixFQUEyQztBQUN6Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNEOztBQUNEUSxhQUFXLEdBQ1I0QyxJQURILENBQ1EsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCO0FBQ0FBLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlLFVBQUMxRSxJQUFELEVBQVU7QUFDdkJJLGFBQU8sQ0FDSnVFLFVBREgsQ0FDYzNFLElBQUksQ0FBQ0EsSUFEbkIsRUFFR3dFLElBRkgsQ0FFUSxVQUFDdkQsSUFBRCxFQUFVO0FBQ2QsWUFBSUMsSUFBSixFQUEyQztBQUN6Q0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0Q7O0FBQ0RnQixnQkFBUSxDQUFDaEIsSUFBRCxDQUFSO0FBQ0QsT0FQSCxXQVFTLFVBQUMyRCxHQUFEO0FBQUEsZUFBU3pELE9BQU8sQ0FBQzBELEtBQVIsQ0FBY0QsR0FBZCxDQUFUO0FBQUEsT0FSVDtBQVNELEtBVkQ7QUFXRCxHQWRILFdBZVMsVUFBQ0EsR0FBRDtBQUFBLFdBQVN6RCxPQUFPLENBQUMwRCxLQUFSLENBQWNELEdBQUcsQ0FBQ0UsT0FBbEIsQ0FBVDtBQUFBLEdBZlQ7QUFnQkQsQ0FyQkksQ0FBTCxDIiwiZmlsZSI6InNhdmVkY2l0aWVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcmNhc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBBZGQgQVBJIGtleSBmcm9tIE9wZW5XZWF0aGVyLlxuICAgIHRoaXMua2V5ID0gJzMxMmZjNzMzZDMwNzBiYzI3ZmVmMzZiOGE1OGZhMDMwJ1xuICAgIC8vIEFkZCBBUEkga2V5IGZvcm0gR29vZ2xlIFRpbWVab25lXG4gICAgdGhpcy5nS2V5ID0gJ0FJemFTeURhNnFGNDNRRkRPeEp6aXBLS0VNcWR4Mnh0czBCMTVBOCdcbiAgICAvLyBHZXQgY2l0eSB3ZWF0aGVyXG4gICAgdGhpcy5jaXR5VVJJID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyJ1xuICAgIC8vIEdldCBjaXR5IGZvcmNhc3RcbiAgICB0aGlzLmZvcmNhc3RVUkkgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0J1xuICAgIC8vIEdldCBUaW1lWm9uZVxuICAgIHRoaXMudGltZVpvbmVVUkkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3RpbWV6b25lL2pzb24nXG4gICAgLy8gVVZcbiAgICB0aGlzLnV2VVJJID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS91dmknXG4gIH1cbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSB3ZWF0aGVyIGZvciB0aGUgbG9jYXRpb24uXG4gIC8vIFVzZXMgZXhwb3J0ZWQgZnVuY3Rpb25zIGZyb20gZm9jYXN0LmpzXG4gIGFzeW5jIHVwZGF0ZUNpdHkoY2l0eSkge1xuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgdGhpcy5nZXRDaXR5KGNpdHkpXG4gICAgY29uc3QgZm9yY2FzdCA9IGF3YWl0IHRoaXMuZ2V0Rm9yY2FzdChjaXR5KVxuICAgIGNvbnN0IHRpbWVab25lID0gYXdhaXQgdGhpcy5nZXRUaW1lWm9uZShcbiAgICAgIGNpdHlEYXRhLmNvb3JkLmxhdCxcbiAgICAgIGNpdHlEYXRhLmNvb3JkLmxvbixcbiAgICAgIGNpdHlEYXRhLnRpbWV6b25lXG4gICAgKVxuICAgIGNvbnN0IHV2ID0gYXdhaXQgdGhpcy5nZXRVdihjaXR5RGF0YS5jb29yZC5sYXQsIGNpdHlEYXRhLmNvb3JkLmxvbilcbiAgICByZXR1cm4ge1xuICAgICAgY2l0eURhdGEsXG4gICAgICBmb3JjYXN0LFxuICAgICAgdGltZVpvbmUsXG4gICAgICB1dixcbiAgICB9XG4gIH1cbiAgLy8gR2V0IGNpdHkgd2VhdGhlclxuICBhc3luYyBnZXRDaXR5KGNpdHkpIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/cT0ke2NpdHl9JmFwcGlkPSR7dGhpcy5rZXl9JnVuaXRzPW1ldHJpY2BcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuY2l0eVVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgIH1cblxuICAgIC8vIHJldHVybiBkYXRhWzBdIFdpdGggQWNjdVdlYXRoZXJcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLy8gR2V0IGNpdHkgZm9yY2FzdFxuICBhc3luYyBnZXRGb3JjYXN0KGNpdHkpIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/cT0ke2NpdHl9JmFwcGlkPSR7dGhpcy5rZXl9JnVuaXRzPW1ldHJpY2BcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuZm9yY2FzdFVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgIH1cblxuICAgIC8vIHJldHVybiBkYXRhWzBdIFdpdGggQWNjdVdlYXRoZXJcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLy8gR2V0IGNpdHkgVVZcbiAgYXN5bmMgZ2V0VXYobGF0LCBsb24pIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/YXBwaWQ9JHt0aGlzLmtleX0mbGF0PSR7bGF0fSZsb249JHtsb259YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51dlVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhsYXQpXG4gICAgICBjb25zb2xlLmxvZyhsb24pXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGRhdGFbMF0gV2l0aCBBY2N1V2VhdGhlclxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvLyBHZXQgVGltZVpvbmVcbiAgYXN5bmMgZ2V0VGltZVpvbmUobGF0LCBsb24sIHRpbWV6b25lKSB7XG4gICAgY29uc3QgcXVlcnkgPSBgP2xvY2F0aW9uPSR7bGF0fSwke2xvbn0mdGltZXN0YW1wPSR7dGltZXpvbmV9JmtleT0ke3RoaXMuZ0tleX1gXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudGltZVpvbmVVUkkgKyBxdWVyeSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2cobGF0KVxuICAgICAgY29uc29sZS5sb2cobG9uKVxuICAgICAgY29uc29sZS5sb2codGltZXpvbmUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JjYXN0XG4iLCIvLyBJbXBvcnQgd2VhdGhlciBhcGlcbmltcG9ydCBGb3JjYXN0IGZyb20gJy4vZm9yY2FzdCdcbi8vIEltcG9ydCBkYXlKUyBmb3IgZGF0ZSwgdGltZSBmb3JtYXR0aW5nXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgdXRjIGZyb20gJ2RheWpzL3BsdWdpbi91dGMnXG5kYXlqcy5leHRlbmQodXRjKVxuaW1wb3J0IHsgcmVhZHkgfSBmcm9tICcuL2hlbHBlcnMnXG5cbi8vIENhbGwgbmV3IGZvcmNhc3QgY2xhc3NcbmNvbnN0IGZvcmNhc3QgPSBuZXcgRm9yY2FzdCgpXG5cbi8vIEdldHRpbmcgd2VhdGhlclxuY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sdW1ucycpXG5cbi8vIEdldCBhbnkgY2l0aWVzIHNhdmVkIHRvIGxvY2FsRm9yYWdlXG5jb25zdCBzYXZlZENpdGllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2F2ZWRDaXR5ID0gYXdhaXQgbG9jYWxGb3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykgLy8gbG9jYWxGb3JhZ2VcblxuICAvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciwgZGlzcGxheSBvdXIgb3duIGVycm9yLlxuICBpZiAoc2F2ZWRDaXR5ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IGNpdGllcyBvciBubyBjaXRpZXMgc2F2ZWQhXCIpXG4gIH1cblxuICByZXR1cm4gc2F2ZWRDaXR5XG59XG5cbi8vIE91dHB1dCBhbGwgZGF0YSB0byBET00uXG5jb25zdCB1cGRhdGVVSSA9IChkYXRhKSA9PiB7XG4gIC8vIGRlc3RydWN0dXJlIHByb3BlcnRpZXNcbiAgLy8gICBjb25zdCB7IGNpdHlEYXRhLCB3ZWF0aGVyIH0gPSBkYXRhXG4gIGNvbnN0IHsgY2l0eURhdGEsIGZvcmNhc3QsIHRpbWVab25lLCB1diB9ID0gZGF0YVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coY2l0eURhdGEpXG4gICAgY29uc29sZS5sb2coZm9yY2FzdClcbiAgICBjb25zb2xlLmxvZyh0aW1lWm9uZSlcbiAgICBjb25zb2xlLmxvZyh1dilcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0ZW1wbGF0ZVxuXG4gIC8vLyBTZXQgdGhlIHR5cGUgb2YgcHJlY2lwaXRhdGlvbiBleHBlY3RlZC5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IHJhaW5UeXBlID0gbnVsbFxuICAgIGxldCByYWluQW1vdW50ID0gbnVsbFxuICAgIGlmICh0eXBlID09PSAnUmFpbicgfHwgdHlwZSA9PT0gJ1Nub3cnKSB7XG4gICAgICByYWluVHlwZSA9IHR5cGVcbiAgICAgIGlmIChjaXR5RGF0YS5yYWluKSB7XG4gICAgICAgIHJhaW5BbW91bnQgPSBjaXR5RGF0YS5yYWluWycxaCddXG4gICAgICAgIHJhaW5BbW91bnQgPSByYWluQW1vdW50ICsgJ21tJ1xuICAgICAgfSBlbHNlIGlmIChjaXR5RGF0YS5zbm93KSB7XG4gICAgICAgIHJhaW5BbW91bnQgPSBjaXR5RGF0YS5zbm93WycxaCddXG4gICAgICAgIHJhaW5BbW91bnQgPSByYWluQW1vdW50ICsgJ21tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFpbkFtb3VudCA9IGNpdHlEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmFpblR5cGUgPSAnUmFpbidcbiAgICAgIHJhaW5BbW91bnQgPSAnMG1tJ1xuICAgIH1cblxuICAgIHJldHVybiBgPHA+JHtyYWluVHlwZX08L3A+PHA+JHtyYWluQW1vdW50fTwvcD5gXG4gIH1cblxuICAvLy8gU2V0IFVWIGluZGV4XG4gIGNvbnN0IHV2SW5kZXggPSAocmF0aW5nKSA9PiB7XG4gICAgbGV0IHV2UmF0aW5nXG4gICAgaWYgKHJhdGluZyA+PSAzICYmIHJhdGluZyA8IDYpIHtcbiAgICAgIHV2UmF0aW5nID0gJ01vZGVyYXRlJ1xuICAgIH0gZWxzZSBpZiAocmF0aW5nID49IDYgJiYgcmF0aW5nIDwgOCkge1xuICAgICAgdXZSYXRpbmcgPSAnSGlnaCdcbiAgICB9IGVsc2UgaWYgKHJhdGluZyA+PSA4ICYmIHJhdGluZyA8IDExKSB7XG4gICAgICB1dlJhdGluZyA9ICdWZXJ5IEhpZ2gnXG4gICAgfSBlbHNlIGlmIChyYXRpbmcgPiAxMCkge1xuICAgICAgdXZSYXRpbmcgPSAnRXh0cmVtZSdcbiAgICB9IGVsc2Uge1xuICAgICAgdXZSYXRpbmcgPSAnTG93J1xuICAgIH1cblxuICAgIHJldHVybiB1dlJhdGluZ1xuICB9XG5cbiAgLy8vIEdldCB0aGUgZGF0ZSBhbmQgdGltZSBvZiB0aGUgZm9yY2FzdC5cbiAgY29uc3QgdGltZSA9IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdCgnSCcpXG4gIGNvbnN0IGRheVRpbWUgPSBkYXlqcyhcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VSycsIHsgdGltZVpvbmU6IHRpbWVab25lLnRpbWVab25lSWQgfSlcbiAgKS5mb3JtYXQoJ2RkZGQgLSBoOm1tQScpXG4gIGNvbnN0IGRhdGUgPSBkYXlqcyhcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VSycsIHsgdGltZVpvbmU6IHRpbWVab25lLnRpbWVab25lSWQgfSlcbiAgKS5mb3JtYXQoJ1lZWVktTU0tRCcpXG5cbiAgLy8vIEdlbmVyYXRpbmcgNSBkYXkgZm9yY2FzdFxuICAvLyB0b2RvIENoZWNrIHdpdGggY3VycmVudCB0aW1lIG9mIHNlYXJjaCBhbmQgbWF0Y2ggdGhlIGZvcmNhc3QgZm9yIHRoZSBuZXh0IGZpdmUgZGF5cyBhdCB0aGUgc2FtZSBuYW1lLlxuICBjb25zdCBkYWlseUZvcmNhc3QgPSAoKSA9PiB7XG4gICAgbGV0IGZvcmNhc3RzID0gJydcbiAgICBmb3JjYXN0cyArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JjYXN0c19fZGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8aDM+RGF5PC9oMz5cbiAgICAgICAgICAgICAgPHA+V2VhdGhlcjwvcD5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgPHA+V2luZDwvcD5cbiAgICAgICAgICAgICAgPHA+Mm1waDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgIDxwPkhpZ2g8L3A+XG4gICAgICAgICAgICAgIDxwPjMwPHN1cD4mZGVnOzwvc3VwPjwvcD5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgPHA+UmFpbjwvcD5cbiAgICAgICAgICAgICAgPHA+MCU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtNlwiPlxuICAgICAgICAgICAgICA8aDM+VGVtcDxzdXA+JmRlZzs8L3N1cD48L2gzPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgIGNvbnNvbGUubG9nKGZvcmNhc3RzKVxuICAgIHJldHVybiBmb3JjYXN0c1xuICB9XG5cbiAgLy8vIFNldCBjbGFzcyBmb3IgdGltZSBvZiBkYXkuXG4gIGxldCBjaXR5RGF5TmlnaHRcbiAgaWYgKCh0aW1lID49IDIxICYmIHRpbWUgPD0gMjMpIHx8ICh0aW1lID49IDAgJiYgdGltZSA8IDUpKSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ25pZ2h0J1xuICB9IGVsc2UgaWYgKHRpbWUgPj0gNSAmJiB0aW1lIDw9IDcpIHtcbiAgICBjaXR5RGF5TmlnaHQgPSAnc3VucmlzZSdcbiAgfSBlbHNlIGlmICh0aW1lID4gNyAmJiB0aW1lIDw9IDE4KSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ2RheSdcbiAgfSBlbHNlIHtcbiAgICBjaXR5RGF5TmlnaHQgPSAnc3Vuc2V0J1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aW1lfSA9ICR7Y2l0eURheU5pZ2h0fWApXG4gIH1cblxuICAvLy8gR2VuZXJhdGUgSFRNTC5cbiAgY29udGVudC5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtNCBjYXJkc19fYmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC0tY2l0eVwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImNhcmRfX2hlYWRlciAuY29sdW1uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxoMj4ke2NpdHlEYXRhLm1haW4udGVtcH08c3VwPiZkZWc7PC9zdXA+PC9oMj5cbiAgICAgICAgICAgICAgICA8aDM+JHtjaXR5RGF0YS5uYW1lfSwgJHtjaXR5RGF0YS5zeXMuY291bnRyeX08L2gzPlxuICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHtkYXRlfVwiPiR7ZGF5VGltZX08L3RpbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj4ke2RhaWx5Rm9yY2FzdCgpfTwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8cD4ke2NpdHlEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImNhcmRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgY2FyZF9fZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cD5XaW5kPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7Y2l0eURhdGEud2luZC5zcGVlZH1tcGg8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwPkhpZ2g8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtjaXR5RGF0YS5tYWluLnRlbXBfbWF4fTxzdXA+JmRlZzs8L3N1cD48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICR7cHJlY2lwaXRhdGlvbihjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cD5IdW1pZGl0eTwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke2NpdHlEYXRhLm1haW4uaHVtaWRpdHl9JnBlcmNudDs8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwPlVWPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7dXZJbmRleCh1di52YWx1ZSl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cD5TdW5yaXNlPC9wPlxuICAgICAgICAgICAgICAgIDxwPjx0aW1lIGRhdGV0aW1lPVwiJHtkYXRlfVwiPiR7ZGF5anNcbiAgICAudW5peChjaXR5RGF0YS5zeXMuc3VucmlzZSlcbiAgICAuZm9ybWF0KCdoOm1BJyl9PC90aW1lPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHA+U3Vuc2V0PC9wPlxuICAgICAgICAgICAgICAgIDxwPjx0aW1lIGRhdGV0aW1lPVwiJHtkYXRlfVwiPiR7ZGF5anNcbiAgICAudW5peChjaXR5RGF0YS5zeXMuc3Vuc2V0KVxuICAgIC5mb3JtYXQoJ2g6bUEnKX08L3RpbWU+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcblxuICAvLyBBZGQgdGltZSBvZiBkYXkgY2xhc3MgdG8gY2FyZC5cbiAgY2FyZC5jbGFzc0xpc3QuYWRkKGBjYXJkLS0ke2NpdHlEYXlOaWdodH1gKVxuXG4gIC8vIEFkZCBjbGFzcyBmb3Igd2VhdGhlciBpbWFnZS5cbiAgLy8gY29uc3QgY2FyZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZSBpbWcnKVxuICAvLyBpZiAodHlwZW9mIGNhcmRJbWcgIT09ICd1bmRlZmluZWQnIHx8IGNhcmRJbWcgIT09IG51bGwpIHtcbiAgLy8gICBjYXJkXG4gIC8vICAgICAucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltYWdlIGltZycpXG4gIC8vICAgICAuY2xhc3NMaXN0LmFkZChgJHtjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW59YClcbiAgLy8gfVxufVxuXG5yZWFkeSgoKSA9PiB7XG4gIC8qIERvIHRoaW5ncyBhZnRlciBET00gaGFzIGZ1bGx5IGxvYWRlZCAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdET00gbG9hZGVkIScpXG4gIH1cbiAgc2F2ZWRDaXRpZXMoKVxuICAgIC50aGVuKChjaXRpZXMpID0+IHtcbiAgICAgIC8vIHVwZGF0ZSB1aSB3aXRoIGNpdHlcbiAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XG4gICAgICAgIGZvcmNhc3RcbiAgICAgICAgICAudXBkYXRlQ2l0eShjaXR5LmNpdHkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVVSShkYXRhKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSkpXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==