// #1 反转链表
// 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if (!pHead) return null
    var pre = null
    var cur = pHead
    var next
    while (cur) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
