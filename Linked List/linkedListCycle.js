/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */
const linkedListCycle = function (head) {
  let tmp1 = head;
  let tmp2 = head;

  while (tmp2 && tmp2.next) {
    tmp1 = tmp1.next;
    tmp2 = tmp2.next.next;
    if (tmp1 == tmp2) return true;
  }

  return false;
};
