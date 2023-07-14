/* eslint-disable prettier/prettier */
import { Veiculo } from 'src/entidadesdentrodoap/veiculos/veiculo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';

@Entity()
export class AcessoVeiculo {
  @PrimaryGeneratedColumn()
  idAcessoVeiculo: number;

  @Column()
  entradaVeiculo: Date;

  @Column()
  saidaVeiculo: Date;

  @ManyToMany(() => Veiculo, veiculo => veiculo.acessosVeiculo)
  veiculos: Veiculo[];

}
