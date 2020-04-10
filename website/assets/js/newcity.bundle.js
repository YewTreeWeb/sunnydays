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
var savedCity = document.querySelector('.card__save button');
var cities = []; // Output all data to DOM.

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

  cities.push({
    city: city
  });
  localForage.setItem('cities', cities);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! localforage */ "oAJy")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2ZvcmNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy9uZXdjaXR5LmpzIl0sIm5hbWVzIjpbIkZvcmNhc3QiLCJrZXkiLCJnS2V5IiwiY2l0eVVSSSIsImZvcmNhc3RVUkkiLCJ0aW1lWm9uZVVSSSIsInV2VVJJIiwiY2l0eSIsImdldENpdHkiLCJjaXR5RGF0YSIsImdldEZvcmNhc3QiLCJmb3JjYXN0IiwiZ2V0VGltZVpvbmUiLCJjb29yZCIsImxhdCIsImxvbiIsInRpbWV6b25lIiwidGltZVpvbmUiLCJnZXRVdiIsInV2IiwicXVlcnkiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsImRheWpzIiwiZXh0ZW5kIiwidXRjIiwiY2l0eUZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkIiwiY29udGVudCIsImNvbnRlbnRIZWFkZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2F2ZWRDaXR5IiwiY2l0aWVzIiwidXBkYXRlVUkiLCJwcmVjaXBpdGF0aW9uIiwidHlwZSIsInJhaW5UeXBlIiwicmFpbkFtb3VudCIsInJhaW4iLCJzbm93Iiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwidXZJbmRleCIsInJhdGluZyIsInV2UmF0aW5nIiwidGltZSIsIkRhdGUiLCJmb3JtYXQiLCJkYXlUaW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lWm9uZUlkIiwiZGF0ZSIsImRhaWx5Rm9yY2FzdCIsImZvcmNhc3RzIiwiY2l0eURheU5pZ2h0IiwiaW5uZXJIVE1MIiwibWFpbiIsInRlbXAiLCJuYW1lIiwic3lzIiwiY291bnRyeSIsIndpbmQiLCJzcGVlZCIsInRlbXBfbWF4IiwiaHVtaWRpdHkiLCJ2YWx1ZSIsInVuaXgiLCJzdW5yaXNlIiwic3Vuc2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInJlc2V0IiwidXBkYXRlQ2l0eSIsInRoZW4iLCJlcnIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiaW5uZXJUZXh0IiwicHVzaCIsImxvY2FsRm9yYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLQyxHQUFMLEdBQVcsa0NBQVgsQ0FGWSxDQUdaOztBQUNBLFNBQUtDLElBQUwsR0FBWSx5Q0FBWixDQUpZLENBS1o7O0FBQ0EsU0FBS0MsT0FBTCxHQUFlLGlEQUFmLENBTlksQ0FPWjs7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLGtEQUFsQixDQVJZLENBU1o7O0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixvREFBbkIsQ0FWWSxDQVdaOztBQUNBLFNBQUtDLEtBQUwsR0FBYSw2Q0FBYjtBQUNELEcsQ0FDRDtBQUNBOzs7Ozs7Nk1BQ2lCQyxJOzs7Ozs7O3VCQUNRLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDOzs7QUFBakJFLHdCOzt1QkFDZ0IsS0FBS0MsVUFBTCxDQUFnQkgsSUFBaEIsQzs7O0FBQWhCSSx1Qjs7dUJBQ2lCLEtBQUtDLFdBQUwsQ0FDckJILFFBQVEsQ0FBQ0ksS0FBVCxDQUFlQyxHQURNLEVBRXJCTCxRQUFRLENBQUNJLEtBQVQsQ0FBZUUsR0FGTSxFQUdyQk4sUUFBUSxDQUFDTyxRQUhZLEM7OztBQUFqQkMsd0I7O3VCQUtXLEtBQUtDLEtBQUwsQ0FBV1QsUUFBUSxDQUFDSSxLQUFULENBQWVDLEdBQTFCLEVBQStCTCxRQUFRLENBQUNJLEtBQVQsQ0FBZUUsR0FBOUMsQzs7O0FBQVhJLGtCO2lEQUNDO0FBQ0xWLDBCQUFRLEVBQVJBLFFBREs7QUFFTEUseUJBQU8sRUFBUEEsT0FGSztBQUdMTSwwQkFBUSxFQUFSQSxRQUhLO0FBSUxFLG9CQUFF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WTtBQUNWdEYsUUFBSSxFQUFFQTtBQURJLEdBQVo7QUFHQXVGLGFBQVcsQ0FBQ0osT0FBWixDQUFvQixRQUFwQixFQUE4Qm5ELE1BQTlCO0FBQ0QsQ0FURCxFIiwiZmlsZSI6Im5ld2NpdHkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9yY2FzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEFkZCBBUEkga2V5IGZyb20gT3BlbldlYXRoZXIuXG4gICAgdGhpcy5rZXkgPSAnMzEyZmM3MzNkMzA3MGJjMjdmZWYzNmI4YTU4ZmEwMzAnXG4gICAgLy8gQWRkIEFQSSBrZXkgZm9ybSBHb29nbGUgVGltZVpvbmVcbiAgICB0aGlzLmdLZXkgPSAnQUl6YVN5RGE2cUY0M1FGRE94SnppcEtLRU1xZHgyeHRzMEIxNUE4J1xuICAgIC8vIEdldCBjaXR5IHdlYXRoZXJcbiAgICB0aGlzLmNpdHlVUkkgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXInXG4gICAgLy8gR2V0IGNpdHkgZm9yY2FzdFxuICAgIHRoaXMuZm9yY2FzdFVSSSA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3QnXG4gICAgLy8gR2V0IFRpbWVab25lXG4gICAgdGhpcy50aW1lWm9uZVVSSSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvdGltZXpvbmUvanNvbidcbiAgICAvLyBVVlxuICAgIHRoaXMudXZVUkkgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3V2aSdcbiAgfVxuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIHdlYXRoZXIgZm9yIHRoZSBsb2NhdGlvbi5cbiAgLy8gVXNlcyBleHBvcnRlZCBmdW5jdGlvbnMgZnJvbSBmb2Nhc3QuanNcbiAgYXN5bmMgdXBkYXRlQ2l0eShjaXR5KSB7XG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCB0aGlzLmdldENpdHkoY2l0eSlcbiAgICBjb25zdCBmb3JjYXN0ID0gYXdhaXQgdGhpcy5nZXRGb3JjYXN0KGNpdHkpXG4gICAgY29uc3QgdGltZVpvbmUgPSBhd2FpdCB0aGlzLmdldFRpbWVab25lKFxuICAgICAgY2l0eURhdGEuY29vcmQubGF0LFxuICAgICAgY2l0eURhdGEuY29vcmQubG9uLFxuICAgICAgY2l0eURhdGEudGltZXpvbmVcbiAgICApXG4gICAgY29uc3QgdXYgPSBhd2FpdCB0aGlzLmdldFV2KGNpdHlEYXRhLmNvb3JkLmxhdCwgY2l0eURhdGEuY29vcmQubG9uKVxuICAgIHJldHVybiB7XG4gICAgICBjaXR5RGF0YSxcbiAgICAgIGZvcmNhc3QsXG4gICAgICB0aW1lWm9uZSxcbiAgICAgIHV2LFxuICAgIH1cbiAgfVxuICAvLyBHZXQgY2l0eSB3ZWF0aGVyXG4gIGFzeW5jIGdldENpdHkoY2l0eSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYD9xPSR7Y2l0eX0mYXBwaWQ9JHt0aGlzLmtleX0mdW5pdHM9bWV0cmljYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5jaXR5VVJJICsgcXVlcnkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGRhdGFbMF0gV2l0aCBBY2N1V2VhdGhlclxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvLyBHZXQgY2l0eSBmb3JjYXN0XG4gIGFzeW5jIGdldEZvcmNhc3QoY2l0eSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYD9xPSR7Y2l0eX0mYXBwaWQ9JHt0aGlzLmtleX0mdW5pdHM9bWV0cmljYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5mb3JjYXN0VVJJICsgcXVlcnkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGRhdGFbMF0gV2l0aCBBY2N1V2VhdGhlclxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvLyBHZXQgY2l0eSBVVlxuICBhc3luYyBnZXRVdihsYXQsIGxvbikge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYD9hcHBpZD0ke3RoaXMua2V5fSZsYXQ9JHtsYXR9Jmxvbj0ke2xvbn1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnV2VVJJICsgcXVlcnkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxhdClcbiAgICAgIGNvbnNvbGUubG9nKGxvbilcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gZGF0YVswXSBXaXRoIEFjY3VXZWF0aGVyXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8vIEdldCBUaW1lWm9uZVxuICBhc3luYyBnZXRUaW1lWm9uZShsYXQsIGxvbiwgdGltZXpvbmUpIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/bG9jYXRpb249JHtsYXR9LCR7bG9ufSZ0aW1lc3RhbXA9JHt0aW1lem9uZX0ma2V5PSR7dGhpcy5nS2V5fWBcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy50aW1lWm9uZVVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhsYXQpXG4gICAgICBjb25zb2xlLmxvZyhsb24pXG4gICAgICBjb25zb2xlLmxvZyh0aW1lem9uZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmNhc3RcbiIsIi8vIEltcG9ydCB3ZWF0aGVyIGFwaVxuaW1wb3J0IEZvcmNhc3QgZnJvbSAnLi9mb3JjYXN0J1xuLy8gSW1wb3J0IGRheUpTIGZvciBkYXRlLCB0aW1lIGZvcm1hdHRpbmdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCB1dGMgZnJvbSAnZGF5anMvcGx1Z2luL3V0YydcbmRheWpzLmV4dGVuZCh1dGMpXG5cbi8vIENhbGwgbmV3IGZvcmNhc3QgY2xhc3NcbmNvbnN0IGZvcmNhc3QgPSBuZXcgRm9yY2FzdCgpXG5cbi8vIEdldHRpbmcgd2VhdGhlclxuY29uc3QgY2l0eUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbmNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2NvbnRlbnQnKVxuY29uc3QgY29udGVudEhlYWRlciA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2hlYWRlciAuY29sdW1uJylbMV1cbmNvbnN0IHNhdmVkQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19zYXZlIGJ1dHRvbicpXG5jb25zdCBjaXRpZXMgPSBbXVxuXG4vLyBPdXRwdXQgYWxsIGRhdGEgdG8gRE9NLlxuY29uc3QgdXBkYXRlVUkgPSAoZGF0YSkgPT4ge1xuICAvLyBkZXN0cnVjdHVyZSBwcm9wZXJ0aWVzXG4gIC8vICAgY29uc3QgeyBjaXR5RGF0YSwgd2VhdGhlciB9ID0gZGF0YVxuICBjb25zdCB7IGNpdHlEYXRhLCBmb3JjYXN0LCB0aW1lWm9uZSwgdXYgfSA9IGRhdGFcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50JylcbiAgICBjb25zb2xlLmxvZyhjaXR5RGF0YSlcbiAgICBjb25zb2xlLmxvZygnZm9yY2FzdCcpXG4gICAgY29uc29sZS5sb2coZm9yY2FzdClcbiAgICBjb25zb2xlLmxvZyh0aW1lWm9uZSlcbiAgICBjb25zb2xlLmxvZyh1dilcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0ZW1wbGF0ZVxuXG4gIC8vLyBTZXQgdGhlIHR5cGUgb2YgcHJlY2lwaXRhdGlvbiBleHBlY3RlZC5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IHJhaW5UeXBlID0gbnVsbFxuICAgIGxldCByYWluQW1vdW50ID0gbnVsbFxuICAgIGlmICh0eXBlID09PSAnUmFpbicgfHwgdHlwZSA9PT0gJ1Nub3cnKSB7XG4gICAgICByYWluVHlwZSA9IHR5cGVcbiAgICAgIGlmIChjaXR5RGF0YS5yYWluKSB7XG4gICAgICAgIHJhaW5BbW91bnQgPSBjaXR5RGF0YS5yYWluWycxaCddXG4gICAgICAgIHJhaW5BbW91bnQgPSByYWluQW1vdW50ICsgJ21tJ1xuICAgICAgfSBlbHNlIGlmIChjaXR5RGF0YS5zbm93KSB7XG4gICAgICAgIHJhaW5BbW91bnQgPSBjaXR5RGF0YS5zbm93WycxaCddXG4gICAgICAgIHJhaW5BbW91bnQgPSByYWluQW1vdW50ICsgJ21tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFpbkFtb3VudCA9IGNpdHlEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmFpblR5cGUgPSAnUmFpbidcbiAgICAgIHJhaW5BbW91bnQgPSAnMG1tJ1xuICAgIH1cblxuICAgIHJldHVybiBgPHA+JHtyYWluVHlwZX08L3A+PHA+JHtyYWluQW1vdW50fTwvcD5gXG4gIH1cblxuICAvLy8gU2V0IFVWIGluZGV4XG4gIGNvbnN0IHV2SW5kZXggPSAocmF0aW5nKSA9PiB7XG4gICAgbGV0IHV2UmF0aW5nXG4gICAgaWYgKHJhdGluZyA+PSAzICYmIHJhdGluZyA8IDYpIHtcbiAgICAgIHV2UmF0aW5nID0gJ01vZGVyYXRlJ1xuICAgIH0gZWxzZSBpZiAocmF0aW5nID49IDYgJiYgcmF0aW5nIDwgOCkge1xuICAgICAgdXZSYXRpbmcgPSAnSGlnaCdcbiAgICB9IGVsc2UgaWYgKHJhdGluZyA+PSA4ICYmIHJhdGluZyA8IDExKSB7XG4gICAgICB1dlJhdGluZyA9ICdWZXJ5IEhpZ2gnXG4gICAgfSBlbHNlIGlmIChyYXRpbmcgPiAxMCkge1xuICAgICAgdXZSYXRpbmcgPSAnRXh0cmVtZSdcbiAgICB9IGVsc2Uge1xuICAgICAgdXZSYXRpbmcgPSAnTG93J1xuICAgIH1cblxuICAgIHJldHVybiB1dlJhdGluZ1xuICB9XG5cbiAgLy8vIEdldCB0aGUgZGF0ZSBhbmQgdGltZSBvZiB0aGUgZm9yY2FzdC5cbiAgY29uc3QgdGltZSA9IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdCgnSCcpXG4gIGNvbnN0IGRheVRpbWUgPSBkYXlqcyhcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VSycsIHsgdGltZVpvbmU6IHRpbWVab25lLnRpbWVab25lSWQgfSlcbiAgKS5mb3JtYXQoJ2RkZGQgLSBoOm1tQScpXG4gIGNvbnN0IGRhdGUgPSBkYXlqcyhcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VSycsIHsgdGltZVpvbmU6IHRpbWVab25lLnRpbWVab25lSWQgfSlcbiAgKS5mb3JtYXQoJ1lZWVktTU0tRCcpXG5cbiAgLy8vIEdlbmVyYXRpbmcgNSBkYXkgZm9yY2FzdFxuICBjb25zdCBkYWlseUZvcmNhc3QgPSAoKSA9PiB7XG4gICAgLy8gbGV0IGZvcmNhc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgZm9yY2FzdHMgPSAnJ1xuICAgIC8vIGZvcmNhc3RzLnRleHRDb250ZW50ID0gJ2hlbGxvIHdvcmxkJ1xuICAgIGZvcmNhc3RzICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JjYXN0c19fZGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICA8aDM+RGF5PC9oMz5cbiAgICAgICAgICAgIDxwPldlYXRoZXI8L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHA+V2luZDwvcD5cbiAgICAgICAgICAgIDxwPjJtcGg8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHA+SGlnaDwvcD5cbiAgICAgICAgICAgIDxwPjMwPHN1cD4mZGVnOzwvc3VwPjwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8cD5SYWluPC9wPlxuICAgICAgICAgICAgPHA+MCU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy02XCI+XG4gICAgICAgICAgICA8aDM+VGVtcDxzdXA+JmRlZzs8L3N1cD48L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgLy8gaWYgKClcbiAgICBjb25zb2xlLmxvZyhmb3JjYXN0cylcbiAgICByZXR1cm4gZm9yY2FzdHNcbiAgfVxuXG4gIC8vLyBTZXQgY2xhc3MgZm9yIHRpbWUgb2YgZGF5LlxuICBsZXQgY2l0eURheU5pZ2h0XG4gIGlmICgodGltZSA+PSAyMSAmJiB0aW1lIDw9IDIzKSB8fCAodGltZSA+PSAwICYmIHRpbWUgPCA1KSkge1xuICAgIGNpdHlEYXlOaWdodCA9ICduaWdodCdcbiAgfSBlbHNlIGlmICh0aW1lID49IDUgJiYgdGltZSA8PSA3KSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ3N1bnJpc2UnXG4gIH0gZWxzZSBpZiAodGltZSA+IDcgJiYgdGltZSA8PSAxOCkge1xuICAgIGNpdHlEYXlOaWdodCA9ICdkYXknXG4gIH0gZWxzZSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ3N1bnNldCdcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGltZX0gPSAke2NpdHlEYXlOaWdodH1gKVxuICB9XG5cbiAgLy8vIEdlbmVyYXRlIEhUTUwuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkX19oZWFkZXIgLmNvbHVtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgPGgyPiR7Y2l0eURhdGEubWFpbi50ZW1wfTxzdXA+JmRlZzs8L3N1cD48L2gyPlxuICAgICAgICA8aDM+JHtjaXR5RGF0YS5uYW1lfSwgJHtjaXR5RGF0YS5zeXMuY291bnRyeX08L2gzPlxuICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7ZGF0ZX1cIj4ke2RheVRpbWV9PC90aW1lPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICR7ZGFpbHlGb3JjYXN0KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8cD4ke2NpdHlEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgIDxocj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiY2FyZF9fZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBjYXJkX19kZXRhaWxzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5XaW5kPC9wPlxuICAgICAgICAgIDxwPiR7Y2l0eURhdGEud2luZC5zcGVlZH1tcGg8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+SGlnaDwvcD5cbiAgICAgICAgICA8cD4ke2NpdHlEYXRhLm1haW4udGVtcF9tYXh9PHN1cD4mZGVnOzwvc3VwPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAke3ByZWNpcGl0YXRpb24oY2l0eURhdGEud2VhdGhlclswXS5tYWluKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5IdW1pZGl0eTwvcD5cbiAgICAgICAgICA8cD4ke2NpdHlEYXRhLm1haW4uaHVtaWRpdHl9JnBlcmNudDs8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+VVY8L3A+XG4gICAgICAgICAgPHA+JHt1dkluZGV4KHV2LnZhbHVlKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+U3VucmlzZTwvcD5cbiAgICAgICAgICA8cD48dGltZSBkYXRldGltZT1cIiR7ZGF0ZX1cIj4ke2RheWpzXG4gICAgLnVuaXgoY2l0eURhdGEuc3lzLnN1bnJpc2UpXG4gICAgLmZvcm1hdCgnaDptQScpfTwvdGltZT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPHA+U3Vuc2V0PC9wPlxuICAgICAgICAgIDxwPjx0aW1lIGRhdGV0aW1lPVwiJHtkYXRlfVwiPiR7ZGF5anNcbiAgICAudW5peChjaXR5RGF0YS5zeXMuc3Vuc2V0KVxuICAgIC5mb3JtYXQoJ2g6bUEnKX08L3RpbWU+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICBgXG5cbiAgLy8gU2hvdyB3ZWF0aGVyIGNhcmQgaWYgY2FyZCBkb2Vzbid0IGhhdmUgaGlkZGVuIGNsYXNzXG4gIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuJykpIHtcbiAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gIH1cblxuICAvLyBBZGQgdGltZSBvZiBkYXkgY2xhc3MgdG8gY2FyZC5cbiAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKGBjYXJkLS0ke2NpdHlEYXlOaWdodH1gKVxuXG4gIC8vIEFkZCBjbGFzcyBmb3Igd2VhdGhlciBpbWFnZS5cbiAgY2FyZFxuICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2UgaW1nJylcbiAgICAuY2xhc3NMaXN0LnRvZ2dsZShgJHtjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW59YClcbn1cblxuLy8gT24gZm9ybSBzdWJtaXQgdXBkYXRlIHRoZSBIVE1MIGNvbnRlbnQgd2l0aCB0aGUgQVBJIGRhdGFcbi8vIFNhdmUgZW50ZXJlZCBsb2NhdGlvbiB0byBsb2NhbFN0b3JhZ2VcbmNpdHlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgc3VibWl0LlxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyBnZXQgY2l0eSB2YWx1ZS5cbiAgY29uc3QgY2l0eSA9IGNpdHlGb3JtLmNpdHkudmFsdWUudHJpbSgpXG4gIGNpdHlGb3JtLnJlc2V0KClcblxuICAvLyB1cGRhdGUgdWkgd2l0aCBjaXR5XG4gIGZvcmNhc3RcbiAgICAudXBkYXRlQ2l0eShjaXR5KVxuICAgIC50aGVuKChkYXRhKSA9PiB1cGRhdGVVSShkYXRhKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuXG4gIC8vIHNldCBsb2NhbFN0b3JhZ2Ugd2l0aCBsb2NhbEZvcmFnZS5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBjaXR5KVxufSlcblxuLy8gR2V0IGNpdHkgZnJvbSBsb2NhbFN0b3JhZ2VcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eScpKSB7XG4gIGZvcmNhc3RcbiAgICAudXBkYXRlQ2l0eShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eScpKVxuICAgIC50aGVuKChkYXRhKSA9PiB1cGRhdGVVSShkYXRhKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxufVxuXG4vLyBJZiBjaXR5IGlzIHNhdmVkIGFkZCBsb2NhdGlvbiB0byBsb2NhbEZvcmFnZVxuc2F2ZWRDaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2hlYWRlciBoMycpLmlubmVyVGV4dFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdTYXZlZCAnICsgY2l0eSlcbiAgfVxuICBjaXRpZXMucHVzaCh7XG4gICAgY2l0eTogY2l0eSxcbiAgfSlcbiAgbG9jYWxGb3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgY2l0aWVzKVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=