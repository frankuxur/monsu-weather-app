import './footer.css'

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__monsu">
          © 2024 monsu.
        </div>

        <div className="footer__links">
          <div>Links</div>

          <a href="https://www.ashishfrank.com" target='_blank' className="footer__link"><i className="ri-global-line"></i>ashishfrank.com</a>
          
          <a href="mailto:ashishfrank.career@gmail.com" target='_blank' className="footer__link"><i className="ri-mail-line"></i>ashishfrank.career@gmail.com</a>

        </div>
      </div>
    </footer>
  )
}

export default Footer