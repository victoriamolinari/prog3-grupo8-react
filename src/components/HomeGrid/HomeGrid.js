import { Component } from 'react';
import './styles.css';

import HomeSection from '../HomeSection/HomeSection';

class HomeGrid extends Component {

    constructor() {
        super();
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
        // console.log(this.state)
        return (
            <>
                <HomeSection sectionName="Popular" data={this.state.popular.slice(0, 5)} />
                <HomeSection sectionName="Upcoming" data={this.state.upcoming.slice(0, 5)} />
            </>
        )
    }
}

export default HomeGrid;