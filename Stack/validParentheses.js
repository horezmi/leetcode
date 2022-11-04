/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
 var validParentheses = function(s) {
    const data = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const res = []

    for (let i = 0; i < s.length; i++) {
        if (data[s[i]]) {
            res.push(data[s[i]])
            continue;
        }
        
        if (res.pop() === s[i]) {
            continue;
        }
        
        return false
    }
    
    return res.length === 0;
};