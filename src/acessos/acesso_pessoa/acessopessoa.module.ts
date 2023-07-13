/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcessoPessoa } from './acessopessoa.entity';
import { AcessoPessoaService } from './acessopessoa.service';
import { AcessoPessoaController } from './acessopessoa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AcessoPessoa])],
  providers: [AcessoPessoaService],
  controllers: [AcessoPessoaController],
})
export class AcessoPessoaModule {}
