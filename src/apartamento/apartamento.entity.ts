/* eslint-disable prettier/prettier */
import { Pessoa } from 'src/entidadesdentrodoap/pessoas/pessoa.entity';
import { Veiculo } from 'src/entidadesdentrodoap/veiculos/veiculo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
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

  @ManyToOne(() => Pessoa, pessoa => pessoa.apartamentosProprietario)
  @JoinColumn({ name: 'proprietarioId' })
  proprietario: Pessoa;

}
