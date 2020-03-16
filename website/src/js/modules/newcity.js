// Import weather api
import { getCity, getForcast } from './forcast'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

// Getting weather
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const content = document.querySelector('.card__content')
const time = document.querySelector('.card__header time')
const img = document.querySelector('.card__image img')

// Output all data to DOM.
const updateUI = data => {
  // destructure properties
  //   const { cityData, weather } = data
  const { cityData, forcast } = data

  if (process.env.NODE_ENV !== 'production') {
    console.log(cityData)
    console.log(forcast)
  }

  // update template
  let precipitationType =
    cityData.weather[0].main !== 'Rain' || cityData.weather[0].main !== 'Snow'
      ? 'Rain'
      : cityData.weather[0].main

  let precipitation = null
  if (cityData.rain) {
    precipitation = cityData.rain['1h']
  } else if (cityData.snow) {
    precipitation = cityData.snow['1h']
  } else {
    precipitation = '0'
  }
  let country = cityData.sys.country === 'GB' ? 'UK' : cityData.sys.country

  const dayTime = dayjs
    .utc()
    .local(cityData.dt)
    .format('dddd - h:mA')
  const date = dayjs
    .utc()
    .local(cityData.dt)
    .format('YYYY-MM-D')

  content.innerHTML = `
      <header class="card__header">
          <h2>${cityData.main.temp}<sup>&deg;</sup></h2>
          <h3>${cityData.name}, ${country}</h3>
          <time datetime="${date}">${dayTime}</time>
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

const updateCity = async city => {
  const cityData = await getCity(city)
  const forcast = await getForcast(city)
  return { cityData, forcast }
}

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

if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.error(err))
}
