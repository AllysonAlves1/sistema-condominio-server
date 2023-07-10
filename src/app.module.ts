/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ResidentesModule } from './residentes/residentes.module';
import { Residente } from './residentes/residente.entity';
import { Visitante } from './visitantes/visitante.entity';
import { Condominio } from './condominios/condominio.entity';
import { Automovel } from './automoveis/automovel.entity';
import { Usuario } from './auth/usuarios/usuario.entity';
import { VisitantesModule } from './visitantes/visitantes.module';
import { CondominiosModule } from './condominios/condominios.module';
import { AutomoveisModule } from './automoveis/automoveis.module';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt/jwt.strategy';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { UsuarioModule } from './auth/usuarios/usuario.module';
import { UsuarioService } from './auth/usuarios/usuario.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [Residente, Visitante, Condominio, Automovel, Usuario],
      synchronize: true,
      logging: true,
    }),
    ResidentesModule,
    VisitantesModule,
    CondominiosModule,
    AutomoveisModule,
    UsuarioModule,
    PassportModule,
    AuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtStrategy, UsuarioService],
})
export class AppModule {}
