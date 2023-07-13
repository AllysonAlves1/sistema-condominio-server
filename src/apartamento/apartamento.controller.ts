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

  @Get(':idApartamento')
  async findOne(@Param('idApartamento') idApartamento: number) {
    return this.apartamentoService.findOne(idApartamento);
  }

  @Post('registrar')
  async create(@Body() apartamentoDTO: ApartamentoDTO) {
    return this.apartamentoService.create(apartamentoDTO);
  }

  @Put(':idApartamento')
  async update(@Param('idApartamento') idApartamento: number, @Body() apartamentoDTO: ApartamentoDTO) {
    return this.apartamentoService.update(idApartamento, apartamentoDTO);
  }

  @Delete(':idApartamento')
  async remove(@Param('idApartamento') idApartamento: number) {
    return this.apartamentoService.remove(idApartamento);
  }
}
