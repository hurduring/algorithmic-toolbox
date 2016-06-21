var WQU = (function () {
  var proto = {
    connected: function (a, b) {
      return this.root(a) === this.root(b)
    },
    union: function (a, b) {
      var aRoot = this.root(a);
      var bRoot = this.root(b);

      if(aRoot === bRoot) return;

      if(this.szArr[aRoot] > this.szArr[bRoot]){
        this.arr[bRoot] = aRoot;
        this.szArr[aRoot] += this.szArr[bRoot];
      } else {
        this.arr[aRoot] = bRoot;
        this.szArr[bRoot] += this.szArr[aRoot]
      }

      return this;
    },
    root: function(a){
      while(this.arr[a] !== a){
        a = this.arr[a]
      }
      return a;
    }
  };

  function WQU(arr, szArr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    obj.szArr = szArr;
    return obj;
  }

  return WQU;
}());


console.log(WQU([0, 2, 0, 2, 4, 4, 7, 5, 1], [5, 0, 0, 0, 4, 0, 0, 0, 0]).union(0,4).szArr)