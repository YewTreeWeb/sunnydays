// External
import 'airbnb-browser-shims'

// Internal
import './modules/helpers'
import './modules/background'

// Dynamic Import local modules
if (window.location.pathname === '/') {
  import(
    /* webpackChunkName: "savedcities" */ /* webpackPrefetch: true */ './modules/savedcities'
  )
    .then((module) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Saved cities import loaded')
      }
      const saved = module.default
      return saved
    })
    .catch((err) => console.error(err))
} else if (window.location.pathname === '/search/') {
  import(
    /* webpackChunkName: "newcity" */ /* webpackPrefetch: true */ './modules/newcity'
  )
    .then((module) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('New city import loaded')
      }
      const newCity = module.default
      return newCity
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
