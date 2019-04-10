export class SuburbPerformanceStatisticsDao {
  suburbId: string
  state: string
  propertyCategory: string = 'house'
  chronologicalSpan: number = 12
  tPlusFrom: number = 1
  tPlusTo: number = 1
  bedrooms: string

  constructor(query) {
    this.suburbId = query.suburbId
    this.state = query.location.state
    this.bedrooms = mapFeatures[query.bedrooms] || undefined
  }
}

const mapFeatures = {
  '0': { min: 0, max: 0 },
  '1': { min: 1, max: 1 },
  '2': { min: 2, max: 2 },
  '3': { min: 3, max: 3 },
  '4': { min: 4, max: 4 },
  '5+': { min: 5, max: '' },
}