/**
 * https://leetcode.com/problems/last-stone-weight/
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  const queue = new MaxPriorityQueue();

  for (stone of stones) queue.enqueue(stone);
  while (queue.size() > 1) {
    let first = queue.dequeue().element;
    let second = queue.dequeue().element;
    if (first !== second) queue.enqueue(first - second);
  }
  return queue.size() === 0 ? 0 : queue.front().element;
};
