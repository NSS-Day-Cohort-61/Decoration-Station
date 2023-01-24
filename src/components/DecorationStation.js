import { NavBar } from './nav/NavBar'
import './styles.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { NewDecorationForm } from './forms/NewDecorationForm'
import { ItemDetails } from './items/ItemDetails'
import { ItemsList } from './items/ItemsList'
import { Seasons } from '../data/constants'
import { NotFound } from './NotFound'

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
        <Route index element={<ItemsList />} />
        <Route
          path="jolly"
          element={<ItemsList seasonId={Seasons.Christmas} />}
        />
        <Route
          path="gobble"
          element={<ItemsList seasonId={Seasons.Thanksgiving} />}
        />
        <Route
          path="spooky"
          element={<ItemsList seasonId={Seasons.Halloween} />}
        />
        <Route path="items">
          <Route index element={<ItemsList />} />
          <Route path="new" element={<NewDecorationForm />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Route>
        <Route path="*" exact={true} element={<NotFound />} />
      </Route>
    </Routes>
  )
}
