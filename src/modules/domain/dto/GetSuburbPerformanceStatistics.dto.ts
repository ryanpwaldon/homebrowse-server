export class GetSuburbPerformanceStatisticsDto {
  readonly state: string
  readonly suburbId: number
  readonly propertyCategory: string
  readonly chronologicalSpan: number
  readonly tPlusFrom: number
  readonly tPlusTo: number
  readonly bedrooms: string
  readonly values: string
}
