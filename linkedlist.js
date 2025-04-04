// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }
// class Ll {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0
//     }
//     append(val){
//         const node = new Node(val)
//         if(this.size == 0){
//             this.head = node;
//             this.tail = node
//         }else {
//             this.tail.next = node;
//             this.tail = node
//         }
//         this.size++
//     }
// }
// let ll = new Ll()
// ll.append(10)
// ll.append(20)
// ll.append(30)
// ll.append(40)
// console.log(ll)

// class LL {
//     constructor (){
//         this.head = null;
//         this.tail = null;
//         this.size = 0
//     }
//     prepend(val){
//         const node = new Node(val);
//         if(this.size === 0){
//             this.head = node;
//             this.tail = node
//         }else {
//             node.next = this.head;
//             this.head = node
//         }this.size ++
//     }
// }
// let ll = new LL()
// ll.prepend(10)
// ll.prepend(20)
// ll.prepend(30)
// ll.prepend(40)
// ll.prepend(50)
// console.log(JSON.stringify(ll))

//  find Middle value
// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class LL {
//         constructor (){
//             this.head = null;
//             this.tail = null;
//             this.size = 0
//         }
//         prepend(val){
//             const node = new Node(val);
//             if(this.size === 0){
//                 this.head = node;
//                 this.tail = node
//             }else {
//                 node.next = this.head;
//                 this.head = node
//             }this.size ++
//         }
//         midd(){
//             let mid = this.head;
//             let i = 0;
//             while(mid){
//                 i++;
//                 mid = mid.next;
//             }
//             let curr = Math.floor(i/2);
//             let mid1 = this.head;
//             let i1 =0;
//             while(mid1){
//                 if(i1 === curr-1 && mid1.next){
//                     console.log("Middle value :" , mid1.next.data)
//                     mid1.next = mid1.next.next;
//                     this.size --
//                     break;
//                 }
//                 i1++
//                 mid1 = mid1.next;
//             }
            
//         }
//         print(){
//             let temp = this.head;
//             let res = []
//             while(temp){
//                 res.push(temp.data)
//                 temp = temp.next
//             }
//             console.log(res.join("-"))
//         }
        
//     }
//     let ll = new LL()
//     ll.prepend(10)
//     ll.prepend(20)
//     ll.prepend(30)
//     ll.prepend(40)
//     ll.prepend(50)
//     // console.log(JSON.stringify(ll))
//     ll.print()
//     ll.midd()
//     ll.print()

// for deleting the number using the val passing through the function
    // class Node {
    //     constructor(data){
    //         this.data = data;
    //         this.next = null;
    //     }
    // }
    // class LL {
    //         constructor (){
    //             this.head = null;
    //             this.tail = null;
    //             this.size = 0
    //         }
    //         prepend(val){
    //             const node = new Node(val);
    //             if(this.size === 0){
    //                 this.head = node;
    //                 this.tail = node
    //             }else {
    //                 node.next = this.head;
    //                 this.head = node
    //             }this.size ++
    //         }
    //         value(val){
    //             if(this.head.data===val){
    //                 this.head = this.head.next;
    //                 this.size--;
    //                 return
    //             }
    //             let mid = this.head;
    //             while(mid.next){
    //                 if(mid.next.data === val){
    //                     mid.next = mid.next.next;
    //                     this.size--;
    //                     return;
    //                 }
    //                 mid = mid.next
    //             }
    //         }
    //         print(){
    //             let temp = this.head;
    //             let res = []
    //             while(temp){
    //                 res.push(temp.data)
    //                 temp = temp.next
    //             }
    //             console.log(res.join("-"))
    //         }
            
    //     }
    //     let ll = new LL()
    //     ll.prepend(10)
    //     ll.prepend(20)
    //     ll.prepend(30)
    //     ll.prepend(40)
    //     ll.prepend(50)
    //     // console.log(JSON.stringify(ll))
    //     ll.print()
    //     ll.value(10)
    //     ll.print()

// Reverse the linked list 
    // class Node {
    //     constructor(data){
    //         this.data = data;
    //         this.next = null;
    //     }
    // }
    // class LL {
    //         constructor (){
    //             this.head = null;
    //             this.tail = null;
    //             this.size = 0
    //         }
    //         prepend(val){
    //             const node = new Node(val);
    //             if(this.size === 0){
    //                 this.head = node;
    //                 this.tail = node
    //             }else {
    //                 node.next = this.head;
    //                 this.head = node
    //             }this.size ++
    //         }
    //         reverse(){
    //             let newnode = null;
    //             let curr = this.head;
    //             this.tail = curr;
    //             while(curr){
    //                 let nextnode = curr.next;
    //                 curr.next = newnode;
    //                 newnode = curr;
    //                 curr = nextnode
    //             }
    //             this.head = newnode
    //         }
    //         print(){
    //             let temp = this.head;
    //             let res = []
    //             while(temp){
    //                 res.push(temp.data)
    //                 temp = temp.next
    //             }
    //             console.log(res.join("-"))
    //         }
            
    //     }
    //     let ll = new LL()
    //     ll.prepend(10)
    //     ll.prepend(20)
    //     ll.prepend(30)
    //     ll.prepend(40)
    //     ll.prepend(50)
    //     // console.log(JSON.stringify(ll))
    //     ll.print()

    // Sort the linklist
    class Node {
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
    class LL {
            constructor (){
                this.head = null;
                this.tail = null;
                this.size = 0
            }
            prepend(val){
                const node = new Node(val);
                if(this.size === 0){
                    this.head = node;
                    this.tail = node
                }else {
                    node.next = this.head;
                    this.head = node
                }this.size ++
            }
            sort(){
                if (!this.head || !this.head.next) return;
                let swap;
                do{
                    swap = false;
                    let curr = this.head;
                    while(curr.next){
                        if(curr.data < curr.next.data){
                            let temp = curr.data;
                            curr.data = curr.next.data;
                            curr.next.data = temp;
                            swap = true
                        } curr = curr.next
                    }
                }while(swap)
            }
            print(){
                let temp = this.head;
                let res = []
                while(temp){
                    res.push(temp.data)
                    temp = temp.next
                }
                console.log(res.join("-"))
            }
            
        }
        let ll = new LL()
        ll.prepend(40)
        ll.prepend(20)
        ll.prepend(30)
        ll.prepend(10)
        ll.prepend(50)
        // console.log(JSON.stringify(ll))
        ll.sort()
        ll.print()