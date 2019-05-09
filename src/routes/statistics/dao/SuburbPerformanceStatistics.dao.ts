export class SuburbPerformanceStatisticsDao {
  suburbId: string
  state: string
  propertyCategory: 'house' | 'unit' | 'land'
  chronologicalSpan: number = 12
  tPlusFrom: number = 1
  tPlusTo: number = 10
  bedrooms: string

  constructor(query) {
    this.suburbId = query.suburbId
    this.state = query.suburb.state
    this.bedrooms = query.bedrooms || undefined
    this.propertyCategory = query.propertyCategory || 'house'
  }
}
