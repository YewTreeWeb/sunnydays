(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["savedcities"],{

/***/ "fgBT":
/*!***********************************************!*\
  !*** ./website/src/js/modules/savedcities.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forcast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forcast */ "eurM");
/* harmony import */ var _savecity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savecity */ "kk/T");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/utc */ "Ds8A");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "E4hX");
// Import weather api
 // Import saving weather

 // Import dayJS for date, time formatting



dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_3___default.a);
 // Call new forcast class

var forcast = new _forcast__WEBPACK_IMPORTED_MODULE_0__["default"](); // Call saved cities class

var savedCities = new _savecity__WEBPACK_IMPORTED_MODULE_1__["default"](); // Getting weather

var card = document.querySelector('.card');
var content = document.querySelector('.columns'); // Get any cities saved to localForage
// const savedCities = async () => {
//   const savedCity = await localForage.getItem('cities') // localForage
//   // If there is an error, display our own error.
//   if (savedCity === null) {
//     throw new Error("Can't get cities or no cities saved!")
//   }
//   return savedCity
// }
// Output all data to DOM.

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


  var time = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format('H');
  var dayTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(new Date().toLocaleString('en-UK', {
    timeZone: timeZone.timeZoneId
  })).format('dddd - h:mmA');
  var date = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(new Date().toLocaleString('en-UK', {
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


  content.innerHTML += "\n    <div class=\"column is-4 cards__block\">\n        <div class=\"card card--city\">\n            <header class=\"card__header .columns\">\n            <div class=\"column\">\n                <h2>".concat(cityData.main.temp, "<sup>&deg;</sup></h2>\n                <h3>").concat(cityData.name, ", ").concat(cityData.sys.country, "</h3>\n                <time datetime=\"").concat(date, "\">").concat(dayTime, "</time>\n            </div>\n            <div class=\"column\">").concat(dailyForcast(), "</div>\n            </header>\n            <p>").concat(cityData.weather[0].description, "</p>\n            <hr>\n            <footer class=\"card__footer\">\n            <div class=\"columns card__details\">\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Wind</p>\n                <p>").concat(cityData.wind.speed, "mph</p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>High</p>\n                <p>").concat(cityData.main.temp_max, "<sup>&deg;</sup></p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                ").concat(precipitation(cityData.weather[0].main), "\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Humidity</p>\n                <p>").concat(cityData.main.humidity, "&percnt;</p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>UV</p>\n                <p>").concat(uvIndex(uv.value), "</p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Sunrise</p>\n                <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.unix(cityData.sys.sunrise).format('h:mA'), "</time></p>\n                </div>\n                <div class=\"column card__detail\">\n                <img src=\"\" alt=\"\">\n                <p>Sunset</p>\n                <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.unix(cityData.sys.sunset).format('h:mA'), "</time></p>\n                </div>\n            </div>\n            </footer>\n        </div>\n    </div>\n  "); // Add time of day class to card.

  card.classList.add("card--".concat(cityDayNight)); // Add class for weather image.
  // const cardImg = document.querySelector('.card__image img')
  // if (typeof cardImg !== 'undefined' || cardImg !== null) {
  //   card
  //     .querySelector('.card__image img')
  //     .classList.add(`${cityData.weather[0].main}`)
  // }
};

Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["ready"])(function () {
  /* Do things after DOM has fully loaded */
  if (true) {
    console.log('DOM loaded!');
  }

  if (navigator.onLine) {
    // Get firebase cities
    savedCities.getCities(function (city, id) {
      if (true) {
        console.log(city, id);
      }

      forcast.updateCity(city).then(function (data) {
        if (true) {
          console.log(data);
        }

        updateUI(data);
      })["catch"](function (err) {
        return console.error(err);
      });
    }); // } else {
    // savedCities
    //   .getCityStorage()
    //   .then((cities) => {
    //     // update ui with city
    //     cities.forEach((city) => {
    //       forcast
    //         .updateCity(city.location)
    //         .then((data) => {
    //           if (process.env.NODE_ENV !== 'production') {
    //             console.log(data)
    //           }
    //           updateUI(data)
    //         })
    //         .catch((err) => console.error(err))
    //     })
    //   })
    //   .catch((err) => console.error(err.message))
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL3NhdmVkY2l0aWVzLmpzIl0sIm5hbWVzIjpbImRheWpzIiwiZXh0ZW5kIiwidXRjIiwiZm9yY2FzdCIsIkZvcmNhc3QiLCJzYXZlZENpdGllcyIsIlNhdmVkQ2l0aWVzIiwiY2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJ1cGRhdGVVSSIsImRhdGEiLCJjaXR5RGF0YSIsInRpbWVab25lIiwidXYiLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsInByZWNpcGl0YXRpb24iLCJ0eXBlIiwicmFpblR5cGUiLCJyYWluQW1vdW50IiwicmFpbiIsInNub3ciLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJ1dkluZGV4IiwicmF0aW5nIiwidXZSYXRpbmciLCJ0aW1lIiwiRGF0ZSIsImZvcm1hdCIsImRheVRpbWUiLCJ0b0xvY2FsZVN0cmluZyIsInRpbWVab25lSWQiLCJkYXRlIiwiZGFpbHlGb3JjYXN0IiwiZm9yY2FzdHMiLCJjaXR5RGF5TmlnaHQiLCJpbm5lckhUTUwiLCJtYWluIiwidGVtcCIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5Iiwid2luZCIsInNwZWVkIiwidGVtcF9tYXgiLCJodW1pZGl0eSIsInZhbHVlIiwidW5peCIsInN1bnJpc2UiLCJzdW5zZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFkeSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImdldENpdGllcyIsImNpdHkiLCJpZCIsInVwZGF0ZUNpdHkiLCJ0aGVuIiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsdURBQWI7Q0FHQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsSUFBSUMsZ0RBQUosRUFBaEIsQyxDQUVB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QyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0Q7O0FBQ0QsTUFBSXVDLFNBQVMsQ0FBQ0MsTUFBZCxFQUFzQjtBQUNwQjtBQUNBckQsZUFBVyxDQUFDc0QsU0FBWixDQUFzQixVQUFDQyxJQUFELEVBQU9DLEVBQVAsRUFBYztBQUNsQyxVQUFJN0MsSUFBSixFQUEyQztBQUN6Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVkwQyxJQUFaLEVBQWtCQyxFQUFsQjtBQUNEOztBQUNEMUQsYUFBTyxDQUNKMkQsVUFESCxDQUNjRixJQURkLEVBRUdHLElBRkgsQ0FFUSxVQUFDbkQsSUFBRCxFQUFVO0FBQ2QsWUFBSUksSUFBSixFQUEyQztBQUN6Q0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0FBQ0Q7O0FBQ0RELGdCQUFRLENBQUNDLElBQUQsQ0FBUjtBQUNELE9BUEgsV0FRUyxVQUFDb0QsR0FBRDtBQUFBLGVBQVMvQyxPQUFPLENBQUNnRCxLQUFSLENBQWNELEdBQWQsQ0FBVDtBQUFBLE9BUlQ7QUFTRCxLQWJELEVBRm9CLENBZ0JwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLENBeENJLENBQUwsQyIsImZpbGUiOiJzYXZlZGNpdGllcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgd2VhdGhlciBhcGlcbmltcG9ydCBGb3JjYXN0IGZyb20gJy4vZm9yY2FzdCdcbi8vIEltcG9ydCBzYXZpbmcgd2VhdGhlclxuaW1wb3J0IFNhdmVkQ2l0aWVzIGZyb20gJy4vc2F2ZWNpdHknXG4vLyBJbXBvcnQgZGF5SlMgZm9yIGRhdGUsIHRpbWUgZm9ybWF0dGluZ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IHV0YyBmcm9tICdkYXlqcy9wbHVnaW4vdXRjJ1xuZGF5anMuZXh0ZW5kKHV0YylcbmltcG9ydCB7IHJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzJ1xuXG4vLyBDYWxsIG5ldyBmb3JjYXN0IGNsYXNzXG5jb25zdCBmb3JjYXN0ID0gbmV3IEZvcmNhc3QoKVxuXG4vLyBDYWxsIHNhdmVkIGNpdGllcyBjbGFzc1xuY29uc3Qgc2F2ZWRDaXRpZXMgPSBuZXcgU2F2ZWRDaXRpZXMoKVxuXG4vLyBHZXR0aW5nIHdlYXRoZXJcbmNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbHVtbnMnKVxuXG4vLyBHZXQgYW55IGNpdGllcyBzYXZlZCB0byBsb2NhbEZvcmFnZVxuLy8gY29uc3Qgc2F2ZWRDaXRpZXMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IHNhdmVkQ2l0eSA9IGF3YWl0IGxvY2FsRm9yYWdlLmdldEl0ZW0oJ2NpdGllcycpIC8vIGxvY2FsRm9yYWdlXG5cbi8vICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGRpc3BsYXkgb3VyIG93biBlcnJvci5cbi8vICAgaWYgKHNhdmVkQ2l0eSA9PT0gbnVsbCkge1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCBjaXRpZXMgb3Igbm8gY2l0aWVzIHNhdmVkIVwiKVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHNhdmVkQ2l0eVxuLy8gfVxuXG4vLyBPdXRwdXQgYWxsIGRhdGEgdG8gRE9NLlxuY29uc3QgdXBkYXRlVUkgPSAoZGF0YSkgPT4ge1xuICAvLyBkZXN0cnVjdHVyZSBwcm9wZXJ0aWVzXG4gIC8vICAgY29uc3QgeyBjaXR5RGF0YSwgd2VhdGhlciB9ID0gZGF0YVxuICBjb25zdCB7IGNpdHlEYXRhLCBmb3JjYXN0LCB0aW1lWm9uZSwgdXYgfSA9IGRhdGFcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKGNpdHlEYXRhKVxuICAgIGNvbnNvbGUubG9nKGZvcmNhc3QpXG4gICAgY29uc29sZS5sb2codGltZVpvbmUpXG4gICAgY29uc29sZS5sb2codXYpXG4gIH1cblxuICAvLyB1cGRhdGUgdGVtcGxhdGVcblxuICAvLy8gU2V0IHRoZSB0eXBlIG9mIHByZWNpcGl0YXRpb24gZXhwZWN0ZWQuXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSAodHlwZSkgPT4ge1xuICAgIGxldCByYWluVHlwZSA9IG51bGxcbiAgICBsZXQgcmFpbkFtb3VudCA9IG51bGxcbiAgICBpZiAodHlwZSA9PT0gJ1JhaW4nIHx8IHR5cGUgPT09ICdTbm93Jykge1xuICAgICAgcmFpblR5cGUgPSB0eXBlXG4gICAgICBpZiAoY2l0eURhdGEucmFpbikge1xuICAgICAgICByYWluQW1vdW50ID0gY2l0eURhdGEucmFpblsnMWgnXVxuICAgICAgICByYWluQW1vdW50ID0gcmFpbkFtb3VudCArICdtbSdcbiAgICAgIH0gZWxzZSBpZiAoY2l0eURhdGEuc25vdykge1xuICAgICAgICByYWluQW1vdW50ID0gY2l0eURhdGEuc25vd1snMWgnXVxuICAgICAgICByYWluQW1vdW50ID0gcmFpbkFtb3VudCArICdtbSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhaW5BbW91bnQgPSBjaXR5RGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhaW5UeXBlID0gJ1JhaW4nXG4gICAgICByYWluQW1vdW50ID0gJzBtbSdcbiAgICB9XG5cbiAgICByZXR1cm4gYDxwPiR7cmFpblR5cGV9PC9wPjxwPiR7cmFpbkFtb3VudH08L3A+YFxuICB9XG5cbiAgLy8vIFNldCBVViBpbmRleFxuICBjb25zdCB1dkluZGV4ID0gKHJhdGluZykgPT4ge1xuICAgIGxldCB1dlJhdGluZ1xuICAgIGlmIChyYXRpbmcgPj0gMyAmJiByYXRpbmcgPCA2KSB7XG4gICAgICB1dlJhdGluZyA9ICdNb2RlcmF0ZSdcbiAgICB9IGVsc2UgaWYgKHJhdGluZyA+PSA2ICYmIHJhdGluZyA8IDgpIHtcbiAgICAgIHV2UmF0aW5nID0gJ0hpZ2gnXG4gICAgfSBlbHNlIGlmIChyYXRpbmcgPj0gOCAmJiByYXRpbmcgPCAxMSkge1xuICAgICAgdXZSYXRpbmcgPSAnVmVyeSBIaWdoJ1xuICAgIH0gZWxzZSBpZiAocmF0aW5nID4gMTApIHtcbiAgICAgIHV2UmF0aW5nID0gJ0V4dHJlbWUnXG4gICAgfSBlbHNlIHtcbiAgICAgIHV2UmF0aW5nID0gJ0xvdydcbiAgICB9XG5cbiAgICByZXR1cm4gdXZSYXRpbmdcbiAgfVxuXG4gIC8vLyBHZXQgdGhlIGRhdGUgYW5kIHRpbWUgb2YgdGhlIGZvcmNhc3QuXG4gIGNvbnN0IHRpbWUgPSBkYXlqcyhuZXcgRGF0ZSgpKS5mb3JtYXQoJ0gnKVxuICBjb25zdCBkYXlUaW1lID0gZGF5anMoXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVUsnLCB7IHRpbWVab25lOiB0aW1lWm9uZS50aW1lWm9uZUlkIH0pXG4gICkuZm9ybWF0KCdkZGRkIC0gaDptbUEnKVxuICBjb25zdCBkYXRlID0gZGF5anMoXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVUsnLCB7IHRpbWVab25lOiB0aW1lWm9uZS50aW1lWm9uZUlkIH0pXG4gICkuZm9ybWF0KCdZWVlZLU1NLUQnKVxuXG4gIC8vLyBHZW5lcmF0aW5nIDUgZGF5IGZvcmNhc3RcbiAgLy8gdG9kbyBDaGVjayB3aXRoIGN1cnJlbnQgdGltZSBvZiBzZWFyY2ggYW5kIG1hdGNoIHRoZSBmb3JjYXN0IGZvciB0aGUgbmV4dCBmaXZlIGRheXMgYXQgdGhlIHNhbWUgbmFtZS5cbiAgY29uc3QgZGFpbHlGb3JjYXN0ID0gKCkgPT4ge1xuICAgIGxldCBmb3JjYXN0cyA9ICcnXG4gICAgZm9yY2FzdHMgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9yY2FzdHNfX2RheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGgzPkRheTwvaDM+XG4gICAgICAgICAgICAgIDxwPldlYXRoZXI8L3A+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgIDxwPldpbmQ8L3A+XG4gICAgICAgICAgICAgIDxwPjJtcGg8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICA8cD5IaWdoPC9wPlxuICAgICAgICAgICAgICA8cD4zMDxzdXA+JmRlZzs8L3N1cD48L3A+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgIDxwPlJhaW48L3A+XG4gICAgICAgICAgICAgIDxwPjAlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTZcIj5cbiAgICAgICAgICAgICAgPGgzPlRlbXA8c3VwPiZkZWc7PC9zdXA+PC9oMz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICBjb25zb2xlLmxvZyhmb3JjYXN0cylcbiAgICByZXR1cm4gZm9yY2FzdHNcbiAgfVxuXG4gIC8vLyBTZXQgY2xhc3MgZm9yIHRpbWUgb2YgZGF5LlxuICBsZXQgY2l0eURheU5pZ2h0XG4gIGlmICgodGltZSA+PSAyMSAmJiB0aW1lIDw9IDIzKSB8fCAodGltZSA+PSAwICYmIHRpbWUgPCA1KSkge1xuICAgIGNpdHlEYXlOaWdodCA9ICduaWdodCdcbiAgfSBlbHNlIGlmICh0aW1lID49IDUgJiYgdGltZSA8PSA3KSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ3N1bnJpc2UnXG4gIH0gZWxzZSBpZiAodGltZSA+IDcgJiYgdGltZSA8PSAxOCkge1xuICAgIGNpdHlEYXlOaWdodCA9ICdkYXknXG4gIH0gZWxzZSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ3N1bnNldCdcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGltZX0gPSAke2NpdHlEYXlOaWdodH1gKVxuICB9XG5cbiAgLy8vIEdlbmVyYXRlIEhUTUwuXG4gIGNvbnRlbnQuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTQgY2FyZHNfX2Jsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtLWNpdHlcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkX19oZWFkZXIgLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aDI+JHtjaXR5RGF0YS5tYWluLnRlbXB9PHN1cD4mZGVnOzwvc3VwPjwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPiR7Y2l0eURhdGEubmFtZX0sICR7Y2l0eURhdGEuc3lzLmNvdW50cnl9PC9oMz5cbiAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7ZGF0ZX1cIj4ke2RheVRpbWV9PC90aW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+JHtkYWlseUZvcmNhc3QoKX08L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPHA+JHtjaXR5RGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJjYXJkX19mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGNhcmRfX2RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHA+V2luZDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke2NpdHlEYXRhLndpbmQuc3BlZWR9bXBoPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cD5IaWdoPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7Y2l0eURhdGEubWFpbi50ZW1wX21heH08c3VwPiZkZWc7PC9zdXA+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAke3ByZWNpcGl0YXRpb24oY2l0eURhdGEud2VhdGhlclswXS5tYWluKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHA+SHVtaWRpdHk8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtjaXR5RGF0YS5tYWluLmh1bWlkaXR5fSZwZXJjbnQ7PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cD5VVjwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3V2SW5kZXgodXYudmFsdWUpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHA+U3VucmlzZTwvcD5cbiAgICAgICAgICAgICAgICA8cD48dGltZSBkYXRldGltZT1cIiR7ZGF0ZX1cIj4ke2RheWpzXG4gICAgLnVuaXgoY2l0eURhdGEuc3lzLnN1bnJpc2UpXG4gICAgLmZvcm1hdCgnaDptQScpfTwvdGltZT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwPlN1bnNldDwvcD5cbiAgICAgICAgICAgICAgICA8cD48dGltZSBkYXRldGltZT1cIiR7ZGF0ZX1cIj4ke2RheWpzXG4gICAgLnVuaXgoY2l0eURhdGEuc3lzLnN1bnNldClcbiAgICAuZm9ybWF0KCdoOm1BJyl9PC90aW1lPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG5cbiAgLy8gQWRkIHRpbWUgb2YgZGF5IGNsYXNzIHRvIGNhcmQuXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChgY2FyZC0tJHtjaXR5RGF5TmlnaHR9YClcblxuICAvLyBBZGQgY2xhc3MgZm9yIHdlYXRoZXIgaW1hZ2UuXG4gIC8vIGNvbnN0IGNhcmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2UgaW1nJylcbiAgLy8gaWYgKHR5cGVvZiBjYXJkSW1nICE9PSAndW5kZWZpbmVkJyB8fCBjYXJkSW1nICE9PSBudWxsKSB7XG4gIC8vICAgY2FyZFxuICAvLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZSBpbWcnKVxuICAvLyAgICAgLmNsYXNzTGlzdC5hZGQoYCR7Y2l0eURhdGEud2VhdGhlclswXS5tYWlufWApXG4gIC8vIH1cbn1cblxucmVhZHkoKCkgPT4ge1xuICAvKiBEbyB0aGluZ3MgYWZ0ZXIgRE9NIGhhcyBmdWxseSBsb2FkZWQgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmxvZygnRE9NIGxvYWRlZCEnKVxuICB9XG4gIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgLy8gR2V0IGZpcmViYXNlIGNpdGllc1xuICAgIHNhdmVkQ2l0aWVzLmdldENpdGllcygoY2l0eSwgaWQpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHksIGlkKVxuICAgICAgfVxuICAgICAgZm9yY2FzdFxuICAgICAgICAudXBkYXRlQ2l0eShjaXR5KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVVSShkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuICAgIH0pXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyBzYXZlZENpdGllc1xuICAgIC8vICAgLmdldENpdHlTdG9yYWdlKClcbiAgICAvLyAgIC50aGVuKChjaXRpZXMpID0+IHtcbiAgICAvLyAgICAgLy8gdXBkYXRlIHVpIHdpdGggY2l0eVxuICAgIC8vICAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xuICAgIC8vICAgICAgIGZvcmNhc3RcbiAgICAvLyAgICAgICAgIC51cGRhdGVDaXR5KGNpdHkubG9jYXRpb24pXG4gICAgLy8gICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgdXBkYXRlVUkoZGF0YSlcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSlcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKSlcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=