function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
let a = new ListNode(3)
let b = new ListNode(4, a)
let c = new ListNode(2, b)

let x = new ListNode(4)
let y = new ListNode(6, x)
let z = new ListNode(5, y)


var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null
  let head = null                     // 链表头
  tail = null                         // 当前链表位置
  let sum = 0                         // 存放当前计算的值
  let remainder = 0                   // 存放进位
  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0           //  取读链表中当前位置的值(指针)
    let n2 = l2 ? l2.val : 0
    sum = n1 + n2 + remainder           // 计算
    remainder = Math.floor(sum / 10)      // 计算进位(满十进一)
    if (!head) {                          // 存入计算的值(取个位)
      head = tail = new ListNode(sum % 10)    // 链表头
    } else {
      tail.next = new ListNode(sum % 10)      // 链表向下链接
      tail = tail.next                        // 更新链表位置(指针++)
    }
    if (l1) {                                 // 更新链表位置(指针++)
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (remainder) tail.next = new ListNode(1)  // 存在进位 则链表下一项进一位
  return head
}
console.log(addTwoNumbers(c, z));

