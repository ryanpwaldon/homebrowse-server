import { Listing } from "./models/Listing";

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