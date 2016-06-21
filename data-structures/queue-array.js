var Queue = (function () {
  var arr = new Array(10);
  var proto = {
    enqueue: function (node) {
      this.N++;
      arr[this.last % arr.length] = node;
      this.last++;
      if(arr.length === this.N){
        arr = this.resize(arr.length * 2);
      }
      return this;
    },
    dequeue: function () {
      var deq = arr[this.first];
      this.N--;
      arr[this.first++] = null;
      if(this.N === Math.floor(arr.length/4)){
        arr = this.resize(arr.length/2)
      }
      return deq;
    },
    resize: function (length) {
      var bArr = new Array(length);
      for(var i = 0; i < this.N; i++){
        bArr[i] = arr[(i + this.first) % arr.length]
      }
      this.first = 0;
      this.last = this.N;
      return bArr;
    },
    show: function () {
      return arr;
    }
  }

  function Queue(node) {
    var obj = Object.create(proto);
    obj.first = 0;
    obj.last = 1;
    obj.N = 1;
    arr[obj.first] = node;
    return obj;
  }

  return Queue;
}())

var q = Queue(5).enqueue(6).enqueue(6).enqueue(6);
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(1)
q.enqueue(1)
q.enqueue(1)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)
q.enqueue(3)


console.log(q.N)
console.log(q.show())