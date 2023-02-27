import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
      <div className="header">
        <Link to={'/'}>
            <button className="header-button">Home</button>
        </Link>
        <h1>Tune Spoon</h1>
        <Link to={'/favorites'}>
            <button className="header-button">Favorites</button>
        </Link>
      </div>
    )
  }
  
  export default Header