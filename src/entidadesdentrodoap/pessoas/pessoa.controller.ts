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

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.pessoaService.findOne(id);
  }

  @Post()
  async create(@Body() pessoaDTO: PessoaDTO) {
    return this.pessoaService.create(pessoaDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() pessoaDTO: PessoaDTO) {
    return this.pessoaService.update(id, pessoaDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.pessoaService.remove(id);
  }

}
