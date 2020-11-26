/**
  * I want this code to log the number 0,1,2,3 in that order. What's the problem?
  *
  * */

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
