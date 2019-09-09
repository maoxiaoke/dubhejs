function types<T> (value: T): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export default types
