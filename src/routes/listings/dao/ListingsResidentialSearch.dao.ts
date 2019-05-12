export class ListingsResidentialSearchDao {
  locations: [Location]
  minBedrooms: number
  maxBedrooms: number
  minBathrooms: number
  maxBathrooms: number
  minCarspaces: number
  maxCarspaces: number
  listingType: string
  pageSize: number = 20
  page: number

  constructor (query) {
    this.locations = [new Location(query.suburb)]
    this.minBedrooms = (mapFeatures[query.bedrooms] && mapFeatures[query.bedrooms].min) || undefined
    this.maxBedrooms = (mapFeatures[query.bedrooms] && mapFeatures[query.bedrooms].max) || undefined
    this.minBathrooms = (mapFeatures[query.bathrooms] && mapFeatures[query.bathrooms].min) || undefined
    this.maxBathrooms = (mapFeatures[query.bathrooms] && mapFeatures[query.bathrooms].max) || undefined
    this.minCarspaces = (mapFeatures[query.carspaces] && mapFeatures[query.carspaces].min) || undefined
    this.maxCarspaces = (mapFeatures[query.carspaces] && mapFeatures[query.carspaces].max) || undefined
    this.listingType = mapListingType[query.propertyType]
    this.page = query.page || 1
  }
}

class Location {
  suburb: string
  state: string
  postCode: string
  constructor (query) {
    this.suburb = query.name
    this.state = query.state
    this.postCode = query.postCode
  }
}

const mapFeatures = {
  '0': { min: 0, max: 0 },
  '1': { min: 1, max: 1 },
  '2': { min: 2, max: 2 },
  '3': { min: 3, max: 3 },
  '4': { min: 4, max: 4 },
  '5+': { min: 5, max: '' },
}

const mapListingType = {
  'buy': 'Sale',
  'rent': 'Rent',
  'sold': 'Sold'
}