export class AddressLocatorsDao {
  searchLevel: string = 'Suburb'
  suburb: string
  state: string
  postcode: string

  constructor(query) {
    this.suburb = query.name
    this.state = query.state
    this.postcode = query.postcode
  }
}
