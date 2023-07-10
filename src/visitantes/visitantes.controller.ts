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
import { VisitantesService } from './visitantes.service';
import { VisitanteDTO } from './visitante.dto';

@Controller('visitantes')
export class VisitantesController {
  constructor(private visitanteService: VisitantesService) {}

  @Get()
  async findAll() {
    return this.visitanteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.visitanteService.findOne(id);
  }

  @Post()
  async create(@Body() visitanteDTO: VisitanteDTO) {
    return this.visitanteService.create(visitanteDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() visitanteDTO: VisitanteDTO) {
    return this.visitanteService.update(id, visitanteDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.visitanteService.remove(id);
  }
}
