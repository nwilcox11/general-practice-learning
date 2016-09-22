'use strict';

/*
LinkedList ->
  Made up of a bunch of nodes, each node has 2 properties, a VALUE and a POINTER to the next node.
  The first element is called the head, the last is the tail.

  Gets are expensive, because you must start at the head and traverse until you reach a desired index.
  Deletes are cheap (relatively), once you find the node to be removed, simply change the pointer.
*/
