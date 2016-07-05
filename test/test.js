/**
 * Copyright (C) 2016 yanni4night.com
 * test.js
 *
 * changelog
 * 2016-07-05[12:45:37]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
var assert = require('assert');
var defineFrozenProperty = require('../');

describe('defineProperty', function () {
    it('should define frozen', function () {
        var o = {};
        defineFrozenProperty(o, 'name', 'Kate',true);
        defineFrozenProperty(o, 'age', '29');
        assert.throws(function () {
            o.name = 'Lucky';
        });
        assert.throws(function () {
            delete o.name;
        });
        assert.ok(o.propertyIsEnumerable('name'));
        assert.ok(!o.propertyIsEnumerable('age'));
    });
});