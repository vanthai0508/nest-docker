import { Mongoose } from 'mongoose';
import { StoreSchema } from './schemas/store.schemas';

export const storesProviders = [
  {
    provide: 'STORE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Store', StoreSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
