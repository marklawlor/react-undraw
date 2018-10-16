[![NPM Version](https://badge.fury.io/js/react-undraw.svg)](https://badge.fury.io/js/react-undraw)
[![Build Status](https://travis-ci.org/justinlettau/react-undraw.svg?branch=master)](https://travis-ci.org/justinlettau/react-undraw)
[![Dependency Status](https://david-dm.org/justinlettau/react-undraw.svg)](https://david-dm.org/justinlettau/react-undraw)
[![Dev Dependency Status](https://david-dm.org/justinlettau/react-undraw/dev-status.svg)](https://david-dm.org/justinlettau/react-undraw?type=dev)

# React unDraw
React component for [unDraw illustrations](https://undraw.co/).

# Installation
```bash
npm install react-undraw --save
```

# Usage
```jsx
import Undraw from 'react-undraw';

<Undraw name="coding" />
```

Props:

| Prop           | Type     | Description                    | Default   |
|----------------|----------|--------------------------------|-----------|
| `name`         | `string` | Illustration name, kebab-case. | n/a       |
| `primaryColor` | `string` | Illustration primary color.    | `#6c63ff` |
| `height`       | `string` | Illustration height.           | `250px`   |

See [./src/illustrations/README.md](./src/illustrations/README.md) for a full list of supported illustration names.

# Development
```
npm install
npm run build
```

To refresh the generated components:

- Update `./scripts/illustrations.json` with any new illustrations.
- Run `npm run refresh` (from root) to generate files.
