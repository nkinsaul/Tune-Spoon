import './AlbumsView.css'
import React from 'react'
import { getAlbums } from '../Utilities/APICalls'
import AlbumTile from '../AlbumTile/AlbumTile'

function AlbumsView() {
    const [albums, storeAlbums] = React.useState([])
    const [loading, setload] = React.useState(true)

    const retrieveAlbums = () => {
        getAlbums()
        .then(data => {
            storeAlbums(data)
        })
    }

    React.useEffect(() => {
        retrieveAlbums()
    }, [])

    return (
      <div className="albums-view">
        {/* {(loading) && <p>Loading...</p>} */}
        {(albums) && albums.map((album, index) => {
            return (
                <AlbumTile album={album} key={index} />
            )
        })}

      </div>
    )
  }
  
  export default AlbumsView