/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartamento } from './apartamento.entity';
import { ApartamentoService } from './apartamento.service';
import { ApartamentoController } from './apartamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Apartamento])],
  providers: [ApartamentoService],
  controllers: [ApartamentoController],
})
export class AcessoModule {}
