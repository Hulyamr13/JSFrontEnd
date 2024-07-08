/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
let nodesBetweenCriticalPoints = function(head) {
    let first = -1;
    let last = -1;
    let result = Number.MAX_SAFE_INTEGER;
    let prev = head.val;
    head = head.next;

    for (let i = 0; head.next !== null; ++i, prev = head.val, head = head.next) {
        if (!((Math.max(prev, head.next.val) < head.val) ||
              (Math.min(prev, head.next.val) > head.val))) {
            continue;
        }
        if (first === -1) {
            first = i;
        }
        if (last !== -1) {
            result = Math.min(result, i - last);
        }
        last = i;
    }

    if (last === first) {
        return [-1, -1];
    }
    return [result, last - first];
};