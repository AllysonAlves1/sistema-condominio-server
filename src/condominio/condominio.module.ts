/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Condominio } from './condominio.entity';
import { CondominioService } from './condominio.service';
import { CondominioController } from './condominio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Condominio])],
  providers: [CondominioService],
  controllers: [CondominioController],
})
export class CondominioModule {}
