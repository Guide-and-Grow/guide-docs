---
title: What is Datatypes
description: discussion about Datatypes
---

# Datatype

A **datatype** is a classification that specifies the type of value a variable can hold in programming. It defines the kind of data that can be stored and manipulated within a program, such as numbers, strings, or objects.

**There are 2 types of datatypes -**

### Primitive Data-Types

Primitive data types are the *most basic* types of data that JavaScript supports. 

1. **String :**

* Represents textual data.
* Enclosed in **single quotes** (' '), **double quotes** (" "), or **backticks** (`) for template literals.

* **Example :**

```js
let name = 'Yogita';
let greeting = "Hello, world!";
let message = `Welcome, ${name}!`;
```

2. **Number :**

* Represents numeric values.
* Includes _integers_ and _floating-point_ numbers.

* **Example:**

```js
let age = 25;
let price = 19.99;
```

3. **Boolean :**

* Represents a logical entity and can have two values: **true** and **false**.

* **Example:**

```js
let isActive = true;
let isCompleted = false;
```

4. **Undefined**

* A variable that has been declared but *not assigned* a value.

**Example :**

```js
let notDefined;
console.log(notDefined); // undefined
```

5. **Null :**

* Represents the intentional absence of any object value.

**Example :**

```js
let emptyValue = null;
```

6. **Symbol :**

* Introduced in ES6, represents a *unique* and *immutable* identifier.

**Example :**

```js
let symbol1 = Symbol('description');
let symbol2 = Symbol('description');
console.log(symbol1 === symbol2); // false
```

7. **BigInt :**

* Introduced in ES2020, represents whole numbers larger than the Number type can safely represent.

**Example :**

```js
let bigNumber = BigInt(1234567890123456789012345678901234567890n);
```

### Non-Primitive Data-Types

Non-primitive data types, also known as reference types, include:

1. **Object :**

* Used to store collections of data and more complex entities.

* **Example :**

```js
let person = {
  name: 'John',
  age: 30,
  isActive: true
};
```

2. **Array :**

* A special type of object used to store ordered collections.

* **Example :**

```js
let numbers = [1, 2, 3, 4, 5];
```

3. **Function :**

* Functions are a special type of object callable with arguments.

* **Example :**

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

4. **Date :**

* A built-in object for handling dates and times.

* **Example :**

```js
let today = new Date();
```

5. **RegExp :**

* Regular expressions, used for pattern matching within strings.

* **Example:**

```js
let regex = /hello/i;
```

6. **Map and Set :**

* **Map:** An object that holds key-value pairs and remembers the original insertion order of the keys.

* **Example :**

```js
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
```

* **Set :** An object that lets you store unique values of any type, whether primitive values or object references.

* **Example :**
```js
let set = new Set([1, 2, 3, 4, 5]);
```





**Happy Coding Guys!!**
