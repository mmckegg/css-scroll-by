css-scroll-by
=============

Scroll the page by a given offset using CSS transitions

Manipulates the margin-top and margin-left style properties, then when the animation is complete, removes the margins, and moves the window scroll directly.

[![NPM](https://nodei.co/npm/css-scroll-by.png?compact=true)](https://nodei.co/npm/css-scroll-by/)

## API

```js
var scrollBy = require('css-scroll-by')
```

### scrollBy(offset, duration)

`offset` can be a number (representing Y scroll) or an array containing [x,y] offset.

`duration' is the number of milliseconds the animation should take to complete.

## Example

```bash
$ npm install beefy -g
$ npm run example
```