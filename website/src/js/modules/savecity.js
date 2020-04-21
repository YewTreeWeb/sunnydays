class SavedCities {
  constructor() {
    this.cities = db.collection('cities')
    this.unsub
  }
  async addCity(place) {
    const now = new Date()
    const city = {
      location: place,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    }
    const response = await this.cities.add(city)
    return response
  }
  offlineCity(city) {
    // save to localStorage for build if offline.
    // Clear previously saved data before saving new
    // to save storage.
    let cityLimit = 5
    let cities = []
    if (cities.length === cityLimit) {
      localForage.clear()
      cities.splice(0, cities.length)
    }
    cities.push({
      forcast: city,
    })
    localForage.setItem('cities', cities)
  }
  getCities(cb) {
    this.unsub = this.cities.orderBy('created_at').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          cb(change.doc.data(), change.doc.id)
        }
      })
    })
  }
  async getCityStorage() {
    const savedCity = await localForage.getItem('cities') // localForage

    // If there is an error, display our own error.
    if (savedCity === null) {
      throw new Error("Can't get cities or no cities saved!")
    }

    return savedCity
  }
}

export { SavedCities as default }
