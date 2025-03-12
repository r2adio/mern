# Introduction to loops:

## Type of loops:

- while
- do/while
- for
- for/in
- for/of
- forEach

## 1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.

```javascript
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);
```

## 2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdonw`.

```javascript
let countdonw = [];
let i = 5;
while (i > 0) {
  countdonw.push(i);
  i--;
}
console.log(countdonw);
```

## 3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. Store each tea type in an array named `teaCollection`.

```javascript
let teaCollection = [];
let tea;
do {
  tea = prompt(`enter ur favourite tea`);
  if (tea != "stop") {
    teaCollection.push(tea);
  }
} while (tea != "stop");
```

## 4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.

```javascript
let total = 0;
let i = 1;
do {
  total += i;
  i++;
} while (i <= 3);
console.log(total);
```

## 5. Write a 'for' loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the result in a new array

```javascript
let arr0 = [2, 4, 6];
let arr1 = [];
for (let i = 0; i < arr0.length; i++) {
  arr1.push(arr0[i] * 2);
}
console.log(arr1);
```

## 6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `citYlisted`.

```javascript
let arr0 = ["Paris", "New York", "Tokyo", "London"];
let arr1 = [];
for (let i = 0; i < arr0.length; i++) {
  arr1.push(arr0[i]);
}
console.log(arr1);
```
