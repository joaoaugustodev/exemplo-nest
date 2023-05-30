export type BodyResponseORM<T> = {
  body: T | any
}

export interface ORM {
  setModelName: (modelName: string) => void,
  create<T>(data: T, modelName: string): Promise<BodyResponseORM<T>>,
  findAll<T>(modelName: string): Promise<BodyResponseORM<T[]>>,
}
