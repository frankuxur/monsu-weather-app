import './forecast.css'
import useSetForecastData from '../../hooks/useSetForecasetData'
import Chart from './Chart'
import ForecastInfo from './ForecastInfo'
import ForecastDays from './ForecastDays'

// renders weather forcast for the next 6 days
const Forecast = () => {

  const { temps, tempsMin, time, weatherCode, icons, unit } = useSetForecastData()

  return (
    <div className="forecast">
      <header className="forecast__header">
        <h4 className="forecast__title">Forecast</h4>
      </header>

      <div className="forecast__content">
        {/* forecast info */}
        <ForecastInfo temps={temps} tempsMin={tempsMin} weatherCode={weatherCode} unit={unit} icons={icons} />
        
        {/* forecast line chart */}
        <Chart temps={temps} />

        {/* forecast days */}
        <ForecastDays time={time} />
      </div>
    </div>
  )
}

export default Forecast