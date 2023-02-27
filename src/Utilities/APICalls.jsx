export const getAlbums = () => {
    return (
        fetch('http://localhost:8080/albums')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error()
            }
        })
    )
}

export const getAlbumDetails = (albumID) => {
  return (
    fetch(`http://localhost:8080/album/${albumID}`)
    .then(response => {
      if (!response.ok) {
        throw new Error()
      } else {
        return response.json()
      }
    })
  )
}

