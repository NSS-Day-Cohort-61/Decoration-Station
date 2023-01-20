import { useEffect, useState } from 'react'

export const HalloweenItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8088/items?seasonId=1')
      .then((res) => {
        return res.json()
      })
      .then((itemsArray) => setItems(itemsArray))
  }, [])

  return (
    <div className="items-container">
      {items.map((itemObj) => {
        return (
          <div className="item-card" key={itemObj.id}>
            <img
              className="item-img"
              src={itemObj.imageUrl}
              alt={itemObj.name}
            />
            <div className="item-name">{itemObj.name}</div>
          </div>
        )
      })}
    </div>
  )
}

// Declare a state variable (useState) to hold the halloween items
// UseEffect that runs on initial render that will fetch the items
// fetch the halloween items
// Convert resp to from json to js and set items to state
// Return some JSX
// map the halloween items and convert to jsx
