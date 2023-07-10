/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visitante } from './visitante.entity';
import { VisitantesService } from './visitantes.service';
import { VisitantesController } from './visitantes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Visitante])],
  providers: [VisitantesService],
  controllers: [VisitantesController],
})
export class VisitantesModule {}
