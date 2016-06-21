var QF = (function () {
  var proto = {
    connected: function (a, b) {
      return this.arr[a] === this.arr[b]
    },
    union: function (a, b) {
      var aValue = this.arr[a];
      var bValue = this.arr[b];

      if(aRoot === bRoot) return;

      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === bValue) {
          this.arr[i] = aValue;
        }
      }
      return this.arr;
    }
  };

  function QF(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return QF;
}());


console.log(QF([1, 2, 1, 0, 0, 0, 1, 1, 2]).union(0,1))