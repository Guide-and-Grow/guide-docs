---
title: Namespaces in TypeScript
description: Namespaces in TypeScript are a way to organize code into logical units, helping avoid name collisions in large codebases by grouping related functions, classes, or interfaces under a single namespace. Think of them as containers for related functionality.
---

Namespaces in TypeScript help **organize code** into logical groups. They also **avoid name conflicts** by grouping related functions, classes, or variables under a single namespace. Think of them like folders that keep your code neat and structured.

---

## Creating a Namespace

You can create a namespace with the `namespace` keyword.

```typescript
namespace Utilities {
  export function logMessage(message: string): void {
    console.log(`Log: ${message}`);
  }

  export const version = "1.0.0";
}
```

- **`export`**: Only items marked with `export` are available outside the namespace.

---

## Using a Namespace

To access things inside a namespace, you prefix them with the namespace name.

```typescript
Utilities.logMessage("Hello from Utilities!"); // ✅ Works
console.log(Utilities.version); // ✅ Output: 1.0.0
```

---

## Nested Namespaces

You can **nest namespaces** to group related code even further.

```typescript
namespace App {
  export namespace User {
    export function getUserInfo(id: number) {
      return `User ID: ${id}`;
    }
  }
}

console.log(App.User.getUserInfo(42)); // ✅ Output: User ID: 42
```

---

## When to Use Namespaces vs. Modules

- **Use namespaces** when your code is in the same project or file.
- **Use ES Modules** (`import`/`export`) for code that spans multiple files or needs to be shared with others.

> In modern TypeScript, ES Modules are often preferred for better compatibility.

---

## Aliasing a Namespace

You can create **shorter aliases** for long namespaces to make your code cleaner.

```typescript
namespace App.Utilities {
  export function printDate() {
    console.log(new Date());
  }
}

import Utils = App.Utilities;
Utils.printDate(); // ✅ Output: Current date and time
```

---

### Key Takeaways

- **Organized Code**: Namespaces group related code together.
- **No Conflicts**: They prevent name clashes between variables or functions.
- **Exporting Matters**: Use `export` to make items accessible outside the namespace.
- **Prefer Modules**: For larger projects, **ES Modules** are more suitable.

---

## 💡 Conclusion

Namespaces in TypeScript help structure your code and keep things organized. They are great for internal projects, but when working with larger or multi-file setups, consider using **ES Modules** instead.

Happy coding with **Typescript**! 🎉

<img src='https://i.pinimg.com/originals/64/45/ee/6445ee2274a782a7c528303e9bd823d7.gif'  width="100px"/>

---
