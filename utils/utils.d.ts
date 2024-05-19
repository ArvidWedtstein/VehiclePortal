export type ColumnsToReturn<T, C> = C extends "*"
  ? T
  : Pick<T, Extract<C, keyof T>>;

export type FilterKeys<T> = {
  [K in keyof T]?: T[K];
};
