// import { useState } from "react"
import './App.css'
import AlbumsView from "../AlbumsView/AlbumsView"
import Album from "../Album/Album"
import Favorites from "../Favorites/Favorites"
import Header from "../Header/Header"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header element={<Header />}/>
      <Routes>
        <Route exact path="/" element={<AlbumsView />} />
        <Route exact path="/:albumID" element={<Album />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App