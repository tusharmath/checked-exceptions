import {ICheckedException} from './iCheckedException'
/**
 * Checked exception constructor
 */
export type CheckedExceptionConstructor<N, A> = new (
  data: A
) => ICheckedException<N, A>
