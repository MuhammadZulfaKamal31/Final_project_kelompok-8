export const filterGenreName = (genreList, id) => {
    let genres = []
    if (genreList && id) {
        genres = genreList.filter((genre => {
            return id.includes(genre.id)
        }))
    }

    return genres
}
