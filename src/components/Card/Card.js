import { Component } from 'react';
import './styles.css';

class Card extends Component {

    constructor(props) {        // recibe movies={movies}
        super(props);
        this.state = {
            viewMore: false
        }
    }

    handleViewMore() {
        this.setState({
            viewMore: !this.state.viewMore
        })
    }

    render() {
        const { title, poster_path, overview } = this.props.movies;

        return (
            <article className="movies-card">
                <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + poster_path} alt={title} className="movies-image" />
                <p className="movies-title">{title}</p>

                <p className={this.state.viewMore ? 'show' : 'hide'}>{overview}</p>
                {<button className="movies-button" onClick={() => this.handleViewMore()}> {this.state.viewMore ? 'Ocultar descripción' : 'Ver descripción'} </button>}
                
                {/* Falta: botón para agregar a favoritos y botón para ir al detalle de cada película */}
                
            </article>
        )
    }
}

export default Card;