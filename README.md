# Environment Reader
A simple environment reader using fs

## Get started
First copy the file __environment-reader.js__ to your code. Now you're ready to use this package.

## Introduction
### Require the package
```js
const env = require('./environment-reader.js');
```

### Get the whole content from a file
```js
env.get('./text.txt')
```

### Get a specific line from a file
```js
env.get('./text.txt', 0)
```

## Replit
Yes, you can add environment variables to your file. Only add this to your file:
```
process.env.test
```

## 
