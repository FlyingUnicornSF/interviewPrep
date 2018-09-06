class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lendth = 0;
  }
  static Node = class{
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  appendNodeWithValue(value) {
    let node = new SinglyLinkedList.Node(value);
    if (this.head == null && this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.lendth++;
  }
}

let myLL = new SinglyLinkedList();
myLL.lendth;
myLL.head
myLL.tail
myLL.appendNodeWithValue(5);

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lendth = 0;
  }
  static Node = class{
    constructor(value) {
      this.value = value;
      this.previous = null;
      this.next = null;
    }
  }
  appendNodeWithValue
}