export const getItemsBySeasonId = (seasonId) => {
  return fetch(`http://localhost:8088/items?seasonId=${seasonId}`).then((res) =>
    res.json()
  )
}

export const getAllItems = () => {
  return fetch(`http://localhost:8088/items`).then((res) => res.json())
}

// const multiplyBySelf = num => {
//   return num * num
// }

// const multiplyByAnother = (num1, num2) => {
//   return num1 * num2
// }
