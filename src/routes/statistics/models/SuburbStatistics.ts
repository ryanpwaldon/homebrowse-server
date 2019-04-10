import * as moment from 'moment'

export class SuburbStatistics {
  suburb: string
  state: string
  propertyCategory: string
  series: [DataPoint]

  constructor(response) {
    this.suburb = response.header.suburb
    this.state = response.header.state
    this.propertyCategory = response.header.propertyCategory
    this.series = response.series.seriesInfo.map(item => new DataPoint(item))
  }
}

export class DataPoint {
  date: string
  medianSoldPrice: number
  numberSold: number
  highestSoldPrice: number
  lowestSoldPrice: number
  medianSaleListingPrice: number
  numberSaleListing: number
  highestSaleListingPrice: number
  lowestSaleListingPrice: number
  auctionNumberAuctioned: number
  auctionNumberSold: number
  auctionNumberWithdrawn?: number
  daysOnMarket: number
  discountPercentage?: number
  medianRentListingPrice: number
  numberRentListing: number
  highestRentListingPrice: number
  lowestRentListingPrice: number

  constructor(response) {
    this.date = moment(`${response.month}-${response.year}`, `M-YYYY`).format('YYYY-MM-DD')
    this.medianSoldPrice = response.values.medianSoldPrice
    this.numberSold = response.values.numberSold
    this.highestSoldPrice = response.values.highestSoldPrice
    this.lowestSoldPrice = response.values.lowestSoldPrice
    this.medianSaleListingPrice = response.values.medianSaleListingPrice
    this.numberSaleListing = response.values.numberSaleListing
    this.highestSaleListingPrice = response.values.highestSaleListingPrice
    this.lowestSaleListingPrice = response.values.lowestSaleListingPrice
    this.auctionNumberAuctioned = response.values.auctionNumberAuctioned
    this.auctionNumberSold = response.values.auctionNumberSold
    this.auctionNumberWithdrawn = response.values.auctionNumberWithdrawn
    this.daysOnMarket = response.values.daysOnMarket
    this.discountPercentage = response.values.discountPercentage
    this.medianRentListingPrice = response.values.medianRentListingPrice
    this.numberRentListing = response.values.numberRentListing
    this.highestRentListingPrice = response.values.highestRentListingPrice
    this.lowestRentListingPrice = response.values.lowestRentListingPrice
  }
}
