import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AcessoPessoa } from 'src/acessos/acesso_pessoa/acessopessoa.entity';
import { AcessoVeiculo } from 'src/acessos/acesso_veiculo/acessoveiculo.entity';
import { Apartamento } from 'src/apartamento/apartamento.entity';
import { Pessoa } from 'src/pessoas/pessoa.entity';
import { Veiculo } from 'src/veiculos/veiculo.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [
        Pessoa,
        Usuario,
        Apartamento,
        Veiculo,
        AcessoPessoa,
        AcessoVeiculo,
      ],
      synchronize: true,
      logging: true,
    };
  }
}
