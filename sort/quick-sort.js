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

    var inPlace = _altPartition(arr, lo, hi);
    _sort(arr, lo, inPlace - 1)
    _sort(arr, inPlace + 1, hi)

  }

  function _swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function _partition(arr, lo, hi) {
    var j = lo + 1;

    for (var i = lo + 1; i <= hi; i++) {
      if (arr[i] < arr[lo]) {
        _swap(arr, i, j)
        j++;
      }
    }

    _swap(arr, lo, j - 1)

    return j - 1;
  }

  function _altPartition(arr, lo, hi) {
    var pivot = lo;
    var i = lo + 1, j = hi;

    while (i <= j) {

      while (arr[i] <= arr[pivot]) {
        i++;
      }

      while (arr[j] > arr[pivot]) {
        j--;
      }

      if (i < j) {
        _swap(arr, i, j);
        i++;
        j--;
      }

    }

    _swap(arr, lo, j)

    return j;
  }

  function quickSort(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return quickSort;
}());

var quick = quickSort([10, 21, 22, 1, 33, 44, 44, 44, 44, 44, 55, 1, 23, 3, 22]).sort()
console.log(quick.arr)