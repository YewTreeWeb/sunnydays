// Add API key from OpenWeather.
const key = '312fc733d3070bc27fef36b8a58fa030'

// Get city info
export const getCity = async city => {
  const base = 'https://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${city}&appid=${key}&units=metric`

  const response = await fetch(base + query)
  const data = await response.json()

  if (process.env.NODE_ENV !== 'production') {
    console.log(city)
    console.log(key)
  }

  // return data[0] With AccuWeather
  return data
}
