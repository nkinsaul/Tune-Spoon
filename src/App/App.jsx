import { useState } from "react"
import './App.css'
import Home from "../Home/Home"
import AlbumsView from "../AlbumsView/AlbumsView"
import Album from "../Album/Album"
import Favorites from "../Favorites/Favorites"
import Header from "../Header/Header"

function App() {
  return (
    <div className="App">
      <Header element={<Header />}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumsView />}>
          <Route index element={<AlbumsView />} />
          <Route path=":albumID" element={<Album/>} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App