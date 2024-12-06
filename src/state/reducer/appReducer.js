export const initialState = {
    // place: '',
    // main: {},
    // timezone: null,
    // visibility: null,
    // weather: {},
    // wind: {},
    // aqi: null,
    // time: '',
    // uvIndex: null,
    current: {},
    forecast: {},
    loading: false,
    notFound: false,
}

const appReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_WEATHER':
            const { name, main, timezone, visibility, weather, wind, aqi, time, forecast, uvIndex } = payload
            return {
                ...state,
                forecast,
                current: {
                    place: name,
                    main,
                    timezone,
                    visibility,
                    weather,
                    wind,
                    aqi,
                    time,
                    uvIndex
                }
            }    
        case 'RESET_WEATHER':
            return {
                ...state,
                current: {},
                forecast: {}
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: payload
            }
        case 'SET_NOTFOUND':
            return {
                ...state,
                notFound: payload
            }
        default:
            break;
    }
}

export default appReducer