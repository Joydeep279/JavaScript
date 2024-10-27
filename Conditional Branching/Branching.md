# Conditional Branching

> Sometime we need to perform task based on multiple conditions.For this case condition statment is used by the **IF** statement.

```javascript
const data = prompt("Enter the Age:");
if (data >= 18) alert("Your are eligible to Vote!");
```

> If the condition statement is one liner then we can use the above format.

> The comparision condition is converted to boolean.

```javascript
const data = prompt("Enter your age");
if (data) {
  //here data is converted to boolean value like Boolean(data)
  console.log("data is true");
}
```

> **NOTE:** It is perfered to use block even if it is single conditional statement.It improves the readability of the code

## ELSE Statement

> If we want the execute the other statement when the result of the condition is false then else statement is used.

```javascript
const age = prompt("Enter the Age");
if (age >= 18) {
  alert("You can Vote");
} else {
  alert("You can't Vote");
}
```

## Ternary Operator

> There Ternary operator is generally used to assign value to an object based on the condition.

### Format

```javascript
const result = condition ? value1 : value2;
//example
const eligible = age >= 18 ? true : false;
```

> **Note**: The ? operator has lower precidency than comparision operator so we can use the condition without the paranthesis.

```javascript
const trial = age >= 18 ? alert("You can Vote") : alert("You Can't");
```

> In the above condition we can use the ternary operator for different purpose.But we prefer to use If Else statement as it prevent code expansion horizontally.

## Chaining ElseIf

> When multiple condition with different statement arises we need to use the conditional branching.

```javascript
const age=prompt("Enter the Age");
if (age<=10) {
  alert("Your are a kid");
}
elseif(age>10 && age<18){
  alert("You are a teen");
}
else{
  alert("You are a Adult");
}
```
