class Heap {
    constructor() {
        this.data = [];
    }

    getparent(i) {
        return Math.floor((i - 1) / 2);
    }

    getleft(i) {
        return i * 2 + 1;
    }

    getright(i) {
        return i * 2 + 2;
    }

    swap(i1, i2) {
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(key) {
        this.data[this.data.length] = key;
        this.heapifyUp();
    }

    heapifyUp() {
        let current = this.data.length - 1;
        while (current > 0 && this.data[current] > this.data[this.getparent(current)]) {
            this.swap(current, this.getparent(current));
            current = this.getparent(current);
        }
    }

    pop() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();
        const max = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(i) {
        let largest = i;
        let left = this.getleft(i);
        let right = this.getright(i);

        if (left < this.data.length && this.data[left] > this.data[largest]) {
            largest = left;
        }

        if (right < this.data.length && this.data[right] > this.data[largest]) {
            largest = right;
        }

        if (largest !== i) {
            this.swap(i, largest);
            this.heapifyDown(largest);
        }
    }
}
const heap = new Heap();
heap.push(25);
heap.push(90);
heap.push(55);
heap.push(43);

const sorted = [];
while (heap.data.length > 0) {
    sorted.unshift(heap.pop());
}

console.log(sorted.join(',')); 
