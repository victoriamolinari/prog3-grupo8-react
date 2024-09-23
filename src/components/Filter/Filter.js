import './styles.css';

import { Component } from 'react';


class Filter extends Component {
    constructor(props) { // recibe filterByRating, filterByRating, stateFilterRating y stateFilterDate
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="filtro">
                <p>Filtrar por: </p>
                <button className={`filter-button ${this.props.filterRating ? "filter" : ""}`} onClick={this.props.filterByRating}>Rating {">"} 7</button>
                <button className={`filter-button ${this.props.filterDate ? "filter" : ""}`} onClick={this.props.filterByDate}>Estrenos de los últimos 2 meses</button>
            </div>
        )
    }
}


export default Filter;