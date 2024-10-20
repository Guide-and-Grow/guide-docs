---
title: Functions in TypeScript
description: Welcome! This guide will help you understand how to create and use functions in TypeScript. Functions are essential for writing organized and reusable code. Let’s break it down step by step!
---

Welcome! This guide will help you understand how to create and use functions in TypeScript. Functions are essential for writing organized and reusable code. Let’s break it down step by step!

## What Are Functions ?

Functions are blocks of code designed to perform a specific task. You can think of them as little machines that take inputs, do something with them, and give you an output. In TypeScript, you can define functions with specific types, which helps catch errors early and makes your code clearer.

## How to Define Functions

There are several ways to define functions in TypeScript:

### 1. Function Declarations

This is the most straightforward way to define a function. You give it a name and specify what it does.

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript")); // Output: Hello, TypeScript!
```

### 2. Function Expressions

With function expressions, you create a function and assign it to a variable. This is useful for storing functions for later use.

```typescript
const add = function (x: number, y: number): number {
  return x + y;
};

console.log(add(5, 3)); // Output: 8
```

### 3. Arrow Functions

Arrow functions are a more concise way to write function expressions. They’re especially handy for shorter functions.

```typescript
const multiply = (x: number, y: number): number => x * y;

console.log(multiply(4, 2)); // Output: 8
```

## Optional and Default Parameters

Sometimes, you might want to make a parameter optional or set a default value. Here’s how you can do that:

### Optional Parameters

Add a `?` after the parameter name to make it optional.

```typescript
function greetWithDefault(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

console.log(greetWithDefault("TypeScript")); // Output: Hello, TypeScript!
```

### Default Parameters

You can set a default value for a parameter if it’s not provided.

```typescript
function greetWithDefault(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetWithDefault("TypeScript")); // Output: Hello, TypeScript!
console.log(greetWithDefault("TypeScript", "Welcome")); // Output: Welcome, TypeScript!
```

## Rest Parameters

Rest parameters let you accept an indefinite number of arguments. This is useful when you don’t know how many inputs you’ll get.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Key Points :

- **Type Safety**: Specify types for function parameters and return values to catch errors early.
- **Flexibility**: Use optional, default, and rest parameters to create versatile functions.
- **Code Clarity**: Clear function definitions improve readability and make your code easier to maintain.

### 💡 **Conclusion**

Functions are a powerful feature in TypeScript that help you organize your code effectively. By using typed parameters and return types, you can create safer and more reliable applications.

Happy coding with TypeScript! 🎉

---
