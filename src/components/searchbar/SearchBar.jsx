import { useContext, useEffect, useRef, useState } from 'react'
import './search-bar.css'
import useGetWeather from '../../hooks/useGetWeather'
import Loader from '../../components/loader/Loader'
import { AppContext } from '../../state/context/AppContext'
import formatText from '../../utils/formatText'

const SearchBar = () => {

  const [text, setText] = useState('')  
  const { getWeather } = useGetWeather()
  const { loading } = useContext(AppContext)
  const searchbarRef = useRef(null)

  const handleSubmit = (e) => {
    // prevents page reload on form submission
    e.preventDefault()
    // prevents form submission if text is empty
    if (!text.trim()) return
    // invokes getWeather with trimmed text
    getWeather(text.trim())
  }

  const handleChange = (e) => {
    setText(formatText(e.target.value))
  }

  // focus on searchbar input when this component renders
  useEffect(() => {
    searchbarRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit} className="searchbar fade-in">
      <input 
        type="text" 
        placeholder='type a location'
        className="searchbar__input" 
        value={text}
        onChange={handleChange}
        ref={searchbarRef}
      />
      
      <button className="searchbar__button">
        {loading ? <Loader /> : (
          <i className={`ri-${text.trim() ? 'arrow-right' : 'search'}-line icon`}></i>
        )}
      </button>
    </form>
  )
}

export default SearchBar