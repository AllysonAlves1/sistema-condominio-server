/* eslint-disable prettier/prettier */
import { Residente } from 'src/residentes/residente.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Condominio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  bloco: string;

  @Column()
  apartamento: string;

  @OneToMany(() => Residente, (residente) => residente.condominio)
  residentes: Residente[];
}
