// import './current.css'
import { useContext, useEffect, useState } from 'react'
import './current-bar.css'
import { AppContext } from '../../state/context/AppContext'
import parseDateTime from '../../helpers/parseDateTime'
import icons from '../../assets/json/icons.json'

const Current = () => {

  const [humidityPercentage, setHumidityPercentage] = useState(10)
  const data = useContext(AppContext)
  const { weather: { current } } = data
  const { place, main: { temp, pressure, humidity }, timezone, visibility, weather: [ { description, icon } ], wind: { speed }, aqi, time: { time }, uvIndex } = current || {}

  const { month, day, time: t, meridian, dayIndex } = parseDateTime(time)
  let aqiText = ''
  switch (aqi) {
    case 1:
      aqiText = 'Good'
      break;
    case 2:
      aqiText = 'Fair'        
      break;
    case 3:
      aqiText = 'Moderate'        
      break;
    case 4:
      aqiText = 'Poor'        
      break;
    case 5:
      aqiText = 'Very Poor'        
      break;
  
    default:
      aqiText = ''
  }

  const weatherIcon = icons[icon]
  
  useEffect(() => {
    // setHumidityPercentage(10)
    setTimeout(() => {
      setHumidityPercentage(humidity)
    }, 500);
  }, [data])

  
  

  return (
    <div className="current">
      {/* grid 1 */}
      {/* <>
        <header className="current__header">
          <div className="current__place">
            <h4 className="current__title">Los Angeles</h4>

            <div className="current__day">
              <div className="current__date">30 June</div>
              <div className="dot"></div>
              <div className="current__time">07:04 AM</div>
            </div>
          </div>
          <div className="current__climate">
            <i className="ri-showers-line icon"></i>
            <div className="current__climate-type">Shower</div>
          </div>
        </header>

        <footer className="current__footer">
          <div className="current__stats">
            <div className="current__wind">
              <div className="current__label">Wind</div>
              <i className="ri-windy-line icon"></i>
              <span className='speed'>2 mph</span>
            </div>

            <div className="current__humidity">
              <div className="current__label">Humidity</div>
              <i className="ri-bubble-chart-line icon"></i>
              <span>72%</span>
            </div>

            <div className="current__pressure">
              <div className="current__label">Pressure</div>
              <i className="ri-focus-2-line icon"></i>
              <span>1016 mb</span>
            </div>

            <div className="current__air-quality">
              <div className="current__label">Air Quality</div>
              <i className="ri-loader-line icon"></i>
              <span>Good</span>
            </div>
          </div>

          <div className="current__temp">19<span>°C</span></div>
        </footer>
      </> */}
      

      {/* grid 2 */}
      <div className="current__main">
        <div className='current__place'>
          <div>
            <h4 className="current__title">{place}</h4>
            <div className="current__climate">{description}</div>
          </div>
          <i className={`${weatherIcon} icon`}></i>
        </div>
        <div className="current__temp">{temp}<span>°C</span></div>
      </div>

      <div className="current__time">
        <div className="current__date">{month} <span>{day}</span></div>
        <div className="current__hour"><span>{t}</span> {meridian}</div>

        <ul className="current__week">
          {['s', 'm', 't', 'w', 't', 'f', 's'].map((d, i) => (
            <li key={i} className={`current__day ${dayIndex === i ? 'active' : ''}`}>{d}</li>
          ))}
        </ul>
      </div>
      
      <div className="current__humidity">
        <div className="current__label">Humidity</div>
        <div className="current__bar">
          <span style={{ width: `${humidityPercentage}%` }} >{humidity}%</span>
        </div>
      </div>
    
      <div className="current__stats">
        <div className="current__wind">
          <div className="current__label">Wind</div>
          <i className="ri-windy-line icon"></i>
          <span className='speed'><span>{speed}</span> mph</span>
        </div>

        <div className="current__pressure">
          <div className="current__label">Pressure</div>
          <i className="ri-focus-2-line icon"></i>
          <span><span>{pressure}</span> mb</span>
        </div>

        <div className="current__air-quality">
          <div className="current__label">Air Quality</div>
          <i className="ri-loader-line icon"></i>
          <span>{aqiText}</span>
        </div>

        <div className="current__uv-index">
          <div className="current__label">UV Index</div>
          <i className="ri-sun-line icon"></i>
          <span><span>{uvIndex}</span></span>
        </div>
      </div>
    </div>
  )
}

export default Current