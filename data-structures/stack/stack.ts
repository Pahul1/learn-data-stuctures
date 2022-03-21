export class MinStack {
    arr: number[];
    min: number = undefined;

    constructor() {
        this.arr = new Array();
    }

    push(val: number): void {
        if(this.min === undefined) { this.min = val; }
        else if(val < this.min) { this.min = val; }
        this.arr.push(val);
    }

    pop(): void {
        this.arr.pop();
        if(!this.isEmpty()) {
            this.calcMin();
        } else {
            this.min = undefined;   
        }
    }

    isEmpty() {
        return this.arr.length <= 0;
    }

    top(): number {
        return this.arr[this.arr.length - 1];
    }

    calcMin() {
        var newMin = this.arr[0];
        for(var i = 1; i < this.arr.length; i++) {
            if(this.arr[i] < newMin) newMin = this.arr[i];
        }
        this.min = newMin;
    }

    getMin(): number {
        return this.min;
    }
}