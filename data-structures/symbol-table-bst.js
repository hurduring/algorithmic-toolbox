var nodeFactory = (function () {
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

  function ST() {
    return Object.create(proto);
  }

  return ST;
}());

var stInstance = ST();
stInstance.put(27, 1)
stInstance.put(25, 1)
stInstance.put(60, 2)
stInstance.put(30, 2)
stInstance.put(11, 2)
stInstance.put(12, 2)

console.log(stInstance.ceil(22))

//console.log(stInstance.root)