// Add API key from AccuWeather.
const key = 'GH0k8lZNzQiXuGPW4SVCwJt4Fl8RXyOl'

// Get Weather
export const getWeather = async location => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${location}?apikey=${key}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}

// Get city info
export const getCity = async city => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}
