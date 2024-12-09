import celsiusToFahrenheit from "../../utils/switchUnit"

const ForecastInfo = ({ temps, tempsMin, weatherCode, unit, icons }) => {
  return (
    <div className="forecast__info">
      {temps.map((temp, index) => (
        <div key={index} className="forecast__info-box">
          <div className="tooltip">{icons[weatherCode[index+1]].text}</div>

          <i className={`${icons[weatherCode[index+1]].icon} icon`}></i>

          <span className="forecast__temp-high">{unit === 'celsius' ? temp : celsiusToFahrenheit(temp)}°</span>

          <span className="forecast__temp-low">
            {unit === 'celsius' ? tempsMin[index+1] : celsiusToFahrenheit(tempsMin[index+1])}° <i className="ri-arrow-down-line icon"></i>
          </span>
        </div>
      ))}
    </div>
  )
}

export default ForecastInfo