/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from './usuarios/usuario.service';
import { Usuario } from './usuarios/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, senha: string): Promise<Usuario> {
    const user = await this.usuarioService.findOne( email, senha );
    if (user && user.senha === senha) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  //JWT
  async login(user: any) {
    const payload = { email: user.email, senha: user.senha };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}