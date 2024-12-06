import { useState } from 'react'
import './main.css'
import SearchBar from '../../components/searchbar/SearchBar'
import MainHeader from './MainHeader'
import Weather from '../weather/Weather'
import Settings from '../../components/settings/Settings'
import Art from '../../components/art/Art'

const Main = () => {
  const [isHover, setIsHover] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  
  return (
    <main className="main">
      <div className="main__content">
        <MainHeader />

        <Settings />

        {showSearch ? (
          <SearchBar />
        ) : (
          <Art 
            isHover={isHover} 
            setIsHover={setIsHover} 
            setShowSearch={setShowSearch}
          />
        )}
        
        {/* weather */}
        <Weather showSearch={showSearch} />
      </div>
    </main>
  )
}

export default Main