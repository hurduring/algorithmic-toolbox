var nodeFactory = (function () {
  function node(key, value) {
    return {
      key: key,
      value: value,
      size: 1,
      red: true
    };
  }

  return node;
}());


var RedBlackTree = (function () {
  function _isRed(node) {
    if (node === undefined) return false;
    return node.red === true
  }

  function _rotateLeft(node) {
    var x = node.right;
    node.right = x.left;
    x.left = node;
    x.red = x.left.red;
    x.left.red = true;
    x.size = node.size;
    node.size = _size(node.left) + _size(node.right) + 1;
    return x;
  }

  function _rotateRight(node) {
    var x = node.left;
    node.left = x.right;
    x.right = node;
    x.red = x.right.red;
    x.right.red = true;
    x.size = node.size;
    node.size = _size(node.left) + _size(node.right) + 1;
    return x;
  }

  function _flipColors(node) {
    node.red = !node.red;
    node.left.red = !node.left.red;
    node.right.red = !node.right.red;
  }

  function _put(node, key, value) {
    if (node === undefined) {
      return nodeFactory(key, value)
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

    if (_isRed(node.right) && !_isRed(node.left)) {
      node = _rotateLeft(node)
    }

    if (_isRed(node.left) && _isRed(node.left.left)) {
      node = _rotateRight(node)
    }

    if (_isRed(node.left) && _isRed(node.right)) {
      _flipColors(node)
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

  function _floor(node, key) {
    if (node === undefined) {
      return undefined
    }

    if (key === node.key) {
      return node;
    }
    if (key < node.key) {
      return _floor(node.left, key)
    }

    var t = _floor(node.right, key)

    if (t === undefined) {
      return node;
    } else {
      return t;
    }
  }

  function _ceil(node, key) {
    if (node === undefined) return undefined;

    if (key === node.key) {
      return node;
    }
    if (key < node.key) {
      var t = _ceil(node.left, key)
      if (t === undefined) {
        return node;
      } else {
        return t;
      }
    }

    return _ceil(node.right, key)
  }

  var proto = {
    get: function (key) {
      return _get(this.root, key)
    },
    put: function (key, value) {
      this.root = _put(this.root, key, value);
      this.root.red = false;
    },
    size: function () {
      return _size(this.root)
    },
    inOrder: function () {
      var queue = [];
      _inOrder(this.root, queue);
      return queue;
    },
    floor: function (key) {
      return _floor(this.root, key)
    },
    ceil: function (key) {
      return _ceil(this.root, key)
    }
  };

  function RedBlackTree() {
    return Object.create(proto);
  }

  return RedBlackTree;
}());

var RBInstance = RedBlackTree();
RBInstance.put(27, 1)
RBInstance.put(25, 1)
RBInstance.put(60, 2)
RBInstance.put(30, 2)
RBInstance.put(11, 2)
RBInstance.put(12, 2)

console.log(RBInstance.inOrder())