/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  if (!s || !s.trim()) return true;

  const str = s.toLowerCase();
  let res = "";

  for (let elem of str) {
    if (elem.match(/[0-9a-z]/i)) {
      res += elem;
    }
  }

  let n = 0;
  let k = res.length - 1;

  while (n < res.length) {
    while (k >= 0) {
      if (res[n] != res[k]) {
        return false;
      }

      k--;
      n++;
    }
  }

  return true;
};
