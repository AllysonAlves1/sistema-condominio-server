/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { PessoaDTO } from './pessoa.dto';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
  ) {}

  async findAll(): Promise<Pessoa[]> {
    const pessoas = await this.pessoaRepository.find();
    return pessoas;
  }

  async findOne(idPessoa: number): Promise<Pessoa | undefined> {
    return this.pessoaRepository.findOne({ where: { idPessoa } });
  }

  async create(pessoaDTO: PessoaDTO): Promise<Pessoa> {
    const pessoa = new Pessoa();
    pessoa.nome = pessoaDTO.nome;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.cpf = pessoaDTO.cpf;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.descricao = pessoaDTO.descricao;
    pessoa.proprietario = pessoaDTO.proprietario;

    return this.pessoaRepository.save(pessoa);
  }

  async update(idPessoa: number, pessoaDTO: PessoaDTO): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: { idPessoa },
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa not found');
    }

    pessoa.nome = pessoaDTO.nome;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.cpf = pessoaDTO.cpf;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.descricao = pessoaDTO.descricao;
    pessoa.proprietario = pessoaDTO.proprietario;

    return this.pessoaRepository.save(pessoa);
  }

  async remove(idPessoa: number): Promise<void> {
    const deleteResult = await this.pessoaRepository.delete(idPessoa);

    if (deleteResult.affected === 0) {
      throw new NotFoundException('Pessoa not found');
    }
  }

}
