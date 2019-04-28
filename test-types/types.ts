/* tslint:disable */
import * as E from '../index'

// $ExpectType CheckedExceptionClass<"E1", void>
E.check('E1')

// $ExpectType CheckedExceptionClass<"E1", { id: number; }>
E.check('E1', (_: {id: number}) => _.id.toString())
