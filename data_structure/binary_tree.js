
const { Queue } = require('./queue');
const { Stack } = require('./stack');

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = (value) => {
    let newNode = new TreeNode(value);
    let tmpNode = this.root;

    if (tmpNode === null)
      this.root = newNode

    while (tmpNode !== null) {
      if (value < tmpNode.value) {
        if (tmpNode.left)
          tmpNode = tmpNode.left;
        else {
          tmpNode.left = newNode;
          tmpNode = null;
        }
      } else {
        if (tmpNode.right)
          tmpNode = tmpNode.right;
        else {
          tmpNode.right = newNode;
          tmpNode = null;
        }

      }
    }

  }

  lookup = (value) => {

    let tmpNode = this.root;

    if (tmpNode === null)
      return null

    while (tmpNode !== null) {
      if (tmpNode.value === value) {
        return tmpNode;
      }
      else {
        if (value < tmpNode.value) {
          if (tmpNode.left) {
            if (tmpNode.left.value === value)
              return tmpNode.left;
            else
              tmpNode = tmpNode.left;
          } else {
            return null;
          }
        } else {
          if (tmpNode.right) {
            if (tmpNode.right.value === value)
              return tmpNode.right;
            else
              tmpNode = tmpNode.right;
          } else {
            return null;
          }
        }
      }
    }

    //optimizacion del lookup
    // while (tmpNode !== null) {
    //   if (tmpNode.value === value) {
    //     nodeToRemove = tmpNode;
    //   } else if (tmpNode.value < value){
    //     tmpNode = tmpNode.left;
    //   } else {
    //     tmpNode = tmpNode.right;
    //   }
    // }

  }

  remove = (value) => {

    let newNode;
    let nodeToRemove = null;
    let tmpNodeFather = null;
    let tmpNode = this.root;

    if (this.root === null)
      return null

    while (tmpNode !== null) {
      if (tmpNode.value === value) {
        tmpNode = tmpNode;
        break;
      }
      else {
        if (value < tmpNode.value) {
          if (tmpNode.left) {
            if (tmpNode.left.value === value) {
              tmpNodeFather = tmpNode;
              tmpNode = tmpNode.left;
              break;
            }
            else {
              tmpNodeFather = tmpNode;
              tmpNode = tmpNode.left;
            }
          } else {
            tmpNode = null;
          }
        } else {
          if (tmpNode.right) {
            if (tmpNode.right.value === value) {
              tmpNodeFather = tmpNode;
              tmpNode = tmpNode.right;
              break;
            }
            else {
              tmpNodeFather = tmpNode;
              tmpNode = tmpNode.right;
            }
          } else {
            tmpNode = null;
          }
        }
      }
    }

    nodeToRemove = tmpNode;
    if (!tmpNode.left && !tmpNode.right) {
      if (tmpNodeFather.left.value === value)
        tmpNodeFather.left = null;
      else
        tmpNodeFather.right = null;
      return nodeToRemove;
    }


    while (tmpNode !== null) {

      if (!tmpNodeFather) {
        if (this.root.value === value)
          ; //buscar el value a poner aqui
        else
          return null;
      }

      if (tmpNode.right) {
        //buscar el menor
      } else if (tmpNode.left.right) {
        //buscar el mayor
      }
    }

  }

  breadthFirstSearch = () => {
    
    let tmpNode = this.root;
    let list = [];
    const nodeQueue = new Queue();
    if(tmpNode) nodeQueue.enqueue(tmpNode);

    
    while(!nodeQueue.empty()){

      tmpNode = nodeQueue.dequeue();
      list.push(tmpNode.value.value);
      
      if(tmpNode.value.left) nodeQueue.enqueue(tmpNode.value.left);
      if(tmpNode.value.right) nodeQueue.enqueue(tmpNode.value.right);

    }

    return list;

  }

  breadthFirstSearch_R = (queue, list) => {
    if(!queue.length) 
      return list;

    let tmpNode = queue.dequeue();
    list.push(tmpNode.value.value);

    if(tmpNode.value.left) {
      queue.enqueue(tmpNode.value.left);
      // this.breadthFirstSearch_R(queue, list);
    }

    if(tmpNode.value.right) {
      queue.enqueue(tmpNode.value.right);
      // this.breadthFirstSearch_R(queue, list);
    }
    
    return this.breadthFirstSearch_R(queue, list);

  }

  depthFirstSearch_InOrder = (stack, list) => {
    if(!stack.length) 
      return list;
    
    let tmpNode = stack.peek();
    // console.log(stack);

    if(tmpNode.value.left) {
      stack.push(tmpNode.value.left);
      this.depthFirstSearch_InOrder(stack, list);
    } 

    tmpNode = stack.pop();
    list.push(tmpNode.value.value);
    
    if(tmpNode.value.right) {
      stack.push(tmpNode.value.right);
      this.depthFirstSearch_InOrder(stack, list);
    } 

    return list;

  }

  depthFirstSearch_PreOrder = (stack, list) => {
    if(!stack.length) 
      return list;

    let tmpNode = stack.pop();
    list.push(tmpNode.value.value);

    if(tmpNode.value.left) {
      stack.push(tmpNode.value.left);
      this.depthFirstSearch_PreOrder(stack, list);
    }

    if(tmpNode.value.right) {
      stack.push(tmpNode.value.right);
      this.depthFirstSearch_PreOrder(stack, list);
    }
    
    return list;

  }

  depthFirstSearch_PosOrder = (stack, list) => {
    if(!stack.length) 
      return list;
    
    let tmpNode = stack.peek();

    if(tmpNode.value.left) {
      stack.push(tmpNode.value.left);
      this.depthFirstSearch_PosOrder(stack, list);
    }
    
    
    if(tmpNode.value.right) {
      stack.push(tmpNode.value.right);
      this.depthFirstSearch_PosOrder(stack, list);
    } 
     
    tmpNode = stack.pop();
    list.push(tmpNode.value.value);
    
    return list;

  }

}


traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
console.log("-------------------------Tree------------------------");
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
// tree.insert(2);
tree.insert(1);
// tree.insert(3);
// tree.insert(5);
// tree.insert(7);
// tree.insert(13);
// tree.insert(16);
// tree.insert(160);
// tree.insert(171);
console.log(JSON.stringify(tree));
// const nT = traverse(tree.root);
console.log(tree.lookup(10));
console.log(tree.lookup(1));
// console.log(tree.lookup(9));
// console.log(tree.lookup(19));
// console.log(tree.lookup(20));
// tree.remove(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(JSON.stringify(traverse(nT)));
console.log(tree);
//    
//                9
//         4              20
//      2      6     15         170
//    1  3   5   7  13  16   160   171
console.log("breadthFirstSearch");
console.log(tree.breadthFirstSearch());
console.log("--------------------------------------------------------");
console.log("breadthFirstSearch_R");
let tmpNode = tree.root;
let  list = [];
const nodeQueue = new Queue();
nodeQueue.enqueue(tmpNode);
console.log(tree.breadthFirstSearch_R(nodeQueue, list));
console.log("--------------------------------------------------------");
console.log("depthFirstSearch_PreOrder");
list = [];
const nodeStack = new Stack();
nodeStack.push(tmpNode);
console.log(tree.depthFirstSearch_PreOrder(nodeStack, list));
console.log("--------------------------------------------------------");
console.log("depthFirstSearch_PosOrder");
list = [];
nodeStack.push(tmpNode);
console.log(tree.depthFirstSearch_PosOrder(nodeStack, list));
console.log("--------------------------------------------------------");
console.log("depthFirstSearch_InOrder");
list = [];
nodeStack.push(tmpNode);
console.log(tree.depthFirstSearch_InOrder(nodeStack, list));
console.log("--------------------------------------------------------");