/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Checks if `key` is a direct property of `object`.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 * @see hasIn, hasPath, hasPathIn
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 * const other = create({ 'a': create({ 'b': 2 }) })
 *
 * has(object, 'a')
 * // => true
 *
 * has(other, 'a')
 * // => false
 */
exports.has = function(object, key) {
    return object != null && hasOwnProperty.call(object, key)
};


/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */

exports.isEmpty = function(value) {
    if(isPrototype(value)) {
        return !Object.keys(value).length
    }
    for (const key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false
        }
    }
    return true;
} 



