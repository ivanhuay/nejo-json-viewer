# Nejo JSON Viewer

Nejo is a React component that renders JSON objects in a pretty and customizable way, perfect for enhancing your application's data visualization.

[![npm version](https://badge.fury.io/js/nejo-json-viewer.svg)](https://badge.fury.io/js/nejo-json-viewer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 Easy to use
- 🎨 Customizable styles
- 🔧 Flexible configuration
- 📦 Lightweight

## Installation

Install Nejo JSON Viewer using npm:

```bash
npm install nejo-json-viewer
```

Or using yarn:

```bash
yarn add nejo-json-viewer
```

## Usage

Here's a basic example of how to use Nejo JSON Viewer in your React project:

```javascript
import React from 'react';
import Nejo from 'nejo-json-viewer';

const MyComponent = () => {
  const data = {
    first_name: "Ivan",
    last_name: "Huay",
    age: 32,
    status: "Open to work"
  };

  return <Nejo jsonData={data} />;
};

export default MyComponent;
```

### Custom Styles

You can easily customize the appearance of Nejo JSON Viewer by passing a `className` prop with custom CSS variables:

```scss
// custom-styles.scss
.custom {
  --main-spacing: 20px;
  --1x: 10px;
  --key-color: rgb(192, 113, 40);
  --text-color: rgb(2, 26, 21);
  --type-text-color: rgb(156, 37, 45);
  --type-number-color: rgb(168, 59, 134);
  --type-date-color: #c50808;
  --font-family: Arial, sans-serif;
  --font-size: 16px;
}
```

Then, in your React component:

```javascript
import React from 'react';
import Nejo from 'nejo-json-viewer';

const MyComponent = () => {
  const data = { /* ... */ };

  return <Nejo jsonData={data} className={styles.custom} />;
};
```

## API Reference

| Prop | Type | Description |
|------|------|-------------|
| `jsonData` | Object | The JSON object to be rendered (required) |
| `className` | String | Custom CSS class name for styling |

## Demo

Check out the live Storybook demo to see Nejo JSON Viewer in action:

[Storybook Demo](https://ivanhuay.github.io/nejo-json-viewer/)

## Using with Next.js

To use this module in a Next.js application, you need to configure Next.js to properly transpile the package. Follow these steps:

1. Install the package:
   ```
   npm install --save nejo-json-viewer
   ```

2. Create or update your `next.config.js` file in the root of your Next.js project with the following configuration:

   ```javascript
   const path = require('path');

   module.exports = {
     webpack: (config, { defaultLoaders }) => {
       config.module.rules.push({
         test: /\.jsx?$/,
         include: [path.resolve(__dirname, 'node_modules/nejo-json-viewer')],
         use: [defaultLoaders.babel],
       });

       return config;
     },
     transpilePackages: ['nejo-json-viewer'],
   };
   ```

   This configuration does two things:
   - It tells webpack to use Babel to transpile the `nejo-json-viewer` package.
   - It adds `nejo-json-viewer` to the list of packages that Next.js should transpile.

3. You can now import and use the component in your Next.js pages or components:

   ```jsx
   import NejoJsonViewer from 'nejo-json-viewer';

   export default function MyPage() {
     const data = { key: "value", nested: { array: [1, 2, 3] } };
     return <NejoJsonViewer data={data} />;
   }
   ```

Note: If you're using TypeScript, you might need to add type declarations for the package. Create a `nejo-json-viewer.d.ts` file in your project's `@types` directory:

```typescript
declare module 'nejo-json-viewer' {
  import { ComponentType } from 'react';
  
  export const NejoJsonViewer: ComponentType<{ data: any }>;
}
```

Remember to restart your Next.js development server after making these changes to ensure they take effect.

## Development

To run the Storybook for this component locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ivanhuay/nejo-json-viewer.git
   ```

2. Install dependencies:
   ```bash
   cd nejo-json-viewer
   npm install
   ```

3. Run Storybook:
   ```bash
   npm run storybook
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License

## About the Project

Nejo JSON Viewer was created as part of a portfolio project during a job search journey. The name "Nejo" comes from "NEw JOb" (NE-JO), reflecting the creator's commitment to continuous learning and growth in the tech industry.

---

If you find Nejo JSON Viewer helpful, please consider giving it a star on GitHub and sharing it with others!
