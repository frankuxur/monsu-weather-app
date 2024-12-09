import { useContext, useState } from 'react'
import './settings.css'
import { AppContext } from '../../state/context/AppContext'
import SettingButton from './SettingButton'
import SettingBar from './SettingBar'

const Settings = () => {
    
  const [showSettings, setShowSettings] = useState(false)  
  const { unit, setUnit } = useContext(AppContext)  
  const [theme, setTheme] = useState('dark')

  // setting 'data-theme' attribute in the body tag to switch between themes
  const handleSetTheme = (newTheme) => {
    document.querySelector('body').setAttribute('data-theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <>
        {/* setting button */}
        <SettingButton showSettings={showSettings} setShowSettings={setShowSettings} />

        {/* setting bar */}
        <SettingBar 
            showSettings={showSettings} 
            setShowSettings={setShowSettings} 
            handleSetTheme={handleSetTheme} 
            theme={theme}  
            unit={unit}  
            setUnit={setUnit}  
        />
    </>
  )
}

export default Settings