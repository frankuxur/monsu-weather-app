import { useContext, useEffect, useState } from 'react'
import icons from '../assets/json/icons.json'
import { AppContext } from '../state/context/AppContext'
import parseDateTime from '../helpers/parseDateTime'

const useGetCurrent = () => {
  
    const [humidityPercentage, setHumidityPercentage] = useState(10)
    const { current, unit } = useContext(AppContext)
    const { place, main: { temp, pressure, humidity }, visibility, weather: [ { description, icon } ], wind: { speed, deg }, aqi, time: { time }, uvIndex } = current || {}
  
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
  
    // setting humidity% at 0.5s after component render to delay animation effect
    useEffect(() => {
      setTimeout(() => {
        setHumidityPercentage(humidity)
      }, 500);
    }, [current]) 

    const daysInitials = ['s', 'm', 't', 'w', 't', 'f', 's']

    return { place, description, weatherIcon, unit, temp, month, day, time: t, meridian, dayIndex, humidityPercentage, humidity, speed, deg, aqiText, visibility, uvIndex, pressure, daysInitials }

}

export default useGetCurrent