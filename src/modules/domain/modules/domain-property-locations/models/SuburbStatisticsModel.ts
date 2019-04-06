export interface SuburbStatisticsModel {
  header: Header;
  series: Series;
}
export interface Header {
  suburb: string;
  state: string;
  propertyCategory: string;
}
export interface Series {
  seriesInfo?: (SeriesInfoEntity)[] | null;
}
export interface SeriesInfoEntity {
  year: number;
  month: number;
  values: Values;
}
export interface Values {
  medianSoldPrice?: number | null;
  numberSold: number;
  highestSoldPrice: number;
  lowestSoldPrice: number;
  '5thPercentileSoldPrice'?: number | null;
  '25thPercentileSoldPrice'?: number | null;
  '75thPercentileSoldPrice'?: number | null;
  '95thPercentileSoldPrice'?: number | null;
  medianSaleListingPrice?: null;
  numberSaleListing: number;
  highestSaleListingPrice: number;
  lowestSaleListingPrice: number;
  auctionNumberAuctioned: number;
  auctionNumberSold: number;
  auctionNumberWithdrawn?: null;
  daysOnMarket?: null;
  discountPercentage?: null;
  medianRentListingPrice: number;
  numberRentListing: number;
  highestRentListingPrice: number;
  lowestRentListingPrice: number;
}
