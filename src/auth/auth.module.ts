import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
// import { UsersService } from 'src/users/users.service';

@Module({
  providers: [AuthService, LocalStrategy, ConfigService, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule,
    JwtModule.register({
      secret: 'thai',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
