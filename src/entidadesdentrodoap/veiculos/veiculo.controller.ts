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

  @Get('list')
  async getCarrosList() {
    return this.veiculoService.getCarrosList();
  }

  @Post('registrar')
  async create(@Body() veiculoDTO: VeiculoDTO) {
    return this.veiculoService.create(veiculoDTO);
  }

  @Post('registrarEntrada')
  async registrarEntradaVeiculo(@Body('idVeiculo') idVeiculo: number) {
    return this.veiculoService.registrarEntradaVeiculo(idVeiculo);
  }

  @Post('registrarSaida')
  async registrarSaidaVeiculo(@Body('idVeiculo') idVeiculo: number) {
    return this.veiculoService.registrarSaidaVeiculo(idVeiculo);
  }

  @Put(':idVeiculo')
  async update(@Param('idVeiculo') idVeiculo: number, @Body() veiculoDTO: VeiculoDTO) {
    return this.veiculoService.update(idVeiculo, veiculoDTO);
  }

  @Put('entrada/:idVeiculo')
  async updateEntrada(@Param('idVeiculo') idVeiculo: number) {
    return this.veiculoService.updateEntrada(idVeiculo);
  }

  @Put('saida/:idVeiculo')
  async updateSaida(@Param('idVeiculo') idVeiculo: number) {
    return this.veiculoService.updateSaida(idVeiculo);
  }

  @Delete(':idVeiculo')
  async remove(@Param('idVeiculo') idVeiculo: number) {
    return this.veiculoService.remove(idVeiculo);
  }

}
