/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env mocha */

import { assert } from 'chai';

import SerializerInterface from './../../src/Serializer/SerializerInterface';
import UnimplementedMethodError from './../../src/Error/UnimplementedMethodError';

/** @test {SerializerInterface} */
describe('SerializerInterface', () => {
    /**
     * @test {SerializerInterface#deserialize}
     * @test {SerializerInterface#serialize}
     * @test {SerializerInterface#supportsDeserialize}
     * @test {SerializerInterface#supportsSerialize}
     */
    it('As an interface, it should not implement anything', () => {
        const serializer = new SerializerInterface();

        // Potential refactor
        assert.throw(serializer.deserialize, UnimplementedMethodError);
        assert.throw(serializer.serialize, UnimplementedMethodError);
        assert.throw(serializer.supportsDeserialize, UnimplementedMethodError);
        assert.throw(serializer.supportsSerialize, UnimplementedMethodError);

        try {
            serializer.deserialize();
        } catch (error) {
            assert.strictEqual(error.name, 'UnimplementedMethodError');
        }
        try {
            serializer.serialize();
        } catch (error) {
            assert.strictEqual(error.name, 'UnimplementedMethodError');
        }
        try {
            serializer.supportsDeserialize();
        } catch (error) {
            assert.strictEqual(error.name, 'UnimplementedMethodError');
        }
        try {
            serializer.supportsSerialize();
        } catch (error) {
            assert.strictEqual(error.name, 'UnimplementedMethodError');
        }
    });
});
