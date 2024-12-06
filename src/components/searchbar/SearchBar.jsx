import { useContext, useState } from 'react'
import './search-bar.css'
import useGetWeather from '../../hooks/useGetWeather'
import Loader from '../../components/loader/Loader'
import { AppContext } from '../../state/context/AppContext'
import formatText from '../../utils/formatText'

const SearchBar = () => {

  const [text, setText] = useState('')  

  const { getWeather } = useGetWeather()
  const { loading } = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    getWeather(text)
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar">
        <input 
          type="text" 
          placeholder='type a location'
          className="searchbar__input" 
          value={text}
          onChange={e => setText(formatText(e.target.value))}
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