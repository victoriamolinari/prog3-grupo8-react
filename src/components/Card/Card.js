import { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

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
        const { id, title, poster_path, overview } = this.props.movies;

        return (
            <article className="movies-card">
                <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + poster_path} alt={title} className="movies-image" />
                <Link to={"/detalle/id/"+ id}><p className="movies-title">{title}</p></Link>

                <p className={this.state.viewMore ? 'show' : 'hide'}>{overview}</p>
                {<button className="movies-button" onClick={() => this.handleViewMore()}> {this.state.viewMore ? 'Ocultar descripción' : 'Ver descripción'} </button>}
                
                {/* Falta: botón para agregar a favoritos y botón para ir al detalle de cada película */}
                
            </article>
        )
    }
}

export default Card;