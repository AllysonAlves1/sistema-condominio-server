/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usuarioService: UsuarioService) {
    super(
      {usernameField: 'email', passwordField: 'senha'}
    );
  }

  async validate(email: string, senha: string): Promise<any> {
    const user = await this.usuarioService.validateUser(email, senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}