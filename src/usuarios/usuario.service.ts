/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService
  ) { }

  async findAll(): Promise<Usuario[]> {
    const usuario = await this.usuarioRepository.find();
    return usuario;
  }

  async findOne(email: string): Promise<Usuario> {
    const options: FindOneOptions<Usuario> = {
      where: { email },
    };

    const usuario = await this.usuarioRepository.findOne(options);
    return usuario;
  }

  async findOneByEmail(email: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOneBy({ email })
  }

  async create(usuarioDTO: UsuarioDTO): Promise<Usuario> {
    const usuario = new Usuario();

    usuario.nome = usuarioDTO.nome;
    usuario.email = usuarioDTO.email;
    usuario.senha = usuarioDTO.senha;

    return this.usuarioRepository.save(usuario);
  }

  async update(idUsuario: number, usuarioDTO: UsuarioDTO): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    usuario.idUsuario = usuarioDTO.idUsuario;
    usuario.nome = usuarioDTO.nome;
    usuario.email = usuarioDTO.email;
    usuario.senha = usuarioDTO.senha;

    return this.usuarioRepository.save(usuario);
  }

  async remove(idUsuario: number): Promise<void> {
    const deleteResult = await this.usuarioRepository.delete(idUsuario);

    if (deleteResult.affected === 0) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  async validateUser(email: string, senha: string): Promise<any> {
    const options: FindOneOptions<Usuario> = {
      where: { email },
    };
    const user = await this.usuarioRepository.findOne(options);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
