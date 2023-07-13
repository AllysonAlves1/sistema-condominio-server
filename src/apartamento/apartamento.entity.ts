/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Apartamento {
  @PrimaryGeneratedColumn()
  idApartamento: number;

  @Column()
  bloco: string;

  @Column()
  apartamento: string;

}
