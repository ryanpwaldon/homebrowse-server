export class SuburbPerformanceStatisticsDto {
  suburbId: string
  state: string
  propertyCategory: string
  chronologicalSpan: number = 12
  tPlusFrom: number = 1
  tPlusTo: number = 1
  bedrooms?: number = 1
  values?: string

  constructor ({
    suburbId,
    state,
    propertyCategory,
    bedrooms,
    values
  }) {
    this.suburbId = suburbId
    this.state = state
    this.propertyCategory = propertyCategory
    this.bedrooms = bedrooms
    this.values = values
  }
}