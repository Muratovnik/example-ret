/// <reference types="vite/client" />
type IfUnknownOrAny<T, Y, N> = unknown extends T ? Y : N;
type IfAny<T, Y, N> = (T extends never ? 1 : 0) extends 0 ? N : Y;

type ArrayType<T> = IfUnknownOrAny<
  T,
  IfAny<T, T[] extends T ? T[] : T[] & T, any[] & T>,
  Extract<T, readonly any[]>
>;

declare global {
  interface ArrayConstructor {
    isArray<T>(arg: T): arg is ArrayType<T>;
  }
}
