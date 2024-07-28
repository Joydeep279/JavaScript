# Data Types

`Javascript is a dynamically typed language.As it has interpriter so during line by line execution memory is assigned.`
`This allow user not to spicify the datatype.`

```javascript
let name = "Joydeep";
```

`There are generally 8 types of data`

## Number

`Number type is represented both by integer and float value.`

```javascript
let value = 123;
console.log(typeof value); //number
let value2 = 34.23;
console.log(typeof value2); //number
```

> Beside this there are special numberic values Infinity,-Infinity and NaN.

```javascript
let test = 12 / 0;
console.log(test); //Infinite
console.log(typeof test); //number
let test1 = "one" / 1;
console.log(typeof test1); //number
console.log(test1); //NaN
```

> **Note: NaN ** 0 =1\*\*

```javascript
let test = NaN ** 0;
console.log(test); //1
```

> **This happend because the ** operator is used for the exponential value.So the NaN ** 0 => NaN⁰ =1**

## BigInt

`Javascript number cannot store number greater than (2⁵³-1) and less than -(2⁵³-1).Here comes bigInt into play to store number greater than the number limits.`

> To declare bigInt number **n** is added in end of the digit.

```javascript
let bigInt = 12464579576324678678n;
```

> We will drive deep later.

## String

`String must be surrounded by Quotes.`

```javascript
let first = "Joy"; //using single qoutes
let last = "Deep"; //using double qoutes
let str3 = `Name:${first + last}`; //using backticks
```

> In backticks inside curly barceses we can use any js expression.

**Example**

```javascript
let str=`Sum: ${10+30}`;
console.log(str);
```
## Boolean

`The boolean have only two values either true or false`
`It is used to store yes or no type of data`

```javascript
let age=true;
console.log(age);//true
let greater=5>3;
console.log(greater);//true
greater=1>5;
console.log(greater);
```
