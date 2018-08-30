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

LinkedList.prototype.isEmpty = function(){ 
    if (this.head === null) console.log ('Empty');
    else console.log ('Not empty');
};

list.isEmpty();