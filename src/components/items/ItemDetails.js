import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetails = () => {
  const [item, setItem] = useState({})

  const { itemId } = useParams()

  useEffect(() => {
    fetch(
      `http://localhost:8088/items/${itemId}?_expand=season&_expand=category`
    )
      .then((res) => res.json())
      .then((itemObj) => {
        setItem(itemObj)
      })
  }, []) // an empty dependency array watched the initial render of the component

  return (
    <div className="item-detail-container">
      <h3 className="item-detail-name">Item details for item: {item.name}</h3>
      <img src={item.imageUrl} alt={item.name} className="item-img" />
      {item.category ? (
        <div className="item-details">Category: {item.category.name}</div>
      ) : (
        ''
      )}
      <div className="item-details">Season: {item.season?.name}</div>
    </div>
  )
}

// cannot read properties of undefined
// however, we can read properties the don't even exist on anything that is not null or undefined.

// declare a state variable to hold the item
// set up a useEffect to watch initial render
// fetch our item
// set the item to state
// display the item details in jsx
