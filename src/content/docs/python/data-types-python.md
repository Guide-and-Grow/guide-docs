---
title: Data Types in Python
description: Data types are the classification or categorization of data items. The data items grouped into several categories known as data types. Each data type is unique which helps to understand the data better.
---

Data types are the classification or categorization of data items. The data items are grouped into several categories known as data types. Each data type is unique, helping to better understand the data.

## Python Data Types Overview

Python has several built-in data types that help us work with different kinds of data. Below are the main categories:

### 1. Numeric Types

#### Integer (`int`)
- Whole numbers without decimal points.
- **Examples**: `-5`, `0`, `100`

#### Float (`float`)
- Numbers that contain decimal points or are written in scientific notation.
- **Examples**: `3.14`, `0.5`, `-2.7`

#### Complex (`complex`)
- Numbers with a real and imaginary part.
- **Examples**: `3 + 4j`, `1 - 2j`

### 2. Text Type

#### String (`str`)
- A sequence of characters enclosed within single, double, or triple quotes.
- **Examples**: `'Hello'`, `"Python"`, `'''Multi-line string'''`

### 3. Sequence Types

#### List (`list`)
- A collection of items ordered by position, and they can be of different data types.
- Lists are mutable, meaning you can change, add, or remove items.
- **Examples**: `[1, 2, 3]`, `['apple', 'banana', 'cherry']`

#### Tuple (`tuple`)
- Similar to lists, but they are immutable, meaning you cannot change them after creation.
- **Examples**: `(1, 2, 3)`, `('apple', 'banana', 'cherry')`

#### Range (`range`)
- Represents a sequence of numbers, commonly used in loops.
- **Examples**: `range(5)`, `range(1, 10, 2)` (creates numbers from 1 to 9 with a step of 2)

### 4. Mapping Type

#### Dictionary (`dict`)
- A collection of key-value pairs, where each key is unique.
- **Examples**: `{'name': 'John', 'age': 25}`, `{1: 'one', 2: 'two'}`

### 5. Set Types

#### Set (`set`)
- A collection of unique items, unordered, with no duplicates.
- **Examples**: `{1, 2, 3}`, `{'apple', 'banana', 'cherry'}`

#### Frozen Set (`frozenset`)
- Similar to a set, but immutable.
- **Examples**: `frozenset([1, 2, 3])`, `frozenset({'apple', 'banana'})`

### 6. Boolean Type

#### Boolean (`bool`)
- Represents one of two values: `True` or `False`.
- **Examples**: `True`, `False`

### 7. Binary Types

#### Bytes (`bytes`)
- Immutable sequences of bytes, often used for handling binary data.
- **Examples**: `b'hello'`, `bytes([65, 66, 67])`

#### Bytearray (`bytearray`)
- A mutable sequence of bytes, used when you need to change data after it has been created.
- **Examples**: `bytearray([65, 66, 67])`

#### Memoryview (`memoryview`)
- A memory view object allows access to the internal data of an object without copying it.
- **Examples**: `memoryview(b'hello')`

## Conclusion

Understanding data types is essential for programming in Python, as they determine what kind of data you're working with and what operations you can perform on it. By recognizing and using the correct data type, you can write more efficient and error-free code.

