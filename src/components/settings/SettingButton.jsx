const SettingButton = ({ showSettings, setShowSettings }) => {
  return (
    <button onClick={() => setShowSettings(!showSettings)} className={`settings__open ${showSettings ? '' : 'active'}`}>
      <i className="ri-settings-4-line icon"></i>
    </button>
  )
}

export default SettingButton