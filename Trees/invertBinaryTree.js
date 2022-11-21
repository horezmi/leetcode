/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * https://leetcode.com/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertBinaryTree = function (root) {
  if (!root) return null;

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertBinaryTree(root.left);
  invertBinaryTree(root.right);

  return root;
};
