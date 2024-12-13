import { useContext, useEffect, useState } from 'react'
import icons from '../assets/json/icons.json'
import { AppContext } from '../state/context/AppContext'
import parseDateTime from '../helpers/parseDateTime'

// custom hook: retrieves Current Weather stored in state handled by userReducer, shared via context & organizes them in a presentable format
const useGetCurrent = () => {
  
  const [humidityPercentage, setHumidityPercentage] = useState(10)
  const { current, unit } = useContext(AppContext)
  const { place, main: { temp, pressure, humidity }, visibility, weather: [ { description, icon } ], wind: { speed, deg }, aqi, components, time: { time }, uvIndex } = current || {}

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

  const daysInitials = ['s', 'm', 't', 'w', 't', 'f', 's']

  const newComponents = Object.entries(components)

  // setting humidity% at 0.5s after component render to delay animation effect
  useEffect(() => {
    setTimeout(() => {
      setHumidityPercentage(humidity)
    }, 500);
  }, [current]) 

  return { place, description, weatherIcon, unit, temp, month, day, time: t, meridian, dayIndex, humidityPercentage, humidity, speed, deg, aqiText, pollutants: newComponents, visibility, uvIndex, pressure, daysInitials }

}

export default useGetCurrent