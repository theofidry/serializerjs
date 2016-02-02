/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _UserType = require('./UserType');

var User = (function () {
    /**
     * @param {string}   firstname
     * @param {string}   lastname
     * @param {string}   type      {@see Type}
     * @param {?boolean} gender    True for female, false for male and null for unknown
     */

    function User(firstname, lastname, type, gender) {
        _classCallCheck(this, User);

        this.firstname = firstname;
        this.lastname = lastname;
        this._type = type;
        this._gender = gender;
    }

    _createClass(User, [{
        key: 'getFullname',
        value: function getFullname() {
            return this.firstname + ' ' + this.lastname;
        }
    }, {
        key: 'isAnonymous',
        value: function isAnonymous() {
            return _UserType.ANONYMOUS_TYPE === this._type;
        }
    }, {
        key: 'isCustomer',
        value: function isCustomer() {
            return _UserType.CUSTOMER_TYPE === this._type;
        }
    }, {
        key: 'isAdmin',
        value: function isAdmin() {
            return _UserType.ADMIN_TYPE === this._type;
        }
    }, {
        key: 'isMale',
        value: function isMale() {
            return false === this._gender;
        }
    }, {
        key: 'isFemale',
        value: function isFemale() {
            return true === this._gender;
        }
    }, {
        key: 'genderIsKnown',
        value: function genderIsKnown() {
            return null === this._gender;
        }
    }]);

    return User;
})();

exports['default'] = User;
module.exports = exports['default'];