/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veiculo } from './veiculo.entity';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Veiculo])],
  providers: [VeiculoService],
  controllers: [VeiculoController],
})
export class VeiculoModule {}
