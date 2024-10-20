---
title: "TypeScript Optional Properties"
description: "n TypeScript, optional properties are fields in an object that you can include or leave out. If a property is optional, you can create objects without that property."
---

## What Are Optional Properties?

In TypeScript, optional properties are fields in an object that you can include or leave out. If a property is optional, you can create objects without that property.

## How to Define Optional Properties

To make a property optional, add a `?` after the property name in your type definition.

### Example :

```typescript
type Address = {
  street: string; // Required
  city?: string; // Optional
  postalCode?: string; // Optional
};

// Full address with all properties
let fullAddress: Address = {
  street: "123 Main St",
  city: "New York",
  postalCode: "10001",
};

// Partial address without optional properties
let partialAddress: Address = {
  street: "456 Park Ave",
};

// Logging the addresses
console.log(fullAddress); // { street: '123 Main St', city: 'New York', postalCode: '10001' }
console.log(partialAddress); // { street: '456 Park Ave' }
```

### Key Points :

- **Required vs. Optional**: In the `Address` type, `street` is required, while `city` and `postalCode` are optional.
- **Flexibility**: You can create objects with just the required properties or include any combination of optional ones.

## 💡 Conclusion

Using optional properties makes your TypeScript code more flexible and adaptable. This way, you can handle different data scenarios easily.

Happy coding with **TypeScript**! 🎉

---
