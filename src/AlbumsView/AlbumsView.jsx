import './AlbumsView.css'
import React from 'react'
import { getAlbums } from '../Utilities/APICalls'
import AlbumTile from '../AlbumTile/AlbumTile'

function AlbumsView() {
    const [albums, storeAlbums] = React.useState([])
    const [loading, setload] = React.useState(true)
    const [error, setError] = React.useState('')

    const retrieveAlbums = () => {
        getAlbums()
        .then(data => {
            storeAlbums(data)
            setload(false)
        })
        .catch(err => {
            setError(err)
            setload(false)
        })
    }

    React.useEffect(() => {
        retrieveAlbums()
    }, [])

    return (
      <div className="albums-view">
        {(loading) && <p>Loading...</p>}
        {(albums) && albums.map((album, index) => {
            return (
                <AlbumTile album={album} key={index} />
            )
        })}
        {(error) && <p>An error occured please try again later.</p>}  
      </div>
    )
  }
  
  export default AlbumsView