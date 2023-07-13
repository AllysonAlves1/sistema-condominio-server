/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Param,
    Delete,
  } from '@nestjs/common';
  import { AcessoVeiculoService } from './acessoveiculo.service';
  import { AcessoVeiculo } from './acessoveiculo.entity';
  
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
    async entrada(): Promise<AcessoVeiculo> {
      return this.acessoveiculoService.entrada();
    }

    //salvar a saída de um veiculo
    @Post('saidaveiculo')
    async saida(): Promise<AcessoVeiculo> {
      return this.acessoveiculoService.saida();
    }
  
    @Delete(':idAcessoVeiculo')
    async remove(@Param('idAcessoVeiculo') idAcessoVeiculo: number) {
      return this.acessoveiculoService.remove(idAcessoVeiculo);
    }
  }