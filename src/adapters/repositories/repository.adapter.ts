import { Injectable } from '@nestjs/common';
import { OrmAdpter } from '@/adapters/orm/orm.adapter';
import { BodyResponseORM, ORM } from 'src/interfaces/orm';

@Injectable()
export class RepositoryAdpter implements ORM {
  private modelName: string;

  constructor(private orm: OrmAdpter) {}

  setModelName(modelName: string): void {
    this.modelName = modelName;
  }

  async create<T>(data: T): Promise<BodyResponseORM<T>> {
    return {
      body: await this.orm[this.modelName].create({ data })
    }
  }

  async findAll<T>(): Promise<BodyResponseORM<T[]>> {
    return {
      body: await this.orm[this.modelName].findMany()
    }
  }
}
