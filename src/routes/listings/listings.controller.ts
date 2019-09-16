import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common'
import { ListingsService } from './listings.service'
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('jwt'))
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get(':id')
  findOne(@Param('id') id) {
    return this.listingsService.findOne(id)
  }

  @Get()
  findAll(@Query() query) {
    return this.listingsService.findAll(query)
  }

}
