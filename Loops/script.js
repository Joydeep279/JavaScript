// // while Loops
// /*
// Each execution of code is known as itration.
// If we don't know the total number of itration.We use the while Loop.
// */

let i = 0;
while (i <= 10) {
  console.log(`Itration: ${i++}`);
}
/*
ForLoop is the advance version of while loop

for(reference;condition;iteration){
}
*/
for (let x = 0; x <= 10; x++) {
  console.log(`Iteration: ${x}`);
}
i = 0;
for (; i <= 10; i++) {
  console.log(`Itration: ${i}`);
}
for (; i <= 10; ) {
  console.log(`Itration: ${i++}`);
}
// The below code is infinte Loop
// for(;;){
//   console.log("Infinite Loop");
// }

//Break and continue
for (let x = 0; x <= 10; x++) {
  if (x % 2 == 1) continue;
  console.log(`${x}`);
}
//The continue keyword skip current itration if on the basis of any condition.
for (let x = 0; x <= 5; x++) {
  for (let y = 0; y <= 5; y++) {
    if (y == 2) {
      break;
    }
    console.log(`x:${x} y:${y}`);
  }
}
// The break keyword stop all the itration of the loop.

// In nested loop inorder to stop the parent loop we need to label the parent loop

main: for (let x = 0; x <= 5; x++) {
  for (let y = 0; y <= 5; y++) {
    if (y == 2) {
      break main;
    }
    console.log(`x:${x} y:${y}`);
  }
}
