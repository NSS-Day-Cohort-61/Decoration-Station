import { useEffect, useState } from 'react'
import { ItemsList } from './ItemsList'
import { SeasonFilter } from './SeasonFilter'
import { NewDecorationForm } from './NewDecorationForm'
import './DecorationStation.css'

export const DecorationStation = () => {
  // Hooks are the functions we get from react that start with "use"
  // useState() and useEffect()
  const [items, setItems] = useState([]) // [stateVariable, functionToSetStateVariable]
  const [filteredItems, setFilteredItems] = useState([])
  const [seasons, setSeasons] = useState([])
  const [categories, setCategories] = useState([])
  const [seasonChoice, setSeasonChoice] = useState(0)
  const [userChoices, setUserChoices] = useState({
    name: '',
    imageUrl: '',
    seasonId: 0,
    categoryId: 0,
  })

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

    fetch('http://localhost:8088/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
  }, []) // An empty dependency array listens for the initial render of this component

  useEffect(() => {
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

  // New Item Form
  // Name text
  // Image URL text
  // Season radio
  // Category radio

  return (
    // The surrounding <></> is a (React) fragment
    <>
      {/* The keys can be named the same as the value */}
      <SeasonFilter
        seasonChoice={seasonChoice}
        setSeasonChoice={setSeasonChoice}
        seasons={seasons}
      />
      <NewDecorationForm
        userChoices={userChoices}
        setUserChoices={setUserChoices}
        seasons={seasons}
        categories={categories}
        setItems={setItems}
        setSeasonChoice={setSeasonChoice}
      />
      <ItemsList
        seasonsArray={seasons}
        seasonChoiceId={seasonChoice}
        filteredItemsArray={filteredItems}
      />
      {/* ItemsList(seasons, seasonChoice, filteredItems)  -- How this looked in vanilla JS*/}
    </>
  )
}
