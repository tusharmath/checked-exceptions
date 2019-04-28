/**
 * Typical checked exception
 */
export interface ICheckedException<A> extends Error {
  /**
   * Error data
   */
  data: A
  /**
   * Error message
   */
  message: string
  /**
   * Error name
   */
  name: string
  /**
   * Returns a printable error message
   */
  toString(): string
}
