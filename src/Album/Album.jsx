import './Album.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

function Album() {

  const location = useLocation();
  const albumId = location.pathname
  console.log('id', albumId);

    return (
      <div className="Album">
        <h1>{albumId}</h1>
      </div>
    )
  }
  
  export default Album