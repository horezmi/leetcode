/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoSortedLists = function (list1, list2) {
  let result = new ListNode(0);
  let temp = result;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      temp.next = list2;
      list2 = list2.next;
    } else {
      temp.next = list1;
      list1 = list1.next;
    }
    temp = temp.next;
  }

  if (list1 !== null) {
    temp.next = list1;
  }

  if (list2 !== null) {
    temp.next = list2;
  }

  return result.next;
};
