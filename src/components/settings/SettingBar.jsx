const SettingBar = ({ showSettings, setShowSettings, handleSetTheme, theme, unit, setUnit, showSearch, setShowSearch }) => {
  return (
    <div className={`settings ${showSettings ? 'active' : ''}`}>

        <header className="settings__header">
            <div className='settings__title'>Navigate</div>

            <button onClick={() => setShowSettings(false)} className="settings__close">
                <i className="ri-close-line icon"></i>            
            </button>
        </header>
        
        <div className="settings__options">
            <button 
                onClick={() => setShowSearch(false)}
                className={`settings__button ${!showSearch ? 'active' : ''}`}
            >
                <div className="dot"></div>
                <i className="ri-home-line icon"></i>

                <div>Home</div>
            </button>

            <button 
                onClick={() => setShowSearch(true)}
                className={`settings__button ${showSearch ? 'active' : ''}`}
            >
                <div className="dot"></div>
                <i className="ri-search-line icon"></i>

                <div>Search</div>
            </button>
        </div>        

        <header className="settings__header">
            <div className='settings__title'>Unit</div>
        </header>
        
        <div className="settings__options">
            <button 
                onClick={() => setUnit('celsius')} 
                className={`settings__button unit ${unit === 'celsius' ? 'active' : ''}`}
            >
                <div className="dot"></div>
                <i className="ri-celsius-line icon"></i>

                <div>Celsius</div>
            </button>

            <button 
                onClick={() => setUnit('fahrenheit')} 
                className={`settings__button unit ${unit === 'fahrenheit' ? 'active' : ''}`}
            >
                <div className="dot"></div>
                <i className="ri-fahrenheit-line icon"></i>

                <div>Fahrenheit</div>
            </button>
        </div>        

        <header className="settings__header">
            <div className='settings__title'>Theme</div>
        </header>
        
        <div className="settings__options">
            <button 
                className={`settings__button theme dark ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => handleSetTheme('dark')}    
            >
                <div className="dot"></div>
                <i className="ri-moon-line icon"></i>

                <div>Dark</div>
            </button>

            <button 
                className={`settings__button theme light ${theme === 'light' ? 'active' : ''}`}
                onClick={() => handleSetTheme('light')}        
            >
                <div className="dot"></div>
                <i className="ri-sun-line icon"></i>

                <div>Light</div>
            </button>
        </div>

        
    </div>
  )
}

export default SettingBar