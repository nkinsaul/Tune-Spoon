import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
      <div className="Header">
        <Link to={'/'}>
            <button>Home</button>
        </Link>
        <h1>Tune Spoon</h1>
        <Link to={'/favorites'}>
            <button>Favorites</button>
        </Link>
      </div>
    )
  }
  
  export default Header