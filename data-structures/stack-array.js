var Stack = (function () {
  var arr = new Array(10);
  var proto = {
    push: function (value) {
      if (arr.length === this.N) {
        arr = this.resize(arr.length * 2);
      }
      this.head++;
      this.N++;
      arr[this.head] = value;
      return this;
    },
    pop: function () {
      if (this.N === Math.floor(arr.length/4)){
        arr = this.resize(arr.length/2)
      }
      var temp = arr[this.head];
      arr[this.head] = null;
      this.N--;
      this.head--;
      return temp;
    },
    resize: function (length) {
      var bArr = new Array(length);
      for (var i = 0; i < this.N; i++) {
        bArr[i] = arr[i]
      }
      return bArr;
    },
    show: function () {
      console.log(arr)
      return this;
    }
  }

  function Stack(value) {
    var obj = Object.create(proto);
    obj.head = 0;
    obj.N = 1;
    arr[obj.head] = value;
    return obj;
  }

  return Stack;
}())


var q = Stack(5).push(6).push(7).push(8)
q.push(1)
q.push(1)
q.push(1)
q.push(1)
q.push(1)
q.push(1)
q.push(1)
q.pop()
q.pop()
q.pop()
q.pop()
q.pop()
q.pop()
q.pop()
q.pop()
q.show()