/* eslint-disable prettier/prettier */
import { Usuario } from 'src/usuarios/usuario.entity';
import { Pessoa } from 'src/pessoa/pessoa.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Acesso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bloco: string;

  @Column()
  apartamento: string;

  @Column()
  condominioId: number;

  @ManyToOne(() => Usuario, usuario => usuario.apartamentos)
  condominio: Usuario;

  @OneToMany(() => Pessoa, pessoa => pessoa.apartamentoId)
  pessoas: Pessoa[];

}
