import dayjs from 'dayjs'

const body = document.getElementsByTagName('body')[0]

// Set time of day class
const localTime = dayjs(new Date()).format('H')
const theme = 'data-theme'
let dayNight

if ((localTime >= 21 && localTime < 24) || (localTime >= 0 && localTime < 5)) {
  dayNight = 'night'
} else if (localTime > 7 && localTime <= 18) {
  dayNight = 'day'
} else {
  dayNight = 'sunrise-sunset'
}
switch (dayNight) {
  case 'night':
    body.removeAttribute(theme, 'day sunrise-sunset')
    body.setAttribute(theme, 'night')
    break
  case 'day':
    body.removeAttribute(theme, 'night sunrise-sunset')
    body.setAttribute(theme, 'day')
    break
  default:
    body.removeAttribute(theme, 'night day')
    body.setAttribute(theme, 'sunrise-sunset')
    break
}
