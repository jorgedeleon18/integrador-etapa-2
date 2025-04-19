import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Footer from "./components/footer"
import Cabecera from "./components/Cabecera"
import { useState } from "react"




const App = () => {
  const [filterText, setFilterText] = useState("")
  return (
    <BrowserRouter>

          <Cabecera filterText={filterText} onFilterTextChange={setFilterText} />

          <Rutas filterText={filterText}/>
    
          <Footer />

    </BrowserRouter>
  )
}

export default App