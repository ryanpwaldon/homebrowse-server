import { formatPrice } from "../domain.utils";

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

  constructor(listingResponse: any) {
    this.unitNumber = listingResponse.propertyDetails.unitNumber
    this.streetNumber = listingResponse.propertyDetails.streetNumber
    this.street = listingResponse.propertyDetails.street
    this.suburb = listingResponse.propertyDetails.suburb
    this.state = listingResponse.propertyDetails.state
    this.postcode = listingResponse.propertyDetails.postcod
    this.bedrooms = listingResponse.propertyDetails.bedrooms || 0
    this.bathrooms = listingResponse.propertyDetails.bathrooms || 0
    this.carspaces = listingResponse.propertyDetails.carspaces || 0
    this.lat = listingResponse.propertyDetails.latitude
    this.lng = listingResponse.propertyDetails.longitude
    this.priceUnformatted = listingResponse.priceDetails.displayPrice
    this.price = formatPrice(listingResponse.priceDetails.displayPrice)
    this.image = listingResponse.media && listingResponse.media[0].url || 'https://images.unsplash.com/photo-1501580121338-18e859f87400'
    this.id = listingResponse.id
  }
}
