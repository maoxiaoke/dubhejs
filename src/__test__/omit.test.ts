import omit from '../omit'

const normal = {
  name: 'xiaoke',
  gender: 'male'
}

const man = {
  gender: 'male'
}
const me = Object.create(man, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'xiaoke',
    writable: true
  },
  age: {
    configurable: true,
    enumerable: false,
    value: 18,
    writable: true
  }
})

test('omit-normal', () => {
  expect(omit(['name'], normal)).toStrictEqual({ gender: 'male' })
})

test('omit-me', () => {
  expect(omit(['name'], me)).toStrictEqual({})
})
