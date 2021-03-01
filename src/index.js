module.exports = function reverse (n) {
  if (n < 0) {
    n = n * (-1);
    return (+n.toFixed(0).split('').reverse().join(''));
  } else {
    return (+n.toFixed(0).split('').reverse().join(''));
  }
}
