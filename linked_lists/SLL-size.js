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

LinkedList.prototype.size = function(){ 
    let current = this.head;
    let count = 1;
    while (current.next) {
        current = current.next;
        count++;
    }
    console.log(count);
};

list.size();