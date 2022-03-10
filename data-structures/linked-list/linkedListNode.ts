class LinkedListNode {
    value: any;
    constructor(value: any) {
        this.value = value;
    }
}


export class DoubleLinkedListNode extends LinkedListNode {
    next: DoubleLinkedListNode;
    prev: DoubleLinkedListNode;
    constructor(value: any)  {
        super(value);
        this.next = null;
        this.prev = null;
    }
}

export class SingleLinkedListNode extends LinkedListNode {
    next: SingleLinkedListNode;
    constructor(value: any)   {
        super(value);
        this.next = null;
    }
}
