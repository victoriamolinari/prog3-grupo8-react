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

    handleViewMore() {
        this.setState({
            viewMore: !this.state.viewMore
        })
    }

    hanldeFav() {
        this.setState({
            fav: !this.state.fav
        })
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
                    {<div onClick={() => this.hanldeFav()} > {this.state.fav ? <FaHeart /> : <FaRegHeart />} </div>}
                    {/* Falta hacerlo funcional */}
                </div>

            </article>
        )
    }
}

export default Card;