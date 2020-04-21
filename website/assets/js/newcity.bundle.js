(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newcity"],{

/***/ "mjH6":
/*!*******************************************!*\
  !*** ./website/src/js/modules/newcity.js ***!
  \*******************************************/
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
// Import weather api
 // Import saving weather

 // Import dayJS for date, time formatting



dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_3___default.a); // Call new forcast class

var forcast = new _forcast__WEBPACK_IMPORTED_MODULE_0__["default"](); // Call saved cities class

var savedCities = new _savecity__WEBPACK_IMPORTED_MODULE_1__["default"](); // Getting weather

var cityForm = document.querySelector('form');
var card = document.querySelector('.card');
var content = document.querySelector('.card__content');
var contentHeader = content.querySelectorAll('.card__header .column')[1];
var saveCity = document.querySelector('.card__save button'); // Output all data to DOM.

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


  var time = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format('H');
  var dayTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(new Date().toLocaleString('en-UK', {
    timeZone: timeZone.timeZoneId
  })).format('dddd - h:mmA');
  var date = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(new Date().toLocaleString('en-UK', {
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


  content.innerHTML = "\n    <header class=\"card__header .columns\">\n      <div class=\"column\">\n        <h2>".concat(cityData.main.temp, "<sup>&deg;</sup></h2>\n        <h3>").concat(cityData.name, ", ").concat(cityData.sys.country, "</h3>\n        <time datetime=\"").concat(date, "\">").concat(dayTime, "</time>\n      </div>\n      <div class=\"column\">\n        ").concat(dailyForcast(), "\n      </div>\n    </header>\n    <p>").concat(cityData.weather[0].description, "</p>\n    <hr>\n    <footer class=\"card__footer\">\n      <div class=\"columns card__details\">\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Wind</p>\n          <p>").concat(cityData.wind.speed, "mph</p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>High</p>\n          <p>").concat(cityData.main.temp_max, "<sup>&deg;</sup></p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          ").concat(precipitation(cityData.weather[0].main), "\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Humidity</p>\n          <p>").concat(cityData.main.humidity, "&percnt;</p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>UV</p>\n          <p>").concat(uvIndex(uv.value), "</p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Sunrise</p>\n          <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.unix(cityData.sys.sunrise).format('h:mA'), "</time></p>\n        </div>\n        <div class=\"column card__detail\">\n          <img src=\"\" alt=\"\">\n          <p>Sunset</p>\n          <p><time datetime=\"").concat(date, "\">").concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.unix(cityData.sys.sunset).format('h:mA'), "</time></p>\n        </div>\n      </div>\n    </footer>\n  "); // Show weather card if card doesn't have hidden class

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


saveCity.addEventListener('click', function () {
  var city = document.querySelector('.card__header h3').innerText;
  var place = document.querySelector('.card');

  if (true) {
    console.log('Saved ' + city);
    console.log(place);
  }

  savedCities.addCity(city);
  savedCities.offlineCity(place);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL25ld2NpdHkuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJ1dGMiLCJmb3JjYXN0IiwiRm9yY2FzdCIsInNhdmVkQ2l0aWVzIiwiU2F2ZWRDaXRpZXMiLCJjaXR5Rm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcmQiLCJjb250ZW50IiwiY29udGVudEhlYWRlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzYXZlQ2l0eSIsInVwZGF0ZVVJIiwiZGF0YSIsImNpdHlEYXRhIiwidGltZVpvbmUiLCJ1diIsInByb2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicHJlY2lwaXRhdGlvbiIsInR5cGUiLCJyYWluVHlwZSIsInJhaW5BbW91bnQiLCJyYWluIiwic25vdyIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsInV2SW5kZXgiLCJyYXRpbmciLCJ1dlJhdGluZyIsInRpbWUiLCJEYXRlIiwiZm9ybWF0IiwiZGF5VGltZSIsInRvTG9jYWxlU3RyaW5nIiwidGltZVpvbmVJZCIsImRhdGUiLCJkYWlseUZvcmNhc3QiLCJmb3JjYXN0cyIsImNpdHlEYXlOaWdodCIsImlubmVySFRNTCIsIm1haW4iLCJ0ZW1wIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJ3aW5kIiwic3BlZWQiLCJ0ZW1wX21heCIsImh1bWlkaXR5IiwidmFsdWUiLCJ1bml4Iiwic3VucmlzZSIsInN1bnNldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNpdHkiLCJ0cmltIiwicmVzZXQiLCJ1cGRhdGVDaXR5IiwidGhlbiIsImVyciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJwbGFjZSIsImFkZENpdHkiLCJvZmZsaW5lQ2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsdURBQWIsRSxDQUVBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxnREFBSixFQUFoQixDLENBQ0E7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLElBQUlDLGlEQUFKLEVBQXBCLEMsQ0FFQTs7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFqQjtBQUNBLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBaEI7QUFDQSxJQUFNRyxhQUFhLEdBQUdELE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUIsdUJBQXpCLEVBQWtELENBQWxELENBQXRCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWpCLEMsQ0FFQTs7QUFDQSxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDekI7QUFDQTtBQUZ5QixNQUdqQkMsUUFIaUIsR0FHbUJELElBSG5CLENBR2pCQyxRQUhpQjtBQUFBLE1BR1BkLE9BSE8sR0FHbUJhLElBSG5CLENBR1BiLE9BSE87QUFBQSxNQUdFZSxRQUhGLEdBR21CRixJQUhuQixDQUdFRSxRQUhGO0FBQUEsTUFHWUMsRUFIWixHQUdtQkgsSUFIbkIsQ0FHWUcsRUFIWjs7QUFLekIsTUFBSUMsSUFBSixFQUEyQztBQUN6Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWjtBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsT0FBWjtBQUNBa0IsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDRCxHQVp3QixDQWN6QjtBQUVBOzs7QUFDQSxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUM5QixRQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxRQUFJRixJQUFJLEtBQUssTUFBVCxJQUFtQkEsSUFBSSxLQUFLLE1BQWhDLEVBQXdDO0FBQ3RDQyxjQUFRLEdBQUdELElBQVg7O0FBQ0EsVUFBSVAsUUFBUSxDQUFDVSxJQUFiLEVBQW1CO0FBQ2pCRCxrQkFBVSxHQUFHVCxRQUFRLENBQUNVLElBQVQsQ0FBYyxJQUFkLENBQWI7QUFDQUQsa0JBQVUsR0FBR0EsVUFBVSxHQUFHLElBQTFCO0FBQ0QsT0FIRCxNQUdPLElBQUlULFFBQVEsQ0FBQ1csSUFBYixFQUFtQjtBQUN4QkYsa0JBQVUsR0FBR1QsUUFBUSxDQUFDVyxJQUFULENBQWMsSUFBZCxDQUFiO0FBQ0FGLGtCQUFVLEdBQUdBLFVBQVUsR0FBRyxJQUExQjtBQUNELE9BSE0sTUFHQTtBQUNMQSxrQkFBVSxHQUFHVCxRQUFRLENBQUNZLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0JDLFdBQWpDO0FBQ0Q7QUFDRixLQVhELE1BV087QUFDTEwsY0FBUSxHQUFHLE1BQVg7QUFDQUMsZ0JBQVUsR0FBRyxLQUFiO0FBQ0Q7O0FBRUQsd0JBQWFELFFBQWIsb0JBQStCQyxVQUEvQjtBQUNELEdBcEJELENBakJ5QixDQXVDekI7OztBQUNBLE1BQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBWTtBQUMxQixRQUFJQyxRQUFKOztBQUNBLFFBQUlELE1BQU0sSUFBSSxDQUFWLElBQWVBLE1BQU0sR0FBRyxDQUE1QixFQUErQjtBQUM3QkMsY0FBUSxHQUFHLFVBQVg7QUFDRCxLQUZELE1BRU8sSUFBSUQsTUFBTSxJQUFJLENBQVYsSUFBZUEsTUFBTSxHQUFHLENBQTVCLEVBQStCO0FBQ3BDQyxjQUFRLEdBQUcsTUFBWDtBQUNELEtBRk0sTUFFQSxJQUFJRCxNQUFNLElBQUksQ0FBVixJQUFlQSxNQUFNLEdBQUcsRUFBNUIsRUFBZ0M7QUFDckNDLGNBQVEsR0FBRyxXQUFYO0FBQ0QsS0FGTSxNQUVBLElBQUlELE1BQU0sR0FBRyxFQUFiLEVBQWlCO0FBQ3RCQyxjQUFRLEdBQUcsU0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMQSxjQUFRLEdBQUcsS0FBWDtBQUNEOztBQUVELFdBQU9BLFFBQVA7QUFDRCxHQWZELENBeEN5QixDQXlEekI7OztBQUNBLE1BQU1DLElBQUksR0FBR2xDLDRDQUFLLENBQUMsSUFBSW1DLElBQUosRUFBRCxDQUFMLENBQWtCQyxNQUFsQixDQUF5QixHQUF6QixDQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHckMsNENBQUssQ0FDbkIsSUFBSW1DLElBQUosR0FBV0csY0FBWCxDQUEwQixPQUExQixFQUFtQztBQUFFcEIsWUFBUSxFQUFFQSxRQUFRLENBQUNxQjtBQUFyQixHQUFuQyxDQURtQixDQUFMLENBRWRILE1BRmMsQ0FFUCxjQUZPLENBQWhCO0FBR0EsTUFBTUksSUFBSSxHQUFHeEMsNENBQUssQ0FDaEIsSUFBSW1DLElBQUosR0FBV0csY0FBWCxDQUEwQixPQUExQixFQUFtQztBQUFFcEIsWUFBUSxFQUFFQSxRQUFRLENBQUNxQjtBQUFyQixHQUFuQyxDQURnQixDQUFMLENBRVhILE1BRlcsQ0FFSixXQUZJLENBQWIsQ0E5RHlCLENBa0V6Qjs7QUFDQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWYsQ0FGeUIsQ0FHekI7O0FBQ0FBLFlBQVEsa3JCQUFSLENBSnlCLENBNkJ6Qjs7QUFDQXJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsUUFBWjtBQUNBLFdBQU9BLFFBQVA7QUFDRCxHQWhDRCxDQW5FeUIsQ0FxR3pCOzs7QUFDQSxNQUFJQyxZQUFKOztBQUNBLE1BQUtULElBQUksSUFBSSxFQUFSLElBQWNBLElBQUksSUFBSSxFQUF2QixJQUErQkEsSUFBSSxJQUFJLENBQVIsSUFBYUEsSUFBSSxHQUFHLENBQXZELEVBQTJEO0FBQ3pEUyxnQkFBWSxHQUFHLE9BQWY7QUFDRCxHQUZELE1BRU8sSUFBSVQsSUFBSSxJQUFJLENBQVIsSUFBYUEsSUFBSSxJQUFJLENBQXpCLEVBQTRCO0FBQ2pDUyxnQkFBWSxHQUFHLFNBQWY7QUFDRCxHQUZNLE1BRUEsSUFBSVQsSUFBSSxHQUFHLENBQVAsSUFBWUEsSUFBSSxJQUFJLEVBQXhCLEVBQTRCO0FBQ2pDUyxnQkFBWSxHQUFHLEtBQWY7QUFDRCxHQUZNLE1BRUE7QUFDTEEsZ0JBQVksR0FBRyxRQUFmO0FBQ0Q7O0FBRUQsTUFBSXZCLElBQUosRUFBMkM7QUFDekNDLFdBQU8sQ0FBQ0MsR0FBUixXQUFlWSxJQUFmLGdCQUF5QlMsWUFBekI7QUFDRCxHQW5Id0IsQ0FxSHpCOzs7QUFDQWhDLFNBQU8sQ0FBQ2lDLFNBQVIsdUdBR1kzQixRQUFRLENBQUM0QixJQUFULENBQWNDLElBSDFCLGdEQUlZN0IsUUFBUSxDQUFDOEIsSUFKckIsZUFJOEI5QixRQUFRLENBQUMrQixHQUFULENBQWFDLE9BSjNDLDZDQUt3QlQsSUFMeEIsZ0JBS2lDSCxPQUxqQywwRUFRUUksWUFBWSxFQVJwQixtREFXT3hCLFFBQVEsQ0FBQ1ksT0FBVCxDQUFpQixDQUFqQixFQUFvQkMsV0FYM0IsbU9Ba0JhYixRQUFRLENBQUNpQyxJQUFULENBQWNDLEtBbEIzQiwwSkF1QmFsQyxRQUFRLENBQUM0QixJQUFULENBQWNPLFFBdkIzQiw2SUEyQlU3QixhQUFhLENBQUNOLFFBQVEsQ0FBQ1ksT0FBVCxDQUFpQixDQUFqQixFQUFvQmdCLElBQXJCLENBM0J2Qix1SkFnQ2E1QixRQUFRLENBQUM0QixJQUFULENBQWNRLFFBaEMzQiw2SkFxQ2F0QixPQUFPLENBQUNaLEVBQUUsQ0FBQ21DLEtBQUosQ0FyQ3BCLDJLQTBDNkJkLElBMUM3QixnQkEwQ3NDeEMsNENBQUssQ0FDeEN1RCxJQURtQyxDQUM5QnRDLFFBQVEsQ0FBQytCLEdBQVQsQ0FBYVEsT0FEaUIsRUFFbkNwQixNQUZtQyxDQUU1QixNQUY0QixDQTFDdEMsaUxBaUQ2QkksSUFqRDdCLGdCQWlEc0N4Qyw0Q0FBSyxDQUN4Q3VELElBRG1DLENBQzlCdEMsUUFBUSxDQUFDK0IsR0FBVCxDQUFhUyxNQURpQixFQUVuQ3JCLE1BRm1DLENBRTVCLE1BRjRCLENBakR0QyxrRUF0SHlCLENBK0t6Qjs7QUFDQSxNQUFJMUIsSUFBSSxDQUFDZ0QsU0FBTCxDQUFlQyxRQUFmLENBQXdCLFdBQXhCLENBQUosRUFBMEM7QUFDeENqRCxRQUFJLENBQUNnRCxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsV0FBdEI7QUFDRCxHQWxMd0IsQ0FvTHpCOzs7QUFDQWxELE1BQUksQ0FBQ2dELFNBQUwsQ0FBZUcsTUFBZixpQkFBK0JsQixZQUEvQixHQXJMeUIsQ0F1THpCOztBQUNBakMsTUFBSSxDQUNERCxhQURILENBQ2lCLGtCQURqQixFQUVHaUQsU0FGSCxDQUVhRyxNQUZiLFdBRXVCNUMsUUFBUSxDQUFDWSxPQUFULENBQWlCLENBQWpCLEVBQW9CZ0IsSUFGM0M7QUFHRCxDQTNMRCxDLENBNkxBO0FBQ0E7OztBQUNBdEMsUUFBUSxDQUFDdUQsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pDO0FBQ0FBLEdBQUMsQ0FBQ0MsY0FBRixHQUZ5QyxDQUl6Qzs7QUFDQSxNQUFNQyxJQUFJLEdBQUcxRCxRQUFRLENBQUMwRCxJQUFULENBQWNYLEtBQWQsQ0FBb0JZLElBQXBCLEVBQWI7QUFDQTNELFVBQVEsQ0FBQzRELEtBQVQsR0FOeUMsQ0FRekM7O0FBQ0FoRSxTQUFPLENBQ0ppRSxVQURILENBQ2NILElBRGQsRUFFR0ksSUFGSCxDQUVRLFVBQUNyRCxJQUFEO0FBQUEsV0FBVUQsUUFBUSxDQUFDQyxJQUFELENBQWxCO0FBQUEsR0FGUixXQUdTLFVBQUNzRCxHQUFEO0FBQUEsV0FBU2pELE9BQU8sQ0FBQ2tELEtBQVIsQ0FBY0QsR0FBZCxDQUFUO0FBQUEsR0FIVCxFQVR5QyxDQWN6Qzs7QUFDQUUsY0FBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCUixJQUE3QjtBQUNELENBaEJELEUsQ0FrQkE7O0FBQ0EsSUFBSU8sWUFBWSxDQUFDRSxPQUFiLENBQXFCLE1BQXJCLENBQUosRUFBa0M7QUFDaEN2RSxTQUFPLENBQ0ppRSxVQURILENBQ2NJLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixNQUFyQixDQURkLEVBRUdMLElBRkgsQ0FFUSxVQUFDckQsSUFBRDtBQUFBLFdBQVVELFFBQVEsQ0FBQ0MsSUFBRCxDQUFsQjtBQUFBLEdBRlIsV0FHUyxVQUFDc0QsR0FBRDtBQUFBLFdBQVNqRCxPQUFPLENBQUNrRCxLQUFSLENBQWNELEdBQWQsQ0FBVDtBQUFBLEdBSFQ7QUFJRCxDLENBRUQ7OztBQUNBeEQsUUFBUSxDQUFDZ0QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBTTtBQUN2QyxNQUFNRyxJQUFJLEdBQUd6RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDa0UsU0FBeEQ7QUFDQSxNQUFNQyxLQUFLLEdBQUdwRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDs7QUFDQSxNQUFJVyxJQUFKLEVBQTJDO0FBQ3pDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFXMkMsSUFBdkI7QUFDQTVDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsS0FBWjtBQUNEOztBQUNEdkUsYUFBVyxDQUFDd0UsT0FBWixDQUFvQlosSUFBcEI7QUFDQTVELGFBQVcsQ0FBQ3lFLFdBQVosQ0FBd0JGLEtBQXhCO0FBQ0QsQ0FURCxFIiwiZmlsZSI6Im5ld2NpdHkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHdlYXRoZXIgYXBpXG5pbXBvcnQgRm9yY2FzdCBmcm9tICcuL2ZvcmNhc3QnXG4vLyBJbXBvcnQgc2F2aW5nIHdlYXRoZXJcbmltcG9ydCBTYXZlZENpdGllcyBmcm9tICcuL3NhdmVjaXR5J1xuLy8gSW1wb3J0IGRheUpTIGZvciBkYXRlLCB0aW1lIGZvcm1hdHRpbmdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCB1dGMgZnJvbSAnZGF5anMvcGx1Z2luL3V0YydcbmRheWpzLmV4dGVuZCh1dGMpXG5cbi8vIENhbGwgbmV3IGZvcmNhc3QgY2xhc3NcbmNvbnN0IGZvcmNhc3QgPSBuZXcgRm9yY2FzdCgpXG4vLyBDYWxsIHNhdmVkIGNpdGllcyBjbGFzc1xuY29uc3Qgc2F2ZWRDaXRpZXMgPSBuZXcgU2F2ZWRDaXRpZXMoKVxuXG4vLyBHZXR0aW5nIHdlYXRoZXJcbmNvbnN0IGNpdHlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG5jb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb250ZW50JylcbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19oZWFkZXIgLmNvbHVtbicpWzFdXG5jb25zdCBzYXZlQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19zYXZlIGJ1dHRvbicpXG5cbi8vIE91dHB1dCBhbGwgZGF0YSB0byBET00uXG5jb25zdCB1cGRhdGVVSSA9IChkYXRhKSA9PiB7XG4gIC8vIGRlc3RydWN0dXJlIHByb3BlcnRpZXNcbiAgLy8gICBjb25zdCB7IGNpdHlEYXRhLCB3ZWF0aGVyIH0gPSBkYXRhXG4gIGNvbnN0IHsgY2l0eURhdGEsIGZvcmNhc3QsIHRpbWVab25lLCB1diB9ID0gZGF0YVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnQnKVxuICAgIGNvbnNvbGUubG9nKGNpdHlEYXRhKVxuICAgIGNvbnNvbGUubG9nKCdmb3JjYXN0JylcbiAgICBjb25zb2xlLmxvZyhmb3JjYXN0KVxuICAgIGNvbnNvbGUubG9nKHRpbWVab25lKVxuICAgIGNvbnNvbGUubG9nKHV2KVxuICB9XG5cbiAgLy8gdXBkYXRlIHRlbXBsYXRlXG5cbiAgLy8vIFNldCB0aGUgdHlwZSBvZiBwcmVjaXBpdGF0aW9uIGV4cGVjdGVkLlxuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gKHR5cGUpID0+IHtcbiAgICBsZXQgcmFpblR5cGUgPSBudWxsXG4gICAgbGV0IHJhaW5BbW91bnQgPSBudWxsXG4gICAgaWYgKHR5cGUgPT09ICdSYWluJyB8fCB0eXBlID09PSAnU25vdycpIHtcbiAgICAgIHJhaW5UeXBlID0gdHlwZVxuICAgICAgaWYgKGNpdHlEYXRhLnJhaW4pIHtcbiAgICAgICAgcmFpbkFtb3VudCA9IGNpdHlEYXRhLnJhaW5bJzFoJ11cbiAgICAgICAgcmFpbkFtb3VudCA9IHJhaW5BbW91bnQgKyAnbW0nXG4gICAgICB9IGVsc2UgaWYgKGNpdHlEYXRhLnNub3cpIHtcbiAgICAgICAgcmFpbkFtb3VudCA9IGNpdHlEYXRhLnNub3dbJzFoJ11cbiAgICAgICAgcmFpbkFtb3VudCA9IHJhaW5BbW91bnQgKyAnbW0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYWluQW1vdW50ID0gY2l0eURhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByYWluVHlwZSA9ICdSYWluJ1xuICAgICAgcmFpbkFtb3VudCA9ICcwbW0nXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8cD4ke3JhaW5UeXBlfTwvcD48cD4ke3JhaW5BbW91bnR9PC9wPmBcbiAgfVxuXG4gIC8vLyBTZXQgVVYgaW5kZXhcbiAgY29uc3QgdXZJbmRleCA9IChyYXRpbmcpID0+IHtcbiAgICBsZXQgdXZSYXRpbmdcbiAgICBpZiAocmF0aW5nID49IDMgJiYgcmF0aW5nIDwgNikge1xuICAgICAgdXZSYXRpbmcgPSAnTW9kZXJhdGUnXG4gICAgfSBlbHNlIGlmIChyYXRpbmcgPj0gNiAmJiByYXRpbmcgPCA4KSB7XG4gICAgICB1dlJhdGluZyA9ICdIaWdoJ1xuICAgIH0gZWxzZSBpZiAocmF0aW5nID49IDggJiYgcmF0aW5nIDwgMTEpIHtcbiAgICAgIHV2UmF0aW5nID0gJ1ZlcnkgSGlnaCdcbiAgICB9IGVsc2UgaWYgKHJhdGluZyA+IDEwKSB7XG4gICAgICB1dlJhdGluZyA9ICdFeHRyZW1lJ1xuICAgIH0gZWxzZSB7XG4gICAgICB1dlJhdGluZyA9ICdMb3cnXG4gICAgfVxuXG4gICAgcmV0dXJuIHV2UmF0aW5nXG4gIH1cblxuICAvLy8gR2V0IHRoZSBkYXRlIGFuZCB0aW1lIG9mIHRoZSBmb3JjYXN0LlxuICBjb25zdCB0aW1lID0gZGF5anMobmV3IERhdGUoKSkuZm9ybWF0KCdIJylcbiAgY29uc3QgZGF5VGltZSA9IGRheWpzKFxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVLJywgeyB0aW1lWm9uZTogdGltZVpvbmUudGltZVpvbmVJZCB9KVxuICApLmZvcm1hdCgnZGRkZCAtIGg6bW1BJylcbiAgY29uc3QgZGF0ZSA9IGRheWpzKFxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVLJywgeyB0aW1lWm9uZTogdGltZVpvbmUudGltZVpvbmVJZCB9KVxuICApLmZvcm1hdCgnWVlZWS1NTS1EJylcblxuICAvLy8gR2VuZXJhdGluZyA1IGRheSBmb3JjYXN0XG4gIGNvbnN0IGRhaWx5Rm9yY2FzdCA9ICgpID0+IHtcbiAgICAvLyBsZXQgZm9yY2FzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBmb3JjYXN0cyA9ICcnXG4gICAgLy8gZm9yY2FzdHMudGV4dENvbnRlbnQgPSAnaGVsbG8gd29ybGQnXG4gICAgZm9yY2FzdHMgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcmNhc3RzX19kYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgIDxoMz5EYXk8L2gzPlxuICAgICAgICAgICAgPHA+V2VhdGhlcjwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8cD5XaW5kPC9wPlxuICAgICAgICAgICAgPHA+Mm1waDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8cD5IaWdoPC9wPlxuICAgICAgICAgICAgPHA+MzA8c3VwPiZkZWc7PC9zdXA+PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxwPlJhaW48L3A+XG4gICAgICAgICAgICA8cD4wJTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTZcIj5cbiAgICAgICAgICAgIDxoMz5UZW1wPHN1cD4mZGVnOzwvc3VwPjwvaDM+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgICAvLyBpZiAoKVxuICAgIGNvbnNvbGUubG9nKGZvcmNhc3RzKVxuICAgIHJldHVybiBmb3JjYXN0c1xuICB9XG5cbiAgLy8vIFNldCBjbGFzcyBmb3IgdGltZSBvZiBkYXkuXG4gIGxldCBjaXR5RGF5TmlnaHRcbiAgaWYgKCh0aW1lID49IDIxICYmIHRpbWUgPD0gMjMpIHx8ICh0aW1lID49IDAgJiYgdGltZSA8IDUpKSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ25pZ2h0J1xuICB9IGVsc2UgaWYgKHRpbWUgPj0gNSAmJiB0aW1lIDw9IDcpIHtcbiAgICBjaXR5RGF5TmlnaHQgPSAnc3VucmlzZSdcbiAgfSBlbHNlIGlmICh0aW1lID4gNyAmJiB0aW1lIDw9IDE4KSB7XG4gICAgY2l0eURheU5pZ2h0ID0gJ2RheSdcbiAgfSBlbHNlIHtcbiAgICBjaXR5RGF5TmlnaHQgPSAnc3Vuc2V0J1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aW1lfSA9ICR7Y2l0eURheU5pZ2h0fWApXG4gIH1cblxuICAvLy8gR2VuZXJhdGUgSFRNTC5cbiAgY29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlciBjbGFzcz1cImNhcmRfX2hlYWRlciAuY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICA8aDI+JHtjaXR5RGF0YS5tYWluLnRlbXB9PHN1cD4mZGVnOzwvc3VwPjwvaDI+XG4gICAgICAgIDxoMz4ke2NpdHlEYXRhLm5hbWV9LCAke2NpdHlEYXRhLnN5cy5jb3VudHJ5fTwvaDM+XG4gICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHtkYXRlfVwiPiR7ZGF5VGltZX08L3RpbWU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgJHtkYWlseUZvcmNhc3QoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxwPiR7Y2l0eURhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgPGhyPlxuICAgIDxmb290ZXIgY2xhc3M9XCJjYXJkX19mb290ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGNhcmRfX2RldGFpbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgIDxwPldpbmQ8L3A+XG4gICAgICAgICAgPHA+JHtjaXR5RGF0YS53aW5kLnNwZWVkfW1waDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5IaWdoPC9wPlxuICAgICAgICAgIDxwPiR7Y2l0eURhdGEubWFpbi50ZW1wX21heH08c3VwPiZkZWc7PC9zdXA+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICR7cHJlY2lwaXRhdGlvbihjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYXJkX19kZXRhaWxcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgIDxwPkh1bWlkaXR5PC9wPlxuICAgICAgICAgIDxwPiR7Y2l0eURhdGEubWFpbi5odW1pZGl0eX0mcGVyY250OzwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5VVjwvcD5cbiAgICAgICAgICA8cD4ke3V2SW5kZXgodXYudmFsdWUpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5TdW5yaXNlPC9wPlxuICAgICAgICAgIDxwPjx0aW1lIGRhdGV0aW1lPVwiJHtkYXRlfVwiPiR7ZGF5anNcbiAgICAudW5peChjaXR5RGF0YS5zeXMuc3VucmlzZSlcbiAgICAuZm9ybWF0KCdoOm1BJyl9PC90aW1lPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gY2FyZF9fZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8cD5TdW5zZXQ8L3A+XG4gICAgICAgICAgPHA+PHRpbWUgZGF0ZXRpbWU9XCIke2RhdGV9XCI+JHtkYXlqc1xuICAgIC51bml4KGNpdHlEYXRhLnN5cy5zdW5zZXQpXG4gICAgLmZvcm1hdCgnaDptQScpfTwvdGltZT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIGBcblxuICAvLyBTaG93IHdlYXRoZXIgY2FyZCBpZiBjYXJkIGRvZXNuJ3QgaGF2ZSBoaWRkZW4gY2xhc3NcbiAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1oaWRkZW4nKSkge1xuICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJylcbiAgfVxuXG4gIC8vIEFkZCB0aW1lIG9mIGRheSBjbGFzcyB0byBjYXJkLlxuICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoYGNhcmQtLSR7Y2l0eURheU5pZ2h0fWApXG5cbiAgLy8gQWRkIGNsYXNzIGZvciB3ZWF0aGVyIGltYWdlLlxuICBjYXJkXG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZSBpbWcnKVxuICAgIC5jbGFzc0xpc3QudG9nZ2xlKGAke2NpdHlEYXRhLndlYXRoZXJbMF0ubWFpbn1gKVxufVxuXG4vLyBPbiBmb3JtIHN1Ym1pdCB1cGRhdGUgdGhlIEhUTUwgY29udGVudCB3aXRoIHRoZSBBUEkgZGF0YVxuLy8gU2F2ZSBlbnRlcmVkIGxvY2F0aW9uIHRvIGxvY2FsU3RvcmFnZVxuY2l0eUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgLy8gcHJldmVudCB0aGUgZGVmYXVsdCBzdWJtaXQuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vIGdldCBjaXR5IHZhbHVlLlxuICBjb25zdCBjaXR5ID0gY2l0eUZvcm0uY2l0eS52YWx1ZS50cmltKClcbiAgY2l0eUZvcm0ucmVzZXQoKVxuXG4gIC8vIHVwZGF0ZSB1aSB3aXRoIGNpdHlcbiAgZm9yY2FzdFxuICAgIC51cGRhdGVDaXR5KGNpdHkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHVwZGF0ZVVJKGRhdGEpKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpXG5cbiAgLy8gc2V0IGxvY2FsU3RvcmFnZSB3aXRoIGxvY2FsRm9yYWdlLlxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0eScsIGNpdHkpXG59KVxuXG4vLyBHZXQgY2l0eSBmcm9tIGxvY2FsU3RvcmFnZVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykpIHtcbiAgZm9yY2FzdFxuICAgIC51cGRhdGVDaXR5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykpXG4gICAgLnRoZW4oKGRhdGEpID0+IHVwZGF0ZVVJKGRhdGEpKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpXG59XG5cbi8vIElmIGNpdHkgaXMgc2F2ZWQgYWRkIGxvY2F0aW9uIHRvIGxvY2FsRm9yYWdlXG5zYXZlQ2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19oZWFkZXIgaDMnKS5pbm5lclRleHRcbiAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ1NhdmVkICcgKyBjaXR5KVxuICAgIGNvbnNvbGUubG9nKHBsYWNlKVxuICB9XG4gIHNhdmVkQ2l0aWVzLmFkZENpdHkoY2l0eSlcbiAgc2F2ZWRDaXRpZXMub2ZmbGluZUNpdHkocGxhY2UpXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==