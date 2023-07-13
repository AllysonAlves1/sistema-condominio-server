/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veiculo } from './veiculo.entity';
import { VeiculoDTO } from './veiculo.dto';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectRepository(Veiculo)
    private veiculoRepository: Repository<Veiculo>,
  ) {}

  async findAll(): Promise<Veiculo[]> {
    const veiculos = await this.veiculoRepository.find();
    return veiculos;
  }

  async findOne(idVeiculo: number): Promise<Veiculo | undefined> {
    return this.veiculoRepository.findOne({ where: { idVeiculo } });
  }

  async create(veiculoDTO: VeiculoDTO): Promise<Veiculo> {
    const veiculo = new Veiculo();
    veiculo.tipo = veiculoDTO.tipo;
    veiculo.marca = veiculoDTO.marca;
    veiculo.modelo = veiculoDTO.modelo;
    veiculo.placa = veiculoDTO.placa;

    return this.veiculoRepository.save(veiculo);
  }

  async update(idVeiculo: number, veiculoDTO: VeiculoDTO): Promise<Veiculo> {
    const veiculo = await this.veiculoRepository.findOne({
      where: { idVeiculo },
    });

    if (!veiculo) {
      throw new NotFoundException('Veiculo not found');
    }

    veiculo.tipo = veiculoDTO.tipo;
    veiculo.marca = veiculoDTO.marca;
    veiculo.modelo = veiculoDTO.modelo;
    veiculo.placa = veiculoDTO.placa;

    return this.veiculoRepository.save(veiculo);
  }

  async remove(idVeiculo: number): Promise<void> {
    const deleteResult = await this.veiculoRepository.delete(idVeiculo);

    if (deleteResult.affected === 0) {
      throw new NotFoundException('Veiculo not found');
    }
  }

}
