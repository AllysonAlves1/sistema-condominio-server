/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AcessoVeiculo {
  @PrimaryGeneratedColumn()
  idAcessoVeiculo: number;

  @Column()
  entradaVeiculo: Date;

  @Column()
  saidaVeiculo: Date;

}
