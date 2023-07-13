/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AcessoPessoa {
  @PrimaryGeneratedColumn()
  idAcessoPessoa: number;

  @Column()
  entradaPessoa: Date;

  @Column()
  saidaPessoa: Date;

}
