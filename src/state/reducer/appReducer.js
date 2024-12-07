export const initialState = {
    query: '',
    current: {},
    forecast: {},
    loading: false,
    notFound: { value: false, message: '' },
    unit: 'celsius',
}

const appReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_QUERY':
            return {
                ...state,
                query: payload
            }
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
        case 'SET_UNIT':
            return {
                ...state,
                unit: payload
            }
        default:
            break;
    }
}

export default appReducer