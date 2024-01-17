import * as mongoose from 'mongoose';

export const NationSchema = new mongoose.Schema({
  name: String,
  cats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cat',
    },
  ],
});
