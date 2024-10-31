console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

if (1 || 0) {
  console.log("True!");
}
function process() {
  console.log("First Argument was false and ended up here!");
}
true || process();
false || process();
const firstName = "";
const middleName = "";
const lastName = "";
console.log(firstName || middleName || lastName || "null");
function argu1() {
  console.log("Argument Executed! for True");
}
function argu2() {
  console.log("Argument Executed! for True");
}

true && argu1();//argu() will be called!
false && argu2();

