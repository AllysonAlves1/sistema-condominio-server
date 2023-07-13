/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apartamento } from './apartamento.entity';
import { ApartamentoDTO } from './apartamento.dto';

@Injectable()
export class ApartamentoService {
  constructor(
    @InjectRepository(Apartamento)
    private apartamentoRepository: Repository<Apartamento>,
  ) {}

  async findAll(): Promise<Apartamento[]> {
    return this.apartamentoRepository.find();
  }

  async findOne(idApartamento: number): Promise<Apartamento | null> {
    return this.apartamentoRepository.findOne({ where: { idApartamento } });
  }

  async create(apartamentoDTO: ApartamentoDTO): Promise<Apartamento> {
    const apartamento = new Apartamento();
    apartamento.bloco = apartamentoDTO.bloco;
    apartamento.apartamento = apartamentoDTO.apartamento;
    return this.apartamentoRepository.save(apartamento);
  }

  async update(
    idApartamento: number,
    apartamentoDTO: ApartamentoDTO,
  ): Promise<Apartamento | null> {
    const apartamento = await this.apartamentoRepository.findOne({
      where: { idApartamento },
    });
    if (!apartamento) {
      return null; // ou você pode lançar uma exceção adequada aqui
    }

    apartamento.bloco = apartamentoDTO.bloco;
    apartamento.apartamento = apartamentoDTO.apartamento;

    return this.apartamentoRepository.save(apartamento);
  }

  async remove(idApartamento: number): Promise<void> {
    await this.apartamentoRepository.delete(idApartamento);
  }

}
