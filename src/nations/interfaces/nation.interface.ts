import { Document } from 'mongoose';

export interface Nation extends Document {
  readonly name: string;
}
