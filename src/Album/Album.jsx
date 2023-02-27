import './Album.css'
import React, { useState, useEffect }from 'react'
import { Link, useLocation } from 'react-router-dom'
import { render } from "react-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import {getAlbumDetails} from '../Utilities/APICalls'

function Album() {
  const [album, setAlbum] = useState({})

  const location = useLocation();
  const path = location.pathname.split('/')
  const albumID = path[1]

  useEffect(() => {
    getAlbumDetails(albumID)
    .then(album => setAlbum(album[0]))
    .catch(error => error.status)
  })

    return (
      <div>
        <h1>{album.title}</h1>
        <Link to="/">
          <button >GO BACK HOME</button>
        </Link>
        <ReviewForm />
      </div>
    )
  }

 export default Album





