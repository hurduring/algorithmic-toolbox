var QUF = (function () {
  var proto = {
    connected: function (a, b) {
      return this.root(a) === this.root(b)
    },
    union: function (a, b) {
      var aRoot = this.root(a);
      var bRoot = this.root(b);

      this.arr[bRoot] = aRoot;

      return this.arr;
    },
    root: function(a){
      while(this.arr[a] !== a){
        a = this.arr[a]
      }
      return a;
    }
  };

  function QUF(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return QUF;
}());


console.log(QUF([0, 2, 0, 2, 4, 4, 7, 5, 1]).union(0,6))