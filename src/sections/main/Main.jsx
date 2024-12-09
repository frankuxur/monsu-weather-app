import { useState } from 'react'
import './main.css'
import SearchBar from '../../components/searchbar/SearchBar'
import MainHeader from './MainHeader'
import Weather from '../weather/Weather'
import Settings from '../../components/settings/Settings'
import Art from '../../components/art/Art'
import FadeInOut from '../../utils/FadeInOut'

const Main = () => {
  const [isHover, setIsHover] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  
  return (
    <main className="main">
      <div className="main__content">
        <MainHeader />

        {/* settings button & options */}
        <Settings />

        {showSearch && (
          <FadeInOut show={true} duration={1000}>
            <SearchBar />
          </FadeInOut>
        )}

        {!showSearch && (
          <FadeInOut show={true} duration={1000}>
            <Art 
              isHover={isHover} 
              setIsHover={setIsHover} 
              setShowSearch={setShowSearch}
            />
          </FadeInOut>
        )}
        
        {/* weather */}
        <FadeInOut show={true} duration={1000}>
          <Weather showSearch={showSearch} />
        </FadeInOut>
        
      </div>
    </main>
  )
}

export default Main