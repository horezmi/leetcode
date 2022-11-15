/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * https://leetcode.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseLinkedList = function (head) {
  let current = head;
  let previous = null;

  while (current != null) {
    const tmp = current.next;
    current.next = previous;
    previous = current;
    current = tmp;
  }

  return previous;
};
