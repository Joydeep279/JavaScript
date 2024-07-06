# Statements

**Statement are the group of instruction (or experation).**

## How to separete them?

**Here come semicolon onto play.**

**Example:**

```javascript
alert("Hello");alert("World");
```

**To make it more readable we write new statement in new line.**

```javascript
alert("Hello");
alert("World");
// This code is more readable then the above code.
```
**if not inserted the semicolon the javascript interpriter automatically.**

```javascript
alert("one")
alert("two")
```
**The Interpriter automatically insert the semicolon**
```javascript
alert("one");
alert("two");
```

## It can fail!
**There are many cases where it fails to assume and insert semicolon into the code**

**Example:**
```javascript
alert("semicolon testing")
[1,2].forEach(alert)
```
**Here in the above examples the statement ends with first bracket and starts with third bracket so the interpriter consider the code as give below.**
```javascript
alert("semicolon testing")[1,2].forEach(alert);

```
> Hence an error is thrown.
