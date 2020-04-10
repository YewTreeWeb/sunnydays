// External
import 'airbnb-browser-shims'

// Internal
import './modules/helpers'
import './modules/background'
// import './modules/savedcities'
// import './modules/newcity'

// Dynamic Import local modules
// const importCities = async () => {}
// importCities()
//   .then(() => {
//     console.log('imports loaded')
//   })
//   .catch((err) => {
//     console.error(err)
//   })
if (window.location.pathname === '/') {
  import(/* webpackChunkName: "savedcities" */ './modules/savedcities')
    .then((module) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('savedCities import loaded')
      }
      const saved = module.default
      saved()
    })
    .catch((err) => console.error(err))
} else if (window.location.pathname === '/search/') {
  import(/* webpackChunkName: "newcity" */ './modules/newcity')
    .then((module) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('newCity import loaded')
      }
      const newCity = module.default
      newCity()
    })
    .catch((err) => console.error(err))
}

const body = document.getElementsByTagName('body')[0]
const html = document.getElementsByTagName('html')[0]

// Log if running in localhost when in development mode.
if (
  window.location.hostname === 'localhost' &&
  process.env.NODE_ENV !== 'production'
) {
  console.log('localhost detected!')
  console.log(window.location)
}

// Remove loading class from body on window load.
window.onload = () => {
  window.setTimeout(() => {
    body.classList.remove('is-loading')
  }, 100)
}

html.setAttribute('data-browser', browser.name)

// Set time of day class
const localTime = new Date()
let dayNight
if ((localTime >= 21 && localTime < 24) || (localTime >= 0 && localTime < 5)) {
  dayNight = 'night'
} else if (localTime > 7 && localTime <= 18) {
  dayNight = 'day'
} else {
  dayNight = 'sunrise-sunset'
}
body.classList.toggle(dayNight)
