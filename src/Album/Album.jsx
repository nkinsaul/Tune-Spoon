// import './Album.css'
import { Link } from 'react-router-dom'
// import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import React from 'react';

function Album() {
    return (
      <div>
        <h1>SINGLE ALBUM VIEW</h1>
        <Link to="/">
          <button >GO BACK HOME</button>
        </Link>
        <ReviewForm />
      </div>
    )
  }

 export default Album





