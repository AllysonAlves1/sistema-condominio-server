/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Param,
    Delete,
  } from '@nestjs/common';
  import { AcessoPessoaService } from './acessopessoa.service';
  import { AcessoPessoa } from './acessopessoa.entity';
  
  @Controller('acessopessoa')
  export class AcessoPessoaController {
    constructor(private acessopessoaService: AcessoPessoaService) {}
  
    @Get()
    async findAll() {
      return this.acessopessoaService.findAll();
    }
  
    @Get(':idAcessoPessoa')
    async findOne(@Param('idAcessoPessoa') idAcessoPessoa: number) {
      return this.acessopessoaService.findOne(idAcessoPessoa);
    }

    //salvar entrada de uma pessoa
    @Post('entradapessoa')
    async entrada(): Promise<AcessoPessoa> {
      return this.acessopessoaService.entrada();
    }

    //salvar a saída de uma pessoa
    @Post('saidapessoa')
    async saida(): Promise<AcessoPessoa> {
      return this.acessopessoaService.saida();
    }
  
    @Delete(':idAcessoPessoa')
    async remove(@Param('idAcessoPessoa') idAcessoPessoa: number) {
      return this.acessopessoaService.remove(idAcessoPessoa);
    }
  }