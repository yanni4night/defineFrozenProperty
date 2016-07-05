/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-07-05[12:44:48]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

module.exports = function defineFrozenProperty(object, key, value, enumerable) {
    Object.defineProperty(object, key, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: !!enumerable
    });
};