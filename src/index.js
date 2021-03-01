module.exports = function reverse (n) {
  if (n < 0) {
    n = n * (-1);
  } else {
    n.toString().split().reverse()
  }
}


let n = 432;
if (n < 0) {
  n = n * (-1);
} else {
  console.log(n.toString().split());
}