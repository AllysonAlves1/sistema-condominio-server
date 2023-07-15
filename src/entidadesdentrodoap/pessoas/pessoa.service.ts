import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { PessoaDTO } from './pessoa.dto';
import { AcessoPessoa } from 'src/acessos/acesso_pessoa/acessopessoa.entity';
import { Apartamento } from 'src/apartamento/apartamento.entity';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
    @InjectRepository(AcessoPessoa)
    private acessopessoaRepository: Repository<AcessoPessoa>,
    @InjectRepository(Apartamento)
    private apartamentoRepository: Repository<Apartamento>,
  ) {}

  async findAll(): Promise<Pessoa[]> {
    const pessoas = await this.pessoaRepository.find();
    return pessoas;
  }

  async getList(): Promise<Pessoa[]> {
    const pessoas = await this.pessoaRepository
      .createQueryBuilder('pessoa')
      .leftJoinAndSelect('pessoa.acessosPessoa', 'acesso_pessoa')
      .getRawMany();
    return pessoas;
  }

  async registrarEntradaPessoa(idPessoa: number): Promise<AcessoPessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: { idPessoa },
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa not found');
    }

    const acessopessoa = new AcessoPessoa();
    acessopessoa.pessoa = pessoa;
    acessopessoa.entradaPessoa = new Date();

    return this.acessopessoaRepository.save(acessopessoa);
  }

  async registrarSaidaPessoa(idPessoa: number): Promise<AcessoPessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: { idPessoa },
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa not found');
    }

    const acessopessoa = new AcessoPessoa();
    acessopessoa.pessoa = pessoa;
    acessopessoa.saidaPessoa = new Date();

    return this.acessopessoaRepository.save(acessopessoa);
  }

  async findOne(idPessoa: number): Promise<Pessoa | undefined> {
    return this.pessoaRepository.findOne({ where: { idPessoa } });
  }

  async create(pessoaDTO: PessoaDTO): Promise<Pessoa> {
    const pessoa = new Pessoa();
    pessoa.nome = pessoaDTO.nome;
    pessoa.telefone = pessoaDTO.telefone;
    pessoa.cpf = pessoaDTO.cpf;
    pessoa.descricao = pessoaDTO.descricao;
    pessoa.proprietario = pessoaDTO.proprietario;
    pessoa.apartamento = await this.apartamentoRepository.findOne({
      where: {
        idApartamento: pessoaDTO.apartamentoIdApartamento,
      },
    });
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
