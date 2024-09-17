import { Component } from 'react';
import './styles.css';

import Section from '../Section/Section';
import Filter from '../Filter/Filter';

class MoviesGrid extends Component {

    constructor(props) {
        super(props); // recibe sectionName 
        this.state = {
            popular: [],
            popularUnfiltered: [],
            filterRating: false,
            filterDate: false
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=33e10f642f640258287c658cad162391') // API = 33e10f642f640258287c658cad162391
            .then(response => response.json())
            .then(data => this.setState({ popular: data.results, popularUnfiltered: data.results }))
            .catch(error => console.error('Error: ', error));

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=33e10f642f640258287c658cad162391')
            .then(response => response.json())
            .then(data => this.setState({ upcoming: data.results, upcomingUnfiltered: data.results }))
            .catch(error => console.error('Error: ', error));
    }

    filterByRating = () => {
        if (this.state.filterRating === false) {
            const { popular } = this.state
            const filteredMovies = popular.filter(movie => movie.vote_average >= 7);
            this.setState({ popular: filteredMovies });
            this.handleFilterRating();
        } else {
            this.setState({ popular: this.state.popularUnfiltered })
            this.handleFilterRating();
        }

    }

    filterByDate = () => {

        if (this.state.filterDate === false) {
            const { popular } = this.state;
            const filteredMovies = popular.filter(movie => {
                const releaseYear = Number(movie.release_date.split("-")[0]);
                const releaseMonth = Number(movie.release_date.split("-")[1]);
                return releaseYear == 2024 && releaseMonth >= 7;
            });
            
            this.setState({ popular: filteredMovies });
            this.handleFilterDate();

        } else {
            this.setState({ popular: this.state.popularUnfiltered });
            this.handleFilterDate();
        }
    }

    handleFilterRating() {
        this.setState({ filterRating: !this.state.filterRating });
    }

    handleFilterDate() {
        this.setState({ filterDate: !this.state.filterDate });
    }

    reset = () => { // arrow function porque la necesito en otro componente
        this.setState({ popular: this.state.popularUnfiltered, filterRating: false, filterDate: false });
    }

    render() {
        return (
            <>
                <Filter filterByRating={this.filterByRating} filterByDate={this.filterByDate} filterRating={this.state.filterRating} filterDate={this.state.filterDate} />
                <Section sectionName={this.props.sectionName} popular={this.state.popular} upcoming={this.state.upcoming} reset={this.reset} />
            </>
        )
    }
}

export default MoviesGrid;