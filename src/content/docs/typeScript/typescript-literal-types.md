---
title: "Literal Types in TypeScript"
description: "n TypeScript, optional properties are fields in an object that you can include or leave out. If a property is optional, you can create objects without that property."
---

Welcome! This guide will explain **Literal Types** in TypeScript. They are a powerful way to make your code more predictable by narrowing down what values a variable can hold. Let’s walk through how they work.

## What Are Literal Types?

Literal types let you specify an exact value for a variable, rather than just a general type like `string` or `number`. Think of it like saying: _“This variable can only be one specific thing.”_

### Example of Literal Types:

```typescript
let direction: "up" | "down" | "left" | "right";

direction = "up"; // ✅ This works
direction = "sideways"; // ❌ Error: "sideways" is not assignable
```

Here, `direction` can only have one of four literal values: `"up"`, `"down"`, `"left"`, or `"right"`.

---

## Using Literal Types

Literal types work great for defining valid values more precisely. Let's see where they can be useful.

### 1. String Literals

```typescript
type Role = "admin" | "user" | "guest";

let myRole: Role = "admin"; // ✅ Valid
myRole = "superuser"; // ❌ Error: "superuser" isn't part of the Role type
```

This ensures that `myRole` will always have one of the allowed values.

### 2. Number Literals

```typescript
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

diceRoll = 3; // ✅ Valid
diceRoll = 7; // ❌ Error: 7 is not allowed
```

This way, the value for `diceRoll` will always represent a valid dice roll.

---

## Literal Types with Functions

You can use literal types with functions to ensure only certain inputs are accepted.

```typescript
function respond(status: "success" | "error"): string {
  return `Response status: ${status}`;
}

console.log(respond("success")); // ✅ Output: Response status: success
console.log(respond("pending")); // ❌ Error: "pending" is not a valid status
```

Here, the `respond` function only accepts `"success"` or `"error"` as arguments.

---

## Combining Literals with Types

You can use literal types with other types to build more useful structures.

### Example with Objects:

```typescript
type Button = {
  label: string;
  color: "blue" | "green" | "red";
};

const submitButton: Button = {
  label: "Submit",
  color: "blue",
};

console.log(submitButton); // ✅ Output: { label: 'Submit', color: 'blue' }
```

This ensures that the `color` of a button can only be `"blue"`, `"green"`, or `"red"`.

---

## Literal Types with `const`

When you declare a variable with `const`, TypeScript automatically assigns it a literal type. This helps keep things predictable.

```typescript
const pi = 3.14; // pi's type is 3.14 (literal type), not just "number"

let radius: number = 10;
let area = pi * radius * radius; // Works fine
```

---

### Key Points :

- **Exact Values**: Literal types allow only specific values for variables.
- **Predictable Code**: They help prevent invalid inputs and reduce bugs.
- **Flexible**: You can combine literal types with other types like objects or unions.

### 💡 **Conclusion**

Literal types in TypeScript help you narrow down the range of valid values for variables and functions, making your code safer and more predictable. Use them whenever you need strict control over your data!

Happy coding with TypeScript! 🎉

---
