var Shuffle = (function () {
  var proto = {
    shuffle: function () {
      for (var i = 0; i < this.arr.length; i++) {
        this.rSwap(i);
      }
      return this;
    },
    rSwap: function (a) {
      var rand = a + Math.floor(Math.random() * (this.arr.length - a))
      var temp = this.arr[a];
      this.arr[a] = this.arr[rand];
      this.arr[rand] = temp;
    }
  };

  function Shuffle(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return Shuffle;

}())

console.log(Shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]).shuffle().arr)