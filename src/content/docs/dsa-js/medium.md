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

    while (index < array.length) { // Loop until we reach the end of the array
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
[[1, 2], [3, 4], [5]]
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