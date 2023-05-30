import { OrmAdpter } from "@/adapters/orm/orm.adapter";
import { RepositoryAdpter } from "@/adapters/repositories/repository.adapter";

export const PROVIDERS_DEFAULT = [
  RepositoryAdpter,
  OrmAdpter
];
