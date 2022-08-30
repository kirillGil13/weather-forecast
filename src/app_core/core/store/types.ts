export interface IId {
  id: string | number,
}

export interface IPoint {
  X: number,
  Y: number,
}

export interface IPaginationParams {
  page: number,
  size: number,
  total: number,
}

export interface IPagination<T> extends IPaginationParams{
  items: T[],
}

export type IEventFunction =
  ((event: Event) => void) |
  ((event: Event) => undefined) |
  ((event: MouseEvent) => void) |
  ((event: MouseEvent) => undefined);

export interface IEventFunctionWithId {
  id: number,
  func: IEventFunction
}

export interface IEventHandlers {
  [key: string]: IEventFunctionWithId[],
}

export interface IEventHandlersMaxId {
  [key: string]: number,
}

