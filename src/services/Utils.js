export const pluck = (arr, key) => arr.map(item => item[key]).sort()

export const unique = (arr) => {
  const newArr = [...new Set(arr)]
  return newArr.filter(i => i !== "")
}
