class Arr {
    length: number;
    data: object;
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index: number) {
        return this.data[index];
    }

    push(value: any) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    pop() {
        var item = this.data[this.length-1];
        delete this.data[item];
        this.length--;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftLeft(index);
    }

    shiftLeft(index: number) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.pop();
    }
}