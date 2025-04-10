import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="nav-bar">
            <ul className="nav-bar__nav-list">
              <li className="nav-bar__nav-item">
                <a href="index.html" className="nav-bar__nav-link">inicio</a>
              </li>
              <li className="nav-bar__nav-item">
                <a href="" className="nav-bar__nav-link">alta</a>
              </li>
              <li className="nav-bar__nav-item">
                <a href="/src/pages/Nosotros/nosotros.html" className="nav-bar__nav-link">nosotros</a>
              </li>
              <li className="nav-bar__nav-item">
                <a href="/src/pages/contacto/contacto.html" className="nav-bar__nav-link">contacto</a>
              </li>
            </ul>
          </nav>
  )
}

export default Navbar