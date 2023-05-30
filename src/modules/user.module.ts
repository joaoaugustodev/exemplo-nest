import { Module } from '@nestjs/common';

import { buildModule } from '@/utils/build-modules';

@Module(buildModule('user'))
export class UserModule {}
