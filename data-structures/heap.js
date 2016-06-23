var heap = (function () {
  var proto = {
    add: function (value) {
      this.arr[this.N + 1] = value;
      this.swim(this.N + 1)
      this.N++;
      return this;
    },
    swim: function (index) {
      if (this.less(index, Math.floor(index / 2))) {
        this.swap(index, Math.floor(index / 2));
        this.swim(Math.floor(index / 2));
      }
    },
    sink: function (index, cb) {
      var child;
      while (2 * index <= this.N) {
        child = 2 * index;
        if (child < this.N && cb(child + 1, child)) child++;
        if (cb(index, child)) break;
        this.swap(index, child);
        index = child;
      }
    },
    deleteMin: function () {
      this.swap(this.N, 1);
      var temp = this.arr[this.N];
      delete this.arr[this.N]
      this.N--;
      this.sink(1);
      return temp;
    },
    sort: function (arr) {
      this.arr = arr;
      this.N = arr.length;
      this.arr.unshift('')
      delete this.arr[0]

      for (var i = Math.floor(this.N / 2); i > 0; i--) {
        this.sink(i, this.greater.bind(this))
      }

      while (this.N > 1) {
        this.swap(1, this.N--)
        this.sink(1, this.greater.bind(this))
      }

      return this
    },
    swap: function (a, b) {
      var temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = temp;
    },
    less: function (a, b) {
      return this.arr[a] < this.arr[b];
    },
    greater: function (a, b) {
      return this.arr[a] > this.arr[b];
    }
  }


  function heap() {
    var obj = Object.create(proto)
    obj.arr = [];
    obj.N = 0;
    return obj;
  }

  return heap;

}())

heapInstance = heap().sort([3, 4, 1, 4, 12, 4, 12, 3, 1])

console.log(heapInstance.arr)


//heapified = heap().heapify([1, 3, 5, 1, 3, 5, 10, 11, 12, 55])