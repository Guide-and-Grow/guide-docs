---
title: Python Operators and Literal Operators
description: Operators are essential tools in Python that allow you to perform operations on variables and values. This guide explains the different types of operators, including literal operators, with examples to make things clearer.
---



## Introduction  
In Python, operators are symbols that perform operations on variables and values. They can handle arithmetic, comparisons, and even logical operations.  

Literal operators, on the other hand, help define fixed values directly in the code.  

---

## Types of Operators  

### 1. Arithmetic Operators  
Used for basic math operations.  

```python
a = 10
b = 3

print(a + b)  # Addition: 13
print(a - b)  # Subtraction: 7
print(a * b)  # Multiplication: 30
print(a / b)  # Division: 3.3333
print(a // b)  # Floor Division: 3
print(a % b)  # Modulus: 1
print(a ** b)  # Exponentiation: 1000
```  

---

### 2. Comparison Operators  
Used to compare two values and return `True` or `False`.  

```python
x = 5
y = 10

print(x > y)   # False
print(x < y)   # True
print(x == y)  # False
print(x != y)  # True
print(x >= 5)  # True
print(y <= 5)  # False
```  

---

### 3. Logical Operators  
Combine multiple conditions.  

```python
x = True
y = False

print(x and y)  # False
print(x or y)   # True
print(not x)    # False
```  

---

### 4. Assignment Operators  
Used to assign and update variable values.  

```python
x = 10

x += 5  # x = x + 5 (x becomes 15)
x -= 2  # x = x - 2 (x becomes 13)
x *= 3  # x = x * 3 (x becomes 39)
x /= 3  # x = x / 3 (x becomes 13.0)
x %= 4  # x = x % 4 (x becomes 1)
```  

---

### 5. Bitwise Operators  
Operate on binary representations of numbers.  

```python
a = 5  # 0101
b = 3  # 0011

print(a & b)  # AND: 0001 (1)
print(a | b)  # OR: 0111 (7)
print(a ^ b)  # XOR: 0110 (6)
print(~a)     # NOT: 1010 (-6)
print(a << 1) # Left Shift: 1010 (10)
print(b >> 1) # Right Shift: 0001 (1)
```  

---

### 6. Membership Operators  
Check if a value exists in a sequence.  

```python
list1 = [1, 2, 3, 4]

print(2 in list1)   # True
print(5 not in list1)  # True
```  

---

### 7. Identity Operators  
Compare memory locations of two objects.  

```python
x = [1, 2, 3]
y = x
z = [1, 2, 3]

print(x is y)  # True (same object)
print(x is z)  # False (different objects)
print(x == z)  # True (same values)
```  

---

## Literal Operators  

Literal operators help create literal values directly in code.  

### 1. String Literals  
```python
name = "John"  # String literal
greeting = 'Hello, World!'
```  

### 2. Numeric Literals  
```python
num = 42  # Integer literal
pi = 3.14  # Float literal
```  

### 3. Boolean Literals  
```python
is_active = True
is_deleted = False
```  

### 4. List, Tuple, and Dictionary Literals  
```python
my_list = [1, 2, 3]  # List literal
my_tuple = (1, 2, 3)  # Tuple literal
my_dict = {"name": "Alice", "age": 25}  # Dictionary literal
```  

### 5. None Literal  
Represents the absence of a value.  
```python
x = None
```  

---

## Operator Precedence  
Python follows specific rules to decide the order of operations.  

**Order (Highest to Lowest):**  
1. `**` (Exponentiation)  
2. `*, /, //, %` (Multiplication, Division, Modulus)  
3. `+, -` (Addition, Subtraction)  
4. `==, !=, >, <, >=, <=` (Comparison)  
5. `not`  
6. `and`  
7. `or`  

```python
result = 5 + 2 * 3 ** 2  # 5 + 2 * 9 -> 5 + 18 -> 23
```  

---

## Conclusion  
Operators are vital in Python programming for performing calculations, comparisons, and more. By mastering operators and literal operators, you'll be able to write more efficient and cleaner code.  

Happy coding!