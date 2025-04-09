import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"

const App = () => {
  return (
    <BrowserRouter>

          <navbar />

          <Rutas />
    
          <footer />

    </BrowserRouter>
  )
}

export default App