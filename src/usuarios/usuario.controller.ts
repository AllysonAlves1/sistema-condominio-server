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

}
