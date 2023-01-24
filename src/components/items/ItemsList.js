import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllItems, getItemsBySeasonId } from '../../data/dataAccess'

export const ItemsList = ({ seasonId }) => {
  const [items, setItems] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (seasonId) {
      getItemsBySeasonId(seasonId).then((itemsArray) => {
        setItems(itemsArray)
      })
    } else {
      getAllItems().then((itemsArray) => {
        setItems(itemsArray)
      })
    }
  }, [seasonId]) // An empty dependency array listens for initial render (component on mount)

  return (
    <div className="items-container">
      {items.map((itemObj) => {
        return (
          <div className="item-card" key={itemObj.id}>
            <img
              src={itemObj.imageUrl}
              alt={itemObj.name}
              className="item-img"
              onClick={() => {
                navigate(`/items/item/${itemObj.id}`)
              }}
            />
            <div className="item-name">{itemObj.name}</div>
          </div>
        )
      })}
    </div>
  )
}
