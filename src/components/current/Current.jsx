// import './current.css'
import './current-bar.css'

const Current = () => {
  return (
    <div className="current">
      {/* name */}
      {/* date & time */}
      {/* icon */}
      {/* climate */}
      {/* wind speed & direction */}
      {/* humidity */}
      {/* pressure */}
      {/* uv index */}
      {/* air quality */}
      {/* temp */}
      
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
            <h4 className="current__title">Los Angeles</h4>
            <div className="current__climate">Shower</div>
          </div>
          <i className="ri-showers-line icon"></i>
        </div>
        <div className="current__temp">19<span>°C</span></div>
      </div>

      <div className="current__time">
        <div className="current__date">June <span>30</span></div>
        <div className="current__hour"><span>07:04</span> AM</div>

        <ul className="current__week">
          <li className="current__day">m</li>
          <li className="current__day">t</li>
          <li className="current__day">w</li>
          <li className="current__day active">t</li>
          <li className="current__day">f</li>
          <li className="current__day">s</li>
          <li className="current__day">s</li>
        </ul>
      </div>
      
      <div className="current__humidity">
        <div className="current__label">Humidity</div>
        <div className="current__bar">
          <span>72%</span>
        </div>
      </div>
    
      <div className="current__stats">
        <div className="current__wind">
          <div className="current__label">Wind</div>
          <i className="ri-windy-line icon"></i>
          <span className='speed'><span>2</span> mph</span>
        </div>

        <div className="current__pressure">
          <div className="current__label">Pressure</div>
          <i className="ri-focus-2-line icon"></i>
          <span><span>1016</span> mb</span>
        </div>

        <div className="current__air-quality">
          <div className="current__label">Air Quality</div>
          <i className="ri-loader-line icon"></i>
          <span>Good</span>
        </div>

        <div className="current__uv-index">
          <div className="current__label">UV Index</div>
          <i className="ri-sun-line icon"></i>
          <span><span>5.7</span></span>
        </div>
      </div>
    </div>
  )
}

export default Current