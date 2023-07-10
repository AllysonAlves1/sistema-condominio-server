/* eslint-disable prettier/prettier */
import { Automovel } from 'src/automoveis/automovel.entity';
import { Residente } from 'src/residentes/residente.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Visitante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  acesso: Date;

  @Column()
  saida: Date;

  @OneToMany(() => Automovel, (automovel) => automovel.visitante)
  automoveis: Automovel[];

  @ManyToOne(() => Residente, (residente) => residente.visitantes)
  residente: Residente;
}
