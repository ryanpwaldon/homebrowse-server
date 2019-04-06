import { Injectable, HttpService } from '@nestjs/common'
import { ConfigService } from 'src/modules/config/config.service'
import { FindSuburbPerformanceStatisticsDto } from './dto/FindSuburbPerformanceStatistics.dto';
import { FindAddressLocatorsDto } from './dto/FindAddressLocators.dto';

import * as querystring from 'querystring'
import { map } from 'rxjs/operators'

@Injectable()
export class DomainPropertyLocationsService {
  baseUrl: string
  authUrl: string
  clientId: string
  clientSecret: string
  accessToken: string
  accessTokenExpiry: number

  constructor(config: ConfigService, private readonly http: HttpService) {
    this.baseUrl = config.get('DOMAIN_URL_BASE')
    this.authUrl = config.get('DOMAIN_URL_AUTH')
    this.clientId = config.get('DOMAIN_PROPERTY_LOCATIONS_ID')
    this.clientSecret = config.get('DOMAIN_PROPERTY_LOCATIONS_SECRET')
  }

  async auth() {
    if (this.accessToken && Date.now() < this.accessTokenExpiry) return
    const data = querystring.stringify({ grant_type: 'client_credentials', scope: 'api_addresslocators_read api_suburbperformance_read' })
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

  async findAddressLocatorsDto(query) {
    const findSuburbDto = new FindAddressLocatorsDto(query)
    await this.auth()
    return this.http
      .get(`${this.baseUrl}/addressLocators`, {
        params: findSuburbDto,
        headers: { Authorization: `Bearer ${this.accessToken}` }
      })
      .pipe(map(response => response.data[0].ids[0].id))
      .toPromise()
  }

  async findSuburbPerformanceStatistics(query) {
    const findSuburbStatisticsDto = new FindSuburbPerformanceStatisticsDto(query)
    await this.auth()
    return this.http
      .get(`${this.baseUrl}/suburbPerformanceStatistics`, {
        params: findSuburbStatisticsDto,
        headers: { Authorization: `Bearer ${this.accessToken}` }
      })
      .pipe(map(response => response.data))
      .toPromise()
  }
}
