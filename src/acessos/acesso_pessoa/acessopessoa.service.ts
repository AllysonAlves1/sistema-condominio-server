/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { AcessoPessoa } from './acessopessoa.entity';
import { Pessoa } from 'src/entidadesdentrodoap/pessoas/pessoa.entity';
import { AcessoPessoaDTO } from './acessopessoa.dto';

@Injectable()
export class AcessoPessoaService {
  constructor(
    @InjectRepository(AcessoPessoa)
    private acessopessoaRepository: Repository<AcessoPessoa>,
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
  ) { }

  async findAll(): Promise<AcessoPessoa[]> {
    return this.acessopessoaRepository.find();
  }

  async countAcessoPessoa(): Promise<number> {
    const today = new Date();

    const totalEntradas = this.acessopessoaRepository.count({
      where: {
        entradaPessoa: Between(new Date(today.getFullYear(), today.getMonth(), today.getDate()), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)),
        saidaPessoa: null,
      }
    })
    return totalEntradas;
  }

  async countSaidaPessoa(): Promise<number> {
    const today = new Date();

    const totalSaidas = this.acessopessoaRepository.count({
      where: {
        entradaPessoa: null,
        saidaPessoa: Between(new Date(today.getFullYear(), today.getMonth(), today.getDate()), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)),
      }
    })
    return totalSaidas;
  }

  async findOne(idAcessoPessoa: number): Promise<AcessoPessoa | null> {
    return this.acessopessoaRepository.findOne({ where: { idAcessoPessoa } });
  }

  async entrada(acessopessoaDTO: AcessoPessoaDTO): Promise<AcessoPessoa> {
    const entradapessoa = new AcessoPessoa();
    entradapessoa.pessoa = await this.pessoaRepository.findOne({
      where: { idPessoa: acessopessoaDTO.pessoaIdPessoa },
    });
    entradapessoa.entradaPessoa = new Date()


    return this.acessopessoaRepository.save(entradapessoa)
  }

  async saida(acessopessoaDTO: AcessoPessoaDTO): Promise<AcessoPessoa> {
    const saidapessoa = new AcessoPessoa();
    saidapessoa.pessoa = await this.pessoaRepository.findOne({
      where: { idPessoa: acessopessoaDTO.pessoaIdPessoa },
    });
    saidapessoa.saidaPessoa = new Date()


    return this.acessopessoaRepository.save(saidapessoa)
  }

  async remove(idAcessoPessoa: number): Promise<void> {
    await this.acessopessoaRepository.delete(idAcessoPessoa);
  }

}
