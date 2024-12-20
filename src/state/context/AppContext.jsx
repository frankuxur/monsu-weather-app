import { createContext, useReducer } from "react";
import appReducer, { initialState } from "../reducer/appReducer";

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const setQuery = (payload) => {
        dispatch({ type: 'SET_QUERY', payload })
    }

    const setWeather = (payload) => {
        dispatch({ type: 'SET_WEATHER', payload  })
    }

    const resetWeather = () => {
        dispatch({ type: 'RESET_WEATHER'  })
    }

    const setLoading = (payload) => {
        dispatch({ type: 'SET_LOADING', payload  })
    }

    const setNotFound = (payload) => {
        dispatch({ type: 'SET_NOTFOUND', payload  })
    }

    const setUnit = (payload) => {
        dispatch({ type: 'SET_UNIT', payload  })
    }

    const value = {
        query: state.query,
        setQuery,
        current: state.current,
        forecast: state.forecast,
        setWeather,
        loading: state.loading,
        setLoading,
        notFound: state.notFound,
        setNotFound,
        resetWeather,
        unit: state.unit,
        setUnit,

    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}