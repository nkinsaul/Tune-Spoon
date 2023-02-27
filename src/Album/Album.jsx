// import './Album.css'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import React from 'react';

function Album() {

  const location = useLocation();
  const albumId = location.pathname
  console.log('id', albumId);

    return (
      <div>
        <h1>{SINGLE ALBUM VIEWId}</h1>
        <Link to="/">
          <button >GO BACK HOME</button>
        </Link>
        <ReviewForm />
      </div>
    )
  }

 export default Album





