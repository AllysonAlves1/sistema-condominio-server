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

  async findOne(id: number): Promise<Pessoa | undefined> {
    return this.pessoaRepository.findOne({ where: { id } });
  }

  async create(pessoaDTO: PessoaDTO): Promise<Pessoa> {
    const pessoa = new Pessoa();
    pessoa.nome = pessoaDTO.nome;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.cpf = pessoaDTO.cpf;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.proprietario = pessoaDTO.proprietario;
    pessoa.apartamentoId = pessoaDTO.apartamentoId;
    pessoa.descricao = pessoaDTO.descricao;
    pessoa.automovel = pessoaDTO.automovel;
    pessoa.automovelplaca = pessoaDTO.automovelplaca;
    pessoa.acesso = pessoa.acesso = new Date();
    pessoa.saida = new Date();

    return this.pessoaRepository.save(pessoa);
  }

  async update(id: number, pessoaDTO: PessoaDTO): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: { id },
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa not found');
    }

    pessoa.nome = pessoaDTO.nome;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.cpf = pessoaDTO.cpf;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.proprietario = pessoaDTO.proprietario;
    pessoa.apartamentoId = pessoaDTO.apartamentoId;
    pessoa.descricao = pessoaDTO.descricao;
    pessoa.automovel = pessoaDTO.automovel;
    pessoa.automovelplaca = pessoaDTO.automovelplaca;

    return this.pessoaRepository.save(pessoa);
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.pessoaRepository.delete(id);

    if (deleteResult.affected === 0) {
      throw new NotFoundException('Pessoa not found');
    }
  }

  async updateAcesso(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: { id },
    });
    if (!pessoa) {
      // Lançar um erro ou retornar null/undefined caso o pessoa não exista
    }

    pessoa.acesso = new Date(); // Define a data e hora atual para o acesso

    return this.pessoaRepository.save(pessoa);
  }

  async updateSaida(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: { id },
    });
    if (!pessoa) {
      // Lançar um erro ou retornar null/undefined caso o pessoa não exista
    }

    pessoa.saida = new Date(); // Define a data e hora atual para a saída

    return this.pessoaRepository.save(pessoa);
  }
}
