import { useContext } from "react"
import { AppContext } from "../state/context/AppContext"
import icons from '../assets/json/icons.json'

// custom hook: retrieves Weather Forecast stored in state handled by userReducer, shared via context & organizes them in a presentable format
const useGetForecast = () => {
    
    const { forecast, unit } = useContext(AppContext)

    const { temperature_2m_max, temperature_2m_min, time, weather_code } = forecast
    const temps = temperature_2m_max.filter((_, i) => i !== 0)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const newTime = time.map(t => {
        const dayName = days[new Date(t).getDay()]
        const dayNumber = new Date(t).getDate()
        const monthName = months[new Date(t).getMonth()]
        return {
            dayName, 
            dayNumber, 
            monthName
        }
    })
    newTime.shift()

    return { temps, tempsMin: temperature_2m_min, time: newTime, weatherCode: weather_code, icons, unit }
}

export default useGetForecast