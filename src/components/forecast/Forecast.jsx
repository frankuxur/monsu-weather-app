import './forecast.css'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useContext } from 'react'
import { AppContext } from '../../state/context/AppContext'
import icons from '../../assets/json/icons.json'

ChartJS.register (
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Forecast = () => {
  const { weather: { forecast } } = useContext(AppContext)
  const { temperature_2m_max, temperature_2m_min, time, weather_code } = forecast
  const temps = temperature_2m_max.filter((_, i) => i !== 0)

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const newTime = time.map(t => {
    const dayName = days[new Date(t).getDay()]
    const dayNumber = new Date(t).getDate()
    const monthName = months[new Date(t).getMonth()]
    return {
      dayName, dayNumber, monthName
    }
  })
  newTime.shift()
  
  const data = {
    labels: temps,
    datasets: [
        {
          label: '',
          data: temps,
          borderColor: '#CCCCCC',
          cubicInterpolationMode: 'monotone',
        }
    ]
  }  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false, // Hide legend labels
    },
    plugins: {
      legend: {
        display: false,
      } 
    },
    scales: {    
      x: {  
        ticks:{
          display: false 
        },    
        border: {
          display: false
        },   
        grid: {
          color: '#f0f0f0',
        },      
      },
      y: {  
        ticks:{
          display: false
        },   
        border: {
          display: false
        },        
        grid: {
          display: false
        },      
      },
    },  
    events: [],
  }

  return (
    <div className="forecast">
      <header className="forecast__header">
        <h4 className="forecast__title">Forecast</h4>
      </header>

      <div className="forecast__content">
        <div className="forecast__info">
            {temps.map((temp, index) => (
              <div key={index} className="forecast__info-box">
                <i className={`${icons[weather_code[index+1]].icon} icon`}></i>
                <span className="forecast__temp-high">{temp}°</span>
                <span className="forecast__temp-low">{temperature_2m_min[index+1]}° <i className="ri-arrow-down-line icon"></i></span>
              </div>
            ))}
        </div>

        <div className="forecast__chart">
            <Line id='canvas' options={options} data={data} />
        </div>

        <div className="forecast__days">
          {newTime.map(({dayName, dayNumber, monthName}) => (
            <div key={dayNumber} className="forecast__day">
              <span className="forecast__dayName">{dayName}</span>
              <span className="forecast__date">{`${monthName} ${dayNumber}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Forecast