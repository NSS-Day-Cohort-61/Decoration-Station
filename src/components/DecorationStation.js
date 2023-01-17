import { useEffect, useState } from 'react'
import './DecorationStation.css'

export const DecorationStation = () => {
  // Hooks are the functions we get from react that start with "use"
  // useState() and useEffect()
  const [items, setItems] = useState([]) // [stateVariable, functionToSetStateVariable]
  const [filteredItems, setFilteredItems] = useState([])
  const [seasons, setSeasons] = useState([])
  const [seasonChoice, setSeasonChoice] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8088/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
      })

    fetch('http://localhost:8088/seasons')
      .then((res) => res.json())
      .then((data) => {
        setSeasons(data)
      })
  }, []) // An empty dependency array listens for the initial render of this component

  useEffect(() => {
    console.log('useEffect triggered')
    if (seasonChoice === 0) {
      setFilteredItems(items)
    } else {
      const chosenSeasonItems = items.filter(
        (item) => item.seasonId === seasonChoice
      )
      setFilteredItems(chosenSeasonItems) //[]
    }
  }, [seasonChoice, items]) // The function will run anytime seasonChoice value changes OR items value changes

  // Define a new state variable
  // Fetch the seasons
  // Set the seasons
  // Select element
  // Map the seasons to create options
  // Option values for the select element

  // Create another state variable to hold the user choice
  // Listen for a change on the select
  // Set the seasonChoice state to select value
  // Filter items based off user choice

  return (
    <>
      <div id="filter-bar">
        <select
          className="filter-box"
          value={seasonChoice}
          id="season-select"
          onChange={(event) => {
            setSeasonChoice(parseInt(event.target.value))
          }}
        >
          <option value="0">All Seasons</option>
          {seasons.map((season) => {
            return (
              <option key={season.id} value={season.id}>
                {season.name}
              </option>
            )
          })}
        </select>
      </div>
      <div
        className={`${seasons
          .find((seasonObj) => seasonObj.id === seasonChoice)
          ?.name.toLowerCase()} items-container`}
      >
        {filteredItems.map((decorItem) => {
          return (
            <div key={decorItem.id} className="item-card">
              <img
                src={decorItem.imageUrl}
                alt={decorItem.name}
                className="item-img"
              />
              <div className="item-name">{decorItem.name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
