var Selection = (function () {
  var proto = {
    sort: function () {
      var min;
      for (var i = 0; i < this.arr.length; i++) {
        min = i;
        for (var j = i; j < this.arr.length; j++) {
          if (this.less(j, min)) {
            min = j;
          }
        }
        this.swap(i, min)
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

  function Selection(arr) {
    var obj = Object.create(proto)
    obj.arr = arr;
    return obj;
  }

  return Selection;
}())

console.log(Selection([3, 2, 5, 1, 10, 15, 1, 111, 4, 5, 119, 2, 3, 4]).sort().arr)