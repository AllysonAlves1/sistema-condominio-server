/* eslint-disable prettier/prettier */
import { AcessoVeiculo } from 'src/acessos/acesso_veiculo/acessoveiculo.entity';
import { Apartamento } from 'src/apartamento/apartamento.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Veiculo {
  @PrimaryGeneratedColumn()
  idVeiculo: number;

  @Column()
  tipo: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  placa: string;

  @ManyToOne(() => Apartamento, apartamento => apartamento.veiculos)
  apartamento: Apartamento;

  @ManyToMany(() => AcessoVeiculo, acessoVeiculo => acessoVeiculo.veiculos)
  @JoinTable()
  acessosVeiculo: AcessoVeiculo[];

}
