import { useContext, useState } from "react"
import { AppContext } from "../state/context/AppContext"

const useGetWeather = () => {
    const { setWeather, setLoading, setNotFound, resetWeather, query, setQuery } = useContext(AppContext)

    const getWeather = async (text) => {

        if (query.trim().toLowerCase() === text.trim().toLowerCase()) return

        setLoading(true)
        setQuery(text)
        setNotFound(false)
        resetWeather()

        try {
            // weather
            let query = `${import.meta.env.VITE_OPENWEATHER_API}weather?q=${text}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
            let response = await fetch(query)
            let data = await response.json()
            let weather = data

            // air quality
            const { coord: { lon, lat } } = data
            query = `${import.meta.env.VITE_OPENWEATHER_API}air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
            response = await fetch(query)
            data = await response.json()
            const aqi = data.list[0].main.aqi
            weather.aqi = aqi

            // forecast, time & uv index
            query = `${import.meta.env.VITE_FORECAST_API}?latitude=${lat}&longitude=${lon}&current=is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`
            response = await fetch(query)
            data = await response.json()
            const uvIndex = data.daily.uv_index_max[0]
            const time = data.current
            const forecast = data.daily
            weather = {
                ...weather,
                uvIndex,
                time,
                forecast
            }
            
            setWeather(weather)
            
        } catch (error) {
            if (error.message === 'Failed to fetch') {
                setNotFound({ value: true, message: 'Whoopsies! Bad network, check your connection.' })
            } else {
                setNotFound({ value: true, status: 404, message: 'Whoopsies! Looks like we couldn\'t snag the weather report for that spot.' })
            }
            resetWeather()

        } finally {
            setLoading(false)
        }
    }

    return { getWeather }
}

export default useGetWeather