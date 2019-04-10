export class AddressLocatorsDao {
  searchLevel: string = 'Suburb'
  suburb: string
  state: string
  postcode: string

  constructor(query) {
    this.suburb = query.location.suburb
    this.state = query.location.state
    this.postcode = query.location.postCode
  }
}
