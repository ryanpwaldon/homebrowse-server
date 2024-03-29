export class ListingsResidentialSearchDao {
  locations: [Location]
  minBedrooms: number
  maxBedrooms: number
  minBathrooms: number
  maxBathrooms: number
  minCarspaces: number
  maxCarspaces: number
  propertyTypes: [String]
  listingType: string
  pageSize: number = 20
  page: number
  sort: NullableSortBy

  constructor (query) {
    this.locations = [new Location(query.name, query.state, query.postcode)]
    this.minBedrooms = (mapFeatures[query.bedrooms] && mapFeatures[query.bedrooms].min) || undefined
    this.maxBedrooms = (mapFeatures[query.bedrooms] && mapFeatures[query.bedrooms].max) || undefined
    this.minBathrooms = (mapFeatures[query.bathrooms] && mapFeatures[query.bathrooms].min) || undefined
    this.maxBathrooms = (mapFeatures[query.bathrooms] && mapFeatures[query.bathrooms].max) || undefined
    this.minCarspaces = (mapFeatures[query.carspaces] && mapFeatures[query.carspaces].min) || undefined
    this.maxCarspaces = (mapFeatures[query.carspaces] && mapFeatures[query.carspaces].max) || undefined
    this.propertyTypes = query.propertyType && mapPropertyType[query.propertyType]
    this.listingType = mapListingType[query.listingType]
    this.page = query.page || 1
    this.sort = new NullableSortBy(query.sort)
  }
}

class Location {
  suburb: string
  state: string
  postCode: string
  constructor (name, state, postcode) {
    this.suburb = name
    this.state = state
    this.postCode = postcode
  }
}

class NullableSortBy {
  sortKey: string = 'DateUpdated'
  direction: string = 'Descending'

  constructor (sort) {
    const { sortKey, direction } = mapSort[sort]
    this.sortKey = sortKey
    this.direction = direction
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

const mapPropertyType = {
  'house': ['Duplex', 'House', 'NewHomeDesigns', 'NewHouseLand', 'SemiDetached', 'Terrace', 'Villa'],
  'unit': ['ApartmentUnitFlat', 'BlockOfUnits', 'NewApartments', 'PentHouse', 'Studio'],
  'townhouse': ['TownHouse'],
  'land': ['DevelopmentSite', 'NewLand', 'VacantLand'],
  'rural': ['AcreageSemiRural', 'Farm', 'Rural']
}

const mapSort = {
  'updatedDescending': { sortKey: 'DateUpdated', direction: 'Descending' },
  'updatedAscending': { sortKey: 'DateUpdated', direction: 'Ascending' },
  'priceDescending': { sortKey: 'Price', direction: 'Descending' },
  'priceAscending': { sortKey: 'Price', direction: 'Ascending' },
  'soldDateDescending': { sortKey: 'SoldDate', direction: 'Descending' },
  'soldDateAscending': { sortKey: 'SoldDate', direction: 'Ascending' },
  'inspectionTimeDescending': { sortKey: 'InspectionTime', direction: 'Descending' },
  'inspectionTimeAscending': { sortKey: 'InspectionTime', direction: 'Ascending' }
}
