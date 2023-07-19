/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veiculo } from './veiculo.entity';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { AcessoVeiculo } from 'src/acessos/acesso_veiculo/acessoveiculo.entity';
import { Apartamento } from 'src/apartamento/apartamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Veiculo, Apartamento, AcessoVeiculo])],
  providers: [VeiculoService],
  controllers: [VeiculoController],
})
export class VeiculoModule {}
