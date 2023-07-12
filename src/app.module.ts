/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PessoaModule } from './pessoa/pessoa.module';
import { Pessoa } from './pessoa/pessoa.entity';
import { Apartamento } from './apartamento/apartamento.entity';
import { Usuario } from './auth/usuarios/usuario.entity';
import { ApartamentoModule } from './apartamento/apartamento.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/usuarios/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/usuarios/constants';
import { UsuarioModule } from './auth/usuarios/usuario.module';
import { UsuarioService } from './auth/usuarios/usuario.service';

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
      entities: [Pessoa, Usuario, Apartamento],
      synchronize: true,
      logging: true,
    }),
    PessoaModule,
    ApartamentoModule,
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy, UsuarioService],
})
export class AppModule {}
