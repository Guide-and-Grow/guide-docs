---
title: Stack and Heap Memory in JS
description: discussion about stack and heap memory
---

### There are two types of memories.

**1. Stack Memory:**

- **Definition:** The stack is a region of memory used for static storage. It stores primitive data types (such as `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`) and the reference to objects and functions.
- **Characteristics:**

  - **Fixed Size:** The stack has a fixed size, so it can fill up quickly, leading to a "stack overflow" if too many items are pushed onto the stack.
  - **LIFO (Last In, First Out):** Memory is allocated and freed in a strict order, following the LIFO principle.
  - **Fast Access:** The stack allows for quick allocation and deallocation of memory, making it faster compared to the heap.
  - **Function Call Execution:** Function calls, along with their local variables, are stored on the stack. When a function is called, a new stack frame is created, and it is destroyed when the function completes.

- **Example:**
  ```javascript
  function greet() {
    let name = "Yogita"; // 'name' is stored in the stack
    console.log("Hello, " + name);
  }
  greet();
  ```
  - Here, the string `"Yogita"` is stored directly in the stack because it's a primitive value.

**2. Heap Memory:**

- **Definition:** The heap is a region of memory used for dynamic storage. It stores objects, arrays, and functions. In JavaScript, anything that is not a primitive value is stored in the heap.
- **Characteristics:**

  - **Dynamic Size:** The heap has a larger, flexible size compared to the stack, allowing for more complex data structures to be stored.
  - **Slower Access:** Accessing data in the heap is slower because of the need to manage memory dynamically, and the data is accessed via references.
  - **Garbage Collection:** JavaScript uses a garbage collector to manage memory in the heap, automatically freeing up memory that is no longer in use.

- **Example:**
  ```javascript
  function createUser() {
    let user = {
      name: "Yogita", // 'user' is a reference stored in the stack, but the object is stored in the heap
      age: 23,
    };
    return user;
  }
  let user1 = createUser();
  ```
  - In this example, the object `{ name: "Yogita", age: 23 }` is stored in the heap, while the reference to this object is stored in the stack.

**Summary:**

- **Stack:** Stores primitive data types and references. It has a fixed size and operates in a LIFO manner.
- **Heap:** Stores objects, arrays, and functions. It has dynamic sizing and is managed by garbage collection.

Understanding the distinction between stack and heap memory is important for optimizing performance and avoiding common issues like memory leaks in JavaScript applications.
