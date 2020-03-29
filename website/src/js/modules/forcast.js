class Forcast {
  constructor() {
    // Add API key from OpenWeather.
    this.key = '312fc733d3070bc27fef36b8a58fa030'
    // Add API key form Google TimeZone
    this.gKey = 'AIzaSyDa6qF43QFDOxJzipKKEMqdx2xts0B15A8'
    // Get city weather
    this.cityURI = 'https://api.openweathermap.org/data/2.5/weather'
    // Get city forcast
    this.forcastURI = 'https://api.openweathermap.org/data/2.5/forecast'
    // Get TimeZone
    this.timeZoneURI = 'https://maps.googleapis.com/maps/api/timezone/json'
    // UV
    this.uvURI = 'https://api.openweathermap.org/data/2.5/uvi'
    // Pollution
    this.coURI = 'https://api.openweathermap.org/pollution/v1/co/'
  }
  // Get the data of the weather for the location.
  // Uses exported functions from focast.js
  async updateCity(city) {
    const cityData = await this.getCity(city)
    const forcast = await this.getForcast(city)
    const timeZone = await this.getTimeZone(
      cityData.coord.lat,
      cityData.coord.lon,
      cityData.timezone
    )
    const uv = await this.getUv(cityData.coord.lat, cityData.coord.lon)
    return {
      cityData,
      forcast,
      timeZone,
      uv,
    }
  }
  // Get city weather
  async getCity(city) {
    const query = `?q=${city}&appid=${this.key}&units=metric`
    const response = await fetch(this.cityURI + query)
    const data = await response.json()

    if (process.env.NODE_ENV !== 'production') {
      console.log(city)
    }

    // return data[0] With AccuWeather
    return data
  }

  // Get city forcast
  async getForcast(city) {
    const query = `?q=${city}&appid=${this.key}&units=metric`
    const response = await fetch(this.forcastURI + query)
    const data = await response.json()

    if (process.env.NODE_ENV !== 'production') {
      console.log(city)
    }

    // return data[0] With AccuWeather
    return data
  }

  // Get city UV
  async getUv(lat, lon) {
    const query = `?appid=${this.key}&lat=${lat}&lon=${lon}`
    const response = await fetch(this.uvURI + query)
    const data = await response.json()

    if (process.env.NODE_ENV !== 'production') {
      console.log(lat)
      console.log(lon)
    }

    // return data[0] With AccuWeather
    return data
  }

  // Get TimeZone
  async getTimeZone(lat, lon, timezone) {
    const query = `?location=${lat},${lon}&timestamp=${timezone}&key=${this.gKey}`

    const response = await fetch(this.timeZoneURI + query)
    const data = await response.json()

    if (process.env.NODE_ENV !== 'production') {
      console.log(lat)
      console.log(lon)
      console.log(timezone)
    }

    return data
  }
}

export default Forcast
