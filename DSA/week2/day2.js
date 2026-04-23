// leetcode 121
function sellStock(arr){
    let cheapestPrice = Number.MAX_VALUE;
    let profit =0
    let best = 0
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] < cheapestPrice){
        cheapestPrice = arr[i]
    }
    profit = arr[i] - cheapestPrice 

    if(profit > best){
        best = profit
    }
}
return best;
}

// linked list and reversing the linked list 

class ListNode {
    constructor(val){
        this.val = val
        this.next = null;
    }
}

let obj1 = new ListNode(3)
let obj2 = new ListNode(4)
let obj3 = new ListNode(5)
obj1.next = obj2
obj2.next = obj3

function printList(head){
    current = head;
    while(current !== null){
        console.log(current.va);
        current = current.next;
    }

}

function printList(head){
 if(head == null){
    return;
 }  
 console.log(head.val);
 printList(head.next);
   
}

function reverseLinkedList(head){
    let current = head;
    let next;
    while(current !== null){
       

       
    }
}