import * as Services from '@/services';
import * as Repos from '@/repositories';
import * as Controllers from '@/Controllers';

import { capitalize } from '@/utils/capitalize';
import { PROVIDERS_DEFAULT } from '@/conf/providers';

function getObject(obj: object, modelName: string, type: string): object[] {
  return Object.keys(obj).map(_ => obj[`${capitalize(modelName)}${type}`]);
}

function buildProviders(modelName: string): any[] {
  const services = getObject(Services, modelName, 'Service');
  const repos = getObject(Repos, modelName, 'Repository');

  return [
    ...services,
    ...repos,
    ...PROVIDERS_DEFAULT,
  ];
}

function buildControllers(modelName: string): any[] {
  return [
   ...getObject(Controllers, modelName, 'Controller'),
  ]
 }

 export function buildModule(modelName: string): Record<string, any[]> {
  return {
    controllers: buildControllers(modelName),
    providers: buildProviders(modelName),
  }
 }
