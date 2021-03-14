// &&, ||

// &&
// a       b       value
// true    true    true
// true    false   false
// false   true    false
// false   false   false

// ||

// a       b       value
// true    true    true
// true    false   true
// false   true    true
// false   false   false

var a = 10;
var b = 20;

// a>b, a>0

if (a > b || a > 0) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}
