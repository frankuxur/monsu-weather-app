import './App.css'

// wraps compnents to fade in & out
import FadeInOut from './utils/FadeInOut'

// sections
import Main from './sections/main/Main'
import Header from './sections/header/Header'
import Footer from './sections/footer/Footer'

function App() {

  return (
    <div className="app">
      <div className="app__content">
        {/* header */}
        <FadeInOut show={true} duration={800}>
          <Header />
        </FadeInOut>

        {/* main */}
        <FadeInOut show={true} duration={1000}>
          <Main />
        </FadeInOut>

        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App
