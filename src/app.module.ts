import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PessoaModule } from './entidadesdentrodoap/pessoas/pessoa.module';
import { ApartamentoModule } from './apartamento/apartamento.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './usuarios/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './usuarios/auth/constants';
import { UsuarioModule } from './usuarios/usuario.module';
import { UsuarioService } from './usuarios/usuario.service';
import { AcessoPessoaModule } from './acessos/acesso_pessoa/acessopessoa.module';
import { AcessoVeiculoModule } from './acessos/acesso_veiculo/acessoveiculo.module';
import { VeiculoModule } from './entidadesdentrodoap/veiculos/veiculo.module';
import { DatabaseConfigService } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
      inject: [DatabaseConfigService],
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
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy, UsuarioService],
})
export class AppModule {}
