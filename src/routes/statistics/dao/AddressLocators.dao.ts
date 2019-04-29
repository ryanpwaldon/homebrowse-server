export class AddressLocatorsDao {
  searchLevel: string = 'Suburb'
  suburb: string
  state: string
  postcode: string

  constructor(query) {
    this.suburb = query.suburb.name
    this.state = query.suburb.state
    this.postcode = query.suburb.postCode
  }
}
