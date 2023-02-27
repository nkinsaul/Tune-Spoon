import './AlbumsView.css'
import React from 'react'
import { getAlbums } from '../Utilities/APICalls'

function AlbumsView() {
    const [albums, storeAlbums] = React.useState([])

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
      <div className="AlbumsView">
        <h1>hi</h1>
      </div>
    )
  }
  
  export default AlbumsView