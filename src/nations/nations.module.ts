import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NationsController } from './nations.controller';
import { NationsService } from './nations.service';
import { nationsProviders } from './nations.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NationsController],
  providers: [NationsService, ...nationsProviders],
  exports: [NationsService],
})
export class NationsModule {}
