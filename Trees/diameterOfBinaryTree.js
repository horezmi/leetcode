/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const maxDepth = (root) => {
    if (root === null) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  };

  maxDepth(root);
  return diameter;
};
