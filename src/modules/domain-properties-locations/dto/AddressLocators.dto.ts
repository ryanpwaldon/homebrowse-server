export class AddressLocatorsDto {
  searchLevel: string = 'Suburb'
  suburb: string
  state: string
  postcode: string

  constructor ({
    suburb,
    state,
    postCode
  }) {
    this.suburb = suburb
    this.state = state
    this.postcode = postCode
  }
}