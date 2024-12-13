const Pollutants = ({ pollutants }) => {

  return (
    <div className="pollutants">
      <div className="pollutants__title">
        Pollutant concentration in <span>μg/m<sup>3</sup></span>
      </div>

      <ul className="pollutants__list">
        {pollutants.map(([key, value]) => (
          <li key={key} className="pollutant">
            <FormattedKey text={key} />
            <div className="pollutant__value">{value}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FormattedKey = ({ text }) => {
  // process the string
  const newString = text
    .toUpperCase() // convert to uppercase
    .replace("_", ".") // replace underscores with periods
    .replace(/(\d+)/g, "<sub>$1</sub>"); // wrap digits in a <sub> tag

  return <div dangerouslySetInnerHTML={{ __html: newString }} />
}

export default Pollutants