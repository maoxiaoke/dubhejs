import isNil from '../isNil'

test('isNil-undefined', () => {
  expect(isNil(undefined)).toBe(true)
})

test('isNil-null', () => {
  expect(isNil(null)).toBe(true)
})

test('isNil-void-zero', () => {
  expect(isNil(null)).toBe(true)
})

test('isNil-zero', () => {
  expect(isNil(0)).toBe(false)
})
