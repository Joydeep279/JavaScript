# We have learned basic maths terminology like addition(+),multiplication(\*),division(/) and so on.

> **An operand is what the operation is applied**

```javascript
let a = 20;
let b = 23;
const c = a + b;
```

> **Like here a and b are the operands and + is the operation.**

## Unary

> The operation have single operand is called Unary

```javascript
x = 20;
x = -x;
console.log(x); //x=>-20
```

## Binary

> When the operation happens with two operands.

```javascript
const result = 10 + 40;
```

## % Remainder

> The % operator returns the remainder of two operands when division is performed.

```javascript
const remainder = 10 % 5;
console.log(remainder); // Output => 0
```

## Exponantial \*\*

> It is a binary operator used to find the power of two number.

```javascript
const power = 10 ** 2;
console.log(power); // =>100
```

## String Concatination Binary +

> Like we can add two numbers like **const data = 10+20** we can also add two string or concatinate two strings.

```javascript
const name = "JOY" + "DEEP";
console.log(name);

const first = "JOY";
const last = "DEEP";
const Final = first + last;
console.log(Final);
```

### Special Case

> The plus operator can also be used to add a string and number.

```javascript
let test = "12" + 1;
console.log(test); //121
test = 1 + 2 + "5";
console.log(test); //35
```

# Unary +

> The add symbol can also be used to convert string to number

```javascript
const temp = "123";
console.log(typeof temp); // => string
temp = +temp;
console.log(typeof temp); // =>number
```

## The Assignment Operator =

> The = has the lowest poirty among the all the operator.
> As it has to execute at the end of the of the expression.

```javascript
const vari = 124;
```

**Some advance concept on assignment operator.**

> All the operators in Javascript return the value after the operation. Same goes for the assignment operator **=**.

```javascript
const a = 10;
const b = 30;
let sum;
let total = 0;
let temp = total + (sum = a + b);
```

## Chaining Assignment Operator

> **As we have seen above the assignment operator returns the value of the initalised variable.Thus we can chain them.**

```javascript
let a = (b = c = d = 10);
```
