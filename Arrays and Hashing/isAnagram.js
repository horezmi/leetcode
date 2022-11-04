/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const hashMap = {};

  for (let elem of s) {
    if (!hashMap[elem]) hashMap[elem] = 0;
    hashMap[elem]++;
  }

  for (let elem of t) {
    if (!hashMap[elem]) return false;
    hashMap[elem]--;
  }

  return true;
};
