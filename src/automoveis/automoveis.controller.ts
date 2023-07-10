/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AutomoveisService } from './automoveis.service';
import { AutomovelDTO } from './automovel.dto';

@Controller('automoveis')
export class AutomoveisController {
  constructor(private automovelService: AutomoveisService) {}

  @Get()
  async findAll() {
    return this.automovelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.automovelService.findOne(id);
  }

  @Post()
  async create(@Body() automovelDTO: AutomovelDTO) {
    return this.automovelService.create(automovelDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() automovelDTO: AutomovelDTO) {
    return this.automovelService.update(id, automovelDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.automovelService.remove(id);
  }
}
