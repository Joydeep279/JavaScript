// alert , confirm ,prompt

let test = alert("Message is Displayed");
console.log(typeof alert);
console.log(test);
function returnTest() {
  console.log("Function executed");
  return "JOY";
}
let funcreturn = returnTest();
console.log(funcreturn);

let data = prompt("Enter Your Age", 0);
alert(`Your age is ${data}`);

let isage = confirm("Are you over 18!");
if (isage) {
  alert("Enter the Website!");
} else {
  alert("You Can't Enter the Website!");
}

setInterval(() => {
  console.log("Script Running");
}, 1000);
