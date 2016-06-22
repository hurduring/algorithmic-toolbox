var mergeSort = (function () {
  var proto = {
    sort: function () {
      this.arr = _sort(this.arr)
      return this;
    }
  };

  function _sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    var mid = Math.round(arr.length / 2);
    var lArr = arr.slice(0, mid);
    var rArr = arr.slice(mid)
    lArr = _sort(lArr);
    rArr = _sort(rArr);

    return _merge(lArr, rArr);
  }

  function _merge(arr1, arr2) {
    var aux = [];

    while (arr1.length !== 0 && arr2.length !== 0) {
      if (arr1[0] <= arr2[0]) {
        aux.push(arr1.shift())
      } else {
        aux.push(arr2.shift())
      }
    }

    while (arr1.length !== 0) {
      aux.push(arr1.shift())
    }

    while (arr2.length !== 0) {
      aux.push(arr2.shift())
    }

    return aux;
  }

  function mergeSort(arr) {
    var obj = Object.create(proto);
    obj.arr = arr;
    return obj;
  }

  return mergeSort;
}());

var merge = mergeSort([1, 3, 5, 1, 3, 5, 1235, 34, 523]).sort()
console.log(merge.arr)