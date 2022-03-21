import { SingleLinkedList } from "../linked-list/singleLinkedList";

export class Stack {
  linkedList: SingleLinkedList;
  
  constructor(value: any) {
    this.linkedList = new SingleLinkedList(value);
  }

  push(value: any) {
    this.linkedList.prepend(value);
  }

  pop() {
    this.linkedList.remove(null, this.linkedList.head);
  }

  peek() {
    return this.linkedList.head.value;
  }

  length() {
    return this.linkedList.length;
  }
}