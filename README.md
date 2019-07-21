# checked-exceptions

[![Build Status](https://travis-ci.com/tusharmath/checked-exceptions.svg?branch=master)](https://travis-ci.com/tusharmath/checked-exceptions)
![npm](https://img.shields.io/npm/v/checked-exceptions.svg)

A utility library to create and manage checked exceptions in typescript.

# Index

- [Installation](#installation)
- [Usage](#usage)
  - [Create](#create)
  - [Instantiate](#instantiate)
  - [Customize](#customize)
  - [Access Data](#access-data)
- [Documentation](https://tusharmath.com/checked-exceptions)

# Installation

**npm:**

```bash
npm i checked-exceptions --save
```

**yarn:**

```bash
yarn add checked-exceptions
```

# Usage

## Create

A checked exception can be created by just importing `check` function for the library and passing it the `type` of the exception.

```ts
import {check} from 'checked-exceptions'

const NotImplemented = check('NotImplemented')

throw new NotImplemented()
```

## Instantiate

Once a checked exception class has been [created](#create), an instance of the checked exception can be created using the `new` operator or using the static `of()` function, for eg:

**Using the new operator**

```ts
const err = new NotImplemented()
```

**Using the of function**

```ts
const err = NotImplemented.of()
```

## Customize

A custom exception with additional meta data can be created by passing a second argument for eg:

```ts
type User = {id: number; name: string}

const UserIdNotFound = check(
  'UserIdNotFound',
  (user: User) => `Could not find user with id: ${user.id}`
)

throw new UserIdNotFound({id: 1900, name: 'Foo'})
```

The second argument is of type `function` and is used to generate the message string when the exception is thrown.

## Access Data

The default properties of an exception such as `stack` and `message` work like they do in a typical `Error` object. Additional properties such as `data` , `type` is also added, for eg:

```ts
type User = {id: number; name: string}

const UserIdNotFound = check(
  'UserIdNotFound',
  (user: User) => `Could not find user with id: ${user.id}`
)

const err = new UserIdNotFound({id: 1900, name: 'Foo'})

console.log(err.data.id) // prints 1900
console.log(err.type) // prints 'UserIdNotFound'
```

## Access Type

To access the type of the exception you can use the `info` property on the created checked exception —

```ts
type User = {id: number; name: string}

const UserIdNotFound = check(
  'UserIdNotFound',
  (user: User) => `Could not find user with id: ${user.id}`
)

type UserIdNodeFoundException = typeof UserIdNotFound.info

const err: UserIdNodeFoundException = new UserIdNotFound({
  id: 1900,
  name: 'Foo'
})
```
