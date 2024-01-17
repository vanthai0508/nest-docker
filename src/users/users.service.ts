import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  private readonly users = [
    {
      userId: 1,
      username: 'thai',
      pass: '123',
    },
    {
      userId: 2,
      username: 'check',
      pass: '1234',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    console.log('userservice', username);
    const user = await this.userModel.findOne({ userName: username });
    console.log(user);
  }

  async create(user: CreateUserDto): Promise<User> {
    console.log(user.passWord);
    const saltOrRounds = 10;
    user.passWord = await bcrypt.hash(user.passWord, saltOrRounds);
    // console.log(user);
    const createUser = new this.userModel(user);
    return createUser.save();
  }

  async checkLogin(
    userName: string,
    passWord: string,
  ): Promise<User | undefined> {
    const user = await this.userModel.findOne({ userName: userName });
    return user && (await bcrypt.compare(passWord, user.passWord))
      ? user
      : null;
  }
}
