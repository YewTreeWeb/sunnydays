(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newcity~savedcities"],{

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

/***/ "kk/T":
/*!********************************************!*\
  !*** ./website/src/js/modules/savecity.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(localForage) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SavedCities; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var SavedCities = /*#__PURE__*/function () {
  function SavedCities() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SavedCities);

    this.cities = db.collection('cities');
    this.unsub;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SavedCities, [{
    key: "addCity",
    value: function () {
      var _addCity = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(place) {
        var now, city, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                now = new Date();
                city = {
                  location: place,
                  created_at: firebase.firestore.Timestamp.fromDate(now)
                };
                _context.next = 4;
                return this.cities.add(city);

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addCity(_x) {
        return _addCity.apply(this, arguments);
      }

      return addCity;
    }()
  }, {
    key: "offlineCity",
    value: function offlineCity(city) {
      // save to localStorage for build if offline.
      // Clear previously saved data before saving new
      // to save storage.
      var cityLimit = 5;
      var cities = [];

      if (cities.length === cityLimit) {
        localForage.clear();
        cities.splice(0, cities.length);
      }

      cities.push({
        forcast: city
      });
      localForage.setItem('cities', cities);
    }
  }, {
    key: "getCities",
    value: function getCities(cb) {
      this.unsub = this.cities.orderBy('created_at').onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'added') {
            cb(change.doc.data(), change.doc.id);
          }
        });
      });
    } // async getCityStorage() {
    //   const savedCity = await localForage.getItem('cities') // localForage
    //   // If there is an error, display our own error.
    //   if (savedCity === null) {
    //     throw new Error("Can't get cities or no cities saved!")
    //   }
    //   return savedCity
    // }

  }]);

  return SavedCities;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! localforage */ "oAJy")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2ZvcmNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy9zYXZlY2l0eS5qcyJdLCJuYW1lcyI6WyJGb3JjYXN0Iiwia2V5IiwiZ0tleSIsImNpdHlVUkkiLCJmb3JjYXN0VVJJIiwidGltZVpvbmVVUkkiLCJ1dlVSSSIsImNpdHkiLCJnZXRDaXR5IiwiY2l0eURhdGEiLCJnZXRGb3JjYXN0IiwiZm9yY2FzdCIsImdldFRpbWVab25lIiwiY29vcmQiLCJsYXQiLCJsb24iLCJ0aW1lem9uZSIsInRpbWVab25lIiwiZ2V0VXYiLCJ1diIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJTYXZlZENpdGllcyIsImNpdGllcyIsImRiIiwiY29sbGVjdGlvbiIsInVuc3ViIiwicGxhY2UiLCJub3ciLCJEYXRlIiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJUaW1lc3RhbXAiLCJmcm9tRGF0ZSIsImFkZCIsImNpdHlMaW1pdCIsImxlbmd0aCIsImxvY2FsRm9yYWdlIiwiY2xlYXIiLCJzcGxpY2UiLCJwdXNoIiwic2V0SXRlbSIsImNiIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImRvY0NoYW5nZXMiLCJmb3JFYWNoIiwiY2hhbmdlIiwidHlwZSIsImRvYyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLQyxHQUFMLEdBQVcsa0NBQVgsQ0FGWSxDQUdaOztBQUNBLFNBQUtDLElBQUwsR0FBWSx5Q0FBWixDQUpZLENBS1o7O0FBQ0EsU0FBS0MsT0FBTCxHQUFlLGlEQUFmLENBTlksQ0FPWjs7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLGtEQUFs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LEdBQVAsQ0FBV0MsRUFBL0IsQ0FBRjtBQUNEO0FBQ0YsU0FKRDtBQUtELE9BTlksQ0FBYjtBQU9ELEssQ0FDRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwiZmlsZSI6Im5ld2NpdHl+c2F2ZWRjaXRpZXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9yY2FzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEFkZCBBUEkga2V5IGZyb20gT3BlbldlYXRoZXIuXG4gICAgdGhpcy5rZXkgPSAnMzEyZmM3MzNkMzA3MGJjMjdmZWYzNmI4YTU4ZmEwMzAnXG4gICAgLy8gQWRkIEFQSSBrZXkgZm9ybSBHb29nbGUgVGltZVpvbmVcbiAgICB0aGlzLmdLZXkgPSAnQUl6YVN5RGE2cUY0M1FGRE94SnppcEtLRU1xZHgyeHRzMEIxNUE4J1xuICAgIC8vIEdldCBjaXR5IHdlYXRoZXJcbiAgICB0aGlzLmNpdHlVUkkgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXInXG4gICAgLy8gR2V0IGNpdHkgZm9yY2FzdFxuICAgIHRoaXMuZm9yY2FzdFVSSSA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3QnXG4gICAgLy8gR2V0IFRpbWVab25lXG4gICAgdGhpcy50aW1lWm9uZVVSSSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvdGltZXpvbmUvanNvbidcbiAgICAvLyBVVlxuICAgIHRoaXMudXZVUkkgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3V2aSdcbiAgfVxuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIHdlYXRoZXIgZm9yIHRoZSBsb2NhdGlvbi5cbiAgLy8gVXNlcyBleHBvcnRlZCBmdW5jdGlvbnMgZnJvbSBmb2Nhc3QuanNcbiAgYXN5bmMgdXBkYXRlQ2l0eShjaXR5KSB7XG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCB0aGlzLmdldENpdHkoY2l0eSlcbiAgICBjb25zdCBmb3JjYXN0ID0gYXdhaXQgdGhpcy5nZXRGb3JjYXN0KGNpdHkpXG4gICAgY29uc3QgdGltZVpvbmUgPSBhd2FpdCB0aGlzLmdldFRpbWVab25lKFxuICAgICAgY2l0eURhdGEuY29vcmQubGF0LFxuICAgICAgY2l0eURhdGEuY29vcmQubG9uLFxuICAgICAgY2l0eURhdGEudGltZXpvbmVcbiAgICApXG4gICAgY29uc3QgdXYgPSBhd2FpdCB0aGlzLmdldFV2KGNpdHlEYXRhLmNvb3JkLmxhdCwgY2l0eURhdGEuY29vcmQubG9uKVxuICAgIHJldHVybiB7XG4gICAgICBjaXR5RGF0YSxcbiAgICAgIGZvcmNhc3QsXG4gICAgICB0aW1lWm9uZSxcbiAgICAgIHV2LFxuICAgIH1cbiAgfVxuICAvLyBHZXQgY2l0eSB3ZWF0aGVyXG4gIGFzeW5jIGdldENpdHkoY2l0eSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYD9xPSR7Y2l0eX0mYXBwaWQ9JHt0aGlzLmtleX0mdW5pdHM9bWV0cmljYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5jaXR5VVJJICsgcXVlcnkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGRhdGFbMF0gV2l0aCBBY2N1V2VhdGhlclxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvLyBHZXQgY2l0eSBmb3JjYXN0XG4gIGFzeW5jIGdldEZvcmNhc3QoY2l0eSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYD9xPSR7Y2l0eX0mYXBwaWQ9JHt0aGlzLmtleX0mdW5pdHM9bWV0cmljYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5mb3JjYXN0VVJJICsgcXVlcnkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGRhdGFbMF0gV2l0aCBBY2N1V2VhdGhlclxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvLyBHZXQgY2l0eSBVVlxuICBhc3luYyBnZXRVdihsYXQsIGxvbikge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYD9hcHBpZD0ke3RoaXMua2V5fSZsYXQ9JHtsYXR9Jmxvbj0ke2xvbn1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnV2VVJJICsgcXVlcnkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxhdClcbiAgICAgIGNvbnNvbGUubG9nKGxvbilcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gZGF0YVswXSBXaXRoIEFjY3VXZWF0aGVyXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8vIEdldCBUaW1lWm9uZVxuICBhc3luYyBnZXRUaW1lWm9uZShsYXQsIGxvbiwgdGltZXpvbmUpIHtcbiAgICBjb25zdCBxdWVyeSA9IGA/bG9jYXRpb249JHtsYXR9LCR7bG9ufSZ0aW1lc3RhbXA9JHt0aW1lem9uZX0ma2V5PSR7dGhpcy5nS2V5fWBcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy50aW1lWm9uZVVSSSArIHF1ZXJ5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhsYXQpXG4gICAgICBjb25zb2xlLmxvZyhsb24pXG4gICAgICBjb25zb2xlLmxvZyh0aW1lem9uZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmNhc3RcbiIsImNsYXNzIFNhdmVkQ2l0aWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaXRpZXMgPSBkYi5jb2xsZWN0aW9uKCdjaXRpZXMnKVxuICAgIHRoaXMudW5zdWJcbiAgfVxuICBhc3luYyBhZGRDaXR5KHBsYWNlKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGNpdHkgPSB7XG4gICAgICBsb2NhdGlvbjogcGxhY2UsXG4gICAgICBjcmVhdGVkX2F0OiBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5vdyksXG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jaXRpZXMuYWRkKGNpdHkpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cbiAgb2ZmbGluZUNpdHkoY2l0eSkge1xuICAgIC8vIHNhdmUgdG8gbG9jYWxTdG9yYWdlIGZvciBidWlsZCBpZiBvZmZsaW5lLlxuICAgIC8vIENsZWFyIHByZXZpb3VzbHkgc2F2ZWQgZGF0YSBiZWZvcmUgc2F2aW5nIG5ld1xuICAgIC8vIHRvIHNhdmUgc3RvcmFnZS5cbiAgICBsZXQgY2l0eUxpbWl0ID0gNVxuICAgIGxldCBjaXRpZXMgPSBbXVxuICAgIGlmIChjaXRpZXMubGVuZ3RoID09PSBjaXR5TGltaXQpIHtcbiAgICAgIGxvY2FsRm9yYWdlLmNsZWFyKClcbiAgICAgIGNpdGllcy5zcGxpY2UoMCwgY2l0aWVzLmxlbmd0aClcbiAgICB9XG4gICAgY2l0aWVzLnB1c2goe1xuICAgICAgZm9yY2FzdDogY2l0eSxcbiAgICB9KVxuICAgIGxvY2FsRm9yYWdlLnNldEl0ZW0oJ2NpdGllcycsIGNpdGllcylcbiAgfVxuICBnZXRDaXRpZXMoY2IpIHtcbiAgICB0aGlzLnVuc3ViID0gdGhpcy5jaXRpZXMub3JkZXJCeSgnY3JlYXRlZF9hdCcpLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICBzbmFwc2hvdC5kb2NDaGFuZ2VzKCkuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2FkZGVkJykge1xuICAgICAgICAgIGNiKGNoYW5nZS5kb2MuZGF0YSgpLCBjaGFuZ2UuZG9jLmlkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgLy8gYXN5bmMgZ2V0Q2l0eVN0b3JhZ2UoKSB7XG4gIC8vICAgY29uc3Qgc2F2ZWRDaXR5ID0gYXdhaXQgbG9jYWxGb3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykgLy8gbG9jYWxGb3JhZ2VcblxuICAvLyAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yLCBkaXNwbGF5IG91ciBvd24gZXJyb3IuXG4gIC8vICAgaWYgKHNhdmVkQ2l0eSA9PT0gbnVsbCkge1xuICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IGNpdGllcyBvciBubyBjaXRpZXMgc2F2ZWQhXCIpXG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIHNhdmVkQ2l0eVxuICAvLyB9XG59XG5cbmV4cG9ydCB7IFNhdmVkQ2l0aWVzIGFzIGRlZmF1bHQgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==