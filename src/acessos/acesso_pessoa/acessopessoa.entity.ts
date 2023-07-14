/* eslint-disable prettier/prettier */
import { Pessoa } from 'src/entidadesdentrodoap/pessoas/pessoa.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';

@Entity()
export class AcessoPessoa {
  @PrimaryGeneratedColumn()
  idAcessoPessoa: number;

  @Column({ default: null })
  entradaPessoa: Date;

  @Column({ default: null })
  saidaPessoa: Date;

  @ManyToMany(() => Pessoa, pessoa => pessoa.acessosPessoa)
  pessoas: Pessoa[];

}
