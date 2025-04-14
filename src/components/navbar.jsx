import MenuItems from '../constants/MenuItems'
import './Navbar.scss'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <nav className="nav-bar">
            <ul className="nav-bar__nav-list">

              {
                MenuItems.map((item) => (
                <NavItem item={item} key={item.id}/>
                ))
              }

            </ul>
          </nav>
  )
}

export default Navbar