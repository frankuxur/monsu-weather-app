import celsiusToFahrenheit from "../../utils/switchUnit"
import { useRef } from 'react'

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ForecastInfo = ({ temps, tempsMin, weatherCode, unit, icons }) => {
  const forecastInfoRef = useRef()

  // gsap stagger
  useGSAP(() => {
    gsap.from('.forecast__info-box .icon', {
      opacity: 0,
      y: 8,
      duration: 0.8,
      delay: 0.2,
      stagger: {
        amount: 1,
        from: 'beginning',
      },
      ease: 'power2.inOut',
    })
  }, { scope: forecastInfoRef })

  return (
    <div className="forecast__info" ref={forecastInfoRef}>
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