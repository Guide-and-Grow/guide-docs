---
title: "Type Guards in TypeScript"
description: "Type Guards in TypeScript help narrow down types at runtime, ensuring that your code works safely with specific types. They allow you to check if a value belongs to a particular type, making your code more reliable and reducing errors."
---

Type Guards in TypeScript help **narrow down types** at runtime, ensuring that your code works safely with specific types. They allow you to check if a value belongs to a particular type, making your code more reliable and reducing errors.

---

## What Are Type Guards?

A **Type Guard** is an expression that performs a runtime check to confirm the type of a variable. Based on the result, TypeScript **refines** the type of the variable for the block of code within that condition.

---

## Example of Type Guards

```typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(`ID in string format: ${id.toUpperCase()}`);
  } else {
    console.log(`ID as a number: ${id}`);
  }
}

printId("abc123"); // ✅ Output: ID in string format: ABC123
printId(101); // ✅ Output: ID as a number: 101
```

Here, the `typeof` check acts as a type guard, ensuring `id` is treated correctly as either a string or a number.

---

## Built-in Type Guards

1. **`typeof` Operator**: Used to check primitive types like `string`, `number`, `boolean`, etc.

   ```typescript
   if (typeof value === "string") {
     /* ... */
   }
   ```

2. **`instanceof` Operator**: Used to check if an object is an instance of a class.

   ```typescript
   class Car {
     drive() {
       console.log("Driving...");
     }
   }
   const myCar = new Car();

   if (myCar instanceof Car) {
     myCar.drive(); // ✅ Works, myCar is confirmed to be a Car
   }
   ```

---

## Custom Type Guards

You can create **custom type guards** using functions with a special `is` return type. This is useful when working with more complex types.

### Example:

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark(); // ✅ TypeScript knows it's a Dog here
  } else {
    animal.meow(); // ✅ TypeScript knows it's a Cat here
  }
}
```

In this example, `isDog` is a **custom type guard** that tells TypeScript whether the given `animal` is a Dog.

---

## Using `in` Operator

The **`in` operator** is another way to narrow types by checking if a property exists in an object.

```typescript
type Admin = { role: string };
type User = { username: string };

function printInfo(person: Admin | User) {
  if ("role" in person) {
    console.log(`Admin Role: ${person.role}`);
  } else {
    console.log(`User Name: ${person.username}`);
  }
}
```

---

### Key Points :

- **Type Guards** help TypeScript determine a variable's type at runtime.
- **Built-in Guards**: Use `typeof` for primitives and `instanceof` for class instances.
- **Custom Guards**: Define your own guards with functions that return `animal is Type`.
- **`in` Operator**: Check for property existence to narrow object types.

---

### 💡 **Conclusion**

Type Guards make your code safer and more predictable by narrowing down types at runtime. They let TypeScript understand what type a value will have, reducing errors and improving developer experience.

Happy coding with **Typescript**! 🎉

<img src='https://gifdb.com/images/high/laughing-emoji-dancing-585iwufjh8ur44dg.webp'  width="100px"/>

---
