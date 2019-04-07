import * as numeral from 'numeral'
import { Listing } from './models/Listing'

export const extractListings = listingsSearchResponse => {
  const listings = []
  for (let result of listingsSearchResponse) {
    if (result.listing) {
      listings.push(new Listing(result.listing))
    } else if (result.listings) {
      result.listings.forEach(listing => {
        listings.push(new Listing(listing))
      })
    }
  }
  return listings
}

export const formatPrice = value => {
  if (typeof value === 'string') {
    const matches = value.match(/\$(\d+(?:\.\d+)?(?:,)?)+(?:k|K|m|M)?/g)
    if (matches && matches.length === 1) return numeral(matches[0].toLowerCase()).format('$0a')
  }
  if (typeof value === 'number') {
    return value.toString()
  }
  return '-'
}
