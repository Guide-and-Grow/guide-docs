---
title: Variables in JS
description: discussion about variable
---


Variables allow you to **store** and **manipulate data** in your programs.

* There are three ways to declared the variables : `let`, `const` and `var`.

### Let keyword in JS 

When we declare a variable using the `let` keyword in JavaScript, you **can reassign** its value.

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

### Const Keyword in JS

When we declare a variable using the `const` keyword in JavaScript, you **cannot reassign** its value.

**Syntax :**

```js
const variable_name;
```

**Example :**

```js
const x = 10;
console.log(x); // Output: 10
```

### Var keyword in JS
 The JavaScript `var` statement is used to declare variables that are either limited to the function they are declared in or available globally. Before the introduction of ES6, `var` was the only way to declare variables in JavaScript. However, `var` does not have block scope, which means the variables declared with `var` are not confined to the block of code (like an if statement or a loop) in which they are declared, unlike variables declared with `let` and `const`.

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

**Happy learning! Happy Coding!**