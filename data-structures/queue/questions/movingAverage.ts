// question: https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1368/
class MovingAverage {
    sum:number = 0;
    count:number = 0;
    queue:number[];
    head:number = 0;
    tail:number = 0;

    constructor(size: number) {
        this.queue = new Array(size);
    }

    next(val: number): number {
        this.sum += val;
        if((this.head === this.tail && this.queue[this.head] !== undefined) || this.count >= this.queue.length) {
            this.sum = this.sum - this.queue[this.head];
            this.head = (this.head + 1) % this.queue.length;
            this.queue[this.tail] = val;
            this.tail = (this.tail + 1) % this.queue.length;
        } else {
            this.queue[this.tail] = val;
            this.tail = (this.tail + 1) % this.queue.length;
            this.count+=1;
        }
        return this.sum / this.count;
    }
}