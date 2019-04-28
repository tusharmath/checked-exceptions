import {CheckedExceptionConstructor} from './checkedExceptionConstructor'
import {ICheckedException} from './iCheckedException'
import {ICheckedExceptionStatics} from './iCheckedExceptionStatics'

/**
 * Typings for the actual class.
 * Contains the constructor information & the static methods
 */
export type CheckedExceptionClass<N, A> = CheckedExceptionConstructor<N, A> &
  ICheckedExceptionStatics<A, ICheckedException<N, A>>
