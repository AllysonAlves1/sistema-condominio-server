/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PessoaModule } from './entidadesdentrodoap/pessoas/pessoa.module';
import { Pessoa } from './entidadesdentrodoap/pessoas/pessoa.entity';
import { Apartamento } from './apartamento/apartamento.entity';
import { Usuario } from './usuarios/usuario.entity';
import { ApartamentoModule } from './apartamento/apartamento.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './usuarios/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './usuarios/auth/constants';
import { UsuarioModule } from './usuarios/usuario.module';
import { UsuarioService } from './usuarios/usuario.service';
import { Veiculo } from './entidadesdentrodoap/veiculos/veiculo.entity';
import { AcessoPessoa } from './acessos/acesso_pessoa/acessopessoa.entity';
import { AcessoVeiculo } from './acessos/acesso_veiculo/acessoveiculo.entity';
import { AcessoPessoaModule } from './acessos/acesso_pessoa/acessopessoa.module';
import { AcessoVeiculoModule } from './acessos/acesso_veiculo/acessoveiculo.module';
import { VeiculoModule } from './entidadesdentrodoap/veiculos/veiculo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'nest',
      entities: [Pessoa, Usuario, Apartamento, Veiculo, AcessoPessoa, AcessoVeiculo],
      synchronize: true,
      logging: true,
    }),
    PessoaModule,
    ApartamentoModule,
    UsuarioModule,
    VeiculoModule,
    PassportModule,
    AcessoPessoaModule,
    AcessoVeiculoModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy, UsuarioService],
})
export class AppModule {}
