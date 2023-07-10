/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Residente } from './residente.entity';
import { ResidentesService } from './residentes.service';
import { ResidentesController } from './residentes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Residente])],
  providers: [ResidentesService],
  controllers: [ResidentesController],
})
export class ResidentesModule {}
