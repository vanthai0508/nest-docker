import mongoose, { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { NationsService } from 'src/nations/nations.service';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
    @Inject(NationsService) private nationService: NationsService,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    const cat = await createdCat.save();
    const nationCreated = await this.nationService.findOne(
      createdCat['nation'],
    );
    nationCreated['cats'].push(cat._id);
    nationCreated.save();
    return cat;
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().populate('nation').exec();
  }

  async updateOne(id: string, updateCat: CreateCatDto): Promise<Cat> {
    const filter = {
      _id: id,
    };
    const objectId = new mongoose.Types.ObjectId(id);
    await this.catModel.updateOne(filter, updateCat);
    return this.catModel.findOne(objectId).exec();
  }
}
