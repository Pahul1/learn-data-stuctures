import { LinkedList } from "../linked-list/doubleLinkedList";

class HashTable {
    data: any[]
    constructor(size: number) {
        this.data = new Array(size);
    }

    _hash(key: string) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    has(key: string) {
        if(this.data[this._hash(key)]) return true;
        return false;
    }

    get(key: string) {
            var index = this._hash(key);
        if(typeof this.data[index] === 'object') {
            return this.getFromList(key, this.data[index]);
        }
            return this.data[index];
    }

    set(key: string, value: any) {
        var index = this._hash(key);
        if(typeof this.data[index] === 'object') {
            let linkedList = this.data[index];
        linkedList.addAtTail(key, value);
        } else if(typeof this.data[index] === 'number') {
            let linkedList = new LinkedList(key, value);
            this.data[index] = linkedList;
        } else {
            this.data[index] = value;
        }
    }

    getFromList(key: string, linkedList: LinkedList) {
        let node: LinkedListNode | null = linkedList.head;
        while(node != null) {
        if(node.key === key) return node.value;
        node = node.next;
        }
        return undefined;
    }
}