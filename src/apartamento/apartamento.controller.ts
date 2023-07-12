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
import { ApartamentoService } from './apartamento.service';
import { ApartamentoDTO } from './apartamento.dto';

@Controller('apartamento')
export class ApartamentoController {
  constructor(private apartamentoService: ApartamentoService) {}

  @Get()
  async findAll() {
    return this.apartamentoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.apartamentoService.findOne(id);
  }

  @Post()
  async create(@Body() apartamentoDTO: ApartamentoDTO) {
    return this.apartamentoService.create(apartamentoDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() apartamentoDTO: ApartamentoDTO) {
    return this.apartamentoService.update(id, apartamentoDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.apartamentoService.remove(id);
  }
}
