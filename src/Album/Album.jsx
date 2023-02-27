// import './Album.css'
import { Link } from 'react-router-dom'
// import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import React from 'react';

function Album() {
    return (
      <div className="Album">
        <h1>album</h1>
      </div>
    )
  }




// class Album extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             totalReactPackages: null
//         };
//     }

//     componentDidMount() {
//         // Simple GET request using fetch
//         fetch('http://localhost:3000/albums/reviews')
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .then(data => this.setState({ totalReactPackages: data }))
           
//     }

//     render() {
//         const { totalReactPackages } = this.state;
//         return (
//             <div className="card text-center m-3">
//                 <h5 className="card-header">Simple GET Request</h5>
//                 <div className="card-body">
//                     Total react packages: {totalReactPackages}
//                 </div>
//             </div>
//         );
//     }
// }

  
 export default Album





