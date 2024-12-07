import './header.css'

const Header = () => {
  return (
    <header className="header">
      <a className='header__link' href="https://www.ashishfrank.com" target='_blank'>
        <div>
          <div className='top'>
            <span>a</span>
            <span>fr<i>a</i>nk</span>
          </div>
          
          <div className='bottom'>creation</div>
        </div>
      </a>
    </header>
  )
}

export default Header