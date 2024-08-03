# Alert

`This Function Pop Up modal window.A modal window means the visitor can  not deal with the rest of the page unless the deal with the window.`

`The alert function is Display a message into a modal window unless a user press OK to it.`

```javascript
alert("message"); // the message inside the alert function parameter will be shown in the modal window
```

# Prompt

`The prompt function accept two arguments the message to be displayed in modal window and the default message to be displayed in the input box.`

```javascript
let data = prompt("Enter your age: ", 100);
alert(`Your age is ${data}`);
```

```javascript
result=prompt(title,[default]);
console.log(result);//null

```

> **NOTE: The second argument is optional.When not used the result value is null.**

# Confirm

`This shows a modal window with two options and return a boolean value.`
`It provide two options either "OK" onclick returns true or "Cancel" onclick or pressing "ESC" return false.`

```javascript
let isage = confirm("Are you over 18!");
if (isage) {
  alert("Enter the Website!");
} else {
  alert("You Can't Enter the Website!");
}
```

`All this methods are modal and it stop the execution of the script and website interactivity.`
