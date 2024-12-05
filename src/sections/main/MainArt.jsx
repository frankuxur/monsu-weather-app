import wave from '../../assets/svgs/wave.svg'

const MainArt = ({ isHover, setIsHover, setShowSearch }) => {
  return ( 
    <div className={`main__art ${isHover ? `active` : ``}`}>
        <div className="main__art-wave">
            <img src={wave} alt="" />
        </div>

        <div className="main__art-top">
            <i className="ri-fire-line icon"></i>
            <i className="ri-sun-line icon"></i>
            <i className="ri-snowflake-line icon"></i>
            <i className="ri-showers-line icon"></i>
        </div>

        <div className="main__art-bottom">
            <i className="ri-global-line icon"></i>

            <button
            onClick={() => setShowSearch(true)}
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="main__art-search"
            >
                <i className="ri-search-line icon"></i>
                <span>search</span>
            </button>
            
            <i className="ri-celsius-line icon"></i>

            <div className="main__art-gemini">
                <i className="ri-shining-fill icon"></i>
                <span>G</span>
            </div>
        </div>
    </div>
  )
}

export default MainArt