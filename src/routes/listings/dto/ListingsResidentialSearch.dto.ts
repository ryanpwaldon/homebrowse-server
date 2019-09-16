import parsePrice from '../../../utils/parse-price.utils'
import formatTitleCase from '../../../utils/format-title-case'

export class ListingsResidentialSearchDto {
  listings: Listing[] = []
  count: number

  constructor (response: any) {
    this.count = response.headers['x-total-count']
    this.listings = response.data.map(item => {
      if (item.listing) return new Listing(item.listing)
      else return item.listings.map(listing => new Listing(listing))
    }).flat()
  }
}

export class Listing {
  id: number
  listingType: string
  unitNumber: string
  streetNumber: string
  street: string
  suburb: string
  state: string
  postcode: string
  lat: number
  lng: number
  bedrooms: number
  bathrooms: number
  carspaces: number
  priceUnformatted: number
  price: string
  image: string
  displayAddress: string
  url: string

  constructor(response: any) {
    this.listingType = mapListingType[response.listingType]
    this.unitNumber = response.propertyDetails.unitNumber.toUpperCase()
    this.streetNumber = response.propertyDetails.streetNumber.toUpperCase()
    this.street = formatTitleCase(response.propertyDetails.street)
    this.suburb = formatTitleCase(response.propertyDetails.suburb)
    this.state = response.propertyDetails.state
    this.postcode = response.propertyDetails.postcode
    this.bedrooms = response.propertyDetails.bedrooms || 0
    this.bathrooms = response.propertyDetails.bathrooms || 0
    this.carspaces = response.propertyDetails.carspaces || 0
    this.lat = response.propertyDetails.latitude
    this.lng = response.propertyDetails.longitude
    this.priceUnformatted = response.priceDetails.displayPrice
    this.price = parsePrice(response.priceDetails.displayPrice)
    this.image = (response.media && response.media[0].url) + '/700x600' || 'https://images.unsplash.com/photo-1501580121338-18e859f87400'
    this.id = response.id
    this.displayAddress = `${this.unitNumber ? this.unitNumber + ' / ' : ''}${this.streetNumber} ${this.street}`
    this.url = `https://www.domain.com.au/${response.listingSlug}`
  }
}

const mapListingType = {
  'Sale': 'buy',
  'Rent': 'rent',
  'Sold': 'sold'
}
