import { Controller, Get, Post, Body, Put, Req, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import * as mongoose from 'mongoose';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Put(':id')
  async update(@Body() updateCatDto: CreateCatDto, @Param('id') id: string) {
    // console.log(id, updateCatDto);
    // const objectId = new mongoose.Types.ObjectId(id);
    return this.catsService.updateOne(id, updateCatDto);
  }
}
