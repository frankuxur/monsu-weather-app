import './App.css'

// sections
import Header from './sections/header/Header'
import Main from './sections/main/Main'
import Footer from './sections/footer/Footer'

function App() {

  return (
    <div className="app">
      <div className="app__content">
        {/* header */}
        <Header />

        {/* main */}
        <Main />

        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App
