import './Album.css'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import ReviewForm from "../ReviewForm/ReviewForm";


function Album() {
  const location = useLocation();
  const path = location.pathname.split('/')
  const id = path[1]

  const getAlbum = (id) => {
    fetch(`http://localhost:3000/album/${id}`)
  }

    return (
      <div>
        <h1>{id}</h1>
        <Link to="/">
          <button >GO BACK HOME</button>
        </Link>
        <ReviewForm />
      </div>
    )
  }

 export default Album





