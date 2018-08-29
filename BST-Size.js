BST.prototype.size = function() {
    return this.root.size();
}

btNode.prototype.size = function() {
  if(!this.left && !this.right) {
    return 1;
  }

  var lCount = 0; 
  var rCount = 0;

  if(this.left) {
    lCount = this.left.size();
  }
  if(this.right) {
    rCount = this.right.size();
  }
  
  return 1 + lCount + rCount;
}