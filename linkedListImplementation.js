class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Add a node to the linked list
  add(value) {
    let node = new Node(value);
    //If there is no head, make this the head
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    //Otherwise, add it to the end
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    console.log(this);
    return this;
  }

  //Remove a node from the linked list
  remove(value) {
    if (!this.head) return null;
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
          if (current.next === null) this.tail = previous;
        } else {
          this.head = current.next;
          if (current.next === null) this.tail = null;
        }
        this.length--;
        return current;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  //Find a node in the linked list
  find(value) {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  //Print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.remove(3);
list.print();
