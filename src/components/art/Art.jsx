import wave from '../../assets/svgs/wave.svg'
import './art.css'

const Art = ({ isHover, setIsHover, setShowSearch }) => {
  return ( 
    <div className={`art ${isHover ? `active` : ``}`}>
        <div className="art__wave">
            <img src={wave} alt="" />
        </div>

        <div className="art__top">
            <i className="ri-fire-line icon"></i>
            <i className="ri-sun-line icon"></i>
            <i className="ri-snowflake-line icon"></i>
            <i className="ri-showers-line icon"></i>
        </div>

        <div className="art__bottom">
            <i className="ri-global-line icon"></i>

            <button
            onClick={() => setShowSearch(true)}
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="art__search"
            >
                <i className="ri-search-line icon"></i>
                <span>search</span>
            </button>
            
            <i className="ri-celsius-line icon"></i>

            <div className="art__gemini">
                <i className="ri-shining-fill icon"></i>
                <span>G</span>
            </div>
        </div>
    </div>
  )
}

export default Art