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
import { PessoaService } from './pessoa.service';
import { PessoaDTO } from './pessoa.dto';

@Controller('pessoa')
export class PessoaController {
  constructor(private pessoaService: PessoaService) {}

  @Get()
  async findAll() {
    return this.pessoaService.findAll();
  }

  @Get('list')
  async getList() {
    return this.pessoaService.getList();
  }

  @Get(':idPessoa')
  async findOne(@Param('idPessoa') idPessoa: number) {
    return this.pessoaService.findOne(idPessoa);
  }

  @Post('registrar')
  async create(@Body() pessoaDTO: PessoaDTO) {
    return this.pessoaService.create(pessoaDTO);
  }

  @Put(':idPessoa')
  async update(@Param('idPessoa') idPessoa: number, @Body() pessoaDTO: PessoaDTO) {
    return this.pessoaService.update(idPessoa, pessoaDTO);
  }

  @Delete(':idPessoa')
  async remove(@Param('idPessoa') idPessoa: number) {
    return this.pessoaService.remove(idPessoa);
  }

}
