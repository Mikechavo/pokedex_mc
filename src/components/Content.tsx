import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Search from "./Search"
import EnergyTypePage from './EnergyTypePokemonPage'; // Make sure to import the correct file

const Content = () => {
  return (
    <div className="overflow-y-auto flex-grow">
      <main>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            {/* Define the route for displaying Pokémon of a specific energy type */}
            <Route path="/energy/:energyType" element={<EnergyTypePage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default Content
