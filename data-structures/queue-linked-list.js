var Queue = (function () {
  var proto = {
    enqueue: function (node) {
      this.last.next = node;
      this.last = node;
      return this;
    },
    dequeue: function () {
      this.first = this.first.next;
      return this;
    }
  }

  function Queue(node) {
    var obj = Object.create(proto);
    obj.first = node;
    obj.last = node;
    return obj;
  }

  return Queue;
}())

var q = Queue({value: 5}).enqueue({value: 6}).enqueue({value: 7}).enqueue({value: 8});
console.log(q)