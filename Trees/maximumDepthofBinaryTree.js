/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
const maximumDepthOfBinaryTree = function (root) {
  if (!root) return 0;

  return (
    1 +
    Math.max(
      maximumDepthOfBinaryTree(root.left),
      maximumDepthOfBinaryTree(root.right)
    )
  );
};
