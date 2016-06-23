var quickSort = (function () {
  var proto = {
    sort: function () {
      _sort(this.arr, 0, this.arr.length - 1)
      return this;
    }
  };

  function _sort(arr, lo, hi) {
    if (hi - lo < 1) {
      return;
    }

    var lod = lo;
    var hid = hi;
    var i = lo;
    var pivot = arr[lo]

    while (i <= hid) {

      if (arr[i] < pivot) {
        _swap(arr, lod, i)
        lod++;
        i++;
      } else if (arr[i] > pivot) {
        _swap(arr, i, hid)
        hid--;
      } else if (arr[i] === pivot) {
        i++
      }
    }

    _sort(arr, lo, lod - 1)
    _sort(arr, hid + 1, hi)

  }

  function _swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function quickSort(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return quickSort;
}());

var quick = quickSort([2,1,10,11,3,44,11,34,44]).sort()
console.log(quick.arr)