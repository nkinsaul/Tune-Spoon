export const getAlbums = () => {
    return (
        fetch('https://tune-spoon-db-v1.herokuapp.com/albums')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Something went wrong')
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

