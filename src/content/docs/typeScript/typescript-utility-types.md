---
title: "Utility Types in TypeScript"
description: "Welcome! In this guide, we’ll learn about Utility Types in TypeScript. These built-in types help you manipulate and transform other types, making your code cleaner and more manageable. Let’s explore how they work!"
---

Welcome! In this guide, we’ll learn about **Utility Types** in TypeScript. These built-in types help you manipulate and transform other types, making your code cleaner and more manageable. Let’s explore how they work!

---

## What Are Utility Types?

Utility types in TypeScript are pre-defined types that allow you to quickly modify or extract information from other types. They save you time by automating common tasks like making fields optional, readonly, or picking specific properties from an object.

---

## Commonly Used Utility Types

Let’s look at some of the most popular utility types and how they can be useful.

---

### 1. **`Partial`**

Converts all properties of a type to **optional**.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const updateUser = (user: Partial<User>) => {
  console.log(user);
};

updateUser({ name: "Saurabh" }); // ✅ Valid, only name provided
```

#### Use Case :

When updating part of an object without requiring all fields.

---

### 2. **`Required`**

Makes all properties **required** (opposite of `Partial`).

```typescript
type User = {
  id?: number;
  name?: string;
  email?: string;
};

const createUser = (user: Required<User>) => {
  console.log(user);
};

createUser({ id: 1, name: "Saurabh", email: "test@example.com" }); // ✅ Valid
```

#### Use Case :

When you need to ensure all properties are present.

---

### 3. **`Readonly`**

Makes all properties **read-only**, preventing them from being modified.

```typescript
type User = {
  id: number;
  name: string;
};

const user: Readonly<User> = { id: 1, name: "Saurabh" };
// user.id = 2; // ❌ Error: Cannot assign to 'id' because it is read-only
```

#### Use Case :

When you want to create immutable objects.

---

### 4. **`Pick`**

Selects a **subset of properties** from a type.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = { id: 1, name: "Saurabh" };
console.log(user);
```

#### Use Case :

When you need only specific fields from a type.

---

### 5. **`Omit`**

Removes certain properties from a type.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserWithoutEmail = Omit<User, "email">;

const user: UserWithoutEmail = { id: 1, name: "Saurabh" };
console.log(user);
```

#### Use Case :

When you want to exclude some properties from an object type.

---

### 6. **`Record`**

Creates a type with a **fixed set of keys and values**.

```typescript
type Role = "admin" | "user" | "guest";

const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};

console.log(permissions);
```

#### Use Case :

When you need to map keys to specific values.

---

### 7. **`Exclude`**

Removes specific types from a union.

```typescript
type Status = "success" | "error" | "pending";

type NonPendingStatus = Exclude<Status, "pending">;

let status: NonPendingStatus = "success"; // ✅ Valid
// status = "pending"; // ❌ Error: Type '"pending"' is not assignable
```

#### Use Case:

When you want to exclude specific values from a union type.

---

### 8. **`Extract`**

Extracts only the matching types from a union.

```typescript
type Status = "success" | "error" | "pending";

type OnlyPending = Extract<Status, "pending">;

let status: OnlyPending = "pending"; // ✅ Valid
```

#### Use Case:

When you need to filter out only certain types from a union.

---

### 9. **`NonNullable`**

Removes `null` and `undefined` from a type.

```typescript
type User = {
  id: number | null;
  name?: string;
};

type NonNullableId = NonNullable<User["id"]>;

let id: NonNullableId = 123; // ✅ Valid
// id = null; // ❌ Error: 'null' is not assignable
```

#### Use Case :

When you want to make sure a value is neither `null` nor `undefined`.

---

### 💡 **Conclusion**

Utility types in TypeScript make working with types much easier by helping you modify and reuse them effectively. They improve your code’s clarity and reduce boilerplate.

### Summary of Utility Types:

- **`Partial`**: Makes fields optional.
- **`Required`**: Makes fields required.
- **`Readonly`**: Makes fields read-only.
- **`Pick`**: Selects specific fields.
- **`Omit`**: Excludes specific fields.
- **`Record`**: Maps keys to values.
- **`Exclude`**: Removes types from unions.
- **`Extract`**: Extracts matching types.
- **`NonNullable`**: Removes `null` and `undefined`.

Use these types wisely to write cleaner, safer, and more efficient TypeScript code!

Happy coding with **Typescript**! 🎉

<img src='https://media1.giphy.com/media/1vlBgKjXEz1jTtsuiH/giphy.webp?cid=ecf05e47tebdcdfrr7nivhdmfp9g0zv67hh5jlrcbuclx6h2&ep=v1_gifs_search&rid=giphy.webp&ct=g'  width="100px"/>

---
