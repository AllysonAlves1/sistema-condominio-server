import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcessoVeiculo } from './acessoveiculo.entity';
import { AcessoVeiculoService } from './acessoveiculo.service';
import { AcessoVeiculoController } from './acessoveiculo.controller';
import { Veiculo } from 'src/veiculos/veiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AcessoVeiculo, Veiculo])],
  providers: [AcessoVeiculoService],
  controllers: [AcessoVeiculoController],
})
export class AcessoVeiculoModule {}
