import * as dotenv from 'dotenv'
import * as fs from 'fs'

export class ConfigService {
  private readonly envConfig: { [key: string]: string }

  constructor(filePath: string) {
    try {
      this.envConfig = dotenv.parse(fs.readFileSync(filePath))
    } catch (err) {
      this.envConfig = process.env
    }
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}
