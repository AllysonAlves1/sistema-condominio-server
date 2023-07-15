import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './pessoa.entity';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { AcessoPessoa } from 'src/acessos/acesso_pessoa/acessopessoa.entity';
import { Apartamento } from 'src/apartamento/apartamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa, AcessoPessoa, Apartamento])],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
