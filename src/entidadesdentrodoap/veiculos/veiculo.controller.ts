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
import { VeiculoService } from './veiculo.service';
import { VeiculoDTO } from './veiculo.dto';

@Controller('veiculo')
export class VeiculoController {
  constructor(private veiculoService: VeiculoService) {}

  @Get()
  async findAll() {
    return this.veiculoService.findAll();
  }

  @Get(':idVeiculo')
  async findOne(@Param('idVeiculo') idVeiculo: number) {
    return this.veiculoService.findOne(idVeiculo);
  }

  @Post('registrar')
  async create(@Body() veiculoDTO: VeiculoDTO) {
    return this.veiculoService.create(veiculoDTO);
  }

  @Put(':idVeiculo')
  async update(@Param('idVeiculo') idVeiculo: number, @Body() veiculoDTO: VeiculoDTO) {
    return this.veiculoService.update(idVeiculo, veiculoDTO);
  }

  @Delete(':idVeiculo')
  async remove(@Param('idVeiculo') idVeiculo: number) {
    return this.veiculoService.remove(idVeiculo);
  }

}
