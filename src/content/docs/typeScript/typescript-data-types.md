---
title: 📘 TypeScript Data Types
description: Welcome to this short guide! TypeScript adds types to JavaScript, making your code safer and easier to manage. Below are the essential data types in TypeScript, with simple explanations. 🚀
---


Welcome to this short guide! TypeScript adds types to JavaScript, making your code safer and easier to manage. Below are the essential data types in TypeScript, with simple explanations. 🚀

---

### ⚡️ 1. **Number**

- **Example:** `let age: number = 25;`
- Numbers include integers and decimals (e.g., `10`, `3.14`).

---

### ⚡️ 2. **String**

- **Example:** `let name: string = "Saurabh";`
- Represents text (always enclosed in quotes).

---

### ⚡️ 3. **Boolean**

- **Example:** `let isActive: boolean = true;`
- Holds either `true` or `false` values.

---

### ⚡️ 4. **BigInt**

- **Example:** `let bigNum: bigint = 9007199254740991n;`
- Used for very large numbers beyond `Number` limits. Add `n` at the end.

---

### ⚡️ 5. **Array**

- **Example:** `let numbers: number[] = [1, 2, 3];`
- Holds a list of values of the same type.

---

### ⚡️ 6. **Tuple**

- **Example:** `let person: [string, number] = ["Alice", 30];`
- Fixed-size arrays with known types for each element.

---

### ⚡️ 7. **Any**

- **Example:** `let data: any = "Hello";`
- Can store **any type**. Use carefully!

---

### ⚡️ 8. **Unknown**

- **Example:** `let input: unknown = 42;`
- Similar to `any`, but safer. Requires type checking before use.

---

### ⚡️ 9. **Void**

- **Example:**

```ts
function logMessage(): void {
  console.log("Hello");
}
```

- No value is returned (used in functions).

---

### ⚡️ 10. **Never**

- **Example:**

```ts
function error(): never {
  throw new Error("Something went wrong");
}
```

- Represents functions that never return (e.g., errors).

---

### ⚡️ 11. **Enum**

- **Example:**

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
let move: Direction = Direction.Up;
```

- A way to define named constants.

---

That’s it! TypeScript’s types help you write reliable, error-free code. Happy coding! 🎉
