/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Condominio } from './condominio.entity';
import { CondominioDTO } from './condominio.dto';

@Injectable()
export class CondominioService {
  constructor(
    @InjectRepository(Condominio)
    private condominioRepository: Repository<Condominio>,
  ) {}

  async findAll(): Promise<Condominio[]> {
    return this.condominioRepository.find();
  }

  async findOne(id: number): Promise<Condominio | null> {
    return this.condominioRepository.findOne({ where: { id } });
  }

  async create(condominioDTO: CondominioDTO): Promise<Condominio> {
    const condominio = new Condominio();
    condominio.bloco = condominioDTO.bloco;
    condominio.apartamento = condominioDTO.apartamento;
    condominio.nome = condominioDTO.nome;
    return this.condominioRepository.save(condominio);
  }

  async update(
    id: number,
    condominioDTO: CondominioDTO,
  ): Promise<Condominio | null> {
    const condominio = await this.condominioRepository.findOne({
      where: { id },
    });
    if (!condominio) {
      return null; // ou você pode lançar uma exceção adequada aqui
    }

    condominio.bloco = condominioDTO.bloco;
    condominio.apartamento = condominioDTO.apartamento;
    condominio.nome = condominioDTO.nome;

    return this.condominioRepository.save(condominio);
  }

  async remove(id: number): Promise<void> {
    await this.condominioRepository.delete(id);
  }

}
