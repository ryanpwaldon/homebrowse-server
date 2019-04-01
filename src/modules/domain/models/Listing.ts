import { formatPrice } from "../domain.utils";

export class Listing {
  id: number
  address: {
    unitNumber: string
    streetNumber: string
    street: string
    suburb: string
    state: string
    postcode: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  features: {
    bedrooms: number
    bathrooms: number
    carspaces: number
  }
  priceUnformatted: number
  price: string
  image: string

  constructor(listingResponse: any) {
    this.address = {
      unitNumber: listingResponse.propertyDetails.unitNumber,
      streetNumber: listingResponse.propertyDetails.streetNumber,
      street: listingResponse.propertyDetails.street,
      suburb: listingResponse.propertyDetails.suburb,
      state: listingResponse.propertyDetails.state,
      postcode: listingResponse.propertyDetails.postcode
    }
    this.features = {
      bedrooms: listingResponse.propertyDetails.bedrooms || 0,
      bathrooms: listingResponse.propertyDetails.bathrooms || 0,
      carspaces: listingResponse.propertyDetails.carspaces || 0
    }
    this.coordinates = {
      lat: listingResponse.propertyDetails.latitude,
      lng: listingResponse.propertyDetails.longitude
    }
    this.priceUnformatted = listingResponse.priceDetails.displayPrice
    this.price = formatPrice(listingResponse.priceDetails.displayPrice)
    this.image =
      (listingResponse.media && listingResponse.media[0].url) ||
      'https://static.dezeen.com/uploads/2018/09/be-landa-29-design-crazy-rich-asians-residence-kuala-lumpur-stephanie-maignon_dezeen_hero-1024x576.jpg'
    this.id = listingResponse.id
  }
}
