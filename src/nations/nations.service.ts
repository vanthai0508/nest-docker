import { Inject, Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { Nation } from './interfaces/nation.interface';
import { CreateNationDto } from './dto/create-nation.dto';

@Injectable()
export class NationsService {
  constructor(
    @Inject('NATION_MODEL')
    private nationModel: Model<Nation>,
  ) {}

  async create(CreateNationDto: CreateNationDto): Promise<Nation> {
    const createNation = new this.nationModel(CreateNationDto);
    return createNation.save();
  }

  async findAll(): Promise<Nation[]> {
    return this.nationModel.find({}).populate('cats').exec();
  }

  async findOne(id: ObjectId): Promise<Nation> {
    return this.nationModel.findOne(id).exec();
  }
}
