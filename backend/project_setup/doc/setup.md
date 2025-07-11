# Nodejs Project Setup

## nodejs + ts + eslint

- npm init -y

> [!NOTE] eslint w/ ts support

- npm install --save-dev typescript eslint @types/node @typescript-eslint/parser @typescript-eslint/eslint-plugin

> [!NOTE] configure typescript

- npx tsc --init
- npx eslint --init

```typescript
function greet(name: string): string {
  return `hello, ${name}`;
}
console.log(greet("Typescript"));
```

> [!NOTE] compile and run

- npx tsc
- node dist/index.js

> [!NOTE]ts-node to run ts files directly w/o a separate compilation step

- npm install --save-dev ts-node
- npx ts-node index.ts

> [!NOTE] package.json

```json
{
  "name": "my-ts-project",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.x.x", // Replace with your installed version
    "ts-node": "^10.x.x", // Replace with your installed version
    "typescript": "^5.x.x" // Replace with your installed version
  }
}
```
