import {ICheckedException} from './iCheckedException'
/**
 * Checked exception constructor
 */
export type CheckedExceptionConstructor<N extends string, A> = new (
  data: A
) => ICheckedException<N, A>
