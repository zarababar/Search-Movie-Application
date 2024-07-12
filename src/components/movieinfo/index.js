const MovieInfo = ({ detail }) => {
    return (

        <>
            <p><strong>Year:</strong> {detail.Year}</p>
            <p><strong>Rated:</strong> {detail.Rated}</p>
            <p><strong>Released:</strong> {detail.Released}</p>
            <p><strong>Runtime:</strong> {detail.Runtime}</p>
            <p><strong>Genre:</strong> {detail.Genre}</p>
            <p><strong>Director:</strong> {detail.Director}</p>
            <p><strong>Writer:</strong> {detail.Writer}</p><p>
                <strong>Actors:</strong> {detail.Actors}</p><p>
                <strong>Plot:</strong> {detail.Plot}</p><p>
                <strong>Language:</strong> {detail.Language}</p>
            <p><strong>Country:</strong> {detail.Country}</p>
            <p><strong>Awards:</strong> {detail.Awards}</p>
            <p><strong>IMDb Rating:</strong> {detail.imdbRating}</p>
        </>


    )
}
export default MovieInfo;