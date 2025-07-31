# Function Type Syntax

```typescript
function createMessage(name: string, a: number): string {
  return `name + a`;
}
```

# Void, a type used just w/ functions

- `void` represents return value of function that don't return a value.
- not even returning the undefined
- `void` explicitly communicates the intent that function returns nothing.

# Function Types

Functions themselves are values in JS/TS, which means they must also have a type, called `function type`

## Defining function types

- in TS, function type includes info about its paramenters and return value.

```typescript
// (param1: type1, param2: type2, ...) => returnType
(a: number, b: number) => number;
```

# Type Alias

`type alias` allows to create a type that is some other type but with a new name.

```typescript
// create and export a new SupportResponse function type, that takes a string(name) and return a string.
// fix greetCustomer and farewellCustomer functions, so paramenters and return values conform to SupportResponse type.
export type SupportResponse = (name: string) => string;

export function greetCustomer(name: string) {
  return `hello ${name}!`;
}
export function farewellCustomer(name: string) {
  return `Come again mr. ${name}`;
}
```

## Importing Types

with certain TS configurations u can import types directly from a module:
`import {User, Post} from "./models";`

but it's much safer and more efficient to use `import type` syntax
`import type {User, Post} from "./models";` OR `import {type User, type Post} from "./models";`

- this way TS knows that u're only importing types
- it can drop the imports from the compiled JS code.
