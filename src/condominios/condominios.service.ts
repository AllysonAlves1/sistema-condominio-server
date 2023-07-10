/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Condominio } from './condominio.entity';
import { CondominioDTO } from './condominio.dto';

@Injectable()
export class CondominiosService {
  constructor(
    @InjectRepository(Condominio)
    private condominiosRepository: Repository<Condominio>,
  ) {}

  async findAll(): Promise<Condominio[]> {
    return this.condominiosRepository.find();
  }

  async findOne(id: number): Promise<Condominio | null> {
    return this.condominiosRepository.findOne({ where: { id } });
  }

  async create(condominioDTO: CondominioDTO): Promise<Condominio> {
    const condominio = new Condominio();
    condominio.nome = condominioDTO.nome;
    condominio.bloco = condominioDTO.bloco;
    condominio.apartamento = condominioDTO.apartamento;
    return this.condominiosRepository.save(condominio);
  }

  async update(
    id: number,
    condominioDTO: CondominioDTO,
  ): Promise<Condominio | null> {
    const condominio = await this.condominiosRepository.findOne({
      where: { id },
    });
    if (!condominio) {
      return null; // ou você pode lançar uma exceção adequada aqui
    }

    condominio.nome = condominioDTO.nome;
    condominio.bloco = condominioDTO.bloco;
    condominio.apartamento = condominioDTO.apartamento;

    return this.condominiosRepository.save(condominio);
  }

  async remove(id: number): Promise<void> {
    await this.condominiosRepository.delete(id);
  }
}
