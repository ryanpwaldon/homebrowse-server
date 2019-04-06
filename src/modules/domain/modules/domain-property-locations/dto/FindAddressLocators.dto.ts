export class FindAddressLocatorsDto {
  searchLevel: string = 'Suburb'
  suburb: string
  state: string
  postcode: string

  constructor (query) {
    this.suburb = query.suburb
    this.state = query.state
    this.postcode = query.postCode
  }
}
