module.exports = function reverse (n) {
  nStr = n.toString();

  return parseInt(nStr.split('').reverse().join(''));
}
