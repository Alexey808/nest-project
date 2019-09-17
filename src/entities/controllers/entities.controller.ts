import { Controller, Get, Post, Put, Delete, Header, HttpCode, Param, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateEntitiesDto, UpdateEntitiesDto } from '../schemas/entities.dto';
import { EntitiesService } from '../services/entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(
    private readonly service: EntitiesService,
  ) {}

  /**
   * GET
   */
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all entities';
  }

  @Get(':id')
  findOne(@Param('id') id): string {  // или findOne(@Param() params): string {
    return `This action returns a #${id} entity`;
  }

  /**
   * POST
   */
  @Post()
  @HttpCode(204) // настраиваемый код ответа, не обяз
  @Header('Cache-Control', 'none') // настраиваемый заголовок, не обяз
  create(@Body() createEntitiesDto: CreateEntitiesDto): string {
    return 'This action adds a new entities';
  }

  /**
   * PUT
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEntitiesDto: UpdateEntitiesDto) {
    return `This action updates a #${id} entities`;
  }

  /**
   * DELETE
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} entities`;
  }
}
