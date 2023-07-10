/* eslint-disable prettier/prettier */
import { Residente } from 'src/residentes/residente.entity';
import { Visitante } from 'src/visitantes/visitante.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Automovel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cor: string;

  @Column()
  tipo: string;

  @Column()
  placa: string;

  @ManyToOne(() => Residente, (residente) => residente.automoveis)
  residente: Residente;

  @ManyToOne(() => Visitante, (visitante) => visitante.automoveis)
  visitante: Visitante;
}
