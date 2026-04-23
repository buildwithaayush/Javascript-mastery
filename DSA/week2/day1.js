class ListNode {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);

a.next = b;
b.next = c;

let current = a;
while(current !== null){
     console.log(current.val);
     current = current.next;
}


// Reversing the linked list 
function reverseList(head){
    let prev = null;
    let current = head;
    while(current != null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}