import { useContext, useState } from 'react'
import './settings.css'
import { AppContext } from '../../state/context/AppContext'

const Settings = () => {
    
  const [showSettings, setShowSettings] = useState(false)  
  const { unit, setUnit } = useContext(AppContext)  
  const [theme, setTheme] = useState('dark')

  const handleSetTheme = (newTheme) => {
    document.querySelector('body').setAttribute('data-theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <>
        <button onClick={() => setShowSettings(!showSettings)} className={`settings__open ${showSettings ? '' : 'active'}`}>
            <i className="ri-settings-4-line icon"></i>
        </button>

        <div className={`settings ${showSettings ? 'active' : ''}`}>
        <header className="settings__header">
            <div className='settings__title'>Settings</div>

            <button onClick={() => setShowSettings(false)} className="settings__close">
                <i className="ri-close-line icon"></i>            
            </button>
        </header>

        <div className="settings__options">
            <div className="themes">
                <div>Theme</div>

                <div className="line"></div>

                <button className={`settings__button theme light ${theme === 'light' ? 'active' : ''}`} onClick={() => handleSetTheme('light')}>
                    <div className="dot"></div>
                    <i className="ri-sun-line icon"></i>
                </button>

                <button className={`settings__button theme dark ${theme === 'dark' ? 'active' : ''}`} onClick={() => handleSetTheme('dark')}>
                    <div className="dot"></div>
                    <i className="ri-moon-line icon"></i>
                </button>
            </div>

            <div className="units">
                <div>Units</div>

                <div className="line"></div>

                <button onClick={() => setUnit('celsius')} className={`settings__button unit ${unit === 'celsius' ? 'active' : ''}`}>
                    <div className="dot"></div>
                    <i className="ri-celsius-line icon"></i>
                </button>

                <button onClick={() => setUnit('fahrenheit')} className={`settings__button unit ${unit === 'fahrenheit' ? 'active' : ''}`}>
                    <div className="dot"></div>
                    <i className="ri-fahrenheit-line icon"></i>
                </button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Settings