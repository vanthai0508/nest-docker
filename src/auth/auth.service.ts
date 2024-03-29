import { Injectable } from '@nestjs/common';
// import { promises } from 'dns';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.checkLogin(username, pass);
    if (user) {
      const { passWord, ...result } = user;
      return result;
    }
    return null;
  }

  async login(userFilter: any) {
    const user = await this.userService.findOne({
      userName: userFilter.username,
    });
    const payload = { username: user.userName, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
