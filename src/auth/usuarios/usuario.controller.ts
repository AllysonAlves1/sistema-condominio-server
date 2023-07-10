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
  UseGuards
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { AuthService } from '../auth.service';
import { LocalAuthGuard } from '../local-auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService) {}

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
  @Post('auth/login')
  async login(@Request() usuarioDTO: UsuarioDTO) {
    return this.authService.login(usuarioDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
