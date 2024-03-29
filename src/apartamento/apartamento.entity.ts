/* eslint-disable prettier/prettier */
import { Pessoa } from 'src/pessoas/pessoa.entity';
import { Veiculo } from 'src/veiculos/veiculo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,

} from 'typeorm';

@Entity()
export class Apartamento {
  @PrimaryGeneratedColumn()
  idApartamento: number;

  @Column()
  bloco: string;

  @Column()
  apartamento: string;

  @OneToMany(() => Veiculo, veiculo => veiculo.apartamento)
  veiculos: Veiculo[];

  @OneToMany(() => Pessoa, pessoa => pessoa.apartamento)
  pessoas: Pessoa[];

}
