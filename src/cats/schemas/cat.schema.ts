import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  nation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nation',
  },
});
