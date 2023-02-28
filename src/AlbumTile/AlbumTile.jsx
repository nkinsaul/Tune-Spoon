import './AlbumTile.css'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

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

  AlbumTile.propTypes = {
    album: PropTypes.shape({
        artist: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        favorite: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired
    }).isRequired
  }