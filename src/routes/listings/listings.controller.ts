import { Controller, Get, Query, Param } from '@nestjs/common'
import { ListingsService } from './listings.service'

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.listingsService.findAll(query)
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.listingsService.findOne(id)
  }
}
