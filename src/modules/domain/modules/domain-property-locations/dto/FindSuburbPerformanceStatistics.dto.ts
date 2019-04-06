export class FindSuburbPerformanceStatisticsDto {
  state: string
  suburbId: string
  propertyCategory: string
  chronologicalSpan: number
  tPlusFrom: number
  tPlusTo: number
  bedrooms: string
  values: string

  constructor (query) {
    this.state = query.state
    this.suburbId = query.suburbId
    this.propertyCategory = query.propertyCategory
    this.chronologicalSpan = query.chronologicalSpan
    this.tPlusFrom = query.tPlusFrom
    this.tPlusTo = query.tPlusTo
    this.bedrooms = query.bedrooms
    this.values = query.values
  }
}
