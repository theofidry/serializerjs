/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcFinderCacheSerializerFinder = require('./../../_src/Finder/CacheSerializerFinder');

var _srcFinderCacheSerializerFinder2 = _interopRequireDefault(_srcFinderCacheSerializerFinder);

var _srcFinderSerializerFinder = require('./../../_src/Finder/SerializerFinder');

var _srcFinderSerializerFinder2 = _interopRequireDefault(_srcFinderSerializerFinder);

var _BooleanSerializer = require('./BooleanSerializer');

var _BooleanSerializer2 = _interopRequireDefault(_BooleanSerializer);

var _srcSerializerSerializer = require('./../../_src/Serializer/Serializer');

var _srcSerializerSerializer2 = _interopRequireDefault(_srcSerializerSerializer);

var _StringSerializer = require('./StringSerializer');

var _StringSerializer2 = _interopRequireDefault(_StringSerializer);

var _UserTypeSerializer = require('./UserTypeSerializer');

var _UserTypeSerializer2 = _interopRequireDefault(_UserTypeSerializer);

var _UserSerializer = require('./UserSerializer');

var _UserSerializer2 = _interopRequireDefault(_UserSerializer);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _UserType = require('./UserType');

//import fs from 'fs';
//import profiler from 'v8-profiler';

var booleanSerializer = new _BooleanSerializer2['default']();
var stringSerializer = new _StringSerializer2['default']();
var typeSerializer = new _UserTypeSerializer2['default']();
var userSerializer = new _UserSerializer2['default']();

var serializer = new _srcSerializerSerializer2['default'](new Map([['BooleanSerializer', booleanSerializer], ['StringSerializer', stringSerializer], ['UserTypeSerializer', typeSerializer], ['UserSerializer', userSerializer]]), new _srcFinderCacheSerializerFinder2['default']());

var rawUser = {
    firstname: 'John',
    lastname: 'Doe',
    gender: true,
    type: 0
};

var user = new _User2['default']('John', 'Doe', _UserType.ADMIN_TYPE, true);
var N = 100000;
var i;
var users = [];

//profiler.startProfiling('Profile', true);
window.serialize = function () {
    for (i = 0; i < N; i++) {
        users.push(serializer.serialize(user, null, { index: i }));
    }
};
//const profile1 = profiler.stopProfiling();
//profile1.export(function(error, result) {
//    fs.writeFileSync('profile1.json', result);
//    profile1.delete();
//});