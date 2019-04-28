/**
 * Typical checked exception
 * @typeparam N Type of the exception
 * @typeparam A Additional meta data required by the exception
 */
export interface ICheckedException<N extends string, A> extends Error {
  /**
   * Error data
   */
  data: A
  /**
   * Error type
   */
  type: N
}
