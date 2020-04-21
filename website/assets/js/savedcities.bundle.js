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
    });
  } else {
    savedCities.getCityStorage().then(function (cities) {
      // update ui with city
      cities.forEach(function (city) {
        forcast.updateCity(city.location).then(function (data) {
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
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL3NhdmVkY2l0aWVzLmpzIl0sIm5hbWVzIjpbImRheWpzIiwiZXh0ZW5kIiwidXRjIiwiZm9yY2FzdCIsIkZvcmNhc3QiLCJzYXZlZENpdGllcyIsIlNhdmVkQ2l0aWVzIiwiY2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJ1cGRhdGVVSSIsImRhdGEiLCJjaXR5RGF0YSIsInRpbWVab25lIiwidXYiLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsInByZWNpcGl0YXRpb24iLCJ0eXBlIiwicmFpblR5cGUiLCJyYWluQW1vdW50IiwicmFpbiIsInNub3ciLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJ1dkluZGV4IiwicmF0aW5nIiwidXZSYXRpbmciLCJ0aW1lIiwiRGF0ZSIsImZvcm1hdCIsImRheVRpbWUiLCJ0b0xvY2FsZVN0cmluZyIsInRpbWVab25lSWQiLCJkYXRlIiwiZGFpbHlGb3JjYXN0IiwiZm9yY2FzdHMiLCJjaXR5RGF5TmlnaHQiLCJpbm5lckhUTUwiLCJtYWluIiwidGVtcCIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5Iiwid2luZCIsInNwZWVkIiwidGVtcF9tYXgiLCJodW1pZGl0eSIsInZhbHVlIiwidW5peCIsInN1bnJpc2UiLCJzdW5zZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFkeSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImdldENpdGllcyIsImNpdHkiLCJpZCIsInVwZGF0ZUNpdHkiLCJ0aGVuIiwiZXJyIiwiZXJyb3IiLCJnZXRDaXR5U3RvcmFnZSIsImNpdGllcyIsImZvckVhY2giLCJsb2NhdGlvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMs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QVZEO0FBV0QsS0FmSCxXQWdCUyxVQUFDQSxHQUFEO0FBQUEsYUFBUy9DLE9BQU8sQ0FBQ2dELEtBQVIsQ0FBY0QsR0FBRyxDQUFDTSxPQUFsQixDQUFUO0FBQUEsS0FoQlQ7QUFpQkQ7QUFDRixDQXhDSSxDQUFMLEMiLCJmaWxlIjoic2F2ZWRjaXRpZXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHdlYXRoZXIgYXBpXG5pbXBvcnQgRm9yY2FzdCBmcm9tICcuL2ZvcmNhc3QnXG4vLyBJbXBvcnQgc2F2aW5nIHdlYXRoZXJcbmltcG9ydCBTYXZlZENpdGllcyBmcm9tICcuL3NhdmVjaXR5J1xuLy8gSW1wb3J0IGRheUpTIGZvciBkYXRlLCB0aW1lIGZvcm1hdHRpbmdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCB1dGMgZnJvbSAnZGF5anMvcGx1Z2luL3V0YydcbmRheWpzLmV4dGVuZCh1dGMpXG5pbXBvcnQgeyByZWFkeSB9IGZyb20gJy4vaGVscGVycydcblxuLy8gQ2FsbCBuZXcgZm9yY2FzdCBjbGFzc1xuY29uc3QgZm9yY2FzdCA9IG5ldyBGb3JjYXN0KClcblxuLy8gQ2FsbCBzYXZlZCBjaXRpZXMgY2xhc3NcbmNvbnN0IHNhdmVkQ2l0aWVzID0gbmV3IFNhdmVkQ2l0aWVzKClcblxuLy8gR2V0dGluZyB3ZWF0aGVyXG5jb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2x1bW5zJylcblxuLy8gR2V0IGFueSBjaXRpZXMgc2F2ZWQgdG8gbG9jYWxGb3JhZ2Vcbi8vIGNvbnN0IHNhdmVkQ2l0aWVzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCBzYXZlZENpdHkgPSBhd2FpdCBsb2NhbEZvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSAvLyBsb2NhbEZvcmFnZVxuXG4vLyAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yLCBkaXNwbGF5IG91ciBvd24gZXJyb3IuXG4vLyAgIGlmIChzYXZlZENpdHkgPT09IG51bGwpIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBnZXQgY2l0aWVzIG9yIG5vIGNpdGllcyBzYXZlZCFcIilcbi8vICAgfVxuXG4vLyAgIHJldHVybiBzYXZlZENpdHlcbi8vIH1cblxuLy8gT3V0cHV0IGFsbCBkYXRhIHRvIERPTS5cbmNvbnN0IHVwZGF0ZVVJID0gKGRhdGEpID0+IHtcbiAgLy8gZGVzdHJ1Y3R1cmUgcHJvcGVydGllc1xuICAvLyAgIGNvbnN0IHsgY2l0eURhdGEsIHdlYXRoZXIgfSA9IGRhdGFcbiAgY29uc3QgeyBjaXR5RGF0YSwgZm9yY2FzdCwgdGltZVpvbmUsIHV2IH0gPSBkYXRhXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmxvZyhjaXR5RGF0YSlcbiAgICBjb25zb2xlLmxvZyhmb3JjYXN0KVxuICAgIGNvbnNvbGUubG9nKHRpbWVab25lKVxuICAgIGNvbnNvbGUubG9nKHV2KVxuICB9XG5cbiAgLy8gdXBkYXRlIHRlbXBsYXRlXG5cbiAgLy8vIFNldCB0aGUgdHlwZSBvZiBwcmVjaXBpdGF0aW9uIGV4cGVjdGVkLlxuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gKHR5cGUpID0+IHtcbiAgICBsZXQgcmFpblR5cGUgPSBudWxsXG4gICAgbGV0IHJhaW5BbW91bnQgPSBudWxsXG4gICAgaWYgKHR5cGUgPT09ICdSYWluJyB8fCB0eXBlID09PSAnU25vdycpIHtcbiAgICAgIHJhaW5UeXBlID0gdHlwZVxuICAgICAgaWYgKGNpdHlEYXRhLnJhaW4pIHtcbiAgICAgICAgcmFpbkFtb3VudCA9IGNpdHlEYXRhLnJhaW5bJzFoJ11cbiAgICAgICAgcmFpbkFtb3VudCA9IHJhaW5BbW91bnQgKyAnbW0nXG4gICAgICB9IGVsc2UgaWYgKGNpdHlEYXRhLnNub3cpIHtcbiAgICAgICAgcmFpbkFtb3VudCA9IGNpdHlEYXRhLnNub3dbJzFoJ11cbiAgICAgICAgcmFpbkFtb3VudCA9IHJhaW5BbW91bnQgKyAnbW0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYWluQW1vdW50ID0gY2l0eURhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByYWluVHlwZSA9ICdSYWluJ1xuICAgICAgcmFpbkFtb3VudCA9ICcwbW0nXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8cD4ke3JhaW5UeXBlfTwvcD48cD4ke3JhaW5BbW91bnR9PC9wPmBcbiAgfVxuXG4gIC8vLyBTZXQgVVYgaW5kZXhcbiAgY29uc3QgdXZJbmRleCA9IChyYXRpbmcpID0+IHtcbiAgICBsZXQgdXZSYXRpbmdcbiAgICBpZiAocmF0aW5nID49IDMgJiYgcmF0aW5nIDwgNikge1xuICAgICAgdXZSYXRpbmcgPSAnTW9kZXJhdGUnXG4gICAgfSBlbHNlIGlmIChyYXRpbmcgPj0gNiAmJiByYXRpbmcgPCA4KSB7XG4gICAgICB1dlJhdGluZyA9ICdIaWdoJ1xuICAgIH0gZWxzZSBpZiAocmF0aW5nID49IDggJiYgcmF0aW5nIDwgMTEpIHtcbiAgICAgIHV2UmF0aW5nID0gJ1ZlcnkgSGlnaCdcbiAgICB9IGVsc2UgaWYgKHJhdGluZyA+IDEwKSB7XG4gICAgICB1dlJhdGluZyA9ICdFeHRyZW1lJ1xuICAgIH0gZWxzZSB7XG4gICAgICB1dlJhdGluZyA9ICdMb3cnXG4gICAgfVxuXG4gICAgcmV0dXJuIHV2UmF0aW5nXG4gIH1cblxuICAvLy8gR2V0IHRoZSBkYXRlIGFuZCB0aW1lIG9mIHRoZSBmb3JjYXN0LlxuICBjb25zdCB0aW1lID0gZGF5anMobmV3IERhdGUoKSkuZm9ybWF0KCdIJylcbiAgY29uc3QgZGF5VGltZSA9IGRheWpzKFxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVLJywgeyB0aW1lWm9uZTogdGltZVpvbmUudGltZVpvbmVJZCB9KVxuICApLmZvcm1hdCgnZGRkZCAtIGg6bW1BJylcbiAgY29uc3QgZGF0ZSA9IGRheWpzKFxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVLJywgeyB0aW1lWm9uZTogdGltZVpvbmUudGltZVpvbmVJZCB9KVxuICApLmZvcm1hdCgnWVlZWS1NTS1EJylcblxuICAvLy8gR2VuZXJhdGluZyA1IGRheSBmb3JjYXN0XG4gIC8vIHRvZG8gQ2hlY2sgd2l0aCBjdXJyZW50IHRpbWUgb2Ygc2VhcmNoIGFuZCBtYXRjaCB0aGUgZm9yY2FzdCBmb3IgdGhlIG5leHQgZml2ZSBkYXlzIGF0IHRoZSBzYW1lIG5hbWUuXG4gIGNvbnN0IGRhaWx5Rm9yY2FzdCA9ICgpID0+IHtcbiAgICBsZXQgZm9yY2FzdHMgPSAnJ1xuICAgIGZvcmNhc3RzICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcmNhc3RzX19kYXlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxoMz5EYXk8L2gzPlxuICAgICAgICAgICAgICA8cD5XZWF0aGVyPC9wPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICA8cD5XaW5kPC9wPlxuICAgICAgICAgICAgICA8cD4ybXBoPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgPHA+SGlnaDwvcD5cbiAgICAgICAgICAgICAgPHA+MzA8c3VwPiZkZWc7PC9zdXA+PC9wPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICA8cD5SYWluPC9wPlxuICAgICAgICAgICAgICA8cD4wJTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy02XCI+XG4gICAgICAgICAgICAgIDxoMz5UZW1wPHN1cD4mZGVnOzwvc3VwPjwvaDM+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgY29uc29sZS5sb2coZm9yY2FzdHMpXG4gICAgcmV0dXJuIGZvcmNhc3RzXG4gIH1cblxuICAvLy8gU2V0IGNsYXNzIGZvciB0aW1lIG9mIGRheS5cbiAgbGV0IGNpdHlEYXlOaWdodFxuICBpZiAoKHRpbWUgPj0gMjEgJiYgdGltZSA8PSAyMykgfHwgKHRpbWUgPj0gMCAmJiB0aW1lIDwgNSkpIHtcbiAgICBjaXR5RGF5TmlnaHQgPSAnbmlnaHQnXG4gIH0gZWxzZSBpZiAodGltZSA+PSA1ICYmIHRpbWUgPD0gNykge1xuICAgIGNpdHlEYXlOaWdodCA9ICdzdW5yaXNlJ1xuICB9IGVsc2UgaWYgKHRpbWUgPiA3ICYmIHRpbWUgPD0gMTgpIHtcbiAgICBjaXR5RGF5TmlnaHQgPSAnZGF5J1xuICB9IGVsc2Uge1xuICAgIGNpdHlEYXlOaWdodCA9ICdzdW5zZXQnXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKGAke3RpbWV9ID0gJHtjaXR5RGF5TmlnaHR9YClcbiAgfVxuXG4gIC8vLyBHZW5lcmF0ZSBIVE1MLlxuICBjb250ZW50LmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy00IGNhcmRzX19ibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLS1jaXR5XCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiY2FyZF9faGVhZGVyIC5jb2x1bW5zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGgyPiR7Y2l0eURhdGEubWFpbi50ZW1wfTxzdXA+JmRlZzs8L3N1cD48L2gyPlxuICAgICAgICAgICAgICAgIDxoMz4ke2NpdHlEYXRhLm5hbWV9LCAke2NpdHlEYXRhLnN5cy5jb3VudHJ5fTwvaDM+XG4gICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke2RhdGV9XCI+JHtkYXlUaW1lfTwvdGltZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPiR7ZGFpbHlGb3JjYXN0KCl9PC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxwPiR7Y2l0eURhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiY2FyZF9fZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBjYXJkX19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwPldpbmQ8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtjaXR5RGF0YS53aW5kLnNwZWVkfW1waDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHA+SGlnaDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke2NpdHlEYXRhLm1haW4udGVtcF9tYXh9PHN1cD4mZGVnOzwvc3VwPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgJHtwcmVjaXBpdGF0aW9uKGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwPkh1bWlkaXR5PC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7Y2l0eURhdGEubWFpbi5odW1pZGl0eX0mcGVyY250OzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGNhcmRfX2RldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHA+VVY8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHt1dkluZGV4KHV2LnZhbHVlKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwPlN1bnJpc2U8L3A+XG4gICAgICAgICAgICAgICAgPHA+PHRpbWUgZGF0ZXRpbWU9XCIke2RhdGV9XCI+JHtkYXlqc1xuICAgIC51bml4KGNpdHlEYXRhLnN5cy5zdW5yaXNlKVxuICAgIC5mb3JtYXQoJ2g6bUEnKX08L3RpbWU+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cD5TdW5zZXQ8L3A+XG4gICAgICAgICAgICAgICAgPHA+PHRpbWUgZGF0ZXRpbWU9XCIke2RhdGV9XCI+JHtkYXlqc1xuICAgIC51bml4KGNpdHlEYXRhLnN5cy5zdW5zZXQpXG4gICAgLmZvcm1hdCgnaDptQScpfTwvdGltZT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxuXG4gIC8vIEFkZCB0aW1lIG9mIGRheSBjbGFzcyB0byBjYXJkLlxuICBjYXJkLmNsYXNzTGlzdC5hZGQoYGNhcmQtLSR7Y2l0eURheU5pZ2h0fWApXG5cbiAgLy8gQWRkIGNsYXNzIGZvciB3ZWF0aGVyIGltYWdlLlxuICAvLyBjb25zdCBjYXJkSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltYWdlIGltZycpXG4gIC8vIGlmICh0eXBlb2YgY2FyZEltZyAhPT0gJ3VuZGVmaW5lZCcgfHwgY2FyZEltZyAhPT0gbnVsbCkge1xuICAvLyAgIGNhcmRcbiAgLy8gICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2UgaW1nJylcbiAgLy8gICAgIC5jbGFzc0xpc3QuYWRkKGAke2NpdHlEYXRhLndlYXRoZXJbMF0ubWFpbn1gKVxuICAvLyB9XG59XG5cbnJlYWR5KCgpID0+IHtcbiAgLyogRG8gdGhpbmdzIGFmdGVyIERPTSBoYXMgZnVsbHkgbG9hZGVkICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ0RPTSBsb2FkZWQhJylcbiAgfVxuICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgIC8vIEdldCBmaXJlYmFzZSBjaXRpZXNcbiAgICBzYXZlZENpdGllcy5nZXRDaXRpZXMoKGNpdHksIGlkKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhjaXR5LCBpZClcbiAgICAgIH1cbiAgICAgIGZvcmNhc3RcbiAgICAgICAgLnVwZGF0ZUNpdHkoY2l0eSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlVUkoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHNhdmVkQ2l0aWVzXG4gICAgICAuZ2V0Q2l0eVN0b3JhZ2UoKVxuICAgICAgLnRoZW4oKGNpdGllcykgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgdWkgd2l0aCBjaXR5XG4gICAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XG4gICAgICAgICAgZm9yY2FzdFxuICAgICAgICAgICAgLnVwZGF0ZUNpdHkoY2l0eS5sb2NhdGlvbilcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB1cGRhdGVVSShkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpKVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==