// External
import 'airbnb-browser-shims'
import localForage from 'localforage'

// Internal
import './modules/helpers'
import { getCity, getWeather } from './modules/forcast'

const body = document.getElementsByTagName('body')[0]
const html = document.getElementsByTagName('html')[0]

// Remove loading class from body on window load.
window.onload = () => {
  window.setTimeout(() => {
    body.classList.remove('is-loading')
  }, 100)
}

html.setAttribute('data-browser', browser.name)

// LocalStorage.
if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme')
    body.removeAttribute('data-theme', 'light')
    body.removeAttribute('data-theme', 'dark')
    body.setAttribute('data-theme', theme)
  }
}

// set dark mode if user's system prefers it.
if (window.matchMedia) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('supports matchmedia')
  }
  if (
    matchMedia('(prefers-color-scheme: dark)').matches &&
    localStorage.getItem('theme') === null
  ) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('prefers dark')
    }
    body.removeAttribute('data-theme', 'light')
    body.setAttribute('data-theme', 'dark')
  }
}

// Switch between dark and light mode.
const switchTheme = document.getElementById('switch-theme')

switchTheme.addEventListener('click', e => {
  e.preventDefault()

  body.classList.add('color-theme-in-transition')
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    body.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
  window.setTimeout(() => {
    body.classList.remove('color-theme-in-transition')
  }, 1500)
})

// Getting weather
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const content = document.querySelector('.media-content')

// Output all data to DOM.
const updateUI = data => {
  // destructure properties
  const { cityData, weather } = data

  if (process.env.NODE_ENV !== 'production') {
    console.log(cityData)
    console.log(weather)
  }

  // update template
  content.innerHTML = `
    <div class="media-content">
      <p class="title is-4">${cityData.EnglishName}</p>
      <p class="subtitle is-6">${weather.WeatherText}</p>
      <div class="content">
        <p>${weather.Temperature.Metric.Value} <span>&deg;C</span></p>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  `

  // Show weather card if card doesn't have hidden class
  if (card.classList.contains('is-hidden')) {
    card.classList.remove('is-hidden')
  }
}

const updateCity = async city => {
  const cityData = await getCity(city)
  const weather = await getWeather(cityData.Key)

  return { cityData, weather }
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
})
