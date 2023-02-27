import './AlbumTile.css'
import { Link } from 'react-router-dom'

const AlbumTile = ({album}) => {
    return (
      <div className="album-tile">
        <Link to={{
            pathname: `/${album.id}`
        }}>
        <img
            className="album-image"
            src={album.image}
            alt={`${album.title}`}
        />
        </Link>
      </div>
    )
  }
  
  export default AlbumTile