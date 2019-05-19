import { datetimeToTimestamp, datetimeToDisplay, datetimeToRelative } from '../../../utils/datetime-formatting.utils'
import parsePrice from '../../../utils/parse-price.utils'

export class ListingDto {
  id: number
  listingType: string
  price: string
  priceUnformatted: number
  dateUpdatedDisplay: string
  dateUpdatedRelative: string
  dateAvailableDisplay: string
  dateAvailableRelative: string
  dateSoldDisplay: string
  dateSoldRelative: string
  unitNumber: string
  streetNumber: string
  street: string
  suburb: string
  suburbId: string
  state: string
  postcode: string
  lat: number
  lng: number
  bedrooms: number
  bathrooms: number
  carspaces: number
  url: string
  description: string
  images: string[] = []
  floorplan: string[] = []
  videos: string[] = []

  constructor(response: any) {
    const displayPrice = response.saleMode === 'sold' ? response.saleDetails && response.saleDetails.soldDetails && response.saleDetails.soldDetails.soldPrice : response.priceDetails && response.priceDetails.displayPrice
    const dateAvailable = response.saleMode === 'rent' ? response.dateAvailable : null
    const dateSold = response.saleMode === 'sold' ? response.saleDetails && response.saleDetails.soldDetails && response.saleDetails.soldDetails.soldDate : null
    this.id = response.id
    this.listingType = response.saleMode
    this.price = parsePrice(displayPrice)
    this.priceUnformatted = displayPrice
    this.dateUpdatedDisplay = datetimeToDisplay(response.dateUpdated)
    this.dateUpdatedRelative = datetimeToRelative(response.dateUpdated)
    this.dateAvailableDisplay = dateAvailable ? datetimeToDisplay(response.dateAvailable) : null
    this.dateAvailableRelative = dateAvailable ? datetimeToRelative(response.dateAvailable) : null
    this.dateSoldDisplay = dateSold ? datetimeToDisplay(dateSold) : null
    this.dateSoldRelative = dateSold ? datetimeToRelative(dateSold) : null
    this.unitNumber = response.addressParts.unitNumber
    this.streetNumber = response.addressParts.streetNumber
    this.street = response.addressParts.street
    this.suburb = response.addressParts.suburb
    this.suburbId = response.addressParts.suburbId
    this.state = response.addressParts.stateAbbreviation
    this.postcode = response.addressParts.postcode
    this.bedrooms = response.bedrooms || 0
    this.bathrooms = response.bathrooms || 0
    this.carspaces = response.carspaces || 0
    this.lat = response.geoLocation.latitude
    this.lng = response.geoLocation.longitude
    this.url = response.seoUrl
    this.description = response.description
    response.media.forEach(item => {
      if (item.category === 'image' && item.type === 'photo') this.images.push(item.url)
      if (item.category === 'image' && item.type === 'floorplan') this.floorplan.push(item.url)
      if (item.category === 'video') this.videos.push(item.url)
    })
  }
}
