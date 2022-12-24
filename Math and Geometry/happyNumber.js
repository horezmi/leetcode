/**
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var huppyNumber = function (n) {
  let res = n;
  const visited = {};
  const getDigits = (number) =>
    String(number)
      .split("")
      .map((str) => Number(str));

  while (res !== 1) {
    const digits = getDigits(res);
    res = digits.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);

    if (visited[res] === undefined) {
      visited[res] = true;
    } else {
      return false;
    }
  }

  return true;
};
