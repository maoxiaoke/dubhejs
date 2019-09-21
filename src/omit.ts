import { PlainObject } from './types'

/**
 * Returns a partial copy of an object omitting the keys specified.
 * @since v1.0.1
 * @template T
 * @template K
 * @param {K[]} names An Array of String property names to omit from the specific Object
 * @param {T} obj The specific Object to copy from
 * @returns {Omit<T, K>} An new copy of the specific Object without properties from `names`
 * @example
 *
 *   const me = { name: 'xiaoke', age: 18 }
 *   omit(['age'], me)  // { name: 'xiaoke' }
 */

function omit <T extends PlainObject, K extends keyof T> (names: K[], obj: T): Omit<T, K> {
  const result = {} as any
  Object.keys(obj).forEach(props => {
    if (!names.includes(props as K)) {
      result[props] = obj[props]
    }
  })
  return result
}

export default omit
