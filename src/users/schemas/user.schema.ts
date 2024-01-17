import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  userName: String,
  passWord: String,
});
