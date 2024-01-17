import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private userService: UsersService) {}

  @Post('users')
  async create(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }
}
