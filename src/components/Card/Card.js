import { Component } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

import './styles.css';
import { Link } from 'react-router-dom';

class Card extends Component {

    constructor(props) {        // recibe movies={movies}
        super(props);
        this.state = {
            viewMore: false,
            fav: false
        }
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            const esFavorito = parsedStorage.includes(this.props.movies.id)
            if (esFavorito) {
                this.setState({
                    fav: true
                })
            }
        }
    }

    agregarFavorito() {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            parsedStorage.push(this.props.movies.id)
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', stringStorage)
        } else {
            const primerFavorito = [this.props.movies.id];
            const stringStorage = JSON.stringify(primerFavorito);
            localStorage.setItem('favoritos', stringStorage)
        }
    }

    quitarFavoritos() {
        const storage = localStorage.getItem('favoritos');
        const parsedStorage = JSON.parse(storage);
        const restoFavoritos = parsedStorage.filter(id => id !== this.props.movies.id);
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem('favoritos', stringStorage)
        this.setState({
            fav: false
        })
    }

    handleViewMore() {
        this.setState({
            viewMore: !this.state.viewMore
        })
    }

    handleFav() {
        this.setState({
            fav: !this.state.fav
        },
            () => {
                if (this.state.fav) {
                    this.agregarFavorito();
                } else {
                    this.quitarFavoritos();
                }
            });
    }

    render() {
        const { id, title, poster_path, overview } = this.props.movies;

        return (
            <article className="movies-card">
                <Link to={"/detalle/id/" + id}>
                    <div>
                        <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + poster_path} alt={title} className="movies-image" />
                        <p className="movies-title">{title}</p>
                        <p className={this.state.viewMore ? 'show' : 'hide'}>{overview}</p>
                    </div>
                </Link>


                <div className="div-detalle">
                    {<button className="movies-button" onClick={() => this.handleViewMore()}> {this.state.viewMore ? 'Ocultar descripción' : 'Ver descripción'} </button>}
                    {<div onClick={() => this.handleFav()} > {this.state.fav ? <FaHeart /> : <FaRegHeart />} </div>}
                </div>

            </article>
        )
    }
}

export default Card;