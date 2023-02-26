// import { useState } from "react"
import './App.css'
import AlbumsView from "../AlbumsView/AlbumsView"
import ReviewForm from "../ReviewForm/ReviewForm"
import Error from "../Error/Error"
import Album from "../Album/Album"
import Favorites from "../Favorites/Favorites"
import Header from "../Header/Header"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header element={<Header />}/>
      <Routes>
        <Route path="/albums" element={<AlbumsView />} />
          <Route index element={<AlbumsView />} >
        </Route>
        <Route exact path="/album/:albumID" element={<Album/>} />
        <Route exact path="/album/:albumID/reviews" element={<ReviewForm/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />}/>
      </Routes>

    </div>
  )
}


export default App