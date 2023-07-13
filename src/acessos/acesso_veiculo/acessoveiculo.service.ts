/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AcessoVeiculo } from './acessoveiculo.entity';

@Injectable()
export class AcessoVeiculoService {
  constructor(
    @InjectRepository(AcessoVeiculo)
    private acessoveiculoRepository: Repository<AcessoVeiculo>,
  ) {}

  async findAll(): Promise<AcessoVeiculo[]> {
    return this.acessoveiculoRepository.find();
  }

  async findOne(idAcessoVeiculo: number): Promise<AcessoVeiculo | null> {
    return this.acessoveiculoRepository.findOne({ where: { idAcessoVeiculo } });
  }

  async entrada(): Promise<AcessoVeiculo>{
    const entradaveiculo = new AcessoVeiculo();
    entradaveiculo.entradaVeiculo = new Date()
    return this.acessoveiculoRepository.save(entradaveiculo)
  }

  async saida(): Promise<AcessoVeiculo>{
    const saidaveiculo = new AcessoVeiculo();
    saidaveiculo.saidaVeiculo = new Date()
    return this.acessoveiculoRepository.save(saidaveiculo)
  }

  async remove(idAcessoveiculo: number): Promise<void> {
    await this.acessoveiculoRepository.delete(idAcessoveiculo);
  }

}
