---
title: Mutable and Immutable Types in Python
description: n Python, understanding the difference between mutable and immutable data types is crucial for efficient and effective programming. This guide will walk you through the concept, implications, and examples of both mutable and immutable objects in Python.n
---



## Introduction

In Python, understanding the difference between mutable and immutable data types is crucial for efficient and effective programming. This guide will walk you through the concept, implications, and examples of both mutable and immutable objects in Python.

## Table of Contents

1. [What are Mutable and Immutable Objects?](#what-are-mutable-and-immutable-objects)
2. [Why Does It Matter?](#why-does-it-matter)
3. [Immutable Data Types](#immutable-data-types)
   - [Integers](#integers)
   - [Floats](#floats)
   - [Strings](#strings)
   - [Tuples](#tuples)
4. [Mutable Data Types](#mutable-data-types)
   - [Lists](#lists)
   - [Dictionaries](#dictionaries)
   - [Sets](#sets)
5. [Examples and Code Snippets](#examples-and-code-snippets)
6. [Common Pitfalls and Best Practices](#common-pitfalls-and-best-practices)
7. [Conclusion](#conclusion)

## What are Mutable and Immutable Objects?

In Python, every variable holds a reference to an object. These objects can either be **mutable** or **immutable**:

- **Mutable objects** can be changed after they are created.
- **Immutable objects** cannot be changed once they are created.

## Why Does It Matter?

Understanding mutability is important because it affects how variables behave when you manipulate them. When you modify a mutable object, the changes are reflected across all references to that object. On the other hand, modifying an immutable object results in the creation of a new object.

## Immutable Data Types

Immutable data types cannot be modified after their creation. Any operation that tries to modify an immutable object will result in the creation of a new object.

### Integers

Integers are immutable. When you perform an operation on an integer, a new integer is created.

```python
x = 10
y = x
x += 5  # x is now 15, y remains 10
```

### Floats

Floats are also immutable. Similar to integers, operations on floats result in new floats.

```python

a = 3.14
b = a
a += 1.0  # a is now 4.14, b remains 3.14

```

### Strings

Strings are immutable. When you try to modify a string, Python creates a new string.

```python

str1 = "hello"
str2 = str1
str1 += " world"  # str1 is now "hello world", str2 remains "hello"

```

### Tuples

Tuples are immutable. When you try to modify a tuple, Python raises an error.

```python
ba = bytearray([1, 2, 3])
ba[0] = 100  # ba is now bytearray(b'd\x02\x03')

```

# Mutable Data Types

Mutable data types can be modified after their creation. Operations that modify mutable objects change the object itself without creating a new one.

### Lists

Lists are mutable. You can modify a list by adding or removing elements.

```python
list1 = [1, 2, 3]
list2 = list1
list1.append(4)  # list1 and list2 both become [1, 2, 3, 4]
```

### Dictionaries

Dictionaries are mutable. You can modify a dictionary by adding or removing key-value pairs.

```py
dict1 = {"a": 1, "b": 2}
dict2 = dict1
dict1["c"] = 3  # dict1 and dict2 both become {"a": 1, "b": 2, "c": 3}

```

### Sets

Sets are mutable. You can modify a set by adding or removing elements.

```py
set1 = {1, 2, 3}
set2 = set1
set1.add(4)  # set1 and set2 both become {1, 2, 3, 4}


```

#Examples and Code Snippets

### Example 1: Immutable vs Mutable

```py
# Immutable example
a = 5
b = a
a = 10
print(a)  # Output: 10
print(b)  # Output: 5

# Mutable example
list1 = [1, 2, 3]
list2 = list1
list1.append(4)
print(list1)  # Output: [1, 2, 3, 4]
print(list2)  # Output: [1, 2, 3, 4]

```

### Example 2: Shared References

```py
# Immutable
x = "hello"
y = x
x += " world"
print(x)  # Output: "hello world"
print(y)  # Output: "hello"

# Mutable
list1 = [1, 2, 3]
list2 = list1
list1[0] = 0
print(list1)  # Output: [0, 2, 3]
print(list2)  # Output: [0, 2, 3]

```

# Common Pitfalls and Best Practices

- **Beware of Shared References:**:When working with mutable objects, be careful with shared references as changes to one reference will affect all others.
- **Use Immutable Types for Constants**: a value should not change, prefer immutable types like tuples over lists.
- **Avoid Mutable Default Arguments**: In functions, avoid using mutable objects as default arguments.

```py
def func(a, my_list=[]):
    my_list.append(a)
    return my_list

print(func(1))  # Output: [1]
print(func(2))  # Output: [1, 2], not [2]
```

**Solution:**

```py
def func(a, my_list=None):
    if my_list is None:
        my_list = []
    my_list.append(a)
    return my_list
```

# Further Reading and References

- [Python Official Documentation: Built-in Types](https://docs.python.org/3/library/stdtypes.html)

# Conclusion

Understanding the differences between mutable and immutable types in Python is essential for writing efficient and bug-free code. This guide covered the basics, provided examples, and highlighted common pitfalls. By being mindful of mutability, you can better manage memory, avoid unexpected behavior, and write more predictable programs.

Happy coding!
