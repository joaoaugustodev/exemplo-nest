import { Injectable } from "@nestjs/common";

import { RepositoryAdpter } from "@/adapters/repositories/repository.adapter";
import { BodyResponseORM } from "@/interfaces/orm";
import { User } from "@/models/user.model";

@Injectable()
export class UserRepository {
  constructor(private orm: RepositoryAdpter) {
    this.orm.setModelName('user');
  }

  async createUser(data: User): Promise<BodyResponseORM<User>> {
    return await this.orm.create<User>(data);
  }

  async findAllUser(): Promise<BodyResponseORM<User[]>> {
    return await this.orm.findAll<User>();
  }
}
