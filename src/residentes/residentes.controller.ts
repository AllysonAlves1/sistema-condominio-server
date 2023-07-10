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
import { ResidentesService } from './residentes.service';
import { ResidenteDTO } from './residente.dto';

@Controller('residentes')
export class ResidentesController {
  constructor(private residenteService: ResidentesService) {}

  @Get()
  async findAll() {
    return this.residenteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.residenteService.findOne(id);
  }

  @Post()
  async create(@Body() residenteDTO: ResidenteDTO) {
    return this.residenteService.create(residenteDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() residenteDTO: ResidenteDTO) {
    return this.residenteService.update(id, residenteDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.residenteService.remove(id);
  }

  @Put(':id/acesso')
  async updateAcesso(@Param('id') id: number) {
    return this.residenteService.updateAcesso(id);
  }

  @Put(':id/saida')
  async updateSaida(@Param('id') id: number) {
    return this.residenteService.updateSaida(id);
  }
}
