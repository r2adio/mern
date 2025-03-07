# Primitives and Non-Primitives

## Primitive Data Types:

1. String
2. Boolean
3. Number
4. Null
5. Undefined
6. Symbol

## Non-Primitive Data Types:

- Objects
  - arrays
  - functions
  - objects

> [!IMPORTANT]Checking the data type of a variable:
>
> ```js
> let score = 20;
> let anotherscore = new Number(20);
> 
> console.log(score); //20
> console.log(anotherscore); //[Number: 20]
> console.log(anotherscore.valueof()); //20
> console.log(typeof score); //number
> console.log(typeof anotherscore); //object
> ```

> [!NOTE]
>
> - any primitive can be converted into a non-primitive
