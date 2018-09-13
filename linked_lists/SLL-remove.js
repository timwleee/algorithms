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

LinkedList.prototype.contains = function(value) {
    var current = this.head;
    while (current !== null) {
        if (current.value === value) {
            return true;
        } else {
        current = current.next;
        }
    }
}


const list = new LinkedList();
list.addNode(5);
list.addNode(64);
list.addNode(15);
list.addNode(20);
console.log(list);

LinkedList.prototype.remove = function(value){
    if (!this.contains(value)) {
        return;
    }
    if (this.head.value === value) {
        this.head = this.head.next;
        return;
    }

    var prev = null;
    var curr = this.head;

    while (curr.value !== value) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;
};

list.remove(15);
console.log(list);