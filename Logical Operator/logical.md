# Logical Operator

> There are four Logical Operator present that are:\

- OR ||
- AND &&
- NOT !
- NULLISH ??

# OR ||

> The OR Operator is represented by two vertical lines || and return true if any of the argument is true.

> The non boolean argument is converted to boolean.

```javascript
alert(true || true); //true
alert(true || false); //true
alert(false || true); //true
alert(false || false); //false
```

> If the argument is not boolean is it first converted to boolean and than evaluated.

```javascript
if (1 || 0) {
  alert("True!");
}
```

# Working of OR algorithm

## Finding First Truth

- The evaluation happens from left to right.

- For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.

```javascript
const result = 0 || 0 || 15; //On the last argument it find the true boolean value and return it to the result variable.
console.log(result); // =>15
```

- If no true value is found than the last false value is returned.

```javascript
const result = null || undefined || 0;
// here since all boolean conversion of all the values are false.Hence the last value i.e 0 is returned.
```

## Short-Circuit Evaluation

> **It is the feature of the OR operator that it processes the argument untill it find first true value and does not process further.**

```javascript
function process() {
  alert("First Argument was false and ended up here!");
}
true || process(); // after finding the first argument as true the further process was stop.
false || process(); // Since the first argument was false therefore the check for second was done
```

## Cool Coder!

> Some cool coder might replace **IF** statement with short circuit evaluation but this reduce the readability of the code.

```javascript
const firstName = "";
const middleName = "";
const lastName = "";
const data = firstName || secondName || lastName || "null";
```

> **NOTE:** The above example look very cool but it must be avoided to maintain readability.

# AND &&

> **The logic AND && operator accept if all the argument are true.**

```javascript
alert(true && true); //true
alert(true && false); //false
alert(false && true); //false
alert(false && false); //false
```

> **NOTE:** AND && operator have higher precedency than or || operator

```javascript
const a=20,b=45,c=45,d=23;
if (a&&b || c&&d) as if ((a&&b) || (c&&d));
```

## Short Circuit Evaluation

> In AND logic too the Short Circuit evaluation exist.

> Algorithm of AND && Operator

- Evaluates from left to right.
- It convert each argument to boolean value and if finds the value to be false it return the value of the argument.

```javascript
// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0
```

- If all the arguments are true it return the last argument.

```javascript
function argu() {
  console.log("Argument Executed!");
}
true && argu(); // this function call will execute
false && argu(); // this function call will never execute.
```

## NOT !

> **This operator simply reverse the boolean value i.e if true to makes it false and vice-versa.The return value is inverse.**

**Working of NOT !**
- Convert the boolean value.
- Reverse the Boolean value.

```javascript
const logic = !true; //logic=>false
const logic = !false; //logic=>true
```
### Double NOT !!

**Let us understand the flow**
> As we have seen above that the argument is first converted to boolean and reversed.

> In double not!! the boolean value is than converted to its reverse value.So it works just like the Boolean() function.
 