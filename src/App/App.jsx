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
      <Header />
      <Routes>
        <Route path="/" element={<AlbumsView />}>
          <Route index element={<AlbumsView />} />
          <Route path=":albumID" element={<Album/>} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App