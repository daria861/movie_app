import '../App.css'

const MovieList = (props) => {

    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) =>
                <div className='image-container movie d-flex justify-content-start m-3 pt-3 pb-3' key={index}>
                    <img className='rounded-3' src={movie.Poster} alt='movie' ></img>
                    <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent />
                    </div>
                </div>)}
        </>
    )
}

export default MovieList