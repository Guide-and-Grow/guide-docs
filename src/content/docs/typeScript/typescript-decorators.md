---
title: "Decorators in TypeScript"
description: Decorators are special functions that allow you to modify classes, methods, properties, or parameters. They help add extra functionality in a clean and reusable way, often used in frameworks like Angular.
---

Decorators are special functions that allow you to modify classes, methods, properties, or parameters. They help add extra functionality in a clean and reusable way, often used in frameworks like Angular.

---

## Enabling Decorators

First, you need to enable decorators in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

---

## Types of Decorators

### 1. **Class Decorator**

Used to modify or enhance a class.

```typescript
function Logger(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@Logger
class Person {
  constructor(public name: string) {}
}
```

When the class is created, the decorator logs the class name.

---

### 2. **Method Decorator**

Used to modify a method's behavior.

```typescript
function MeasureTime(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.time(key);
    const result = original.apply(this, args);
    console.timeEnd(key);
    return result;
  };
}

class MathOperations {
  @MeasureTime
  add(a: number, b: number): number {
    return a + b;
  }
}

const math = new MathOperations();
math.add(2, 3); // Logs the time taken for the 'add' method.
```

---

### 3. **Property Decorator**

Used to observe or modify a property.

```typescript
function ReadOnly(target: any, key: string) {
  Object.defineProperty(target, key, {
    writable: false,
  });
}

class Car {
  @ReadOnly
  brand = "Toyota";
}

const car = new Car();
car.brand = "Honda"; // Error: Cannot assign to read-only property.
```

---

### 4. **Parameter Decorator**

Used to inspect or modify parameters.

```typescript
function LogParam(target: any, key: string, index: number) {
  console.log(`Parameter ${index} in ${key} was decorated.`);
}

class User {
  greet(@LogParam message: string) {
    console.log(message);
  }
}

new User().greet("Hello"); // Logs: "Parameter 0 in greet was decorated."
```

---

### Key Points :

- Decorators can modify classes, methods, properties, and parameters.
- They are useful for logging, access control, and more.
- Decorators don’t change the logic but wrap it with extra functionality.

---

### 💡 **Conclusion**

Decorators make code cleaner by separating concerns. Use them to enhance logic without cluttering core code.

Happy coding with **TypeScript**! 🎉

## <img src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa29jOWlveTc3MTFrNTYxOW13eXNuMDIyZ2ZuMG8yZHludnJweGx2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif'  width="100px"/>
---