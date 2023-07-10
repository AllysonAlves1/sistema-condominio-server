/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automovel } from './automovel.entity';
import { AutomoveisService } from './automoveis.service';
import { AutomoveisController } from './automoveis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Automovel])],
  providers: [AutomoveisService],
  controllers: [AutomoveisController],
})
export class AutomoveisModule {}
