/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Residente } from './residente.entity';
import { ResidenteDTO } from './residente.dto';

@Injectable()
export class ResidentesService {
  constructor(
    @InjectRepository(Residente)
    private residentesRepository: Repository<Residente>,
  ) {}

  async findAll(): Promise<Residente[]> {
    const residentes = await this.residentesRepository.find();
    return residentes;
  }

  async findOne(id: number): Promise<Residente | undefined> {
    return this.residentesRepository.findOne({ where: { id } });
  }

  async create(residenteDTO: ResidenteDTO): Promise<Residente> {
    const residente = new Residente();
    residente.nome = residenteDTO.nome;
    residente.telefone = residenteDTO.telefone;
    residente.proprietario = residenteDTO.proprietario;
    residente.acesso = residente.acesso = new Date();
    residente.saida = new Date();

    return this.residentesRepository.save(residente);
  }

  async update(id: number, residenteDTO: ResidenteDTO): Promise<Residente> {
    const residente = await this.residentesRepository.findOne({
      where: { id },
    });

    if (!residente) {
      throw new NotFoundException('Residente not found');
    }

    residente.nome = residenteDTO.nome;
    residente.telefone = residenteDTO.telefone;
    residente.proprietario = residenteDTO.proprietario;

    return this.residentesRepository.save(residente);
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.residentesRepository.delete(id);

    if (deleteResult.affected === 0) {
      throw new NotFoundException('Residente not found');
    }
  }

  async updateAcesso(id: number): Promise<Residente> {
    const residente = await this.residentesRepository.findOne({
      where: { id },
    });
    if (!residente) {
      // Lançar um erro ou retornar null/undefined caso o residente não exista
    }

    residente.acesso = new Date(); // Define a data e hora atual para o acesso

    return this.residentesRepository.save(residente);
  }

  async updateSaida(id: number): Promise<Residente> {
    const residente = await this.residentesRepository.findOne({
      where: { id },
    });
    if (!residente) {
      // Lançar um erro ou retornar null/undefined caso o residente não exista
    }

    residente.saida = new Date(); // Define a data e hora atual para a saída

    return this.residentesRepository.save(residente);
  }
}
