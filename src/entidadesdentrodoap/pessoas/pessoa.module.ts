/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './pessoa.entity';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { AcessoPessoa } from 'src/acessos/acesso_pessoa/acessopessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa,AcessoPessoa])],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
