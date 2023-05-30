import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { BodyResponseORM } from "src/interfaces/orm";
import { User } from "src/models/user.model";
import { UserRepository } from "src/repositories/user.repository";

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: User): Promise<BodyResponseORM<User>> {
    try {
      return await this.repository.createUser(data);
    } catch(error) {
      throw new Error('Erro ao criar usuário');
    }
  }

  async findAll(): Promise<BodyResponseORM<any[]>> {
    try {
      return await this.repository.findAllUser();
    } catch(error) {
      console.log(error)
      throw new Error('Erro ao buscar usuários');
    }
  }
}
