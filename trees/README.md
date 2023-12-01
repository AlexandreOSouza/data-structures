# Trees

## Binary tree

- Each node can have only one parent
- Each node can have up to two child
- There are two types of binary tree

1. Perfect Binary Tree
   - Every node has two childs
   - The number of nodes double in each layer
   - The number of nodes in the bottom layer is the same as every node + 1
   - The notaion is O(log N)
2. Full Binary Tree

### Calculate the number of nodes (O(log N))

- # of nodes = 2^h - 1;
- log nodes = heigh
- Level 0: 2^0 = 1;
- Level 1: 2^1 = 2;
- Level 2: 2^2 = 4;
- Level 3: 2^3 = 8;

## Binary Search Tree

- Preserve relationships

### Rules

1. All the child node to the right must be greater then the current node
2. A Node can have up to two childs

### Methods

- lookup -> O(log n)
- insert -> O(log n)
- delete -> O(log n)

### Pros and Cons

- Pros
  - Better than O(n)
  - Ordered
  - Flexible Size
- Cons
  - No O(1) operations

### Balanced vs Unbalanced BST

- Unbalanced
  - Almost change to a linked list
  - The operations become O(n)

### Balanced BST

- AVL
- Black / Red tree

## Heap Tree

- Binary Heap
  - Every child value is lower then the parent value
  - (max heap)
  - is good to do a comparative operations
  - Left to right insertion
  - Used in priority queue

### Heap method

- lookup -> O(n)
- insert -> O(log n)
- delete -> O(log n)
