import { Injectable } from '@nestjs/common'
import { ConfigService } from '../../config/config.service'

import axios from 'axios'
import * as querystring from 'querystring'

@Injectable()
export class DomainPropertiesLocationsService {
  baseUrl: string
  authUrl: string
  clientId: string
  clientSecret: string
  accessToken: string
  accessTokenExpiry: number

  constructor(config: ConfigService) {
    this.baseUrl = config.get('DOMAIN_URL_BASE')
    this.authUrl = config.get('DOMAIN_URL_AUTH')
    this.clientId = config.get('DOMAIN_CLIENT_ID')
    this.clientSecret = config.get('DOMAIN_CLIENT_SECRET')
  }

  async axiosInstance() {
    await this.auth()
    return axios.create({
      baseURL: this.baseUrl,
      headers: { Authorization: `Bearer ${this.accessToken}` }
    })
  }

  async auth() {
    if (this.accessToken && Date.now() < this.accessTokenExpiry) return
    const data = querystring.stringify({ grant_type: 'client_credentials', scope: 'api_addresslocators_read api_suburbperformance_read' })
    const response = await axios.post(this.authUrl, data, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    this.accessToken = response.data.access_token
    this.accessTokenExpiry = Date.now() + response.data.expires_in * 1000
  }

  async addressLocators(query) {
    return (await this.axiosInstance()).get('/addressLocators', { params: query }).then(response => response.data)
  }

  async suburbPerformanceStatistics(query) {
    return (await this.axiosInstance()).get('/suburbPerformanceStatistics', { params: query }).then(response => response.data)
  }
}
