import './AlbumTile.css'
import { Link } from 'react-router-dom'

const AlbumTile = ({album}) => {
    console.log(album)
    return (
      <div className="album-tile">
        <img
            className="album-image"
            src={album.image}
        />
      </div>
    )
  }
  
  export default AlbumTile