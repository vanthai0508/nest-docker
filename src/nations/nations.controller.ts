import { Body, Controller, Get, Post } from '@nestjs/common';
import { NationsService } from './nations.service';
import { CreateNationDto } from './dto/create-nation.dto';
import { Nation } from './interfaces/nation.interface';

@Controller('nations')
export class NationsController {
  constructor(private readonly nationsService: NationsService) {}

  @Post()
  async create(@Body() createNationDto: CreateNationDto) {
    return this.nationsService.create(createNationDto);
  }

  @Get()
  async findAll(): Promise<Nation[]> {
    return this.nationsService.findAll();
  }
}
