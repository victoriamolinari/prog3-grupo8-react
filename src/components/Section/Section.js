import Card from '../Card/Card';
import './styles.css';

import { Component } from 'react';
import { Link } from 'react-router-dom';


class HomeSection extends Component {
    constructor(props) { // recibe sectionName, popular y upcoming
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        // console.log(this.props)
        if (this.props.sectionName == "Populares") {
            this.state.data = this.props.popular
        } else {
            this.state.data = this.props.upcoming
        }


        return (
            <>
                <div className="div-section">
                    <h3 className="h3-section">{this.props.sectionName}</h3>
                    <Link to={"/" + this.props.sectionName.toLowerCase()}><button className="ver-todas-button" onClick={this.props.reset}>Ver todas</button></Link >
                </div>


                <section className="movies-grid">
                    {this.state.data == [] ?
                        <p>Cargando...</p> :
                        this.state.data.map((movies, idx) => (<Card key={idx} movies={movies} />))}
                </section>
            </>
        )
    }
}


export default HomeSection;