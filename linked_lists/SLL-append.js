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

LinkedList.prototype.isEmpty = function(){ 
    if (this.head === null) console.log ('Empty');
    else console.log ('Not empty');
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

LinkedList.prototype.append = function(value){
    var newNode = {
        value: value,
        next: this.head
    };
    var current = this.head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
};

list.append(453);
console.log(list);