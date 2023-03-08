export const filterGenreName = (genreList, id) => {
    let genres = []
    if (genreList && id) {
        genres = genreList.filter((genre => {
            return id.includes(genre.id)
        }))
    }
    return genres
}
// export const useGetGenresName = (genresList, id) => {
//     //useGetGenresName = (genresList, id)
//     let genres = []
//     if (genresList && id) {
//         genres = genresList.filter((genre => {
//             return id.includes(genre.id)
//         }))

//     }
//     return genres
// }