import { Controller, Get, Query, Param } from '@nestjs/common'
import { ListingsService } from './listings.service'

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  findAll(@Query() query) {
    return this.listingsService.findAll(query)
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.listingsService.findOne(id)
  }
}
