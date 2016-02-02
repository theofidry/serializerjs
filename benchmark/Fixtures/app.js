/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import CacheSerializerFinder from './../../_src/Finder/CacheSerializerFinder';
import SerializerFinder from './../../_src/Finder/SerializerFinder';
import BooleanSerializer from './BooleanSerializer';
import Serializer from './../../_src/Serializer/Serializer';
import StringSerializer from './StringSerializer';
import TypeSerializer from './UserTypeSerializer';
import UserSerializer from './UserSerializer';
import User from './User';
import { ADMIN_TYPE } from './UserType';

//import fs from 'fs';
//import profiler from 'v8-profiler';

const booleanSerializer = new BooleanSerializer();
const stringSerializer = new StringSerializer();
const typeSerializer = new TypeSerializer();
const userSerializer = new UserSerializer();

const serializer = new Serializer(
    new Map([
        ['BooleanSerializer', booleanSerializer],
        ['StringSerializer', stringSerializer],
        ['UserTypeSerializer', typeSerializer],
        ['UserSerializer', userSerializer],
    ]),
    new CacheSerializerFinder()
);

const rawUser = {
    firstname: 'John',
    lastname: 'Doe',
    gender: true,
    type: 0,
};

const user = new User('John', 'Doe', ADMIN_TYPE, true);
const N = 100000;
var i;
const users = [];

//profiler.startProfiling('Profile', true);
window.serialize = function() {
    for (i = 0; i < N; i++) {
        users.push(serializer.serialize(user, null, {index: i}));
    }
}
//const profile1 = profiler.stopProfiling();
//profile1.export(function(error, result) {
//    fs.writeFileSync('profile1.json', result);
//    profile1.delete();
//});
