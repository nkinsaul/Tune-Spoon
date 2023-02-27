import './Header.css'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

function Header() {
    const locationData = useLocation()
    const activePage = locationData.pathname

    return (
      <div className="header">
        <Link to={'/'}>
            {(activePage == '/') 
            ? <button className="header-button active">Home</button>
            : <button className="header-button">Home</button>
        }
            
        </Link>
        <h1>Tune Spoon</h1>
        <Link to={'/favorites'}>
            <button className="header-button">Favorites</button>
        </Link>
      </div>
    )
  }
  
  export default Header