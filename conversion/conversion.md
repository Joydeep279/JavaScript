# Conversion

> **In Javascript the datatype can be changed to the other DataTypes .**

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

> **Most of the time to dataTypes are automatically converted to the right type by the Operator or the Function.**

```javascript
const a = "20";
const b = "100";
const c = a / b;
console.log(c);//0.2
```
>There are prebuild function that are used

**Numeric Function**

>Using the number() function we can convert the we can convert string numbers like "234" to numbers.

```javascript
const data="30";
console.log(typeof data);

const temp=number(data);
console.log(typeof temp);
```
