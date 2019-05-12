import { formatPrice } from '../listings.utils'

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

  constructor(response: any) {
    this.unitNumber = response.propertyDetails.unitNumber
    this.streetNumber = response.propertyDetails.streetNumber
    this.street = response.propertyDetails.street
    this.suburb = response.propertyDetails.suburb
    this.state = response.propertyDetails.state
    this.postcode = response.propertyDetails.postcode
    this.bedrooms = response.propertyDetails.bedrooms || 0
    this.bathrooms = response.propertyDetails.bathrooms || 0
    this.carspaces = response.propertyDetails.carspaces || 0
    this.lat = response.propertyDetails.latitude
    this.lng = response.propertyDetails.longitude
    this.priceUnformatted = response.priceDetails.displayPrice
    this.price = formatPrice(response.priceDetails.displayPrice)
    this.image = (response.media && response.media[0].url) + '/400x300' || 'https://images.unsplash.com/photo-1501580121338-18e859f87400'
    this.id = response.id
  }
}
