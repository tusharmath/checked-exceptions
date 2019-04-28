# checked-exceptions

[![Build Status](https://travis-ci.com/tusharmath/checked-exceptions.svg?branch=master)](https://travis-ci.com/tusharmath/checked-exceptions)
![npm](https://img.shields.io/npm/v/checked-exceptions.svg)

A utility library to create and manage checked exceptions in typescript

# Index

- [Installation](#installation)
- [Usage](#usage)
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

### Creating a checked exception type

A checked exception can be created by just importing `check` function for the library and passing it the name of the exception.

```ts
import {check} from 'checked-exceptions'

// Create a new exception type
const NotImplemented = check('NotImplemented')

// Throw the exception
throw new NotImplemented()
```

### Creating an instance

An instance of the checked exception can be created using the `new` operator or using the static `of()` function, for eg:

**Using the new operator**

```ts
const NotImplemented = check('NotImplemented')
const err = new NotImplemented()
```

**Using the of function**

```ts
const NotImplemented = check('NotImplemented')
const err = NotImplemented.of()
```

### Customizing the exception

A custom exception can be created by passing a second argument which is a function and returns a string, for eg:

```ts
type User = {id: number; name: string}

const UserIdNotFound = check(
  'UserIdNotFound',
  (user: User) => `Could not find user with id: ${user.id}`
)

throw new UserIdNotFound({id: 1900, name: 'Foo'})
```

### Accessing exception data

The default properties of an exception such as `stack` and `message` work as is. An additional property `data` is added which lets us access properties of the exception, for eg:

```ts
type User = {id: number; name: string}

const UserIdNotFound = check(
  'UserIdNotFound',
  (user: User) => `Could not find user with id: ${user.id}`
)

const err = new UserIdNotFound({id: 1900, name: 'Foo'})

console.log(err.data.id) // prints 1900
```
