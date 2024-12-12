const Pollutants = ({ pollutants }) => {
    
  return (
    <div className="pollutants">
      <div className="pollutants__title">
        Pollutant concentration in <span>μg/m3</span>
      </div>

      <ul className="pollutants__list">
        {pollutants.map(([key, value]) => (
        <li key={key} className="pollutant">
            <div className='pollutant__key'>{key}</div>
            <div className="pollutant__value">{value}</div>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Pollutants