/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Condominio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bloco: string;

  @Column()
  apartamento: string;

  @Column()
  nome: string;

}
