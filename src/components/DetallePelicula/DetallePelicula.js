import { Component } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa6";
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
                const storage = localStorage.getItem('favoritos');
                if (storage !== null) {
                    const parsedStorage = JSON.parse(storage);
                    const esFavorito = parsedStorage.includes(data.id);
                    if (esFavorito) {
                        this.setState({
                            isFavorite: true
                        });
                    }
                }
            })
            .catch(error => console.error('Error: ', error));
    }
    agregarFavorito() {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            parsedStorage.push(this.state.movie.id);
            const stringStorage = JSON.stringify(parsedStorage);
            localStorage.setItem('favoritos', stringStorage);
        } else {
            const primerFavorito = [this.state.movie.id];
            const stringStorage = JSON.stringify(primerFavorito);
            localStorage.setItem('favoritos', stringStorage);
        }
    }
    quitarFavoritos() {
        const storage = localStorage.getItem('favoritos');
        const parsedStorage = JSON.parse(storage);
        const restoFavoritos = parsedStorage.filter(id => id !== this.state.movie.id);
        const stringStorage = JSON.stringify(restoFavoritos);
        localStorage.setItem('favoritos', stringStorage);
        this.setState({
            isFavorite: false
        });
    }

    toggleFavorite = () => {
        this.setState(prevState => ({
            isFavorite: !prevState.isFavorite
        }), () => {
            if (this.state.isFavorite) {
                this.agregarFavorito();
            } else {
                this.quitarFavoritos();
            }
        });
    }

    render() {
        const { movie, isFavorite, isLoading } = this.state;

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
                <div className="favorite-icon" onClick={this.toggleFavorite}>
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </div>
            </div>
        );
    }
}

export default DetallePelicula;
