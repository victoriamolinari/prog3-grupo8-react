import { Component } from 'react';
import './styles.css';

import Section from '../Section/Section';

class MoviesGrid extends Component {

    constructor(props) {
        super(props); // recibe sectionName 
        this.state = {
            popular: [],
            upcoming: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=33e10f642f640258287c658cad162391') // API = 33e10f642f640258287c658cad162391
            .then(response => response.json())
            .then(data => this.setState({ popular: data.results }))
            .catch(error => console.error('Error: ', error));

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=33e10f642f640258287c658cad162391')
            .then(response => response.json())
            .then(data => this.setState({ upcoming: data.results }))
            .catch(error => console.error('Error: ', error));
    }


    render() {
        return (
            <>
                <Section sectionName={this.props.sectionName} popular={this.state.popular} upcoming={this.state.upcoming} />
            </>
        )
    }
}

export default MoviesGrid;