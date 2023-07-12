/* eslint-disable prettier/prettier */
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
  ) {}

  async findAll(): Promise<Usuario[]> {
    const usuario = await this.usuarioRepository.find();
    return usuario;
  }

  async findOne(email: string): Promise<Usuario> {
    const options : FindOneOptions<Usuario> = {
      where: { email },
    };

    const usuario = await this.usuarioRepository.findOne(options);
    return usuario;
  }

  async findOneByEmail(email: string): Promise<Usuario | undefined>{
    return this.usuarioRepository.findOneBy({email})
  }

  async create(usuarioDTO: UsuarioDTO): Promise<Usuario> {
    const usuario = new Usuario();
  
    usuario.nome = usuarioDTO.nome;
    usuario.email = usuarioDTO.email;
    usuario.senha = usuarioDTO.senha;

    return this.usuarioRepository.save(usuario);
  }

  async update(id: number, usuarioDTO: UsuarioDTO): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    usuario.id = usuarioDTO.id;
    usuario.nome = usuarioDTO.nome;
    usuario.email = usuarioDTO.email;
    usuario.senha = usuarioDTO.senha;

    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.usuarioRepository.delete(id);

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
  
  async getPessoasDoUsuario(usuarioId: number) {
    const usuario = await this.usuarioRepository.find({where : {id : usuarioId}},
       relations: ['apartamentos', 'apartamentos.pessoas']);

    if (!usuario) {
      throw new Error('Usuário não encontrado.');
    }

    const pessoas = usuario.apartamentos.flatMap(apartamento => apartamento.pessoas);

    return pessoas;
  }
}
