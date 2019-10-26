[![NPM Version](https://badge.fury.io/js/react-undraw.svg)](https://badge.fury.io/js/react-undraw)
[![Build Status](https://travis-ci.org/justinlettau/react-undraw.svg?branch=master)](https://travis-ci.org/justinlettau/react-undraw)
[![Dependency Status](https://david-dm.org/justinlettau/react-undraw.svg)](https://david-dm.org/justinlettau/react-undraw)
[![Dev Dependency Status](https://david-dm.org/justinlettau/react-undraw/dev-status.svg)](https://david-dm.org/justinlettau/react-undraw?type=dev)

# React unDraw

React component for [unDraw illustrations](https://undraw.co/).

# Demo

[https://justinlettau.github.io/react-undraw](https://justinlettau.github.io/react-undraw)

# Installation

```bash
npm install react-undraw --save
```

# Usage

Import everything:

```jsx
import Undraw from 'react-undraw';

<Undraw name="coding" />;
```

Import only what you need:

```jsx
import { UndrawCoding } from 'react-undraw';
// or
import UndrawCoding from 'react-undraw/dist/illustrations/UndrawCoding';

<UndrawCoding />;
```

Props:

| Prop           | Type     | Description                    | Default   |
| -------------- | -------- | ------------------------------ | --------- |
| `name`         | `string` | Illustration name, kebab-case. | n/a       |
| `primaryColor` | `string` | Illustration primary color.    | `#6c63ff` |
| `height`       | `string` | Illustration height.           | `250px`   |

See [ILLUSTRATIONS.md](./ILLUSTRATIONS.md) for a full list of supported illustration names.

## Override Default Props

```jsx
import { defaultProps } from 'react-undraw';

defaultProps.primaryColor = 'darkblue';
```

# Development

```
npm install
npm run build
```
