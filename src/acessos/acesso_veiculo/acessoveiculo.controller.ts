/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Body,
  } from '@nestjs/common';
  import { AcessoVeiculoService } from './acessoveiculo.service';
import { AcessoVeiculoDTO } from './acessoveiculo.dto';
  
  @Controller('acessoveiculo')
  export class AcessoVeiculoController {
    constructor(private acessoveiculoService: AcessoVeiculoService) {}
  
  @Get()
  async findAll() {
    return this.acessoveiculoService.findAll();
  }
  
  @Get(':idAcessoVeiculo')
  async findOne(@Param('idAcessoVeiculo') idAcessoVeiculo: number) {
    return this.acessoveiculoService.findOne(idAcessoVeiculo);
  }

    //salvar entrada de um veiculo
  @Post('entradaveiculo')
  async entrada(@Body() acessoveiculoDTO: AcessoVeiculoDTO) {
    return this.acessoveiculoService.entrada(acessoveiculoDTO);
  }

  //salvar a saída de uma pessoa
  @Post('saidaveiculo')
  async saida(@Body() acessoveiculoDTO: AcessoVeiculoDTO) {
    return this.acessoveiculoService.saida(acessoveiculoDTO);
  }
  
  @Delete(':idAcessoVeiculo')
  async remove(@Param('idAcessoVeiculo') idAcessoVeiculo: number) {
    return this.acessoveiculoService.remove(idAcessoVeiculo);
  }
}