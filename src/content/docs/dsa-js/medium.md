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
[7, 1, 5, 3, 6, 4]
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

