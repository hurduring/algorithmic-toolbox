var Stack = (function () {
  var proto = {
    push: function (node) {
      var temp = this.head;
      this.head = node;
      this.head.next = temp;
      return this;
    },
    pop: function () {
      var temp = this.head;
      this.head = this.head.next;
      return temp;
    },
    show: function(){
      console.log(this.head)
      return this;
    }
  }

  function Stack(node) {
    var obj = Object.create(proto);
    obj.head = node;
    return obj;
  }

  return Stack;
}())

var q = Stack({value: 5}).push({value: 6}).push({value: 7})
q.pop()
q.push({value: 8})
q.pop()
q.show()
