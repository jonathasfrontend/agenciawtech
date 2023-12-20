import Princial from "./components/Principal"
import Slides from "./components/Slides"
import Sobre from './components/Sobre'
import Header from "./components/Header"
import Benefits from "./components/Benefits"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Contatowhats from "./components/Contatowhats"


function App() {
  return (
    <div className="bgImage">
      <div className="w-full px-36 py-5 bgPd">  
        <Header />
        <Princial />
        <Sobre />
        <Slides />
      </div>
      <Contatowhats />
      <div className="w-full px-36 py-5 bgPd">
        <Benefits />
        <Contato />
      </div>
      <Footer />
    </div>
  )
}

export default App
