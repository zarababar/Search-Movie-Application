const MovieCard = ({movie}) => {

    return (
        <div>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Year: {movie.Year}</p>
        </div>

    )
}
export default MovieCard;