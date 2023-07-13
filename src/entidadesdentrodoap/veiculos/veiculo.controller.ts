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

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.veiculoService.findOne(id);
  }

  @Post()
  async create(@Body() veiculoDTO: VeiculoDTO) {
    return this.veiculoService.create(veiculoDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() veiculoDTO: VeiculoDTO) {
    return this.veiculoService.update(id, veiculoDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.veiculoService.remove(id);
  }

}
