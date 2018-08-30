//Return the position of the middle node while only iterating through the linked list once

function LinkedList () {
    this.head = null;
}

function Node(value, next) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.addNode = function(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode; 
    this.head = newNode;
};

const list = new LinkedList();
list.addNode(5);
list.addNode(64);
list.addNode(15);
list.addNode(354);
list.addNode(14);
list.addNode(73);
list.addNode(46);
console.log(list);

LinkedList.prototype.prepend = function(value){
    var newNode = {
        value: value,
        next: this.head
    };
    this.head = newNode;
};

list.prepend(5000);
console.log(list);