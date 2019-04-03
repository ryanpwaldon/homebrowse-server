export class FindListingsDto {
  listingType?: 'Sale' | 'Rent' | 'Share' | 'Sold' | 'NewHomes'
  propertyTypes?: Array<string>
  propertyFeatures?: Array<string>
  listingAttributes?: Array<string>
  minBedrooms?: number
  maxBedrooms?: number
  minBathrooms?: number
  maxBathrooms?: number
  minCarspaces?: number
  maxCarspaces?: number
  minPrice?: number
  maxPrice?: number
  minLandArea?: number
  maxLandArea?: number
  advertiserIds?: Array<number>
  adIds?: Array<number>
  excludeAdIds?: Array<number>
  locations?: Array<SearchLocation>
  locationTerms?: string
  keywords?: Array<string>
  inspectionFrom?: string
  inspectionTo?: string
  auctionFrom?: string
  auctionTo?: string
  sort?: NullableSortBy
  page?: number
  pageSize?: number
  geoWindow?: GeoWindow
}

class SearchLocation {
  state?: 'ACT' | 'NSW' | 'QLD' | 'VIC' | 'SA' | 'WA' | 'NT' | 'TAS'
  region?: string
  area?: string
  suburb?: string
  postCode?: string
  includeSurroundingSuburbs?: boolean
}
class NullableSortBy {
  sortKey?: 'Default' | 'Suburb' | 'Price' | 'DateUpdated' | 'InspectionTime' | 'Proximity' | 'SoldDate'
  direction?: 'Ascending' | 'Descending'
  proximityTo?: GeoPoint
}
class GeoWindow {
  box?: Box
  circle?: Circle
  polygon?: Polygon
}
class GeoPoint {
  lat?: number
  lon?: number
}
class Box {
  topLeft?: GeoPoint
  bottomRight?: GeoPoint
}
class Circle {
  center?: GeoPoint
  radiusInMeters?: number
}
class Polygon {
  points?: Array<GeoPoint>
}
