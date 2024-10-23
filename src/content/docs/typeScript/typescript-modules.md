---
title: "Modules in TypeScript"
description: Modules help you split your code into smaller, reusable parts, making it easier to manage. Each module can export variables, functions, or classes to be used in other files.
---


Modules help you split your code into smaller, reusable parts, making it easier to manage. Each module can export variables, functions, or classes to be used in other files.

---

## Exporting from a Module

### Named Exports  
You can export multiple things from a module:

```typescript
// math.ts
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
```

Importing named exports:

```typescript
// app.ts
import { add, subtract } from './math';

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
```

---

### Default Exports  
A module can have one default export:

```typescript
// greet.ts
export default (name: string) => `Hello, ${name}!`;
```

Importing a default export:

```typescript
// app.ts
import greet from './greet';

console.log(greet('TypeScript')); // Hello, TypeScript!
```

---

## Importing Everything

You can import everything from a module as an object:

```typescript
// app.ts
import * as Math from './math';

console.log(Math.add(2, 3)); // 5
```

---

### Key Points :
- **Named exports** allow exporting multiple things.  
- **Default exports** export one value per module.  
- Use `import *` to import all exports as an object.

---

### 💡 **Conclusion**

Modules help keep your code organized and reusable. Use them to split logic into smaller parts and import what you need!

<img src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3QwczUxMmZ3aWl3b3ExcTFtN3pvOGN5Z3V1NHNlemR5dDNsOTFxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/NiwZ9THiCOodYySoSh/giphy.gif'  width="100px"/>

---

