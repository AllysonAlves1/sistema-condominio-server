/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
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
  condominioId: number;

  @Column()
  descricao: string;

  @Column()
  automovel: string;

  @Column()
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

}
