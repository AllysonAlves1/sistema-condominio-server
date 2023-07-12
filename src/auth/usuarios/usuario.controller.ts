/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Request,
  UseGuards
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Pessoa } from 'src/pessoa/pessoa.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private usuarioService: UsuarioService, private pessoaService: PessoaService)
    {}

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':email')
  async findOneByEmail(@Param('email') email: string) {
    return this.usuarioService.findOneByEmail(email);
  }

  @Post()
  async create(@Body() usuarioDTO: UsuarioDTO) {
    return this.usuarioService.create(usuarioDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() usuarioDTO: UsuarioDTO) {
    return this.usuarioService.update(id, usuarioDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usuarioService.remove(id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.usuarioService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @Get(':id/pessoas')
  async getPessoasDoUsuario(@Param('id') id: number): Promise<Pessoa[]> {
    return this.usuarioService.getPessoasDoUsuario(id);
  }

  @Get('pessoas')
  async getAllPessoas(): Promise<Pessoa[]> {
    return this.pessoaService.findAll();
  }
  
}
