/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Condominio } from './condominio.entity';
import { CondominiosService } from './condominios.service';
import { CondominiosController } from './condominios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Condominio])],
  providers: [CondominiosService],
  controllers: [CondominiosController],
})
export class CondominiosModule {}
