/* eslint-disable prettier/prettier */
import { Automovel } from 'src/automoveis/automovel.entity';
import { Condominio } from 'src/condominios/condominio.entity';
import { Visitante } from 'src/visitantes/visitante.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Residente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  proprietario: boolean;

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

  @OneToMany(() => Automovel, (automovel) => automovel.residente)
  automoveis: Automovel[];

  @OneToMany(() => Visitante, (visitante) => visitante.residente)
  visitantes: Visitante[];

  @ManyToOne(() => Condominio, (condominio) => condominio.residentes)
  condominio: Condominio;
}
