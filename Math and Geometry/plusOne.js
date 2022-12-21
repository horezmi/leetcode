/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
