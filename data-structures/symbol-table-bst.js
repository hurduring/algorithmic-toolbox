var nodeDT = (function () {
  function node(key, value) {
    return {
      key: key,
      value: value,
      size: 1,
      left: undefined,
      right: undefined
    };
  }

  return node;
}());


var ST = (function () {
  function _put(node, key, value) {
    if (node === undefined) {
      return nodeDT(key, value)
    }

    if (key < node.key) {
      node.left = _put(node.left, key, value)
    }
    if (key > node.key) {
      node.right = _put(node.right, key, value)
    }
    if (key === node.key) {
      node.value = value;
    }

    node.size = 1 + _size(node.left) + _size(node.right);

    return node;
  }

  function _get(node, key) {
    if (node === undefined) return 'not found';

    if (key < node.key) {
      return _get(node.left, key)
    }

    if (key > node.key) {
      return _get(node.right, key)
    }

    if (key === node.key) {
      return node.value
    }
  }

  function _size(node) {
    if (node === undefined) return 0
    else
      return node.size
  }

  function _inOrder(node, queue) {
    if (node.left !== undefined) _inOrder(node.left, queue)
    queue.push(node.key);
    if (node.right !== undefined) _inOrder(node.right, queue)
  }

  var proto = {
    get: function (key) {
      return _get(this.root, key)
    },
    put: function (key, value) {
      this.root = _put(this.root, key, value);
    },
    size: function () {
      return _size(this.root)
    },
    inOrder: function () {
      var queue = [];
      _inOrder(this.root, queue);
      return queue;
    }
  };

  function ST() {
    return Object.create(proto);
  }

  return ST;
}());

var stInstance = ST();
stInstance.put('derp', 1)
stInstance.put('aerp', 1)
stInstance.put('kerp', 2)
stInstance.put('kerp', 2)
stInstance.put('berp', 2)
stInstance.put('ber1', 2)
stInstance.put('aarp', 2)

console.log(stInstance.root.left)
console.log(stInstance.inOrder())