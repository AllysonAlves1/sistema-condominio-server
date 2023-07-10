/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    const usuario = await this.usuarioRepository.find();
    return usuario;
  }

  async findOne(email: string, senha: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({where: {email: email, senha: senha}});
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
}
