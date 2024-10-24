# Comparision

> **We all know the variours comparision operator like:**

- Greater/less than: a > b, a < b.
- Greater/less than or equals: a >= b, a <= b.
- Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
- Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

> **The result of the comparsion in return as boolean.**

- if the condition satisfied is return **true**.
- if the condition is not satisfied is return **false**.

```javascript
let a = 10 > 70;
console.log(a); // print false as the condition is not satisfied.
```

## String Comparision

> The string the compared based on unicode order.

```javascript
const result = "Apple" > "Banana";
```

The Steps of Comparision will be:

- "A" will be compared with "B".But the "B" comes after "A" so the result will be false.
  > **NOTE:** IF one character returns the boolean value the rest of the string will not be compared.

```javascript
const com1="GLOW";
const com2="GLOM";
const result
```

- "G" of com1 is compared with "G" of com2 and found to be same so moved to next character.
- "L" of com1 is compared with "L" of com2 and found to be same so moved on.
- Same happened with the character "O".
- But the last character of com1 unicode value was greater than the com2. As Result the com1 was greater than com2.

## Comparing Different DataTypes.

> **The value while Comparing is converted to number.**

```javascript
const data1 = "11";
const data2 = 10;
console.log(data1 > data2); // results as true!
```

**Here the string "11" is converted to number 11 and than compared.**

# Strict Equality!

> The regular equal to sign cannot differentiat between 0 and false.

```javascript
console.log(0 == false); // output -> true!
console.log("" == false); // output -> true!
```

> **Here the regular equal to can not differentiat between 0 and false.**

```javascript
const str = "";
const converted = Number(str);
console.log(converted); // Output -> 0
```

> **The false becomes 0 and the empty string also get converted to 0.** > **To prevent this type conversion we need to the strict equality, which compares without type conversion.**

## Exception

> **The Undefine and the null are like lovers and are always equal to each other.**

```javascript
console.log(null == undefine); // output -> True
```
 ## NULL 
 ```javascript
 console.log(null>0); //output -> False
 console.log(null==0); //output -> False
 console.log(null>=0); //output -> True
 ```
 