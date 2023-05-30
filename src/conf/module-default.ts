import { Module } from '@nestjs/common';

import * as Modules from '@/modules';

@Module({ 
  imports: Object.keys(Modules).map(module => Modules[module]) 
})
export class ModuleDefault {}
