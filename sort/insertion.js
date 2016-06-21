var Insertion = (function () {
  var proto = {
    sort: function () {
      for (var i = 0; i < this.arr.length; i++) {
        for (var j = i; j >= 0; j--) {
          if (this.less(j, j - 1)) {
            this.swap(j, j - 1)
          }
        }
      }
      return this;
    },
    less: function (a, b) {
      if (this.arr[a] < this.arr[b])
        return true;
      return false;
    },
    swap: function (a, b) {
      var temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = temp;
    }
  }

  function Insertion(arr) {
    var obj = Object.create(proto)
    obj.arr = arr;
    return obj;
  }

  return Insertion;
}())

console.log(Insertion([3, 2, 5, 1, 10, 15, 1, 111, 4, 5, 119, 2, 3, 4]).sort().arr)