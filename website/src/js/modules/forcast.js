// Add API key from OpenWeather.
const key = '312fc733d3070bc27fef36b8a58fa030'
// Add API key form Google TimeZone
const gKey = 'AIzaSyDa6qF43QFDOxJzipKKEMqdx2xts0B15A8'

// Get city weather
export const getCity = async city => {
  const base = 'https://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${city}&appid=${key}&units=metric`

  const response = await fetch(base + query)
  const data = await response.json()

  if (process.env.NODE_ENV !== 'production') {
    console.log(city)
  }

  // return data[0] With AccuWeather
  return data
}

// Get city forcast
export const getForcast = async city => {
  const base = 'https://api.openweathermap.org/data/2.5/forecast'
  const query = `?q=${city}&appid=${key}&units=metric`

  const response = await fetch(base + query)
  const data = await response.json()

  if (process.env.NODE_ENV !== 'production') {
    console.log(city)
  }

  // return data[0] With AccuWeather
  return data
}

// Get city UV
export const getUv = async (lat, lon) => {
  const base = 'https://api.openweathermap.org/data/2.5/uvi'
  const query = `?appid=${key}&lat=${lat}&lon=${lon}`

  const response = await fetch(base + query)
  const data = await response.json()

  if (process.env.NODE_ENV !== 'production') {
    console.log(lat)
    console.log(lon)
  }

  // return data[0] With AccuWeather
  return data
}

// Get city air pollution
export const getCo = async (lat, lon) => {
  const date = new Date()
  const currentDate = dayjs(date).format()

  const base = `https://api.openweathermap.org/pollution/v1/co/${lat},${lon}/current.json`
  const query = `?appid=${key}`

  const response = await fetch(base + query)
  const data = await response.json()

  if (process.env.NODE_ENV !== 'production') {
    console.log(currentDate)
    console.log(lat)
    console.log(lon)
  }

  // return data[0] With AccuWeather
  return data
}

// Get TimeZone
export const getTimeZone = async (lat, lon, timezone) => {
  const base = 'https://maps.googleapis.com/maps/api/timezone/json'
  const query = `?location=${lat},${lon}&timestamp=${timezone}&key=${gKey}`

  const response = await fetch(base + query)
  const data = await response.json()

  if (process.env.NODE_ENV !== 'production') {
    console.log(lat)
    console.log(lon)
    console.log(timezone)
  }

  return data
}
