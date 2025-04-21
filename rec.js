class Node {
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
        if(this.size ===0){
            this.head = node;
            this.tail = node;
        }else {
            node.next = this.head
            this.head = node;
        }
        this.size ++
    }
    middle(){
        let mid = this.head;
        let i=0;
        while(mid){
            i++;
            mid = mid.next;
        }
        let curr = Math.floor(i/2)
        let mid1 = this.head;
        let i1 = 0;
        while(mid1){
            if(i1 == curr){
                return mid1
            }
            i1++;
            mid1 = mid1.next
        }
    }
}
let ll = new Linkedlist()
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
let midd = ll.middle()
console.log(midd)