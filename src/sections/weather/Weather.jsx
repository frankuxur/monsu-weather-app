import './weather.css'
import Current from '../../components/current/Current'
import Forecast from '../../components/forecast/Forecast'
import { useContext } from 'react'
import { AppContext } from '../../state/context/AppContext'

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Weather = ({ showSearch }) => {

  const { current, forecast, loading, notFound } = useContext(AppContext)
  
  // gsap stagger
  useGSAP(() => {
    if (Object.keys(current).length) {
      gsap.from('.weather', {
        opacity: 0,
        y: 4,
        duration: 1,
        delay: 0.1,
        ease: 'power2.inOut',
      })
    }
  }, [current])

  // error handle
  if (notFound.value) {
    return (
      <div className="not-found">
        <h1>{notFound.message}</h1>
        <span>{notFound.status || (
          <i className="ri-signal-wifi-error-line icon"></i>
        )}</span>
      </div>
    )
  }

  // return null when data in state is empty
  if (!loading && !showSearch && !Object.keys(current).length && !Object.keys(forecast).length) {
    return null
  }

  if (showSearch && !Object.keys(current).length && !Object.keys(forecast).length) {
    return (
      <div className="globe">
        <i className="ri-globe-line icon"></i>
      </div>
    )
  }

  // display weather data when it is fetched and stored in state
  return (
    <>
      {showSearch ? (
        <div className="weather">
          <div className="weather__content">
            {/* 1 - today's weather */}
            <Current />
            {/* 2 - forecast */}
            <Forecast />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Weather