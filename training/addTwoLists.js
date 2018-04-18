/**
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * */
function ListNode(value) {
    this.val = value;
    this.next = null;
}
ListNode.prototype.insertAtEnd = function(value) {
    if (!this.val) {
        this.val = value;
        return this;
    }
    const node = new ListNode(value);
    current = this;
    while(current.next) {
        current = current.next;
    }
    current.next = node;
    return this;
}

const input1 = new ListNode().insertAtEnd(3).insertAtEnd(4).insertAtEnd(2);
const input2 = new ListNode().insertAtEnd(4).insertAtEnd(6).insertAtEnd(5);


function addTwoNumbers(l1, l2) {
    let list1 = l1;
    let list2 = l2;
    let carry = 0;
    let head = new ListNode();
    let result = head;
    while(list1 || list2) {
        /** extra check to account for shorter lists **/
        let num1 = list1 ? list1.val : 0;
        let num2 = list2 ? list2.val : 0;
        let sum = carry + num1 + num2;
        /** carry can either be a 1 or 0
         * because the largest possible sum of 
         * two digits (including the carry) is 9 + 9 + 1 = 19
         * Since each digit is in the range of 0-9, summing two digits may "overflow". For example 5 + 7 = 12. 
         * In this case, we set the current digit to 2 and bring over the 1 to the next iteration.
         *  **/
        carry = Math.floor(sum / 10);
        result.next = new ListNode(sum % 10);
        /** advance result to continue build list **/
        result = result.next;
        if (list1) {
            list1 = list1.next;
        }
        if (list2) {
            list2 = list2.next;
        }
    }
    if (carry > 0) {
        result.next = new ListNode(carry);
    }
    return head.next;
}
addTwoNumbers(input1, input2)