// Import weather api
import Forcast from './forcast'
// Import saving weather
import SavedCities from './savecity'
// Import dayJS for date, time formatting
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

// Call new forcast class
const forcast = new Forcast()
// Call saved cities class
const savedCities = new SavedCities()

// Getting weather
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const content = document.querySelector('.card__content')
const contentHeader = content.querySelectorAll('.card__header .column')[1]
const saveCity = document.querySelector('.card__save button')

// Output all data to DOM.
const updateUI = (data) => {
  // destructure properties
  //   const { cityData, weather } = data
  const { cityData, forcast, timeZone, uv } = data

  if (process.env.NODE_ENV !== 'production') {
    console.log('current')
    console.log(cityData)
    console.log('forcast')
    console.log(forcast)
    console.log(timeZone)
    console.log(uv)
  }

  // update template

  /// Set the type of precipitation expected.
  const precipitation = (type) => {
    let rainType = null
    let rainAmount = null
    if (type === 'Rain' || type === 'Snow') {
      rainType = type
      if (cityData.rain) {
        rainAmount = cityData.rain['1h']
        rainAmount = rainAmount + 'mm'
      } else if (cityData.snow) {
        rainAmount = cityData.snow['1h']
        rainAmount = rainAmount + 'mm'
      } else {
        rainAmount = cityData.weather[0].description
      }
    } else {
      rainType = 'Rain'
      rainAmount = '0mm'
    }

    return `<p>${rainType}</p><p>${rainAmount}</p>`
  }

  /// Set UV index
  const uvIndex = (rating) => {
    let uvRating
    if (rating >= 3 && rating < 6) {
      uvRating = 'Moderate'
    } else if (rating >= 6 && rating < 8) {
      uvRating = 'High'
    } else if (rating >= 8 && rating < 11) {
      uvRating = 'Very High'
    } else if (rating > 10) {
      uvRating = 'Extreme'
    } else {
      uvRating = 'Low'
    }

    return uvRating
  }

  /// Get the date and time of the forcast.
  const time = dayjs(new Date()).format('H')
  const dayTime = dayjs(
    new Date().toLocaleString('en-UK', { timeZone: timeZone.timeZoneId })
  ).format('dddd - h:mmA')
  const date = dayjs(
    new Date().toLocaleString('en-UK', { timeZone: timeZone.timeZoneId })
  ).format('YYYY-MM-D')

  /// Generating 5 day forcast
  const dailyForcast = () => {
    // let forcasts = document.createElement('div')
    let forcasts = ''
    // forcasts.textContent = 'hello world'
    forcasts += `
      <div class="forcasts__day">
        <div class="columns">
          <div class="column is-3">
            <h3>Day</h3>
            <p>Weather</p>
            <img src="" alt="">
            <p>Wind</p>
            <p>2mph</p>
          </div>
          <div class="column is-3">
            <img src="" alt="">
            <p>High</p>
            <p>30<sup>&deg;</sup></p>
            <img src="" alt="">
            <p>Rain</p>
            <p>0%</p>
          </div>
          <div class="column is-6">
            <h3>Temp<sup>&deg;</sup></h3>
            <img src="" alt="">
          </div>
        </div>
      </div>
    `
    // if ()
    console.log(forcasts)
    return forcasts
  }

  /// Set class for time of day.
  let cityDayNight
  if ((time >= 21 && time <= 23) || (time >= 0 && time < 5)) {
    cityDayNight = 'night'
  } else if (time >= 5 && time <= 7) {
    cityDayNight = 'sunrise'
  } else if (time > 7 && time <= 18) {
    cityDayNight = 'day'
  } else {
    cityDayNight = 'sunset'
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log(`${time} = ${cityDayNight}`)
  }

  /// Generate HTML.
  content.innerHTML = `
    <header class="card__header .columns">
      <div class="column">
        <h2>${cityData.main.temp}<sup>&deg;</sup></h2>
        <h3>${cityData.name}, ${cityData.sys.country}</h3>
        <time datetime="${date}">${dayTime}</time>
      </div>
      <div class="column">
        ${dailyForcast()}
      </div>
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
          ${precipitation(cityData.weather[0].main)}
        </div>
        <div class="column card__detail">
          <img src="" alt="">
          <p>Humidity</p>
          <p>${cityData.main.humidity}&percnt;</p>
        </div>
        <div class="column card__detail">
          <img src="" alt="">
          <p>UV</p>
          <p>${uvIndex(uv.value)}</p>
        </div>
        <div class="column card__detail">
          <img src="" alt="">
          <p>Sunrise</p>
          <p><time datetime="${date}">${dayjs
    .unix(cityData.sys.sunrise)
    .format('h:mA')}</time></p>
        </div>
        <div class="column card__detail">
          <img src="" alt="">
          <p>Sunset</p>
          <p><time datetime="${date}">${dayjs
    .unix(cityData.sys.sunset)
    .format('h:mA')}</time></p>
        </div>
      </div>
    </footer>
  `

  // Show weather card if card doesn't have hidden class
  if (card.classList.contains('is-hidden')) {
    card.classList.remove('is-hidden')
  }

  // Add time of day class to card.
  card.classList.toggle(`card--${cityDayNight}`)

  // Add class for weather image.
  card
    .querySelector('.card__image img')
    .classList.toggle(`${cityData.weather[0].main}`)
}

// On form submit update the HTML content with the API data
// Save entered location to localStorage
cityForm.addEventListener('submit', (e) => {
  // prevent the default submit.
  e.preventDefault()

  // get city value.
  const city = cityForm.city.value.trim()
  cityForm.reset()

  // update ui with city
  forcast
    .updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.error(err))

  // set localStorage with localForage.
  localStorage.setItem('city', city)
})

// Get city from localStorage
if (localStorage.getItem('city')) {
  forcast
    .updateCity(localStorage.getItem('city'))
    .then((data) => updateUI(data))
    .catch((err) => console.error(err))
}

// If city is saved add location to localForage
saveCity.addEventListener('click', () => {
  const city = document.querySelector('.card__header h3').innerText
  const place = document.querySelector('.card')
  if (process.env.NODE_ENV !== 'production') {
    console.log('Saved ' + city)
    console.log(place)
  }
  savedCities.addCity(city)
  savedCities.offlineCity(place)
})
