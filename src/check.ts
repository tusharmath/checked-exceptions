import {CheckedExceptionClass} from './internals/checkedExceptionClass'
import {empty} from './internals/empty'
import {ICheckedException} from './internals/iCheckedException'

/**
 * Creates a new class of type [[CheckedExceptionClass]].
 * @param type Type of the exception
 * @param toString Takes in a set of data params and converts it to error string
 */
export const check = <T extends string, A = void>(
  type: T,
  toString: (data: A) => string = empty
): CheckedExceptionClass<T, A> =>
  class CheckedException extends Error implements ICheckedException<T, A> {
    /**
     * Returns the error message
     */
    public get message(): string {
      return this.dataToString(this.data)
    }
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
    public static of(data: A): ICheckedException<T, A> {
      return new CheckedException(data)
    }

    /**
     * Name of the error
     */
    public readonly name = type

    /**
     * Returns the type of the exception
     */
    public readonly type = type

    /**
     * Reference to the passed on [[toString]].
     * This is done for perf optimization.
     */
    private readonly dataToString = toString

    public constructor(public readonly data: A) {
      super()
    }

    /**
     * Returns a printable error message
     */
    public toString(): string {
      const str = this.dataToString(this.data)
      const nStr = str.length > 0 ? `: ${str}` : str

      return `${this.name}${nStr}`
    }
  }
