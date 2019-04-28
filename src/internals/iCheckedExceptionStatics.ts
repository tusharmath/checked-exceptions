/**
 * Specification for the static functions [[ICheckedException]]s should have.
 */
export interface ICheckedExceptionStatics<P, T> {
  /**
   * Checks if the objects is of the given type
   * @param obj Any object
   */
  is(obj: unknown): obj is T

  /**
   * Constructs a new instance of the Checked Exception
   * @param message Message string to be printed on the console
   */
  of(data: P): T
}
