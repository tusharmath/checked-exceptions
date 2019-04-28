import {assert} from 'chai'

import {check} from '../index'

describe('check()', () => {
  /**
   *  Test User interface
   */
  interface IUser {
    /**
     * Test property
     */
    id: number
  }
  it('should returns a constructor', () => {
    const err = check('NotImplemented')
    assert.typeOf(err, 'function')
  })
  it('should return a customized message', () => {
    const E = check(
      'UserNotFound',
      (_: IUser) => `User with id: ${_.id}, could not be found`
    )
    const error = new E({id: 190})

    assert.strictEqual(error.message, 'User with id: 190, could not be found')
  })

  it('should customize toString()', () => {
    const E = check(
      'UserIdNotFound',
      (_: IUser) => `User with id: ${_.id}, could not be found`
    )
    const error = new E({id: 190})

    assert.strictEqual(
      error.toString(),
      'CheckedException(UserIdNotFound): User with id: 190, could not be found'
    )
  })

  it('should generate default string', () => {
    const E = check('NotImplemented')
    const error = new E()

    assert.strictEqual(error.toString(), 'CheckedException(NotImplemented)')
  })

  it('should return an Error', () => {
    const E = check('NotImplemented')
    assert.instanceOf(new E(), Error)
  })

  describe('data', () => {
    it('should return data params', () => {
      const E = check(
        'UserIdNotFound',
        (_: IUser) => `User with id: ${_.id}, could not be found`
      )

      const err = E.of({id: 1000})

      assert.deepEqual(err.data, {id: 1000})
    })
  })

  describe('is()', () => {
    it('should return true if the error is of the given type', () => {
      const E = check('NotImplemented')
      assert.ok(E.is(new E()))
    })

    it('should return false if the error is of the given type', () => {
      const E1 = check('NotImplemented')
      const E2 = check('Implemented')
      assert.notOk(E1.is(new E2()))
    })
  })

  describe('of()', () => {
    it('should create a checked exception', () => {
      const E = check('NotImplemented')
      assert.ok(E.is(E.of()))
    })
  })
})
