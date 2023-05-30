import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from '@/services/user.service';
import { User } from '@/models/user.model';
import { BodyResponseORM } from '@/interfaces/orm';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: User): Promise<BodyResponseORM<User>> {
    return await this.userService.create(userData);
  }

  @Get()
  async getUser(): Promise<BodyResponseORM<User[]>> {
    return await this.userService.findAll();
  }
}
