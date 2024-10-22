x = 20;
x = -x;
console.log(x); //x=> -20
const power = 10 ** 2;
console.log(power); // =>100
const name = "JOY" + "DEEP";
console.log(name);
//comment
const first = "JOY";

const last = "DEEP";
const Final = first + last;
console.log(Final);
const temp = +"123";
console.log(typeof temp);
const str = "";
if (str == 1) {
  console.log(str);
}
let a = 10;
let b = 30;
let c;
if (40 == (c = a + b)) {
  console.log("true");
  console.log(c);
}

let test = "123";
console.log(typeof test);
test = +test;
console.log(typeof test);
let test1 = "12" + 1;
console.log(test1); //121
test1 = 1 + 2 + "5"; //8
console.log(test1);
var temp11;

function testingPre() {
  return (temp11 = 10 + 5);
}
console.log(testingPre());
console.log(temp11);
const ab = 90;
const ac = 80;
let temping;

let xyz = (temping = ab + ac);
console.log(xyz);
console.log(temping);
return 20;
