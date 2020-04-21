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
    }
  }, {
    key: "getCityStorage",
    value: function () {
      var _getCityStorage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var savedCity;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return localForage.getItem('cities');

              case 2:
                savedCity = _context2.sent;

                if (!(savedCity === null)) {
                  _context2.next = 5;
                  break;
                }

                throw new Error("Can't get cities or no cities saved!");

              case 5:
                return _context2.abrupt("return", savedCity);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getCityStorage() {
        return _getCityStorage.apply(this, arguments);
      }

      return getCityStorage;
    }()
  }]);

  return SavedCities;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! localforage */ "oAJy")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2ZvcmNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy9zYXZlY2l0eS5qcyJdLCJuYW1lcyI6WyJGb3JjYXN0Iiwia2V5IiwiZ0tleSIsImNpdHlVUkkiLCJmb3JjYXN0VVJJIiwidGltZVpvbmVVUkkiLCJ1dlVSSSIsImNpdHkiLCJnZXRDaXR5IiwiY2l0eURhdGEiLCJnZXRGb3JjYXN0IiwiZm9yY2FzdCIsImdldFRpbWVab25lIiwiY29vcmQiLCJsYXQiLCJsb24iLCJ0aW1lem9uZSIsInRpbWVab25lIiwiZ2V0VXYiLCJ1diIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJTYXZlZENpdGllcyIsImNpdGllcyIsImRiIiwiY29sbGVjdGlvbiIsInVuc3ViIiwicGxhY2UiLCJub3ciLCJEYXRlIiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJUaW1lc3RhbXAiLCJmcm9tRGF0ZSIsImFkZCIsImNpdHlMaW1pdCIsImxlbmd0aCIsImxvY2FsRm9yYWdlIiwiY2xlYXIiLCJzcGxpY2UiLCJwdXNoIiwic2V0SXRlbSIsImNiIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImRvY0NoYW5nZXMiLCJmb3JFYWNoIiwiY2hhbmdlIiwidHlwZSIsImRvYyIsImlkIiwiZ2V0SXRlbSIsInNhdmVkQ2l0eSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLQyxHQUFMLEdBQVcsa0NBQVgsQ0FGWSxDQUdaOztBQUNBLFNBQUtDLElBQUwsR0FBWSx5Q0FBWixDQUpZLENBS1o7O0FBQ0EsU0FBS0MsT0FBTCxHQUFlLGlEQUFmLENBTlksQ0FP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QyxJQUFYLEVBQUQsRUFBb0JnQyxNQUFNLENBQUNFLEdBQVAsQ0FBV0MsRUFBL0IsQ0FBRjtBQUNEO0FBQ0YsU0FKRDtBQUtELE9BTlksQ0FBYjtBQU9EOzs7Ozs7Ozs7Ozt1QkFFeUJkLFdBQVcsQ0FBQ2UsT0FBWixDQUFvQixRQUFwQixDOzs7QUFBbEJDLHlCOztzQkFHRkEsU0FBUyxLQUFLLEk7Ozs7O3NCQUNWLElBQUlDLEtBQUosQ0FBVSxzQ0FBVixDOzs7a0RBR0RELFMiLCJmaWxlIjoibmV3Y2l0eX5zYXZlZGNpdGllcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JjYXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQWRkIEFQSSBrZXkgZnJvbSBPcGVuV2VhdGhlci5cbiAgICB0aGlzLmtleSA9ICczMTJmYzczM2QzMDcwYmMyN2ZlZjM2YjhhNThmYTAzMCdcbiAgICAvLyBBZGQgQVBJIGtleSBmb3JtIEdvb2dsZSBUaW1lWm9uZVxuICAgIHRoaXMuZ0tleSA9ICdBSXphU3lEYTZxRjQzUUZET3hKemlwS0tFTXFkeDJ4dHMwQjE1QTgnXG4gICAgLy8gR2V0IGNpdHkgd2VhdGhlclxuICAgIHRoaXMuY2l0eVVSSSA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcidcbiAgICAvLyBHZXQgY2l0eSBmb3JjYXN0XG4gICAgdGhpcy5mb3JjYXN0VVJJID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdCdcbiAgICAvLyBHZXQgVGltZVpvbmVcbiAgICB0aGlzLnRpbWVab25lVVJJID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS90aW1lem9uZS9qc29uJ1xuICAgIC8vIFVWXG4gICAgdGhpcy51dlVSSSA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvdXZpJ1xuICB9XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgd2VhdGhlciBmb3IgdGhlIGxvY2F0aW9uLlxuICAvLyBVc2VzIGV4cG9ydGVkIGZ1bmN0aW9ucyBmcm9tIGZvY2FzdC5qc1xuICBhc3luYyB1cGRhdGVDaXR5KGNpdHkpIHtcbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHRoaXMuZ2V0Q2l0eShjaXR5KVxuICAgIGNvbnN0IGZvcmNhc3QgPSBhd2FpdCB0aGlzLmdldEZvcmNhc3QoY2l0eSlcbiAgICBjb25zdCB0aW1lWm9uZSA9IGF3YWl0IHRoaXMuZ2V0VGltZVpvbmUoXG4gICAgICBjaXR5RGF0YS5jb29yZC5sYXQsXG4gICAgICBjaXR5RGF0YS5jb29yZC5sb24sXG4gICAgICBjaXR5RGF0YS50aW1lem9uZVxuICAgIClcbiAgICBjb25zdCB1diA9IGF3YWl0IHRoaXMuZ2V0VXYoY2l0eURhdGEuY29vcmQubGF0LCBjaXR5RGF0YS5jb29yZC5sb24pXG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHlEYXRhLFxuICAgICAgZm9yY2FzdCxcbiAgICAgIHRpbWVab25lLFxuICAgICAgdXYsXG4gICAgfVxuICB9XG4gIC8vIEdldCBjaXR5IHdlYXRoZXJcbiAgYXN5bmMgZ2V0Q2l0eShjaXR5KSB7XG4gICAgY29uc3QgcXVlcnkgPSBgP3E9JHtjaXR5fSZhcHBpZD0ke3RoaXMua2V5fSZ1bml0cz1tZXRyaWNgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmNpdHlVUkkgKyBxdWVyeSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coY2l0eSlcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gZGF0YVswXSBXaXRoIEFjY3VXZWF0aGVyXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8vIEdldCBjaXR5IGZvcmNhc3RcbiAgYXN5bmMgZ2V0Rm9yY2FzdChjaXR5KSB7XG4gICAgY29uc3QgcXVlcnkgPSBgP3E9JHtjaXR5fSZhcHBpZD0ke3RoaXMua2V5fSZ1bml0cz1tZXRyaWNgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmZvcmNhc3RVUkkgKyBxdWVyeSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coY2l0eSlcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gZGF0YVswXSBXaXRoIEFjY3VXZWF0aGVyXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8vIEdldCBjaXR5IFVWXG4gIGFzeW5jIGdldFV2KGxhdCwgbG9uKSB7XG4gICAgY29uc3QgcXVlcnkgPSBgP2FwcGlkPSR7dGhpcy5rZXl9JmxhdD0ke2xhdH0mbG9uPSR7bG9ufWBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXZVUkkgKyBxdWVyeSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2cobGF0KVxuICAgICAgY29uc29sZS5sb2cobG9uKVxuICAgIH1cblxuICAgIC8vIHJldHVybiBkYXRhWzBdIFdpdGggQWNjdVdlYXRoZXJcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLy8gR2V0IFRpbWVab25lXG4gIGFzeW5jIGdldFRpbWVab25lKGxhdCwgbG9uLCB0aW1lem9uZSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYD9sb2NhdGlvbj0ke2xhdH0sJHtsb259JnRpbWVzdGFtcD0ke3RpbWV6b25lfSZrZXk9JHt0aGlzLmdLZXl9YFxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnRpbWVab25lVVJJICsgcXVlcnkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxhdClcbiAgICAgIGNvbnNvbGUubG9nKGxvbilcbiAgICAgIGNvbnNvbGUubG9nKHRpbWV6b25lKVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yY2FzdFxuIiwiY2xhc3MgU2F2ZWRDaXRpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdGllcyA9IGRiLmNvbGxlY3Rpb24oJ2NpdGllcycpXG4gICAgdGhpcy51bnN1YlxuICB9XG4gIGFzeW5jIGFkZENpdHkocGxhY2UpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgY2l0eSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwbGFjZSxcbiAgICAgIGNyZWF0ZWRfYXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5UaW1lc3RhbXAuZnJvbURhdGUobm93KSxcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNpdGllcy5hZGQoY2l0eSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuICBvZmZsaW5lQ2l0eShjaXR5KSB7XG4gICAgLy8gc2F2ZSB0byBsb2NhbFN0b3JhZ2UgZm9yIGJ1aWxkIGlmIG9mZmxpbmUuXG4gICAgLy8gQ2xlYXIgcHJldmlvdXNseSBzYXZlZCBkYXRhIGJlZm9yZSBzYXZpbmcgbmV3XG4gICAgLy8gdG8gc2F2ZSBzdG9yYWdlLlxuICAgIGxldCBjaXR5TGltaXQgPSA1XG4gICAgbGV0IGNpdGllcyA9IFtdXG4gICAgaWYgKGNpdGllcy5sZW5ndGggPT09IGNpdHlMaW1pdCkge1xuICAgICAgbG9jYWxGb3JhZ2UuY2xlYXIoKVxuICAgICAgY2l0aWVzLnNwbGljZSgwLCBjaXRpZXMubGVuZ3RoKVxuICAgIH1cbiAgICBjaXRpZXMucHVzaCh7XG4gICAgICBmb3JjYXN0OiBjaXR5LFxuICAgIH0pXG4gICAgbG9jYWxGb3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgY2l0aWVzKVxuICB9XG4gIGdldENpdGllcyhjYikge1xuICAgIHRoaXMudW5zdWIgPSB0aGlzLmNpdGllcy5vcmRlckJ5KCdjcmVhdGVkX2F0Jykub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcbiAgICAgIHNuYXBzaG90LmRvY0NoYW5nZXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZS50eXBlID09PSAnYWRkZWQnKSB7XG4gICAgICAgICAgY2IoY2hhbmdlLmRvYy5kYXRhKCksIGNoYW5nZS5kb2MuaWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBhc3luYyBnZXRDaXR5U3RvcmFnZSgpIHtcbiAgICBjb25zdCBzYXZlZENpdHkgPSBhd2FpdCBsb2NhbEZvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSAvLyBsb2NhbEZvcmFnZVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGRpc3BsYXkgb3VyIG93biBlcnJvci5cbiAgICBpZiAoc2F2ZWRDaXR5ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBnZXQgY2l0aWVzIG9yIG5vIGNpdGllcyBzYXZlZCFcIilcbiAgICB9XG5cbiAgICByZXR1cm4gc2F2ZWRDaXR5XG4gIH1cbn1cblxuZXhwb3J0IHsgU2F2ZWRDaXRpZXMgYXMgZGVmYXVsdCB9XG4iXSwic291cmNlUm9vdCI6IiJ9