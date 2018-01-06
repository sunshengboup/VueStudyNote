/* @flow */

export const isFunction = (f: any): boolean => typeof f == 'function';


// D:\OutPut\VUE\vue\src\shared\util.js
/**
 * Get the raw type string of a value e.g. [object Object]
 */
const _toString = Object.prototype.toString

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject(obj: any): boolean {
    return _toString.call(obj) === '[object Object]'
}

/**
 * Check whether the object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn(obj: Object | Array<*>, key: string): boolean {
    return hasOwnProperty.call(obj, key)
}


/**
* Remove an item from an array
*/
export function remove(arr: Array<any>, item: any): Array<any> | void {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}