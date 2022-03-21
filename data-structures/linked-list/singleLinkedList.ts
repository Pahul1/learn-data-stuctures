import { SingleLinkedListNode } from './linkedListNode';

export class SingleLinkedList {
  head: SingleLinkedListNode;
  tail: SingleLinkedListNode;
  length: number;

  constructor(value: any) {
    this.head = new SingleLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any) {
    let newNode = new SingleLinkedListNode(value);
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value: any) {
    var newNode = new SingleLinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(node: SingleLinkedListNode, value: any) {
    let newNode = new SingleLinkedListNode(value);
    let next = node.next;
    if(next != null) {
      newNode.next = next;
    } else {
      // if next node is null, that means we are adding at the         end of the list
      this.tail = newNode;
    }
    node.next = newNode;
    this.length++;
  }

  remove(prev: SingleLinkedListNode, node: SingleLinkedListNode)   {
    let next = node.next;
    if(prev === null) {
      // this means nothing is in front, so it must be the 
      // head node. we need to delete and set head to next
      this.head = next;
    } else if(next === null) {
      // if next is null, set tail to prev
      this.tail = prev;
      prev.next = null;
    } else {
      prev.next = next;
    }
    node.next = null;
    this.length--;
  }

  add(index: any, newValue: any) {
    let iterator = this.head;
    let counter = 0;
    while(iterator != null && counter < index) {
      iterator = iterator.next;
    }
    if(iterator) {
      this.insert(iterator, newValue);
      return true;
    } else {
      return false;
    }
  }

  addAfterValue(value: any, newValue: any) {
    var iterator = this.head;
    while(iterator != null) {
      if(iterator.value === value) {
        this.insert(iterator, newValue);
        return true;
      }
      iterator = iterator.next;
    }
    return false;
  }

  delete(value: any) {
    var iterator = this.head;
    var prev = null;
    while(iterator != null) {
      if(iterator.value === value) {
        this.remove(prev, iterator);
        return true;
      }
      prev = iterator;
      iterator = iterator.next;
    }
    return false;
  }

  print() {
    var arr = []
    var iterator = this.head;
    while(iterator != null) {
      arr.push(iterator.value);
      iterator = iterator.next;
    }
    console.log(arr);
  }

  reverse() {
    if(this.length < 2) return this.head;
    let prev = this.head;
    let curr = this.head.next;
    prev.next = null;
    
    while(curr !== null) {
      let temp = curr.next;
      curr.next = prev;    
      prev = curr;
      curr = temp;
    }
    let temp = this.tail;
    this.tail = this.head;
    this.head = temp;
  }

  reverseWithRecursion() {
    if(this.length < 2) return;
    this.flip(null, this.head);
    var temp = this.tail;
    this.tail = this.head;
    this.head = temp;
    return;
  }

  flip(prev: SingleLinkedListNode, node: SingleLinkedListNode) {
    if(node.next !== null) {
      this.flip(node, node.next);
    }
    if(prev !== null) {
      node.next = prev;
      prev.next == null;
    } else {
      node.next = null;
    }
    return;
  }
}