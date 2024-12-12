import './current.css'
import celsiusToFahrenheit from '../../utils/switchUnit'
import useGetCurrent from '../../hooks/useGetCurrent'
import Pollutants from './Pollutants'

// renders current weather deatils
const Current = () => {
  
  const { place, description, weatherIcon, unit, temp, month, day, time, meridian, dayIndex, humidityPercentage, humidity, speed, deg, aqiText, pollutants, visibility, uvIndex, pressure, daysInitials } = useGetCurrent()

  return (
    <div className="current">
      {/* summary */}
      <div className="current__main">
        <div className='current__place'>
          <div>
            <h4 className="current__title">{place}</h4>
            <div className="current__climate">{description}</div>
          </div>
          <i className={`${weatherIcon} icon`}></i>
        </div>
        <div className="current__temp">{unit === 'celsius' ? temp : celsiusToFahrenheit(temp) }<span>°{unit.charAt(0).toUpperCase()}</span></div>
      </div>

      {/* date & time */}
      <div className="current__time">
        <div className="current__date">{month} <span>{day}</span></div>
        <div className="current__hour"><span>{time}</span> {meridian}</div>

        <ul className="current__week">
          {daysInitials.map((initial, i) => (
            <li key={i} className={`current__day ${dayIndex === i ? 'active' : ''}`}>{initial}</li>
          ))}
        </ul>
      </div>
      
      {/* humidity bar */}
      <div className="current__humidity">
        <div className="current__label">Humidity</div>
        <div className="current__bar">
          <span style={{ width: `${humidityPercentage}%` }} >{humidity}%</span>
        </div>
      </div>
    
      {/* metrics */}
      <div className="current__stats">
        <div className="current__wind">
          <div className="current__label">Wind</div>
          <i className="ri-windy-line icon"></i>
          <span className='speed'><span>{speed}</span> mps</span>
        </div>

        <div className="current__wind">
          <div className="current__label">Direction</div>
          <i className="ri-compass-discover-line icon"></i>
          <span className='speed'><span>{deg}</span>°</span>
        </div>

        <div className="current__air-quality">
          <div className="current__label">Air Quality</div>
          <i className="ri-loader-line icon"></i>
          <span>{aqiText}</span>

          {/* air pollutants */}
          <Pollutants pollutants={pollutants} />
        </div>

        <div className="current__visibility">
          <div className="current__label">Visibility</div>
          <i className="ri-goggles-line icon"></i>
          <span>{visibility/1000} km</span>
        </div>

        <div className="current__uv-index">
          <div className="current__label">UV Index</div>
          <i className="ri-sun-line icon"></i>
          <span><span>{uvIndex}</span></span>
        </div>

        <div className="current__pressure">
          <div className="current__label">Pressure</div>
          <i className="ri-focus-2-line icon"></i>
          <span><span>{pressure}</span> mb</span>
        </div>
      </div>
    </div>
  )
}

export default Current