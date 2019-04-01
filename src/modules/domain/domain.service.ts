import { Injectable, HttpService } from '@nestjs/common'
import { ConfigService } from 'src/modules/config/config.service'
import { GetSuburbPerformanceStatisticsDto } from './dto/GetSuburbPerformanceStatistics.dto'
import { PostListingsResidentialSearchDto } from './dto/PostListingsResidentialSearchDto'
import { map } from 'rxjs/operators'
import { extractListings } from './domain.utils'
import * as querystring from 'querystring'

@Injectable()
export class DomainService {
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
      .toPromise()
      .then(response => {
        this.accessToken = response.data.access_token
        this.accessTokenExpiry = Date.now() + response.data.expires_in * 1000
      })
      .catch(error => console.log(error))
  }

  async getSuburbPerformanceStatistics(query: GetSuburbPerformanceStatisticsDto) {
    await this.auth()
    this.http
      .get(`${this.baseUrl}/suburbPerformanceStatistics`, {
        params: query,
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      })
      .subscribe(response => console.log(response), error => console.error(error))
  }

  async postListingsResidentialSearch(body: PostListingsResidentialSearchDto) {
    await this.auth()
    return this.http
      .post(`${this.baseUrl}/listings/residential/_search`, body, {
        params: body,
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      })
      .pipe(map(response => extractListings(response.data)))
  }

  async getListingsResidentialSearch(id: number) {
    await this.auth()
    return this.http
      .get(`${this.baseUrl}/listings/${id}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      })
      .pipe(map(response => response.data))
  }
}
