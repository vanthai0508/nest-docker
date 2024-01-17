import { Nation } from 'src/nations/interfaces/nation.interface';

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly nation: Nation;
}
