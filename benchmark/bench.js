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

var _srcFinderCacheSerializerFinder = require('./../src/Finder/CacheSerializerFinder');

var _srcFinderCacheSerializerFinder2 = _interopRequireDefault(_srcFinderCacheSerializerFinder);

var _srcFinderSerializerFinder = require('./../src/Finder/SerializerFinder');

var _srcFinderSerializerFinder2 = _interopRequireDefault(_srcFinderSerializerFinder);

var _FixturesBooleanSerializer = require('./Fixtures/BooleanSerializer');

var _FixturesBooleanSerializer2 = _interopRequireDefault(_FixturesBooleanSerializer);

var _srcSerializerSerializer = require('./../src/Serializer/Serializer');

var _srcSerializerSerializer2 = _interopRequireDefault(_srcSerializerSerializer);

var _FixturesStringSerializer = require('./Fixtures/StringSerializer');

var _FixturesStringSerializer2 = _interopRequireDefault(_FixturesStringSerializer);

var _FixturesUserTypeSerializer = require('./Fixtures/UserTypeSerializer');

var _FixturesUserTypeSerializer2 = _interopRequireDefault(_FixturesUserTypeSerializer);

var _FixturesUserSerializer = require('./Fixtures/UserSerializer');

var _FixturesUserSerializer2 = _interopRequireDefault(_FixturesUserSerializer);

var _FixturesUser = require('./Fixtures/User');

var _FixturesUser2 = _interopRequireDefault(_FixturesUser);

var _FixturesUserType = require('./Fixtures/UserType');

var booleanSerializer = new _FixturesBooleanSerializer2['default']();
var stringSerializer = new _FixturesStringSerializer2['default']();
var typeSerializer = new _FixturesUserTypeSerializer2['default']();
var userSerializer = new _FixturesUserSerializer2['default']();

var serializer = new _srcSerializerSerializer2['default'](new Map([['BooleanSerializer', booleanSerializer], ['StringSerializer', stringSerializer], ['UserTypeSerializer', typeSerializer], ['UserSerializer', userSerializer]]));

var rawUser = {
    firstname: 'John',
    lastname: 'Doe',
    gender: true,
    type: 0
};

var user = new _FixturesUser2['default']('John', 'Doe', _FixturesUserType.ADMIN_TYPE, true);
var N = 100000;
var i;

for (i = 0; i < N; i++) {
    serializer.serialize(user, null, { index: i });
}
