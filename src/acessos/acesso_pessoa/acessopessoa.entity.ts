import { Pessoa } from 'src/pessoas/pessoa.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class AcessoPessoa {
  @PrimaryGeneratedColumn()
  idAcessoPessoa: number;

  @Column({ default: null })
  entradaPessoa: Date;

  @Column({ default: null })
  saidaPessoa: Date;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.acessosPessoa)
  pessoa: Pessoa;
}
