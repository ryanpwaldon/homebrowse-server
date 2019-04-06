import { Injectable, HttpService } from '@nestjs/common'
import { ConfigService } from 'src/modules/config/config.service'
import { FindListingsResidentialSearchDto } from './dto/FindListingsResidentialSearch.dto'
import { extractListings } from './domain-agents-listings.utils'
import * as querystring from 'querystring'
import { map } from 'rxjs/operators'

@Injectable()
export class DomainAgentsListingsService {
  baseUrl: string
  authUrl: string
  clientId: string
  clientSecret: string
  accessToken: string
  accessTokenExpiry: number

  constructor(config: ConfigService, private readonly http: HttpService) {
    this.baseUrl = config.get('DOMAIN_URL_BASE')
    this.authUrl = config.get('DOMAIN_URL_AUTH')
    this.clientId = config.get('DOMAIN_AGENTS_LISTINGS_ID')
    this.clientSecret = config.get('DOMAIN_AGENTS_LISTINGS_SECRET')
  }

  async auth() {
    if (this.accessToken && Date.now() < this.accessTokenExpiry) return
    const data = querystring.stringify({ grant_type: 'client_credentials', scope: 'api_listings_read' })
    return await this.http
      .post(this.authUrl, data, {
        headers: {
          Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .pipe(map(response => {
        this.accessToken = response.data.access_token
        this.accessTokenExpiry = Date.now() + response.data.expires_in * 1000
      }))
      .toPromise()
  }

  async findListingsResidentialSearch(query) {
    await this.auth()
    return this.http
      .post(`${this.baseUrl}/listings/residential/_search`, query, {
        headers: { Authorization: `Bearer ${this.accessToken}` }
      })
      .pipe(map(response => extractListings(response.data)))
      .toPromise()
  }

  async findListing(id: number) {
    await this.auth()
    return this.http
      .get(`${this.baseUrl}/listings/${id}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      })
      .pipe(map(response => response.data))
      .toPromise()
  }
}
