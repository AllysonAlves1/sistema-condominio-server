/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Automovel } from './automovel.entity';
import { AutomovelDTO } from './automovel.dto';

@Injectable()
export class AutomoveisService {
  constructor(
    @InjectRepository(Automovel)
    private automoveisRepository: Repository<Automovel>,
  ) {}

  async findAll(): Promise<Automovel[]> {
    return this.automoveisRepository.find();
  }

  async findOne(id: number): Promise<Automovel | null> {
    return this.automoveisRepository.findOne({ where: { id } });
  }

  async create(automovelDTO: AutomovelDTO): Promise<Automovel> {
    const automovel = new Automovel();
    automovel.nome = automovelDTO.nome;
    automovel.cor = automovelDTO.cor;
    automovel.tipo = automovelDTO.tipo;
    automovel.placa = automovelDTO.placa;
    return this.automoveisRepository.save(automovel);
  }

  async update(
    id: number,
    automovelDTO: AutomovelDTO,
  ): Promise<Automovel | null> {
    const automovel = await this.automoveisRepository.findOne({
      where: { id },
    });
    if (!automovel) {
      return null; // ou você pode lançar uma exceção adequada aqui
    }

    automovel.nome = automovelDTO.nome;
    automovel.cor = automovelDTO.cor;
    automovel.tipo = automovelDTO.tipo;
    automovel.placa = automovelDTO.placa;
    return this.automoveisRepository.save(automovel);
  }

  async remove(id: number): Promise<void> {
    await this.automoveisRepository.delete(id);
  }
}
