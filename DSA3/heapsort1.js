class Heap {
    constructor() {
        this.data = [];
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

    extractMax() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();
        const max = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifydown(0);
        return max;
    }

    heapifydown(i) {
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
            this.heapifydown(largest);
        }
    }

    build(arr) {
        this.data = arr;
        for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
            this.heapifydown(i);
        }
    }

    heapSort(arr) {
        let len = arr.length;
        let sorted = [];
        this.build(arr);
        for (let i = 0; i < len; i++) {
            sorted.unshift(this.extractMax());
        }
        return sorted;
    }
}

// ✅ Example usage
const heap = new Heap();
const array = [25, 45, 15, 55, 1];
const sorted = heap.heapSort([...array]);

console.log("Original array:", array.join(','));
console.log("Heap sorted array:", sorted.join(','));
