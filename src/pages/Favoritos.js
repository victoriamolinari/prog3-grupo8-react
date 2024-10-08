import { Component } from "react";
import Card from '../components/Card/Card';

class Favoritos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const Storage = localStorage.getItem('favoritos')
        if (Storage !== null) {
            const parsedStorage = JSON.parse(Storage);

            Promise.all(
                parsedStorage.map(id =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1d1ffcbd926e19d7721125f17a8319dc`)
                        .then((response) => response.json())
                ))
                .then(movies => {
                    this.setState({ movies, isLoading: false });
                })
                .catch((e) => {
                    console.log("Error:", e);
                })
        }
    }

    quitarFavoritos = (id) => {
        const Movie = this.state.movies.filter(movies => movies.id !== id);
        this.setState({ movies: Movie })

        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            const updatedStorage = parsedStorage.filter(movieId => movieId !== id);
            localStorage.setItem('favoritos', JSON.stringify(updatedStorage));
        }
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return <h1>Cargando...</h1>;
        }

        return (
            <div>
                <h1>Favoritos</h1>
                {this.state.movies.length === 0 ? (
                    <p>No hay favoritos.</p>
                ) : (
                    <ul className="div-section">
                        {this.state.movies.map(movies => (
                            <Card movies={movies} key={movies.id} onRemove={this.quitarFavoritos} />
                        ))}
                    </ul>
                )}
            </div>
        );
    }

}
export default Favoritos;
