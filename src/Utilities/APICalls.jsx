export const getAlbums = () => {
    return (
        fetch('http://localhost:3001/albums')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error()
            }
        })
    )
}