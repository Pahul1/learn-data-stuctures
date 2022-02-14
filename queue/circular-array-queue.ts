export class CircularQueue {
    queue: number[];
    length: number;
    head: number = 0;
    tail: number = 0;

    constructor(k: number) {
        this.queue = new Array(k);
        this.length = k;
    }

    enQueue(value: number): boolean {
        if(this.isFull()) return false;
        this.queue[this.tail] = value;
        
        var next = this.tail + 1;
        this.tail =  next >= this.length ? 0 : next;
        return true;
    }

    deQueue(): boolean {
        if(this.isEmpty()) return false;
        this.queue[this.head] = undefined;
        
        var next = this.head + 1;
        this.head = next >= this.length ? 0 : next;
        return true;
    }

    Front(): number {
        if(this.isEmpty()) return -1;
        return this.queue[this.head];
    }

    Rear(): number {
        if(this.isEmpty()) return -1;
        if(this.tail === 0) {
            return this.queue[this.length - 1];
        }
        return this.queue[this.tail - 1];
    }

    isEmpty(): boolean {
        if(this.queue[this.head] === undefined) return true;
        return false;
    }

    isFull(): boolean {
        if(this.queue[this.head] && this.head === this.tail) return true;
        return false;
    }
}