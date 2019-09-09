
/**
 * Check if the input value is null or undefined
 * @since v1.0.1
 * @param {*} value
 * @returns {boolean}
 * @example
 *
 *    isNil(null) // true
 *    isNil(undefined) // true
 *    isNil(void 0) // true
 *    isNil(0) // false
 */

const isNil: (value: any) => boolean = (value) => {
  return value === undefined || value === null
}

export default isNil
