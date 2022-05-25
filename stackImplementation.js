class Stack {
  constructor() {
    this.items = [];
  }

  //add element to the stack
  push = (item) => {
    this.items.push(item);
  };

  //remove element from the stack
  pop = () => {
    return this.items.pop();
  };

  //return the top element of the stack
  peek = () => {
    return this.items[this.items.length - 1];
  };

  //check if the stack is empty
  isEmpty = () => {
    return this.items.length == 0;
  };
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.items);
console.log(stack.isEmpty());
