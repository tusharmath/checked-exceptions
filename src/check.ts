import {CheckedExceptionClass} from './internals/checkedExceptionClass'
import {empty} from './internals/empty'
import {ICheckedException} from './internals/iCheckedException'

/**
 * Creates a new [[ICheckedException]]
 * @param type Name of the exception
 * @param toString Takes in a set of data params and converts it to error string
 */
export const check = <N extends string, A = void>(
  type: N,
  toString: (data: A) => string = empty
): CheckedExceptionClass<N, A> =>
  class CheckedException extends Error implements ICheckedException<N, A> {
    /**
     * Checks if the object is an instance of the given error type
     * @param obj Any object
     */
    public static is(obj: unknown): obj is CheckedException {
      return obj instanceof CheckedException
    }

    /**
     * Creates a new instance of the exception
     * @param message Error Message
     */
    public static of(data: A): ICheckedException<N, A> {
      return new CheckedException(data)
    }

    /**
     * Returns the type of the exception
     */
    public readonly type = type

    /**
     * Reference to the passed on [[toString]].
     * This is done for perf optimization.
     */
    private readonly dataToString = toString

    /**
     * Reference to the passed on [[name]].
     * This is done for perf optimization.
     */
    private readonly exceptionName = type

    public constructor(public readonly data: A) {
      super()
    }

    /**
     * Returns the error message
     */
    public get message(): string {
      return this.dataToString(this.data)
    }

    /**
     * Returns a printable error message
     */
    public toString(): string {
      const str = this.dataToString(this.data)
      const nStr = str.length > 0 ? `: ${str}` : str

      return `${this.constructor.name}(${this.exceptionName})${nStr}`
    }
  }
