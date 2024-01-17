import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService, Movie } from './app.service';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
// import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // console.log(req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    // console.log(req, 'controller');
    return 'thaiii';
  }
}
