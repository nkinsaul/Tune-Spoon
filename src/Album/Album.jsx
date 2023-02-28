import './Album.css'
import React, { useState, useEffect }from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReviewForm from "../ReviewForm/ReviewForm";
import {getAlbumDetails} from '../Utilities/APICalls'

function Album() {
  const [album, setAlbum] = useState({})

  const location = useLocation();
  const path = location.pathname.split('/')
  const albumID = path[1]

  useEffect(() => {
    getAlbumDetails(albumID)
    .then(album =>  setAlbum(album[0]))
    .catch(error => error.status)
  },[])

    return (
      <div className='album-container'>
        <div className='image-container'>
          <h1>{album.title}</h1>
          <h2>{album.artist}</h2>
          <img className="album-artwork" src={album.image} alt={album.title}/>
          {album['track_list']?.map((track, index) => <p key={index}>{index + 1}.  {track}</p>)}
        </div>
        <div className='details-container'>
          <p>Produced by {album.producer}</p>
          <p>Length: {Math.round(album.length/60)} min.</p>
          <p>{album.description}</p>
          <Link to="/">
          <button >GO BACK HOME</button>
          </Link>
          <ReviewForm />
        </div>
      </div>
    )
  }

 export default Album





