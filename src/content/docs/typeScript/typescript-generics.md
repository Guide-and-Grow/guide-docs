---
title: Generics in TypeScript
description: Welcome! In this guide, we’ll explore generics in TypeScript. Generics provide a way to create reusable components and functions that work with any data type while maintaining type safety. Let’s dive in!
---

## What Are Generics?

Generics allow you to define functions, classes, and interfaces that can work with any type of data without losing the information about the type. This leads to more flexible and reusable code.

## Why Use Generics?

- **Type Safety**: Generics help catch type errors at compile time instead of runtime.
- **Reusability**: You can create a single function or class that works with different types.
- **Clarity**: Generics make your code easier to understand by explicitly stating the types.

## How to Use Generics

### Generic Functions

You can create a function that takes a type parameter by using angle brackets (`<T>`) to define the type. Here’s an example of a generic function:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("Hello, Generics!");
console.log(result1); // Output: Hello, Generics!

const result2 = identity<number>(42);
console.log(result2); // Output: 42
```

### Generic Interfaces

You can also use generics in interfaces to define the structure of objects that can work with any type.

```typescript
interface Box<T> {
  contents: T;
}

const stringBox: Box<string> = { contents: "This is a string box." };
const numberBox: Box<number> = { contents: 123 };
console.log(stringBox.contents); // Output: This is a string box.
console.log(numberBox.contents); // Output: 123
```

### Generic Classes

You can create classes that work with generic types, allowing you to create instances with different data types.

```typescript
class Container<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const stringContainer = new Container<string>();
stringContainer.addItem("Item 1");
stringContainer.addItem("Item 2");
console.log(stringContainer.getItems()); // Output: ["Item 1", "Item 2"]

const numberContainer = new Container<number>();
numberContainer.addItem(1);
numberContainer.addItem(2);
console.log(numberContainer.getItems()); // Output: [1, 2]
```

## Constraints

Sometimes, you may want to restrict the types that can be used with generics. You can do this by adding constraints. For example, you can specify that a type must extend a certain interface:

```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(`Length: ${arg.length}`);
}

logLength("Hello, Generics!"); // Output: Length: 16
logLength([1, 2, 3]); // Output: Length: 3
// logLength(123); // Error: Argument of type 'number' is not assignable to parameter of type 'HasLength'.
```

### Key Point :

- **Generics**: Allow you to create flexible and reusable components.
- **Type Safety**: Catch errors at compile time.
- **Constraints**: Restrict types to ensure they meet certain criteria.

### 💡 **Conclusion**

Generics are a powerful feature in TypeScript that enable you to write code that is both flexible and type-safe. By using generics, you can create functions, classes, and interfaces that work with a variety of types while maintaining clarity and organization.

Happy coding with TypeScript! 🎉

---

