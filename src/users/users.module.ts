import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './users.providers';
import { UserController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  exports: [UsersService],
  controllers: [UserController],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
