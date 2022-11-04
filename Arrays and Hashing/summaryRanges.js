/**
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  let start = null;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (start === null) {
      start = nums[i];
    }
    if (nums[i] + 1 === nums[i + 1]) {
      continue;
    }
    if (nums[i] === start) {
      res.push(start + "");
      start = null;
    } else {
      res.push(start + "->" + nums[i]);
      start = null;
    }
  }
  return res;
};
