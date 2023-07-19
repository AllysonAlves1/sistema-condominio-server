import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcessoPessoa } from './acessopessoa.entity';
import { AcessoPessoaService } from './acessopessoa.service';
import { AcessoPessoaController } from './acessopessoa.controller';
import { Pessoa } from 'src/pessoas/pessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AcessoPessoa, Pessoa])],
  providers: [AcessoPessoaService],
  controllers: [AcessoPessoaController],
})
export class AcessoPessoaModule {}
