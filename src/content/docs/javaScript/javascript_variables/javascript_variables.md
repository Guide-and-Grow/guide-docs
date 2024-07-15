---
title: Variables in JS
description: discussion about variable
---

Variables allow you to **store** and **manipulate data** in your programs.

- There are three ways to declared the variables : `let`, `const` and `var`.

### Variable Declaration with let

In JavaScript, when you declare a variable using the `let` keyword, you can reassign its value. This means that after the initial assignment, you can change the value of the variable to something else later in your code.

**Syntax :**

```js
let variable_name;
```

**How to create variable using `let` keyword?**

```js
let myvariable;
```

**Example :**

```js
let x = 10;
console.log(x); // Output: 10

x = 20;
console.log(x); // Output: 20
```

### Variable Declaration with `const`

In JavaScript, when you declare a variable using the `const` keyword, you cannot reassign its value. This means that once a value is assigned to a const variable, it cannot be changed.

**Syntax :**

```js
const variable_name;
```

**Example :**

```js
const x = 10;
console.log(x); // Output: 10
```

### Variable Declaration with `var`

In JavaScript, when you declare a variable using the `var` keyword, you can reassign its value, similar to `let`. However, there are important differences regarding scope and hoisting.

**Example :**

```js
// Declaring a variable using var
var greeting = "Hello, World!";

// Using the variable
console.log(greeting); // Outputs: Hello, World!
```

:::danger
Modern JavaScript often uses `let` and `const` instead of `var` because they have block scope and avoid some of the pitfalls of var.
:::

### Difference between const, var and let

| Feature                    | var                                            | let                                     | const                                                    |
| -------------------------- | ---------------------------------------------- | --------------------------------------- | -------------------------------------------------------- |
| Scope                      | Function-scoped                                | Block-scoped                            | Block-scoped                                             |
| Re-assignment              | Can be re-assigned and re-declared.             | Can be re-assigned, but not re-declared. | Cannot be re-assigned or re-declared.                     |
| Hoisting                   | Hoisted to the top of function.                 | Hoisted to the top of block.             | Hoisted to the top of block.                              |
| Initialization Requirement. | Can be declared without initialization.         | Needs to be initialized before use.      | Needs to be initialized before use.                       |
| Use Cases.                  | Legacy code compatibility, less strict scoping. | Preferred for variable. scoping clarity.  | Preferred for constants and values that shouldn't change. |

**Happy learning! Happy Coding!**
