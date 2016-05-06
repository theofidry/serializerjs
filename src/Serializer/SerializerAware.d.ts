/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Serializer from "./Serializer";
interface SerializerAware {

    setSerializer(serializer: Serializer): void
}

export default SerializerAware;