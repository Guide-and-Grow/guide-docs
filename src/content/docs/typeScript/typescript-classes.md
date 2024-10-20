---
title: Classes in TypeScript
description: Welcome! In this guide, we’ll learn how to use classes in TypeScript. Classes help you create objects with similar properties and functions. Let’s get started!
---

Welcome! In this guide, we’ll learn how to use classes in TypeScript. Classes help you create objects with similar properties and functions. Let’s get started!


## What Are Classes?

Classes are like blueprints for creating objects. They group together data (like a person's name or age) and actions (like saying hello). Using classes makes your code neat and easier to understand.

## How to Create a Class

To create a class, you use the `class` keyword followed by the name of your class. Here’s a simple example:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const person = new Person("Saurabh", 18);
console.log(person.greet()); // Output: Hello, my name is Saurabh and I'm 18 years old.
```

### What’s Happening Here?

- **Properties**: These are like variables inside the class (e.g., `name` and `age`).
- **Constructor**: This is a special function that runs when you create a new object. It sets up the properties.
- **Methods**: These are functions that belong to the class (e.g., `greet()`).

## Inheritance

Inheritance lets one class use properties and methods from another class. This saves you time and helps avoid repeating code.

```typescript
class Employee extends Person {
  position: string;

  constructor(name: string, age: number, position: string) {
    super(name, age); // Calls the constructor of the Person class
    this.position = position;
  }

  describe(): string {
    return `I work as a ${this.position}.`;
  }
}

const employee = new Employee("Yogita", 28, "Developer");
console.log(employee.greet()); // Output: Hello, my name is Yogita and I'm 28 years old.
console.log(employee.describe()); // Output: I work as a Developer.
```

## Access Modifiers

Access modifiers help control who can see or change certain parts of your class.

- **public**: Everyone can access it (default).
- **private**: Only the class can access it.
- **protected**: Only the class and its children can access it.

```typescript
class Car {
  public brand: string;
  private model: string;
  protected year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public getModel(): string {
    return this.model; // Allows access to the private model
  }
}

const car = new Car("Toyota", "Camry", 2020);
console.log(car.brand); // Output: Toyota
// console.log(car.model); // Error: Property 'model' is private
console.log(car.getModel()); // Output: Camry
```

## Readonly Properties

The `readonly` modifier allows you to create properties that can only be set once, either at the time of declaration or within the constructor. This ensures that these properties cannot be modified later, promoting immutability.

```typescript
class Book {
  readonly title: string;
  readonly author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const book = new Book("1984", "George Orwell");
console.log(book.title); // Output: 1984
// book.title = "Animal Farm"; // Error: Cannot assign to 'title' because it is a read-only property
```

## Getters and Setters

Getters and setters let you control how properties are accessed and updated. They help keep your data safe.

```typescript
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    return this._radius; // Gets the radius
  }

  set radius(value: number) {
    if (value > 0) {
      this._radius = value; // Sets a new radius if it's positive
    }
  }
}

const circle = new Circle(5);
console.log(circle.radius); // Output: 5
circle.radius = 10;
console.log(circle.radius); // Output: 10
```

### Key Points :

- **Organization**: Classes help you keep your code organized.
- **Reuse**: Inheritance allows you to use code from other classes.
- **Control**: Access modifiers help you manage who can see or change your data.
- **Immutability**: `readonly` properties ensure certain data remains unchanged after initialization.

### 💡 **Conclusion**

Classes are a great way to organize your code in TypeScript. They let you build complex objects while keeping everything clear and manageable.

Happy coding with TypeScript! 🎉

---
