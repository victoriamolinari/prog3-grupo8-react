import Movie from "../Card/Card"
import "../HomeSection/HomeSection"
import './styles.css';

const SearchGrid = ({movies}) => {
    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <Movie key={movie.id} movies={movie} />
            ))}
        </div>
    )
}

export default SearchGrid