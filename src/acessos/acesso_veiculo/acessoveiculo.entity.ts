/* eslint-disable prettier/prettier */
import { Veiculo } from 'src/entidadesdentrodoap/veiculos/veiculo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class AcessoVeiculo {
  @PrimaryGeneratedColumn()
  idAcessoVeiculo: number;

  @Column({ default: null })
  entradaVeiculo: Date;

  @Column({ default: null })
  saidaVeiculo: Date;

  @ManyToOne(() => Veiculo, veiculo => veiculo.acessosVeiculo)
  veiculo: Veiculo;

}
