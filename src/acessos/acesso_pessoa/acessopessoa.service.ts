/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AcessoPessoa } from './acessopessoa.entity';

@Injectable()
export class AcessoPessoaService {
  constructor(
    @InjectRepository(AcessoPessoa)
    private acessopessoaRepository: Repository<AcessoPessoa>,
  ) {}

  async findAll(): Promise<AcessoPessoa[]> {
    return this.acessopessoaRepository.find();
  }

  async findOne(idAcessoPessoa: number): Promise<AcessoPessoa | null> {
    return this.acessopessoaRepository.findOne({ where: { idAcessoPessoa } });
  }

  async entrada(): Promise<AcessoPessoa>{
    const entradapessoa = new AcessoPessoa();
    entradapessoa.entradaPessoa = new Date()
    return this.acessopessoaRepository.save(entradapessoa)
  }

  async saida(): Promise<AcessoPessoa>{
    const saidapessoa = new AcessoPessoa();
    saidapessoa.saidaPessoa = new Date()
    return this.acessopessoaRepository.save(saidapessoa)
  }

  async getAcessos(): Promise<number> {
    const total = await this.acessopessoaRepository.createQueryBuilder('acesso_pessoa')
      .where('entradaPessoa >= CURDATE()')
      .getCount();
    console.log(total)
    return total;
  }

  async remove(idAcessoPessoa: number): Promise<void> {
    await this.acessopessoaRepository.delete(idAcessoPessoa);
  }

}
