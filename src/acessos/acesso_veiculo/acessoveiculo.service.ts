/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AcessoVeiculo } from './acessoveiculo.entity';
import { Veiculo } from 'src/entidadesdentrodoap/veiculos/veiculo.entity';
import { AcessoVeiculoDTO } from './acessoveiculo.dto';

@Injectable()
export class AcessoVeiculoService {
  constructor(
    @InjectRepository(AcessoVeiculo)
    private acessoveiculoRepository: Repository<AcessoVeiculo>,
    @InjectRepository(Veiculo)
    private veiculoRepository: Repository<Veiculo>,
  ) {}

  async findAll(): Promise<AcessoVeiculo[]> {
    return this.acessoveiculoRepository.find();
  }

  async findOne(idAcessoVeiculo: number): Promise<AcessoVeiculo | null> {
    return this.acessoveiculoRepository.findOne({ where: { idAcessoVeiculo } });
  }

  async entrada(acessoveiculoDTO: AcessoVeiculoDTO): Promise<AcessoVeiculo>{
    const entradaveiculo = new AcessoVeiculo();
    entradaveiculo.veiculo = await this.veiculoRepository.findOne({
      where: { idVeiculo: acessoveiculoDTO.veiculoIdVeiculo },
    });
    entradaveiculo.entradaVeiculo = new Date()
    
    
    return this.acessoveiculoRepository.save(entradaveiculo)
  }

  async saida(acessoveiculoDTO: AcessoVeiculoDTO): Promise<AcessoVeiculo>{
    const saidaveiculo = new AcessoVeiculo();
    saidaveiculo.veiculo = await this.veiculoRepository.findOne({
      where: { idVeiculo: acessoveiculoDTO.veiculoIdVeiculo },
    });
    saidaveiculo.saidaVeiculo = new Date()
    
    
    return this.acessoveiculoRepository.save(saidaveiculo)
  }

  async remove(idAcessoveiculo: number): Promise<void> {
    await this.acessoveiculoRepository.delete(idAcessoveiculo);
  }

}
