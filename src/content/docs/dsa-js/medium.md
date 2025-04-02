---
title: JavaScript Medium Questions
description: Medium-Level JavaScript DSA Questions
---

# 1. MaxProfit

## Problem Statement

Imagine you are buying and selling stocks throughout the year. Your task is to find the maximum profit you can make by buying at a low price and selling at a high price **only once**.

### Example

#### Given:

A list of stock prices for each day:

```javascript
[7, 1, 5, 3, 6, 4];
```

#### Goal:

Find the difference between the lowest price at which you could have bought the stock and the highest price at which you could have sold it later.

### Solution

```javascript
const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    minPrice = Math.min(minPrice, currentPrice);
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Max Profit:", profit); // Output: 5
```

### Explanation

1. Start with the first price as the **minimum price**.
2. Iterate through the list, updating the **minimum price** whenever a lower price is found.
3. Calculate the potential profit by subtracting the **minimum price** from the current price.
4. Update the **maximum profit** if the potential profit is greater than the current max.
5. Return the **maximum profit** found.

### Time Complexity

- **O(n)** → We iterate through the array once.

### Space Complexity

- **O(1)** → Only a few extra variables are used.

This approach ensures that we find the best profit possible in an optimal way. 🚀

# 2. Array Chunk

## Problem Statement

Write a function that takes an array and chunk size as input. The function should return a new array where the original array is split into sub-arrays of the specified size.

### Example

#### Given:

An array and a chunk size:

```javascript
chunk([1, 2, 3, 4, 5], 2); // Should return [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // Should return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

### Steps

1. create an empty array to hold the chunks
2. Set a starting index to keep track of where we are in the original array
3. Loop through the original array as long as the index has not reached the end of the array
4. Extract a chunk of the desired size from the original array
5. Add the extracted chunk to the `chunked` array
6. Move the index forward by the chunk size to get to the next chunk

The `chunk` function takes an array and a chunk size as input and splits the array into smaller arrays (chunks) of the given size. Let's break it down step by step:

### **Code Explanation**

```js
function chunk(array, size) {
  const chunked = []; // Initialize an empty array to store the chunks
  let index = 0; // Start index for slicing

  while (index < array.length) {
    // Loop until we reach the end of the array
    const chunk = array.slice(index, index + size); // Extract a chunk of the specified size
    chunked.push(chunk); // Add the chunk to the result array
    index += size; // Move the index forward by the chunk size
  }

  return chunked; // Return the array of chunks
}
```

---

### **Example Execution**

```js
console.log(chunk([1, 2, 3, 4, 5], 2));
```

#### **Step-by-step execution:**

- **Input:** `[1, 2, 3, 4, 5]`, `size = 2`
- **Iteration 1:**

  - `index = 0`
  - `chunk = array.slice(0, 2) → [1, 2]`
  - `chunked = [[1, 2]]`
  - `index += 2 → index = 2`

- **Iteration 2:**

  - `index = 2`
  - `chunk = array.slice(2, 4) → [3, 4]`
  - `chunked = [[1, 2], [3, 4]]`
  - `index += 2 → index = 4`

- **Iteration 3:**

  - `index = 4`
  - `chunk = array.slice(4, 6) → [5]`
  - `chunked = [[1, 2], [3, 4], [5]]`
  - `index += 2 → index = 6 (loop stops)`

- **Final Output:**

```js
[[1, 2], [3, 4], [5]];
```

---

👉 **Example Outputs:**

```js
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // [[1, 2, 3, 4], [5]]
```

### Time Complexity

- **O(n)** → We process each element in the array once.

### Space Complexity

- **O(n)** → We create a new array containing all the elements from the original array.

This approach is clean and efficient for dividing an array into chunks of a specified size. 🧩

### **Summary**

This function splits an array into smaller chunks of the specified size. If there are leftover elements that don't fit exactly into a chunk of the given size, they form a smaller chunk at the end.

# 3. Two Sum Problem

## Problem Statement

The **Two Sum** problem requires finding two numbers in a given list that add up to a specified target number. Additionally, you need to return the indices of these two numbers.

## Example

```javascript
// Given input
const nums = [2, 7, 11, 15];
const target = 9;

// Expected Output
// The numbers 2 and 7 add up to 9, and their indices are [0, 1]
```

## Solution Approach

We can solve this problem using a **brute-force approach** by checking all possible pairs of numbers. This method runs in **O(n²) time complexity**.

## Implementation

```javascript
function twoSum(nums, target) {
  // Loop through the list
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of two numbers equals the target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // Return empty array if no solution found
}

// Example usage
const result = twoSum([2, 7, 11, 15], 9);
console.log(result); // Output: [0, 1]
```

## Optimized Approach

Instead of using nested loops, we can use a **hash map (object in JavaScript)** to store numbers and their indices while iterating through the array. This approach runs in **O(n) time complexity**.

### Explanation

1. **Initialize a Hash Map:**

   - We create an empty object `map` to store numbers as keys and their indices as values.

2. **Iterate Through the Array:**

   - For each number `nums[i]`, calculate its **complement**, which is `target - nums[i]`.
   - Check if this **complement** already exists in `map`.

3. **Check for Solution:**

   - If the **complement** exists in `map`, it means we have found two numbers that add up to the target.
   - Return their indices `[map[complement], i]`.

4. **Store the Current Number:**
   - If the complement does not exist, store `nums[i]` in `map` with its index `i`.
   - This ensures that future iterations can find the required pair.

### Code Implementation

```javascript
function twoSumOptimized(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

// Example usage
const optimizedResult = twoSumOptimized([2, 7, 11, 15], 9);
console.log(optimizedResult); // Output: [0, 1]
```

## Complexity Analysis

| Approach        | Time Complexity | Space Complexity |
| --------------- | --------------- | ---------------- |
| Brute Force     | O(n²)           | O(1)             |
| Hash Map Method | O(n)            | O(n)             |

## Usage Instructions

1. Copy and paste the function into your JavaScript project.
2. Call `twoSum(nums, target)` with an array of numbers and a target value.
3. The function will return an array containing the indices of the two numbers that add up to the target.
4. Use `console.log()` to see the result.

## Conclusion

The **Two Sum** problem is a common algorithmic challenge. The brute-force approach works but is slow for large lists. Using a hash map significantly improves efficiency.
Happy coding! 🚀
