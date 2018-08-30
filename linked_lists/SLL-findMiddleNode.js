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

LinkedList.prototype.findMiddleNode = function(){ 
    let leadPointer = this.head;
    let trailPointer = this.head;
    let count = 1;
    while (leadPointer.next) {
        leadPointer = leadPointer.next;
        count++;
        if (count % 2 != 0) {
            trailPointer = trailPointer.next;
        }
    }
    console.log(Math.round(count/2));
};

list.findMiddleNode();