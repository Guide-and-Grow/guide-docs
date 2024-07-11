---
title: Regular Expressions in JS
description: Discussion about Regular Expressions in Javascript
---

- A regular expression is a sequence of characters that defines a search pattern. It can be used for `string searching` and `manipulation`. JavaScript provides the **RegExp** object for handling regular expressions.


### Basic Syntax

* **Literal Notation:** 

```js 
/pattern/flags
```

* **Constructor Notation:** 

```js
new RegExp('pattern', 'flags')
```

### Flags

* `g` : Global search.
* `i` : Case-insensitive search.
* `m` : Multi-line search.
* `u` : Unicode; treat a pattern as a sequence of Unicode code points.
* `y` : Sticky; matches only from the last index.

**Examples** :

#### Basic Searching

```js
const str = "Hello, World!";
const regex = /Hello/;
console.log(regex.test(str));  // true
```

#### Global and Case-Insensitive Search

```js
const str = "Hello, hello, HELLO!";
const regex = /hello/gi;
const matches = str.match(regex);
console.log(matches);  // ["Hello", "hello", "HELLO"]
```

#### Special Characters

`.` : Any character except newline.

`\d` : Digit (0-9).

`\w` : Word character (alphanumeric + underscore).

`\s` : Whitespace character.

`\b` : Word boundary.

`^` : Start of string.

`$` : End of string.

`+` : One or more.

`*` : Zero or more.

`?` : Zero or one.

`{n}` : Exactly n occurrences.

`{n,}` : n or more occurrences.

`{n,m}` : Between n and m occurrences.

```js
const str = "The quick brown fox jumps over 12 lazy dogs.";
const regex = /\b\w{4}\b/g;  // Words with exactly 4 letters
const matches = str.match(regex);
console.log(matches);  // ["quick", "jumps", "over", "lazy"]
```

#### Replacing Substrings

```js
const str = "I love JavaScript. JavaScript is awesome!";
const regex = /JavaScript/g;
const newStr = str.replace(regex, "JS");
console.log(newStr);  // "I love JS. JS is awesome!"
```

#### Extracting Groups 

```js
const str = "My email is example@example.com.";
const regex = /(\w+)@(\w+)\.(\w+)/;
const matches = str.match(regex);
console.log(matches);  
// ["example@example.com", "example", "example", "com"]
// Entire match and groups
```

#### Using the `RegExp` Constructor

```js
const str = "Hello, World!";
const regex = new RegExp("hello", "i");
console.log(regex.test(str));  // true
```

#### Validating Input

```js
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log(validateEmail("example@example.com"));  // true
console.log(validateEmail("invalid-email"));        // false
```



Regular expressions are powerful tools for text processing. JavaScript's RegExp object provides the flexibility to work with regular expressions in both literal and constructor notations, and with various flags to control the search behavior.
