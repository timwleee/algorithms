// Write a function that removes the nth node from the end of a Sinly Linked List without using a loop

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

LinkedList.prototype.deleteNthFromEnd = function (n){
   var node = this.head,
       i = 1,
       nthNode,
       previous;
   if(n<=0) return this;

    while(node){
      if(i == n) nthNode = this.head;
      else if(i-n>0){
       previous = nthNode;
       nthNode = nthNode.next;
      }
      i++;

      node = node.next;
    }
    if(!previous)
       this.head = this.head.next;
    else{
     previous.next = nthNode.next;
   }
   return this;
}


list.deleteNthFromEnd(2);
console.log(list);

