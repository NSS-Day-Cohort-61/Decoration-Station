import { useEffect, useState } from 'react'

export const ThanksgivingItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8088/items?seasonId=3')
      .then((res) => res.json())
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
