---
title: TypeScript Types vs. Interfaces
description: definitions, examples, and key differences between Types and Interfaces in TypeScript.
---




## 📖 Introduction  
TypeScript provides two powerful constructs for defining the shape of objects: **Types** and **Interfaces**. Both serve to add **type safety** and **structure** to your code, but they differ in usage and capabilities.

This guide will walk you through the **definitions**, **examples**, and **key differences** between Types and Interfaces in TypeScript.

---

## ⚡️ **Type Alias**  
A **Type Alias** allows you to **name a type**. You can define complex data structures or combine multiple types into one. 

### 📝 **When to Use Types?**  
- For **primitive types**, **unions**, or **intersections**.
- When creating **type combinations** beyond just object structures.

### **Examples :**

#### 1. **Simple Type Alias**

```ts
type User = {
  name: string;
  age: number;
};

let person: User = { name: "Alice", age: 30 };
```

This alias defines an object type with two properties: `name` and `age`.

---

#### 2. **Using Intersection (&)**  

Intersection types combine multiple types into one, ensuring all properties from both types are present.

```ts
type Address = {
  street: string;
  city: string;
};

type Employee = {
  name: string;
  position: string;
};

type EmployeeWithAddress = Employee & Address;

let emp: EmployeeWithAddress = {
  name: "John",
  position: "Developer",
  street: "123 Main St",
  city: "New York",
};
```

Here, `EmployeeWithAddress` combines the properties of both `Employee` and `Address`.

---

#### 3. **Union (|) Example**  

Union types allow a value to be one of several specified types.

```ts
type ID = string | number;

let userId: ID = 101; // Valid
userId = "abc123"; // Also valid
```

In this case, `ID` can be either a string or a number.

---

## ⚡️ **Interface**  
An **Interface** is used to define the structure of **objects** or **classes**. It ensures that the objects or instances adhere to a specified shape.

### 📝 **When to Use Interfaces?**  
- For **defining object shapes** or **class structures**.
- When you need to **extend** from other interfaces.

### **Examples:**

#### 1. **Simple Interface**

```ts
interface User {
  name: string;
  age: number;
}

let person: User = {
  name: "Alice",
  age: 30,
};
```

**This interface ensures that the `person` object conforms to the `User` structure.**  


---

#### 2. **Extending Interfaces**  

You can extend one interface from another to reuse properties.

```ts
interface Address {
  street: string;
  city: string;
}

interface Employee extends Address {
  name: string;
  position: string;
}

let emp: Employee = {
  name: "John",
  position: "Developer",
  street: "123 Main St",
  city: "New York",
};
```

In this example, `Employee` inherits all properties from `Address`.

---

#### 3. **Class Implementation with Interface**

```ts
interface Person {
  name: string;
  greet(): void;
}

class Student implements Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const student = new Student("Alice");
student.greet(); // Output: Hello, my name is Alice
```

This example shows how a class implements an interface.

---

### 🚀 **Key Differences between Type and Interface**

| **Feature**                  | **Type Alias**                     | **Interface**                    |
|------------------------------|-------------------------------------|----------------------------------|
| **Primitive Types Support**  | Yes (`type ID = string \| number`) | No                               |
| **Object and Class Usage**   | Yes                                | Yes                              |
| **Extension**                | Using Intersection (`&`)           | Using `extends`                  |
| **Union Support**            | Yes (`type A = B \| C`)            | No                               |
| **Merging**                  | Not supported                      | Can be merged across declarations |
| **Best Use Case**            | Complex combinations, unions, primitives | Object shapes, class definitions |


---

## 💡 **Conclusion**

Both **Types** and **Interfaces** help define the structure of data in TypeScript, ensuring that your code is more robust and maintainable. Use **Types** for **complex data structures** (like unions and intersections) and **Interfaces** when working with **objects or classes**.

---



Happy coding with **TypeScript**! 🎉