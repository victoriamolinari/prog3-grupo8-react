import Card from '../Card/Card';
import './styles.css';

import { Component } from 'react';


class HomeSection extends Component {
    constructor(props) { // recibe sectionName, movies
        super(props);
        this.state = {
            // data: []
        }
    }

    render() {
        return (
            <>
                <section className="movies-grid">
                    {this.props.movies == [] ?
                        <p>Cargando...</p> :
                        this.props.movies.map((movies, idx) => (<Card key={idx} movies={movies} />))}
                </section>
            </>
        )
    }
}


export default HomeSection;