var QUF = (function () {
  var proto = {
    connected: function (a, b) {
      return this.arr[a] === this.arr[b]
    },
    union: function (a, b) {
      var aValue = this.arr[a];
      var bValue = this.arr[b];

      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === bValue) {
          this.arr[i] = aValue;
        }
      }
      return this.arr;
    }
  };

  function QUF(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return QUF;
}());


console.log(QUF([1, 2, 1, 0, 0, 0, 1, 1, 2]).union(0,1))