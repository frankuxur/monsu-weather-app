const ForecastDays = ({ time }) => {
  return (
    <div className="forecast__days">
        {time.map(({dayName, dayNumber, monthName}) => (
        <div key={dayNumber} className="forecast__day">
          <span className="forecast__dayName">{dayName}</span>
          <span className="forecast__date">{`${monthName} ${dayNumber}`}</span>
        </div>
        ))}
    </div>
  )
}

export default ForecastDays