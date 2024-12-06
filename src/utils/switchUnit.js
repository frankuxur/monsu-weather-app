export default function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32
    return Math.round(fahrenheit * 100) / 100
}