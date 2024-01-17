import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { storesProviders } from './stores.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...storesProviders],
})
export class StoresModule {}
