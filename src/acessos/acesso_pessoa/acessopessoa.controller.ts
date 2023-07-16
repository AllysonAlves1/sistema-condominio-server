/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { AcessoPessoaService } from './acessopessoa.service';
import { AcessoPessoaDTO } from './acessopessoa.dto';

@Controller('acessopessoa')
export class AcessoPessoaController {
  constructor(private acessopessoaService: AcessoPessoaService) { }

  @Get()
  async findAll() {
    return this.acessopessoaService.findAll();
  }

  @Get('countAcessoEntrada')
  async CountAcessoToday() {
    return this.acessopessoaService.countAcessoPessoa();
  }

  @Get('countAcessoSaida')
  async CountSaidaToday() {
    return this.acessopessoaService.countSaidaPessoa();
  }

  @Get('countAcessoVisitantes')
  async countAcessoVisitantes() {
    return this.acessopessoaService.countAcessoVisitantes();
  }

  @Get(':idAcessoPessoa')
  async findOne(@Param('idAcessoPessoa') idAcessoPessoa: number) {
    return this.acessopessoaService.findOne(idAcessoPessoa);
  }

  //salvar entrada de uma pessoa
  @Post('entradapessoa')
  async entrada(@Body() acessopessoaDTO: AcessoPessoaDTO) {
    return this.acessopessoaService.entrada(acessopessoaDTO);
  }

  //salvar a saída de uma pessoa
  @Post('saidapessoa')
  async saida(@Body() acessopessoaDTO: AcessoPessoaDTO) {
    return this.acessopessoaService.saida(acessopessoaDTO);
  }

  @Delete(':idAcessoPessoa')
  async remove(@Param('idAcessoPessoa') idAcessoPessoa: number) {
    return this.acessopessoaService.remove(idAcessoPessoa);
  }
}