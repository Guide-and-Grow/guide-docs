---
title: JavaScript Linked List Questions Guide
description: Advanced-Level JavaScript Data Structures and Algorithms Questions
---

## Overview

This guide covers the implementation and operations of different types of linked lists in JavaScript. It serves as a comprehensive reference for understanding and working with linked list data structures.

## Definition

A Linked list is a linear data structure where elements, called **nodes**, are not stored contiguously in memory. Instead, each node contains **data** and a **references** , or link, to the next node in the sequence,

## Types of Linked Lists

### 1. Singly Linked List

A singly linked list is a linear data structure where each element (node) contains a data field and a reference (link) to the next node in the sequence.

#### Core Operations

- **Push**: Add a new node at the end of the list
- **Pop**: Remove the last node from the list
- **Unshift**: Add a new node at the beginning of the list
- **Shift**: Remove the first node from the list
- **GetFirst**: Retrieve the first node
- **GetLast**: Retrieve the last node
- **Set**: Update the value of a node at a specific position
- **Insert**: Add a new node at a specific position
- **Size**: Get the total number of nodes
- **Clear**: Remove all nodes from the list

### 2. Doubly Linked List

A doubly linked list is an extension of the singly linked list where each node contains references to both the next and previous nodes.

#### Core Operations

- **Push**: Add a new node at the end of the list
- **Pop**: Remove the last node from the list
- **Unshift**: Add a new node at the beginning of the list
- **Shift**: Remove the first node from the list

### 3. Reverse Linked List

A specialized operation that reverses the order of nodes in a linked list.



## 1. Node + LinkedList Class (Singly)

### 🧩 Node Class

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

### 🛠 LinkedList Class

```js
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let temp = this.head;
    while (temp && temp.next) {
      temp = temp.next;
    }
    return temp;
  }

  get(index) {
    let count = 0;
    let temp = this.head;
    while (temp) {
      if (count === index) return temp;
      temp = temp.next;
      count++;
    }
    return null;
  }

  set(index, value) {
    const found = this.get(index);
    if (found) {
      found.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unShift(value);
    if (index === this.length) return this.push(value);
    const newNode = new Node(value);
    const prev = this.get(index - 1);
    if (!prev) return false;
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

---

## 🧪 Example + Step-by-Step Breakdown

```js
const list = new LinkedList(10);
list.push(20);
list.push(30);
list.unshift(5);
list.pop();
list.shift();

console.log("First Node:", list.getFirst());
console.log("Last Node:", list.getLast());
console.log("Size:", list.size());
list.set(1, 100);
list.insert(1, 50);
list.clear();
```

---

### 🧠 Let’s Understand Step by Step

#### ✅ Step 1: `new LinkedList(10)`

- List: `10`
- Head = Tail = 10
- Length = 1

#### ✅ Step 2: `push(20)`

- List: `10 → 20`
- Tail is now 20
- Length = 2

#### ✅ Step 3: `push(30)`

- List: `10 → 20 → 30`
- Tail is now 30
- Length = 3

#### ✅ Step 4: `unshift(5)`

- List: `5 → 10 → 20 → 30`
- Head is now 5
- Length = 4

#### ✅ Step 5: `pop()`

- Removes 30
- List: `5 → 10 → 20`
- Tail is now 20
- Length = 3

#### ✅ Step 6: `shift()`

- Removes 5
- List: `10 → 20`
- Head is now 10
- Length = 2

#### ✅ Step 7: `getFirst()` → returns `10`

#### ✅ Step 8: `getLast()` → returns `20`

#### ✅ Step 9: `size()` → returns `2`

#### ✅ Step 10: `set(1, 100)`

- Updates index 1 (which is 20) to 100
- List: `10 → 100`

#### ✅ Step 11: `insert(1, 50)`

- Insert 50 at index 1
- List: `10 → 50 → 100`
- Length = 3

#### ✅ Step 12: `clear()`

- Empties the list
- List: empty
- Head = Tail = null
- Length = 0

---
