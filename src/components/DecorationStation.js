import { NavBar } from './nav/NavBar'
import './styles.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { NewDecorationForm } from './forms/NewDecorationForm'
import { AllItems } from './items/AllItems'
import { HalloweenItems } from './items/HalloweenItems'
import { ChristmasItems } from './items/ChristmasItems'
import { ThanksgivingItems } from './items/ThanksgivingItems'
import { ItemDetails } from './items/ItemDetails'

export const DecorationStation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet /> {/* Render the matching child route here*/}
          </>
        }
      >
        <Route index element={<AllItems />} />
        <Route path="jolly" element={<ChristmasItems />} />
        <Route path="gobble" element={<ThanksgivingItems />} />
        <Route path="spooky" element={<HalloweenItems />} />
        <Route path="new" element={<NewDecorationForm />} />
        <Route path=":itemId" element={<ItemDetails />} />
      </Route>
    </Routes>
  )
}

// json-server -p 8088 database.json -w

// Create a link on navbar for halloween items
// Set up a Route for the halloween items
// Create a HalloweenItems.js module
// Create a HalloweenItems component
// fetch the halloween items

// Onclick for the image
// New route for item detail view
// Component for item details
