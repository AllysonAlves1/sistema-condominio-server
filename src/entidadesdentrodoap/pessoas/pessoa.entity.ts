/* eslint-disable prettier/prettier */
import { AcessoPessoa } from 'src/acessos/acesso_pessoa/acessopessoa.entity';
import { Apartamento } from 'src/apartamento/apartamento.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  idPessoa: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  descricao: string;

  @Column()
  proprietario: boolean;

  @ManyToOne(() => Apartamento, apartamento => apartamento.pessoas)
  apartamento: Apartamento;

  @OneToMany(() => Apartamento, apartamento => apartamento.proprietario)
  apartamentosProprietario: Apartamento[];

  @ManyToMany(() => AcessoPessoa, acessoPessoa => acessoPessoa.pessoas)
  @JoinTable()
  acessosPessoa: AcessoPessoa[];

}
