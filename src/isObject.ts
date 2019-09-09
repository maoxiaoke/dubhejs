// Returns true if the value is an object and not an array or null.
function isObject(val) {
  return val != null && typeof val === 'object' &&
  Array.isArray(val) === false
}
