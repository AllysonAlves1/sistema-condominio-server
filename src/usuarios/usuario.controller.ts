/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private usuarioService: UsuarioService,
    // private pessoaService: PessoaService,
  ) {}

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':email')
  async findOneByEmail(@Param('email') email: string) {
    return this.usuarioService.findOneByEmail(email);
  }

  //Salva um usuario no banco de dados
  @Post('register')
  async create(@Body() usuarioDTO: UsuarioDTO) {
    return this.usuarioService.create(usuarioDTO);
  }

  @Put(':idUsuario')
  async update(@Param('idUsuario') idUsuario: number, @Body() usuarioDTO: UsuarioDTO) {
    return this.usuarioService.update(idUsuario, usuarioDTO);
  }

  @Delete(':idUsuario')
  async remove(@Param('idUsuario') idUsuario: number) {
    return this.usuarioService.remove(idUsuario);
  }

  //Tentativa de login que recebe o token de autenticação JWT
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.usuarioService.login(req.user);
  }

  //Página protegida que só pode ser acessada com o token de autenticação JWT
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
