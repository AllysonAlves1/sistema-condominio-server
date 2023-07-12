/* eslint-disable prettier/prettier */
import { Apartamento } from 'src/apartamento/apartamento.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  proprietario: boolean;

  @Column()
  apartamentoId: number;

  @Column()
  descricao: string;

  @Column({ nullable: true })
  automovel: string;

  @Column({ nullable: true })
  automovelplaca: string;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  acesso: Date | null;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  saida: Date | null;

  @ManyToOne(() => Apartamento, apartamento => apartamento.pessoas)
  apartamento: Apartamento;
}
