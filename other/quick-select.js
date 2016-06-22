var quickSelect = (function () {
  var proto = {
    select: function () {
      return _select(this.arr, 0, this.arr.length - 1, this.k);
    },
  };

  function _select(arr, lo, hi, k) {
    if (hi - lo < 0) {
      return;
    }

    var inPlace = _partition(arr, lo, hi);

    if (inPlace === k) {
      return arr[inPlace]
    } else if (k < inPlace) {
      return _select(arr, lo, inPlace - 1, k)
    } else {
      return _select(arr, inPlace + 1, hi, k)
    }

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

  function quickSelect(arr, k) {
    var obj = Object.create(proto);
    obj.arr = arr;
    obj.k = k - 1;
    return obj;
  }

  return quickSelect;
}());

var quick = quickSelect([8, 3, 5, 2, 7], 5).select()
console.log(quick)