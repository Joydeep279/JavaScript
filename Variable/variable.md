# Variable In JavaScript

`In Programming data we need to work with information and here variables are used to store the information`

`A varible is used to store this information.`

```javascript
// declaring the variable.
let store;
// Storing the data;
store = "Information";
```

`The same instruction can be achive using the single statement.`

**Example:**

```javascript
let store = "information";
```

`The content of the varaible can also be changed.In other words it can be reinitialised.`

```javascript
let store = "Apple";
store = "Banana";
```

`The variable can also be initialized by other variables.`
**Example**

```javascript
let temp = "banana";
let store = "apple";
temp = store; //value of temp changed.
```

## The old var

`In older codebase you may see the use of the var keyword instead of let.In further chapter will will see it in details.`

`Declaring a variable twice will cause syntax error.`

```javascript
let message = "joydeep";
let message = "Nath";
// this code will throw error as the message variable with same name is declared twice.
```

`Multiple variables can be define using single statement.`
**Just use this syntax**

```javascript
let x = 30,
  y = 30,
  z = 30;
```

## Same same but different

`As JS is a case sensitive language the apple named variable and Apple named variable is completly different.`

```javascript
let apple = 30;
let Apple = 50;
// this is allowed in JS as it is case sensitive and there name is not same
```

## Declaring Without using let keyword

`In JS we can declare variable without using the let and const.`

```javascript
temp = "hello"; // => var temp="hello";
console.log(temp);
```

> **To prevent this from happening you can use "use strict" feature**

## Constant

`The const keyword is used to create constant variable i.e one the value has been initialized it can't be changed.`

```javascript
const pie = 3.14;
```

`In this case we know that the value of pie is not going to change.So in this case we can use pie as the constant variable.`

> NOTE: The const variable must be declared and initialized at the same statement.

```javascript
const thala = 7;
thala = 0; // constants can not be reinitialsized.Hence will throw a error.
```
