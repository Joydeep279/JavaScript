# NULLISH ??

> It is a Logical Operator which return the first argument if the argument is not **null** and not **undefined**.

```javascript
const test;
const result = test ?? 0;
console.log(result);
```

> It can be replaced by the ternary operator like this.

```javascript
const result = test !== null || test !== undefined ? test : 0;
```

## Syntax

```javascript
const x = a ?? b;
```

- If a is **defined** then a;
- if a is **not defined** then b;

## Nullish Chaining

> Just like || OR and && AND operator we can chain the ?? Nullish operator too.

```javascript
const firstName = null;
const middleName = null;
const lastName = null;
const noName = "unknown";
alert(firstName || middleName || lastName || noName);
```

> Similar chain can be created by the Nullish Operator ??

```javascript
const firstName = null;
const middleName = null;
const lastName = null;
const noName = null;
alert(firstName ?? middleName ?? lastName ?? noName);
```

> Now the question arises why to used the Nullish if we have the OR || operator.

> Ans: The arguments in the Nullish operator does not undergoes by the boolean function i.e not converted to boolean function.

```javascript
const a = 0;
const b = 1;
alert(a || b);
alert(a ?? b);
```

## Precedence

> The precedence order of the nullish and or operator are same! using both the operator is avoided.

```javascript
const data=10??0 + 23||12;// this will throw a syntax error
console.log(data);
```

> To support the used of both the operator parathesis is used.

```javascript
const data = (10 ?? 0) * (100 || 0);
```
