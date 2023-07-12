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
import { CondominioService } from './condominio.service';
import { CondominioDTO } from './condominio.dto';

@Controller('condominio')
export class CondominioController {
  constructor(private condominioService: CondominioService) {}

  @Get()
  async findAll() {
    return this.condominioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.condominioService.findOne(id);
  }

  @Post()
  async create(@Body() condominioDTO: CondominioDTO) {
    return this.condominioService.create(condominioDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() condominioDTO: CondominioDTO) {
    return this.condominioService.update(id, condominioDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.condominioService.remove(id);
  }
}
