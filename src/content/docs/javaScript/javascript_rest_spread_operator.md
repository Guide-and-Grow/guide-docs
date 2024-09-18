---
title: Rest and Spread Operator in JS
description: discussion about Rest and Spread Operator
---

The **rest** and **spread** operators in JavaScript are represented by three **dots (...)**. Despite having similar syntax, they serve different purposes depending on the context in which they are used.

### Rest Operator (...)

The **rest** operator allows you to collect the remaining elements of an array or object into a new array or object. It is used in function parameters or destructuring assignments to gather the rest of the elements that are not explicitly listed.

#### Rest in Function Parameters

The **rest** operator is commonly used when you want a function to accept an indefinite number of arguments and group them into an array.

```js
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

Here, **...numbers** collects all arguments passed to the **sum** function into an array named **numbers**.

#### Rest in Array Destructuring

The **rest** operator can also be used to gather the remaining elements of an array after some have been destructured.

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

Here, **first** and **second** get the first two elements, and **rest** collects the remaining elements into an array.

#### Rest in Object Destructuring

Similarly, in object destructuring, you can use the **rest** operator to gather remaining properties into a new object.

```javascript
const user = { name: "John", age: 30, country: "USA" };
const { name, ...rest } = user;
console.log(name); // Output: John
console.log(rest); // Output: { age: 30, country: 'USA' }
```

In this case, the `name` property is extracted, and the rest of the properties are gathered into a new object.

### Spread Operator (...)

The **spread** operator is used to spread out elements of an array or object into individual elements. It allows you to copy or combine arrays and objects or to pass elements of an array as individual arguments to a function.

#### Spread in Arrays

The **spread** operator can be used to expand an array's elements into a new array.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

Here, `...arr1` and `...arr2` spread the elements of both arrays into the new combined array.

#### Spread in Function Arguments

The **spread** operator allows an array to be passed as individual arguments to a function.

```javascript
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6
```

Here, **...numbers** spreads the array elements as individual arguments to the add function.

#### Spread in Objects

You can also use the spread operator to clone or merge objects.

```javascript
const user1 = { name: "Alice", age: 25 };
const user2 = { country: "UK" };
const mergedUser = { ...user1, ...user2 };
console.log(mergedUser); // Output: { name: 'Alice', age: 25, country: 'UK' }
```

In this case, `...user1` and `...user2` spread the properties of both objects into the new mergedUser object.

#### Spread for Copying Arrays or Objects

The **spread** operator provides an easy way to create a shallow copy of an array or object.

```javascript
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // Output: [1, 2, 3]

const originalObject = { name: "Bob", age: 40 };
const copyObject = { ...originalObject };
console.log(copyObject); // Output: { name: 'Bob', age: 40 }
```

**Summary of Differences:**

#### Rest Operator (...)

- Gathers elements into an array or object.
- Commonly used in function parameters and destructuring assignments.

#### Spread Operator (...)

- Spreads elements of an array or object.
- Used to expand arrays into individual elements, pass arguments, or merge objects.
- These two operators are incredibly useful for writing clean and flexible code in JavaScript!

**Rest and Spread operators are same?**

No, the rest and spread operators are not the same, even though they use the same ... syntax. The key difference lies in how and where they are used.

**Key Differences:**

**1. Purpose:**

- The rest operator is used to gather or collect multiple elements into a single array or object.

- The spread operator is used to spread or expand an array or object into individual elements.

**2. Context of Use:**

- The rest operator is used in function parameter lists and in destructuring assignments to gather remaining elements.

- **Example:** Gathering remaining function arguments.

- The spread operator is used when calling functions, in array literals, or object literals to expand an array/object into individual items.

- **Example:** Spreading array elements or object properties.

**3. Use Cases:**

- **Rest:**

  - Collecting arguments in a function (...args).

  - Collecting remaining array elements or object properties when destructuring.

- **Spread:**

  - Spreading array elements into function arguments (...array).
  - Creating a new array by combining others or copying one.
  - Merging objects.

**Visual Comparison:**

- **Rest Operator** (Collects elements into an array/object):

```javascript
function demoRest(...args) {
  console.log(args); // ['a', 'b', 'c']
}
demoRest("a", "b", "c");
```

- **Spread Operator** (Expands an array/object):

```javascript
const arr = ["a", "b", "c"];
console.log(...arr); // 'a' 'b' 'c'
```

**In summary :**

- **Rest** gathers elements into a new collection (used in destructuring or function parameters).

- **Spread** expands elements from a collection (used to copy, combine arrays/objects, or pass multiple arguments).
