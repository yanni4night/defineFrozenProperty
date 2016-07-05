# defineFrozenProperty
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Shortcut for defineProperty.

```js
var defineFrozenProperty = require('define-frozen-property');

var student = {};

defineFrozenProperty(student, 'name', 'Kate', true/*enumerable*/);
defineFrozenProperty(student, 'age', '28');
```

[npm-url]: https://npmjs.org/package/defineFrozenProperty
[downloads-image]: http://img.shields.io/npm/dm/defineFrozenProperty.svg
[npm-image]: http://img.shields.io/npm/v/defineFrozenProperty.svg
[travis-url]: https://travis-ci.org/yanni4night/defineFrozenProperty
[travis-image]: http://img.shields.io/travis/yanni4night/defineFrozenProperty.svg
[david-dm-url]:https://david-dm.org/yanni4night/defineFrozenProperty
[david-dm-image]:https://david-dm.org/yanni4night/defineFrozenProperty.svg
[david-dm-dev-url]:https://david-dm.org/yanni4night/defineFrozenProperty#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/yanni4night/defineFrozenProperty/dev-status.svg