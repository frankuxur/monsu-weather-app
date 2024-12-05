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

  
  const temps = [
    22.6,
    23.8,
    23.6,
    22.1,
    21.5,
    21.6
  ]
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
            <div className="forecast__info-box">
              <i className={`ri-showers-line icon icon`}></i>
              <span className="forecast__temp-high">{'21'}°</span>
              <span className="forecast__temp-low">{'13'}° <i className="ri-arrow-down-line icon"></i></span>
            </div>
            
            <div className="forecast__info-box">
              <i className={`ri-showers-line icon icon`}></i>
              <span className="forecast__temp-high">{'21'}°</span>
              <span className="forecast__temp-low">{'13'}° <i className="ri-arrow-down-line icon"></i></span>
            </div>

            <div className="forecast__info-box">
              <i className={`ri-showers-line icon icon`}></i>
              <span className="forecast__temp-high">{'21'}°</span>
              <span className="forecast__temp-low">{'13'}° <i className="ri-arrow-down-line icon"></i></span>
            </div>

            <div className="forecast__info-box">
              <i className={`ri-showers-line icon icon`}></i>
              <span className="forecast__temp-high">{'21'}°</span>
              <span className="forecast__temp-low">{'13'}° <i className="ri-arrow-down-line icon"></i></span>
            </div>

            <div className="forecast__info-box">
              <i className={`ri-showers-line icon icon`}></i>
              <span className="forecast__temp-high">{'21'}°</span>
              <span className="forecast__temp-low">{'13'}° <i className="ri-arrow-down-line icon"></i></span>
            </div>

            <div className="forecast__info-box">
              <i className={`ri-showers-line icon icon`}></i>
              <span className="forecast__temp-high">{'21'}°</span>
              <span className="forecast__temp-low">{'13'}° <i className="ri-arrow-down-line icon"></i></span>
            </div>
        </div>

        <div className="forecast__chart">
            <Line id='canvas' options={options} data={data} />
        </div>

        <div className="forecast__days">
          <div className="forecast__day">
            <span className="forecast__dayName">Mon</span>
            <span className="forecast__date">Dec 7</span>
          </div>
          
          <div className="forecast__day">
            <span className="forecast__dayName">Mon</span>
            <span className="forecast__date">Dec 7</span>
          </div>

          <div className="forecast__day">
            <span className="forecast__dayName">Mon</span>
            <span className="forecast__date">Dec 7</span>
          </div>

          <div className="forecast__day">
            <span className="forecast__dayName">Mon</span>
            <span className="forecast__date">Dec 7</span>
          </div>

          <div className="forecast__day">
            <span className="forecast__dayName">Mon</span>
            <span className="forecast__date">Dec 7</span>
          </div>

          <div className="forecast__day">
            <span className="forecast__dayName">Mon</span>
            <span className="forecast__date">Dec 7</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forecast