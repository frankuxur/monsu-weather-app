const SettingBar = ({ showSettings, setShowSettings, handleSetTheme, theme, unit, setUnit }) => {
  return (
    <div className={`settings ${showSettings ? 'active' : ''}`}>
        <header className="settings__header">
            <div className='settings__title'>Settings</div>

            <button onClick={() => setShowSettings(false)} className="settings__close">
                <i className="ri-close-line icon"></i>            
            </button>
        </header>

        {/* to switch between themes (dark/light) */}
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

            {/* to switch between units (°C/°F) */}
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
  )
}

export default SettingBar