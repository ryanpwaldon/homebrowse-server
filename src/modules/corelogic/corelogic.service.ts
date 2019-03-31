import { Injectable, HttpService } from '@nestjs/common'
import { ConfigService } from '../config/config.service'
import { GetSuggestionsDto } from './dto/GetSuggestionsDto'
import { map } from 'rxjs/operators';

@Injectable()
export class CoreLogicService {

  authUrl: string
  clientId: string
  clientSecret: string
  suggestUrl: string
  accessToken: string
  accessTokenExpiry: number

  constructor (
    config: ConfigService,
    private readonly http: HttpService
  ) {
    this.authUrl = config.get('CORELOGIC_AUTH_URL')
    this.clientId = config.get('CORELOGIC_CLIENT_ID')
    this.clientSecret = config.get('CORELOGIC_CLIENT_SECRET')
    this.suggestUrl = config.get('CORELOGIC_SUGGEST_URL')
  }

  auth() {
    console.log('authed')
    return this.http
      .get(this.authUrl, {
        params: {
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'client_credentials'
        }
      })
      .pipe(map(response => {
        this.accessToken = response.data.access_token
        this.accessTokenExpiry = Date.now() + response.data.expires_in * 1000
      }))
  }

  async getSuggestions (query: GetSuggestionsDto) {
    if (!this.accessToken || Date.now() >= this.accessTokenExpiry) {
      await this.auth()
    }
    return this.http.get(this.suggestUrl, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
      params: query
    })
    .pipe(map(response => response))
  }

}
