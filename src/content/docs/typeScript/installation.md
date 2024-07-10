---
title: Installation of TypeScript
description: Discussion about TypeScript
---
TypeScript requires Node.js and npm (Node Package Manager). If you don't have them installed, follow these steps:

## Step 1: Install Node.js and npm


### 1. Download Node.js:
- Visit the [Node.js website](https://nodejs.org/).
- Download the LTS (Long Term Support) version for your operating system.

### 2. Install Node.js:
- Run the installer and follow the on-screen instructions.
- To verify the installation, open your terminal (or command prompt) and type:
  ```sh
  node -v
  npm -v


## Step 2: Install TypeScript
Once Node.js and npm are installed, you can install TypeScript globally using npm.

### 1. Open your terminal (or command prompt).
### 2. Run the following command:
  ```sh
  npm install -g typescript
  ```
  - The `-g` flag installs TypeScript globally, making it available from any directory.

### 3. Verify the installation:
- Type the following command in your terminal:
  ```sh
  tsc -v
  ```
- You should see the version number of TypeScript.
