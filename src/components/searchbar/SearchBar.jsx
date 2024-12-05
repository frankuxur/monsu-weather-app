import { useState } from 'react'
import './search-bar.css'

const SearchBar = () => {

  const [text, setText] = useState('')  

  return (
    <form className="searchbar">
        <input 
            type="text" 
            className="searchbar__input" 
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button className="searchbar__button">
        <i className={`ri-${text.trim() ? 'arrow-right' : 'search'}-line icon`}></i>
        {/* <i className="ri-arrow-right-line icon"></i> */}
        </button>
    </form>
  )
}

export default SearchBar