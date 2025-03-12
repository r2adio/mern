# Arrays and Methods Challenges:

## Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. Access the first element of the array and store it in a variable named `firstTea`.

```javascript
let teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];
console.log(firstTea);
```

## Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. Access the third element in the array and store it in a variable named `favoriteCity`.

```javascript
let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
console.log(favoriteCity);
```

## You've an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. Change the second element of the array to `"jasmine tea"`.

```javascript
let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "hellow";
console.log(teaTypes);
```

## Declare an array named `"cityVisited"` containing `"Mumbai"` and `"Sydney"`. Add `"Berlin"` to the array using `push` method.

```javascript
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);
```

## You've an array named `teaOrders` w/ `"chai"`, `"iced tea"`, `"matcha"`, and `"early grey"`. Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.

```javascript
let teaOrders = ["chai", "iced tea", "match", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);
```

## You've an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. Create a soft copy of this array named `softCopyTeas`.

```javascript
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
```

## You've an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. Create a hard copy of this array named `hardCopyCities`.

```javascript
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(hardCopyCities);
```

## You've 2 arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asainCities` containing `"Tokyo"` and `"Bangkok"`.Merge these 2 arrays into a new array named `worldCities`.

```javascript
let europeanCities = ["Paris", "Rome"];
let asainCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asainCities);
console.log(worldCities);
```

## You've an array an array `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. Find the length of the array and store it in a variable named `menuLength`.

```javascript
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);
```

## You've an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.

```javascript
let cityBucketList = ["Kyoto", "London", "Cape Toen", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);  //true
```
