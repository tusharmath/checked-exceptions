import {ICheckedException} from './iCheckedException'
/**
 * Checked exception constructor
 */
export type CheckedExceptionConstructor<A> = new (data: A) => ICheckedException<
  A
>
