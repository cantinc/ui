export type WatchProp <T> = T | ((update: boolean) => T)

export type Merge<A extends object, B extends object> = Omit<A, keyof B> & B

export type Assign<T extends object[]> = T extends [infer First, ...infer Rest]
  ? First extends object
    ? Rest extends object[]
      ? Merge<First, Assign<Rest>>
      : First
    : never
  : {}
