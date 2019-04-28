/**
 * Typical checked exception
 */
export interface ICheckedException<N, A> extends Error {
  /**
   * Error data
   */
  data: A
  /**
   * Error message
   */
  message: string
  /**
   * Error type
   */
  type: N
  /**
   * Returns a printable error message
   */
  toString(): string
}
