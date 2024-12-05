import { useState } from 'react'
import './main.css'
import MainArt from './MainArt'
import SearchBar from '../../components/searchbar/SearchBar'
import MainHeader from './MainHeader'
import Weather from '../weather/Weather'

const Main = () => {
  const [isHover, setIsHover] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  
  return (
    <main className="main">
      <div className="main__content">
        <MainHeader />

        {showSearch ? (
          <SearchBar />
        ) : (
          <MainArt 
            isHover={isHover} 
            setIsHover={setIsHover} 
            setShowSearch={setShowSearch}
          />
        )}
        
        {/* weather */}
        <Weather />
      </div>
    </main>
  )
}

export default Main