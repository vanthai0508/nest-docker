import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { AppService, Movie } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }

  @UseGuards(LocalAuthGuard)
  @Get('auth/login')
  async login(@Query() req) {
    return this.authService.login(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
