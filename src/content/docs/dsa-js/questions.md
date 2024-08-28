---
title: JavaScript Questions
description: A beginner-friendly JavaScript Dsa Questions
---

# 1. Palindrome Checker

Given an integer x, return true if x is a
palindrome, and false otherwise.

- Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

- Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

- Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

## Function Definition

```javascript
/**
 * Function to check if a number is a palindrome.
 * @param {number} x - The integer to check.
 * @returns {boolean} - Returns true if the integer is a palindrome, otherwise false.
 */
const isPalindrome = function (x) {
  return x === +x.toString().split("").reverse().join("");
};

// Example Usage
const res = isPalindrome(10);
console.log(res); // Output: false
```
