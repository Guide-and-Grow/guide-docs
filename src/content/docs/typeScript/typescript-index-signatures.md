---
title: "Index Signatures in TypeScript"
description: "In TypeScript, index signatures let you define objects with dynamic keys. These are useful when the property names are not known befor ehand, but the value types are predictable."
---

In TypeScript, **index signatures** let you define objects with dynamic keys. These are useful when the property names are not known beforehand, but the value types are predictable.

---

## Basic Example

```typescript
interface UserRoles {
  [role: string]: string;
}

const roles: UserRoles = {
  admin: "Admin",
  user: "User",
};

console.log(roles.admin); // Output: Admin
```

Here, any string key can be added, and its value must be a string.

---

## Number Index Example

```typescript
interface Scores {
  [index: number]: number;
}

const studentScores: Scores = [85, 90, 78];

console.log(studentScores[1]); // Output: 90
```

This allows you to define an array where each index holds a number value.

---

### 💡 **Conclusion**
Index signatures are handy when working with objects or arrays with flexible keys. They help maintain type safety while giving you the freedom to add dynamic properties or indexes. Use them when you need predictable value types but variable keys.

---


Happy coding with **Typescript**! 🎉

<img src='https://gifdb.com/images/thumbnail/big-smile-laughing-emoji-bjd9pbiv2ulndat9.webp'  width="100px"/>

---
