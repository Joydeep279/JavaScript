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

> **Note: NaN ** 0 =1**

```javascript
let test = NaN ** 0;
console.log(test); //1
```

> **This happend because the ** operator is used for the exponential value.So the NaN ** 0 => NaN⁰ =1**
