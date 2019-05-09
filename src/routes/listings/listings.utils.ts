import * as numeral from 'numeral'
import { ListingsResidentialSearchDto } from './dto/ListingsResidentialSearch.dto'

export const extractListings = response => {
  const listings = []
  for (let result of response) {
    if (result.listing) {
      listings.push(new ListingsResidentialSearchDto(result.listing))
    } else if (result.listings) {
      result.listings.forEach(listing => {
        listings.push(new ListingsResidentialSearchDto(listing))
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
  return ''
}
