import { Controller, Get, Query, Param } from '@nestjs/common'
import { ListingsService } from './listings.service'

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get(':id')
  findOne(@Param('id') id) {
    return this.listingsService.findOne(id)
  }

  @Get()
  findAll(@Query() query) {
    try {
      return this.listingsService.findAll(query)
    } catch (error) {
      return error
    }
  }

}
