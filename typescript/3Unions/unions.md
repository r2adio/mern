# Union

union types use pipe symbol `|` and allows to specify that a value can be one of several types.

```typescript
let userId: string | number;
userId = "user_1";
userId = 1;
```

# Type narrowing

- as union are perfect for when a value could be one or several types.
- w/ TS, the conditional checks actually change the type of a variable, called `type narrowing`.

```typescript
function safeSquare(val: string | number): number {
  if (typeof val === "string") {
    val = parseInt(val, 10);
  }
  return val * val; //now val is only a number
}
let result = safeSquare("5");
console.log(result); // 25
result = safeSquare(5);
console.log(result); // 25
```

# Optional Parameters

- any function parameters can be set as optionals, w/ a question mark (?) after the name.
- when a parameter is optional, means its union of `type specified by user` and `undefined`.
- simple rules to keep in mind regarding optional parameters:
  - optional parameters must come after all required parameters.
  - optional parameters have an undefined automatically unioned on specified type.

# Default Parameters

when using default parameters, u don't need to mark the parameter as optional by using `?`.
when using default value, the parameter type can be automatically inferred, so dont specify it:

```typescript
function newCharacter(name: string, role: string = "warrior") {
  // role: string "warrior" OR role = "warrior"
  return `${name} is a ${role}`;
}
console.log(newCharacter("gandalf")); // gandalf is a warrior
console.log(newCharacter("gandalf", "wizard")); // gandalf is a wizard
```

# Literal Types

- are incredibly powerful for narrowing the possible values of a variable.
- allows to define the type of smthing not just like a string number boolean, but instead as an actual value.

  using generics types:
  `function move(direction: string) { ... }`
  using a literal value, as TS don't have enums {as in many languages enums are used to solve these issues}
  `function move(direction: "north") { ... }`

# Value Unions

from last topic:
`function move(direction: "north") { ... }`

using Literal Types w/ union types:

```typescript
function move(direction: "north" | "south" | "west" | "east") {
  //logic
}

// using new type, so that we can reuse:
type Direction = "north" | "south" | "east" | "west";
function move(direction: Direction) {
  //logic
}
```

# Super Set Unions
