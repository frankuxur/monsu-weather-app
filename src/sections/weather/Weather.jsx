import './weather.css'
import Current from '../../components/current/Current'
import Forecast from '../../components/forecast/Forecast'

const Weather = () => {
  return (
    <div className="weather">
      <div className="weather__content">
        {/* 1 - today */}
        <Current />
        {/* 2 - forecast */}
        <Forecast />
      </div>
    </div>
  )
}

export default Weather