/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PessoaModule } from './pessoa/pessoa.module';
import { Pessoa } from './pessoa/pessoa.entity';
import { Condominio } from './condominio/condominio.entity';
import { Usuario } from './auth/usuarios/usuario.entity';
import { CondominioModule } from './condominio/condominio.module';
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
      entities: [Pessoa, Usuario, Condominio],
      synchronize: true,
      logging: true,
    }),
    PessoaModule,
    CondominioModule,
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
