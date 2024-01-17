import { Mongoose } from 'mongoose';
import { NationSchema } from './schemas/nation.schemas';

export const nationsProviders = [
  {
    provide: 'NATION_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Nation', NationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
