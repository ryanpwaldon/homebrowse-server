export class FindSuburbStatisticsDto {
  suburb: string
  state: string
  postCode: string
  propertyCategory: string
  chronologicalSpan: number
  tPlusFrom: number
  tPlusTo: number
  values: string
  bedrooms?: string
}
