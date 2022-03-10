import { DoubleLinkedListNode } from './linkedListNode';
export class DoubleLinkedList {
  head: DoubleLinkedListNode;
  tail: DoubleLinkedListNode;
  length: number;

  constructor(value: any) {
    this.head = new DoubleLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any) {
    let newNode = new DoubleLinkedListNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value: any) {
    var newNode = new DoubleLinkedListNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(node: DoubleLinkedListNode, value: any) {
    let newNode = new DoubleLinkedListNode(value);
    let nextNode = node.next;
    if(nextNode != null) {
      nextNode.prev = newNode;
      newNode.next = nextNode;
    } else {
      // if next node is null, that means we are adding at the         end of the list
      this.tail = newNode;
    }
    node.next = newNode;
    newNode.prev = node;
  }

  remove(node: DoubleLinkedListNode)   {
    let prev = node.prev;
    let next = node.next;
    
    if(prev != null && next != null) {
      prev.next = next;
      next.prev = prev;
    } else if(prev == null) {
      // this means nothing is in front, so it must be the 
      // head node. we need to delete and set head to next
      this.head = next;
      next.prev = null;
    } else {
      // if next is null, set tail to prev
      this.tail = prev;
      prev.next = null;
    }
    node.prev = null;
    node.next = null;
  }

  add(index: any, newValue: any) {
    let iterator = this.head;
    let counter = 0;
    while(iterator != null && counter < index) {
      iterator = iterator.next;
    }
    if(iterator) {
      this.insert(iterator, newValue);
      this.length++;
    } else {
      return false;
    }
  }

  addAfterValue(value: any, newValue: any) {
    var iterator = this.head;
    while(iterator != null) {
      if(iterator.value === value) {
        this.insert(iterator, newValue);
        this.length++;
        return true;
      }
      iterator = iterator.next;
    }
    return false;
  }

  delete(value: any) {
    var iterator = this.head;
    while(iterator != null) {
      if(iterator.value === value) {
        this.remove(iterator);
        this.length--;
        return true;
      }
      iterator = iterator.next;
    }
    return false;
  }

  printEachNode() {
    var iterator = this.head;
    while(iterator != null) {
      console.log(iterator);
      iterator = iterator.next;
    }
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
    if(this.length < 2) return;
    let iterator = this.tail;
    while(iterator != null) {
      let prev = iterator.prev;
      let next = iterator.next;
      iterator.prev = next;
      iterator.next = prev;
      iterator = prev;
    }
    var temp = this.tail;
    this.tail = this.head;
    this.head = temp;
  }
}
