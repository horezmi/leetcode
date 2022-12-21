/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let prev = 0;
  let cur = 1;
  let tmp;
  while (n > 0) {
    tmp = prev;
    prev = cur;
    cur = prev + tmp;
    n--;
  }
  return cur;
};
