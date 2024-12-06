import './weather.css'
import Current from '../../components/current/Current'
import Forecast from '../../components/forecast/Forecast'
import { useContext } from 'react'
import { AppContext } from '../../state/context/AppContext'

const Weather = ({ showSearch }) => {

  const { weather: { current, forecast }, loading, notFound } = useContext(AppContext)

  if (notFound) {
    return (
      <div className="not-found">
        <h1>Whoopsies! Looks like we couldn't snag the weather report for that spot.</h1>
        <span>404</span>
      </div>
    )
  }

  if (!loading && !showSearch && !Object.keys(current).length && !Object.keys(forecast).length) {
    return null
  }

  if (showSearch && !Object.keys(current).length && !Object.keys(forecast).length) {
    return (
      <div className="globe">
        <i className="ri-globe-line icon"></i>
      </div>
    )
  }

  return (
    <div className="weather">
      <div className="weather__content">
        {/* 1 - today's weather */}
        <Current />
        {/* 2 - forecast */}
        <Forecast />
      </div>
    </div>
  )
}

export default Weather