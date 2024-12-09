// accepts date & time in string format and parses it
export default function parseDateTime(timestamp) {
  const dateObj = new Date(timestamp)

  // Get the month name
  const optionsMonth = { month: 'long' }
  const month = dateObj.toLocaleDateString('en-US', optionsMonth)

  // Get the day with a leading zero
  const day = String(dateObj.getDate()).padStart(2, '0')

  // Get the time components
  const hours = String(dateObj.getHours() % 12 || 12).padStart(2, '0') // 12-hour format with leading zero
  const minutes = String(dateObj.getMinutes()).padStart(2, '0') // Zero-padded minutes
  const meridian = dateObj.getHours() >= 12 ? 'PM' : 'AM'

  // Combine hours and minutes into the time
  const time = `${hours}:${minutes}`

  // Get the day index (0 = Sunday, 6 = Saturday)
  const dayIndex = dateObj.getDay()

  return {
    month,      // e.g., "December"
    day,        // e.g., "05"
    time,       // e.g., "09:30"
    meridian,   // e.g., "PM"
    dayIndex,   // e.g., 4 (for Thursday)
  }
}