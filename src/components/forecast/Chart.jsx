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

// registering plugins to change deault behaviour of the chart
ChartJS.register (
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Chart = ({ temps }) => {
  
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
    <div className="forecast__chart">
      <Line id='canvas' options={options} data={data} />
    </div>
  )
}

export default Chart