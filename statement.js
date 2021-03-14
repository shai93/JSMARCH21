// if else

var a = 10;
var b = 70;
var c = 30;

// if (a > 20) {
//   console.log("A greater than 20");
// } else {
//   console.log("Not greater than 20");
// }

if (a > b && a > c) {
  console.log("a is greater than b and c");
} else if (b > a && b > c) {
  console.log("b is greater than c and a");
} else {
  console.log("c is greater than a and b");
}

var marks = 34;

// marks greater than 34 and less than 59 passed
// marks greater than 59 and less than 74 first class
// marks greater than 75 and less than 100 distinction
// marks less than 35 failed

if (marks > 34 && marks < 59) {
  console.log("Passed");
} else if (marks > 59 && marks < 74) {
  console.log("First class");
} else if (marks > 75 && marks < 100) {
  console.log("Distinction");
} else if (marks < 35) {
  console.log("Failed");
}
