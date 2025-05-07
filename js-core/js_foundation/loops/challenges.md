# Challenges to learn all kinds of loops:

## 1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. Store all teas before `"chai"` in a new array named `selectedTeas`.

```javascript
let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < tea.length; i++) {
  if (tea[i] === "chai") {
    break;
  }
  selectedTeas.push(tea[i]);
}
console.log(selectedTeas);
```

## 2.Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. Store the other cities in a new array named `visitedCities`.

```javascript
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
console.log(visitedCities);
```

## 3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. Store the number before `4` in array named `smallNumbers`.

```javascript
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);
```

## 4. Use of `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. Store the other teas in an array named `preferredTeas`.

```javascript
tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const x of tea) {
  if (x === "herbal tea") {
    continue;
  }
  preferredTeas.push(x);
}
console.log(preferredTeas);
```

## 5. Use a `for-in` loop to loop through an object containing populations. Stop the loop when the population of `"Berlin"` is found and store all previous cities populations in a new object named `cityPopulations`.

```javascript
// typeof citiesPopulaion: object
let citiesPopulaion = {
  London: 8900000,
  "New York": 8400000,
  Paris: 220000,
  Berlin: 350000,
};
```

## 6. Use a `for-in` loop to loop through an object containing cityPopulations. Skip any city w/ a population below 3 mil and store the rest in a new object named `largeCities`.

```javascript
let worldCities = {
  Sydney: 8900000,
  Tokyo: 8400000,
  Berlin: 220000,
  Paris: 350000,
};
let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);
```

## 7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.

```javascript
let teaCollectioin = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollectioin.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// different way of defining a function
//teaCollectioin.forEach(function(tea) {
//  if (tea === "chai") {
//    return;
//  }
//  availableTeas.push(tea);
//});
console.log(availableTeas);
```

## 8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.

```javascript
let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

worldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);
```

## 9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubleNumbers`.

```javascript

```

## 10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` and stop when the length of the curret tea ame is greater than 10. Store the teas iterated over in an array named `shortTeas`.

```javascript

```
