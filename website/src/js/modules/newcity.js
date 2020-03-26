// Import weather api
import {
  getCity,
  getForcast,
  getTimeZone
} from './forcast'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

// Getting weather
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const content = document.querySelector('.card__content')
const time = document.querySelector('.card__header time')
const img = document.querySelector('.card__image img')
const savedCity = document.querySelector('.card__save button')


// Output all data to DOM.
const updateUI = data => {
  // destructure properties
  //   const { cityData, weather } = data
  const {
    cityData,
    forcast,
    timeZone
  } = data

  if (process.env.NODE_ENV !== 'production') {
    console.log(cityData)
    console.log(forcast)
    console.log(timeZone)
  }

  // update template

  /// Set the type of precipitation expected.
  let precipitationType =
    cityData.weather[0].main !== 'Rain' || cityData.weather[0].main !== 'Snow' ?
    'Rain' :
    cityData.weather[0].main

  /// Display the amount of percipitation.
  let precipitation = null
  if (cityData.rain) {
    precipitation = cityData.rain['1h']
  } else if (cityData.snow) {
    precipitation = cityData.snow['1h']
  } else {
    precipitation = '0'
  }

  /// Change GB to UK.
  let country = cityData.sys.country === 'GB' ? 'UK' : cityData.sys.country

  /// Get the date and time of the forcast.
  const tz = new Date(cityData.timezone); // Get timezone
  const dayTime = dayjs()
    // .utc(tz)
    .local(tz)
    .format('dddd - h:mA')
  // dayjs(new Date().toLocaleString("en-US", {timeZone: "America/New_York"})).format('h:mA')
  const date = dayjs
    .utc()
    .local(tz)
    .format('YYYY-MM-D')

  content.innerHTML = `
      <header class="card__header">
        <h2>${cityData.main.temp}<sup>&deg;</sup></h2>
        <h3>${cityData.name}, ${country}</h3>
        <time datetime="${date}">${dayTime}${cityData.timezone}</time>
      </header>
      <p>${cityData.weather[0].description}</p>
      <hr>
      <footer class="card__footer">
          <div class="columns card__details">
              <div class="column card__detail">
                  <img src="" alt="">
                  <p>Wind</p>
                  <p>${cityData.wind.speed}mph</p>
              </div>
              <div class="column card__detail">
                  <img src="" alt="">
                  <p>High</p>
                  <p>${cityData.main.temp_max}<sup>&deg;</sup></p>
              </div>
              <div class="column card__detail">
                  <img src="" alt="">
                  <p>${precipitationType}</p>
                  <p>${precipitation}mm</p>
              </div>
          </div>
      </footer>
    `

  //   let timeSrc = null
  //   if (weather.IsDayTime) {
  //     timeSrc = '/assets/images/spring-day.webp'
  //   } else {
  //     timeSrc = '/assets/images/spring-night.webp'
  //   }

  //   img.setAttribute('src', timeSrc)

  // Show weather card if card doesn't have hidden class
  if (card.classList.contains('is-hidden')) {
    card.classList.remove('is-hidden')
  }
}

// Get the data of the weather for the location.
// Uses exported functions from focast.js
const updateCity = async city => {
  const cityData = await getCity(city)
  const forcast = await getForcast(city)
  const timeZone = await getTimeZone(cityData.coord.lat, cityData.coord.lon, cityData.timezone)
  return {
    cityData,
    forcast,
    timeZone
  }
}

// On form submit update the HTML content with the API data
// Save entered location to localStorage
cityForm.addEventListener('submit', e => {
  // prevent the default submit.
  e.preventDefault()

  // get city value.
  const city = cityForm.city.value.trim()
  cityForm.reset()

  // update ui with city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.error(err))

  // set localStorage with localForage.
  localStorage.setItem('city', city)
})

// Get city from localStorage
if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.error(err))
}

// If city is saved add location to localForage
savedCity.addEventListener('click', () => {
  const city = document.querySelector('.card__header h3').innerText
  if (process.env.NODE_ENV !== 'production') {
    console.log(city)
  }
  localForage.setItem("cities", city);
})
