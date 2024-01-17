import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';
import { NationsModule } from 'src/nations/nations.module';
// import { NationsService } from 'src/nations/nations.service';

@Module({
  imports: [DatabaseModule, NationsModule],
  controllers: [CatsController],
  providers: [CatsService, ...catsProviders],
})
export class CatsModule {}
