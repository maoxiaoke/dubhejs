import { PlainObject } from './types'

function emit (names: string[], obj: PlainObject): Partial<PlainObject> {
  const result: Partial<PlainObject> = {}
  Object.keys(obj).forEach(props => {
    if (!names.includes(props)) {
      result[props] = obj[props]
    }
  })
  return result
}

export default emit
