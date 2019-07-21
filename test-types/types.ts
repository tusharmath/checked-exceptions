/* tslint:disable */
import * as E from '../index'

// $ExpectType CheckedExceptionClass<"E1", void>
E.check('E1')

// $ExpectType CheckedExceptionClass<"E1", { id: number; }>
E.check('E1', (_: {id: number}) => _.id.toString())

const NotImplemented = E.check('NotImplemented')

// $ExpectType CheckedExceptionClass<"NotImplemented", void>[]
new Array<typeof NotImplemented>()

// $ExpectType ICheckedException<"NotImplemented", void>
E.check('NotImplemented').info

// $ExpectType string
E.check('NotImplemented', () => 'ABC').info.message

// $ExpectType string | undefined
E.check('NotImplemented', () => 'ABC').info.stack
