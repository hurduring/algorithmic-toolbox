var shellSort = (function () {
  var proto = {
    sort: function () {
      var h = 1;

      while (h < Math.round(this.arr.length / 3)) {
        h = h * 3 + 1
      }

      while (h >= 1) {
        for (var i = h; i < this.arr.length; i++) {
          for (var j = i; j >= h; j -= h) {
            if (this.less(j, j - h)) {
              this.swap(j, j - h);
            }
          }
        }
        h = Math.round(h / 3);
      }

      return this;
    },
    less: function (a, b) {
      return this.arr[a] < this.arr[b];
    },
    swap: function (a, b) {
      var temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = temp;
    }
  }

  function shellSort(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return shellSort;
}())


var sort = shellSort([1, 4, 2, 1, 2, 3, 4, 1, 1, 2, 14, 51251, 521]).sort()

console.log(sort.arr)