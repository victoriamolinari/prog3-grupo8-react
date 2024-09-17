import Card from '../Card/Card';
import './styles.css';

import { Component } from 'react';
import { Link } from 'react-router-dom';


class HomeSection extends Component {
    constructor(props) { // recibe sectionName y data
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props.data)
        return (
            <>
                <div className="div-section">
                    <h3 className="h3-section">{this.props.sectionName}</h3>
                    <Link to="/populares"><button className="ver-todas-button">Ver todas</button></Link >
                </div>


                <section className="movies-grid">
                    {this.props.data == undefined ?
                        <p>Cargando...</p> :
                        this.props.data.map((movies, idx) => (<Card key={idx} movies={movies} />))}
                </section>
            </>
        )
    }
}


export default HomeSection;