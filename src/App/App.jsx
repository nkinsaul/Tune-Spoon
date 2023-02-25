import { useState } from "react"
import './App.css'
import Home from "../Home/Home"

function App() {
  return (
    <div className="App">
      <Header />
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