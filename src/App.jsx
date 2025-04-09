import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Navbar from "./components/navbar"
import Footer from "./components/footer"



const App = () => {
  return (
    <BrowserRouter>

          <Navbar />

          <Rutas />
    
          <Footer />

    </BrowserRouter>
  )
}

export default App