import { Component } from 'react';
import './styles.css';

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            isFavorite: false,
            isLoading: true
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
            .then(response => response.json())
            .then(data => {
                this.setState({ movie: data, isLoading: false });
            })
            .catch(error => console.error('Error: ', error));
    }

    toggleFavorite = () => {
        this.setState(prevState => ({ isFavorite: !prevState.isFavorite }));
    }

    render() {
        const { movie, isFavorite, isLoading} = this.state;

        if (isLoading) {
            return <h1>Cargando...</h1>
        }

        return (
            <div className="detalle-pelicula">
                <h1>{movie.title}</h1>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} />
                <p><strong>Calificación:</strong> {movie.vote_average}</p>
                <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
                <p><strong>Duración:</strong> {movie.runtime} minutos</p>
                <p><strong>Sinópsis:</strong> {movie.overview}</p>
                <p><strong>Género:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                <button onClick={this.toggleFavorite}>
                    {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                </button>
            </div>
        );
    }
}

export default DetallePelicula;
