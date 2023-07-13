/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcessoVeiculo } from './acessoveiculo.entity';
import { AcessoVeiculoService } from './acessoveiculo.service';
import { AcessoVeiculoController } from './acessoveiculo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AcessoVeiculo])],
  providers: [AcessoVeiculoService],
  controllers: [AcessoVeiculoController],
})
export class AcessoVeiculoModule {}
