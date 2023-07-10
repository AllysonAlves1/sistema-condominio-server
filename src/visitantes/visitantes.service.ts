/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitante } from './visitante.entity';
import { VisitanteDTO } from './visitante.dto';

@Injectable()
export class VisitantesService {
  constructor(
    @InjectRepository(Visitante)
    private visitantesRepository: Repository<Visitante>,
  ) {}

  async findAll(): Promise<Visitante[]> {
    return this.visitantesRepository.find();
  }

  async findOne(id: number): Promise<Visitante | null> {
    return this.visitantesRepository.findOne({ where: { id } });
  }

  async create(visitanteDTO: VisitanteDTO): Promise<Visitante> {
    const visitante = new Visitante();
    visitante.nome = visitanteDTO.nome;
    visitante.telefone = visitanteDTO.telefone;
    return this.visitantesRepository.save(visitante);
  }

  async update(
    id: number,
    visitanteDTO: VisitanteDTO,
  ): Promise<Visitante | null> {
    const visitante = await this.visitantesRepository.findOne({
      where: { id },
    });
    if (!visitante) {
      return null; // ou você pode lançar uma exceção adequada aqui
    }

    visitante.nome = visitanteDTO.nome;
    visitante.telefone = visitanteDTO.telefone;

    return this.visitantesRepository.save(visitante);
  }

  async remove(id: number): Promise<void> {
    await this.visitantesRepository.delete(id);
  }

  async updateAcesso(id: number): Promise<Visitante> {
    const visitante = await this.visitantesRepository.findOne({
      where: { id },
    });
    if (!visitante) {
      // Lançar um erro ou retornar null/undefined caso o visitante não exista
    }

    visitante.acesso = new Date(); // Define a data e hora atual para o acesso

    return this.visitantesRepository.save(visitante);
  }

  async updateSaida(id: number): Promise<Visitante> {
    const visitante = await this.visitantesRepository.findOne({
      where: { id },
    });
    if (!visitante) {
      // Lançar um erro ou retornar null/undefined caso o visitante não exista
    }

    visitante.saida = new Date(); // Define a data e hora atual para a saída

    return this.visitantesRepository.save(visitante);
  }
}
