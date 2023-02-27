import React, { Component } from "react";
import "./Error.css"
import { Link } from 'react-router-dom';

function Error() {
    return (
      <>
        <div className="Error">404 Not Found</div>
        <Link className="Error" to="/">
          <button className="Error">Go Home</button>
        </Link>
      </>

    )


}

export default Error;