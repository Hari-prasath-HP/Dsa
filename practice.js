class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Linkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(val){
        let node = new Node(val);
        if(this.size == 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size ++
    }
    middle(val){
        let curr = this.head;
        let prev = null
        while(curr){
            if(curr.data == val){
                if(prev == null){
                    this.head = curr.next
                }else {
                    prev.next = curr.next
                }
                if(curr == this.tail){
                    this.tail = prev
                }
                this.size --;
                return ;
            }
            prev = curr;
            curr = curr.next
        }
    }
}
let ll = new Linkedlist()
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
ll.middle(20)
console.log(ll)

